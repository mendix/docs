---
title: "Installation Steps"
parent: "installation-1"
---
This chapter describes the installation of the APM tool. For details on upgrading to a new version, see [Upgrade Steps](upgrade-steps).

## Backup

Did you commit your work to the team server? And did you make a database backup?

![](attachments/Installation_steps/Commit.png)

If you don't have an SVN client like Tortoise SVN installed, make a copy of the widgets folder in your project.

## Import Module APMAgent

Import the module APMAgent in the modeler.

![](attachments/Installation_steps/Import_Module_Package.png)

Write down the widgets in the warning dialog that are overwritten to be able to revert these changes.

## Copy the Language If a Language Other Than English US Is Used

If you are not using only **English, United States**, copy the **English, United States** language for the APMAgent module to all the languages using **Tools** > **Language Operations** in the Modeller:

![](attachments/Installation_steps/Language_Operations_Header.png)

![](attachments/Installation_steps/Language_Operations_APM.png)

![](attachments/Installation_steps/Language_Operations_Footer.png)

## Add Permissions

Add `APMAgent.Admin` permissions to the project **Ssecurity** > **User roles** tab for a selected administrator role.

![](attachments/Installation_steps/Add_Permissions.png)

**Note:** Do not use the Debug role. This is for developers of the APM tool to test certain features.

**Note:** You can choose to add the HeapDump role if you want to make heap dumps in Java. In the cloud you need additional permissions, which are to be requested at Mendix support.

**Note:** If you want to get rid of the warnings about security, introduce the Debug, HeapDump, Load test recorder, and OData user roles. Then give these roles the corresponding permissions from the APM module: APMAgent.Debug, APMAgent.HeapDump, APMAgent.OData, and APMAgent.LoadTestRecorder.

## Add to Navigation

To use the APM tools, you need to call the APM tool UI. Use the **APMAgent/USE_ME/IVK_OpenConsole** microflow for this. Add a navigation menu item, for example.

![](attachments/Installation_steps/Add_To_Navigation.png)

## Optional: Add to After Startup and Before Shutdown

{{% alert type="info" %}}

Using the AfterStartup and BeforeShutdown microflows is advised. If you do not use them and the tool is running, shutting down your Mendix application will take some time waiting for timeouts.

{{% /alert %}}

Call `APMAgent\USE_ME\AfterStartup` from an after startup microflow. This feature is runtime-configurable and, by default, none of the tools are started.

Call `APMAgent\USE_ME\BeforeShutdown` from a before shutdown microflow.

You can find the AfterStartup and BeforeShutdown microflows in the project settings.

![](attachments/Installation_steps/Project_Settings_After_Startup.png)

## Configure APMAgent.CompanyName and APMAgent.AppName Constants

Set the name of your company and app in the constants. 

**Note:** Do not change the constants in the model. Use the Modeler settings or the runtime settings for constants. After an upgrade, a model constant gets overwritten.

## Optionally Configure the APMAgent.NotifyMicroflowName Constant

This constant defines the microflow that is called on the trigger notify action. You can call a microflow that sends an e-mail. The microflow gets three string parameters:

* **To**
* **Subject**
* **Message**

See the sample microflow APMAgent.SampleNotifyMicroflow_LogMessage.

## Start the Modeler or the Runtime

You can now start up.

If an error appears, see [After Startup Error](after-startup-error).

Otherwise, log in as Admin and navigate to the APM tool.

## Welcome Dialog

After startup for the first time, a small wizard is started:

![](attachments/Installation_steps/Welcome_Dialog.png)

*   If you have received a license request code for this app, you can enter this code in the license request code field.   
*   Use the **Mail license request** button to send a mail with the license request.
*   If a mail client does not open, is not configured, or fails otherwise, use the **Manual license request** button .This opens a dialog box so that you can copy-paste the text for the email to be sent to [apmtool@mansystems.nl](mailto:apmtool@mansystems.nl).
*   Upon receiving the license, copy-paste the license in the **License key** field.
*   Select **Production** or **Non-Production**.
*   Select **Save**.

Now the tools that are configured for after startup have been started, and the tool is ready to be used.
