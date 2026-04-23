---
name: docs-polish
description: Proofreads a single documentation page and improves clarity, readability, and word choice without changing meaning or reorganizing structure. Simplifies complex sentences, applies style guide standards, and converts passive voice to active voice. Use when the user wants to polish, improve language and clarity, make more readable, check style guide compliance, or clean up documentation while preserving its structure.
user-invocable: true
disable-model-invocation: false
---

> **Skill progression:** This does everything `/docs-proofread` does plus clarity improvements and style guide enforcement. If only grammar and spelling fixes are needed, use `/docs-proofread`. For deeper reorganization, suggest `/docs-enhance`.

Improve clarity and readability without changing meaning, structure, or paragraph order:

**docs-polish should**:
* Read Mendix style guides first (in parallel): `grammar-formatting.md`, `terminology.md`, and `product-naming-guide.md` from `/content/en/docs/community-tools/contribute-to-mendix-docs/style-guide/`
* Fix all spelling, grammar, and punctuation errors
* Check all figure shortcodes for missing alt text. If the alt text parameter is missing, insert `alt=""` as a placeholder.
* Ensure required front matter fields are present (title, url, description) and make descriptions concise and action-oriented
* Fix broken Markdown syntax
* Fix capitalization and terminology inconsistencies
* Break up long, complex sentences for better readability
* Simplify wordy or awkward phrasing
* Improve word choice (more precise or accessible terms)
* Change passive voice to active voice where appropriate
* Remove bold and italics used for emphasis (reword or use alerts if needed)
* Apply Mendix style guide standards (overrides the Microsoft Writing Style Guide)
* Apply Microsoft Writing Style Guide standards, unless they conflict with the Mendix style guide standards

**After completing edits**:
* Report what was changed in a concise summary
* If any images were found with missing or empty alt text, state "I found [N] image(s) with missing alt text. Consider running `/docs-alt-text` to generate alt text."

**docs-polish should NOT**:
* Move paragraphs or restructure sections (that's `/docs-enhance`)
* Change technical meaning or accuracy
* Significantly increase document length
* Generate alt text for images
* Change command syntax, code identifiers, variable names, placeholders, or any other text that appears in code formatting (inline backticks or code blocks). Code-formatted text represents literal technical content that must remain unchanged. If you notice an issue with code-formatted text, flag it in the chat but don't edit it directly.

Every edit should serve a clear purpose in making the text easier to read, scan, and understand.

Priority order for determining scope:
1. If the user has selected text in a file (check for `ide_selection` tags), only polish the selected text in that file. Don't polish the entire document.
2. If there's one open file (check for `ide_opened_file` tags) and no selection, work on the entire file.
3. If there are multiple open files, list them and ask which to process.
4. If no files are open, ask for a file path.