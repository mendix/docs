---
title: "Step 2: Embed the Microflow in Your App"
linktitle: "2. Embed Microflow"
url: /studio-how-to/microflows-how-to-configure-decision-p2/
description: "This how to describes the process of configuring a decision in in Mendix Studio."
weight: 20
tags: ["studio", "microflows", "decision", "pages"]
---

## 1 Introduction 

In the [previous step](/studio-how-to/microflows-how-to-configure-decision-p1/), you have configured microflows and decisions with enumeration attribute type and Boolean attribute type, now you can validate the microflows by adding them to pages. This how-to explains how you can add microflows with decisions to pages in Mendix Studio. 

This how-to will teach you how to do the following:

* Embed the created microflows with decisions to your page

## 2 Prerequisites 

To start this tutorial, make sure you have completed the following prerequisites:

* [Step 1: Build the Domain Model and Configure a Microflow](/studio-how-to/microflows-how-to-configure-decision-p1/)

## 3 Embedding the Microflow to Pages   

After microflows are created, you can add them to pages to run them in your app. 

### 3.1 Embedding the Microflow Having a Decision with Attribute of the Enumeration Type {#embedding-decision-enumeration} 

To embed the microflow with a decision (the attribute of the enumeration type) to pages, do the following:

1. Create a black page that will display the existing customers and name it *Customers*. For more information on creating pages, see the [Creating a New Page](/studio/page-editor/) section in *Pages*.

2. In **Toolbox**>**Widgets** >**Buttons** find **Open Page**, drag and drop it on the page.

3. This button should allow users to create a new customer. Open the **Properties** tab for the created button and do the following:

    1. Click the page **Page** property.

        {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/create-button-properties.png" width="300">}} 

    2. In the **Select Page** dialog box, click the plus icon in the top right corner.

    3. In the **Create Page** dialog box, do the following:

    4. Set **Title** to *New_Customer*.

    5. Set **Layout** to **PopupLayout**.

    6. Make sure that **Autofill Contents** is on and that Form Columns is selected as a page template.

    7. Set **Entity** to **Customer**. 

        {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/pre-fill-contents.png" width="500">}} 

    8. Click **Create**.

    The page with customer details is generated.

4. Return to the **Customers** page, and in the **Toolbox** > **Building Blocks** > **Lists** select **List single line**, drag and drop it on the page. 

    {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/list-view.png" >}} 

10. Open the list's (list view's) property and click the **Entity** property.

10. In the **Select Entity** dialog box, deselect **Generate contents of the list view**, choose the **Customer** entity, and click **Select**.

    {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/select-entity.png" width="400">}} 
    
11. Select the **List item title text** in the list view, open its properties and do the following:

    1. In the **Content** property, delete the current text and click **Add**.
    
    2. Select **Attribute** from the drop-down list and choose **Name** in the **Select Attribute** dialog box,
    
        {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/select-attribute.png" width="400">}} 
    
8. Select the button (displayed as an arrow) in the list view, open its properties and do the following: 

    1. Set **Events**>**On Click Action** to **Microflow**.
    2. Click the **Microflow** property and choose the **ACT_Customer_ShowGradeSpecificPage** microflow in the **Select Microflow** dialog box.

        {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/details-button-microflow.png" >}} 

Congratulations! Now when the end-user clicks the button in the list for more details, the form for the corresponding customer grade will open. 

You can now [preview your app](/studio/publishing-app/) or publish it.

### 3.2 Embedding the Microflow Having a Decision with the Attribute of the Boolean Type 

In the [previous section](#embedding-decision-enumeration), you have created the **New_Customer** page. The user is able to fill in all customer's details on this page, including customer's status (whether the customer is blocked):

{{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/new-customer-page.png" width="500" >}}

Now you need to embed the microflow with a decision (the attribute of the Boolean type) that allows users to check whether the customer is blocked and whether they should proceed with the order. Do the following:

1. Open the **New_Customers** page.

2. In the **Toolbox**, find the **Call Microflow** button, and drag and drop it next to the **Cancel** button.

3. Open **Call Microflow** button properties and do the following:

    1. Set **ACT_Customer_StatusCheck** for the **Microflow** property.

    2. Set **Caption** to **Check Status**.

    3. Set **Style** to **Warning**.

        {{< figure src="/attachments/studio-how-to/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/check-status-button.png" >}} 

Congratulations! Now when the end-user clicks **Check Status**, they will see an error when the customer is blocked.

You can [preview and/or publish](/studio/publishing-app/) your app now. 
