---
id: l4-deploy-the-app
title: Deploy the App to GitHub Pages
sidebar_label: 3. Deploy the app
sidebar_position: 4
description: Automatically publish your static app to GitHub Pages for free, and understand why this repo's app-deploy workflow is set up the way it is.
---

# Deploy the App to GitHub Pages

> **Level:** L4 · **Estimated time:** 25 min · **Prerequisites:** your first workflow

## What you'll get out of this lesson

You'll learn to deploy a static site to **GitHub Pages** with a workflow, enable Pages for a
repository, and reach your app at its public `github.io` URL.

## A quick recap of the hosting

**GitHub Pages** hosts static sites for free on public repositories. There's no server to run and
nothing to self-host: your workflow builds and packages the site, hands it to Pages, and Pages serves
it at a predictable address:

```text
https://<your-username>.github.io/<your-repo>/
```

```mermaid
graph LR
    A[Push to main] --> B[Actions: package project/]
    B --> C[upload-pages-artifact]
    C --> D[deploy-pages]
    D --> E[Live at username.github.io/repo]
```

## The deploy workflow

The reference workflow lives at
[`.github/workflows/deploy-app.yml`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/blob/main/.github/workflows/deploy-app.yml).
Read through it and you'll recognize the shape from the last lesson. Its key steps are: **check out**
your code, **validate** the static site with `node project/scripts/check-static-site.js`, **configure
Pages** and **upload** the `project/` folder as a Pages artifact, and finally **deploy** that artifact
with `actions/deploy-pages`. The validation step is deliberately before the deploy, so a broken site
never gets published in the first place.

:::warning A repository hosts exactly one Pages site
This is the detail that confuses people in this course, so it's worth stating plainly: a single
repository can host only **one** GitHub Pages site. In this course monorepo, that one slot is already
taken by the **course website** you're reading right now. That's precisely why `deploy-app.yml` here
is set to run **manually** rather than on every push. It's meant to be the reference you copy into
your **own** app repository, where nothing else is competing for the Pages slot and it can run
automatically.
:::

## Publishing your own app for real

When you want *your* app on the internet, the clean approach is to give it its own repository:

1. Create a **new** repository just for your app, or push `project/` out to a repo of its own.
2. Add `deploy-app.yml`, changing the trigger to run on push to `main` and adjusting the `path` to
   match where your files actually live.
3. Go to **Settings → Pages → Source: GitHub Actions** to point Pages at your workflow.
4. Push, and your app goes live at its `github.io` URL.

That's genuinely the whole thing. Once it's set up, publishing a change is just merging to `main`.

## Quick self-check

- [ ] I understand that a repo hosts only one Pages site.
- [ ] I can read the deploy workflow's steps and say what each does.
- [ ] I deployed a static app (this project or my own copy) and opened its public URL.

## Try it

In your app repo, enable Pages with Source set to GitHub Actions, then run the deploy workflow. Open
the URL it reports in the run summary. Seeing your own work served from a real, public address, at no
cost, is a genuinely good moment; don't rush past it.

## Next

Prove your workflow skills: **[Lab: write a CI workflow](./lab.md)**.
