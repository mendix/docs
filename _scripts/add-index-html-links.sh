#!/bin/bash
# Post-processing script for Siemens internal deployment.
# Rewrites directory-style href links (ending with /) to explicit /index.html
# links in all HTML files under public/, so the Siemens server can serve them
# without requiring automatic directory index support.
#
# When built with the siemens-internal environment, canonifyURLs=true causes Hugo
# to expand all internal links to full absolute URLs using the baseURL. Pass that
# baseURL as the second argument so those links are rewritten too.
#
# Rewrites both plain directory links and directory links with anchors:
#   href=".../path/"           → href=".../path/index.html"
#   href=".../path/#anchor"    → href=".../path/index.html#anchor"
#
# Skips:
#   - External links (contain :// but do not start with base-url)
#   - Anchor-only links starting with #
#   - Links already containing index.html or ending in .html/.htm
#
# Usage: bash _scripts/add-index-html-links.sh [public-dir] [base-url]
# Default public-dir: public
# Default base-url: (empty — only root-relative and relative links are rewritten)
#
# Example (siemens-internal build):
#   bash _scripts/add-index-html-links.sh public \
#     https://internal.docs.sw.siemens.com/documentation/internal/PL20260323299104942/en-US/Mendix-Docs/public/

set -euo pipefail

PUBLIC_DIR="${1:-public}"
BASE_URL="${2:-}"

if [ ! -d "$PUBLIC_DIR" ]; then
    echo "Error: directory '$PUBLIC_DIR' not found. Run hugo build first." >&2
    exit 1
fi

echo "Adding index.html to directory links in $PUBLIC_DIR..."
[ -n "$BASE_URL" ] && echo "Treating '$BASE_URL' as internal base URL."

python3 - "$PUBLIC_DIR" "$BASE_URL" << 'PYTHON'
import re, sys
from pathlib import Path

public_dir = sys.argv[1]
base_url = sys.argv[2].rstrip("/") + "/" if sys.argv[2] else ""

HREF_RE = re.compile(r"""(href=["'])([^"']*)(["'])""")

def rewrite_href(m):
    pre, url, quote = m.group(1), m.group(2), m.group(3)

    # Treat absolute URLs that start with base_url as internal; skip all others
    if "://" in url:
        if not (base_url and url.startswith(base_url)):
            return m.group(0)

    # Skip anchor-only links
    if url.startswith("#"):
        return m.group(0)

    # Split off any fragment (e.g. /path/#anchor → path=/path/, fragment=#anchor)
    fragment = ""
    if "#" in url:
        url, fragment = url.split("#", 1)
        fragment = "#" + fragment

    # Skip already-explicit file links
    if url.endswith(".html") or url.endswith(".htm"):
        return f"{pre}{url}{fragment}{quote}"

    if url.endswith("/"):
        url = url + "index.html"
    return f"{pre}{url}{fragment}{quote}"

count = 0
for path in Path(public_dir).rglob("*.html"):
    original = path.read_text(encoding="utf-8", errors="replace")
    updated = HREF_RE.sub(rewrite_href, original)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        count += 1

print(f"Updated {count} HTML files.")
PYTHON
