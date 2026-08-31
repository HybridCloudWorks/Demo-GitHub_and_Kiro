---
inclusion: always
---

# Project conventions (steering)

This is a real Kiro **steering file**. Steering files add persistent context and rules to every
Kiro interaction in this workspace. This one documents the conventions for the course project.

## The project

- The app in `project/` is a **static site**: plain HTML, CSS, and JavaScript.
- **No build tools, no frameworks.** Do not introduce bundlers, npm dependencies, or transpilers
  into `project/`.

## Coding style

- Use semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`).
- Keep CSS in `project/styles.css`; use the existing CSS custom properties (`--brand`, `--ink`,
  etc.) rather than hard-coded colors.
- Keep JavaScript in `project/app.js`; vanilla JS only, wrapped in an IIFE.

## Before you finish a change

- Run `node project/scripts/check-static-site.js` and make sure it passes.
- Every local asset referenced from `index.html` must exist.

## Commits

- Use imperative-mood commit summaries (e.g. "Add contact section").
- Keep changes small and focused.
