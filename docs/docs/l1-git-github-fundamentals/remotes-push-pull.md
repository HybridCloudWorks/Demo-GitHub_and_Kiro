---
id: l1-remotes-push-pull
title: "Remotes: Push & Pull"
sidebar_label: 3. Remotes, push & pull
sidebar_position: 4
description: Connect a local repository to GitHub, push your commits up, pull other changes down, and clone an existing repo, with the authentication gotcha that catches everyone.
---

# Remotes: Push & Pull

> **Level:** L1 · **Estimated time:** 18 min · **Prerequisites:** branches lesson, a GitHub account

## What you'll get out of this lesson

You'll learn what a **remote** is, create a repository on GitHub and connect it to your local one,
**push** your commits up and **pull** changes back down, and **clone** an existing repository onto
your machine.

## What a remote is

A **remote** is simply a copy of your repository that lives somewhere else. For us, that somewhere
is GitHub. By convention the default remote is named **`origin`**, and you'll see that name
constantly. You **push** your local commits *up* to the remote, and you **pull** other people's
commits (or your own from another machine) *down*.

```mermaid
graph LR
    L[Your computer<br/>local repo] -- git push --> R[GitHub<br/>remote 'origin']
    R -- git pull --> L
```

There are two common ways to get a local repo and a remote talking. Pick whichever matches your
situation.

## Option A - Start on GitHub, then clone

This is the smoothest path for a brand-new project, and it's the one I reach for most.

1. On GitHub, choose **New** to create a repository. Give it a name like `hello-github`, keep it
   **Public**, and tick **Add a README** so it isn't completely empty.
2. On the repo page, click **Code** and copy the **HTTPS** URL.
3. **Clone** it to your computer. Cloning downloads the repo along with its entire history:

   ```bash
   git clone https://github.com/<your-username>/hello-github.git
   cd hello-github
   ```

The nice part is that `clone` sets up the `origin` remote for you automatically. There's nothing
else to wire up.

## Option B - Connect an existing local repo

Use this when you already have a local repo (like `hello-git` from Level 0) that you want to push up.

1. Create an **empty** repository on GitHub. This time do *not* add a README, because your local repo
   already has files and you don't want them to collide.
2. Connect the two and push:

   ```bash
   git remote add origin https://github.com/<your-username>/hello-git.git
   git branch -M main
   git push -u origin main
   ```

That `-u` flag sets `origin/main` as the default upstream, which means from then on a bare
`git push` knows where to go without you spelling it out.

## The everyday sync loop

Day to day, working with a remote settles into a simple rhythm:

```bash
git pull            # get the latest from GitHub before you start
# ...make changes, git add, git commit...
git push            # send your commits up to GitHub
```

:::warning Pull before you push
If someone else pushed changes (or you did, from another computer), your local history is now
behind, and Git will reject a push that would clobber that newer work. The fix is to `git pull`
first, which brings you up to date and lets your push go through cleanly. Getting a rejected push is
not a crisis; it's Git protecting you from overwriting something.
:::

:::note The authentication surprise
The first time you push over HTTPS, GitHub asks you to authenticate, and here's the gotcha that
catches nearly everyone: GitHub no longer accepts your account password on the command line. Use a
**Personal Access Token** instead (create one under Settings → Developer settings → Tokens) and
paste that where it asks for a password, or let Kiro's / your system's Git credential helper handle
sign-in for you. If your push is being rejected with an authentication error, this is almost always
why.
:::

## Quick self-check

- [ ] I can explain what `origin` is.
- [ ] I pushed local commits to GitHub and can see them on the repo page.
- [ ] I can clone a repository onto my machine.

## Try it

Create a repo on GitHub, clone it, add a file, and push it back up:

```bash
git clone https://github.com/<your-username>/hello-github.git
cd hello-github
echo "Hello from my computer" > notes.txt
git add notes.txt
git commit -m "Add notes file"
git push
```

Refresh the repo page on GitHub and `notes.txt` should be sitting right there. That round trip, from
your machine to GitHub and visible in the browser, is the moment "remote" stops being an abstract
word.

## Next

Let's keep the clutter out of your history: **[Ignoring files with .gitignore](./gitignore.md)**.
