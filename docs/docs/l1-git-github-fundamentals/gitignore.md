---
id: l1-gitignore
title: Ignoring Files with .gitignore
sidebar_label: 4. .gitignore
sidebar_position: 5
description: Why some files should never be committed, how to write .gitignore patterns, and what to do if you've already committed something you shouldn't have.
---

# Ignoring Files with .gitignore

> **Level:** L1 · **Estimated time:** 10 min · **Prerequisites:** remotes lesson

## What you'll get out of this lesson

You'll understand why some files have no business being in version control, learn to write a
`.gitignore` file and its patterns, and know how to verify that a file is actually being ignored.

## Why you'd ever want to ignore a file

It's tempting to think "commit everything, just in case," but plenty of files actively make a repo
worse when they're tracked:

- **Generated output**, like a `build/` folder, can always be re-created from your source. Committing
  it just adds noise and merge conflicts.
- **Dependencies**, like `node_modules/`, are enormous and reinstallable. There's no reason to carry
  thousands of files you didn't write.
- **Secrets**, like `.env` files holding passwords or API keys, must *never* be committed. Once a
  secret lands in history, treat it as leaked.
- **OS and editor clutter**, like `.DS_Store` on macOS or `Thumbs.db` on Windows, is noise that has
  nothing to do with your project.

The rule of thumb: if a file is generated, reinstallable, secret, or machine-specific, keep it out.

## The `.gitignore` file

Create a file named exactly `.gitignore` (yes, with the leading dot) in your repository root. Each
line is a pattern describing paths Git should leave alone:

```gitignore
# Dependencies
node_modules/

# Build output
build/
dist/

# Secrets — never commit these
.env
.env.local

# OS / editor cruft
.DS_Store
Thumbs.db
```

A few patterns cover most needs:

| Pattern | Matches |
|---------|---------|
| `node_modules/` | a folder named `node_modules`, anywhere in the repo |
| `*.log` | any file ending in `.log` |
| `build/` | a folder named `build` |
| `!keep.log` | *un*-ignores `keep.log`, an exception to a broader rule above it |

That last one surprises people: `.gitignore` supports exceptions with a leading `!`, so you can
ignore a whole category and then rescue one specific file from it.

## Verify it actually works

Don't take it on faith. Create a file that should be ignored and check:

```bash
echo "secret=123" > .env
git status
```

If your `.env` rule is working, that file will *not* show up in `git status` as something waiting to
be committed. You can also ask Git directly, which is handy when a pattern isn't behaving:

```bash
git check-ignore -v .env
```

That command tells you which line of which `.gitignore` is responsible for ignoring a file, which
saves a lot of guessing.

:::warning If you've already committed something by accident
Here's the catch that bites people: `.gitignore` only affects files Git isn't *already* tracking.
If you committed a secret and then added it to `.gitignore`, the secret is still in your history and
still exposed. You have to stop tracking it (`git rm --cached .env`), commit that removal, and then,
crucially, rotate the secret itself. A leaked key is leaked the moment it's pushed; deleting it later
doesn't un-leak it.
:::

## Quick self-check

- [ ] I created a `.gitignore` with at least one pattern.
- [ ] A file matching a pattern does **not** appear in `git status`.
- [ ] I understand that secrets must never be committed.

## Try it

```bash
printf "node_modules/\n.env\n" > .gitignore
mkdir -p node_modules && touch node_modules/lib.js
echo "TOKEN=abc" > .env
git status
```

Only `.gitignore` itself should show up as a new file. The `node_modules/` folder and the `.env`
file are both invisible to Git, exactly as intended.

## Next

Time to put it all together and earn a grade: **[Lab: your first graded exercise](./lab.md)**.
