---
id: l2-the-workspace
title: The Kiro Workspace
sidebar_label: 1. The workspace
sidebar_position: 2
description: Open a project folder as a Kiro workspace, learn the layout, and understand exactly what Kiro can see and do inside it.
---

# The Kiro Workspace

> **Level:** L2 · **Estimated time:** 10 min · **Prerequisites:** Kiro installed (Level 0)

## What you'll get out of this lesson

You'll open a folder as a Kiro **workspace**, learn to find the file explorer, editor, and chat, and
understand the boundary of what Kiro can and can't see.

## What a workspace is (and why the boundary matters)

A **workspace** is simply the project folder you currently have open. That sounds trivial, but it's
the single most important concept for working with Kiro well. The workspace defines Kiro's context:
the files it can read, the code it can edit, and where any commands run. Kiro doesn't roam your
whole hard drive; it works inside the folder you've opened. Knowing that boundary is what lets you
trust it, and it's why the answers you get are grounded in *your* actual files rather than generic
guesses.

## Opening a workspace

1. Launch Kiro.
2. Choose **Open Folder** and pick a project directory. For this course, that's the folder where you
   cloned your course repository, or a fresh folder if you're starting the project from scratch.
3. If Kiro asks whether you **trust** the folder, confirm it. That trust prompt is what grants Kiro
   permission to read and modify files there, so it's asking on purpose. Only trust folders you own
   and understand.

## Finding your way around

Four areas do most of the work, and you'll bounce between them constantly:

The **explorer** is the tree of your files and folders down the side; click any file to open it. The
**editor** is the main pane where you read and edit contents. The **chat** is where you talk to Kiro
in plain language to ask questions or request changes. And the **terminal** is an integrated command
line, so you can run `git`, start a local server, or run a grader without leaving Kiro.

:::tip One project per workspace
Resist the urge to open a giant folder containing several unrelated projects. Keeping a single
project per workspace keeps Kiro's context focused, which directly makes its suggestions sharper and
more relevant. A tighter workspace is a smarter assistant.
:::

## Quick self-check

- [ ] I opened a folder as a workspace in Kiro.
- [ ] I can find the explorer, the editor, and chat.
- [ ] I understand that Kiro acts within the open workspace, not outside it.

## Try it

Open the folder where you cloned your course repository. Browse the file tree for a minute to get a
feel for the layout, then open `README.md` in the editor. That's all it takes to be ready for your
first real conversation with Kiro.

## Next

**[Chatting with Kiro](./chatting-with-kiro.md)**.
