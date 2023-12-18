---
title: "Import Data from File"
url: /refguide/data-importer-activity/
tags: ["studio pro", "import excel", "import data", "integration activity"]
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

{{% alert color="warning" %}}
This activity is in Studio Pro 10.6 and above.
{{% /alert %}}

## 1 Introduction

The **Import data from file** activity can be used in a microflow to integrate data from an Excel file into your Mendix app. The activity can be found under **Integration activities** in the Toolbox.

{{% alert color="warning" %}}Before using this activity, make sure you have created a Data Importer document using the [Data Importer extension](/refgide/data-importer/).{{% /alert %}}

## 2  Properties

Drag the **Import data from file** activity into your microflow and double-click it to view its properties:

{{< figure src="/attachments/appstore/connectors/data-importer/custom-activity-params.png" >}}

The following are the properties in the **Input** section:

* **File** – name of file from which you want to import data
* **Data importer document** – the [Data Importer document](/refguide/data-importer/) created by going to **Add other** > **Data Importer**

The following are the properties in the **Output** section:

* **Return type** – the return type of the microflow
* **Variable name** – the name of output/return variable
