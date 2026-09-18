# Siemens Internal Deployment Configuration

This directory contains the Hugo environment configuration for deploying the Mendix documentation to the Siemens internal documentation portal.

## Deployment URL

The site is deployed at:

```
https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/Mendix-Docs/public/
```

## The Problem: Pretty URLs Not Supported

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
Hugo --environment siemens-internal --cleanDestinationDir

# Rewrite directory-style links to include index.html.
# The second argument (the site's baseURL) is required: the siemens-internal build uses
# canonifyURLs=true, which expands all internal links to full absolute URLs. Without the
# baseURL argument, the script cannot tell internal links from external ones and skips them.
bash _scripts/add-index-html-links.sh Built/Mendix-Docs/public \
  https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/Mendix-Docs/public/
```

The built site will be in `Built/Mendix-Docs/public/`, ready for deployment to the Siemens internal portal.

## GitHub Actions Workflow

The `siemens-internal-build-and-deploy` workflow (`.github/workflows/siemens-internal-build-and-deploy.yml`) automates the build and deployment to the Siemens Support Center S3 bucket. It is triggered manually from the Actions tab and has a single input:

* **`dry_run`** (Boolean, default `true`): when `true`, the S3 sync runs with `--dryrun` and no files are uploaded. Set to `false` to perform a real deployment.

The workflow runs in two jobs:

### Build Job

1. Checks out the repository (with 20,000 commits to populate last-modified dates).
2. Installs Node.js dependencies and Python.
3. Builds the site with Hugo using the `siemens-internal` environment, outputting to `Built/Mendix-Docs/public/`.
4. Runs `add-index-html-links.sh` to rewrite directory-style links.
5. Runs htmltest (using `.htmltest-siemens.yml`) to check for broken cross-references; failures are treated as warnings.
6. Uploads the entire `Built/` directory as a build artifact.

### Deploy Job

1. Checks out the repository (for access to scripts and metadata files).
2. Downloads the `Built/` artifact from the build job.
3. Sets the `DRY_RUN` environment variable to `--dryrun` (default) or an empty string based on the `dry_run` input.
4. Runs `_scripts/deploy-to-siemens.sh`, which copies `content.xlsx` into `Built/Mendix-Docs/.meta/` and syncs the `Built/` directory to the Siemens Support Center S3 bucket using the `SSC_AWS_*` secrets.

The workflow is guarded by `if: github.repository_owner == 'mendix'` on the build job, so it will not run in forks.

## Configuration Files

### hugo.toml

Sets the baseURL, the publish directory, and enables:

* `publishDir = "Built/Mendix-Docs/public"` to match the structure expected by the Siemens Support Center
* `canonifyURLs = true` to handle the deep deployment path
* `uglyURLs = true` to ensure proper URL resolution on the Siemens server

### _scripts/add-index-html-links.sh

Rewrites all `href=".../"` directory-style links in the built HTML to `href=".../index.html"` so the Siemens server can serve them without automatic directory index support. Run this after every Hugo build.

Skips external links, anchor links, links that already end in `.html`, and print URLs.

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

## Updating the Deployment Path

If the Siemens deployment URL changes, update the `baseURL` in `config/siemens-internal/hugo.toml`.

## Alternative Approaches Considered

1. **Using relativeURLs**: Breaks the landing page images and requires template changes
2. **Path-only baseURL**: Requires web server configuration and does not work with direct file access
3. **Template modifications**: Requires maintaining custom versions of Docsy theme files

The current solution (Hugo configuration plus a focused post-processing script) is the simplest and most maintainable approach.
