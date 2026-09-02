---
id: l0-what-is-version-control
title: What is Version Control?
sidebar_label: 1. What is version control?
sidebar_position: 2
description: The idea behind version control, why it exists, and the three words you'll use constantly, explained for absolute beginners.
---

# What is Version Control?

> **Level:** L0 · **Estimated time:** 12 min · **Prerequisites:** none

## What you'll get out of this lesson

By the end you'll be able to explain what version control is in your own words, say why saving
"versions" of your work is worth doing at all, and use the three words that come up in almost every
Git conversation: **repository**, **commit**, and **history**.

## The problem nobody warns you about

Picture writing an important document. You save it as `essay.docx`. You make some big edits and,
not wanting to lose the old version, you save a copy as `essay-final.docx`. Then your reviewer
sends notes, so now there's `essay-final-REALLY.docx`, and a day later,
`essay-final-REALLY-v2.docx`.

If that made you wince, you already understand the problem. Almost everyone has lived some version
of it. The "save a copy with a new name" habit feels safe, but it falls apart the moment you
actually need something from it:

- You can't easily see *what* changed between two of those files without opening both and squinting.
- You can't confidently return to an exact earlier state, because you're never quite sure which
  file was which.
- If a second person edits at the same time, merging their copy with yours is a manual, error-prone
  slog.

Now imagine that same mess, but with a software project made of dozens of files. It doesn't scale.

## The idea: version control

**Version control** is a system that records the changes to your files over time so you don't have
to manage all those copies yourself. Instead of a folder full of `-final-v2` files, you get one
project with a complete, labeled record of how it got to its current state.

With version control you can look back at the full **history** of every change, return to any
earlier version exactly as it was, understand *what* changed and *when* and (if you write good
notes) *why*, and work alongside other people without silently overwriting each other's work.

The comparison I keep coming back to is an undo button, except it never forgets, it works across an
entire project at once, and every step is labeled. That's most of what version control is.

## Three words you'll use constantly

| Term | Plain-language meaning |
|------|------------------------|
| **Repository** (or "repo") | A project folder that version control is watching. It holds your files *and* their history. |
| **Commit** | A saved snapshot of your project at one moment, with a short message describing the change. |
| **History** | The ordered list of all your commits: the story of how the project reached its current state. |

You'll meet these three constantly, so it's worth getting comfortable with them now rather than
looking them up every time.

:::note Git and GitHub are not the same thing
This trips up almost everyone at first. **Git** is the version-control tool that runs on your
computer. **GitHub** is a website where you store and share Git repositories online. You'll install
Git in the next lesson and use GitHub throughout the course. Related, but genuinely different
things.
:::

## A mental model that sticks

Every time you finish a change worth keeping, you make a **commit**. Think of each commit as a
labeled photograph of your entire project at that instant. String all those photographs together in
order and you get the **history**, a kind of photo album of the project's life. And because it's an
album, you can always flip back to an earlier photo, and even set the project back to exactly how it
looked then. Once that picture is in your head, the commands in the next few lessons are just ways
of taking and browsing those photos.

## Quick self-check

Before moving on, make sure you can honestly tick these:

- [ ] I can explain what version control is without falling back on the phrase "save as."
- [ ] I know what a **repository**, a **commit**, and a **history** are.
- [ ] I understand that **Git** is the tool and **GitHub** is the website.

## Try it (no computer needed)

This one's on paper, or in a notes app if you prefer. Write a single sentence defining each of the
three terms: *repository*, *commit*, *history*. If you can say each one out loud to a friend without
reading it back, the idea has landed and you're ready to keep going.

## Next

Let's set up your home base online: **[Create your GitHub account](./create-github-account.md)**.
