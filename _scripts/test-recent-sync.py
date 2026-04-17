#!/usr/bin/env python3
"""Test the sync-timestamps-recent.py script"""

import subprocess
import sys
from datetime import datetime
from pathlib import Path

PUBLIC_DIR = "public"
BASELINE_DATE = datetime(2000, 1, 1, 0, 0, 0)


def get_file_mtime(file_path):
    """Get file modification time."""
    if file_path.exists():
        return datetime.fromtimestamp(file_path.stat().st_mtime)
    return None


def main():
    print("=" * 70)
    print("TESTING sync-timestamps-recent.py")
    print("=" * 70)

    public_path = Path(PUBLIC_DIR)

    if not public_path.exists():
        print(f"\nERROR: {PUBLIC_DIR} directory not found!")
        print("Please run 'hugo' to build the site first.")
        sys.exit(1)

    # Sample some files to check before running
    test_files = [
        "academy/purchasing-exams/manage-exam-admins/index.html",
        "community-tools/purchasing-exams/manage-exam-admins/index.html",  # alias
        "developerportal/deploy/mobileapp/index.html",
        "sitemap.xml",
        "robots.txt"
    ]

    print("\n--- BEFORE SYNC ---")
    before_times = {}
    for file_rel in test_files:
        file_path = public_path / file_rel
        if file_path.exists():
            mtime = get_file_mtime(file_path)
            before_times[file_rel] = mtime
            print(f"{file_rel}: {mtime}")
        else:
            print(f"{file_rel}: NOT FOUND")

    # Run the sync script
    print("\n" + "=" * 70)
    print("RUNNING SYNC SCRIPT")
    print("=" * 70)

    try:
        result = subprocess.run(
            [sys.executable, "_scripts/sync-timestamps-recent.py"],
            capture_output=True,
            text=True,
            timeout=120
        )

        print(result.stdout)

        if result.stderr:
            print("\nWarnings/Errors:")
            print(result.stderr)

        if result.returncode != 0:
            print(f"\nScript exited with code {result.returncode}")

    except subprocess.TimeoutExpired:
        print("ERROR: Script timed out")
        sys.exit(1)
    except Exception as e:
        print(f"ERROR: {e}")
        sys.exit(1)

    # Check files after
    print("\n" + "=" * 70)
    print("VERIFICATION")
    print("=" * 70)

    for file_rel in test_files:
        file_path = public_path / file_rel
        if not file_path.exists():
            continue

        after_time = get_file_mtime(file_path)
        before_time = before_times.get(file_rel)

        print(f"\n{file_rel}:")
        print(f"  Before: {before_time}")
        print(f"  After:  {after_time}")

        if after_time:
            diff_from_baseline = abs((after_time - BASELINE_DATE).total_seconds())
            if diff_from_baseline < 2:
                print(f"  Status: [BASELINE] Set to {BASELINE_DATE.date()}")
            else:
                print(f"  Status: [RECENT] Has git timestamp")

    # Count how many files have each timestamp
    print("\n" + "=" * 70)
    print("STATISTICS")
    print("=" * 70)

    baseline_count = 0
    recent_count = 0
    other_count = 0

    for file_path in public_path.rglob("*"):
        if not file_path.is_file():
            continue

        mtime = get_file_mtime(file_path)
        if mtime:
            diff = abs((mtime - BASELINE_DATE).total_seconds())
            if diff < 2:
                baseline_count += 1
            elif mtime.year >= 2020:  # Assume recent if after 2020
                recent_count += 1
            else:
                other_count += 1

    total = baseline_count + recent_count + other_count

    print(f"Total files:        {total:,}")
    print(f"Baseline (2000):    {baseline_count:,} ({baseline_count/total*100:.1f}%)")
    print(f"Recent (git dates): {recent_count:,} ({recent_count/total*100:.1f}%)")
    print(f"Other:              {other_count:,} ({other_count/total*100:.1f}%)")

    print("\n" + "=" * 70)
    expected_recent_pct = 6  # ~6% based on analysis
    actual_recent_pct = recent_count / total * 100

    if actual_recent_pct < 15:  # Allow some margin
        print("[SUCCESS] Timestamp distribution looks correct!")
        print(f"  Expected ~{expected_recent_pct}% recent files, got {actual_recent_pct:.1f}%")
    else:
        print("[WARNING] More recent files than expected")
        print(f"  Expected ~{expected_recent_pct}% recent files, got {actual_recent_pct:.1f}%")


if __name__ == "__main__":
    main()
