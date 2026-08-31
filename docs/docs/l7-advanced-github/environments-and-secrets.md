---
id: l7-environments-and-secrets
title: Environments & Secrets
sidebar_label: 2. Environments & secrets
sidebar_position: 3
description: Store secrets safely and gate deployments with GitHub environments.
---

# Environments & Secrets

> **Level:** L7 · **Estimated time:** 15 min · **Prerequisites:** GitHub Actions (L4)

## 🎯 Objectives

By the end of this lesson you will be able to:

- Store **secrets** and use them in workflows
- Create an **environment** with protection rules
- Explain why the deploy workflow uses the `github-pages` environment

## 📖 Lesson

### Secrets

Some workflows need sensitive values — API keys, tokens. **Never** hard-code these. Store them
as **secrets**: **Settings → Secrets and variables → Actions → New repository secret**.

Use one in a workflow via the `secrets` context:

```yaml
      - name: Use a secret
        run: ./deploy.sh
        env:
          API_TOKEN: ${{ secrets.API_TOKEN }}
```

Secrets are masked in logs and never exposed to forked-PR workflows by default.

:::note Secrets vs. variables
**Secrets** are encrypted and masked (passwords, tokens). **Variables** are plain configuration
values (non-sensitive), set in the same place under the "Variables" tab.
:::

### Environments

An **environment** is a named deployment target (e.g. `production`, `staging`, `github-pages`)
that can carry its own secrets and **protection rules**:

- **Required reviewers** — a human must approve before the deploy job runs.
- **Wait timer** — delay before deploying.
- **Deployment branches** — only allow deploys from specific branches.

### You've already used one

Look at [`deploy-docs.yml`](https://github.com/your-username/github-kiro-course/blob/main/.github/workflows/deploy-docs.yml):
the `deploy` job declares `environment: github-pages`. GitHub Pages deployments run through this
built-in environment, which is why the deploy shows up under the repo's **Environments**.

```yaml
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
```

## ✅ Checkpoint

- [ ] I can add a repository secret and reference it in a workflow.
- [ ] I understand what an environment is and its protection rules.
- [ ] I found the `github-pages` environment in the deploy workflow.

## 🧪 Demo / Try it

In your repo, open **Settings → Environments** and inspect `github-pages` (created after your
first Pages deploy). Add a required reviewer to see approval-gated deploys (optional).

## ➡️ Next

**[GitHub Apps & the Actions marketplace](./github-apps.md)**.
