# Commands I practiced

```bash
# Initialize a new repository
git init

# Stage my files
git add index.html .gitignore COMMANDS.md

# Commit them with a clear message
git commit -m "Add L1 project page, gitignore, and command log"

# Create and switch to a feature branch
git switch -c add-subtitle

# ...made a small change, committed it, switched back and merged...
git switch main
git merge add-subtitle

# Connect to GitHub and push
git remote add origin https://github.com/my-username/l1-project.git
git branch -M main
git push -u origin main
```
