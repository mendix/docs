---
title: "Template Grid (document template)"
parent: "document-templates"
space: "Reference Guide 4"
---
The template grid shows a list of objects in a tile view. For example, a template grid can show a list of products. The template grid has a lot in common with the data grid. The main difference is that the objects are shown in templates (a sort of small data view) instead of rows.

<div class="alert alert-info">{% markdown %}

[![](attachments/819203/918137.png)](template-grid-document-template)

A template grid showing products with name, description and image.

{% endmarkdown %}</div>

## Components

### Sort bar

See [Sort bar](sort-bar).

## Appearance Properties

### Enable striping

With striping enabled you can set the contents of even and uneven template grid rows individually. This way you can create a striping effect by varying color for the 2 different row styles.

### Number of columns

This defines the amount of columns the template grid will contain.

## Common Properties

### Name

See [Widget Properties](widget-properties).

## Data Source Properties

The data source properties determine which objects will be shown in the template grid. The list of objects in the template grid is constrained by the following mechanisms:

1.  For top-level template grids, the objects passed in the microflow calling the document export action are shown.
2.  For nested template grids, if an entity path is used, only the objects reachable by following the path from the containing object are shown.
3.  For nested template grids, if a microflow is used, the objects returned by the microflow are shown.

### Entity (Path)

The entity (path) property specifies from which entity instances will be shown in the template grid. A top-level template grid is always connected to an entity. A nested template grid can either be connected to an entity or to an entity path starting in the entity of the containing data view. The entity path can follow associations irrespective of type and ownership.

### Microflow

When a nested template grid is connected to an entity, a microflow is needed to retrieve the data. The input parameter of these microflows is always the object of the containing data view and the output is a list of objects with the type of the nested template grid.
