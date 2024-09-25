---
title: "Install ATS Helper and ATS Recorder"
url: /appstore/partner-solutions/ats/ht-two-install-ats-helper-recorder/
description: "Describes how to install the ATS Helper and the ATS Recorder tool."
---

## Introduction

ATS provides two different tools to help build test scripts: the ATS Helper and ATS Recorder. The ATS Helper identifies the mx-name of widgets on the application under test (AUT). The recorder is a function/plugin within ATS that records your manual test steps in the AUT and automatically selects the correct action for each step.

This how-to teaches you how to do the following:

* Install the ATS Helper
* Install the [ATS Recorder](/appstore/partner-solutions/ats/rg-one-recorder/)

## Prerequisites

Before starting this how-to, make sure you have the following prerequisites in place:

* ATS
* Mendix app

    {{% alert color="info" %}}Both the ATS Helper and the ATS Recorder only work on a Mendix app.
    {{% /alert %}}

* Google Chrome Browser

    {{% alert color="info" %}}Both the ATS Helper and the ATS Recorder only function in [Google Chrome](https://www.google.com/chrome/browser/). 
    {{% /alert %}}

## Installing the ATS Helper

To install the ATS Helper, follow these steps:

1. Open ATS and click **Information** ({{% icon name="info-circle" %}}) in the upper-right corner of the screen:

    {{< figure src="/attachments/appstore/use-content/partner-solutions/ats/ht/v2/ht-two-install-ats-helper-recorder/information-icon.png" class="no-border" >}}

    This opens the **ATS Information** dialog box:
   
    {{< figure src="/attachments/appstore/use-content/partner-solutions/ats/ht/v2/ht-two-install-ats-helper-recorder/ats-information-screen.png" class="no-border" >}}

2. Drag the ATS Helper into your bookmark bar to link it there:

    {{< figure src="/attachments/appstore/use-content/partner-solutions/ats/ht/v2/ht-two-install-ats-helper-recorder/drag-drop-ats-helper.png" class="no-border" >}}

To use the ATS Helper, select the bookmark, press <kbd>Ctrl</kbd>, and hover over a widget. The ATS Helper will show the information of that widget.

{{< figure src="/attachments/appstore/use-content/partner-solutions/ats/ht/v2/ht-two-install-ats-helper-recorder/ats-helper-widget.png" class="no-border" >}}

{{% alert color="info" %}}
The ATS Helper only works on standalone widgets.
{{% /alert %}}

See [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/) for more information on how to use the ATS Helper.

## Installing the ATS Recorder

To install the ATS Recorder, follow these steps:

1. Open ATS and click **Information** ({{% icon name="info-circle" %}}) in the upper-right corner of the screen:

    {{< figure src="/attachments/appstore/use-content/partner-solutions/ats/ht/v2/ht-two-install-ats-helper-recorder/information-icon.png" class="no-border" >}}

    This opens the **ATS Information** dialog box.    

2. Click the **ATS Recorder (Chrome Web Store)** link to go to the Chrome Web Store.

    {{< figure src="/attachments/appstore/use-content/partner-solutions/ats/ht/v2/ht-two-install-ats-helper-recorder/ats-information-screen-recorder.png" class="no-border" >}}

3. Click **ADD TO CHROME** to add the ATS Recorder extension:

    {{< figure src="/attachments/appstore/use-content/partner-solutions/ats/ht/v2/ht-two-install-ats-helper-recorder/add-ats-recorder.png" class="no-border" >}}

See [How to Create a Test Case](/appstore/partner-solutions/ats/ht-two-create-a-test-case/) for more information on how to use the ATS Helper.

## Next Up

You now learned how to install the ATS tools. The next how-to is [How to Configure a Selenium Hub](/appstore/partner-solutions/ats/ht-two-configure-a-selenium-hub/). You find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/appstore/partner-solutions/ats/ht-two/) page. We advise you to follow the predefined structure.
