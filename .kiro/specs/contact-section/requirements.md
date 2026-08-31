# Requirements — Contact Section

This is a real Kiro **spec**. A spec captures a feature as requirements → design → tasks so Kiro
can implement it deliberately. This spec adds a "Contact" section to the project homepage.

## Introduction

Learners want visitors to know how to reach them. We'll add a small, static Contact section to
`project/index.html` — no backend, just links.

## Requirements

### Requirement 1 — A contact section exists

**User story:** As a visitor, I want to see how to contact the author, so that I can reach out.

#### Acceptance criteria

1. WHEN the homepage loads THEN a `<section id="contact">` SHALL be present.
2. The section SHALL contain an `<h2>` with the text "Contact".
3. The section SHALL contain at least one link (`<a>`), e.g. an email `mailto:` link.

### Requirement 2 — Consistent with project conventions

**User story:** As a maintainer, I want the section to match the site style.

#### Acceptance criteria

1. The section SHALL use the existing `.card` styling used by other sections.
2. The change SHALL keep `node project/scripts/check-static-site.js` passing.
3. No build tools or frameworks SHALL be introduced.
