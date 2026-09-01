# Security Policy

Thanks for helping keep this project and the people who use it safe.

## Reporting a vulnerability

**Please do not open a public issue for security problems.** Public issues are visible to
everyone, including anyone who might exploit the flaw before it's fixed.

Instead, report it privately through GitHub's **Security → Report a vulnerability** ("Private
vulnerability reporting") on this repository. If that isn't available to you, contact the
maintainers through the private channel listed on the organization profile.

When you report, it helps enormously if you can include:

- What the issue is and the impact you think it has.
- The steps to reproduce it (a proof of concept is ideal, but a clear description is fine).
- The affected area — a page, a workflow, a script, or a dependency.
- Any suggested fix, if you have one in mind.

## What to expect

- **Acknowledgement** within a few working days that we've received your report.
- **An assessment** of severity and scope, and follow-up questions if we need them.
- **A fix and disclosure** coordinated with you. We're happy to credit you once a fix ships,
  unless you'd prefer to stay anonymous.

## Scope

This repository is training material: a documentation site, an example static web app, and a
set of exercises. The things most worth reporting are:

- Secrets accidentally committed to the history (keys, tokens).
- A workflow or script that could be abused (for example, one that leaks secrets in logs).
- A dependency with a known, exploitable vulnerability that affects the build or site.
- Content that could mislead a learner into an insecure practice.

## A note for learners

Security is part of the craft, not an afterthought. As you work through the course you'll see
this in practice: never commit secrets (Level 1), let automated checks guard `main` (Levels 3–4),
keep tokens out of logs and scope them tightly (Levels 6–7), and treat third-party actions and
MCP servers as code you're trusting to run. If you spot something in these materials that
contradicts that, a report is genuinely welcome.
