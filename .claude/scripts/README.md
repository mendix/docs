# Claude Helper Scripts

Utility scripts to support Claude Code when working with this documentation repository.

## resolve-doc-url.sh

Resolves a documentation URL to its source markdown file.

### Usage

```bash
.claude/scripts/resolve-doc-url.sh "/path/to/page/"
```

### Examples

```bash
# Find the file for a specific URL
.claude/scripts/resolve-doc-url.sh "/community-tools/contribute-to-mendix-docs/"
# Output: content/en/docs/community-tools/contribute-to-mendix-docs/_index.md

# Check if a URL exists
.claude/scripts/resolve-doc-url.sh "/some/page/"
# Exit code 0 if found, 1 if not found
```

### Benefits

- **Fast**: Uses grep optimized for file-only output
- **Token-efficient**: Returns only the file path, no surrounding context
- **Reliable**: Matches exact URL in front matter using fixed-string search

### When to Use

- Following cross-references between documentation pages
- Validating internal links
- Finding files by their published URL
- Checking if a URL is already in use
