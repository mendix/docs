---
title: "Layout Grid Rows & Columns"
parent: "layout-grid"
tags: ["studio pro", "layout grid", "column", "row"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Layout grid rows and columns are components of a [layout grid](). You can define the number of columns in a row, their size and alignment.

{{% alert type="info" %}}

Row and column properties described below are available if your project has [Mendix version 8.5](/release) or above  and Atlas UI Resources version 2.4.0 or above. 

{{% /alert %}}

## 2 Rows and Their Properties

A layout grid can contain one or more rows. Each row contains [columns](#columns) and the number of columns can differ per row.

An example of layout grid row properties is represented in the image below:

{{% image_container width="300" %}}![Row Properties](attachments/container-widgets/row-properties.png)

Row properties consist of the following sections:

* [Common](#row-common)
* [General](#row-general)
* [Visibility](#row-visibility)

### 2.1 Common Section {#row-common}

{{% snippet file="refguide/common-section-link.md" %}}

### 2.1 General Section {#row-general}

The **General** section of a row contains the following properties:

* **Columns** – sets the number of columns in the row
* **Align columns vertically** – this property aligns all columns in a row vertically. You can select the following options:
  
  * **Not set** – alignment is not set
  
  * **Top** – columns are aligned to the top of the layout grid
  
  * **Center** – columns are aligned to the center of the layout grid
  
  * **Bottom** – columns are aligned to the bottom of the layout grid
  
    {{% alert type="info" %}}This setting can be overridden by the **Align vertically** setting of an individual column.
    {{% /alert %}}
  
* **Spacing between columns** – when set to *Yes*, adds spacing between columns

### 2.2 Visibility Section {#row-visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 3 Columns and Their Properties{#columns}

Columns form a row of a layout grid.  

 An example of layout grid column properties is represented in the image below:

![Column Properties](attachments/container-widgets/column-properties.png)

Layout grid column properties consist of the following sections:

* [Common](#column-common)
* [General](#column-general)

### 3.1 Common Section

{{% snippet file="refguide/common-section-link.md" %}}

### 3.2 General Section

#### 3.2.1 **Width** {#column-width}

You can set the column width for desktop, tablet, or phone by using the corresponding property: **Desktop Width**, **Tablet Width**, **Phone Width**. 

{{% alert type="info" %}}

Setting width per device is unavailable for Native pages. 

{{% /alert %}}

You can choose the following options:

* **Auto-fill** – takes the available space for a column (for example, if there is one column, it will span the column for the whole row, and for two columns, it will divide the space equally between them)
* **Auto-fit content** – automatically fits the size of the column to its content
* **Manual** – allows you to manually set the size of the columns by setting the [size](#column-size) option 

The [Width](#column-width) property can be used to make your layout more flexible and adaptive to different types of devices.

For example, you have a layout grid with one row and two columns: a picture is in one column, and a text with details is in another.

For the *desktop*, you might want to set the first column with a picture to **Auto-fit content** and and the second one to **Auto-fill**, this way the first column will adjust to the size of the picture, while the second one will take the rest of the row:

![Layout Example, Desktop](attachments/container-widgets/layout-example-desktop.png)

For *tablet*, you can set both columns to **Auto-fill** and you will get two equal columns:

![Layout Example, Tablet](attachments/container-widgets/layout-example-tablet.png)

For *phone*, it can be a good idea to place two columns one under another, setting them to **Manual** width of *12* (for more information on the column size property, see the [Size](#column-size) section). In this case, the second column will be automatically wrapped to another line:

 ![Layout Example, Phone](attachments/container-widgets/layout-example-phone.png)

On the picture below you can see the settings for two column described above:

![](attachments/container-widgets/column-settings-example.png)

#### 3.2.2 **Size** {#column-size}

The **Size** option is displayed only if the [width](#column-width) is set to **Manual**. 

This setting allows you to manually set the column size for desktop, tablet, or phone by using the corresponding property: **Desktop Size**, **Tablet Size**, **Phone Size**. 

#### 3.2.3 Align Vertically

The **Align vertically** property overrides the **Align columns vertically** property on the row and sets alignment for an individual column.  

## 4 Performing Basic Actions

### 4.1 Adding a New Row or a Column

To add a new row, do the following:

1. Select an existing row in a layout grid.

2.  Right-click and select **Insert row above** or **Insert row below**:

    ![Adding a New Row](attachments/container-widgets/adding-row.png)

3. Select a column layout (how many columns should be in a row and what weight columns should have).

A new row is added to the layout grid.

To add a new column, do the following:

1. Select a column next to which you want to add a new one.
2. Right-click and select **Add column left** or **Add column right**.

A new column is added, the weight 1 is automatically set for it. 

### 4.2 Performing Other Actions on Rows

In adding to inserting a new row, you can perform the following actions when right-clicking a row:

* **Move up** – moves a row up in the layout grid, you can use a shortcut for it  <kbd>Ctrl</kbd> + <kbd>↑</kbd> 
* **Move down** – moves a row down in the layout grid, you can use a shortcut for it  <kbd>Ctrl</kbd> + <kbd>↓</kbd> 

### 4.3 Performing Other Actions on Columns

In adding to inserting a new column, you can perform the following actions when right-clicking a column:

* **Move left** – moves a column left in the row, you can use a shortcut for it  <kbd>Ctrl</kbd> + <kbd>←</kbd> 
* **Move right** – moves a column right in the row, you can use a shortcut for it  <kbd>Ctrl</kbd> + <kbd>→</kbd> 
* **Row** – allows you to perform actions on the column's row 

## 5 Read More

* [Page](page)
* [Layout Grid](layout-grid)
* [Properties Common for Widgets](common-widget-properties)
