---
title: "Report Date Parameter"
parent: "report-widgets"
menu_order: 30
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A **Report date parameter** allows the end-user to specify a Date and time parameter for the [data set](data-sets) that supplies the data for a [Report grid](report-grid). The parameter is used to filter the results in different ways so that the same report can display different sets of data.

For example, a report may show order data for a customer over a selected period, and the report date parameter can be used to specify which period should be selected.

{{% alert type="info" %}}
You can add more fields to a report date parameter widget to make it easier for an end-user to select a date range. See [Additional Report Date Parameter Fields](#additional-fields), below, for more information.
{{% /alert %}}

The report date parameter is displayed in structure mode with the data set parameter name shown between square brackets and colored blue. The **From** and **To** dates shown in blue are examples to indicate that these are date fields.

![Report date parameter in structure mode](attachments/report-widgets/report-date-parameter.png)

{{% alert type="info" %}}
If you have a report date parameter widget on the page, you must also add a [Report Button](report-button) widget so that it is possible for the end-user to regenerate the report after specifying the parameter.
{{% /alert %}}

## 2 Report Date Parameter Properties

An example of report date parameter properties is represented in the image below:

{{% image_container width="300" %}}![Report date parameter in structure mode](attachments/report-widgets/report-date-parameter-properties.png)
{{% /image_container %}}

Report date parameter properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [General](#general)

### 2.1 Common Section{#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 2.2 Design Properties Section{#design-properties}

{{% snippet file="refguide/design-section-link.md" %}}

### 2.3 General Section{#general}

#### 2.3.1 Parameter

**Parameter** is set to a data set parameter of type Date and time, the value of which is restricted by this widget. The corresponding data set must be used by one of the report widgets on the page.

#### 2.3.2 Fields Per Row

**Fields per row** specifies how many [date range fields](date-range-field) can be placed beside each other in a row. There are always two rows available for data range fields. See [Additional Report Date Parameter Fields](#additional-fields), below, for more information.

#### 2.3.3 From Caption

**From** specifies the text that is displayed against the **from** date selector, where the end-user can choose the start of the period for which data should be shown in the report.

#### 2.3.4 To Caption

**To** specifies the text that is displayed against the **to** date selector, where the end-user can choose the end of the period for which data should be shown in the report.

#### 2.3.5 Show From/To

Set **Show from/to** to **Yes** if the **from** and **to** field results should be shown on the report page.

Set this to **No** if the **from** and **to** field results should not be shown. In this case, the filter must be set using [date range fields](date-range-field) added to the report date parameter.

#### 2.3.6 Min. Year

**Min. year** is the earliest year that the end-user can choose in the **Year** [date range field](date-range-field).

{{% alert type="warning" %}}
The value in **Min. year** will not prevent an end-user from choosing an earlier date in the **From** or **To** fields of the report date parameter widget. It only applies to the *year* date range field.
{{% /alert %}}

#### 2.3.7 Max. year

**Max. year** is the latest year that the end-user can choose in the **Year** [date range field](date-range-field).

{{% alert type="warning" %}}
The value in **Max. year** will not prevent an end-user from choosing a later date in the **From** or **To** fields of the report date parameter widget. It only applies to the *year* date range field.
{{% /alert %}}

## 3 Additional Report Date Parameter Fields{#additional-fields}

You can add extra fields to allow the end-user to easily select date ranges without needing to enter both the **From** and **To** dates. For more information, see [Date Range Field](date-range-field).
