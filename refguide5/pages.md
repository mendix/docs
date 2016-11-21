---
title: "Pages"
category: "Modeler"
space: "Reference Guide 5"
---


This document describes what pages are for and what kind of widgets can be placed on them. The properties of a page, snippet or layout document can be found on the documentation pages of those document types: [Page](/refguide5/page) , [Snippet](/refguide5/snippet) and [Layout](/refguide5/layout) .


[![](attachments/4522061/13402396.png)](/refguide5/pages)
[Pages](/refguide5/page) define the end user interface of a Mendix application. Apart from pages there are two other types of document that come into play when creating an interface: layouts and snippets. Pages are the things that are actually shown to the end user. Snippets and layouts are building blocks for creating pages but they are not shown to the user directly.



[![](attachments/4522061/13402397.png)](/refguide5/layouts)
[Layouts](/refguide5/layout)  specify what comes where. Each page is based on a layout. The layout contains widgets and structures that return on every page based on that layout. For example, it is common to put a menu bar widget on a layout so that it is visible on all pages. Layouts are a new feature of Mendix 5\. In Mendix 4 there was one fixed layout that could not be edited inside the Modeler.



[![](attachments/4522061/13402395.png)](/refguide5/snippets)
[Snippets](/refguide5/snippet) define reusable interface parts. They can be used on pages and layouts. By using snippets you have to make changes in fewer places if you want to modify the interface. For example, you can have a snippet that is used both in the contents area of a template grid and in a data view. If you add a row to a table in the snippet, that change will show up in both places.



[![](attachments/4522061/13402400.png)](/refguide5/menu-widgets)
Pages, layouts and snippets are built using widgets. There are many kinds of widgets and not every widget can be used on each of the three document types. Layouts support mostly widgets for giving structure to pages, but not widgets for showing data. This is to make the intention of layouts clear: they should define what comes where and not much more. However, snippets can be placed on layouts and that is an indirect way to include more kinds of widgets on a layout.

We discern the following categories of widgets:

*   [Menu Widgets](/refguide5/menu-widgets) allow the user to navigate through the application. Examples: menu bar widget, navigation tree.
*   [Data Widgets](/refguide5/data-widgets) are central to building forms in Mendix. Through these widgets you can view and/or edit the data in the application. Examples: data view, data grid.
*   [Layout Widgets](/refguide5/layout-widgets) are widgets that form the backbone of the interface and are typically used on layouts. Examples: layout container, title.
*   [Common Widgets](/refguide5/common-widgets) are widgets commonly found on any page, layout or snippet. Examples: label, image.
*   [Container Widgets](/refguide5/container-widgets) are widgets that can contain other widgets again. Examples: table, group box.
*   [Input Widgets](/refguide5/input-widgets) make it possible to show and edit the values of attributes and associations. Examples: text box, date picker.
*   [File Widgets](/refguide5/file-widgets) allow you to work with files, including images stored in files.
*   [Button Widgets](/refguide5/button-widgets) are buttons that trigger actions. Examples: save button, microflow button.
*   [Report Widgets](/refguide5/report-widgets) aggregate data and show it in the form of a table or a chart. Examples: basic report, report chart.
*   Add-on widgets can be downloaded from the [Mendix Appstore](https://appstore.mendix.com/) or created by yourself using JavaScript.
