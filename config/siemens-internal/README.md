# Siemens Internal Deployment Configuration

This directory contains the Hugo environment configuration for deploying the Mendix documentation to the Siemens internal documentation portal.

## Deployment URL

The site is deployed at:
```
https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/public/
```

## The Problem

When deploying a Hugo site to a deep URL path (not at the domain root), CSS, JavaScript, and image references need to include the full path. Hugo generates URLs based on the `baseURL` setting, but with deep paths, the `canonifyURLs` feature can cause some assets (specifically CSS and JS) to have doubled paths.

For example:
- Expected: `https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/public/scss/main.css`
- Generated: `https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/public/documentation/internal/PL20260323299104942/en-US/public/scss/main.css`

## The Solution

We use a two-step approach:

1. **Configure Hugo** with `canonifyURLs = true` and the full baseURL to ensure all images and internal links work correctly
2. **Post-process** by copying the affected CSS and JS files to the doubled-path location where Hugo generates references to them

This approach:
- ✅ Requires no changes to templates or Markdown content
- ✅ Only duplicates 3 small files (~740KB total)
- ✅ Works for all images and page links automatically
- ✅ Simple to maintain

## How to Build

Run these two commands from the repository root:

```bash
# Build the site with the siemens-internal environment
hugo --environment siemens-internal --cleanDestinationDir

# Copy CSS and JS files to the doubled-path location
bash scripts/fix-siemens-paths.sh
```

The built site will be in the `public/` directory, ready for deployment to the Siemens internal portal.

## Configuration Files

### hugo.toml
Sets the baseURL and enables `canonifyURLs` to handle the deep deployment path.

### scripts/fix-siemens-paths.sh
Post-processing script that copies:
- `scss/main.css` and `scss/main.css.map`
- `js/main.js`
- `js/click-to-copy.js`

to the doubled-path location: `public/documentation/internal/PL20260323299104942/en-US/public/{scss,js}/`

## Technical Details

### Why canonifyURLs?
The `canonifyURLs = true` setting converts all root-relative URLs (like `/images/foo.svg`) to absolute URLs using the baseURL. This is necessary because:
- Images in templates use hardcoded paths like `/images/...` and `/icons/...`
- Internal page links need the full path
- Without it, all these references would be broken

### Why the doubled paths?
Hugo's CSS and JS pipeline generates URLs that already include the baseURL path in some cases, and then `canonifyURLs` prepends the baseURL again, causing the path to appear twice. This is a known Hugo issue with deep basePaths.

### Why not fix the templates?
Modifying templates to use `absURL` for all images would:
- Require changes to shared Docsy theme files
- Need maintenance across Hugo upgrades
- Affect multiple deployment targets (production, development)

The post-processing approach isolates the Siemens-specific fix.

## Updating the Deployment Path

If the Siemens deployment URL changes, update:
1. `baseURL` in `config/siemens-internal/hugo.toml`
2. `DEEP_PATH` variable in `scripts/fix-siemens-paths.sh`

## Alternative Approaches Considered

1. **Using relativeURLs**: Would break the landing page images and require template changes
2. **Path-only baseURL**: Would require web server configuration and wouldn't work with direct file access
3. **Template modifications**: Would require maintaining custom versions of Docsy theme files
4. **HTML post-processing**: Would need to parse and modify thousands of HTML files (slower and more complex)

The current solution is the simplest and most maintainable approach.
