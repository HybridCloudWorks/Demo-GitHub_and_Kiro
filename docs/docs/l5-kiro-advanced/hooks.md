---
id: l5-hooks
title: Agent Hooks
sidebar_label: 3. Agent hooks
sidebar_position: 4
description: Automate actions in Kiro when events happen, such as re-checking your site on every save, and learn to read a hook definition safely.
---

# Agent Hooks

> **Level:** L5 · **Estimated time:** 15 min · **Prerequisites:** specs

## What you'll get out of this lesson

You'll understand what an **agent hook** is, learn to read a hook definition (its trigger, matcher, and
action), and recognize the common triggers and when each one is useful.

## What a hook does

An **agent hook** automatically runs an action when a chosen **event** happens in your workspace. Save
a file, and it runs your checker. Submit a prompt, and it appends a standing reminder. Create a file,
and it does something in response. The idea is to automate the small, repetitive "oh, I should run
that now" moments so you don't have to remember them. Hooks live as JSON under `.kiro/hooks/`.

## Reading a hook definition

Here's a complete hook. Once you can read this, you can read any of them:

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
| `trigger` | the event, such as `PostFileSave`, `PostFileCreate`, `UserPromptSubmit`, `PreToolUse` |
| `matcher` | an optional regex; for file events it's tested against the file path |
| `action.type` | `command` to run a shell command, or `agent` to inject a prompt |
| `action.command` | the command to run, for `command` actions |

The `matcher` is what keeps a hook from firing on everything. In the example, it only runs when the
saved file is an HTML, CSS, or JS file inside `project/`, so editing an unrelated file doesn't trigger
a pointless check.

## The triggers you'll reach for most

| Trigger | Fires when... |
|---------|---------------|
| `PostFileSave` | a file is saved |
| `PostFileCreate` | a new file is created |
| `PostFileDelete` | a file is deleted |
| `UserPromptSubmit` | you submit a chat prompt |
| `SessionStart` | a session begins |

`PostFileSave` is the workhorse; most "check my work continuously" hooks hang off it.

## The example shipped with this course

There's a ready-to-use hook at
[`labs/l5/examples/check-project-on-save.hook.json`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/blob/main/labs/l5/examples/check-project-on-save.hook.json).
It runs the static-site checker whenever you save an HTML, CSS, or JS file in `project/`. To use it,
copy it into `.kiro/hooks/` in your workspace (for example, `.kiro/hooks/check-project-on-save.json`).
From then on, every save re-validates your site, giving you instant feedback instead of a nasty
surprise later.

:::warning Hooks run actions automatically, so read them first
This is the one genuinely important safety note in this lesson. Because a hook can run shell commands
on your behalf, without asking each time, you should only enable hooks you understand. Before adding
any hook, read its `command` field and be sure you're comfortable with what it does. A hook is a
convenience you've granted; treat it with the same care you'd give any automation that can run code.
:::

## Quick self-check

- [ ] I can read a hook's trigger, matcher, and action.
- [ ] I know hooks live in `.kiro/hooks/` as JSON.
- [ ] I can name a few common triggers.

## Try it

Copy the example hook into `.kiro/hooks/` in your project workspace, then save a file in `project/`.
The static-site check runs on its own. For the full effect, deliberately break the HTML (delete a
closing tag) and save again to watch the hook catch it immediately. That instant feedback loop is the
whole appeal.

## Next

Now prove it: **[Lab: author a steering file](./lab.md)**.
