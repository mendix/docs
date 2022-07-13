---
title: "Table"
url: /refguide/table/
weight: 60
tags: ["studio pro", "table", "container widget", "widget"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The table widget is not supported on native mobile pages.
{{% /alert %}}

## 1 Introduction

Tables can be used to give structure to a page. They contain [rows](/refguide/table/#rows), columns, and [cells](/refguide/table/#cells). Each cell can contain widgets. 

For example, you can create a table with text widgets, a logo, and a data view information as a customer report:

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/table/table.png" >}}

## 2 Components

A table consist of [rows](#rows), columns, and [cells](#cells). 

### 2.1 Rows and Their Properties {#rows}

A table can contain one or more rows. Each row contains columns and the number of columns can differ per row.

A row has the following properties:

* **Class** – allows you to specify one or more cascading style sheet (CSS) classes
* **Style** – allows you to specify additional CSS styling
* **Visible** – allows you to hide an element from a page

For more information on properties listed above, see [Properties Common in the Page Editor](/refguide/common-widget-properties/).

### 2.2 Cells and Their Properties {#cells}

Each section of a table row or column is called a cell. Cells can contain widgets.

A cell has the following properties:

* **Class** – allows you to specify one or more cascading style sheet (CSS) classes (for more information on this property, see [Properties Common in the Page Editor](/refguide/common-widget-properties/))

* **Style** – allows you to specify additional CSS styling (for more information on this property, see [Properties Common in the Page Editor](/refguide/common-widget-properties/))

* **Cell type** – indicates the type of the cell, the following options are possible:

  * **Normal** – ordinary cell containing data
  * **Header** – a table header cell

### 2.3 Performing Actions on Rows

To perform an action on a row , select a row and right-click it. A list of actions will open. 

You can perform the following actions:

* **Add column left** – creates a column to the left of the selected one
* **Add column right** – creates a column to the right of the selected one
* **Move left** – moves a column left in the row
* **Move right** – moves a column right in the row

### 2.4 Performing Actions on Columns

To perform an action on a column , select a column and right-click it. A list of actions will open. 

You can perform the following actions:

* **Add row above** – creates a row above the selected one
* **Add row below** – creates a row below the selected one
* **Move up** – moves a row up
* **Move down** – moves a row down

### 2.5 Performing Actions on Cells

To perform an action on a cell, select a cell and right-click it. A list of actions will open. 

You can perform the following actions:

* **Add widget** – opens a list of widgets, adds the selected widget to the cell
* **Add building block** – opens a list of building blocks, adds the selected widget to the cell
* **Add row above** – creates a row above the selected one
* **Add row below** – creates a row below the selected one
* **Add column left** – creates a column to the left of the selected one
* **Add column right** – creates a column to the right of the selected one
* **Merge left** – merges a cell to the left of the selected one, you can only merge an empty cell 
* **Merge right** – merges a cell to the right of the selected one, you can only merge an empty cell 
* **Merge up** – merges a cell above the selected one, you can only merge an empty cell 
* **Merge down** – merges a cell below the selected one, you can only merge an empty cell 
* **Unmerge** – turns merged cells into separate ones
* **Delete row** – deletes the selected row
* **Delete column** – deletes the selected column

To merge cells to the right, left, up, or down, you can also click the corresponding icon:

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/table/merge-icons.png" alt="Merge Icons" >}}

## 3 Properties

An example of table properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/table/table-properties.png" alt="Table Properties"   width="250"  >}}

Table properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [General](#general)
* [Visibility](#visibility)

### 3.1 Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### 3.2 Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### 3.3 General Section {#general}

#### 3.3.1 Width Unit

The **Width Unit** defines whether the [Column widths](#column-widths) property is set in percentage or in pixels. 

| Value | Description |
| --- | --- |
| Percentage  *(default)* | The **Column widths** property is specified in percentages. When resizing, columns will become wider/narrower while keeping the same relative widths. |
| Pixels | The **Column widths** property is specified in pixels. When resizing, the pixel width columns will keep the same size; auto columns will become wider/narrower. |

#### 3.3.2 Column Widths {#column-widths}

The **Column widths** property defines the widths of each column as a list of numbers separated by semi-colons. The **Width unit** (described above) determines if these numbers mean percentages or pixels. 

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/table/width-unit-and-column-widths.png" alt="Width Unit and Column Widths" >}}

When **Width unit** is set to *Pixels*, you can set column width to the following:

* **Auto** – columns are evenly divided in the available space of the row
* **Fixed** – columns have a specified pixel value

For example, you can you can have three columns of which the first is 200 pixels wide (*Fixed* width), the second is 100 pixels (*Fixed* width), and the last one is set to *Auto* which means that it will take up the rest of the space in the row.

### 3.4 Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

## 4 Read More

* [Page](/refguide/page/)
* [Structure](/refguide/structure-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)


