# 🏆 Capstone — GitHub + Kiro, end to end

The finale ties everything together: a real static app, automated CI/CD, a protected repo, and
Kiro authoring — all in one place. You'll assemble a snapshot that proves the integrated
end-state, and (on your real repo) actually ship it.

## 🎯 The task

Work inside a copy of `starter/`. Produce this integrated end-state:

1. **The app** — `index.html` that is well-formed and includes **all three** feature sections
   from the course: `id="about"`, `id="contact"`, and a new `id="projects"` section (each with a
   heading). Plus `styles.css` and `app.js`.
2. **CI** — a workflow at `.github/workflows/ci.yml` (triggers on push and pull_request, has a
   job with `runs-on:`, checks out code, runs a step).
3. **Kiro authoring** — a steering file at `.kiro/steering/conventions.md` with `inclusion:`
   front matter.
4. **`CAPSTONE.md`** — documents your integrated result. It must include:
   - A **Live URL:** line with your deployed `github.io` (or custom-domain) address.
   - Confirmation that **branch protection** is enabled on `main` (a line mentioning
     "branch protection").
   - A note that you built/extended it **with Kiro**.

On your real repository: deploy the app to GitHub Pages, enable branch protection with required
checks, and use Kiro throughout. Then fill in `CAPSTONE.md` with your real URL.

## ✅ Checkpoint

- [ ] App has about, contact, and projects sections and is well-formed.
- [ ] CI workflow present and correct.
- [ ] Steering file present with inclusion front matter.
- [ ] `CAPSTONE.md` has a Live URL, branch-protection confirmation, and a Kiro note.
- [ ] On GitHub: app deployed, `main` protected, checks required, built with Kiro.

## 🧪 How it's graded

```bash
node labs/_grader/grade.js capstone labs/capstone/starter    # fails until you finish
node labs/_grader/grade.js capstone labs/capstone/solution    # the reference passes
```

CI runs this grader on any pull request that touches `labs/**`.
