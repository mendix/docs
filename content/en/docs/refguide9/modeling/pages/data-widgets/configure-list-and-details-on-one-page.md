---
title: "Configuring a List and Viewing List Item Details on One Page"
linktitle: "Configure List and View Details on 1 Page"
url: /refguide9/configure-list-and-details-on-one-page/
description: "Describes how to configure a list and view list item details on one page in Mendix Studio Pro."
weight: 60
---

## Introduction 

This how-to explains how you can configure a list of items and view the item details selected in this list on one page. 

This how-to teaches you how to do the following:

* Creating a new page
* Configure a list view
* Configure a data view that shows the details of an item selected in the list view

The how-to describes the following use case: 

Sales Representatives in your company want to view a list of opportunity contacts – potential customers. When Sales Representatives click a row in this list, the details of the corresponding opportunity contact are displayed next to the list:

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-list-and-details-on-one-page/configured-page.png" width="650px" class="no-border" >}}

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](/refguide9/domain-model/).
* Make sure your domain model is configured in the following way:

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-list-and-details-on-one-page/domain-model.png" width="200px" class="no-border" >}}

## Adding the Primary Detail Page

You would like to open a page with opportunity contact list and its details from your home page. Do the following:

1. Open your **Home_Web**. 
2. Navigate to **Toolbox** > **Widgets**.
3. Search for **Open page button** and drag it onto the page.
4. In the **Select web page** dialog box, click **New** to create a page.
5. In the **Create Page** dialog box, type *OpportunityContact* as the **Page name**.
6. Navigate to **Lists**, select **List MasterDetail** as the page template, and click **OK**.

You just created a new page. A list (list view) is displayed on the left and list item details (data view) are displayed on the right:

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-list-and-details-on-one-page/primary-detail-page.png" width="650px" class="no-border" >}} 

## Configuring the List

Now you need to configure the page you just created. 

First of all, you need to configure the list view so that it displays the opportunity contacts by their name only. To do so, do the following:

1. Open the **OpportunityContact** page that you created in the section above.
2. Right-click the list on the left and choose **Select entity**.
3. In the **Select Data Source** dialog box, choose the **OpportunityContact** entity, and click **Select**.
4. Make sure that **Automatically fill the contents of the list view** is selected and click **OK**.
5. Now the list is connected to the **OpportunityContact** entity. To display only the name of each contact in the list, delete the rows that show the **{Jobtitle}**, **{Phone}**, and **{Email}** information.

    Now the list view displays the list of opportunity contacts by their name:

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-list-and-details-on-one-page/list-configured.png" width="300px" class="no-border" >}} 

## Configuring List Item Details

Now you need to configure opportunity contact details displayed next to the list. The idea is when you select the name from the list, the details of the selected contact are displayed. 

The **List MasterDetail** page template which your page is based on has a preconfigured data view that listens to the list view.

Now you need to configure the widgets inside the data view to show all the attributes of the **OpportunityContact** entity. That is, you need to show all the details that an opportunity contact has, including their name, job title, phone, and email. To do so, do the following:

1. Delete the **Save** and **Cancel** buttons inside the data view because you only want to display the data, not change it.
2. Double-click **Form title** (which is displayed as a data view heading), rename the **Caption** to *Opportunity Contact Details*, and click **OK**:

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-list-and-details-on-one-page/data-view.png" width="500px" class="no-border" >}}

3. Double-click the **First name** text box to open its properties and do the following:

    1. Go to **Data Source** > **Attribute**. 
    2. In the **Select Attribute** dialog box, select the **Name** attribute as the data source.
    3. In the **Label** section, rename the **Label caption** to *Name*.

4. Refer to steps 3a-3c to select the **Phone** attribute for the **Phonenumber** text box and the **Email** attribute for the **Email** text box.

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-list-and-details-on-one-page/attributes-replaced.png" width="500px" class="no-border" >}}

5. Now you still lack information on the contact's job title. To add the job title information, do the following:

    1. Navigate to **Toolbox** > **Widgets**, search for a **Text box**.
    2. Drag it inside the data view below the **Name** text box.
    3. Refer to steps 3a-3c to select the **Jobtitle** attribute for the new text box.

6. Delete the **Birthday** and **Bio** inputs widgets in the data view because you do not need them in this case.

Congratulations! Now you have a page that displays a list of opportunity contacts and the details of the selected contact:

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-list-and-details-on-one-page/configured-page.png" width="650px" class="no-border" >}}

You can now preview your app and test your page.

## Read More

* [Page](/refguide9/page/)
* [Create Your First Two Overview and Detail Pages](/howto9/front-end/create-your-first-two-overview-and-detail-pages/)
* [Creating a Basic Data Layer](/refguide9/create-a-basic-data-layer/)
