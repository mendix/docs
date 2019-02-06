module.exports = {
  "redirect": [
    /****************************************************
     * General Redirects (permanent)
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
     * Developer Portal Guide (mapped, unversioned, temporary until fixed in product)
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
      from: "/developerportal/operate/mendix-cloud-status",
      to: "/developerportal/deploy/mendix-cloud-status"
    },
    {
      from: "/community/app-store-content-support",
      to: "/developerportal/app-store/app-store-content-support"
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
      from: "/deployment/mendixcloud/certificates",
      to: "/developerportal/deploy/certificates"
    },
	{
      from: "/mendixcloud/custom-domains",
      to: "/developerportal/deploy/custom-domains"
    },
    {
      from: "/mendixcloud/deploying-to-the-cloud",
      to: "/developerportal/deploy/mendix-cloud-deploy"
    },
    {
      from: "/mendixcloud/how-to-link-app-to-node",
      to: "/developerportal/deploy/licensing-apps"
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
      from: "/mendixcloud/maintenance-windows",
      to: "/developerportal/deploy/maintenance-windows"
    },
    {
      from: "/developerportal/howto/migrating-to-v4",
      to: "/developerportal/deploy/migrating-to-v4"
    },
    {
      from: "/mendixcloud/monitoring-application-health",
      to: "/developerportal/operate/monitoring-application-health"
    },
    {
      from: "/deployment/mendixcloud/how-to-deploy-a-mendix-app-on-azure",
      to: "/developerportal/deploy/azure-deploy"
    },
    {
      from: "/developerportal/howto/deploying-to-the-cloud",
      to: "/developerportal/deploy/mendix-cloud-deploy"
    },
    {
      from: "/deployment/on-premises",
      to: "/developerportal/deploy/on-premises-design"
    },
    {
      from: "/deployment/cloud-foundry/",
      to: "/developerportal/deploy/cloud-foundry-deploy"
    },
	{
      from: "/refguide/certificates",
      to: "/developerportal/deploy/certificates"
    },
	{
      from: "/howto/deploying-a-mendix-app-to-cloud-foundry",
      to: "/developerportal/deploy/cloud-foundry-deploy"
    },
	/****************************************************
     * From the App Store (mapped, unversioned, temporary until fixed in product)
     ****************************************************/
	{
	  from: "/community/app-store/use-app-store-content-in-the-modeler",
	  to: "/developerportal/app-store/use-app-store-content-in-the-modeler"
    },
	{
      from: "/howto/collaboration-project-management/contribute-to-a-github-repository",
      to: "/howto/collaboration-requirements-management/contribute-to-a-github-repository"
    },
	{
      from: "/mendixcloud/java-in-the-cloud",
      to: "/developerportal/deploy/java-in-the-cloud"
    },
	{
      from: "/mendixcloud/security-constraints-in-the-mendix-cloud",
      to: "/developerportal/deploy/java-in-the-cloud"
    },
	{
      from: "/howto50/Contributing+to+a+GitHub+repository",
      to: "/howto/collaboration-requirements-management/contribute-to-a-github-repository"
    },
	{
      from: "/mendixcloud/Integrate+your+app+with+Mendix+SSO",
      to: "/developerportal/deploy/integrate-with-mendix-sso"
    },
	/****************************************************
     * Web Modeler Guide (mapped, unversioned, temporary until fixed in product)
     ****************************************************/
	 {
      from: "/refguide/web-modeler",
      to: "/web-modeler/"
    },
	{
      from: "/refguide/web-modeler/domain-models-association-properties-wm",
      to: "/web-modeler/domain-models-association-properties-wm"
    },
	{
      from: "/refguide/web-modeler/microflows-wm",
      to: "/web-modeler/microflows-wm"
    },
	{
      from: "/refguide/web-modeler/microflows-wm",
      to: "/web-modeler/microflows-wm"
    },
	{
      from: "/refguide/web-modeler/microflows-expressions-wm",
      to: "/web-modeler/microflows-expressions-wm"
    },
	{
      from: "/refguide/web-modeler/app-settings-wm",
      to: "/web-modeler/app-settings-wm"
    },
	{
      from: "/howto/start-with-a-blank-app",
      to: "/web-modeler/general-wm"
    },
    {
      from: "/howto/tutorials/create-a-to-do-app",
      to: "/web-modeler/general-wm"
    },
    {
      from: "/howto/tutorials/build-a-simple-hrm-app",
      to: "/web-modeler/general-wm"
    },
    {
      from: "/howto/tutorials/build-an-iot-app",
      to: "/web-modeler/general-wm"
    },
	/****************************************************
     * How-to's version 7 (unmapped, temporary)
     ****************************************************/
    {
      from: "/howtogeneral/bestpractices/ux-best-practices",
      to: "/howto/ux/ux-best-practices"
    },
	{
      from: "/howtogeneral/bestpractices/best-practices-security-and-improvements-for-mendix-applications",
      to: "/howto/security/best-practices-security"
    },
	/****************************************************
     * From Desktop Modeler version 7 (mapped, permanent)
     ****************************************************/
	{
      from: "/refguide/modeler",
      to: "/refguide/desktop-modeler-overview"
    },
	{
      from: "/refguide/Modeler",
      to: "/refguide/desktop-modeler-overview"
    },
	{
      from: "/refguide/download-from-team-server-dialog",
      to: "/refguide/download-from-version-control-dialog"
    },
    {
      from: "/refguide/open-project-dialog",
      to: "/refguide/open-app-dialog"
    },
    {
      from: "/refguide/upload-to-team-server-dialog",
      to: "/refguide/upload-to-version-control-dialog"
    },
    {
      from: "/refguide/microflow-expressions",
      to: "/refguide/expressions"
    },
    {
      from: "/refguide/vertical-split-pane",
      to: "/refguide/scroll-container"
    },
	{
      from: "/howto/deploying-a-mendix-app-to-cloud-foundry",
      to: "/developerportal/deploy/cloud-foundry-deploy"
    },
	{
      from: "/howto/web-modeler/syncing-webmodeler-desktop",
      to: "/web-modeler/general-sync-webmodeler-desktopmodeler"
    },
	{
      from: "/howto/solving-load-and-import-errors",
      to: "/howto/monitoring-troubleshooting/solving-load-and-import-errors"
    },
	/****************************************************
     * Reference Guide version 6
     ****************************************************/
    {
      from: "/refguide6/Reference+Guide+6",
      to: "/refguide6/"
	},
	{
      from: "/refguide6/Modeler",
      to: "/refguide6/modeler"
    },	
	/****************************************************
     * APM (unmapped, permanent)
     ****************************************************/
    // {
    //   from: "~*\\\/apm\\\/use-cases\\\/uc",
    //   to: "/apm/use-cases/",
    //   exact: true
    // },
    // {
    //   from: "~*\\\/apm\\\/installation-guide\\\/ig",
    //   to: "/apm/installation-guide/",
    //   exact: true
    // },
    // {
    //   from: "~*\\\/apm\\\/reference-guide\\\/rg",
    //   to: "/apm/reference-guide/",
    //   exact: true
    // },
  ]
}
