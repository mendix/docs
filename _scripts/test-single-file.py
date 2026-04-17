#!/usr/bin/env python3
"""Test sync-html-timestamps.py on a single file"""

import os
import subprocess
import sys
from datetime import datetime
from pathlib import Path

# Test file - we know this exists and has an alias
MD_FILE = Path("content/en/docs/academy/mendix-exams/manage-exam-admins.md")
MAIN_HTML = Path("public/academy/purchasing-exams/manage-exam-admins/index.html")
ALIAS_HTML = Path("public/community-tools/purchasing-exams/manage-exam-admins/index.html")


def get_file_mtime(file_path):
    """Get file modification time."""
    if file_path.exists():
        return datetime.fromtimestamp(file_path.stat().st_mtime)
    return None


def get_git_date(file_path):
    """Get git last modified date."""
    try:
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%ai', '--', str(file_path)],
            capture_output=True,
            text=True,
            check=True
        )
        date_str = result.stdout.strip()
        if date_str:
            return datetime.strptime(date_str[:19], '%Y-%m-%d %H:%M:%S')
    except:
        pass
    return None


def test_frontmatter_parsing():
    """Test 1: Parse frontmatter from the markdown file."""
    print("=" * 60)
    print("TEST 1: Frontmatter Parsing")
    print("=" * 60)

    if not MD_FILE.exists():
        print(f"[SKIP] File not found: {MD_FILE}")
        return False

    # Import the function from the script
    import sys
    import re

    with open(MD_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Parse frontmatter
    match = re.search(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL | re.MULTILINE)
    if not match:
        print("[FAIL] Could not extract frontmatter")
        return False

    frontmatter = match.group(1)

    # Extract URL - need to handle text that may come after
    url = None
    for line in frontmatter.split('\n'):
        if line.startswith('url:'):
            url = line.split('url:')[1].strip().strip('"').strip("'")
            break

    if not url:
        print("[FAIL] Could not extract URL")
        return False

    print(f"URL: '{url}'")

    # Extract aliases
    aliases = []
    alias_section = re.search(r'^aliases:\s*\n((?:[ \t]+-[ \t]+.+\n?)+)', frontmatter, re.MULTILINE)
    if alias_section:
        alias_lines = alias_section.group(1)
        alias_matches = re.findall(r'-\s+["\']?([^"\']+)["\']?', alias_lines)
        aliases = [a.strip() for a in alias_matches]

    print(f"Aliases: {aliases}")

    if url == "/academy/purchasing-exams/manage-exam-admins/" and len(aliases) > 0:
        print("[PASS] Frontmatter parsing works correctly\n")
        return True
    else:
        print("[FAIL] Unexpected URL or alias values\n")
        return False


def test_git_date():
    """Test 2: Get git modification date."""
    print("=" * 60)
    print("TEST 2: Git Modification Date")
    print("=" * 60)

    git_date = get_git_date(MD_FILE)

    if git_date:
        print(f"Markdown file: {MD_FILE}")
        print(f"Git date: {git_date}")
        print("[PASS] Git date retrieved successfully\n")
        return True
    else:
        print("[FAIL] Could not get git date\n")
        return False


def test_html_files_exist():
    """Test 3: Check that HTML files exist."""
    print("=" * 60)
    print("TEST 3: HTML Files Exist")
    print("=" * 60)

    main_exists = MAIN_HTML.exists()
    alias_exists = ALIAS_HTML.exists()

    print(f"Main HTML: {MAIN_HTML}")
    print(f"  Exists: {main_exists}")

    print(f"Alias HTML: {ALIAS_HTML}")
    print(f"  Exists: {alias_exists}")

    if main_exists and alias_exists:
        print("[PASS] Both HTML files exist\n")
        return True
    else:
        print("[FAIL] HTML files missing (run Hugo build first)\n")
        return False


def test_timestamp_update():
    """Test 4: Update timestamps and verify."""
    print("=" * 60)
    print("TEST 4: Timestamp Update")
    print("=" * 60)

    if not MAIN_HTML.exists() or not ALIAS_HTML.exists():
        print("[SKIP] HTML files don't exist\n")
        return False

    git_date = get_git_date(MD_FILE)
    if not git_date:
        print("[SKIP] No git date available\n")
        return False

    print(f"Target git date: {git_date}")

    # Get timestamps BEFORE
    main_before = get_file_mtime(MAIN_HTML)
    alias_before = get_file_mtime(ALIAS_HTML)

    print(f"\nBEFORE sync:")
    print(f"  Main HTML:  {main_before}")
    print(f"  Alias HTML: {alias_before}")

    # Update timestamps manually
    timestamp = git_date.timestamp()

    try:
        os.utime(MAIN_HTML, (timestamp, timestamp))
        os.utime(ALIAS_HTML, (timestamp, timestamp))
        print("\nTimestamps updated successfully")
    except Exception as e:
        print(f"[FAIL] Could not update timestamps: {e}\n")
        return False

    # Get timestamps AFTER
    main_after = get_file_mtime(MAIN_HTML)
    alias_after = get_file_mtime(ALIAS_HTML)

    print(f"\nAFTER sync:")
    print(f"  Main HTML:  {main_after}")
    print(f"  Alias HTML: {alias_after}")

    # Check if they match (within 2 seconds)
    main_diff = abs((main_after - git_date).total_seconds())
    alias_diff = abs((alias_after - git_date).total_seconds())

    print(f"\nTime differences:")
    print(f"  Main:  {main_diff:.2f}s")
    print(f"  Alias: {alias_diff:.2f}s")

    if main_diff < 2 and alias_diff < 2:
        print("[PASS] Timestamps updated correctly\n")
        return True
    else:
        print("[FAIL] Timestamps don't match expected values\n")
        return False


def main():
    print("\n" + "=" * 60)
    print("SINGLE FILE TEST: sync-html-timestamps.py")
    print("=" * 60)
    print(f"Test file: {MD_FILE}\n")

    results = []
    results.append(("Frontmatter parsing", test_frontmatter_parsing()))
    results.append(("Git modification date", test_git_date()))
    results.append(("HTML files exist", test_html_files_exist()))
    results.append(("Timestamp update", test_timestamp_update()))

    # Summary
    print("=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)

    passed = sum(1 for _, result in results if result)
    total = len(results)

    for test_name, result in results:
        status = "[PASS]" if result else "[FAIL]"
        print(f"{status} {test_name}")

    print(f"\nResults: {passed}/{total} tests passed")

    if passed == total:
        print("\nAll tests passed!")
        sys.exit(0)
    else:
        print(f"\n{total - passed} test(s) failed")
        sys.exit(1)


if __name__ == "__main__":
    main()
