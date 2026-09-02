---
slug: deploy-static-sites-free-with-actions
title: "Ship It on Merge: Deploying Static Sites Free with GitHub Actions + Pages"
authors: [starterkit]
tags: [github-pages, ci-cd, actions, deployment]
description: How automated static-site deployment actually works, why it beats dragging files around by hand, and the config you need to wire it up on any static-site generator.
---

Every team I've worked with has a version of the same story. Someone builds the site on their
laptop, drags the output into a hosting dashboard, and it works. Three weeks later that person is
on vacation, the site needs a fix, and nobody else remembers which folder to upload or which
settings were clicked. The knowledge lived in one person's head, and now it's gone.

The fix is to stop treating deployment as a manual ritual and start treating it as code. You push
to your main branch, and the site publishes itself. No dashboard, no drag-and-drop, no tribal
knowledge. This post walks through how that works on GitHub, why it's worth the small amount of
setup, and the config you need. It's deliberately generic, so bring whatever static-site
generator you already like.

<!-- truncate -->

## The mental model

Under the hood there are three moving parts, and they hand off to each other like runners in a
relay:

```mermaid
graph LR
    A[You push / merge to main] --> B[Actions builds the site]
    B --> C[Upload the built files as a Pages artifact]
    C --> D[Deploy the artifact to GitHub Pages]
    D --> E[Live at your public URL]
```

The **build** step turns your source (Markdown, templates, components, whatever) into a plain
folder of HTML, CSS, and JavaScript. The **upload** step packages that folder up as something
GitHub calls a Pages artifact. The **deploy** step takes that artifact and publishes it. That's
the whole pipeline.

What makes this better than the manual version isn't any single step. It's that the entire
process is written down in a YAML file that lives in your repository. The process travels with the
project, it's visible to everyone, and it runs the exact same way whether you triggered it or a
teammate did.

## Why it's worth the setup

I'll be honest: the first time you wire this up, it takes longer than just dragging files would.
The payoff shows up on every deploy after that.

A build that runs on a clean, throwaway machine every time is reproducible. There's no more "it
worked on my laptop," because there is no laptop in the loop. Every deploy is also a logged
workflow run you can open, read, and re-run, which turns "the site broke and we don't know why"
into a five-minute investigation. And because the pipeline is triggered by a merge, anyone who can
merge can ship. You no longer need a designated deploy person who becomes a bottleneck the moment
they step away.

For public repositories, both the build minutes and the Pages hosting are free, which is a genuinely
nice deal. Pair it with branch protection and the story gets even better: only reviewed, tested
changes ever reach the live site.

## The config, from the top

One workflow file does the whole job. Here's the shape of it, trimmed to the essentials:

```yaml
name: Deploy site

on:
  push:
    branches: [main]
  workflow_dispatch:        # lets you deploy manually too

permissions:
  contents: read
  pages: write              # required to publish
  id-token: write           # required for the deploy action's auth

concurrency:
  group: pages              # don't let two deploys race
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # --- your generator's build goes here ---
      # e.g. install deps, then produce a ./build (or ./_site, ./public) folder
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build          # the folder your build produced

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages       # the built-in deployment environment
      url: ${{ steps.deploy.outputs.page_url }}
    steps:
      - id: deploy
        uses: actions/deploy-pages@v4
```

Three things trip people up here, so they're worth calling out.

The first is permissions. If you leave out `pages: write` or `id-token: write`, the deploy step
fails with a permissions error that isn't especially obvious the first time you hit it. When your
deploy dies with a 403-flavored message, this is almost always why.

The second is that `configure-pages` figures out your site's base URL for you. That matters
because a Pages site usually lives at a subpath like `/<repo>/` rather than at the root of a
domain, and most generators need to be told that or every link and asset will 404. Letting the
action resolve it saves you a class of "why are all my images broken" headaches.

The third is the `github-pages` environment. That's the named deployment target your run reports
to, and it's also where you can attach protection rules later, like requiring a human to approve
before anything goes live.

## The one setting you have to flip

The workflow won't do anything until you point Pages at Actions as its source. It's a one-time
switch, buried where you'd expect:

> **Settings → Pages → Build and deployment → Source: GitHub Actions.**

After that, your site publishes to `https://<owner>.github.io/<repo>/` on every merge to main, and
you can mostly forget the whole thing exists.

## Where to go once the basics work

Once the happy path is solid, a few upgrades earn their keep.

Add a smoke test as the final step: `curl` the published URL and fail the run if it doesn't return
`200`. It's a couple of lines and it catches the embarrassing case where the deploy "succeeded"
but the site is actually unreachable. Add path filters (`paths: ["site/**"]`) so a typo fix in the
README doesn't trigger a full rebuild and redeploy. Run the *build* on pull requests, without the
deploy, so broken builds get caught in review instead of on main. And if you want a real domain,
Pages supports custom domains for free; you pay your registrar for the name, point DNS at Pages,
and switch on "Enforce HTTPS."

## A quick word on "static"

Static doesn't mean boring, and it definitely doesn't mean limited. It means the server just hands
over files instead of computing a response for every request. That's what makes a static site
fast, cheap, and hard to attack (there's no application server sitting there waiting to be
exploited), and it's why a CDN can cache the whole thing effortlessly. For docs, blogs, landing
pages, handbooks, and demos, static plus Pages is a sweet spot that's genuinely hard to beat.

## The takeaway

Write one small workflow, flip one setting, and deployment stops being an event you plan around. It
becomes a thing that quietly happens when you merge. That's the real goal here. The best deploy
process is the one nobody has to think about, because it never needs a person in the loop to work.

*Prefer the formal rationale? The companion ADR, "Foundational Practices for New GitHub Pages
Repositories," records why automated deployment (and its six siblings) should be the default for
every new repo.*
