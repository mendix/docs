---
title: "Association Source"
url: /refguide8/association-source/
weight: 60
---

## Introduction

The **Association** source is a data source available to nested [data grids](/refguide8/data-grid/), [template grids](/refguide8/template-grid/), and [list views](/refguide8/list-view/). 

{{% alert color="warning" %}}
The **Association** source retrieves objects from memory, not from the database. 
{{% /alert %}}

An **Association** data source fills the widget with objects linked to another object by an association. To provide the context, the data widget needs to be nested within another data widget.

Data widgets that can function as a container for other data widgets are the [template grid](/refguide8/template-grid/), [list view](/refguide8/list-view/), and [data view](/refguide8/data-view/).

{{% alert color="warning" %}}
Sorting columns and searching is not possible in data widgets with an association data source. This is because these features require a database call to function, which an association data source does not necessarily initiate.
{{% /alert %}}

## Properties

### Entity (Path)

The **Entity (path)** property specifies the association by which the widget is populated. Only objects that are connected to the object of the surrounding data container by association will appear in the widget. 

## Read More

* [Associations](/refguide8/associations/)
* [Data Widgets](/refguide8/data-widgets/)
