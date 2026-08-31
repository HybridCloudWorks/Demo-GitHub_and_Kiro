---
id: appendix-custom-domain
title: "Appendix: Using a Custom Domain (optional)"
sidebar_label: "Appendix: Custom Domain"
sidebar_position: 900
description: Optional instructions for serving the course site on your own domain via GitHub Pages.
---

# Appendix: Using a Custom Domain (optional)

The course site is hosted **for free** on **GitHub Pages** at
`https://<your-username>.github.io/<your-repo>/`. That is all you need — this appendix is
entirely optional.

:::note
Self-hosting is out of scope for this course. GitHub Pages is the only hosting target. This
appendix simply shows how to point a domain you already own at your existing free Pages site.
:::

## What it costs

- GitHub Pages hosting: **free** for public repositories.
- A custom domain: you pay your domain registrar for the domain name itself (typically a few
  dollars per year). GitHub does not charge for connecting it.

## Steps

1. **Buy a domain** from any registrar (Namecheap, Cloudflare, Google Domains, etc.).
2. **Add the domain in GitHub:** Repository → **Settings** → **Pages** → **Custom domain** →
   enter e.g. `learn.example.com` → **Save**. GitHub writes a `CNAME` file to your site.
3. **Create DNS records at your registrar:**
   - For a subdomain (e.g. `learn.example.com`): add a **CNAME** record pointing to
     `<your-username>.github.io`.
   - For an apex domain (e.g. `example.com`): add **A records** pointing to GitHub's Pages IPs
     (see GitHub's docs for the current addresses) or an **ALIAS/ANAME** if your registrar
     supports it.
4. **Enable HTTPS:** back in Settings → Pages, tick **Enforce HTTPS** once the certificate has
   been provisioned (can take a little while).
5. **Update Docusaurus `url`/`baseUrl`:** with a custom domain at the root, set
   `SITE_URL=https://learn.example.com` and `SITE_BASE_URL=/`. You can set these as repository
   variables so the deploy workflow picks them up, or edit the defaults in
   `docs/docusaurus.config.js`.

:::tip
For an apex/root custom domain, `baseUrl` becomes `/` (no repo-name path segment), unlike the
default `github.io/<repo>/` URL.
:::

## Verifying

After DNS propagates, visit your custom domain — it should serve the same site. The deploy
workflow's smoke test will continue to check reachability on each deploy.
