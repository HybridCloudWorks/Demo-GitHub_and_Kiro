---
id: l2-scaffold-the-project
title: Scaffold the Project App
sidebar_label: 4. Scaffold the project
sidebar_position: 5
description: Use Kiro to create the initial static web app — your first project milestone.
---

# Scaffold the Project App

> **Level:** L2 · **Estimated time:** 30 min · **Prerequisites:** all earlier L2 lessons

This is your first **project milestone**. You'll create a small static web app — *My Learning
Journal* — that you extend for the rest of the course. It's plain HTML, CSS, and JavaScript with
**no build tools**, so it runs by just opening the page.

## 🎯 Objectives

By the end of this lesson you will be able to:

- Create a three-file static site (`index.html`, `styles.css`, `app.js`)
- Run it locally in a browser
- Commit it as milestone **`milestone-l2`**

## 📖 Lesson

### What you're building

A single page with a header, a couple of content "cards", and a footer whose year is filled in
by a tiny script. The finished reference lives in the repository under
[`project/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/project).

### Step 1 — Ask Kiro to scaffold it

In your project folder, open Kiro chat and try a prompt like:

> Create a static web page called *My Learning Journal*. Add `index.html` with a header
> (title + tagline), two content cards, and a footer. Add `styles.css` for clean, modern
> styling, and `app.js` that sets the footer's year. No frameworks or build tools.

Review the files Kiro proposes. Adjust with follow-ups until you're happy.

### Step 2 — Run it locally

- **Quick:** open `index.html` in your browser.
- **Server (recommended):**

  ```bash
  cd project
  python3 -m http.server 8000
  # visit http://localhost:8000
  ```

### Step 3 — Verify it's a valid static site

The repository includes a tiny checker that CI also runs:

```bash
node project/scripts/check-static-site.js
```

It confirms the required files exist, the HTML is well-formed, and every local asset the page
references actually exists.

### Step 4 — Commit and tag the milestone

```bash
git add project
git commit -m "L2: scaffold My Learning Journal static site"
git tag milestone-l2
git push && git push --tags
```

:::note What's a tag?
A **tag** is a permanent label on a specific commit — perfect for marking milestones. Unlike a
branch, it doesn't move.
:::

## ✅ Checkpoint

- [ ] `project/` has `index.html`, `styles.css`, and `app.js`.
- [ ] The page opens in a browser and shows the header, cards, and footer year.
- [ ] `node project/scripts/check-static-site.js` passes.
- [ ] I committed and tagged `milestone-l2`.

## 🧪 Demo / Try it

Open the page in your browser and confirm the footer shows the current year — proof your
`app.js` ran.

## ➡️ Next

You've completed Level 2 and have a real app! Continue to
**[Level 3 · Collaboration](/docs/level-3)** to add a feature the professional way — through a pull
request.
