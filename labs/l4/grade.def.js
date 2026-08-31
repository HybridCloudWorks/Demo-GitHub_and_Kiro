'use strict';

// Grader for Lab L4 — Write a CI Workflow.
// Validates the structure of .github/workflows/ci.yml without a YAML parser
// (the grader is dependency-free), using targeted content checks.

const {fileExists, fileContains} = require('../_grader/checks');

const WF = '.github/workflows/ci.yml';

module.exports = {
  title: 'Lab L4 — Write a CI Workflow',
  checks: [
    fileExists(WF, 'Created .github/workflows/ci.yml'),
    fileContains(WF, /^\s*name:\s*\S+/m, 'workflow has a name:'),
    fileContains(WF, /^\s*on:\s*$|^\s*on:\s*\S/m, 'workflow has an on: section'),
    fileContains(WF, /\bpush\b/, 'triggers on push'),
    fileContains(WF, /\bpull_request\b/, 'triggers on pull_request'),
    fileContains(WF, /^\s*jobs:\s*$/m, 'workflow has a jobs: section'),
    fileContains(WF, /runs-on:\s*\S+/, 'a job specifies runs-on:'),
    fileContains(WF, /uses:\s*actions\/checkout/, 'checks out code with actions/checkout'),
    fileContains(WF, /^\s*-?\s*run:\s*\S/m, 'has at least one run: step'),
  ],
};
