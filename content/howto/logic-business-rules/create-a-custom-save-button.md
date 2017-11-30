---
title: "Create a Custom Save Button"
category: "Logic & Business Rules"
tags: []
---
## 1 Introduction

Mendix uses visual models called microflows to define the logic of your application. A microflow is a visual way of expressing what traditionally would be written in code. This how-to explains how you can create a custom save button on a detail page by utilizing microflows.

**This how-to will teach you how to do the following:**

* Create a custom Save button

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Create a basic data layer (for details, see [How to Create a Basic Data Layer](../data-models/create-a-basic-data-layer))
* Create overview and detail pages for the customer object (for details, see [How to Create Your First Two Overview and Detail Pages](../ux/create-your-first-two-overview-and-detail-pages))
* Create a menu item to access the customer overview page (for details, see [How to Set Up the Navigation Structure](../ux/setting-up-the-navigation-structure))

## 3 Replacing the Default Save Button with a Custom Save Button

To replace the default Save button with a custom one, follow these steps:

1. Open the **Customer** detail page, which should look like this:
    ![](attachments/18448679/18580990.png)

2. Right-click the **Save** button and remove it by selecting **Delete**.
3. Right click the **Cancel** button and select **Add button left** > **Microflow**:
    ![](attachments/18448679/18580988.png)

4. Double-click the new **Microflow** button to open its properties:
    ![](attachments/18448679/18580987.png)

5. Change the **Caption** to *Save*.
6. Change the image to an image of your choice.
7. In the **Events** section, click **Select...** to add a new microflow with the name *Customer_Save*.
8. Click **OK** to save the new microflow button.

## 4 Re-creating the Default Save Behavior

1. Right-click the new **Microflow** button and select **Go to microflow** to open the new microflow:
    ![](attachments/18448679/18580985.png)

    The Microflow should look like this:
    ![](attachments/18448679/18580984.png)
2. Open the **Toolbox** from the bottom-right corner of the Modeler:
    ![](attachments/8784287/8946802.png)
    You can also open it from the **View** menu:
    ![](attachments/2949137/3080419.png)
3. Drag a **Commit object(s)** action from the **Toolbox** to the line between the green start and red end events, which will insert a commit action activity.
4. Double-click the new activity to open its properties:
    ![](attachments/18448679/18580983.png)
5. In the **Input** section, select **Customer** for **Variable** and click **OK**. The microflow should now look like this:
    ![](attachments/18448679/18580982.png)
6. Drag a **Close page** action from the **Toolbox** to the line between the green start and red end events, which will insert a close page action activity. You have now re-created the default save behavior, and the m should look like this:
    ![](attachments/18448679/18580981.png)

## 5 Extending the Microflow with Your Own Functionality

1. Drag a **Show message** action from the **Toolbox** to the line between the start and end events, which will insert a show message action activity.
2. Double-click the new activity to open its properties:
    ![](attachments/18448679/18580980.png)

3. Select the **Type** of message.
4. Enter a message as a **Template** value.
5. Click **OK** to save the properties. The microflow should now look like this:
    ![](attachments/18448679/18580979.png)

## 6 Related Content

* [How to Define Access Rules Using XPath](define-access-rules-using-xpath)
* [How to Trigger Logic Using Microflows](triggering-logic-using-microflows)
* [How to Extend Your Application with Custom Java](extending-your-application-with-custom-java)
* [How to Work With Lists in a Microflow](working-with-lists-in-a-microflow)
* [How to Optimize Retrieve Activities](optimizing-retrieve-activities)
* [How to Configure Error Handling](set-up-error-handling)
* [How to Optimize Microflow Aggregates](optimizing-microflow-aggregates)
* [How to Extract and Use Submicroflows](extract-and-use-sub-microflows)
* [Button Widgets](/refguide7/button-widgets)
* [Create Button](/refguide7/new-button)
* [Microflow Activities](/refguide7/activities)
