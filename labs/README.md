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
