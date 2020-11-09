#!/bin/bash

# Choose necessary argument according to the current branch.
if [[ $BRANCH == 'development' ]]; then
    echo 'test'
elif [[ $BRANCH == 'master' ]]; then
    echo 'production'
else
    echo 'test'
fi
