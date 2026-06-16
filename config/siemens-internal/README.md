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

The Siemens internal server does not serve Hugo's default "pretty URLs" (like `/page/` resolving to `/page/index.html`). To work around this, use `uglyURLs = true`, which changes how Hugo generates URLs in the HTML:

* **Without uglyURLs**: Links like `<a href="/refguide/">` rely on the server resolving the directory to `index.html`
* **With uglyURLs**: Links explicitly include `/index.html` where needed, ensuring compatibility with servers that don't automatically serve directory indexes

Note: The file structure remains the same (directories with `index.html` files inside). The setting only affects how URLs are written in the generated HTML.

## The Solution

Configure Hugo with the appropriate settings for deep URL deployment:

1. **Set the full baseURL** including the deep path
2. **Enable `canonifyURLs = true`** to convert all root-relative URLs to use the baseURL
3. **Enable `uglyURLs = true`** to ensure proper URL resolution on servers without automatic directory index serving
4. **Use relative font paths** in CSS (`../fonts/` instead of `/fonts/`) to work across all environments

This approach:

* ✅ Requires no changes to templates or Markdown content
* ✅ No post-processing or file duplication needed (as of Hugo v0.156.0+)
* ✅ Works for all images, fonts, and page links automatically
* ✅ Simple to maintain

## How to Build

Run this command from the repository root:

```bash
# Build the site with the siemens-internal environment
hugo --environment siemens-internal --cleanDestinationDir
```

The built site will be in the `public/` directory, ready for deployment to the Siemens internal portal.

**Note**: The `scripts/fix-siemens-paths.sh` script is kept for backward compatibility but is no longer needed with Hugo v0.156.0+.

## Configuration Files

### Hugo.toml

Sets the baseURL and enables:

* `canonifyURLs = true` to handle the deep deployment path
* `uglyURLs = true` to ensure proper URL resolution on the Siemens server

### Scripts/fix-siemens-paths.sh

**Legacy script** - kept for backward compatibility but no longer needed with Hugo v0.156.0+.

This script was previously used to work around a Hugo bug where `canonifyURLs` generated doubled paths for CSS and JS files. The bug has been fixed, and the script now simply confirms that no post-processing is needed.

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
4. **HTML post-processing**: Requires parsing and modifying thousands of HTML files (slower and more complex)

The current solution is the simplest and most maintainable approach.
