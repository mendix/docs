#!/bin/bash

set -ev

# TRAVIS_PULL_REQUEST is either the PR number or "false"
if ([ "${TRAVIS_PULL_REQUEST}" != "false" ])
then
  echo 'Pull request, not deploying'
  exit 0
fi

if ([ "${TRAVIS_BRANCH}" == "development" ])
then
  echo 'Deploying development to AWS'
  TARGETAWSBUCKET="mendixtestdocumentation"
fi

if ([ "${TRAVIS_BRANCH}" == "production" ])
then
  echo 'Deploying production to AWS'
  TARGETAWSBUCKET="docs.mendix.com"
fi

echo "Deploying to AWS bucket $TARGETAWSBUCKET"

# Sync HTML file timestamps with git modification dates (30-day rolling window)
# This allows AWS S3 sync to use timestamps to determine which files need updating
python $TRAVIS_BUILD_DIR/_scripts/sync-timestamps-recent.py

cd $TRAVIS_BUILD_DIR/public
pwd
aws --version

# This depends on the following (secret) Environment Variables being set up in Travis-CI
# AWS key needs to have appropriate access to the TARGETAWSBUCKET
# AWS_ACCESS_KEY_ID
# AWS_SECRET_ACCESS_KEY
# AWS_DEFAULT_REGION
#
# File timestamps are now managed by sync-timestamps-recent.py:
# - Files changed in last 30 days have their actual git modification dates
# - All other files have a baseline date (2000-01-01)
# This allows AWS S3 sync to efficiently detect changed files by timestamp comparison
#
start=$SECONDS
echo "Starting sync to AWS (using timestamps to detect changes)"
aws s3 sync . s3://$TARGETAWSBUCKET --delete --exact-timestamps --only-show-errors
echo "Upload to AWS took $((SECONDS - start)) seconds"

# Go back to the build directory so state is the same

cd $TRAVIS_BUILD_DIR
pwd

# Algolia depends on the following (secret) Environment Variables being set up in Travis-CI
# Algolia key needs to have appropriate access to the DOCS index
# ALGOLIA_ADMIN_API_KEY
# ALGOLIA_APPLICATION_ID
# ALGOLIA_INDEX_NAME
#

if ([ "${TRAVIS_BRANCH}" == "production" ])
then
  python --version
  python _scripts/pushmxdocsalgolia.py
fi


exit 0
