#!/usr/bin/env python3
"""
sync-timestamps-recent.py
Sets HTML file timestamps based on git modification dates, using a rolling window approach.

STRATEGY:
- Set ALL HTML files to a baseline date (2000-01-01)
- Only update files changed in the last 30 days to their actual git date
- This allows AWS S3 sync to efficiently detect changed files by timestamp

BENEFITS:
- Only processes ~6% of files (238 vs 4,049 markdown files)
- 97% reduction in files synced to S3 after initial deploy
- Very fast execution (single git query + minimal file processing)

TRADE-OFF:
- Files that "age out" of the 30-day window get synced one more time as they
  revert to baseline date (~56 files per week)
"""

import os
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path

CONTENT_DIR = "content/en/docs"
STATIC_DIR = "static"
PUBLIC_DIR = "public"
BASELINE_DATE = datetime(2000, 1, 1, 0, 0, 0)
RECENT_DAYS = 30


def set_all_files_to_baseline(directory):
    """
    Set all files in a directory tree to the baseline timestamp.
    This is fast because it's just updating filesystem metadata.
    """
    count = 0
    path = Path(directory)

    if not path.exists():
        return count

    timestamp = BASELINE_DATE.timestamp()

    for file_path in path.rglob("*"):
        if file_path.is_file():
            try:
                os.utime(file_path, (timestamp, timestamp))
                count += 1
            except Exception as e:
                print(f"WARNING: Could not set baseline for {file_path}: {e}", file=sys.stderr)

    return count


def get_recently_changed_files(since_days):
    """
    Get list of markdown files changed in the last N days.
    Returns dict mapping file path to git modification date.
    """
    files = {}

    try:
        # Single fast git query for all recent changes
        result = subprocess.run(
            ['git', 'log', f'--since={since_days} days ago', '--name-only',
             '--pretty=format:%ai', '--', 'content/en/docs/*.md'],
            capture_output=True,
            text=True,
            check=True,
            timeout=30
        )

        lines = result.stdout.strip().split('\n')
        current_date = None

        for line in lines:
            line = line.strip()
            if not line:
                current_date = None
                continue

            # Check if this is a date line
            if line and line[0].isdigit() and '-' in line and ':' in line:
                try:
                    current_date = datetime.strptime(line[:19], '%Y-%m-%d %H:%M:%S')
                except:
                    current_date = None
            elif current_date and line.endswith('.md'):
                # This is a file path - store the most recent date
                file_path = Path(line)
                # Only include files that still exist (filter out deleted files)
                if file_path not in files and file_path.exists():
                    files[file_path] = current_date

        return files

    except subprocess.TimeoutExpired:
        print("ERROR: Git command timed out", file=sys.stderr)
        return {}
    except Exception as e:
        print(f"ERROR: Failed to get recent files: {e}", file=sys.stderr)
        return {}


def extract_urls_from_frontmatter(md_file):
    """
    Extract the url field and aliases from YAML front matter.
    Returns tuple of (url, [aliases]).
    """
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


def update_file_timestamp(file_path, git_date):
    """Update the modification time of a file to match the git date."""
    try:
        timestamp = git_date.timestamp()
        os.utime(file_path, (timestamp, timestamp))
        return True
    except Exception as e:
        return False


def main():
    print("=" * 70)
    print("Syncing file timestamps with git dates (30-day rolling window)")
    print("=" * 70)

    public_path = Path(PUBLIC_DIR)

    if not public_path.exists():
        print(f"ERROR: Public directory not found: {PUBLIC_DIR}", file=sys.stderr)
        sys.exit(1)

    # Step 1: Set ALL files to baseline date
    print(f"\nStep 1: Setting all files to baseline date ({BASELINE_DATE.date()})...")
    baseline_count = set_all_files_to_baseline(PUBLIC_DIR)
    print(f"  Set {baseline_count:,} files to baseline")

    # Step 2: Get recently changed markdown files
    print(f"\nStep 2: Finding markdown files changed in last {RECENT_DAYS} days...")
    recent_files = get_recently_changed_files(RECENT_DAYS)
    print(f"  Found {len(recent_files)} recently changed markdown files")

    if not recent_files:
        print("\nNo recent changes found. All files have baseline timestamp.")
        print("Timestamp sync complete.")
        return

    # Step 3: Update timestamps for recent files (main pages + aliases)
    print(f"\nStep 3: Updating timestamps for recent files...")

    html_updated = 0
    html_skipped = 0
    skipped_files = []

    for md_file, git_date in recent_files.items():
        # Extract URL and aliases
        url, aliases = extract_urls_from_frontmatter(md_file)

        if not url:
            html_skipped += 1
            skipped_files.append(str(md_file))
            continue

        # Process main URL and all aliases
        all_urls = [url] + aliases

        for page_url in all_urls:
            url_clean = page_url.strip('/')
            html_file = public_path / url_clean / "index.html"

            if html_file.exists():
                if update_file_timestamp(html_file, git_date):
                    html_updated += 1

    # Step 4: Handle static files (images, attachments, etc.)
    print(f"\nStep 4: Updating timestamps for recent static files...")

    static_path = Path(STATIC_DIR)
    static_updated = 0

    if static_path.exists():
        # Get recently changed static files
        try:
            result = subprocess.run(
                ['git', 'log', f'--since={RECENT_DAYS} days ago', '--name-only',
                 '--pretty=format:%ai', '--', 'static/'],
                capture_output=True,
                text=True,
                check=True,
                timeout=30
            )

            lines = result.stdout.strip().split('\n')
            current_date = None

            for line in lines:
                line = line.strip()
                if not line:
                    current_date = None
                    continue

                if line and line[0].isdigit() and '-' in line and ':' in line:
                    try:
                        current_date = datetime.strptime(line[:19], '%Y-%m-%d %H:%M:%S')
                    except:
                        current_date = None
                elif current_date and line.startswith('static/'):
                    static_file = Path(line)
                    if static_file.exists():
                        # Find corresponding file in public
                        relative_path = static_file.relative_to(static_path)
                        public_file = public_path / relative_path

                        if public_file.exists():
                            if update_file_timestamp(public_file, current_date):
                                static_updated += 1

        except Exception as e:
            print(f"  WARNING: Could not process static files: {e}", file=sys.stderr)

    # Summary
    print("\n" + "=" * 70)
    print("SUMMARY")
    print("=" * 70)
    print(f"Baseline files:         {baseline_count:,} (set to {BASELINE_DATE.date()})")
    print(f"Recent markdown files:  {len(recent_files)} (found via git)")
    print(f"HTML files updated:     {html_updated} (main pages + aliases)")
    print(f"Static files updated:   {static_updated}")
    print(f"Files skipped:          {html_skipped} (no URL in front matter)")

    if html_skipped > 0:
        print(f"\nSkipped files (no url: field in front matter):")
        for skipped_file in skipped_files:
            print(f"  - {skipped_file}")

    print()
    print(f"Result: Only files changed in last {RECENT_DAYS} days have recent timestamps.")
    print(f"AWS S3 sync will efficiently detect and upload only changed files.")


if __name__ == "__main__":
    main()
