---
title: "Data Importer"
url: /refguide/data-importer/
weight: 40
description: "Describes how to use Data Importer in Studio Pro to import data from Excel and CSV files."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}For Studio Pro version 11.14 and below, see the [Data Importer Extension](/appstore/modules/data-importer/).{{% /alert %}}

## Introduction

Data Importer lets you define how data from Excel and CSV files is interpreted in your Mendix app. You create a Data Importer document based on an input file.

The document can be used in two ways:

* With the **Import data from file** activity, to import the file into a generated non-persistable entity.
* As a source for an import mapping, which gives you more control over how imported data is mapped to Mendix objects.

## Creating a Data Importer Document

To create a Data Importer document, follow the steps below:

1. Right-click the module where you want to add the Data Importer document, then click **Add other** > **Data Importer**.
2. Enter a name for the document, then click **OK**.

The new Data Importer document opens.

{{% alert color="warning" %}}Run the app before you configure the file settings or preview data.{{% /alert %}}

## Previewing Data

After creating the Data Importer document, click **Upload File** in **Select file from local** to upload an Excel file (*.xls* or *.xlsx*) or CSV file (*.csv*). You can upload a file up to 10 MB size. 

An Excel workbook can have one or multiple sheets. Choose which sheet to import data from and configure the Excel file settings below:

* **Sheet Name** – the name of the worksheet to import. If the workbook has multiple worksheets, their names appear in the drop-down list.
* **Header Row No.** – row number of the file header; the default is 1.
* **Read Data From** – the row where data reading starts; the default is 2.

CSV import supports multiple combinations of delimiter, quote, and escape characters. It also supports files without a header row. Configure the following settings:

* **Delimiter (Separator)** – Supported delimiters are comma, semicolon, pipe, and tab. The default is comma.
* **Quote Characters** – Supported quote characters are single quotes and double quotes. The default is double quotes.
* **Add Header Row** – Specify whether to add a header row or whether the CSV file already includes one. By default, the file already includes a header row.
* **Escape Character** – Supported escape characters are backslash, single quotes, and double quotes. The default is double quotes.

Click **Preview Data** to view the data from the selected file.

Data Importer creates the data structure based on the first ten rows of the source file and displays it in the **Structure elements** section. If the file settings do not provide valid data, an error is displayed. To modify **Custom Name** or **Primitive Type**, click the edit icon ({{% icon name="pencil" %}}) in the bottom-right corner of the structure elements table.

{{% alert color="warning" %}}
Column names that do not adhere to Mendix naming conventions are autocorrected. For Number cell types, the target Mendix type is mapped to **Decimal** to support both integers and decimals.
{{% /alert %}}

You can now use the data importer document in the import mapping. For more information, see the [Using in an Import Mapping](#using-import-mapping) section below.

## Editing an Entity

Optionally, if you are not using an import mapping, you can create a mapping flow first by adjusting the entity structure in the **Entity Preview** section before creating the entity.

Click the edit icon ({{% icon name="pencil" %}}) in the bottom-right corner of **Entity Preview**. In the dialog box:

* Change the entity **Name**.
* Rename attributes: **Original Name** shows the column name from the input file, and **Attribute Name** is the new name you want to assign to that column.
* Change the data type of an attribute by selecting a value from the drop-down list.

In the **Entity Preview**, select which columns to import by selecting or clearing the checkbox next to each attribute.

Click **OK** to save your changes, or click **Cancel** to discard them.

{{% alert color="warning" %}}
**Enum** is not supported as a target data type. Runtime exceptions can occur if the input data cannot be converted to the target data type, for example because of invalid data, data truncation, or casting issues.
{{% /alert %}}

## Creating an Entity

After reviewing the entity structure in **Entity Preview**, click **Create Entity**. This creates the entity in your domain model and displays a confirmation message. The Data Importer document is then ready to use in [Import Data from File](/refguide/import-data-from-file/) to import data. For more details, see the [Using in the Import Data from File Activity](#using-in-the-activity) section below.

To change the source file at any point, click **Remove File**, upload a new file, and reconfigure the document. Note that removing the file clears all structure elements and configured mappings.

## Using a Data Importer Document

You can use a Data Importer document in two ways:

* For simple use cases, directly in the **Import data from file** activity to import data into non-persistable entities (NPEs).
* As the schema source for an import mapping, when you need more control over how data is mapped to Mendix objects.

### Using in the Import Data from File Activity {#using-in-the-activity}

After creating the entity, you can use the Data Importer document in the [Import Data from File](/refguide/import-data-from-file/) activity to import data into a list of NPEs.

You can extend this further. For example, you can convert the list of NPEs into persistable entities by providing a message definition, or use a loop to create and commit entities to your database individually.

### Using in an Import Mapping {#using-import-mapping}

After the document is created and its **Structure elements** are populated, you can use the Data Importer document in an import mapping by selecting **Excel/CSV Structure** as the **Schema source**. The structure elements defined in the Data Importer document become the schema that you map to your Mendix entities and attributes.

This approach gives you more control than the `Import data from file` activity. You can map imported data to existing persistable entities, find existing objects by key instead of always creating new ones, set associations between mapped objects, and apply conversion microflows to transform attribute values during import. For more information, see [Import Mappings](/refguide/import-mappings/).
