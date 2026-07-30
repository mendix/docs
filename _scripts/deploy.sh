#!/bin/bash

set -ev

# TARGET_BRANCH is set by the CI workflow — see .github/workflows/build-and-deploy.yml
if [ "${TARGET_BRANCH}" == "development" ]
then
  echo 'Deploying development to AWS'
  TARGETAWSBUCKET="mendixtestdocumentation"
fi

if [ "${TARGET_BRANCH}" == "production" ]
then
  echo 'Deploying production to AWS'
  TARGETAWSBUCKET="docs.mendix.com"
fi

if [ -z "${TARGETAWSBUCKET}" ]
then
  echo "ERROR: TARGET_BRANCH is '${TARGET_BRANCH}' — no matching bucket. Exiting."
  exit 1
fi

echo "Deploying to AWS bucket $TARGETAWSBUCKET"

cd public
pwd
aws --version

# Requires the following environment variables (set as GitHub Actions secrets):
# AWS_ACCESS_KEY_ID
# AWS_SECRET_ACCESS_KEY
# AWS_DEFAULT_REGION
#
# HUGO creates new files with a newer timestamp except those in the /static folder
# so this will always push all the html, but only changed /static files.
#
# Need to use old method - or a new method to reduce number of docs transferred.
# see https://stackoverflow.com/questions/1964470/whats-the-equivalent-of-subversions-use-commit-times-for-git/13284229#13284229 for a possibility
#
DRYRUN_FLAG=""
if [ "${DRY_RUN}" = "true" ]
then
  echo "DRY RUN — S3 sync will simulate without uploading anything"
  DRYRUN_FLAG="--dryrun"
fi

start=$SECONDS
echo "Starting sync to AWS"
aws s3 sync . s3://$TARGETAWSBUCKET --delete --only-show-errors --exclude "*.png" $DRYRUN_FLAG # sync all files except png files
aws s3 sync . s3://$TARGETAWSBUCKET --delete --only-show-errors --size-only --exclude "*" --include "*.png" $DRYRUN_FLAG # sync all png files
echo "Upload to AWS took $((SECONDS - start)) seconds"

exit 0