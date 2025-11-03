---
title: "Configuring a Form and Show Items Related to It"
linktitle: "Configure Form and Show Form Items"
url: /refguide9/configure-form/
description: "Describes how to configure a form in Mendix Studio Pro."
weight: 50
---

## Introduction 

This how-to explains how you can configure a page with a form and how to show items related to this form on the same page. For example, to show a page with a report and a checklist associated with this report and use the page for a [workflow user task](/refguide9/user-task/) afterwards. 

This how-to teaches you how to do the following:

* Configure a form (a data view)
* Show items related to this form in a table 

The how-to describes the following use case: 

The HSE department of your company has the following inspection report:

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/report-example.png" class="no-border" >}}

Your company has an application that is used by inspectors who travel to different companies and inspect whether these companies comply with safety regulations. They fill in their names, a company name, site location, date and time when the inspection was conducted, as well as full name of a superintendent who was present during the inspection. 

Inspectors also have a safety inspection *checklist*. Based on this checklist the inspector evaluates whether the company passed the inspection. They should check if requirements on the following *checks* are met:

* If emergency contact posters are displayed
* If safety training are held regularly
* If first-aid kits are available 
* If emergency exists are clear and not blocked

If any of the above requirements are not met, during the next inspection the inspector indicates the date when the safety violation was fixed. 

For example, your app already contains a list of all inspection reports:

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/inspection-report-list.jpg"   class="no-border" >}}

You would like the **Details** button in this list to open a page showing the details of the selected report and a table with checklist items related to this report. You also would like to be able to add new checklists to the table or edit existing ones. 

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with page terms and how to perform basic functions on pages. For more information, see [Page](/refguide9/page/). 
* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](/refguide9/domain-model/).
* Make sure your domain model is configured the following way:

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/domain-model.jpg" alt="Domain Model"   class="no-border" >}}

    * Make sure you have configured the **Type of check** attribute as the following enumeration:

        {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/enumeration.jpg"   width="550"  class="no-border" >}}

* Make sure your app contains a page with inspection reports list and the **Details** button:

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/inspection-report-list.jpg"   class="no-border" >}}

## Adding a Page with a Form

The **Details** button in the inspection report list should open a page with the inspection report details. To configure the page, do the following:

1. Click the **Details** button and go its properties.

2. In the **Events** section, set **Show a page** as an on-click event.

3. In the **Select web page** dialog box, click **New**.

4. In the **Create Page** dialog box, do the following:

    1. Set the **Page name** to **Reports_Details**. 
    2. Set the **Layout** to **Atlas_Default**.
    3. Choose **Forms** >**Form Vertical**.

        {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/create-new-page.jpg" alt="Create New Page"  class="no-border" >}}

5. Click **OK**.

The page with a form (a data view) is created. The **InspectionReport** parameter was automatically added to the page and the data view's data source is set to the **InspectionReport** entity: 

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/data-view-configured.jpg"   width="350"  class="no-border" >}}

## Showing Checklist Items

An inspector has a list of *checks* and indicates with **Yes** or **No** whether the company meets the requirements: whether the company has posters with emergency contacts, whether it conducts safety trainings regularly, etc. You would like to show a table with the checklist items and their results below the inspection report: 

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/configured-page.jpg" alt="Configured Page"   width="80%"  class="no-border" >}}

To display checklist details in a table, you can add a data grid. It is important that you place it *inside* the data view: this way the data grid will access and display only checklist items associated with the current report rather than display all checklist items ever added to all reports. This means your data grid will get data over an association, in this case called *Checklist_InspectionReport*.

Follow the steps below:

1. Open **Toolbox** > **Data Containers**.

1. Drag **Data grid** *inside* the data view.

1. Go to the data grid properties and click **Entity (path)**.  

1. To show only checklist items associated with the current inspection report, choose the **Checklist** entity over association (*Checklist_InspectionReport/Checklist*) in the **Select Entity** dialog box and click **Select**:

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/data-grid-over-association.jpg" width="400" class="no-border" >}}

1. Say **Yes** to the question *Do you want to automatically fill in the contents of the data grid?*.

1. As the main purpose of the page is to display information, you do not need to search the data grid. Open data grid properties and set the **Show search bar property** to **Never**.

1. To be able to add new checklist items to the report, select the **New** button in the data grid and open its properties.

1. Set the **On click event** property to **Create object**.

1. Set **Entity (path)** to **Checklist**.

1. Click the **On click page** property.

1. In the **Select web page** dialog box, click **New**.

1. In the **Create Page** dialog box, set the **page name** to **Manage_Checklist** and the **Layout** to **PopupLayout**. 

1. Page template (*Forms*) is selected automatically for you. Choose **Forms Vertical**: 

    {{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/manage-checklist.jpg"   width="550"  class="no-border" >}}

1. Click **OK**.

1. A pop-up page where end-users can add new checklist items is created. 

1. Now you can configure editing items. Click the **Edit** button in the data grid and open its properties.

1. Set the **On click event** property to **Show page**.

1. Click the **On click page** property.

1. In the **Select web page** dialog box, select **Manage_Checklist**.

Now checklist items are displayed in the table. You can add new checklist by clicking the **New** button in the table, and edit the selected checklist by clicking the **Edit** button.

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/data-grid-configured.jpg"   width="80%"  class="no-border" >}}

Congratulations! You have the page that displays details of the selected report and checklist items of this report:

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/configure-form/configured-page.jpg" alt="Configured Page"   width="80%"  class="no-border" >}}

There are many ways you can use this page in your app. For example, you can use it as a page for a user task in a [workflow](/refguide9/workflows/). 

You can now preview your app and test your page.
