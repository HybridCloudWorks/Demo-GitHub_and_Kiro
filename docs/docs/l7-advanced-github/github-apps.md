---
id: l7-github-apps
title: GitHub Apps & the Actions Marketplace
sidebar_label: 3. GitHub Apps
sidebar_position: 4
description: Extend GitHub with Apps that act as their own identity, and safely reuse published Actions from the marketplace in your workflows.
---

# GitHub Apps & the Actions Marketplace

> **Level:** L7 · **Estimated time:** 18 min · **Prerequisites:** GitHub Actions (L4)

## What you'll get out of this lesson

You'll be able to explain what a **GitHub App** is and how it differs from a personal token, install
one from the Marketplace, and reuse published **Actions** in your workflows without reinventing them.

## What a GitHub App is

A **GitHub App** is a first-class integration you install on your account or specific repositories.
The cleanest way to understand it is by contrast with a personal access token. A token acts as *you*,
with whatever access your account has; an App acts as **its own identity**, separate from any person.
An App also gets **fine-grained permissions** that you review and approve at install time, rather than
inheriting your whole account's reach, and it works with **short-lived tokens** issued per operation
instead of one long-lived secret. That combination makes Apps both safer and clearer about who did
what.

You install Apps from the **Marketplace** for things like code coverage, project management, or CI
helpers. Anything that's really a bot, such as something that comments on every PR, is almost always
better implemented as an App than as a person's token.

## Reusing Actions from the Marketplace

You've actually been reusing published Actions since Level 4. Every `uses:` line in a workflow pulls in
someone else's ready-made action:

```yaml
      - uses: actions/checkout@v4          # official
      - uses: actions/setup-node@v4        # official
      - uses: actions/upload-pages-artifact@v3
```

The **[GitHub Marketplace](https://github.com/marketplace?type=actions)** has thousands more, covering
just about any CI task you can imagine, which means most of the time you're assembling existing pieces
rather than writing automation from scratch.

:::warning Pin the actions you trust, and know what they do
This is the security point that matters. A third-party action runs *inside your CI* with access to
your repository, so it's not neutral code. Prefer official or verified actions, take a minute to read
what an action actually does before adding it, and **pin the version** you use, either a tag like
`@v4` or, for extra safety, a specific commit SHA. Tracking a moving branch means a maintainer (or an
attacker who compromises them) can change the code running in your pipeline without you noticing.
:::

## Going further (stretch)

If you want to keep pulling this thread, you can publish your own **composite** or **JavaScript**
action, or even build a full GitHub App with a webhook backend. Both are beyond this course, but you
now understand the landscape well enough to explore them when a real need comes up.

## Quick self-check

- [ ] I can explain how a GitHub App differs from a personal token.
- [ ] I know where the Actions Marketplace is.
- [ ] I understand why pinning action versions matters.

## Try it

Browse the [Actions Marketplace](https://github.com/marketplace?type=actions) and find one action you
could imagine adding to your CI. Note its exact `uses:` line and the pinned version you'd use. Just
getting in the habit of reading the `uses:` line critically is worth the exercise.

## Next

**[Codespaces](./codespaces.md)**.
