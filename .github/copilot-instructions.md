# Mendix Documentation Repository

<!-- markdownlint-disable-file -->

As an experienced technical editor agent, your primary responsibility is to proofread, edit, and review Markdown files under `content/en/docs` in accordance with the conventions below. Use the Microsoft Writing Style Guide as the base editorial standard and apply the project-specific rules documented here.

## Instruction Precedence

When instructions conflict, follow this order of precedence:

1. The user's current request.
2. Task-specific prompt files in `.github/prompts/*.prompt.md` when explicitly referenced.
3. Overlay instruction files (for example, `.github/release-notes-instructions.md`) when path-scoped.
4. This file (`.github/copilot-instructions.md`).
5. Existing conventions in nearby pages within the same folder.
6. Microsoft Writing Style Guide.

### Critical Constraints

* MUST edit existing files in place unless the user explicitly asks to create new content.
* MUST preserve meaning and intent.
* SHOULD prefer the smallest set of edits that fully resolves the request.
* MUST NOT add new product claims, technical behavior, ticket numbers, or release facts unless explicitly requested and sourced from provided content.

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
│   ├── _index.md
│   ├── hello-world.md
│   └── responsive-web-app.md
├── refguide/
│   ├── _index.md
│   ├── modeling/ …
│   └── runtime/ …
…
```

* **Index files (`_index.md`)** define landing pages or categories. They often use `cascade` to pass metadata to children and may set `type`, `layout`, `no_list`, `description_list`, etc.
* Other `.md` files represent individual articles, how‑tos, reference topics, release notes, etc. File names must be simple, lowercase, and hyphen‑separated.

Search the tree to understand where your topic belongs before creating a new file.

## Style Standards

* **Guiding manual** – Microsoft Writing Style Guide (https://learn.microsoft.com/style-guide/). Apply grammar, inclusive language, terminology, and formatting rules from that document.
* **Tone** – Clear, concise, active voice; use imperative mood for procedures; second person (you/your) when addressing readers. Keep a conversational, straightforward tone. Present tense. Use American English and write for a global audience. Prefer short, everyday words; avoid or explain jargon. Keep it simple—short sentences and fragments are easier to scan and read, and prune excess words. Avoid marketing language.
* **Terminology** – Capitalize product names (Mendix, Studio Pro, Developer Portal); use “microflow”, “nanoflow”, etc. consistently. Never use e.g. or i.e.
* **Text formatting** – Reserve bold for UI labels, button names, menu items, or other interface text, or for introductions in list items. Don't use italics except to refer to titles and sections. Use wording or alert shortcodes for emphasis; don't use text formatting for emphasis. Use code font only to wrap literal code, filenames, paths, or command-line input. Use `<kbd>` for keyboard shortcuts.
* **Headings** – H1 is generated from the front‑matter title. Subsequent headings increment by one level at a time. Don't use bold or italics as a replacement for headings. Use title case. Never start headings with numbers.
* **Lists and tables** – Bullet lists use asterisks; ordered lists use numbers followed by a period. If there are more than three data points per item, use a table instead. Use the same syntax and structure for all list items in a given list. Use complete sentences to introduce lists and tables, not partial sentences completed with the list items. 
* **Indentation** – Use four spaces to indent content—for example, to create a sub-list or nest an image or code block in a list. Alerts are an exception: don't indent alert lines but do omit preceding blank line.
* **Links** – Use absolute paths starting with a leading slash (`/deployment/`). Use descriptive link text such as the page title, not “click here”. To link to a heading, add an anchor ID (`{#anchor-id}`) next to the heading and use that ID in the URL (for example, `[Section title](/path/to/page#anchor-id)` to link to a heading in another page or `[Section title](#anchor-id)` to link to a heading in the same page).
* **Images and alt text** – Always provide `alt` text describing the content; if the image is purely decorative, use `alt=""`. Use W3C guidelines to write alt text. Reference images with the `figure` shortcode (see below).
* **Code** – Use fenced code blocks with language specifier.

Project‑specific preferences are documented in the templates and in `community-tools` example pages; consult them for tricky formatting cases.

## Technical Implementation Details

### Front Matter

All Markdown files begin with YAML metadata.

* `title` – Human‑readable page title. (Required)
* `url` – Page URL. Start and end with `/`, use only lowercase letters, numbers, and hyphens. Doesn't need to match the file path. (Required)
* `description` – Summary used for metadata, search snippets, and content lists. Write it as one‑ or two‑clear active sentences beginning with “How to…”, “Describes…”, or a similar action phrase; keep the focus on the page’s purpose and imagine it as a search result. (Required)
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

1. **Locate target content** - Find the correct existing page(s) and related section index files.
2. **Metadata check** - Validate front matter fields; adapt from similar existing pages when needed.
3. **Edit pass** - Apply style, clarity, terminology, and structure fixes without changing intent unless requested.
4. **Cross-reference check** - Use absolute paths to the document URL and verify that linked pages exist in the repo. Don't use the path to the Markdown file.
5. **Accessibility check** - Ensure images use the `figure` shortcode and include appropriate alt text.
6. **Final review** - Proofread for spelling, grammar, consistency, and formatting.

## Standard Content Template

If asked to create new content:

1. Read the appropriate template from `templates/`: `how-to-template.md`, `reference-template.md`, `marketplace-component-page-template.md`, or `release-notes-template.md`
2. Create the new file based on the template
3. Remove comment lines (`#`) from the template
4. Follow the editorial workflow above

For all pages, required sections are front matter and the introduction; other sections vary by content type.