---
name: docs-new-page
description: Creates a new documentation page from the matching template in `templates/`. Use when the user asks to create, write, draft, or start a new documentation page or file.
user-invocable: true
---

Draft a new page by following these steps:

1. Check whether the user has provided source material for the page's content. If material is missing, ask for it in a single prompt before continuing:
    * Links, such as Jira tickets or Confluence pages
    * Pasted content, such as specs, notes, a Slack thread, a transcript, a draft, a README, code or config snippets, or screenshots
    * An existing page to use as a model

    If the user provides a link, read it only if you have a tool that can access it. If you can't access it, say so and ask the user to paste the content.
2. Explore `content/en/docs/` and decide where the page belongs (if it isn't clear, ask the user to confirm). Read the section's `_index.md` and nearby pages to match their conventions.
3. Search `content/en/docs/` for the page's main terms. Ignore the versioned folders for older Mendix versions (`refguide10`, `howto9`, and so on) unless the user says the page is for an older version. If a page already covers the entire topic, tell the user and ask whether to update that page instead. If a page covers part of it, link to that page instead of repeating the covered content, and ask the user whether the missing content belongs on the existing page or on the new one. Note any pages that need a link to the new page, and tell the user at the end.
4. Read the appropriate template from `templates/`.
5. Create the new file based on the template. File names must be simple, lowercase, and hyphen-separated.
6. Clean up the template:
    * In the front matter, uncomment and complete `url` and `description`. Delete any unused commented fields.
    * Replace or remove every `{…}` placeholder and instruction comment.
    * Delete optional sections that don't apply.
7. Complete the introduction and the remaining sections. Content varies by content type.
8. Verify that any linked pages exist in the repo, using each target page's `url` front matter field. Link to the related pages found in step 3.
9. Run the `docs-copyedit` and `docs-alt-text` skills on the new page.

Don't add product claims, technical behavior, or release facts that the user didn't provide. If more information is needed, ask the user to provide it.
