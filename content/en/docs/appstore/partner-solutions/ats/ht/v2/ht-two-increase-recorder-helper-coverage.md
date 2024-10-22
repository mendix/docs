---
title: "Increase ATS Recorder and Helper Coverage"
linktitle: "Increase ATS Recorder and Helper Coverage"
url: /appstore/partner-solutions/ats/ht-two-increase-recorder-helper-coverage/
description: "Describes how to increase the ATS Recorder and Helper coverage of your application"
---

## Introduction

ATS provides two different tools to help build test scripts: the ATS Helper and ATS Recorder. The ATS Helper identifies the mx-name of widgets on the application under test (AUT). But, not all widgets have an mx-name, in which case the ATS Helper cannot interact with them. The ATS Recorder is a function/plugin within ATS that records your manual test steps in the AUT and automatically selects the correct action for each step. However, sometimes the ATS Recorder does not record the step you are performing. There are ways to increase the ATS Recorder coverage of your AUT. This how-to describes how to increase the overall coverage of the ATS tools for your AUT.

This how-to teaches you how to do the following:

* Increase recorder coverage of your AUT with the ATS Recorder.
* Increase ATS Helper coverage of your AUT.

## Prerequisites

Before starting this how-to, make sure you have the following prerequisites in place:

* Read and Installed the ATS Helper and Recorder, see [How to Install the ATS Helper and ATS Recorder](/appstore/partner-solutions/ats/ht-two-install-ats-helper-recorder/)
* Completed the Rapid Application Developer course

## Increasing ATS Recorder Coverage of Your AUT

Using the ATS Recorder is the easiest and least time-consuming way to create test cases. So increasing the number of widgets on your AUT that the ATS Recorder can record, simplifies creating test cases and reduces the total time needed. The following steps increase the recorder coverage:

* Giving snippets a unique name
* Give widgets a unique name
* Reduce the use of custom widgets

{{% alert color="info" %}}
To perform the steps in this chapter you must have access to your app in Mendix Studio Pro.
{{% /alert %}}

The next chapters give a description of how to take each step and how it increases ATS Recorder and ATS Helper coverage of your AUT.

### Giving Snippets a Unique Name 

When developers create a snippet in Mendix and reuse that snippet on the same page, the ATS Recorder cannot distinguish them. This can also be the case when developers use several snippets on one page. The ATS Recorder cannot distinguish the snippets, as they do not have a unique name. You enable unique snippet names in Mendix Studio Pro by adding a constant to your project with certain properties.

To add a constant in Mendix Studio Pro follow these steps:

1. Open your project in Mendix Studio Pro and open the project settings.
2. In the **Configuration** tab click **New**. This opens the **New Configuration** dialog.
3. In the dialog click the **Constants** tab and click **New**. This opens the **Select Constant** dialog.
4. Select a module in this dialog where you want to add the constant and click **New**. This opens the **Add Constant** dialog.
5. Enter a name in the dialog and click **OK**. This opens the **Constant** dialog, where you can add the following properties:

    * Name: EnableScopedSeleniumClasses
    * Type: Boolean
    * Default value: True

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-increase-recorder-helper-coverage/add-constant.png" class="no-border" >}}

6. Click **OK**. This opens the **New Constant Value** dialog.
7. Click **OK** in the **New Constant Value** dialog and click **OK** in the **New Configuration** dialog.

You now added the constant in Mendix Studio Pro. If you have this constant anywhere in your project, the mx-name classes of snippets are longer and unique.

### Giving Widgets a Unique Name

Your application has many buttons, images, and menu widgets etc. on each page. It is possible that those widgets have the same mx-name, for example, mx-name-actionButton1. The recorder can often record these widgets, but when you run your test case it might fail. It might fail because ATS interacts with the first widget it finds with that mx-name. Changing the name in Mendix Studio Pro to a unique name solves this problem:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-increase-recorder-helper-coverage/changed-mx-name.png" class="no-border" >}}

Make sure you use some kind of naming structure when deciding to rename several widgets in your app. Consistency is important.

### Reducing the Use of Custom Widgets

Custom widgets are often designed differently than Mendix widgets. As the ATS Recorder is designed to recognize Mendix widgets. Some custom widgets are not supported by the ATS Recorder, they can still be supported by ATS! The advice is to build functionalities with Mendix widgets. You must only use custom widgets in your application if Mendix widgets do not suffice. Questions that you must ask yourself when you create new functionalities:

* Does it add value to the application if I add a custom widget instead of a standard widget?
* Can it be solved in a different way, with the use of standard widgets?

## Increasing ATS Helper Coverage of Your AUT

Even with the tips from the previous chapter recording every widget on your AUT is not possible. There are some widgets that are too complicated to record. But if the ATS Recorder doesn't record a widget, it doesn't mean ATS cannot interact with it. When the ATS Recorder doesn't record certain widgets, you must check with the ATS Helper if that widget has an mx-name. For example, the ATS Recorder might not record clicking on a certain image. But when you check that image with the ATS Helper you see that that image does have an mx-name:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-increase-recorder-helper-coverage/not-recordable-image.png" class="no-border" >}}

If the image has an mx-name, ATS can *Find, Click, Set, Assert, and Get* these widgets with the standard Mendix actions.

In case the widget doesn't have a unique mx-name or an mx-name at all, the following steps increase the ATS Helper coverage of your AUT:

* Giving buttons a unique name in ATS
* Adding an mx-name in the class of the widget

### Giving Buttons a Unique Name in ATS

The previous chapter described that ATS can interact with the correct widget by giving it a unique name in Mendix Studio Pro. Another way to let ATS interact with the correct widget is by adding another mx-name in the ATS action. The mechanics are the same as the **Search Context** input parameter. ATS will search for the widget with the second mx-name inside the widget with the first mx-name. For example: 'container8 microflowButton2' ATS searches for the microflowbutton inside the container. ATS searches for the second mx-name within the first mx-name:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-increase-recorder-helper-coverage/2-mx-names.png" class="no-border" >}}

You have to add this manually in ATS. To find the mx-name use the ATS Helper in your AUT.

### Adding an mx-name in the Class of the Widget

You can develop a widget without an mx-name, for example, a navigation list with several navigation options:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-increase-recorder-helper-coverage/no-mx-name-listview.png" class="no-border" >}}

The ATS Recorder cannot record the options in the navigation list, as they do not have an mx-name. For the same reason, the ATS Helper can not interact with these options. The ATS Helper shows the mx-name of the complete navigation list, instead of the options:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-increase-recorder-helper-coverage/no-mx-name-listview-app-e.png" class="no-border" >}}

You can manually enter a class in the **Class** of Mendix Studio Pro with an mx-name to solve this:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-increase-recorder-helper-coverage/mx-name-listview.png" class="no-border" >}}

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-increase-recorder-helper-coverage/mx-name-listview-app-e.png" class="no-border" >}}

As the options in the navigation list have an mx-name, the ATS Helper can interact with them. In ATS you can *Find, Click, Set, Assert, and Get* these widgets with the standard Mendix actions. ATS can still interact with the options if you add another class as well:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-increase-recorder-helper-coverage/extra-class-name.png" class="no-border" >}}

You have given the **Class** an mx-name and not the widget name in the **Name** field, as the options of the navigation list do not have a **Name** field. Widgets that the ATS Recorder recognizes get their mx-name from the name in the **Name** field. For example, the navigation list:

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v2/ht-two-increase-recorder-helper-coverage/mx-name-in-name.png" class="no-border" >}}

For this reason, recording this widget is still not possible.

## Next Up

With these tips you increase the ATS Recorder and ATS Helper coverage of your AUT. The next how-to is [How to Create Custom Actions](/appstore/partner-solutions/ats/ht-two-create-custom-actions/). You find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/appstore/partner-solutions/ats/ht-two/) page. We advise you to follow the predefined structure.
