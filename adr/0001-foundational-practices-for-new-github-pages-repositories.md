# ADR 0001: Foundational Practices for New GitHub Pages Repositories

- **Status:** Accepted
- **Date:** 2026-01-01
- **Decision makers:** Engineering / Platform team
- **Applies to:** Any new public repository that publishes a static site via GitHub Pages
- **Tags:** documentation, ci-cd, static-site, github-pages, developer-experience

> This ADR is intentionally generic. It records *why* a standard set of practices should be
> adopted when creating a new GitHub Pages repository, so it can be referenced by many projects.
> It does not prescribe a specific site generator, language, or vendor beyond GitHub itself.

---

## Context

Teams repeatedly create small public repositories that publish a static site (documentation,
a landing page, a demo, a handbook, a course). Each time, the same questions recur: how does the
site get published, how do we keep quality high, how do contributors get a working environment,
and how do we make the work approachable for newcomers.

When these decisions are made ad hoc — or skipped — the symptoms are predictable:

- **Manual, fragile publishing.** Someone builds the site on their laptop and uploads it, so
  deploys are inconsistent, undocumented, and bottlenecked on one person.
- **Silent quality drift.** Broken links, malformed markup, and style regressions accumulate
  because nothing checks them automatically.
- **High onboarding friction.** New contributors spend their first hour installing runtimes and
  guessing commands instead of contributing.
- **Undiscoverable, unwelcoming entry points.** A bare file listing gives visitors no sense of
  what the project is or where to start.
- **Weak change hygiene.** Direct pushes to the default branch bypass review and let untested
  changes reach production.
- **No shared work queue.** Tasks live in someone's head, so contributors cannot self-serve.

Because the same repository shape recurs, the same baseline should be established *once, at
creation time*, rather than rediscovered per project. This ADR defines that baseline.

## Decision

**When creating a new GitHub Pages repository, adopt the following foundational practices from
the first commit.** Each is justified independently below; together they form a coherent starter
baseline.

### 1. Automated build-and-deploy pipeline (CI/CD)

Publish the site through an automated workflow triggered on merge to the default branch, using
the platform's native CI (GitHub Actions) and its first-party Pages deployment path.

- **Why:** Removes the single-point-of-failure "deploy from my machine" pattern. Every publish is
  reproducible, logged, and identical regardless of who triggers it. Rollbacks and audits become
  trivial because the pipeline definition is versioned alongside the content.
- **Consequence:** Publishing is a side effect of merging, not a manual chore.

### 2. Continuous quality checks on every change

Run automated checks (at minimum: a production build that fails on broken internal links, plus a
markup/style linter) on every push and pull request.

- **Why:** Static sites fail quietly — a broken link or malformed page ships without an obvious
  error. Gating merges on a strict build converts these latent defects into loud, early, cheap
  failures caught before they reach readers.
- **Consequence:** The default branch stays continuously publishable ("green means shippable").

### 3. Branch protection with required status checks

Protect the default branch: require pull requests, require the CI checks above to pass, and
prohibit direct pushes.

- **Why:** Guarantees that *no* change reaches the published site without passing the same checks
  and being reviewable. This is the enforcement mechanism that makes practices 1 and 2 reliable
  rather than optional. It also creates a natural audit trail of what changed and why.
- **Consequence:** All changes flow through reviewable, checked pull requests — including for
  solo maintainers, who benefit from the same guardrails.

### 4. A welcoming, purpose-built entry point (landing page + README)

Provide a real landing page for the site and a README that states what the project is, who it is
for, and how to get started — rather than relying on a raw file listing.

- **Why:** The entry point is the first (often only) thing a visitor evaluates. A clear landing
  page and README reduce bounce, communicate value, and lower the barrier to first contribution.
- **Consequence:** The project is discoverable and self-explanatory to newcomers and stakeholders.

### 5. Social/Open Graph preview metadata

Configure a social preview image and Open Graph/Twitter metadata so shared links render as rich
cards.

- **Why:** Public sites are shared in chat, issues, and social feeds. A bare link is easy to
  ignore; a branded card with a title and description dramatically improves click-through and
  perceived credibility at near-zero cost.
- **Consequence:** Every shared link becomes a small, consistent piece of marketing.

### 6. A reproducible contributor environment (dev container)

Commit a dev-container definition so the repository opens into a ready-to-use environment
(correct runtime, tooling, and dependencies preinstalled) in a cloud IDE or locally.

- **Why:** "Works on my machine" is the most common onboarding tax. A declared environment makes
  setup deterministic and one-click, so contributors reach a working state in minutes and CI,
  local, and cloud environments stay aligned.
- **Consequence:** Onboarding time collapses; environment drift between contributors disappears.

### 7. A seeded, self-service work queue (issues)

Populate the issue tracker with a starter set of well-formed issues (labeled, with clear titles
and acceptance criteria) representing the obvious first tasks.

- **Why:** An empty tracker offers no on-ramp. A curated backlog lets contributors self-select
  work, signals that the project is active and maintained, and models the issue conventions the
  team expects.
- **Consequence:** Contribution becomes self-service; maintainers spend less time triaging
  "what can I help with?"

## Options considered

For each concern, the practical alternatives were:

| Concern | Chosen | Rejected alternative | Why the alternative was rejected |
|---------|--------|----------------------|----------------------------------|
| Publishing | Native CI + Pages deploy | Manual upload / deploy from a laptop | Non-reproducible, undocumented, bottlenecked on one person |
| Quality | Strict build + linter in CI | Rely on manual review / spot checks | Misses broken links and markup errors that fail silently |
| Change control | Protected branch + required checks | Trust direct pushes to default branch | Lets untested changes reach production; no audit trail |
| Entry point | Landing page + README | Default file listing | Fails to communicate purpose; high visitor bounce |
| Sharing | OG/social metadata | No preview metadata | Shared links look untrustworthy and get fewer clicks |
| Environment | Committed dev container | "Read the setup docs" | Setup drift and slow, error-prone onboarding |
| Work queue | Seeded, labeled issues | Empty tracker / private task list | No on-ramp for contributors; opaque priorities |

A "do nothing / decide later" option was also considered and rejected: deferring these decisions
simply pushes the same recurring cost onto every future contributor and every future repository.

## Consequences

### Positive

- Publishing is automatic, reproducible, and auditable.
- The default branch is continuously shippable; defects are caught early and cheaply.
- Onboarding is fast and consistent across local, cloud, and CI environments.
- The project is discoverable, shareable, and welcoming to newcomers.
- Contribution is self-service, with clear conventions modeled by real examples.

### Negative / costs

- A modest one-time setup cost per repository (workflows, protection rules, landing page, dev
  container, seed issues). This is bounded and front-loaded; it can be templated to near zero.
- Required checks add a short wait before merges. This is intentional and proportional to the
  protection gained.
- Artifacts (workflows, dev container, metadata) must be maintained as tooling evolves.

### Neutral

- These practices are deliberately generator- and language-agnostic. Adopting them does not lock
  a project into any particular framework beyond hosting on GitHub Pages.

## Compliance and adoption

A new GitHub Pages repository is considered compliant with this ADR when it has: (1) an automated
deploy workflow, (2) build + lint checks on pull requests, (3) branch protection requiring those
checks, (4) a landing page and a descriptive README, (5) social/OG metadata, (6) a committed dev
container, and (7) a seeded issue backlog. Teams should template these so compliance is the
default rather than an afterthought.

## References

- Architecture Decision Records — Michael Nygard's original description of the format.
- GitHub Pages, GitHub Actions, branch protection/rulesets, Codespaces/dev containers, and the
  Open Graph protocol (see each product's official documentation for current configuration
  details).
