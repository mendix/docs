---
title: "Use the Excel Exporter"
category: "Integration"
menu_order: 6
tags: ["excel", "excel export", "excel exporter", "integration"]
---

## 1 Introduction

It is standard Mendix functionality to export items from a data grid in a Mendix application to the Excel format via an **Export to Excel** button. However, in instances where more customized Excel documents are required, an app can leverage Mendix App Store content to create custom Excel documents based off of configurable templates. To achieve this, your app will require two Mendix App Store modules and the subsequent configuration of the documents.

## 2 Downloading the Required App Store Modules

In this section, you will learn how to download the necessary modules from the Mendix App Store. In just a few clicks, the modules will be imported into your app project. The modules required for this process are [Mx Model Reflection](/appstore/modules/model-reflection) and [Excel Exporter](/appstore/modules/excel-exporter).

{{% alert type="info" %}}
The Mx Model Reflection module is used in most Mendix apps. The purpose of this module is to enable the app to reflect into the domain model (entities and attributes) and microflow definitions at runtime.
{{% /alert %}}

To download the modules, follow these steps:

1. Open the **Mendix App Store** from within Studio Pro.
2.  Search for the keyword *reflection* and select **Mx Model reflection**:

    ![](attachments/18448688/18581166.png)

3. Click **Download** to include the module in your app project. It will be imported into **Project** > **App Store modules** in the **Project Explorer**.
4. Search for the keyword *Excel*, select **Excel exporter**, and download that module into your app project:

	![](attachments/18448688/exporter.png)
	

{{% alert type="warning" %}}
Depending on the layout selected when the project was created, errors in Studio Pro may arise due to the new module's default layouts. To correct this, open each page that has an error and update the layout to the desired layout within the app.
{{% /alert %}}

## 3 Adding Navigation Items to Allow Users to Configure Settings

In this section of the how-to, you will learn how to add the required pages in the app project's **Navigation** that are needed to configure both the Mx Model Reflection and the Excel Export templates that will be used within the app.

1.  In Studio Pro, open **Project** > **Navigation**.
2.  Add a new item to the Navigation to access **MxModelReflection.MxObjects_Overview**:

    ![](attachments/18448688/18581165.png)

3.  Add a new item to the Navigation to access **XLSReport.Excel_Document_Overview**:

    ![](attachments/18448732/18581909.png)

4.  Open **Project Security** and assign these two modules to the Administrator user role:

	![](attachments/18448688/security.png)

## 4 Configuring Mx Model Reflection

In this section, you will learn how to run the Mx Model Reflection synchronization so the app can leverage the output from that process to create highly customizable Excel Export templates.

To run the MxModelReflection sync, run your app, view it, and follow these steps:

1.  Right-click the **MxReflection** navigation item to open the MxReflection overview page.
2.  Select each module the app needs to synchronize and click **Click to refresh**.
3.  Under **Synchronize all entities and microflows of checked modules on the left**, click **Click to refresh** .

## 5 Creating Excel Export Templates

In this section, you will learn how to create a basic Excel export template within your app. This section will cover an overview of the various configuration items to enable you to start building the desired templates.

{{% alert type="info" %}}
The Excel Exporter has many moving pieces that allow the configurations to be as simple or complex as the user desires. This how-to will go over the basics to get you started, but building the desired template will vary according to configuration options.		
{{% /alert %}}

### 5.1 Creating an Input Object Entity

1.  In Studio Pro, open the domain model for your app project and add an entity to serve as a "master export" entity that is of specialization **FileDocument.**
2.  Create an association between the newly created entity and the entity(ies) that you will want to serve as a base for the Excel export.

    ![](attachments/18448732/18581908.png)

### 5.2 Configuring the Basic Template Setup

To set up a template, run your app, view it, and follow these steps:

1.  Click **Excel Exporter** to open the exporter overview page.
2.  Click the **New** to create a new template.
3.  Configure the **Filename** (without extension) to be the default file name when the template is used.

	{{% alert type="info" %}}The file name can always be changed when the template is used within a microflow.
	{{% /alert %}}

4.  Configure the **Input Object** to be the file document entity that is associated to your entity to be exported.
5.  Provide a **Description** for identifying and documenting what this exact template is used for.
6.  Specify the **Date time export format** for how the dates and times should appear in the Excel file once exported.

### 5.3 Creating the Worksheet Layout

1.  Under the **Worksheets** section for the template, select **New** to create a new sheet template:

    ![](attachments/18448732/18581907.png)

2.  Specify the **Name** that will be given to the sheet when the file is exported.
3.  Configure the **Row Object** that you want to export and set the reference to the template input object (if input object is used).
4.  Configure the **Start retrieved data at row** to set the ordinal number in which the data should be exported.

	{{% alert type="info" %}}This setting will possibly trim the result set being exported, as the export will go from this value to the end of the list of data
	{{% /alert %}}

5.  Select if the export should export distinct only or allow duplicate data
6.  Specify the **Column default width** and **Row default height** (or leave them as defaults).
7.  Specify if the extract will **Use Static Data** or not.

	{{% alert type="info" %}}If static data is used, that will be configured below.
	{{% /alert %}}

8.  Specify if the **Default text style** that will denote the pre-defined style to be applied to the exported data.
9.  Specify if the **Default header text style** that will denote the pre-defined style to be applied to the header data.

	{{% alert type="info" %}}Specifying styles are addressed in the section below.
	{{% /alert %}}

### 5.4 Configuring the Dynamic Column Data

1. On the **Column Data tab**, select **New** to create a new export column:

	![](attachments/18448732/18581905.png)

2. The **Column number** will be set automatically, but can be overwritten to the desired ordinal number.
3. Define a **Name** for the column and specify if that **Name** should be the **Column Header** as well when exported.
4. Specify the **Retrieve type** to identify if this column will be an attribute or a reference.
5. Specify the **Select attribute** to identify the exact attribute on the row entity in which this column corresponds to.
6. Specify if the column should result in an aggregate. Note that  only types of decimal, integer, and long can be aggregated.

### 5.5 Configuring Static Data in the Sheet

1.  Open the **Static Data tab** and select **New** to create a new export column.

	![](attachments/18448732/18581903.png)

2.  Specify the **Row** and **Column** that the static value should be placed.
3.  Enter a name for the cell in the **Name** field.
4.  Specify the **Type** by selecting if the cell is **Static Text, Object Data, or Aggregate Function.** This example uses **Static Text** (which changes the **Name** field into **Excel Text** upon selection).
5.  Specify the **Style** that should be applied to the cell.

### 5.6 Configuring Custom Cell Formatting & Styling

1.  Back on the main page for your new template, click **New** in the **Styles** section to create a new style that can be applied to any of the data in the Excel export:

	![](attachments/18448732/18581900.png)

3.  Specify the properties of the style that will be applied to the cells. 
4.  Click **Save** to make the style available for dynamic columns, static columns, and headers.

## 6 Calling the Excel Export Module via Microflow

In this section, you will learn how to call the newly created Excel export template in your application. 

To retrieve the template and generate the document, follow these steps:

1. Create a microflow that either takes an inbound parameter of the object that needs to be exported, or retrieve that object into your microflow.

2.  In your microflow, call the **XLSReport.GenerateExcelDoc** Java action (available from the module's **JavaActions** folder) to pass the required objects to the module.

	![](attachments/18448732/java-action.png)

3.  In your microflow, download the resulting FileDocument object.

Your microflow should look similar to this:

![](attachments/18448732/18581902.png)

## 7 Read More

* [Import Excel Documents](importing-excel-documents)

