---
id: l5-steering
title: Steering Files
sidebar_label: 1. Steering files
sidebar_position: 2
description: Give Kiro persistent project rules and context with steering files.
---

# Steering Files

> **Level:** L5 · **Estimated time:** 15 min · **Prerequisites:** finished Level 4

## 🎯 Objectives

By the end of this lesson you will be able to:

- Explain what a **steering file** is and when Kiro uses it
- Create a steering file with front-matter inclusion rules
- Reference other files from steering

## 📖 Lesson

### What is steering?

**Steering files** are Markdown files in `.kiro/steering/` that add persistent context and rules
to your Kiro interactions. Instead of repeating "this project is a static site, no frameworks"
in every chat, you write it once as steering and Kiro applies it automatically.

Great uses:

- Team/project conventions and coding style
- Architecture notes and "how we do things here"
- Reminders like "always run the tests before finishing"

### Anatomy

A steering file is Markdown with optional YAML front matter controlling **when** it applies:

```md
---
inclusion: always
---

# Project conventions

- This project is a static site — no build tools or frameworks.
- Keep CSS in styles.css and reuse the existing custom properties.
- Run `node project/scripts/check-static-site.js` before finishing.
```

Inclusion modes:

| `inclusion` | Applies… |
|-------------|----------|
| `always` | to every interaction in the workspace |
| `fileMatch` (with a `fileMatchPattern`) | only when matching files are in context |
| `manual` | only when you explicitly reference it |

### Referencing other files

Steering can pull in other files so specs or API definitions influence Kiro without copy-paste:

```md
See the API contract: #[[file:openapi.yaml]]
```

### A real example in this repo

Look at [`.kiro/steering/project-conventions.md`](https://github.com/your-username/github-kiro-course/blob/main/.kiro/steering/project-conventions.md).
It's `inclusion: always` and documents the static-site rules for `project/`. When you ask Kiro
to change the app, it already knows not to add frameworks.

:::tip Keep steering focused
Short, specific steering works best. One file per concern (conventions, testing, architecture)
is easier to maintain than one giant file.
:::

## ✅ Checkpoint

- [ ] I know steering lives in `.kiro/steering/` as Markdown.
- [ ] I can set `inclusion` to `always`, `fileMatch`, or `manual`.
- [ ] I can reference another file with `#[[file:...]]`.

## 🧪 Demo / Try it

Open `.kiro/steering/project-conventions.md`, then ask Kiro in the project workspace to "add a
new section to the homepage." Notice it follows the conventions without being told again.

## ➡️ Next

**[Spec-driven development](./specs.md)**.
