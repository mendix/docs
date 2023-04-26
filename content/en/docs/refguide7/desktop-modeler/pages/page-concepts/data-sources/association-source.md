---
title: "Association Source"
url: /refguide7/association-source/
---


The association source is a data source available to nested [data grids](/refguide7/data-grid/), [template grids](/refguide7/template-grid/), and [list views](/refguide7/list-view/). This will fill the widget with the objects linked to an object already in the context by manner of an association. For this to function the data widget needs to be nested within another data widget to provide that context.

Data widgets that can function as a container for other data widgets are the [template grid](/refguide7/template-grid/), [list view](/refguide7/list-view/), and [data view](/refguide7/data-view/).

{{% alert color="warning" %}}

Sorting columns and searching is not possible in data widgets with an association data source. This is because these features require a database call to function, which an association data source does not necessarily initiate.

{{% /alert %}}

## Properties

### Entity (Path)

The entity (path) property specifies the association by which the widget is populated. The only objects that will appear in the widget are those that are linked to the object in the containing widget by manner of the association selected.
