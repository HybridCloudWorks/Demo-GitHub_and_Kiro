---
id: l7-environments-and-secrets
title: Environments & Secrets
sidebar_label: 2. Environments & secrets
sidebar_position: 3
description: Store sensitive values safely as secrets and gate deployments with GitHub environments and their protection rules.
---

# Environments & Secrets

> **Level:** L7 · **Estimated time:** 15 min · **Prerequisites:** GitHub Actions (L4)

## What you'll get out of this lesson

You'll store **secrets** and use them in workflows, create an **environment** with protection rules,
and understand why the deploy workflow you've been using runs through the `github-pages` environment.

## Secrets: for the values you can't hard-code

Sooner or later a workflow needs a sensitive value: an API key, a deploy token, a password. The one
rule you must never break is that these never go in your code, not even "temporarily." Committed
secrets end up in history, and history is forever. Instead, store them as **secrets** under
**Settings → Secrets and variables → Actions → New repository secret**, and reference them in a
workflow through the `secrets` context:

```yaml
      - name: Use a secret
        run: ./deploy.sh
        env:
          API_TOKEN: ${{ secrets.API_TOKEN }}
```

GitHub does two helpful things here automatically. It masks secret values in logs, so they don't leak
into your workflow output, and it withholds them from workflows triggered by forked pull requests by
default, which stops a stranger's PR from exfiltrating your keys.

:::note Secrets are not the same as variables
It's an easy mix-up. **Secrets** are encrypted and masked, for genuinely sensitive things like
passwords and tokens. **Variables** are plain, non-sensitive configuration values, set in the same
place under the "Variables" tab. If seeing the value in a log would be a problem, it's a secret; if
not, it can be a variable.
:::

## Environments: named targets with rules

An **environment** is a named deployment target, like `production`, `staging`, or `github-pages`, and
it can carry its own secrets plus a set of **protection rules** that gate deployments to it. The three
you'll use most are **required reviewers**, where a human has to approve before the deploy job runs;
a **wait timer**, which inserts a deliberate delay before deploying; and **deployment branches**,
which restrict which branches are even allowed to deploy. Together these let you say things like "only
`main` can deploy to production, and only after Priya approves."

## You've been using one all along

Take a look at [`deploy-docs.yml`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/blob/main/.github/workflows/deploy-docs.yml).
Its `deploy` job declares `environment: github-pages`. Every GitHub Pages deployment runs through this
built-in environment, which is exactly why your deploys show up under the repo's **Environments** tab:

```yaml
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
```

So this isn't a new concept bolted on at the end; it's something your deploys have quietly used since
Level 4. Now you know what that line was doing.

## Quick self-check

- [ ] I can add a repository secret and reference it in a workflow.
- [ ] I understand what an environment is and what its protection rules do.
- [ ] I found the `github-pages` environment in the deploy workflow.

## Try it

In your repo, open **Settings → Environments** and inspect `github-pages` (it appears after your first
Pages deploy). If you want to see approval-gated deploys in action, add yourself as a required reviewer
and watch the next deploy pause for your sign-off. It's optional, but it makes the concept concrete.

## Next

**[GitHub Apps & the Actions marketplace](./github-apps.md)**.
