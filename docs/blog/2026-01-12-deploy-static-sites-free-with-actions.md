---
slug: deploy-static-sites-free-with-actions
title: "Ship It on Merge: Deploying Static Sites Free with GitHub Actions + Pages"
authors: [starterkit]
tags: [github-pages, ci-cd, actions, deployment]
description: A friendly deep-dive into automated static-site deployment — how it works, why it beats manual publishing, and the high-level config to wire it up.
---

Manual deploys are a trap. You build the site on your laptop, drag some files somewhere, and
three weeks later nobody remembers how. Let's replace that ritual with something better: **push
code, and the site publishes itself.** 🚀

This post is a fun-but-thorough tour of automated static-site deployment on GitHub — the *how*,
the *why*, and the high-level *config*. It's generic: bring any static-site generator you like.

<!-- truncate -->

## The mental model

There are three moving parts, and they hand off like a relay race:

```mermaid
graph LR
    A[You push / merge to main] --> B[Actions builds the site]
    B --> C[Upload the built files as a Pages artifact]
    C --> D[Deploy the artifact to GitHub Pages]
    D --> E[Live at your public URL]
```

- **Build** turns your source (Markdown, templates, components) into a folder of plain
  HTML/CSS/JS.
- **Upload** packages that folder as a *Pages artifact*.
- **Deploy** publishes the artifact to GitHub Pages.

The beauty: it's all declared in a versioned YAML file, so the process lives *with* the project
and runs the same every time.

## Why bother (the benefits)

- **Reproducible:** the same steps run on a clean machine every time — no "it worked on mine."
- **Auditable:** every deploy is a logged workflow run you can inspect or re-run.
- **Zero bottleneck:** anyone who can merge can ship; no designated "deploy person."
- **Free:** for public repositories, both the build minutes and Pages hosting are free.
- **Safe:** combined with branch protection, only reviewed, checked changes ever publish.

## The high-level config

A single workflow file does it. Here's the shape (trimmed to the essentials):

```yaml
name: Deploy site

on:
  push:
    branches: [main]
  workflow_dispatch:        # lets you deploy manually too

permissions:
  contents: read
  pages: write              # required to publish
  id-token: write           # required for the deploy action's auth

concurrency:
  group: pages              # don't let two deploys race
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # --- your generator's build goes here ---
      # e.g. install deps, then produce a ./build (or ./_site, ./public) folder
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build          # the folder your build produced

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages       # the built-in deployment environment
      url: ${{ steps.deploy.outputs.page_url }}
    steps:
      - id: deploy
        uses: actions/deploy-pages@v4
```

Three details worth knowing:

1. **Permissions matter.** `pages: write` and `id-token: write` are required; without them the
   deploy step fails with a permissions error.
2. **`configure-pages` knows your URL.** It resolves the site's base URL for you — handy if your
   generator needs to know it lives at `/<repo>/` rather than the domain root.
3. **The `github-pages` environment** is where the deployment shows up (and where you can add
   protection rules like a required reviewer before publishing).

## The one-time switch

Turn Pages on to use Actions as the source:

> **Settings → Pages → Build and deployment → Source: GitHub Actions.**

After that, your site publishes to `https://<owner>.github.io/<repo>/` on every merge. Done. ✅

## Nice upgrades once the basics work

- **Smoke test the deploy.** Add a final step that `curl`s the published URL and fails if it
  doesn't return `200`. Cheap insurance that the site is actually reachable.
- **Path filters.** Trigger the deploy only when site files change (`paths: ["site/**"]`) so
  unrelated commits don't rebuild.
- **Preview builds.** Run the *build* (not the deploy) on pull requests to catch failures before
  merge.
- **Custom domain.** Pages supports custom domains for free — you just pay your registrar for the
  domain itself, then point DNS at Pages and flip on "Enforce HTTPS."

## A word on "static"

"Static" doesn't mean "boring." It means the server just hands over files — which makes the site
fast, cheap, secure (no server to hack), and trivially cacheable on a CDN. For docs, blogs,
landing pages, handbooks, and demos, static + Pages is a sweet spot that's hard to beat.

## TL;DR

Write a small workflow, flip one setting, and deploying becomes a *non-event* — a thing that just
happens when you merge. That's the whole point: the best deploy process is the one you never have
to think about. 😌

*Prefer the formal rationale? The companion ADR — "Foundational Practices for New GitHub Pages
Repositories" — records why automated deployment (and its six siblings) should be the default for
every new repo.*
