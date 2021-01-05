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
  cf push -f ./manifest_accp.yml
  echo 'Deploying development to AWS'
  TARGETAWSBUCKET="mendixtestdocumentation"
  chmod +x $TRAVIS_BUILD_DIR/_scripts/aws_deploy.sh
  source $TRAVIS_BUILD_DIR/_scripts/aws_deploy.sh # source ensures that script can read TARGETAWSBUCKET
  exit 0
fi

if ([ "${TRAVIS_BRANCH}" == "master" ])
then
  cf zero-downtime-push $CF_APP -f ./manifest_prod.yml
  echo 'Deploying master to AWS'
  TARGETAWSBUCKET="docs.mendix.com"
  chmod +x $TRAVIS_BUILD_DIR/_scripts/aws_deploy.sh
  source $TRAVIS_BUILD_DIR/_scripts/aws_deploy.sh # source ensures that script can read TARGETAWSBUCKET
  exit 0
fi

echo 'Not deployed'
exit 0
