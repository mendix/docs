---
title: "Recorder"
parent: "test-development"
---

The recorder is a function/plugin within ATS which will record the actions behind your test steps during manually testing an application. After saving your recorded actions they are directly added to your active test case.

{{% alert type="info" %}}

To use the recorder function you will need to have the Google Chrome browser installed on your system and install the _ATS Recorder_ Chrome plugin.

{{% /alert %}}

To install the Chrome _ATS Recorder_ plugin click the _Show info_ button in the top right corner of the ATS and follow the _ATS Recorder_ link to the Chrome webstore to add the plugin to your browser.

With the _ATS Recorder_ plugin installed, you can start a recording session at anytime by clicking the _Record_ button while inside a test case in the ATS. You can now open the Mendix application you want to test in another tab of the browser and start testing the application manually. All test steps you take, will be recorded by the recorder and can be saved in the chosen test case.

![Open recording session with 4 recorded test steps](attachments/recorder/21168177.png)

Some recorded test steps offer you multiple actions to choose from, for example when setting the value of a text box. Here you can either have an action to change the value of the text box or choose to assert the value of the text box. To change the selected action click on the recorded test step under _Recorded Events_. On the right-hand side, if multiple actions are proposed, select the action you want to execute by clicking the _Select_ button.

{{% alert type="info" %}}

Current limitations on recording:

*   Clicking the datagrid search button is only recorded on Mendix >=5.19
*   Multi-select in grids via CTRL + click not recorded
*   Switching between browser tabs/windows not recorded
*   Assertions cannot be recorded yet
*   Generating nice descriptions with labels only works if you use the new label function in Mendix

{{% /alert %}}
