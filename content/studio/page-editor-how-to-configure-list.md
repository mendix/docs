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
* Configure a data view that listens to a list view
* Configure a data grid

The how-to describes the following use case: 

The HSE department of your company has the following inspection report:

![](attachments/page-editor-how-to-configure-list/report-example.png)

Your company has an application that is used by inspectors who travel to different companies and inspect whether these companies comply with safety regulations. They fill in a company name, jobsite location, data and time when the inspection was conducted, as well as full name of a superintendent who was present during the inspection and their own names. 

Inspectors also have a safety inspection checklist based on this checklist the inspector evaluates whether the company passed the inspection. They check the following:

* If emergency contact posters are displayed
* If safety training are held regularly
* If first-aid kits are available 
* If emergency exists are clear and not blocked

If any of the above requirements are not met, during the next inspection the inspector indicates the date when the safety violation was fixed. 

You would like to display details of an inspection report and a checklist for it on one page.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* You domain model is configured the following way:

    <img src="attachments/page-editor-how-to-configure-list/domain-model.png" alt="Domain Model" style="zoom: 67%;" />

## 3 Adding the Master Detail Page

You would like to open a page with inspection report details from your home page. Do the following:

1. Open your home page and navigate to **Toolbox** > **Building Blocks**.

2. Search for **Card Action** and drag and drop it to the page.

	![Card Action](attachments/page-editor-how-to-configure-list/card-action.png)

3. Select the button from the card to configure it open a new page.

4. Open the button properties and follow the steps below:

    1. Set **Page** as an on-click action and click the **Page** property.
    
		![Button Properties](attachments/page-editor-how-to-configure-list/button-properties.png)
    
    2.  In the **Select Page** dialog box, click **New Page** .
    
    3.  In the **Create new page** dialog box, fill in the page title. 
    
    4. Select the page template by clicking **Master Detail** in the side bar and selecting **Master Detail**:
    
		<img src="attachments/page-editor-how-to-configure-list/create-new-page.png" alt="Create New Page" style="zoom:80%;" />

	5. Click **Create**.

The page is created. In the Desktop view, a list is displayed on the left and list item details are displayed on the right:

![](attachments/page-editor-how-to-configure-list/master-details.png) 

## Configuring a List of Reports

The page is created, now you need to configure it.  You need to connect data to the list first. Do the following:

1. Select the list view and click the **Entity** option in its properties:

	![List View Properties](attachments/page-editor-how-to-configure-list/list-view-entity.png)

2. In the **Select Entity** dialog box, select *InspectionReport* and confirm your choice by clicking **Select**. Now the list is connected to the *InspectionReport* data. 

3. To display the name of each report dynamically, do the following:

    1. Select the **Name** text widget in the list view and click the properties icon to quickly configure its properties:

		<img src="attachments/page-editor-how-to-configure-list/text-widget-list-view.png" alt="List View Text Widget" style="zoom:67%;" />

    2. In the dialog box, delete *Name* from the **Content** property and click **Add attribute**:

		<img src="attachments/page-editor-how-to-configure-list/quick-config.png" style="zoom:80%;" />

    3. In the **Select Attribute** dialog box, choose *CompanyName* and click **Select**. 

4. Delete the **New** button above the list view together with the container it is placed in as you are going only to display data on this page.

Now the list view will display a list with company names. 

## Configuring Report Details

Now you need to configure report details displayed next to the list. The idea is when you select the company name from the list, the details of the latest inspection report for this company will be displayed. 

As you chose the Master Details page template in steps above, it has preconfigured data view that listens to the list view. That means that the data view has access to the list view data. Now you need to configure text boxes inside the data view to show attributes of the *InspectionReport* entity, that is to show a company name, site location, date and time of the inspection, inspector's name, etc. 

All the details that a report has need to be displayed. Do the following:

1. Delete the empty column and **Edit**, **Send Email**, and **Delete** buttons on the right as you will only  display data on this data, not change it.

2. Select the *User Details* text widget and change it to *Inspection Report Details* by double-clicking the text. 

3. Select the *Name* text box and click **Data Source** > **Attribute** in its properties. 

4. In the **Select Attribute** dialog box, choose *CompanyName* and click **Select**:

	<img src="attachments/page-editor-how-to-configure-list/select-attribute.png" alt="Select Attribute" style="zoom:80%;" />

5. Select the *Phonenumber* text box and click **Data Source** > **Attribute** in its properties.

6. In the **Select Attribute** dialog box, choose *Location* and click **Select**. 

7. Select the *Email* text box and click **Data Source** > **Attribute** in its properties.

8. In the **Select Attribute** dialog box, choose *Superintendent* and click **Select**. 

9. Select the *Birthday* date picker and click **Data Source** > **Attribute** in its properties.

10. In the **Select Attribute** dialog box, choose *DateAndTime* and click **Select**. 

11. Select the *Bio* text box and click **Data Source** > **Attribute** in its properties.

12. In the **Select Attribute** dialog box, choose *Inspector* and click **Select**. 

13. To add information on whether the company passed the check, you need to add radio buttons with *Yes* and *No* options. Open **Toolbox** and search for radio buttons:

    ![Radio Buttons](attachments/page-editor-how-to-configure-list/radio-buttons.png)

14. Drag and drop radio buttons inside the data view.

15. In the dialog box that appears next to it, click the **Attribute** property:

	<img src="attachments/page-editor-how-to-configure-list/radio-buttons-attribute.png" style="zoom:70%;" />

16. In the **Select Attribute** dialog box, choose *Passed* and click **Select**. 

Now the data view and widgets inside it show the details of the inspection report that is selected in the list:

 <img src="attachments/page-editor-how-to-configure-list/data-view-configured.png" alt="Configured Dat View" style="zoom:70%;" />

## Showing Checklist Items

1. Open **Toolbox** > **Data Containers**.

2.  Drag and drop **Data Grid** *inside* the data view.

3. In the dialog box that appears next to the data grid, click **Entity**:

	<img src="attachments/page-editor-how-to-configure-list/data-grid-entity.png" style="zoom:70%;" />

4. To show only checklist items associated with the current inspection report, choose entity Checklist over association (*ChecklistItem_InspectionReport/ChecklistItem*) in the **Select Entity** dialog box and click **Select**:

    <img src="attachments/page-editor-how-to-configure-list/data-grid-over-association.png" style="zoom:70%;" />
    
5. As the purpose of the page is to display information, you do not need the Search section in the data grid. Open data grid properties > **Search** section and disable the **Enable Search** toggle:

    ![Data Grid Search](attachments/page-editor-how-to-configure-list/data-grid-search.png)

6. You also do not need **Search**, **New**, **Edit**, and **Delete** buttons in the data grid. Open data grid properties > **Control Bar** section and disable the **Show Buttons** toggle:

	![Show Buttons Toggle](attachments/page-editor-how-to-configure-list/data-grid-show-buttons.png)

Now checklist items are displayed in a table below the inspection details.

Congratulations! You have a page that displayed a list of inspection reports, details of the selected report and checklist items of this report.	 