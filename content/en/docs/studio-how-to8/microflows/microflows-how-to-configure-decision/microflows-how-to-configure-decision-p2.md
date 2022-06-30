---
title: "Step 2: Embed the Microflow in Your App"
url: /studio-how-to8/microflows-how-to-configure-decision-p2/
description: "This how to describes the process of configuring a decision in in Mendix Studio."
weight: 20
tags: ["studio", "microflows", "decision", "pages"]
---

## 1 Introduction 

In the [previous step](/studio-how-to8/microflows-how-to-configure-decision-p1/), you have configured microflows and decisions with enumeration attribute type and Boolean attribute type, now you can validate the microflows by adding them to pages. This how-to explains how you can add microflows with decisions to pages in Mendix Studio. 

This how-to will teach you how to do the following:

* Embed the created microflows with decisions to your page

## 2 Prerequisites 

To start this tutorial, make sure you have completed the following prerequisites:

* [Step 1: Build the Domain Model & Configure a Microflow](/studio-how-to8/microflows-how-to-configure-decision-p1/)

## 3 Embedding the Microflow to Pages   

After microflows are created, you can add them to pages to run them in your app. 

### 3.1 Embedding the Microflow Having a Decision with Attribute of the Enumeration Type {#embedding-decision-enumeration} 

To embed the microflow with a decision (the attribute of the enumeration type) to pages, do the following:

1. Create a page for the existing customers details and name it *Customer_details*. For more information on creating pages, see the [Creating a New Page](/studio8/page-editor/) section in *Pages*.
2.  In **Toolbox** > **Widgets** > **Data Containers**, find **Data View**.

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/data-view.png" >}}

3. Drag and drop **Data View** to the page.
4.  In the **Properties** tab for the **DATA VIEW**, do the following:<br/> 
    a. Set **Data Source** to **Context.**<br/>
    b. Set **Entity** to **Customer**.

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/data-view-properties.png" >}}

5. In **Toolbox**>**Widgets** >**Buttons** find **Create Object**, drag and drop it inside the data view container (it is named **New** by default).
6.  You are going to create a new page that will be opened when a user clicks the **New** button. Open the **Properties** tab for the created button and do the following:<br/>
    a. Set **Customer** as **Entity** in the **Events** section.<br/>
    b. Click **Select Page**.<br/>

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/create-button-properties.png" >}} <br/>

    c. In the **Select Page** dialog box, click **New** page.<br/>
    d. In the **Create new page** dialog box, fill out the title of the page, for example, *New_customer*. <br/>
    e. Tick **Pre-fill page contents based on the Customer entity** and click **Create**.

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/pre-fill-contents.png" >}} 

    The page with customer details is generated.
7. Return to the **Customer_details** page, and in **Toolbox**>**Widgets** >**Data Containers**, find **List View**, drag and drop it to the page.
8. Open **Properties** for the list view and set **Customer** as **Data Source**>**Entity**.
9.  In the **Toolbox** > **Building Blocks** > **Lists** select **List 4**, drag and drop it to the list view. 

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/list-view-list4.png" >}} 

10. Delete the following elements from the list view:<br/>
    a. The **TEXT** widget with the subtitle. <br/>
    b. The **IMAGE** widget.<br/>
11. Open the **Properties** of the **Details** button, and do the following:<br/>
    a. Set **Events**>**On Click Action** to **Microflow**.<br/>
    b. Click **Select microflow** and set **Show_grade_specific_page**.

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/details-button-microflow.png" >}} 

Congratulations! Now when the end-user clicks **Details**, the form for the corresponding customer grade will be opened. 

You can now [preview your app](/studio8/publishing-app/) or publish it.

### 3.2 Embedding the Microflow Having a Decision with the Attribute of the Boolean Type 

To embed the microflow with a decision (the attribute of the Boolean type), do the following:

1. You need to add an option to mark a customer as blocked. To do this, open the **New_customer** page created in the previous section. For more information, see [Embedding the Microflow Having a Decision with Attribute of the Enumeration Type](#embedding-decision-enumeration).
2. In **Toolbox** > **Widgets** > **Input Elements** select **Radio Buttons**, drag and drop this widget into the **Data view** container.
3.  In the **Properties** for the radio buttons, click **Data Source** > **Attribute** and select **Blocked Boolean**. This is how it should look like on your page: 

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/new-customer-page-blocked-attribute.png" >}}

4. Now you will add the microflow to pages. Open the page **Order_form_for_bronze_customers.**
5.  In **Toolbox** > **Widgets** > **Data Containers**, find **Data View**. 

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/data-view.png" >}}

6.  Drag and drop **Data View** to the page.

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/data-view-select-data-view-source.png" >}}

7.  In the **Properties** of the data view, do the following:<br/>
    a. Set **Data Source** to **Context.**<br/>
    b. Set **Entity** to **Customer**.

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/data-view-properties.png" >}}

8.  In **Toolbox**>**Widgets**>**Buttons**, find the **Call Microflow** button, drag and drop it into the **Data View** container. 

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/call-microflow-button-in-data-view.png" >}}

9. Click the **Call Microflow** button to view its properties. 
10. In the **Properties** tab, select the **Customers_status_check microflow**. 

    {{< figure src="/attachments/studio-how-to8/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p2/call-microflow-button-selected-microflow.png" >}}

11. Change the **Caption** from **Microflow** to **Place Order**. 
12. Open the page **Order_form_for_silver_customers** and repeat steps 4-11.
13. Open the page **Order_form_for_gold_customers** and repeat steps 4-11.

Congratulations! Now when the end-user clicks **Place order**, only customers who are not blocked will be able to proceed. If a customer is blocked, they will get an error message. 

You can preview and/or publish your app. For more information on how to preview and publish an app, see [Previewing & Publishing Your App](/studio8/publishing-app/).
