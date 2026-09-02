---
id: glossary
title: Glossary
sidebar_label: 📖 Glossary
sidebar_position: 800
description: Plain-language definitions of every key term in the course, grouped by area, with the small clarifications that trip beginners up.
---

# 📖 Glossary

Every important term in the course, defined in plain language and grouped by area. Where a term is
easy to confuse with another, there's a short note to keep them straight. Skim it when a word stops
making sense, and treat it as a companion to the lessons rather than a replacement for them.

## Version control and Git

- **Version control:** a system that records changes to files over time, so you can review the full
  history, return to an earlier state, and collaborate without overwriting each other.
- **Git:** the version-control tool that runs on your own computer. It does its work whether or not
  you're online.
- **Repository (repo):** a project folder that Git is tracking, including its complete history. The
  history lives in a hidden `.git` folder inside it.
- **Commit:** a saved snapshot of your project at one moment, paired with a message describing the
  change. Commits are the building blocks of history.
- **History:** the ordered list of all your commits, which is effectively the story of how the
  project reached its current state.
- **Branch:** a movable pointer to a line of commits. Branches let you work on a change in isolation
  without disturbing the stable version.
- **`main`:** the default, "official" branch, the one that should always work.
- **Merge:** combining the commits from one branch into another.
- **Merge conflict:** what happens when two branches change the same lines and Git can't decide for
  you, so it asks you to choose. Routine, not a disaster.
- **Staging (`git add`):** choosing exactly which changes go into the next commit, rather than
  committing everything at once.
- **Tag:** a permanent label pinned to a specific commit. Unlike a branch, it doesn't move, which is
  why this course uses tags for milestones.
- **`.gitignore`:** a file listing paths Git should never track, such as build output, dependencies,
  and secrets.

## GitHub

- **GitHub:** a website that hosts Git repositories in the cloud, adding collaboration tools on top.
- **Remote:** a hosted copy of your repository. The default one is named **`origin`**.
- **Clone:** downloading a repository, along with its full history, to your computer.
- **Push and pull:** sending your commits up to a remote (push) and fetching others' commits down
  (pull). Pull before you push to avoid rejected pushes.
- **Issue:** a tracked note on a repo: a bug, a task, or an idea, visible to everyone on the project.
- **Pull request (PR):** a proposal to merge a branch, complete with review, discussion, and
  automated checks before it lands.
- **Code review:** reading and commenting on a PR's changes before they merge, ideally with both
  "must fix" notes and praise.
- **Branch protection / ruleset:** rules that require PRs, approvals, or passing checks before a
  change can merge to a protected branch.
- **Environment:** a named deployment target, such as `github-pages`, that can carry its own secrets
  and protection rules.
- **Secret:** an encrypted, masked value (like a token) that workflows can use without exposing it in
  logs or code.
- **GitHub App:** a first-class integration with its own identity and fine-grained permissions,
  distinct from a personal token.
- **Codespace:** a full development environment that runs in the cloud, created straight from your
  repo.
- **GitHub Pages:** free static hosting for public repositories.

## CI/CD and Actions

- **CI (Continuous Integration):** automatically checking every change with tests, linters, and
  builds, so problems surface early.
- **CD (Continuous Deployment or Delivery):** automatically publishing your app once the checks pass.
- **GitHub Actions:** GitHub's built-in automation system. Its workflows live in
  `.github/workflows/`.
- **Workflow:** a YAML file describing automation, made of events (`on`), `jobs`, and `steps`.
- **Action:** a reusable unit of automation you invoke with `uses:`, such as `actions/checkout`.
  Pin its version rather than tracking a moving branch.

## Kiro

- **Workspace:** the project folder you currently have open in Kiro. It defines what Kiro can see and
  touch.
- **Steering file:** Markdown in `.kiro/steering/` that gives Kiro persistent rules and context, so
  you stop repeating yourself.
- **Spec:** a feature captured deliberately across three files in `.kiro/specs/`: `requirements.md`,
  then `design.md`, then `tasks.md`.
- **Agent hook:** JSON in `.kiro/hooks/` that runs an action when an event happens, for example
  checking your site on every file save.
- **MCP (Model Context Protocol):** an open standard that lets Kiro use external tools and data
  through **MCP servers**, configured in `mcp.json`.
- **Custom agent:** a saved, specialized Kiro configuration made of a prompt, a set of tools, and
  optional resources, tuned for one kind of task.

## Web basics

- **Static site:** a site made of plain HTML, CSS, and JavaScript files that a server hands over
  as-is, with no server-side build required. Fast, cheap, and hard to attack.
- **HTML, CSS, and JavaScript:** the structure, the styling, and the behavior of a web page,
  respectively.
