# 🧪 Labs

This folder holds the **hands-on exercises** for the course. Each level from L1 onward has at
least one lab. Labs are how you *prove to yourself* (and to an automated grader) that a skill
has clicked.

## How a lab is structured

```text
labs/
├── _grader/            # Shared auto-grading framework (Node.js). You don't edit this.
├── example/            # A tiny sample lab that proves the grader works end-to-end.
│   ├── README.md
│   ├── starter/
│   └── solution/
├── l1/                 # Level 1 lab
│   ├── README.md
│   ├── starter/
│   └── solution/
└── ...
```

Each lab's `README.md` explains:

1. **The task** — what you need to build/do.
2. **The checkpoint** — a self-check list.
3. **How it's graded** — exactly what the automated grader looks for.

## How grading works

Grading is done by a small Node.js script and runs automatically in GitHub Actions
(see [`.github/workflows/grade-labs.yml`](../.github/workflows/grade-labs.yml)).

Run any grader locally:

```bash
node labs/_grader/grade.js <lab-id> <path-to-your-work>
```

For example, to check the reference solution of the example lab:

```bash
node labs/_grader/grade.js example labs/example/solution
```

The grader prints a ✅/❌ checklist and exits with a non-zero code if a required check fails.
When you open a pull request, CI runs the grader for you and reports the result on the PR.

## Doing a lab

1. Copy the lab's `starter/` folder to a working area (or edit in place on a branch).
2. Follow the `README.md`.
3. Run the grader locally until everything is ✅.
4. Commit, push, and open a pull request to see the grader confirm your work.

## For lab authors: how graders are defined

Each lab that is auto-graded has a `grade.def.js` next to its `README.md`:

```js
// labs/<lab-id>/grade.def.js
const { fileExists, fileContains, htmlWellFormed } = require('../_grader/checks');

module.exports = {
  title: 'Human readable lab title',
  checks: [
    fileExists('index.html'),
    htmlWellFormed('index.html'),
    fileContains('index.html', /<h1>.*<\/h1>/i, 'has an <h1>'),
  ],
};
```

Available check helpers (see [`_grader/checks.js`](./_grader/checks.js)):

| Helper | Passes when… |
|--------|--------------|
| `fileExists(path)` | the file/dir exists |
| `fileAbsent(path)` | the path does not exist |
| `fileContains(path, pattern)` | file matches a regex or includes a substring |
| `fileDoesNotContain(path, pattern)` | file does **not** match a regex/substring |
| `jsonValid(path, predicate?)` | file is valid JSON (and predicate returns `true`) |
| `htmlWellFormed(path)` | file has a doctype and balanced common tags |

Mark a check optional with `{ ...fileExists('x'), optional: true }` — optional failures show as
⚠️ and do not fail the run. For anything custom, add a check object with your own
`run: (ctx) => boolean | { pass, detail }` using `ctx.exists`, `ctx.read`, and `ctx.path`.

The [`grade-labs.yml`](../.github/workflows/grade-labs.yml) workflow grades every
`labs/<id>/solution` on push/PR and self-tests that the grader fails a deliberately broken sample.
