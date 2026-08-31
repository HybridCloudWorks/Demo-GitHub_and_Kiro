---
id: l6-custom-agents
title: Custom Agents
sidebar_label: 2. Custom agents
sidebar_position: 3
description: Create focused, reusable agents tailored to a specific kind of task.
---

# Custom Agents

> **Level:** L6 · **Estimated time:** 20 min · **Prerequisites:** MCP servers

## 🎯 Objectives

By the end of this lesson you will be able to:

- Explain what a **custom agent** is and when to use one
- Read an agent definition (prompt, tools, resources)
- Create an agent for a recurring task

## 📖 Lesson

### What is a custom agent?

A **custom agent** is a saved configuration that specializes Kiro for a particular job — with its
own instructions (prompt), a chosen set of **tools** it may use, and optional **resources**
(files it always has in context). Think of it as a purpose-built teammate: a "docs writer", a
"test author", a "reviewer".

### Why use one?

- **Consistency:** the agent always follows the same rules.
- **Focus:** it only has the tools it needs.
- **Reuse:** invoke it whenever that kind of work comes up.

### Anatomy

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
| `tools` | the tools it's allowed to use |
| `resources` | files always available to it as context |

### A ready example

See [`labs/l6/examples/docs-writer.agent.json`](https://github.com/your-username/github-kiro-course/blob/main/labs/l6/examples/docs-writer.agent.json)
— a `docs-writer` agent that follows this course's lesson template and never adds build tools.

### Creating your own

Define an agent for a task you repeat — for example a `pr-reviewer` that reads a diff and checks
it against your conventions, or a `test-writer` that only writes tests. Give it a tight prompt
and the minimum tools it needs.

:::tip Least privilege
Only grant the tools an agent truly needs. A docs writer probably doesn't need to run shell
commands.
:::

## ✅ Checkpoint

- [ ] I can explain what a custom agent is.
- [ ] I can read an agent's prompt, tools, and resources.
- [ ] I sketched an agent for a task I repeat.

## 🧪 Demo / Try it

Read the `docs-writer` example, then imagine (or define) a `pr-reviewer` agent: what prompt and
tools would it need?

## ➡️ Next

**[Kiro × GitHub integration](./kiro-and-github.md)**.
