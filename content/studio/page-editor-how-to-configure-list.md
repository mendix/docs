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

* 

The how-to describes the following use case: 

The HSE department of your company has the following inspection report:

![](attachments/page-editor-how-to-configure-list/safety-checklist.jpg)

Your company has an application that is used by superintendents who travel to different companies and inspect whether they comply with safety regulations. You would like to display details of an inspection report and a checklist for it on one page in this app.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* You domain model is configured the following way:

    <img src="attachments/page-editor-how-to-configure-list/domain-model.png" alt="Domain Model" style="zoom:80%;" />

## 3 Adding a Master Detail Page

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
	
5. The page is created, now you need to configure it. In the Desktop view, a list is displayed on the left and list item details are displayed on the right:

    ![](attachments/page-editor-how-to-configure-list/master-details.png) 

	You need to connect data to the list first. Do the following:

	1. Select the list view and click the **Entity** option in its properties:
	
		![List View Properties](attachments/page-editor-how-to-configure-list/list-view-entity.png)
	
	2. In the **Select Entity** dialog box, select *InspectionReport* and confirm your choice by clicking **Select**. 
	
	3. Delete the **New** button above the list view together with the container it is placed in as you are going only to display data on this page.
	
	4. Delete the empty column and **Edit**, **Send Email**, and **Delete** buttons on the right as you will only  display data on this data, not change it.
	
	5. Select the *User Details* text. 

## Read More

* [Widgets](page-editor-widgets)
