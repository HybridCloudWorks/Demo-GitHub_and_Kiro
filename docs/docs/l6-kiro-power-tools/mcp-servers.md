---
id: l6-mcp-servers
title: MCP Servers
sidebar_label: 1. MCP servers
sidebar_position: 2
description: Connect Kiro to external tools and data with Model Context Protocol servers, from writing the config to calling a server's tools safely.
---

# MCP Servers

> **Level:** L6 · **Estimated time:** 25 min · **Prerequisites:** finished Level 5;
> a package runner such as `uvx` (Python) or `npx` (Node) installed

## What you'll get out of this lesson

You'll understand what **MCP** is and what an MCP server gives you, write an `mcp.json`
configuration, and enable a server so you can call one of its tools.

## What MCP is, and why it matters

**MCP** stands for **Model Context Protocol**. It's an open standard that lets Kiro talk to external
**servers** which provide extra **tools** and **data**: fetching a web page, reading a database,
calling an API, and so on. The important shift in thinking is this: Kiro doesn't need to know how to
do everything itself. Instead, MCP lets you *plug in* capabilities as you need them, the way you'd
add apps to a phone rather than buying a new phone for each feature.

## Where the configuration lives

MCP servers are configured in JSON, and there are two places to put that config depending on scope.
A **workspace-level** config at `.kiro/settings/mcp.json` applies only to the current project, which
is the right choice for project-specific tools. A **user-level** config in your global Kiro settings
applies everywhere, which suits tools you always want available.

## Reading an `mcp.json`

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
| `command` | how to launch it, such as `uvx` or `npx` |
| `args` | the arguments passed to that command |
| `disabled` | set `true` to keep a server configured but switched off |
| `autoApprove` | tool names allowed to run without asking you each time |

That `autoApprove` list is a convenience that trades a little safety for a lot less clicking. Keep
it short, and only add tools you're genuinely happy to let run unprompted.

:::tip What you need installed first
`uvx` ships with [uv](https://docs.astral.sh/uv/) for Python; `npx` ships with Node.js. Install
whichever your chosen server needs before you try to enable it. Be aware that the very first run of a
server often downloads its package, so give it a moment the first time.
:::

## Enabling one and using it

1. Add the server to `.kiro/settings/mcp.json`.
2. Kiro picks up the change. If it doesn't connect immediately, reconnect from the MCP view; there's
   no need to restart.
3. Ask Kiro to use one of the server's tools in plain language, for example *"Fetch the page at
   example.com and summarize it."* Behind the scenes, Kiro calls the server's `fetch` tool and works
   with the result.

## The example shipped with this course

This course provides a sample config at
[`labs/l6/examples/mcp.json`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/blob/main/labs/l6/examples/mcp.json)
with a `fetch` server switched on and a `filesystem` server switched off. Copy it to
`.kiro/settings/mcp.json` to try it, and note how the disabled server shows a legitimate reason to
keep a config entry around without it being active.

:::warning Only add servers you trust
This is the safety point that matters most in this lesson. MCP servers are real programs that run on
your machine and may access your data, so treat them the way you'd treat any software you install.
Add servers only from sources you trust, and keep `autoApprove` as small as you reasonably can.
:::

## Quick self-check

- [ ] I can explain MCP in a sentence.
- [ ] I wrote or edited an `mcp.json` with at least one server.
- [ ] I called an MCP tool from Kiro, or I understand exactly how to.

## Try it

Copy the sample `mcp.json` into `.kiro/settings/`, make sure `uvx` is installed, and ask Kiro to fetch
and summarize a public web page. Watching Kiro reach out through a tool you configured is the moment
MCP goes from an acronym to something you actually get.

## Next

**[Custom agents](./custom-agents.md)**.
