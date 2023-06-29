---
title: "Data Importer"
url: /refguide/data-importer/
weight: 21
description: "Overview of the Data Importer in Studio Pro"
tags: ["studio pro", "data importer", "excel importer"]
---

## 1 Introduction

The **Data Importer** allows you to import an Excel file and choose which parts of it you want to import. You can view this in design time, before running your app.

{{% alert color="info" %}}
The **Data Importer** is available in Studio Pro [10.2](/releasenotes/studio-pro/10.2/) and above.
{{% /alert %}}

## 2 Creating a Data Importer Service Document {#create-document}

To start importing data, go to **Add other** > **Data Importer**. Name the document, and the new **Data Importer Document** opens.

### 2.1 Previewing Data {#preview-data}

Once you have [created the **Data Importer** document](#create-document), click **Select a local file** to import an Excel file (*.xls* or *.xslx*).

After importing the file, you can choose which columns and information to include. Information about the imported Excel file is as followings:

* **Sheet name** – name of the imported Excel file
* **Header row number** – row number of the file header
* **Read data from** – starting line for reading data

Click **Preview Excel data & entity** to open the preview of the entity.

### 2.2 Creating an Entity {#create-entity}

After importing the an Excel file and [previewing the data](#preview-data), choose a name for the entity and click **Create Entity**. 

The entity is now in your domain module, and you can start [importing data in a microflow](#import-microflow).

## 3 Importing Data in a Microflow {#import-microflow}

[not tested because activity has not yet been developed]

Drag the [Data Importer](/refguide/data-importer-activity/) into a microflow to import the Excel data in a running app.