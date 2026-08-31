# Lab L5 — Author a Steering File

Create a Kiro steering file that captures a rule for your project.

## 🎯 The task

Work inside a copy of `starter/`. Create a steering file at
**`.kiro/steering/conventions.md`** (so the path is `starter/.kiro/steering/conventions.md`)
that:

1. Has YAML front matter with an `inclusion:` field (`always`, `fileMatch`, or `manual`).
2. Has a top-level heading (`#`).
3. Contains at least one rule as a bullet point (a line starting with `-`).
4. Mentions the project is a **static site** (the key convention).

Also try the provided hook: copy `examples/check-project-on-save.hook.json` into your workspace's
`.kiro/hooks/` and save a file in `project/` to see it run.

## ✅ Checkpoint

- [ ] `.kiro/steering/conventions.md` exists with `inclusion:` front matter.
- [ ] It has a heading and at least one bullet rule.
- [ ] It mentions "static site".
- [ ] (Optional) I tried the example hook in my own workspace.

## 🧪 How it's graded

```bash
node labs/_grader/grade.js l5 labs/l5/starter    # fails until you finish
node labs/_grader/grade.js l5 labs/l5/solution    # the reference passes
```

CI runs this grader on any pull request that touches `labs/**`.
