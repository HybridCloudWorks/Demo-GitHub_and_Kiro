---
id: l4-first-workflow
title: Your First Workflow
sidebar_label: 2. Your first workflow
sidebar_position: 3
description: Create a GitHub Actions workflow that runs a check on every push and pull request.
---

# Your First Workflow

> **Level:** L4 · **Estimated time:** 15 min · **Prerequisites:** what is CI/CD

## 🎯 Objectives

By the end of this lesson you will be able to:

- Create a workflow file in `.github/workflows/`
- Trigger it on push and pull request
- Read the run results in the **Actions** tab

## 📖 Lesson

### Create the file

Workflows are just YAML files in `.github/workflows/`. Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - name: Check out the code
        uses: actions/checkout@v4

      - name: Say hello
        run: echo "CI is running for commit $GITHUB_SHA"

      - name: Verify the homepage exists
        run: test -f project/index.html && echo "Found homepage ✅"
```

### Push it and watch it run

```bash
git switch -c add-ci
git add .github/workflows/ci.yml
git commit -m "Add a basic CI workflow"
git push -u origin add-ci
```

Open a pull request. At the bottom you'll see the **CI** check running. When it finishes, the
**Actions** tab shows the full log of each step.

### Making it useful

A hello-world step is a start; real CI runs your project's checks. For our static site you'd run
the checker you already have:

```yaml
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Validate the static site
        run: node project/scripts/check-static-site.js
```

:::tip Red X means "read the log"
If a check fails (red ✗), click it in the PR or Actions tab and read the failing step's output.
The error is almost always right there.
:::

## ✅ Checkpoint

- [ ] I created a workflow file under `.github/workflows/`.
- [ ] It ran on my pull request and I saw it in the Actions tab.
- [ ] I can find and read a step's log.

## 🧪 Demo / Try it

Add the `ci.yml` above to a branch, open a PR, and watch the check run green.

## ➡️ Next

Now automate publishing: **[Deploy the app to GitHub Pages](./deploy-the-app.md)**.
