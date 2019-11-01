---
title: "XPath Source"
parent: "data-sources"
tags: ["studio pro", "xpath", "xpath source", "data source"]
---

## 1 Introduction

If **XPath** is selected as the data source for a widget then the object or objects shown are retrieved directly from the database with a query. You can filter data with an [XPath constraint](#xpath-constraints).  

The **XPath** data source is very similar to the [**Database** data source](database-source), except that XPath constraints are more flexible than the database ones. 

The data retrieved can also be limited by the following factors:

1. The access rules defined in the security section of the project.
2. An association, if the widget is nested in another data widget and the data path described runs over an association.

If you want to restrict data not for a single widget, but for several, you may want to apply [access rules](access-rules) for entities instead of XPath constraints. This way you know that the objects will always be constrained by these rules . Access rules will also be applied when executing microflows which saves you from repeating constraints.

## 2 Properties

### 2.1 Entity (Path)

The **Entity (path)** property specifies the target of the database query. A top-level data grid is always connected to an entity.

For example, a top-level data grid is always connected to an entity. A nested data grid can either be connected to an entity or to an entity in the containing data view. In this case the entity path follows one association of type reference in the opposite direction in which the association's arrow is pointing (from * to 1).

{{% alert type="info" %}}
This differs from the [association data source](association-source) in that the objects are not retrieved from the client cache but directly from the database. The association is simply parsed as an extra constraint in the database query.
{{% /alert %}}

This [domain model](domain-model) describes a database in which an indeterminate number of users can be linked to a single country:

![](attachments/16713835/16843965.jpg)

The data view shown contains a single country. The data grid nested inside will display only those users that are linked to that particular country:

![](attachments/16713835/16843966.jpg)

### 2.2 Show Search Bar {#show-search-bar}

**Show search bar** is only available for data grids. You can select if and when the **[Search bar](search-bar)** of the data grid is shown.

| Value                          | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| Never                          | No search bar or search button are ever shown. Effectively disables search. |
| With button (initially open)   | An end-user can open and close the search bar using the [**Search** button](control-bar#search-button); the search bar is initially open. |
| With button (initially closed) | The user can open and close the search bar using the search button; the search bar is initially closed. |
| Always                         | The search bar is always visible and cannot be close, nor is there a search button. |

_Default value:_ With button (initially closed)

### 2.3 Wait for Search

The **Wait for search** property is available if **[Show search bar](#show-search-bar)** is set to *With button (initially open)* or to *Always*. 

When **Wait for search** is set to *Yes*, the grid will remain empty of contents the end-user initiates a search. This can be useful if the target entity contains an extremely large set of objects but most mutations only require a subset of the data. Waiting for search will ensure that no database query is performed until the desired subset is specified, thus skipping the initial loading period associated with major data retrievals.

_Default value:_ false

### 2.4 XPath Constraint {#xpath-constraints}

The [XPath constraint](xpath-constraints) allows for custom, hard-coded limitations on the data displayed. This constraint will be appended to the constraints (if any) already applied through security and context.

{{% alert type="warning" %}}
XPath constraints are applied equally to all users and only apply to the data displayed in a single data widget. If the goal is to shield a particular subset of the data from users then [entity access rules](access-rules) are superior in that they can be tailored to each individual user role and that they apply system-wide.
{{% /alert %}}

## 3 Read More

* [Data Widgets](data-widgets)
* [Data Grid](data-grid)

