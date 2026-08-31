'use strict';

// Grader for Lab L5 — Author a Steering File.
// Validates a .kiro/steering/conventions.md with inclusion front matter and real content.

const {fileExists, fileContains} = require('../_grader/checks');

const STEERING = '.kiro/steering/conventions.md';

module.exports = {
  title: 'Lab L5 — Author a Steering File',
  checks: [
    fileExists(STEERING, 'Created .kiro/steering/conventions.md'),
    fileContains(
      STEERING,
      /^---[\s\S]*?inclusion:\s*(always|fileMatch|manual)[\s\S]*?---/m,
      'has YAML front matter with an inclusion: field',
    ),
    fileContains(STEERING, /^#\s+\S+/m, 'has a top-level heading'),
    fileContains(STEERING, /^\s*-\s+\S+/m, 'has at least one bullet rule'),
    fileContains(STEERING, /static site/i, 'mentions the project is a static site'),
  ],
};
