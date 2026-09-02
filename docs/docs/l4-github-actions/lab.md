---
id: l4-lab
title: "🧪 Lab: Write a CI Workflow"
sidebar_label: 4. 🧪 Graded Lab
sidebar_position: 5
description: Author a GitHub Actions workflow from scratch that runs a check on every push and pull request, then watch it run on a real PR.
---

# Lab: Write a CI Workflow

> **Level:** L4 · **Estimated time:** 30 min · **Prerequisites:** all L4 lessons

Time to write your own Continuous Integration workflow, the kind of automation that quietly guards
every change to a project. You've read workflows and run them; now you'll author one and prove it
runs.

## What you'll do

Full instructions and starter files are in the repository under
[`labs/l4/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/labs/l4). Inside the
starter folder, create `.github/workflows/ci.yml` that ticks all of these boxes:

1. It has a `name:`.
2. It triggers on **both** `push` and `pull_request`.
3. It defines a job with `runs-on:`.
4. It checks out the code with `actions/checkout`.
5. It runs at least one `run:` step.

Then do it for real: add the same workflow to your actual repository, push it on a branch, open a PR,
and watch the check run in the **Actions** tab. A workflow that only exists in a starter folder is
theory; a workflow you've watched go green on your own PR is a skill.

## Run the grader

```bash
node labs/_grader/grade.js l4 labs/l4/starter    # fails until you finish
node labs/_grader/grade.js l4 labs/l4/solution   # the reference passes 9/9
```

## How this maps to the project

Level 4 is where automated deployment joins the course project. The app-deploy workflow lives at
[`.github/workflows/deploy-app.yml`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/blob/main/.github/workflows/deploy-app.yml)
and is tagged **`milestone-l4`**, so the thing you're practicing here is the same thing that ships the
real app.

## Quick self-check

- [ ] The grader reports every required check passing.
- [ ] On GitHub, my workflow ran on a pull request.

## Next

That's Level 4 done, and your projects now check and deploy themselves. Continue to
**[Level 5 · Kiro Advanced Authoring](/docs/level-5)** to make Kiro itself work smarter with steering,
specs, and hooks.
