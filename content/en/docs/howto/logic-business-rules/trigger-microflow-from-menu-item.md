---
title: "Trigger a Microflow From a Menu Item"
url: /howto/logic-business-rules/trigger-microflow-from-menu-item/
category: "Logic & Business Rules"
weight: 30
tags: ["how-to", "microflow", "create microflow"]
---

## 1 Introduction

Mendix uses visual models called microflows to define the logic of your application. Microflows are visual ways of expressing what traditionally would be written in code. This how-to explains how you can create a very simple "Hello World" microflow.

**This how-to will teach you how to do the following:**

* Create a menu item
* Create and edit a microflow

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with microflow terms. For more information, see [Microflows](/refguide/microflows/). 

## 2 Creating a Menu Item {#creating-menu-item}

You will create a menu item that will trigger a microflow and show the **Hello World** message to the end-users. 

Microflows can be triggered in many different ways. For this how-to, you will use a menu item to trigger the new microflow.

To create a menu item, follow these steps:

1.  Open the **Navigation** editor.

2. In the **Responsive** tab > the **Menu** section, click **New Item**:

    {{< figure src="/attachments/howto/logic-business-rules/trigger-microflow-from-menu-item/new-menu-item.jpg" >}}

3. In the **New Menu Item** dialog box, set the **Caption** to *Hello World*:

    {{< figure src="/attachments/howto/logic-business-rules/trigger-microflow-from-menu-item/caption.png" >}}

4. For **On click**, select **Call a microflow**:

    {{< figure src="/attachments/howto/logic-business-rules/trigger-microflow-from-menu-item/call-microflow.png" >}}

5. In the **Select Microflow** dialog box, select a microflow and then click **New**:

    {{< figure src="/attachments/howto/logic-business-rules/trigger-microflow-from-menu-item/new-microflow.png" >}}

6. Enter *HelloWorld* for the **Name** of the new microflow.

7. Save the new menu item by clicking **OK**.

You have created the menu item that will trigger the **Hello World** microflow. 

## 3 Editing the New Microflow

The new microflow is now empty and needs to be configured to show the message to the end-users.

To edit the new microflow, follow these steps:

1.  Open the **Hello World** microflow by right-clicking the new menu item created in the [Creating a Menu Item](#creating-menu-item) section above and selecting **Go to target** from the context menu:

    {{< figure src="/attachments/howto/logic-business-rules/trigger-microflow-from-menu-item/go-to-target.png" >}}

    You will see an empty microflow like this:

    {{< figure src="/attachments/howto/logic-business-rules/trigger-microflow-from-menu-item/created-microflow.png" >}}

2.  Open the **Toolbox** and search for the **Show message** activity:
    
    {{< figure src="/attachments/howto/logic-business-rules/trigger-microflow-from-menu-item/toolbox.png" >}}

3.  Drag the **Show message** activity from the **Toolbox** to the flow between the start event and end event, which will insert a show message activity:

    {{< figure src="/attachments/howto/logic-business-rules/trigger-microflow-from-menu-item/show-message-activity.png" >}}

4. Double-click the message activity to open the **Show Message** properties.

5.  Enter *Hello World* for the **Template** value and click **OK**:

    {{< figure src="/attachments/howto/logic-business-rules/trigger-microflow-from-menu-item/show-message-properties.png" >}}

6. Click the play button (**Run Locally**) and then **View App** to see the application in your default browser.

7. Click the **Hello World** menu item in the menu bar to see the message:

    {{< figure src="/attachments/howto/logic-business-rules/trigger-microflow-from-menu-item/hello-world-message.png" >}}

Congratulations! You have created the menu item that triggers the microflow and shows the **Hello World** message to your end-users! 

## 4 Read More

* [Define Access Rules Using XPath](/howto/logic-business-rules/define-access-rules-using-xpath/)
* [Create a Custom Save Button](/howto/logic-business-rules/create-a-custom-save-button/)
* [Extend Your Application with Custom Java](/howto/logic-business-rules/extending-your-application-with-custom-java/)
* [Work with Lists in a Microflow](/howto/logic-business-rules/working-with-lists-in-a-microflow/)
* [Optimize the Retrieve Activities](/howto/logic-business-rules/optimizing-retrieve-activities/)
* [Configure Error Handling](/howto/logic-business-rules/set-up-error-handling/)
* [Optimize Microflow Aggregates](/howto/logic-business-rules/optimizing-microflow-aggregates/)
* [Extract and Use Sub-Microflows](/howto/logic-business-rules/extract-and-use-sub-microflows/)
