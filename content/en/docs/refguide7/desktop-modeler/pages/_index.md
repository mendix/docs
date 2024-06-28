---
title: "Pages"
url: /refguide7/pages/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

This document describes what pages are for and what kind of widgets can be placed on them. The properties of a page, snippet, or layout document can be found on the documentation pages for those document types: [Page](/refguide7/page/), [Snippet](/refguide7/snippet/), and [Layout](/refguide7/layout/).

Type | Description
--- | ---
{{< figure src="/attachments/refguide7/desktop-modeler/pages/page-icon.png" link="/refguide7/pages/" class="no-border" >}} Pages | [Pages](/refguide7/page/) define the end-user interface of a Mendix application. Apart from pages, there are two other types of documents that come into play when creating an interface: layouts and snippets. Pages are the things that are actually shown to the end user. Snippets and layouts are building blocks for creating pages, but they are not shown to the user directly.
{{< figure src="/attachments/refguide7/desktop-modeler/pages/layout-icon.png" link="/refguide7/layout/" class="no-border" >}} Layouts | [Layouts](/refguide7/layout/) specify what comes where. Each page is based on a layout. The layout contains widgets and structures that are placed on every page based on that layout. For example, it is common to put a menu bar widget on a layout so that it is visible on all pages. 
{{< figure src="/attachments/refguide7/desktop-modeler/pages/snippet-icon.png" link="/refguide7/snippet/" class="no-border" >}} Snippets | [Snippets](/refguide7/snippet/) define reusable interface parts. They can be used on pages and layouts. By using snippets, you have to make changes in fewer places if you want to modify the interface. For example, you can have a snippet that is used both in the contents area of a template grid and in a data view. If you add a row to a table in the snippet, that change will show up in both places.
{{< figure src="/attachments/refguide7/desktop-modeler/pages/building-block-icon.png" link="/refguide7/building-block/" class="no-border" >}} Building blocks | [Building blocks](/refguide7/building-block/) allow users to easily click together pages with pre-styled sets of widgets. Building blocks will automatically appear in the page editor toolbox, allowing for easy reuse. By designing a comprehensive library of building blocks, a great deal of the fussy work involved in page design can be averted.  
{{< figure src="/attachments/refguide7/desktop-modeler/pages/page-template-icon.png" link="/refguide7/page-templates/" class="no-border" >}} Page templates | Newly created pages are based on [page templates](/refguide7/page-templates/). By mapping out common design patterns, a lot of the initial work involved in creating a new page can be simplified by setting up a proper set of page templates. 

Pages, layouts, and snippets are built using widgets. There are many kinds of widget, and not every widget can be used on all of the three document types. Layouts support widgets for giving structure to pages, but not widgets for showing data. This is to make the intention of layouts clear: they should define what comes where and not much more. However, snippets can be placed in layouts, and that is an indirect way to include more kinds of widgets in a layout.

Widgets are grouped into the following categories:

* [Menu widgets](/refguide7/menu-widgets/) allow the user to navigate through the application
    * Examples: menu bar widget, navigation tree
* [Data widgets](/refguide7/data-widgets/) are central to building forms in Mendix; with these widgets, you can view and edit the data in the application
    * Examples: data view, data grid
* [Layout widgets](/refguide7/layout-widgets/) form the backbone of the interface and are typically used in layouts
    * Examples: layout container, title
* [Common widgets](/refguide7/common-widgets/) are commonly found on any page, layout, or snippet
    * Examples: label, image
* [Container widgets](/refguide7/container-widgets/) can contain other widgets
    * Examples: table, group box
* [Input widgets](/refguide7/input-widgets/) make it possible to show and edit the values of attributes and associations
    * Examples: text box, date picker
* [File widgets](/refguide7/file-widgets/) allow you to work with files, including images stored in files
* [Button widgets](/refguide7/button-widgets/) are buttons that trigger actions
    * Examples: save button, microflow button
* [Report widgets](/refguide7/report-widgets/) aggregate data and show it in the form of a table or a chart
    * Examples: basic report, report chart
* [Chart widgets](/refguide7/chart-widgets/) graphically represent data using various chart types
    * Examples: line chart, bar chart, heatmap
* Add-on widgets can be downloaded from the [Mendix Marketplace](https://marketplace.mendix.com/) or created by yourself using JavaScript
