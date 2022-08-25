---
title: "Date Range Field"
url: /refguide/date-range-field/
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A **Date range field** can be placed inside a [Report date parameter](/refguide/report-date-parameter/) to make it easier for an end-user to select a date range, rather than having to specify a from and to date. The report date parameter is then updated with the from and to dates of the selected period.

To add a date range field, right-click the widget and choose **Add field** from the pop-up menu.

{{< figure src="/attachments/refguide/modeling/pages/report-widgets/report-date-parameter/date-range-field/add-field.png" alt="Add a date range field to a report date parameter" >}}

## 2 Date Range Field Properties

An example of date range field properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/report-widgets/report-date-parameter/date-range-field/date-range-field-properties.png" alt="Date range field in structure mode"   width="300"  >}}

Date range field properties have only a [General](#general) section.

### 2.1 General Section{#general}

#### 2.1.1 Label

The **Label** property specifies the text that is displayed beside the date range field.

#### 2.1.2 Type

**Type** determines the sort of range which the end-user can select.

| Type | Behavior | Example | Range |
| --- | --- | --- | --- |
| Year | Allows the end-user to select a calendar year.<sup><small>[1]</small></sup> | 2019 | 1 January 2019 to 31 December 2019 |
| Quarter<sup><small>[2]</small></sup> | Allows the end-user to select a quarter of the year. | 2019 > 2 | 1 April 2019 to 30 June 2019 |
| Month<sup><small>[2]</small></sup> | Allows the end-user to select a month of the year. | 2019 > May | 1 May 2019 to 31 May 2019 |
| Week<sup><small>[2]</small></sup> | Allows the end-user to select a week of the year. | 2019 > Week 19 | 5 May 2019 to 12 May 2019 |
| Period<sup><small>[2]</small></sup> | *The Period date range field is being deprecated. It is recommended that you use one of the other types of date range field.*  | | |

| **Notes** |
| --- |
| <sup><small>[1]</small></sup> The year will be between the **Min. year** and **Max. year** (inclusive) specified in the [report date parameter](/refguide/report-date-parameter/) widget. |
| <sup><small>[2]</small></sup> You also need to add a **Year** date range field if you use a date range field of this type.<br />– The end-user will need to choose the year before they can choose a date range field of this type.<br />– The end-user can only choose one of these types, plus the year. |
