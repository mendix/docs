---
title: "Export to Excel"
url: /howto8/integration/using-the-excel-exporter/
weight: 6
---

## Introduction

Exporting items from a data grid in a Mendix application in Excel format via an **Export to Excel** button, is standard Mendix functionality. However, in instances where more customized Excel documents are required, your app can leverage Mendix Marketplace content to create custom Excel documents based on configurable templates. To achieve this, your app will require you to download and configure two Mendix Marketplace modules.

This how-to explains how to do the following:

* Download the Marketplace modules
* Configure your app to export the required data in the correct format

## Downloading the Required Marketplace Modules

In this section, you will learn how to download the necessary modules from the Mendix Marketplace. The modules required for this process are [Mx Model Reflection](/appstore/modules/model-reflection/) and [Excel Exporter](/appstore/modules/excel-exporter/).

{{% alert color="info" %}}
The Mx Model Reflection module enables your app to obtain information about its domain model (entities and attributes) and microflow definitions at runtime.
{{% /alert %}}

To download the modules, follow these steps:

1. Open the **Mendix Marketplace** from within Studio Pro.
2. Search for the keyword *reflection* and select **Mx Model reflection**:

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/18581166.png" class="no-border" >}}

3. Click **Download** to include the module in your app. It will be imported into **Project** > **App Store modules** in the **Project Explorer**.
4. Search for the keyword *Excel*, select **Excel exporter**, and download that module into your app:

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/exporter.png" class="no-border" >}}

{{% alert color="warning" %}}
Depending on the layout selected when the project was created, errors in Studio Pro may arise due to the new module's default layouts. To correct this, open each page that has an error and update the layout to the desired layout within the app.
{{% /alert %}}

## Adding Navigation Items to Allow Users to Configure Settings

In this section, you will learn how to add the required pages in the app's **Navigation** that are needed to configure both the Mx Model Reflection and the Excel Export templates that will be used within the app.

1. In Studio Pro, open **Project** > **Navigation**.
2. Add a new item to the Navigation to open the page **MxModelReflection.MxObjects_Overview**:

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/18581165.png" class="no-border" >}}

3. Add a new item to the Navigation to open the page **XLSReport.Excel_Document_Overview**:

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/18581909.png" class="no-border" >}}

4. Open **Project Security** and assign these two modules to the Administrator user role:

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/security.png" class="no-border" >}}

## Creating an Input Object Entity

In this section, you will create an entity which will be used to export the Excel workbook. This will be associated with the entity holding the data with which you want to fill the Excel spreadsheet. This how to will use a **Policy** entity to hold the data.

1. Open the domain model for your app and add an entity to serve as a "primary export" entity that is a specialization of **FileDocument**.
2. Create an association between the newly created entity and the entity (or entities) that you will want to serve as a base for the Excel export.

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/18581908.png" class="no-border" >}}

## Configuring Mx Model Reflection

In this section, you will learn how to run the Mx Model Reflection synchronization so the app can leverage the output from that process to create highly customizable Excel export templates.

To run the MxModelReflection sync follow these steps:

1. Run your app.
2. View the app.
3. Click the **MxReflection** navigation item to open the MxReflection overview page.
4. Select each module the app needs to synchronize and click **Click to refresh**.
5. Under **Synchronize all entities and microflows of checked modules on the left**, click **Click to refresh** .

## Creating Excel Export Templates

In this section, you will learn how to create a basic Excel export template within your app. This section will cover an overview of the various configuration items to enable you to start building the desired templates.

{{% alert color="info" %}}
The Excel Exporter has many options that allow the configurations to be as simple or complex as the user desires. This how-to will go over the basics to get you started, but building the desired template will vary according to your requirements.
{{% /alert %}}

### Configuring the Basic Template Setup

To set up a template, follow these steps:

1. Run your app.
2. View the app.
3. Click **Excel Exporter** to open the exporter overview page.
4. Click the **New** to create a new template.
5. Configure the **Filename** (without extension) to be the default file name when the template is used. This is the **Name** by which the template can be identified.

    {{% alert color="info" %}}The file name can always be changed when the template is used within a microflow.{{% /alert %}}

6. Configure the **Input Object** to be the file document entity that is associated to your entity to be exported.
7. Provide a **Description** for identifying and documenting what this template is for:

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/new-excel-template.png" class="no-border" >}}

8. Specify the **Date time export format** which defines how the dates and times should appear in the Excel file once exported.

### Creating the Worksheet Layout

To create the worksheet layout, follow these steps:

1. Under the **Worksheets** section for the template, select **New** to create a new sheet template:

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/18581907.png" class="no-border" >}}

2. Specify the **Name** that will be given to the sheet when the file is exported.
3. Configure the **Row Object** that you want to export and set the reference to the template input object (if input object is used). Each object of this entity type will be saved as a row in the worksheet.
4. Configure the **Start retrieved data at row** to set the ordinal number in which the data should be exported.

    {{% alert color="info" %}}This setting will possibly trim the result set being exported, as the export will go from this value to the end of the list of data{{% /alert %}}

5. Select if the export should export distinct only or allow duplicate data
6. Specify the **Column default width** and **Row default height** (or leave them as defaults).
7. Specify if the extract will **Use Static Data** or not:

    {{% alert color="info" %}}If static data is used, that will be configured below.{{% /alert %}}

8. Specify if the **Default text style** that will denote the pre-defined style to be applied to the exported data.
9. Specify if the **Default header text style** that will denote the pre-defined style to be applied to the header data:

    {{% alert color="info" %}}Specifying styles are addressed in the section below.{{% /alert %}}

### Configuring the Dynamic Column Data

To configure the dynamic column data, follow these steps:

1. On the **Column Data tab**, select **New** to create a new export column:

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/18581905.png" class="no-border" >}}

2. The **Column number** will be set automatically, but can be overwritten to the desired ordinal number.
3. Define a **Name** for the column and specify if that **Name** should be the **Column Header** as well when exported.
4. Specify the **Retrieve type** to identify if this column will be an attribute or a reference.
5. Specify the **Select attribute** to identify the attribute of the row object which will be stored in this column.
6. Specify if the column should result in an aggregate. Note that only types of decimal, integer, and long can be aggregated.

### Configuring Static Data in the Sheet

To configure the static data in the sheet, follow these steps:

1. Open the **Static Data tab** and select **New** to create a new export column.

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/18581903.png" class="no-border" >}}

2. Specify the **Row** and **Column** that the static value should be placed.
3. Enter a name for the cell in the **Name** field.
4. Specify the **Type** by selecting if the cell is **Static Text, Object Data, or Aggregate Function.** This example uses **Static Text** (which changes the **Name** field into **Excel Text** upon selection).
5. Specify the **Style** that should be applied to the cell.

### Configuring Custom Cell Formatting and Styling

To configure the custom formatting and styling for the cells, follow these steps:

1. Back on the main page for your new template, click **New** in the **Styles** section to create a new style that can be applied to any of the data in the Excel export:

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/18581900.png" class="no-border" >}}

2. Specify the properties of the style that will be applied to the cells. 
3. Click **Save** to make the style available for dynamic columns, static columns, and headers.

## Calling the Excel Export Module via Microflow

In this section, you will learn how to call the newly created Excel export template in your application. To retrieve the template and generate the document, follow these steps:

1. Create a microflow that either takes an inbound parameter of the object that needs to be exported, or retrieve that object into your microflow.
2. In the microflow, retrieve a single object which is the template you set up earlier to use for the export.

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/retrieve-template.png" class="no-border" >}}

3. In your microflow, call the **XLSReport.GenerateExcelDoc** Java action (available from the module's **JavaActions** folder) to pass the required objects to the module.

    {{< figure src="/attachments/howto8/integration/using-the-excel-exporter/java-action.png" class="no-border" >}}

4. In your microflow, download the resulting FileDocument object.

Your microflow should look similar to this:

{{< figure src="/attachments/howto8/integration/using-the-excel-exporter/microflow-for-generate.png" class="no-border" >}}

## Running the Microflow

There are two things missing now from the app:

* There is no data to download
* There is no way to run the microflow

See the sections below to add these missing things.

### Creating Data

To allow you to enter some data, you will need to generate some pages and then enter some data into them by following these steps:

1. Right-click on the **Policy** entity in the domain model and select **Generate overview pages…**.
2. Select **Policy** and click **OK**.
3. Link the generated overview page into the app, either through the home page or the app navigation.
4. Run the app and enter some data to create **Policy** objects.

### Running the microflow

To run the microflow you created above, you will need to create another microflow which is added to the navigation. This microflow should create a **PolicyDoc** object and associate it with existing **Policy** objects, making sure that all the associations are committed, and pass this PolicyDoc as the parameter to the microflow. This will export all the Policy objects you associated with the PolicyDoc.

{{% alert color="info" %}}
If you create a **PolicyDoc** with *no* associations to **Policy** objects, you will export an empty spreadsheet with the structure defined in the template.
{{% /alert %}}

## Read More

* [Import Excel Documents](/howto8/integration/importing-excel-documents/)
