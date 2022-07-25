---
title: "Navigation Consistency Errors"
url: /refguide7/consistency-errors-navigation/
description: "Describes consistency errors in the Mendix Desktop Modeler and the way to fix them."
tags: ["desktop modeler", "consistency errors", "checks", "errors", "navigation"]
---

## 1 Introduction 

In this document, we will explain how to solve the most common consistency errors that can occur when configuring navigation in the Desktop Modeler. 

An example of a consistency error is when you set a page that has a data view as a menu item. 

## 2 Navigation Consistency Errors 

The most common errors you can come across when configuring a navigation item are described in the table below:

| Text in the Checks Panel                                     | Cause of an Error                                            | Way to Fix                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| The selected page {Name of the page} expects an object of type {type of object}, which is not available here. | You have set a page that expects an object to be passed to it (a page with a data view and a **Context** data source) as a menu item. | Pass an object to the page by changing the **On click** property  of the menu item from **Show a page** to **Create object**. For more information, see section [2.1 Error Fix When the Selected Page Expects an Object](#page-expects-an-object) |
| The selected {Name of the page} expects an object of type {type of object} and cannot be used as a home page. Change the page or use a microflow to provide the page with an object. | You have set a page that expects an object to be passed to it (for example, a page with a data view) as a home page. But a home page has no object that is passed to it, because it is the starting point of a flow. | You can use a microflow as the home page that will open the preferred page and pass a specific object to the home page. For more information, see section [2.2 Error Fix When the Selected Home Page Expects an Object](#home-page-expects-an-object) |

### 2.1 Error Fix When the Selected Page Expects an Object {#page-expects-an-object}

When you set a page with a data view as a menu item, you get a consistency error, because the page expects an object to be passed to it. 

For example, you have created a menu item called **Program** for a **Responsive** [profile](/refguide7/navigation-profile/). This menu item opens the **Program** page. However, the **Program** page has a data view on it and expects a *ProgramItem* object to be passed to it, so that it can show the program details of a specific *ProgramItem* on the page. As a result, you get a consistency error, as no object is passed to this page from the navigation.

{{< figure src="/attachments/refguide7/desktop-modeler/consistency-errors/consistency-errors-navigation/dm-page-expects-an-object-error.png" alt="Scheme Showing the Menu Item Error" >}}

To fix the error, you can create an object and pass it to the page. Do the following:

1. Open the navigation for the responsive profile.

2.  Open properties of the **Program** menu item, and do the following: <br/>

    a. Change the **On click** property from **Show a page** to **Create object**. <br/>

    b. Set **ProgramItem** as **Entity (path)**. <br/>

    c. Set **Program** as **On click page**. <br/>

    {{< figure src="/attachments/refguide7/desktop-modeler/consistency-errors/consistency-errors-navigation/dm-menu-item-properties.png" alt="Menu Item Properties" >}}<br/>

Now when a user clicks the menu item, a new *ProgramItem* object will be created and passed to the page.

### 2.2. Error Fix When the Selected Home Page Expects an Object {#home-page-expects-an-object}

If you set a page that expects an object to be passed to it as a home page for a [navigation profile](/refguide7/navigation-profile/), you will get a consistency error.

Let us study an example: you have added a data view that expects an object of type *Customer* to the home page of the responsive profile, and you get a consistency error. 

{{< figure src="/attachments/refguide7/desktop-modeler/consistency-errors/consistency-errors-navigation/dm-home-page-error.png" alt="Home Page Error" >}}

You can fix this error by creating a microflow that will that will create a new *Customer* object and pass it to the page. Do the following:

1. Open the responsive navigation profile.

2.  In **Default home page field** click **Select**.

    {{< figure src="/attachments/refguide7/desktop-modeler/consistency-errors/consistency-errors-navigation/dm-default-home-page-field.png" alt="Default Home Page Setting" >}}

3. In the **Select Navigation Target** dialog window, click **New**, then select **Create Microflow**.

4. Name the microflow *ACT_Open_HomePage*.

5. Open the created microflow, add a **Create Object** activity to it 

6.  For the **Create Object** activity, set **Entity** to **Customer**. 

    {{< figure src="/attachments/refguide7/desktop-modeler/consistency-errors/consistency-errors-navigation/dm-create-object-properties.png" alt="Create Object Properties" >}}

7. Add Show Page activity to the microflow and do the following in the **Show Page** pop-up dialog:<br/>

    a. Set **Object to pass** to **NewCustomer**.<br/>

    b. Set **Page** to **Home**.

Now the new object of type *Customer* will be created and passed to the home page.

{{< figure src="/attachments/refguide7/desktop-modeler/consistency-errors/consistency-errors-navigation/dm-open-home-page-microflow.png" alt="Open Home Page Microflow" >}}


## 3 Read More

* [Navigation Profile](/refguide7/navigation-profile/)
* [Microflows](/refguide7/microflows/)
* [Microflow Properties](/refguide7/microflow/)
