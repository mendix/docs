---
name: proofread
description: Checks and fixes spelling, grammar, punctuation, basic Markdown formatting, alt text, and required front matter fields. Makes minimal technical corrections without rewording or restructuring. Use when the user asks to proofread, check for errors, fix typos, or perform a light technical review of documentation.
user-invocable: true
disable-model-invocation: false
---

> **Skill progression:** This is the lightest touch. If more clarity work is needed, suggest `/polish`. For deeper restructuring, suggest `/enhance`.

Proofread the document for technical correctness only. Do NOT rewrite, rephrase, or improve clarity:

* **Spelling**: Fix typos and misspellings
* **Grammar**: Fix grammatical errors (subject-verb agreement, tense consistency, etc.)
* **Basic formatting checks**:
  * Add missing alt text to images (use simple, factual descriptions)
  * Ensure required front matter fields are present (title, url, description)
  * Fix broken Markdown syntax
  * Fix any capitalization and terminology inconsistencies

Do NOT:
* Rewrite sentences for clarity or conciseness
* Shorten or improve descriptions
* Change passive voice to active voice
* Simplify complex sentences
* Reorganize content

If you notice style or clarity issues that need improvement, finish proofreading first, then suggest the user run `/polish` for those improvements.
