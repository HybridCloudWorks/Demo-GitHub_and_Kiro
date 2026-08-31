---
id: l3-lab
title: "🧪 Lab: Add a Feature via a PR"
sidebar_label: 5. 🧪 Graded Lab
sidebar_position: 6
description: Track an issue, build a feature on a branch, and propose it with a well-formed pull request.
---

# 🧪 Lab: Add a Feature via a Pull Request

> **Level:** L3 · **Estimated time:** 40 min · **Prerequisites:** all L3 lessons

Put the whole collaboration workflow together: an **issue**, a **branch**, a **feature**, and a
**pull request** — with automated checks.

## 🎯 The task

Full instructions and starter files are in the repository at
[`labs/l3/`](https://github.com/your-username/github-kiro-course/tree/main/labs/l3). In a copy
of `labs/l3/starter/` you will:

1. Add an **About section** to `index.html`: a `<section id="about">` with an `<h2>` and a `<p>`.
2. Write **`PR.md`** describing your pull request — a Title, a Branch name, a `Fixes #<n>`
   closing keyword, and a real description.

On your own project repo, actually perform the workflow: open an issue, create a branch, commit
the feature, push, and open a PR whose description closes the issue.

## Run the grader

```bash
node labs/_grader/grade.js l3 labs/l3/starter    # fails until you finish
node labs/_grader/grade.js l3 labs/l3/solution    # the reference passes 8/8
```

## The project milestone

This lab mirrors how the course project itself grew: the **About section** was added to
[`project/`](https://github.com/your-username/github-kiro-course/tree/main/project) via a pull
request and tagged **`milestone-l3`**.

## ✅ Checkpoint

- [ ] The grader reports all required checks passing.
- [ ] On GitHub: an issue, a feature branch, and a merged PR that closed the issue.

## ➡️ Next

You've completed Level 3! Continue to **[Level 4 · Automation with GitHub Actions](/level-4)** to
make robots run your checks and deploy your app.
