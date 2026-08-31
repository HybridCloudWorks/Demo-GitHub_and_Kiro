---
slug: new-repo-starter-kit
title: "The 7-Point Starter Kit for Any New GitHub Pages Repo"
authors: [starterkit]
tags: [github-pages, ci-cd, devex, getting-started]
description: A fun, practical checklist of the seven things to set up the moment you create a static-site repo — with high-level config and deploy notes for each.
---

You just clicked **New repository**. The cursor is blinking. What now? 🫣

Most of us start typing code and *promise ourselves* we'll "set up the boring stuff later."
Reader, later never comes. So here's a friendly, do-it-once **starter kit** — seven things that
turn a bare repo into a polished, self-driving little machine. None of it is hard. All of it pays
for itself the first week.

We'll keep it generic (works for any static site on GitHub Pages) and give you the
**high-level config + deploy** for each. Grab a coffee. ☕

<!-- truncate -->

## The whole kit at a glance

1. Automated deploy pipeline
2. Quality checks on every change
3. Branch protection
4. A real landing page + README
5. Social / Open Graph preview
6. A dev container
7. A seeded issue backlog

Think of it as *"the pit crew you set up before the race,"* not chores. Let's go. 🏁

## 1. Automated deploy pipeline — "merge = publish"

**The vibe:** you should never deploy by dragging files around. Merging to your default branch
should publish the site. That's it.

**How, at a high level:** add a CI workflow that builds your static site and hands the output to
GitHub Pages using the first-party Pages actions. In plain YAML terms:

```yaml
on:
  push:
    branches: [main]
permissions:
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # ...build your site into a folder, e.g. ./build...
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with: { path: build }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages }
    steps:
      - uses: actions/deploy-pages@v4
```

**Deploy switch:** in the repo, set **Settings → Pages → Source: GitHub Actions** once. From then
on every merge republishes automatically. **Benefit:** reproducible, logged, one-click-free
deploys — and it's free for public repos.

## 2. Quality checks — catch the silent failures

**The vibe:** static sites fail *quietly*. A broken link or a busted tag just… ships. 😬 Make the
robots yell instead.

**How:** run a **strict build** (fail on broken internal links) plus a **linter** on every push
and pull request:

```yaml
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: <your build command that fails on broken links>
      - run: <your markdown/HTML/style linter>
```

**Benefit:** "green means shippable." You find the typo before your readers do.

## 3. Branch protection — the bouncer for `main`

**The vibe:** `main` is the VIP section. Nothing gets in without a wristband (a PR) and a quick
pat-down (passing checks).

**How, high level:** **Settings → Rules → Rulesets → New branch ruleset**, target `main`, and turn
on:

- Require a pull request before merging
- Require your status checks (build + lint) to pass
- Require branches to be up to date

**Benefit:** untested changes physically cannot reach production. Works great even solo — you're
protecting future-you.

:::tip
A required check only appears in the list *after it has run once*. Open one PR, let CI run, then
add the checks as required.
:::

## 4. A landing page + README — make a first impression

**The vibe:** a raw file listing is the digital equivalent of a door with no sign. Give visitors a
front door. 🚪

**How:** most static-site generators let you drop in a custom homepage (a hero + a few feature
cards). Pair it with a README that answers three questions in the first screen: *What is this?
Who is it for? How do I start?*

**Benefit:** fewer bounces, more contributors, instant credibility.

## 5. Social / Open Graph preview — free marketing on every link

**The vibe:** you paste your link in a chat and it renders as… naked text. Sad. Add a card. 🎴

**How:** set a preview image plus Open Graph/Twitter meta tags (most generators have an `image`
config field). One 1200×630 image and a title/description is enough:

```html
<meta property="og:title" content="My Project" />
<meta property="og:description" content="What it does, in one line." />
<meta property="og:image" content="https://example.com/img/social-card.png" />
```

**Benefit:** every shared link becomes a mini billboard. Click-through goes up for basically zero
effort.

## 6. A dev container — kill "works on my machine"

**The vibe:** a contributor shows up, spends an hour installing runtimes, and rage-quits. Prevent
that. 🧰

**How:** commit a `.devcontainer/devcontainer.json` declaring the runtime, tools, and a setup
command:

```json
{
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
  "postCreateCommand": "npm install",
  "forwardPorts": [3000]
}
```

**Deploy switch:** **Code → Codespaces → Create codespace** and you're coding in the cloud in
minutes. **Benefit:** identical environment for everyone — local, cloud, and CI.

## 7. A seeded issue backlog — an on-ramp for helpers

**The vibe:** an empty issue tracker says "nothing to do here." A curated one says "jump in!" 🙌

**How:** open a handful of well-formed issues with clear titles, a short body, acceptance
criteria, and labels (`good first issue` is magic). You can even do it from the terminal with the
GitHub CLI:

```bash
gh issue create --title "Add an About section" \
  --body "Acceptance: a new About section with a heading and a short bio." \
  --label "good first issue"
```

**Benefit:** contribution becomes self-service and your project *looks* alive (because it is).

## The payoff

Set these seven up once — ideally from a template — and your repo basically runs itself: it
publishes on merge, blocks broken changes, welcomes visitors, markets its own links, onboards
contributors in minutes, and hands newcomers a ready to-do list.

That's a lot of leverage for an afternoon of setup. Future-you says thanks. 💙

*Want the professional, decision-record version of this argument? See the companion ADR:*
*"Foundational Practices for New GitHub Pages Repositories."*
