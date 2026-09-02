---
id: l1-commits-and-messages
title: Commits & Good Messages
sidebar_label: 1. Commits & messages
sidebar_position: 2
description: What a commit actually records, how to stage exactly the changes you mean to, and how to write commit messages that stay useful months later.
---

# Commits & Good Messages

> **Level:** L1 · **Estimated time:** 12 min · **Prerequisites:** finished Level 0

## What you'll get out of this lesson

You'll understand what a commit really records, learn to stage exactly the changes you want with
`git add`, and pick up a commit-message style that keeps your history readable long after you've
forgotten the details.

## What a commit actually records

A **commit** is a snapshot of the tracked files in your repository, bundled with a little
metadata: who made it, when, and a **message** explaining the change. Each commit also points back
to the one before it, and that chain of pointers is your project's **history**.

The part people underrate is the message. A year from now, the code will tell you *what* it does,
but only the commit message can tell you *why* you changed it. That "why" is often the exact thing
you'll be desperate to know when something breaks.

## The edit, add, commit loop

You met this loop in Level 0. Here it is again, because it's worth having in your fingers:

```bash
# 1. See what changed
git status

# 2. Stage the exact files you want in this commit
git add index.html styles.css

# 3. Commit them with a message
git commit -m "Add homepage heading and base styles"
```

:::tip Staging everything, carefully
`git add .` stages *every* change in the current folder at once. It's convenient, and you'll use it
often, but get in the habit of running `git status` first so you know exactly what you're about to
sweep in. More than one accidental secret or stray debug file has ended up committed because
someone reached for `git add .` on autopilot.
:::

## Writing commit messages that earn their keep

A good message lets a teammate (or you, six months from now) grasp a change at a glance without
reading the diff. The widely used convention is simple:

Write a short **summary line**, around 50 characters, in the imperative mood. Imperative just means
you phrase it as a command: "Add", "Fix", "Update", as if you were finishing the sentence *"This
commit will..."*. If the change needs more explanation, leave a blank line and then write a body
that covers the *why*.

```text
Fix broken link on the About page

The footer linked to /about-us, but the page actually lives at /about,
so the smoke test kept failing. Updated the link to match.
```

The difference between a lazy message and a good one is stark once you've had to dig through
history:

| Vague and useless | Clear and useful |
|-------------------|------------------|
| `stuff` | `Add contact form to homepage` |
| `fix` | `Fix typo in navigation label` |
| `changes` | `Update README with install steps` |

The messages on the left aren't just unhelpful; they're actively misleading, because they all look
identical in the log. The ones on the right let you find the commit you want in seconds.

## Looking back through history

```bash
git log --oneline       # compact, one line per commit
git show                # full details of the most recent commit
```

`git log --oneline` is the view you'll live in. `git show` is what you reach for when you want to
see exactly what a particular commit changed.

## Quick self-check

- [ ] I can stage specific files with `git add`.
- [ ] I can write an imperative-mood summary line.
- [ ] I can read history with `git log --oneline`.

## Try it

Head back to your `hello-git` repo from Level 0, make a change, and commit it with a properly
formed message. Then inspect what you did:

```bash
echo "## About" >> README.md
git add README.md
git commit -m "Add About section heading to README"
git show --stat
```

The `--stat` flag shows you which files changed and by how much, which is a nice quick summary of a
commit's footprint.

## Next

Now learn to work on changes in parallel without breaking your stable code: **[Branches](./branches.md)**.
