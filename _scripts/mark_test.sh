#!/bin/bash

set -ev

objectredirect () {
  echo "We will make a local file at ./_site/$1"
 echo "We will make a redirect on $1 to $2"
}


objectredirect 'howtogeneral/bestpractices/ux-best-practices' '/howto/front-end/ux-best-practices'
objectredirect 'howtogeneral/bestpractices/best-practices-security-and-improvements-for-mendix-applications' '/howto/security/best-practices-security'
objectredirect 'howtogeneral/bestpractices/best-practices-for-app-performance-in-mendix-7' '/howto/general/community-best-practices-for-app-performance'
objectredirect 'howto/ux/configuring-your-theme' '/howto/front-end/configuring-your-theme'

exit 0
