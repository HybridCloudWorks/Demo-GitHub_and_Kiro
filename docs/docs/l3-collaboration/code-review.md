---
id: l3-code-review
title: Code Review
sidebar_label: 3. Code review
sidebar_position: 4
description: Review a pull request, leave constructive feedback, and merge safely.
---

# Code Review

> **Level:** L3 · **Estimated time:** 12 min · **Prerequisites:** pull requests

## 🎯 Objectives

By the end of this lesson you will be able to:

- Read a PR's **Files changed** diff
- Leave line comments and an overall review
- Merge a PR using an appropriate strategy

## 📖 Lesson

### Reviewing a change

Open a PR and select the **Files changed** tab. You'll see a **diff**: lines added are green,
removed are red. To comment, hover a line and click the blue **+**.

When you're done, submit a review as one of:

- **Comment** — feedback without approval or blocking.
- **Approve** — looks good to merge.
- **Request changes** — should not merge until addressed.

### Giving good feedback

- Be specific and kind: explain *why*, suggest *how*.
- Separate "must fix" from "nice to have".
- Praise good stuff too — reviews aren't only for problems.

### Merging

Once approved and checks pass, merge. GitHub offers a few strategies:

| Strategy | What it does | Good when… |
|----------|--------------|------------|
| **Create a merge commit** | keeps all commits + a merge commit | you want full history |
| **Squash and merge** | combines the branch into one commit | you want a tidy `main` history |
| **Rebase and merge** | replays commits without a merge commit | you want linear history |

For beginners, **Squash and merge** keeps `main` clean and readable.

:::tip Reviewing your own solo PRs
Even alone, reading your own **Files changed** before merging catches surprising numbers of
mistakes. Treat it as a checklist moment.
:::

## ✅ Checkpoint

- [ ] I can read a diff in **Files changed**.
- [ ] I can leave a line comment and submit a review.
- [ ] I can pick a merge strategy and merge a PR.

## 🧪 Demo / Try it

On the PR you opened last lesson, add one line comment to yourself (e.g. "clean!"), submit a
review, then **Squash and merge**.

## ➡️ Next

**[Branch protection basics](./branch-protection.md)**.
