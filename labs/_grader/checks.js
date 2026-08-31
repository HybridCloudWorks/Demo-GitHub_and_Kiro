'use strict';

/**
 * Reusable check helpers for lab graders.
 *
 * A "check" is a plain object: { label: string, run: (ctx) => (boolean | {pass, detail}) }
 * where ctx = { dir, path, read, exists }.
 *
 * These helpers return check objects so a lab's grade.def.js reads declaratively, e.g.:
 *
 *   module.exports = {
 *     title: 'Lab 1',
 *     checks: [
 *       fileExists('index.html'),
 *       fileContains('index.html', /<h1>.*<\/h1>/, 'has an <h1> heading'),
 *     ],
 *   };
 */

const fs = require('fs');
const path = require('path');

/** A required file/dir exists relative to the graded directory. */
function fileExists(relPath, label) {
  return {
    label: label || `File exists: ${relPath}`,
    run: (ctx) => ctx.exists(relPath),
  };
}

/** A path does NOT exist (useful for "did you remove X" checks). */
function fileAbsent(relPath, label) {
  return {
    label: label || `File is absent: ${relPath}`,
    run: (ctx) => !ctx.exists(relPath),
  };
}

/** A file's contents match a regex (or include a substring). */
function fileContains(relPath, pattern, label) {
  const desc =
    pattern instanceof RegExp ? pattern.toString() : JSON.stringify(pattern);
  return {
    label: label || `${relPath} matches ${desc}`,
    run: (ctx) => {
      if (!ctx.exists(relPath)) {
        return {pass: false, detail: `missing file: ${relPath}`};
      }
      const content = ctx.read(relPath);
      const ok =
        pattern instanceof RegExp
          ? pattern.test(content)
          : content.includes(pattern);
      return {pass: ok, detail: ok ? '' : `pattern not found: ${desc}`};
    },
  };
}

/** A file's contents do NOT match a regex/substring. */
function fileDoesNotContain(relPath, pattern, label) {
  const desc =
    pattern instanceof RegExp ? pattern.toString() : JSON.stringify(pattern);
  return {
    label: label || `${relPath} does not match ${desc}`,
    run: (ctx) => {
      if (!ctx.exists(relPath)) {
        return {pass: true, detail: ''};
      }
      const content = ctx.read(relPath);
      const found =
        pattern instanceof RegExp
          ? pattern.test(content)
          : content.includes(pattern);
      return {pass: !found, detail: found ? `found: ${desc}` : ''};
    },
  };
}

/** Valid JSON file (optionally passing a predicate on the parsed object). */
function jsonValid(relPath, predicate, label) {
  return {
    label: label || `Valid JSON: ${relPath}`,
    run: (ctx) => {
      if (!ctx.exists(relPath)) {
        return {pass: false, detail: `missing file: ${relPath}`};
      }
      let parsed;
      try {
        parsed = JSON.parse(ctx.read(relPath));
      } catch (e) {
        return {pass: false, detail: `invalid JSON: ${e.message}`};
      }
      if (typeof predicate === 'function') {
        const res = predicate(parsed);
        if (res === true) return {pass: true};
        return {pass: false, detail: typeof res === 'string' ? res : 'predicate failed'};
      }
      return {pass: true};
    },
  };
}

/**
 * Very light HTML "validity" heuristics for beginner labs (no external deps):
 * - has a <!doctype html>
 * - has matching <html>...</html>
 * - every opened tag among a common set has a closing tag count match
 */
function htmlWellFormed(relPath, label) {
  const PAIRED = ['html', 'head', 'body', 'title', 'h1', 'ul', 'ol', 'li', 'p'];
  return {
    label: label || `${relPath} looks like well-formed HTML`,
    run: (ctx) => {
      if (!ctx.exists(relPath)) {
        return {pass: false, detail: `missing file: ${relPath}`};
      }
      // Strip HTML comments so tag names mentioned inside comments don't count.
      const html = ctx
        .read(relPath)
        .toLowerCase()
        .replace(/<!--[\s\S]*?-->/g, '');
      if (!/<!doctype html>/.test(html)) {
        return {pass: false, detail: 'missing <!doctype html>'};
      }
      for (const tag of PAIRED) {
        const open = (html.match(new RegExp(`<${tag}(\\s|>)`, 'g')) || []).length;
        const close = (html.match(new RegExp(`</${tag}>`, 'g')) || []).length;
        if (open !== close) {
          return {
            pass: false,
            detail: `unbalanced <${tag}>: ${open} open vs ${close} close`,
          };
        }
      }
      return {pass: true};
    },
  };
}

module.exports = {
  fileExists,
  fileAbsent,
  fileContains,
  fileDoesNotContain,
  jsonValid,
  htmlWellFormed,
  // low-level fs helpers for custom checks in a lab definition
  _fs: fs,
  _path: path,
};
