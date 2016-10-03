---
title: "Installation steps"
category: "Installation"
---
This chapter describes the installation of the APM tool.

# Backup

Did you commit your work to the team server? And did you make a database backup?
![](attachments/Installation_steps/Commit.png)

If you don't have installed an SVN client like Tortoise SVN make a copy of the widgets folder in your project.

# Import Module APMAgent

Import the module APMAgent in the modeler.
![](attachments/Installation_steps/Import_Module_Package.png)

Write down the widgets in the warning dialog that are overwritten to be able to revert these changes.

# Optional: revert overwritten widgets

If you don't want your widgets replaced with the widgets in the APM Tool module use the Tortoise SVN revert function on the widgets folder. Or copy the backup widgets from the first step back to the widgets folder.
Unmodified AppStore widgets:
\widgets\CustomString.mpk
\widgets\ChartJS.mpk
\widgets\BootstrapTreeViewWidget.mpk
Mansystems also added some widgets that are not in the AppStore.

# Copy Language if other than English US is used

If you are not using only English, United States copy the English, United States language for the APMAgent module to all the languages using Tools\Language Operations in the modeller:
![](attachments/Installation_steps/Language_Operations_Header.png)

![](attachments/Installation_steps/Language_Operations_APM.png)
![](attachments/Installation_steps/Language_Operations_Footer.png)

# Add permissions

Add permissions APMAgent.Admin to project security / user roles tab to a selected administrator role.
![](attachments/Installation_steps/Add_Permissions.png)

**_Note._** _Do not use the Debug role. This is for developer of the APM tool to test certain features._ _If you want to get rid of the warnings about security introduce a Debug user role and give this user role permissions to APMAgent.Debug._

**_Note_**_. The same applies for the OData role_

**_Note._** _You can choose to add the HeapDump role if you want to make heap dumps in java. In the cloud you need additional permissions to be requested at Mendix support._

# Add to navigation

To use the APM Tools you need to call the APM Tool user interface (UI). Use the "APMAgent/USE_ME/IVK_OpenConsole" microflow for this. Add a navigation menu item for example.
![](attachments/Installation_steps/Add_To_Navigation.png)

# Optional: Add to After startup and before shutdown

**_Note._** _It is advised to use the AfterStartup and BeforeShutdown_ _microflows. If you do not use them and the tool is running, shutting down your Mendix application will take some time waiting for timeouts._

Call APMAgent\USE_ME\AfterStartup from an after startup microflow. This feature is runtime configurable and by default none of the tools are started.

Call APMAgent\USE_ME\BeforeShutdown from a before shutdown microflow.

You can find the AfterStartup and BeforeShutdown microflows in the project settings.
![](attachments/Installation_steps/Project_Settings_After_Startup.png)

# Fix error(s)

The following error is known to appear:

1.  An error that you have to update widgets because a different version is used in the project

# Start the Modeler or the Runtime

You can now startup.

If an error appears check [here](After+Startup+Error).

Otherwise login as Admin and navigate to the APM Tool.

# Welcome dialog

After startup for the first time a small wizard is started:
![](attachments/Installation_steps/Welcom_Dialog.png)

*   Use button to send mail with license request
*   Upon receiving the license, copy-paste
*   Select production / non-production
*   Save
