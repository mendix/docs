---
description: Research Mendix release notes and release blogs to find changes, new features, improvements, and bug fixes across Studio Pro and other products.
---

Research Mendix release notes to answer questions about new features, changes, improvements, and bug fixes introduced in specific versions or time periods.

## CRITICAL RULE: Always Fetch Release Blogs

When a release notes file contains a markdown link to `https://www.mendix.com/blog/...`, you MUST fetch that URL. Never skip this. The blog contains detailed feature descriptions not available in the release notes alone. Your response will be incomplete without it.

## Instructions

1. **Identify scope** — Determine the version(s) or date range from the user's question.
2. **Locate and read release notes** — Find files under `content/en/docs/releasenotes/`. Studio Pro notes are at `studio-pro/{major}/{major}.{minor}.md` (major versions: 8, 9, 10, 11).
3. **Collect all release blog URLs** — After reading, find every markdown link matching `https://www.mendix.com/blog/...` in the files you read.
4. **Fetch EVERY release blog** — Use WebFetch on every blog URL collected. Fetch in parallel when multiple. Do NOT skip this step.
5. **Parse release blogs** — Read the entire fetched content. Extract information relevant to the query regardless of blog structure. Ignore navigation/footer boilerplate.
6. **Respond** — Combine information from BOTH release notes AND blog post(s). If no blog link exists for a version, report that. If information is not found, report that clearly. Cite all sources.

## Date Ranges

- Release dates appear as `**Release date: <month> <day>, <year>**`
- For date queries, grep for `Release date:` across the relevant major version folder to find matching files.
- Q1=Jan–Mar, Q2=Apr–Jun, Q3=Jul–Sep, Q4=Oct–Dec; H1=Jan–Jun, H2=Jul–Dec

## Scope

| Product Area | Path |
|---|---|
| Studio Pro (primary) | `content/en/docs/releasenotes/studio-pro/` |
| Deployment | `content/en/docs/releasenotes/deployment/` |
| Developer Portal | `content/en/docs/releasenotes/developer-portal/` |
| Mobile | `content/en/docs/releasenotes/mobile/` |
| Marketplace | `content/en/docs/releasenotes/marketplace/` |
| Control Center | `content/en/docs/releasenotes/control-center/` |
| Private Platform | `content/en/docs/releasenotes/private-platform/` |
| Catalog | `content/en/docs/releasenotes/catalog/` |

## Citation Format

- Release notes: `[Studio Pro 10.21 Release Notes](/releasenotes/studio-pro/10.21/)`
- Blog posts: `[Mendix 11.1 Release Blog](https://www.mendix.com/blog/mendix-11-1-more-power-less-effort/)`
