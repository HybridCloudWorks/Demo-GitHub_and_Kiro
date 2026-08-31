# Design — Contact Section

## Overview

Add a static "Contact" section to `project/index.html`, styled with the existing `.card` class.
No JavaScript or backend is required.

## Markup

Insert a new section inside `<main class="container">`, after the About section:

```html
<section class="card" id="contact">
  <h2>Contact</h2>
  <p>Reach me at <a href="mailto:you@example.com">you@example.com</a>.</p>
</section>
```

## Styling

Reuse the existing `.card` rules in `project/styles.css`. No new CSS is required. If a special
accent is wanted, use the `--brand` custom property rather than a hard-coded color.

## Testing

- Manual: open `index.html`; the Contact card appears and the email link works.
- Automated: `node project/scripts/check-static-site.js` still passes (well-formed HTML, all
  local assets resolve; the `mailto:` link is external and skipped by the checker).

## Constraints honored

- Static only — no build tools or frameworks (per steering `project-conventions`).
- Semantic HTML and existing styles reused.
