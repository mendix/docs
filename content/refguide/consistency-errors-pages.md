---
title: "Page Editor Consistency Errors"
parent: "consistency-errors"
description: "Describes consistency errors in Mendix Studio Pro and the way to fix them."
tags: ["Studio Pro", "consistency errors", "checks", "errors", "pages"]
---

## 1 Introduction 

In this document, we explain how to solve the most common or complicated consistency errors that can occur when configuring pages in Studio Pro. An example of a consistency error on a page is when you do not specify the entity property of a data view on a page. 

{{% alert type="info" %}}

This document does not describe *all* the errors, as there are a lot of errors that can occur, some of which are simple and do not need extra explanation, others are rare and/or heavily dependent on a use-case. 

{{% /alert %}}

Some errors have error codes and if these errors are described in documentation, Studio Pro has a clickable link to the corresponding document. Others do not have an error code, in this case, you can manually search whether a particular error is described in documentation (you can search by a message you see in the **Errors** pane).

## 2 List View Consistency Errors 

If you do not configure a [data source](data-sources) for a [list view](list-view) properly, you will get consistency errors. 

The scheme below shows that the data source of the list view has been set to **Database**, but the entity that needs to be retrieved from the database has not been specified. This results in a consistency error. 

![Data Source Consistency Error Scheme](attachments/consistency-errors-pages/list-view-error.png)

The table below describes the most common errors which can occur when configuring a list view,  the causes of these errors, and ways to fix them. 

| Error Code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0488     | No entity configured for the data source of this list view. Select an entity or change the data source. | The **Database/XPath/Association** option is selected as a data source for a list view, but no entity is specified. | Do one of the following: <ul><li>Open the list view's properties > **Data source** and select an entity in the **Entity (path)** field</li><li>Change the type of the data source</li></ul> |
|            | No microflow configured for the data source of this list view. Select a microflow or change the data source. | The data source is set to **Microflow**, but no microflow is specified. | Do one of the following: <ul><li>Open the list view's properties > **Data source** and select a microflow in the **Microflow** field</li><li>Change the type of the data source</li></ul> |
|            | No nanoflow configured for the data source of this list view. Select a nanoflow or change the data source. | The data source is set to **Nanoflow**, but no nanoflow is specified. | Do one of the following: <ul><li>Open the list view's properties > **Data source** and select a nanoflow in the **Nanoflow** field</li><li>Change the type of the data source</li></ul> |
| CE0595     | Attribute {AttributeName} is not an attribute of entity {EntityName}. | You have changed the target entity of a list view without updating its contents. The list view is filled with attributes of another entity. | Open the widget's properties > **Data source** and select another attribute for **Attribute (path)**. |

## 3 Data View Consistency Errors 

If you do not configure a [data source](data-sources) for a [data view](data-view) properly, you will get consistency errors.

For example, you have selected **Listen to widget** as the data source, but you have not selected the specific **List widget** you are listening to.

![Data View With no List Widget Configured](attachments/consistency-errors-pages/data-view-no-list-widget.png)

The table below describes the most common errors you can come across when configuring a data view,  causes of these errors, and ways to fix them. 

| Error Code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0488     | No entity configured for the data source of this data view. Select an entity or change the data source. | **Context** is selected as a data source for a data view, but no entity is specified. | Do one of the following: <ul><li>Open the data view's properties > **Data Source** and select an entity in the **Entity** field</li><li>Change the type of the data source</li></ul> |
|            | No microflow configured for the data source of this data view. Select a microflow or change the data source | A microflow is selected as a data source, but no microflow is specified. | Do one of the following: <ul><li>Open the data view's properties > **Data Source** and select a microflow in the **Microflow** field</li><li>Change the type of the data source</li></ul> |
|            | No nanoflow configured for the data source of this data view. Select a nanoflow or change the data source | A nanoflow is selected as a data source, but no nanoflow is specified. | Do one of the following: <ul><li>Open the data view's properties > **Data Source** and select a nanoflow in the **Nanoflow** field</li><li>Change the type of the data source</li></ul> |
| CE0536     | No list widget configured for the data source of this data view. Select a widget or change the data source. | A **Listen to widget** is configured as a data source for a data view, but the list view widget specified does not exist anymore on the same page. | Do one of the following: <ul><li>Create a list view on the same page, configure it, and select it as the list widget for the data view</li><li>Change the type of the data source</li></ul> |
| CE0558     | All data views receiving an object from the page parameter must have the same entity. | You have several data views on one page that have different entities as their data sources. | Do one of the following: <ul><li>Select the same entity for all data views using the page context</li><li>Change the data source for them</li></ul> |

## 4 Context Not Available Consistency Errors

The errors that you can get when a page is expecting a context that is unavailable are described in the table below. 

| Error Code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE1568     | The selected page {Name of the page} expects an object of type {type of object}, which is not available here. | The page has a data view that expects an object of a particular type to be passed to it. This error occurs when the page is called from another page, which does not have this object available. For a more detailed example, see the [Error Fix Example for CE1568](#error-example-1). | Make sure that the object is passed to the page that has a configured data view on it. For more information, see the [Error Fix Example for CE1568](#error-example-1). |
| CE1569     | The selected page {Name of page} expects an object of type X, which is not compatible with the object of type Y that is available here. | You have a widget (for example, a button) that opens a page. The page has a data view that expects an object of particular type to be passed to it. However, the widget is placed inside a data container with another type of object. For a detailed example, see the [Error Fix Example for CE1569](#error-example-2) section. | Make sure that the button is placed in a data container which passes the correct type of object to the page. For more information, see the [Error Fix Example for CE1569](#error-example-2) section. |

### 4.1 Error Fix Example for CE1568 {#error-example-1}

When a page expects a context that is not passed to it from a calling page or a microflow, you will get consistency errors. 

For example, the **Customers** page contains a list view with a list of all customer names (**Customer** is set as **Entity** in the **Data Source** properties), and a **Details** button outside of the list view (placed in a [container](container) only). The **Details** button opens a **Customer Details** page when a user clicks it (the **On Click Action** for the button is set to **Page**). 

![Button Properties on the Customers Page](attachments/consistency-errors-pages/customers-page.png)

However, the **Customer Details** page has a data view that expects an object *Customer* to be passed to it. In other words, this page needs to get data first to be able to display it. 

![Data View Expects the Customer Object](attachments/consistency-errors-pages/data-view-customer.png)

As this object is not passed to it from the **Customers** page, you get a consistency error.

![Example of Error When Context is Unavailable](attachments/consistency-errors-pages/object-error.png)

As the **Details** button to the **Customers** page is outside a data container, it does not know which object to pass. The way of fixing this error depends on the following:

* You want to pass a specific *Customer* object from the Customer list to the **Customer Details** page, in other words, the details of a particular customer will be displayed on the **Customer Details** page (for more information, see the [Passing a Specific Object to the Page](#passing-specific-object) section)
* You want to create a new object of the *Customer* type and pass it to the **Customer Details** page, this means that a new customer will be created (for more information, see the [Creating a New Object and Passing it to the Page](#creating-new-object) section)

#### 4.1.1 Passing a Specific Object to the Page {#passing-specific-object}

If you want the **Customer Details** page to open the details of a specific customer, this means you want to pass a specific object to the page. As we already have a list view with the customers list on the **Customer** page, we can fix this error the following way:

1. Open the **Customers** page.

2.  Drag the **Details** button inside the list view.

    ![The Details Button Example](attachments/consistency-errors-pages/details-button-inside-the-list-view.png)

Now the button gets the object of type *Customer* from the list view on the **Customers** page, and it will be passed to the **Customer Details** page. As a result, the details of a particular customer is displayed on the **Customer Details** page. 

#### 4.1.2 Creating a New Object and Passing it to the Page {#creating-new-object}

If you want to create a new customer and fill in the customer's details on the **Customers Details** page, you can do the following:

1. Open the **Customers** page.

2. Open properties for the **Details** button, and set **Create Object** as an **On Click Action**.

3. Set **Customer** as **Entity**.

4.  Set **Customer Details** as **Page**.

    ![On Click Event Example](attachments/consistency-errors-pages/button-create-object.png)

5. Change the button's caption from **Details** to **Add**, as this button will now create a new customer instead of showing the details of an existing customer.

Now when a user clicks this button, the **Customer Details** page will open, and the new *Customer* object will be created. 

### 4.2 Error Fix Example for CE1569 {#error-example-2}

If a widget opens a page and this widget is inside a data container of entity X, but the referred page expects entity Y, you will get a consistency error. 

For example, you have a **Details** button on the **Engineers** page that opens the **Tasks** page. 

![A Button on Engineers Page](attachments/consistency-errors-pages/engineers-page.png)

The button is placed inside a list view; the list view's data source is set to entity *Engineer* in **Properties** > **Data Source**.

The Tasks page has a data view on it, but the data view's data source is set to entity *SmartTask* in **Properties** > **Data Source**. 

This means that data view expects the object of type *SmartTask* passed to it, but the **Engineers** page is passing the object of type *Engineer*.

![Data Source Example](attachments/consistency-errors-pages/tasks-page-list-view.png)

To fix this error you can do one of the following:

* Place the **Details** button in a data container that will pass the correct type of data to the page:

	{{% image_container width="350" %}}![](attachments/consistency-errors-pages/details-button.png)
	{{% /image_container %}}

* Select another page for the button that will not expect any object to be passed to it, or will expect the object of type *Engineer*

* Change the data source of the data view on the **Tasks** page to entity *Engineer*

## 5 Data Consistency Errors

When a widget that expects as object from its data source does not get it or gets an object from a different entity type, it causes errors in data consistency. 

Some of the most common errors of this type are described in the table below:

| Error Code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0552     | Microflow {name of the microflow} does not return an object. | The data source of a widget (for example, a data view) is set to **Microflow**, but the microflow does not return any object. | Open the microflow and configure a return value of the end event for it. |
| CE0551     | Microflow {name of the microflow} does not return a list.    | The data source of a list view is set to **Microflow**, but the microflow does not return a list. | Open the microflow and configure its end event to return a list. |
| CE1573     | Parameter {Name of the parameter} of the selected microflow/nanoflow does not match available arguments. No arguments available to {Name of the widget}. | You selected a microflow or a nanoflow as an on-click event of a widget (for example, of a button) and the microflow/nanoflow contains a parameter, but no argument (for example, an object) is available for the widget to pass to the microflow. | Place the widget in a data container and make sure that the data source of the data container matches the entity selected in **Data type** property of the microflow/nanoflow parameter. For a detailed example and a fix for it, see the [Error Fix Example for CE1573](#error-fix-example-3) section. |
| CE1574     | Parameter {Name of the parameter} of the selected microflow/nanoflow does not match available arguments. Arguments available to {Name of the widget} are {list of available arguments}. | You selected a microflow or nanoflow as the data source of a widget, but the argument (or arguments) available for this widget does not match the parameter(s) of the microflow. | Make sure that an argument (for example, an object) available for the widget matches the entity selected in the **Data type** property of the microflow/nanoflow parameter. For a detailed example and a fix for it, see the [Error Fix Example for CE1574](#error-fix-example-4) section. |

### 5.1 Error Fix Example for CE1573 {#error-fix-example-3}

When you set a microflow or a nanoflow as an on-click event for a widget, and this microflow expects an argument (for example, an object) that is not available, this will result in an error. 

For example, on a page named *Customers* you have a button that calls a microflow (that is an [**On click** event](on-click-event) of the button is set to *Microflow*):

 ![](attachments/consistency-errors-pages/on-click-event-button.png)

However, the microflow contains a parameter *Customer*:

![](attachments/consistency-errors-pages/microflow-parameter.png)

The microflow parameter expects an argument *Customer*, and since this argument is not available on the page where the button is located, it results in an error. 

To fix it, do the following:

1. Open the *Customers* page and drag and drop a data container on it. For example, you can drag and drop a list view.

2.  Set the data source type of the list view to *Database* and set **Entity (path)** to *Customer*.

    ![](attachments/consistency-errors-pages/data-source-list-view.png)

3. Place the button inside the list view.

Now the *Customer* object is available on the page and it matches the microflow parameter *Customer*. 

### 5.2 Error Fix Example for CE1574 {#error-fix-example-4}

When you set a microflow or nanoflow as an on-click event for a widget, and this microflow/nanoflow expects a certain argument, but a different argument is available to the widget, this will result in an error. 

For example, on a page named *Customers* you have a button that calls a microflow (that is an [On click event](on-click-event) of the button is set to *Microflow*):

 ![](attachments/consistency-errors-pages/on-click-event-button.png)

The microflow contains a parameter *Customer*:

![](attachments/consistency-errors-pages/microflow-parameter.png)

On the *Customers* page you also have a data container, for example, a data view, that has an object *Photo* available. That means that the data source type of the data view is set to *Context* and **Entity (path)** is set to *Photo*:

![](attachments/consistency-errors-pages/data-view-data-source.png)

As the microflow has the parameter *Customer*, and the data view has the object *Photo*, they are conflicting and resulting into an error.

The best way to fix this error is to either change the microflow to accept *Photo* or put the button in a data container for a different entity.

## 6 Input Widget Consistency Errors

The most common errors for input widgets, their causes, and ways to fix them are described in the table below. For more information on input widgets, see [Input Widgets](input-widgets). 

| Error Code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0544     | This widget can only function inside a data container. Move it into a data view, list view or template grid. | You have added an input widget to a page, but it is not inside a data container. Input widgets need to refer to an attribute of a specific entity type. And entities are only available via data containers. For more information about input widgets, see [Input Widgets](input-widgets). | Place this widget into a data container: a data view, list view, or template grid. |
| CE0545     | Select an attribute for this {widget name}.                  | You have added an input widget, and it is inside a data container, but an attribute is not selected for it. | Right-click the widget, click **Select Attribute** in the drop-down list, and set an attribute; or open widget's properties > the **Data source** section and set an attribute in the **Attribute (path)** field. |
|            | Association {Name} must be a reference (not a reference set) | You have added a reference selector, and then you changed the association from reference type to reference set (from one-to-many or one-to-one to many-to-many). | Open your domain model, find the association you have selected for the reference selector, and change it to a one-to-many association. Note that changing the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the reference selector.<br />For more information on how to fix this error for the reference selector, see the [Incorrect Multiplicity for a Reference Selector](#incorrect-multiplicity-reference) section |
|            | Association {Name} must be a reference set (not a reference) | You have added an input reference set selector, and then you changed the association from reference set type to reference (from many-to-many to one-to-many or one-to-one). | Open your domain model, find the association you have selected for the input reference set selector, and change it to a many-to-many association. Note that changing the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the reference set selector. <br />For more information on how to fix the consistency error for the reference set selector and input reference set selector, see the [Incorrect Multiplicity for a Reference Set Selector and an Input Reference Set Selector](#incorrect-multiplicity-reference-set) section. |
|            | The reference set selector expects an association of type reference set that starts in the data view entity. | You have added a reference set selector, and then you changed the association from reference set type to reference (from many-to-many to one-to-many or one-to-one). | Open your domain model, find the association you have selected for the reference set selector, and change it to a many-to-many association. Note that changing the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the input reference set selector. <br />For more information on how to fix the consistency error for the reference set selector and input reference set selector, see the [Incorrect Multiplicity for a Reference Set Selector and an Input Reference Set Selector](#incorrect-multiplicity-reference-set) section. |

### 6.1 Incorrect Multiplicity for a Reference Selector {#incorrect-multiplicity-reference}

A reference selector is a widget that is used to display and edit one-to-many or one-to-one associations. For more information on the widget, see [Reference Selector](reference-selector).  

For example, you have several employees who are associated with one city where they work. This is a one-to-many association: multiple *Employees* objects are associated with one *City* object.  Associations that refer to a single object in this manner are *references*, as opposed to *reference sets*, in which multiple objects can refer to multiple other objects. In a reference, the "single object" side of the association is always the association's owner. For more information on associations and their types, see [Associations](associations).

![One-to-many Association](attachments/consistency-errors-pages/many-to-one-association.png)

If you have the wrong type of association, you will get a consistency error: *Association {Name} must be a reference (not a reference set)*.

To fix this error, do the following:

1. Open your domain model and double-click the association that you are using for the reference selector.

2.  In **Properties of Association** dialog box, change **Multiplicity** to one-to-many (in our example, multiple 'Employee' objects are associated with one 'City' objects).

    ![Multiplicity for One-to-many Association](attachments/consistency-errors-pages/one-to-many-multiplicity.png)

3. Click **OK** to save changes.

You have changed the association multiplicity and fixed the error. 

{{% alert type="info" %}}

Сhanging the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the reference selector, for example, a reference set selector or input reference set selector. 

{{% /alert %}}

### 6.2 Incorrect Multiplicity for a Reference Set Selector and an Input Reference Set Selector {#incorrect-multiplicity-reference-set}

Reference set selector and input set selector are widgets that are used to display and edit many-to-many associations. For more information on these widgets, see [Reference Set Selector](reference-set-selector) and [Input Reference Set Selector](input-reference-set-selector). 

For example, you have several employees who can visit customers in different cities during the week. Thus, many employees are associated with many cities, this is a many-to-many association between an *Employee* entity and a *City* entity (multiple employees are associated with multiple cities). Associations that refer to multiple objects in this manner are *reference set*. For more information on associations and their types, see [Associations](associations). 

![Many-to-many Association](attachments/consistency-errors-pages/many-to-many-association.png)

If you have a wrong type of association, you will get the following errors:

*  *Association {Name} must be a reference set (not a reference)* – for an input reference set selector
*   *The reference set selector expects an association of type reference set that starts in the data view entity* – for a reference set selector

To fix the error, do the following:

1. Open your domain model and double-click the association that you are using for the reference set selector or the input reference set selector and do the following: <br/>

2.  In **Properties of Association** dialog box, change **Multiplicity** to many-to-many (in our example, multiple 'Employee' objects are associated with multiple 'City' objects).

    ![Multiplicity for Many-to-many Association](attachments/consistency-errors-pages/changing-multiplicity.png)

3. Click **OK** to save changes.

You have changed the association multiplicity and fixed the error. 

{{% alert type="info" %}}

Сhanging the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the reference set selector or input reference set selector, for example, a reference selector. 

{{% /alert %}}

## 7 File Widget Consistency Errors

File widgets should be placed in a data container, otherwise you will get consistency errors. Another way to fix consistency errors is to place a file widget in a snippet and configure the snippet. For more information on file widgets, see [File Widgets](file-widgets). 

| Error code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|            | A [file manager](file-manager) must be placed in a data view or  snippet that is connected to the entity ‘System.FileDocument’ or a specialization. | You have added a file manager to a page, but it is not inside a data view or a snippet that is configured properly. | Place this widget into a data container. If you want to place it into a snippet, mind that you need to configure it properly: either set System.FileDocument (or its specialization) as an entity for this snippet or place the snippet in a data container. |
|            | An [image uploader](image-uploader) must be placed in a data view or snippet that is connected to the entity ‘System.Image’ or a specialization. | You have added an image uploader to a page, but it is not inside a data view or a snippet that is configured properly. | Place this widget into a data container. If you want to place it into a snippet, mind that you need to configure it properly: set System.Image (or its specialization) as an entity for this snippet or place the snippet in a data container. |
|            | Move this widget into a data container, for example a data view or list view. | You have added an [image viewer](image-viewer) to your page, but it is not inside a data view or a list view. | Place this widget inside a data view or a list view.         |
| CE0489     | Select an entity for the data source of this [image viewer](image-viewer). | You have added an image viewer to a page, it is placed inside a data view or a list view, but an entity for the image viewer is not specified. | Open image viewer's properties > the **Data source** section and select an entity in the **Entity (path)** field. |
## 8 Image Widget Consistency Errors

A consistency error for an image widget is described in the table below:

| Error code | Message in the Error Pane | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
|            | No image selected         | You have added an image widget to a page, but do not select an image itself. | Open the image properties >**General** > **Image** and select an image. For more information on an image widget, see [Image](image). |

## 9 On Click Event Consistency Errors 

You can specify an **On Click Event** for different widgets, for example, for buttons or images. 

The most common consistency errors are connected with not configuring the on click event. 

To fix the consistency errors, finish configuring the on click event (for example, for an on click event **Show a page**, select a particular page that should open), or change the on click action. 

![On Click Event Example](attachments/consistency-errors-pages/on-click-event.png)

##  10 Read More

* [Pages](pages) 
