---
title: "Trigger Logic Using Microflows"
category: "Logic & Business Rules"
menu_order: 2
tags: ["microflow","how-to", "logic"]
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

1.  Open you project in Mendix Studio Pro.
2.  Open a page with a **Data grid**.
3.  Select the **menu bar** of the Data grid.
4.  Right click the menu bar.
5.  Select **Add button** > **Action**:

    ![](attachments/triggering-logic-using-microflows/add-button.png)

6. Double-click the new button and enter *Microflow* for the button's **Caption**. The **Microflow** button will be visible on the menu bar of the data grid.

You will do more configuration of this button below.

### 3.2 Configuring the Microflow Properties

At the moment there is only a button with no microflow behind it yet. In this exercise you will configure the button settings. 

1.  Double-click the **Microflow** button to open its properties.

    ![](attachments/triggering-logic-using-microflows/button-properties.png)

2. In the **Edit Action Button** dialog box that opens, the first property to configure is the one that converts the action button into a button that calls a microflow. Go to **Events** > **On click** and select **Call a microflow**. This will open the **Select Microflow** dialog box, where you can specify the microflow that is executed when the button is clicked.
3. For the purposes of this how-to, you will create a new microflow. Click **New** to create this microflow, and keep the name as **Microflow**.

    ![](attachments/triggering-logic-using-microflows/add-microflow.png)

4. Back in the **Edit Action Button** dialog box, you can set the following parameters:

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

#### 3.3.1 Microflow Section

The **Microflow** is the one that will be executed. Its parameters should match the parameters that are passed to it.

Click **Select** to select another microflow, or **Show** to go to the microflow editor of the selected microflow.

#### 3.3.2 Microflow Arguments Section

The **Service** setting is the data grid that is to be passed to the microflow.

#### 3.3.3 Execution Section

These are the execution settings:

*   **Microflow call type** – this property indicates whether the connected microflow is executed synchronously or asynchronously
    * With **Synchronous** microflows, the microflow is started and the client waits for the result
    * With **Asynchronous** microflows, the microflow is started on the server but the client does not wait for the result, and it will check the server every ten seconds to see if the microflow is done executing

*  **Show progress bar** – this property indicates whether a progress bar is shown during the execution of the microflow; the message shown in the progress bar can be set with the 'Progress message' property

    | Value | Description |
    | --- | --- |
    |  **None** | No progress bar is shown. |
    |  **Non-Blocking** | A progress bar is shown, but the end-user can continue working. |
    |  **Blocking** | A progress bar is shown and the end-user must wait until the microflow is done. |

*  **Progress message** – the progress message is shown along with the progress bar if the progress bar is either non-blocking or blocking

{{% alert type="warning" %}}

Set the duration only to asynchronous if you experience problems. Sometimes if a request takes too long to handle, the request will be sent again by an (impatient) proxy server.

{{% /alert %}}

#### 3.3.4 Confirmation Section

You have the option to ask for confirmation before proceeding with the microflow. This is useful in cases where an operation modifies or deletes a lot of data or when it takes a lot of time to complete. The user will be prompted with a question whether to continue with this operation.

{{% alert type="info" %}}

The title of the confirmation pop-up is determined by a system text (category 'Message dialog title').

{{% /alert %}}

*   **Ask confirmation** – here you can specify whether you want to ask for confirmation or not
*   **Question** – this is the question that you want to show to the user (for example, "Are you sure you want to empty the trash can?")
*   **Proceed button caption** – this is the caption for the button that proceeds with the execution of the microflow (for example, "Empty trash can")
*   **Cancel button caption** – this is the caption for the button that cancels the execution of the microflow (for example, "Cancel")

#### 3.3.5 Advanced Section

There are two more advanced settings:

*   **Maintain selection after microflow** – this is only for grid microflow buttons and specifies whether the selection of the data should be maintained after executing the microflow
*   **Abort on validation errors** – you can choose to abort the microflow on validation errors  here

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
