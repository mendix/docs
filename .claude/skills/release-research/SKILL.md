---
name: release-research
description: "Researches Mendix release notes to find changes, new features, improvements, and bug fixes across Studio Pro and other product releases."
user-invocable: true
disable-model-invocation: false
---

# Mendix Release Research

Research Mendix release notes to answer questions about new features, changes, improvements, and bug fixes introduced in specific versions or time periods.

## Workflow

### Step 1: Identify Scope

Determine the version(s) or date range relevant to the user's question.

### Step 2: Locate and Read Release Notes

Use the methods below to find the appropriate files under `content/en/docs/releasenotes/`. Read the relevant file(s). When multiple files are needed, read them in parallel.

| Goal | Method |
|------|--------|
| URL → source file | `bash .claude/scripts/resolve-doc-url.sh "/releasenotes/studio-pro/11.1/"` |
| Find by filename | `glob "content/en/docs/releasenotes/studio-pro/11/*.md"` |
| Search body text | `grep "React client" --include="*.md" --path="content/en/docs/releasenotes/"` |
| Search by date | `grep "Release date:" --include="*.md" --path="content/en/docs/releasenotes/studio-pro/11/"` |

### Step 3: Collect All Release Blog URLs

After reading the release notes, search the content you just read for any markdown links matching `https://www.mendix.com/blog/...`. These look like:

```
[11.1 Mendix release blog](https://www.mendix.com/blog/mendix-11-1-more-power-less-effort/)
```

or:

```
[11.0 Mendix release blog](https://www.mendix.com/blog/mendix-release-11-0-start-with-ai-build-anything-the-next-era-of-enterprise-development-is-here/)
```

Collect ALL such URLs from ALL release notes files you read.

### Step 4: Fetch Every Release Blog

Fetch EVERY blog URL you collected in Step 3 using WebFetch. Fetch multiple blogs in parallel. Do NOT proceed to the response without fetching these blogs first.

### Step 5: Parse Release Blogs

Read the entire blog content and extract information relevant to the user's query. The blog structure varies between releases. Map the content to the original question, pulling out feature names, descriptions, and context regardless of heading structure. Ignore site navigation, footer, menus, and promotional boilerplate.

### Step 6: Synthesize and Respond

Combine information from BOTH the release notes AND the blog post(s). Always include insights from the blog when one was fetched. If a blog did not contain relevant information, state this. If no blog link was found for a version, state this.

### Step 7: Cite Sources

End your response with a **Citations** section listing every source you consulted. This step is mandatory — never omit it. Include:

- Release notes pages (using their `url` front matter)
- Blog posts (full URL)
- Any other documentation files you read to answer the question

## Identifying Versions by Date

- Each patch/minor release has a date line: `**Release date: <month> <day>, <year>**`
- For date-range queries (e.g., "H2 2025", "Q1 2025"), use Grep to search for `Release date:` across the relevant major version folder, then read matching files.
- Date mappings: Q1=Jan–Mar, Q2=Apr–Jun, Q3=Jul–Sep, Q4=Oct–Dec; H1=Jan–Jun, H2=Jul–Dec

## Scope

Primary focus is **Studio Pro**, but also covers:

| Product Area | Path |
|---|---|
| Studio Pro | `content/en/docs/releasenotes/studio-pro/` |
| Deployment | `content/en/docs/releasenotes/deployment/` |
| Developer Portal | `content/en/docs/releasenotes/developer-portal/` |
| Mobile | `content/en/docs/releasenotes/mobile/` |
| Marketplace | `content/en/docs/releasenotes/marketplace/` |
| Control Center | `content/en/docs/releasenotes/control-center/` |
| Private Platform | `content/en/docs/releasenotes/private-platform/` |
| Catalog | `content/en/docs/releasenotes/catalog/` |

## File Conventions

- Studio Pro: `content/en/docs/releasenotes/studio-pro/{major}/{major}.{minor}.md`
- Major versions available: 8, 9, 10, 11
- Each file contains all patch releases for that minor version
- Sections per release: New Features, Improvements, Fixes, Known Issues, Deprecations, Breaking Changes

## Output Format

1. **Direct answer** — Begin with a concise answer to the user's question.
2. **Supporting details** — List relevant features, changes, or fixes with brief descriptions. Group by product area when covering multiple topics. Quote key passages where helpful.
3. **Citations** (see Step 7) — Always included. Never omit.

If no relevant content is found, state that clearly and do not speculate. If specific versions or date ranges yield no results, report which versions were checked and that no matching content was found.

### Citation Format

Always cite both the release notes and any blog posts you fetched. Use the page's `title` and `url` front matter fields for release notes:

```
[Studio Pro 10.21](https://docs.mendix.com/releasenotes/studio-pro/10.21/)
```

For blog posts, use the full URL:

```
[Mendix 11.1 Release Blog](https://www.mendix.com/blog/mendix-11-1-more-power-less-effort/)
```

## Example Queries

- "What are the major features introduced in Mendix 11?"
- "What is the most exciting feature in H2 2025?"
- "When was the React client made default?"
- "What changed in Studio Pro 10.21?"
- "What workflow improvements were made in 2025?"
- "What GenAI features were added recently?"
