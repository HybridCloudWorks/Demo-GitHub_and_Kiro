---
id: l4-lab
title: "🧪 Lab: Write a CI Workflow"
sidebar_label: 4. 🧪 Graded Lab
sidebar_position: 5
description: Author a GitHub Actions workflow that runs a check on every push and pull request.
---

# 🧪 Lab: Write a CI Workflow

> **Level:** L4 · **Estimated time:** 30 min · **Prerequisites:** all L4 lessons

Write your own Continuous Integration workflow — the kind of automation that guards every change.

## 🎯 The task

Full instructions and starter files are in the repository at
[`labs/l4/`](https://github.com/your-username/github-kiro-course/tree/main/labs/l4). Create
`.github/workflows/ci.yml` (inside the starter folder) that:

1. Has a `name:`.
2. Triggers on **both** `push` and `pull_request`.
3. Defines a job with `runs-on:`.
4. Checks out the code with `actions/checkout`.
5. Runs at least one `run:` step.

On your real repository, add the same workflow, push it on a branch, open a PR, and watch the
check run in the **Actions** tab.

## Run the grader

```bash
node labs/_grader/grade.js l4 labs/l4/starter    # fails until you finish
node labs/_grader/grade.js l4 labs/l4/solution    # the reference passes 9/9
```

## The project milestone

Level 4 adds automated deployment to the project. The app-deploy workflow lives at
[`.github/workflows/deploy-app.yml`](https://github.com/your-username/github-kiro-course/blob/main/.github/workflows/deploy-app.yml)
and is tagged **`milestone-l4`**.

## ✅ Checkpoint

- [ ] The grader reports all required checks passing.
- [ ] On GitHub: your workflow ran on a pull request.

## ➡️ Next

You've completed Level 4! Continue to **[Level 5 · Kiro Advanced Authoring](/level-5)** to make
Kiro work smarter with steering, specs, and hooks.
