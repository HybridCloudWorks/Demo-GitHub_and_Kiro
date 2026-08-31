---
id: l5-lab
title: "🧪 Lab: Author a Steering File"
sidebar_label: 4. 🧪 Graded Lab
sidebar_position: 5
description: Create a Kiro steering file that captures a project convention.
---

# 🧪 Lab: Author a Steering File

> **Level:** L5 · **Estimated time:** 25 min · **Prerequisites:** all L5 lessons

Teach Kiro your rules by writing your own steering file.

## 🎯 The task

Full instructions and starter files are in the repository at
[`labs/l5/`](https://github.com/your-username/github-kiro-course/tree/main/labs/l5). Create
`.kiro/steering/conventions.md` (inside the starter folder) that:

1. Has YAML front matter with an `inclusion:` field.
2. Has a top-level heading.
3. Has at least one bullet rule.
4. Mentions the project is a **static site**.

Then try the provided **hook**: copy
[`labs/l5/examples/check-project-on-save.hook.json`](https://github.com/your-username/github-kiro-course/blob/main/labs/l5/examples/check-project-on-save.hook.json)
into your workspace's `.kiro/hooks/` and save a file in `project/` to watch it run the checker.

## Run the grader

```bash
node labs/_grader/grade.js l5 labs/l5/starter    # fails until you finish
node labs/_grader/grade.js l5 labs/l5/solution    # the reference passes 5/5
```

## The project milestone

Level 5 extends the project the **spec-driven** way: the
[`.kiro/specs/contact-section/`](https://github.com/your-username/github-kiro-course/tree/main/.kiro/specs/contact-section)
spec adds a Contact section to the homepage, tagged **`milestone-l5`**.

## ✅ Checkpoint

- [ ] The grader reports all required checks passing.
- [ ] I used steering, read a spec, and tried a hook.

## ➡️ Next

You've completed Level 5! Continue to **[Level 6 · Kiro Power Tools](/level-6)** for MCP servers,
custom agents, and integrating Kiro with GitHub.
