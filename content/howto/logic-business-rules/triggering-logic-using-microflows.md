---
title: "Trigger Logic Using Microflows"
category: "Logic & Business Rules"
menu_order: 2
tags: ["microflow","how-to", "logic", "button", "pages"]
---

## 1 Introduction

To add custom logic to your Mendix application you can use microflows. Microflows can be triggered in various ways, as in buttons, input fields, scheduled events, and more. This how-to will teach you how to configure the properties and settings of a microflow button placed on a grid or reference set selector. You will start with adding the microflow button to the right widget. Next you will need to configure the right properties and settings of the microflow button. 

## 2 Prerequisites

Before starting this how-to make sure you complete the following how-to's:

*   [How to Create a Basic Data Layer](../data-models/create-a-basic-data-layer)
*   [How to Creating Your First Two Overview and Detail Pages](../front-end/create-your-first-two-overview-and-detail-pages)

## 3 Triggering Logic Using a Page Button

In this how-to, you will add a button to a data grid and configure it. However, the same settings of the button can be applied to a reference set selector and other grid widgets.

### 3.1 Adding a Button to a Data Grid

To add a button to a data grid, do the following:

1.  Open you project in Mendix Studio Pro.
2.  Open a page with a data grid.
3.  Select the **menu bar** of the data grid.
4.  Right click the menu bar.
5.  Select **Add button** > **Action**:

    ![](attachments/triggering-logic-using-microflows/add-button.png)

6. Double-click the new button and enter *Microflow* for the button's **Caption**. The **Microflow** button will be visible on the menu bar of the data grid.

### 3.2 Configuring the Microflow Properties

At the moment there is only a button with no microflow behind it yet. You need to configure the button settings doing the following. 

1.  Double-click the **Microflow** button to open its properties.

    ![](attachments/triggering-logic-using-microflows/button-properties.png)

2. In the **Edit Action Button** dialog box that opens, the first property to configure is the one that converts the action button into a button that calls a microflow. Go to **Events** > **On click** and select **Call a microflow**. This will open the **Select Microflow** dialog box, where you can specify the microflow that is executed when the button is clicked.
3. Click **New** to create a new microflow, and keep the name as **Microflow**.

    ![](attachments/triggering-logic-using-microflows/add-microflow.png)

4. In the **Edit Action Button** dialog box, set the following parameters:

    1. 
    
5. Click **OK** to save the properties.

### 3.3 Configuring the Microflow Settings

The microflow button has been added to the grid and the properties have been set. With the properties you can customize the appearance of the microflow button, in this section you are going to set the 'on click settings', which you can use to customize which parameters to pass to the microflow, whether to show a progress bar and more.

1. **Right click** the microflow button.

2.  Select **Edit microflow settings**.

    ![](attachments/triggering-logic-using-microflows/edit-microflow-settings.png)

    The **Microflow Settings** window opens.
    
    ![](attachments/triggering-logic-using-microflows/microflow-settings.png)

3. Configure the following settings:

    4. 


Congratulations! You have configured a button that will trigger a microflow. 

## 4 Read More

*   [Defining access rules using XPath](define-access-rules-using-xpath)
*   [Extending Your Application with Custom Java](extending-your-application-with-custom-java)
*   [Working With Lists in a Microflow](working-with-lists-in-a-microflow)
*   [Triggering Logic using Microflows](triggering-logic-using-microflows)
*   [Creating a Custom Save Button](create-a-custom-save-button)
*   [Optimizing Retrieve Activities](optimizing-retrieve-activities)
*   [Error Handling](set-up-error-handling)
*   [Optimizing Microflow Aggregates](optimizing-microflow-aggregates)
*   [Extract & Use Sub-Microflows](extract-and-use-sub-microflows)
