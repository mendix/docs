---
title: "Configuring a List and Viewing List Item Details on One Page"
linktitle: "Configure List and View Details on 1 Page"
url: /refguide/configure-list-and-details-on-one-page/
category: "Pages"
description: "Describes how to configure a list and view list item details on one page in Mendix Studio Pro."
weight: 60
tags: ["studio pro", "pages", "list", "how to"]
---

## 1 Introduction 

This how-to explains how you can configure a list of items and view the item details selected in this list on one page. 

This how-to will teach you how to do the following:

* Creating a new page
* Configure a list view
* Configure a data view that shows the details of an item selected in the list view

The how-to describes the following use case: 

Sales Representatives in your company want to view a list of opportunity contacts – potential customers. When Sales Representatives click a row in this list, the details of the corresponding opportunity contact are displayed next to the list:

{{< figure src="/attachments/refguide/modeling/pages/data-widgets/configure-list-and-details-on-one-page/configured-page.png" width="650px" >}}

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](/refguide/domain-model/).
* Make sure your domain model is configured in the following way:

    {{< figure src="/attachments/refguide/modeling/pages/data-widgets/configure-list-and-details-on-one-page/domain-model.png" width="200px" >}}

    * Make sure you have configured the **Title** attribute as the following enumeration:

        {{< figure src="/attachments/refguide/modeling/pages/data-widgets/configure-list-and-details-on-one-page/enumeration-title.png" width="400px" >}}

    * Make sure you have configured the **Status** attribute as the following enumeration:

        {{< figure src="/attachments/refguide/modeling/pages/data-widgets/configure-list-and-details-on-one-page/enumeration-status.png" width="400px" >}}

## 3 Adding the Master Detail Page

You would like to open a page with opportunity contact list and its details from your home page. Do the following:

1. Open your **Home_Web**. 
2. Navigate to **Toolbox** > **Widgets**.
3. Search for **Open page button** and drag it onto the page.
4. In the **Select web page** dialog box, click **New** to create a page.
5. In the **Create Page** dialog box,  type *OpportunityContact* as the **Page name**.
6. Navigate to **Lists**, select **List MasterDetail** as the page template, and click **OK**.

You just created a new page. A list (list view) is displayed on the left and list item details (data view) are displayed on the right:

{{< figure src="/attachments/refguide/modeling/pages/data-widgets/configure-list-and-details-on-one-page/master-detail-page.png" width="600px" >}} 

## 4 Configuring the List

Now you need to configure the page you just created. 

First of all, you need to connect data to the list. Do the following:

1. Open the **OpportunityContact** page that you created in the section above.
2. Right-click the list on the left and choose **Select entity**.
3. In the **Select Data Source** dialog box, choose the **OpportunityContact** entity, and click **Select**.
4. Deselect **Automatically fill the contents of the list view** and click **OK**.
5. Now the list is connected to the **OpportunityContact** entity. To display the name of each report per company, do the following:

    1. Double-click the **List item title** text in the list view to open its properties.
    2. Go to **General** > **Caption**, and click **Edit**.
    3. In the **Edit Caption** dialog box, click **New**.
    4. In the **Edit Template Parameter** dialogue box, click **Select** for **Attribute (path)**.
    5. In the drop-down list of the **OpportunityContact** entity, select **Name**, and click **OK**.
    6. Change the **Caption** from **List item title** to *{1}* and click **OK**.

    Now the list view displays the list of opportunity contacts by their name:

    {{< figure src="/attachments/refguide/modeling/pages/data-widgets/configure-list-and-details-on-one-page/list-configured.png" width="250px" >}} 

6. Delete the **Secondary text** row in the list view because you do not need it in this case.

## 5 Configuring List Item Details

Now you need to configure opportunity contact details displayed next to the list. The idea is when you select the name from the list, the details of the selected contact are displayed. 

The **List MasterDetail** page template which your page is based on has a preconfigured data view that listens to the list view.

Now you need to configure the widgets inside the data view to show all the attributes of the **OpportunityContact** entity. That is, you need to show all the details that an opportunity contact has, such as their title, name, job title, phone, and email. To do so, do the following:

1. Delete the **Save** and **Cancel** buttons inside the data view because you only want to display the data, not change it.
2. Double-click **Form title** (which is displayed as a data view heading), rename the **Caption** to *Opportunity Contact Details*, and click **OK**.
3. Navigate to **Toolbox** > **Widgets**, and search for **Radio buttons**.
4. Drag it inside the data view above the **First name** text box.
5. Double-click the radio button to open its properties.
6. Go to **Data Source** > **Attribute**. 
7. Select the **Title** attribute as the data source for the radio button. 
8. In the **Label** section, rename the **Label caption** to *Title*.

    {{< figure src="/attachments/refguide/modeling/pages/data-widgets/configure-list-and-details-on-one-page/title.png" width="500px" >}}

9. Now you need to configure the existing input widgets in the data view so that they display the details of an opportunity contact. 
10. Double-click the **First name** text box to open its properties.
11. Go to **Data Source** > **Attribute**. 
12. Select the **Name** attribute as the data source.
13. In the **Label** section, rename the **Label caption** to *Name*.
14. Refer to steps 10-13 to select the **Phone** attribute for the **Phonenumber** text box, the **Email** attribute for the **Email** text box, and the **DateCreated**  attribute for the **Birthday** text box.

    {{< figure src="/attachments/refguide/modeling/pages/data-widgets/configure-list-and-details-on-one-page/attributes-replaced.png" width="500px" >}}

15. Delete the **Bio** text widget in the data view, because it is a **Text area** widget that can only take an attribute of **String** data type. Now you want to add the **EstimatedValue** attribute, which is of **Integer** data type.
16. Navigate to **Toolbox** > **Widgets**, and search for **Text box**.
17. Drag it inside the data view below the **Date created** text box. 
18. Refer to steps 10-13 to select the **EstimatedValue** attribute for the new text box.
19. Now you still lack information on the contact's job title and status. 
20. To add the job title information:
    1. Navigate to **Toolbox** > **Widgets**, search for a **Text box**.
    2. Drag it inside the data view below the **Name** text box.
    3. Refer to steps 10-13 to select the **Jobtitle** attribute for the new text box.
21. To add the information on the opportunity contact's status:
    1. Navigate to **Toolbox** > **Widgets**, search for for **Radio Buttons**.
    2. Drag it inside the data view below the **Estimated Value** text box.
    3. Refer to steps 10-13 to select the **Status** attribute for the new radio button.

Congratulations! Now you have a page that displays a list of opportunity contacts and the details of the selected contact:

{{< figure src="/attachments/refguide/modeling/pages/data-widgets/configure-list-and-details-on-one-page/configured-page.png" width="650px" >}}

You can now preview your app and test your page.

## 6 Read More

* [Page](/refguide/page/)
* [Create Your First Two Overview and Detail Pages](/howto/front-end/create-your-first-two-overview-and-detail-pages/)
* [Creating a Basic Data Layer](/refguide/create-a-basic-data-layer/)
