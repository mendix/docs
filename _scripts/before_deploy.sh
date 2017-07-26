#!/bin/bash

set -ev

if ([ $TRAVIS_PULL_REQUEST == "false" ])
then
  if [[ $TRAVIS_BRANCH == 'development' ]]; then
      echo 'Test'
      cf api $CF_API
      cf login -u $CF_USERNAME -p $CF_PASSWORD -o $CF_ORGANIZATION -s $CF_SPACE
      cf -v
  elif [[ $TRAVIS_BRANCH == 'master' ]]; then
      echo 'Installing autopilot'
      cf api $CF_API
      cf login -u $CF_USERNAME -p $CF_PASSWORD -o $CF_ORGANIZATION -s $CF_SPACE
      cf -v
      # cf install-plugin 'https://github.com/contraband/autopilot/releases/download/0.0.2/autopilot-linux' -f
      cf install-plugin "$HOME/autopilot-linux" -f
  else
      exit 0
  fi
fi
