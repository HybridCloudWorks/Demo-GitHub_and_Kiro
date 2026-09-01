---
id: faq
title: FAQ & Troubleshooting
sidebar_label: ❓ FAQ
sidebar_position: 801
description: Common questions and concrete fixes for the course, Git, GitHub, Kiro, and the labs, including the errors that catch nearly everyone.
---

# ❓ FAQ & Troubleshooting

This is the page to reach for when something isn't behaving. It collects the questions learners ask
most and, more usefully, the specific errors that trip almost everyone up at least once. If your
exact problem isn't here, the last section tells you how to ask for help in a way that gets you a
good answer.

## Getting started

**Do I need to pay for anything?**
No. A GitHub account is free, public repositories are free, GitHub Pages hosting is free, and GitHub
Actions is free for public repos. The only optional cost anywhere in the course is a custom domain,
and even that is handled in the [appendix](./appendix-custom-domain.md) as an extra rather than a
requirement. You can complete everything, including the capstone, without spending anything.

**I have never coded before. Is that OK?**
Completely. The course is built for exactly this. It starts at Level 0 with "what is version
control?" and defines every term the first time it appears. If you ever hit a word you don't know,
the [glossary](./glossary.md) has a plain-language definition. Go at your own pace; nothing here is a
race.

## Git and GitHub

**`git push` says authentication failed.**
This is the single most common early stumble, and the cause is almost always the same: GitHub no
longer accepts your account password on the command line. Use a **Personal Access Token** in place of
the password, or sign in through your system's Git credential helper so it handles auth for you. The
full explanation is in [L1 · Remotes](./l1-git-github-fundamentals/remotes-push-pull.md).

**My push was rejected because the remote has changes.**
That rejection is Git protecting you from overwriting work that's newer than yours. Run `git pull`
first to bring your local branch up to date, resolve any conflicts it reports, and then push again.
It'll go through cleanly once you're current.

**I committed a secret by accident.**
Act quickly, and don't assume deleting it fixes it. Adding the file to `.gitignore` after the fact
does nothing, because Git is already tracking it. Remove it from tracking with
`git rm --cached <file>`, commit that removal, and then, most importantly, **rotate** the secret:
treat the old value as leaked, because it's already in your history and quite possibly already pushed.
More detail lives in [L1 · .gitignore](./l1-git-github-fundamentals/gitignore.md).

## The docs site

**`npm run build` fails with a "broken links" error.**
Docusaurus is deliberately strict here (`onBrokenLinks: throw`), which means a broken internal link
fails the whole build rather than shipping quietly. Fix the link it names. The usual culprit is a
link between lessons that's missing its `.md` suffix; use the target's filename **with `.md`**, for
example `./branches.md`, not `./branches`.

**Where does the site get published?**
To GitHub Pages, at `https://<your-username>.github.io/<your-repo>/`, automatically, by the
[`deploy-docs.yml`](./l4-github-actions/deploy-the-app.md) workflow. You only have to enable it once,
under **Settings → Pages → Source: GitHub Actions**, and after that every merge republishes the site.

## The labs

**How do I run a grader?**
Point it at a lab ID and the folder holding your work:

```bash
node labs/_grader/grade.js <lab-id> <path-to-your-work>
```

For example: `node labs/_grader/grade.js l1 labs/l1/starter`. Running it against the provided
`solution` folder first is a good way to see what a full pass looks like before you chase one
yourself.

**The grader says a file is missing but I created it.**
Nine times out of ten this is a path or filename mismatch. The labs are picky about exact paths on
purpose, because real tools are too. Double-check the precise name and location the lab asks for, and
remember that hidden folders like `.github/` and `.kiro/` count and are easy to misplace or misspell.

**CI didn't run on my pull request.**
Workflows only run when they live in the repository's **top-level** `.github/workflows/` folder. Files
tucked inside a lab's `solution/.github/` are examples for you to study; they don't execute. If you
want CI to run, the workflow has to be at the top level.

## Kiro

**Do steering files apply automatically?**
Yes, when they're set to `inclusion: always`, they apply to every interaction in the workspace. Use
`fileMatch` to scope a file to certain paths, or `manual` to apply it only when you explicitly ask.
The details are in [L5 · Steering](./l5-kiro-advanced/steering.md).

**An MCP server won't start.**
Start with the launcher: make sure the tool the server needs is installed (`uvx` for Python servers,
`npx` for Node servers), and confirm the `command` and `args` in your `mcp.json` are exactly right. If
it's the first run, give it a moment; servers often download their package the first time before they
respond.

**Can I use Kiro and GitHub together on the same change?**
Absolutely, and that's the whole of Level 6. Edit the change with Kiro, then branch, commit, push, and
open a PR from the integrated terminal without ever leaving your workspace. Walk through it in
[L6 · Kiro × GitHub](./l6-kiro-power-tools/kiro-and-github.md).

## Still stuck?

Open an **issue** on the course repository describing what you tried, what you expected, and what
actually happened. Writing a problem up clearly is a genuinely useful skill in its own right, the same
one you practiced in Level 3, and more often than not the act of describing it precisely surfaces the
answer before anyone else even replies.
