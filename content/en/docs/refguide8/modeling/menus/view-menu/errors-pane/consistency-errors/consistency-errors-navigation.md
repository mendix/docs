---
title: "Navigation Consistency Errors"
url: /refguide8/consistency-errors-navigation/
description: "Describes consistency errors in Mendix Studio Pro and the way to fix them."
tags: ["Studio Pro", "consistency errors", "checks", "errors", "navigation"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/consistency-errors-navigation.pdf).
{{% /alert %}}

## 1 Introduction 

In this document, we explain how to solve the most common consistency errors that can occur when configuring navigation in Studio Pro. An example of a consistency error is when you set a page that has a data view as a menu item. 

{{% alert color="info" %}}

This document does not describe *all* the errors, as there are a lot of errors that can occur, some of which are simple and do not need extra explanation, others are rare and/or heavily dependent on a use-case. 

{{% /alert %}}

Some errors have error codes and if these errors are described in documentation, Studio Pro has a clickable link to the corresponding document. Others do not have an error code, in this case, you can manually search whether a particular error is described in documentation (you can search by a message you see in the **Errors** pane).

## 2 Navigation Consistency Errors 

The most common errors you can come across when configuring a navigation item are described in the table below:

| Error Code | Message in the Errors Pane                                   | Cause of the Error                                           | Way to Fix                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CE0568     | The selected page {Name of the page} expects an object of type {type of object}, which is not available here. | You have set a page that expects an object to be passed to it (a page with a data view and the **Context** data source) as a menu item. | Pass an object to the page by changing the **On click** property  of the menu item from **Show a page** to **Create object**. For more information, see the [Error Fix Example for CE0568](#page-expects-an-object) section. |
| CE0529     | The selected {Name of the page} expects an object of type {type of object} and cannot be used as a home page. Change the page or use a microflow to provide the page with an object. | You have set a page that expects an object to be passed to it (for example, a page with a data view) as a home page. But the home page has no object that is passed to it, because it is the starting point of a flow. | You can use a microflow as the home page that will open the preferred page and pass a specific object to the home page. For more information, see the [Error Fix Example for CE0529](#home-page-expects-an-object). |
| CE0548     | Items with subitems cannot have an action themselves.        | You have assigned an [on-click event](/refguide8/on-click-event/) to a menu item that has a sub-item, when menu items with have sub-items cannot have on-click events assigned to them. | You need to either set the on-click event of the menu item to *Nothing*, or delete/move the sub-item. |

### 2.1 Error Fix Example for CE0568 {#page-expects-an-object}

When you set a page with a data view as a menu item, you get a consistency error, because the page expects an object to be passed to it. 

For example, you have created a menu item called **Program** for a **Responsive** [profile](/refguide8/navigation/#profiles). This menu item opens the **Program** page. However, the **Program** page has a data view on it and expects a *ProgramItem* object to be passed to it, so that it can show the program details of a specific *ProgramItem* on the page. As a result, you get a consistency error, as no object is passed to this page from the navigation.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-navigation/page-expects-an-object-error.png" alt="Scheme Showing the Menu Item Error" >}}

To fix the error, you can create an object and pass it to the page. Do the following:

1. Open the navigation for the responsive profile.

2.  Open properties of the **Program** menu item, and do the following: <br/>

    a. Change the **On click** property from **Show a page** to **Create object**. <br/>

    b. Set **ProgramItem** as **Entity (path)**. <br/>

    c. Set **Program** as **On click page**. <br/>

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-navigation/menu-item-properties.png" alt="Menu Item Properties" >}}<br/>

Now when an end-user clicks the menu item, a new *ProgramItem* object will be created and passed to the page.

### 2.2. Error Fix Example for CE0529 {#home-page-expects-an-object}

If you set a page that expects an object to be passed to it as a home page for a [navigation profile](/refguide8/navigation/#properties), you will get a consistency error.

For example, you have added a data view that expects an object of type *Customer* to the home page of the responsive profile, and you get a consistency error. 

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-navigation/home-page-error.png" alt="Home Page Error" >}}

You can fix this error by creating a microflow that will that will create a new *Customer* object and pass it to the page. Do the following:

1. Open the responsive navigation profile.

2.  In **Default home page field** click **Select**.

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-navigation/default-home-page-field.png" alt="Default Home Page Setting" >}}

3. In the **Select Navigation Target** dialog box, click **New**, then select **Create Microflow**.

4. Name the microflow *ACT_Open_HomePage*.

5. Open the created microflow, add a **Create object** activity to it 

6.  For the **Create object** activity, set **Entity** to **Customer**. 

    {{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-navigation/create-object-properties.png" alt="Create Object Properties" >}}

7. Add Show Page activity to the microflow and do the following in the **Show Page** pop-up dialog:<br/>

    a. Set **Object to pass** to **NewCustomer**.<br/>

    b. Set **Page** to **Home**.

Now the new object of type *Customer* will be created and passed to the home page.

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/consistency-errors-navigation/open-home-page-microflow.png" alt="Open Home Page Microflow" >}}


## 3 Read More

* [Navigation](/refguide8/navigation/)
* [Microflows](/refguide8/microflows/)
* [Microflow Properties](/refguide8/microflow/)
