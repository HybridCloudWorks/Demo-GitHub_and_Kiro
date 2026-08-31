# Example Lab — your first graded page

This tiny lab exists to show you how **every** lab in the course works: you make a change,
run the grader, and see a ✅/❌ checklist. It's also how the course authors prove the
auto-grader itself works.

## 🎯 The task

Create an `index.html` file that:

1. Is well-formed HTML (starts with `<!doctype html>`, has matching `<html>`, `<head>`,
   `<body>`, and `<title>` tags).
2. Has an `<h1>` heading.
3. Contains the exact sentence: **`I built this with GitHub + Kiro`**.

A `starter/` folder gives you a scaffold to edit.

## ✅ Checkpoint

- [ ] `index.html` exists.
- [ ] It has a `<title>` and an `<h1>`.
- [ ] It contains the sentence "I built this with GitHub + Kiro".

## 🧪 How it's graded

Run the grader locally, pointing it at your work:

```bash
node labs/_grader/grade.js example labs/example/starter
```

You'll see failures until you complete the task. The reference solution passes fully:

```bash
node labs/_grader/grade.js example labs/example/solution
```

When you open a pull request, CI runs this same grader and reports the result on your PR.
