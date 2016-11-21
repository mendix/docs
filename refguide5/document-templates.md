---
title: "Document Templates"
category: "Modeler"
space: "Reference Guide 5"
---


Document Templates are used to model a template required as input for a document export action which can generate all kinds of documents based on application data. They are composed much in the same way as [Pages](/refguide5/pages).

<div class="alert alert-warning">{% markdown %}

This page describes what document templates are for and what kind of widgets can be placed on them. If you want to see the properties of the document template you can check the documentation for a [Document Template](/refguide5/document-template) itself.

{% endmarkdown %}</div>

The document templates also contain components, also know as _widgets_. Below is a categorized overview of all widgets. The following categories are used:

*   [Core widgets](/refguide5/document-templates) are central to building document templates in Mendix. These are the widgets that can show a list of entities or a single entity.
*   [Layout widgets](/refguide5/document-templates) are used to structure the layout of your document templates.
*   [Dynamic data widgets](/refguide5/document-templates) make it possible to show values of attributes and associations.
*   [Static data widgets](/refguide5/document-templates) allow you to work with static data such as a predefined image.

Additionally, in most widgets as well as on the document template itself, a _style_ can be defined. This will be discussed in the topic [Style](/refguide5/document-templates)
If you'd like to show text in a language with uncommon characters such as Arabic or Thai, make sure you select a font in the style editor that supports these characters. 'Tahoma' is such a font.

## Core widgets

The core widgets are central to building document templates in Mendix. They can show the contents of a single entity or of a list of entities. Every document template designed to show data from the domain model requires one of these components.

### Data Grid

The data grid shows a list of objects in a grid. For example, a data grid can show all the orders a customer has placed.

See [Data Grid (document template)](/refguide5/data-grid-document-template).

<div class="alert alert-info">{% markdown %}

[![](attachments/819203/918138.png)](/refguide5/data-grid-document-template)
A data grid showing a list of orders with a description and the referenced customer name.

{% endmarkdown %}</div>

### Data view

The data view is used for showing the contents of exactly one object. If, for example, you want to show details of a single customer you would use a data view to do this. The data view typically contains a table with static labels and dynamic data widgets like a dynamic label. In more complex templates, a data view can contain data grids and other data views for related objects.

See [Data View (document template)](/refguide5/data-view-document-template).

<div class="alert alert-info">{% markdown %}

[![](attachments/819203/918139.png)](/refguide5/data-view-document-template)
A data view showing orderline information.

{% endmarkdown %}</div>

### Template grid

The template grid shows a list of objects in a tile view. For example, a template grid can show a list of products. The template grid has a lot in common with the data grid. The main difference is that the objects are shown in templates (somewhat like a small data view) instead of rows.

See [Template Grid (document template)](/refguide5/template-grid-document-template).

<div class="alert alert-info">{% markdown %}

[![](attachments/819203/918137.png)](/refguide5/template-grid-document-template)
A template grid showing products with name and description.

{% endmarkdown %}</div>

## Layout widgets

Layout widgets give structure to a form. They do not show data but provide a layout in which you can place other widgets that do.

### Table

Tables can be used to change the layout of the form. They contain a number of rows and columns and the intersection of the two is called a cell. Each cell can contain widgets. Cells can be merged horizontally and vertically before they are filled to allow for asymmetric layouts.
Tables can be used both inside and outside data view or templategrid widgets.

See [Table (document template)](/refguide5/table-document-template).

<div class="alert alert-info">{% markdown %}

[![](attachments/819203/918134.png)](/refguide5/table-document-template)
A table with four rows and three columns. Last row containing a data view with another table.

{% endmarkdown %}</div>

### Page break

When inserting a page break, the current page will be cut off after the break and widgets below the break will be displayed in a new page.

See [Page Break (document template)](/refguide5/page-break-document-template).

<div class="alert alert-info">{% markdown %}

[![](attachments/819203/918135.png)](/refguide5/page-break-document-template)
A page break

{% endmarkdown %}</div>

### Line break

When inserting a line break, a new line will be inserted at that position.

See [Line break (document template)](/refguide5/line-break-document-template).

## Dynamic data widgets

Dynamic data widgets are used for showing (dynamic) data. They must be placed inside a data view or template grid because they show attributes or associations of an entity.

### Dynamic label

A dynamic label would be used for the same attributetypes as a text box in form builder. It can be used to display a text value.

See [Dynamic label (document template)](/refguide5/dynamic-label-document-template).

<div class="alert alert-info">{% markdown %}

[![](attachments/819203/918131.png)](/refguide5/dynamic-label-document-template)
A dynamic label linking to a customer name.

{% endmarkdown %}</div>

### Dynamic image

A dynamic image can be used to show a System.Image. If the image is not available (for example: the image was never saved) it will show the preset default image. It can be deployed inside a data view or templategrid.

See [Dynamic Image (document template)](/refguide5/dynamic-image-document-template).

<div class="alert alert-info">{% markdown %}

[![](attachments/819203/918132.png)](/refguide5/dynamic-image-document-template)
A dynamic image inside a table cell, showing the preset default image.

{% endmarkdown %}</div>

## Static data widgets

These widgets contain static (fixed) data to help create the look of the generated document.

### Static Label

A static label shows a line of static text. You can use it to place custom text inside a dataview or template grid or table.

See [Static Label (document template)](/refguide5/static-label-document-template).

<div class="alert alert-info">{% markdown %}

[![](attachments/819203/918130.png)](/refguide5/static-label-document-template)
A label with text 'Customer name'.

{% endmarkdown %}</div>

### Title

A title works much like a static label but can be placed outside a data view, template grid or table.

See [Title (document template)](/refguide5/title-document-template).

### Static image

A static image shows a predefined image. It can be put either in- or outside a data view or templategrid.

See [Static Image (document template)](/refguide5/static-image-document-template).

<div class="alert alert-info">{% markdown %}

[![](attachments/819203/918133.png)](/refguide5/static-image-document-template)
A static image inside a table cell.

{% endmarkdown %}</div>

## Style

See [Style](/refguide5/style)
