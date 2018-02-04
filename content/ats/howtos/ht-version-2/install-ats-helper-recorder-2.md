---
title: "Install the ATS Helper and the ATS Recorder"
parent: "ht-version-2"
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

    ![](attachments/install-ats-helper-recorder-2/information-icon.png)

    This opens the **ATS Information** dialog box:
   
    ![](attachments/install-ats-helper-recorder-2/ats-information-screen.png)

2.	Drag the ATS Helper to your bookmark bar to link it there:

    ![](attachments/install-ats-helper-recorder-2/drag-drop-ats-helper.png)

To use the ATS Helper, select the bookmark, press <kbd>Ctrl</kbd>, and hover over a widget. The ATS Helper will show the information of that widget.

![](attachments/install-ats-helper-recorder-2/ats-helper-widget.png)

{{% alert type="info" %}}
The ATS Helper only works on standalone widgets.
{{% /alert %}}

See [How to Create a Test Case](create-a-test-case-2) for more information on how to use the ATS Helper.

## 4 Installing the ATS Recorder

To install the ATS Recorder, follow these steps:

1.	Open ATS and click the information icon in the top-right corner of the screen:

    ![](attachments/install-ats-helper-recorder-2/information-icon.png)
    
    This opens the **ATS Information** dialog box.    

2.	Click the **ATS Recorder (Chrome Web Store)** link to go to the Chrome Web Store.

![](attachments/install-ats-helper-recorder-2/ats-information-screen-recorder.png)

3.  Click **ADD TO CHROME** to add the ATS Recorder extension:

    ![](attachments/install-ats-helper-recorder-2/add-ats-recorder.png)

See [How to Create a Test Case](create-a-test-case-2) for more information on how to use the ATS Helper.

## 5 Next up

You now learned how to install the ATS tools. The next how-to is [How to configure a Selenium Hub](configure-a-selenium-hub-2). You find an overview of all the how-tos and the structure on the [ATS 2 How-To's](ht-version-2) page. We advise you to follow the predefined structure.