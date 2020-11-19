#!/bin/bash

# convert from redirects.js using this regular expression
# ^\s+\{\n\s+from: "(.+)",\n\s+to: "(.+)"\n\s+\},
# and replace with
# aws s3api put-object --bucket mendixtestdocumentation --key $1 --content-type text/html --website-redirect-location $2\n
#
# Then change the comments
# ^(\s+\/\*)
# #$1
# and
# ^(\s+\*)
# #$1
#
# check for commands still outstanding ({) and commands containing \
#
#	/****************************************************
#     * PERMANENT REDIRECTS FOR DOCUMENTS
#     ****************************************************/
#	 /****************************************************
#     * Documentation Site (permanent, unmapped) 
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /docs/Overview --content-type text/html --website-redirect-location /
aws s3api put-object --bucket mendixtestdocumentation --key /docs/ --content-type text/html --website-redirect-location /
#	/****************************************************
#     * Studio Pro Guide (permanent, mapped)
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/mindsphere/mindsphere-module-details --content-type text/html --website-redirect-location /partners/siemens/mindsphere-module-details
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/customizing-phonegap-build-packages --content-type text/html --website-redirect-location /howto/mobile/customizing-phonegap-build-packages
#	/****************************************************
#     * Reference Guide version 7 (permanent, unmapped)
#     ****************************************************/	
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/moving-from-6-to-7 --content-type text/html --website-redirect-location /refguide7/moving-from-6-to-7
#	/****************************************************
#     * How-to's (permanent, unmapped)
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /howtogeneral/bestpractices/ux-best-practices --content-type text/html --website-redirect-location /howto/front-end/ux-best-practices
aws s3api put-object --bucket mendixtestdocumentation --key /howtogeneral/bestpractices/best-practices-security-and-improvements-for-mendix-applications --content-type text/html --website-redirect-location /howto/security/best-practices-security
aws s3api put-object --bucket mendixtestdocumentation --key /howtogeneral/bestpractices/best-practices-for-app-performance-in-mendix-7 --content-type text/html --website-redirect-location /howto/general/community-best-practices-for-app-performance
aws s3api put-object --bucket mendixtestdocumentation --key /howto/ux/configuring-your-theme --content-type text/html --website-redirect-location /howto/front-end/configuring-your-theme
#	/****************************************************
#     * How-to's version 7 (permanent, unmapped)
#     ****************************************************/	
aws s3api put-object --bucket mendixtestdocumentation --key /howto7/ux/configuring-your-theme --content-type text/html --website-redirect-location /howto7/front-end/configuring-your-theme
#	/****************************************************
#     * Studio Guide (permanent, unmapped)
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /howto/tutorials/ --content-type text/html --website-redirect-location /studio/general
aws s3api put-object --bucket mendixtestdocumentation --key /howto/tutorials/mendix-tutorials --content-type text/html --website-redirect-location /studio/general
#	/****************************************************
#     * Developer Portal Guide (permanent, unmapped) 
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /howtogeneral/mendixcloud/trends --content-type text/html --website-redirect-location /developerportal/operate/trends
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/operate/mendix-cloud-status --content-type text/html --website-redirect-location /developerportal/deploy/mendix-cloud-status
aws s3api put-object --bucket mendixtestdocumentation --key /community/tools/the-mendix-job-board --content-type text/html --website-redirect-location /developerportal/community-tools/mendix-job-board
aws s3api put-object --bucket mendixtestdocumentation --key /community/tools/the-mendix-mvp-program --content-type text/html --website-redirect-location /developerportal/community-tools/mendix-mvp-program
aws s3api put-object --bucket mendixtestdocumentation --key /mendixcloud/deploying-to-the-cloud --content-type text/html --website-redirect-location /developerportal/deploy/mendix-cloud-deploy
aws s3api put-object --bucket mendixtestdocumentation --key /mendixcloud/maintenance-windows --content-type text/html --website-redirect-location /developerportal/deploy/maintenance-windows
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/howto/migrating-to-v4 --content-type text/html --website-redirect-location /developerportal/deploy/migrating-to-v4
aws s3api put-object --bucket mendixtestdocumentation --key /deployment/mendixcloud/how-to-deploy-a-mendix-app-on-azure --content-type text/html --website-redirect-location /developerportal/deploy/azure-deploy
aws s3api put-object --bucket mendixtestdocumentation --key /mendixcloud/how-to-link-app-to-node --content-type text/html --website-redirect-location /developerportal/deploy/licensing-apps
aws s3api put-object --bucket mendixtestdocumentation --key /howtogeneral/support/ --content-type text/html --website-redirect-location /developerportal/support/
aws s3api put-object --bucket mendixtestdocumentation --key /deployment/mendixcloud/sending-email --content-type text/html --website-redirect-location /developerportal/deploy/sending-email
aws s3api put-object --bucket mendixtestdocumentation --key /howto/deploying-a-mendix-app-to-cloud-foundry --content-type text/html --website-redirect-location /developerportal/deploy/cloud-foundry-deploy
#	/****************************************************
#     * App Store Guide (permanent, mapped & unmapped) 
#     ****************************************************/	
aws s3api put-object --bucket mendixtestdocumentation --key /community/app-store/app-store-overview --content-type text/html --website-redirect-location /appstore/general/app-store-overview
aws s3api put-object --bucket mendixtestdocumentation --key /community/app-store/ --content-type text/html --website-redirect-location /appstore/index
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/app-store/app-store-content --content-type text/html --website-redirect-location /appstore/general/app-store-content
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/app-store/app-store-content-support --content-type text/html --website-redirect-location /appstore/general/app-store-content-support
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/app-store/app-store-overview --content-type text/html --website-redirect-location /appstore/general/app-store-overview
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/app-store/share-app-store-content --content-type text/html --website-redirect-location /appstore/general/share-app-store-content
#    /****************************************************
#     * Add-on Guides (permanent, mapped)
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /addons/apm-addon/ --content-type text/html --website-redirect-location /addons/apd-addon/
aws s3api put-object --bucket mendixtestdocumentation --key /apm/installation-guide --content-type text/html --website-redirect-location /addons/apd-addon/ig-two
aws s3api put-object --bucket mendixtestdocumentation --key /apm/reference-guide/rg-2/reference-guide-2 --content-type text/html --website-redirect-location /addons/apd-addon/rg-two-apm
#	{
#	  from: "~*\\\/aqm\\\/",
#	  to: "/addons/aqm-addon/index",
#	  exact: true
#    },
#	{
#	  from: "~*\\\/apm\\\/",
#	  to: "/addons/apd-addon/index",
#	  exact: true
#    },
#	{
#	  from: "~*\\\/ats\\\/",
#	  to: "/addons/ats-addon/index",
#	  exact: true
#    },
#	/****************************************************
#     * PERMANENT REDIRECTS FROM PRODUCTS
#     ****************************************************/	
#	/****************************************************
#     * From Studio Pro version 8 (permanent, mapped)
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/modeler --content-type text/html --website-redirect-location /refguide/modeling
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Modeler --content-type text/html --website-redirect-location /refguide/modeling
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/desktop-modeler --content-type text/html --website-redirect-location /refguide/modeling
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/desktop-modeler-overview --content-type text/html --website-redirect-location /refguide/studio-pro-overview
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/download-from-team-server-dialog --content-type text/html --website-redirect-location /refguide/download-from-version-control-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/open-project-dialog --content-type text/html --website-redirect-location /refguide/open-app-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/upload-to-team-server-dialog --content-type text/html --website-redirect-location /refguide/upload-to-version-control-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/microflow-expressions --content-type text/html --website-redirect-location /refguide/expressions
aws s3api put-object --bucket mendixtestdocumentation --key /deployment/cloud-foundry/ --content-type text/html --website-redirect-location /developerportal/deploy/cloud-foundry-deploy
aws s3api put-object --bucket mendixtestdocumentation --key /howto8/solving-load-and-import-errors --content-type text/html --website-redirect-location /howto/monitoring-troubleshooting/solving-load-and-import-errors
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/drop-down-widget --content-type text/html --website-redirect-location /refguide/drop-down
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/horizontal-split-pane --content-type text/html --website-redirect-location /refguide/scroll-container
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/vertical-split-pane --content-type text/html --website-redirect-location /refguide/scroll-container
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Select++Elements --content-type text/html --website-redirect-location /refguide/select--elements
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Developing+Hybrid+Mobile+Apps --content-type text/html --website-redirect-location /refguide/developing-hybrid-mobile-apps
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/enumeration-values --content-type text/html --website-redirect-location /refguide/enumerations
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/inheritance-split --content-type text/html --website-redirect-location /refguide/object-type-decision
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/exclusive-split --content-type text/html --website-redirect-location /refguide/decision
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/menu-item --content-type text/html --website-redirect-location /refguide/menu
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Show+Page --content-type text/html --website-redirect-location /refguide/show-page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Validation+Feedback --content-type text/html --website-redirect-location /refguide/validation-feedback
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Show+Message --content-type text/html --website-redirect-location /refguide/show-message
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Show+Home+Page --content-type text/html --website-redirect-location /refguide/show-home-page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Download+File --content-type text/html --website-redirect-location /refguide/download-file
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Close+Form --content-type text/html --website-redirect-location /refguide/close-page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Row+(document+template) --content-type text/html --website-redirect-location /refguide/row-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/row-(document-template) --content-type text/html --website-redirect-location /refguide/row-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Table+(document+template --content-type text/html --website-redirect-location /refguide/table-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/table-(document-template) --content-type text/html --website-redirect-location /refguide/table-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Cell+(document+template) --content-type text/html --website-redirect-location /refguide/cell-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/cell-(document-template) --content-type text/html --website-redirect-location /refguide/cell-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Static+Image+(document+template) --content-type text/html --website-redirect-location /refguide/static-image-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/static-image-(document-template) --content-type text/html --website-redirect-location /refguide/static-image-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Title+(document+template) --content-type text/html --website-redirect-location /refguide/title-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/title-(document-template) --content-type text/html --website-redirect-location /refguide/title-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Static+label+(document+template) --content-type text/html --website-redirect-location /refguide/static-label-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/static-label-(document-template) --content-type text/html --website-redirect-location /refguide/static-label-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Page+Break+(document+template) --content-type text/html --website-redirect-location /refguide/page-break-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/page-break-(document-template) --content-type text/html --website-redirect-location /refguide/page-break-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Line+Break+(document+template) --content-type text/html --website-redirect-location /refguide/line-break-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/line-break-(document-template) --content-type text/html --website-redirect-location /refguide/line-break-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Header+(document+template) --content-type text/html --website-redirect-location /refguide/header-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/header-(document-template) --content-type text/html --website-redirect-location /refguide/header-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Footer+(document+template) --content-type text/html --website-redirect-location /refguide/footer-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/footer-(document-template) --content-type text/html --website-redirect-location /refguide/footer-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Dynamic+label+(document+template) --content-type text/html --website-redirect-location /refguide/dynamic-label-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/dynamic-label-(document-template) --content-type text/html --website-redirect-location /refguide/dynamic-label-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Template+Grid+(document+template) --content-type text/html --website-redirect-location /refguide/template-grid-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/template-grid-(document-template) --content-type text/html --website-redirect-location /refguide/template-grid-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Data+Grid+(document+template) --content-type text/html --website-redirect-location /refguide/data-grid-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Sort+Bar --content-type text/html --website-redirect-location /refguide/sort-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Columns+(document+template) --content-type text/html --website-redirect-location /refguide/columns-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Dynamic+Image+(document+template) --content-type text/html --website-redirect-location /refguide/dynamic-image-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/dynamic-image-(document-template) --content-type text/html --website-redirect-location /refguide/dynamic-image-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Data+View+(document+template) --content-type text/html --website-redirect-location /refguide/data-view-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/data-view-(document-template) --content-type text/html --website-redirect-location /refguide/data-view-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/Document+Templates --content-type text/html --website-redirect-location /refguide/document-templates
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/tab-page --content-type text/html --website-redirect-location /refguide/tab-container
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/action-button --content-type text/html --website-redirect-location /refguide/button-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/drop-down-button --content-type text/html --website-redirect-location /refguide/button-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/image-property --content-type text/html --website-redirect-location /refguide/image
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/grid-action-button --content-type text/html --website-redirect-location /refguide/control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/remove-button --content-type text/html --website-redirect-location /refguide/control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/select-button --content-type text/html --website-redirect-location /refguide/control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/add-button --content-type text/html --website-redirect-location /refguide/control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/deselect-all-button --content-type text/html --website-redirect-location /refguide/control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/export-to-csv-button --content-type text/html --website-redirect-location /refguide/control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/export-to-excel-button --content-type text/html --website-redirect-location /refguide/control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/grid-new-button --content-type text/html --website-redirect-location /refguide/control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/search-button --content-type text/html --website-redirect-location /refguide/control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/select-all-button --content-type text/html --website-redirect-location /refguide/control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/comparison-search-field --content-type text/html --website-redirect-location /refguide/search-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/drop-down-search-field --content-type text/html --website-redirect-location /refguide/search-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/range-search-field --content-type text/html --website-redirect-location /refguide/search-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/opening-pages --content-type text/html --website-redirect-location /refguide/on-click-event
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/starting-microflows --content-type text/html --website-redirect-location /refguide/on-click-event
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/app-settings-dialog --content-type text/html --website-redirect-location /refguide/new-project
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/annotation-flow --content-type text/html --website-redirect-location /refguide/annotation
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/close-form --content-type text/html --website-redirect-location /refguide/close-page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/columns-(document-template) --content-type text/html --website-redirect-location /refguide/columns-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/consumed-odata-services --content-type text/html --website-redirect-location /refguide/published-odata-services
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/data-grid-(document-template) --content-type text/html --website-redirect-location /refguide/data-grid-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/module-role --content-type text/html --website-redirect-location /refguide/module-security
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/page-template --content-type text/html --website-redirect-location /refguide/page-templates
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/user-role --content-type text/html --website-redirect-location /refguide/user-roles
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/link-button --content-type text/html --website-redirect-location /refguide/button-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide8/sign-out-button --content-type text/html --website-redirect-location /refguide/button-widgets
#    /****************************************************
#     * From Desktop Modeler version 7 (permanent, mapped)
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/modeler --content-type text/html --website-redirect-location /refguide7/desktop-modeler-overview
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Modeler --content-type text/html --website-redirect-location /refguide7/desktop-modeler-overview
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/desktop-webmodeler --content-type text/html --website-redirect-location /refguide7/collaborative-development
aws s3api put-object --bucket mendixtestdocumentation --key /web-modeler/general-sync-webmodeler-desktopmodeler-wm --content-type text/html --website-redirect-location /refguide7/collaborative-development
aws s3api put-object --bucket mendixtestdocumentation --key /howto/web-modeler/syncing-webmodeler-desktop --content-type text/html --website-redirect-location /refguide7/collaborative-development
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/sync-webmodeler-desktopmodeler --content-type text/html --website-redirect-location /refguide7/collaborative-development
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/download-from-team-server-dialog --content-type text/html --website-redirect-location /refguide7/download-from-version-control-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/open-project-dialog --content-type text/html --website-redirect-location /refguide7/open-app-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/upload-to-team-server-dialog --content-type text/html --website-redirect-location /refguide7/upload-to-version-control-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/microflow-expressions --content-type text/html --website-redirect-location /refguide7/expressions
aws s3api put-object --bucket mendixtestdocumentation --key /deployment/cloud-foundry/ --content-type text/html --website-redirect-location /developerportal/deploy/cloud-foundry-deploy
aws s3api put-object --bucket mendixtestdocumentation --key /howto7/solving-load-and-import-errors --content-type text/html --website-redirect-location /howto7/monitoring-troubleshooting/solving-load-and-import-errors
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/drop-down-widget --content-type text/html --website-redirect-location /refguide7/drop_down
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/horizontal-split-pane --content-type text/html --website-redirect-location /refguide7/scroll-container
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/vertical-split-pane --content-type text/html --website-redirect-location /refguide7/scroll-container
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Select++Elements --content-type text/html --website-redirect-location /refguide7/select--elements
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Developing+Hybrid+Mobile+Apps --content-type text/html --website-redirect-location /refguide7/developing-hybrid-mobile-apps
aws s3api put-object --bucket mendixtestdocumentation --key /howto7/deploying-a-mendix-app-to-cloud-foundry --content-type text/html --website-redirect-location /developerportal/deploy/cloud-foundry-deploy
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Show+Page --content-type text/html --website-redirect-location /refguide7/show-page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Validation+Feedback --content-type text/html --website-redirect-location /refguide7/validation-feedback
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Show+Message --content-type text/html --website-redirect-location /refguide7/show-message
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Show+Home+Page --content-type text/html --website-redirect-location /refguide7/show-home-page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Download+File --content-type text/html --website-redirect-location /refguide7/download-file
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Close+Form --content-type text/html --website-redirect-location /refguide7/close-page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Row+(document+template) --content-type text/html --website-redirect-location /refguide7/row-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Table+(document+template --content-type text/html --website-redirect-location /refguide7/table-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Cell+(document+template) --content-type text/html --website-redirect-location /refguide7/cell-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Static+Image+(document+template) --content-type text/html --website-redirect-location /refguide7/static-image-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Title+(document+template) --content-type text/html --website-redirect-location /refguide7/title-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Static+label+(document+template) --content-type text/html --website-redirect-location /refguide7/static-label-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Page+Break+(document+template) --content-type text/html --website-redirect-location /refguide7/page-break-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Line+Break+(document+template) --content-type text/html --website-redirect-location /refguide7/line-break-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Header+(document+template) --content-type text/html --website-redirect-location /refguide7/header-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Footer+(document+template) --content-type text/html --website-redirect-location /refguide7/footer-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Dynamic+label+(document+template) --content-type text/html --website-redirect-location /refguide7/dynamic-label-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Template+Grid+(document+template) --content-type text/html --website-redirect-location /refguide7/template-grid-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Data+Grid+(document+template) --content-type text/html --website-redirect-location /refguide7/data-grid-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Sort+Bar --content-type text/html --website-redirect-location /refguide7/sort-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Columns+(document+template) --content-type text/html --website-redirect-location /refguide7/columns-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Dynamic+Image+(document+template) --content-type text/html --website-redirect-location /refguide7/dynamic-image-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Data+View+(document+template) --content-type text/html --website-redirect-location /refguide7/data-view-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/Document+Templates --content-type text/html --website-redirect-location /refguide7/document-templates
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/link-button --content-type text/html --website-redirect-location /refguide7/action-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/sign-out-button --content-type text/html --website-redirect-location /refguide7/button-widgets
#	/****************************************************
#     * From Desktop Modeler version 6 (permanent)
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Reference+Guide+6 --content-type text/html --website-redirect-location /refguide6/
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Modeler --content-type text/html --website-redirect-location /refguide6/modeler
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/TreeNavigation --content-type text/html --website-redirect-location /refguide6/
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Access+Rules --content-type text/html --website-redirect-location /refguide6/access-rules
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Action+Button --content-type text/html --website-redirect-location /refguide6/action-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Action+Call+Activities --content-type text/html --website-redirect-location /refguide6/action-call-activities
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Actions --content-type text/html --website-redirect-location /refguide6/actions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Activities --content-type text/html --website-redirect-location /refguide6/activities
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Add+button --content-type text/html --website-redirect-location /refguide6/add-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Add+date+function+calls --content-type text/html --website-redirect-location /refguide6/add-date-function-calls
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Administrator --content-type text/html --website-redirect-location /refguide6/administrator
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Aggregate+List --content-type text/html --website-redirect-location /refguide6/aggregate-list
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Annotation --content-type text/html --website-redirect-location /refguide6/annotation
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Annotation+flow --content-type text/html --website-redirect-location /refguide6/annotation-flow
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Annotations --content-type text/html --website-redirect-location /refguide6/annotations
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Anonymous+Users --content-type text/html --website-redirect-location /refguide6/anonymous-users
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/App+Platform --content-type text/html --website-redirect-location /refguide6/app-platform
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/App+Settings+Dialog --content-type text/html --website-redirect-location /refguide6/app-settings-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Arithmetic+expressions --content-type text/html --website-redirect-location /refguide6/arithmetic-expressions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Association+Source --content-type text/html --website-redirect-location /refguide6/association-source
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Associations --content-type text/html --website-redirect-location /refguide6/associations
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Attributes --content-type text/html --website-redirect-location /refguide6/attributes
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Back+button --content-type text/html --website-redirect-location /refguide6/back-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Basic+Reports --content-type text/html --website-redirect-location /refguide6/basic-reports
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Between+date+function+calls --content-type text/html --website-redirect-location /refguide6/between-date-function-calls
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Boolean+expressions --content-type text/html --website-redirect-location /refguide6/boolean-expressions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Branch+Line+Manager+Dialog --content-type text/html --website-redirect-location /refguide6/branch-line-manager-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Break+Event --content-type text/html --website-redirect-location /refguide6/break-event
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Button+Widgets --content-type text/html --website-redirect-location /refguide6/button-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Call+Rest+Action --content-type text/html --website-redirect-location /refguide6/call-rest-action
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Call+Web+Service --content-type text/html --website-redirect-location /refguide6/call-web-service
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Call+Web+Service+Action --content-type text/html --website-redirect-location /refguide6/call-web-service-action
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Cancel+button --content-type text/html --website-redirect-location /refguide6/cancel-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Cast+Object --content-type text/html --website-redirect-location /refguide6/cast-object
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Cell+Document+Template --content-type text/html --website-redirect-location /refguide6/cell-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/certificates --content-type text/html --website-redirect-location /developerportal/deploy/certificates
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Change+List --content-type text/html --website-redirect-location /refguide6/change-list
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Change+Object --content-type text/html --website-redirect-location /refguide6/change-object
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Change+Variable --content-type text/html --website-redirect-location /refguide6/change-variable
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Check+box --content-type text/html --website-redirect-location /refguide6/check-box
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Client+Activities --content-type text/html --website-redirect-location /refguide6/client-activities
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Close+Form --content-type text/html --website-redirect-location /refguide6/close-form
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Close+page+button --content-type text/html --website-redirect-location /refguide6/close-page-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Clustered+Mendix+Runtime --content-type text/html --website-redirect-location /refguide6/clustered-mendix-runtime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Clustered+Mendix+Business+Server --content-type text/html --website-redirect-location /refguide6/clustered-mendix-runtime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Columns --content-type text/html --website-redirect-location /refguide6/columns
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Columns+Document+Template --content-type text/html --website-redirect-location /refguide6/columns-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Commit+Dialog --content-type text/html --website-redirect-location /refguide6/commit-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Commit+Object(s) --content-type text/html --website-redirect-location /refguide6/committing-objects
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Committing+Objects --content-type text/html --website-redirect-location /refguide6/committing-objects
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Common+Widget+Properties --content-type text/html --website-redirect-location /refguide6/common-widget-properties
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Common+Widgets --content-type text/html --website-redirect-location /refguide6/common-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Comparison+Search+Field --content-type text/html --website-redirect-location /refguide6/comparison-search-field
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Conditions --content-type text/html --website-redirect-location /refguide6/conditions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Configuration --content-type text/html --website-redirect-location /refguide6/configuration
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Configuring+Hybrid+Mobile+Apps+To+Run+Offline --content-type text/html --website-redirect-location /refguide6/configuring-hybrid-mobile-apps-to-run-offline
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Constants --content-type text/html --website-redirect-location /refguide6/constants
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Consumed+App+Services --content-type text/html --website-redirect-location /refguide6/consumed-app-services
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Consumed+REST+Services --content-type text/html --website-redirect-location /refguide6/consumed-rest-services
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Consumed+web+service --content-type text/html --website-redirect-location /refguide6/consumed-web-service
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Consumed+Web+Services --content-type text/html --website-redirect-location /refguide6/consumed-web-services
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Container --content-type text/html --website-redirect-location /refguide6/container
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Container+Widgets --content-type text/html --website-redirect-location /refguide6/container-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Context+Mechanism --content-type text/html --website-redirect-location /refguide6/context-mechanism
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Continue+Event --content-type text/html --website-redirect-location /refguide6/continue-event
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Control+Bar --content-type text/html --website-redirect-location /refguide6/control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Create+Branch+Line+Dialog --content-type text/html --website-redirect-location /refguide6/create-branch-line-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Create+Deployment+Package+Dialog --content-type text/html --website-redirect-location /refguide6/create-deployment-package-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Create+List --content-type text/html --website-redirect-location /refguide6/create-list
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Create+Object --content-type text/html --website-redirect-location /refguide6/create-object
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Create+Variable --content-type text/html --website-redirect-location /refguide6/create-variable
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Custom+Settings --content-type text/html --website-redirect-location /refguide6/custom-settings
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Customizing+Hybrid+Mobile+Apps --content-type text/html --website-redirect-location /refguide6/customizing-hybrid-mobile-apps
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Customizing+PhoneGap+Build+packages --content-type text/html --website-redirect-location /refguide6/customizing-phonegap-build-packages
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+grid --content-type text/html --website-redirect-location /refguide6/data-grid
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+Grid+Document+Template --content-type text/html --website-redirect-location /refguide6/data-grid-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+Sets --content-type text/html --website-redirect-location /refguide6/data-sets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+Sources --content-type text/html --website-redirect-location /refguide6/data-sources
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+Storage --content-type text/html --website-redirect-location /refguide6/data-storage
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+Types --content-type text/html --website-redirect-location /refguide6/data-types
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+view --content-type text/html --website-redirect-location /refguide6/data-view
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+view+action+button --content-type text/html --website-redirect-location /refguide6/data-view-action-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+view+cancel+button --content-type text/html --website-redirect-location /refguide6/data-view-cancel-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+view+close+button --content-type text/html --website-redirect-location /refguide6/data-view-close-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+view+control+bar --content-type text/html --website-redirect-location /refguide6/data-view-control-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+View+Document+Template --content-type text/html --website-redirect-location /refguide6/data-view-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+view+save+button --content-type text/html --website-redirect-location /refguide6/data-view-save-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Data+Widgets --content-type text/html --website-redirect-location /refguide6/data-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Database+Source --content-type text/html --website-redirect-location /refguide6/database-source
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Date+and+Time+Handling+in+3.0 --content-type text/html --website-redirect-location /refguide6/date-and-time-handling-in-3.0
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Date+creation --content-type text/html --website-redirect-location /refguide6/date-creation
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Date+picker --content-type text/html --website-redirect-location /refguide6/date-picker
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Date+Range+Field --content-type text/html --website-redirect-location /refguide6/date-range-field
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Date+Range+Selector --content-type text/html --website-redirect-location /refguide6/date-range-selector
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/DateTime+handling+FAQ --content-type text/html --website-redirect-location /refguide6/datetime-handling-faq
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/DB2 --content-type text/html --website-redirect-location /refguide6/db2
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Delete+button --content-type text/html --website-redirect-location /refguide6/delete-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Delete+Object(s) --content-type text/html --website-redirect-location /refguide6/deleting-objects
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Deleting+Objects --content-type text/html --website-redirect-location /refguide6/deleting-objects
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Demo+Users --content-type text/html --website-redirect-location /refguide6/demo-users
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Deploy+To+The+Cloud+Dialog --content-type text/html --website-redirect-location /refguide6/deploy-to-the-cloud-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Deselect+all+button --content-type text/html --website-redirect-location /refguide6/deselect-all-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Desktop+profile --content-type text/html --website-redirect-location /refguide6/desktop-profile
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Developing+Hybrid+Mobile+Apps --content-type text/html --website-redirect-location /refguide6/developing-hybrid-mobile-apps
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Dialogs --content-type text/html --website-redirect-location /refguide6/dialogs
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Document+Generation+Activities --content-type text/html --website-redirect-location /refguide6/document-generation-activities
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Document+Template --content-type text/html --website-redirect-location /refguide6/document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Document+Templates --content-type text/html --website-redirect-location /refguide6/document-templates
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Domain+Model --content-type text/html --website-redirect-location /refguide6/domain-model
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Download+File --content-type text/html --website-redirect-location /refguide6/download-file
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Download+From+Team+Server+Dialog --content-type text/html --website-redirect-location /refguide6/download-from-team-server-dialog
#    {
#      from: "~\/refguide6\/Drop-down",
#      to: "/refguide6/drop_down",
#      "exact": true
#    },
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Drop+Down+Widget --content-type text/html --website-redirect-location /refguide6/drop_down
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Drop+Down Widget --content-type text/html --website-redirect-location /refguide6/drop_down
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Drop+Down --content-type text/html --website-redirect-location /refguide6/drop-down
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Drop+down+button --content-type text/html --website-redirect-location /refguide6/drop-down-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Drop+Down+Search+Field --content-type text/html --website-redirect-location /refguide6/drop-down-search-field
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Dynamic+Image+Document+Template --content-type text/html --website-redirect-location /refguide6/dynamic-image-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Dynamic+Label+Document+Template --content-type text/html --website-redirect-location /refguide6/dynamic-label-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Edit+button --content-type text/html --website-redirect-location /refguide6/edit-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Edit+Cloud+Foundry+Settings+Dialog --content-type text/html --website-redirect-location /refguide6/edit-cloud-foundry-settings-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/End+Event --content-type text/html --website-redirect-location /refguide6/end-event
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Entities --content-type text/html --website-redirect-location /refguide6/entities
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Entity+Path+Source --content-type text/html --website-redirect-location /refguide6/entity-path-source
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Enumeration+Values --content-type text/html --website-redirect-location /refguide6/enumeration-values
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Enumerations --content-type text/html --website-redirect-location /refguide6/enumerations
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Enumerations+in+microflow+expressions --content-type text/html --website-redirect-location /refguide6/enumerations-in-microflow-expressions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Error+Event --content-type text/html --website-redirect-location /refguide6/error-event
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Event+Handlers --content-type text/html --website-redirect-location /refguide6/event-handlers
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Exclusive+Split --content-type text/html --website-redirect-location /refguide6/exclusive-split
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Export+Mapping+Action --content-type text/html --website-redirect-location /refguide6/export-mapping-action
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Export+Mappings --content-type text/html --website-redirect-location /refguide6/export-mappings
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Export+to+CSV+button --content-type text/html --website-redirect-location /refguide6/export-to-csv-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Export+to+excel+button --content-type text/html --website-redirect-location /refguide6/export-to-excel-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Export+XML --content-type text/html --website-redirect-location /refguide6/export-xml
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/File+manager --content-type text/html --website-redirect-location /refguide6/file-manager
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/File+Widgets --content-type text/html --website-redirect-location /refguide6/file-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Footer+Document+Template --content-type text/html --website-redirect-location /refguide6/footer-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Garbage+collection --content-type text/html --website-redirect-location /refguide6/garbage-collection
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/General --content-type text/html --website-redirect-location /refguide6/general
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Generate+Document --content-type text/html --website-redirect-location /refguide6/generate-document
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Getting+the+Mendix+Developer+App --content-type text/html --website-redirect-location /refguide6/getting-the-mendix-developer-app
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Grid+action+button --content-type text/html --website-redirect-location /refguide6/grid-action-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Grid+microflow+button --content-type text/html --website-redirect-location /refguide6/grid-microflow-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Grid+New+Button --content-type text/html --website-redirect-location /refguide6/grid-new-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Group+box --content-type text/html --website-redirect-location /refguide6/group-box
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Section --content-type text/html --website-redirect-location /refguide6/group-box
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Header --content-type text/html --website-redirect-location /refguide6/header
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Header+Document+Template --content-type text/html --website-redirect-location /refguide6/header-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/History+Dialog --content-type text/html --website-redirect-location /refguide6/history-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Horizontal+Split+Pane --content-type text/html --website-redirect-location /refguide6/horizontal-split-pane
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/If+expressions --content-type text/html --website-redirect-location /refguide6/if-expressions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Image --content-type text/html --website-redirect-location /refguide6/image
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Image+uploader --content-type text/html --website-redirect-location /refguide6/image-uploader
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Image+viewer --content-type text/html --website-redirect-location /refguide6/image-viewer
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Images+refguide --content-type text/html --website-redirect-location /refguide6/images
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Images --content-type text/html --website-redirect-location /refguide6/images
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Image+Property --content-type text/html --website-redirect-location /refguide6/image-property
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Import+Mapping+Action --content-type text/html --website-redirect-location /refguide6/import-mapping-action
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Import+Mappings --content-type text/html --website-redirect-location /refguide6/import-mappings
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Import+XML --content-type text/html --website-redirect-location /refguide6/import-xml
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Inheritance+Split --content-type text/html --website-redirect-location /refguide6/inheritance-split
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Indexes --content-type text/html --website-redirect-location /refguide6/indexes
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Input+reference+set+selector --content-type text/html --website-redirect-location /refguide6/input-reference-set-selector
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Input+Widgets --content-type text/html --website-redirect-location /refguide6/input-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Integration --content-type text/html --website-redirect-location /refguide6/integration
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Integration+Activities --content-type text/html --website-redirect-location /refguide6/integration-activities
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/ISession+API+Usage --content-type text/html --website-redirect-location /refguide6/isession-api-usage
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Java+Action+Call --content-type text/html --website-redirect-location /refguide6/java-action-call
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Java+Actions --content-type text/html --website-redirect-location /refguide6/java-actions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Java+Memory+Usage+With+Mendix --content-type text/html --website-redirect-location /refguide6/java-memory-usage-with-mendix
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Java+Programming --content-type text/html --website-redirect-location /refguide6/java-programming
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/JSON+Structures --content-type text/html --website-redirect-location /refguide6/json-structures
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Keep+alive+mechanism+for+Persistent+Sessions --content-type text/html --website-redirect-location /refguide6/keep-alive-mechanism-for-persistent-sessions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Label --content-type text/html --website-redirect-location /refguide6/label
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Layout --content-type text/html --website-redirect-location /refguide6/layout
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Layouts --content-type text/html --website-redirect-location /refguide6/layout
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Layout+grid --content-type text/html --website-redirect-location /refguide6/layout-grid
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Layout+Widgets --content-type text/html --website-redirect-location /refguide6/layout-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Line+Break+Document+Template --content-type text/html --website-redirect-location /refguide6/line-break-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Link+button --content-type text/html --website-redirect-location /refguide6/link-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/List+Activities --content-type text/html --website-redirect-location /refguide6/list-activities
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/List+Operation --content-type text/html --website-redirect-location /refguide6/list-operation
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/List+view --content-type text/html --website-redirect-location /refguide6/list-view
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Listen+To+Grid+Source --content-type text/html --website-redirect-location /refguide6/listen-to-grid-source
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Log+Message --content-type text/html --website-redirect-location /refguide6/log-message
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Logging --content-type text/html --website-redirect-location /refguide6/logging
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Logging+Activities --content-type text/html --website-redirect-location /refguide6/logging-activities
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Loop --content-type text/html --website-redirect-location /refguide6/loop
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Managing+App+Signing+Keys --content-type text/html --website-redirect-location /refguide6/managing-app-signing-keys
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Map+Automatically --content-type text/html --website-redirect-location /refguide6/map-automatically
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Mapping+Documents --content-type text/html --website-redirect-location /refguide6/mapping-documents
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Mathematical+function+calls --content-type text/html --website-redirect-location /refguide6/mathematical-function-calls
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Menu --content-type text/html --website-redirect-location /refguide6/menu
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Menu+Bar --content-type text/html --website-redirect-location /refguide6/menu-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Menu+Item --content-type text/html --website-redirect-location /refguide6/menu-item
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Menu+Widgets --content-type text/html --website-redirect-location /refguide6/menu-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Merge --content-type text/html --website-redirect-location /refguide6/merge
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Merge+Dialog --content-type text/html --website-redirect-location /refguide6/merge-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Microflow --content-type text/html --website-redirect-location /refguide6/microflow
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Microflow+Activities --content-type text/html --website-redirect-location /refguide6/microflow-activities
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Microflow+Call --content-type text/html --website-redirect-location /refguide6/microflow-call
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Microflow+Element+Common+Properties --content-type text/html --website-redirect-location /refguide6/microflow-element-common-properties
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Microflow+Expressions --content-type text/html --website-redirect-location /refguide6/microflow-expressions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Microflow+Source --content-type text/html --website-redirect-location /refguide6/microflow-source
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Microflows --content-type text/html --website-redirect-location /refguide6/microflows
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Mobile --content-type text/html --website-redirect-location /refguide6/mobile
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Modeler --content-type text/html --website-redirect-location /refguide6/modeler
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Module+Role --content-type text/html --website-redirect-location /refguide6/module-role
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Module+Security --content-type text/html --website-redirect-location /refguide6/module-security
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Module+Status --content-type text/html --website-redirect-location /refguide6/module-status
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Modules --content-type text/html --website-redirect-location /refguide6/modules
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Monitoring+-+Mendix+Runtime --content-type text/html --website-redirect-location /refguide6/monitoring-mendix-runtime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Monitoring+-+Mendix+Business+Server --content-type text/html --website-redirect-location /refguide6/monitoring-mendix-runtime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Monitoring+-+What+to+monitor --content-type text/html --website-redirect-location /refguide6/monitoring-what-to-monitor
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Moving+from+5+to+6 --content-type text/html --website-redirect-location /refguide6/moving-from-5-to-6
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/MySQL --content-type text/html --website-redirect-location /refguide6/mysql
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Navigation --content-type text/html --website-redirect-location /refguide6/navigation
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Navigation+list --content-type text/html --website-redirect-location /refguide6/navigation-list
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Navigation+Tree --content-type text/html --website-redirect-location /refguide6/navigation-tree
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/New+button --content-type text/html --website-redirect-location /refguide6/new-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/NULL+Ordering+Behavior --content-type text/html --website-redirect-location /refguide6/null-ordering-behavior
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Numeric+formatting --content-type text/html --website-redirect-location /refguide6/numeric-formatting
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Object+Activities --content-type text/html --website-redirect-location /refguide6/object-activities
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OData+Query+Options --content-type text/html --website-redirect-location /refguide6/odata-query-options
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OData+Representation --content-type text/html --website-redirect-location /refguide6/odata-representation
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Offline --content-type text/html --website-redirect-location /refguide6/offline
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Offline+device+profile --content-type text/html --website-redirect-location /refguide6/offline-device-profile
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/On+Click+Event --content-type text/html --website-redirect-location /refguide6/on-click-event
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Open+Project+Dialog --content-type text/html --website-redirect-location /refguide6/open-project-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Opening+Pages --content-type text/html --website-redirect-location /refguide6/opening-pages
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Operations --content-type text/html --website-redirect-location /refguide6/operations
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL --content-type text/html --website-redirect-location /refguide6/oql
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+Aggregation --content-type text/html --website-redirect-location /refguide6/oql-aggregation
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+Case+Expression --content-type text/html --website-redirect-location /refguide6/oql-case-expression
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+CAST --content-type text/html --website-redirect-location /refguide6/oql-cast
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+COALESCE --content-type text/html --website-redirect-location /refguide6/oql-coalesce
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+DATEDIFF --content-type text/html --website-redirect-location /refguide6/oql-datediff
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+DATEPART --content-type text/html --website-redirect-location /refguide6/oql-datepart
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+Expressions --content-type text/html --website-redirect-location /refguide6/oql-expressions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+From+Clause --content-type text/html --website-redirect-location /refguide6/oql-from-clause
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+FULL+OUTER+JOIN --content-type text/html --website-redirect-location /refguide6/oql-full-outer-join
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+Functions --content-type text/html --website-redirect-location /refguide6/oql-functions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+Group+by+Clause --content-type text/html --website-redirect-location /refguide6/oql-group-by-clause
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+INNER+JOIN --content-type text/html --website-redirect-location /refguide6/oql-inner-join
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+LEFT+OUTER+JOIN --content-type text/html --website-redirect-location /refguide6/oql-left-outer-join
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+LENGTH --content-type text/html --website-redirect-location /refguide6/oql-length
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+Limit+Clause --content-type text/html --website-redirect-location /refguide6/oql-limit-clause
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+Operators --content-type text/html --website-redirect-location /refguide6/oql-operators
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+Order+by+Clause --content-type text/html --website-redirect-location /refguide6/oql-order-by-clause
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+Parameters --content-type text/html --website-redirect-location /refguide6/oql-parameters
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+RANGEBEGIN --content-type text/html --website-redirect-location /refguide6/oql-rangebegin
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+RANGEEND --content-type text/html --website-redirect-location /refguide6/oql-rangeend
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+RIGHT+OUTER+JOIN --content-type text/html --website-redirect-location /refguide6/oql-right-outer-join
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+ROUND --content-type text/html --website-redirect-location /refguide6/oql-round
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+Select+Clause --content-type text/html --website-redirect-location /refguide6/oql-select-clause
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/OQL+Where+Clause --content-type text/html --website-redirect-location /refguide6/oql-where-clause
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Oracle --content-type text/html --website-redirect-location /refguide6/oracle
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Packaging+Hybrid+Mobile+Apps --content-type text/html --website-redirect-location /refguide6/packaging-hybrid-mobile-apps
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Page --content-type text/html --website-redirect-location /refguide6/page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Page+Break+Document+Template --content-type text/html --website-redirect-location /refguide6/page-break-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Page+Concepts --content-type text/html --website-redirect-location /refguide6/page-concepts
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Page+Templates --content-type text/html --website-redirect-location /refguide6/page-templates
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Page+title --content-type text/html --website-redirect-location /refguide6/page-title
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Pages --content-type text/html --website-redirect-location /refguide6/pages
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Parameter --content-type text/html --website-redirect-location /refguide6/parameter
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Parse+and+format+date+function+calls --content-type text/html --website-redirect-location /refguide6/parse-and-format-date-function-calls
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Parse+and+format+decimal+function+calls --content-type text/html --website-redirect-location /refguide6/parse-and-format-decimal-function-calls
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Parse+and+format+float+function+calls --content-type text/html --website-redirect-location /refguide6/parse-and-format-float-function-calls
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Parse+integer --content-type text/html --website-redirect-location /refguide6/parse-integer
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Password+Policy --content-type text/html --website-redirect-location /refguide6/password-policy
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Persistability --content-type text/html --website-redirect-location /refguide6/persistability
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Phone+profile --content-type text/html --website-redirect-location /refguide6/phone-profile
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Placeholder --content-type text/html --website-redirect-location /refguide6/placeholder
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Preferences+Dialog --content-type text/html --website-redirect-location /refguide6/preferences-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Proactive+Maintenance --content-type text/html --website-redirect-location /refguide6/proactive-maintenance
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Project --content-type text/html --website-redirect-location /refguide6/project
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Project+Security --content-type text/html --website-redirect-location /refguide6/project-security
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Project+Settings --content-type text/html --website-redirect-location /refguide6/project-settings
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Publish+Packages+To+Mobile+Stores --content-type text/html --website-redirect-location /refguide6/publish-packages-to-mobile-stores
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Published+App+Service --content-type text/html --website-redirect-location /refguide6/published-app-service
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Published+App+Services --content-type text/html --website-redirect-location /refguide6/published-app-services
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Published+OData+resource --content-type text/html --website-redirect-location /refguide6/published-odata-resource
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Published+OData+Services --content-type text/html --website-redirect-location /refguide6/published-odata-services
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Published+web+service --content-type text/html --website-redirect-location /refguide6/published-web-service
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Published+Web+Services --content-type text/html --website-redirect-location /refguide6/published-web-services
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Radio+buttons --content-type text/html --website-redirect-location /refguide6/radio-buttons
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Range+Search+Field --content-type text/html --website-redirect-location /refguide6/range-search-field
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Reference+selector --content-type text/html --website-redirect-location /refguide6/reference-selector
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Reference+set+selector --content-type text/html --website-redirect-location /refguide6/reference-set-selector
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Regular+Expressions --content-type text/html --website-redirect-location /refguide6/regular-expressions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Relational+expressions --content-type text/html --website-redirect-location /refguide6/relational-expressions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Remove+button --content-type text/html --website-redirect-location /refguide6/remove-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Removed+APIs --content-type text/html --website-redirect-location /refguide6/removed-apis
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Report+Button --content-type text/html --website-redirect-location /refguide6/report-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Report+Chart --content-type text/html --website-redirect-location /refguide6/report-chart
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Report+Date+Parameter --content-type text/html --website-redirect-location /refguide6/report-date-parameter
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Report+Grid --content-type text/html --website-redirect-location /refguide6/report-grid
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Report+Pane --content-type text/html --website-redirect-location /refguide6/report-pane
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Report+Parameter --content-type text/html --website-redirect-location /refguide6/report-parameter
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Report+Widgets --content-type text/html --website-redirect-location /refguide6/report-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Reporting --content-type text/html --website-redirect-location /refguide6/report-widgets
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Retrieve --content-type text/html --website-redirect-location /refguide6/retrieve
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Review+log+files+-+MS+IIS+Server --content-type text/html --website-redirect-location /refguide6/review-log-files-ms-iis-server
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Review+log+files+-+MS+SQL+Server --content-type text/html --website-redirect-location /refguide6/review-log-files-ms-sql-server
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Rollback+Object --content-type text/html --website-redirect-location /refguide6/rollback-object
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Row+Document+Template --content-type text/html --website-redirect-location /refguide6/row-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Rules --content-type text/html --website-redirect-location /refguide6/rules
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Runtime --content-type text/html --website-redirect-location /refguide6/runtime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Save+button --content-type text/html --website-redirect-location /refguide6/save-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Scheduled+Events --content-type text/html --website-redirect-location /refguide6/scheduled-events
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Scroll+Container --content-type text/html --website-redirect-location /refguide6/scroll-container
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Scroll+Container+Region --content-type text/html --website-redirect-location /refguide6/scroll-container-region
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Search+Bar --content-type text/html --website-redirect-location /refguide6/search-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Search+button --content-type text/html --website-redirect-location /refguide6/search-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Security --content-type text/html --website-redirect-location /refguide6/security
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Select++Elements --content-type text/html --website-redirect-location /refguide6/select--elements
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Select+all+button --content-type text/html --website-redirect-location /refguide6/select-all-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Select+app+service --content-type text/html --website-redirect-location /refguide6/select-app-service
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Select+button --content-type text/html --website-redirect-location /refguide6/select-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Sequence+Flow --content-type text/html --website-redirect-location /refguide6/sequence-flow
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Settings --content-type text/html --website-redirect-location /refguide6/settings
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Show+Home+Page --content-type text/html --website-redirect-location /refguide6/show-home-page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Show+Message --content-type text/html --website-redirect-location /refguide6/show-message
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Show+Page --content-type text/html --website-redirect-location /refguide6/show-page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Sidebar+toggle+button --content-type text/html --website-redirect-location /refguide6/sidebar-toggle-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Sign+In+Dialog --content-type text/html --website-redirect-location /refguide6/sign-in-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Sign+out+button --content-type text/html --website-redirect-location /refguide6/sign-out-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Simple+Menu+Bar --content-type text/html --website-redirect-location /refguide6/simple-menu-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Snippet --content-type text/html --website-redirect-location /refguide6/snippet
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Snippet+Call --content-type text/html --website-redirect-location /refguide6/snippet-call
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Sort+Bar --content-type text/html --website-redirect-location /refguide6/sort-bar
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Special+checks --content-type text/html --website-redirect-location /refguide6/special-checks
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Start+Event --content-type text/html --website-redirect-location /refguide6/start-event
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Starting+Microflows --content-type text/html --website-redirect-location /refguide6/starting-microflows
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Static+Image+Document+Template --content-type text/html --website-redirect-location /refguide6/static-image-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Static+Label+Document+Template --content-type text/html --website-redirect-location /refguide6/static-label-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/String+function+calls --content-type text/html --website-redirect-location /refguide6/string-function-calls
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Style --content-type text/html --website-redirect-location /refguide6/style
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Sync+button --content-type text/html --website-redirect-location /refguide6/sync-button
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/System+Requirements --content-type text/html --website-redirect-location /refguide6/system-requirements
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/System+Texts --content-type text/html --website-redirect-location /refguide6/system-texts
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Tab+container --content-type text/html --website-redirect-location /refguide6/tab-container
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Tab+page --content-type text/html --website-redirect-location /refguide6/tab-page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Table --content-type text/html --website-redirect-location /refguide6/table
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Table+cell --content-type text/html --website-redirect-location /refguide6/table-cell
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Table+Document+Template --content-type text/html --website-redirect-location /refguide6/table-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Table+row --content-type text/html --website-redirect-location /refguide6/table-row
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Tablet+profile --content-type text/html --website-redirect-location /refguide6/tablet-profile
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Team+Server --content-type text/html --website-redirect-location /refguide6/team-server
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Team+Server+FAQ --content-type text/html --website-redirect-location /refguide6/team-server-faq
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Template+grid --content-type text/html --website-redirect-location /refguide6/template-grid
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Template+Grid+Document+Template --content-type text/html --website-redirect-location /refguide6/template-grid-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Text --content-type text/html --website-redirect-location /refguide6/text
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Text+area --content-type text/html --website-redirect-location /refguide6/text-area
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Text+box --content-type text/html --website-redirect-location /refguide6/text-box
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Third+Party+Licenses --content-type text/html --website-redirect-location /refguide6/third-party-licenses
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Title+Document+Template --content-type text/html --website-redirect-location /refguide6/title-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/To+float --content-type text/html --website-redirect-location /refguide6/to-float
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/To+string --content-type text/html --website-redirect-location /refguide6/to-string
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Transient+Objects+Garbage+Collecting --content-type text/html --website-redirect-location /refguide6/transient-objects-garbage-collecting
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Translatable+Texts --content-type text/html --website-redirect-location /refguide6/translatable-texts
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Trim+to+date --content-type text/html --website-redirect-location /refguide6/trim-to-date
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Troubleshooting --content-type text/html --website-redirect-location /refguide6/troubleshooting
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Unary+expressions --content-type text/html --website-redirect-location /refguide6/unary-expressions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Upload+To+Team+Server+Dialog --content-type text/html --website-redirect-location /refguide6/upload-to-team-server-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/User+Roles --content-type text/html --website-redirect-location /refguide6/user-roles
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/User+Role --content-type text/html --website-redirect-location /refguide6/user-roles
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Using+a+proxy+to+call+a+webservice --content-type text/html --website-redirect-location /refguide6/using-a-proxy-to-call-a-webservice
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Using+Eclipse --content-type text/html --website-redirect-location /refguide6/using-eclipse
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Validation+Feedback --content-type text/html --website-redirect-location /refguide6/validation-feedback
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Validation+Rules --content-type text/html --website-redirect-location /refguide6/validation-rules
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Variable+Activities --content-type text/html --website-redirect-location /refguide6/variable-activities
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Version+Control --content-type text/html --website-redirect-location /refguide6/version-control
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Version+Control+Concepts --content-type text/html --website-redirect-location /refguide6/version-control-concepts
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Version+Control+Scenarios --content-type text/html --website-redirect-location /refguide6/version-control-scenarios
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/version-downgrade-prevention --content-type text/html --website-redirect-location /developerportal/deploy/version-downgrade-prevention
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/Vertical+Split+Pane --content-type text/html --website-redirect-location /refguide6/vertical-split-pane
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XML+Inheritance+and+Choice --content-type text/html --website-redirect-location /refguide6/xml-inheritance-and-choice
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XML+Reference+Guide --content-type text/html --website-redirect-location /refguide6/xml-reference-guide
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XML+Schema+Support --content-type text/html --website-redirect-location /refguide6/xml-schema-support
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XML+Schemas --content-type text/html --website-redirect-location /refguide6/xml-schemas
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath --content-type text/html --website-redirect-location /refguide6/xpath
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+avg --content-type text/html --website-redirect-location /refguide6/xpath-avg
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+Constraint+Functions --content-type text/html --website-redirect-location /refguide6/xpath-constraint-functions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+Constraints --content-type text/html --website-redirect-location /refguide6/xpath-constraints
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+contains --content-type text/html --website-redirect-location /refguide6/xpath-contains
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+count --content-type text/html --website-redirect-location /refguide6/xpath-count
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+day+from+dateTime --content-type text/html --website-redirect-location /refguide6/xpath-day-from-datetime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+day+of+year+from+dateTime --content-type text/html --website-redirect-location /refguide6/xpath-day-of-year-from-datetime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+ends+with --content-type text/html --website-redirect-location /refguide6/xpath-ends-with
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+Expressions --content-type text/html --website-redirect-location /refguide6/xpath-expressions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+false --content-type text/html --website-redirect-location /refguide6/xpath-false
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+hours+from+dateTime --content-type text/html --website-redirect-location /refguide6/xpath-hours-from-datetime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+id --content-type text/html --website-redirect-location /refguide6/xpath-id
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+Keywords+and+System+Variables --content-type text/html --website-redirect-location /refguide6/xpath-keywords-and-system-variables
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+length --content-type text/html --website-redirect-location /refguide6/xpath-length
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+max --content-type text/html --website-redirect-location /refguide6/xpath-max
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+min --content-type text/html --website-redirect-location /refguide6/xpath-min
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+minutes+from+dateTime --content-type text/html --website-redirect-location /refguide6/xpath-minutes-from-datetime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+month+from+dateTime --content-type text/html --website-redirect-location /refguide6/xpath-month-from-datetime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+not --content-type text/html --website-redirect-location /refguide6/xpath-not
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+Operators --content-type text/html --website-redirect-location /refguide6/xpath-operators
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+quarter+from+dateTime --content-type text/html --website-redirect-location /refguide6/xpath-quarter-from-datetime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+Query+Functions --content-type text/html --website-redirect-location /refguide6/xpath-query-functions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+seconds+from+dateTime --content-type text/html --website-redirect-location /refguide6/xpath-seconds-from-datetime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+Source --content-type text/html --website-redirect-location /refguide6/xpath-source
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+starts+with --content-type text/html --website-redirect-location /refguide6/xpath-starts-with
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+string+length --content-type text/html --website-redirect-location /refguide6/xpath-string-length
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+sum --content-type text/html --website-redirect-location /refguide6/xpath-sum
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+Tokens --content-type text/html --website-redirect-location /refguide6/xpath-tokens
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+true --content-type text/html --website-redirect-location /refguide6/xpath-true
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+week+from+dateTime --content-type text/html --website-redirect-location /refguide6/xpath-week-from-datetime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+weekday+from+dateTime --content-type text/html --website-redirect-location /refguide6/xpath-weekday-from-datetime
aws s3api put-object --bucket mendixtestdocumentation --key /refguide6/XPath+year+from+dateTime --content-type text/html --website-redirect-location /refguide6/xpath-year-from-datetime
aws s3api put-object --bucket mendixtestdocumentation --key /howto6/Solving+Load+and+Import+Errors --content-type text/html --website-redirect-location /howto6/solving-load-and-import-errors
#	/****************************************************
#     * From Studio (potentially temporary until the support of old bundles stops, mapped)
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/web-modeler/domain-models-association-properties-wm --content-type text/html --website-redirect-location /studio/domain-models-association-properties
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/web-modeler --content-type text/html --website-redirect-location /studio/
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/web-modeler/microflows-wm --content-type text/html --website-redirect-location /studio/microflows
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/web-modeler/microflows-expressions-wm --content-type text/html --website-redirect-location /studio/microflows-expressions
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/web-modeler/app-settings-wm --content-type text/html --website-redirect-location /studio/settings-widget-overview
aws s3api put-object --bucket mendixtestdocumentation --key /studio/general-collaborative-development --content-type text/html --website-redirect-location /studio/collaborative-development
#	/****************************************************
#     * From Developer Portal (permanent, mapped) 
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/settings/technical-contact --content-type text/html --website-redirect-location /developerportal/company-app-roles/technical-contact
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/general/technical-contact --content-type text/html --website-redirect-location /developerportal/company-app-roles/technical-contact
aws s3api put-object --bucket mendixtestdocumentation --key /deployment/mendixcloud/certificates --content-type text/html --website-redirect-location /developerportal/deploy/certificates
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/certificates --content-type text/html --website-redirect-location /developerportal/deploy/certificates
aws s3api put-object --bucket mendixtestdocumentation --key /mendixcloud/monitoring-application-health --content-type text/html --website-redirect-location /developerportal/operate/monitoring-application-health
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/howto/deploying-to-the-cloud --content-type text/html --website-redirect-location /developerportal/deploy/mendix-cloud-deploy
aws s3api put-object --bucket mendixtestdocumentation --key /deployment/on-premises/deploy-mendix-on-microsoft-windows --content-type text/html --website-redirect-location /developerportal/deploy/deploy-mendix-on-microsoft-windows
aws s3api put-object --bucket mendixtestdocumentation --key /deployment/on-premises --content-type text/html --website-redirect-location /developerportal/deploy/on-premises-design
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/community-tools/the-mendix-job-board --content-type text/html --website-redirect-location /developerportal/community-tools/mendix-job-board
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/publish-packages-to-mobile-stores --content-type text/html --website-redirect-location /howto/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/team-server --content-type text/html --website-redirect-location /developerportal/develop/team-server
#	/****************************************************
#     * From Data Hub (permanent, mapped) 
#     ****************************************************/
	{
  	   from: "/data-hub/data-hub-catalog/use-data-catalog",
   	   to: "/data-hub/share-data/index",
  	},
aws s3api put-object --bucket mendixtestdocumentation --key /datahub/general/share-data/ --content-type text/html --website-redirect-location /data-hub/share-data/index
aws s3api put-object --bucket mendixtestdocumentation --key /data-hub/data-catalog/ --content-type text/html --website-redirect-location /data-hub/index
#	/****************************************************
#     * From Strategic Partners Guide (permanent, mapped)
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /howto/sap/use-sap-odata-model-creator --content-type text/html --website-redirect-location /partners/sap/use-sap-odata-model-creator
aws s3api put-object --bucket mendixtestdocumentation --key /refguide/siemens/mindsphere-module-details --content-type text/html --website-redirect-location /partners/siemens/mindsphere-module-details
#	/****************************************************
#     * From the App Store (permanent, mapped)
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /community/app-store/use-app-store-content-in-the-modeler --content-type text/html --website-redirect-location /appstore/general/app-store-content
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/app-store/use-app-store-content-in-the-modeler --content-type text/html --website-redirect-location /appstore/general/app-store-content
aws s3api put-object --bucket mendixtestdocumentation --key /howto50/Contributing+to+a+GitHub+repository --content-type text/html --website-redirect-location /howto/collaboration-requirements-management/contribute-to-a-github-repository
aws s3api put-object --bucket mendixtestdocumentation --key /howto/collaboration-project-management/contribute-to-a-github-repository --content-type text/html --website-redirect-location /howto/collaboration-requirements-management/contribute-to-a-github-repository
aws s3api put-object --bucket mendixtestdocumentation --key /howto/ux/create-a-custom-theme-with-the-mendix-ui-framework --content-type text/html --website-redirect-location /howto/front-end/atlas-ui
aws s3api put-object --bucket mendixtestdocumentation --key /howto/front-end/create-a-custom-theme-with-the-mendix-ui-framework --content-type text/html --website-redirect-location /howto/front-end/atlas-ui
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/ --content-type text/html --website-redirect-location /releasenotes/studio-pro/
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/8.0 --content-type text/html --website-redirect-location /releasenotes/studio-pro/8.0
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.23 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.23
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.22 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.22
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.21 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.21
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.20 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.20
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.19 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.19
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.18 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.18
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.17 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.17
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.16 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.16
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.15 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.15
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.14 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.14
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.13 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.13
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.12 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.12
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.11 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.11
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.10 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.10
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.9 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.9
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.8 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.8
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.7 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.7
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.6 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.6
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.5 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.5
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.4 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.4
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.3 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.3
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.2 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.2
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.1 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.1
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/7.0 --content-type text/html --website-redirect-location /releasenotes/studio-pro/7.0
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/6.10 --content-type text/html --website-redirect-location /releasenotes/studio-pro/6.10
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/6.9 --content-type text/html --website-redirect-location /releasenotes/studio-pro/6.9
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/6.8 --content-type text/html --website-redirect-location /releasenotes/studio-pro/6.8
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/6.7 --content-type text/html --website-redirect-location /releasenotes/studio-pro/6.7
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/6.6 --content-type text/html --website-redirect-location /releasenotes/studio-pro/6.6
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/6.5 --content-type text/html --website-redirect-location /releasenotes/studio-pro/6.5
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/6.4 --content-type text/html --website-redirect-location /releasenotes/studio-pro/6.4
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/6.3 --content-type text/html --website-redirect-location /releasenotes/studio-pro/6.3
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/6.2 --content-type text/html --website-redirect-location /releasenotes/studio-pro/6.2
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/6.1 --content-type text/html --website-redirect-location /releasenotes/studio-pro/6.1
aws s3api put-object --bucket mendixtestdocumentation --key /releasenotes/desktop-modeler/6.0 --content-type text/html --website-redirect-location /releasenotes/studio-pro/6.0
#	/****************************************************
#     * From the Support Portal (permanent, mapped) 
#     ****************************************************/
aws s3api put-object --bucket mendixtestdocumentation --key /community/app-store-content-support --content-type text/html --website-redirect-location /appstore/general/app-store-content-support
aws s3api put-object --bucket mendixtestdocumentation --key /mendixcloud/custom-domains --content-type text/html --website-redirect-location /developerportal/deploy/custom-domains
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/howto/how-to-link-app-to-node --content-type text/html --website-redirect-location /developerportal/deploy/licensing-apps
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/howto/how-to-link-a-different-app-to-a-node --content-type text/html --website-redirect-location /developerportal/deploy/licensing-apps
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/support/new-app-request-template --content-type text/html --website-redirect-location /developerportal/support/new-app-node-request-template
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/support/export-a-project-package --content-type text/html --website-redirect-location /refguide/export-project-package-dialog
aws s3api put-object --bucket mendixtestdocumentation --key /developerportal/support/change-affected-apps --content-type text/html --website-redirect-location /developerportal/support/prepare-your-project
#	/****************************************************
#     * From Model SDK API (permanent, mapped)
#     ****************************************************/	
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/cell-(document-template) --content-type text/html --website-redirect-location /refguide/cell-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/close-form --content-type text/html --website-redirect-location /refguide/close-page
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/columns-(document-template) --content-type text/html --website-redirect-location /refguide/columns-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/consumed-odata-services --content-type text/html --website-redirect-location /refguide/published-odata-services
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/data-grid-(document-template) --content-type text/html --website-redirect-location /refguide/data-grid-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/data-view-(document-template) --content-type text/html --website-redirect-location /refguide/data-view-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/dynamic-image-(document-template) --content-type text/html --website-redirect-location /refguide/dynamic-image-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/dynamic-label-(document-template) --content-type text/html --website-redirect-location /refguide/dynamic-label-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/footer-(document-template) --content-type text/html --website-redirect-location /refguide/footer-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/header-(document-template) --content-type text/html --website-redirect-location /refguide/header-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/line-break-(document-template) --content-type text/html --website-redirect-location /refguide/line-break-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/page-break-(document-template) --content-type text/html --website-redirect-location /refguide/page-break-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/page-template --content-type text/html --website-redirect-location /refguide/page-templates
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/row-(document-template) --content-type text/html --website-redirect-location /refguide/row-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/static-image-(document-template) --content-type text/html --website-redirect-location /refguide/static-image-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/static-label-(document-template) --content-type text/html --website-redirect-location /refguide/static-label-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/table-(document-template) --content-type text/html --website-redirect-location /refguide/table-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/template-grid-(document-template) --content-type text/html --website-redirect-location /refguide/template-grid-document-template
aws s3api put-object --bucket mendixtestdocumentation --key /refguide7/title-(document-template) --content-type text/html --website-redirect-location /refguide/title-document-template
