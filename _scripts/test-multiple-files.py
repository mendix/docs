#!/usr/bin/env python3
"""Test sync-html-timestamps.py on multiple files"""

import os
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path

CONTENT_DIR = "content/en/docs"
PUBLIC_DIR = "public"
TEST_COUNT = 20


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


def extract_urls_from_frontmatter(md_file):
    """Extract URL and aliases from markdown frontmatter."""
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Match YAML front matter between --- markers
        match = re.search(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL | re.MULTILINE)
        if not match:
            return None, []

        frontmatter = match.group(1)

        # Extract URL
        url = None
        for line in frontmatter.split('\n'):
            if line.startswith('url:'):
                url = line.split('url:')[1].strip().strip('"').strip("'")
                break

        # Extract aliases
        aliases = []
        alias_section = re.search(r'^aliases:\s*\n((?:[ \t]+-[ \t]+.+\n?)+)', frontmatter, re.MULTILINE)
        if alias_section:
            alias_lines = alias_section.group(1)
            alias_matches = re.findall(r'-\s+["\']?([^"\']+)["\']?', alias_lines)
            aliases = [a.strip() for a in alias_matches]

        return url, aliases
    except Exception as e:
        return None, []


def test_file(md_file, git_date):
    """Test a single markdown file and its HTML outputs."""
    url, aliases = extract_urls_from_frontmatter(md_file)

    if not url:
        return None, "No URL in frontmatter"

    all_urls = [url] + aliases
    results = []

    for page_url in all_urls:
        url_clean = page_url.strip('/')
        html_file = Path(PUBLIC_DIR) / url_clean / "index.html"

        if not html_file.exists():
            results.append({
                'url': page_url,
                'status': 'SKIP',
                'reason': 'HTML not found'
            })
            continue

        html_mtime = get_file_mtime(html_file)
        time_diff = abs((html_mtime - git_date).total_seconds())

        # Check if timestamp matches (within 2 seconds)
        if time_diff < 2:
            results.append({
                'url': page_url,
                'status': 'PASS',
                'diff': time_diff
            })
        else:
            results.append({
                'url': page_url,
                'status': 'FAIL',
                'diff': time_diff,
                'expected': git_date,
                'actual': html_mtime
            })

    return results, None


def main():
    print("=" * 70)
    print("MULTIPLE FILES TEST: sync-html-timestamps.py")
    print("=" * 70)
    print(f"Testing {TEST_COUNT} files\n")

    # Find markdown files with git history
    content_path = Path(CONTENT_DIR)
    all_md_files = list(content_path.rglob("*.md"))

    print(f"Found {len(all_md_files)} total markdown files")

    # Filter to files with URL and git history
    test_files = []
    for md_file in all_md_files:
        if len(test_files) >= TEST_COUNT:
            break

        url, aliases = extract_urls_from_frontmatter(md_file)
        if not url:
            continue

        git_date = get_git_date(md_file)
        if not git_date:
            continue

        # Check if at least the main HTML exists
        url_clean = url.strip('/')
        html_file = Path(PUBLIC_DIR) / url_clean / "index.html"
        if html_file.exists():
            test_files.append((md_file, url, aliases, git_date))

    if len(test_files) < TEST_COUNT:
        print(f"WARNING: Only found {len(test_files)} testable files\n")
    else:
        print(f"Selected {len(test_files)} files for testing\n")

    # Store timestamps BEFORE running sync
    print("=" * 70)
    print("BEFORE SYNC - Recording current timestamps")
    print("=" * 70)

    before_times = {}
    for md_file, url, aliases, git_date in test_files[:5]:  # Show first 5
        url_clean = url.strip('/')
        html_file = Path(PUBLIC_DIR) / url_clean / "index.html"
        mtime = get_file_mtime(html_file)
        before_times[str(html_file)] = mtime
        print(f"{html_file.name}: {mtime}")

    print("...\n")

    # Run the sync script
    print("=" * 70)
    print("RUNNING SYNC SCRIPT")
    print("=" * 70)

    try:
        result = subprocess.run(
            [sys.executable, "_scripts/sync-html-timestamps.py"],
            capture_output=True,
            text=True,
            timeout=300
        )

        # Show script output
        if result.stdout:
            print(result.stdout)

        if result.stderr:
            print("Errors/Warnings:")
            # Only show first 10 error lines to keep output manageable
            error_lines = result.stderr.split('\n')[:10]
            for line in error_lines:
                if line.strip():
                    print(f"  {line}")
            if len(result.stderr.split('\n')) > 10:
                print(f"  ... ({len(result.stderr.split('\n')) - 10} more errors)")

        if result.returncode != 0:
            print(f"\nWARNING: Script exited with code {result.returncode}")

    except subprocess.TimeoutExpired:
        print("ERROR: Script timed out after 5 minutes")
        sys.exit(1)
    except Exception as e:
        print(f"ERROR: Failed to run script: {e}")
        sys.exit(1)

    print()

    # Test each file
    print("=" * 70)
    print("AFTER SYNC - Verifying timestamps")
    print("=" * 70)

    total_files = 0
    total_urls = 0
    passed = 0
    failed = 0
    skipped = 0

    for md_file, url, aliases, git_date in test_files:
        total_files += 1
        results, error = test_file(md_file, git_date)

        if error:
            print(f"\n[SKIP] {md_file.name}: {error}")
            skipped += 1
            continue

        # Count results
        file_passed = 0
        file_failed = 0
        file_skipped = 0

        for result in results:
            total_urls += 1
            if result['status'] == 'PASS':
                passed += 1
                file_passed += 1
            elif result['status'] == 'FAIL':
                failed += 1
                file_failed += 1
            else:
                skipped += 1
                file_skipped += 1

        # Print summary for this file
        if file_failed > 0:
            status = "[FAIL]"
        elif file_skipped > 0 and file_passed == 0:
            status = "[SKIP]"
        else:
            status = "[PASS]"

        url_count = len(results)
        alias_count = len(aliases)

        print(f"{status} {md_file.name}")
        print(f"       URLs tested: {url_count} (1 main + {alias_count} aliases)")
        print(f"       Results: {file_passed} passed, {file_failed} failed, {file_skipped} skipped")

        # Show details for failures
        if file_failed > 0:
            for result in results:
                if result['status'] == 'FAIL':
                    print(f"         FAIL: {result['url']}")
                    print(f"               Expected: {result['expected']}")
                    print(f"               Actual:   {result['actual']}")
                    print(f"               Diff:     {result['diff']:.2f}s")

    # Final summary
    print("\n" + "=" * 70)
    print("TEST SUMMARY")
    print("=" * 70)
    print(f"Files tested:  {total_files}")
    print(f"URLs tested:   {total_urls} (includes main pages + aliases)")
    print(f"Results:       {passed} passed, {failed} failed, {skipped} skipped")
    print(f"Success rate:  {(passed/total_urls*100):.1f}%")

    if failed == 0:
        print("\n[SUCCESS] All timestamps updated correctly!")
        sys.exit(0)
    else:
        print(f"\n[FAILURE] {failed} URL(s) have incorrect timestamps")
        sys.exit(1)


if __name__ == "__main__":
    main()
