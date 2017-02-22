#!/bin/bash

set -ev

if (echo "$TRAVIS_COMMIT_MESSAGE" | grep -F -q "[skip algolia]")
then
  echo "[skip algolia] has been found, exiting"
  exit 0
else
  echo "[skip algolia] has not been found, continuing"
fi

if ([ $TRAVIS_BRANCH == "master" ] && [ $TRAVIS_PULL_REQUEST == "false" ])
then
  gulp algolia
  echo 'Pushed to Algolia'
else
  echo "Not pushed to Algolia, we're not on master and/or this is a pull request"
fi
