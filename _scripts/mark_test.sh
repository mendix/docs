#!/bin/bash

set -ev

#
# Can we set up something (travis cache?) to ensure that this change doesn't have to be made manually.
# Can always leave the switch at MAKEREDIRECT="true" but this will slow down deployment unnecessarily.
# Currently have to rely on writers making the change manually after the change is successful
#

#########################################################################################################
#                                                                                                       #
# Set MAKEREDIRECT to "true" when you make changes to any redirects                                     #
# Set MAKEREDIRECT to "false" once redirects have been pushed to development AND master                 #
#                                                                                                       #
#########################################################################################################

MAKEREDIRECT="true"

echo "HOME is $HOME"
echo "TRAVIS_BUILD_DIR is $TRAVIS_BUILD_DIR"
echo "Target AWS bucket is $TARGETAWSBUCKET"

objectredirect () {
#  echo "We will make a local file at $TRAVIS_BUILD_DIR/_site/$1"
#  put an old date on it to stop it being uploaded with sync
  mkdir -pv $(dirname $TRAVIS_BUILD_DIR/_site/$1)
  touch -t 202001010001 $TRAVIS_BUILD_DIR/_site/$1
  if ([ "${MAKEREDIRECT}" == "true" ])
  # Only make the redirects if if MAKEDIRECT is "true" as it takes about 10 minutes and isn't needed if the redirects file hasn't changed
  then
    aws s3api put-object --bucket $TARGETAWSBUCKET --key $1 --content-type text/html --website-redirect-location $2
  fi
}

#########################################################################################################
#                                                                                                       #
# Set up a redirect using objectredirect '{original}' '{redirect to}'                                   #
# Remember to set MAKEREDIRECT to "true" until redirects have been pushed to development AND master     #
#                                                                                                       #
#########################################################################################################

objectredirect 'howtogeneral/bestpractices/ux-best-practices' '/developerportal/deploy/'
objectredirect 'howtogeneral/bestpractices/best-practices-security-and-improvements-for-mendix-applications' '/howto/security/best-practices-security'
objectredirect 'howtogeneral/bestpractices/best-practices-for-app-performance-in-mendix-7' '/howto/general/community-best-practices-for-app-performance'
objectredirect 'howto/ux/configuring-your-theme' '/howto/front-end/configuring-your-theme'
objectredirect 'refguide7/static-label-(document-template)' '/refguide/static-label-document-template'
objectredirect 'refguide7/table-(document-template)' '/refguide/table-document-template'
objectredirect 'refguide7/template-grid-(document-template)' '/refguide/template-grid-document-template'
objectredirect 'refguide7/title-(document-template)' '/developerportal/deploy/'

exit 0

# convert from redirects.js using this regular expression
# ^\s+\{\n\s+from: "/(.+)",\n\s+to: "(.+)"\n\s+\},
# and replace with
# objectredirect '$1' '$2'\n
#
# Then change the comments
# ^(\s+\/\*)
# #$1
# and
# ^(\s+\*)
# #$1
#
# check for commands still outstanding ({) and commands containing \