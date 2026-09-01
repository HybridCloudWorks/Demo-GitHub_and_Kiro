---
slug: new-repo-starter-kit
title: "The First Hour: Setting Up a New GitHub Pages Repo the Right Way"
authors: [starterkit]
tags: [github-pages, ci-cd, devex, getting-started]
description: The nine things worth doing the moment you create a static-site repo — why each one earns its keep, and roughly how to wire it up.
---

There's a moment, right after you click **Create repository**, where you have a choice. You can
start dumping in content and tell yourself you'll "sort out the setup later" — or you can spend
your first hour laying track so the project more or less runs itself from then on.

I've done it both ways. The "later" version always costs more: a colleague can't figure out how
to run the thing, a broken link ships to production because nothing checked it, someone
force-pushes over `main` at 11pm. None of that is a big disaster on its own. It's just friction,
and friction compounds.

So here's the setup I reach for now on any new GitHub Pages repo. None of it is exotic. All of it
pays for itself within a week.

<!-- truncate -->

Nine things, in the rough order I'd tackle them:

1. Deploy automatically on merge
2. Check every change with CI
3. Protect the default branch
4. Give the site a real front door
5. Add a social preview
6. Commit a dev environment
7. Seed the issue tracker
8. Write down who owns what (and how to contribute)
9. Say how to report a security problem

Let's take them one at a time.

## 1. Deploy automatically on merge

The rule I hold to: **if I'm dragging built files somewhere by hand, something is wrong.**
Merging to the default branch should publish the site, full stop.

On GitHub that's a workflow that builds your site and hands the output to Pages. The shape is
always roughly this:

```yaml
on:
  push:
    branches: [main]
permissions:
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # build into ./build (or _site, public, dist — whatever your generator emits)
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with: { path: build }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages }
    steps:
      - uses: actions/deploy-pages@v4
```

Then flip **Settings → Pages → Source** to **GitHub Actions** once, and you're done forever.
The payoff isn't just convenience — it's that the deploy is now *reproducible* and *logged*. When
something looks wrong on the live site, you have a run to inspect and re-run, not a vague memory
of which files you uploaded.

## 2. Check every change with CI

Static sites have a nasty habit of failing quietly. A link rots, a tag doesn't close, a page
renders half-blank — and none of it throws an error. It just ships.

The fix is to make a machine grumpy about it on every push and pull request. At minimum: a build
that *fails on broken internal links*, and a linter for your markup or Markdown.

```yaml
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: <build command that exits non-zero on broken links>
      - run: <your linter>
```

Now "the build is green" actually means something. I've caught more embarrassing typos this way
than I'd like to admit.

## 3. Protect the default branch

Once CI exists, make it matter. Turn on branch protection (or a ruleset) for the default branch:
require a pull request, require the checks to pass, and block direct pushes and force-pushes.

People sometimes skip this on solo projects — "it's just me." But it's *especially* useful when
it's just you, because you're the one most likely to push a quick fix straight to `main` at the
end of a long day. Protection turns that reflex into a thirty-second PR instead of a Friday-night
incident.

One gotcha worth knowing: a status check only shows up in the "required checks" list *after it
has run at least once*. Open one PR, let CI run, then add the check as required.

## 4. Give the site a real front door

A repository's default file listing tells a visitor nothing. A landing page and a first-screen
README tell them everything: what this is, who it's for, and how to start.

You don't need much — a headline, a sentence of pitch, a couple of links to "start here." But the
difference between a bare directory and a purpose-built entry point is the difference between a
visitor bouncing and a visitor becoming a contributor.

## 5. Add a social preview

Paste your project link into Slack and watch what happens. If it renders as naked blue text,
you're leaving attention on the table.

Set an Open Graph image and a title/description, and every shared link becomes a little card with
a picture. It's a one-time bit of config for a permanent bump in how professional the project
looks everywhere it's mentioned.

```html
<meta property="og:title" content="My Project" />
<meta property="og:description" content="What it does, in one line." />
<meta property="og:image" content="https://example.com/img/social-card.png" />
```

A practical warning from experience: **use a PNG or JPG, not an SVG.** Plenty of link
unfurlers — Slack, iMessage, some Twitter/X paths — won't render an SVG `og:image`, and you'll get
a blank card without ever seeing an error.

## 6. Commit a dev environment

The fastest way to lose a would-be contributor is to make them spend an hour installing runtimes
before they can even preview a change. A dev container fixes that: declare the runtime, tools, and
a setup command, and the repo opens ready-to-go in Codespaces or any compatible editor.

```json
{
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
  "postCreateCommand": "npm install",
  "forwardPorts": [3000]
}
```

The quiet benefit is consistency: local, cloud, and CI all agree on what "the environment" is, so
"works on my machine" stops being a sentence anyone says.

## 7. Seed the issue tracker

An empty issue tracker is a closed door. A handful of well-formed issues — clear title, a
sentence of context, acceptance criteria, a `good first issue` label — is an open invitation.

```bash
gh issue create --title "Add an About section" \
  --body "Acceptance: a new About section with a heading and a short bio." \
  --label "good first issue"
```

Two things happen at once: contributors can self-serve instead of asking "what needs doing?", and
the project *looks* alive, because it is.

## 8. Write down who owns what (and how to contribute)

The first two artifacts anyone touches are the issue they file and the PR they raise. Give both a
shape, and make sure the right people get pulled into review automatically.

That's three small files. A `CODEOWNERS` maps paths to reviewers (last match wins):

```text
*            @your-org               # default
/docs/       @your-org/docs-team
/.github/    @your-org/platform-team # CI/CD gets extra eyes
```

A pull request template pre-fills a summary, a `Fixes #` line, and a "how did you test this?"
prompt. And issue forms turn "it's broken" into a structured report with the fields you actually
need. Individually trivial; together they're the cheapest professionalism a repo can buy.

## 9. Say how to report a security problem

Finally, add a `SECURITY.md`. It answers one question a would-be reporter shouldn't have to guess
at: *where do I send this so it doesn't become public before you've fixed it?*

Point people at GitHub's private vulnerability reporting, say what to include (impact, repro,
affected area), and set expectations for a response. Even for a small static site this matters —
the most common real issue is a secret accidentally committed to history, and you want to hear
about that quietly, fast, from whoever spotted it.

## The honest summary

Do these nine once — ideally captured in a template so the next repo starts here — and the
project stops fighting you. It publishes when you merge, refuses broken changes, greets visitors,
markets its own links, onboards contributors in minutes, hands newcomers a to-do list, routes
reviews to the right people, and gives security reporters a front door.

That's a lot of leverage for one focused hour. The version of you three months from now, staring
at a repo you half-remember, will be grateful you spent it.

*If you'd like the same argument in a form you can drop into an architecture review, there's a
companion decision record — "Foundational Practices for New GitHub Pages Repositories" — that
lays it out as a formal ADR.*
