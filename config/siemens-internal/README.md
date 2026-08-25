# Siemens Internal Deployment Configuration

This directory contains the Hugo environment configuration for deploying the Mendix documentation to the Siemens internal documentation portal.

## Deployment URL

The site is deployed at:

```
https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/Mendix-Docs/public/
```

## The Problems

### 1. Deep URL Path (Fixed in Hugo v0.156.0+)

**Historical Issue**: Earlier versions of Hugo had a bug where `canonifyURLs` generated doubled paths for CSS and JS assets when deploying to a deep URL path (not at the domain root).

Example of the old bug:

* Expected: `https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/Mendix-Docs/public/scss/main.css`
* Generated: `https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/Mendix-Docs/public/documentation/internal/PL20260323299104942/en-US/public/scss/main.css`

**Status**: ✅ This issue was fixed in Hugo v0.156.0. The `canonifyURLs` setting now correctly handles deep baseURL paths without generating doubled paths.

### 2. Pretty URLs Not Supported

The Siemens internal server does not serve Hugo's default "pretty URLs" (like `/page/` resolving to `/page/index.html`). `uglyURLs = true` helps, but Hugo still generates many directory-style links (ending with `/`) in navigation menus, breadcrumbs, and table-of-contents entries.

A post-processing script rewrites all remaining directory-style `href` links to include `/index.html` explicitly.

## The Solution

Configure Hugo with the appropriate settings for deep URL deployment, then run the post-processing script:

1. **Set the full baseURL** including the deep path
2. **Enable `canonifyURLs = true`** to convert all root-relative URLs to use the baseURL
3. **Enable `uglyURLs = true`** to reduce (but not eliminate) directory-style links
4. **Use relative font paths** in CSS (`../fonts/` instead of `/fonts/`) to work across all environments
5. **Run `add-index-html-links.sh`** to rewrite remaining `href=".../"` links to `href=".../index.html"`

## How to Build

Run these commands from the repository root:

```bash
# Build the site with the siemens-internal environment
hugo --environment siemens-internal --cleanDestinationDir

# Rewrite directory-style links to include index.html.
# The second argument (the site's baseURL) is required: the siemens-internal build uses
# canonifyURLs=true, which expands all internal links to full absolute URLs. Without the
# baseURL argument, the script cannot tell internal links from external ones and skips them.
bash _scripts/add-index-html-links.sh public \
  https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/Mendix-Docs/public/
```

The built site will be in the `public/` directory, ready for deployment to the Siemens internal portal.

## Configuration Files

### Hugo.toml

Sets the baseURL and enables:

* `canonifyURLs = true` to handle the deep deployment path
* `uglyURLs = true` to ensure proper URL resolution on the Siemens server

### _scripts/add-index-html-links.sh

Rewrites all `href=".../"` directory-style links in the built HTML to `href=".../index.html"` so the Siemens server can serve them without automatic directory index support. Run this after every Hugo build.

Skips external links, anchor links, links that already end in `.html`, and print URLs.

### _scripts/fix-siemens-paths.sh

**Legacy script** — kept for backward compatibility but no longer needed with Hugo v0.156.0+.

Previously used to work around a Hugo bug where `canonifyURLs` generated doubled paths for CSS and JS files. The bug has been fixed, and the script now only prints a confirmation message.

## Technical Details

### Why CanonifyURLs?

The `canonifyURLs = true` setting converts all root-relative URLs (like `/images/foo.svg`) to absolute URLs using the baseURL. This is necessary because:

* Images in templates use hardcoded paths like `/images/...` and `/icons/...`
* Internal page links need the full path
* Without it, all these references would be broken

### Why Relative Font Paths?

Font files are referenced in CSS using relative paths (`../fonts/`, `../webfonts/`) rather than root-relative paths (`/fonts/`). This approach:

* Works consistently across all deployment environments (production, development, siemens-internal)
* Does not require environment-specific processing
* Avoids issues with deep URL paths

### Hugo Version Requirements

* **Hugo v0.156.0 or later** is required for correct handling of deep baseURL paths with `canonifyURLs`
* Earlier versions had a bug where `canonifyURLs` would generate doubled paths for CSS and JS assets

## Updating the Deployment Path

If the Siemens deployment URL changes, update the `baseURL` in `config/siemens-internal/hugo.toml`.

## Alternative Approaches Considered

1. **Using relativeURLs**: Breaks the landing page images and requires template changes
2. **Path-only baseURL**: Requires web server configuration and does not work with direct file access
3. **Template modifications**: Requires maintaining custom versions of Docsy theme files

The current solution (Hugo configuration plus a focused post-processing script) is the simplest and most maintainable approach.
