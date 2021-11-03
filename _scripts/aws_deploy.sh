#!/bin/bash

set -ev

echo "Deploying to AWS bucket $TARGETAWSBUCKET"

# This depends on the following (secret) Environment Variables being set up in Travis-CI
# AWS key needs to have appropriate access to the TARGETAWSBUCKET
# AWS_ACCESS_KEY_ID
# AWS_SECRET_ACCESS_KEY
# AWS_DEFAULT_REGION
#

echo "Renaming all .html files to have no suffix"
cd $TRAVIS_BUILD_DIR/_site # change to root directory of the site
find . -name '*.html' -type f | while read NAME ; do mv "${NAME}" "${NAME%.html}" ; done # Rename all .html files to remove the suffix

# HUGO creates new files with a newer timestamp so this will always push all the html - this catches all single character changes at the expense of time. Rely on size only for images as these are unlikely to be the same size.
start=$SECONDS
echo "Starting sync of HTML files"
aws s3 sync . s3://$TARGETAWSBUCKET --delete --only-show-errors --exclude "*.[abcdefghijklmnnopqrstuvwxyz]*" --content-type text/html # Sync only html files (without file type) and set content type for html
echo "Upload of HTML took $((SECONDS - start)) seconds"

start=$SECONDS
echo "Starting sync of non-HTML files"  
aws s3 sync . s3://$TARGETAWSBUCKET --delete --size-only --exclude "*" --include "*.[abcdefghijklmnnopqrstuvwxyz]*" # Sync all other files and ensure that content type is not overwritten Just rely on size for all changes to these files.
echo "Upload of non-html took $((SECONDS - start)) seconds"  

exit 0