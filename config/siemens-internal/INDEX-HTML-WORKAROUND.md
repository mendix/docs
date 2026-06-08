# Adding index.html to Directory Links for Siemens Deployment

## The Problem

The Siemens internal web server does not automatically serve `index.html` when a directory URL is requested. When a user or browser requests `https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/public/refguide/`, the server does not automatically serve the `refguide/index.html` file.

Hugo's `uglyURLs = true` setting helps by making URLs explicit where possible, but Hugo still generates many directory-style links (ending with `/`) throughout the site, particularly in:

* Navigation menus
* Breadcrumbs
* Internal page links
* Table of contents

## Recommended Solution: Post-Processing

The cleanest approach is to post-process the HTML files after Hugo builds them, rewriting directory links to explicitly include `/index.html`.

### How It Works

1. **Hugo builds the site normally** using the siemens-internal environment
2. **Post-processing script runs** and:
   - Scans all HTML files in the `public/` directory
   - Identifies internal links that end with `/` (directory links)
   - Rewrites them to end with `/index.html`
   - Preserves external links, anchor links, and explicit file references unchanged

3. **Resulting HTML has explicit paths** that the Siemens server can serve correctly

### Link Transformation Examples

**Navigation links:**
```html
<!-- Before -->
<a href="https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/public/refguide/">

<!-- After -->
<a href="https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/public/refguide/index.html">
```

**Breadcrumb links:**
```html
<!-- Before -->
<a href="/documentation/internal/PL20260323299104942/en-US/public/deployment/">

<!-- After -->
<a href="/documentation/internal/PL20260323299104942/en-US/public/deployment/index.html">
```

### What Gets Changed

✅ **Internal directory links**: `href=".../"` → `href=".../index.html"`

❌ **External links**: `href="https://example.com/..."` (unchanged)
❌ **Anchor links**: `href="#section"` (unchanged)
❌ **File links**: `href=".../page.html"` (unchanged)
❌ **Protocol links**: `href="mailto:..."`, `href="javascript:..."` (unchanged)
❌ **Print URLs**: `href=".../_print/..."` (unchanged - print output works differently)

### Implementation Approach

The post-processing can be implemented using standard text processing tools:

**Option 1: Using sed (bash)**
* Fast and simple for straightforward pattern matching
* May require careful escaping of special characters
* Best for simple, well-defined patterns

**Option 2: Using a scripting language (Python/Node.js)**
* More reliable HTML parsing
* Better handling of edge cases
* Can use proper HTML parsers (BeautifulSoup, cheerio, etc.)
* More maintainable for complex transformations

**Option 3: Using specialized tools (htmlq, pup)**
* Purpose-built for HTML manipulation
* Balance between sed simplicity and full scripting power

### Integration with Build Process

Update the build workflow to:

```bash
# Build the site
hugo --environment siemens-internal --cleanDestinationDir

# Post-process to add index.html to directory links
bash scripts/add-index-html-links.sh
```

The script would be kept in `scripts/` alongside the existing (now no-op) `fix-siemens-paths.sh`.

### Advantages

* ✅ **Non-invasive**: Does not require modifying Hugo templates or Docsy theme files
* ✅ **Environment-specific**: Only affects siemens-internal builds
* ✅ **Maintainable**: Clear separation between Hugo build and Siemens-specific processing
* ✅ **Reversible**: Can easily disable by skipping the post-processing step
* ✅ **Hugo-version independent**: Works regardless of Hugo updates
* ✅ **Preserves other outputs**: Standard HTML and print versions remain unchanged

### Disadvantages

* ❌ **Build-time overhead**: Adds processing time (likely 5-30 seconds depending on implementation)
* ❌ **Two-step process**: Requires running a script after Hugo build
* ❌ **Pattern matching complexity**: Must carefully identify which links to transform

## Alternative Solution: Hugo Render Hooks and Custom Layouts

Instead of post-processing, modify Hugo's rendering behavior at build time.

### How It Works

1. **Create custom render hooks** for markdown links in `.layouts/_default/_markup/`
2. **Override navigation partials** from Docsy theme to append `/index.html`
3. **Configure hooks** to only apply for siemens-internal environment

### Required Changes

* Copy Docsy navigation partial files to local `layouts/` directory
* Modify link generation logic to append `/index.html` to directory URLs
* Create markdown render hooks for content links
* Add conditional logic to check environment

### Advantages

* ✅ **Build-time only**: No post-processing step required
* ✅ **Single build command**: Just run `hugo --environment siemens-internal`

### Disadvantages

* ❌ **More invasive**: Requires copying and modifying theme files
* ❌ **Maintenance burden**: Must update custom layouts when Docsy updates
* ❌ **Complexity**: Multiple layout files need modification
* ❌ **Testing required**: Must verify all link types work correctly
* ❌ **Harder to isolate**: Siemens-specific logic mixed with layout code

## Recommendation

Use the **post-processing approach** because:

1. Hugo v0.156.0 already eliminated the need for the previous doubled-path workaround, so we have experience with post-processing scripts
2. The script can be kept simple and focused on one task
3. It does not require maintaining customized Docsy theme files
4. It is easier to test, debug, and modify
5. It keeps the Siemens-specific logic isolated and well-documented

The slight increase in build time is acceptable for a deployment that happens infrequently, and the maintainability benefits outweigh the minor inconvenience of a two-step build process.

## Next Steps

If you decide to implement this solution:

1. Create `scripts/add-index-html-links.sh` based on the implementation approach
2. Test thoroughly on a local build to verify link transformations
3. Update `config/siemens-internal/README.md` to document the new build step
4. Verify the transformed site works on the Siemens internal server
