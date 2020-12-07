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
     * Reference Guide version 7 (permanent, unmapped)
     ****************************************************/	
	{
      from: "/refguide/moving-from-6-to-7",
      to: "/refguide7/moving-from-6-to-7"
    },
	/****************************************************
     * How-to's (permanent, unmapped)
     ****************************************************/
    {
      from: "/howtogeneral/bestpractices/ux-best-practices",
      to: "/howto/front-end/ux-best-practices"
    },
	{
      from: "/howtogeneral/bestpractices/best-practices-security-and-improvements-for-mendix-applications",
      to: "/howto/security/best-practices-security"
    },
	{
      from: "/howtogeneral/bestpractices/best-practices-for-app-performance-in-mendix-7",
      to: "/howto/general/community-best-practices-for-app-performance"
    },	
	{
      from: "/howto/ux/configuring-your-theme",
      to: "/howto/front-end/configuring-your-theme"
    },
	/****************************************************
     * How-to's version 7 (permanent, unmapped)
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
      from: "/deployment/mendixcloud/how-to-deploy-a-mendix-app-on-azure",
      to: "/developerportal/deploy/azure-deploy"
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
      to: "/refguide/modeling"
    },
	{
      from: "/refguide8/Modeler",
      to: "/refguide/modeling"
    },
	{
      from: "/refguide8/desktop-modeler",
      to: "/refguide/modeling"
    },
	{
      from: "/refguide8/desktop-modeler-overview",
      to: "/refguide/studio-pro-overview"
    },
	{
      from: "/refguide8/download-from-team-server-dialog",
      to: "/refguide/download-from-version-control-dialog"
    },
	{
      from: "/refguide8/open-project-dialog",
      to: "/refguide/open-app-dialog"
    },
	{
      from: "/refguide8/upload-to-team-server-dialog",
      to: "/refguide/upload-to-version-control-dialog"
    },
	{
      from: "/refguide8/microflow-expressions",
      to: "/refguide/expressions"
    },
	{
      from: "/deployment/cloud-foundry/",
      to: "/developerportal/deploy/cloud-foundry-deploy"
    },	
	{
      from: "/howto8/solving-load-and-import-errors",
      to: "/howto/monitoring-troubleshooting/solving-load-and-import-errors"
    },
	{
      from: "/refguide8/drop-down-widget",
      to: "/refguide/drop-down"
    },
	{
      from: "/refguide8/horizontal-split-pane",
      to: "/refguide/scroll-container"
    },
	{
      from: "/refguide8/vertical-split-pane",
      to: "/refguide/scroll-container"
    },
	{
      from: "/refguide8/Select++Elements",
      to: "/refguide/select--elements"
    },
	{
      from: "/refguide8/Developing+Hybrid+Mobile+Apps",
      to: "/refguide/developing-hybrid-mobile-apps"
    },
	{
      from: "/refguide8/enumeration-values",
      to: "/refguide/enumerations"
    },
	{
      from: "/refguide8/inheritance-split",
      to: "/refguide/object-type-decision"
    },
	{
      from: "/refguide8/exclusive-split",
      to: "/refguide/decision"
	},
	{
      from: "/refguide8/menu-item",
      to: "/refguide/menu"
    },
	{
      from: "/refguide8/Show+Page",
      to: "/refguide/show-page"
    },
	{
      from: "/refguide8/Validation+Feedback",
      to: "/refguide/validation-feedback"
    },
	{
      from: "/refguide8/Show+Message",
      to: "/refguide/show-message"
    },
	{
      from: "/refguide8/Show+Home+Page",
      to: "/refguide/show-home-page"
    },
	{
      from: "/refguide8/Download+File",
      to: "/refguide/download-file"
    },
	{
      from: "/refguide8/Close+Form",
      to: "/refguide/close-page"
    },
	{
      from: "/refguide8/Row+(document+template)",
      to: "/refguide/row-document-template"
    },
	{
      from: "/refguide8/row-(document-template)",
      to: "/refguide/row-document-template"
    },
	{
      from: "/refguide8/Table+(document+template",
      to: "/refguide/table-document-template"
    },
	{
      from: "/refguide8/table-(document-template)",
      to: "/refguide/table-document-template"
    },
	{
      from: "/refguide8/Cell+(document+template)",
      to: "/refguide/cell-document-template"
    },
	{
      from: "/refguide8/cell-(document-template)",
      to: "/refguide/cell-document-template"
    },
	{
      from: "/refguide8/Static+Image+(document+template)",
      to: "/refguide/static-image-document-template"
    },
	{
      from: "/refguide8/static-image-(document-template)",
      to: "/refguide/static-image-document-template"
    },
	{
      from: "/refguide8/Title+(document+template)",
      to: "/refguide/title-document-template"
    },
	{
      from: "/refguide8/title-(document-template)",
      to: "/refguide/title-document-template"
    },
	{
      from: "/refguide8/Static+label+(document+template)",
      to: "/refguide/static-label-document-template"
    },
	{
      from: "/refguide8/static-label-(document-template)",
      to: "/refguide/static-label-document-template"
    },
	{
      from: "/refguide8/Page+Break+(document+template)",
      to: "/refguide/page-break-document-template"
    },
	{
      from: "/refguide8/page-break-(document-template)",
      to: "/refguide/page-break-document-template"
    },
	{
      from: "/refguide8/Line+Break+(document+template)",
      to: "/refguide/line-break-document-template"
    },
	{
      from: "/refguide8/line-break-(document-template)",
      to: "/refguide/line-break-document-template"
    },
	{
      from: "/refguide8/Header+(document+template)",
      to: "/refguide/header-document-template"
    },
	{
      from: "/refguide8/header-(document-template)",
      to: "/refguide/header-document-template"
    },
	{
      from: "/refguide8/Footer+(document+template)",
      to: "/refguide/footer-document-template"
    },
	{
      from: "/refguide8/footer-(document-template)",
      to: "/refguide/footer-document-template"
    },
	{
      from: "/refguide8/Dynamic+label+(document+template)",
      to: "/refguide/dynamic-label-document-template"
    },
	{
      from: "/refguide8/dynamic-label-(document-template)",
      to: "/refguide/dynamic-label-document-template"
    },
	{
      from: "/refguide8/Template+Grid+(document+template)",
      to: "/refguide/template-grid-document-template"
    },
	{
      from: "/refguide8/template-grid-(document-template)",
      to: "/refguide/template-grid-document-template"
    },
	{
      from: "/refguide8/Data+Grid+(document+template)",
      to: "/refguide/data-grid-document-template"
    },
	{
      from: "/refguide8/Sort+Bar",
      to: "/refguide/sort-bar"
    },
	{
      from: "/refguide8/Columns+(document+template)",
      to: "/refguide/columns-document-template"
    },
	{
      from: "/refguide8/Dynamic+Image+(document+template)",
      to: "/refguide/dynamic-image-document-template"
    },
	{
      from: "/refguide8/dynamic-image-(document-template)",
      to: "/refguide/dynamic-image-document-template"
    },
	{
      from: "/refguide8/Data+View+(document+template)",
      to: "/refguide/data-view-document-template"
    },
	{
      from: "/refguide8/data-view-(document-template)",
      to: "/refguide/data-view-document-template"
    },
	{
      from: "/refguide8/Document+Templates",
      to: "/refguide/document-templates"
    },
	{
      from: "/refguide8/tab-page",
      to: "/refguide/tab-container"
    },
	{
	  from: "/refguide8/action-button",
      to: "/refguide/button-widgets"
    },
	{
	  from: "/refguide8/drop-down-button",
      to: "/refguide/button-widgets"
    },
	{
	  from: "/refguide8/image-property",
      to: "/refguide/image"
    },
	{
	  from: "/refguide8/grid-action-button",
      to: "/refguide/control-bar"
    },
	{
	  from: "/refguide8/remove-button",
      to: "/refguide/control-bar"
    },
	{
	  from: "/refguide8/select-button",
      to: "/refguide/control-bar"
    },
	{
	  from: "/refguide8/add-button",
      to: "/refguide/control-bar"
    },
	{
	  from: "/refguide8/deselect-all-button",
      to: "/refguide/control-bar"
    },
	{
	  from: "/refguide8/export-to-csv-button",
      to: "/refguide/control-bar"
    },
	{
	 from: "/refguide8/export-to-excel-button",
      to: "/refguide/control-bar"
    },
	{
	  from: "/refguide8/grid-new-button",
      to: "/refguide/control-bar"
    },
	{
	  from: "/refguide8/search-button",
      to: "/refguide/control-bar"
    },
	{
	  from: "/refguide8/select-all-button",
      to: "/refguide/control-bar"
    },
	{
	  from: "/refguide8/comparison-search-field",
      to: "/refguide/search-bar"
    },
	{
	  from: "/refguide8/drop-down-search-field",
      to: "/refguide/search-bar"
    },
	{
	  from: "/refguide8/range-search-field",
      to: "/refguide/search-bar"
    },
    {
      from: "/refguide8/opening-pages",
      to: "/refguide/on-click-event"
    },
    {
      from: "/refguide8/starting-microflows",
      to: "/refguide/on-click-event"
    },
	{
      from: "/refguide8/app-settings-dialog",
      to: "/refguide/new-project"
    },
  	{
      from: "/refguide8/annotation-flow",
      to: "/refguide/annotation"
    },
	{
      from: "/refguide8/close-form",
      to: "/refguide/close-page"
    },
	{
      from: "/refguide8/columns-(document-template)",
      to: "/refguide/columns-document-template"
    },
	{
      from: "/refguide8/consumed-odata-services",
      to: "/refguide/published-odata-services"
    },
	{
      from: "/refguide8/data-grid-(document-template)",
      to: "/refguide/data-grid-document-template"
    },
	{
      from: "/refguide8/module-role",
      to: "/refguide/module-security"
    },
	{
      from: "/refguide8/page-template",
      to: "/refguide/page-templates"
    },
	{
      from: "/refguide8/user-role",
      to: "/refguide/user-roles"
    },
 	{
      from: "/refguide8/link-button",
      to: "/refguide/button-widgets"
    },
	{
      from: "/refguide8/sign-out-button",
      to: "/refguide/button-widgets"
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
     * From Desktop Modeler version 6 (permanent)
     ****************************************************/
    {
      from: "/refguide6/Reference+Guide+6",
      to: "/refguide6/"
	},
	{
      from: "/refguide6/Modeler",
      to: "/refguide6/modeler"
    },
	{
      from: "/refguide6/TreeNavigation",
      to: "/refguide6/"
    },
    {
      from: "/refguide6/Access+Rules",
      to: "/refguide6/access-rules"
    },
    {
      from: "/refguide6/Action+Button",
      to: "/refguide6/action-button"
    },
    {
      from: "/refguide6/Action+Call+Activities",
      to: "/refguide6/action-call-activities"
    },
    {
      from: "/refguide6/Actions",
      to: "/refguide6/actions"
    },
    {
      from: "/refguide6/Activities",
      to: "/refguide6/activities"
    },
    {
      from: "/refguide6/Add+button",
      to: "/refguide6/add-button"
    },
    {
      from: "/refguide6/Add+date+function+calls",
      to: "/refguide6/add-date-function-calls"
    },
    {
      from: "/refguide6/Administrator",
      to: "/refguide6/administrator"
    },
    {
      from: "/refguide6/Aggregate+List",
      to: "/refguide6/aggregate-list"
    },
    {
      from: "/refguide6/Annotation",
      to: "/refguide6/annotation"
    },
    {
      from: "/refguide6/Annotation+flow",
      to: "/refguide6/annotation-flow"
    },
    {
      from: "/refguide6/Annotations",
      to: "/refguide6/annotations"
    },
    {
      from: "/refguide6/Anonymous+Users",
      to: "/refguide6/anonymous-users"
    },
    {
      from: "/refguide6/App+Platform",
      to: "/refguide6/app-platform"
    },
    {
      from: "/refguide6/App+Settings+Dialog",
      to: "/refguide6/app-settings-dialog"
    },
    {
      from: "/refguide6/Arithmetic+expressions",
      to: "/refguide6/arithmetic-expressions"
    },
    {
      from: "/refguide6/Association+Source",
      to: "/refguide6/association-source"
    },
    {
      from: "/refguide6/Associations",
      to: "/refguide6/associations"
    },
    {
      from: "/refguide6/Attributes",
      to: "/refguide6/attributes"
    },
    {
      from: "/refguide6/Back+button",
      to: "/refguide6/back-button"
    },
    {
      from: "/refguide6/Basic+Reports",
      to: "/refguide6/basic-reports"
    },
    {
      from: "/refguide6/Between+date+function+calls",
      to: "/refguide6/between-date-function-calls"
    },
    {
      from: "/refguide6/Boolean+expressions",
      to: "/refguide6/boolean-expressions"
    },
    {
      from: "/refguide6/Branch+Line+Manager+Dialog",
      to: "/refguide6/branch-line-manager-dialog"
    },
    {
      from: "/refguide6/Break+Event",
      to: "/refguide6/break-event"
    },
    {
      from: "/refguide6/Button+Widgets",
      to: "/refguide6/button-widgets"
    },
    {
      from: "/refguide6/Call+Rest+Action",
      to: "/refguide6/call-rest-action"
    },
    {
      from: "/refguide6/Call+Web+Service",
      to: "/refguide6/call-web-service"
    },
    {
      from: "/refguide6/Call+Web+Service+Action",
      to: "/refguide6/call-web-service-action"
    },
    {
      from: "/refguide6/Cancel+button",
      to: "/refguide6/cancel-button"
    },
    {
      from: "/refguide6/Cast+Object",
      to: "/refguide6/cast-object"
    },
    {
      from: "/refguide6/Cell+Document+Template",
      to: "/refguide6/cell-document-template"
    },
    {
      from: "/refguide6/certificates",
      to: "/developerportal/deploy/certificates"
    },
    {
      from: "/refguide6/Change+List",
      to: "/refguide6/change-list"
    },
    {
      from: "/refguide6/Change+Object",
      to: "/refguide6/change-object"
    },
    {
      from: "/refguide6/Change+Variable",
      to: "/refguide6/change-variable"
    },
    {
      from: "/refguide6/Check+box",
      to: "/refguide6/check-box"
    },
    {
      from: "/refguide6/Client+Activities",
      to: "/refguide6/client-activities"
    },
    {
      from: "/refguide6/Close+Form",
      to: "/refguide6/close-form"
    },
    {
      from: "/refguide6/Close+page+button",
      to: "/refguide6/close-page-button"
    },
    {
      from: "/refguide6/Clustered+Mendix+Runtime",
      to: "/refguide6/clustered-mendix-runtime"
    },
    {
      from: "/refguide6/Clustered+Mendix+Business+Server",
      to: "/refguide6/clustered-mendix-runtime"
    },
    {
      from: "/refguide6/Columns",
      to: "/refguide6/columns"
    },
    {
      from: "/refguide6/Columns+Document+Template",
      to: "/refguide6/columns-document-template"
    },
    {
      from: "/refguide6/Commit+Dialog",
      to: "/refguide6/commit-dialog"
    },
    {
      from: "/refguide6/Commit+Object(s)",
      to: "/refguide6/committing-objects"
    },
    {
      from: "/refguide6/Committing+Objects",
      to: "/refguide6/committing-objects"
    },
    {
      from: "/refguide6/Common+Widget+Properties",
      to: "/refguide6/common-widget-properties"
    },
    {
      from: "/refguide6/Common+Widgets",
      to: "/refguide6/common-widgets"
    },
    {
      from: "/refguide6/Comparison+Search+Field",
      to: "/refguide6/comparison-search-field"
    },
    {
      from: "/refguide6/Conditions",
      to: "/refguide6/conditions"
    },
    {
      from: "/refguide6/Configuration",
      to: "/refguide6/configuration"
    },
    {
      from: "/refguide6/Configuring+Hybrid+Mobile+Apps+To+Run+Offline",
      to: "/refguide6/configuring-hybrid-mobile-apps-to-run-offline"
    },
    {
      from: "/refguide6/Constants",
      to: "/refguide6/constants"
    },
    {
      from: "/refguide6/Consumed+App+Services",
      to: "/refguide6/consumed-app-services"
    },
    {
      from: "/refguide6/Consumed+REST+Services",
      to: "/refguide6/consumed-rest-services"
    },
    {
      from: "/refguide6/Consumed+web+service",
      to: "/refguide6/consumed-web-service"
    },
    {
      from: "/refguide6/Consumed+Web+Services",
      to: "/refguide6/consumed-web-services"
    },
    {
      from: "/refguide6/Container",
      to: "/refguide6/container"
    },
    {
      from: "/refguide6/Container+Widgets",
      to: "/refguide6/container-widgets"
    },
    {
      from: "/refguide6/Context+Mechanism",
      to: "/refguide6/context-mechanism"
    },
    {
      from: "/refguide6/Continue+Event",
      to: "/refguide6/continue-event"
    },
    {
      from: "/refguide6/Control+Bar",
      to: "/refguide6/control-bar"
    },
    {
      from: "/refguide6/Create+Branch+Line+Dialog",
      to: "/refguide6/create-branch-line-dialog"
    },
    {
      from: "/refguide6/Create+Deployment+Package+Dialog",
      to: "/refguide6/create-deployment-package-dialog"
    },
    {
      from: "/refguide6/Create+List",
      to: "/refguide6/create-list"
    },
    {
      from: "/refguide6/Create+Object",
      to: "/refguide6/create-object"
    },
    {
      from: "/refguide6/Create+Variable",
      to: "/refguide6/create-variable"
    },
    {
      from: "/refguide6/Custom+Settings",
      to: "/refguide6/custom-settings"
    },
    {
      from: "/refguide6/Customizing+Hybrid+Mobile+Apps",
      to: "/refguide6/customizing-hybrid-mobile-apps"
    },
    {
      from: "/refguide6/Customizing+PhoneGap+Build+packages",
      to: "/refguide6/customizing-phonegap-build-packages"
    },
    {
      from: "/refguide6/Data+grid",
      to: "/refguide6/data-grid"
    },
    {
      from: "/refguide6/Data+Grid+Document+Template",
      to: "/refguide6/data-grid-document-template"
    },
    {
      from: "/refguide6/Data+Sets",
      to: "/refguide6/data-sets"
    },
    {
      from: "/refguide6/Data+Sources",
      to: "/refguide6/data-sources"
    },
    {
      from: "/refguide6/Data+Storage",
      to: "/refguide6/data-storage"
    },
    {
      from: "/refguide6/Data+Types",
      to: "/refguide6/data-types"
    },
    {
      from: "/refguide6/Data+view",
      to: "/refguide6/data-view"
    },
    {
      from: "/refguide6/Data+view+action+button",
      to: "/refguide6/data-view-action-button"
    },
    {
      from: "/refguide6/Data+view+cancel+button",
      to: "/refguide6/data-view-cancel-button"
    },
    {
      from: "/refguide6/Data+view+close+button",
      to: "/refguide6/data-view-close-button"
    },
    {
      from: "/refguide6/Data+view+control+bar",
      to: "/refguide6/data-view-control-bar"
    },
    {
      from: "/refguide6/Data+View+Document+Template",
      to: "/refguide6/data-view-document-template"
    },
    {
      from: "/refguide6/Data+view+save+button",
      to: "/refguide6/data-view-save-button"
    },
    {
      from: "/refguide6/Data+Widgets",
      to: "/refguide6/data-widgets"
    },
    {
      from: "/refguide6/Database+Source",
      to: "/refguide6/database-source"
    },
    {
      from: "/refguide6/Date+and+Time+Handling+in+3.0",
      to: "/refguide6/date-and-time-handling-in-3.0"
    },
    {
      from: "/refguide6/Date+creation",
      to: "/refguide6/date-creation"
    },
    {
      from: "/refguide6/Date+picker",
      to: "/refguide6/date-picker"
    },
    {
      from: "/refguide6/Date+Range+Field",
      to: "/refguide6/date-range-field"
    },
    {
      from: "/refguide6/Date+Range+Selector",
      to: "/refguide6/date-range-selector"
    },
    {
      from: "/refguide6/DateTime+handling+FAQ",
      to: "/refguide6/datetime-handling-faq"
    },
    {
      from: "/refguide6/DB2",
      to: "/refguide6/db2"
    },
    {
      from: "/refguide6/Delete+button",
      to: "/refguide6/delete-button"
    },
    {
      from: "/refguide6/Delete+Object(s)",
      to: "/refguide6/deleting-objects"
    },
    {
      from: "/refguide6/Deleting+Objects",
      to: "/refguide6/deleting-objects"
    },
    {
      from: "/refguide6/Demo+Users",
      to: "/refguide6/demo-users"
    },
    {
      from: "/refguide6/Deploy+To+The+Cloud+Dialog",
      to: "/refguide6/deploy-to-the-cloud-dialog"
    },
    {
      from: "/refguide6/Deselect+all+button",
      to: "/refguide6/deselect-all-button"
    },
    {
      from: "/refguide6/Desktop+profile",
      to: "/refguide6/desktop-profile"
    },
    {
      from: "/refguide6/Developing+Hybrid+Mobile+Apps",
      to: "/refguide6/developing-hybrid-mobile-apps"
    },
    {
      from: "/refguide6/Dialogs",
      to: "/refguide6/dialogs"
    },
    {
      from: "/refguide6/Document+Generation+Activities",
      to: "/refguide6/document-generation-activities"
    },
    {
      from: "/refguide6/Document+Template",
      to: "/refguide6/document-template"
    },
    {
      from: "/refguide6/Document+Templates",
      to: "/refguide6/document-templates"
    },
    {
      from: "/refguide6/Domain+Model",
      to: "/refguide6/domain-model"
    },
    {
      from: "/refguide6/Download+File",
      to: "/refguide6/download-file"
    },
    {
      from: "/refguide6/Download+From+Team+Server+Dialog",
      to: "/refguide6/download-from-team-server-dialog"
    },
    {
      from: "~\/refguide6\/Drop-down",
      to: "/refguide6/drop_down",
      "exact": true
    },
    {
      from: "/refguide6/Drop+Down+Widget",
      to: "/refguide6/drop_down"
    },
    {
      from: "/refguide6/Drop+Down Widget",
      to: "/refguide6/drop_down"
    },
    {
      from: "/refguide6/Drop+Down",
      to: "/refguide6/drop-down"
    },
    {
      from: "/refguide6/Drop+down+button",
      to: "/refguide6/drop-down-button"
    },
    {
      from: "/refguide6/Drop+Down+Search+Field",
      to: "/refguide6/drop-down-search-field"
    },
    {
      from: "/refguide6/Dynamic+Image+Document+Template",
      to: "/refguide6/dynamic-image-document-template"
    },
    {
      from: "/refguide6/Dynamic+Label+Document+Template",
      to: "/refguide6/dynamic-label-document-template"
    },
    {
      from: "/refguide6/Edit+button",
      to: "/refguide6/edit-button"
    },
    {
      from: "/refguide6/Edit+Cloud+Foundry+Settings+Dialog",
      to: "/refguide6/edit-cloud-foundry-settings-dialog"
    },
    {
      from: "/refguide6/End+Event",
      to: "/refguide6/end-event"
    },
    {
      from: "/refguide6/Entities",
      to: "/refguide6/entities"
    },
    {
      from: "/refguide6/Entity+Path+Source",
      to: "/refguide6/entity-path-source"
    },
    {
      from: "/refguide6/Enumeration+Values",
      to: "/refguide6/enumeration-values"
    },
    {
      from: "/refguide6/Enumerations",
      to: "/refguide6/enumerations"
    },
    {
      from: "/refguide6/Enumerations+in+microflow+expressions",
      to: "/refguide6/enumerations-in-microflow-expressions"
    },
    {
      from: "/refguide6/Error+Event",
      to: "/refguide6/error-event"
    },
    {
      from: "/refguide6/Event+Handlers",
      to: "/refguide6/event-handlers"
    },
    {
      from: "/refguide6/Exclusive+Split",
      to: "/refguide6/exclusive-split"
    },
    {
      from: "/refguide6/Export+Mapping+Action",
      to: "/refguide6/export-mapping-action"
    },
    {
      from: "/refguide6/Export+Mappings",
      to: "/refguide6/export-mappings"
    },
    {
      from: "/refguide6/Export+to+CSV+button",
      to: "/refguide6/export-to-csv-button"
    },
    {
      from: "/refguide6/Export+to+excel+button",
      to: "/refguide6/export-to-excel-button"
    },
    {
      from: "/refguide6/Export+XML",
      to: "/refguide6/export-xml"
    },
    {
      from: "/refguide6/File+manager",
      to: "/refguide6/file-manager"
    },
    {
      from: "/refguide6/File+Widgets",
      to: "/refguide6/file-widgets"
    },
    {
      from: "/refguide6/Footer+Document+Template",
      to: "/refguide6/footer-document-template"
    },
    {
      from: "/refguide6/Garbage+collection",
      to: "/refguide6/garbage-collection"
    },
    {
      from: "/refguide6/General",
      to: "/refguide6/general"
    },
    {
      from: "/refguide6/Generate+Document",
      to: "/refguide6/generate-document"
    },
    {
      from: "/refguide6/Getting+the+Mendix+Developer+App",
      to: "/refguide6/getting-the-mendix-developer-app"
    },
    {
      from: "/refguide6/Grid+action+button",
      to: "/refguide6/grid-action-button"
    },
    {
      from: "/refguide6/Grid+microflow+button",
      to: "/refguide6/grid-microflow-button"
    },
    {
      from: "/refguide6/Grid+New+Button",
      to: "/refguide6/grid-new-button"
    },
    {
      from: "/refguide6/Group+box",
      to: "/refguide6/group-box"
    },
    {
      from: "/refguide6/Section",
      to: "/refguide6/group-box"
    },
    {
      from: "/refguide6/Header",
      to: "/refguide6/header"
    },
    {
      from: "/refguide6/Header+Document+Template",
      to: "/refguide6/header-document-template"
    },
    {
      from: "/refguide6/History+Dialog",
      to: "/refguide6/history-dialog"
    },
    {
      from: "/refguide6/Horizontal+Split+Pane",
      to: "/refguide6/horizontal-split-pane"
    },
    {
      from: "/refguide6/If+expressions",
      to: "/refguide6/if-expressions"
    },
    {
      from: "/refguide6/Image",
      to: "/refguide6/image"
    },
    {
      from: "/refguide6/Image+uploader",
      to: "/refguide6/image-uploader"
    },
    {
      from: "/refguide6/Image+viewer",
      to: "/refguide6/image-viewer"
    },
    {
      from: "/refguide6/Images+refguide",
      to: "/refguide6/images"
    },
    {
      from: "/refguide6/Images",
      to: "/refguide6/images"
    },
    {
      from: "/refguide6/Image+Property",
      to: "/refguide6/image-property"
    },
    {
      from: "/refguide6/Import+Mapping+Action",
      to: "/refguide6/import-mapping-action"
    },
    {
      from: "/refguide6/Import+Mappings",
      to: "/refguide6/import-mappings"
    },
    {
      from: "/refguide6/Import+XML",
      to: "/refguide6/import-xml"
    },
    {
      from: "/refguide6/Inheritance+Split",
      to: "/refguide6/inheritance-split"
    },
    {
      from: "/refguide6/Indexes",
      to: "/refguide6/indexes"
    },
    {
      from: "/refguide6/Input+reference+set+selector",
      to: "/refguide6/input-reference-set-selector"
    },
    {
      from: "/refguide6/Input+Widgets",
      to: "/refguide6/input-widgets"
    },
    {
      from: "/refguide6/Integration",
      to: "/refguide6/integration"
    },
    {
      from: "/refguide6/Integration+Activities",
      to: "/refguide6/integration-activities"
    },
    {
      from: "/refguide6/ISession+API+Usage",
      to: "/refguide6/isession-api-usage"
    },
    {
      from: "/refguide6/Java+Action+Call",
      to: "/refguide6/java-action-call"
    },
    {
      from: "/refguide6/Java+Actions",
      to: "/refguide6/java-actions"
    },
    {
      from: "/refguide6/Java+Memory+Usage+With+Mendix",
      to: "/refguide6/java-memory-usage-with-mendix"
    },
    {
      from: "/refguide6/Java+Programming",
      to: "/refguide6/java-programming"
    },
    {
      from: "/refguide6/JSON+Structures",
      to: "/refguide6/json-structures"
    },
    {
      from: "/refguide6/Keep+alive+mechanism+for+Persistent+Sessions",
      to: "/refguide6/keep-alive-mechanism-for-persistent-sessions"
    },
    {
      from: "/refguide6/Label",
      to: "/refguide6/label"
    },
    {
      from: "/refguide6/Layout",
      to: "/refguide6/layout"
    },
    {
      from: "/refguide6/Layouts",
      to: "/refguide6/layout"
    },
    {
      from: "/refguide6/Layout+grid",
      to: "/refguide6/layout-grid"
    },
    {
      from: "/refguide6/Layout+Widgets",
      to: "/refguide6/layout-widgets"
    },
    {
      from: "/refguide6/Line+Break+Document+Template",
      to: "/refguide6/line-break-document-template"
    },
    {
      from: "/refguide6/Link+button",
      to: "/refguide6/link-button"
    },
    {
      from: "/refguide6/List+Activities",
      to: "/refguide6/list-activities"
    },
    {
      from: "/refguide6/List+Operation",
      to: "/refguide6/list-operation"
    },
    {
      from: "/refguide6/List+view",
      to: "/refguide6/list-view"
    },
    {
      from: "/refguide6/Listen+To+Grid+Source",
      to: "/refguide6/listen-to-grid-source"
    },
    {
      from: "/refguide6/Log+Message",
      to: "/refguide6/log-message"
    },
    {
      from: "/refguide6/Logging",
      to: "/refguide6/logging"
    },
    {
      from: "/refguide6/Logging+Activities",
      to: "/refguide6/logging-activities"
    },
    {
      from: "/refguide6/Loop",
      to: "/refguide6/loop"
    },
    {
      from: "/refguide6/Managing+App+Signing+Keys",
      to: "/refguide6/managing-app-signing-keys"
    },
    {
      from: "/refguide6/Map+Automatically",
      to: "/refguide6/map-automatically"
    },
    {
      from: "/refguide6/Mapping+Documents",
      to: "/refguide6/mapping-documents"
    },
    {
      from: "/refguide6/Mathematical+function+calls",
      to: "/refguide6/mathematical-function-calls"
    },
    {
      from: "/refguide6/Menu",
      to: "/refguide6/menu"
    },
    {
      from: "/refguide6/Menu+Bar",
      to: "/refguide6/menu-bar"
    },
    {
      from: "/refguide6/Menu+Item",
      to: "/refguide6/menu-item"
    },
    {
      from: "/refguide6/Menu+Widgets",
      to: "/refguide6/menu-widgets"
    },
    {
      from: "/refguide6/Merge",
      to: "/refguide6/merge"
    },
    {
      from: "/refguide6/Merge+Dialog",
      to: "/refguide6/merge-dialog"
    },
    {
      from: "/refguide6/Microflow",
      to: "/refguide6/microflow"
    },
    {
      from: "/refguide6/Microflow+Activities",
      to: "/refguide6/microflow-activities"
    },
    {
      from: "/refguide6/Microflow+Call",
      to: "/refguide6/microflow-call"
    },
    {
      from: "/refguide6/Microflow+Element+Common+Properties",
      to: "/refguide6/microflow-element-common-properties"
    },
    {
      from: "/refguide6/Microflow+Expressions",
      to: "/refguide6/microflow-expressions"
    },
    {
      from: "/refguide6/Microflow+Source",
      to: "/refguide6/microflow-source"
    },
    {
      from: "/refguide6/Microflows",
      to: "/refguide6/microflows"
    },
    {
      from: "/refguide6/Mobile",
      to: "/refguide6/mobile"
    },
    {
      from: "/refguide6/Modeler",
      to: "/refguide6/modeler"
    },
    {
      from: "/refguide6/Module+Role",
      to: "/refguide6/module-role"
    },
    {
      from: "/refguide6/Module+Security",
      to: "/refguide6/module-security"
    },
    {
      from: "/refguide6/Module+Status",
      to: "/refguide6/module-status"
    },
    {
      from: "/refguide6/Modules",
      to: "/refguide6/modules"
    },
    {
      from: "/refguide6/Monitoring+-+Mendix+Runtime",
      to: "/refguide6/monitoring-mendix-runtime"
    },
    {
      from: "/refguide6/Monitoring+-+Mendix+Business+Server",
      to: "/refguide6/monitoring-mendix-runtime"
    },
    {
      from: "/refguide6/Monitoring+-+What+to+monitor",
      to: "/refguide6/monitoring-what-to-monitor"
    },
    {
      from: "/refguide6/Moving+from+5+to+6",
      to: "/refguide6/moving-from-5-to-6"
    },
    {
      from: "/refguide6/MySQL",
      to: "/refguide6/mysql"
    },
    {
      from: "/refguide6/Navigation",
      to: "/refguide6/navigation"
    },
    {
      from: "/refguide6/Navigation+list",
      to: "/refguide6/navigation-list"
    },
    {
      from: "/refguide6/Navigation+Tree",
      to: "/refguide6/navigation-tree"
    },
    {
      from: "/refguide6/New+button",
      to: "/refguide6/new-button"
    },
    {
      from: "/refguide6/NULL+Ordering+Behavior",
      to: "/refguide6/null-ordering-behavior"
    },
    {
      from: "/refguide6/Numeric+formatting",
      to: "/refguide6/numeric-formatting"
    },
    {
      from: "/refguide6/Object+Activities",
      to: "/refguide6/object-activities"
    },
    {
      from: "/refguide6/OData+Query+Options",
      to: "/refguide6/odata-query-options"
    },
    {
      from: "/refguide6/OData+Representation",
      to: "/refguide6/odata-representation"
    },
    {
      from: "/refguide6/Offline",
      to: "/refguide6/offline"
    },
    {
      from: "/refguide6/Offline+device+profile",
      to: "/refguide6/offline-device-profile"
    },
    {
      from: "/refguide6/On+Click+Event",
      to: "/refguide6/on-click-event"
    },
    {
      from: "/refguide6/Open+Project+Dialog",
      to: "/refguide6/open-project-dialog"
    },
    {
      from: "/refguide6/Opening+Pages",
      to: "/refguide6/opening-pages"
    },
    {
      from: "/refguide6/Operations",
      to: "/refguide6/operations"
    },
    {
      from: "/refguide6/OQL",
      to: "/refguide6/oql"
    },
    {
      from: "/refguide6/OQL+Aggregation",
      to: "/refguide6/oql-aggregation"
    },
    {
      from: "/refguide6/OQL+Case+Expression",
      to: "/refguide6/oql-case-expression"
    },
    {
      from: "/refguide6/OQL+CAST",
      to: "/refguide6/oql-cast"
    },
    {
      from: "/refguide6/OQL+COALESCE",
      to: "/refguide6/oql-coalesce"
    },
    {
      from: "/refguide6/OQL+DATEDIFF",
      to: "/refguide6/oql-datediff"
    },
    {
      from: "/refguide6/OQL+DATEPART",
      to: "/refguide6/oql-datepart"
    },
    {
      from: "/refguide6/OQL+Expressions",
      to: "/refguide6/oql-expressions"
    },
    {
      from: "/refguide6/OQL+From+Clause",
      to: "/refguide6/oql-from-clause"
    },
    {
      from: "/refguide6/OQL+FULL+OUTER+JOIN",
      to: "/refguide6/oql-full-outer-join"
    },
    {
      from: "/refguide6/OQL+Functions",
      to: "/refguide6/oql-functions"
    },
    {
      from: "/refguide6/OQL+Group+by+Clause",
      to: "/refguide6/oql-group-by-clause"
    },
    {
      from: "/refguide6/OQL+INNER+JOIN",
      to: "/refguide6/oql-inner-join"
    },
    {
      from: "/refguide6/OQL+LEFT+OUTER+JOIN",
      to: "/refguide6/oql-left-outer-join"
    },
    {
      from: "/refguide6/OQL+LENGTH",
      to: "/refguide6/oql-length"
    },
    {
      from: "/refguide6/OQL+Limit+Clause",
      to: "/refguide6/oql-limit-clause"
    },
    {
      from: "/refguide6/OQL+Operators",
      to: "/refguide6/oql-operators"
    },
    {
      from: "/refguide6/OQL+Order+by+Clause",
      to: "/refguide6/oql-order-by-clause"
    },
    {
      from: "/refguide6/OQL+Parameters",
      to: "/refguide6/oql-parameters"
    },
    {
      from: "/refguide6/OQL+RANGEBEGIN",
      to: "/refguide6/oql-rangebegin"
    },
    {
      from: "/refguide6/OQL+RANGEEND",
      to: "/refguide6/oql-rangeend"
    },
    {
      from: "/refguide6/OQL+RIGHT+OUTER+JOIN",
      to: "/refguide6/oql-right-outer-join"
    },
    {
      from: "/refguide6/OQL+ROUND",
      to: "/refguide6/oql-round"
    },
    {
      from: "/refguide6/OQL+Select+Clause",
      to: "/refguide6/oql-select-clause"
    },
    {
      from: "/refguide6/OQL+Where+Clause",
      to: "/refguide6/oql-where-clause"
    },
    {
      from: "/refguide6/Oracle",
      to: "/refguide6/oracle"
    },
    {
      from: "/refguide6/Packaging+Hybrid+Mobile+Apps",
      to: "/refguide6/packaging-hybrid-mobile-apps"
    },
    {
      from: "/refguide6/Page",
      to: "/refguide6/page"
    },
    {
      from: "/refguide6/Page+Break+Document+Template",
      to: "/refguide6/page-break-document-template"
    },
    {
      from: "/refguide6/Page+Concepts",
      to: "/refguide6/page-concepts"
    },
    {
      from: "/refguide6/Page+Templates",
      to: "/refguide6/page-templates"
    },
    {
      from: "/refguide6/Page+title",
      to: "/refguide6/page-title"
    },
    {
      from: "/refguide6/Pages",
      to: "/refguide6/pages"
    },
    {
      from: "/refguide6/Parameter",
      to: "/refguide6/parameter"
    },
    {
      from: "/refguide6/Parse+and+format+date+function+calls",
      to: "/refguide6/parse-and-format-date-function-calls"
    },
    {
      from: "/refguide6/Parse+and+format+decimal+function+calls",
      to: "/refguide6/parse-and-format-decimal-function-calls"
    },
    {
      from: "/refguide6/Parse+and+format+float+function+calls",
      to: "/refguide6/parse-and-format-float-function-calls"
    },
    {
      from: "/refguide6/Parse+integer",
      to: "/refguide6/parse-integer"
    },
    {
      from: "/refguide6/Password+Policy",
      to: "/refguide6/password-policy"
    },
    {
      from: "/refguide6/Persistability",
      to: "/refguide6/persistability"
    },
    {
      from: "/refguide6/Phone+profile",
      to: "/refguide6/phone-profile"
    },
    {
      from: "/refguide6/Placeholder",
      to: "/refguide6/placeholder"
    },
    {
      from: "/refguide6/Preferences+Dialog",
      to: "/refguide6/preferences-dialog"
    },
    {
      from: "/refguide6/Proactive+Maintenance",
      to: "/refguide6/proactive-maintenance"
    },
    {
      from: "/refguide6/Project",
      to: "/refguide6/project"
    },
    {
      from: "/refguide6/Project+Security",
      to: "/refguide6/project-security"
    },
    {
      from: "/refguide6/Project+Settings",
      to: "/refguide6/project-settings"
    },
    {
      from: "/refguide6/Publish+Packages+To+Mobile+Stores",
      to: "/refguide6/publish-packages-to-mobile-stores"
    },
    {
      from: "/refguide6/Published+App+Service",
      to: "/refguide6/published-app-service"
    },
    {
      from: "/refguide6/Published+App+Services",
      to: "/refguide6/published-app-services"
    },
    {
      from: "/refguide6/Published+OData+resource",
      to: "/refguide6/published-odata-resource"
    },
    {
      from: "/refguide6/Published+OData+Services",
      to: "/refguide6/published-odata-services"
    },
    {
      from: "/refguide6/Published+web+service",
      to: "/refguide6/published-web-service"
    },
    {
      from: "/refguide6/Published+Web+Services",
      to: "/refguide6/published-web-services"
    },
    {
      from: "/refguide6/Radio+buttons",
      to: "/refguide6/radio-buttons"
    },
    {
      from: "/refguide6/Range+Search+Field",
      to: "/refguide6/range-search-field"
    },
    {
      from: "/refguide6/Reference+selector",
      to: "/refguide6/reference-selector"
    },
    {
      from: "/refguide6/Reference+set+selector",
      to: "/refguide6/reference-set-selector"
    },
    {
      from: "/refguide6/Regular+Expressions",
      to: "/refguide6/regular-expressions"
    },
    {
      from: "/refguide6/Relational+expressions",
      to: "/refguide6/relational-expressions"
    },
    {
      from: "/refguide6/Remove+button",
      to: "/refguide6/remove-button"
    },
    {
      from: "/refguide6/Removed+APIs",
      to: "/refguide6/removed-apis"
    },
    {
      from: "/refguide6/Report+Button",
      to: "/refguide6/report-button"
    },
    {
      from: "/refguide6/Report+Chart",
      to: "/refguide6/report-chart"
    },
    {
      from: "/refguide6/Report+Date+Parameter",
      to: "/refguide6/report-date-parameter"
    },
    {
      from: "/refguide6/Report+Grid",
      to: "/refguide6/report-grid"
    },
    {
      from: "/refguide6/Report+Pane",
      to: "/refguide6/report-pane"
    },
    {
      from: "/refguide6/Report+Parameter",
      to: "/refguide6/report-parameter"
    },
    {
      from: "/refguide6/Report+Widgets",
      to: "/refguide6/report-widgets"
    },
    {
      from: "/refguide6/Reporting",
      to: "/refguide6/report-widgets"
    },
    {
      from: "/refguide6/Retrieve",
      to: "/refguide6/retrieve"
    },
    {
      from: "/refguide6/Review+log+files+-+MS+IIS+Server",
      to: "/refguide6/review-log-files-ms-iis-server"
    },
    {
      from: "/refguide6/Review+log+files+-+MS+SQL+Server",
      to: "/refguide6/review-log-files-ms-sql-server"
    },
    {
      from: "/refguide6/Rollback+Object",
      to: "/refguide6/rollback-object"
    },
    {
      from: "/refguide6/Row+Document+Template",
      to: "/refguide6/row-document-template"
    },
    {
      from: "/refguide6/Rules",
      to: "/refguide6/rules"
    },
    {
      from: "/refguide6/Runtime",
      to: "/refguide6/runtime"
    },
    {
      from: "/refguide6/Save+button",
      to: "/refguide6/save-button"
    },
    {
      from: "/refguide6/Scheduled+Events",
      to: "/refguide6/scheduled-events"
    },
    {
      from: "/refguide6/Scroll+Container",
      to: "/refguide6/scroll-container"
    },
    {
      from: "/refguide6/Scroll+Container+Region",
      to: "/refguide6/scroll-container-region"
    },
    {
      from: "/refguide6/Search+Bar",
      to: "/refguide6/search-bar"
    },
    {
      from: "/refguide6/Search+button",
      to: "/refguide6/search-button"
    },
    {
      from: "/refguide6/Security",
      to: "/refguide6/security"
    },
    {
      from: "/refguide6/Select++Elements",
      to: "/refguide6/select--elements"
    },
    {
      from: "/refguide6/Select+all+button",
      to: "/refguide6/select-all-button"
    },
    {
      from: "/refguide6/Select+app+service",
      to: "/refguide6/select-app-service"
    },
    {
      from: "/refguide6/Select+button",
      to: "/refguide6/select-button"
    },
    {
      from: "/refguide6/Sequence+Flow",
      to: "/refguide6/sequence-flow"
    },
    {
      from: "/refguide6/Settings",
      to: "/refguide6/settings"
    },
    {
      from: "/refguide6/Show+Home+Page",
      to: "/refguide6/show-home-page"
    },
    {
      from: "/refguide6/Show+Message",
      to: "/refguide6/show-message"
    },
    {
      from: "/refguide6/Show+Page",
      to: "/refguide6/show-page"
    },
    {
      from: "/refguide6/Sidebar+toggle+button",
      to: "/refguide6/sidebar-toggle-button"
    },
    {
      from: "/refguide6/Sign+In+Dialog",
      to: "/refguide6/sign-in-dialog"
    },
    {
      from: "/refguide6/Sign+out+button",
      to: "/refguide6/sign-out-button"
    },
    {
      from: "/refguide6/Simple+Menu+Bar",
      to: "/refguide6/simple-menu-bar"
    },
    {
      from: "/refguide6/Snippet",
      to: "/refguide6/snippet"
    },
    {
      from: "/refguide6/Snippet+Call",
      to: "/refguide6/snippet-call"
    },
    {
      from: "/refguide6/Sort+Bar",
      to: "/refguide6/sort-bar"
    },
    {
      from: "/refguide6/Special+checks",
      to: "/refguide6/special-checks"
    },
    {
      from: "/refguide6/Start+Event",
      to: "/refguide6/start-event"
    },
    {
      from: "/refguide6/Starting+Microflows",
      to: "/refguide6/starting-microflows"
    },
    {
      from: "/refguide6/Static+Image+Document+Template",
      to: "/refguide6/static-image-document-template"
    },
    {
      from: "/refguide6/Static+Label+Document+Template",
      to: "/refguide6/static-label-document-template"
    },
    {
      from: "/refguide6/String+function+calls",
      to: "/refguide6/string-function-calls"
    },
    {
      from: "/refguide6/Style",
      to: "/refguide6/style"
    },
    {
      from: "/refguide6/Sync+button",
      to: "/refguide6/sync-button"
    },
    {
      from: "/refguide6/System+Requirements",
      to: "/refguide6/system-requirements"
    },
    {
      from: "/refguide6/System+Texts",
      to: "/refguide6/system-texts"
    },
    {
      from: "/refguide6/Tab+container",
      to: "/refguide6/tab-container"
    },
    {
      from: "/refguide6/Tab+page",
      to: "/refguide6/tab-page"
    },
    {
      from: "/refguide6/Table",
      to: "/refguide6/table"
    },
    {
      from: "/refguide6/Table+cell",
      to: "/refguide6/table-cell"
    },
    {
      from: "/refguide6/Table+Document+Template",
      to: "/refguide6/table-document-template"
    },
    {
      from: "/refguide6/Table+row",
      to: "/refguide6/table-row"
    },
    {
      from: "/refguide6/Tablet+profile",
      to: "/refguide6/tablet-profile"
    },
    {
      from: "/refguide6/Team+Server",
      to: "/refguide6/team-server"
    },
    {
      from: "/refguide6/Team+Server+FAQ",
      to: "/refguide6/team-server-faq"
    },
    {
      from: "/refguide6/Template+grid",
      to: "/refguide6/template-grid"
    },
    {
      from: "/refguide6/Template+Grid+Document+Template",
      to: "/refguide6/template-grid-document-template"
    },
    {
      from: "/refguide6/Text",
      to: "/refguide6/text"
    },
    {
      from: "/refguide6/Text+area",
      to: "/refguide6/text-area"
    },
    {
      from: "/refguide6/Text+box",
      to: "/refguide6/text-box"
    },
    {
      from: "/refguide6/Third+Party+Licenses",
      to: "/refguide6/third-party-licenses"
    },
    {
      from: "/refguide6/Title+Document+Template",
      to: "/refguide6/title-document-template"
    },
    {
      from: "/refguide6/To+float",
      to: "/refguide6/to-float"
    },
    {
      from: "/refguide6/To+string",
      to: "/refguide6/to-string"
    },
    {
      from: "/refguide6/Transient+Objects+Garbage+Collecting",
      to: "/refguide6/transient-objects-garbage-collecting"
    },
    {
      from: "/refguide6/Translatable+Texts",
      to: "/refguide6/translatable-texts"
    },
    {
      from: "/refguide6/Trim+to+date",
      to: "/refguide6/trim-to-date"
    },
    {
      from: "/refguide6/Troubleshooting",
      to: "/refguide6/troubleshooting"
    },
    {
      from: "/refguide6/Unary+expressions",
      to: "/refguide6/unary-expressions"
    },
    {
      from: "/refguide6/Upload+To+Team+Server+Dialog",
      to: "/refguide6/upload-to-team-server-dialog"
    },
    {
      from: "/refguide6/User+Roles",
      to: "/refguide6/user-roles"
    },
    {
      from: "/refguide6/User+Role",
      to: "/refguide6/user-roles"
    },
    {
      from: "/refguide6/Using+a+proxy+to+call+a+webservice",
      to: "/refguide6/using-a-proxy-to-call-a-webservice"
    },
    {
      from: "/refguide6/Using+Eclipse",
      to: "/refguide6/using-eclipse"
    },
    {
      from: "/refguide6/Validation+Feedback",
      to: "/refguide6/validation-feedback"
    },
    {
      from: "/refguide6/Validation+Rules",
      to: "/refguide6/validation-rules"
    },
    {
      from: "/refguide6/Variable+Activities",
      to: "/refguide6/variable-activities"
    },
    {
      from: "/refguide6/Version+Control",
      to: "/refguide6/version-control"
    },
    {
      from: "/refguide6/Version+Control+Concepts",
      to: "/refguide6/version-control-concepts"
    },
    {
      from: "/refguide6/Version+Control+Scenarios",
      to: "/refguide6/version-control-scenarios"
    },
    {
      from: "/refguide6/version-downgrade-prevention",
      to: "/developerportal/deploy/version-downgrade-prevention"
    },
    {
      from: "/refguide6/Vertical+Split+Pane",
      to: "/refguide6/vertical-split-pane"
    },
    {
      from: "/refguide6/XML+Inheritance+and+Choice",
      to: "/refguide6/xml-inheritance-and-choice"
    },
    {
      from: "/refguide6/XML+Reference+Guide",
      to: "/refguide6/xml-reference-guide"
    },
    {
      from: "/refguide6/XML+Schema+Support",
      to: "/refguide6/xml-schema-support"
    },
    {
      from: "/refguide6/XML+Schemas",
      to: "/refguide6/xml-schemas"
    },
    {
      from: "/refguide6/XPath",
      to: "/refguide6/xpath"
    },
    {
      from: "/refguide6/XPath+avg",
      to: "/refguide6/xpath-avg"
    },
    {
      from: "/refguide6/XPath+Constraint+Functions",
      to: "/refguide6/xpath-constraint-functions"
    },
    {
      from: "/refguide6/XPath+Constraints",
      to: "/refguide6/xpath-constraints"
    },
    {
      from: "/refguide6/XPath+contains",
      to: "/refguide6/xpath-contains"
    },
    {
      from: "/refguide6/XPath+count",
      to: "/refguide6/xpath-count"
    },
    {
      from: "/refguide6/XPath+day+from+dateTime",
      to: "/refguide6/xpath-day-from-datetime"
    },
    {
      from: "/refguide6/XPath+day+of+year+from+dateTime",
      to: "/refguide6/xpath-day-of-year-from-datetime"
    },
    {
      from: "/refguide6/XPath+ends+with",
      to: "/refguide6/xpath-ends-with"
    },
    {
      from: "/refguide6/XPath+Expressions",
      to: "/refguide6/xpath-expressions"
    },
    {
      from: "/refguide6/XPath+false",
      to: "/refguide6/xpath-false"
    },
    {
      from: "/refguide6/XPath+hours+from+dateTime",
      to: "/refguide6/xpath-hours-from-datetime"
    },
    {
      from: "/refguide6/XPath+id",
      to: "/refguide6/xpath-id"
    },
    {
      from: "/refguide6/XPath+Keywords+and+System+Variables",
      to: "/refguide6/xpath-keywords-and-system-variables"
    },
    {
      from: "/refguide6/XPath+length",
      to: "/refguide6/xpath-length"
    },
    {
      from: "/refguide6/XPath+max",
      to: "/refguide6/xpath-max"
    },
    {
      from: "/refguide6/XPath+min",
      to: "/refguide6/xpath-min"
    },
    {
      from: "/refguide6/XPath+minutes+from+dateTime",
      to: "/refguide6/xpath-minutes-from-datetime"
    },
    {
      from: "/refguide6/XPath+month+from+dateTime",
      to: "/refguide6/xpath-month-from-datetime"
    },
    {
      from: "/refguide6/XPath+not",
      to: "/refguide6/xpath-not"
    },
    {
      from: "/refguide6/XPath+Operators",
      to: "/refguide6/xpath-operators"
    },
    {
      from: "/refguide6/XPath+quarter+from+dateTime",
      to: "/refguide6/xpath-quarter-from-datetime"
    },
    {
      from: "/refguide6/XPath+Query+Functions",
      to: "/refguide6/xpath-query-functions"
    },
    {
      from: "/refguide6/XPath+seconds+from+dateTime",
      to: "/refguide6/xpath-seconds-from-datetime"
    },
    {
      from: "/refguide6/XPath+Source",
      to: "/refguide6/xpath-source"
    },
    {
      from: "/refguide6/XPath+starts+with",
      to: "/refguide6/xpath-starts-with"
    },
    {
      from: "/refguide6/XPath+string+length",
      to: "/refguide6/xpath-string-length"
    },
    {
      from: "/refguide6/XPath+sum",
      to: "/refguide6/xpath-sum"
    },
    {
      from: "/refguide6/XPath+Tokens",
      to: "/refguide6/xpath-tokens"
    },
    {
      from: "/refguide6/XPath+true",
      to: "/refguide6/xpath-true"
    },
    {
      from: "/refguide6/XPath+week+from+dateTime",
      to: "/refguide6/xpath-week-from-datetime"
    },
    {
      from: "/refguide6/XPath+weekday+from+dateTime",
      to: "/refguide6/xpath-weekday-from-datetime"
    },
    {
      from: "/refguide6/XPath+year+from+dateTime",
      to: "/refguide6/xpath-year-from-datetime"
    },	
    {
      from: "/howto6/Solving+Load+and+Import+Errors",
      to: "/howto6/solving-load-and-import-errors"
    },
	/****************************************************
     * From Studio (potentially temporary until the support of old bundles stops, mapped)
     ****************************************************/
	{
      from: "/refguide/web-modeler/domain-models-association-properties-wm",
      to: "/studio/domain-models-association-properties"
    },
	{
      from: "/refguide/web-modeler",
      to: "/studio/"
    },
	{
      from: "/refguide/web-modeler/microflows-wm",
      to: "/studio/microflows"
    },
	{
      from: "/refguide/web-modeler/microflows-expressions-wm",
      to: "/studio/microflows-expressions"
    },
	{
      from: "/refguide/web-modeler/app-settings-wm",
      to: "/studio/settings-widget-overview"
    },	
	{
      from: "/studio/general-collaborative-development",
      to: "/studio/collaborative-development"
    },    
	/****************************************************
     * From Developer Portal (permanent, mapped) 
     ****************************************************/
	{
      from: "/developerportal/settings/technical-contact",
      to: "/developerportal/company-app-roles/technical-contact"
    }, 
    {
      from: "/developerportal/general/technical-contact",
      to: "/developerportal/company-app-roles/technical-contact"
    },	 
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
	{
      from: "/releasenotes/desktop-modeler/6.10",
      to: "/releasenotes/studio-pro/6.10"
    },
	{
      from: "/releasenotes/desktop-modeler/6.9",
      to: "/releasenotes/studio-pro/6.9"
    },
	{
      from: "/releasenotes/desktop-modeler/6.8",
      to: "/releasenotes/studio-pro/6.8"
    },
	{
      from: "/releasenotes/desktop-modeler/6.7",
      to: "/releasenotes/studio-pro/6.7"
    },
	{
      from: "/releasenotes/desktop-modeler/6.6",
      to: "/releasenotes/studio-pro/6.6"
    },
	{
      from: "/releasenotes/desktop-modeler/6.5",
      to: "/releasenotes/studio-pro/6.5"
    },
	{
      from: "/releasenotes/desktop-modeler/6.4",
      to: "/releasenotes/studio-pro/6.4"
    },
	{
      from: "/releasenotes/desktop-modeler/6.3",
      to: "/releasenotes/studio-pro/6.3"
    },
	{
      from: "/releasenotes/desktop-modeler/6.2",
      to: "/releasenotes/studio-pro/6.2"
    },
	{
      from: "/releasenotes/desktop-modeler/6.1",
      to: "/releasenotes/studio-pro/6.1"
    },
	{
      from: "/releasenotes/desktop-modeler/6.0",
      to: "/releasenotes/studio-pro/6.0"
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
      to: "/refguide/cell-document-template"
    },
	{
      from: "/refguide7/close-form",
      to: "/refguide/close-page"
    },
	{
      from: "/refguide7/columns-(document-template)",
      to: "/refguide/columns-document-template"
    },
	{
      from: "/refguide7/consumed-odata-services",
      to: "/refguide/published-odata-services"
    },
	{
      from: "/refguide7/data-grid-(document-template)",
      to: "/refguide/data-grid-document-template"
    },
	{
      from: "/refguide7/data-view-(document-template)",
      to: "/refguide/data-view-document-template"
    },
	{
      from: "/refguide7/dynamic-image-(document-template)",
      to: "/refguide/dynamic-image-document-template"
    },
	{
      from: "/refguide7/dynamic-label-(document-template)",
      to: "/refguide/dynamic-label-document-template"
    },
	{
      from: "/refguide7/footer-(document-template)",
      to: "/refguide/footer-document-template"
    },
	{
      from: "/refguide7/header-(document-template)",
      to: "/refguide/header-document-template"
    },
	{
      from: "/refguide7/line-break-(document-template)",
      to: "/refguide/line-break-document-template"
    },
	{
      from: "/refguide7/page-break-(document-template)",
      to: "/refguide/page-break-document-template"
    },
	{
      from: "/refguide7/page-template",
      to: "/refguide/page-templates"
    },
	{
      from: "/refguide7/row-(document-template)",
      to: "/refguide/row-document-template"
    },
	{
      from: "/refguide7/static-image-(document-template)",
      to: "/refguide/static-image-document-template"
    },
	{
      from: "/refguide7/static-label-(document-template)",
      to: "/refguide/static-label-document-template"
    },
	{
      from: "/refguide7/table-(document-template)",
      to: "/refguide/table-document-template"
    },
	{
      from: "/refguide7/template-grid-(document-template)",
      to: "/refguide/template-grid-document-template"
    },
	{
      from: "/refguide7/title-(document-template)",
      to: "/refguide/title-document-template"
    },
  ]
}
