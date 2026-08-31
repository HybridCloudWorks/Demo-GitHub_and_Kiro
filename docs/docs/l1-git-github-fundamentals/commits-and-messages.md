---
id: l1-commits-and-messages
title: Commits & Good Messages
sidebar_label: 1. Commits & messages
sidebar_position: 2
description: How commits work and how to write commit messages your future self will thank you for.
---

# Commits & Good Messages

> **Level:** L1 · **Estimated time:** 12 min · **Prerequisites:** finished Level 0

## 🎯 Objectives

By the end of this lesson you will be able to:

- Describe what a commit records
- Stage specific changes with `git add`
- Write a clear, conventional commit message

## 📖 Lesson

### What a commit really records

A **commit** is a snapshot of the tracked files in your repository plus some metadata: who
made it, when, and a **message** describing *why*. Each commit points to the one before it,
forming your project's **history**.

### The edit → add → commit loop

You already met this loop in Level 0. Let's reinforce it:

```bash
# 1. See what changed
git status

# 2. Stage the exact files you want in this commit
git add index.html styles.css

# 3. Commit them with a message
git commit -m "Add homepage heading and base styles"
```

:::tip Stage everything at once
`git add .` stages *all* changes in the current folder. Handy, but pause first and run
`git status` so you know exactly what you're including.
:::

### Writing good commit messages

A good message explains the change so a teammate (or future you) understands it at a glance.

A widely used style:

- A short **summary line** (about 50 characters), written in the imperative mood:
  "Add", "Fix", "Update" — as if completing the sentence *"This commit will…"*.
- Optionally, a blank line then a longer body explaining *why*.

```text
Fix broken link on the About page

The footer linked to /about-us but the page lives at /about.
Updated the link so the smoke test passes.
```

Compare:

| ❌ Vague | ✅ Clear |
|----------|----------|
| `stuff` | `Add contact form to homepage` |
| `fix` | `Fix typo in navigation label` |
| `changes` | `Update README with install steps` |

### Seeing history

```bash
git log --oneline       # compact, one line per commit
git show                # details of the most recent commit
```

## ✅ Checkpoint

- [ ] I can stage specific files with `git add`.
- [ ] I can write an imperative-mood summary line.
- [ ] I can read history with `git log --oneline`.

## 🧪 Demo / Try it

In your `hello-git` repo from Level 0, make a change and commit it with a well-formed message,
then inspect it:

```bash
echo "## About" >> README.md
git add README.md
git commit -m "Add About section heading to README"
git show --stat
```

## ➡️ Next

Learn to work on changes safely in parallel: **[Branches](./branches.md)**.
