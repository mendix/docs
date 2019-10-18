---
title: "Navigation Consistency Errors"
parent: "consistency-errors"
description: "Describes consistency errors in Mendix Studio Pro and the way to fix them."
tags: ["Studio Pro", "consistency errors", "checks", "errors", "navigation"]
---

## 1 Introduction 

In this document, we will explain how to solve the most common consistency errors that can occur when configuring navigation in Studio Pro. 

An example of a consistency error is when you set a page that has a data view as a menu item. 

## 2 Navigation Consistency Errors 

The most common errors you can come across when configuring a navigation item are described in the table below:

| Error Code | Text in the Checks Panel                                     | Cause of an Error                                            | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0568     | The selected page {Name of the page} expects an object of type {type of object}, which is not available here. | You have set a page that expects an object to be passed to it (a page with a data view and a **Context** data source) as a menu item. | Pass an object to the page by changing the **On click** property  of the menu item from **Show a page** to **Create object**. For more information, see section [2.1 Error Fix When the Selected Page Expects an Object](#page-expects-an-object) |
| CE0529     | The selected {Name of the page} expects an object of type {type of object} and cannot be used as a home page. Change the page or use a microflow to provide the page with an object. | You have set a page that expects an object to be passed to it (for example, a page with a data view) as a home page. But a home page has no object that is passed to it, because it is the starting point of a flow. | You can use a microflow as the home page that will open the preferred page and pass a specific object to the home page. For more information, see section [2.2 Error Fix When the Selected Home Page Expects an Object](#home-page-expects-an-object) |
| CE0548     | Items with subitems cannot have an action themselves.        | You assigned an [on-click event](on-click-event) to a menu item that has a sub-item, when menu items that have sub-items cannot have on-click events assigned to them. | You need to either set the on-click event of the menu item to *Nothing*, or delete/move the sub-item. |

### 2.1 Error Fix When the Selected Page Expects an Object {#page-expects-an-object}

When you set a page with a data view as a menu item, you get a consistency error, because the page expects an object to be passed to it. 

For example, you have created a menu item called **Program** for a **Responsive** [profile](navigation#profiles). This menu item opens the **Program** page. However, the **Program** page has a data view on it and expects a *ProgramItem* object to be passed to it, so that it can show the program details of a specific *ProgramItem* on the page. As a result, you get a consistency error, as no object is passed to this page from the navigation.

![Scheme Showing the Menu Item Error](attachments/consistency-errors-navigation/page-expects-an-object-error.png)

To fix the error, you can create an object and pass it to the page. Do the following:

1. Open the navigation for the responsive profile.

2.  Open properties of the **Program** menu item, and do the following: <br/>

    a. Change the **On click** property from **Show a page** to **Create object**. <br/>

    b. Set **ProgramItem** as **Entity (path)**. <br/>

    c. Set **Program** as **On click page**. <br/>

    ![Menu Item Properties](attachments/consistency-errors-navigation/menu-item-properties.png)<br/>

Now when a user clicks the menu item, a new *ProgramItem* object will be created and passed to the page.

### 2.2. Error Fix When the Selected Home Page Expects an Object {#home-page-expects-an-object}

If you set a page that expects an object to be passed to it as a home page for a [navigation profile](navigation#properties), you will get a consistency error.

Let us study an example: you have added a data view that expects an object of type *Customer* to the home page of the responsive profile, and you get a consistency error. 

![Home Page Error](attachments/consistency-errors-navigation/home-page-error.png)

You can fix this error by creating a microflow that will that will create a new *Customer* object and pass it to the page. Do the following:

1. Open the responsive navigation profile.

2.  In **Default home page field** click **Select**.

    ![Default Home Page Setting](attachments/consistency-errors-navigation/default-home-page-field.png)

3. In the **Select Navigation Target** dialog window, click **New**, then select **Create Microflow**.

4. Name the microflow *ACT_Open_HomePage*.

5. Open the created microflow, add a **Create Object** activity to it 

6.  For the **Create Object** activity, set **Entity** to **Customer**. 

    ![Create Object Properties](attachments/consistency-errors-navigation/create-object-properties.png)

7. Add Show Page activity to the microflow and do the following in the **Show Page** pop-up dialog:<br/>

    a. Set **Object to pass** to **NewCustomer**.<br/>

    b. Set **Page** to **Home**.

Now the new object of type *Customer* will be created and passed to the home page.

![Open Home Page Microflow](attachments/consistency-errors-navigation/open-home-page-microflow.png)


## 3 Read More

* [Navigation](navigation)
* [Microflows](microflows)
* [Microflow Properties](microflow)
