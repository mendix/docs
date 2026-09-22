---
title: "Data Importer"
url: /refguide/data-importer/
weight: 40
description: "Describes how to use Data Importer in Studio Pro to import data from Excel and CSV files"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Data Importer lets you define how data from Excel and CSV files is interpreted in your Mendix app. You create a Data Importer document based on a representative input file.

The document can be used in two ways:

* With **Import Data from File** activity, to import the file into a generated non-persistable entity.
* As a source for an Import Mapping, which gives you more control over how imported data is mapped to Mendix objects.

## Creating a Data Importer Document

To create a Data Importer document, follow the steps below:

1. Right-click the module where you want to add the Data Importer document, then click **Add other** > **Data Importer**.
2. Enter a name for the document, then click **OK**

The new Data Importer document opens.

{{% alert color="warning" %}}Run the app before you configure the file settings or preview data.{{% /alert %}}

## Previewing Data

Once you have created the Data Importer document, click **Upload File** in **Select file from local** to import an Excel file (.xls or .xslx) or CSV file (.csv).

### Previewing Excel

Upload an Excel file (.xls or .xslx) as source file. An Excel workbook can have single or multiple sheets; you can choose which sheet to import data from and specify the details below to configfure the file settings:

* **Sheet Name** – name of the worksheet to import. If the workbook has multiple worksheets, their names appear in the drop-down list.
* **Header Row No.** – row number of the file header; the default is *1*
* **Read Data From** – a row where data reading starts; the default is *2*

Click **Preview Data** to view the data from the selected file.

Data Importer creates the data structure based on the first ten rows of the source file and displays it in the **Structure elements** section. If the file settings do not provide valid data, an error is displayed. Click the edit icon ({{% icon name="pencil" %}}) at bottom-right corner of the structure elements table to modify **Custom Name** or **Primitive Type**.

{{% alert color="warning" %}}
Column names that do not adhere to Mendix naming conventions are autocorrected. For Number cell-types, the target Mendix type is mapped to **Decimal** to support both integers and decimals.
{{% /alert %}}

### Previewing CSV

Select or drop the CSV file as a source file. CSV import supports multiple combinations of separator or delimiter, quote, and escape characters. It also supports files without a header row.

Configure the following settings:

* **Delimiter (Separator)** – Supported delimiters are comma, semicolon, pipe, and tab. The default is comma.
* **Quote Characters** – Supported quote characters are single and double quotes. The default is double quotes.
* **Add Header Row** – Specify whether you want to add a header row or whether the CSV file already includes one. By default, the file already includes a header row.
* **Escape Character** – Supported escape characters are backslash, single quotes, and double quotes. The default is double quotes.

Click **Preview Data** to view the data from the selected file.

Data Importer creates the data structure based on the first ten rows of the source file and displays it in the **Structure elements** section. If the file settings do not provide valid data, an error is displayed. Click the edit icon ({{% icon name="pencil" %}}) at bottom-right corner of the structure elements table to modify **Custom Name** or **Primitive Type**.

{{% alert color="warning" %}}
Column names that do not follow Mendix naming conventions are autocorrected.
{{% /alert %}}

## Using in Import Mapping

After the document and its **Structure elements** are created, you can use the document in an import mapping by selecting **Schema source** as **Excel/CSV Structure**. For more information, see [Import Mappings](/refguide/import-mappings/).

## Editing an Entity

Optionally, you can edit and create an entity to import the data for simple use cases. You can edit the entity in the **Entity Preview** section.

Click the edit icon ({{% icon name="pencil" %}}) at bottom-right corner of **Entity Preview**. In the dialog box, you can change the **Name** of the entity. You can also rename attributes. **Original Name** shows the name of the column in the input file, and **Attribute Name** is the new name you want to assign to that column. You can change the data type of an attribute by selecting a value from the drop-down list. Click **OK** to save your changes, or click **Cancel** to discard them.

In the **Entity Preview**, select which columns to import by selecting or unselecting the checkbox next to each attribute.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/edit-csv-entity.png" class="no-border" width="600" >}}

Once you are satisfied with the changes, click **OK** to save or **Cancel** to discard your changes.

{{% alert color="warning" %}}
**Enum** is not supported as a target data type. Runtime exceptions can occur if the input data cannot be converted to the target data type, for example because of invalid data, data truncation, or casting issues.
{{% /alert %}}

## Creating an Entity

When you are done editing the entity, click **Create Entity**. This creates the entity in your domain model and displays a confirmation message. The data importer document is then ready to be used in [Import Data from File](/refguide/import-data-from-file/) to import data.

## Using in `Import Data from File` Activity

Once you have created an entity, you can now use the Data Importer document in [Import Data from File](/refguide/import-data-from-file/) activity and import the data in the list of NPEs.

You can extend this as per your requirements. For example, convert the list of NPEs into persistable entities by providing a message definition, or use each loop construct and individually create and commit entities into your database.
