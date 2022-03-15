---
title: "Configure a Delete Object Action"
url: /studio7/microflows-how-to-configure-delete-object/
category: "Microflows"
menu_order: 80
description: "This how to describes the process of configuring a delete object action in a data view and a list view in Mendix Studio."
tags: ["studio", "page editor", "delete object", "list view", "data view", "how to"]
---

## 1 Introduction 

This how-to explains how you can configure a delete object action in Mendix Studio. 

**This how-to will teach you how to do the following:**

* configure the **Delete Object** action in a [list view](/studio7/page-editor-data-view-list-view/#list-view-properties)
* configure the **Delete Object** action in a [data view](/studio7/page-editor-data-view-list-view/#data-view-properties)

This how-to describes the following use case:  you would like to delete the customer's name from the list of customers. 

{{% alert type="info" %}}

You can configure the **Delete Object** on click action for such widgets as buttons or a static image. In this how-to, a **Delete** button is used as an example of widget with **Delete Object** on click action. For more information, see the [Delete Object Action](/studio7/page-editor-widgets-events-section/#delete-object-action) section in *Events Section in Widgets*.

{{% /alert %}}

## 2 Configuring the Domain Model and Creating a Page

To list customers' names and to show a more detailed information under the list, you need to create an entity *Customer*, add attributes *Name* and *Address* to it, and then create a page where you will list names of customers. 

To configure the domain model and create the page, do the following:

1. Open your [domain model](/studio7/domain-models/).

2. Create entity *Customer*. For more information on how to create the entity, see section [3 Adding New Entities](/studio7/domain-models/) in *Domain Models Overview*.

3.  For the **Customer** entity, create an attribute (for more information on how to create an attribute, see section [4 Adding New Attributes](/studio7/domain-models/) in *Domain Models Overview*) and do the following:<br/>

    a. Set the **Name** of the attribute to *Name*.<br/>
    
    b. Set the [**Type**](/studio7/domain-models-attributes/) to **String**.<br/>

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/name-attribute.png)<br/>    
    c. Click **Create** to add the new attribute.<br/>

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/customer-entity.png)

4. Repeat step 3 to create an attribute *Address* of string type.

5.  Now you need a page where customers' names will be listed. Create a blank page and name it *Customers*. For more information on creating pages, see section [3.2 Creating a New Page](/studio7/page-editor/) in *Pages*.<br/>

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/create-page.png)

A new blank page is created.

![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/blank-page-created.png)

## 3 Configuring a Delete Object Action in a List View

Now you will configure a list view and will add a button with [**Delete Object** action](/studio7/page-editor-widgets-events-section/#delete-object-action) that deletes the corresponding customer when a user clicks the button. Do the following:

1. Open the page *Customers* that you have created.

2.  In **Building Blocks** > **Lists** find **List 1**, drag and drop it to the page. This building block contains a list view in it by default.

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/list-1.png)

3.  Now you need to configure the list view. Open the list view properties and do the following: <br/>

    a.  Select **Database** as **Data Source**.<br/>

    b.  Set **Entity** to **Customer**.<br/>

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/list-view-properties.png) <br/>
    Now the list view is connected to the **Customer** entity. <br/>

4.  Select the text *Name* and do the following in **Properties**:<br/>

    a. In **Content**, delete the text *Name*.<br/>

    b. Click **Add attribute** (or press <kbd>Ctrl</kbd> + <kbd>Space</kbd>) and select the **Name** attribute. <br/>

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/text-content.png)<br/>
    Now the text widget is connected to the **Name** attribute, and will show you the customers names in a list.<br/>

5.  Click the button displayed as arrow and delete it.

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/arrow-button.png)

6.  In **Toolbox** > **Widgets** > **Buttons** find **Delete Object**, drag and drop it inside the container that is left from the arrow button. 

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/container-for-the-delete-button.png)

7.  In **Properties** for the **Delete** button, you can see that the **On Click** action is set to **Delete Object** automatically, and caption is set to **Delete**, because the widget is preconfigured in Studio.

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/delete-button-properties.png)

You have created the page that lists the customers names. If a user clicks **Delete** in one of the lines, the customer who is indicated in this line will be deleted from the app along with the customer's details. For more information, see section [2.3 Delete Object Action](/studio7/page-editor-widgets-events-section/#delete-object-action) in *Events Section in Widgets*.

## 4 Configuring a Delete Object Action in a Data View

You can also configure the [**Delete Object** action](/studio7/page-editor-widgets-events-section/#delete-object-action) in a data view. In this case **Delete Object** will delete the connected object. To configure the data view and the **Delete** button on your page, do the following:

1.  On the page named *Customers*, open the **Layout Grid** properties (use a breadcrumb at the bottom of the screen to find the layout grid).

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/breadcrumb.png)

2.  In **Properties** > **Add Row**, click the button that adds a row below that you need to place the data view there. 

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/add-row.png)

3. In **Toolbox** > **Widgets** > **Data Containers**, find data view, drag and drop it inside the column (that was added together with a new row).

4.  Now you need to configure the data view. In **Properties** of the data view, do the following: <br/>

    a. Set **Data Source** to **List widget**.<br/>

    b. Set **Widget** to **List View with entity Customer**. Now the data source for the data view is the list view that is placed on the same page.<br/>

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/data-view-list-widget.png)

5. You need to fill the data view with data. In **Toolbox** >**Widgets** > **Typography**, select **Text**, drag and drop it inside data view content. 

6.  You will make a heading out of the **Text** widget you have just added. Open the **Properties** of the **Text** and do the following:<br/>

    a. In **Content**, delete the word *Text* and type *Customer Details*.<br/>

    b. Set **Render Mode** to **H4**. <br/>

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/text-heading4.png)<br/>

7. Now you will add a text box to display details of the selected customer. In **Widgets** > **Input Elements**, select **Text Box**, drag and drop it inside the data view content. 

8.  Open the **Properties** of the **Text Box**, and in **Data Source**, set **Attribute** to **Name** (the label for the text box will be changed to **Name** automatically).  

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/text-box-name.png)

9. Repeat step 7 to add one more **Text Box** to the page.

10. Open the **Properties** of the **Text Box**, and in **Data Source**, set **Attribute** to **Address** (the label for the text box will be changed to **Address** automatically).

    ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/text-box-address.png)

11. In **Toolbox** > **Widgets** > **Buttons** find **Delete Object**, drag and drop it inside the data view. 

12. The button is already preconfigured: its **On Click Action** is set to **Delete Object**, and **Caption** is set to **Delete**. But you will add some styling to it. Do the following:<br/>

    a. In the **General** section, set **Style** to **Danger**.<br/>

    b. In the **Design** section, set **Align Self** to **Right**.<br/>

Now you have configured the data view that will show you the customer's name and address once you select this customer in a list. 

![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/configured-page.png)

The workflow for the **Delete** button in the data view (the red **Delete** button) is the following:

1. A user selects a name of the customer in a list.

2. The customer's details (name and address) are shown in the data view below. 

3. The user clicks **Delete**.

4. Whole customer's record is deleted.

   ![](/attachments/studio7/microflows/microflows-how-to-configure-delete-object/published-page-example.png)

For more information, see section [2.3 Delete Object Action](/studio7/page-editor-widgets-events-section/#delete-object-action) in *Events Section in Widgets*.

Congratulations! You have configured **Delete** buttons in a list view and in a data view. 
