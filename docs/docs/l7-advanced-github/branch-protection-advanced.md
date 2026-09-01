---
id: l7-branch-protection-advanced
title: Advanced Branch Protection & Rulesets
sidebar_label: 1. Advanced protection
sidebar_position: 2
description: Go beyond require-a-PR with specific required checks, approvals, linear history, and rulesets that scale across many branches.
---

# Advanced Branch Protection & Rulesets

> **Level:** L7 · **Estimated time:** 15 min · **Prerequisites:** L3 branch protection

## What you'll get out of this lesson

You'll require specific status checks and approvals before merge, enforce linear history and
up-to-date branches, and use **rulesets** to manage protections across more than one branch at a
time.

## Beyond "require a pull request"

In Level 3 you turned on the basic rule: changes must go through a PR. That's the foundation. Now
you'll tighten `main` with the fuller set of controls that production repositories use:

| Rule | Effect |
|------|--------|
| **Require status checks to pass** | pick specific checks (lint, grader, project check) that must be green |
| **Require branches up to date** | must merge the latest `main` before the PR can merge |
| **Require approvals** | N reviewer approvals required before merge |
| **Dismiss stale approvals** | new commits invalidate old approvals, forcing a re-review |
| **Require linear history** | no merge commits; squash or rebase only |
| **Require signed commits** | commits must be cryptographically signed |
| **Include administrators** | the rules apply to admins too, not just everyone else |

That last one deserves a moment. It's tempting to exempt admins "just in case," but the whole point
of protection is that it applies even when someone in a hurry has the power to bypass it. Including
administrators is what turns a suggestion into a real guardrail.

## Rulesets versus classic branch rules

**Rulesets** are the newer, more flexible way to define protections, and they solve real pain points
of the older per-branch rules. A single ruleset can target **multiple branches or tags** by pattern,
like `main` and `release/*` at once. You can **layer** several rulesets and see exactly which rules
apply to a branch and why, instead of guessing. And you can set a ruleset to **evaluate** first, a
kind of dry run, before you flip it to **enforce**, so you can see what it *would* block without
actually blocking anyone yet.

Create one under **Settings → Rules → Rulesets → New branch ruleset**, choose the target branches,
and switch on the rules you want.

## A sensible starter set for `main`

If you're not sure where to begin, this combination covers most projects well:

1. Require a pull request, with at least one approval on a team.
2. Require your CI status checks to pass.
3. Require branches to be up to date before merging.
4. Optionally require linear history, which pairs naturally with "Squash and merge."

:::warning A check has to run before you can require it
Here's the gotcha that stumps people: a status check only shows up in the "required checks" list
*after* it has run on the repo at least once. So the order matters. Push a PR first so your workflows
actually execute, and only then go back and mark them as required. Trying to require a check that's
never run just leaves you staring at an empty list.
:::

## Quick self-check

- [ ] `main` requires PRs and passing status checks.
- [ ] I chose specific required checks, like lint, grader, and project.
- [ ] I understand that rulesets can target multiple branches at once.

## Try it

Add a ruleset to `main` requiring your CI checks. Then open a PR that fails a check on purpose (break
a file the checker validates) and confirm GitHub blocks the merge button until you fix it. Seeing the
merge genuinely blocked is the proof that your protection is doing its job.

## Next

**[Environments & secrets](./environments-and-secrets.md)**.
