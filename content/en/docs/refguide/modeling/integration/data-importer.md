---
title: "Data Importer"
url: /refguide/data-importer/
weight: 40
description: "Describes how to use the Data Importer in Studio Pro to import data from Excel and CSV files"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Data Importer lets you define how data from Excel and CSV files is interpreted in your Mendix app. You create a Data Importer document based on a representative input file.

The document can be used in two ways:

* With Import Data from File to import the file into a generated non-persistable entity.
* As a source for an Import Mapping, which gives you more control over how imported data is mapped to Mendix objects.

## Creating a Data Importer Document

Right-click the module you want to add the Data Importer document to and click **Add other** > **Data Importer**.

Name the document, then click **OK**, and the new Data Importer document opens.

{{% alert color="info" %}} You need to run the app first to configure the file settings.{{% /alert %}}

## Previewing Data

Once you have created the Data Importer document, click Select a local file to import an Excel file (.xls or .xslx) or CSV file (.csv).

### Previewing Excel Data

Click Select a local file to import an Excel file (.xls or .xslx).

Select or drop the file in the Select Source File field. An Excel workbook can have single or multiple sheets; you can choose which sheet to import data from and specify the header row and starting data row.

* Sheet Name – name of the worksheet from where data needs to be imported; if the Excel has multiple worksheets, their names will appear in the dropdown
* Header Row No. – row number of the file header; the default is 1
* Read Data From Row No. – starting line for reading data; the default is 2

Click Preview Source Data & Entity to view the data from the file. The first 10 data rows from the source file are shown in the data preview section. If there are less than 10 data rows in the sample file, only the available rows are shown. The column names correspond to the attribute name within the entity, and the sheet name is used to define the entity.

All the columns are automatically selected (checked) for import. You can uncheck the columns you do not want to use. At the bottom of the table, you see the target data type of the attribute, which is based on the cell-type defined in the Excel file's first data row. If any data types are incorrect, check the cell-type of the first data row and adjust the definition accordingly.

{{% alert color="warning" %}}
Column names that do not adhere to Mendix naming conventions will be autocorrected. For Number cell-types, the target Mendix type is mapped to Decimal to accommodate to integers and decimals.
{{% /alert %}}

### Previewing CSV Data

Select or drop the CSV file in the Select Source File window. CSV import supports multiple combinations of separator/delimiter, quote, and escape characters. It also supports importing files where the header row is absent.

Specify the values for all four configurations (Delimiter, Quote Character, Escape Character, and Add Header Row):

* Delimiter (Separator) – current supported delimiters are comma, semicolon, pipe, and tab; the default is comma
* Quote Characters – current supported quote characters are single and double quotes; the default is double quotes
* Escape Characters – current supported escape characters are backslash, single, and double quotes; the default is double quotes
* Add Header Row – specify if you want to add a header row or if the header row is already part of the CSV file; the default is the header row already included in file

Click Preview Source Data & Entity to view the data from the file. The first ten rows from the source file are shown in the data preview section. The file name is used to define the entity (NPE), but this can be edited. The column names correspond to the attribute name within the entity.

All the columns are selected (checked) by default. You can uncheck the columns you do not want to import. At the bottom of the table, you can see the target data type of the attribute, which defaults to String.

{{% alert color="warning" %}}
Column names that do not adhere to Mendix naming conventions will be autocorrected.
{{% /alert %}}

## Creating Import Mapping

Once your document is created, you can see the structure element is ready to use for the import mapping. For more information, see [Import Mapping](/refguide/import-mappings/).

## Editing an Entity

You can edit the entity in the Entity Preview section. The Data Importer supports various ways to:

* Edit the name of resultant entity
* Edit the name of the attribute (or attributes) of the entity
* Edit the data type of a given attribute

Click Edit at top-right corner of Entity Preview. This will render a pop-up window where you can change the name of the entity. You can also change the name of the attribute; Original Name is the name of the column from input file and Attribute Name will be the new name that you want to assign to this column. You can also change the data type of this attribute by selecting a relevant value from the drop-down as shown below.

Once you are satisfied with the changes, click OK to save or Cancel to discard your changes.

{{% alert color="warning" %}}

* Enum is not supported as a target data type
* Runtime exceptions can occur if the input data cannot be converted into desired the target data type for various reasons (for example, invalid data, data truncation, casting etc.)

{{% /alert %}}

## Creating an Entity

When you are done editing the entity, click Create Entity > OK. This will create the entity in your domain model. You will also see a confirmation message that an entity has been created in the domain model and is ready to use.

When the entity is created, you can view the mapping of the source columns to the target entity attributes.

The Data Importer document creation is complete and can be used to import data in a microflow.
