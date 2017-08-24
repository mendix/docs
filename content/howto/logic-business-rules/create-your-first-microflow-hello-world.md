---
title: "Create Your First Microflow: Hello World!"
category: "Logic & Business Rules"
tags: []
---

## 1 Introduction

Mendix uses visual models called microflows to define the logic of your application. Microflows are visual ways of expressing what traditionally would be written in code. This how-to explains how you can create a very simple "Hello World" microflow.

**This how-to will teach you how to do the following:**

* Create a menu item
* Create and edit a microflow

## <a name="CreatingaMenuItem"></a>2 Creating a Menu Item

Microflows can be triggered in many different ways (for details, see [Trigger Logic Using Microflows](triggering-logic-using-microflows)). For this how-to, you'll be using a menu item to trigger the new microflow.

To create a menu item, follow these steps:

1.  Open the **Navigation** editor, add a menu item in the desktop navigation settings, and enter the caption of *Hello World*:

    ![](attachments/18448678/18580978.png)

2.  Click **Select...** in the **Target** section of the **New Menu Item** dialog box to open the **Select Navigation Target** pop-up window:

    ![](attachments/18448678/18580977.png)

3.  Select a module and click **New**:

    ![](attachments/18448678/18580976.png)

4. Click **Create a microflow** to connect a new microflow to this menu item.
5. Name the new microflow *HelloWorld*.
6. Save the new menu item by clicking **OK**.

## 3 Editing the New Microflow

To edit the new microflow, follow these steps:

1.  Open the new microflow by right-clicking the navigation item created in [2 Creating a Menu Item](#CreatingaMenuItem) and select **Go to target** from the context menu:

    ![](attachments/18448678/18580975.png)

    You will see an empty microflow like this:

    ![](attachments/18448678/18580974.png)

2.  Open the **Toolbox** in the bottom-right corner of the Modeler:
    
    ![](attachments/18448678/18580967.png)

    You can also open the **Toolbox** from the **View** menu:

    ![](attachments/2949137/3080419.png)

3.  Drag a **Show message** action from the **Toolbox** to the line between the green start even and red end event, which will insert a show message action activity:

    ![](attachments/18448678/18580972.png)

4. Double-click the message activity to open the **Show Message** properties editor.
5.  Enter *Hello World* for the **Template** value and click **OK**:

    ![](attachments/18448678/18580970.png)

6.  Run the application locally and click **View** to see the application in your default browser:

    ![](attachments/18448678/18580968.png)

7. Locate the new navigation item in the menu bar and click it to see the message.

## 4 Related Content

* [How to Define Access Rules Using XPath](define-access-rules-using-xpath)
* [How to Trigger Logic Using Microflows](triggering-logic-using-microflows)
* [How to Create a Custom Save Button](create-a-custom-save-button)
* [How to Extend Your Application with Custom Java](extending-your-application-with-custom-java)
* [How to Work with Lists in a Microflow](working-with-lists-in-a-microflow)
* [How to Optimize the Retrieve Activities](optimizing-retrieve-activities)
* [How to Configure Error Handling](set-up-error-handling)
* [How to Optimize Microflow Aggregates](optimizing-microflow-aggregates)
* [How to Extract and Use Sub-Microflows](extract-and-use-sub-microflows)
