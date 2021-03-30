module.exports = {
  "redirect": [
	/****************************************************
     * PERMANENT REDIRECTS FOR DOCUMENTS
     ****************************************************/
	 /****************************************************
     * Documentation Site (permanent, unmapped) 
     ****************************************************/
    {
      from: "/docs/Overview",
      to: "/"
    },
    {
      from: "/docs/",
      to: "/"
    },
	/****************************************************
     * Studio Pro Guide (permanent, mapped)
     ****************************************************/
	{
      from: "/refguide/mindsphere/mindsphere-module-details",
      to: "/partners/siemens/mindsphere-module-details"
    },
	{
      from: "/refguide/customizing-phonegap-build-packages",
      to: "/howto/mobile/customizing-phonegap-build-packages"
    },		
	/****************************************************
     * Studio Pro Guide version 8 (permanent, mapped)
     ****************************************************/
	 {
      from: "/refguide8/customizing-phonegap-build-packages",
      to: "/howto8/mobile/customizing-phonegap-build-packages"
    },
	/****************************************************
     * Desktop Modeler Reference Guide version 7 (permanent, unmapped)
     ****************************************************/	
	{
      from: "/refguide/moving-from-6-to-7",
      to: "/refguide7/moving-from-6-to-7"
    },
	/****************************************************
     * Studio Pro How-to's version 8 (permanent, unmapped)
     ****************************************************/
    {
      from: "/howtogeneral/bestpractices/ux-best-practices",
      to: "/howto8/front-end/ux-best-practices"
    },
	{
      from: "/howtogeneral/bestpractices/best-practices-security-and-improvements-for-mendix-applications",
      to: "/howto8/security/best-practices-security"
    },
	{
      from: "/howtogeneral/bestpractices/best-practices-for-app-performance-in-mendix-7",
      to: "/howto8/general/community-best-practices-for-app-performance"
    },	
	{
      from: "/howto/ux/configuring-your-theme",
      to: "/howto8/front-end/configuring-your-theme"
    },
	/****************************************************
     * Desktop Modeler How-to's version 7 (permanent, unmapped)
     ****************************************************/	
	{
      from: "/howto7/ux/configuring-your-theme",
      to: "/howto7/front-end/configuring-your-theme"
    },
	/****************************************************
     * Studio Guide (permanent, unmapped)
     ****************************************************/
	{
      from: "/howto/tutorials/",
      to: "/studio/general"
    },
	{
      from: "/howto/tutorials/mendix-tutorials",
      to: "/studio/general"
    },
	/****************************************************
     * Developer Portal Guide (permanent, unmapped) 
     ****************************************************/
    {
      from: "/howtogeneral/mendixcloud/trends",
      to: "/developerportal/operate/trends"
    },
    {
      from: "/developerportal/operate/mendix-cloud-status",
      to: "/developerportal/deploy/mendix-cloud-status"
    },
	{
      from: "/community/tools/the-mendix-job-board",
      to: "/developerportal/community-tools/mendix-job-board"
    },
    {
      from: "/community/tools/the-mendix-mvp-program",
      to: "/developerportal/community-tools/mendix-mvp-program"
    },
    {
      from: "/mendixcloud/deploying-to-the-cloud",
      to: "/developerportal/deploy/mendix-cloud-deploy"
    },
    {
      from: "/mendixcloud/maintenance-windows",
      to: "/developerportal/deploy/maintenance-windows"
    },
    {
      from: "/developerportal/howto/migrating-to-v4",
      to: "/developerportal/deploy/migrating-to-v4"
    },
    {
      from: "/mendixcloud/how-to-link-app-to-node",
      to: "/developerportal/deploy/licensing-apps"
    },
	{
      from: "/howtogeneral/support/",
      to: "/developerportal/support/"
    },
	{
      from: "/deployment/mendixcloud/sending-email",
      to: "/developerportal/deploy/sending-email"
    },
	{
      from: "/howto/deploying-a-mendix-app-to-cloud-foundry",
      to: "/developerportal/deploy/cloud-foundry-deploy"
    },
	/****************************************************
     * App Store Guide (permanent, mapped & unmapped) 
     ****************************************************/	
	{
      from: "/community/app-store/app-store-overview",
      to: "/appstore/general/app-store-overview"
    },
	{
      from: "/community/app-store/",
      to: "/appstore/index"
    },	
	{
      from: "/developerportal/app-store/app-store-content",
      to: "/appstore/general/app-store-content"
    },	
	{
      from: "/developerportal/app-store/app-store-content-support",
      to: "/appstore/general/app-store-content-support"
    },
	{
      from: "/developerportal/app-store/app-store-overview",
      to: "/appstore/general/app-store-overview"
    },
	{
      from: "/developerportal/app-store/share-app-store-content",
      to: "/appstore/general/share-app-store-content"
    },
    /****************************************************
     * Add-on Guides (permanent, mapped)
     ****************************************************/
	{
	  from: "/addons/apm-addon/",
	  to: "/addons/apd-addon/"
	},
		{
	  from: "/apm/installation-guide",
	  to: "/addons/apd-addon/ig-two"
	},
	{
      from: "/apm/reference-guide/rg-2/reference-guide-2",
      to: "/addons/apd-addon/rg-two-apm"
    },
	{
	  from: "~*\\\/aqm\\\/",
	  to: "/addons/aqm-addon/index",
	  exact: true
    },
	{
	  from: "~*\\\/apm\\\/",
	  to: "/addons/apd-addon/index",
	  exact: true
    },
	{
	  from: "~*\\\/ats\\\/",
	  to: "/addons/ats-addon/index",
	  exact: true
    },
	/****************************************************
     * PERMANENT REDIRECTS FROM PRODUCTS
     ****************************************************/	
    /****************************************************
     * From Studio Pro version 9 (permanent, mapped)
     ****************************************************/
	{
      from: "/refguide9/modeler",
      to: "/refguide/modeling"
	},
	{
      from: "/refguide9/Modeler",
      to: "/refguide/modeling"
	},
	{
      from: "/refguide9/desktop-modeler",
      to: "/refguide/modeling"
	},
	{
      from: "/refguide9/desktop-modeler-overview",
      to: "/refguide/studio-pro-overview"
	},
	{
      from: "/refguide9/download-from-team-server-dialog",
      to: "/refguide/download-from-version-control-dialog"
	},
	{
      from: "/refguide9/open-project-dialog",
      to: "/refguide/open-app-dialog"
	},
	{
      from: "/refguide9/upload-to-team-server-dialog",
      to: "/refguide/upload-to-version-control-dialog"
	},
	{
      from: "/refguide9/microflow-expressions",
      to: "/refguide/expressions"
	},
	{
      from: "/deployment/cloud-foundry/",
      to: "/developerportal/deploy/cloud-foundry-deploy"
	},	
	{
      from: "/howto9/solving-load-and-import-errors",
      to: "/howto/monitoring-troubleshooting/solving-load-and-import-errors"
	},
	{
      from: "/refguide9/drop-down-widget",
      to: "/refguide/drop-down"
	},
	{
      from: "/refguide9/horizontal-split-pane",
      to: "/refguide/scroll-container"
	},
	{
      from: "/refguide9/vertical-split-pane",
      to: "/refguide/scroll-container"
	},
	{
      from: "/refguide9/Select++Elements",
      to: "/refguide/select--elements"
	},
	{
      from: "/refguide9/Developing+Hybrid+Mobile+Apps",
      to: "/refguide/developing-hybrid-mobile-apps"
	},
	{
      from: "/refguide9/enumeration-values",
      to: "/refguide/enumerations"
	},
	{
      from: "/refguide9/inheritance-split",
      to: "/refguide/object-type-decision"
	},
	{
      from: "/refguide9/exclusive-split",
      to: "/refguide/decision"
	},
	{
      from: "/refguide9/menu-item",
      to: "/refguide/menu"
	},
	{
      from: "/refguide9/Show+Page",
      to: "/refguide/show-page"
	},
	{
      from: "/refguide9/Validation+Feedback",
      to: "/refguide/validation-feedback"
	},
	{
      from: "/refguide9/Show+Message",
      to: "/refguide/show-message"
	},
	{
      from: "/refguide9/Show+Home+Page",
      to: "/refguide/show-home-page"
	},
	{
      from: "/refguide9/Download+File",
      to: "/refguide/download-file"
	},
	{
      from: "/refguide9/Close+Form",
      to: "/refguide/close-page"
	},
	{
      from: "/refguide9/Row+(document+template)",
      to: "/refguide/row-document-template"
	},
	{
      from: "/refguide9/row-(document-template)",
      to: "/refguide/row-document-template"
	},
	{
      from: "/refguide9/Table+(document+template",
      to: "/refguide/table-document-template"
	},
	{
      from: "/refguide9/table-(document-template)",
      to: "/refguide/table-document-template"
	},
	{
      from: "/refguide9/Cell+(document+template)",
      to: "/refguide/cell-document-template"
	},
	{
      from: "/refguide9/cell-(document-template)",
      to: "/refguide/cell-document-template"
	},
	{
      from: "/refguide9/Static+Image+(document+template)",
      to: "/refguide/static-image-document-template"
	},
	{
      from: "/refguide9/static-image-(document-template)",
      to: "/refguide/static-image-document-template"
	},
	{
      from: "/refguide9/Title+(document+template)",
      to: "/refguide/title-document-template"
	},
	{
      from: "/refguide9/title-(document-template)",
      to: "/refguide/title-document-template"
	},
	{
      from: "/refguide9/Static+label+(document+template)",
      to: "/refguide/static-label-document-template"
	},
	{
      from: "/refguide9/static-label-(document-template)",
      to: "/refguide/static-label-document-template"
	},
	{
      from: "/refguide9/Page+Break+(document+template)",
      to: "/refguide/page-break-document-template"
	},
	{
      from: "/refguide9/page-break-(document-template)",
      to: "/refguide/page-break-document-template"
	},
	{
      from: "/refguide9/Line+Break+(document+template)",
      to: "/refguide/line-break-document-template"
	},
	{
      from: "/refguide9/line-break-(document-template)",
      to: "/refguide/line-break-document-template"
	},
	{
      from: "/refguide9/Header+(document+template)",
      to: "/refguide/header-document-template"
	},
	{
      from: "/refguide9/header-(document-template)",
      to: "/refguide/header-document-template"
	},
	{
      from: "/refguide9/Footer+(document+template)",
      to: "/refguide/footer-document-template"
	},
	{
      from: "/refguide9/footer-(document-template)",
      to: "/refguide/footer-document-template"
	},
	{
      from: "/refguide9/Dynamic+label+(document+template)",
      to: "/refguide/dynamic-label-document-template"
	},
	{
      from: "/refguide9/dynamic-label-(document-template)",
      to: "/refguide/dynamic-label-document-template"
	},
	{
      from: "/refguide9/Template+Grid+(document+template)",
      to: "/refguide/template-grid-document-template"
	},
	{
      from: "/refguide9/template-grid-(document-template)",
      to: "/refguide/template-grid-document-template"
	},
	{
      from: "/refguide9/Data+Grid+(document+template)",
      to: "/refguide/data-grid-document-template"
	},
	{
      from: "/refguide9/Sort+Bar",
      to: "/refguide/sort-bar"
	},
	{
      from: "/refguide9/Columns+(document+template)",
      to: "/refguide/columns-document-template"
	},
	{
      from: "/refguide9/Dynamic+Image+(document+template)",
      to: "/refguide/dynamic-image-document-template"
	},
	{
      from: "/refguide9/dynamic-image-(document-template)",
      to: "/refguide/dynamic-image-document-template"
	},
	{
      from: "/refguide9/Data+View+(document+template)",
      to: "/refguide/data-view-document-template"
	},
	{
      from: "/refguide9/data-view-(document-template)",
      to: "/refguide/data-view-document-template"
	},
	{
      from: "/refguide9/Document+Templates",
      to: "/refguide/document-templates"
	},
	{
      from: "/refguide9/tab-page",
      to: "/refguide/tab-container"
	},
	{
      from: "/refguide9/action-button",
      to: "/refguide/button-widgets"
	},
	{
      from: "/refguide9/drop-down-button",
      to: "/refguide/button-widgets"
	},
	{
      from: "/refguide9/image-property",
      to: "/refguide/image"
	},
	{
      from: "/refguide9/grid-action-button",
      to: "/refguide/control-bar"
	},
	{
      from: "/refguide9/remove-button",
      to: "/refguide/control-bar"
	},
	{
      from: "/refguide9/select-button",
      to: "/refguide/control-bar"
	},
	{
      from: "/refguide9/add-button",
      to: "/refguide/control-bar"
	},
	{
      from: "/refguide9/deselect-all-button",
      to: "/refguide/control-bar"
	},
	{
      from: "/refguide9/export-to-csv-button",
      to: "/refguide/control-bar"
	},
	{
      from: "/refguide9/export-to-excel-button",
      to: "/refguide/control-bar"
	},
	{
      from: "/refguide9/grid-new-button",
      to: "/refguide/control-bar"
	},
	{
      from: "/refguide9/search-button",
      to: "/refguide/control-bar"
	},
	{
      from: "/refguide9/select-all-button",
      to: "/refguide/control-bar"
	},
	{
      from: "/refguide9/comparison-search-field",
      to: "/refguide/search-bar"
	},
	{
      from: "/refguide9/drop-down-search-field",
      to: "/refguide/search-bar"
	},
	{
      from: "/refguide9/range-search-field",
      to: "/refguide/search-bar"
	},
	{
      from: "/refguide9/opening-pages",
      to: "/refguide/on-click-event"
	},
	{
      from: "/refguide9/starting-microflows",
      to: "/refguide/on-click-event"
	},
	{
      from: "/refguide9/app-settings-dialog",
      to: "/refguide/new-project"
	},
	{
      from: "/refguide9/annotation-flow",
      to: "/refguide/annotation"
	},
	{
      from: "/refguide9/close-form",
      to: "/refguide/close-page"
	},
	{
      from: "/refguide9/columns-(document-template)",
      to: "/refguide/columns-document-template"
	},
	{
      from: "/refguide9/consumed-odata-services",
      to: "/refguide/published-odata-services"
	},
	{
      from: "/refguide9/data-grid-(document-template)",
      to: "/refguide/data-grid-document-template"
	},
	{
      from: "/refguide9/module-role",
      to: "/refguide/module-security"
	},
	{
      from: "/refguide9/page-template",
      to: "/refguide/page-templates"
	},
	{
      from: "/refguide9/user-role",
     to: "/refguide/user-roles"
	},
	{
      from: "/refguide9/link-button",
      to: "/refguide/button-widgets"
	},
	{
      from: "/refguide9/sign-out-button",
      to: "/refguide/button-widgets"
	},
	/****************************************************
     * From Studio Pro version 8 (permanent, mapped)
     ****************************************************/
	{
      from: "/refguide8/modeler",
      to: "/refguide8/modeling"
    },
	{
      from: "/refguide8/Modeler",
      to: "/refguide8/modeling"
    },
	{
      from: "/refguide8/desktop-modeler",
      to: "/refguide8/modeling"
    },
	{
      from: "/refguide8/desktop-modeler-overview",
      to: "/refguide8/studio-pro-overview"
    },
	{
      from: "/refguide8/download-from-team-server-dialog",
      to: "/refguide8/download-from-version-control-dialog"
    },
	{
      from: "/refguide8/open-project-dialog",
      to: "/refguide8/open-app-dialog"
    },
	{
      from: "/refguide8/upload-to-team-server-dialog",
      to: "/refguide8/upload-to-version-control-dialog"
    },
	{
      from: "/refguide8/microflow-expressions",
      to: "/refguide8/expressions"
    },
	{
      from: "/deployment/cloud-foundry/",
      to: "/developerportal/deploy/cloud-foundry-deploy"
    },	
	{
      from: "/howto8/solving-load-and-import-errors",
      to: "/howto8/monitoring-troubleshooting/solving-load-and-import-errors"
    },
	{
      from: "/refguide8/drop-down-widget",
      to: "/refguide8/drop-down"
    },
	{
      from: "/refguide8/horizontal-split-pane",
      to: "/refguide/scroll-container"
    },
	{
      from: "/refguide8/vertical-split-pane",
      to: "/refguide8/scroll-container"
    },
	{
      from: "/refguide8/Select++Elements",
      to: "/refguide8/select--elements"
    },
	{
      from: "/refguide8/Developing+Hybrid+Mobile+Apps",
      to: "/refguide8/developing-hybrid-mobile-apps"
    },
	{
      from: "/refguide8/enumeration-values",
      to: "/refguide8/enumerations"
    },
	{
      from: "/refguide8/inheritance-split",
      to: "/refguide8/object-type-decision"
    },
	{
      from: "/refguide8/exclusive-split",
      to: "/refguide8/decision"
	},
	{
      from: "/refguide8/menu-item",
      to: "/refguide8/menu"
    },
	{
      from: "/refguide8/Show+Page",
      to: "/refguide8/show-page"
    },
	{
      from: "/refguide8/Validation+Feedback",
      to: "/refguide8/validation-feedback"
    },
	{
      from: "/refguide8/Show+Message",
      to: "/refguide8/show-message"
    },
	{
      from: "/refguide8/Show+Home+Page",
      to: "/refguide8/show-home-page"
    },
	{
      from: "/refguide8/Download+File",
      to: "/refguide8/download-file"
    },
	{
      from: "/refguide8/Close+Form",
      to: "/refguide8/close-page"
    },
	{
      from: "/refguide8/Row+(document+template)",
      to: "/refguide8/row-document-template"
    },
	{
      from: "/refguide8/row-(document-template)",
      to: "/refguide8/row-document-template"
    },
	{
      from: "/refguide8/Table+(document+template",
      to: "/refguide8/table-document-template"
    },
	{
      from: "/refguide8/table-(document-template)",
      to: "/refguide8/table-document-template"
    },
	{
      from: "/refguide8/Cell+(document+template)",
      to: "/refguide8/cell-document-template"
    },
	{
      from: "/refguide8/cell-(document-template)",
      to: "/refguide8/cell-document-template"
    },
	{
      from: "/refguide8/Static+Image+(document+template)",
      to: "/refguide8/static-image-document-template"
    },
	{
      from: "/refguide8/static-image-(document-template)",
      to: "/refguide8/static-image-document-template"
    },
	{
      from: "/refguide8/Title+(document+template)",
      to: "/refguide8/title-document-template"
    },
	{
      from: "/refguide8/title-(document-template)",
      to: "/refguide8/title-document-template"
    },
	{
      from: "/refguide8/Static+label+(document+template)",
      to: "/refguide8/static-label-document-template"
    },
	{
      from: "/refguide8/static-label-(document-template)",
      to: "/refguide8/static-label-document-template"
    },
	{
      from: "/refguide8/Page+Break+(document+template)",
      to: "/refguide8/page-break-document-template"
    },
	{
      from: "/refguide8/page-break-(document-template)",
      to: "/refguide8/page-break-document-template"
    },
	{
      from: "/refguide8/Line+Break+(document+template)",
      to: "/refguide8/line-break-document-template"
    },
	{
      from: "/refguide8/line-break-(document-template)",
      to: "/refguide8/line-break-document-template"
    },
	{
      from: "/refguide8/Header+(document+template)",
      to: "/refguide8/header-document-template"
    },
	{
      from: "/refguide8/header-(document-template)",
      to: "/refguide8/header-document-template"
    },
	{
      from: "/refguide8/Footer+(document+template)",
      to: "/refguide8/footer-document-template"
    },
	{
      from: "/refguide8/footer-(document-template)",
      to: "/refguide8/footer-document-template"
    },
	{
      from: "/refguide8/Dynamic+label+(document+template)",
      to: "/refguide8/dynamic-label-document-template"
    },
	{
      from: "/refguide8/dynamic-label-(document-template)",
      to: "/refguide8/dynamic-label-document-template"
    },
	{
      from: "/refguide8/Template+Grid+(document+template)",
      to: "/refguide8/template-grid-document-template"
    },
	{
      from: "/refguide8/template-grid-(document-template)",
      to: "/refguide8/template-grid-document-template"
    },
	{
      from: "/refguide8/Data+Grid+(document+template)",
      to: "/refguide8/data-grid-document-template"
    },
	{
      from: "/refguide8/Sort+Bar",
      to: "/refguide8/sort-bar"
    },
	{
      from: "/refguide8/Columns+(document+template)",
      to: "/refguide8/columns-document-template"
    },
	{
      from: "/refguide8/Dynamic+Image+(document+template)",
      to: "/refguide8/dynamic-image-document-template"
    },
	{
      from: "/refguide8/dynamic-image-(document-template)",
      to: "/refguide8/dynamic-image-document-template"
    },
	{
      from: "/refguide8/Data+View+(document+template)",
      to: "/refguide8/data-view-document-template"
    },
	{
      from: "/refguide8/data-view-(document-template)",
      to: "/refguide8/data-view-document-template"
    },
	{
      from: "/refguide8/Document+Templates",
      to: "/refguide8/document-templates"
    },
	{
      from: "/refguide8/tab-page",
      to: "/refguide8/tab-container"
    },
	{
	  from: "/refguide8/action-button",
      to: "/refguide8/button-widgets"
    },
	{
	  from: "/refguide8/drop-down-button",
      to: "/refguide8/button-widgets"
    },
	{
	  from: "/refguide8/image-property",
      to: "/refguide8/image"
    },
	{
	  from: "/refguide8/grid-action-button",
      to: "/refguide8/control-bar"
    },
	{
	  from: "/refguide8/remove-button",
      to: "/refguide8/control-bar"
    },
	{
	  from: "/refguide8/select-button",
      to: "/refguide8/control-bar"
    },
	{
	  from: "/refguide8/add-button",
      to: "/refguide8/control-bar"
    },
	{
	  from: "/refguide8/deselect-all-button",
      to: "/refguide8/control-bar"
    },
	{
	  from: "/refguide8/export-to-csv-button",
      to: "/refguide8/control-bar"
    },
	{
	 from: "/refguide8/export-to-excel-button",
      to: "/refguide8/control-bar"
    },
	{
	  from: "/refguide8/grid-new-button",
      to: "/refguide8/control-bar"
    },
	{
	  from: "/refguide8/search-button",
      to: "/refguide8/control-bar"
    },
	{
	  from: "/refguide8/select-all-button",
      to: "/refguide8/control-bar"
    },
	{
	  from: "/refguide8/comparison-search-field",
      to: "/refguide8/search-bar"
    },
	{
	  from: "/refguide8/drop-down-search-field",
      to: "/refguide8/search-bar"
    },
	{
	  from: "/refguide8/range-search-field",
      to: "/refguide8/search-bar"
    },
    {
      from: "/refguide8/opening-pages",
      to: "/refguide8/on-click-event"
    },
    {
      from: "/refguide8/starting-microflows",
      to: "/refguide8/on-click-event"
    },
	{
      from: "/refguide8/app-settings-dialog",
      to: "/refguide8/new-project"
    },
  	{
      from: "/refguide8/annotation-flow",
      to: "/refguide8/annotation"
    },
	{
      from: "/refguide8/close-form",
      to: "/refguide8/close-page"
    },
	{
      from: "/refguide8/columns-(document-template)",
      to: "/refguide8/columns-document-template"
    },
	{
      from: "/refguide8/consumed-odata-services",
      to: "/refguide8/published-odata-services"
    },
	{
      from: "/refguide8/data-grid-(document-template)",
      to: "/refguide8/data-grid-document-template"
    },
	{
      from: "/refguide8/module-role",
      to: "/refguide8/module-security"
    },
	{
      from: "/refguide8/page-template",
      to: "/refguide8/page-templates"
    },
	{
      from: "/refguide8/user-role",
      to: "/refguide8/user-roles"
    },
 	{
      from: "/refguide8/link-button",
      to: "/refguide8/button-widgets"
    },
	{
      from: "/refguide8/sign-out-button",
      to: "/refguide8/button-widgets"
    },
    /****************************************************
     * From Desktop Modeler version 7 (permanent, mapped)
     ****************************************************/
	{
      from: "/refguide7/modeler",
      to: "/refguide7/desktop-modeler-overview"
    },
	{
      from: "/refguide7/Modeler",
      to: "/refguide7/desktop-modeler-overview"
    },
	{
      from: "/refguide7/desktop-webmodeler",
      to: "/refguide7/collaborative-development"
    },
	{
      from: "/web-modeler/general-sync-webmodeler-desktopmodeler-wm",
      to: "/refguide7/collaborative-development"
    },
	{
      from: "/howto/web-modeler/syncing-webmodeler-desktop",
      to: "/refguide7/collaborative-development"
    },
	{
      from: "/refguide7/sync-webmodeler-desktopmodeler",
      to: "/refguide7/collaborative-development"
    },
	{
      from: "/refguide7/download-from-team-server-dialog",
      to: "/refguide7/download-from-version-control-dialog"
    },
	{
      from: "/refguide7/open-project-dialog",
      to: "/refguide7/open-app-dialog"
    },
	{
      from: "/refguide7/upload-to-team-server-dialog",
      to: "/refguide7/upload-to-version-control-dialog"
    },
	{
      from: "/refguide7/microflow-expressions",
      to: "/refguide7/expressions"
    },
	{
      from: "/deployment/cloud-foundry/",
      to: "/developerportal/deploy/cloud-foundry-deploy"
    },	
	{
      from: "/howto7/solving-load-and-import-errors",
      to: "/howto7/monitoring-troubleshooting/solving-load-and-import-errors"
    },
	{
      from: "/refguide7/drop-down-widget",
      to: "/refguide7/drop_down"
    },
	{
      from: "/refguide7/horizontal-split-pane",
      to: "/refguide7/scroll-container"
    },
	{
      from: "/refguide7/vertical-split-pane",
      to: "/refguide7/scroll-container"
    },
	{
      from: "/refguide7/Select++Elements",
      to: "/refguide7/select--elements"
    },
	{
      from: "/refguide7/Developing+Hybrid+Mobile+Apps",
      to: "/refguide7/developing-hybrid-mobile-apps"
    },
	{
      from: "/howto7/deploying-a-mendix-app-to-cloud-foundry",
      to: "/developerportal/deploy/cloud-foundry-deploy"
    },
	{
      from: "/refguide7/Show+Page",
      to: "/refguide7/show-page"
    },
	{
      from: "/refguide7/Validation+Feedback",
      to: "/refguide7/validation-feedback"
    },
	{
      from: "/refguide7/Show+Message",
      to: "/refguide7/show-message"
    },
	{
      from: "/refguide7/Show+Home+Page",
      to: "/refguide7/show-home-page"
    },
	{
      from: "/refguide7/Download+File",
      to: "/refguide7/download-file"
    },
	{
      from: "/refguide7/Close+Form",
      to: "/refguide7/close-page"
    },
	{
      from: "/refguide7/Row+(document+template)",
      to: "/refguide7/row-document-template"
    },
	{
      from: "/refguide7/Table+(document+template",
      to: "/refguide7/table-document-template"
    },
	{
      from: "/refguide7/Cell+(document+template)",
      to: "/refguide7/cell-document-template"
    },
	{
      from: "/refguide7/Static+Image+(document+template)",
      to: "/refguide7/static-image-document-template"
    },
	{
      from: "/refguide7/Title+(document+template)",
      to: "/refguide7/title-document-template"
    },
	{
      from: "/refguide7/Static+label+(document+template)",
      to: "/refguide7/static-label-document-template"
    },
	{
      from: "/refguide7/Page+Break+(document+template)",
      to: "/refguide7/page-break-document-template"
    },
	{
      from: "/refguide7/Line+Break+(document+template)",
      to: "/refguide7/line-break-document-template"
    },
	{
      from: "/refguide7/Header+(document+template)",
      to: "/refguide7/header-document-template"
    },
	{
      from: "/refguide7/Footer+(document+template)",
      to: "/refguide7/footer-document-template"
    },
	{
      from: "/refguide7/Dynamic+label+(document+template)",
      to: "/refguide7/dynamic-label-document-template"
    },
	{
      from: "/refguide7/Template+Grid+(document+template)",
      to: "/refguide7/template-grid-document-template"
    },
	{
      from: "/refguide7/Data+Grid+(document+template)",
      to: "/refguide7/data-grid-document-template"
    },
	{
      from: "/refguide7/Sort+Bar",
      to: "/refguide7/sort-bar"
    },
	{
      from: "/refguide7/Columns+(document+template)",
      to: "/refguide7/columns-document-template"
    },
	{
      from: "/refguide7/Dynamic+Image+(document+template)",
      to: "/refguide7/dynamic-image-document-template"
    },
	{
      from: "/refguide7/Data+View+(document+template)",
      to: "/refguide7/data-view-document-template"
    },
	{
      from: "/refguide7/Document+Templates",
      to: "/refguide7/document-templates"
    },
	{
      from: "/refguide7/link-button",
      to: "/refguide7/action-button"
    },
	{
      from: "/refguide7/sign-out-button",
      to: "/refguide7/button-widgets"
    },
	/****************************************************
     * From Studio (potentially temporary until the support of old bundles stops, mapped)
     ****************************************************/
	{
      from: "/studio/general-collaborative-development",
      to: "/studio/collaborative-development"
    },    
	/****************************************************
     * From Developer Portal (permanent, mapped) 
     ****************************************************/
	{
      from: "/deployment/mendixcloud/certificates",
      to: "/developerportal/deploy/certificates"
    },
	{
      from: "/refguide/certificates",
      to: "/developerportal/deploy/certificates"
    },
	{
      from: "/mendixcloud/monitoring-application-health",
      to: "/developerportal/operate/monitoring-application-health"
    },
	{
      from: "/developerportal/howto/deploying-to-the-cloud",
      to: "/developerportal/deploy/mendix-cloud-deploy"
    },
	{
      from: "/deployment/on-premises/deploy-mendix-on-microsoft-windows",
      to: "/developerportal/deploy/deploy-mendix-on-microsoft-windows"
    },
	{
      from: "/deployment/on-premises",
      to: "/developerportal/deploy/on-premises-design"
    },
	{
      from: "/developerportal/community-tools/the-mendix-job-board",
      to: "/developerportal/community-tools/mendix-job-board"
    },
	{
      from: "/refguide/publish-packages-to-mobile-stores",
      to: "/howto/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores"
    },
	{
      from: "/refguide/team-server",
      to: "/developerportal/develop/team-server"
    },	
	/****************************************************
     * From Data Hub (permanent, mapped) 
     ****************************************************/
	{
  	   from: "/data-hub/data-hub-catalog/use-data-catalog",
   	   to: "/data-hub/share-data/index"
  	},
	{
      from: "/datahub/general/share-data/",
      to: "/data-hub/share-data/index"
    },
	{
  	   from: "/data-hub/data-catalog/",
	   to: "/data-hub/index"
    },
	/****************************************************
     * From Strategic Partners Guide (permanent, mapped)
     ****************************************************/
	 {
      from: "/howto/sap/use-sap-odata-model-creator",
      to: "/partners/sap/use-sap-odata-model-creator"
    },	
    {
      from: "/refguide/siemens/mindsphere-module-details",
      to: "/partners/siemens/mindsphere-module-details"
    },
	/****************************************************
     * From the App Store (permanent, mapped)
     ****************************************************/
	{
	  from: "/community/app-store/use-app-store-content-in-the-modeler",
	  to: "/appstore/general/app-store-content"
    },
	{
      from: "/developerportal/app-store/use-app-store-content-in-the-modeler",
      to: "/appstore/general/app-store-content"
    },
	{
      from: "/howto50/Contributing+to+a+GitHub+repository",
      to: "/howto/collaboration-requirements-management/contribute-to-a-github-repository"
    },
	{
      from: "/howto/collaboration-project-management/contribute-to-a-github-repository",
      to: "/howto/collaboration-requirements-management/contribute-to-a-github-repository"
    },
	{
      from: "/howto/ux/create-a-custom-theme-with-the-mendix-ui-framework",
      to: "/howto/front-end/atlas-ui"
    },
	{
      from: "/howto/front-end/create-a-custom-theme-with-the-mendix-ui-framework",
      to: "/howto/front-end/atlas-ui"
    },
	{
      from: "/releasenotes/desktop-modeler/",
      to: "/releasenotes/studio-pro/"
    },
	{
      from: "/releasenotes/desktop-modeler/8.0",
      to: "/releasenotes/studio-pro/8.0"
    },
	{
      from: "/releasenotes/desktop-modeler/7.23",
      to: "/releasenotes/studio-pro/7.23"
    },
	{
      from: "/releasenotes/desktop-modeler/7.22",
      to: "/releasenotes/studio-pro/7.22"
    },
	{
      from: "/releasenotes/desktop-modeler/7.21",
      to: "/releasenotes/studio-pro/7.21"
    },
	{
      from: "/releasenotes/desktop-modeler/7.20",
      to: "/releasenotes/studio-pro/7.20"
    },
	{
      from: "/releasenotes/desktop-modeler/7.19",
      to: "/releasenotes/studio-pro/7.19"
    },
	{
      from: "/releasenotes/desktop-modeler/7.18",
      to: "/releasenotes/studio-pro/7.18"
    },
	{
      from: "/releasenotes/desktop-modeler/7.17",
      to: "/releasenotes/studio-pro/7.17"
    },
	{
      from: "/releasenotes/desktop-modeler/7.16",
      to: "/releasenotes/studio-pro/7.16"
    },
	{
      from: "/releasenotes/desktop-modeler/7.15",
      to: "/releasenotes/studio-pro/7.15"
    },
	{
      from: "/releasenotes/desktop-modeler/7.14",
      to: "/releasenotes/studio-pro/7.14"
    },
	{
      from: "/releasenotes/desktop-modeler/7.13",
      to: "/releasenotes/studio-pro/7.13"
    },
	{
      from: "/releasenotes/desktop-modeler/7.12",
      to: "/releasenotes/studio-pro/7.12"
    },
	{
      from: "/releasenotes/desktop-modeler/7.11",
      to: "/releasenotes/studio-pro/7.11"
    },
	{
      from: "/releasenotes/desktop-modeler/7.10",
      to: "/releasenotes/studio-pro/7.10"
    },
	{
      from: "/releasenotes/desktop-modeler/7.9",
      to: "/releasenotes/studio-pro/7.9"
    },
	{
      from: "/releasenotes/desktop-modeler/7.8",
      to: "/releasenotes/studio-pro/7.8"
    },
	{
      from: "/releasenotes/desktop-modeler/7.7",
      to: "/releasenotes/studio-pro/7.7"
    },
	{
      from: "/releasenotes/desktop-modeler/7.6",
      to: "/releasenotes/studio-pro/7.6"
    },
	{
      from: "/releasenotes/desktop-modeler/7.5",
      to: "/releasenotes/studio-pro/7.5"
    },
	{
      from: "/releasenotes/desktop-modeler/7.4",
      to: "/releasenotes/studio-pro/7.4"
    },
	{
      from: "/releasenotes/desktop-modeler/7.3",
      to: "/releasenotes/studio-pro/7.3"
    },
	{
      from: "/releasenotes/desktop-modeler/7.2",
      to: "/releasenotes/studio-pro/7.2"
    },
	{
      from: "/releasenotes/desktop-modeler/7.1",
      to: "/releasenotes/studio-pro/7.1"
    },
	{
      from: "/releasenotes/desktop-modeler/7.0",
      to: "/releasenotes/studio-pro/7.0"
    },
	/****************************************************
     * From the Support Portal (permanent, mapped) 
     ****************************************************/
	{
      from: "/community/app-store-content-support",
      to: "/appstore/general/app-store-content-support"
    },
	{
      from: "/mendixcloud/custom-domains",
      to: "/developerportal/deploy/custom-domains"
    },
	{
      from: "/developerportal/howto/how-to-link-app-to-node",
      to: "/developerportal/deploy/licensing-apps"
    },
	{
      from: "/developerportal/howto/how-to-link-a-different-app-to-a-node",
      to: "/developerportal/deploy/licensing-apps"
    },
	{
      from: "/developerportal/support/new-app-request-template",
      to: "/developerportal/support/new-app-node-request-template"
    },
	{
      from: "/developerportal/support/export-a-project-package",
      to: "/refguide/export-project-package-dialog"
    },
	{
      from: "/developerportal/support/change-affected-apps",
      to: "/developerportal/support/prepare-your-project"
    },
	/****************************************************
     * From Model SDK API (permanent, mapped)
     ****************************************************/	
	{
      from: "/refguide7/cell-(document-template)",
      to: "/refguide7/cell-document-template"
    },
	{
      from: "/refguide7/close-form",
      to: "/refguide7/close-page"
    },
	{
      from: "/refguide7/columns-(document-template)",
      to: "/refguide7/columns-document-template"
    },
	{
      from: "/refguide7/consumed-odata-services",
      to: "/refguide7/published-odata-services"
    },
	{
      from: "/refguide7/data-grid-(document-template)",
      to: "/refguide7/data-grid-document-template"
    },
	{
      from: "/refguide7/data-view-(document-template)",
      to: "/refguide7/data-view-document-template"
    },
	{
      from: "/refguide7/dynamic-image-(document-template)",
      to: "/refguide7/dynamic-image-document-template"
    },
	{
      from: "/refguide7/dynamic-label-(document-template)",
      to: "/refguide7/dynamic-label-document-template"
    },
	{
      from: "/refguide7/footer-(document-template)",
      to: "/refguide7/footer-document-template"
    },
	{
      from: "/refguide7/header-(document-template)",
      to: "/refguide7/header-document-template"
    },
	{
      from: "/refguide7/line-break-(document-template)",
      to: "/refguide7/line-break-document-template"
    },
	{
      from: "/refguide7/page-break-(document-template)",
      to: "/refguide7/page-break-document-template"
    },
	{
      from: "/refguide7/page-template",
      to: "/refguide7/page-templates"
    },
	{
      from: "/refguide7/row-(document-template)",
      to: "/refguide7/row-document-template"
    },
	{
      from: "/refguide7/static-image-(document-template)",
      to: "/refguide7/static-image-document-template"
    },
	{
      from: "/refguide7/static-label-(document-template)",
      to: "/refguide7/static-label-document-template"
    },
	{
      from: "/refguide7/table-(document-template)",
      to: "/refguide7/table-document-template"
    },
	{
      from: "/refguide7/template-grid-(document-template)",
      to: "/refguide7/template-grid-document-template"
    },
	{
      from: "/refguide7/title-(document-template)",
      to: "/refguide7/title-document-template"
    },
  ]
}
