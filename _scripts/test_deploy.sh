#!/bin/bash

set -ev

if ([ "${TRAVIS_PULL_REQUEST}" != "false" -a "${TRAVIS_PULL_REQUEST_BRANCH}" != "MvMAWSTESTDONOTMERGE" ])
then
  echo 'Pull request, not testing deploying'
  exit 0
fi

if ([ "${TRAVIS_PULL_REQUEST}" != "false" -a "${TRAVIS_PULL_REQUEST_BRANCH}" == "MvMAWSTESTDONOTMERGE" ])
then
  echo 'Testing AWS deployment'
  cd ./_site # change to root directory of the site
  find . -name '*.html' -type f | while read NAME ; do mv "${NAME}" "${NAME%.html}" ; done # Rename all .html files to remove the suffix
  aws s3 sync . s3://mendixtestdocumentation --delete --exclude *.[abcdefghijklmnnopqrstuvwxyz]* --content-type text/html # Sync all html files (without suffix) and ensure content type is correct
  aws s3 sync . s3://mendixtestdocumentation --delete --exclude * --include *.[abcdefghijklmnnopqrstuvwxyz]* # Sync all other files and ensure that content type is not overwritten
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
