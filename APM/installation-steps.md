---
title: "Installation steps"
space: "Application Performance Monitor"
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

# Copy Language If Other Than English US Is Used

If you are not using only English, United States copy the English, United States language for the APMAgent module to all the languages using Tools\Language Operations in the modeller:

![](attachments/Installation_steps/Language_Operations_Header.png)

![](attachments/Installation_steps/Language_Operations_APM.png)

![](attachments/Installation_steps/Language_Operations_Footer.png)

# Add Permissions

Add permissions APMAgent.Admin to project security / user roles tab to a selected administrator role.

![](attachments/Installation_steps/Add_Permissions.png)

**Note:** Do not use the Debug role. This is for developer of the APM tool to test certain features.

**Note:** You can choose to add the HeapDump role if you want to make heap dumps in java. In the cloud you need additional permissions to be requested at Mendix support.

**Note:** If you want to get rid of the warnings about security introduce Debug, HeapDump, Load test recorder and OData user roles
and give these user roles the corresponding permissions from the APM module: APMAgent.Debug, APMAgent.HeapDump, APMAgent.OData and APMAgent.LoadTestRecorder.

# Add to Navigation

To use the APM Tools you need to call the APM Tool user interface (UI). Use the "APMAgent/USE_ME/IVK_OpenConsole" microflow for this. Add a navigation menu item for example.

![](attachments/Installation_steps/Add_To_Navigation.png)

# Optional: Add to After Startup and Before Shutdown

<div class="alert alert-info">

It is advised to use the AfterStartup and BeforeShutdown_ _microflows. If you do not use them and the tool is running, shutting down your Mendix application will take some time waiting for timeouts.

</div>

Call APMAgent\USE_ME\AfterStartup from an after startup microflow. This feature is runtime configurable and by default none of the tools are started.

Call APMAgent\USE_ME\BeforeShutdown from a before shutdown microflow.

You can find the AfterStartup and BeforeShutdown microflows in the project settings.

![](attachments/Installation_steps/Project_Settings_After_Startup.png)

# Configure APMAgent.CompanyName constant

Set the name of you company in the constant. Do not change the constant in the model. Use the Modeler settings or
the runtime settings for constants. After an upgrade the model constant gets overwritten.

# Start the Modeler or the Runtime

You can now startup.

If an error appears check [here](after-startup-error).

Otherwise login as Admin and navigate to the APM Tool.

# Welcome Dialog

After startup for the first time a small wizard is started:

![](attachments/Installation_steps/Welcome_Dialog.png)

*   Use button to send mail with license request. One buttons tries to open your mail client. The other opens
a dialog, so you can copy-paste text for the email to be sent at [apmtool&#64;mansystems.nl](mailto:apmtool@mansystems.nl).
*   Upon receiving the license, copy-paste
*   Select production / non-production
*   Save
