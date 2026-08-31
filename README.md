# 🚀 GitHub + Kiro: Level 0 to Advanced

> A complete, hands-on learning experience that takes you from *"what is version control?"*
> all the way to advanced GitHub automation and Kiro power-user workflows — building a real,
> deployed web app along the way.

[![Deploy Docs](https://img.shields.io/badge/docs-GitHub%20Pages-blue)](./.github/workflows/deploy-docs.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

---

## 🎯 What is this?

This repository is a **self-paced course + hands-on labs + a real project** that teaches
complete beginners how to use **[GitHub](https://github.com)** and
**[Kiro](https://kiro.dev)** together.

You will:

- 🧠 Learn the *concepts* (version control, branching, PRs, CI/CD, AI-assisted development)
  through readable lessons.
- ✍️ Do *graded labs* — small exercises that a robot (GitHub Actions) checks for you.
- 🛠️ Build a *real static web app* that you deploy publicly, for free, to GitHub Pages.
- 🤖 Go *200%* — advanced Kiro (steering, specs, hooks, MCP, custom agents) and advanced
  GitHub (branch protection, environments, GitHub Apps, Codespaces).

**No prior experience is required.** If you have never installed Git, never used an editor,
and have never heard the word "commit" — you are exactly who this course is for.

---

## 🗺️ The learning path

| Level | Title | You'll learn to… |
|-------|-------|------------------|
| **L0** | Getting Started | Understand version control, create a GitHub account, install Git + Kiro, make your first repo |
| **L1** | Git & GitHub Fundamentals | Commit, branch, push, pull, clone, and use `.gitignore` |
| **L2** | Kiro Fundamentals | Use the Kiro workspace, chat, edit code, and scaffold the project app |
| **L3** | Collaboration | Open issues, raise pull requests, review code, protect branches |
| **L4** | Automation with GitHub Actions | Write CI workflows and deploy the app to GitHub Pages |
| **L5** | Kiro Advanced Authoring | Author steering files, drive work with specs, and use agent hooks |
| **L6** | Kiro Power Tools | Configure MCP servers, custom agents, and integrate Kiro with GitHub |
| **L7** | Advanced GitHub + Capstone | Branch protection rules, environments, GitHub Apps, Codespaces, final capstone |

---

## 🏗️ Repository structure

```text
.
├── docs/           # The course website (Docusaurus): L0–L7 lessons, plus a Blog.
├── project/        # The real static web app you build as you learn (HTML/CSS/JS).
├── labs/           # Hands-on exercises + auto-grading + reference solutions.
├── adr/            # Architecture Decision Records (generic, portable rationale).
├── .devcontainer/  # Ready-to-use Codespaces / dev-container environment.
├── .github/        # GitHub Actions: deploy docs, deploy app, grade labs, lint, checks.
├── .kiro/          # Real Kiro artifacts (steering, specs, hooks, mcp) used for teaching.
├── CONTRIBUTING.md
├── LICENSE
└── README.md       # 👋 You are here.
```

### 📐 ADRs & 📝 Blog

- **[Architecture Decision Records](./adr/)** — start with
  [ADR 0001: Foundational Practices for New GitHub Pages Repositories](./adr/0001-foundational-practices-for-new-github-pages-repositories.md).
  Generic, reusable rationale you can reference from any repo.
- **The Starter Kit Blog** — published on the course site under `/blog`: fun, practical how-tos on
  the features every new GitHub Pages repo should have.

---

## ▶️ How to start

1. **Just want to read?** Open the published course site (see below) and start at **Level 0**.
2. **Want the full hands-on experience?** Fork this repo, then follow Level 0 which walks you
   through installing everything you need.

### 🌐 The published course site

The course is a static site built with **Docusaurus** and hosted **for free** on
**GitHub Pages** (free for public repositories — no server, no self-hosting).

Once you fork this repo and enable Pages, your copy publishes automatically to:

```text
https://<your-username>.github.io/<your-repo-name>/
```

See [`docs/`](./docs) and the deploy workflow in
[`.github/workflows/deploy-docs.yml`](./.github/workflows/deploy-docs.yml).

---

## 🧪 How the labs work

Each lab lives in `labs/` and comes with a **checkpoint** (self-check) and, for most,
an **automated grader** that runs in GitHub Actions. When you open a pull request with your
completed lab, the grader tells you what passed and what still needs work.

See [`labs/README.md`](./labs/README.md) for the full explanation.

---

## 🤝 Contributing

Want to improve a lesson or add a lab? See [`CONTRIBUTING.md`](./CONTRIBUTING.md) — it
documents the lesson template and curriculum conventions everything follows.

---

## 📄 License

[MIT](./LICENSE) — free to use, adapt, and share.
