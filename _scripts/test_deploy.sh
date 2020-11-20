#!/bin/bash

set -ev

echo $HOME

if ([ "${TRAVIS_PULL_REQUEST}" != "false" -a "${TRAVIS_PULL_REQUEST_BRANCH}" != "MvMAWSTESTDONOTMERGE" ])
then
  echo 'Pull request, not testing deploying'
  exit 0
fi

if ([ "${TRAVIS_PULL_REQUEST}" != "false" -a "${TRAVIS_PULL_REQUEST_BRANCH}" == "MvMAWSTESTDONOTMERGE" ])
then
  echo 'Testing AWS deployment'
  cd $TRAVIS_BUILD_DIR/_site # change to root directory of the site
  find . -name '*.html' -type f | while read NAME ; do mv "${NAME}" "${NAME%.html}" ; done # Rename all .html files to remove the suffix
  #  echo Need to run the redirects first so that the dummy files are created and the old redirects are not deleted from AWS
  start=$SECONDS
  echo "Starting setup of redirection"
  chmod +x $TRAVIS_BUILD_DIR/_scripts/redirectaws.sh
  # $TRAVIS_BUILD_DIR/_scripts/redirectaws.sh
  chmod +x $TRAVIS_BUILD_DIR/_scripts/mark_test.sh
  $TRAVIS_BUILD_DIR/_scripts/mark_test.sh
  echo "Setting up redirects took $((SECONDS - start)) seconds"  
  # HUGO creates new files with a newer timestamp so this will always push all the html - this catches all single character changes at the expense of time. Rely on size only for images as these are unlikely to be the same size.
  start=$SECONDS
  echo "Starting sync of HTML files"
  aws s3 sync . s3://mendixtestdocumentation --delete --only-show-errors --exclude "*.[abcdefghijklmnnopqrstuvwxyz]*" --content-type text/html # Sync only html files (without file type) and set content type for html
  echo "Upload of HTML took $((SECONDS - start)) seconds"
  start=$SECONDS
  aws s3 sync . s3://mendixtestdocumentation --delete --size-only --exclude "*" --include "*.[abcdefghijklmnnopqrstuvwxyz]*" # Sync all other files and ensure that content type is not overwritten Just rely on size for all changes to these files.
  echo "Upload of non-html took $((SECONDS - start)) seconds"  
  exit 0
fi

if ([ "${TRAVIS_BRANCH}" == "development" ])
then
  echo 'Would do development deployment'
  echo 'cf push -f ./manifest_accp.yml'
  exit 0
fi

if ([ "${TRAVIS_BRANCH}" == "master" ])
then
  echo 'Would do production deployment'
  echo 'cf zero-downtime-push $CF_APP -f ./manifest_prod.yml'
  exit 0
fi

echo 'Not deployed'
exit 0
