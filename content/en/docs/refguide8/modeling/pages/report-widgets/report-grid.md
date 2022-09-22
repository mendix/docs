---
title: "Report Grid"
url: /refguide8/report-grid/
weight: 10
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/report-grid.pdf).
{{% /alert %}}

{{% alert color="warning" %}}The report grid widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

A **Report grid** shows data retrieved from the database using a [Data set](/refguide8/data-sets/) in a grid format. Each row in the grid displays a single result from the data set. Each time a report is created, the data is retrieved from the database.

The difference between a data grid and a report grid is that you can use a data grid to edit the data shown. A report grid will only display data. However, in a report grid, you can create additional information by merging and processing attributes when you define the data set which retrieves the data.

The report grid is displayed in structure mode with the data set source shown between square brackets and colored blue. The data fields returned by the data set are shown in the report grid columns, under the column captions. See [Report Grid Column Data Source](#column-data-source) for information on how to assign a data field to a column.

{{< figure src="/attachments/refguide8/modeling/pages/report-widgets/report-grid/report-grid.png" alt="Report grid in structure mode" >}}

## 2 Report Grid Properties

An example of report grid properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/report-widgets/report-grid/report-grid-properties.png" alt="Report grid in structure mode"   width="300"  >}}

Report grid properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [General](#general)

Each column in a report grid also has properties: see [Report Grid Column Properties](#column-properties), below.

### 2.1 Common Section{#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### 2.2 Data Source Section{#data-source}

#### 2.2.1 Data Set

**Data set** specifies the [Data set](/refguide8/data-sets/) which defines the data that will be shown in the report grid. Any of the selected attributes or aggregations (for example totals or averages) from the data set can be dragged into a data grid column from the **Connector** pane: see [Report Grid Column Data Source](#column-data-source), below.

### 2.3 Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### 2.4 General Section{#general}

#### 2.4.1 Use Paging

Set **Use paging** to **Yes** if you expect more data than you can display on one page. This splits the results into several pages.

#### 2.4.2 Page Size

**Page size** specifies the number of results which are displayed on one page if **Use paging** is yes.

#### 2.4.3 Zoom {#zoom}

**Zoom** specifies a page which will be displayed when the end-user double-clicks a result in the report.

If the selected page contains a report, the columns of the current report can be mapped to the parameters of the data set which is the basis of the report in the other page.

{{< figure src="/attachments/refguide8/modeling/pages/report-widgets/report-grid/report-zoom.png" alt="Zoom configuration showing columns being passed as parameters" >}}

#### 2.4.4 Column Widths

The widths of the columns are expressed as a percentage of the total width of the basic report. You can edit this property in two ways:

* by dragging the border between the columns:

    {{< figure src="/attachments/refguide8/modeling/pages/report-widgets/report-grid/drag-column-width.png" alt="Drag column widths" >}}

* by entering the percentages explicitly

    {{< figure src="/attachments/refguide8/modeling/pages/report-widgets/report-grid/enter-column-widths.png" alt="Enter column widths" >}}

Each column in a report grid also has properties: see [Report Grid Column Properties](#column-properties), below.

The data source for each column can be dragged into the column from the **Connector** pane: see [Report Grid Column Data Source](#column-data-source), below.

#### 2.4.5 Show Export Button

Set **Show export button** to **Yes** to display the **Export to Excel** button to the end-user on the report grid.

{{< figure src="/attachments/refguide8/modeling/pages/report-widgets/report-grid/export-to-excel.png" alt="Add the Export to Excel button" >}}

When the end-user clicks this button, the report is exported as a `Microsoft Excel 97-2003 Worksheet` which the end-user can download or view, depending on their browser's settings.

#### 2.4.6 Generate on Page Load

If **Generate on page load** is set to **No**, the report grid will not show any data until the end-user presses the [Generate report button](/refguide8/report-button/). This is especially useful if the report uses parameters that should first be specified by the end-user. 

## 3 Report Grid Column Properties{#column-properties}

An example of report grid properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/report-widgets/report-grid/report-grid-column-properties.png" alt="Report grid column properties"   width="250"  >}}

Report grid properties consist of a single section, [General](#column-general).

### 3.1 General Section{#column-general}

#### 3.1.1 Caption

**Caption** contains the text which appears at the top of each column of the report grid.

#### 3.1.2 Alignment

**Alignment** sets the alignment of the caption and data displayed in this column. The values are:

* Left
* Center
* Right

#### 3.1.3 Format

**Format** allows you to convert a numeric value in the column to a month or day name. If the value in the column is not a number, **Default** format will be used.

The possible values are:

* Default – the data will be displayed in the default string format
* Month name – a numeric value will be interpreted as a month name (for example **8** is displayed as **August**)
* Weekday name – a numeric value will be interpreted as a day of the week (for example **4** is displayed as **Wednesday**)

#### 3.1.4 Visible

If **Visible** is set to **No** then this column will not be displayed in the report.

This can be used to add a value to the report which can be passed to a report on a page specified with [Zoom](#zoom) without displaying it as part of the report.

## 4 Report Grid Column Data Source{#column-data-source}

To add data to a column, select the column, open the **Connector** pane, and drag one of the results into the column. You will need to select the report grid, or part of it, to see the results of the data set in the connector pane.

{{< figure src="/attachments/refguide8/modeling/pages/report-widgets/report-grid/drag-column-value.png" alt="Drag value from Connector pane into a column" >}}
