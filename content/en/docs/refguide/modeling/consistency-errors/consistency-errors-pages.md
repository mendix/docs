---
title: "Page Editor Consistency Errors"
url: /refguide/consistency-errors-pages/
weight: 10
description: "Describes consistency errors in Mendix Studio Pro and the way to fix them."
#To update screenshots in this document, use the Consistency Errors app.
---

## Introduction 

In this document, we explain how to solve the most common or complicated consistency errors that can occur when configuring pages in Studio Pro. An example of a consistency error on a page is when you do not specify the entity property of a data view on a page. 

{{% alert color="info" %}}
This document does not describe *all* the errors, as there are a lot of errors that can occur, some of which are simple and do not need extra explanation, others are rare and/or heavily dependent on a use-case. 
{{% /alert %}}

Some errors have error codes and if these errors are described in documentation, Studio Pro has a clickable link to the corresponding document. Others do not have an error code, in this case, you can manually search whether a particular error is described in documentation (you can search by a message you see in the **Errors** pane).

## List View Consistency Errors 

If you do not configure a [data source](/refguide/data-sources/) for a [list view](/refguide/list-view/) properly, you get consistency errors. 

The scheme below shows that the data source of the list view has been set to **Database**, but the entity that needs to be retrieved from the database has not been specified. This results in a consistency error. 

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/list-view-error.png" alt="Data Source Consistency Error Scheme" class="no-border" >}}

The most common errors which can occur when configuring a list view, the causes of these errors, and ways to fix them are described in the following sub-sections.

### Error Code: CE0488

CE0488 error message in a list view : *No entity configured for the data source of this list view. Select an entity or change the data source.*

You get CE0488 in a list view if the **Database/XPath/Association** option is selected as a data source for a list view, but no entity is specified. 

To fix CE0488, do one of the following:

* Open the list view's properties > **Data source** and select an entity in the **Entity (path)** field.
* Change the type of the data source.

### Error Code: CE2633

You get CE2633 in a list view in the following cases.

#### No Microflow Configured for the Data Source of a List View

Error message: *No microflow configured for the data source of this list view. Select a microflow or change the data source.*

You get this error if the data source is set to **Microflow**, but no microflow is specified.

To fix this error, do one of the following:

* Open the list view's properties > **Data source** and select a microflow in the **Microflow** field.
* Change the type of the data source.

#### No Nanoflow Configured for the Data Source of a List View

Error message: *No nanoflow configured for the data source of this list view. Select a nanoflow or change the data source.*

You get this error if the data source is set to **Nanoflow**, but no nanoflow is specified.

To fix this error, do one of the following:

* Open the list view's properties > **Data source** and select a nanoflow in the **Nanoflow** field.
* Change the type of the data source.

### Error Code: CE0595

CE0595 error message: *Attribute {AttributeName} is not an attribute of entity {EntityName}.*

You get CE0595 if you have changed the target entity of a list view without updating its contents. The list view is filled with attributes of another entity.

To fix CE0595, open the widget's properties > **Data source** and select another attribute for **Attribute (path)**.

## Data View Consistency Errors 

If you do not configure a [data source](/refguide/data-sources/) for a [data view](/refguide/data-view/) properly, you get consistency errors.

For example, you have selected **Listen to widget** as the data source, but you have not selected the specific **List widget** you are listening to.

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/data-view-no-list-widget.png" alt="Data View With no List Widget Configured" class="no-border" >}}

The most common errors which can occur when configuring a data view, the causes of these errors, and ways to fix them are described in the following sub-sections.

### Error Code: CE0488

CE0488 error message in a data view: *No entity configured for the data source of this data view. Select an entity or change the data source.*

You get CE0488 in a data view if **Context** is selected as a data source for a data view, but no entity is specified.

To fix CE0488, do one of the following:

* Open the data view's properties > **Data Source** and select an entity in the **Entity** field.
* Change the type of the data source.

### Error Code: CE2633 

You get CE2633 in a data view in the following cases.

#### No Microflow Configured for the Data Source of a Data View

Error message: *No microflow configured for the data source of this data view. Select a microflow or change the data source.*

You get this error if the data source is set to **Microflow**, but no microflow is specified.

To fix this error, do one of the following:

* Open the data view's properties > **Data source** and select a microflow in the **Microflow** field.
* Change the type of the data source.

#### No Nanoflow Configured for the Data Source of a Data View

Error message: *No nanoflow configured for the data source of this data view. Select a nanoflow or change the data source.*

You get this error if the data source is set to **Nanoflow**, but no nanoflow is specified.

To fix this error, do one of the following:

* Open the data view's properties > **Data source** and select a nanoflow in the **Nanoflow** field.
* Change the type of the data source.

### Error Code: CE0536

CE0536 error message: *No list widget configured for the data source of this data view. Select a widget or change the data source.*

You get CE0536 if a **Listen to widget** is configured as a data source for a data view, but the list view widget specified does not exist anymore on the same page.

To fix CE0536, do one of the following:

* Create a list view on the same page, configure it, and select it as the list widget for the data view.
* Change the type of the data source.

### Error Code: CE8115

CE8115 error message: *The selected entity X should match the entity Y of the page parameter {Name of the page parameter}.*

You get CE8115 if you have changed the data type of a page parameter which was selected as the entity of the **Context** data source for a data view.

To fix CE8115, do one of the following:

* Select the entity of the **Context** data source again.
* Change the data type of the page parameter back to match the entity of the data view.

### Error Code: CE8116

CE8116 error message: *The selected entity x should match the entity y of the snippet parameter {Name of the snippet parameter}.*

You get CE8116 if you have changed the data type of a snippet parameter which was selected as the entity of the **Context** data source for a data view.

To fix CE8116, do one of the following:

* Select the entity of the **Context** data source again.
* Change the data type of the snippet parameter back to match the entity of the data view.

## Context Not Available Consistency Errors

The errors that you can get when a page or snippet is expecting a context that is unavailable are described in the following sub-sections. 

### Error Code: CE1568

CE1568 error message: *The selected page {Name of the page} expects an object of type {type of object}, which is not available here.*

You get CE1568 if the page has a page parameter that expects an object of a particular type to be passed to it. This error occurs when the page is called from another page, which does not have this object available. 

To fix CE1568, make sure that the object is passed to the page that has a configured data view on it. For a detailed example on how to fix CE1568, see the [Error Fix Example for CE1568](#error-example-1) below.

#### Error Fix Example for CE1568 {#error-example-1}

When a page expects a context that is not passed to it from a calling page or a microflow, you get consistency errors. 

For example, the **Customers** page contains a list view with a list of all customer names (**Customer** is set as **Entity** in the **Data Source** properties), and a **Details** button outside of the list view (placed in a [container](/refguide/container/) only). The **Details** button opens a **Customer Details** page when a user clicks it (the **On Click Action** for the button is set to **Page**). 

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/customers-page.png" alt="Button Properties on the Customers Page" class="no-border" >}}

However, the **Customer Details** page has a data view that expects an object *Customer* to be passed to it. In other words, this page needs to get data first to be able to display it. 

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/data-view-customer.png" alt="Data View Expects the Customer Object" class="no-border" >}}

As this object is not passed to it from the **Customers** page, you get a consistency error.

As the **Details** button to the **Customers** page is outside a data container, it does not know which object to pass. The way of fixing this error depends on the following:

* You want to pass a specific *Customer* object from the Customer list to the **Customer Details** page. In other words, the details of a particular customer are displayed on the **Customer Details** page. For more information, see the [Passing a Specific Object to the Page](#passing-specific-object) section.
* You want to create a new object of the *Customer* type and pass it to the **Customer Details** page. This means that a new customer is created. For more information, see the [Creating a New Object and Passing it to the Page](#creating-new-object) section.

##### Passing a Specific Object to the Page {#passing-specific-object}

If you want the **Customer Details** page to open the details of a specific customer, this means you want to pass a specific object to the page. As we already have a list view with the customers list on the **Customer** page, we can fix this error the following way:

1. Open the **Customers** page.
2. Drag the **Details** button inside the list view.

    {{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/details-button-inside-the-list-view.png" alt="The Details Button Example" class="no-border" >}}

Now the button gets the object of type *Customer* from the list view on the **Customers** page, and it is passed to the **Customer Details** page. As a result, the details of a particular customer is displayed on the **Customer Details** page. 

##### Creating a New Object and Passing it to the Page {#creating-new-object}

If you want to create a new customer and fill in the customer's details on the **Customers Details** page, you can do the following:

1. Open the **Customers** page.
2. Open properties for the **Details** button, and set **Create Object** as an **On Click Action**.
3. Set **Customer** as **Entity**.
4. Set **Customer Details** as **Page**.

    {{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/button-create-object.png" alt="On Click Event Example" class="no-border" >}}

5. Change the button's caption from **Details** to **Add**, as this button now creates a new customer instead of showing the details of an existing customer.

Now when a user clicks this button, the **Customer Details** page opens, and the new *Customer* object is be created. 

### Error Code: CE7410

CE7410 error message: *The selected page {Name of the page} should accept a parameter of type {type of object}.*

You get CE7410 if you have a widget (for example, the create button of a data grid) that opens a page which must use the available object. However, the selected page does not have any parameters. 

To fix CE7410, do one of the following:

* Select a page which has a page parameter of the correct type.
* Change the parameters of the page.

### Error Code: CE7411

CE7411 error message: *The selected page {Name of the page} should accept a parameter of type X, but expects a parameter of type Y instead.*

You get CE7411 if you have a widget (for example, the create button of a data grid) that opens a page which must use the available object. However, the parameter of the selected page expects an object of a different type. 

To fix CE7411, do one of the following:

* Select a page which has a page parameter of the correct type.
* Change the type of the available object (if possible).
* Change the parameters of the page.

### Error Code: CE7412

CE7412 error message: *The selected page {Name of the page} should accept a parameter of type X, but expects parameters of type A, B, and C instead.*

You get CE7412 if you have a widget (for example, the create button of a data grid) that opens a page which must use the available object. However, none of the parameters of the selected page expect an object of that type.

To fix CE7412, do one of the following:

* Select a page which has a page parameter of the correct type.
* Change the type of the available object (if possible).
* Change the parameters of the page.

### Error Code: CE1154

CE1154 error message: *The selected snippet {Name of the snippet} has parameters. Move this snippet call into a data container like a data view, list view, or template grid.*

You get CE1154 if the snippet has a snippet parameter and the snippet call is not placed inside a data container.

To fix CE1154, make sure that the snippet call is placed in a data container which passes the correct type of object to the snippet call.

### Error Code: CE1570

CE1570 error message: *The selected snippet {Name of the snippet} expects an object of type {type of object}, which is not available here.*

You get CE1570 if the snippet has a snippet parameter that expects an object of a particular type to be passed to it. This error occurs when the snippet is called from another page, layout, or snippet which does not have this object available.

To fix CE1570, make sure that the object is passed correctly in the snippet settings of the snippet call.

## Data Consistency Errors

When a widget that expects as object from its data source does not get it or gets an object from a different entity type, it causes errors in data consistency. Some of the most common errors of this type are described in the following sub-sections.

### Error Code: CE0552

CE0552 error message: *Microflow {name of the microflow} does not return an object.*

You get CE0552 if the data source of a widget (for example, a data view) is set to **Microflow**, but the microflow does not return any object.

To fix CE0552, open the microflow and configure a return value of the end event for it.

### Error Code: CE0551

CE0551 error message: *Microflow {name of the microflow} does not return a list.*

You get CE0551 if the data source of a list view is set to **Microflow**, but the microflow does not return a list.

To fix CE0551, open the microflow and configure its end event to return a list.

### Error Code: CE1573

CE1573 error message: *Parameter {Name of the parameter} of the selected microflow/nanoflow does not match available arguments. No arguments available to {Name of the widget}.*

You get CE1573 if you selected a microflow or a nanoflow as an on-click event of a widget (for example, of a button) and the microflow/nanoflow contains a parameter, but no argument (for example, an object) is available for the widget to pass to the microflow.

To fix CE1573, place the widget in a data container and make sure that the data source of the data container matches the entity selected in **Data type** property of the microflow/nanoflow parameter. For a detailed example and a fix for it, see the [Error Fix Example for CE1573](#error-fix-example-3) section below.

#### Error Fix Example for CE1573 {#error-fix-example-3}

When you set a microflow or a nanoflow as an on-click event for a widget, and this microflow expects an argument (for example, an object) that is not available, this results in an error. 

For example, on a page named *Customers* you have a button that calls a microflow (that is an [On click event](/refguide/on-click-event/) of the button is set to *Microflow*).

However, the microflow contains a parameter *Customer*:

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/microflow-parameter.png" class="no-border" >}}

The microflow parameter expects an argument *Customer*, and since this argument is not available on the page where the button is located, it results in an error. 

To fix it, do the following:

1. Open the *Customers* page and drag a data container onto it. For example, you can drag and drop a list view.
2. Set the data source type of the list view to *Database* and set **Entity (path)** to *Customer*.

    {{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/data-source-list-view.png" class="no-border" >}}

3. Place the button inside the list view.

Now the *Customer* object is available on the page and it matches the microflow parameter *Customer*. 

### Error Code: CE1574

CE1574 error message: *Parameter {Name of the parameter} of the selected microflow/nanoflow does not match available arguments. Arguments available to {Name of the widget} are {list of available arguments}.*

You get CE1574 if you selected a microflow or nanoflow as the data source of a widget, but the argument (or arguments) available for this widget does not match the parameter (or parameters) of the microflow.  a parameter, but no argument (for example, an object) is available for the widget to pass to the microflow.

To fix CE1574, make sure that an argument (for example, an object) available for the widget matches the entity selected in the **Data type** property of the microflow/nanoflow parameter. For a detailed example and a fix for it, see the [Error Fix Example for CE1574](#error-fix-example-4) section below.

#### Error Fix Example for CE1574 {#error-fix-example-4}

When you set a microflow or nanoflow as an on-click event for a widget, and this microflow/nanoflow expects a certain argument, but a different argument is available to the widget, this results in an error. 

For example, on a page named *Customers* you have a button that calls a microflow (that is an [On click event](/refguide/on-click-event/) of the button is set to *Microflow*).

The microflow contains a parameter *Customer*:

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/microflow-parameter.png" class="no-border" >}}

On the *Customers* page you also have a data container, for example, a data view, that has an object *Photo* available. That means that the data source type of the data view is set to *Context* and **Entity (path)** is set to *Photo*:

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/data-view-data-source.png" class="no-border" >}}

As the microflow has the parameter *Customer*, and the data view has the object *Photo*, they are conflicting and resulting into an error.

The best way to fix this error is to either change the microflow to accept *Photo* or put the button in a data container for a different entity.

## Input Widget Consistency Errors

The most common errors for input elements, their causes, and ways to fix them are described in the following sub-sections. For more information on input elements, see [Input Elements](/refguide/input-widgets/). 

### Error Code: CE0544

CE0544 error message: *This widget can only function inside a data container. Move it into a data view, list view or template grid.*

You get CE0544 if you have added an input widget to a page but it is not inside a data container. Input elements need to refer to an attribute of a specific entity type and entities are only available via data containers. 

To fix CE0544, place this widget into a data container: a data view, list view, or template grid.

### Error Code: CE0545

CE0545 error message: *Select an attribute for this {widget name}.*

You get CE0545 if you have added an input widget and it is inside a data container, but an attribute is not selected for it.

To fix CE0545, do one of the following:

* Right-click the widget, click **Select Attribute** in the drop-down list, and set an attribute. 
* Or open widget's properties > the **Data source** section, and set an attribute in the **Attribute (path)** field.

### Incorrect Multiplicity for a Reference Selector {#incorrect-multiplicity-reference}

Error message: *Association {Name} must be a reference (not a reference set).*

You get this error message if you have added a reference selector and then you changed the association from reference type to reference set (from one-to-many or one-to-one to many-to-many).

A reference selector is a widget that is used to display and edit one-to-many or one-to-one associations. For more information on the widget, see [Reference Selector](/refguide/reference-selector/).  

For example, you have several employees who are associated with one city where they work. This is a one-to-many association: multiple *Employees* objects are associated with one *City* object. Associations that refer to a single object in this manner are *references*, as opposed to *reference sets*, in which multiple objects can refer to multiple other objects. In a reference, the "single object" side of the association is always the association's owner. For more information on associations and their types, see [Associations](/refguide/associations/).

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/many-to-one-association.png" alt="One-to-many Association" class="no-border" >}}

To fix this error, do the following:

1. Open your domain model and double-click the association that you are using for the reference selector.
2. In **Properties of Association** dialog box, change **Multiplicity** to one-to-many (in our example, multiple 'Employee' objects are associated with one 'City' objects).

    {{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/one-to-many-multiplicity.png" alt="Multiplicity for One-to-many Association" class="no-border" >}}

3. Click **OK** to save changes.

You have changed the association multiplicity and fixed the error. 

{{% alert color="warning" %}}
Changing the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the reference selector, for example, a reference set selector or input reference set selector. 
{{% /alert %}}

### Incorrect Multiplicity for a Reference Set Selector and an Input Reference Set Selector {#incorrect-multiplicity-reference-set}

Error messages:

* *Association {Name} must be a reference set (not a reference)* – for an input reference set selector
* *The reference set selector expects an association of type reference set that starts in the data view entity* – for a reference set selector

You get the above error messages if you have added an input reference set selector and then you changed the association from reference set type to reference (from many-to-many to one-to-many or one-to-one).

Reference set selector and input set selector are widgets that are used to display and edit many-to-many associations. For more information on these widgets, see [Reference Set Selector](/refguide/reference-set-selector/) and [Input Reference Set Selector](/refguide/input-reference-set-selector/). 

For example, you have several employees who can visit customers in different cities during the week. Thus, many employees are associated with many cities, this is a many-to-many association between an *Employee* entity and a *City* entity (multiple employees are associated with multiple cities). Associations that refer to multiple objects in this manner are *reference set*. For more information on associations and their types, see [Associations](/refguide/associations/). 

{{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/many-to-many-association.png" alt="Many-to-many Association" class="no-border" >}}

To fix the errors, do the following:

1. Open your domain model and double-click the association that you are using for the reference set selector or the input reference set selector and do the following: <br/>
2. In **Properties of Association** dialog box, change **Multiplicity** to many-to-many (in our example, multiple 'Employee' objects are associated with multiple 'City' objects).

    {{< figure src="/attachments/refguide/modeling/consistency-errors/consistency-errors-pages/changing-multiplicity.png" alt="Multiplicity for Many-to-many Association" class="no-border" >}}

3. Click **OK** to save changes.

You have changed the association multiplicity and fixed the errors. 

{{% alert color="warning" %}}
Changing the domain model can result in other errors. To avoid changing the domain model, you might want to use another widget instead of the reference set selector or input reference set selector, for example, a reference selector. 
{{% /alert %}}

## Images, Videos and Files Consistency Errors

Images, videos and files should be placed in a data container, otherwise you get consistency errors. Another way to fix consistency errors is to place these widgets in a snippet and configure the snippet. For more information on images, videos, and files, see [Images, Videos, and Files](/refguide/image-and-file-widgets/). 

The images, videos and files consistency errors are described in the following sub-sections.

### Error Code: CE6810

CE6810 error message: *A [file manager](/refguide/file-manager/) must be placed in a data view or snippet that is connected to the entity ‘System.FileDocument’ or a specialization.*

You get CE6810 if you have added a file manager to a page, but it is not inside a data view or a snippet that is configured properly.

To fix CE6810, place this widget into a data container. If you want to place it into a snippet, mind that you need to configure it properly: either set System.FileDocument (or its specialization) as an entity for this snippet or place the snippet in a data container.

### Error Code: CE6811

CE6811 error message: *An [image uploader](/refguide/image-uploader/) must be placed in a data view or snippet that is connected to the entity ‘System.Image’ or a specialization.*

You get CE6811 if you have added an image uploader to a page, but it is not inside a data view or a snippet that is configured properly.

To fix CE6811, place this widget into a data container. If you want to place it into a snippet, mind that you need to configure it properly: set System.Image (or its specialization) as an entity for this snippet or place the snippet in a data container.

### Error Code: CE7950

CE7950 error message: *Move this widget into a data container, for example a data view or list view.*

You get CE7950 if you have added a [dynamic image](/refguide/image-viewer/) to your page, but it is not inside a data view or a list view.

To fix CE7950, place this widget inside a data view or a list view.

### Error Code: CE0489

CE0489 error message: *Select an entity for the data source of this [dynamic image](/refguide/image-viewer/).*

You get CE0489 if you have added a dynamic image to a page, it is placed inside a data view or a list view, but an entity for the dynamic image is not specified.

To fix CE0489, open dynamic image properties > the **Data source** section and select an entity in the **Entity (path)** field.

## Image Widget Consistency Errors

You can get the following consistency error for an image widget:

Error message: *No image selected.*

You get this error message if you have added an image widget to a page, but do not select an image itself. 

To fix this error, open the image properties > **General** > **Image** and select an image. For more information on an image widget, see [Image](/refguide/image/).

## On Click Event Consistency Errors 

You can specify an [On click event](/refguide/on-click-event/) for different widgets, for example, for buttons or images. 

The most common on click event consistency errors are connected with not configuring the on click event. 

To fix the on-click event consistency errors, finish configuring the on click event (for example, for an on click event **Show a page**, select a particular page that should open), or change the on click event. 

## Icon Collection Consistency Errors

Icon collections have configurable class names, icon prefixes, and icon names. These properties are used to generate the CSS code for your pages. You can come across the following consistency errors that prevent you from generating invalid CSS.

### Error code: CE1616

CE1616 error message: *You cannot duplicate the icon collection class name {icon collection class name}.*

You get CE1616 if there is more than one icon collection configured with the same class name.

To fix CE1616, change the class name for one of the icon collections.

## Read More

* [Pages](/refguide/pages/) 
