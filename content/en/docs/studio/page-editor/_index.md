---
title: "Pages"
url: /studio/page-editor/
description: "Describes the page editor in Mendix Studio."
weight: 20
tags: ["studio", "page editor", "pages"]
---

## 1 Introduction 

Pages define the end-user interface of a Mendix application. Pages are created and edited in the *page editor*.

To view the **Pages** of your app in Mendix Studio, click the **Pages** icon in the left menu bar of Studio.

{{< figure src="/attachments/studio/page-editor/pages-icon.png" >}}

{{% alert color="warning" %}}
Studio supports apps based on the Atlas UI framework only. For details on Atlas UI, see [Atlas UI](/howto/front-end/atlas-ui/).
{{% /alert %}}

Every page is *based on* a layout and a template:

* **Layout** – a frame you put your page in. Every page is based on a layout. For example, **Atlas_Default** or **PopupLayout** are types of layouts you can choose when creating a page. Layouts define a position and look of such UI elements as a page header and menu bars. 
* **Template** – a starting point for a new page. Every time you create a new page, you select a template depending on data you want to display on your page and the way you want to display it: a list, a dashboard, a form. Depending on your choice, a page template can have a number of predefined elements on it, such as lists with images, forms. For example, **Dashboard Action Tiles**, **List Default**, **Master Detail** are types of templates. 

*Look and structure* of a page is defined by the following elements:

* **Widgets** – single user-interface elements. For more information, see the [Widgets](#widgets) section and [Widgets](/studio/page-editor-widgets/).
* **Building blocks** – pre-configured set of *widgets* that speeds up the process of building your page and styling it. For more information, see the [Building Blocks](#building-blocks) section. 

The diagram below explains function of layouts, templates, and widgets:

{{< figure src="/attachments/studio/page-editor/page-structure.png" >}}

All elements described above (layouts, templates, widgets, and building blocks) are powered by Atlas UI. For more information on what Atlas UI is, see [Atlas UI](/howto/front-end/atlas-ui/). 

## 2 Performing Basic Functions {#page-editor-basic-functions}

You can perform the following basic functions when working on pages:

* [Open a page](#opening-page)
* [Create a page](#creating-new-page)
* [Duplicate a page](#duplicating)
* [Copy and paste a page](#copy-pasting)
* [Delete a page](#deleting-page)
* [Add elements on a page](#adding-elements)
* [View element properties](#viewing-elements) 
* [Delete elements](#deleting-elements)
* [Create an Entity](#create-entity)
* [Create an Association](#create-association)

### 2.1 Opening Pages {#opening-page}

After opening Studio, it automatically opens the home page of the app.

To open a page in Studio, do the following:

1. Click the **Pages** icon in the left menu bar. 
2. In the displayed list of app pages, select the one you want to open and click it.

The selected page is opened. 

### 2.2 Creating a New Page {#creating-new-page}

To create a new page in Studio, do the following:

1. Click the **Pages** icon.
2. Select the module you would like to add a new page to and click the plus icon next to this module.

    {{< figure src="/attachments/studio/page-editor/new-page.png" >}}

    For more information on what modules are, see [Domain Model](/studio/domain-models/).

3. In the **Create new page** dialog box, fill out the title of the page, select a layout and a page template.  

    {{< figure src="/attachments/studio/page-editor/create-new-page-dialog.png" >}}

4. Click **Create**.

A new page is created.

### 2.3 Duplicating a Page {#duplicating}

To duplicate an existing page, do the following:

1. Click the **Pages** icon in the left menu bar.
2. In the side panel, click the ellipsis icon and select **Duplicate** in the drop-down menu:

    {{< figure src="/attachments/studio/page-editor/duplicate-page.png" alt="Duplicate Page" >}}

The page is duplicated.

### 2.4 Copying and Pasting a Page {#copy-pasting}

To copy and paste a page, do the following:

1. Click the **Pages** icon in the left menu bar.
2. In the side panel, click the ellipsis icon and select **Copy to clipboard** in the drop-down menu:

    {{< figure src="/attachments/studio/page-editor/copy-page.png" alt="Copying a Page" >}}

3. Open the Studio app where you want to paste the page and press <kbd>Ctrl</kbd> +<kbd>V</kbd> or <kbd>Cmd</kbd> +<kbd>V</kbd>. 

Your page is pasted. For more information on copy/paste function in Studio, see the [Copy/Paste Pages, Microflows, and Enumerations](/studio/general/#copy-paste-documents) section in *General Info*.

### 2.5 Deleting a Page {#deleting-page}

To delete a page in Studio, do one of the following:

1. Open the page you want to delete and follow the steps below:
    1. Open the **Properties** tab.
    2. Click **Delete** at the bottom of the **Properties** tab.
        {{< figure src="/attachments/studio/page-editor/page-delete.png"   width="250"  >}}

2. Click the **Pages** icon in the left menu bar and do the following:

    1. In the side panel, click the ellipsis icon and select **Delete** in the drop-down menu:

        {{< figure src="/attachments/studio/page-editor/delete-page.png" alt="Delete Page" >}}

The selected page is deleted.

### 2.6 Adding Elements on a Page {#adding-elements}

To add elements on a page, do the following:

1. In **Toolbox**, open the [Widgets](#widgets) tab or the [Building Blocks](#building-blocks) tab.
2. Select an element you would like to add, drag this element onto a page. 

### 2.7 Viewing Elements On a Page {#viewing-elements}

There are two ways to view an element and its [properties](#page-editor-properties):

* Clicking the element on a page itself
* Clicking the element in a breadcrumb (for more information, see the [Breadcrumb](#breadcrumb) section)

The selected element is indicated with an blue border. Additionally, if the element is inside a data container (data view or a list view), it will be indicated with a data container icon:

{{< figure src="/attachments/studio/page-editor/input-widget-example.png"   width="350"  >}}

### 2.8 Deleting Elements from a Page {#deleting-elements}

To delete an element from a page, do one of the following:

* Select this element and press <kbd>Delete</kbd>
* Open the **Properties** tab of this element and this click **Delete** at the bottom of the tab

### 2.9 Creating an Entity from a Page {#create-entity}

You can create an entity from a page when configuring a data source for a widget that requires it. For example, you have a [data view](/studio/page-editor-data-view-list-view/) and you would like to set the *Customer* entity as its data source, but you do not have the **Customer** entity in you app yet. You can create it from the **Select Entity** dialog box without having to switch to the [domain model](/studio/domain-models/). Do the following:

1. Select data view properties > **Entity** property.
2. In the **Select Entity** dialog box, click the plus icon:
    {{< figure src="/attachments/studio/page-editor/creating-entity.png" alt="Select Entity dialog box"   width="400"  >}}
3. In the **Create New Entity** dialog box, set **Name** to **Customer**.
4. Click **Create**.

The new entity has been created in your app.

### 2.10 Creating an Association from a Page {#create-association}

You can create an [association](/studio/domain-models-association-properties/) from a page when configuring a data source for a widget that requires it. 

For example, you have a [data view](/studio/page-editor-data-view-list-view/) with the **Customers** entity. *Inside* the data view, you add a [list view](/studio/page-editor-data-view-list-view/) to show *reports* associated only with the customer who is currently shown in the data view. This means that you will show reports through an association. You can create the association from the page without having to open the domain model. Do the following:

1. Open the list view properties and click the **Entity** property.
2. In the **Select Entity** dialog box > **Entities Connected to Customer** section, click the plus icon:

    {{< figure src="/attachments/studio/page-editor/creating-association.png" alt="Select Entity dialog box"   width="400"  >}}

3. Select **Report** as the entity to connect the **Customer** entity with.
4. Click **Select**.

The association with the correct [multiplicity](/studio/domain-models-association-properties/#multiplicity) has been added to your app. 

## 3 Parameters

Page parameters provide context for the page and can be used in data views. For more information, see [Page Parameter](/studio/page-parameter/).    

## 4 The Show Option

Located in the upper-left corner of a page, the **Show** option highlights items that have [conditional visibility](/studio/page-editor-widgets-visibility-section/) configured for them. Click the eye icon to enable this option. For more information on conditional visibility and how it works, see [Conditional Visibility Section](/studio/page-editor-widgets-visibility-section/).  

## 5 Breadcrumb {#breadcrumb}

A breadcrumb is displayed on every page in the left bottom corner of Studio.

The breadcrumb serves two functions:

* Shows a bottom-up layering of a selected item on a page. For example, when you select a button on a page, you will see that it is placed in a container, which is in a column.  Whereas, the column is in a row, and this row is placed in a layout grid on the page:

    {{< figure src="/attachments/studio/page-editor/breadcrumb.png" >}}

* Allows you to select an element on the page and view its properties. To navigate to an element on a page and view element's properties, click this element in the breadcrumb.

## 6 Toolbox Elements

The **Toolbox** shows the tools that can be used on pages. 

This tab consists of the following:

* [Widgets](#widgets)
* [Building Blocks](#building-blocks)

### 6.1 Widgets {#widgets}

Widgets are single user-interface elements that can be configured. 

You can [quickly configure](/studio/page-editor-widgets/#quick-config) most of the non-custom widgets when adding them on a page. For more information on how to configure widgets, see [Widgets](/studio/page-editor-widgets/). 

You can update widgets in the [Widget Overview](/studio/settings-widget-overview/). 

### 6.2 Building Blocks {#building-blocks}

Building blocks consist of pre-set widgets that allow you to build a page faster:  

{{< figure src="/attachments/studio/page-editor/building-blocks.png"   width="300"  >}}

Building blocks of Studio are divided into the following categories:

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

If you want to read documentation on a particular building block and to know more about how and when to use it, click the small icon in the top right corner of the building block.

{{< figure src="/attachments/studio/page-editor/info-icon-building-blocks.png"   width="300"  >}}

{{% alert color="info" %}}
Building blocks categories may differ because Atlas UI can be customized using Studio Pro.
{{% /alert %}}

## 7 Properties Tab {#page-editor-properties}

The **Properties** tab displays the properties of the currently selected element and can differ per element. 

{{< figure src="/attachments/studio/page-editor/properties.png"   width="250"  >}}

For example, if you click **Layout**—which is the layout that you choose when [creating a page](#creating-new-page)—in the breadcrumb, properties will display reference information on page-related actions that you can perform, such as changing the page title and customizing pages' look: 

{{< figure src="/attachments/studio/page-editor/layout.png" >}}

## 8 Main Documents in This Category

* [Widgets](/studio/page-editor-widgets/) – describes different type of widgets
