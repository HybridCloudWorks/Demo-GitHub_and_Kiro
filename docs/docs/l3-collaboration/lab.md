---
id: l3-lab
title: "🧪 Lab: Add a Feature via a PR"
sidebar_label: 5. 🧪 Graded Lab
sidebar_position: 6
description: Track an issue, build a feature on a branch, and propose it with a well-formed pull request that closes the issue on merge.
---

# Lab: Add a Feature via a Pull Request

> **Level:** L3 · **Estimated time:** 40 min · **Prerequisites:** all L3 lessons

This lab puts the entire collaboration workflow together in one go: an **issue**, a **branch**, a
**feature**, and a **pull request**, with automated checks along the way. It's the same loop you'll
use on real projects, so it's worth doing properly rather than rushing to the grader.

## What you'll do

The full instructions and starter files live in the repository under
[`labs/l3/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/labs/l3). Working in a
copy of `labs/l3/starter/`, you'll produce two things:

1. Add an **About section** to `index.html`: a `<section id="about">` containing an `<h2>` and a
   `<p>`. Keep it simple; the grader cares that it's there and well-formed, not that it's elaborate.
2. Write **`PR.md`** describing your pull request, including a Title, a Branch name, a `Fixes #<n>`
   closing keyword, and a genuine description of the change.

The files are only part of it. On your own project repo, actually run the whole workflow for real:
open an issue, create a branch, commit the feature, push it, and open a PR whose description closes
that issue. Doing it end to end is what turns the individual lessons into a single fluent motion.

## Run the grader

```bash
node labs/_grader/grade.js l3 labs/l3/starter    # fails until you finish
node labs/_grader/grade.js l3 labs/l3/solution   # the reference passes 8/8
```

## How this mirrors the real project

This lab isn't a contrived exercise; it retraces how the course project itself actually grew. The
**About section** was added to
[`project/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/project) through a
pull request and tagged **`milestone-l3`**. You're following the same path the maintainers did.

## Quick self-check

- [ ] The grader reports every required check passing.
- [ ] On GitHub I have an issue, a feature branch, and a merged PR that closed the issue.

## Next

That's Level 3 complete, and you now work the way professional teams do. Continue to
**[Level 4 · Automation with GitHub Actions](/docs/level-4)**, where you'll hand the repetitive work
of running checks and deploying your app over to automation.
