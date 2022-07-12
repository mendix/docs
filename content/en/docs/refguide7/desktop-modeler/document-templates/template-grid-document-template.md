---
title: "Template Grid (Document Template)"
url: /refguide7/template-grid-document-template/
aliases:
    - /refguide7/Template+Grid+(document+template).html
    - /refguide7/template-grid-(document-template).html
    - /refguide7/Template+Grid+(document+template)
    - /refguide7/template-grid-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


The template grid shows a list of objects in a tile view. For example, a template grid can show a list of products. The template grid has a lot in common with the data grid. The main difference is that the objects are shown in templates (a sort of small data view) instead of rows.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/document-templates/918137.png" >}}
A template grid showing products with name, description and image.

{{% /alert %}}

## Components

### Sort bar

See [Sort Bar](/refguide7/sort-bar/).

## Appearance Properties

### Enable striping

With striping enabled you can set the contents of even and uneven template grid rows individually. This way you can create a striping effect by varying color for the 2 different row styles.

### Number of columns

This defines the amount of columns the template grid will contain.

## Common Properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

## Data Source Properties

The data source properties determine which objects will be shown in the template grid. The list of objects in the template grid is constrained by the following mechanisms:

1.  For top-level template grids, the objects passed in the microflow calling the document export action are shown.
2.  For nested template grids, if an entity path is used, only the objects reachable by following the path from the containing object are shown.
3.  For nested template grids, if a microflow is used, the objects returned by the microflow are shown.

### Entity (Path)

The entity (path) property specifies from which entity instances will be shown in the template grid. A top-level template grid is always connected to an entity. A nested template grid can either be connected to an entity or to an entity path starting in the entity of the containing data view. The entity path can follow associations irrespective of type and ownership.

### Microflow

When a nested template grid is connected to an entity, a microflow is needed to retrieve the data. The input parameter of these microflows is always the object of the containing data view and the output is a list of objects with the type of the nested template grid.
