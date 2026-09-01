---
id: l6-lab
title: "🧪 Lab: Configure an MCP Server"
sidebar_label: 4. 🧪 Graded Lab
sidebar_position: 5
description: Write a valid MCP configuration that registers at least one server, then connect it in your own workspace and call a tool.
---

# Lab: Configure an MCP Server

> **Level:** L6 · **Estimated time:** 30 min · **Prerequisites:** all L6 lessons; `uvx` or `npx`

In this lab you give Kiro a genuinely new capability by configuring an MCP server. The graded part is
the config itself; the rewarding part is watching Kiro use a tool it didn't have five minutes ago.

## What you'll do

Full instructions and starter files are in the repository under
[`labs/l6/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/labs/l6). Inside the
starter folder, create `.kiro/settings/mcp.json` that:

1. Is valid JSON.
2. Has a top-level `mcpServers` object.
3. Defines at least one server with a `command`.

Keep the example handy as a reference:
[`labs/l6/examples/mcp.json`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/blob/main/labs/l6/examples/mcp.json).

### Verify it hands-on, in your own workspace

The grader checks the config, but the real learning is in connecting it:

- Install the launcher your server needs (`uvx` for the `fetch` example).
- Copy your `mcp.json` into `.kiro/settings/`.
- Ask Kiro to use a tool the server provides, such as fetching and summarizing a web page.

## Run the grader

```bash
node labs/_grader/grade.js l6 labs/l6/starter    # fails until you finish
node labs/_grader/grade.js l6 labs/l6/solution   # the reference passes 4/4
```

## Stretch goals

If you're enjoying this, push further. Define a **custom agent** (the `docs-writer` example is a good
starting point) for a task you repeat. Or take a real change from **issue to Kiro edit to branch to PR
to merge**, optionally using the `gh` CLI or a GitHub MCP server to stay on the keyboard the whole
way.

## Quick self-check

- [ ] The grader reports every required check passing.
- [ ] I connected an MCP server and called one of its tools (hands-on).

## Next

That's Level 6 done, and Kiro is now a genuinely powerful tool in your hands. Continue to the finale:
**[Level 7 · Advanced GitHub + Capstone](/docs/level-7)**.
