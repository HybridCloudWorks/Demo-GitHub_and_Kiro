---
id: l4-what-is-ci-cd
title: What is CI/CD?
sidebar_label: 1. What is CI/CD?
sidebar_position: 2
description: Continuous Integration and Continuous Deployment explained in plain language, plus how GitHub Actions runs your workflows.
---

# What is CI/CD?

> **Level:** L4 · **Estimated time:** 10 min · **Prerequisites:** finished Level 3

## What you'll get out of this lesson

You'll be able to define **CI** and **CD** in plain terms, explain what GitHub **Actions** does, and
name the parts of a workflow: events, jobs, and steps.

## CI and CD, without the jargon

**Continuous Integration (CI)** means automatically *checking* every change as it arrives. Every
push and every pull request kicks off your tests, linters, and builds, so a mistake gets caught in
minutes rather than surfacing days later when nobody remembers what changed. The word "continuous" is
the point: the checking happens constantly and automatically, not whenever someone remembers to run
it.

**Continuous Deployment (or Delivery), the CD half**, means automatically *publishing* your app once
those checks pass, so shipping becomes push-button or fully hands-off.

Put together, CI/CD boils down to a simple promise: you push code, and robots verify it and ship it.
The value isn't that machines are smarter than you; it's that they never forget and never get tired.

## What GitHub Actions is

**GitHub Actions** is GitHub's built-in automation system. You describe **workflows** as YAML files
under `.github/workflows/`, and GitHub runs them on fresh virtual machines it provides for you.
There's a generous allotment of free minutes, and for public repositories it's free outright, which
is why it's such a natural fit for learning.

## The anatomy of a workflow

Every workflow shares the same skeleton. Once you can spot these parts, you can read almost any
workflow file you come across:

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
| `jobs` | groups of steps; different jobs can run in parallel |
| `runs-on` | the kind of machine to use, like `ubuntu-latest` |
| `steps` | the ordered actions and commands inside a job |
| `uses` | run a prebuilt **action**, such as checking out your code |
| `run` | run a shell command directly |

The distinction between `uses` and `run` is worth internalizing early: `uses` pulls in someone else's
reusable action so you don't reinvent it, while `run` is just you typing a shell command.

:::note You've been surrounded by these all along
This very course repo already runs several workflows: one lints Markdown, one grades the labs, one
checks the project, and one deploys the docs. Open `.github/workflows/` and skim them. You now know
enough to read them, and reading real workflows is the fastest way to get comfortable with the
shape.
:::

## Quick self-check

- [ ] I can explain CI and CD in a sentence each.
- [ ] I know workflows live in `.github/workflows/*.yml`.
- [ ] I can point out `on`, `jobs`, `runs-on`, and `steps` in a workflow.

## Try it

Open `.github/workflows/lint.yml` in your repo. Find its `on:` events, its single job, and its steps,
then predict out loud when it'll run. Checking your prediction against the Actions tab later is a
satisfying way to confirm you've got it.

## Next

**[Your first workflow](./first-workflow.md)**.
