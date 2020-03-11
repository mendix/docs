---
title: "Configure a List and View Its Details"
category: "Pages"
description: "Describes how to configure a list of items in Mendix Studio."
menu_order: 30
tags: ["studio", "pages", "list", "how to"]
---

## 1 Introduction 

This how-to explains how you can configure a list of items in Mendix Studio. 

**This how-to will teach you how to do the following:**

* Create a new page
* Configure a list view
* Configure a data view that listens to the list view
* Configure a data grid

The how-to describes the following use case: 

The HSE department of your company has the following inspection report:

![](attachments/page-editor-how-to-configure-list/report-example.png)

Your company has an application that is used by inspectors who travel to different companies and inspect whether these companies comply with safety regulations. They fill in their names, a company name, site location, data and time when the inspection was conducted, as well as full name of a superintendent who was present during the inspection. 

Inspectors also have a safety inspection checklist based on this checklist the inspector evaluates whether the company passed the inspection. They check the following:

* If emergency contact posters are displayed
* If safety training are held regularly
* If first-aid kits are available 
* If emergency exists are clear and not blocked

If any of the above requirements are not met, during the next inspection the inspector indicates the date when the safety violation was fixed. 

You would like to display details of an inspection report and a checklist for it on one page.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](domain-models).

* Make sure your domain model is configured the following way:

    <img src="attachments/page-editor-how-to-configure-list/domain-model.png" alt="Domain Model" style="zoom: 75%;" />

* Familiarize yourself with page terms and how to perform basic functions on pages. For more information, see [Pages](pages). 

## 3 Adding the Master Detail Page

You would like to open a page with inspection report details from your home page. Do the following:

1. Open your home page and navigate to **Toolbox** > **Widgets**.

2. Search for **Open Page** button and drag and drop it to the page.

	![Open Page](attachments/page-editor-how-to-configure-list/open-page-button.png)

3. Open the button properties and follow the steps below:

    1. Set **Page** as an on-click action and click the **Page** property.

    	![Button Properties](attachments/page-editor-how-to-configure-list/button-properties.png)

    2.  In the **Select Page** dialog box, click **New Page**.

    3.  In the **Create new page** dialog box, fill in the page title. 

    4. Select the page template by clicking **Master Detail** in the side bar and choose **Master Detail**:

    	<img src="attachments/page-editor-how-to-configure-list/create-new-page.png" alt="Create New Page" style="zoom:80%;" />

    5. Click **Create**.


The page is created. In the responsive (Desktop) view, a list is displayed on the left and list item details are displayed on the right:

![](attachments/page-editor-how-to-configure-list/master-details.png) 

## 4 Configuring the Report List

The page is created, now you need to configure it. You need to connect data to the list first. Do the following:

1. Select the list view and click the **Entity** option in its properties:

	![List View Properties](attachments/page-editor-how-to-configure-list/list-view-entity.png)

2. In the **Select Entity** dialog box, select *InspectionReport* and confirm your choice by clicking **Select**. Now the list is connected to the *InspectionReport* entity. 

3. To display the name of each report dynamically, do the following:

    1. Select the **Name** text in the list view and click the properties icon to quickly configure widget's properties:

		<img src="attachments/page-editor-how-to-configure-list/text-widget-list-view.png" alt="List View Text Widget" style="zoom:80%;" />

    2. In the dialog box, delete *Name* from the **Content** property and click **Add attribute**:

		<img src="attachments/page-editor-how-to-configure-list/quick-config.png" style="zoom:80%;" />

    3. In the **Select Attribute** dialog box, choose *CompanyName* and click **Select**. 

4. As the goal of the new page is to merely display data, delete the **New** button above the list view together with the container it is placed in.

Now the list view will display a list of reports by company name:

<img src="attachments/page-editor-how-to-configure-list/list-configured.png" alt="Configured List" style="zoom:80%;" /> 

## 5 Configuring Report Details

Now you need to configure report details displayed next to the list. The idea is when you select the company name from the list, the details of the latest inspection report for this company will be displayed. 

The Master Details page template which your page is based on has a preconfigured data view that listens to the list view. That means that the data view has access to the list view data. 

Now you need to configure widgets inside the data view to show attributes of the *InspectionReport* entity, or in other words to show all the details that a report has: a company name, site location, inspection date and time, inspector's name, etc. 

All the details that a report has need to be displayed. Do the following:

1. Delete an empty column and **Edit**, **Send Email**, and **Delete** buttons on the right as you will only  display data on this data, not change it.

2. Double-click the *User Details* text widget (which is displayed as a heading) and rename it to *Inspection Report Details*. 

3. Select the *Name* text box and click **Data Source** > **Attribute** in its properties. 

4. In the **Select Attribute** dialog box, choose *CompanyName* and click **Select**:

	<img src="attachments/page-editor-how-to-configure-list/select-attribute.png" alt="Select Attribute" style="zoom:80%;" />

5. Repeat steps 3 and 4 to replace *Phonenumber* with *Location*, *Email* with *Superintendent*, *Birthday* with *DateAndTime*, and *Bio* with *Inspector* attributes.  

13. To add information on whether the company *passed* the check, you need to add radio buttons with *Yes* and *No* options. Open **Toolbox** and search for radio buttons.

14. Drag and drop radio buttons inside the data view.

15. In the dialog box that appears next to it, click the **Attribute** property:

	<img src="attachments/page-editor-how-to-configure-list/radio-buttons-attribute.png" style="zoom:80%;" />

16. In the **Select Attribute** dialog box, choose *Passed* and click **Select**. 

Now the data view and widgets inside it show the details of the inspection report that is selected in the list:

 <img src="attachments/page-editor-how-to-configure-list/data-view-configured.png" alt="Configured Dat View" style="zoom:70%;" />

## 6 Showing Checklist Items

In the initial inspection report, checklist is a table where an inspector ticks **Yes** or **No** column: whether the company has posters with emergency contacts, whether it conducts safety trainings regularly, etc. 

To display checklist items in a table, you can add a data grid. It is important that you place it *inside* the data view: this way the data grid will access and display only checklist items associated with the current report rather then display all checklist items ever added to all reports. This means your data grid will get data over ChecklistItem_InspectionReport association.

Follow the steps below:

1. Open **Toolbox** > **Data Containers**.

2.  Drag and drop **Data Grid** *inside* the data view.

3. In the dialog box that appears next to the data grid, click **Entity**:

	<img src="attachments/page-editor-how-to-configure-list/data-grid-entity.png" style="zoom:75%;" />

4. To show only checklist items associated with the current inspection report, choose the **Checklist** entity over association (*ChecklistItem_InspectionReport/ChecklistItem*) in the **Select Entity** dialog box and click **Select**:

    <img src="attachments/page-editor-how-to-configure-list/data-grid-over-association.png" style="zoom:70%;" />
    
5. As the purpose of the page is to display information, you do not need the **Search** section in the data grid. Open data grid properties > **Search** section and disable the **Enable Search** toggle:

    ![Data Grid Search](attachments/page-editor-how-to-configure-list/data-grid-search.png)

6. You also do not need **Search**, **New**, **Edit**, and **Delete** buttons in the data grid. Open data grid properties > **Control Bar** section and disable the **Show Buttons** toggle:

	![Show Buttons Toggle](attachments/page-editor-how-to-configure-list/data-grid-show-buttons.png)

Now checklist items are displayed in a table below the inspection report details.

Congratulations! You have a page that displays a list of inspection reports, details of the selected report, and checklist items of this report:

![Configured Page](attachments/page-editor-how-to-configure-list/configured-page.png)

You can now preview your app and test your page. For more information on how to preview your page, see [Previewing & Publishing Your App](publishing-app).

You can also work on the page details, for example, delete an image from the list or replace it with a dynamic image to display a unique company logo next to its name. For more information on dynamic images, see [Images & Files](page-editor-widgets-images-and-files).