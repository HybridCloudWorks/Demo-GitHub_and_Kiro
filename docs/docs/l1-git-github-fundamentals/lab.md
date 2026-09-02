---
id: l1-lab
title: "🧪 Lab: Git & GitHub Fundamentals"
sidebar_label: 5. 🧪 Graded Lab
sidebar_position: 6
description: Your first graded lab, where you build a small repository with a web page, a .gitignore, and a command log, then run the same grader that CI runs.
---

# Lab: Git & GitHub Fundamentals

> **Level:** L1 · **Estimated time:** 30 min · **Prerequisites:** all L1 lessons

This is your first **graded** lab, and it's designed to be a genuine checkpoint rather than a
formality. You'll produce a small set of files, and an automated grader will check them. It's the
same grader that runs in CI when you open a pull request later in the course, so passing it here
means you'll pass it there too.

Don't overthink the size of the task. The goal isn't a big project; it's proving that the everyday
loop from this level (init, add, commit, branch, push) is actually in your hands.

## What you'll build

The full instructions and the starter files live in the repository under
[`labs/l1/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/labs/l1). Working
inside a copy of `labs/l1/starter/`, you'll create three things:

1. **`index.html`** - a well-formed page with a `<title>` and an `<h1>`. Nothing fancy; it just has
   to be valid.
2. **`.gitignore`** - ignoring at least `node_modules/` and `.env`, straight from the previous
   lesson.
3. **`COMMANDS.md`** - a short log that mentions the commands you used: `git init` or `clone`, `add`,
   `commit`, `branch` or `switch`, and `push`.

The files are only half the point. On your own machine, actually **run** those commands for real:
initialize the repo, commit your files, make a branch, and push it all to a new GitHub repository.
The grader checks the artifacts, but the muscle memory is what you're really after.

## Run the grader

```bash
node labs/_grader/grade.js l1 labs/l1/starter    # fails until you finish
node labs/_grader/grade.js l1 labs/l1/solution   # the reference passes 13/13
```

Running the grader against the provided `solution` first is a good move: it shows you what a full
pass looks like before you try to earn one yourself.

## Quick self-check

- [ ] The grader reports every required check passing on my work.
- [ ] My repository is visible on GitHub, with my commits and at least one branch.

## Next

That's Level 1 complete, and you now have the core Git workflow under your belt. Continue to
**[Level 2 · Kiro Fundamentals](/docs/level-2)**, where you'll meet Kiro properly and start building
the real project app.
