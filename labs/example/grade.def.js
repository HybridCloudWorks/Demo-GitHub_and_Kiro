'use strict';

// Grader definition for the "example" lab. This proves the harness works end-to-end.
// It checks that the learner produced an index.html that is well-formed and personalized.

const {
  fileExists,
  htmlWellFormed,
  fileContains,
} = require('../_grader/checks');

module.exports = {
  title: 'Example Lab — your first graded page',
  checks: [
    fileExists('index.html', 'Created index.html'),
    htmlWellFormed('index.html', 'index.html is well-formed HTML'),
    fileContains(
      'index.html',
      /<h1>[\s\S]*<\/h1>/i,
      'index.html has an <h1> heading',
    ),
    fileContains(
      'index.html',
      /<title>[\s\S]*<\/title>/i,
      'index.html has a <title>',
    ),
    // Personalization: the learner must replace the placeholder name.
    fileContains(
      'index.html',
      /I built this with GitHub \+ Kiro/i,
      'index.html includes the required sentence',
    ),
  ],
};
