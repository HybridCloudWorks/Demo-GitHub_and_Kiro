# Architecture Decision Records (ADRs)

This folder holds **Architecture Decision Records** — short documents that capture an important
decision, the context that led to it, the options considered, and the resulting consequences.

ADRs are written to be **portable and generic** where possible, so they can be referenced across
multiple repositories rather than describing one project's specifics.

## Format

Each ADR follows a lightweight structure: **Status · Context · Decision · Options considered ·
Consequences**. Records are numbered sequentially and never deleted — a superseded decision is
marked as such and linked to its replacement, preserving the history of *why* things are the way
they are.

## Index

| # | Title | Status |
|---|-------|--------|
| [0001](./0001-foundational-practices-for-new-github-pages-repositories.md) | Foundational Practices for New GitHub Pages Repositories | Accepted |

## Adding a new ADR

1. Copy the structure of an existing record.
2. Give it the next number (`0002-...`).
3. Set the status (`Proposed` → `Accepted`/`Rejected`; later `Superseded by 000X`).
4. Add a row to the index above.
