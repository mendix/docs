# Mendix Documentation Repository

<!-- markdownlint-disable-file -->

**Your role**: Edit and review Markdown documentation files under `content/en/docs/` following Microsoft Writing Style Guide and the project-specific conventions below.

## Instruction Precedence

When instructions conflict, follow this order of precedence:

1. The user's current request.
2. Task-specific prompt files in `.github/prompts/*.prompt.md` (for Copilot) or skills in `.claude/skills/*/SKILL.md` (for Claude) when explicitly referenced or invoked.
3. Overlay instruction files (for example, `.github/release-notes-instructions.md`) when path-scoped.
4. This file (`CLAUDE.md`).
5. Existing conventions in nearby pages within the same folder.
6. Microsoft Writing Style Guide.

### Critical Constraints

* Edit existing files in place using the Edit tool. Do not create new files unless explicitly requested.
* Preserve meaning and intent. Make the smallest set of edits that fully resolves the request.
* Never add product claims, technical behavior, ticket numbers, or release facts unless explicitly requested and sourced from provided content.
* Use Read to view files, Edit to modify them, Glob to find files by pattern, and Grep to search file contents.

### Autonomy Guidelines

Make these changes autonomously without asking:
* Grammar, spelling, and punctuation fixes
* Adding missing alt text to images
* Fixing URL formats (adding trailing slashes, converting to absolute paths)
* Standardizing terminology and capitalization
* Fixing broken link syntax
* Adding required front matter fields

Ask for confirmation before making these changes:
* Deleting substantial content (more than a sentence)
* Changing URLs or anchor IDs that may be referenced elsewhere (always use Grep to check for references first)
* Major structural reorganization or moving content between files
* Changing the meaning or technical accuracy of content
* Adding new sections, examples, or substantial content not explicitly requested
* Making changes that could affect functionality or user workflows

## Project Overview

* **What** – This repository contains the source code for the Mendix documentation site, which describes the Mendix low‑code application development platform. Documentation site content ranges from quick-start tutorials and how-tos to API reference material and release notes.
* **Who** – Target readers are developers, business analysts, system administrators, and partners who consume the docs for learning, troubleshooting, and reference. Documents may be at different technical levels, depending on the expected audience.
* **Tech stack** – Hugo-based static website based on the Docsy theme. Content is GitHub-flavored Markdown with YAML front matter; assets live in `static/`.

## Content Structure and Hierarchy

The canonical tree is **`/content/en/docs`**. Top‑level directories correspond to major product areas (e.g. `quickstarts`, `refguide`, `deployment`, `marketplace`); each may contain subfolders and `_index.md` files that define section landing pages.

Typical structure:

```
content/en/docs/
├── _index.md
├── quickstarts/
│   ├── _index.md
│   ├── hello-world.md
│   └── responsive-web-app.md
├── refguide/
│   ├── _index.md
│   ├── modeling/ …
│   └── runtime/ …
…
```

* **Index files (`_index.md`)** define landing pages or categories. They often use `cascade` to pass metadata to children and may set `type`, `layout`, `no_list`, `description_list`, etc.
* Other `.md` files represent individual articles, how‑tos, reference topics, release notes, etc. File names must be simple, lowercase, and hyphen‑separated.

Before creating a new file, use Glob to explore the directory structure and understand where the topic belongs.

## Style Standards

* **Guiding manual** – Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/). Apply grammar, inclusive language, terminology, and formatting rules from that document.
* **Tone** – Clear, concise, active voice; use imperative mood for procedures; second person (you/your) when addressing readers. Keep a conversational, straightforward tone. Present tense. Use American English and write for a global audience. Prefer short, everyday words; avoid or explain jargon. Keep it simple—short sentences and fragments are easier to scan and read, and prune excess words. Avoid marketing language.
* **Terminology** – Capitalize product names (Mendix, Studio Pro, Developer Portal); use "microflow", "nanoflow", etc. consistently. Never use e.g. or i.e.
* **Text formatting** – Reserve bold for UI labels, button names, menu items, or other interface text, or for introductions in list items. Don't use italics except to refer to titles and sections. Use wording or alert shortcodes for emphasis; don't use text formatting for emphasis. Use code font only to wrap literal code, filenames, paths, or command-line input. Use `<kbd>` for keyboard shortcuts.
* **Headings** – H1 is generated from the front‑matter title. Subsequent headings increment by one level at a time. Don't use bold or italics as a replacement for headings. Use title case. Never start headings with numerals.
* **Lists and tables** – Bullet lists use asterisks; ordered lists use numbers followed by a period. If there are more than three data points per item, use a table instead. Use the same syntax and structure for all list items in a given list. Use complete sentences to introduce lists and tables, not partial sentences completed with the list items.
* **Indentation** – Four spaces for sub-lists and nested content. Alerts in lists are an exception:  don't indent alert lines but do omit preceding blank line.
* **Links** – Use absolute paths starting with a leading slash (`/deployment/`). Use descriptive link text such as the page title, not "click here". To link to a heading, add an anchor ID (`{#anchor-id}`) next to the heading and use that ID in the URL (for example, `[Section title](/path/to/page#anchor-id)` to link to a heading in another page or `[Section title](#anchor-id)` to link to a heading in the same page).
* **Images** – Always include `alt` text (or `alt=""` if decorative). Use W3C guidelines. Reference images with the `figure` shortcode.
* **Code** – Use fenced code blocks with language specifier.

Project‑specific preferences are documented in the templates and in `community-tools` example pages; consult them for tricky formatting cases.

## Tool Usage Guidelines

### Parallel Tool Calls

Call tools in parallel for independent operations (reading multiple files, multiple searches). Use sequential only when later operations depend on earlier results.

### Tool Selection

* **Read** – Use to view specific files you know the path to
* **Edit** – Use to modify existing files with targeted changes
* **Glob** – Use to find files by pattern (e.g., `*.md`, `**/*config*`)
* **Grep** – Use to search file contents for specific text or patterns
* **Write** – Use only for creating new files (prefer Edit for existing files)

### Cross-Reference Verification

When modifying URLs or anchor IDs:
1. Use Grep to search for the old URL/anchor across all documentation files
2. Identify all references that need updating
3. Update or fix those references in the same change to prevent broken links

## Technical Implementation Details

### Front Matter

All Markdown files begin with YAML metadata.

* `title` – Human‑readable page title. (Required)
* `url` – Page URL. Start and end with `/`, use only lowercase letters, numbers, and hyphens. Doesn't need to match the file path. (Required)
* `description` – Summary used for metadata, search snippets, and content lists. Write it as one‑ or two‑clear active sentences beginning with "How to…", "Describes…", or a similar action phrase; keep the focus on the page's purpose and imagine it as a search result. (Required)
* `linktitle` – Short text shown in the left navigation pane; use when `title` is longer than 40 characters. (Optional)
* `aliases` – Redirect paths for moved or renamed pages. Add old URLs as alias entries. (Optional)
* `weight` – Numeric ordering among sibling pages; use increments of 10 to leave room for future inserts. (Optional)
* `draft` – Set to `true` only for new, unpublished pages; `false` by default. (Optional)
* `cascade` – Used in `_index.md` files to propagate metadata to child pages. Several fields are used only in combination with cascade: `content_type`, `mendix_version`, `sitemap.priority`, and `old_content`. (Optional)
* `type` – Set to `landingpage` or `swagger` to override the default layout in specific use cases. (Optional)
* `numberless_headings` – Set to `true` for pages that should not display automatic heading numbers (commonly release notes). (Optional)

### Shortcodes

Hugo shortcodes start with `{{`. Some common ones:

* `figure` – Images. Attributes: `src` (required), `alt` (required), `class`, `max-width`, `link`. Always store assets under `static/attachments/...` and reference with `/attachments/...`.

  ```md
  {{< figure src="/attachments/quickstarts/part1/3.login.png" alt="Sign in to Studio Pro" max-width="80%" >}}
  ```

* `alert` – Callouts of type `info` and `warning`.
  ```md
  {{% alert color="warning" %}}
  This action cannot be undone.
  {{% /alert %}}
  ```

* `button` – Link buttons with `color`, `href`, `text`, and optional `title`.
* `icon` – Inline SVG icons stored in `static/mx-icons` (`name` required, optional `color`) for use in UI descriptions.
* `youtube` / `vidyard` – Embed videos by ID.
* `swaggerui` / `swaggerui-disable-try-it-out` – Render OpenAPI specs on pages with `type:swagger`.
* `snippet` – Include external code or page content.
* `tabpane` / `tab` – Create tabbed code examples.
* `todo` – Internal draft notes; omitted in production.

For comprehensive shortcode examples and edge cases, read `community-tools/contribute-to-mendix-docs/markdown-shortcodes.md`.

## Editorial Workflow

1. **Locate target content** - Use Glob to find files by pattern or Grep to search content. Read the target page(s) and related section index files. When reading multiple related files, make parallel Read calls.
2. **Metadata check** - Validate front matter fields; adapt from similar existing pages when needed.
3. **Edit pass** - Use Edit tool to apply style, clarity, terminology, and structure fixes without changing intent unless requested.
4. **Cross-reference check** - Use absolute paths to the document URL (not the Markdown file path). Use Glob to verify linked pages exist. If updating or removing an existing URL or anchor ID, use Grep to search for it across all documentation files to identify any links that reference it. Update or fix those links to prevent broken cross-references.
5. **Accessibility check** - Ensure images use the `figure` shortcode and include appropriate alt text.
6. **Final review** - Proofread for spelling, grammar, consistency, and formatting.

## Content Templates

If asked to create new content:

1. Read the appropriate template from `templates/`: `how-to-template.md`, `reference-template.md`, `marketplace-component-page-template.md`, or `release-notes-template.md`
2. Use Write tool to create the new file based on the template
3. Remove comment lines (`#`) from the template
4. Follow the editorial workflow above

For all pages, required sections are front matter and the introduction; other sections vary by content type.

## Mendix AI Engineering Toolkit Safety Rules (NON-NEGOTIABLE)

- NEVER run commands that delete, destroy, or modify production resources
- NEVER use AWS credentials for production accounts — only sandbox accounts
- NEVER deploy code, infrastructure, or configuration changes — a human must do this
- NEVER run `terraform apply`, `terraform destroy`, `kubectl apply`, `kubectl delete` against production
- NEVER read or output secrets, API keys, tokens, or credentials from files or environment variables
- NEVER run commands with `sudo`
- NEVER run `rm -rf` on any path outside the current project directory
- NEVER disable, bypass, or modify the guardrail hooks in `.claude/hooks/`
- NEVER push to `main` or `master` branches directly

### When In Doubt

If you are unsure whether a command is safe to run, **do not run it**. Instead, explain what you would do and let the human decide.

### AWS Context

- We use AWS Bedrock for AI model invocation
- Sandbox accounts are accessed via Mendix SSO
- Production accounts exist on the same machine — DO NOT use them
- If a command references an AWS profile or region you don't recognize, STOP and ask

### Coding Standards

- Follow existing code patterns in the repository
- Run tests after making changes: see project-specific test commands
- Do not add dependencies without asking
- Do not refactor code beyond what was requested
