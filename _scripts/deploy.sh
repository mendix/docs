#!/bin/bash

set -ev

if ([ "${TRAVIS_PULL_REQUEST}" == "true" ])
then
  echo 'Pull request, not deploying'
  exit 0
fi

if ([ "${TRAVIS_BRANCH}" == "development" ])
then
  cf push -f ./manifest_accp.yml
  exit 0
fi

if ([ "${TRAVIS_BRANCH}" == "master" ])
then
  cf zero-downtime-push $CF_APP -f ./manifest_prod.yml
  exit 0
fi

echo 'Not deployed'
exit 0
