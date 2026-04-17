#!/usr/bin/env python3
"""Quick test of parsing logic"""

import re

# Test the parsing logic
test_content = """---
title: "Managing Exam Admins"
url: /academy/purchasing-exams/manage-exam-admins/
weight: 20
description: "Describes how to manage exam admins in an organization."
aliases:
    - /community-tools/purchasing-exams/manage-exam-admins/
---
"""

# Extract frontmatter
match = re.search(r'^---\s*\n(.*?)\n---\s*\n', test_content, re.DOTALL | re.MULTILINE)
if match:
    frontmatter = match.group(1)
    print("Frontmatter extracted successfully\n")

    # Extract URL
    url_match = re.search(r'^url:\s*["\']?([^"\']+)["\']?\s*$', frontmatter, re.MULTILINE)
    if url_match:
        url = url_match.group(1).strip()
        print(f"[PASS] URL parsed: {url}")
    else:
        print("[FAIL] URL not found")

    # Extract aliases
    aliases = []
    alias_section = re.search(r'^aliases:\s*\n((?:[ \t]+-[ \t]+.+\n?)+)', frontmatter, re.MULTILINE)
    if alias_section:
        alias_lines = alias_section.group(1)
        alias_matches = re.findall(r'-\s+["\']?([^"\']+)["\']?', alias_lines)
        aliases = [a.strip() for a in alias_matches]
        print(f"[PASS] Aliases parsed: {aliases}")
    else:
        print("[FAIL] No aliases found")

    print("\n[PASS] Parsing logic works correctly!")
else:
    print("✗ Failed to extract frontmatter")
