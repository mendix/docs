---
title: "Recorder"
url: /addons/ats-addon/rg-two-recorder/
---

## 1 Introduction

The recorder is a function/plugin in ATS that records the actions behind your test steps during testing an application. When you click **Save**, ATS adds the recorded steps to your test case.

## 2 Installing the Plugin

To use the recorder function, you must have the Google Chrome browser installed on your system and install the **ATS Recorder** Chrome plugin. To install the plugin, click this icon in the upper-right corner of the screen:

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-recorder/information-icon.png" >}}

Clicking the **ATS Recorder** link will lead you to the Chrome Web Store, where you can add the plugin to your browser.

## 3 Using the Plugin

With the ATS Recorder plugin installed, you can start a recording session at any time by clicking the **Record** button inside a test case or an action. You open the Mendix application you want to test in another tab of the browser, and then start testing the application by walking through the app manually. Then ATS will record all the steps.

Open the recording session with three recorded test steps:

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-recorder/recording.png" >}}

Some recorded test steps offer you several actions to choose from. In the example above, you can choose one of the following actions:

* Click the data grid row
* Click the whole widget
* Find/assert the data grid row by the column value

To change the selected action, click the recorded test step under **Recorded Events**, then click **Select** on the right side of the action you want.

## 4 Current Limitations on Recording

These are the current limitations on recording:

* Clicking the data grid search button is only recorded on Mendix versions higher than 5.19
* Multi-selection in grids via <kbd>Ctrl</kbd> + click is not recorded
* Switching between browser tabs/windows is not recorded
* Assertions are not recorded
* Generating nice descriptions with labels only works if you use the label function in Mendix
