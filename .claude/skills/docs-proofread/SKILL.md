---
name: docs-proofread
description: Checks a single documentation page and fixes spelling, grammar, punctuation, basic Markdown formatting, and required front matter fields. Makes minimal corrections without rewording or restructuring. Use when the user asks to proofread, check for spelling and grammar errors, or fix typos.
user-invocable: true
disable-model-invocation: false
---

> **Skill progression:** This is the lightest touch. If style guide and clarity fixes are needed, suggest that the user run `/docs-copyedit`.

Do NOT rewrite, rephrase, or improve clarity. Proofread only:

* **Spelling**: Fix typos and misspellings
* **Grammar**: Fix grammatical errors (subject-verb agreement, tense consistency, etc.)
* **Basic formatting checks**:
  * Ensure required front matter fields are present (title, url, description)
  * Fix broken Markdown syntax
  * Fix any capitalization and terminology inconsistencies

Do NOT:
* Rewrite sentences for clarity or conciseness
* Shorten or improve descriptions
* Change passive voice to active voice
* Simplify complex sentences
* Reorganize content
* Remove Markdown comments

Priority order for determining scope:
1. If the user has selected text in a file (check for `ide_selection` tags), only proofread the selected text in that file. Don't proofread the entire document.
2. If there's one open file (check for `ide_opened_file` tags) and no selection, work on the entire file.
3. If there are multiple open files, list them and ask which to process.
4. If no files are open, ask for a file path.

**After completing edits**:
* Report what was changed in a concise summary.
* Under the heading "Flagged for your review", list anything you did not change but that needs the writer's attention, with a one-line reason for each. This includes unclear typos, text in code formatting, and linter warnings that don't apply.
* If there are style or clarity issues, end the summary with: "I found style or clarity issues that proofreading doesn't cover. Consider running `/docs-copyedit` to address them."
