---
title: "Page Consistency Errors"
url: /studio/consistency-errors-pages/
weight: 10
description: "Describes consistency errors in the page editor in Mendix Studio and the way to fix them."
tags: ["studio", "consistency errors", "checks", "errors", "page editor"]
#To update screenshots in this document, use the Consistency Errors app.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

In this document, we explain how to solve the most common consistency errors that can occur you  configure pages in Mendix Studio. For more information on pages, see [Pages](/studio/page-editor/).

An example of a consistency error is when you do not specify the entity property of a data view on a page. 

{{% alert color="info" %}}

This document does not describe *all* the errors, as there are a lot of errors that can occur, some of which are simple and do not need extra explanation, others are rare and/or heavily dependent on a use-case. 

{{% /alert %}}

Some errors have error codes and if these errors are described in documentation, Studio has a clickable link to the corresponding document. Others do not have an error code, in this case, you can manually search whether a particular error is described in documentation (you can search by a message you see in the **Checks** panel).

## 2 List View Consistency Errors 

If you do not configure a data source for a [list view](/studio/page-editor-data-view-list-view/#list-view-properties) properly, you will get a consistency error. 

The scheme below shows that the data source of the list view has been set to **Database**, but the entity that needs to be retrieved from the database has not been specified. This results in a consistency error.{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/list-view-error.png" alt="List View Errors Cause" >}}

The table below describes the most common errors you can come across when configuring a list view, the  causes of these errors, and ways to fix them. 

| Error Code | Message in the Checks Panel                                  | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0488     | No entity configured for the data source of this list view. Select an entity or change the data source. | The **Database** (or **XPath**/**Association**) option is selected as the data source for a list view on the page has been set, but the **Entity** property is not specified. | Do one of the following: <ul><li>Open the list view's properties > **Data source** and select an entity in the **Entity** field</li><li>Change the type of the data source</li></ul> |
|            | No microflow configured for the data source of this list view. Select a microflow or change the data source. | The data source is set to **Microflow**, but no microflow is specified. | Do one of the following: <ul><li>Open the list view's properties > **Data source** and select an entity in the **Microflow** field</li><li>Change the type of the data source</li></ul> |
|            | No nanoflow configured for the data source of this list view. Select a nanoflow or change the data source. | A nanoflow is selected as the data source, but no nanoflow is specified. | Do one of the following: <ul><li>Open Studio Pro and select a nanoflow for this list view</li><li>Change the type of the data source</li></ul> |

## 3 Data View Consistency Errors 

If you do not configure a data source for a [data view](/studio/page-editor-data-view-list-view/#data-view-properties) properly, you will get a consistency error. For example, you selected a list widget as the data source, but you have not selected the specific list you would like the data view to listen to.

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/data-view-error.png" alt="Data View Properties Not Configured"   width="350"  >}}

The table below describes the most common errors you can come across when configuring a data view,  causes of these errors, and ways to fix them. 

| Error Code | Message in the Checks Panel                                  | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0488     | No entity configured for the data source of this data view. Select an entity or change the data source. | **Context** is selected as a data source for a data view, but the **Entity** property is not specified. | Do one of the following: <ul><li>Open the data view's properties> **Data Source** and select an entity in the **Entity** field</li><li>Change the type of the data source</li></ul> |
|            | No microflow configured for the data source of this data view. Select a microflow or change the data source. | A data source is set to **Microflow**, but no specific microflow is selected. | Do one of the following: <ul><li>Open the data view's properties> **Data Source** and select an entity in the **Microflow** field</li><li>Change the type of the data source</li></ul> |
| CE0536     | No list widget configured for the data source of this data view. Select a widget or change the data source. | The **List widget** option is configured as a data source for a data view, but you have not specified the list you would like the data view to listen to. | Do one of the following: <ul><li>Create a list view on the same page, configure it, and select it as the list widget for the data view</li><li>Change the type of the data source</li></ul> |


## 4 Context Not Available Consistency Errors

The errors that you can get when a page is expecting a context that is unavailable are described in the table below. 

| Error Code | Message in the Checks Panel                                  | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE1568     | The selected page {Name of the page} expects an object of type {type of object}, which is not available here. | The page has a data view that expects an object of a particular type to be passed to it. This error occurs when the page is opened from another page, which does not have this object available. For a more detailed example, see the [Error Fix Example for CE1568](#error-example-1) section. | Make sure that the object is passed to the page which has a configured data view on it. For more information, see the  [Error Fix Example for CE1568](#error-example-1) section. |
| CE1569     | The selected page {Name of page} expects an object of type X, which is not compatible with the object of type Y that is available here. | You have a widget (for example, a button) that opens a page. The page has a data view that expects an object of particular type to be passed to it. However, the widget is placed inside a data container with another type of object. For a detailed example, see the [Error Fix Example for CE1569](#error-example-2) section. | Make sure that the button is placed in a data container which passes the correct type of object to the page. For more information, see the [Error Fix Example for CE1569](#error-example-2) section. |
| CE0529     | The selected {Name of the page} expects an object of type {type of object} and cannot be used as a home page. Change the page or use a microflow to provide the page with an object. | You have set a page that expects an object to be passed to it (for example, a page with a data view) as the home page. But by default the home page has no object that is passed to it, because it is the starting point for your user. For a more detailed example, see the [Error Fix When the Home Page Expects an Object](/studio/consistency-errors-navigation/#home-page-expects-an-object) section in *Navigation Consistency Errors*. | Set a different  page as the home page. Alternatively, you can use a microflow that will open the home page and pass a specific object to it. For more information, see the [Error Fix When the Home Page Expects an Object](/studio/consistency-errors-navigation/#home-page-expects-an-object) section in *Navigation Consistency Errors*. |
| CE0558     | All data views receiving object from the page parameter must have the same entity. | You have several data view on one page that have different entities as a data source. | Select one and the same entity for all data views, or change the data source for them. |
| CE0569     | The selected page {Name of the page} should contain a data view that accepts an object of type {type of object}. | You have a widget (for example, a button) that opens a specific page. You have enabled the **Create Object** option and set an entity for this action, so you are passing the object to the page. However, the page does not have a data view that accepts this object. | Add a data view to the page and set its context to the same entity as you selected for the on-click action. <br />Note that when you have the **Show Workflow Page** on-click action, the page should contain a data view with WorkflowInstance context. Currently, this can be set in Studio Pro. |

### 4.1 Error Fix Example for CE1568 {#error-example-1}

When a page expects a context that is not passed to it from another page or a microflow, you will get consistency errors. 

For example, the **Customers** page contains a list view with a list of all customer names (**Customer** is set as **Entity** in the **Data Source** properties), and a **Details** button outside of the list view (placed in a [container](/studio/page-editor-widgets-structure/#container-overview) only). The **Details** button opens a **Customer Details** page when a user clicks it (the **On Click Action** for the button is set to **Page** and the **Create Object** option is disabled). 

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/customers-page.png" alt="Button Properties on the Customers Page" >}}

However, the **Customer Details** page has a data view that expects an object *Customer* to be passed to it. In other words, this page needs to get data first to be able to display it. 

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-navigation/data-view-customer.png" alt="Data View Expects the Customer Object"   width="350"  >}}

As this object is not passed to it from the **Customers** page, you get a consistency error.

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/object-error.png" alt="Example of Error When Context is Unavailable" >}}

As the **Details** button to the **Customers** page is outside a data container (a data view or a list view) it does not know which object to pass. The way of fixing this error depends on the following:

* You want to pass a specific *Customer* object to the **Customer Details** page, in other words, the details of a particular customer will be displayed on the **Customer Details** page (for more information, see the [Passing a Specific Object to the Page](#passing-specific-object) section)
* You want to create a new object of the *Customer* type and pass it to the **Customer Details** page, this means that a new customer will be created (for more information, see the [Creating a New Object and Passing it to the Page](#creating-new-object) section)

#### 4.1.1 Passing a Specific Object to the Page {#passing-specific-object}

If you want the **Customer Details** page to open the details of a specific customer, this means you want to pass a specific object to the page. As we already have a list view with the customers list on the **Customers** page, we can fix this error the following way:

1. Open the **Customers** page.

2.  Drag the **Details** button inside the list view.

    {{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/list-view-content.png" alt="List View Example"   width="350"  >}}


Now the button gets the object of type *Customer* from the list view on the **Customers** page, and it will be passed to the **Customer Details** page. As a result, the details of a particular customer is displayed on the **Customer Details** page. 

#### 4.1.2 Creating a New Object and Passing it to the Page {#creating-new-object}

If you want to create a new customer and fill in the customer's details on the **Customers Details** page, you can do the following:

1. Open the **Customers** page.

2. Open properties for the **Details** button > the **Events** section and enable the **Create Object** option.

     {{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/create-object-option-enabled.png" alt="Create Object Option Enabled"   width="350"  >}}

3. Set **Customer** as **Entity**.

4. Change the button's caption from **Details** to **Add**, as this button will now create a new customer, and not show details of an existing customer.

Now when a user clicks this button, the **Customer Details** page will open, and the new *Customer* object will be created. 

### 4.2 Error Fix Example for CE1569 {#error-example-2}

If a widget opens a page and this widget is inside a data container of entity X, but the referred page expects entity Y, you will get a consistency error. 

For example, you have a **New** button on the **Engineers** page that opens the **Tasks** page. 

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/engineers-page.png" alt="A Button on Engineers Page"   width="350"  >}}

The button is placed inside a list view; the list view's data source is set to entity *Engineer* in **Properties** > **Data Source**.

The Tasks page has a data view on it, but the data view's data source is set to entity *SmartTask* in **Properties** > **Data Source**. 

This means that data view expects the object of type *SmartTask* passed to it, but the **Engineers** page is passing the object of type *Engineer*. As a result you get a consistency error.

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/tasks-page-list-view.png" alt="List View on the Tasks Page"   width="350"  >}}

To fix this error do one of the following:

* Place the button in a list view that will pass the correct type of data to the page (place the button inside the list view and set its data source to entity *SmartTask*)
* Select another page for the button that will not expect any object to be passed to it, or will expect the object of type *Engineer*
* Change the data source of the data view on the **Tasks** page to entity *Engineer* 

## 5 Data Consistency Errors {#data-consistency}

When a widget that expects an object as its data source does not get it or gets an object from a different entity type, it causes errors in data consistency. 

Some of the most common errors of this type are described in the table below:

| Error Code | Message in the Checks Panel                                  | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0552     | Microflow {Name of the microflow} does not return an object. | The data source of a widget (for example, a data view) is set to **Microflow**, but the microflow does not return any object. | Open the microflow and configure a return value for it. Do the following: <ol><li>Select the end event.</li><li>In its properties, set **Return Value** from **Nothing** to **Value**.</li><li>Set the **Data Type** and set the **Entity** option if needed (whether this option is displayed depends on the selected data type).</li><li> Configure the **Value**.</li></ol> |
| CE0551     | Microflow {Name of the microflow} does not return a list.    | The data source of a list view is set to **Microflow**, but the microflow does not return a list. | Open the microflow and configure it to return a list. Do the following: <ol><li>Select the end event.</li><li> In its properties, set **Return Value** from **Nothing** to **Value**.</li><li>Set the **Data Type**  to *List*.</li><li>Set the **Entity** option.</li><li>Configure the **Value**.</li></ol> |
| CE5012     | Return type of selected {Name of the microflow} should be {return type}. | There can be different causes for this error: <ol><li>You have selected a microflow as a list view data source, but this microflow returns a single object, while the list view can accept only a list.</li><li>You have selected a microflow as a data view context, but this microflow returns a list while the data view can accept only a single object. </li><li>For causes when it occurs in a user task of a workflow, see [Workflows Consistency Errors ](/studio/consistency-errors-workflows/).</li></ol> | Fixing the error is different depending on its cause (see the column to the left). <ol><li>For the list view, set the return value of the microflow to the list.</li><li>For the data view, set the return value of the microflow to the single object.</li><li>For ways to fix the error when it occurs on in a user task of a workflow, see [Workflows Consistency Errors ](/studio/consistency-errors-workflows/). </li></ol> |
| CE1573     | Selected microflow has a parameter {Name of the parameter} but there is no available data for it on the page. Place {Name of the widget} inside a data container with {Name of the entity} as the data source. | You selected a microflow as an on-click action of a widget (for example, of a button) and the microflow contains a parameter, but no data (for example, objects) is available for the widget to pass to the microflow. | Place the widget in a data container and make sure that the data source of the data container matches the **Entity** property of the microflow parameter. For a detailed example and a fix for it, see the [Error Fix Example for CE1573](#error-fix-example-3) section. |
| CE1574     | Selected microflow has a parameter {Name of the parameter} but there is no data on the page (surrounding {Name of the widget}) that can be used. Available data is {list of data available}. | You selected a microflow as the data source of a widget, but data (for example, an object) available for this widget does not match the parameter(s) of the microflow. | Make sure that object available for the widget matches the **Entity** property of the microflow parameter. For a detailed example and a fix for it, see the [Error Fix Example for CE1574](#error-fix-example-4) section. |
| CE1843     | A button with {Name of the workflow-related on-click action} on-click action should be placed inside a data container with {Name of the entity} as its context. | There can be the following reasons for this error depending on the on-click action you are using: <ol><li>A widget with the **Call Workflow** action is not placed inside a data container with the workflow context entity.</li><li>A widget with the **Show Task Page** action is not placed inside a data container with the **UserTaskInstance** entity.</li><li>A widget with the **Show Workflow Page** action is not placed inside a data container with the **WorkflowInstance** entity.</li><li>A widget with the **Complete Task** action is not placed inside a data container with the **UserTaskInstance** entity.</li></ol>For more information on on-click actions, see [Events Section](/studio/page-editor-widgets-events-section/). | Place the widget inside the data container with the specified entity. |

### 5.1 Error Fix Example for CE1573 {#error-fix-example-3}

When you set a microflow as an on-click action for a widget, and this microflow expects an objects that is not available, this will result in an error. 

For example, on a page named *Customers* you have a button that calls a microflow (that is an **On Click Action** of the button is set to *Microflow*):

 {{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/button-on-click-action.png" >}}

However, the microflow contains a parameter *Customer*:

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/microflow-parameter.png" >}}

The microflow parameter expects an object *Customer*, and since this object is not available on the page where button is located, it results in an error. 

To fix it, do the following:

1.  Open the *Customers* page and drag and drop a data container on it. For example, you can drag and drop a list view.

2.  Set the data source of the list view to *Database* and set **Entity** to *Customer*.

    {{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/list-view-data-source.png" >}}

3. Place the button inside the list view.

Now the *Customer* object is available on the page and it matches the microflow parameter *Customer*. 

### 5.2 Error Fix Example CE1574 {#error-fix-example-4}

When you set a microflow as an on-click action for a widget, and this microflow expects a certain data (for example, an object), but a different object is available to the widget, this will result in an error. 

For example, on a page called *Customers* you have a button that calls a microflow (meaning, an **On Click Action** of the button is set to *Microflow*):

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/button-on-click-action.png" >}}

The microflow contains a parameter *Customer*:

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/microflow-parameter.png" >}}

On the *Customers* page you also have a data container, for example, a data view, that has an object *Photo* available. That means that the data source of the data view is set to *Context* and **Entity** is set to *Photo*:

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/data-view-photo-data-source.png" >}}

As the microflow has the parameter *Customer*, and the data view has the object *Photo*, they are conflicting and resulting into an error.

The best way to fix this error is to either change the microflow to accept *Photo* or put the button in a data container for a different entity.

## 6 Input Element Consistency Errors

The most common errors for [input elements](/studio/page-editor-widgets-input-elements/) (such as, a text box, a drop-down, a check box, etcetera) , their causes, and ways to fix them are described in the table below. 

| Error Code | Message in the Checks Panel                                  | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0544     | This widget can only function inside a data container. Move it into a data view, list view or template grid. | You have added an input widget to a page, but it is not inside a data view or a list view. | There are two ways to fix the error: <ul><li>When you do not have a specific data view or list view available yet: open widget's properties > **Data Source** and click **Wrap with a new data view**, the input widget will be automatically placed inside a new data view.</li><li>When you already have a data view or a list view which this input element relates to: drag and drop the input element inside the data view or the list view</li></ul> |
| CE0545     | Select an attribute for this {name of the input element}.    | You have added an input element and it is inside a data container, but the attribute  which this input element is connected to is not selected. | Open the widget's properties > **Data Source** and select an attribute in the **Attribute** field. |

## 7 Image Widget Consistency Errors

The most common consistency errors for [static image widgets](/studio/page-editor-widgets-images-and-files/) can occur when you place an image widget on a page, but do not select an actual image for it. 

[Dynamic images](/studio/page-editor-widgets-images-and-files/) need to be placed inside a data container (a data view or a list view) and an entity should be selected for them. 

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/dynamic-image-properties.png" alt="Dynamic Image Properties"   width="350"  >}}

Errors for static and dynamic images are described in the table below. 

| Error Code | Message in the Checks Panel                                  | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0436     | No image selected.                                           | You have added a static image widget on a page, but the image itself is not selected. | Open image properties > the **General** section and click **Select Image**. You can either select a default image or upload your own one. |
|            | Move this widget into a data container, for example a data view or list view. | You have added a dynamic image to a page, but it is not inside a data view or a list view. | Open image properties > the **General** section and click **Wrap with a new data view**, the image will be automatically placed inside a new data view. You can also add a list view or a data view to the page and drag and drop a dynamic image inside it. |
| CE0489     | Select an entity for the data source of this image viewer.   | You have added a dynamic image to a page, the dynamic image is placed inside a data view or a list view, but an entity for the image is not specified. | Open image properties > the **General** section and select an entity in the **Entity** field. |

## 8 On Click Action Consistency Errors 

You can specify an **On Click Action** for different widgets, for example, for buttons or images. For more details about on click actions, see [Events Section](/studio/page-editor-widgets-events-section/).

The most common consistency errors appear when you do not configure the on click action entirely. For example, you select a microflow as an on click action, but do not select the microflow itself. 

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-pages/on-click-action-error.png" alt="On Click Action Error" >}}

To fix the consistency errors, finish configuring the on click action (for example, for an on click action *Page*, select a particular page that should open), or change the on click action to another one. 

##  9 Read More

* [Pages](/studio/page-editor/)
* [Navigation Consistency Errors](/studio/consistency-errors-navigation/)
* [Microflow Consistency Errors](/studio/consistency-errors-microflows/)
* [Checks](/studio/checks/)
