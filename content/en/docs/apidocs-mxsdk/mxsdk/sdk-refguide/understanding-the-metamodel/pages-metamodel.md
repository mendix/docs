---
title: "Pages in the Mendix Metamodel"
linktitle: "Pages in the Metamodel"
url: /apidocs-mxsdk/mxsdk/pages-metamodel/
weight: 3
description: "This page contains detailed explanations on how pages, layouts, and page content are structured."
---

## Overview

The metamodel for pages contain several document types that help build pages in Studio Pro, as shown below.

There are Pages, Layouts, and Snippets that represent the actual pages of an app. Pages are based on Layouts, and both
can use Snippets to have bits of reusable UI.

Page Templates define starting points for creating new Pages, and Building Blocks are small bits of UI to quickly add structure
to a page.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/DocumentOverview.svg" class="no-border" >}}

| Studio Pro Guide                            | Model SDK API docs                                                                                |
|---------------------------------------------|---------------------------------------------------------------------------------------------------|
| [Pages overview](/refguide/pages/)          | [pages namespace](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/pages.html)              |
| [Page](/refguide/page/)                     | [Page](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.page.html)                    |
| [Layout](/refguide/layout/)                 | [Layout](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.layout.html)                |
| [Snippet](/refguide/snippet/)               | [Snippet](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.snippet.html)              |
| [Page Template](/refguide/page-templates/)  | [Page Template](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.pagetemplate.html)   |
| [Building Block](/refguide/building-block/) | [Building Block](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.buildingblock.html) |

## Pages and Layouts

A layout defines a base structure for pages, containing widgets and structure that is applied for every page that is based on it.
A key part of this structure is the Placeholder widget, through which a layout defines structure where the page can fill it with
page-specific widgets.

The content of a layout defines if it is a layout for native pages or web pages. All pages based on a layout with NativeLayoutContent
will be native pages, and pages based on a layout with WebLayoutContent will be web pages.
Both types of content contain a list of widgets that define the base structure of the layout.

The page uses a layout through its LayoutCall. This defines the layout as well as the LayoutCallArguments.
A LayoutCallArgument points to a Placeholder widget on the layout with the LayoutParameter, and defines a list of widgets
to fill the placeholder with.

In the same way, a web layout may also be based on a master layout by defining the LayoutCall inside the WebLayoutContents.
If a layout has a master layout, it may not directly specify any widgets, but uses the LayoutCallArguments for that instead.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/PagesAndLayouts.svg" class="no-border" >}}

| Studio Pro Guide                     | Model SDK API docs                                                                                           |
|--------------------------------------|--------------------------------------------------------------------------------------------------------------|
| [Page](/refguide/page/)              | [Page](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.Page.html)                               |
| [Placeholder](/refguide/placeholder/) | [Placeholder](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.Placeholder.html)                 |
| [Layout](/refguide/layout/)          | [Layout](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.Layout.html)                           |
|                                      | [LayoutCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutCall.html)                   |
|                                      | [LayoutCallArgument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutCallArgument.html)   |
|                                      | [LayoutParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutParameter.html)         |
|                                      | [WebLayoutContent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.WebLayoutContent.html)       |
|                                      | [NativeLayoutContent](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.NativeLayoutContent.html) |

## Snippets

Snippets are reusable interface parts that allow you to create a more maintainable interface, and can be used on pages,
layouts, and even other snippets. Changes made to the snippet will show up in all places the snippet is used.

A snippet contains widgets, and may define one or more parameters to use data inside the snippet.

To include a snippet, you need to use the SnippetCallWidget on a page, layout, or other snippet. The SnippetCallWidget
has a SnippetCall which calls the Snippet and defines a SnippetParameterMapping for each parameter of the snippet.

The SnippetParameterMapping points to the parameter of the snippet to provide data for, as well as a PageVariable that
defines where this data comes from. A page variable can either point to a data widget, a page parameter, or a snippet parameter. 

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/Snippets.svg" class="no-border" >}}

| Studio Pro Guide              | Model SDK API docs                                                                                                   |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [Snippet](/refguide/snippet/) | [Snippet](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.snippet.html)                                 | 
|                               | [SnippetCall](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.snippetcall.html)                         | 
|                               | [SnippetCallWidget](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.snippetcallwidget.html)             |
|                               | [SnippetParameter](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.SnippetParameter.html)               |
|                               | [SnippetParameterMapping](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.SnippetParameterMapping.html) |
|                               | [PageVariable](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.PageVariable.html)                       |

## Containers

Container widgets are widgets used to contain other widgets.

DivContainer is a simple container, which may be given a specific HTML tag (DIV by default) and can be used to style or
hide a group of widgets simultaneously.

GroupBox is a container with a header, and can be configured to allow collapsing/expanding the contents.

LayoutGrid is used to layout widgets in rows and columns. A column can be given a concrete width (in 1/12ths) or take the amount
of space its contents need, or fill up the remaining space of a row.

ScrollContainer is a widget to divide an area (usually on layouts) in multiple regions. It must have a center content, and may
also be configured to have top, right, bottom, and left regions.

TabContainer contains one or more TabPages, of which one may be set as the default tab page (which is shown initially when opening the page).
Only one TabPage is visible at the same time, allowing to show a subset of widgets.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/ContainerWidgets.svg" class="no-border" >}}

| Studio Pro Guide                                | Model SDK API docs                                                                                               |
|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [Container](/refguide/container/)               | [DivContainer](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DivContainer.html)                   |
| [Group Box](/refguide/group-box/)               | [GroupBox](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GroupBox.html)                           |
| [Layout Grid](/refguide/layout-grid/)            | [LayoutGrid](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutGrid.html)                       |
|                                                 | [LayoutGridRow](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutGridRow.html)                 |
|                                                 | [LayoutGridColumn](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.LayoutGridColumn.html)           |
| [Scroll Container](/refguide/scroll-container/) | [ScrollContainer](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ScrollContainer.html)             |
|                                                 | [ScrollContainerRegion](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ScrollContainerRegion.html) |
| [Tab Container](/refguide/tab-container/)       | [TabContainer](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.TabContainer.html)                   |
|                                                 | [TabPage](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.TabPage.html)                             |

## Buttons

Buttons perform an action when clicked. They can be rendered as a button or as a hyperlink through the RenderType enumeration.
The ButtonStyle enumeration determines the visual cues for the type of button (for example, Warning, Success).

Buttons can have a caption, which is translatable and can be templated through the ClientTemplate.
Through the icon property, the button can refer to an icon from either an image collection (using ImageIcon) or to a
glyph icon (containing a UTF-8 code referring to a glyph from the [Bootstrap Halflings collection](https://getbootstrap.com/docs/3.3/components/#glyphicons-glyphs)).

The ActionButton implementation determines what to do based on the ClientAction configured.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/ButtonWidgets.svg" class="no-border" >}}

| Studio Pro Guide                                  | Model SDK API docs                                                                                 |
|---------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [Buttons](/refguide/button-widgets/)              | [ActionButton](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ActionButton.html)     |
| [Button Properties](/refguide/button-properties/) | [RenderType](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.RenderType.html)         |
| [Language Menu](/refguide/translatable-texts/)    | [ButtonStyle](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ButtonStyle.html)       |
|                                                   | [ClientTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ClientTemplate.html) |
|                                                   | [Icon](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.Icon.html)                     |
|                                                   | [ImageIcon](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ImageIcon.html)           |
|                                                   | [GlyphIcon](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GlyphIcon.html)           |
|                                                   | [ClientAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ClientAction.html)     |

## Data Widgets

Data widgets display data that they retrieve from a [Data Source](#data-sources).

A [DataView](#dataview) is used to show or edit content from a single object. [ListView](#listview) is used to show
a list of objects.

There are also a couple of grid widgets, with [DataGrid](#datagrid) showing data based on configured columns.
[ReferenceSetSelector](#referencesetselector) allows displaying or selecting the values of many-to-many associations.
[TemplateGrid](#templategrid) shows a list of objects in a tile view, where the number of columns can be configured.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/DataWidgets.svg" class="no-border" >}}

### DataView{#dataview}

The data view is a central component in Mendix applications. The data view typically contains input widgets, like text
boxes with labels. In more complex screens, a data view can contain tab controls per topic, and data views and data
grids for related objects.

If a `noEntityMessage` is specified, a data view that receives no source data will show this message instead of its
content. Otherwise, the data view will show its static content and disabled input widgets. This property is a
translatable text.

The footer of a data view is often used to add buttons such as a save button or a cancel button. Note that footers
can only be used for data views that are not nested inside other data widgets.

| Studio Pro Guide                               | Model SDK API docs                                                                     |
|------------------------------------------------|----------------------------------------------------------------------------------------|
| [Data View](/refguide/data-view/)              | [DataView](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DataView.html) |
| [Language Menu](/refguide/translatable-texts/) | [Text](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/texts.Text.html)         |

### ListView{#listview}

The list view widget shows a list of objects using a template. The default template is configured through the `widgets` property.
It is also possible to add specialized templates by adding a ListViewTemplate for a specialization of the base data source entity.

The `clickAction` ClientAction is the action that is performed when a list view entry is clicked.

| Studio Pro Guide                                            | Model SDK API docs                                                                                     |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| [List View](/refguide/list-view/)                           | [ListView](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ListView.html)                 |
| [Entity Generalization](/refguide/entities/#generalization) | [ListViewTemplate](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ListViewTemplate.html) |
| [List View Templates](/refguide/list-view/#templates)       | [ClientAction](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ClientAction.html)         |

### DataGrid{#datagrid}

A data grid shows a list of objects in a table format. The configured columns determine which attributes are shown.
It contains a control bar in which buttons can be added to create a new object, or show/edit an existing one.

| Studio Pro Guide                           | Model SDK API docs                                                                                 |
|--------------------------------------------|----------------------------------------------------------------------------------------------------|
| [Data Grid](/refguide/data-grid/)          | [DataGrid](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DataGrid.html)             |
| [Grid Columns](/refguide/columns/)         | [GridColumn](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GridColumn.html)         |
| [Grid Control Bar](/refguide/control-bar/) | [GridControlBar](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GridControlBar.html) |

### ReferenceSetSelector{#referencesetselector}

A reference set selector displays a grid of objects from a many-to-many association. By adding a DataGridAddButton and DataGridRemoveButton
to the control bar, the grid can be used to edit the linked objects.

| Studio Pro Guide                                            | Model SDK API docs                                                                                             |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [Reference Set Selector](/refguide/reference-set-selector/) | [ReferenceSetSelector](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ReferenceSetSelector.html) |
| [Grid Columns](/refguide/columns/)                          | [GridColumn](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GridColumn.html)                     |
| [Grid Control Bar](/refguide/control-bar/)                  | [GridControlBar](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GridControlBar.html)             |
|                                                             | [DataGridAddButton](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DataGridAddButton.html)       |
|                                                             | [DataGridRemoveButton](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DataGridRemoveButton.html) |

### TemplateGrid{#templategrid}

A template grid shows a list of objects in a tile view using a template. This template is configured in the TemplateGridContents.

The number of columns to show can be set with the `numberOfColumns` property, the rows shown per page using `numberOfColumns`.

| Studio Pro Guide                           | Model SDK API docs                                                                                             |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| [Template Grid](/refguide/template-grid/)  | [TemplateGrid](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.TemplateGrid.html)                 |
|                                            | [TemplateGridContents](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.TemplateGridContents.html) |
| [Grid Control Bar](/refguide/control-bar/) | [GridControlBar](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.GridControlBar.html)             |

## Data Sources{#data-sources}

Input widgets, such as a text box, will derive their content from their context.
The data widgets themselves get this data from their configured data source.
Depending on the data widget, different sources are applicable (for example, a ListViewDatabaseSource is only applicable for
a ListView widget).

The data sources can be divided by how their retrieve their data:

* Querying [the database](/refguide/database-source/), possibly with an [XPath constraint](/refguide/xpath-source/)
* By [context](/refguide/context-source/) from a surrounding data widget or a page (or snippet) parameter
* By [association](/refguide/association-source/) to an object from a surrounding data widget
* By a [microflow](/refguide/microflow-source/) or [nanoflow](/refguide/nanoflow-source/)
* By [listening to a list view or grid widget](/refguide/listen-to-grid-source/), showing the data of the selected object 
  of the target widget.

Most data sources are configured with the target EntityRef. This reference can be a DirectEntityRef to fetch all objects
of the given entity, or an IndirectEntityRef to fetch objects related to an object already in context
(either a surrounding data widget, or a page parameter).

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/DataSources.svg" class="no-border" >}}

| Studio Pro Guide                        | Model SDK API docs                                                                         |
|-----------------------------------------|--------------------------------------------------------------------------------------------|
| [Data Sources](/refguide/data-sources/) | [DataSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.DataSource.html) |
| [XPath](/refguide/xpath/)               |                                                                                            |

## Association Widgets

The reference selector and input reference set selector are input widgets that can be used to display and edit associations.
Objects selectable for the association are determined by the SelectorSource, and can be queried from the database or
retrieved from a microflow (only for the reference selector).

Both widgets have a `selectPageSettings` that determines the page used to select the linked object (or objects). The reference selector
optionally also has a `goToPageSettings` that determines the page used to display detailed information about the associated
object.

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/pages-metamodel/AssociationWidgets.svg" class="no-border" >}}

| Studio Pro Guide                                                        | Model SDK API docs                                                                                                       |
|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [Reference Selector](/refguide/reference-selector/)                     | [ReferenceSelector](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.ReferenceSelector.html)                 |
| [Input Reference Set Selector](/refguide/input-reference-set-selector/) | [InputReferenceSetSelector](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.InputReferenceSetSelector.html) |
|                                                                         | [SelectorSource](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/pages.SelectorSource.html)                       |

## Read More

* Blog: [Designing Flexible User Interfaces with Layouts](https://www.mendix.com/blog/designing-flexible-user-interfaces-layouts/)
* Blog: [Creating Maintainable Interfaces with Snippets](https://www.mendix.com/blog/creating-maintainable-interfaces-with-snippets/)
* Blog: [Introducing Support for Glyphicons in Mendix](https://www.mendix.com/blog/introducing-support-for-glyphicons-in-mendix/)
