---
title: "Page Editor Consistency Errors"
url: /refguide/consistency-errors-pages/
weight: 10
description: "Describes consistency errors in Mendix Studio Pro and the way to fix them."
tags: ["Studio Pro", "consistency errors", "checks", "errors", "pages"]
#To update screenshots in this document, use the Consistency Errors app.
---

## 1 Introduction 

In this document, we explain how to solve the most common or complicated consistency errors that can occur when configuring pages in Studio Pro. An example of a consistency error on a page is when you do not specify the entity property of a data view on a page. 

{{% alert color="info" %}}
This document does not describe *all* the errors, as there are a lot of errors that can occur, some of which are simple and do not need extra explanation, others are rare and/or heavily dependent on a use-case. 
{{% /alert %}}

Some errors have error codes and if these errors are described in documentation, Studio Pro has a clickable link to the corresponding document. Others do not have an error code, in this case, you can manually search whether a particular error is described in documentation (you can search by a message you see in the **Errors** pane).

## 2 List View Consistency Errors 

If you do not configure a [data source](/refguide/data-sources/) for a [list view](/refguide/list-view/) properly, you will get consistency errors. 

The scheme below shows that the data source of the list view has been set to **Database**, but the entity that needs to be retrieved from the database has not been specified. This results in a consistency error. 

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/list-view-error.png" alt="Data Source Consistency Error Scheme" >}}

The table below describes the most common errors which can occur when configuring a list view,  the causes of these errors, and ways to fix them. 

| Error Code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0488     | No entity configured for the data source of this list view. Select an entity or change the data source. | The **Database/XPath/Association** option is selected as a data source for a list view, but no entity is specified. | Do one of the following: <ul><li>Open the list view's properties > **Data source** and select an entity in the **Entity (path)** field</li><li>Change the type of the data source</li></ul> |
|            | No microflow configured for the data source of this list view. Select a microflow or change the data source. | The data source is set to **Microflow**, but no microflow is specified. | Do one of the following: <ul><li>Open the list view's properties > **Data source** and select a microflow in the **Microflow** field</li><li>Change the type of the data source</li></ul> |
|            | No nanoflow configured for the data source of this list view. Select a nanoflow or change the data source. | The data source is set to **Nanoflow**, but no nanoflow is specified. | Do one of the following: <ul><li>Open the list view's properties > **Data source** and select a nanoflow in the **Nanoflow** field</li><li>Change the type of the data source</li></ul> |
| CE0595     | Attribute {AttributeName} is not an attribute of entity {EntityName}. | You have changed the target entity of a list view without updating its contents. The list view is filled with attributes of another entity. | Open the widget's properties > **Data source** and select another attribute for **Attribute (path)**. |

## 3 Data View Consistency Errors 

If you do not configure a [data source](/refguide/data-sources/) for a [data view](/refguide/data-view/) properly, you will get consistency errors.

For example, you have selected **Listen to widget** as the data source, but you have not selected the specific **List widget** you are listening to.

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/data-view-no-list-widget.png" alt="Data View With no List Widget Configured" >}}

The table below describes the most common errors you can come across when configuring a data view,  causes of these errors, and ways to fix them. 

| Error Code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0488     | No entity configured for the data source of this data view. Select an entity or change the data source. | **Context** is selected as a data source for a data view, but no entity is specified. | Do one of the following: <ul><li>Open the data view's properties > **Data Source** and select an entity in the **Entity** field</li><li>Change the type of the data source</li></ul> |
|            | No microflow configured for the data source of this data view. Select a microflow or change the data source | A microflow is selected as a data source, but no microflow is specified. | Do one of the following: <ul><li>Open the data view's properties > **Data Source** and select a microflow in the **Microflow** field</li><li>Change the type of the data source</li></ul> |
|            | No nanoflow configured for the data source of this data view. Select a nanoflow or change the data source | A nanoflow is selected as a data source, but no nanoflow is specified. | Do one of the following: <ul><li>Open the data view's properties > **Data Source** and select a nanoflow in the **Nanoflow** field</li><li>Change the type of the data source</li></ul> |
| CE0536     | No list widget configured for the data source of this data view. Select a widget or change the data source. | A **Listen to widget** is configured as a data source for a data view, but the list view widget specified does not exist anymore on the same page. | Do one of the following: <ul><li>Create a list view on the same page, configure it, and select it as the list widget for the data view</li><li>Change the type of the data source</li></ul> |
| CE8115     | The selected entity X should match the entity Y of the page parameter {Name of the page parameter}. | You have changed the data type of a page parameter which was selected as the entity of the **Context** data source for a data view. | Do one of the following: <ul><li>Select the entity of the **Context** data source again</li><li>Change the data type of the page parameter back to match the entity of the data view</li></ul> |
| CE8116     | The selected entity x should match the entity y of the snippet parameter {Name of the snippet parameter}. | You have changed the data type of a snippet parameter which was selected as the entity of the **Context** data source for a data view. | Do one of the following: <ul><li>Select the entity of the **Context** data source again</li><li>Change the data type of the snippet parameter back to match the entity of the data view</li></ul> |

## 4 Context Not Available Consistency Errors

The errors that you can get when a page or snippet is expecting a context that is unavailable are described in the table below. 

| Error Code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE1568     | The selected page {Name of the page} expects an object of type {type of object}, which is not available here. | The page has a page parameter that expects an object of a particular type to be passed to it. This error occurs when the page is called from another page, which does not have this object available. For a more detailed example, see the [Error Fix Example for CE1568](#error-example-1). | Make sure that the object is passed to the page that has a configured data view on it. For more information, see the [Error Fix Example for CE1568](#error-example-1). |
| CE7410    | The selected page {Name of the page} should accept a parameter of type {type of object}. | You have a widget (for example, the create button of a data grid) that opens a page which must use the available object. However, the selected page does not have any parameters. | Do one of the following: <ul><li>Select a page which has a page parameter of the correct type</li><li>Change the parameters of the page</li></ul> |
| CE7411     | The selected page {Name of the page} should accept a parameter of type X, but expects a parameter of type Y instead. | You have a widget (for example, the create button of a data grid) that opens a page which must use the available object. However, the parameter of the selected page expects an object of a different type. | Do one of the following: <ul><li>Select a page which has a page parameter of the correct type</li><li>Change the type of the available object (if possible)</li><li>Change the parameters of the page</li></ul> |
| CE7412     | The selected page {Name of the page} should accept a parameter of type X, but expects parameters of type A, B, and C instead. | You have a widget (for example, the create button of a data grid) that opens a page which must use the available object. However, none of the parameters of the selected page expect an object of that type. | Do one of the following: <ul><li>Select a page which has a page parameter of the correct type</li><li>Change the type of the available object (if possible)</li><li>Change the parameters of the page</li></ul> |
| CE1154     | The selected snippet {Name of the snippet} has parameters. Move this snippet call into a data container like a data view, list view, or template grid. | The snippet has a snippet parameter and the snippet call is not placed inside a data container. | Make sure that the snippet call is placed in a data container which passes the correct type of object to the snippet call. |
| CE1570     | The selected snippet {Name of the snippet} expects an object of type {type of object}, which is not available here. | The snippet has a snippet parameter that expects an object of a particular type to be passed to it. This error occurs when the snippet is called from another page, layout, or snippet which does not have this object available. | Make sure that the object is passed correctly in the snippet settings of the snippet call. |

### 4.1 Error Fix Example for CE1568 {#error-example-1}

When a page expects a context that is not passed to it from a calling page or a microflow, you will get consistency errors. 

For example, the **Customers** page contains a list view with a list of all customer names (**Customer** is set as **Entity** in the **Data Source** properties), and a **Details** button outside of the list view (placed in a [container](/refguide/container/) only). The **Details** button opens a **Customer Details** page when a user clicks it (the **On Click Action** for the button is set to **Page**). 

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/customers-page.png" alt="Button Properties on the Customers Page" >}}

However, the **Customer Details** page has a data view that expects an object *Customer* to be passed to it. In other words, this page needs to get data first to be able to display it. 

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/data-view-customer.png" alt="Data View Expects the Customer Object" >}}

As this object is not passed to it from the **Customers** page, you get a consistency error.

As the **Details** button to the **Customers** page is outside a data container, it does not know which object to pass. The way of fixing this error depends on the following:

* You want to pass a specific *Customer* object from the Customer list to the **Customer Details** page, in other words, the details of a particular customer will be displayed on the **Customer Details** page (for more information, see the [Passing a Specific Object to the Page](#passing-specific-object) section)
* You want to create a new object of the *Customer* type and pass it to the **Customer Details** page, this means that a new customer will be created (for more information, see the [Creating a New Object and Passing it to the Page](#creating-new-object) section)

#### 4.1.1 Passing a Specific Object to the Page {#passing-specific-object}

If you want the **Customer Details** page to open the details of a specific customer, this means you want to pass a specific object to the page. As we already have a list view with the customers list on the **Customer** page, we can fix this error the following way:

1. Open the **Customers** page.
2. Drag the **Details** button inside the list view.

    {{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/details-button-inside-the-list-view.png" alt="The Details Button Example" >}}

Now the button gets the object of type *Customer* from the list view on the **Customers** page, and it will be passed to the **Customer Details** page. As a result, the details of a particular customer is displayed on the **Customer Details** page. 

#### 4.1.2 Creating a New Object and Passing it to the Page {#creating-new-object}

If you want to create a new customer and fill in the customer's details on the **Customers Details** page, you can do the following:

1. Open the **Customers** page.
2. Open properties for the **Details** button, and set **Create Object** as an **On Click Action**.
3. Set **Customer** as **Entity**.
4. Set **Customer Details** as **Page**.

    {{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/button-create-object.png" alt="On Click Event Example" >}}

5. Change the button's caption from **Details** to **Add**, as this button will now create a new customer instead of showing the details of an existing customer.

Now when a user clicks this button, the **Customer Details** page will open, and the new *Customer* object will be created. 

## 5 Data Consistency Errors

When a widget that expects as object from its data source does not get it or gets an object from a different entity type, it causes errors in data consistency. 

Some of the most common errors of this type are described in the table below:

| Error Code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0552     | Microflow {name of the microflow} does not return an object. | The data source of a widget (for example, a data view) is set to **Microflow**, but the microflow does not return any object. | Open the microflow and configure a return value of the end event for it. |
| CE0551     | Microflow {name of the microflow} does not return a list.    | The data source of a list view is set to **Microflow**, but the microflow does not return a list. | Open the microflow and configure its end event to return a list. |
| CE1573     | Parameter {Name of the parameter} of the selected microflow/nanoflow does not match available arguments. No arguments available to {Name of the widget}. | You selected a microflow or a nanoflow as an on-click event of a widget (for example, of a button) and the microflow/nanoflow contains a parameter, but no argument (for example, an object) is available for the widget to pass to the microflow. | Place the widget in a data container and make sure that the data source of the data container matches the entity selected in **Data type** property of the microflow/nanoflow parameter. For a detailed example and a fix for it, see the [Error Fix Example for CE1573](#error-fix-example-3) section. |
| CE1574     | Parameter {Name of the parameter} of the selected microflow/nanoflow does not match available arguments. Arguments available to {Name of the widget} are {list of available arguments}. | You selected a microflow or nanoflow as the data source of a widget, but the argument (or arguments) available for this widget does not match the parameter (or parameters) of the microflow. | Make sure that an argument (for example, an object) available for the widget matches the entity selected in the **Data type** property of the microflow/nanoflow parameter. For a detailed example and a fix for it, see the [Error Fix Example for CE1574](#error-fix-example-4) section. |

### 5.1 Error Fix Example for CE1573 {#error-fix-example-3}

When you set a microflow or a nanoflow as an on-click event for a widget, and this microflow expects an argument (for example, an object) that is not available, this will result in an error. 

For example, on a page named *Customers* you have a button that calls a microflow (that is an [On click event](/refguide/on-click-event/) of the button is set to *Microflow*).

However, the microflow contains a parameter *Customer*:

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/microflow-parameter.png" >}}

The microflow parameter expects an argument *Customer*, and since this argument is not available on the page where the button is located, it results in an error. 

To fix it, do the following:

1. Open the *Customers* page and drag a data container onto it. For example, you can drag and drop a list view.
2. Set the data source type of the list view to *Database* and set **Entity (path)** to *Customer*.

    {{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/data-source-list-view.png" >}}

3. Place the button inside the list view.

Now the *Customer* object is available on the page and it matches the microflow parameter *Customer*. 

### 5.2 Error Fix Example for CE1574 {#error-fix-example-4}

When you set a microflow or nanoflow as an on-click event for a widget, and this microflow/nanoflow expects a certain argument, but a different argument is available to the widget, this will result in an error. 

For example, on a page named *Customers* you have a button that calls a microflow (that is an [On click event](/refguide/on-click-event/) of the button is set to *Microflow*).

The microflow contains a parameter *Customer*:

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/microflow-parameter.png" >}}

On the *Customers* page you also have a data container, for example, a data view, that has an object *Photo* available. That means that the data source type of the data view is set to *Context* and **Entity (path)** is set to *Photo*:

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/data-view-data-source.png" >}}

As the microflow has the parameter *Customer*, and the data view has the object *Photo*, they are conflicting and resulting into an error.

The best way to fix this error is to either change the microflow to accept *Photo* or put the button in a data container for a different entity.

## 6 Input Widget Consistency Errors

The most common errors for input elements, their causes, and ways to fix them are described in the table below. For more information on input elements, see [Input Elements](/refguide/input-widgets/). 

| Error Code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0544     | This widget can only function inside a data container. Move it into a data view, list view or template grid. | You have added an input widget to a page, but it is not inside a data container. Input elements need to refer to an attribute of a specific entity type. And entities are only available via data containers. For more information about input elements, see [Input Elements](/refguide/input-widgets/). | Place this widget into a data container: a data view, list view, or template grid. |
| CE0545     | Select an attribute for this {widget name}.                  | You have added an input widget, and it is inside a data container, but an attribute is not selected for it. | Right-click the widget, click **Select Attribute** in the drop-down list, and set an attribute; or open widget's properties > the **Data source** section and set an attribute in the **Attribute (path)** field. |
|            | Association {Name} must be a reference (not a reference set) | You have added a reference selector, and then you changed the association from reference type to reference set (from one-to-many or one-to-one to many-to-many). | Open your domain model, find the association you have selected for the reference selector, and change it to a one-to-many association. Note that changing the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the reference selector.<br />For more information on how to fix this error for the reference selector, see the [Incorrect Multiplicity for a Reference Selector](#incorrect-multiplicity-reference) section |
|            | Association {Name} must be a reference set (not a reference) | You have added an input reference set selector, and then you changed the association from reference set type to reference (from many-to-many to one-to-many or one-to-one). | Open your domain model, find the association you have selected for the input reference set selector, and change it to a many-to-many association. Note that changing the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the reference set selector. <br />For more information on how to fix the consistency error for the reference set selector and input reference set selector, see the [Incorrect Multiplicity for a Reference Set Selector and an Input Reference Set Selector](#incorrect-multiplicity-reference-set) section. |
|            | The reference set selector expects an association of type reference set that starts in the data view entity. | You have added a reference set selector, and then you changed the association from reference set type to reference (from many-to-many to one-to-many or one-to-one). | Open your domain model, find the association you have selected for the reference set selector, and change it to a many-to-many association. Note that changing the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the input reference set selector. <br />For more information on how to fix the consistency error for the reference set selector and input reference set selector, see the [Incorrect Multiplicity for a Reference Set Selector and an Input Reference Set Selector](#incorrect-multiplicity-reference-set) section. |

### 6.1 Incorrect Multiplicity for a Reference Selector {#incorrect-multiplicity-reference}

A reference selector is a widget that is used to display and edit one-to-many or one-to-one associations. For more information on the widget, see [Reference Selector](/refguide/reference-selector/).  

For example, you have several employees who are associated with one city where they work. This is a one-to-many association: multiple *Employees* objects are associated with one *City* object.  Associations that refer to a single object in this manner are *references*, as opposed to *reference sets*, in which multiple objects can refer to multiple other objects. In a reference, the "single object" side of the association is always the association's owner. For more information on associations and their types, see [Associations](/refguide/associations/).

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/many-to-one-association.png" alt="One-to-many Association" >}}

If you have the wrong type of association, you will get a consistency error: *Association {Name} must be a reference (not a reference set)*.

To fix this error, do the following:

1. Open your domain model and double-click the association that you are using for the reference selector.
2. In **Properties of Association** dialog box, change **Multiplicity** to one-to-many (in our example, multiple 'Employee' objects are associated with one 'City' objects).

    {{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/one-to-many-multiplicity.png" alt="Multiplicity for One-to-many Association" >}}

3. Click **OK** to save changes.

You have changed the association multiplicity and fixed the error. 

{{% alert color="info" %}}
Сhanging the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the reference selector, for example, a reference set selector or input reference set selector. 
{{% /alert %}}

### 6.2 Incorrect Multiplicity for a Reference Set Selector and an Input Reference Set Selector {#incorrect-multiplicity-reference-set}

Reference set selector and input set selector are widgets that are used to display and edit many-to-many associations. For more information on these widgets, see [Reference Set Selector](/refguide/reference-set-selector/) and [Input Reference Set Selector](/refguide/input-reference-set-selector/). 

For example, you have several employees who can visit customers in different cities during the week. Thus, many employees are associated with many cities, this is a many-to-many association between an *Employee* entity and a *City* entity (multiple employees are associated with multiple cities). Associations that refer to multiple objects in this manner are *reference set*. For more information on associations and their types, see [Associations](/refguide/associations/). 

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/many-to-many-association.png" alt="Many-to-many Association" >}}

If you have a wrong type of association, you will get the following errors:

* *Association {Name} must be a reference set (not a reference)* – for an input reference set selector
* *The reference set selector expects an association of type reference set that starts in the data view entity* – for a reference set selector

To fix the error, do the following:

1. Open your domain model and double-click the association that you are using for the reference set selector or the input reference set selector and do the following: <br/>
2. In **Properties of Association** dialog box, change **Multiplicity** to many-to-many (in our example, multiple 'Employee' objects are associated with multiple 'City' objects).

    {{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/changing-multiplicity.png" alt="Multiplicity for Many-to-many Association" >}}

3. Click **OK** to save changes.

You have changed the association multiplicity and fixed the error. 

{{% alert color="info" %}}
Сhanging the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the reference set selector or input reference set selector, for example, a reference selector. 
{{% /alert %}}

## 7 Images, Videos and Files Consistency Errors

Images, videos and files should be placed in a data container, otherwise you will get consistency errors. Another way to fix consistency errors is to place these widgets in a snippet and configure the snippet. For more information on images, videos and files , see [Images, Videos, and Files](/refguide/image-and-file-widgets/). 

| Error code | Message in the Error Pane                                    | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|            | A [file manager](/refguide/file-manager/) must be placed in a data view or  snippet that is connected to the entity ‘System.FileDocument’ or a specialization. | You have added a file manager to a page, but it is not inside a data view or a snippet that is configured properly. | Place this widget into a data container. If you want to place it into a snippet, mind that you need to configure it properly: either set System.FileDocument (or its specialization) as an entity for this snippet or place the snippet in a data container. |
|            | An [image uploader](/refguide/image-uploader/) must be placed in a data view or snippet that is connected to the entity ‘System.Image’ or a specialization. | You have added an image uploader to a page, but it is not inside a data view or a snippet that is configured properly. | Place this widget into a data container. If you want to place it into a snippet, mind that you need to configure it properly: set System.Image (or its specialization) as an entity for this snippet or place the snippet in a data container. |
|            | Move this widget into a data container, for example a data view or list view. | You have added a [dynamic image](/refguide/image-viewer/) to your page, but it is not inside a data view or a list view. | Place this widget inside a data view or a list view.         |
| CE0489     | Select an entity for the data source of this [dynamic image](/refguide/image-viewer/). | You have added a dynamic image to a page, it is placed inside a data view or a list view, but an entity for the dynamic image is not specified. | Open dynamic image properties > the **Data source** section and select an entity in the **Entity (path)** field. |

## 8 Image Widget Consistency Errors

A consistency error for an image widget is described in the table below:

| Error code | Message in the Error Pane | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
|            | No image selected         | You have added an image widget to a page, but do not select an image itself. | Open the image properties >**General** > **Image** and select an image. For more information on an image widget, see [Image](/refguide/image/). |

## 9 On Click Event Consistency Errors 

You can specify an [On click event](/refguide/on-click-event/) for different widgets, for example, for buttons or images. 

The most common consistency errors are connected with not configuring the on click event. 

To fix the consistency errors, finish configuring the on click event (for example, for an on click event **Show a page**, select a particular page that should open), or change the on click event. 

## 10 Icon Collection Consistency Errors

Icon collections have configurable class names, icon prefixes, and icon names. These properties are used to generate the CSS code for your pages. You can come across the following consistency errors that prevent you from generating invalid CSS:

| Error code | Message in the Error Pane | Cause of the Error | Way to Fix |
| ---------- | ------------------------- | ------------------ | ---------- |
|   CE1616   | You cannot duplicate the icon collection class name {icon collection class name}. | There is more than one icon collection configured with the same class name. | Change the class name for one of the icon collections. |

## 11 Read More

* [Pages](/refguide/pages/) 
