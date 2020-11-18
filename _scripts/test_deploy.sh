#!/bin/bash

set -ev

echo $TRAVIS_BRANCH
echo $TRAVIS_PULL_REQUEST
echo $TRAVIS_PULL_REQUEST_BRANCH


if ([ "${TRAVIS_PULL_REQUEST}" != "false" -a "${TRAVIS_PULL_REQUEST_BRANCH}" != "MvMAWSTESTDONOTMERGE" ])
then
  echo 'Pull request, not testing deploying'
  exit 0
fi

if ([ "${TRAVIS_PULL_REQUEST}" != "false" -a "${TRAVIS_PULL_REQUEST_BRANCH}" == "MvMAWSTESTDONOTMERGE" ])
then
  echo 'Testing AWS deployment'
  echo $AWS_DEFAULT_REGION
  pwd
  aws --help
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
