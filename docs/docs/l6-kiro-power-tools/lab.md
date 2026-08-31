---
id: l6-lab
title: "🧪 Lab: Configure an MCP Server"
sidebar_label: 4. 🧪 Graded Lab
sidebar_position: 5
description: Write a valid MCP configuration that registers at least one server.
---

# 🧪 Lab: Configure an MCP Server

> **Level:** L6 · **Estimated time:** 30 min · **Prerequisites:** all L6 lessons; `uvx` or `npx`

Give Kiro a new capability by configuring an MCP server.

## 🎯 The task

Full instructions and starter files are in the repository at
[`labs/l6/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/labs/l6). Create
`.kiro/settings/mcp.json` (inside the starter folder) that:

1. Is valid JSON.
2. Has a top-level `mcpServers` object.
3. Defines at least one server with a `command`.

Reference:
[`labs/l6/examples/mcp.json`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/blob/main/labs/l6/examples/mcp.json).

### Hands-on verification (in your own workspace)

- Install the launcher your server needs (`uvx` for the `fetch` example).
- Copy your `mcp.json` into `.kiro/settings/`.
- Ask Kiro to use a tool the server provides (e.g. fetch and summarize a web page).

## Run the grader

```bash
node labs/_grader/grade.js l6 labs/l6/starter    # fails until you finish
node labs/_grader/grade.js l6 labs/l6/solution    # the reference passes 4/4
```

## Stretch goals

- Define a **custom agent** (see the `docs-writer` example) for a task you repeat.
- Take a change from **issue → Kiro edit → branch → PR → merge**, optionally with the `gh` CLI or
  a GitHub MCP server.

## ✅ Checkpoint

- [ ] The grader reports all required checks passing.
- [ ] I connected an MCP server and called a tool (hands-on).

## ➡️ Next

You've completed Level 6! Continue to the finale:
**[Level 7 · Advanced GitHub + Capstone](/docs/level-7)**.
