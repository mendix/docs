---
title: "Creating a Custom Save Button with a Microflow"
linktitle: "Creating a Custom Save Button"
url: /refguide/creating-a-custom-save-button/
description: "Describes how to create a custom save button by utilizing microflows."
aliases:
    - /howto/logic-business-rules/create-a-custom-save-button/
---

## Introduction

Mendix uses visual models called microflows to define the logic of your application. A [microflow](/refguide/microflows/) is a visual way of expressing what traditionally would be written in code. 

This document explains how you can create a custom **Save** button on a detail page using a microflow. You need to replace the default **Save** button with a **Save** button that shows a custom message to end-users after they click it. 

Before you continue, make sure you have completed the following:

1. Create a **Customer** entity with the attribute **Name** in your domain model (for more information, see [Configuring a Domain Model](/refguide/configuring-a-domain-model/)).

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/entity-customer.png" width="200px" class="no-border" >}}

2. Create a **Customer_Detail** page for the **Customer** entity (for more information, see [Create overview and detail pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/)).

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/detail-page-customer.png" width="400px" class="no-border" >}}

## Replacing the Default Save Button with a Custom One

The detail page you just created has a default **Save** button. To recreate the behavior of this default button, you need to replace it with a custom one. To do so, follow these steps:

1. Open the **Customer_Detail** page.
2. Right-click the **Save** button and select **Delete** to remove it.
3. Open the **Toolbox** and search for **Call microflow button** there.
4. Drag the **Call microflow button** into the drop-zone under the **Cancel** button.
5. In the **Select Microflow** dialog box, click **New** to create a new microflow.
6. Set the **Name** as *Customer_Save*.

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/customer-save.png" width="400px" class="no-border" >}}

7. After the button is created, open its **Properties** pane.
8. In the **General** section, set the **Caption** as *Save*, and choose a floppy disk as the **Icon**:

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/button-properties.png" width="300px" class="no-border" >}}

You have created a button that calls a microflow.

## Recreating the Default Save Behavior

The button you just created calls a microflow that does not do anything yet. To recreate the default Save behavior for this button, do the following:

1. Right-click the new **Save** button and select **Go to on click microflow** to open the new microflow. An example of how the microflow should like is below:

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/created-microflow.png" class="no-border" >}}

2. Open the **Toolbox** and search for the **Commit object(s)** activity there.
3. Drag the **Commit object(s)** activity into the flow between the start and end events.
4. Double-click the **Commit object(s)** activity to open its properties.
5. In the **Input** section, select **Customer** for **Object or List**.
6. Set **Refresh in client** to **Yes** and click **OK**:

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/commit-object-properties.png" width="400px" class="no-border" >}}

7. Open the **Toolbox**, and find the **Close page** activity there.
8. Drag the **Close page** activity into the flow after the **Commit object(s)** activity:

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/close-page-activity.png" width="400px" class="no-border" >}}

You have recreated the default **Save** button logic.

## Extending the Microflow with a Custom Message

To extend the logic with a custom message that is shown to end-users when they click the button, do the following:

1. Open **Toolbox**, find the **Show message** activity, and drag it after the **Close page** activity.
2. Double-click the **Show message** activity to open its properties.
3. In the **Template** column, type *Customer is saved!*.

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/show-message-properties.png" width="400px" class="no-border" >}}

4. Click **OK** to save the changes. 

Congratulations! You have customized the **Save** button using a microflow: 

{{< figure src="/attachments/refguide/modeling/pages/button-widgets/create-a-custom-save-button/microflow.png" width="500px" class="no-border" >}}

## Read More

* [Microflows](/refguide/microflows/)
* [Advanced Validation with a Custom Save Button](/refguide/setting-up-data-validation/#custom-validation-save-button)
* [Using Validation Assist to Build Data Validations](/refguide/validation-assist/#data-validations)
