---
id: l7-capstone
title: "🏆 Capstone"
sidebar_label: 5. 🏆 Capstone
sidebar_position: 6
description: Tie GitHub and Kiro together into one polished, automated, deployed project.
---

# 🏆 Capstone — GitHub + Kiro, End to End

> **Level:** L7 · **Estimated time:** 2–4 hours · **Prerequisites:** the whole course

This is the finale. You'll bring **everything** together: a real app, automated CI/CD, a
protected repository, and Kiro authoring — the complete 200% experience.

## 🎯 What you'll deliver

An integrated end-state you can point anyone to:

1. **A deployed app** — your Learning Journal live on **GitHub Pages** (free, public), now with
   **About**, **Contact**, and a new **Projects** section.
2. **CI/CD** — a workflow that checks every change and a deploy that publishes on merge.
3. **A protected repo** — `main` requires pull requests and passing checks (branch protection).
4. **Kiro authoring** — steering + a spec used to build a feature, and Kiro used throughout.

## The graded snapshot

Full instructions and starter files are in the repository at
[`labs/capstone/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/labs/capstone).
Assemble the snapshot (app + `ci.yml` + steering + `CAPSTONE.md`) and run the grader:

```bash
node labs/_grader/grade.js capstone labs/capstone/starter    # fails until you finish
node labs/_grader/grade.js capstone labs/capstone/solution    # the reference passes 18/18
```

## Do it for real

The snapshot proves the shape; now ship the real thing:

1. **Build/extend** the app with Kiro (add the Projects section — the course project did this as
   `milestone-l7`).
2. **Automate:** ensure your CI runs and your Pages deploy publishes on merge.
3. **Protect `main`:** require PRs and your CI checks (Level 7, lesson 1).
4. **Document:** fill `CAPSTONE.md` with your real live URL and confirm protection is on.

## ✅ Final checkpoint

- [ ] The capstone grader passes on your snapshot.
- [ ] Your app is live at a public `github.io` URL.
- [ ] `main` is protected and requires passing checks.
- [ ] You used Kiro (chat, steering, and a spec) to build it.

## 🎓 You did it

You started at *"what is version control?"* and finished with a deployed, automated, professionally
configured project built with GitHub **and** Kiro. That's the whole journey — congratulations!

Want to keep going? Revisit the [Appendix: Custom Domain](../appendix-custom-domain.md), add more
MCP servers, or teach someone else using this very course.
