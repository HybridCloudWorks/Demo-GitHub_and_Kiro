---
id: l7-branch-protection-advanced
title: Advanced Branch Protection & Rulesets
sidebar_label: 1. Advanced protection
sidebar_position: 2
description: Go beyond the basics with required checks, approvals, linear history, and rulesets.
---

# Advanced Branch Protection & Rulesets

> **Level:** L7 · **Estimated time:** 15 min · **Prerequisites:** L3 branch protection

## 🎯 Objectives

By the end of this lesson you will be able to:

- Require specific status checks and approvals before merge
- Enforce linear history and up-to-date branches
- Use **rulesets** to manage protections at scale

## 📖 Lesson

### Beyond "require a PR"

In Level 3 you required pull requests. Now tighten the rules on `main`:

| Rule | Effect |
|------|--------|
| **Require status checks to pass** | pick specific checks (lint, grader, project check) that must be green |
| **Require branches up to date** | must merge latest `main` before merging the PR |
| **Require approvals** | N reviewer approvals before merge |
| **Dismiss stale approvals** | re-review needed after new commits |
| **Require linear history** | no merge commits — squash/rebase only |
| **Require signed commits** | commits must be cryptographically signed |
| **Include administrators** | rules apply to admins too |

### Rulesets vs. classic rules

**Rulesets** are the newer, more flexible way to define protections. Advantages:

- Target **multiple branches/tags** with patterns (e.g. `main`, `release/*`).
- **Layer** several rulesets; you can see which rules apply and why.
- Set them to **evaluate** (dry-run) before **enforcing**.

Create one under **Settings → Rules → Rulesets → New branch ruleset**, choose the target
branches, and enable the rules you want.

### Recommended starter set for `main`

1. Require a pull request (≥1 approval for teams).
2. Require your CI status checks to pass.
3. Require branches to be up to date.
4. Optionally require linear history (pairs well with "Squash and merge").

:::warning Checks must run at least once
A status check only appears in the "required checks" list after it has run at least once on the
repo. Push a PR so your workflows run, then add them as required.
:::

## ✅ Checkpoint

- [ ] `main` requires PRs and passing status checks.
- [ ] I chose specific required checks (e.g. lint, grader, project).
- [ ] I understand rulesets can target multiple branches.

## 🧪 Demo / Try it

Add a ruleset to `main` requiring your CI checks. Open a PR that intentionally fails a check and
confirm GitHub blocks the merge until it's fixed.

## ➡️ Next

**[Environments & secrets](./environments-and-secrets.md)**.
