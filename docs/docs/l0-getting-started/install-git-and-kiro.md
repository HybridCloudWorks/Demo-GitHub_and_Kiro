---
id: l0-install-git-and-kiro
title: Install Git and Kiro
sidebar_label: 3. Install Git and Kiro
sidebar_position: 4
description: Install Git and Kiro, confirm each one actually works, and tell Git who you are so your commits are labeled correctly.
---

# Install Git and Kiro

> **Level:** L0 · **Estimated time:** 20 min · **Prerequisites:** a GitHub account

## What you'll get out of this lesson

You'll install **Git** and confirm it runs, install **Kiro** and open it, and tell Git your name and
email so every commit you make from now on is stamped correctly.

## The two tools, and what each one does

There are exactly two things to install:

- **Git** is the version-control engine. It runs on your computer and does the actual work of
  tracking changes, whether or not you're online.
- **Kiro** is an AI-powered development environment: the place where you'll read and write code,
  run commands, and work with Git without memorizing every incantation.

You could get through this course with Git and a plain text editor, but Kiro is where the course
really opens up from Level 2 onward, so let's get both in place.

## Step 1 - Install Git

Pick the instructions for your operating system.

On **Windows**, download the installer from
**[git-scm.com/download/win](https://git-scm.com/download/win)** and accept the defaults. The
installer bundles a terminal called Git Bash that you'll be glad to have.

On **macOS**, the least fussy route is the Xcode Command Line Tools. Open the **Terminal** app and
run:

```bash
xcode-select --install
```

If you'd rather have a dedicated installer, you can grab one from
**[git-scm.com/download/mac](https://git-scm.com/download/mac)** instead.

On **Linux**, use your package manager. On Debian or Ubuntu that's:

```bash
sudo apt-get update && sudo apt-get install -y git
```

Now confirm it worked. Open a terminal and run:

```bash
git --version
```

You should see something like `git version 2.43.0`. Any recent 2.x version is fine, so don't worry
if your number is a little different from mine. If instead you get "command not found," the install
didn't finish, or (on Windows) you need to open a fresh terminal so it picks up the new program.

## Step 2 - Tell Git who you are

Git stamps every commit with a name and an email. If you skip this, your very first commit will
either be labeled with something generic or Git will stop and ask. Set it once, globally, using the
email tied to your GitHub account:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Then confirm it took:

```bash
git config --global --list
```

You should see your name and email in the output. Using your GitHub email here matters later:
it's how GitHub connects the commits you push to your account.

## Step 3 - Install Kiro

1. Go to **[kiro.dev](https://kiro.dev)** and download the build for your operating system.
2. Install it the same way you'd install any other app: run the installer on Windows, or drag it to
   Applications on macOS.
3. Open Kiro. On the first launch it may ask you to sign in and to confirm that you trust a workspace
   folder. Both prompts are expected and safe to accept for your own folders.

:::tip What a "workspace" means in Kiro
A **workspace** is just the project folder you currently have open. When you open a folder as a
workspace, Kiro can read and edit the files inside it and run commands on your behalf. If that sounds
powerful, it is, which is why Kiro asks you to confirm you trust the folder. You'll rely on this
heavily starting in Level 2.
:::

:::note If "terminal" is a new word
A **terminal** (also called a command line or shell) is a text window where you type commands
instead of clicking buttons. On Windows the Git installer gives you **Git Bash**; on macOS and Linux
there's a built-in **Terminal** app. Kiro also has its own integrated terminal, which is handy once
you're working inside a project.
:::

## Quick self-check

- [ ] `git --version` prints a version number.
- [ ] `git config --global --list` shows my name and email.
- [ ] Kiro is installed and opens without errors.

## Try it

Run the three verification commands back to back:

```bash
git --version
git config --global user.name
git config --global user.email
```

If each one prints something sensible, your tools are set up and you're ready for the fun part.

## Next

Now the part that makes it real: **[Your first repository and commit](./first-repo-and-commit.md)**.
