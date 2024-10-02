---
title: "Use the Data Importer"
url: /howto/integration/use-the-data-importer/
weight: 21
description: "Overview of the Data Importer in Studio Pro"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Data is constantly exchanged between various systems inside and outside an organization. The most commonly used file formats for data exchange are Microsoft Excel and comma-separated value (CSV). These files contain data in a tabular grid of rows, columns, and delimiter-separated values.

This how-to teaches you to do the following:

* Create a Data Importer document using a sample representative file (Excel and CSV)
* Create a (non-persistable) entity in your domain model
* Import data using the custom **Import data from file** activity

## Prerequisites

Download the [Data Importer extension](https://marketplace.mendix.com/link/component/219833) from the Marketplace and [add it into your app](/appstore/use-content/#install). This module also requires:

* Studio Pro [10.4](/releasenotes/studio-pro/10.4/) or above
* A file document (for more information, see [File Manager](/refguide/file-manager/))

## Data Importer Document

The Data Importer extension allows you to import data from Excel and CSV files directly into your app. Create a Data Importer document to define which columns to import and a non-persistable entity (NPE) to hold the imported data, along with source-to-target mapping. During the Data Importer document creation, you can preview the data and choose which columns you want to import and edit the name of resulting entity.

The Data Importer document can be used along with the [Import data from file](/refguide/import-data-from-file/) custom activity. Use this activity in a microflow to import data from an Excel or CSV file.

### Creating a Data Importer Document

Right-click the module you want to add the Data Importer document to and click **Add other** > **Data Importer**.

{{< figure src="/attachments/howto/integration/use-the-data-importer/data-importer-menu.png" class="no-border" >}}

Name the document, then click **OK**, and the new Data Importer document opens.

### Previewing Excel Data {#preview-excel-data}

Click **Select a local file** to import an Excel file (*.xls* or *.xslx*).

{{< figure src="/attachments/howto/integration/use-the-data-importer/select-file-for-preview.png" class="no-border" >}}

Select or drop the file in the **Select Source File** field. An Excel workbook can have single or multiple sheets; you can choose which sheet to import data from and specify the header row and starting data row.

* **Sheet Name** – name of the worksheet from where data needs to be imported; if the Excel has multiple worksheets, their names will appear in the dropdown
* **Header Row No.** – row number of the file header; the default is 1
* **Read Data From Row No.** – starting line for reading data; the default is 2

{{< figure src="/attachments/howto/integration/use-the-data-importer/select-sheet-and-header-data-row.png" class="no-border" >}}

Click **Preview Source Data & Entity** to view the data from the file. The first 10 data rows from the source file are shown in the data preview section. If there are less than 10 data rows in the sample file, only the available rows are shown. The column names correspond to the attribute name within the entity, and the sheet name is used to define the entity.

All the columns are automatically selected (checked) for import. You can uncheck the columns you do not want to use. At the bottom of the table, you see the target data type of the attribute, which is based on the cell-type defined in the Excel file's first data row. If any data types are incorrect, check the cell-type of the first data row and adjust the definition accordingly.

{{% alert color="warning" %}} Column names that do not adhere to Mendix naming conventions will be autocorrected. For **Number** cell-types, the target Mendix type is mapped to **Decimal** to accommodate to integers and decimals. {{% /alert %}}

{{< figure src="/attachments/howto/integration/use-the-data-importer/preview-data-and-entity.png" class="no-border" >}}

### Previewing CSV Data {#preview-csv-data}

Select or drop the CSV file in the **Select Source File** window. CSV import supports multiple combinations of separator/delimiter, quote, and escape characters. It also supports importing files where the header row is absent.

Specify the values for all four configurations (Delimiter, Quote Character, Escape Character, and Add Header Row):

* **Delimiter (Separator)** – current supported delimiters are comma, semicolon, pipe, and tab; the default is comma
* **Quote Characters** – current supported quote characters are single and double quotes; the default is double quotes
* **Escape Characters** – current supported escape characters are backslash, single, and double quotes; the default is double quotes
* **Add Header Row** – specify if you want to add a header row or if the header row is already part of the CSV file; the default is the header row already included in file

Click **Preview Source Data & Entity** to view the data from the file. The first ten rows from the source file are shown in the data preview section. The file name is used to define the entity (NPE), but this can be edited. The column names correspond to the attribute name within the entity.

All the columns are selected (checked) by default. You can uncheck the columns you do not want to import. At the bottom of the table, you can see the target data type of the attribute, which defaults to **String**.

{{% alert color="warning" %}} Column names that do not adhere to Mendix naming conventions will be autocorrected. {{% /alert %}}

For example, for the following source data (CSV), the separator is specified as Comma and Quote, and the Escape Character is Double Quote and Header. This is already part of the input file.

{{< figure src="/attachments/howto/integration/use-the-data-importer/source-csv-data.png" class="no-border" >}}

The data preview and resulting entity are seen below:

{{< figure src="/attachments/howto/integration/use-the-data-importer/preview-csv-data-and-entity.png" class="no-border" >}}

### Editing an Entity {#edit-entity}

You can edit the entity in the **Entity Preview** section. The Data Importer supports various ways to:

* Edit the name of resultant entity
* Edit the name of the attribute (or attributes) of the entity
* Edit the data type of a given attribute

Click **Edit** at top-right corner of **Entity Preview**. This will render a pop-up window where you can change the name of the entity. You can also change the name of the attribute; *Original Name* is the name of the column from input file and *Attribute Name* will be the new name that you want to assign to this column. You can also change the data type of this attribute by selecting a relevant value from the drop-down as shown below.

{{< figure src="/attachments/howto/integration/use-the-data-importer/edit-csv-entity.png" class="no-border" >}}

Once you are satisfied with the changes, click **OK** to save or **Cancel** to discard your changes.

{{% alert color="info" %}}
The **Edit Entity** feature is useful for CSV import, as all the columns of a CSV file are marked as String by default, so you can change the data type if necessary. The following table shows the source-to-target data conversion matrix:

Input CSV File

| Source Type | Target- String | Target- Int | Target- Long | Target- Decimal | Target- Boolean | Target- DateTime |
| :-------- | :------- | :-------- | :------- | :-------- | :------- | :-------- |
| String  | Yes    | Partial    | Partial    | Partial    | Partial    | No    |

Input Excel File

| Source Type | Target- String | Target- Int | Target- Long | Target- Decimal | Target- Boolean | Target- DateTime |
| :-------- | :------- | :-------- | :------- | :-------- | :------- | :-------- |
| String  | Yes    | Partial    | Partial    | Partial    | Partial    | No    |
| Boolean  | Yes    | No    | No    | No    | Yes    | No    |
| Decimal  | Yes    | Partial    | Partial    | Yes    | No    | No    |
| DateTime  | Yes    | No    | No    | No    | No    | Yes    |

**Partial** - If source data is valid and within range, it will be converted into the target data type.

{{% /alert %}}

{{% alert color="warning" %}}

* **Enum** is not supported as a target data type
* Runtime exceptions can occur if the input data cannot be converted into desired the target data type for various reasons (for example, invalid data, data truncation, casting etc.)
{{% /alert %}}

### Creating an Entity {#create-entity}

When you are done editing the entity, click **Create Entity** > **OK**. This will create the entity in your domain model. You will also see a confirmation message that an entity has been created in the domain model and is ready to use.

When the entity is created, you can view the mapping of the source columns to the target entity attributes. 

{{< figure src="/attachments/howto/integration/use-the-data-importer/source-to-target-mapping.png" class="no-border" >}}

The Data Importer document creation is complete and can be used to import data in a microflow.

## Building your App {#build-data-importer-app}

The newly-created Data Importer document allows you to periodically import data from an Excel or CSV file that is generated by another app or system.

### Custom Activity {#Import-data-from-file}

The **Import data from file** activity is found under **Integration activities** in the **Toolbox**. Double-click to view its properties:

{{< figure src="/attachments/howto/integration/use-the-data-importer/custom-activity-params.png" class="no-border" >}}

The **Input** section includes:

* **File** – name of the file from which you want to import data
* **Data Importer document** – the Data Importer document created at the end of the design time flow

The **Output** section includes:

* **Return Type** – set to the list of NPEs defined in the Data Importer document
* **Variable name** – auto-populated to the **EntityName** list

### Build the Pages

The **Import data from file** custom activity needs an input file to import data from. The example below builds a page where a `System.FileDocument` is uploaded and fed to the custom activity.

1. Open the home page and add a button and name it *Upload Customer Data*.
2. Double-click the button and in the **Events** field under the **On click** drop-down, select **Create object** to create a `System.FileDocument` entity.
3. Pass the control to a new page (**UploadCustomerData**) where the file is uploaded.

    {{< figure src="/attachments/howto/integration/use-the-data-importer/home-page-button.png" class="no-border" >}}

4. On the **UploadCustomerData** page, include a data view for the *FileDocument* and include a 'File Manager' to assist with a file upload.

    {{< figure src="/attachments/howto/integration/use-the-data-importer/data-view-file-manager.png" class="no-border" >}}

5. Open the **Toolbox** and add a **Call microflow button**. 

6. Click **New** and name the microflow *Import Customer Data*. You also see **FileDocument** in the parameters section; make sure this box is checked to include it as a parameter and click **OK**.

{{< figure src="/attachments/howto/integration/use-the-data-importer/add-parameter.png" class="no-border" >}}

### Configuring the Import data from file Activity in a Microflow 

{{% alert color="info" %}}
The steps below are shown using an Excel input file with its corresponding Data Importer document. You can substitute an Excel document with a CSV document to import data from CSV input files.
{{% /alert %}}

1. In the created microflow, drag the **Import data from file** activity into it. You can find this activity in the **Toolbox** under **Integration activities**.

   {{< figure src="/attachments/howto/integration/use-the-data-importer/integration-activity.png" class="no-border" >}}

2. When the **Import data from file** activity is added into microflow, you see three errors in the console:

   {{< figure src="/attachments/howto/integration/use-the-data-importer/custom-activity.png" class="no-border" >}}

    To address these errors, double-click the activity and in the **File** field, choose the input file that is passed from the file upload page to this microflow as a parameter.

3. In the **Data Importer document** field, click **Select** and choose the Data Importer document you want to use.

    {{< figure src="/attachments/howto/integration/use-the-data-importer/choose-data-importer-template.png" class="no-border" >}}

    After selecting the Data Importer document, the **Return type** and **Variable name** auto-populates. You can change the name of the output variable if you wish.

4. Click **OK**. The custom activity is configured and all the errors will resolve.

    {{< figure src="/attachments/howto/integration/use-the-data-importer/configured-custom-activity.png" class="no-border" >}}

5. Add an **Aggregate list** activity and configure it to count the size of the 'CustomerList', which is returned from the previous activity.

   {{< figure src="/attachments/howto/integration/use-the-data-importer/aggregate-list.png" class="no-border" >}}

6. Configure a **Show message** activity. You can use a template message and a parameter, such as in the example below.

   {{< figure src="/attachments/howto/integration/use-the-data-importer/show-message-with-list-size.png" class="no-border" >}}

7. Set '$CustomerList' as the return value from the **Import data from file** activity to be used later. Your completed microflow should look like the image below.

   {{< figure src="/attachments/howto/integration/use-the-data-importer/example-microflow.png" class="no-border" >}}

8. Deploy your app locally. Browse and upload an input file, which is similar to the file that was used as a template while creating Data Importer document.
9. Check that you see a message that states **Imported xx rows from input file into a list of NPEs**.

   {{< figure src="/attachments/howto/integration/use-the-data-importer/local-app-run.png" class="no-border" >}}

You have successfully configured and used the Data Importer extension. You can extend this as per your requirements. For example, you can convert the list of NPEs into persistable entities by providing a message definition, or use each loop construct and individually create and commit entities into your database.
