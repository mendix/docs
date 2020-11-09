#!/bin/bash

set -ev

if ([ $GITHUB_EVENT_NAME == "pull_request" ])
then
  echo 'Pull request, not deploying'
  exit 0
fi

if ([ $BRANCH == "development" ])
then
  cf push -f ./manifest_accp.yml
  exit 0
fi

if ([ $BRANCH == "master" ])
then
  cf zero-downtime-push $CF_APP -f ./manifest_prod.yml
  exit 0
fi

echo 'Not deployed'
exit 0
