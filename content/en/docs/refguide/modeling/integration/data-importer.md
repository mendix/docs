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

Once you have created the Data Importer document, click **Upload File** to import an Excel file (.xls or .xslx) or CSV file (.csv).

### Previewing Excel Data

Upload an Excel file (.xls or .xslx) as source file.

Select or drop the file in the **Select file from local**. An Excel workbook can have single or multiple sheets; you can choose which sheet to import data from and specify the details below to configfure the file settings:

* **Sheet Name** – name of the worksheet from where data needs to be imported; if the Excel has multiple worksheets, their names will appear in the dropdown
* **Header Row No.** – row number of the file header; the default is 1
* **Read Data From** – starting line for reading data; the default is 2

Click **Preview Data** to view the data from the file. The first 10 data rows from the source file are shown in the data preview section. If there are less than 10 data rows in the sample file, only the available rows are shown. The column names correspond to the attribute name within the entity, and the sheet name is used to define the entity.

All the columns are automatically selected (checked) for import. You can uncheck the columns you do not want to use. At the bottom of the table, you see the target data type of the attribute, which is based on the cell-type defined in the Excel file's first data row. If any data types are incorrect, check the cell-type of the first data row and adjust the definition accordingly.

{{% alert color="warning" %}}
Column names that do not adhere to Mendix naming conventions will be autocorrected. For Number cell-types, the target Mendix type is mapped to Decimal to accommodate the integers and decimals.
{{% /alert %}}

### Previewing CSV Data

Select or drop the CSV file as a source file. CSV import supports multiple combinations of separator/delimiter, quote, and escape characters. It also supports importing files where the header row is absent.

Specify the values for all file setting configurations below:

* **Delimiter (Separator)** – current supported delimiters are comma, semicolon, pipe, and tab; the default is comma
* **Quote Characters** – current supported quote characters are single and double quotes; the default is double quotes
* **Add Header Row** – specify if you want to add a header row or if the header row is already part of the CSV file; the default is the header row already included in the file
* **Escape Character** – current supported escape characters are backslash, single, and double quotes; the default is double quotes

Click **Preview Data** to view the data from the file. The first ten rows from the source file are shown in the data preview section. The file name is used to define the entity (NPE), but this can be edited. The column names correspond to the attribute name within the entity.

All the columns are selected (checked) by default. You can uncheck the columns you do not want to import. At the bottom of the table, you can see the target data type of the attribute, which defaults to String.

{{% alert color="warning" %}}
Column names that do not adhere to Mendix naming conventions will be autocorrected.
{{% /alert %}}

## Creating Import Mapping

Once your document is created, you can see the structure is ready at **Structure elements** section. For your advanced use cases, you can now use the document for the import mapping. For more information, see [Import Mapping](/refguide/import-mappings/).

## Editing an Entity

Optionally, you can edit and create an entity to import the data for simple use cases. You can edit the entity in the **Entity Preview** section. The Data Importer supports various ways to:

* Edit the name of resultant entity
* Edit the name of the attribute (or attributes) of the entity
* Edit the data type of a given attribute

Click the edit icon ({{% icon name="pencil" %}}) at bottom-right corner of **Entity Preview**. This will render a pop-up window where you can change the **Name** of the entity. You can also change the **Attribute Name**; **Original Name** is the name of the column from input file and **Attribute Name** will be the new name that you want to assign to this column. You can also change the **Data Type** of this attribute by selecting a relevant value from the drop-down as shown below.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/edit-csv-entity.png" class="no-border" width="600" >}}

Once you are satisfied with the changes, click **OK** to save or **Cancel** to discard your changes.

{{% alert color="warning" %}}

* Enum is not supported as a target data type
* Runtime exceptions can occur if the input data cannot be converted into desired target data type for various reasons (for example, invalid data, data truncation, casting etc.)

{{% /alert %}}

## Creating an Entity

When you are done editing the entity, click **Create Entity**. This will create the entity in your domain model. You will also see a confirmation message that an entity has been created in the domain model and is ready to use.

When the entity is created, you can view the mapping of the source columns to the target entity attributes.

The Data Importer document creation is complete and can be used to import data in a microflow.

## Building Your App

The newly-created Data Importer document allows you to periodically import data from an Excel or CSV file that is generated by another app or system.

### Creating Custom Activity

Find the **Import data from file** activity under **Integration activities** in the **Toolbox** and view its properties. For more information, see [Import Data from File](/refguide/import-data-from-file/).

### Building the Pages

The **Import data from file** custom activity needs an input file to import data from. The example below builds a page where a `System.FileDocument` is uploaded and fed to the custom activity.

1. Open the home page and add a button and name it *Upload Customer Data*.
2. Double-click the button and in the **Events** field under the **On click** drop-down, select **Create object** to create a `System.FileDocument` entity.
3. Pass the control to a new page (**UploadCustomerData**) where the file is uploaded.

    {{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/home-page-button.png" class="no-border" width="600" >}}

4. On the **UploadCustomerData** page, include a data view for the *FileDocument* and include a 'File Manager' to assist with a file upload.

    {{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/data-view-file-manager.png" class="no-border" width="600" >}}

5. Open the **Toolbox** and add a **Call microflow button**. 

6. Click **New** and name the microflow *Import Customer Data*. You also see **FileDocument** in the parameters section; make sure this box is checked to include it as a parameter and click **OK**.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/add-parameter.png" class="no-border" width="600" >}}

### Configuring the Import data from file Activity in a Microflow 

{{% alert color="info" %}}
The steps below are shown using an Excel input file with its corresponding Data Importer document. You can substitute an Excel document with a CSV document to import data from CSV input files.
{{% /alert %}}

1. In the created microflow, drag the **Import data from file** activity into it. You can find this activity in the **Toolbox** under **Integration activities**.

   {{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/integration-activity.png" class="no-border" width="600" >}}

2. When the **Import data from file** activity is added into microflow, you see three errors in the console:

   {{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/custom-activity.png" class="no-border" width="600" >}}

    To address these errors, double-click the activity and in the **File** field, choose the input file that is passed from the file upload page to this microflow as a parameter.

3. In the **Data Importer document** field, click **Select** and choose the Data Importer document you want to use.

    {{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/choose-data-importer-template.png" class="no-border" width="600" >}}

    After selecting the Data Importer document, the **Return type** and **Variable name** auto-populates. You can change the name of the output variable if you wish.

4. Click **OK**. The custom activity is configured and all the errors will resolve.

    {{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/configured-custom-activity.png" class="no-border" width="600" >}}

5. Add an **Aggregate list** activity and configure it to count the size of the 'CustomerList', which is returned from the previous activity.

   {{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/aggregate-list.png" class="no-border" width="600" >}}

6. Configure a **Show message** activity. You can use a template message and a parameter, such as in the example below.

   {{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/show-message-with-list-size.png" class="no-border" width="600" >}}

7. Set '$CustomerList' as the return value from the **Import data from file** activity to be used later. Your completed microflow should look like the image below.

   {{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/example-microflow.png" class="no-border" width="600" >}}

8. Deploy your app locally. Browse and upload an input file, which is similar to the file that was used as a template while creating Data Importer document.
9. Check that you see a message that states **Imported xx rows from input file into a list of NPEs**.

   {{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-data-importer/local-app-run.png" class="no-border" width="600" >}}

You have successfully configured and used the Data Importer extension. You can extend this as per your requirements. For example, you can convert the list of NPEs into persistable entities by providing a message definition, or use each loop construct and individually create and commit entities into your database.

