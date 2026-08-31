'use strict';

// Grader for Lab L1 — Git & GitHub Fundamentals.
// Validates the file artifacts that demonstrate L1 skills: a well-formed page,
// a proper .gitignore, and a command log covering the core git commands.

const {
  fileExists,
  htmlWellFormed,
  fileContains,
} = require('../_grader/checks');

module.exports = {
  title: 'Lab L1 — Git & GitHub Fundamentals',
  checks: [
    // 1. index.html
    fileExists('index.html', 'Created index.html'),
    htmlWellFormed('index.html', 'index.html is well-formed HTML'),
    fileContains('index.html', /<title>[\s\S]*<\/title>/i, 'index.html has a <title>'),
    fileContains('index.html', /<h1>[\s\S]*<\/h1>/i, 'index.html has an <h1>'),

    // 2. .gitignore ignores the required entries
    fileExists('.gitignore', 'Created .gitignore'),
    fileContains('.gitignore', /^\s*node_modules\/?\s*$/m, '.gitignore ignores node_modules/'),
    fileContains('.gitignore', /^\s*\.env\s*$/m, '.gitignore ignores .env'),

    // 3. COMMANDS.md documents the core commands
    fileExists('COMMANDS.md', 'Created COMMANDS.md'),
    fileContains('COMMANDS.md', /git (init|clone)/, 'COMMANDS.md mentions git init or git clone'),
    fileContains('COMMANDS.md', /git add/, 'COMMANDS.md mentions git add'),
    fileContains('COMMANDS.md', /git commit/, 'COMMANDS.md mentions git commit'),
    fileContains('COMMANDS.md', /git (branch|switch|checkout)/, 'COMMANDS.md mentions branching'),
    fileContains('COMMANDS.md', /git push/, 'COMMANDS.md mentions git push'),
  ],
};
