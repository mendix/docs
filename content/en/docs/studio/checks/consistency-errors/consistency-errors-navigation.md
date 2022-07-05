---
title: "Navigation Consistency Errors"
url: /studio/consistency-errors-navigation/
weight: 20
description: "Describes navigation consistency errors in Mendix Studio and the way to fix them."
tags: ["studio", "consistency errors", "checks", "errors", "navigation"]
#To update screenshots in this document, use the Consistency Errors app.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

In this document, we explain how to solve the most common consistency errors that can occur when configuring navigation in Mendix Studio. For more information on navigation, see [Navigation Document](/studio/navigation/).

An example of a consistency error is when you set a page that has a data view as a menu item. 

{{% alert color="info" %}}

This document does not describe *all* the errors, as there are a lot of errors that can occur, some of which are simple and do not need extra explanation, others are rare and/or heavily dependent on a use-case. 

{{% /alert %}}

Some errors have error codes and if these errors are described in documentation, Studio has a clickable link to the corresponding document. Others do not have an error code, in this case, you can manually search whether a particular error is described in documentation (you can search by a message you see in the **Checks** panel).

## 2 Navigation Consistency Errors 

The most common errors you can come across when configuring a navigation item are described in the table below:

| Error Code | Message in the Checks Panel                                  | Element Where the Error Occurs                               | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0568     | The selected page {Name of the page} expects an object of type {type of object}, which is not available here. | Property 'On click' of menu item {name of the menu item}.    | You have set a page that expects an object to be passed to it (for example, a page with a data view) as a menu item. | Pass an object to the page: open properties>the **Events** section, set the on-click action to **Page**, and enable the **Create Object** option and select an **Entity**. For more information, see the [Error Fix Example for CE0568](#page-expects-an-object) section |
| CE0529     | The selected {Name of the page} expects an object of type {type of object} and cannot be used as a home page. Change the page or use a microflow to provide the page with an object. | Property 'On click' of menu item 'Home'                      | You have set a page that expects an object to be passed to it (for example, a page with a data view) as the home page. But by default the home page has no object that is passed to it, because it is the starting point for your user. | Set a different  page as the home page. Alternatively, you can use a microflow that will open the home page and pass a specific object to it. For more information, see the [Error Fix Example for CE0529](#home-page-expects-an-object) section. |
| CE0529     | The selected {Name of the page} expects an object of type {type of object} and cannot be used as a home page. Change the page or use a microflow to provide the page with an object. | Default home page of navigation profile 'Hybrid_tablet_app_online'/ 'Hybrid_phone_app_online' | In Studio Pro, you can configure several navigation profiles, while only the responsive navigation profile is shown and can be configured in Studio. The home page of the responsive profile is by default set as the home page for the Hybrid app navigation profiles, which can be configured in Studio Pro only. <br />For more information on profiles, see [Navigation](/refguide/navigation/) in the *Studio Pro Guide*. | Switch to Studio Pro and change the home page for the navigation profile of **Hybrid tablet app online** or **Hybrid phone** in **Navigation**. |
| CE0548     | Items with subitems cannot have an action themselves.        | A menu item that has a sub-item.                             | You assigned an on-click action to a menu item that has a sub-item, when menu items that have sub-items cannot have on-click actions assigned to  them. | You need to either set the on-click action of the menu item to *Nothing*, or delete/move the sub-item. |

### 2.1 Error Fix Example for CE0568 {#page-expects-an-object}

When you set a page with a data view as a menu item, you get a consistency error, because the page expects an object to be passed to it. 

For example, you have created a menu item called **Program**. This menu item opens the **Program** page but does not create and pass any object to it. The **Program** page has a data view on it and expects a *ProgramItem* object to be passed to it. As a result, you get a consistency error, as no object is passed to this page from the navigation.

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-navigation/page-expects-an-object-error.png" alt="Scheme Showing the Menu Item Error" >}}

To fix the error, you can create an object and pass it to the page. Do the following:

1. Open the navigation document.

2. Open properties of the **Program** menu item, and do the following:<br />

    a. In the **Events** section, make sure that the on-click action is set to **Page** and enable the **Create Object** option.<br />

    b. Set **ProgramItem** as **Entity**.<br />

    {{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-navigation/menu-item-properties.png" alt="Menu Item Properties"   width="350"  >}}

Now when a user clicks the navigation item, a new object of type *ProgramItem* will be created and passed to the **Program** page.

### 2.2. Error Fix Example for CE0529 {#home-page-expects-an-object}

If you set a page that expects an object to be passed to it as the home page (for example, a page with a data view), you will get a consistency error.

For example, you have set **Customer Details** page as the default home page in your **Navigation**. 

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-navigation/home-page.png" alt="Navigation Item Properties" >}}

You have the **Customer Details** page with a data view that expects an object *Customer* to be passed to it. In other words, this page needs to get data first to be able to display it. 

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-navigation/data-view-customer.png" alt="Data View Expects the Customer Object"   width="350"  >}}

However, the home page is the first page to be opened in your app by default, and the **Customer Details** page cannot function as a home page, as it needs to get data first. 

In this example, the best way to solve the error is to set another page as the home page that does not have a data view on it. For more information on navigation and properties of the menu items, see [Navigation Document](/studio/navigation/). 

However, you can also solve this error by creating a microflow that will create a new *Customer* object and pass it to the page, do the following:

1. Open **Navigation** > properties of the menu item set as the home page.

2.  Change the **On Click Action** from **Page** to **Microflow**. 

    {{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-navigation/menu-item-on-click-action.png" alt="Menu Item Properties"   width="350"  >}}

3. Click **Select Microflow** and click **New Microflow** in the pop-up window.

4. Name the microflow *ACT_Open_HomePage*.

5. The created microflow is opened. In the **Toolbox** > **Object Activities**, select **Create Object**, drag and drop it to the microflow.

6.  Open the **Create object** activity properties, and set **Entity** to **Customer**.

    {{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-navigation/create-object-properties.png" alt="Create Object Activity Properties"   width="350"  >}}

7. In the **Toolbox** > **Client Activities**, select **Show Page** activity, drag and drop it to the microflow.

8.  Open the **Show Page** activity properties and do the following:<br />

    a.  Set **Page** to **Customer_Details**, which you have set as homepage in the navigation.<br />

    b. Set **Object to pass** to **NewCustomer**.<br />

    {{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-navigation/show-page-properties.png" alt="Show Page Properties" >}}

Now the new object of type *Customer* will be created and passed to the home page.

{{< figure src="/attachments/studio/checks/consistency-errors/consistency-errors-navigation/open-page-microflow.png" alt="Open Home Page Microflow" >}}


## 3 Read More

* [Navigation Document](/studio/navigation/)
* [Page Consistency Errors](/studio/consistency-errors-pages/)
* [Microflow Consistency Errors](/studio/consistency-errors-microflows/)
* [Microflows](/studio/microflows/)
* [Checks](/studio/checks/)
