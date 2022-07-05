---
title: "Database Source"
url: /refguide8/database-source/
tags: ["studio pro", "database", "data source"]
weight: 10
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/database-source.pdf).
{{% /alert %}}

## 1 Introduction

If **Database** is selected as the data source for a widget then an object or objects shown are retrieved directly from the database with a query. This data source is also supported in [offline](/refguide8/offline-first/) applications in which case the data will come from the database on the mobile device.

You can filter data shown with the help of database [constraints](#constraints). However, if you want to restrict data not for a single widget, but for several, you may want to apply [access rules](/refguide8/access-rules/) for entities instead of database constraints. This way you know that the objects will always be constrained by these rules . Access rules will also be applied when executing microflows which saves you from repeating constraints.

## 2 Properties

### 2.1 Entity (Path)

The **Entity (path)** property specifies the target of the database query. If you have a top-level data widget, **Entity (path)** will get objects of the selected entity directly. If you have a nested data widget, you can also select an entity of a parent data container. In this case objects are retrieved following the association path and the association is parsed as an extra constraint in the database query. 

{{< figure src="/attachments/refguide8/modeling/pages/data-widgets/data-sources/database-source/data-source-example.png" alt="Data Source Example"   width="400"  >}}

{{% alert color="info" %}}

This differs from the [association data source](/refguide8/association-source/) when objects are retrieved from the memory, not database.

{{% /alert %}}

### 2.2 Show Search Bar {#show-search-bar}

**Show search bar** is only available for data grids. You can select if and when the **[Search bar](/refguide8/search-bar/)** of the data grid is shown.

| Value | Description |
| --- | --- |
| Never | No search bar or search button are ever shown. Effectively disables search. |
| With button (initially open) | An end-user can open and close the search bar using the [**Search** button](/refguide8/control-bar/#search-button); the search bar is initially open. |
| With button (initially closed) *(default)*  | The user can open and close the search bar using the search button; the search bar is initially closed. |
| Always | The search bar is always visible and cannot be close, nor is there a search button. |

### 2.3 Wait for Search

The **Wait for search** property is available if **[Show search bar](#show-search-bar)** is set to *With button (initially open)* or to *Always*. 

When **Wait for search** is set to *Yes*, the grid will remain empty of contents the end-user initiates a search. This can be useful if the target entity contains an extremely large set of objects but most mutations only require a subset of the data. Waiting for search will ensure that no database query is performed until the desired subset is specified, thus skipping the initial loading period associated with major data retrievals.

Default: *false*

### 2.4 Constraints{#constraints}

Constraints allow for custom, hard-coded limitations on the data displayed. This constraint will be applied on top of security constraints. For example, if your entity has an access rule that makes it read-only for the user and/or has an XPath constraint, the XPath constraint will be applied first.

Each constraint consists of an **Attribute**, an **Operator**, and a **Value**:

{{< figure src="/attachments/refguide8/modeling/pages/data-widgets/data-sources/database-source/constraint-example.png" alt="Constraint Example" >}}

Multiple constraints will limit the data even more (the logical operator **AND**). There is no way to use the logical operator **OR** in constraints, but you can switch to an [XPath data source](/refguide8/xpath-source/) and create an XPath constraint.

{{% alert color="warning" %}}

Constraints are applied equally to all users and only apply to the data displayed in a single data widget. If the goal is to restrict access to a particular subset of the data for users then [access rules](/refguide8/access-rules/) for entities should be used as they can be applied to an individual user role and they apply system-wide.

{{% /alert %}}

## 3 Read More

* [Data Widgets](/refguide8/data-widgets/)
* [Data Grid](/refguide8/data-grid/)