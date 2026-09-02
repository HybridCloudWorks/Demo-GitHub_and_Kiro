---
id: l4-first-workflow
title: Your First Workflow
sidebar_label: 2. Your first workflow
sidebar_position: 3
description: Create a GitHub Actions workflow that runs a check on every push and pull request, then read the results in the Actions tab.
---

# Your First Workflow

> **Level:** L4 · **Estimated time:** 15 min · **Prerequisites:** what is CI/CD

## What you'll get out of this lesson

You'll create a workflow file in `.github/workflows/`, trigger it on push and pull request, and read
the results in the **Actions** tab, including how to find out *why* something failed.

## Create the file

A workflow is nothing more special than a YAML file in the right folder. Create
`.github/workflows/ci.yml`:

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

Notice `$GITHUB_SHA` in there. GitHub injects a set of variables like that into every run, so your
workflow always knows which commit it's checking without you passing anything in.

## Push it and watch it run

```bash
git switch -c add-ci
git add .github/workflows/ci.yml
git commit -m "Add a basic CI workflow"
git push -u origin add-ci
```

Open a pull request from that branch. At the bottom of the PR page you'll see the **CI** check
running live, and once it finishes, the **Actions** tab shows the full log of every step. The first
time you watch your own workflow tick through its steps, the whole idea of CI clicks into place.

## Making it actually useful

A "hello world" step proves the plumbing works, but real CI runs your project's real checks. For our
static site, that means running the checker you already have:

```yaml
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Validate the static site
        run: node project/scripts/check-static-site.js
```

That's the whole trick to CI, really. It's the same commands you'd run by hand, moved into a file so
a machine runs them for you on every change, every time, without being asked.

:::tip A red X means "go read the log"
When a check fails, you'll see a red mark, and the instinct is to panic. Don't. Click the failing
check in the PR or the Actions tab, open the step that failed, and read its output. The actual error
message is almost always sitting right there in plain text, telling you exactly what went wrong.
:::

## Quick self-check

- [ ] I created a workflow file under `.github/workflows/`.
- [ ] It ran on my pull request and I saw it in the Actions tab.
- [ ] I can find and read a step's log.

## Try it

Add the `ci.yml` above to a branch, open a PR, and watch the check go green. Then, for good measure,
break something on purpose (rename `project/index.html` in that branch) and watch it go red so you
see the failure path too.

## Next

Now let's automate publishing, not just checking: **[Deploy the app to GitHub Pages](./deploy-the-app.md)**.
