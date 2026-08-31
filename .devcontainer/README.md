# Dev container

This folder makes the repository open cleanly in **GitHub Codespaces** (or any dev-container
compatible editor) with everything preinstalled — no local setup required.

## What you get

- **Node.js 20** — to build and preview the Docusaurus course site and run the lab grader.
- **GitHub CLI (`gh`)** — for issues, pull requests, and repo tasks from the terminal.
- **Docs dependencies preinstalled** — `postCreateCommand` runs `cd docs && npm install` when the
  Codespace is created.
- **Port 3000 forwarded** — for the Docusaurus dev server (`cd docs && npm start`).
- **Handy editor extensions** — markdownlint, Prettier, and Markdown All in One.

## Launch a Codespace

On GitHub: **Code → Codespaces → Create codespace on `main`**. When it finishes building, try:

```bash
cd docs && npm start          # live-preview the course site on port 3000
node project/scripts/check-static-site.js   # validate the project app
node labs/_grader/grade.js l1 labs/l1/solution   # run a lab grader
```

This is the same environment described in the course's
[Level 7 · Codespaces](../docs/docs/l7-advanced-github/codespaces.md) lesson.
