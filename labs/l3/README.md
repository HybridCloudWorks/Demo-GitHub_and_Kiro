# Lab L3 — Add a Feature via a Pull Request

Practice the professional workflow: track work with an issue, build a feature on a branch, and
propose it with a well-formed pull request.

## 🎯 The task

Work inside a copy of `starter/` (a trimmed copy of the project). You will:

1. **Add an About section** to `index.html`: a `<section id="about">` containing an `<h2>` and
   at least one `<p>`.
2. **Write `PR.md`** describing the pull request you would open. It must include:
   - A **Title:** line.
   - A **Branch:** line naming your feature branch (e.g. `add-about-section`).
   - A closing keyword linking an issue: `Fixes #<number>` (or `Closes`/`Resolves`).
   - A short description of the change.

On your real repository, actually do it: open an issue, create the branch, commit, push, and
open the PR that closes the issue.

## ✅ Checkpoint

- [ ] `index.html` has a `<section id="about">` with an `<h2>` and a `<p>`.
- [ ] `index.html` is still well-formed.
- [ ] `PR.md` has Title, Branch, a `Fixes #n` closing keyword, and a description.
- [ ] On GitHub: issue opened, branch pushed, PR opened that closes the issue.

## 🧪 How it's graded

```bash
node labs/_grader/grade.js l3 labs/l3/starter    # fails until you finish
node labs/_grader/grade.js l3 labs/l3/solution    # the reference passes
```

CI runs this grader on any pull request that touches `labs/**`.
