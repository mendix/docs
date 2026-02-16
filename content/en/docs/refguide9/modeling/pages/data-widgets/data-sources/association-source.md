---
title: "Association Source"
url: /refguide9/association-source/
weight: 60
---

## Introduction

The **Association** source is a data source available to nested [data grids](/refguide9/data-grid/), [template grids](/refguide9/template-grid/), and [list views](/refguide9/list-view/). 

{{% alert color="warning" %}}
The **Association** source retrieves objects from memory, not from the database. 
{{% /alert %}}

An **Association** data source fills the widget with objects linked to another object by an association. To provide the context, the data container needs to be nested within another data container.

Data containers that can have other data containers inside them are the [template grid](/refguide9/template-grid/), [list view](/refguide9/list-view/), and [data view](/refguide9/data-view/).

{{% alert color="warning" %}}
Sorting columns and searching is not possible in data containers with an association data source. This is because these features require a database call to function, which an association data source does not necessarily initiate.
{{% /alert %}}

## Properties

### Entity (Path)

The **Entity (path)** property specifies the association by which the widget is populated. Only objects that are connected to the object of the surrounding data container by association will appear in the widget. 

## Read More

* [Associations](/refguide9/associations/)
* [Data Containers](/refguide9/data-widgets/)
