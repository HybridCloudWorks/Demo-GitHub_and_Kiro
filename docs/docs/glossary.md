---
id: glossary
title: Glossary
sidebar_label: 📖 Glossary
sidebar_position: 800
description: Plain-language definitions of every key term used in the course.
---

# 📖 Glossary

Every important term in the course, defined simply. Terms are grouped by area.

## Version control & Git

- **Version control** — a system that records changes to files over time so you can review
  history, go back, and collaborate.
- **Git** — the version-control tool that runs on your computer.
- **Repository (repo)** — a project folder Git is tracking, including its full history.
- **Commit** — a saved snapshot of your project with a message describing the change.
- **History** — the ordered list of all commits.
- **Branch** — a movable pointer to a line of commits; lets you work in isolation.
- **`main`** — the default, "official" branch.
- **Merge** — combining the commits from one branch into another.
- **Merge conflict** — when two branches changed the same lines and Git needs you to choose.
- **Staging (`git add`)** — selecting which changes go into the next commit.
- **Tag** — a permanent label on a specific commit (used here for milestones).
- **`.gitignore`** — a file listing paths Git should not track.

## GitHub

- **GitHub** — a website that hosts Git repositories in the cloud.
- **Remote** — a hosted copy of your repo; the default is named **`origin`**.
- **Clone** — download a repository (and its history) to your computer.
- **Push / Pull** — send commits to / fetch commits from a remote.
- **Issue** — a tracked note: a bug, task, or idea.
- **Pull request (PR)** — a proposal to merge a branch, with review and checks.
- **Code review** — reading and commenting on a PR's changes before merge.
- **Branch protection / ruleset** — rules that require PRs, approvals, or passing checks before
  merging to a branch.
- **Environment** — a named deployment target (e.g. `github-pages`) with its own secrets/rules.
- **Secret** — an encrypted, masked value (like a token) used by workflows.
- **GitHub App** — a first-class integration with its own identity and fine-grained permissions.
- **Codespace** — a full development environment that runs in the cloud from your repo.
- **GitHub Pages** — free static hosting for public repositories.

## CI/CD & Actions

- **CI (Continuous Integration)** — automatically checking every change (tests, linters, builds).
- **CD (Continuous Deployment/Delivery)** — automatically publishing after checks pass.
- **GitHub Actions** — GitHub's automation system; workflows live in `.github/workflows/`.
- **Workflow** — a YAML file describing automation: events (`on`), `jobs`, and `steps`.
- **Action** — a reusable unit invoked with `uses:` (e.g. `actions/checkout`).

## Kiro

- **Workspace** — the project folder you have open in Kiro.
- **Steering file** — Markdown in `.kiro/steering/` that gives Kiro persistent rules/context.
- **Spec** — a feature captured as `requirements.md` → `design.md` → `tasks.md` in `.kiro/specs/`.
- **Agent hook** — JSON in `.kiro/hooks/` that runs an action on an event (e.g. on file save).
- **MCP (Model Context Protocol)** — a standard that lets Kiro use external tools/data via
  **MCP servers**, configured in `mcp.json`.
- **Custom agent** — a saved, specialized Kiro configuration (prompt + tools + resources).

## Web basics

- **Static site** — a site of plain HTML/CSS/JS files with no server-side build required.
- **HTML / CSS / JavaScript** — structure / styling / behavior of a web page.
