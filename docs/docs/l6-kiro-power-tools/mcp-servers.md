---
id: l6-mcp-servers
title: MCP Servers
sidebar_label: 1. MCP servers
sidebar_position: 2
description: Connect Kiro to external tools and data with Model Context Protocol servers.
---

# MCP Servers

> **Level:** L6 · **Estimated time:** 25 min · **Prerequisites:** finished Level 5;
> a package runner such as `uvx` (Python) or `npx` (Node) installed

## 🎯 Objectives

By the end of this lesson you will be able to:

- Explain what **MCP** is and what an MCP server provides
- Write an `mcp.json` configuration
- Enable a server and call one of its tools

## 📖 Lesson

### What is MCP?

**MCP** stands for **Model Context Protocol**. It's an open standard that lets Kiro talk to
external **servers** that provide extra **tools** and **data** — for example, fetching a web
page, reading a database, or calling an API. Instead of Kiro knowing how to do everything, MCP
lets you *plug in* capabilities.

### Where configuration lives

MCP servers are configured in JSON:

- **Workspace level:** `.kiro/settings/mcp.json` (applies to this project).
- **User level:** your global Kiro settings (applies everywhere).

### Anatomy of `mcp.json`

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"],
      "disabled": false,
      "autoApprove": ["fetch"]
    }
  }
}
```

| Field | Meaning |
|-------|---------|
| key (`"fetch"`) | a name you choose for the server |
| `command` | how to launch it (e.g. `uvx`, `npx`) |
| `args` | arguments passed to the command |
| `disabled` | `true` to keep it configured but off |
| `autoApprove` | tool names that can run without asking each time |

:::tip Prerequisites
`uvx` comes with [uv](https://docs.astral.sh/uv/) (Python). `npx` comes with Node.js. Install
whichever your chosen server needs. The first run may download the server package.
:::

### Enable and use

1. Add the server to `.kiro/settings/mcp.json`.
2. Kiro picks it up (reconnect from the MCP view if needed — no restart required).
3. Ask Kiro to use a tool the server provides, e.g. *"Fetch the page at example.com and
   summarize it."* Kiro calls the server's `fetch` tool.

### A ready example

This course ships a sample config at
[`labs/l6/examples/mcp.json`](https://github.com/your-username/github-kiro-course/blob/main/labs/l6/examples/mcp.json)
with a `fetch` server (enabled) and a `filesystem` server (disabled). Copy it to
`.kiro/settings/mcp.json` to try it.

:::warning Only add servers you trust
MCP servers run as real programs on your machine and may access data. Add servers from sources
you trust, and keep `autoApprove` minimal.
:::

## ✅ Checkpoint

- [ ] I can explain MCP in a sentence.
- [ ] I wrote/edited an `mcp.json` with at least one server.
- [ ] I called an MCP tool from Kiro (or understand how to).

## 🧪 Demo / Try it

Copy the sample `mcp.json` into `.kiro/settings/`, ensure `uvx` is installed, and ask Kiro to
fetch and summarize a public web page.

## ➡️ Next

**[Custom agents](./custom-agents.md)**.
