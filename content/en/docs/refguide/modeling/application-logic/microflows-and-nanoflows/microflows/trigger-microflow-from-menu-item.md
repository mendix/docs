---
title: "Triggering a Microflow From a Menu Item"
url: /refguide/triggering-microflow-from-menu-item/
weight: 2
description: "Describes how to create a simple microflow that will define the logic of your application."
---

## Introduction

Mendix uses visual models called [microflows](/refguide/microflows/) to define the logic of your application. Microflows are visual ways of expressing what traditionally would be written in code. This document explains how you can create a very simple "Hello World" microflow and trigger it from a [menu item](/refguide/menu/#menu-item).

This document teaches you how to do the following:

* Create a menu item
* Create and edit a microflow

## Creating a Menu Item {#creating-menu-item}

You will create a menu item that triggers a microflow and shows the **Hello World** message to the end-users. 

Microflows can be triggered in many different ways. In this document, you will learn to use a menu item to trigger a microflow.

To create a menu item, follow these steps:

1. Open the **Navigation** editor.
2. In the **Responsive** tab > the **Menu** section, click **New Item**:

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/triggering-microflow-from-menu-item/new-menu-item.jpg" class="no-border" >}}

3. In the **New Menu Item** dialog box, set the **Caption** to *Hello World*:

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/triggering-microflow-from-menu-item/caption.png" class="no-border" >}}

4. For **On click**, select **Call a microflow**:

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/triggering-microflow-from-menu-item/call-microflow.png" class="no-border" >}}

5. In the **Select Microflow** dialog box, select a microflow and then click **New**:

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/triggering-microflow-from-menu-item/new-microflow.png" class="no-border" >}}

6. Enter *HelloWorld* for the **Name** of the new microflow.
7. Save the new menu item by clicking **OK**.

You have created the menu item that will trigger the **Hello World** microflow. 

## Editing the New Microflow

The new microflow is now empty and needs to be configured to show the message to the end-users.

To edit the new microflow, follow these steps:

1. Open the **Hello World** microflow by right-clicking the new menu item created in the [Creating a Menu Item](#creating-menu-item) section above and selecting **Go to target** from the context menu:

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/triggering-microflow-from-menu-item/go-to-target.png" class="no-border" >}}

    You will see an empty microflow like this:

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/triggering-microflow-from-menu-item/created-microflow.png" class="no-border" >}}

2. Open the **Toolbox** and search for the **Show message** activity:

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/triggering-microflow-from-menu-item/toolbox.png" class="no-border" >}}

3. Drag the **Show message** activity from the **Toolbox** into the flow between the start event and end event:

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/triggering-microflow-from-menu-item/show-message-activity.png" class="no-border" >}}

4. Double-click the **Show message** activity to open its properties.
5. Enter *Hello World* for the **Template** value and click **OK**:

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/triggering-microflow-from-menu-item/show-message-properties.png" class="no-border" >}}

6. Click **Run Locally** ({{% icon name="controls-play" %}}) and then **View App** to see the application in your default browser.
7. Click the **Hello World** menu item in the menu bar to see the message:

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/triggering-microflow-from-menu-item/hello-world-message.png" class="no-border" >}}

Congratulations! You have created a menu item that triggers a microflow and shows a **Hello World** message to your end-users! 

## Read More

* [Navigation](/refguide/navigation/)
* [Menu Item](/refguide/menu/#menu-item)
* [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/)
* [Working with Lists in a Microflow](/refguide/working-with-lists-in-a-microflow/)
