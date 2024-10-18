---
title: "Data Importer"
url: /appstore/modules/data-importer/
description: "Overview of the Data Importer in Studio Pro"
aliases:
    -  /appstore/modules/data-importer-extension/
---

## Introduction

The [Data Importer](https://marketplace.mendix.com/link/component/219833) allows you to import data from an Excel or comma-separated value (CSV) file. You can choose which sheet and columns to import, preview the data, and create a non-persistable entity (NPE) in your domain model that corresponds to your input. Then, you can import data into your app using the [Import Data from File](/refguide/import-data-from-file/) activity.

{{% alert color="info" %}}
The Data Importer is available in [Studio Pro 10.6](/releasenotes/studio-pro/10.6/) and above.
{{% /alert %}}

### Typical Use Cases

The Data Importer extension allows you to import data from Excel and CSV files directly into your app. You can create a Data Importer document to define which columns to import and an NPE to hold the imported data, along with source-to-target mapping. 

### Features {#features}

This extension supports following source files:

* Microsoft Excel (*.xls, .xlsx, .csv*)

### Limitations

This extension currently has the following limitations:

* The Excel column cell type is taken from the source file to determine the target attribute type; this cannot be changed during the data preview stage
* Source data can be mapped to one entity only; associations are not currently supported 
* You cannot map data to an existing NPE; you have to create a new entity as part of mapping
* Enumerations are not supported
* Multi-line headers and headers containing new-line characters (\r, \n, \r+\n) are not supported
* **String** is the default attribute type (*.csv* only)

### Prerequisites

* Studio Pro 10.6 or above

### Installation

Download the [Data Importer](https://marketplace.mendix.com/link/component/219833) from the Marketplace and [add it into your app](/appstore/use-content/).

## Data Importer Document

### Creating a Data Importer Document {#create-document}

To import data, right-click on the module and click **Add other** > **Data Importer**. Name the document, click **OK**, and the new Data Importer document opens. 

### Previewing Data {#preview-data}

Once you have [created the Data Importer document](#create-document), click **Select a local file** to import an Excel file (*.xls* or *.xslx*) or CSV file (*.csv*).

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/select-file-for-preview.png" class="no-border" >}}

#### Previewing Excel Data {#preview-data-excel}

Select or drop the file in the **Select Source File** window. You can choose which sheet to import data from and specify the header row and starting data row.

* **Sheet Name** – name of the worksheet from where data needs to be imported; if the Excel has multiple worksheets, the sheet name appears in the drop-down
* **Header Row No.** – row number of the file header; the default is 1
* **Read Data From Row No.** – starting line for reading data; the default is 2

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/select-sheet-and-header-data-row.png" class="no-border" >}}

Click **Preview Source Data & Entity** to view the data from the file. The first 10 rows from the source file are shown in the data preview section. The Sheet Name is used to create a NPE, but this can be edited. The column names correspond to the attribute names within the entity.

All the columns are selected (checked) by default. You can uncheck the columns you do not want to import. At the bottom of the table, you can see the target data type of the attribute, which is based on the cell type defined in the file's first data row. If any data types are incorrect, check the cell type of the first data row in Excel and adjust the cell type definition accordingly.

{{% alert color="warning" %}} Column names that do not adhere to Mendix naming conventions will be autocorrected. {{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/preview-data-and-entity.png" class="no-border" >}}

##### Header and data row numbering

The empty rows before the start of actual header and data row(s) are trimmed in the preview. This means the preview will be skewed if the provided header row value is >1. To avoid this, you can remove the empty rows yourself before uploading the file and assign the header row as 1, or make sure the rows before the header row contain some data and keep the header row value as its actual value. 

For example, the below file will result in a confusing preview if **Header Row No.** is 2 and **Read Data From** is 3. In this scenario, the first row (which is empty) should be removed from the input Excel file. Then, **Header Row No.** should be set as 1 and **Read Data From** as 2. Otherwise, a static test should be given in any column of first row to continue with **Header Row No.** as 2.

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/empty-row-before-header.png" class="no-border" >}}

#### Previewing CSV Data {#preview-data-csv}

Select or drop the CSV file in the **Select Source File** window. CSV import supports multiple combinations of separator/delimiter, quote, and escape characters. It also supports importing files where the header row is absent.

Specify the values for all four configurations (Delimiter, Quote Character, Escape Character, and Add Header Row):

* **Delimiter (Separator)** – supported delimiters are comma, semicolon, pipe, and tab; the default is comma
* **Quote Characters** – supported quote characters are single and double quotes; the default is double quotes
* **Escape Characters** – supported escape characters are backslash, single, and double quotes; the default is double quotes
* **Add Header Row** – specify if you want to add a header row or if the header row is already part of the CSV file; the default is the header row already included in file

Click **Preview Source Data & Entity** to view the data from the file. The first ten rows from the source file are shown in the data preview section. The file name is used to create a NPE, but this can be edited. The column names correspond to the attribute names within the entity.

All the columns are selected (checked) by default. You can uncheck the columns you do not want to import. At the bottom of the table, you can see the target data type of the attribute, which defaults to **String**.

{{% alert color="warning" %}} Column names that do not adhere to Mendix naming conventions will be autocorrected. {{% /alert %}}

For example, for the following source data (CSV), the separator is specified as Comma. The Quote and Escape Characters are set to Double Quote, and Header is included in the input file.

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/source-csv-data.png" class="no-border" >}}

The data preview and resulting entity would be as seen below:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/preview-csv-data-and-entity.png" class="no-border" >}}

### Editing an Entity {#edit-entity}

You can edit the entity in the **Entity Preview** section. The Data Importer supports various ways to:

* Edit the name of resultant entity
* Edit the name of the attribute (or attributes) of the entity
* Edit the data type of a given attribute

Click **Edit** at top-right corner of **Entity Preview**. This will render a pop-up window where you can change the name of the entity. You can also change the name of the attribute; *Original Name* is the name of the column from the input file and *Attribute Name* is the new name you can assign to this column. You can also change the data type of this attribute by selecting a relevant value from the drop-down as shown below.

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/edit-csv-entity.png" class="no-border" >}}

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

**Partial** - If the source data is valid and within range, it will be converted into the target data type.

{{% /alert %}}

{{% alert color="warning" %}}

* **Enum** is not supported as a target data type
* Runtime exceptions can occur if the input data cannot be converted into desired the target data type for various reasons (for example, invalid data, data truncation, casting, etc.)
{{% /alert %}}

### Creating an Entity {#create-entity}

When you are done editing the entity, click **Create Entity** > **OK**. This will create the entity in your domain model.

When the entity is created, you can view the mapping of the source columns to the target entity attributes. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/source-to-target-mapping.png" class="no-border" >}}

The Data Importer document creation is complete and can be used to [import data in a microflow](#import-microflow).

## Importing Data in a Microflow {#import-microflow}

Use the previously created Data Importer document to import data from your input file (or files) in a microflow. The example below shows how to import data from an Excel file. The same steps are applicable to import data from CSV files.

1. Create a new microflow and drag the **Import data from file** activity into it.

   {{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/custom-activity.png" class="no-border" >}}

2. Double-click the activity and in the **File** field, select an input file (Excel or CSV).
3. In the **Data importer document** field, click **Select** and choose the Data Importer document you want to use. Choose an appropriate Data Importer document based on the input file.

   {{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/choose-data-importer-template.png" class="no-border" >}}

4. After selecting the Data Importer document, the **Return type** and **Variable name** will auto-populate. You can also change the name of the output variable.
5. Click **OK**.

The custom activity is configured and you can import data from input files.

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/example-microflow.png" class="no-border" >}}

## Running Your App

To perform testing, you can do the following actions:

* Provide a placeholder to upload a file (System.FileDocument) on a page and a button to call the configured microflow
* Deploy your app locally and browse and upload an input file that resembles the file used to create Data Importer document
* View the message about x number of rows being imported into a list of entities

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-importer-extension/local-app-run.png" class="no-border" >}}

## Known Issues

### Unchecked Columns

It is not possible to rename an attribute or change a data type if there are unchecked columns. To avoid this issue, format your Excel or CSV file in a way that does not require you to uncheck any columns after inputting to Studio Pro. 
