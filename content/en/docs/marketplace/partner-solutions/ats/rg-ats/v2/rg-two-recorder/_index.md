---
title: "Desktop Recorder"
url: /appstore/partner-solutions/ats/rg-two-recorder/
---

## Introduction

The ATS Desktop recorder is a function/plugin in ATS that records the actions behind your test steps during testing an application. When you click **Save**, ATS adds the recorded steps to your test case.

## Installing the ATS Desktop Recorder

To use the recorder function, you must have the Google Chrome browser installed on your system, install the **ATS Recorder** Chrome plugin, and download and install the ATS Desktop Recorder. To install the plugin, click **Information** ({{% icon name="info-circle" %}}) in the upper-right corner of the screen:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-recorder/information-icon.png" class="no-border" >}}

Clicking the **ATS Recorder** link will lead you to the Chrome Web Store, where you can add the plugin to your browser. The recorder is called the ATS Desktop Recorder.

## Using the ATS Desktop Recorder

Before you can use the ATS Desktop Recorder, you must set your project preferences to the Desktop Recorder. You can open the project preferences from any page by clicking **Preferences** ({{% icon name="cog" %}}):

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-recorder/configure-project-preferences.png" class="no-border" >}}

With the ATS Recorder plugin installed, you can start a recording session at any time by clicking the **Record** button inside a test case or an action. You open the Mendix application you want to test in another tab of the browser, and then start testing the application by walking through the app manually. Then ATS will record all the steps.

Open the recording session with three recorded test steps:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-recorder/recording.png" class="no-border" >}}

Some recorded test steps offer you several actions to choose from. In the example above, you can choose one of the following actions:

* Click the data grid row
* Click the whole widget
* Find/assert the data grid row by the column value

To change the selected action, click the recorded test step under **Recorded Events**, then click **Select** on the right side of the action you want.

## Do I Need Administrative Privileges to Install the Recorder?

In most cases for the Desktop Recorder, no additional administrative privileges are needed. However, the administrator may have restricted access to registry editing, which is necessary for the installation. If this is the case, the following error will be displayed during installation: "ERROR: Registry editing has been disabled by your administrator." If you see this message, ask your system administrator to complete the installation or temporarily lift the restrictions on registry editing.

## Current Limitations on Recording

These are the current limitations on recording:

* Clicking the data grid search button is only recorded on Mendix 5.20 and above
* Multi-selection in grids via <kbd>Ctrl</kbd> + click is not recorded
* Switching between browser tabs/windows is not recorded
* Assertions are not recorded
* Generating nice descriptions with labels only works if you use the label function in Mendix

{{% alert color="warning" %}}In the past, ATS also had a Web Recorder. However, due to changes in the Chrome store policy, we deprecated the Web Recorder in Q4 2019. Even though the Web Recorder might still work for some existing customers, the ATS Desktop recorder is the default choice.{{% /alert %}}
