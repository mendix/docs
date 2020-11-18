#!/bin/bash

set -ev

# TRAVIS_PULL_REQUEST is never true - it is either false or the number of the pull request. Luckily this test was never made as Travis does not run the deploy section for pull requests.
# changed "if ([ "${TRAVIS_PULL_REQUEST}" == "true" ])" to "if ([ "${TRAVIS_PULL_REQUEST}" != "false" ])""
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
