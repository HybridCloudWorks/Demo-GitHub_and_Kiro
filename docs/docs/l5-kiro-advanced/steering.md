---
id: l5-steering
title: Steering Files
sidebar_label: 1. Steering files
sidebar_position: 2
description: Give Kiro persistent project rules and context with steering files, so you stop repeating the same instructions in every conversation.
---

# Steering Files

> **Level:** L5 · **Estimated time:** 15 min · **Prerequisites:** finished Level 4

## What you'll get out of this lesson

You'll understand what a **steering file** is and when Kiro applies it, create one with front-matter
inclusion rules, and reference other files from it.

## The problem steering solves

If you've worked with Kiro for a while, you've probably caught yourself typing the same caveats over
and over: "remember, this is a static site, no frameworks," or "keep the CSS in styles.css." It works,
but it's tedious, and the one time you forget to say it is the time Kiro reaches for a framework you
didn't want.

**Steering files** fix that. They're Markdown files in `.kiro/steering/` that add persistent context
and rules to your Kiro interactions. You write the rule once, and Kiro applies it automatically from
then on. The best things to put in steering are the rules you'd otherwise repeat: project and coding
conventions, architecture notes and "how we do things here," and standing reminders like "always run
the checker before finishing."

## What a steering file looks like

It's just Markdown, with optional YAML front matter that controls *when* the rules apply:

```md
---
inclusion: always
---

# Project conventions

- This project is a static site — no build tools or frameworks.
- Keep CSS in styles.css and reuse the existing custom properties.
- Run `node project/scripts/check-static-site.js` before finishing.
```

That `inclusion` field is the part worth understanding, because it controls how aggressively the
steering applies:

| `inclusion` | Applies... |
|-------------|------------|
| `always` | to every interaction in the workspace |
| `fileMatch` (with a `fileMatchPattern`) | only when matching files are in context |
| `manual` | only when you explicitly reference it |

Use `always` for the handful of rules that are true everywhere, and `fileMatch` for advice that only
matters when you're touching, say, test files or a particular subsystem. Reaching for `always` on
everything just adds noise to every conversation.

## Pulling in other files

Steering can reference other files, so a spec or an API definition can influence Kiro without you
copy-pasting its contents:

```md
See the API contract: #[[file:openapi.yaml]]
```

## A real example living in this repo

Open [`.kiro/steering/project-conventions.md`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/blob/main/.kiro/steering/project-conventions.md).
It's set to `inclusion: always` and it documents the static-site rules for `project/`. This is why,
when you ask Kiro to change the app, it already knows not to introduce a framework: the rule is
steering it, silently, every time.

:::tip Keep steering short and focused
Short, specific steering beats a sprawling manifesto every time. One file per concern (conventions,
testing, architecture) is far easier to maintain and reason about than one giant catch-all file, and
it lets you use different inclusion modes for different concerns.
:::

## Quick self-check

- [ ] I know steering lives in `.kiro/steering/` as Markdown.
- [ ] I can set `inclusion` to `always`, `fileMatch`, or `manual`.
- [ ] I can reference another file with `#[[file:...]]`.

## Try it

Open `.kiro/steering/project-conventions.md`, then, in the project workspace, ask Kiro to "add a new
section to the homepage." Watch how it follows the conventions (plain HTML, existing CSS custom
properties) without you having to say a word about them. That invisible compliance is steering doing
its job.

## Next

**[Spec-driven development](./specs.md)**.
