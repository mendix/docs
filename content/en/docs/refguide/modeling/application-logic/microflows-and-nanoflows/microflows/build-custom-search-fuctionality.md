---
title: "Building Custom Search Functionality Using Microflows"
url: /refguide/building-custom-search-functionality/
weight: 6
description: "Describes how to build custom search functionality in Studio Pro using microflows and XPath constraints."
tags: ["microflow", "custom search", "filter", "studio pro", "XPath", "xpath"]
---

## 1 Introduction

Mendix provides default search functionality for your data grid or list view. However, sometimes the default search functionality does not meet your application's needs. In this case, you can build your own custom search functionality for your application. You can do so using microflows and XPath constraints in Studio Pro.

This how-to will teach you how to do the following:

* Configure a microflow data source for a data View
* Add and configure search fields inside the data view
* Add a list view inside the data view to show the search results
* Create a microflow that passes the search results to the list view

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install the latest version of Studio Pro
* Refer to [How to configure a Domain model](/refguide/configuring-a-domain-model/) and create the following entities for your domain model:
    * The **Customer** entity:

        [Add Screenshot]

    * The **CustomerSearch** entity:

        [Add Screenshot]
    
    {{% alert color="info" %}}
    The **CustomerSearch** entity is a non-persistable entity. The benefit of having it as a non-persistable entity is that no data of this entity will be saved in the database. You can have as many search fields as you want and do not need to worry about any data being saved in the database. Moreover, anything that is saved in this entity is only available in the current session, so you do not need to worry about security issues. For more information, see the [Non-Persistable Entities](/refguide/persistability/#non-persistable) section in *Persistability*.
    {{% /alert %}}

* Refer to [How to create a page and perform basic functions on a page](/refguide/page/), and make sure you have done the following:
    1. Create a blank page and name the page **CustomerSearch**.
    2. Add a data view to the page.

    [Add Screenshot]

* Know the basics about [microflows](/refguide/microflows/)
* Know the basics about [XPath constraints](/refguide/xpath-constraints/)

## 3 Configuring a Microflow Data Source for the Data View

To call **CustomerSearch** page from the navigation menu, you need to create a microflow data source for the data view:

1. Open the **CustomerSearch** page.
2. Double-click the data view to open its properties dialog box.
3. In the **Data source** section, choose **Microflow** as the **Type**, and click **Select**.
4. In the **Select Microflow** dialog box, click **New**, and name the microflow **DS_GetCustomerSearch**.
5. Open the **DS_GetCustomerSearch** microflow, and drag a **Create Object** activity from the **Toolbox** into the flow.
6. Double-click the **Create Object** activity to open its properties dialog box.
7. Select **CustomerSearch** as the **Entity**, keep the default **No** settings for both **Commit** and **Refresh in client**, and click **OK**.
8. Right-click the activity and select **Set $NewCustomerSearch as return value**.

## 4 Adding and Configuring Search Fields Inside the Data View

Inside the data view, you need to add search fields where end-users can type in what they are looking for. To search based on both the **Name** and **City** attributes of the **Customer** entity, do the following:

1. Open the **CustomerSearch** page.
2. Navigate to the **Toolbox**, and drag a **Text box** into the data view.
3. Double-click the new text box, and select the attribute **Name** as the **Data source**.
4. The **CustomerSearch** object needs to be refreshed on-change of the characters being entered in the text box. To do so, follow these steps:
    1. Go to the text box's **Events** tab, and choose **Call a microflow** as the **On change** event.
    2. In the **On change behavior** section, choose **While user is entering data** when **Apply changes**, and keep the default value `300` for Apply after(ms).
    3. Click **Select** to create a microflow that refreshes the search field.
    4. In the **Select Microflow** dialog box, click **New**, and then name the microflow **OCH_RefreshCustomerSearch**.
    5. Check **CustomerSearch** as the parameter for the new microflow, and click **OK**.
    6. Go to the **OCH_RefreshCustomerSearch** microflow, drag a **Change Object** activity from the **Toolbox** into the flow.
    7. Double-click the activity to open its properties dialog box.
    8. Choose **CustomerSearch** as the input object.
    9. In the **Action** section, set **Commit** to **No** and **Refresh in client** to **Yes**.
5. Navigate to the **Toolbox**, and drag another **Text box** right below the **Name** text box.
6. Double-click the new text box, and configure it in the following way:
    1. In the **Data source** section, select the attribute **City**.
    2. Go to its **Events** tab, and choose **Call a microflow** as the **On change** event.
    3. Select the microflow **OCH_RefreshCustomerSearch** for the **Microflow** setting.
    4. In the **On change behavior** section, choose **While user is entering data** when **Apply changes**, and keep the default value `300` for Apply after(ms).

Now you have two search fields where end-users can search customers based on customers' name or the city they are from, or both.

## 5 Adding and Configuring a List View Inside the Data View

Now you need add a list view to the data view to show the search results. To add a list view inside the data view, do the following:

1. Open the **CustomerSearch** page.
2. Navigate to the **Tools** section, and drag a **List view** into the data view in the column below the search fields.

    [Add Screenshot]

### 5.1 Creating a Microflow That Passes the Search Results

You need to create a microflow as the data source for the list view that passes the search results. To do so, following these steps:

1. Double-click the list view, go to its **Data source** tab, and choose **Microflow** as the data source type.
2. Click **Select** to create a new microflow that passes the search results.
3. In the **Select Microflow** dialog box, click **New**, and then name the new microflow **DS_GetSearchResult**.
4. Check **CustomerSearch** as the parameter for the new microflow, and click **OK**.
5. Now we need to add a decision to the microflow that checks whether the input from the end-users is empty. Follow these steps:
    1. Go to the **DS_GetSearchResult** microflow, and drag a **Decision** from the **Toolbox** into the flow.
    2. Double-click the decision, type in *Any search input?* as its caption.
    3. In the **Expression** section, type `(trim($CustomerSearch/Name)!='')`, and click **OK**.
    4. Double-click the end event that follows the **false** flow, type `empty` as the **Microflow return value**, and click **OK**.
6. Now we need to add and configure a retrieve activity that retrieves the search results:
    1. Drag a **Retrieve** activity from the **Toolbox** into your microflow after the decision .
    2. Double-click the retrieve activity to open its properties dialog box.
    3. Choose **From database** as the **Source**, and click **Select** to select an **Entity**.
    4. In the **Select Entity** dialog box, go to **MyFirstModule**, and select **Customer**.
    5. In the **XPath Constraint** box, type in the following constraint: `[($CustomerSearch/Name = empty or $CustomerSearch/Name = '') or contains (Name, $CustomerSearch/Name)] and [($CustomerSearch/City = empty or $CustomerSearch/City = '') or contains(City, $CustomerSearch/City)]`.
    6. Keep **All** as the **Range**, and Click **OK**.
    7. Right-click the retrieve activity and then choose **Set $CustomerList as return value**.

Now you have the microflow that passes the search results in the list view!

To be able to add some customer data to your app, you can first [generate overview and detail pages automatically](/howto/front-end/create-your-first-two-overview-and-detail-pages/), and then add a **Create button** to the **CustomerSearch** page and configure the button to call the generated **Customer_NewEdit** detail page.

Now you can add the **CustomerSearch** page as a menu item to the navigation document, add some customer data, and run your app locally to test the custom search functionality you just built! For more information on how to add a page as a menu item to the navigation document, see the [Creating Menu Items](/refguide/setting-up-the-navigation-structure/) section in *Setting Up Navigation*.
