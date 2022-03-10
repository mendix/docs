---
title: "Association Source"
url: /refguide/association-source/
parent: "data-sources"
tags: ["studio pro", "association", "data source"]
menu_order: 60
---

## 1 Introduction

The **Association** source is a data source available to nested [data grids](data-grid), [template grids](template-grid), and [list views](list-view). 

{{% alert type="warning" %}}

The **Association** source retrieves objects from memory, not from the database. 

{{% /alert %}}

An **Association** data source fills the widget with objects linked to another object by an association. To provide the context, the data container needs to be nested within another data container.

Data containers that can have other data containers inside them are the [template grid](template-grid), [list view](list-view), and [data view](data-view).

{{% alert type="warning" %}}

Sorting columns and searching is not possible in data containers with an association data source. This is because these features require a database call to function, which an association data source does not necessarily initiate.

{{% /alert %}}

## 2 Properties

### 2.1 Entity (Path)

The **Entity (path)** property specifies the association by which the widget is populated. Only objects that are connected to the object of the surrounding data container by association will appear in the widget. 

## 3 Read More

* [Associations](associations)
* [Data Containers](data-widgets)