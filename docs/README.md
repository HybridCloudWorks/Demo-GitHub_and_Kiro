# Course website (Docusaurus)

This folder is the **Docusaurus** project that builds the course website. Docusaurus only
generates static files into `build/` — it does **not** host anything. Hosting is done for free
by **GitHub Pages** (see `../.github/workflows/deploy-docs.yml`).

## Local development

```bash
npm install      # install dependencies (Node 18+; Node 20 or 22 recommended)
npm start        # live preview with hot reload
npm run build    # production build into build/ (must pass with no broken links)
npm run serve    # serve the built site locally
```

## Structure

- `docs/` — the lesson content, organized into `l0-getting-started/` … `l7-advanced-github/`.
- `sidebars.js` — declares the L0–L7 sidebar categories (lessons auto-populate each level).
- `docusaurus.config.js` — site config. `url`/`baseUrl` target GitHub Pages and can be
  overridden with the `SITE_URL` / `SITE_BASE_URL` (or `GITHUB_ORG` / `GITHUB_REPO`) env vars,
  which the deploy workflow sets automatically.
- `src/css/custom.css` — theme colors.
- `static/img/` — favicon, logo, social card.

## Adding a lesson

Copy `docs/_lesson-template.md` into the appropriate `lN-...` folder, set the front matter
(`id`, `title`, `sidebar_position`), and write the lesson. It appears in the sidebar
automatically.
