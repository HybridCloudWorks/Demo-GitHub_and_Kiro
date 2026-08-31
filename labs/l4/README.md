# Lab L4 — Write a CI Workflow

Author a GitHub Actions workflow that runs a check on every push and pull request.

## 🎯 The task

Work inside a copy of `starter/`. Create a workflow file at
**`.github/workflows/ci.yml`** (inside the starter folder, so the path is
`starter/.github/workflows/ci.yml`) that:

1. Has a `name:`.
2. Triggers on **both** `push` and `pull_request` (an `on:` section mentioning both).
3. Defines at least one **job** with `runs-on:`.
4. Checks out the code using **`actions/checkout`**.
5. Runs at least one **`run:`** step.

On your real repository, add the same `ci.yml` at `.github/workflows/ci.yml`, push it on a
branch, open a PR, and watch the check run in the **Actions** tab.

## ✅ Checkpoint

- [ ] `ci.yml` exists under `.github/workflows/`.
- [ ] It triggers on push **and** pull_request.
- [ ] It has a job with `runs-on:`, uses `actions/checkout`, and has a `run:` step.
- [ ] On GitHub: the workflow ran on your PR.

## 🧪 How it's graded

```bash
node labs/_grader/grade.js l4 labs/l4/starter    # fails until you finish
node labs/_grader/grade.js l4 labs/l4/solution    # the reference passes
```

CI runs this grader on any pull request that touches `labs/**`.
