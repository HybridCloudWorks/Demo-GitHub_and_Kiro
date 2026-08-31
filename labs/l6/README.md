# Lab L6 — Configure an MCP Server

Write a valid MCP configuration that registers at least one server.

## 🎯 The task

Work inside a copy of `starter/`. Create an MCP config at
**`.kiro/settings/mcp.json`** (so the path is `starter/.kiro/settings/mcp.json`) that:

1. Is **valid JSON**.
2. Has a top-level `mcpServers` object.
3. Defines **at least one** server that includes a `command` field.

Use [`examples/mcp.json`](./examples/mcp.json) as a reference (it configures a `fetch` server and
a disabled `filesystem` server).

### Verify it (in your own workspace)

- Ensure the launcher the server needs is installed (`uvx` for the `fetch` example, or `npx`).
- Copy your `mcp.json` into your workspace `.kiro/settings/`.
- Ask Kiro to use a tool the server provides (e.g. fetch a public page and summarize it).

## ✅ Checkpoint

- [ ] `.kiro/settings/mcp.json` is valid JSON with `mcpServers`.
- [ ] At least one server has a `command`.
- [ ] (Hands-on) I connected the server and called one of its tools.

## 🧪 How it's graded

```bash
node labs/_grader/grade.js l6 labs/l6/starter    # fails until you finish
node labs/_grader/grade.js l6 labs/l6/solution    # the reference passes
```

CI runs this grader on any pull request that touches `labs/**`.
