---
title: "Generate Report Button"
url: /refguide8/report-button/
parent: "report-widgets"
menu_order: 40
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/report-button.pdf).
{{% /alert %}}

## 1 Introduction

You can set a [report grid](report-grid) to automatically generate the report when the page is loaded. However, if a report page has parameter widgets, you must also add a **Generate report button** widget so that the end-user can regenerate the report after specifying the parameter(s).

The reports are generated when the end-user clicks the generate report button.

## 2 Report Parameter Properties

An example of generate report button properties is represented in the image below:

{{% image_container width="300" %}}![Report parameter in structure mode](attachments/report-widgets/generate-report-button-properties.png)
{{% /image_container %}}

Generate report button properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [General](#general)

### 2.1 Common Section{#common}

{{% snippet file="refguide8/common-section-link.md" %}}

### 2.2 Design Properties Section{#design-properties}

{{% snippet file="refguide8/design-section-link.md" %}}

### 2.3 General Section{#general}

#### 2.3.1 Caption

**Caption** is the string that the end-user sees on the button that generates reports with the chosen parameters.
