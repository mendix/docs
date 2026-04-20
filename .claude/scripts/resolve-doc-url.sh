#!/bin/bash
# Resolve a documentation URL to its source markdown file
# Usage: resolve-doc-url.sh "/path/to/page/"

if [ -z "$1" ]; then
    echo "Usage: resolve-doc-url.sh <url>"
    echo "Example: resolve-doc-url.sh '/community-tools/contribute-to-mendix-docs/'"
    exit 1
fi

# Search for the URL in front matter
# Using grep with -l (files only) and -F (fixed string) for speed
grep -rl --include="*.md" "^url: $1$" content/en/docs/

# Exit code 0 if found, 1 if not found
