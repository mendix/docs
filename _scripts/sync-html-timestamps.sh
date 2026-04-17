#!/bin/bash
# sync-html-timestamps.sh
# Updates HTML file timestamps to match git modification dates of source markdown files
# This allows AWS S3 sync to use timestamps to determine which files need updating
#
# NOTE: This script has been replaced by sync-html-timestamps.py (Python version)
# Kept as a backup in case Python is unavailable in the build environment

set -e

CONTENT_DIR="content/en/docs"
PUBLIC_DIR="public"

echo "Syncing HTML timestamps with git modification dates..."

count=0
skipped=0
errors=0

# Find all markdown files (including _index.md)
find "$CONTENT_DIR" -name "*.md" -type f | while read -r md_file; do
    # Get the URL from front matter (handles both url: /path/ and url: "/path/" formats)
    url=$(grep -m 1 "^url:" "$md_file" | sed 's/url: *//; s/"//g; s/'\''//g')

    if [ -n "$url" ]; then
        # Get git last modified date for the markdown file
        git_date=$(git log -1 --format="%ai" -- "$md_file" 2>/dev/null || echo "")

        if [ -n "$git_date" ]; then
            # Remove leading and trailing slashes from URL
            url_clean=$(echo "$url" | sed 's/^\/\|\/$//')

            # Find corresponding HTML file
            html_file="$PUBLIC_DIR/$url_clean/index.html"

            if [ -f "$html_file" ]; then
                # Update HTML file timestamp to match git modification date
                touch -d "$git_date" "$html_file"
                count=$((count + 1))
            else
                skipped=$((skipped + 1))
            fi
        else
            skipped=$((skipped + 1))
        fi
    else
        # Log error for markdown files without url: field in front matter
        echo "ERROR: No url: field found in front matter: $md_file" >&2
        errors=$((errors + 1))
    fi
done

echo "Timestamp sync complete: $count files updated, $skipped skipped, $errors errors"
