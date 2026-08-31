#!/usr/bin/env node
'use strict';

/**
 * Lab auto-grader.
 *
 * Usage:
 *   node labs/_grader/grade.js <lab-id> <path-to-work>
 *
 * Example:
 *   node labs/_grader/grade.js example labs/example/solution
 *
 * It loads labs/<lab-id>/grade.def.js (a { title, checks[] } module), runs each
 * check against <path-to-work>, prints a ✅/❌ checklist, and exits non-zero if
 * any REQUIRED check fails — so CI can fail a pull request automatically.
 *
 * A check may be marked optional with { optional: true }; optional failures are
 * reported as ⚠️ and do not fail the run.
 */

const fs = require('fs');
const path = require('path');

function fail(msg) {
  console.error(`\n✖ ${msg}\n`);
  process.exit(2);
}

const [, , labId, workPathArg] = process.argv;

if (!labId || !workPathArg) {
  fail('Usage: node labs/_grader/grade.js <lab-id> <path-to-work>');
}

const repoRoot = path.resolve(__dirname, '..', '..');
const labDir = path.join(repoRoot, 'labs', labId);
const defPath = path.join(labDir, 'grade.def.js');

if (!fs.existsSync(defPath)) {
  fail(`No grader definition found for lab "${labId}" (expected ${path.relative(repoRoot, defPath)})`);
}

const workDir = path.resolve(process.cwd(), workPathArg);
if (!fs.existsSync(workDir)) {
  fail(`Work path does not exist: ${workPathArg}`);
}

// eslint-disable-next-line import/no-dynamic-require, global-require
const def = require(defPath);
if (!def || !Array.isArray(def.checks)) {
  fail(`Grader definition for "${labId}" must export { title, checks: [...] }`);
}

// Context handed to each check.
const ctx = {
  dir: workDir,
  path: (rel) => path.join(workDir, rel),
  exists: (rel) => fs.existsSync(path.join(workDir, rel)),
  read: (rel) => fs.readFileSync(path.join(workDir, rel), 'utf8'),
};

console.log(`\n📋 Grading: ${def.title || labId}`);
console.log(`   Work:  ${path.relative(repoRoot, workDir) || '.'}\n`);

let requiredFailures = 0;
let optionalFailures = 0;
let passed = 0;

for (const check of def.checks) {
  let result;
  try {
    result = check.run(ctx);
  } catch (e) {
    result = {pass: false, detail: `check threw: ${e.message}`};
  }
  const pass = result === true || (result && result.pass === true);
  const detail = result && result.detail ? result.detail : '';
  const optional = check.optional === true;

  if (pass) {
    passed += 1;
    console.log(`  ✅ ${check.label}`);
  } else if (optional) {
    optionalFailures += 1;
    console.log(`  ⚠️  ${check.label}${detail ? `  — ${detail}` : ''}  (optional)`);
  } else {
    requiredFailures += 1;
    console.log(`  ❌ ${check.label}${detail ? `  — ${detail}` : ''}`);
  }
}

const total = def.checks.length;
console.log(
  `\n— ${passed}/${total} checks passed` +
    (optionalFailures ? `, ${optionalFailures} optional not met` : '') +
    (requiredFailures ? `, ${requiredFailures} required FAILED` : '') +
    ' —\n',
);

if (requiredFailures > 0) {
  console.log('❌ Lab not yet complete. Fix the ❌ items above and re-run.\n');
  process.exit(1);
}

console.log('🎉 All required checks passed. Nice work!\n');
process.exit(0);
