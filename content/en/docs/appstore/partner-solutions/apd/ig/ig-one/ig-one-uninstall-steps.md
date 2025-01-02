---
title: "Uninstall Steps"
url: /appstore/partner-solutions/apd/ig-one-uninstall-steps/
weight: 3
---

## Introduction

This chapter describes the uninstallation of the APM tool. The optional in this chapter means you need to verify if this option was chosen during the install before undoing it.

## Backup

Did you commit your work to the team server? And did you make a database backup?
{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-uninstall-steps/Delete_Module.png" class="no-border" >}}

At this step, either make a local copy of the widgets folder in your app or have a third party version control client installed such as TortoiseGit. You can use this to revert accidental changes in the next step.

## Delete Module APMAgent

Import the module APMAgent in the modeler.
{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-uninstall-steps/Commit.png" class="no-border" >}}

## Delete CLEVR Customized Widgets

CLEVR customized versions of Marketplace widgets:

* ManTooltip.mpk
* StringFormatter.mpk
* CssSelectorHelperBoolean.mpk
* StyleSheetSwap.mpk
* MicroflowTimer_APM.mpk
* FormatString_APM.mpk
* ChartJS_APM.mpk
* BootstrapTreeViewWidget_APM.mpk
* BooleanSlider_APM.mpk

## Delete Permissions

Delete permissions APMAgent.Admin from project security / user roles tab to a selected administrator role. On Edit of the last dialog Mendix will remove the permissions for you.
{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-uninstall-steps/Delete_Permissions.png" class="no-border" >}}

***Note.*** *If you added the Debug role, remove it now.*

## Delete from Navigation

Delete the APM Tools item that calls "APMAgent/USE_ME/IVK_OpenConsole" from navigation.

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-uninstall-steps/Delete_From_Navigation.png" class="no-border" >}}

## Optional: Revert After Startup and Before Shutdown

Remove the microflow call action to APMAgent\USE_ME\AfterStartup from an after startup microflow. This feature is runtime configurable and by default none of the tools are started.
Remove the microflow call action to APMAgent\USE_ME\BeforeShutdown from a before shutdown microflow.
You can find the AfterStartup and BeforeShutdown microflows in the project settings.

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-uninstall-steps/Revert_After_Startup.png" class="no-border" >}}

## Optional: Undo Request Permissions for Mendix Cloud or On-Premises Runtime

For a Mendix Cloud slot you send an email to Mendix support requesting to undo the added permissions

## Remove User Libraries

Remove the APMAgent libraries in the project folder 'userlib':

* apm
* com.mendix.ojdbc6.jar
* com.mendix.postgresql.jdbc4.jar
* com.mendix.sqljdbc4.jar
* org.hsqldb.hsqldb.jar
* org.mariadb.jdbc.jar
* log4j

## Start the Modeler or the Runtime

Clean deployment and startup.
