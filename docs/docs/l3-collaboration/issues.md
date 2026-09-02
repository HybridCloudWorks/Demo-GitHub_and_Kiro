---
id: l3-issues
title: "Issues: Tracking Work"
sidebar_label: 1. Issues
sidebar_position: 2
description: Use GitHub issues to track bugs, ideas, and tasks, write ones that are actually actionable, and link them to the commits and PRs that resolve them.
---

# Issues: Tracking Work

> **Level:** L3 · **Estimated time:** 10 min · **Prerequisites:** finished Level 2

## What you'll get out of this lesson

You'll understand what a GitHub **issue** is for, learn to open one that someone could actually act
on, and connect issues to the commits and pull requests that resolve them.

## What an issue is, and why it beats a sticky note

An **issue** is a tracked note attached to a repository: a bug report, a feature idea, a question,
or a plain task. What makes it more useful than a note in your head or a sticky on your monitor is
that it lives *with* the code, it's visible to everyone on the project, and it becomes a thread where
the discussion, decisions, and eventual fix all stay attached to the thing they're about.

On a team, issues are how work gets organized and claimed. On a solo project, they're how you keep
your future self honest about what you meant to do.

## Writing an issue someone can act on

Go to the **Issues** tab on your repo and choose **New issue**. The difference between a useful issue
and a useless one comes down to specifics. A good one has:

A clear **title** that names the actual outcome, like "Add an 'About me' section to the homepage,"
not "homepage stuff." A **description** covering *what* you want and *why*, and for bugs, the exact
steps to reproduce the problem, because a bug nobody can reproduce is a bug nobody can fix. And
optionally, **labels** like `bug`, `enhancement`, or `good first issue` to help sort and triage as
the list grows.

The test is simple: could someone who isn't you pick up this issue and know what "done" looks like?
If not, add detail until they could.

## Linking issues to the work that closes them

Issues get powerful once you connect them to your actual changes. You can mention an issue anywhere
with `#123` and GitHub turns it into a link. Better still, you can use a **closing keyword** in a
commit message or PR description so the issue closes itself automatically when the change merges:

```text
Fixes #123
```

`Closes #123` and `Resolves #123` do the same thing. This small habit means your issue list stays
honest on its own, without you remembering to go tick things off.

:::tip Open the issue before you write the code
Even on a solo project, writing the issue *first* forces you to think the change through before you
start typing, and it gives you something concrete to reference from the pull request. It feels like
overhead the first time and pays for itself the first time you come back to a project after a month
away.
:::

## Quick self-check

- [ ] I opened an issue with a clear title and a real description.
- [ ] I know how to reference an issue with `#number`.
- [ ] I know that `Fixes #n` auto-closes an issue when a PR merges.

## Try it

On your project repo, open an issue titled **"Add an About section to the homepage"** with a sentence
or two describing what you want and why. Leave it open; you'll resolve it with a pull request in the
lab at the end of this level, and closing it that way is oddly satisfying.

## Next

**[Pull requests](./pull-requests.md)**.
