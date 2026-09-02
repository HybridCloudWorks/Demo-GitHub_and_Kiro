---
id: l3-code-review
title: Code Review
sidebar_label: 3. Code review
sidebar_position: 4
description: Read a pull request's diff, leave feedback that's genuinely useful, and choose a merge strategy that keeps your history clean.
---

# Code Review

> **Level:** L3 · **Estimated time:** 12 min · **Prerequisites:** pull requests

## What you'll get out of this lesson

You'll learn to read a PR's diff, leave line comments and an overall review, and merge using a
strategy that suits the situation.

## Reading the change

Open a PR and click the **Files changed** tab. What you're looking at is a **diff**: added lines are
green, removed lines are red. Reading a diff is a skill in itself, and it gets faster with practice.
To comment on something specific, hover over a line and click the blue **+** that appears.

When you've read enough to have an opinion, submit a review as one of three verdicts. **Comment**
leaves feedback without approving or blocking. **Approve** says it's good to merge. **Request
changes** says it shouldn't merge until the concerns are addressed. That last one isn't hostile; it's
the mechanism that stops a not-quite-ready change from slipping through.

## Feedback that actually helps

The fastest way to make reviews dreaded is to leave terse, vague criticism. The fastest way to make
them valued is to be specific and kind: explain *why* something's a problem and suggest *how* to fix
it, rather than just flagging it. Separate the "this must change before merge" notes from the "here's
a nice-to-have for someday," so the author knows what's blocking and what isn't. And point out the
good parts too. Reviews that only ever surface problems train people to dread them, and a reviewer
who notices a clever solution is a reviewer people want to work with.

## Merging, and choosing how

Once a PR is approved and its checks are green, you merge. GitHub offers three strategies, and the
right choice depends on what you want your history to look like:

| Strategy | What it does | Good when... |
|----------|--------------|--------------|
| **Create a merge commit** | keeps every commit plus a merge commit | you want the full, detailed history |
| **Squash and merge** | combines the whole branch into one commit | you want a tidy, readable `main` |
| **Rebase and merge** | replays the commits with no merge commit | you want a strictly linear history |

If you're not sure, **Squash and merge** is the friendliest default. It collapses all the "fix typo,"
"actually fix it," "oops" commits from your branch into one clean commit on `main`, so your project's
main history reads like a series of finished features rather than a diary of every keystroke.

:::tip Review your own solo PRs
Even when you're the only person on a project, opening **Files changed** and reading your own diff
before merging catches a genuinely surprising number of mistakes: a leftover `console.log`, a
debugging change you forgot to revert, a typo in a heading. Treat that last look as part of the
workflow, not an optional extra.
:::

## Quick self-check

- [ ] I can read a diff in **Files changed**.
- [ ] I can leave a line comment and submit a review.
- [ ] I can pick a merge strategy and merge a PR.

## Try it

On the PR you opened in the last lesson, add one line comment to yourself (something like "reads
cleanly"), submit the review, then **Squash and merge**. Notice how `main` ends up with a single tidy
commit rather than every step you took along the way.

## Next

**[Branch protection basics](./branch-protection.md)**.
