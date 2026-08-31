---
id: l5-hooks
title: Agent Hooks
sidebar_label: 3. Agent hooks
sidebar_position: 4
description: Automate actions in Kiro when events happen — like checking your site on every save.
---

# Agent Hooks

> **Level:** L5 · **Estimated time:** 15 min · **Prerequisites:** specs

## 🎯 Objectives

By the end of this lesson you will be able to:

- Explain what an **agent hook** is
- Read a hook definition (trigger, matcher, action)
- Recognize common triggers and when to use them

## 📖 Lesson

### What is a hook?

An **agent hook** automatically runs an action when a chosen **event** happens in your
workspace — for example, running a check every time you save a file, or appending a reminder
when you submit a prompt. Hooks live as JSON under `.kiro/hooks/`.

### Anatomy

```json
{
  "version": "v1",
  "hooks": [
    {
      "name": "Check static site on save",
      "description": "Validate the site whenever a project file is saved.",
      "trigger": "PostFileSave",
      "matcher": "project/.*\\.(html|css|js)$",
      "action": {
        "type": "command",
        "command": "node project/scripts/check-static-site.js"
      }
    }
  ]
}
```

| Field | Meaning |
|-------|---------|
| `trigger` | the event, e.g. `PostFileSave`, `PostFileCreate`, `UserPromptSubmit`, `PreToolUse` |
| `matcher` | (optional) a regex — for file events it tests the file path |
| `action.type` | `command` (run a shell command) or `agent` (inject a prompt) |
| `action.command` | the command to run for `command` actions |

### Common triggers

| Trigger | Fires when… |
|---------|-------------|
| `PostFileSave` | a file is saved |
| `PostFileCreate` | a new file is created |
| `PostFileDelete` | a file is deleted |
| `UserPromptSubmit` | you submit a chat prompt |
| `SessionStart` | a session begins |

### The example in this course

A ready-to-use hook is provided at
[`labs/l5/examples/check-project-on-save.hook.json`](https://github.com/your-username/github-kiro-course/blob/main/labs/l5/examples/check-project-on-save.hook.json).
It runs the static-site checker whenever you save an HTML/CSS/JS file in `project/`.

To use it in your own workspace, copy it into `.kiro/hooks/` (e.g.
`.kiro/hooks/check-project-on-save.json`). Now every save re-validates your site — instant
feedback.

:::warning Hooks run actions automatically
Because hooks can run commands, only enable ones you understand. Review a hook's `command`
before adding it.
:::

## ✅ Checkpoint

- [ ] I can read a hook's trigger, matcher, and action.
- [ ] I know hooks live in `.kiro/hooks/` as JSON.
- [ ] I can name a few common triggers.

## 🧪 Demo / Try it

Copy the example hook into `.kiro/hooks/` in your project workspace, then save a file in
`project/`. The static-site check runs automatically — try breaking the HTML to see it complain.

## ➡️ Next

Prove it: **[🧪 Lab: author a steering file](./lab.md)**.
