---
id: l7-github-apps
title: GitHub Apps & the Actions Marketplace
sidebar_label: 3. GitHub Apps
sidebar_position: 4
description: Extend GitHub with Apps and reusable Actions from the marketplace.
---

# GitHub Apps & the Actions Marketplace

> **Level:** L7 · **Estimated time:** 18 min · **Prerequisites:** GitHub Actions (L4)

## 🎯 Objectives

By the end of this lesson you will be able to:

- Explain what a **GitHub App** is and how it differs from a personal token
- Install an App from the Marketplace
- Reuse published **Actions** in your workflows

## 📖 Lesson

### GitHub Apps

A **GitHub App** is a first-class integration you install on your account or repos. Compared to
using a personal access token, an App:

- Acts as **its own identity** (not a person).
- Has **fine-grained permissions** you approve at install time.
- Gets a **short-lived token** per operation — more secure.

You install Apps from the **Marketplace** (e.g. code coverage, project management, CI helpers).
Some tasks (like a bot commenting on PRs) are best done by an App.

### Reusing Actions from the Marketplace

You've already reused Actions — every `uses:` line pulls a published action:

```yaml
      - uses: actions/checkout@v4          # official
      - uses: actions/setup-node@v4        # official
      - uses: actions/upload-pages-artifact@v3
```

The **[GitHub Marketplace](https://github.com/marketplace?type=actions)** has thousands more.

:::warning Pin what you trust
Third-party actions run in your CI with access to your repo. Prefer official/verified actions,
read what they do, and **pin versions** (a tag like `@v4`, or a commit SHA for extra safety)
rather than tracking a moving branch.
:::

### Building your own (stretch)

You can publish your own **composite** or **JavaScript** action, or even your own GitHub App with
a webhook backend. That's beyond this course, but you now know the landscape.

## ✅ Checkpoint

- [ ] I can explain how a GitHub App differs from a personal token.
- [ ] I know where the Actions Marketplace is.
- [ ] I understand why pinning action versions matters.

## 🧪 Demo / Try it

Browse the [Actions Marketplace](https://github.com/marketplace?type=actions) and find one action
you might add to your CI. Note its `uses:` line and pinned version.

## ➡️ Next

**[Codespaces](./codespaces.md)**.
