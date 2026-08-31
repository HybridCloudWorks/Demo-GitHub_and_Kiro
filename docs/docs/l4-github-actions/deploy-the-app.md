---
id: l4-deploy-the-app
title: Deploy the App to GitHub Pages
sidebar_label: 3. Deploy the app
sidebar_position: 4
description: Automatically publish your static app to GitHub Pages — free, public hosting.
---

# Deploy the App to GitHub Pages

> **Level:** L4 · **Estimated time:** 25 min · **Prerequisites:** your first workflow

## 🎯 Objectives

By the end of this lesson you will be able to:

- Deploy a static site to **GitHub Pages** with a workflow
- Enable Pages for your repository
- Reach your app at its public `github.io` URL

## 📖 Lesson

### The hosting recap

**GitHub Pages** hosts static sites **for free** on public repositories — no server, no
self-hosting. Your workflow builds/packages the site and hands it to Pages, which serves it at:

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

### The deploy workflow

The reference workflow lives at
[`.github/workflows/deploy-app.yml`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/blob/main/.github/workflows/deploy-app.yml).
Its key steps:

1. **Check out** your code.
2. **Validate** the static site (`node project/scripts/check-static-site.js`).
3. **Configure Pages**, then **upload** the `project/` folder as a Pages artifact.
4. **Deploy** the artifact with `actions/deploy-pages`.

:::warning One Pages site per repository
A repository can host only **one** GitHub Pages site. In this course monorepo, Pages is already
used by the **course website**. That's why `deploy-app.yml` is **manual** here — it's the
reference you copy into your **own** app repository, where it runs automatically on push.
:::

### Publishing your app for real

The clean way to ship *your* app:

1. Create a **new** repository just for your app (or push `project/` to its own repo).
2. Add `deploy-app.yml`, changing the trigger to run on push to `main` and the `path` to match
   where your files live.
3. **Settings → Pages → Source: GitHub Actions.**
4. Push. Your app goes live at your `github.io` URL. 🎉

## ✅ Checkpoint

- [ ] I understand a repo hosts only one Pages site.
- [ ] I can read the deploy workflow's steps.
- [ ] I deployed a static app (this project or my own copy) and opened its public URL.

## 🧪 Demo / Try it

In your app repo, enable Pages (Source: GitHub Actions) and run the deploy workflow. Visit the
URL it reports — your app is on the internet, for free.

## ➡️ Next

Prove your workflow skills: **[🧪 Lab: write a CI workflow](./lab.md)**.
