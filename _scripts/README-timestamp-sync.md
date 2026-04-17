# Timestamp Sync for AWS S3 Deployment

## Problem

Hugo builds give all HTML files the current build timestamp, causing AWS S3 sync to upload **all** files on every deployment (~25,000 files), even when only a few pages changed. This wastes time and bandwidth.

## Solution

Use **git modification dates** to set HTML file timestamps, allowing AWS S3 sync to detect which files actually changed.

### Approach: 30-Day Rolling Window

Instead of setting exact git dates on all files (slow), we use a rolling window:

1. **Set all files to baseline** date (2000-01-01)
2. **Update only recent files** (changed in last 30 days) to their actual git dates
3. **AWS S3 sync** uses timestamps to detect changes

## Benefits

- **97% reduction** in files synced per deployment (~294 vs 10,000+ files)
- **Very fast execution** (~10 seconds vs several minutes)
- **Simple git query** - one command gets all recent changes
- **Self-correcting** - files appear in the 30-day window when changed

## How It Works

### File Lifecycle Example

**Day 0 - File is changed:**
- Git date: 2024-04-17
- Local timestamp: 2024-04-17
- S3 timestamp: (old date)
- **Result: Syncs to S3** ✓

**Day 1-29 - File unchanged:**
- Git date: 2024-04-17
- Local timestamp: 2024-04-17 (still in 30-day window)
- S3 timestamp: 2024-04-17
- **Result: No sync** ✓

**Day 31 - File ages out of window:**
- Git date: 2024-04-17 (still in git history)
- Local timestamp: 2000-01-01 (reverted to baseline)
- S3 timestamp: 2024-04-17
- **Result: Syncs once** (acceptable trade-off)

**Day 32+ - File stable:**
- Local timestamp: 2000-01-01
- S3 timestamp: 2000-01-01
- **Result: No sync** ✓

### Statistics (based on current repo)

- Total markdown files: 4,049
- Files changed in last 30 days: 238 (5.9%)
- Files with baseline timestamp: 3,811 (94.1%)
- Files "aging out" per week: ~56
- **Net result: ~294 files synced per deploy vs 25,000+**

## Files

### Main Script
- `_scripts/sync-timestamps-recent.py` - Sets timestamps using 30-day rolling window

### Test Script
- `_scripts/test-recent-sync.py` - Verifies the timestamp sync works correctly

### Deployment
- `_scripts/deploy-new.sh` - Updated deployment script using new approach

## Usage

### In Deploy Script (Travis CI)

```bash
# After Hugo build, before AWS sync
python _scripts/sync-timestamps-recent.py

# Then run AWS sync
aws s3 sync . s3://$BUCKET --delete
```

### Local Testing

```bash
# Build site
hugo

# Run timestamp sync
python _scripts/sync-timestamps-recent.py

# Test it worked
python _scripts/test-recent-sync.py
```

## Configuration

Edit `sync-timestamps-recent.py` to adjust:

```python
RECENT_DAYS = 30  # Increase for more files with git dates, decrease for faster execution
BASELINE_DATE = datetime(2000, 1, 1, 0, 0, 0)  # Baseline for old files
```

## First Deployment

On the first deployment with this system:

**Option 1: Accept one-time full sync (recommended)**
- All files will sync once as timestamps change
- Subsequent deployments are efficient
- No special handling needed

**Option 2: Use --size-only for first deploy**
```bash
# First deploy only - ignore timestamps
aws s3 sync . s3://$BUCKET --size-only --delete

# Subsequent deploys - use timestamps
aws s3 sync . s3://$BUCKET --delete
```

## What Files Are Handled

### ✓ Updated with git dates (if recent)
- HTML pages from markdown (based on `url:` field)
- Alias pages (based on `aliases:` field)
- Static files (images, attachments, fonts, etc.)

### ✗ Always have baseline date
- Generated files: `sitemap.xml`, `robots.txt`, `rss.xml`, `404.html`
- CSS/JS bundles from Hugo/themes
- These files sync on every deploy (acceptable - they're small)

## Troubleshooting

### Script exits with code 1
- Check stderr for ERROR messages
- Usually means markdown files without `url:` field in front matter
- These files are skipped (logged but not fatal)

### Too many files syncing
- Check the statistics output from test script
- Should see ~95% baseline, ~5% recent
- If higher, increase `RECENT_DAYS`

### Files not syncing when they should
- Check if file is in git history: `git log -- path/to/file.md`
- Verify file was changed recently: `git log --since="30 days ago" -- path/to/file.md`
- Check HTML file exists: `public/path/to/page/index.html`

## Comparison with Previous Approach

### Old Approach (sync-html-timestamps.py)
- Set exact git date on every file
- Required 10,000+ git log calls
- Took several minutes to run
- Complex batching logic needed

### New Approach (sync-timestamps-recent.py)
- Set baseline on all files, git date on recent files only
- Single git log call for recent changes
- Takes ~10 seconds to run
- Simple and maintainable

**Result: 95% faster execution, 97% fewer files synced**
