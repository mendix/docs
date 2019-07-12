---
title: "Pages"
category: "App Modeling"
tags: ["Pages", "Widgets", "Studio Pro", "page structure"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A page is an end-user interface of a Mendix application. Pages are created, edited, manipulated in the page editor. 

Every page is based on a page layout and a page template. A layout is a frame you put your page in. A page template is a basis with predefined elements (widgets).  

![](attachments/pages/page-structure.png)

For more information on page properties, see [Page](page).

## 2 Page and Page Resources

In addition to a page, you can add page resources in the page editor. They help structure your page, style it, and fill it with data. For more on how to add page resources, see [Page Resources](page-resources). 

Type | Description
--- | ---
[![](attachments/pages/layout-icon.png)Layout](layout) | A [layout](layout) is a frame that your page is placed in. If you change the layout, all pages based on it will inherit this change. <br />Layout contain predefined elements that ensure unified and consistent look and feel of your application across one platform: the position of the header, size of the logo, position of the menu, etc. For example, in responsive layouts the header can be wide and with a big logo, while in mobile layouts the header will be narrower and the logo will be smaller due to the limited space. 
[![](attachments/pages/page-template-icon.png)Page template](page-templates) | A [page template](page-templates) is a basis for your page that predefines its structure. For example, you can create a page template for a customer list that will contain list views with images in it. Thus, every time you need to create a page with similar list on it, you will base it on this template.    By mapping out common design patterns, a lot of the initial work involved in creating a new page can be simplified by setting up a proper set of page templates. 
[![](attachments/pages/snippet-icon.png)Snippet](snippet) | A [snippet](snippet) defines reusable interface parts. They can be used on pages and layouts. By using snippets, you will make changes in fewer places if you want to modify the interface. For example, you can have a snippet that is used both in the contents area of a template grid and in a data view. If you add a row to a table in the snippet, that change will show up in both places. 
[![](attachments/pages/building-block-icon.png)Building block](building-block) | A [building block](building-block) is pre-styled set of widgets. Building blocks will automatically appear in the page editor toolbox, allowing for easy reuse. By designing a comprehensive library of building blocks, a great deal of the fussy work involved in page design can be averted. 
[![](attachments/pages/page-icon.png)Page](page) | A [page](page) is the end-user interface of a Mendix application. Pages are the things that are actually shown to the end-user. 
[![](attachments/pages/menu-icon.png)Menu](menu) | A [menu](menu) defines a menu structure that can be used by a menu widget. 
[![](attachments/pages/image-collection-icon.png)Image collection](image-collection) | An [image collection](image-collection) is a page resource where you place custom images to use them in your application. For more information, see [Images](images). 

## 3 Widgets and Their Categories

All the documents described above are built using widgets. There are many kinds of widgets, and not every widget can be used on all of the document types. Layouts support widgets for giving structure to pages, but not widgets for showing data. This is to make the intention of layouts clear: they should define what comes where and not much more. However, snippets can be placed in layouts, and that is an indirect way to include more kinds of widgets in a layout.

Widgets are grouped into the following categories:

* [Data widgets](data-widgets) are central to building forms in Mendix; with these widgets, you can view and edit the data in the application
* [Common widgets](common-widgets) are commonly found on any page, layout, or snippet
* [Container widgets](container-widgets) can contain other widgets
* [Input widgets](input-widgets) make it possible to show and edit the values of attributes and associations
* [File widgets](file-widgets) allow you to work with files, including images stored in files
* [Button widgets](button-widgets) are buttons that trigger actions
* [Menu widgets](menu-widgets) allow the user to navigate through the application
* [Report widgets](report-widgets) aggregate data and show it in the form of a table or a chart
* [Authentication widgets](authentication-widgets) allow to add the user verification process such as password and login id text boxes.
* Add-on widgets can be downloaded from the [Mendix App Store](https://appstore.mendix.com/) or created by yourself using JavaScript
  * [Chart widgets](chart-widgets) are add-on widgets that graphically represent data using various chart types

## 4 Read More

* [Page Resources](page-resources)
* [Page](page)