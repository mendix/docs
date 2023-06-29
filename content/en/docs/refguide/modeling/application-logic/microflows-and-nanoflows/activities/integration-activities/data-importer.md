---
title: "Data Importer Activity"
url: /refguide/data-importer-activity/
tags: ["studio pro", "import excel", "import data", "import mapping", "integration activity"]
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

{{% alert color="warning" %}}
This activity is in Studio Pro [10.2](/releasenotes/studio-pro/10.2/) and above.
{{% /alert %}}

## 1 Introduction

[verify that this activity is indeed under Integration Activities or its own thing]

The **Data Importer** activity can be used in a microflow to integrate data from an Excel file into your Mendix app. 

{{% alert color="warning" %}}Before using this activity, ensure that you have imported an Excel file with the [Data Importer](/refgide/data-importer/).{{% /alert %}}

## 2  Properties

Double-click on the **Data Importer** activity after you have dragged it into your microflow to view its properties:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/data-importer-activity/properties.png" >}}

The following are the properties in the **Input** section:

* **File** – name of file document from which you will import data
* **Data Importer document** – the [Data Importer service document](/refguide/data-importer/) created by going to **Add other** > **Data Importer**

The following are the properties in the **Output** section:

* **Return type** – the return type of the microflow
* **Use return variable** – if set to yes, you will be asked to give it a name
* **Variable name** – the result of the activity will be given this name