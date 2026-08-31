# Lab L1 — Git & GitHub Fundamentals

Prove you can set up a repository the right way: a starter web page, a proper `.gitignore`, and
a short log of the Git commands you practiced.

## 🎯 The task

Work inside a copy of the `starter/` folder. Produce these files:

1. **`index.html`** — a well-formed HTML page with a `<title>` and an `<h1>`.
2. **`.gitignore`** — must ignore at least:
   - `node_modules/`
   - `.env`
3. **`COMMANDS.md`** — a short log showing you practiced the core commands. It must mention each
   of: `git init` (or `git clone`), `git add`, `git commit`, `git branch` (or `git switch`), and
   `git push`.

> Why a `COMMANDS.md`? An automated grader can't watch you type in your own terminal, so you
> record the commands you ran. On your real machine you should actually run them — create a repo,
> commit these files, make a branch, and push to GitHub.

## ✅ Checkpoint

- [ ] `index.html` is well-formed and has a title + heading.
- [ ] `.gitignore` ignores `node_modules/` and `.env`.
- [ ] `COMMANDS.md` documents init/clone, add, commit, branch/switch, and push.
- [ ] On your machine: you created the repo, committed, branched, and pushed to GitHub.

## 🧪 How it's graded

```bash
node labs/_grader/grade.js l1 labs/l1/starter   # will fail until you finish
node labs/_grader/grade.js l1 labs/l1/solution   # the reference solution passes
```

When you open a pull request touching `labs/**`, CI runs this grader and reports pass/fail.
