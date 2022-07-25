---
title: "Page"
url: /refguide8/page/
weight: 10
tags: ["studio pro", "page", "properties"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/page.pdf).
{{% /alert %}}

## 1 Introduction

{{% alert color="info" %}}

This document describes basic functions you can perform in the page editor and its modes. For details on what pages are for and what kind of widgets can be placed on them, see [Pages](/refguide8/pages/).

{{% /alert %}}

Pages define the end-user interface of a Mendix application. Every page is based on a [layout](/refguide8/layout/). A page fills the "gaps" defined by a layout with widgets such as the [data view](/refguide8/data-view/) and [data grid](/refguide8/data-grid/).

## 2 Performing Basic Functions

You can perform the following basic function when working in the page editor:

* Open a page
* Create a page
* Delete a page
* Add elements on a page
* View element properties
* Arrange elements on a page

### 2.1 Opening a Page

To open a page in Studio Pro, do the following:

1. In the [Project Explorer](/refguide8/project-explorer/), open a module where this page is located. 

2. Navigate to the page's location inside the module. A page can be listed as an individual element or be included in the **Pages** folder:

    {{< figure src="/attachments/refguide8/modeling/pages/page/project-explorer-pages.png" >}}

3. Select a page you want to open and double-click it.

The selected page is opened. 

### 2.2 Creating a Page

To create a new page, do the following:

1.  In the [Project Explorer](/refguide8/project-explorer/), right-click the module or a folder you want to create a page in and select **Add page**:

    {{< figure src="/attachments/refguide8/modeling/pages/page/add-page.png"   width="350"  >}}

2.  In the **Create Page** dialog box, fill in the **Page name** and select a **Navigation layout**.

    {{< figure src="/attachments/refguide8/modeling/pages/page/create-page.png" >}}

3. Click **OK**. 

A new page is created.

### 2.3 Deleting a Page

To delete a page, do the following:

1. In the [Project Explorer](/refguide8/project-explorer/), select a page you would like to delete and right-click it.
2. In the displayed list, select **Delete** and confirm your choice by clicking **Delete** in the pop-up dialog.

The selected page is deleted. 

### 2.4 Adding Elements on a Page {#add-elements}

The way you can add an element on a page depends on a mode you are editing your page in. For more information on modes, see the [Page Editor Modes](#page-editor-modes) section.

In **Structure mode**, there are several ways to add an element on a page:

1.  Through the **Toolbox**:

    1. Open the **Toolbox** and select **Widgets** or **Building blocks** tab there.
    
        {{< figure src="/attachments/refguide8/modeling/pages/page/toolbox.png" >}}
      
    2. Select an element you would like to add and drag and drop this element on your page.
   
2. Through the menu at the top of the page:

    1. Do one of the following:

        i. Select frequently-used widgets (a data view, a data grid, a template grid, or a list view).

        ii. Click **Add widget**  or **Add building block**, find an element in a list and click **Select**.

        {{< figure src="/attachments/refguide8/modeling/pages/page/top-menu.png" >}}
        
    2. Click a drop-zone on a page to position an element.

3. By right-clicking a drop-zone:<br/>

    a. Right-click a drop-zone you want to insert an element in.<br/>

    b. Select between adding a widget or a building block.<br/>

    {{< figure src="/attachments/refguide8/modeling/pages/page/adding-widget-in-drop-zone.png"   width="400"  >}}<br/>

    c. Select an element you would like to add and confirm your choice by clicking **Select**.

In **Design mode**, you can add elements though the Toolbox. Do the following:

1. Open the **Toolbox** and select **Widgets** or **Building blocks** tab there. 
2. Select an element you would like to add and drag and drop this element on your page.

### 2.5 Viewing Element Properties {#view-properties}

To view properties of an element, do one of the following:

1. Select an element and open **Properties** pane to view its properties.
2. Right-click an element and select **Properties** from the list of options that opens.
3. Double-click an element.

### 2.6 Arranging Elements on a Page {#arrange-elements}

To cut/copy/paste you can use the following shortcuts:

* <kbd>Ctrl</kbd> + <kbd>Z</kbd> /  <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>V</kbd>  
* <kbd>Cmd</kbd> + <kbd>Z</kbd> /  <kbd>Cmd</kbd> + <kbd>C</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd>

{{% alert color="info" %}}

You can cut/copy/paste elements on a page to different apps in Studio Pro if they have the same Mendix version. However, you cannot cut/copy/paste the whole page.

You cannot cut/copy/paste from Studio Pro to Studio.

{{% /alert %}}

To delete an element from a page, select this element and press <kbd>Delete</kbd> or right-click an element and select **Delete** in a drop-down menu. 

## 3 Page Editor Modes {#page-editor-modes}

There are two different ways to edit your page:

* [Structure Mode](#structure-mode), the default editor which clearly shows the relationship between page elements, together with additional information about each element
* [Design Mode](#design-mode), a WYSIWYG (**W**hat **Y**ou **S**ee **I**s **W**hat **Y**ou **G**et) editor which better reflects what the page will look like when it is published

You can switch to the WYSIWYG editor from the default editor by clicking the **Design mode** button in the page editor.
You can return to the structural editor by clicking **Structure mode**.

{{< figure src="/attachments/refguide8/modeling/pages/page/design-mode.png" alt="Design mode and Structure mode buttons" >}}

Both modes allow you to edit your page by doing the following:

* Dragging widgets from the **Toolbox** pane onto the page
* Dragging widgets, and their contents, from one place on the page to another
* Viewing and editing properties of each widget in the **Properties** pane
* Opening a **Properties** dialog box from the menu you get when you right-click the widget

### 3.1 Structure Mode {#structure-mode}

In **Structure mode**, the page widgets are laid out so that it is easy to see the logical relationship between them. It has the following features which are not available in Design mode:

* Widgets are shown with additional information easily visible – for example, data sources for data views and the width assigned to columns

	{{< figure src="/attachments/refguide8/modeling/pages/page/structure-mode-info.png" alt="Frequently-used widgets" >}}

* Each widget has a drop-zone before/above and after/below it – this makes it easier to place widgets correctly when they appear close together in Design mode
* Right-click a drop-zone allows you to insert a widget into it
* There is a menu at the top of the page of data widgets – these cannot be dragged, but are positioned by clicking a drop-zone after selecting the widget

	{{< figure src="/attachments/refguide8/modeling/pages/page/frequently-used.png" alt="Frequently-used widgets" >}}

* Widgets are shown without styling applied to them, but you can see which widgets do have styling applied via the class or style property by clicking the **Show styles** button.

    {{< figure src="/attachments/refguide8/modeling/pages/page/show-styles.png" alt="Show styles button" >}}

### 3.2 Design Mode {#design-mode}

In **Design mode**, the page is laid out as it will appear when published so that it is easy to see the spatial relationship between the elements.

For example, the example page shown in [Structure Mode](#structure-mode), above, will look like this in **Design mode** for a tablet:

{{< figure src="/attachments/refguide8/modeling/pages/page/design-mode-example.png" alt="Design mode page as displayed on a tablet" >}}

It has the following features which are not available in **Structure mode**:

* The widgets are shown as they will be on the page – for example two text widgets which are laid out vertically in structural mode may actually be laid out horizontally when the app is published, and this will be reflected in Design mode
* The page layout can be seen for different device modes – for example phone or browser by clicking the appropriate device mode button:

	{{< figure src="/attachments/refguide8/modeling/pages/page/design-factor.png" alt="Show styles button" >}}

* The widgets have design properties and CSS classes and styles applied to them so you can see what they will look like
* Toggle showing conditionally-visible widgets in the top bar:

	{{< figure src="/attachments/refguide8/modeling/pages/page/conditional-visibility.jpg" alt="Show conditional visibility" >}}


## 4 Read More

* [Pages](/refguide8/pages/)
* [Page Properties](/refguide8/page-properties/)
