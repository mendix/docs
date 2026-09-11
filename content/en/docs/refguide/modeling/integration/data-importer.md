---
title: "Data Importer"
url: /refguide/data-importer/
weight: 21
description: "Describes how to use the Data Importer in Studio Pro to import data from Excel and CSV files."
aliases: 
   - /howto/integration/data-importer/
   - /appstore/modules/data-importer/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
The Data Importer is available in [Studio Pro 10.6](/releasenotes/studio-pro/10.6/) and above.
{{% /alert %}}

**Data Importer** allows you to import data from an Excel or comma-separated value (CSV) file. You can choose which sheet and columns to import, preview the data, and create a non-persistable entity (NPE) in your domain model that corresponds to your input. Then, you can import data into your app using the [Import Data from File](/refguide/import-data-from-file/) activity.

The Data Importer document can also be used as a source for creating [Import Mapping](/refguide/import-mappings/). This import mapping can import data from an Excel or CSV file using the [Import with Mapping](/refguide/import-mapping-action/) activity.

{{% alert color="info" %}}
Using the Data Importer document as a source for import mapping is available from Studio Pro 10.18.0 and above.
{{% /alert %}}

## Prerequisites

Studio Pro 10.6 or above

{{% alert color="info" %}}
Your app must be running locally to preview data in the Data Importer document.
{{% /alert %}}

## Limitations

The Data Importer currently has the following limitations:

* Source data can be mapped to one entity only, associations are not currently supported
* You cannot map data to an existing NPE; you must create a new entity as part of the mapping
* Enumerations are not supported
* **String** is the default attribute type (CSV only)
* Only UTF-8 encoded files are supported for CSV import; non-encoded files may result in loss of data

### Installation

For Studio Pro versions **below 11.13.0**, Download the [Data Importer](https://marketplace.mendix.com/link/component/219833) from the Marketplace and [add it into your app](/appstore/use-content/).

## Data Importer Document (With Implicit Mapping) {#implicit-mapping}

The Data Importer allows you to import data from Excel and CSV files directly into your app. Create a Data Importer document to define which columns to import and a non-persistable entity (NPE) to hold the imported data, along with source-to-target mapping. During document creation, you can preview the data, choose which columns to import, and edit the name of the resulting entity.

The Data Importer document can be used along with the [Import data from file](/refguide/import-data-from-file/) custom activity. Use this activity in a microflow to import data from an Excel or CSV file.

### Creating a Data Importer Document

Right-click the module you want to add the Data Importer document to and click **Add other** > **Data Importer**.

{{< figure src="/attachments/refguide/modeling/integration/data-importer/data-importer-menu.png" class="no-border" width="600" >}}

Name the document, then click **OK**, and the new Data Importer document opens.

### Previewing Excel Data {#preview-excel-data}

Click **Upload File** to import an Excel file (*.xls* or *.xlsx*). [Note: App should be running to preview data.]

{{< figure src="/attachments/refguide/modeling/integration/data-importer/select-file-for-preview.png" class="no-border" width="600" >}}

Select the file in the **Select Source File** field. An Excel workbook can have single or multiple sheets; you can choose which sheet to import data from and specify the header row and starting data row.

* **Sheet Name** – name of the worksheet from where data needs to be imported; if the Excel has multiple worksheets, the sheet name appears in the drop-down
* **Header Row No.** – row number of the file header; the default is 1
* **Read Data From** – starting line for reading data; the default is 2

{{< figure src="/attachments/refguide/modeling/integration/data-importer/select-sheet-and-header-data-row.png" class="no-border" width="600" >}}

Click **Preview Data** to view the data from the file. The first 10 data rows from the source file are shown in the data preview section. If there are less than 10 data rows in the sample file, only the available rows are shown. The column names correspond to the attribute name within the entity, and the sheet name is used to define the entity.

All the columns are selected (checked) by default. You can uncheck the columns you do not want to import. At the bottom of the table, you can see the target data type of the attribute, which is based on the cell type defined in the file's first data row. If any data types are incorrect, check the cell type of the first data row in Excel and adjust the definition accordingly.

{{% alert color="warning" %}} Column names that do not adhere to Mendix naming conventions will be autocorrected. For **Number** cell types, the target Mendix type is mapped to **Decimal** to accommodate integers and decimals. {{% /alert %}}

{{< figure src="/attachments/refguide/modeling/integration/data-importer/preview-data-and-entity.png" class="no-border" width="600" >}}

### Previewing CSV Data {#preview-csv-data}

[Note: App should be running to preview the data] Select the CSV file in the **Select Source File** field. CSV import supports multiple combinations of separator/delimiter, quote, and escape characters. It also supports importing files where the header row is absent.

Specify the values for all four configurations:

* **Delimiter (Separator)** – supported delimiters are comma, semicolon, pipe, and tab; the default is comma
* **Quote Characters** – supported quote characters are single and double quotes; the default is double quotes
* **Escape Characters** – supported escape characters are backslash, single, and double quotes; the default is double quotes
* **Add Header Row** – specify if you want to add a header row or if the header row is already part of the CSV file; the default is the header row already included in the file

Click **Preview Data** to view the data from the file. The first ten rows from the source file are shown in the data preview section. The file name is used to create a NPE, but this can be edited. The column names correspond to the attribute names within the entity.

All the columns are selected (checked) by default. You can uncheck the columns you do not want to import. At the bottom of the table, you can see the target data type of the attribute, which defaults to **String**.

{{% alert color="warning" %}} Column names that do not adhere to Mendix naming conventions will be autocorrected. {{% /alert %}}

For example, for the following source data (CSV), the separator is specified as Comma. The Quote and Escape Characters are set to Double Quote, and the header is included in the input file.

{{< figure src="/attachments/refguide/modeling/integration/data-importer/source-csv-data.png" class="no-border" width="600" >}}

The data preview and resulting entity are shown below:

{{< figure src="/attachments/refguide/modeling/integration/data-importer/preview-csv-data-and-entity.png" class="no-border" width="600" >}}

### Editing an Entity {#edit-entity}

You can edit the entity in the **Entity Preview** section. The Data Importer supports the following edits:

* Edit the name of the resulting entity
* Edit the name of one or more attributes of the entity
* Edit the data type of a given attribute

Click **Edit** at the bottom-right corner of **Entity Preview**. A dialog opens where you can change the name of the entity. You can also change the name of the attribute — *Original Name* is the column name from the input file and *Attribute Name* is the new name you want to assign to it. You can also change the data type of the attribute by selecting a value from the drop-down.

{{< figure src="/attachments/refguide/modeling/integration/data-importer/edit-csv-entity.png" class="no-border" width="600" >}}

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
* Runtime exceptions can occur if the input data cannot be converted into the target data type for various reasons (for example, invalid data, data truncation, or casting)
{{% /alert %}}

### Creating an Entity {#create-entity}

When you are done editing the entity, click **Create Entity**. You will see a information message that an entity has been created in the domain model and is ready to use. This will create the entity in your domain model

When the entity is created, you can view the mapping of the source columns to the target entity attributes.

{{< figure src="/attachments/refguide/modeling/integration/data-importer/source-to-target-mapping.png" class="no-border" width="600" >}}

The Data Importer document creation is complete and can be used to import data in a microflow.

## Building Your App {#build-data-importer-app}

The newly created Data Importer document allows you to periodically import data from an Excel or CSV file that is generated by another app or system.

### Custom Activity {#Import-data-from-file}

The **Import data from file** activity is found under **Integration activities** in the **Toolbox**. Double-click to view its properties:

{{< figure src="/attachments/refguide/modeling/integration/data-importer/custom-activity-params.png" class="no-border" width="600" >}}

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

   {{< figure src="/attachments/refguide/modeling/integration/data-importer/home-page-button.png" class="no-border" width="600" >}}

4. On the **UploadCustomerData** page, include a data view for the *FileDocument* and include a 'File Manager' to assist with a file upload.

   {{< figure src="/attachments/refguide/modeling/integration/data-importer/data-view-file-manager.png" class="no-border" width="600" >}}

5. Open the **Toolbox** and add a **Call microflow button**.

6. Click **New** and name the microflow *Import Customer Data*. **FileDocument** appears in the parameters section; make sure this box is checked to include it as a parameter and click **OK**.

{{< figure src="/attachments/refguide/modeling/integration/data-importer/add-parameter.png" class="no-border" width="600" >}}

### Configuring the Import data from file Activity in a Microflow 

{{% alert color="info" %}}
The steps below are shown using an Excel input file with its corresponding Data Importer document. You can substitute an Excel document with a CSV document to import data from CSV input files.
{{% /alert %}}

1. In the created microflow, drag the **Import data from file** activity into it. You can find this activity in the **Toolbox** under **Integration activities**.

   {{< figure src="/attachments/refguide/modeling/integration/data-importer/integration-activity.png" class="no-border" width="600" >}}

2. When the **Import data from file** activity is added to the microflow, you see three errors in the console:

   {{< figure src="/attachments/refguide/modeling/integration/data-importer/custom-activity.png" class="no-border" width="600" >}}

   To address these errors, double-click the activity and in the **File** field, choose the input file that is passed from the file upload page to this microflow as a parameter.

3. In the **Data Importer document** field, click **Select** and choose the Data Importer document you want to use.

   {{< figure src="/attachments/refguide/modeling/integration/data-importer/choose-data-importer-template.png" class="no-border" width="600" >}}

   After selecting the Data Importer document, the **Return type** and **Variable name** are auto-populated. You can change the name of the output variable if needed.

4. Click **OK**. The custom activity is configured and all errors are resolved.

   {{< figure src="/attachments/refguide/modeling/integration/data-importer/configured-custom-activity.png" class="no-border" width="600" >}}

5. Add an **Aggregate list** activity and configure it to count the size of the **CustomerList** returned from the previous activity.

   {{< figure src="/attachments/refguide/modeling/integration/data-importer/aggregate-list.png" class="no-border" width="600" >}}

6. Configure a **Show message** activity. You can use a template message and a parameter, as in the example below.

   {{< figure src="/attachments/refguide/modeling/integration/data-importer/show-message-with-list-size.png" class="no-border" width="600" >}}

7. Set `$CustomerList` as the return value from the **Import data from file** activity for later use. Your completed microflow should look like the image below.

   {{< figure src="/attachments/refguide/modeling/integration/data-importer/example-microflow.png" class="no-border" width="600" >}}

8. Deploy your app locally. Browse and upload an input file that resembles the file used to create the Data Importer document.
9. Check that you see a message stating **Imported xx rows from input file into a list of NPEs**.

   {{< figure src="/attachments/refguide/modeling/integration/data-importer/local-app-run.png" class="no-border" width="600" >}}

You have successfully configured and used the Data Importer. You can extend this as needed — for example, by converting the list of NPEs into persistable entities using a message definition, or by using a loop to individually create and commit entities to your database.

## Data Importer Document (as a Source for Import Mapping) {#import-mapping}

The [Import Mapping](/refguide/import-mappings/) document and the [Import with Mapping](/refguide/import-mapping-action/) activity provide advantages such as controlling the commit of objects and the flexibility to find or create an object. The Data Importer document can be used as a source structure for import mappings, which enables advanced use cases for importing data. The sections below describe how to create a structure, create an import mapping using that structure, and use the **Import with mapping** microflow activity to import data.

### Creating a Data Importer Document for Import Mapping {#create-document-with-imm}

1. Right-click the module and click **Add other** > **Data Importer**.
2. Name the document and enable the **Use with Import mapping** checkbox.
3. Click **OK**. The new Data Importer document opens.

{{< figure src="/attachments/refguide/modeling/integration/data-importer/create-DI-doc-with-import-mapping.png" class="no-border" width="400" >}}

### Previewing Structure {#preview-structure}

[Note: App should be running to preview data] Once you have [created the Data Importer document](#create-document-with-imm), click **Upload File** to upload a Excel file (*.xls* or *.xlsx*) or CSV file (*.csv*).

{{< figure src="/attachments/refguide/modeling/integration/data-importer/select-file-for-structure-preview.png" class="no-border" >}}

Choose which sheet to import data from, and specify the header row and starting data row:

* **Sheet Name** – name of the worksheet from where data needs to be imported; if the file has multiple worksheets, the sheet name appears in the drop-down
* **Header Row No.** – row number of the file header; the default is **1**
* **Read Data From** – starting line for reading data; the default is **2**

Click **Preview Structure Elements** to view the data structure from the file. The data from the first row of the source file is shown in the **Schema elements** section. You can change **Primitive Type** and **Custom Name** for the as per your requirements. Click **Create Structure**. You are notified that a new structure has been generated successfully.

{{< figure src="/attachments/refguide/modeling/integration/data-importer/preview-data-structure.png" class="no-border" >}}

{{% alert color="warning" %}} Column names that do not adhere to Mendix naming conventions will be autocorrected. {{% /alert %}}

### Creating an Import Mapping {#DI-import-mapping}

1. Right-click your module or folder and select **Add other** > **Import mapping**.
2. Name the import mapping document, then click **OK**. The **Select a schema element for import mapping** dialog opens.
3. From the **Schema source**, choose **Excel/CSV structure**.
4. Select the sheet from the Excel file that was uploaded as a sample:

    {{< figure src="/attachments/refguide/modeling/integration/data-importer/select-schema-elements-for-imm.png" class="no-border" >}}

5. Select the columns you want to import. To select all columns, click **Check all**.
6. Click **OK** to create the import mapping:

    {{< figure src="/attachments/refguide/modeling/integration/data-importer/create-import-mapping.png" class="no-border" >}}

7. You can now:
    * Map an existing entity by dragging and dropping it from your domain model via the **Connector** tab
    * Click **Map automatically** to create a new NPE in your domain model:

    {{< figure src="/attachments/refguide/modeling/integration/data-importer/map-automatically.png" class="no-border" >}}

8. If you chose **Map automatically**, open the domain model to change the entity name and persistence as needed:

    {{< figure src="/attachments/refguide/modeling/integration/data-importer/entity-name-persist-change.png" class="no-border" >}}

### Using the Import with Mapping Activity in a Microflow {#import-with-mapping-MF}

1. Create a new microflow with a **FileDocument** parameter and drag the **Import with mapping** activity into it.
2. Double-click the activity.
3. In the **Input** section, select an input file (Excel or CSV) in the **Variable** field.
4. Select the mapping in the **Import Mapping** section.
5. Select **Range** and **Commit** options as needed.
6. In the **Output** section, choose **Store in variable**, then click **OK**:

    {{< figure src="/attachments/refguide/modeling/integration/data-importer/import-with-mapping-params.png" class="no-border" width="500" >}}

### Support for Mapping Parameter in Import Mapping {#mapping-param-import-mapping}

{{% alert color="warning" %}} This feature requires Studio Pro 10.21 or above. {{% /alert %}}

The [Mapping Parameter](/refguide/import-mappings/#mapping-parameter) is supported by the Data Importer starting from Studio Pro 10.21. The mapping parameter can be used to create associations with imported data. Primitive types are not supported, but any Mendix object type can be passed as the mapping parameter.

To define an import mapping with a mapping parameter:

1. In your import mapping, drag an entity from the **Connector** tab into the target object placeholder. Click **Cancel** on the **Map entity** dialog — you will fill in the details later.
2. From the **Connector** pane, drag the entity you want to pass as a parameter into the parameter placeholder.
3. Double-click the source or target object to open the **Map entity** dialog.
4. Select **Call a microflow** to obtain a Mendix object for your import mapping.
5. If necessary, create a microflow that creates an object of the target entity and sets an association with the passed parameter.
6. In your import mapping, set **Set association** to **Yes** and select a valid association from the drop-down.
7. Click **Map attributes** to map the source schema value elements to the target entity attributes.

The import mapping should look like the example below:

{{< figure src="/attachments/refguide/modeling/integration/data-importer/IM-with-mapping-param-association.png" class="no-border" width="500" >}}

### Before Running Your App {#data-import-with-mapping-app}

Before running your app:

1. Complete the microflow to show a page containing the entities committed after the import activity.
2. Call this microflow from a button on another page where a **FileDocument** object is created with a provision to upload an input file.
3. Run your app locally and upload a file that matches the sample file used when creating the Data Importer document, then trigger the microflow.

You should see the data from the file imported and displayed in the page's data grid.

{{< figure src="/attachments/refguide/modeling/integration/data-importer/data-imported-from-input-file.png" class="no-border" >}}

## Edit Data Importer Document {#edit-di-document}

You can edit a Data Importer document by uploading a new sample file.

{{% alert color="warning" %}}Uploading a new file erases the existing mapping or structure elements for this document and replaces them with new ones.{{% /alert %}}

To edit the Data Importer document:

1. Double-click the Data Importer document you want to edit. The document opens in read-only mode.
2. Click **Update File** in the top-right corner. You are notified that uploading a new file will erase and replace the existing mapping or structure elements.

    {{< figure src="/attachments/refguide/modeling/integration/data-importer/update-data-importer-doc-confirmation.png" class="no-border" >}}

3. Click **OK**, then upload the new file.
4. Change the configuration as needed, such as **Sheet Name** and **Header Row No.**
5. Click **Create Structure Elements** to update the document.

    {{< figure src="/attachments/refguide/modeling/integration/data-importer/data-importer-doc-updated.png" class="no-border" >}}

After updating, revise the domain model entities, microflows, pages, and any other documents referenced by this Data Importer document to reflect the changes in your app.

## Known Issues

### Unchecked Columns

You cannot rename an attribute or change a data type if there are unchecked columns. To avoid this issue, format your Excel or CSV file so that you do not need to uncheck any columns after uploading it to Studio Pro.

### "No Suitable Constructors Found" Error in Studio Pro Versions Earlier Than 10.21.0

When using the Data Importer document with the import mapping capability in Studio Pro versions earlier than 10.21.0, the runtime module may throw an error with the message "No suitable constructors found for action class 'DataImportMapping'." This is caused by an incompatible Data Importer module version. To resolve this issue, re-import the latest version of the Data Importer module from the Marketplace.
