# Mendix Documentation Repository

<!-- markdownlint-disable-file -->

**Your role**: Edit and review Markdown documentation files under `content/en/docs/` following the style guidance and project-specific conventions below.

## Instruction Precedence

When instructions conflict, follow this order of precedence:

1. The user's current request.
2. Task-specific skills in `.claude/skills/*/SKILL.md` when explicitly referenced or invoked.
3. This file (`CLAUDE.md`).
4. Mendix Style Guide files in `content/en/docs/community-tools/contribute-to-mendix-docs/style-guide/` for detailed grammar, terminology, and formatting rules.
5. Existing conventions in nearby pages within the same folder.
6. Microsoft Writing Style Guide.

### Critical Constraints

* Edit existing files in place using the Edit tool. Do not create new files unless explicitly requested.
* Preserve meaning and intent. Make the smallest set of edits that fully resolves the request.
* Never add product claims, technical behavior, ticket numbers, or release facts unless explicitly requested and sourced from provided content.

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

* **Index files (`_index.md`)** define landing pages or categories. They often use `cascade` to pass metadata to children and may set `type`, `layout`, `no_list`, `description_list`, etc.
* Other `.md` files represent individual articles, how‑tos, reference topics, release notes, etc. File names must be simple, lowercase, and hyphen‑separated.

Before creating a new file, use Glob to explore the directory structure and understand where the topic belongs.

## Style Standards

* **Guiding manual** – Mendix-specific style guides (see subsection below) extend and customize the Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/). Consult the Mendix style guides first for grammar, inclusive language, terminology, and formatting rules; use MSG as fallback for topics not covered by Mendix guides.
* **Tone** – Clear, concise, active voice; use imperative mood for procedures; second person (you/your) when addressing readers. Keep a conversational, straightforward tone. Present tense. Use American English and write for a global audience. Prefer short, everyday words; avoid or explain jargon. Keep it simple—short sentences and fragments are easier to scan and read, and prune excess words. Avoid marketing language.
* **Person** – Avoid first-person plural (we, us, our, let's) in all documentation except release notes.
* **Terminology** – Capitalize product names (Mendix Portal, Studio Pro, Team Server); use "microflow", "nanoflow", etc. consistently. Never use e.g. or i.e.
* **Text formatting** – Reserve bold for UI labels, button names, menu items, or other interface text, or for introductions in list items. Don't use italics except to refer to titles and sections. Use wording or alert shortcodes for emphasis; don't use text formatting for emphasis. Use code font only to wrap literal code, filenames, paths, or command-line input. Use `<kbd>` for keyboard shortcuts.
* **Headings** – H1 is generated from the front‑matter title. Subsequent headings increment by one level at a time. Don't use bold or italics as a replacement for headings. Use title case. Never start headings with numerals.
* **Lists and tables** – Bullet lists use asterisks; ordered lists use numbers followed by a period. If there are more than three data points per item, use a table instead. Use the same syntax and structure for all list items in a given list. Use complete sentences to introduce lists and tables, not partial sentences completed with the list items.
* **Indentation** – Four spaces for sub-lists and nested content. Alerts in lists are an exception:  don't indent alert lines but do omit preceding blank line.
* **Links** – Link using the target page's `url` front matter field, not its file system path (e.g., `/deployment/` from front matter, not `content/en/docs/deployment/_index.md`). Use descriptive link text such as the page title, not "click here". To link to a heading, add an anchor ID (`{#anchor-id}`) next to the heading and use that ID in the URL (for example, `[Prerequisites](/deployment/mendix-cloud/#prerequisites)` to link to a heading in another page or `[Prerequisites](#prerequisites)` to link to a heading in the same page).
* **Images** – Always include `alt` text (or `alt=""` if decorative). Use W3C guidelines. Reference images with the `figure` shortcode.
* **Code** – Use fenced code blocks with language specifier. Do not modify text that appears in code formatting (inline backticks or code blocks), even to fix apparent inconsistencies or apply naming conventions. 

### Mendix-Specific Style Guides

For detailed guidance beyond the basics above, consult these Mendix style guide files in `content/en/docs/community-tools/contribute-to-mendix-docs/style-guide/`:

* **`grammar-formatting.md`** – Grammar and formatting rules including acronyms, active/passive voice, alerts, bold/italics, capitalization, contractions, dashes, dates, emphasis, headings, lists, numbers, person, verb tense, keyboard shortcuts, URL handling, and cross-reference conventions. This is the most detailed style reference.
* **`terminology.md`** – General terminology guidance for common terms, with capitalization and hyphenation rules.
* **`product-naming-guide.md`** – Reference for Mendix product names and other Mendix terms.

When encountering style questions not covered in this file, read the relevant style guide file above before falling back to the Microsoft Writing Style Guide.

Project‑specific preferences are also documented in the templates; consult them for tricky formatting cases.

## URL Resolution and Modification

To resolve a documentation URL (for example, `/community-tools/contribute-to-mendix-docs/`) to its source Markdown file, run `bash .claude/scripts/resolve-doc-url.sh "/url/path/"` instead of spawning an agent.

When modifying URLs or anchor IDs, search for the old value across all documentation files and update every reference in the same change to prevent broken links.

## Technical Implementation Details

### Front Matter

All Markdown files begin with YAML metadata.

* `title` – Human‑readable page title. (Required)
* `url` – Page URL. Start and end with `/`, use only lowercase letters, numbers, and hyphens. Doesn't need to match the file path. Must be unique. (Required)
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

* `alert` – Callouts of `color` (required) `info` or `warning`.
  ```md
  {{% alert color="warning" %}}
  This action cannot be undone.
  {{% /alert %}}
  ```

* `icon` – Inline SVG icons stored in `static/mx-icons` (`name` required, optional `color`) for use in UI descriptions.

  ```md
  Click **Delete** ({{< icon name="trash-can" >}}).
  ```

Less common shortcodes (`button`, `youtube`, `vidyard`, `swaggerui`, `snippet`, `tabpane`, `tab`, `todo`) are documented in `community-tools/contribute-to-mendix-docs/markdown-shortcodes.md`. Read it before using or editing one.

## Editorial Workflow

1. **Locate and read** - Find the target page and its section `_index.md`. Run independent lookups in parallel.
2. **Check front matter** - Confirm the required fields (`title`, `url`, `description`) are present and follow the Front Matter rules above.
3. **Proofread and edit** - Apply style, clarity, terminology, accessibility (alt text, `figure` shortcode), and structure fixes. Keep the meaning unless the user asks otherwise. Stop and ask before any change listed under "Ask for confirmation".
4. **Verify links** - Link by page `url`, not file path, and confirm each target exists. If you changed or removed a `url` or anchor ID, search all docs for the old value and update every reference.

## Content Creation Workflow

If asked to create new content:

1. Read the appropriate template from `templates/`: `how-to-template.md`, `reference-template.md`, `marketplace-component-page-template.md`, or `release-notes-template.md`.
2. Use Write tool to create the new file based on the template.
3. Remove comment lines (`#`) from the template.
4. Follow the editorial workflow above.

For all pages, required sections are front matter and the introduction; other sections vary by content type.

## Safety Rules

Non-negotiable safety and AWS rules are in `.claude/rules/security.md` and `.claude/rules/aws.md`, which load automatically. Follow them.

## Claude Code Settings Management

For personal configuration changes (AWS_PROFILE, etc.), always suggest `.claude/settings.local.json` instead of modifying `.claude/settings.json`. The local file is gitignored and overrides shared settings.