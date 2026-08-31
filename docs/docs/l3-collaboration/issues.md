---
id: l3-issues
title: "Issues: Tracking Work"
sidebar_label: 1. Issues
sidebar_position: 2
description: Use GitHub issues to track bugs, ideas, and tasks.
---

# Issues: Tracking Work

> **Level:** L3 · **Estimated time:** 10 min · **Prerequisites:** finished Level 2

## 🎯 Objectives

By the end of this lesson you will be able to:

- Explain what a GitHub **issue** is for
- Open a clear, actionable issue
- Reference and close issues from commits and PRs

## 📖 Lesson

### What is an issue?

An **issue** is a tracked note on a repository — a bug report, a feature idea, a question, or a
task. Issues give your work a to-do list that lives with the code and that others can see and
discuss.

### Opening a good issue

On your repo, go to the **Issues** tab → **New issue**. A good issue has:

- **A clear title** — e.g. "Add an 'About me' section to the homepage".
- **A description** — what and why, plus steps to reproduce for bugs.
- **Labels** (optional) — e.g. `bug`, `enhancement`, `good first issue`.

### Linking issues to your work

You can connect commits and PRs to issues:

- Mention an issue with `#123` in a commit message or PR description.
- Use a **closing keyword** to auto-close it when the PR merges:

  ```text
  Fixes #123
  ```

  (Also works: `Closes #123`, `Resolves #123`.)

:::tip Issues before code
Opening an issue *first* — even for your own solo project — helps you think through the change
and gives you something to reference in your pull request.
:::

## ✅ Checkpoint

- [ ] I opened an issue with a clear title and description.
- [ ] I know how to reference an issue with `#number`.
- [ ] I know `Fixes #n` auto-closes an issue on merge.

## 🧪 Demo / Try it

On your project repo, open an issue titled **"Add an About section to the homepage"** with a
sentence describing what you want. You'll resolve it with a PR in the lab.

## ➡️ Next

**[Pull requests](./pull-requests.md)**.
