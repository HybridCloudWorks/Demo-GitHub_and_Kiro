'use strict';

// Grader for the Capstone — validates the integrated end-state:
// app (3 feature sections) + CI workflow + Kiro steering + a documented CAPSTONE.md.

const {fileExists, htmlWellFormed, fileContains} = require('../_grader/checks');

const WF = '.github/workflows/ci.yml';
const STEERING = '.kiro/steering/conventions.md';

function sectionWithHeading(id) {
  const re = new RegExp(
    `<section[^>]*id=["']${id}["'][^>]*>([\\s\\S]*?)<\\/section>`,
    'i',
  );
  return {
    label: `index.html has a <section id="${id}"> with a heading`,
    run: (ctx) => {
      if (!ctx.exists('index.html')) return {pass: false, detail: 'missing index.html'};
      const m = ctx.read('index.html').match(re);
      if (!m) return {pass: false, detail: `no <section id="${id}">`};
      if (!/<h[1-6][\s>][\s\S]*?<\/h[1-6]>/i.test(m[1])) {
        return {pass: false, detail: `section "${id}" has no heading`};
      }
      return {pass: true};
    },
  };
}

module.exports = {
  title: '🏆 Capstone — GitHub + Kiro, end to end',
  checks: [
    // The app
    fileExists('index.html', 'App: index.html exists'),
    htmlWellFormed('index.html', 'App: index.html is well-formed'),
    fileExists('styles.css', 'App: styles.css exists'),
    fileExists('app.js', 'App: app.js exists'),
    sectionWithHeading('about'),
    sectionWithHeading('contact'),
    sectionWithHeading('projects'),

    // CI
    fileExists(WF, 'CI: .github/workflows/ci.yml exists'),
    fileContains(WF, /\bpush\b/, 'CI: triggers on push'),
    fileContains(WF, /\bpull_request\b/, 'CI: triggers on pull_request'),
    fileContains(WF, /runs-on:\s*\S+/, 'CI: job has runs-on'),
    fileContains(WF, /uses:\s*actions\/checkout/, 'CI: checks out code'),

    // Kiro authoring
    fileExists(STEERING, 'Kiro: steering file exists'),
    fileContains(
      STEERING,
      /^---[\s\S]*?inclusion:\s*(always|fileMatch|manual)[\s\S]*?---/m,
      'Kiro: steering has inclusion front matter',
    ),

    // Documented integrated result
    fileExists('CAPSTONE.md', 'Docs: CAPSTONE.md exists'),
    fileContains(
      'CAPSTONE.md',
      /Live URL:[\s*_`<]*https?:\/\/\S+/i,
      'Docs: CAPSTONE.md has a Live URL',
    ),
    fileContains(
      'CAPSTONE.md',
      /branch protection/i,
      'Docs: CAPSTONE.md confirms branch protection',
    ),
    fileContains('CAPSTONE.md', /kiro/i, 'Docs: CAPSTONE.md notes it was built with Kiro'),
  ],
};
