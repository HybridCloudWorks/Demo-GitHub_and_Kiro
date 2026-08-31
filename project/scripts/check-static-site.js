#!/usr/bin/env node
'use strict';

/**
 * Static-site sanity check for the course project.
 *
 * A zero-build static site "builds" simply by existing and being internally
 * consistent. This script verifies:
 *   1. index.html, styles.css, and app.js exist.
 *   2. index.html starts with a doctype and has balanced core tags.
 *   3. Every local asset referenced by index.html (href/src that isn't http(s))
 *      actually exists on disk.
 *
 * Exits non-zero on any problem so CI can fail the build.
 *
 * Usage: node project/scripts/check-static-site.js [projectDir]
 * Default projectDir is the folder containing this script's parent (project/).
 */

const fs = require('fs');
const path = require('path');

const projectDir = path.resolve(
  process.argv[2] || path.join(__dirname, '..'),
);

const problems = [];
const ok = [];

function must(relPath) {
  const p = path.join(projectDir, relPath);
  if (fs.existsSync(p)) {
    ok.push(`exists: ${relPath}`);
    return true;
  }
  problems.push(`missing required file: ${relPath}`);
  return false;
}

// 1. Required files
must('index.html');
must('styles.css');
must('app.js');

// 2. + 3. Inspect index.html
const indexPath = path.join(projectDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const rawHtml = fs.readFileSync(indexPath, 'utf8');
  // Strip HTML comments once, and use the comment-free source for BOTH the
  // tag-balance checks and the local-asset scan so that href/src mentioned
  // inside comments are never treated as real references.
  const html = rawHtml.replace(/<!--[\s\S]*?-->/g, '');
  const lower = html.toLowerCase();

  if (!/<!doctype html>/.test(lower)) {
    problems.push('index.html is missing <!doctype html>');
  } else {
    ok.push('index.html has a doctype');
  }

  for (const tag of ['html', 'head', 'body', 'title']) {
    const open = (lower.match(new RegExp(`<${tag}(\\s|>)`, 'g')) || []).length;
    const close = (lower.match(new RegExp(`</${tag}>`, 'g')) || []).length;
    if (open !== close || open === 0) {
      problems.push(`unbalanced or missing <${tag}> (open=${open}, close=${close})`);
    }
  }

  // Local asset references: href="..." / src="..." that are not absolute URLs,
  // anchors, or data URIs.
  const refRe = /(?:href|src)\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = refRe.exec(html)) !== null) {
    const ref = m[1].trim();
    if (
      /^(https?:)?\/\//i.test(ref) ||
      ref.startsWith('#') ||
      ref.startsWith('data:') ||
      ref.startsWith('mailto:')
    ) {
      continue;
    }
    const clean = ref.split('#')[0].split('?')[0];
    if (!clean) continue;
    const assetPath = path.join(projectDir, clean);
    if (fs.existsSync(assetPath)) {
      ok.push(`local asset resolves: ${ref}`);
    } else {
      problems.push(`index.html references missing local asset: ${ref}`);
    }
  }
}

console.log(`\n🔎 Checking static site in: ${path.relative(process.cwd(), projectDir) || '.'}\n`);
for (const line of ok) console.log(`  ✅ ${line}`);
for (const line of problems) console.log(`  ❌ ${line}`);

if (problems.length > 0) {
  console.log(`\n❌ Static-site check failed with ${problems.length} problem(s).\n`);
  process.exit(1);
}

console.log('\n🎉 Static site looks good.\n');
process.exit(0);
