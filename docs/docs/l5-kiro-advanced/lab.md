---
id: l5-lab
title: "🧪 Lab: Author a Steering File"
sidebar_label: 4. 🧪 Graded Lab
sidebar_position: 5
description: Teach Kiro your project's rules by writing a steering file, then try a real hook that checks your site on every save.
---

# Lab: Author a Steering File

> **Level:** L5 · **Estimated time:** 25 min · **Prerequisites:** all L5 lessons

In this lab you teach Kiro your rules by writing your own steering file, then wire up a hook to see
automation fire in real time. It's a small amount of writing that has an outsized effect on how Kiro
behaves in your workspace.

## What you'll do

Full instructions and starter files are in the repository under
[`labs/l5/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/labs/l5). Inside the
starter folder, create `.kiro/steering/conventions.md` that:

1. Has YAML front matter with an `inclusion:` field.
2. Has a top-level heading.
3. Includes at least one bullet rule.
4. Mentions that the project is a **static site**.

Then try the provided **hook**: copy
[`labs/l5/examples/check-project-on-save.hook.json`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/blob/main/labs/l5/examples/check-project-on-save.hook.json)
into your workspace's `.kiro/hooks/` and save a file in `project/` to watch it run the checker. Seeing
the check trigger from nothing more than a save is the moment hooks stop being abstract.

## Run the grader

```bash
node labs/_grader/grade.js l5 labs/l5/starter    # fails until you finish
node labs/_grader/grade.js l5 labs/l5/solution   # the reference passes 5/5
```

## How this maps to the project

Level 5 grows the project the **spec-driven** way. The
[`.kiro/specs/contact-section/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/.kiro/specs/contact-section)
spec adds a Contact section to the homepage and is tagged **`milestone-l5`**, so the technique you're
practicing is exactly how the real feature was built.

## Quick self-check

- [ ] The grader reports every required check passing.
- [ ] I used steering, read a spec, and tried a hook.

## Next

That's Level 5 complete, and Kiro now works the way *you* want it to. Continue to
**[Level 6 · Kiro Power Tools](/docs/level-6)** for MCP servers, custom agents, and connecting Kiro
directly to GitHub.
