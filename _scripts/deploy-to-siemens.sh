#!/bin/bash

set -ex

BUCKET=scp-prod-source
SIEMENS_EMAIL=mark.van.ments@siemens.com
RELEASE_ID=PL20260323299104942
LANG_CODE=en-US
TARGETAWSBUCKET=$BUCKET/$SIEMENS_EMAIL/$RELEASE_ID/$LANG_CODE/

echo "Deploying to Siemens AWS bucket $TARGETAWSBUCKET"



mkdir -p Built/Mendix-Docs/.meta
cp static/siemens-support-center-metadata/content.xlsx Built/Mendix-Docs/.meta/

cd Built
pwd
ls
# the AWS CLI is part of the standard GitHub runner
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
start=$SECONDS
echo "Starting sync to AWS"
aws s3 sync . s3://$TARGETAWSBUCKET --delete --only-show-errors --exclude "*.png" $DRY_RUN # sync all files except png files
aws s3 sync . s3://$TARGETAWSBUCKET --delete --only-show-errors --size-only --exclude "*" --include "*.png" $DRY_RUN # sync all png files
echo "Upload to AWS took $((SECONDS - start)) seconds"

exit 0