#!/bin/bash

set -ev

echo "HOME is $HOME"
pwd

#
# Delete this file in the _scripts directory if you change any redirects here
#
NONEWREDIRECTS="a file name"

if [ 1 == 1 ] # [ -f $NONEWREDIRECTS]
then
  MAKEREDIRECT="false"
else
  echo "here we make a NONEWDIRECTS FILE"
  MAKEREDIRECT="true"
fi

objectredirect () {
  echo "We will make a local file at ./_site/$1"
  echo "here we make a directory mkdir -p xxx"
  echo "here we would make a new file" # : > ./_site/$1
  if ([ "${MAKEREDIRECT}" == "true" ])
  then
    echo "We will make a redirect on $1 to $2"
    echo  aws s3api put-object --bucket mendixtestdocumentation --key $1 --content-type text/html --website-redirect-location $2  fi
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
