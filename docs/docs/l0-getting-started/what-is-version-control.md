---
id: l0-what-is-version-control
title: What is Version Control?
sidebar_label: 1. What is version control?
sidebar_position: 2
description: The big idea behind version control, explained for absolute beginners.
---

# What is Version Control?

> **Level:** L0 · **Estimated time:** 12 min · **Prerequisites:** none

## 🎯 Objectives

By the end of this lesson you will be able to:

- Explain, in your own words, what **version control** is
- Describe why saving "versions" of your work matters
- Define the key words **repository**, **commit**, and **history**

## 📖 Lesson

### The problem, first

Imagine you're writing an essay. You save it as `essay.docx`. Then you make big changes and
save `essay-final.docx`. Then more changes: `essay-final-REALLY.docx`, then
`essay-final-REALLY-v2.docx`. Sound familiar?

This "save-as with a new name" approach falls apart quickly:

- You can't easily see **what changed** between versions.
- You can't **go back** to an exact earlier state with confidence.
- If two people edit at once, combining their work is painful.

### The idea: version control

**Version control** is a system that records changes to your files over time so you can:

- Look back at a full **history** of every change.
- Return to any earlier version exactly as it was.
- Understand *what* changed, *when*, and *why*.
- Work with other people without overwriting each other.

Think of it as an *unlimited, well-labeled undo* for an entire project — one that never forgets.

### Three words you'll use constantly

| Term | Plain-language meaning |
|------|------------------------|
| **Repository** (or "repo") | A project folder that version control is watching. It holds your files *and* their history. |
| **Commit** | A saved snapshot of your project at a moment in time, with a short message describing the change. |
| **History** | The ordered list of all your commits — the story of how the project got to where it is. |

:::note
The tool we'll use for version control is called **Git**. The website where we'll store and
share repositories is **GitHub**. They're related but different — you'll install Git next
lesson and use GitHub throughout the course.
:::

### A tiny mental model

Every time you finish a meaningful change, you make a **commit**. Each commit is like a labeled
photograph of your whole project. Later, you can flip back through the photo album (the
**history**) and even return the project to any photo you like.

## ✅ Checkpoint

- [ ] I can explain what version control is without using the phrase "save as".
- [ ] I know what a **repository**, a **commit**, and **history** are.
- [ ] I understand that **Git** is the tool and **GitHub** is the website.

## 🧪 Demo / Try it

You don't need a computer for this one. Grab paper (or a notes app) and write one sentence for
each: *repository*, *commit*, *history*. If you can explain each to a friend, you're ready.

## ➡️ Next

Let's set up your online home base: **[Create your GitHub account](./create-github-account.md)**.
