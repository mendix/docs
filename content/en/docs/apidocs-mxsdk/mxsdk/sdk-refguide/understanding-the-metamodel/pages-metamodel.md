---
title: "Pages in the Mendix Metamodel"
url: /apidocs-mxsdk/mxsdk/pages-metamodel/
weight: 3
description: "This page contains detailed explanations on how pages, layouts, and page content is structured. You can use this when you are creating scripts for the SDK or creating or analyzing models."
---

## 1 Overview

Pages are defined based on Layouts (see below). Pages, Layouts and Snippets inherit from FormBase, through which a list of top level widgets on the page can be defined. To secure access to pages, you can define allowed module roles for each page.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/18582251.svg" >}}


Studio Pro Guide | Model SDK API docs
--- | --- |
[Pages overview](/refguide/pages/) | [Page](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.page.html)
[Page](/refguide/page/) | [FormBase](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.formbase.html)
 | [LayoutCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.layoutcall.html)

## 2 Layouts

A Page can have a LayoutCall to render a Layout. As a Layout has zero or more LayoutParameters, the amount of LayoutCallArguments the LayoutCall needs is equal to the amount of LayoutParameters.

A Layout can contain one or more Widgets or Placeholders. For each Placeholder, the Layout will have a LayoutParameter. A LayoutCall that targets that Layout will have a LayoutCallArgument for each LayoutParameter/Placeholder pair.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/18582250.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Layout](/refguide/layout/) | [Page](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.page.html)
| [Layout](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.layout.html)
| [LayoutParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.layoutparameter.html)
| [Placeholder](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.placeholder.html)
| [LayoutCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.layoutcall.html)
| [LayoutCallArgument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.layoutcallargument.html)

## 3 Snippets

Snippets are reusable interface parts that allow you to create a more maintainable interface. If you use a snippet in multiple pages, you only have to make a change once, and the result will be visible everywhere. For example, you can create a snippet with some navigation links, and include that on several pages. If you make a change in the snippet, all the pages will benefit.

Similar to Layout and Page, a Snippet inherits from FormBase. You can add any widget to it, and it can be connected to an Entity in order for its contents to be populated. A Page can contain multiple Snippets, but only one Layout.

For a Page to include a Snippet, it needs to use the SnippetCallWidget which, in turn, calls the Snippet.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/18582219.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Snippet](/refguide/snippet/) | [Snippet](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.snippet.html)
| [SnippetCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.snippetcall.html)
| [SnippetCallWidget](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.snippetcallwidget.html)

## 4 Data Widgets

Data widgets display data that they retrieve from a Data Source (see below). Typically, data widgets offer an aggregate view of multiple entities or a view of a single entity.

### 4.1 ListView

A ListView is a widget that can contain other widgets or list of objects. The Client Action is the action that is performed when a list view entry is 'clicked'. This can either be opening a page or calling a microflow. If the entity that is connected to the list view has specializations, you can optionally specify templates for each specialization. This is what the ListViewTemplate can be used for.

Conditional visibility settings can determine whether or not the list view is visible, based on either an attribute value and/or module roles.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/18582258.svg" >}}

### 4.2 Data View

The data view is a central component in Mendix applications. The data view typically contains input widgets, like text boxes with labels. In more complex screens, a data view can contain tab controls per topic, and data views and data grids for related objects.

If a `noEntityMessage` is specified, a data view that receives no source data will show this message instead of its content. Otherwise, the data view will show its static content and disabled input widgets. This property is a translatable text. See [Language Menu](/refguide/translatable-texts/).

The control bar of the data view can have the following buttons: save, cancel, close, and microflow. A typical data view has a save and a cancel button. If it is not editable, a close button is sufficient. Microflow buttons trigger custom microflows that have been defined in the model.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/18582311.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[List View](/refguide/list-view/) | [ListView](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.listview.html)
[Data view](/refguide/data-view/) | [ListViewTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.listviewtemplate.html)
[Footer](/refguide/footer-document-template/) | [DataView](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.dataview.html)
| [DataViewControlBar](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.dataviewcontrolbar.html)
| [ConditionalVisibilitySettings](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.conditionalvisibilitysettings.html)

## 5 Data Sources

Most simple input widgets derive their content from their context. A text box will, for instance, only allow input for attributes of the target entity. The exceptions are widgets that require an entire object or a list of objects to function. The contents for these widgets can be supplied by four distinct methods:

*   [Directly from the database](/refguide/database-source/)
*   [By association to an object already in the context](/refguide/association-source/)
*   [By microflow](/refguide/microflow-source/)
*   [By an object chosen from a grid or list view displayed in the same page (called 'listening')](/refguide/listen-to-grid-source/)

All Data Sources, except the last two (MicroflowSource and ListenTargetSource), need an EntityPath to know which entity they are connected to. An EntityPath takes a form like `MyFirstModule.Example_Account/Administration.Account.` In this example we are dealing with an association between the entity Example in the module MyFirstModule and the entity Account in the module Administration.

There are basically two ways to retrieve entities from the database:

1.  By using a `ListViewDatabaseSource` or `GridDatabaseSource` (depending on the type of widget) and, if required, adding individual `DatabaseConstraint`s to it, or
2.  By specifying an XPath query yourself.

An `ImageViewerSource` only works with the ImageViewer widget and is restricted to (specializations of) the `System.Image` entity.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/18582293.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Data Sources](/refguide/data-sources/) | [DataSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.datasource.html)
[Listen to Grid Source](/refguide/listen-to-grid-source/) | [DatabaseConstraint](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.databaseconstraint.html)
[XPath](/refguide/xpath/) | [SortableEntityPathSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.sortableentitypathsource.html)

## 6 Grids

Grids share a Control Bar that allows you to manipulate the objects displayed, by means of buttons. Furthermore, grids have to be connected to a Data Source.  A grid has properties, like the number of columns, number of rows, selectionMode, and selectFirst. These can be used to control the behavior of the Template Grid widget.

### 6.1 TemplateGrid

A TemplateGrid is a widget that can contain other widgets, or display a grid of objects.

### 6.2 Data Grid

A data grid shows a list of objects in a grid. For example, a data grid can show all the orders a customer has placed. Using controls provided by the data grid you can browse, search, and edit those objects.

### 6.3 Reference Set selector

A reference set selector allows you to set an association of type _reference set_ by selecting objects. For example, if customers can belong to several groups, a reference set selector can be used to select the groups the customer belongs to. This requires that there is an association from customer to a group of type _reference set_ in the domain model.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/18582297.svg" >}}

Studio Pro Guide | Model SDK API Docs
--- | --- |
[Template grid](/refguide/template-grid/) | [TemplateGrid](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.templategrid.html)
[Data grid](/refguide/data-grid/) | [DataGrid](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.datagrid.html)
[Reference set selector](/refguide/reference-set-selector/) | [ReferenceSetSelector](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.referencesetselector.html)
[Control Bar](/refguide/control-bar/) | [GridControlBar](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.gridcontrolbar.html)

## 7 Buttons

Button widgets perform an action when clicked. They can be rendered as a button or a hyperlink (RenderType). The ButtonStyle enumeration determines the visual cues for Warning, Success, and other styles that can be applied to the Button. A Button may refer to an Icon. Icons can either be ImageIcons (containing a bitmap image) or GlyphIcons (containing a UTF-8 code referring to a glyph from the [Bootstrap Halflings collection](http://getbootstrap.com#glyphicons)). The tooltip property determines the text you will see in the tooltip that appears when you hover over the button. The tooltip text is translatable. It can also be templated with the help of a ClientTemplate, in which case the text content of the button will be parameterizable (dynamic).

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/18582314.svg" >}}

Studio Pro Guide | Model SDK API Docs
--- | --- 
[Button Widgets](/refguide/button-widgets/) | [Button](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.button.html)
[Button Properties](/refguide/button-properties/) | [ButtonStyle](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.buttonstyle.html)
[Language Menu](/refguide/translatable-texts/) | [RenderType](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.rendertype.html)
| [Icon](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.icon.html)
| [Text](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/texts.text.html)
| [ClientTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.clienttemplate.html)

## 8 Containers

DivContainers, Split Panes, Group Boxes, LayoutGridColumns, ScrollContainerRegions, and TabPages are widgets whose basic function is to contain other widgets. With the exception of SplitPanes, which refer to a VerticalFlow widget that, in turn, contains a list of other widgets. Split Panes (**deprecated** in favor of ScrollContainer) each refer to a firstWidget and secondWidget to fill their contents. ScrollContainers have regions (left, right, top, bottom, center) that each refer to contained widgets. TabContainers contain an array of TabPages, and one of those must be the default visible page.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/18582317.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Tab page](/refguide/tab-container/#tab-page) | [TabPage](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.tabpage.html)
[Layout grid](/refguide/layout-grid/) | [LayoutGrid](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.layoutgrid.html)
[Container](/refguide/container/) | [DivContainer](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.divcontainer.html)
[Scroll Container](/refguide/scroll-container/) | [SplitPane](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.splitpane.html)
[Scroll Container](/refguide/scroll-container/) | [ScrollContainer](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.scrollcontainer.html)

## 9 Association Widgets

The _reference selector_ is an input widget that can be used to display and edit associations. The _reference set selector_ allows you to set an association of type reference set by selecting objects. When the value of an association widget changes, a microflow can be triggered. The way in which this happens is determined by the MicroflowSettings. An Association is, by nature, associated to an entity. Where this entity is retrieved from can be determined using a SelectorSource. There are two types of selector sources: one using an XPath query, and one that triggers a Microflow.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/18582318.svg" >}}

Studio Pro Guide | Model SDK API docs
--- | --- |
[Associations](/refguide/associations/) | [InputReferenceSelector](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.inputreferencesetselector.html)
[Input Widgets](/refguide/input-widgets/) | [ReferenceSetSelector](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.referencesetselector.html)
[Reference selector](/refguide/reference-selector/) | [PageSettings](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.pagesettings.html)
[Reference set selector](/refguide/reference-set-selector/) | [MicroflowSettings](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.microflowsettings.html)
[Call a Microflow](/refguide/on-click-event/#call-microflow) |
[Pages](/refguide/pages/) |

## 10 Read More

*   Blog: [Designing Flexible User Interfaces with Layouts](https://www.mendix.com/blog/designing-flexible-user-interfaces-layouts/)
*   Blog: [Creating Maintainable Interfaces with Snippets](https://www.mendix.com/blog/creating-maintainable-interfaces-with-snippets/)
*   Blog: [Introducing Support for Glyphicons in Mendix](https://www.mendix.com/blog/introducing-support-for-glyphicons-in-mendix/)
