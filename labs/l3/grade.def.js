'use strict';

// Grader for Lab L3 — Add a Feature via a Pull Request.
// Checks the feature (an About section) and a PR.md that describes a well-formed PR.

const {
  fileExists,
  htmlWellFormed,
  fileContains,
} = require('../_grader/checks');

// Matches <section ... id="about" ...> ... </section> and captures its inner HTML.
const ABOUT_SECTION = /<section[^>]*id=["']about["'][^>]*>([\s\S]*?)<\/section>/i;

module.exports = {
  title: 'Lab L3 — Add a Feature via a Pull Request',
  checks: [
    fileExists('index.html', 'Created index.html'),
    htmlWellFormed('index.html', 'index.html is well-formed HTML'),
    {
      label: 'index.html has <section id="about"> with an <h2> and a <p>',
      run: (ctx) => {
        if (!ctx.exists('index.html')) {
          return {pass: false, detail: 'missing index.html'};
        }
        const html = ctx.read('index.html');
        const m = html.match(ABOUT_SECTION);
        if (!m) return {pass: false, detail: 'no <section id="about"> found'};
        const inner = m[1];
        const hasH2 = /<h2[\s>][\s\S]*?<\/h2>/i.test(inner);
        const hasP = /<p[\s>][\s\S]*?<\/p>/i.test(inner);
        if (!hasH2) return {pass: false, detail: 'about section missing an <h2>'};
        if (!hasP) return {pass: false, detail: 'about section missing a <p>'};
        return {pass: true};
      },
    },

    // PR.md — describes a well-formed pull request.
    fileExists('PR.md', 'Created PR.md'),
    fileContains('PR.md', /(^|\n)\s*\*{0,2}Title:\*{0,2}\s*\S+/i, 'PR.md has a Title'),
    fileContains('PR.md', /(^|\n)\s*\*{0,2}Branch:\*{0,2}\s*\S+/i, 'PR.md names a Branch'),
    fileContains(
      'PR.md',
      /(Fixes|Closes|Resolves)\s+#\d+/i,
      'PR.md links an issue with a closing keyword (Fixes/Closes/Resolves #n)',
    ),
    // A description that isn't just the TODO placeholder.
    {
      label: 'PR.md has a real description (not the TODO placeholder)',
      run: (ctx) => {
        if (!ctx.exists('PR.md')) return {pass: false, detail: 'missing PR.md'};
        const text = ctx.read('PR.md');
        const afterDesc = text.split(/##\s*Description/i)[1] || '';
        const cleaned = afterDesc.replace(/<!--[\s\S]*?-->/g, '').trim();
        if (/todo/i.test(cleaned) || cleaned.length < 15) {
          return {pass: false, detail: 'write a real description under "## Description"'};
        }
        return {pass: true};
      },
    },
  ],
};
