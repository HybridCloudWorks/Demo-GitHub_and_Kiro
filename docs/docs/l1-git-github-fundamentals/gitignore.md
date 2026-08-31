---
id: l1-gitignore
title: Ignoring Files with .gitignore
sidebar_label: 4. .gitignore
sidebar_position: 5
description: Use a .gitignore file to keep generated files and secrets out of version control.
---

# Ignoring Files with .gitignore

> **Level:** L1 · **Estimated time:** 10 min · **Prerequisites:** remotes lesson

## 🎯 Objectives

By the end of this lesson you will be able to:

- Explain why some files should *not* be committed
- Create a `.gitignore` file and write patterns
- Verify a file is being ignored

## 📖 Lesson

### Why ignore files?

Not everything belongs in version control:

- **Generated output** (e.g. build folders) — it can be re-created, so committing it just adds
  noise.
- **Dependencies** (e.g. `node_modules/`) — huge and reinstallable.
- **Secrets** (e.g. `.env` files with passwords or API keys) — must *never* be committed.
- **OS/editor junk** (e.g. `.DS_Store`, `Thumbs.db`).

### The `.gitignore` file

Create a file named exactly `.gitignore` in your repository root. Each line is a pattern for
paths Git should ignore:

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

Pattern quick reference:

| Pattern | Matches |
|---------|---------|
| `node_modules/` | a folder named `node_modules` anywhere |
| `*.log` | any file ending in `.log` |
| `build/` | a folder named `build` |
| `!keep.log` | *un*-ignores `keep.log` (exception) |

### Verify it works

```bash
echo "secret=123" > .env
git status
```

If `.env` is correctly ignored, it will **not** appear in `git status` as something to commit.
You can also ask Git directly:

```bash
git check-ignore -v .env
```

:::warning Already committed by accident?
`.gitignore` only ignores files Git isn't already tracking. If you committed a secret, ignoring
it later is not enough — you must remove it from tracking (`git rm --cached .env`), commit, and
rotate the secret (treat it as leaked).
:::

## ✅ Checkpoint

- [ ] I created a `.gitignore` with at least one pattern.
- [ ] A file matching a pattern does **not** show up in `git status`.
- [ ] I know secrets must never be committed.

## 🧪 Demo / Try it

```bash
printf "node_modules/\n.env\n" > .gitignore
mkdir -p node_modules && touch node_modules/lib.js
echo "TOKEN=abc" > .env
git status
```

Only `.gitignore` should appear as a new file — `node_modules/` and `.env` are ignored.

## ➡️ Next

Time to prove your skills: **[🧪 Lab: your first graded exercise](./lab.md)**.
