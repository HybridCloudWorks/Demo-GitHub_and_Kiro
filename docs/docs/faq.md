---
id: faq
title: FAQ & Troubleshooting
sidebar_label: ❓ FAQ
sidebar_position: 801
description: Common questions and fixes for the course, GitHub, Kiro, and the labs.
---

# ❓ FAQ & Troubleshooting

## Getting started

**Do I need to pay for anything?**
No. A GitHub account is free, public repositories are free, GitHub Pages hosting is free, and
GitHub Actions is free for public repos. The only optional cost is a custom domain (see the
[appendix](./appendix-custom-domain.md)).

**I have never coded before. Is that OK?**
Yes — this course starts at Level 0 with "what is version control?" and defines every term.

## Git & GitHub

**`git push` says authentication failed.**
GitHub no longer accepts your account password on the command line. Use a **Personal Access
Token** as the password, or sign in via your system's Git credential helper. See
[L1 · Remotes](./l1-git-github-fundamentals/remotes-push-pull.md).

**My push was rejected because the remote has changes.**
Run `git pull` first to bring your local branch up to date, resolve any conflicts, then push.

**I committed a secret by accident.**
Ignoring it later isn't enough. Remove it from tracking (`git rm --cached <file>`), commit, and
**rotate** the secret (treat it as leaked). See [L1 · .gitignore](./l1-git-github-fundamentals/gitignore.md).

## The docs site

**`npm run build` fails with a "broken links" error.**
Docusaurus is strict (`onBrokenLinks: throw`). Fix the reported link. For links between lessons,
use the target's filename **with `.md`**, e.g. `./branches.md`.

**Where does the site get published?**
To GitHub Pages at `https://<your-username>.github.io/<your-repo>/`, automatically, by the
[`deploy-docs.yml`](./l4-github-actions/deploy-the-app.md) workflow. Enable it once under
**Settings → Pages → Source: GitHub Actions**.

## The labs

**How do I run a grader?**

```bash
node labs/_grader/grade.js <lab-id> <path-to-your-work>
```

For example: `node labs/_grader/grade.js l1 labs/l1/starter`.

**The grader says a file is missing but I created it.**
Check the exact path and filename the lab asks for (labs are picky on purpose, like real tools).
Hidden folders like `.github/` and `.kiro/` matter.

**CI didn't run on my pull request.**
Workflows only run from the repository's **top-level** `.github/workflows/`. Files inside a lab's
`solution/.github/` are examples and do not execute.

## Kiro

**Do steering files apply automatically?**
Yes, when `inclusion: always`. Use `fileMatch` to scope them to certain files, or `manual` to
apply only on request. See [L5 · Steering](./l5-kiro-advanced/steering.md).

**An MCP server won't start.**
Make sure its launcher is installed (`uvx` for Python servers, `npx` for Node servers) and that
the `command`/`args` in `mcp.json` are correct. The first run may download the server.

**Can I use Kiro and GitHub together on the same change?**
Yes — that's Level 6. Edit with Kiro, then branch, commit, push, and open a PR from the
integrated terminal. See [L6 · Kiro × GitHub](./l6-kiro-power-tools/kiro-and-github.md).

## Still stuck?

Open an **issue** on the course repository describing what you tried and what happened — writing
it up clearly is itself a great habit you learned in Level 3.
