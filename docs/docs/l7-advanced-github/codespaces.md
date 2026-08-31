---
id: l7-codespaces
title: Codespaces
sidebar_label: 4. Codespaces
sidebar_position: 5
description: Develop in a cloud environment straight from your repository.
---

# Codespaces

> **Level:** L7 · **Estimated time:** 15 min · **Prerequisites:** a GitHub repo

## 🎯 Objectives

By the end of this lesson you will be able to:

- Explain what a **Codespace** is
- Launch one for your repository
- Customize it with a `devcontainer.json`

## 📖 Lesson

### What is a Codespace?

A **Codespace** is a full development environment that runs **in the cloud**, created from your
repository. It gives you an editor, a terminal, and your code — reachable from a browser — with
nothing to install locally. Great for trying a project on any machine, or onboarding quickly.

### Launching one

On your repo, select **Code → Codespaces → Create codespace on main**. GitHub spins up a
container, clones your repo, and opens an editor. You can run the same commands you use locally:

```bash
node project/scripts/check-static-site.js
python3 -m http.server 8000
```

:::note Free minutes
Codespaces includes a monthly free allowance for personal accounts; beyond that it's billed by
usage. For light course work you'll typically stay within the free tier — check the current
limits in your account.
:::

### Customizing with a dev container

Add a `.devcontainer/devcontainer.json` to define the tools your Codespace should have:

```json
{
  "name": "Course Dev",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
  "postCreateCommand": "cd docs && npm install",
  "customizations": {
    "vscode": { "extensions": [] }
  }
}
```

Now anyone who opens a Codespace gets Node 20 and the docs dependencies installed automatically —
a reproducible environment for every contributor.

### Codespaces + Kiro

The same Git/GitHub habits apply in a Codespace: branch, commit, push, PR. It's another place to
do the exact workflow you've practiced — just hosted in the cloud.

## ✅ Checkpoint

- [ ] I can explain what a Codespace is.
- [ ] I launched a Codespace (or know the steps).
- [ ] I understand a `devcontainer.json` customizes the environment.

## 🧪 Demo / Try it

Launch a Codespace on your repo and run `node project/scripts/check-static-site.js` in its
terminal. Same project, running in the cloud.

## ➡️ Next

Bring it all together: **[🏆 Capstone](./capstone.md)**.
