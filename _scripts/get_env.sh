#!/bin/bash

# Choose necessary argument according to the current branch.
if [[ $TRAVIS_BRANCH == 'development' ]]; then
    echo 'test'
elif [[ $TRAVIS_BRANCH == 'master' ]]; then
    echo 'production'
else
    exit 0
fi
