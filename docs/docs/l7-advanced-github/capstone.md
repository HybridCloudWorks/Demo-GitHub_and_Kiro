---
id: l7-capstone
title: "🏆 Capstone"
sidebar_label: 5. 🏆 Capstone
sidebar_position: 6
description: Tie GitHub and Kiro together into one polished, automated, deployed project that shows off everything you learned across the course.
---

# 🏆 Capstone: GitHub + Kiro, End to End

> **Level:** L7 · **Estimated time:** 2 to 4 hours · **Prerequisites:** the whole course

This is it, the finale. Everything you've learned comes together here into a single project you'd be
proud to show anyone: a real app, automated CI/CD, a properly protected repository, and Kiro authoring
woven through it all. This is the full experience, not a fragment of it.

Give yourself a real block of time for this one. It's meant to be substantial, and rushing it would
undersell what you've built up to.

## What you'll deliver

An integrated end state you can point people to with confidence:

1. **A deployed app.** Your Learning Journal, live on **GitHub Pages** (free and public), now carrying
   an **About** section, a **Contact** section, and a new **Projects** section.
2. **CI/CD.** A workflow that checks every change, plus a deploy that publishes automatically on merge.
3. **A protected repo.** `main` requires pull requests and passing checks, using the branch protection
   you configured earlier this level.
4. **Kiro authoring.** Steering and a spec used to build a feature, with Kiro used throughout the work.

## The graded snapshot

Full instructions and starter files are in the repository under
[`labs/capstone/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/labs/capstone).
Assemble the snapshot (the app, `ci.yml`, steering, and `CAPSTONE.md`) and run the grader:

```bash
node labs/_grader/grade.js capstone labs/capstone/starter    # fails until you finish
node labs/_grader/grade.js capstone labs/capstone/solution   # the reference passes 18/18
```

## Do it for real

The snapshot proves you've got the shape right. Now ship the actual thing, end to end:

1. **Build and extend** the app with Kiro. Add the Projects section; the course project did exactly
   this as `milestone-l7`, so you're retracing a real milestone.
2. **Automate.** Make sure your CI runs on every change and your Pages deploy publishes on merge.
3. **Protect `main`.** Require PRs and your CI checks, using the first lesson of this level.
4. **Document.** Fill in `CAPSTONE.md` with your real, live URL, and confirm protection is switched on.

## Final checkpoint

- [ ] The capstone grader passes on my snapshot.
- [ ] My app is live at a public `github.io` URL.
- [ ] `main` is protected and requires passing checks.
- [ ] I used Kiro (chat, steering, and a spec) to build it.

## You did it

Think about where this started: "what is version control?" And here you are with a deployed, automated,
professionally configured project built with GitHub *and* Kiro. That's the entire journey, start to
finish, and it's a genuine accomplishment. Well done.

Want to keep going? Revisit the [Appendix: Custom Domain](../appendix-custom-domain.md), add more MCP
servers to your toolkit, or, honestly the best way to cement all of this, teach someone else using this
very course.
