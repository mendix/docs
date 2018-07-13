---
title: "Page Editor Overview in the Web Modeler"
category: "Web Modeler"
description: "Describes the page editor in the Mendix Web Modeler."
tags: ["web modeler", "page editor", "pages"]
---

## 1 Introduction 

The page editor allows a user to define the end-user interface of a Mendix application. 

To view the **Pages** of your app in the Web Modeler, click the **Pages** icon in the left menu bar of the Web Modeler.

![](attachments/page-editor-wm/wm-pages-icon.png)

{{% alert type="warning" %}}

The Web Modeler supports apps based on the Atlas UI framework only. For details on Atlas UI, see [Atlas UI](../../howto/atlasui/).

{{% /alert %}}

## 2 Components

Pages of the Web Modeler consist of the following components:

* [Layouts](https://atlas.mendix.com/index3.html#/layout/7881299347899569) 
* [Templates](https://atlas.mendix.com/index3.html#/templates)
* [Building blocks](https://atlas.mendix.com/index3.html#/buildingblocks)
* [Widgets](https://atlas.mendix.com/index3.html#/widgets)

The components described above are powered by Atlas UI. For more information, see [Atlas UI](https://atlas.mendix.com/index3.html#/getstarted/7881299347898769). 

## 3 Performing Basic Functions 

### 3.1 Opening Pages

After opening the Web Modeler, it automatically opens the home page of the app.

To open a page in the Web Modeler, do the following:

1. Click the **Pages** icon in the left menu bar. 

   ![](attachments/page-editor-wm/wm-pages.png)

2. In the displayed list of app pages, select the one you want to open and click it.

The selected page is opened. 

### 3.2 Creating a New Page {#creating-new-page}

To create a new page in the Web Modeler, do the following:

1. Click the **Pages** icon.

2. Click **New** in the top right corner of the displayed side panel.

   ![](attachments/page-editor-wm/wm-new-page.png)

3. In the **Create new page** dialog window, fill out the title of the page, select the layout and the [page template](https://atlas.mendix.com/index3.html#/templates).  

4. Click **Create**.

   ![](attachments/page-editor-wm/wm-create-new-page-dialog.png)

A new page is created.

### 3.3 Deleting a Page

To delete a page in the Web Modeler, do the following:

1. Open the page you want to delete.

2. Open the **Properties** tab.

3. Click **Delete** at the bottom of the **Properties** tab.

   ![](attachments/page-editor-wm/wm-page-delete.png)

   The selected page is deleted.

### 3.4 Viewing Elements On a Page

To view an element and its [properties](#page-editor-properties), click this element. 

The selected element is indicated with an orange border. Additionally, if the element is inside a data view or a list view, that data/list view will be indicated with a blue border.

![](attachments/page-editor-wm/wm-orange-blue-boarders.png)

## 4 Breadcrumb Trail

When you select an item on your page, there appears a breadcrumb trail in the left bottom corner of the Web Modeler.

The breadcrumb trail serves two functions:

* Shows a bottom-up layering of a selected item on a page
* Allows the user to select an element on the page and view its properties 

For example, when you select a button on a page, you will see that it is placed in a container, which is in a column.  Whereas, the column is in a row, and this row is placed in a layout grid on the page.

![](attachments/page-editor-wm/wm-breadcrum.png)

To view information on the element click this element in the breadcrumb trail and its properties are displayed automatically.

### 4.1 Viewing Navigation Layout Information with Breadcrumb Trail

You can also view the information on Navigation layout by clicking it in the breadcrumb trail.

The following options will be displayed in the **Properties** tab:

![](attachments/page-editor-wm/wm-navigation-layout.png)

## 5 Toolbox Tab

The **Toolbox** shows the tools that can be used in the Page editor. 

This tab consists of the following:

* [Building Blocks](#building-blocks)
* [Widgets](#widgets)

### 5.1 Building Blocks {#building-blocks}

Building blocks consist of pre-set widgets that allow you to build a page faster: you only need to drag-and-drop them to the page.  

![](attachments/page-editor-wm/wm-buildingblocks.png)

Building blocks of the Web Modeler are divided into the following categories:

| Building Block | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| Headers        | A header combines the functionality of a page title and a control bar for your page. Due to its compact design and versatility it is often used in mobile pages. |
| Lists          | Use these blocks when you need to display a list of data.    |
| Cards          | Cards contain diverse building blocks for different purposes. |
| Charts         | Use these building blocks if you want to present your data as a chart. |
| Forms          | Use these building blocks for a form to be filled out by users in your app. |
| List Controls  | Represent data as a control list and help you to sort and search items in the list. |
| Master Detail  | Use these building blocks to display the list of many items, but to show the details only for the selected element. |
| Breadcrumbs    | Use these building blocks when you want to show the current page location in your application. |
| Timeline       | Contains building blocks that show a list of events.         |
| Wizards        | Use these building blocks for inputting information step by step. |
| Notifications  | Contain building blocks used for different notifications.    |
| Alignments     | Use these building blocks to align elements.                 |

To insert a building block, drag and drop the selected building block on the page.

If you want to read documentation on a particular building block and to know more about how and when to use it, click the small icon in the top right corner of the building block.

![](attachments/page-editor-wm/wm-info-icon-building-blocks.png)

{{% alert type="info" %}}

Building Blocks categories may differ because Atlas UI can be customized using the Desktop Modeler.

{{% /alert %}}

### 5.2 Widgets {#widgets}

Widgets are single user-interface elements that can be configured. For more information, see [Widgets in the Web Modeler](page-editor-widgets-wm). 

{{% alert type="info" %}}

You can update widgets in the [App Settings](app-settings-wm). 

{{% /alert %}}

## 6 Properties Tab {#page-editor-properties}

The **Properties** tab displays the properties of the currently selected element and differs depending on this element. 

![](attachments/page-editor-wm/wm-properties.png)



## 7 Related Content

* [Data View and List View Properties in the Web Modeler](page-editor-data-view-list-view-wm)
