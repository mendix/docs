---
title: "Association Source"
url: /refguide8/association-source/
tags: ["studio pro", "association", "data source"]
weight: 60
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/association-source.pdf).
{{% /alert %}}

## 1 Introduction

The **Association** source is a data source available to nested [data grids](/refguide8/data-grid/), [template grids](/refguide8/template-grid/), and [list views](/refguide8/list-view/). 

{{% alert color="warning" %}}

The **Association** source retrieves objects from memory, not from the database. 

{{% /alert %}}

An **Association** data source fills the widget with objects linked to another object by an association. To provide the context, the data widget needs to be nested within another data widget.

Data widgets that can function as a container for other data widgets are the [template grid](/refguide8/template-grid/), [list view](/refguide8/list-view/), and [data view](/refguide8/data-view/).

{{% alert color="warning" %}}

Sorting columns and searching is not possible in data widgets with an association data source. This is because these features require a database call to function, which an association data source does not necessarily initiate.

{{% /alert %}}

## 2 Properties

### 2.1 Entity (Path)

The **Entity (path)** property specifies the association by which the widget is populated. Only objects that are connected to the object of the surrounding data container by association will appear in the widget. 

## 3 Read More

* [Associations](/refguide8/associations/)
* [Data Widgets](/refguide8/data-widgets/)