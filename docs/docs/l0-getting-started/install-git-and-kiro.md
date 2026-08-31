---
id: l0-install-git-and-kiro
title: Install Git and Kiro
sidebar_label: 3. Install Git and Kiro
sidebar_position: 4
description: Install the two tools you'll use throughout the course — Git and Kiro.
---

# Install Git and Kiro

> **Level:** L0 · **Estimated time:** 20 min · **Prerequisites:** a GitHub account

## 🎯 Objectives

By the end of this lesson you will be able to:

- Install **Git** and confirm it works
- Install **Kiro** and open it
- Tell Git who you are (your name and email)

## 📖 Lesson

You need two tools:

- **Git** — the version-control engine that runs on your computer.
- **Kiro** — an AI-powered development environment where you'll write code and work with Git.

### Step 1 — Install Git

Pick your operating system:

- **Windows:** download the installer from **[git-scm.com/download/win](https://git-scm.com/download/win)**
  and accept the defaults.
- **macOS:** the easiest way is to install the **Xcode Command Line Tools**. Open the
  **Terminal** app and run:

  ```bash
  xcode-select --install
  ```

  Or download an installer from **[git-scm.com/download/mac](https://git-scm.com/download/mac)**.
- **Linux:** use your package manager, for example on Debian/Ubuntu:

  ```bash
  sudo apt-get update && sudo apt-get install -y git
  ```

**Verify Git is installed.** Open a terminal and run:

```bash
git --version
```

You should see something like `git version 2.43.0`. Any recent 2.x version is fine.

### Step 2 — Tell Git who you are

Git labels every commit with your name and email. Set them once (use the email tied to your
GitHub account):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Check it worked:

```bash
git config --global --list
```

### Step 3 — Install Kiro

1. Go to **[kiro.dev](https://kiro.dev)** and download the version for your operating system.
2. Install it the way you'd install any app (run the installer / drag to Applications).
3. Open Kiro. On first launch you may be asked to sign in and to trust a workspace folder —
   that's expected.

:::tip What's a "workspace"?
In Kiro, a **workspace** is just the project folder you're currently working in. When you open
a folder, Kiro can read and edit the files in it and run commands for you. You'll use this a
lot from Level 2 onward.
:::

:::note Terminal basics
A **terminal** (also called a "command line" or "shell") is a text window where you type
commands. On Windows the Git installer includes **Git Bash**; on macOS/Linux use the built-in
**Terminal**. Kiro also has an integrated terminal you can use later.
:::

## ✅ Checkpoint

- [ ] `git --version` prints a version number.
- [ ] `git config --global --list` shows my name and email.
- [ ] Kiro is installed and opens.

## 🧪 Demo / Try it

In your terminal, run all three verification commands in a row:

```bash
git --version
git config --global user.name
git config --global user.email
```

If each prints something sensible, your tools are ready.

## ➡️ Next

Now the exciting part — **[Your first repository and commit](./first-repo-and-commit.md)**.
