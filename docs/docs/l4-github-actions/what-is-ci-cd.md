---
id: l4-what-is-ci-cd
title: What is CI/CD?
sidebar_label: 1. What is CI/CD?
sidebar_position: 2
description: Continuous Integration and Continuous Deployment explained for beginners.
---

# What is CI/CD?

> **Level:** L4 · **Estimated time:** 10 min · **Prerequisites:** finished Level 3

## 🎯 Objectives

By the end of this lesson you will be able to:

- Define **CI** and **CD** in plain language
- Explain what GitHub **Actions** does
- Name the parts of a workflow: events, jobs, steps

## 📖 Lesson

### CI and CD

- **Continuous Integration (CI):** automatically **checking** every change — running tests,
  linters, and builds — so problems are caught early, on every push or pull request.
- **Continuous Deployment/Delivery (CD):** automatically **publishing** your app after checks
  pass, so releasing is push-button (or fully automatic).

Together, CI/CD means: *you push code, robots verify it and ship it.*

### GitHub Actions

**GitHub Actions** is GitHub's built-in automation. You describe **workflows** in YAML files
under `.github/workflows/`. GitHub runs them on virtual machines it provides — free minutes are
included, and it's completely free for public repositories.

### Anatomy of a workflow

```yaml
name: Example CI          # a friendly name

on:                       # EVENTS that trigger the workflow
  push:
    branches: [main]
  pull_request:

jobs:                     # one or more JOBS run on a machine
  test:
    runs-on: ubuntu-latest
    steps:                # STEPS run in order inside the job
      - uses: actions/checkout@v4      # a reusable "action"
      - run: echo "Hello from CI!"      # a shell command
```

| Part | Meaning |
|------|---------|
| `on` | the **events** that start the workflow (push, pull_request, schedule, manual) |
| `jobs` | groups of steps; jobs can run in parallel |
| `runs-on` | the type of machine (e.g. `ubuntu-latest`) |
| `steps` | ordered actions/commands |
| `uses` | run a prebuilt **action** (like checking out your code) |
| `run` | run a shell command |

:::note You've already seen these
This very course repo has workflows: one lints Markdown, one grades labs, one checks the
project, and one deploys the docs. Open `.github/workflows/` and skim them — you now know how to
read them!
:::

## ✅ Checkpoint

- [ ] I can explain CI and CD in a sentence each.
- [ ] I know workflows live in `.github/workflows/*.yml`.
- [ ] I can identify `on`, `jobs`, `runs-on`, and `steps`.

## 🧪 Demo / Try it

Open `.github/workflows/lint.yml` in your repo and find its `on:` events, its job, and its
steps. Predict when it runs.

## ➡️ Next

**[Your first workflow](./first-workflow.md)**.
