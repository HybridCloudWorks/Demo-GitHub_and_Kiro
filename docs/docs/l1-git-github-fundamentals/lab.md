---
id: l1-lab
title: "🧪 Lab: Git & GitHub Fundamentals"
sidebar_label: 5. 🧪 Graded Lab
sidebar_position: 6
description: Your first graded lab — set up a repository with a page, a .gitignore, and a command log.
---

# 🧪 Lab: Git & GitHub Fundamentals

> **Level:** L1 · **Estimated time:** 30 min · **Prerequisites:** all L1 lessons

This is your first **graded** lab. You'll produce a small set of files and an automated grader
will check them — the same grader that runs in CI when you open a pull request.

## 🎯 The task

The full instructions and starter files live in the repository at
[`labs/l1/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/labs/l1). In short,
inside a copy of `labs/l1/starter/` you will create:

1. **`index.html`** — well-formed, with a `<title>` and an `<h1>`.
2. **`.gitignore`** — ignoring at least `node_modules/` and `.env`.
3. **`COMMANDS.md`** — a log mentioning `git init`/`clone`, `add`, `commit`,
   `branch`/`switch`, and `push`.

On your own machine, actually **run** those commands: initialize the repo, commit your files,
make a branch, and push to a new GitHub repository.

## Run the grader

```bash
node labs/_grader/grade.js l1 labs/l1/starter    # fails until you finish
node labs/_grader/grade.js l1 labs/l1/solution    # the reference passes 13/13
```

## ✅ Checkpoint

- [ ] The grader reports all required checks passing on your work.
- [ ] Your repository is visible on GitHub with your commits and at least one branch.

## ➡️ Next

You've completed Level 1! Continue to **[Level 2 · Kiro Fundamentals](/level-2)**, where you'll
meet Kiro and start building the real project app.
