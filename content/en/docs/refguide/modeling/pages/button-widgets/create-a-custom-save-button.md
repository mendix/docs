---
title: "Creating a Custom Save Button with a Microflow"
url: /refguide/create-a-custom-save-button/
weight: 1
description: "Describes how to create a custom save button by utilizing microflows."
tags: ["microflow", "logic", "save button"]
aliases:
    - /howto/logic-business-rules/create-a-custom-save-button
    - /howto/logic-business-rules/create-a-custom-save-button.html
---
## 1 Introduction

Mendix uses visual models called microflows to define the logic of your application. A [microflow](/refguide/microflows/) is a visual way of expressing what traditionally would be written in code. 

This document explains how you can create a custom Save button on a detail page using a microflow. You will replace the default Save button with a Save button that shows a custom message to end-users after they click it. 

Before you continue, make sure you have completed the following:

* Add a **Customer** entity to your domain model (for guidance, see [Create a basic data layer](/howto/data-models/create-a-basic-data-layer/))
* [Create overview and detail pages for the Customer entity](/howto/front-end/create-your-first-two-overview-and-detail-pages/)

## 2 Replacing the Default Save Button with a Custom One

To replace the default **Save** button with a custom one, follow these steps:

1. Open the **Customer_Detail** page:

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/customer-detail.png" width="400px" >}}

2. Right-click the **Save** button and select **Delete** to remove it.
3. Right-click the drop-zone under the **Cancel** button.
4. Select **Add widget** and then select **Call microflow button**.
5. In the **Select Microflow** dialog box, click **New** to create a new microflow.
6. Set the **Name** as *Customer_Save*.

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/customer-save.png" width="400px" >}}

7. After the button is created, open its **Properties** pane.
8. Change the **Caption** property to *Save*:

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/button-properties.png" >}}

9. Set a floppy disk as the **Icon**:

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/icon.png" >}}

You have created a button that calls a microflow.

## 3 Recreating the Default Save Behavior

To recreate the default Save behavior, do the following:

1. Right-click the new **Save** button and select **Go to on click microflow** to open the new microflow. The microflow should look like this:

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/created-microflow.png" >}}

2. Open the **Toolbox** and select the **Commit object(s)** activity there.
3. Drag the **Commit object(s)** activity into the flow between the start and end events.
4. Double-click the **Commit object(s)** activity to open its properties.
5. In the **Input** section, select **Customer** for **Object or List**.
6. Set **Refresh in client** to **Yes** and click **OK**:

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/commit-object-properties.png" width="400px" >}}

7. Open the **Toolbox**, and find the **Close page** activity there.
8. Drag the **Close page** activity into the flow after the **Commit object(s)** activity:

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/close-page-activity.png" width="400px ">}}

You have recreated the default **Save** button logic.

## 4 Extending the Microflow with a Custom Message

To extend the logic with a custom message that is shown to end-users when they click the button, do the following:

1. Open **Toolbox**, find the **Show message** activity, and drag it after the **Close page** activity.
2. Double-click the **Show message** activity to open its properties.
3. In the **Template** column, type *Customer is saved!*.

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/show-message-properties.png" width="400px" >}}

4. Click **OK** to save the changes. 

Congratulations! You have customized the **Save** button using a microflow: 

{{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/microflow.png" width="500px" >}}

## 5 Read More

* [Microflows](/refguide/microflows/)
* [Microflow Activities](/refguide/activities/)
* [Work With Lists in a Microflow](/howto/logic-business-rules/working-with-lists-in-a-microflow/)
* [Extract and Use Sub-Microflows](/howto/logic-business-rules/extract-and-use-sub-microflows/)
