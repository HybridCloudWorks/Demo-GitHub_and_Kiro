---
id: l7-codespaces
title: Codespaces
sidebar_label: 4. Codespaces
sidebar_position: 5
description: Develop in a full cloud environment launched straight from your repository, and make it reproducible for everyone with a devcontainer.
---

# Codespaces

> **Level:** L7 · **Estimated time:** 15 min · **Prerequisites:** a GitHub repo

## What you'll get out of this lesson

You'll understand what a **Codespace** is, launch one for your repository, and customize it with a
`devcontainer.json` so everyone who opens it gets the same setup.

## What a Codespace is

A **Codespace** is a complete development environment that runs **in the cloud**, created from your
repository. It gives you an editor, a terminal, and your code, all reachable from a browser, with
nothing to install on your own machine. That's genuinely useful in a few situations: trying a project
from a borrowed or locked-down computer, onboarding a new contributor in minutes instead of an
afternoon of "install this, now install that," or just getting a clean environment when your local one
has drifted into a strange state.

## Launching one

On your repo, choose **Code → Codespaces → Create codespace on main**. GitHub spins up a container,
clones your repo into it, and opens an editor. From there you run the same commands you'd run locally:

```bash
node project/scripts/check-static-site.js
python3 -m http.server 8000
```

That's the point: it's not a different way of working, just the same workflow hosted elsewhere.

:::note About the free allowance
Codespaces includes a monthly free allowance for personal accounts, and beyond that it's billed by
usage. For the light work in this course you'll typically stay comfortably within the free tier, but
it's worth checking the current limits in your account so a long session doesn't surprise you.
:::

## Making it reproducible with a dev container

The real power shows up when you add a `.devcontainer/devcontainer.json` that declares the tools your
Codespace should have:

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

With that file committed, anyone who opens a Codespace on the repo automatically gets Node 20 and the
docs dependencies installed, with no manual setup and no "works on my machine" drift. That
reproducibility is the same idea as CI, applied to the development environment itself: the setup is
written down as code, so it's the same for everyone, every time.

## Codespaces and Kiro

Everything you've practiced still applies here: branch, commit, push, open a PR. A Codespace is simply
another place to run the exact workflow you already know, just hosted in the cloud rather than on your
laptop.

## Quick self-check

- [ ] I can explain what a Codespace is.
- [ ] I launched a Codespace, or I know the exact steps to create one.
- [ ] I understand that a `devcontainer.json` customizes the environment.

## Try it

Launch a Codespace on your repo and run `node project/scripts/check-static-site.js` in its terminal.
Same project, same command, same result, but running on a machine in the cloud that you didn't have to
set up. That's the whole promise in one small demonstration.

## Next

Now bring the entire course together: **[🏆 Capstone](./capstone.md)**.
