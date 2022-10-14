---
title: "Configure Merge and Change Object Activities"
linktitle: "Create Merge and Configure Change Object"
url: /studio-how-to/microflows-how-to-merge-and-change-object/
category: "Microflows"
weight: 70
description: "This how to describes the process of configuring a merge and a change object activity in Mendix Studio."
tags: ["studio", "microflows", "merge", "expression", "change object"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

This how-to explains how you can add advanced logic to a microflow by configuring a merge and a change object activity in Mendix Studio. 

A merge is used to combine flows into one. If you split the microflow flow (with a decision) and now one and the same action needs to be executed for these separated flows, you can combine these two (or more) flows using a merge. For more information on decision, see [Decision](/studio/microflows-decision/).

This how-to will teach you how to do the following:

* Configure a merge in a microflow that contains a decision
* Configure a change object activity after the merge

This how-to describes the following use case: 

In [Configure a Decision Step 1: Build the Domain Model and Configure a Microflow](/studio-how-to/microflows-how-to-configure-decision-p1/) you have configured the decision to open a specific page depending on the customer's grade. In case the customer's grade is not set, the error message is shown. So you have four flows after the decision: 

* Showing a page for bronze  grade customers
* Showing a page for silver grade customers
* Showing a page for gold grade customers
* Showing an error message if the customer's grade is not indicated

In this how-to, you will merge flows for bronze, silver, and gold customer grades to set object (Customer) to active status when customers open their personal order form. 

## 2 Prerequisites

To start this tutorial, make sure you have completed the following prerequisites:

* Create a microflow with a decision: [Configure a Decision Step 1: Build the Domain Model and Configure a Microflow](/studio-how-to/microflows-how-to-configure-decision-p1/)

## 3 Creating a Merge

To create a merge for gold, silver, and bronze customer grades in a microflow, follow these steps:

1. Open the microflow named *Show_grade_specific_page*:

    {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-merge-and-change-object/microflow-without-merge.png" >}}

2. Open the **Toolbox** tab > the **General** section, drag the **Merge** activity before the end event of the flow labelled **Bronze**:

    {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-merge-and-change-object/adding-merge.png" >}}

3. To merge the flow labelled **Gold** with the **Bronze** one, do the following:

    1. Delete the **End event** of the flow labelled **Gold**.
    2. Hover over the **Show Page** activity.

        {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-merge-and-change-object/hover-over.png" >}}

    3. Click one of the dots that will turn into an arrow.
    4. Drag the arrow to the merge. Now the **Show Page activity** is connected to the merge:

        {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-merge-and-change-object/connecting-activity-and-merge.png" >}}

4. Repeat step 3 for the flows labelled **Silver**. 

You have three flows merged into one.

## 4 Configuring Change Object

Now you will add logic to the microflow. You have merged three flows into one to set customer's status to active irrespectively of their grades. Setting the status of the customers to active can be used, for example, to identify who of the customers are using their account, and who are not.

Do the following:

1. First of all, you need to add a new attribute to **Customer** entity in the domain model to indicate if the customer is active or not. Click the domain model icon in the left menu bar to open the domain model and do the following:

    1. Click the **Customer** entity > **New attribute**.
    2. In the **Create New Attribute** dialog box, set **Name** to *Active* and **Type** to *Boolean*.

        {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-merge-and-change-object/new-attribute-active.png" >}}

    3. Click **Create**.

2. Now you will configure a new activity in the microflow. Open the microflow named *Show_grade_specific_page*.
3. In the **Toolbox** > **Object Activities** select the **Change Object** activity, drag it after the merge in the microflow.

    {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-merge-and-change-object/change-object-added.png" >}}

4. In the **Properties** tab for the **Change Object** activity, do the following:

    1. Set **Variable** to **Customer** (because you are going to edit **Customer**).
    2. Click **Add New Value**.

        {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-merge-and-change-object/change-object-add-new-value.png" >}}

    3. In the **Change value** dialog box, select the attribute named **Active**, then click the **Expression** tab, and type *true*. This means that after the order form is opened for a specific customer, the customer's status is set to active (active=true), no matter what grade this customer has.

        {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-merge-and-change-object/change-value-expression-editor.png" >}}

    4. Click **Add** to finish setting the value for the **Active** attribute.
    5. In the **Properties** tab > the **Behavior** section do the following: leave the **Commit** option set to **Yes**, (this means the object will not be changed further and your changes will be saved (committed) to the database). 

        {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-merge-and-change-object/change-object-properties.png" >}}

Congratulations! Now you have the microflow that checks if the customer has a grade and does one of the following:

* If the customer has a grade, it opens the order form for the corresponding customer grade.
* If the customer does not have a grade, the error message pops up.
* If the customer has the grade, the customer's status is set to active irrespective of the grade once the order form is opened.

Now you can preview or publish your app. For more information on how to preview and publish an app, see [Previewing and Publishing Your App](/studio/publishing-app/).
