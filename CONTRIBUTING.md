# Contributing & Curriculum Conventions

Thanks for helping improve **GitHub + Kiro: Level 0 to Advanced**! This document describes
the conventions every lesson and lab follows so the course stays consistent and beginner-friendly.

---

## Repository layout

| Path | Purpose |
|------|---------|
| `docs/docs/` | Lesson content, organized into `l0-getting-started/` … `l7-advanced-github/` folders. |
| `docs/src/` | Docusaurus theme/landing-page customizations. |
| `project/` | The real static web app learners build. Milestones tagged `milestone-l2`, `milestone-l3`, … |
| `labs/lN/` | Hands-on exercise for level N: `README.md` (instructions), `starter/`, `solution/`. |
| `labs/_grader/` | The shared auto-grading framework used by CI. |
| `.github/workflows/` | `deploy-docs.yml`, `deploy-app.yml`, `grade-labs.yml`, plus lint/check CI. |
| `.kiro/` | Real Kiro artifacts (steering, specs, hooks, mcp) that double as teaching examples. |

---

## The lesson template

Every lesson is an MDX file under `docs/docs/lN-.../`. Copy `docs/docs/_lesson-template.md`
and fill it in. Each lesson MUST have this shape:

```md
---
id: unique-lesson-id
title: Human Readable Title
sidebar_label: Short Label
sidebar_position: 1
description: One-sentence summary for search engines and previews.
---

# Human Readable Title

> **Level:** L0 · **Estimated time:** 15 min · **Prerequisites:** none

## 🎯 Objectives

By the end of this lesson you will be able to:

- Objective one (concrete, testable)
- Objective two

## 📖 Lesson

...the actual teaching content...

## ✅ Checkpoint

A short self-check the learner can verify on their own:

- [ ] I can do X
- [ ] I produced Y

## 🧪 Demo / Try it

A concrete thing the learner does to *see* the result.

## ➡️ Next

Link to the next lesson.
```

### Writing style

- **Assume zero prior knowledge.** Define every term the first time it appears.
- Prefer short sentences and concrete examples over jargon.
- Use fenced code blocks with a language hint (for example `bash`, `html`, or `json`).
- Use callouts for warnings/tips (Docusaurus admonitions: `:::tip`, `:::warning`, `:::note`).
- Every command a learner types should be copy-pasteable and explained.

---

## Lab conventions

Each lab under `labs/lN/` contains:

- `README.md` — the exercise, its checkpoint, and how it's graded.
- `starter/` — files the learner begins from (optional).
- `solution/` — a reference solution that MUST pass the grader.

Graders are Node scripts under `labs/_grader/`. A lab is graded by running:

```bash
node labs/_grader/grade.js <lab-id> <path-to-learner-work>
```

The grader prints a checklist and exits non-zero if any required check fails, so CI can
fail the PR automatically.

---

## Local development

```bash
# Docs site
cd docs && npm install && npm start        # live preview at http://localhost:3000
cd docs && npm run build                   # production build (must pass with no broken links)

# Run a grader locally
node labs/_grader/grade.js example labs/example/solution
```

Node.js 18+ is required (Node 20 or 22 recommended).

---

## Commit & PR conventions

- One logical change per PR.
- Reference the level/lab in the title, e.g. `L1: fix typo in branching lesson`.
- CI must be green (markdown lint, link check, docs build, graders) before merge.
