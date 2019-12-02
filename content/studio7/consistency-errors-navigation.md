---
title: "Navigation Consistency Errors"
category: "Consistency Errors"
description: "Describes navigation consistency errors in Mendix Studio and the way to fix them."
tags: ["studio", "consistency errors", "checks", "errors", "navigation"]
---

## 1 Introduction 

In this document, we will explain how to solve the most common consistency errors that can occur when configuring navigation in Mendix Studio. For more information on navigation, see [Navigation Document](navigation).

An example of a consistency error is when you set a page that has a data view as a menu item. 

## 2 Navigation Consistency Errors 

The most common errors you can come across when configuring a navigation item are described in the table below:

| Error Code | Text in the Checks Panel                                     | Element Where the Error Occurs                               | Cause of an Error                                            | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0568     | The selected page {Name of the page} expects an object of type {type of object}, which is not available here. | Property 'On click' of menu item {name of the menu item}.    | You have set a page that expects an object to be passed to it (for example, a page with a data view) as a menu item. | Pass an object to the page: open properties>the **Events** section, set the on-click action to **Page**, and enable the **Create Object** option and select an **Entity**. For more information, see section [2.1 Error Fix When the Selected Page Expects an Object](#page-expects-an-object) |
| CE0529     | The selected {Name of the page} expects an object of type {type of object} and cannot be used as a home page. Change the page or use a microflow to provide the page with an object. | Property 'On click' of menu item 'Home'                      | You have set a page that expects an object to be passed to it (for example, a page with a data view) as the home page. But by default the home page has no object that is passed to it, because it is the starting point for your user. For a more detailed example, see section [2.2 Error Fix When the Home Page Expects an Object](#home-page-expects-an-object) | Set a different  page as the home page. Alternatively, you can use a microflow that will open the home page and pass a specific object to it. For more information, see section [2.2 Error Fix When the Home Page Expects an Object](#home-page-expects-an-object) |
| CE0529     | The selected {Name of the page} expects an object of type {type of object} and cannot be used as a home page. Change the page or use a microflow to provide the page with an object. | Default home page of navigation profile 'Hybrid_tablet_app_online'/ 'Hybrid_phone_app_online' | In Studio Pro, you can configure several navigation profiles, while only the responsive navigation profile is shown and can be configured in Studio. The home page of the responsive profile is by default set as the home page for the Hybrid app navigation profiles, which can be configured in Studio Pro only. <br />For more information on profiles, see [Navigation](/refguide/navigation) in the *Studio Pro Guide*. | Switch to Studio Pro and change the home page for the navigation profile of **Hybrid tablet app online** or **Hybrid phone app online** in **Navigation**. |

### 2.1 Error Fix When the Selected Page Expects an Object {#page-expects-an-object}

When you set a page with a data view as a menu item, you get a consistency error, because the page expects an object to be passed to it. 

For example, you have created a menu item called **Program**. This menu item opens the **Program** page but does not create and pass any object to it. The **Program** page has a data view on it and expects a *ProgramItem* object to be passed to it. As a result, you get a consistency error, as no object is passed to this page from the navigation.

![Scheme Showing the Menu Item Error](attachments/consistency-errors-navigation/page-expects-an-object-error.png)

To fix the error, you can create an object and pass it to the page. Do the following:

1. Open the navigation document.

2. Open properties of the **Program** menu item, and do the following:<br />

    a. In the **Events** section, make sure that the on-click action is set to **Page** and enable the **Create Object** option.<br />

    b. Set **ProgramItem** as **Entity**.<br />

    {{% image_container width="350" %}}![Menu Item Properties](attachments/consistency-errors-navigation/menu-item-properties.png)
    {{% /image_container %}}

Now when a user clicks the navigation item, a new object of type *ProgramItem* will be created and passed to the **Program** page.

### 2.2. Error Fix When the Home Page Expects an Object  {#home-page-expects-an-object}

If you set a page that expects an object to be passed to it as the home page (for example, a page with a data view), you will get a consistency error.

Let us study an example: in your **Navigation**, you have set **Customer Details** page as the home page. 

![Navigation Item Properties](attachments/consistency-errors-navigation/navigation-item-properties.png)

You have the **Customer Details** page with a data view that expects an object *Customer* to be passed to it. In other words, this page needs to get data first to be able to display it. 

{{% image_container width="350" %}}![Data View Expects the Customer Object](attachments/consistency-errors-pages/data-view-customer.png)
{{% /image_container %}}

However, the home page is the first page to be opened in your app by default, and the **Customer Details** page cannot function as a home page, as it needs to get data first. 

In this example, the best way to solve the error is to set another page as the home page that does not have a data view on it. For more information on navigation and properties of the menu items, see [Navigation Document](navigation). 

However, you can also solve this error by creating a microflow that will create a new *Customer* object and pass it to the page, do the following:

1. Open **Navigation** > properties of the home page menu item.

2.  Change the **On Click Action** from **Page** to **Microflow**. 

    {{% image_container width="350" %}}![Menu Item Properties](attachments/consistency-errors-navigation/menu-item-on-click-action.png)
    {{% /image_container %}}

3. Click **Select Microflow** and click **New Microflow** in the pop-up window.

4. Name the microflow *ACT_Open_HomePage*.

5. The created microflow is opened. In the **Toolbox** > **Object Activities**, select **Create Object**, drag and drop it to the microflow.

6.  Open the **Create object** activity properties, and set **Entity** to **Customer**.

    {{% image_container width="350" %}}![Create Object Activity Properties](attachments/consistency-errors-navigation/create-object-properties.png)
    {{% /image_container %}}

7. In the **Toolbox** > **Client Activities**, select **Show Page** activity, drag and drop it to the microflow.

8.  Open the **Show Page** activity properties and do the following:<br />

    a.  Set **Page** to **Home**.<br />

    b. Set **Object to pass** to **NewCustomer**.<br />

    {{% image_container width="350" %}}![Show Page Properties](attachments/consistency-errors-navigation/show-page-properties.png)
    {{% /image_container %}}

Now the new object of type *Customer* will be created and passed to the home page.

![Open Home Page Microflow](attachments/consistency-errors-navigation/open-page-microflow.png)


## 3 Read More

* [Navigation Document](navigation)
* [Page Consistency Errors](consistency-errors-pages)
* [Microflow Consistency Errors](consistency-errors-microflows)
* [Microflows](microflows)
* [Checks](checks)
