---
name: docs-pr-review
description: Analyzes all changes in a pull request and generates suggestions for improvements, clarifications, inconsistencies, and structural changes without making any edits. Use when the user asks to review, analyze, audit, or provide feedback on a pull request, or when they want suggestions before making changes.
user-invocable: true
disable-model-invocation: false
---

Compare changes between the current branch and the base branch (typically `development`). Read the complete final state of each modified file, not just the diff, to ensure changes don't introduce inconsistencies with unchanged content.

Analyze all the changes in the current pull request or branch and return a list of suggestions or questions about any points to clarify, potential inconsistencies, and sections to restructure, add, or remove. Read the whole of each document modified in the pull request to ensure the changes do not make inconsistencies.

Follow links to other documents in the repo to check for inconsistencies if they seem to provide important related information.

Do not worry about possible invalid internal links to anchors in the repo as these will be picked up by a separate testing tool after the site has been built.

Make no edits.
