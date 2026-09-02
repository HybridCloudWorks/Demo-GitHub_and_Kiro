---
id: l2-scaffold-the-project
title: Scaffold the Project App
sidebar_label: 4. Scaffold the project
sidebar_position: 5
description: Use Kiro to create the initial static web app, run it locally, verify it, and tag it as your first real project milestone.
---

# Scaffold the Project App

> **Level:** L2 · **Estimated time:** 30 min · **Prerequisites:** all earlier L2 lessons

This is your first real **project milestone**, and it's the point where the course stops being
exercises and starts being a thing you're building. You'll create a small static web app called *My
Learning Journal*, and you'll keep extending it right through to the capstone. It's plain HTML, CSS,
and JavaScript with **no build tools**, which means it runs by simply opening the page. That
simplicity is deliberate: fewer moving parts now means more attention on the fundamentals.

## What you'll get out of this lesson

You'll create a three-file static site (`index.html`, `styles.css`, `app.js`), run it locally in a
browser, verify it passes the project's checker, and commit it as milestone **`milestone-l2`**.

## What you're building

A single page: a header with a title and tagline, a couple of content "cards," and a footer whose
year is filled in by a tiny script. It's small on purpose. The finished reference lives in the
repository under
[`project/`](https://github.com/HybridCloudWorks/Demo-GitHub_and_Kiro/tree/main/project) if you want
something to compare against.

## Step 1 - Ask Kiro to scaffold it

In your project folder, open Kiro chat and describe what you want. Something like this works well:

> Create a static web page called *My Learning Journal*. Add `index.html` with a header
> (title and tagline), two content cards, and a footer. Add `styles.css` for clean, modern
> styling, and `app.js` that sets the footer's year. No frameworks or build tools.

Then read what Kiro proposes rather than accepting it on sight. This is exactly the review habit from
the last lesson. If something isn't to your taste, follow up: "Make the cards sit side by side on
wider screens," or "Use a warmer color for the header." Small iterations beat trying to specify
everything in one giant prompt.

## Step 2 - Run it locally

The quickest check is to just open `index.html` in your browser. For anything involving JavaScript,
though, running a tiny local server is the better habit, because some browser features behave
differently when a page is loaded straight from disk:

```bash
cd project
python3 -m http.server 8000
# visit http://localhost:8000
```

## Step 3 - Verify it's a valid static site

The repository ships a small checker that CI runs too, so passing it locally means you won't be
surprised later:

```bash
node project/scripts/check-static-site.js
```

It confirms the required files exist, the HTML is well-formed, and, crucially, that every local
asset your page references actually exists. That last check catches the classic mistake of linking a
stylesheet or image with a typo'd path, the kind of bug that's invisible until someone loads the
page.

## Step 4 - Commit and tag the milestone

```bash
git add project
git commit -m "L2: scaffold My Learning Journal static site"
git tag milestone-l2
git push && git push --tags
```

:::note What a tag is
A **tag** is a permanent label pinned to a specific commit, which makes it perfect for marking
milestones you might want to return to. Unlike a branch, a tag doesn't move as you add new commits;
it stays put, marking exactly the state of the project at this moment.
:::

## Quick self-check

- [ ] `project/` contains `index.html`, `styles.css`, and `app.js`.
- [ ] The page opens in a browser and shows the header, the cards, and a footer year.
- [ ] `node project/scripts/check-static-site.js` passes.
- [ ] I committed and tagged `milestone-l2`.

## Try it

Open the page in your browser and check that the footer shows the current year. If it does, that's
proof your `app.js` ran, because that year didn't exist in the HTML; the script put it there. It's a
small thing, but it's your first bit of live JavaScript in the project.

## Next

That's Level 2 done, and you now have a real app to build on. Continue to
**[Level 3 · Collaboration](/docs/level-3)** to add your next feature the professional way: through a
pull request.
