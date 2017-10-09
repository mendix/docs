---
title: "Install the ATS Helper and the ATS Recorder"
parent: "ht-version-1"
description: "Describes how to install the ATS helper and the ATS Recorder tool."
tags: ["ATS", "testing"]
---

## 1 Introduction

ATS provides two different tools to help build test scripts: the ATS Helper and ATS Recorder. The ATS Helper identifies the mx-name of widgets on the application under test (AUT). The recorder is a function/plugin within ATS that records your manual test steps in the AUT and automatically selects the correct action for each step.

**This how-to will teach you  how to do the following:**

* Install the ATS Helper
* Install the [ATS Recorder](/ats/refguide/rg-version-1/recorder)

## 2 Prerequisites
Before starting this how-to, make sure you have the following prerequisites in place:

*  ATS
*  Mendix app

  {{% alert type="info" %}}
  Both the ATS Helper and the ATS Recorder only work on a Mendix app.
  {{% /alert %}}

*  Google Chrome Browser

  {{% alert type="info" %}}
  Both the ATS Helper and the ATS Recorder only function in [Google Chrome](https://www.google.com/chrome/browser/). 
  {{% /alert %}}

{{% youtube C7GuDU9nePQ %}}

## 3 Installing the ATS Helper

To install the ATS Helper, follow these steps:

1.  Open ATS and click the information icon in the top-right corner of the screen:

    ![](attachments/install-ats-helper-recorder/information-icon.png)

    This opens the **ATS Information** dialog box:
   
    ![](attachments/install-ats-helper-recorder/ats-information-screen.png)

2.	Drag the ATS Helper to your bookmark bar to link it there:

    ![](attachments/install-ats-helper-recorder/drag-drop-ats-helper.png)

To use the ATS Helper, select the bookmark, press <kbd>Ctrl</kbd>, and hover over a widget. The ATS Helper will show the information of that widget.

![](attachments/install-ats-helper-recorder/ats-helper-widget.png)

{{% alert type="info" %}}
The ATS Helper only works on standalone widgets.
{{% /alert %}}

See [How to Create a Test Case](create-a-test-case) for more information on how to use the ATS Helper.

## 4 Installing the ATS Recorder

To install the ATS Recorder, follow these steps:

1.	Open ATS and click the information icon in the top-right corner of the screen:

    ![](attachments/install-ats-helper-recorder/information-icon.png)
    
    This opens the **ATS Information** dialog box:
    
    ![](attachments/install-ats-helper-recorder/ats-information-screen.png)

2.	Click the **ATS Recorder (Chrome Web Store)** link to go to the Chrome Web Store.
3.  Click **ADD TO CHROME** to add the ATS Recorder extension:

    ![](attachments/install-ats-helper-recorder/add-ats-recorder.png)

See [How to Create a Test Case](create-a-test-case) for more information on how to use the ATS Helper.
