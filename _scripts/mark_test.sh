#!/bin/bash

set -ev

echo "HOME is $HOME"
echo "TRAVIS_BUILD_DIR is $TRAVIS_BUILD_DIR"
pwd

#
# Delete the no_new_redirects.lock file in the _scripts directory if you change any redirects here
#
NONEWREDIRECTS="$TRAVIS_BUILD_DIR/_scripts/no_new_redirects.lock"
echo $NONEWREDIRECTS

#
# If no_new_redirects file exists, then we don't have to set up new redirects for AWS
# We just make a set of empty files locally so that the --delete option on the aws sync doesn't delete the redirects
#

if [ -f $NONEWREDIRECTS ] # [ -f $NONEWREDIRECTS]
then
  # Do not need to upload new redirects to AWS
  MAKEREDIRECT="false"
else
  # Need to upload new redirects to AWS - create a lock file to ensure we don't do it next time
  echo "here we make a $NONEWDIRECTS FILE"
  touch $NONEWREDIRECTS
  # how do we put this back into the repo?
  MAKEREDIRECT="true"
fi

objectredirect () {
#  echo "We will make a local file at $TRAVIS_BUILD_DIR/_site/$1"
#  put an old date on it to stop it being uploaded with sync
  mkdir -pv $(dirname $TRAVIS_BUILD_DIR/_site/$1)
  touch -t 202001010001 $TRAVIS_BUILD_DIR/_site/$1
  if ([ "${MAKEREDIRECT}" == "true" ])
  # Only make the redirects if no_new_redirects.lock wasn't there as it takes about 10 minutes and isn't needed if the redirects file hasn't changed
  then
    aws s3api put-object --bucket mendixtestdocumentation --key $1 --content-type text/html --website-redirect-location $2
  fi
}

objectredirect 'howtogeneral/bestpractices/ux-best-practices' '/howto/front-end/ux-best-practices'
objectredirect 'howtogeneral/bestpractices/best-practices-security-and-improvements-for-mendix-applications' '/howto/security/best-practices-security'
objectredirect 'howtogeneral/bestpractices/best-practices-for-app-performance-in-mendix-7' '/howto/general/community-best-practices-for-app-performance'
objectredirect 'howto/ux/configuring-your-theme' '/howto/front-end/configuring-your-theme'
objectredirect 'refguide7/static-label-(document-template)' '/refguide/static-label-document-template'
objectredirect 'refguide7/table-(document-template)' '/refguide/table-document-template'
objectredirect 'refguide7/template-grid-(document-template)' '/refguide/template-grid-document-template'
objectredirect 'refguide7/title-(document-template)' '/refguide/title-document-template'

exit 0
