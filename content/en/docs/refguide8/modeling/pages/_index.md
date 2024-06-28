---
title: "Pages"
url: /refguide8/pages/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document also has a redirect from opening-pages (which has been deleted)
---

## 1 Introduction

A page is the basic end-user interface of a Mendix application. It is used to display information to the end-user, allow end-users to create and edit information, and enable end-users to trigger additional automated processing.

Pages are created, edited, and manipulated in the page editor. 

Every page is based on a page [layout](/refguide8/layout/) and a page template. A layout is a frame you put your page in. A page template is a basis with predefined elements (widgets).  

{{< figure src="/attachments/refguide8/modeling/pages/page-structure.png" class="no-border" >}}

Pages can be linked, so that one page can open another page. If this second page contains a [data widget](/refguide8/data-widgets/) with a page parameter data source, then an object or objects can be passed from the current page to the new page. For information on opening pages, and triggering other sorts of event, see [On Click Event and Events Section](/refguide8/on-click-event/).

Pages are opened either in the current pane of the browser or in a pop-up, child, window. Where the page is opened depends on its [layout type](/refguide8/layout/#layout-type). Mendix performs navigation as efficiently as possible. If a new page uses the same layout as the old one, only the data on the page will refresh rather than the whole page being built from scratch.

For more information on page properties, see [Page](/refguide8/page/).

## 2 Page and Page Resources

In addition to a page, you can add page resources in the page editor. They help structure your page, style it, and fill it with data. For more on how to add page resources, see [Page Resources](/refguide8/page-resources/). 

Type | Description
--- | ---
[{{< figure src="/attachments/refguide8/modeling/pages/layout-icon.png" class="no-border" >}}Layout](/refguide8/layout/) | A [layout](/refguide8/layout/) is a frame that your page is placed in. If you change the layout, all pages based on it will inherit this change. <br />Layout contain predefined elements that ensure unified and consistent look and feel of your application across one platform: the position of the header, size of the logo, position of the menu, etc. For example, in responsive layouts the header can be wide and with a big logo, while in mobile layouts the header will be narrower and the logo will be smaller due to the limited space. 
[{{< figure src="/attachments/refguide8/modeling/pages/page-template-icon.png" class="no-border" >}}Page template](/refguide8/page-templates/) | A [page template](/refguide8/page-templates/) is a basis for your page that predefines its structure. For example, you can create a page template for a customer list that will contain list views with images in it. Thus, every time you need to create a page with similar list on it, you will base it on this template.    By mapping out common design patterns, a lot of the initial work involved in creating a new page can be simplified by setting up a proper set of page templates. 
[{{< figure src="/attachments/refguide8/modeling/pages/snippet-icon.png" class="no-border" >}}Snippet](/refguide8/snippet/) | A [snippet](/refguide8/snippet/) defines reusable interface parts. They can be used on pages and layouts. By using snippets, you will make changes in fewer places if you want to modify the interface. For example, you can have a snippet that is used both in the contents area of a template grid and in a data view. If you add a row to a table in the snippet, that change will show up in both places. 
[{{< figure src="/attachments/refguide8/modeling/pages/building-block-icon.png" class="no-border" >}}Building block](/refguide8/building-block/) | A [building block](/refguide8/building-block/) is pre-styled set of widgets. Building blocks will automatically appear in the page editor toolbox, allowing for easy reuse. By designing a comprehensive library of building blocks, a great deal of the fussy work involved in page design can be averted. 
[{{< figure src="/attachments/refguide8/modeling/pages/page-icon.png" class="no-border" >}}Page](/refguide8/page/) | A [page](/refguide8/page/) is the end-user interface of a Mendix application. Pages are the things that are actually shown to the end-user. 
[{{< figure src="/attachments/refguide8/modeling/pages/menu-icon.png" class="no-border" >}}Menu](/refguide8/menu/) | A [menu](/refguide8/menu/) defines a menu structure that can be used by a menu widget. 
[{{< figure src="/attachments/refguide8/modeling/pages/image-collection-icon.png" class="no-border" >}}Image collection](/refguide8/image-collection/) | An [image collection](/refguide8/image-collection/) is a page resource where you place custom images to use them in your application. For more information, see [Images](/refguide8/images/). 

## 3 Widgets and Their Categories {#widgets-categories}

All the documents described above are built using widgets. There are many kinds of widgets, and not every widget can be used on all of the document types. Layouts support widgets for giving structure to pages, but not widgets for showing data. This is to make the intention of layouts clear: they should define what comes where and not much more. However, snippets can be placed in layouts, and that is an indirect way to include more kinds of widgets in a layout.

Widgets are grouped into the following categories:

* [Data widgets](/refguide8/data-widgets/) are central to building forms in Mendix; with these widgets, you can view and edit the data in the application
* [Common widgets](/refguide8/common-widgets/) are commonly found on any page, layout, or snippet
* [Container widgets](/refguide8/container-widgets/) can contain other widgets
* [Input widgets](/refguide8/input-widgets/) make it possible to show and edit the values of attributes and associations
* [File widgets](/refguide8/file-widgets/) allow you to work with files, including images stored in files
* [Button widgets](/refguide8/button-widgets/) are buttons that trigger actions
* [Menu widgets](/refguide8/menu-widgets/) allow the user to navigate through the application
* [Report widgets](/refguide8/report-widgets/) aggregate data and show it in the form of a table or a chart
* [Authentication widgets](/refguide8/authentication-widgets/) allow to add the user verification process such as password and login id text boxes.
* Add-on widgets can be downloaded from the [Mendix Marketplace](https://marketplace.mendix.com/) or created by yourself using JavaScript
    * [Chart widgets](/refguide8/chart-widgets/) are add-on widgets that graphically represent data using various chart types

## 4 Read More

* [Page Resources](/refguide8/page-resources/)
* [Page](/refguide8/page/)
