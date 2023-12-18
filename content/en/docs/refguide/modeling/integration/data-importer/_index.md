---
title: "Data Importer Extension"
url: /refguide/data-importer/
weight: 21
description: "Overview of the Data Importer in Studio Pro"
tags: ["studio pro", "data importer", "excel importer"]
---

## 1 Introduction

The Data Importer allows you to import an Excel file and choose which sheet and columns you want to import. During the design-time flow, you can preview the data that you would like to import and create a non-persistable entity (NPE) in your domain model that corresponds to your input. During run-time, you can use the Data Importer Document created earlier to import data from input Excel file(s).

{{% alert color="info" %}}
The Data Importer is available in Studio Pro 10.6 and above.
{{% /alert %}}

### 1.1 Typical Use Cases

This Data Importer extension allows you to import data from Excel files directly into your app. You can create a Data Importer Document to define which columns to import from a given Excel or worksheet, an NPE to hold the imported data along with source-to-target mapping. Then, you can use the Data Import Document to import data from file(s) as the need may be.

### 1.2 Features {#features}

This extension supports following source files:

* Microsoft Excel (.xls, .xlsx)


### 1.3 Limitations

This extension currently has the following limitations:

* The Excel column cell-type is taken from the source file to determine the target attribute type; this cannot be changed during design-time.
* Source data can be mapped to one entity only; associations are not supported for now.
* You cannot map the data to an already existing NPE; you have to create a new Entity as part of mapping.
* Enumerations are not supported 

### 1.4 Prerequisites

* Studio Pro 10.6 or above

### 1.5  Dependencies

This connector has no dependencies, but it needs [Mendix Runtime](https://marketplace.mendix.com/link/component/219833) to import data from input the Excel files. Download this component from Marketplace and [add it into your app](/appstore/general/app-store-content/#install).

## 2 Design time flow

### 2.1 Creating a Data Importer Document {#create-document}

To import data, right-click on the module and click **Add other** > **Data Importer**.

{{< figure src="/attachments/refguide/integration/data-importer-extension/data-importer-menu.png" >}}

Name the document, click **OK**, and the new Data Importer document opens. 

### 2.2 Previewing Data {#preview-data}

Once you have [created the Data Importer document](#create-document), click **Select a local file** to import an Excel file (*.xls* or *.xslx*).

{{< figure src="/attachments/refguide/integration/data-importer-extension/select-file-for-preview.png" >}}

Select or drop the file in the **Select Source File** window. You can choose which sheet to import data from and specify the header row and starting data row.

* **Sheet Name** – name of the worksheet from where data needs to be imported; if the Excel has multiple worksheets, their names will appear in the dropdown
* **Header Row No.** – row number of the file header; the default is 1
* **Read Data From Row No.** – starting line for reading data; the default is 2

{{< figure src="/attachments/refguide/integration/data-importer-extension/select-sheet-and-header-data-row.png" >}}

Click **Preview Source Data & Entity** to view the data from the file. The first 10 rows from the source file are shown in the data preview section. The column names correspond to the attribute name within the entity.

All the columns are selected (checked) by default. You can uncheck the columns you do not want to import. At the bottom of the table, you can see the target data type of the attribute, which is based on the cell type defined in the file's first data row. If any data types are incorrect, check the cell type of the first data row in Excel and adjust the cell type definition accordingly.

{{% alert color="warning" %}} Column names that do not adhere to Mendix naming conventions will be autocorrected. {{% /alert %}}

{{< figure src="/attachments/refguide/integration/data-importer-extension/preview-data-and-entity.png" >}}

### 2.3 Creating an Entity {#create-entity}

You can view the entity in the Entity Preview  section. You can change the name of the entity, though one is suggested for you. To create teh entity in your domain model, click **Create Entity** > **OK**.

When the entity is created, you can view the mapping of the source Excel columns to the target entity attributes. 

{{< figure src="/attachments/refguide/integration/data-importer-extension/source-to-target-mapping.png" >}}

The Data Importer document creation is complete and can be used to [import data in a microflow](#import-microflow).

## 3 Importing Data in a Microflow {#import-microflow}

Use the previously created Data Importer document to import data from your Excel file(s) in a microflow. To do this, do the following:

1. Create a new microflow and drag the **Import data from file** activity into it.

   {{< figure src="/attachments/refguide/integration/data-importer-extension/custom-activity.png" >}}

2. Double-click the activity and in the **File** field, sselect an input file.
3. In the **Data importer document** field, click *Select* and choose the Data Importer document you want to use.
  {{< figure src="/attachments/refguide/integration/data-importer-extension/choose-data-importer-template.png" >}}

1. After selecting the Data Importer document, the **Return type** and **Variable name** will be autopopulate. You can also change the name  of the output variable.
2. Click **OK**.

The custom activity is configrued and you can import data from input files.

{{< figure src="/attachments/refguide/integration/data-importer-extension/example-microflow.png" >}}

## 4 Running Your App

To perform testing for your app, you can do the following actions:

1. Provide a placeholder to upload a file (System.FileDocument) on a page and a button to call the configured microflow. 
2. Deploy your app locally and browse and upload an input file which resembles the file used to create Data Importer document.
3. View the message about x number of rows being imported into a list of entities. 

{{< figure src="/attachments/refguide/integration/data-importer-extension/local-app-run.png" >}}
