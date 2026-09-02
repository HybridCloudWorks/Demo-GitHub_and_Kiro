---
id: l2-chatting-with-kiro
title: Chatting with Kiro
sidebar_label: 2. Chatting with Kiro
sidebar_position: 3
description: Ask Kiro questions about your code, request changes, and learn the prompt structure that consistently gets you better results.
---

# Chatting with Kiro

> **Level:** L2 · **Estimated time:** 12 min · **Prerequisites:** the workspace lesson

## What you'll get out of this lesson

You'll learn to ask Kiro about your code, request a change and review what it proposes, and write
prompts that actually get you what you meant.

## It's a conversation, not a search box

Kiro chat works best when you treat it like talking to a capable colleague who has your project open
in front of them. You can ask things like "What does `app.js` do?", or "Add a footer to `index.html`
with the current year," or "Why isn't my page picking up the styles?"

Because Kiro can read the relevant files in your workspace, its answers are grounded in your actual
code, not a generic template. That's the difference between asking a search engine and asking someone
who's looking at the same screen you are.

## The prompt shape that keeps paying off

The clearer your request, the better the result, and after a while you'll find yourself reaching for
the same three-part structure without thinking about it:

1. **Context** - where the change goes. *"In `index.html`..."*
2. **Goal** - what you actually want. *"...add a section listing what I've learned..."*
3. **Constraints** - any rules that matter. *"...keep it plain HTML, no frameworks."*

The contrast is stark once you see it:

| Vague, gets vague results | Clear, gets what you meant |
|---------------------------|----------------------------|
| "make it better" | "Increase the heading size and add more spacing between the cards in `styles.css`." |
| "add a thing" | "Add a bulleted list in `index.html` under a heading called 'What I've learned'." |

"Make it better" forces Kiro to guess what "better" means to you, and it'll guess wrong about as
often as a stranger would. Spend the extra ten seconds on specifics and you'll save yourself the
back-and-forth.

## Always read before you accept

When Kiro proposes an edit, read it before applying it. This isn't about distrust; it's the single
habit that makes you better. You stay in control of what lands in your project, you catch the
occasional thing you didn't intend, and, most importantly, reading the changes is how you actually
learn what the code does. Accepting edits blindly turns a learning tool into a black box.

:::tip Iterate in small steps
If the first result isn't quite right, don't start over with a giant new prompt. Just say what to
change: "Good, but make that list numbered instead of bulleted." A series of small nudges gets you
to the right answer faster, and more predictably, than one enormous request.
:::

## Quick self-check

- [ ] I asked Kiro a question about a file and understood the answer.
- [ ] I made a request using context, goal, and constraints.
- [ ] I reviewed a proposed change before accepting it.

## Try it

Open your course repo in Kiro and ask: *"Explain what `labs/_grader/grade.js` does in two
sentences."* Read the reply and notice how it draws on the real file rather than talking in
generalities. That grounding in your actual code is the whole point.

## Next

**[Reading & editing code](./reading-and-editing.md)**.
