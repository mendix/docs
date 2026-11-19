---
name: docs-new-page
description: Drafts new documentation content, as one or more new pages from the matching templates in `templates/`, as additions to existing pages, or both. Use when the user asks to create, write, draft, add to, or start new documentation pages, files, or content.
user-invocable: true
---

Draft new content by following these steps:

1. Check whether the user has provided source material for the content. If material is missing, ask for it in a single prompt before continuing:
    * Links, such as Jira tickets, Confluence pages or Figma
    * Pasted content, such as specs, notes, a Slack thread, a transcript, a draft, a README, code or config snippets, or screenshots

    If the user provides a link, read it only if you have a tool that can access it. If you can't access it, say so and ask the user to paste the content.
2. Correlate the sources. When they conflict, don't treat any one as definitive. Add the conflict to the open questions. A merged pull request isn't proof that a change shipped. Confirm the change is in the specified release version. Exclude internal-only changes for release notes, except where they have customer value.
3. Explore `content/en/docs/` and decide whether the content needs new pages, additions to existing pages, or both, and where each belongs (if it isn't clear, add it to the plan as an open question). Read the section's `_index.md` and nearby pages to match their conventions.
4. Search `content/en/docs/` for the content's main terms. Ignore the versioned folders for older Mendix versions (`refguide10`, `howto9`, and so on) unless the user says the page is for an older version. If a page already covers the entire topic, add to the plan the question of whether to update that page instead. If a page covers part of it, link to that page instead of repeating the covered content, and add to the plan the question of whether the missing content belongs on that page or on a new one.
5. For each new page, read `templates/README.md` to choose the appropriate template, then read that template from `templates/`. If only `general-page-template.md` fits a page, say so in the plan and ask whether to base its structure on sibling pages. For additions to an existing page, follow that page's structure.
6. Present a plan to the user for confirmation or adjustments. List each new page with its template, location, file name, and sections. List each existing page you will change with what you will add and where. Include the source material you will use. Put the open questions from steps 3 to 5 in the plan, and ask them together in one prompt. If the user hasn't said, also ask whether a release note is needed. Don't fill in missing or ambiguous information. Ask for it.
7. Create each new file based on its template. Add the planned content to existing pages in place.
8. Clean up each new page's template as described in the Content Creation Workflow in CLAUDE.md, and uncomment any optional front matter fields the page needs. Compare the optional sections with the nearby pages from step 2, and delete the ones that most of those pages don't have. If nearby pages have a section that the source material doesn't cover, don't fill it in. Ask the user for the information in a single question, and delete the section if they have none.
9. Complete the introduction and the remaining sections of each new page. Add images only if the user provides them. Where an image is needed and none is available, leave out the `figure` shortcode and list the location in your final summary.
10. Compare the files you created or changed with the input the user provided, and give the user a summary of what you did. Flag any input you left out and why. Search sibling pages and flag anything in other files that the new pages make outdated (such as labels or dates) and any conflicts with the new pages. Note any pages that need a link to the new pages. Prioritize technical accuracy. If it isn't clear which source to trust, ask the user. For release notes, flag changes whose release inclusion couldn't be verified, missing customer impact or compatibility information.
11. Verify that any linked pages exist in the repo. Link to the related pages found in step 3, and link the new pages to each other where relevant.
12. Run the `docs-copyedit` and `docs-alt-text` skills on each new page and on the content you added to existing pages.
13. Run the `docs-pr-review` skill.
