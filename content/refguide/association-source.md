---
title: "Association Source"
parent: "data-sources"
tags: ["studio pro", "association", "data source"]
---

## 1 Introduction

The *association* source is a data source available to nested [data grids](data-grid), [template grids](template-grid), and [list views](list-view). 

An association data source takes fills the widget with objects linked to another object by an association. To provide the context, the data widget needs to be nested within another data widget.

Data widgets that can function as a container for other data widgets are the [template grid](template-grid), [list view](list-view), and [data view](data-view).

{{% alert type="warning" %}}

Sorting columns and searching is not possible in data widgets with an association data source. This is because these features require a database call to function, which an association data source does not necessarily initiate.

{{% /alert %}}

## 2 Properties

### 2.1 Entity (Path)

The entity (path) property specifies the association by which the widget is populated. The only objects that will appear in the widget are those that are linked to the object in the containing widget by manner of the association selected.

## 3 Read More

* [Associations](associations)
* [Data Widgets](data-widgets)