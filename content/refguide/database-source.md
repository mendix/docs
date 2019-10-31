---
title: "Database Source"
parent: "data-sources"
tags: ["studio pro", "database", "data source"]
---

## 1 Introduction

If **Database** is selected as the data source for a widget then an object or objects shown are retrieved directly from the database with a query. This data source is also supported in [offline](offline-first) applications in which case the data will come from the database on the mobile device. 

{{% alert type="info" %}}

Use access rules whenever possible to limit data in data grids. This way you know that the objects will always be constrained by these rules (as opposed to constraints on a single data grid). The access rules will also be applied when executing microflows which saves you from repeating constraints.

{{% /alert %}}

## 2 Properties

### 2.1 Entity (Path)

The **Entity (path)** property specifies the target of the database query. 

For example, a top-level data grid is always connected to an entity. A nested data grid can either be connected to an entity or to an entity in the containing data view. In this case the entity path follows one association of type reference in the opposite direction in which the association's arrow is pointing (from * to 1).

Please note that this differs from the [association data source](association-source) in that the objects are not retrieved from the client cache but directly from the database. The association is simply parsed as an extra constraint in the database query.

### 2.2 Show Search Bar {#show-search-bar}

**Show search bar** is only available for data grids. You can select if and when the **[Search bar](search-bar)** of the data grid is shown.

| Value | Description |
| --- | --- |
| Never | No search bar or search button are ever shown. Effectively disables search. |
| With button (initially open) | An end-user can open and close the search bar using the [**Search** button](control-bar#search-button); the search bar is initially open. |
| With button (initially closed) | The user can open and close the search bar using the search button; the search bar is initially closed. |
| Always | The search bar is always visible and cannot be close, nor is there a search button. |

_Default value:_ With button (initially closed)

### 2.3 Wait for Search

The **Wait for search** property is available if **[Show search bar](#show-search-bar)** is set to *With button (initially open)* or to *Always*. 

When **Wait for search** is set to *Yes*, the grid will remain empty of contents the end-user initiates a search. This can be useful if the target entity contains an extremely large set of objects but most mutations only require a subset of the data. Waiting for search will ensure that no database query is performed until the desired subset is specified, thus skipping the initial loading period associated with major data retrievals.

_Default value:_ false

### 2.4 Constraints{#constraints}

Constraints allow for custom, hard-coded limitations on the data displayed. This constraint will be applied after constraints already applied through security. Each constraint consists of an attribute, an operator and a value. Multiple constraints will limit the data even more ("and"). There is no way to create "or" constraints, except by switching to an [XPath data source](xpath-source).

{{% alert type="warning" %}}

Constraints are applied equally to all users and only apply to the data displayed in a single data widget. If the goal is to restrict access to a particular subset of the data for users then [entity access rules](access-rules) should be used as they can be applied to an individual user role and they apply system-wide.

{{% /alert %}}

## 3 Read More

* [Data Widgets](data-widgets)
* [Data Grid](data-grid)