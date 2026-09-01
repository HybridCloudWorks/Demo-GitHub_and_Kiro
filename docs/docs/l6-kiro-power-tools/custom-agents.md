---
id: l6-custom-agents
title: Custom Agents
sidebar_label: 2. Custom agents
sidebar_position: 3
description: Create focused, reusable agents tailored to a specific kind of task, with just the right prompt, tools, and resources.
---

# Custom Agents

> **Level:** L6 · **Estimated time:** 20 min · **Prerequisites:** MCP servers

## What you'll get out of this lesson

You'll understand what a **custom agent** is and when to reach for one, learn to read an agent
definition (its prompt, tools, and resources), and sketch an agent for a task you do again and again.

## What a custom agent is

A **custom agent** is a saved configuration that specializes Kiro for a particular job. It carries its
own instructions (a prompt), a chosen set of **tools** it's allowed to use, and optional **resources**
(files it always keeps in context). The mental model that helps most is a purpose-built teammate: a
"docs writer," a "test author," a "reviewer," each one set up to be good at exactly one kind of work
and not distracted by the rest.

## Why bother making one

Three reasons, and they compound. You get **consistency**, because a well-defined agent follows the
same rules every single time instead of you re-explaining them. You get **focus**, because giving an
agent only the tools it needs keeps it on task and out of trouble. And you get **reuse**, because once
it exists you can summon it whenever that kind of work comes up, rather than reconstructing the setup
from memory.

## Reading an agent definition

```json
{
  "name": "docs-writer",
  "description": "Writes and improves course documentation.",
  "prompt": "You are a documentation specialist. Follow the lesson template...",
  "tools": ["read", "write", "grep", "glob"],
  "resources": [
    "file://CONTRIBUTING.md",
    "file://docs/docs/_lesson-template.md"
  ]
}
```

| Field | Meaning |
|-------|---------|
| `name` | how you invoke the agent |
| `description` | what it's for |
| `prompt` | the system instructions that shape its behavior |
| `tools` | the tools it's permitted to use |
| `resources` | files it always has available as context |

Notice the `resources` on that example: by always keeping the contributing guide and the lesson
template in context, the docs writer produces work that fits the project without being reminded of the
house style each time.

## The example you can crib from

Have a look at [`labs/l6/examples/docs-writer.agent.json`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/blob/main/labs/l6/examples/docs-writer.agent.json).
It's a `docs-writer` agent that follows this course's lesson template and, notably, never adds build
tools, because that rule is baked into its prompt and resources rather than left to chance.

## Building your own

Pick a task you keep repeating and give it an agent. A `pr-reviewer` that reads a diff and checks it
against your conventions is a great candidate, as is a `test-writer` that does nothing but write tests.
Give each one a tight, specific prompt and only the tools it genuinely needs.

:::tip Least privilege applies to agents too
Grant an agent only the tools it truly requires. A docs writer almost certainly doesn't need to run
shell commands, so don't hand it that ability. A narrower agent is both safer and, in practice, more
focused, because it can't wander off into work outside its remit.
:::

## Quick self-check

- [ ] I can explain what a custom agent is.
- [ ] I can read an agent's prompt, tools, and resources.
- [ ] I sketched an agent for a task I repeat.

## Try it

Read the `docs-writer` example closely, then design a `pr-reviewer` agent on paper: what would its
prompt say, and which tools (and only those) would it actually need to read a diff and comment on it?
Working that out is the real exercise; the JSON is the easy part afterward.

## Next

**[Kiro × GitHub integration](./kiro-and-github.md)**.
