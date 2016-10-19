---
title: "Association Source"
space: "Reference Guide 6"
parent: "Data+Sources"
---


The association source is a data source available to nested [data grids](Data+grid), [template grids](Template+grid), and [list views](List+view). This will fill the widget with the objects linked to an object already in the context by manner of an association. For this to function the data widget needs to be nested within another data widget to provide that context.

Data widgets that can function as a container for other data widgets are the [template grid](Template+grid), [list view](List+view), and [data view](Data+view).

<div class="alert alert-warning">{% markdown %}

Sorting columns and searching is not possible in data widgets with an association data source. This is because these features require a database call to function, which an association data source does not necessarily initiate.

{% endmarkdown %}</div>

## Properties

### Entity (Path)

The entity (path) property specifies the association by which the widget is populated. The only objects that will appear in the widget are those that are linked to the object in the containing widget by manner of the association selected.
