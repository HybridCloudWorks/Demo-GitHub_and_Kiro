---
id: l2-reading-and-editing
title: Reading & Editing Code
sidebar_label: 3. Reading & editing
sidebar_position: 4
description: Read files, make targeted edits, and combine Kiro with what you learned about Git.
---

# Reading & Editing Code

> **Level:** L2 · **Estimated time:** 12 min · **Prerequisites:** chatting with Kiro

## 🎯 Objectives

By the end of this lesson you will be able to:

- Open and read a file's contents
- Make a small edit (yourself or via Kiro) and save it
- Commit the change using what you learned in Level 1

## 📖 Lesson

### Reading

Click any file in the explorer to open it in the editor. For understanding, you can also ask
Kiro to summarize a file or explain a specific function — great when a file is long or
unfamiliar.

### Editing — two ways

- **Directly:** type in the editor and save (`Ctrl/Cmd + S`).
- **With Kiro:** describe the change in chat; Kiro proposes an edit; you review and apply it.

Both are fine. Early on, mixing the two is a great way to learn: let Kiro draft, then read the
result to understand it.

### Tie it back to Git

Editing is only half the loop — remember Level 1. After a meaningful change:

```bash
git status                       # see what changed
git add index.html               # stage it
git commit -m "Add welcome copy" # save a snapshot
```

You can run these in Kiro's integrated terminal without leaving your workspace.

```mermaid
graph LR
    A[Ask / edit in Kiro] --> B[Save file]
    B --> C[git add]
    C --> D[git commit]
    D --> E[git push to GitHub]
```

:::tip Small, reviewable commits
Make one logical change, then commit. It keeps your history readable and makes it easy to undo a
single change later.
:::

## ✅ Checkpoint

- [ ] I opened and read a file.
- [ ] I made and saved an edit.
- [ ] I committed the change with a clear message.

## 🧪 Demo / Try it

Open your project's `README.md` (or any file), add a line, save, then:

```bash
git add README.md
git commit -m "Add a note to the README"
```

## ➡️ Next

Now build something real: **[Scaffold the project app](./scaffold-the-project.md)**.
