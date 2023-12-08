---
title: "Import data from file Activity"
url: /refguide/data-importer-activity/
tags: ["studio pro", "import excel", "import data", "integration activity"]
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

{{% alert color="warning" %}}
This activity is in Studio Pro [10.4](/releasenotes/studio-pro/10.4/) and above.
{{% /alert %}}

## 1 Introduction

The **Import data from file** activity can be used in a microflow to integrate data from an Excel file into your Mendix app. The activity can be found under **Integration activities** in *Toolbox*

{{% alert color="warning" %}}Before using this activity, ensure that you have created *Data Importer Document* using a representative Excel file as input using the [Data Importer Extension](/refgide/data-importer/).{{% /alert %}}

## 2  Properties

Double-click on the **Import data from filer** activity after you have dragged it into your microflow to view its properties:

{{< figure src="/attachments/appstore/connectors/data-importer/custom-activity-params.png" >}}

The following are the properties in the **Input** section:

* **File** – name of file from which you want to import data
* **Data importer document** – the [Data Importer document](/refguide/data-importer/) created by going to **Add other** > **Data Importer**

The following are the properties in the **Output** section:

* **Return type** – the return type of the microflow
* **Variable name** – the name of output/return variable.
