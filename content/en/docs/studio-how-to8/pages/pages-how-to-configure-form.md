---
title: "Configure a Form and Show Items Related to It"
url: /studio-how-to8/pages-how-to-configure-form/
category: "Pages"
description: "Describes how to configure a list of items in Mendix Studio."
weight: 10
tags: ["studio", "pages", "list", "how to"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

This how-to explains how you can configure a page with a form and how to show items related to this form on the same page. For example, to show a report and a checklist associated with this report. 

**This how-to will teach you how to do the following:**

* Configure a form (a data view)
* Show items related to this form in a table 

The how-to describes the following use case: 

The HSE department of your company has the following inspection report:

{{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/report-example.png" >}}

Your company has an application that is used by inspectors who travel to different companies and inspect whether these companies comply with safety regulations. They fill in their names, a company name, site location, date and time when the inspection was conducted, as well as full name of a superintendent who was present during the inspection. 

Inspectors also have a safety inspection *checklist*. Based on this checklist the inspector evaluates whether the company passed the inspection. They should check if requirements on the following *questions* are met:

* If emergency contact posters are displayed
* If safety training are held regularly
* If first-aid kits are available 
* If emergency exists are clear and not blocked

If any of the above requirements are not met, during the next inspection the inspector indicates the date when the safety violation was fixed. 

Your app already contains a list of all inspection reports:

{{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/inspection-report-list.png"   width="600"  >}}

You would like the **Details** button in this list to open a page showing the details of the selected report and a table with checklist questions related to this report. You also would like to be able to add new checklists to the table or edit existing ones. 

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with page terms and how to perform basic functions on pages. For more information, see [Pages](/studio8/page-editor/). 

* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](/studio8/domain-models/).

* Make sure your domain model is configured the following way:

    {{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/domain-model.png" alt="Domain Model"   width="200"  >}}

    * Make sure you have configured the **Question** attribute as the following enumeration:

		{{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/enumeration.png"   width="550"  >}}

* Make sure your app contains a page with inspection reports list and the **Details** button:

    {{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/inspection-report-list.png"   width="600"  >}}

## 3 Adding a Page with a Form

The **Details** button in the inspection report list should open a page with the inspection report details. To configure the page, do the following:

1. Click the **Details** button and go its properties.

2. Set **Page** as an on-click action and click the **Page** property.

	{{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/button-properties.png" alt="Button Properties"   width="250"  >}}

3.  In the **Select Page** dialog box, click **New Page**.

1.  In the **Create new page** dialog box, set the **Title** to **Reports_Details**, and set the **Layout** to **Atlas_Default**. 

2.  The **Pre-fill page contents based on the InspectionReport entity** option is on, so the page template (Forms) is selected automatically for you. Choose **Forms Vertical**:

	{{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/create-new-page.png" alt="Create New Page"   width="550"  >}}

3. Click **Create**.
	
3. The page with a form (a data view) is created. However, the data view's data source was automatically set to **List widget**, you need to change that. Select the data view and go to its properties.

1. Change the data source from **List widget** to **Context**.

2. Click the **Entity** property and set the **InspectionReport** entity for it:

      {{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/data-view-source.png"   width="250"  >}} 

The form on the page is configured: 
{{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/data-view-configured.png"   width="600"  >}}

## 4 Showing Checklist Questions

An inspector has a list of *questions* and indicates with **Yes** or **No** whether the company meets the requirements: whether the company has posters with emergency contacts, whether it conducts safety trainings regularly, etc. You would like to show a table with the checklist questions and their results below the inspection report: 

{{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/inspection-report-example.png"   width="550"  >}}

To display checklist details in a table, you can add a data grid. It is important that you place it *inside* the data view: this way the data grid will access and display only checklist items associated with the current report rather than display all checklist items ever added to all reports. This means your data grid will get data over an association, in this case called *Checklist_InspectionReport*.

Follow the steps below:

1. Open **Toolbox** > **Data Containers**.

2. Drag and drop **Data Grid** *inside* the data view:

    {{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/data-grid-inside-data-view.png"   width="550"  >}}

3. Go to the data grid properties and click **Entity**.  

4. To show only checklist items associated with the current inspection report, choose the **Checklist** entity over association (*Checklist_InspectionReport/Checklist*) in the **Select Entity** dialog box and click **Select**:

    {{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/data-grid-over-association.png"   width="450"  >}}

5. As the main purpose of the page is to display information, you do not need the **Search** section in the data grid. Open data grid properties > **Search** section and disable the **Enable Search** toggle:

    {{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/data-grid-search.png" alt="Data Grid Search" >}}

6. To be able to add new checklist items to the report, select the **New** button in the data grid and open its properties.

7. Set the **On Click Action** to **Page**. 

8. Enable **Create Object** property. The **Entity** property is automatically set to **Checklist**:

    {{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/new-button-properties.png"   width="250"  >}}

9. Click the **Page** property.

10. In the **Select Page** dialog box, click **New Page**.

11. In the **Create new page** dialog box, set the **Title** to **Checklist_Details** and the **Layout** to **PopupLayout**. 

12. The **Pre-fill page contents based on the Checklist entity** option is on, so the page template (*Forms*) is selected automatically for you. Choose **Forms Vertical**: 
	
	{{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/manage-checklist.png"   width="550"  >}}

13. Click **Create**.

14. A pop-up page where end-users can add new checklist items is created. Now you can select the same page as an on-click action for the **Edit** button to edit the selected checklist. Click the **Edit** button in the data grid and open its properties.

15. Set the **On Click Action** to **Page**.

16. Set the **Page** property to **Manage_Checklist**.

      {{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/edit-button-properties.png"   width="250"  >}}

Now checklist items are displayed in the table. You can add new checklist by clicking the **New** button in the table, and edit the selected checklist by clicking the **Edit** button.

{{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/data-grid-configured.png"   width="80%"  >}}

Congratulations! You have the page that displays details of the selected report and checklist items of this report:

{{< figure src="/attachments/studio-how-to8/pages/pages-how-to-configure-form/configured-page.png" alt="Configured Page"   width="80%"  >}}

You can now preview your app and test your page. For more information on how to preview your page, see [Previewing & Publishing Your App](/studio8/publishing-app/).

You can also work on the page details, for example, add a dynamic image to the inspection report list to display a unique company logo next to its name. For more information on dynamic images, see [Images & Files](/studio8/page-editor-widgets-images-and-files/). 

You can also add new functionality. For example, you can enable inspectors to attach images to their reports. For more information, see [How to Enable End-Users to Attach Images](/studio-how-to8/pages-how-to-attach-images/).