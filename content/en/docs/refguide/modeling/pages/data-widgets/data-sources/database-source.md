---
title: "Database Source"
url: /refguide/database-source/
weight: 10
---

## Introduction

If **Database** is selected as the data source for a widget then an object or objects shown are retrieved directly from the database with a query. This data source is also supported in [offline](/refguide/offline-first/) applications in which case the data will come from the database on the mobile device.

You can filter data shown with the help of database [constraints](#constraints). However, if you want to restrict data not for a single widget, but for several, you may want to apply [access rules](/refguide/access-rules/) for entities instead of database constraints. This way you know that the objects will always be constrained by these rules. Access rules will also be applied when executing microflows which saves you from repeating constraints.

## Properties

### Entity (Path)

The **Entity (path)** property specifies the target of the database query. If you have a top-level data widget, **Entity (path)** will get objects of the selected entity directly. If you have a nested data widget, you can also select an entity of a parent data container. In this case objects are retrieved following the association path and the association is parsed as an extra constraint in the database query. 

{{< figure src="/attachments/refguide/modeling/pages/data-widgets/data-sources/database-source/data-source-example.png" alt="Data Source Example"   width="400"  class="no-border" >}}

{{% alert color="info" %}}
This differs from the [association data source](/refguide/association-source/) when objects are retrieved from the memory, not database.
{{% /alert %}}

### XPath Constraint{#constraints}

You can add a full XPath constraint to a Database source; click **Edit…** next to the **XPath constraint** field. See [XPath Constraints](/refguide/xpath-constraints/) for more information. This constraint will be applied on top of security constraints. For example, if your entity has an access rule that makes it read-only for the user and/or has an XPath constraint, the entity access rule will be applied first.

{{% alert color="info" %}}
If the goal is to restrict access to a particular subset of the data for users then [access rules](/refguide/access-rules/) for entities should be used as they can be applied to an individual user role and they apply system-wide.
{{% /alert %}}

### Show Search Bar {#show-search-bar}

**Show search bar** is only available for a **Data grid**. You can select if and when the **[Search bar](/refguide/search-bar/)** of the data grid is shown.

| Value | Description |
| --- | --- |
| Never | No search bar or search button are ever shown. Effectively disables search. |
| With button (initially open) | An end-user can open and close the search bar using the [**Search** button](/refguide/control-bar/#search-button); the search bar is initially open. |
| With button (initially closed) *(default)*  | The user can open and close the search bar using the search button; the search bar is initially closed. |
| Always | The search bar is always visible and cannot be close, nor is there a search button. |

#### Wait for Search

The **Wait for search** property is available if **[Show search bar](#show-search-bar)** is set to *With button (initially open)* or to *Always*. 

When **Wait for search** is set to *Yes*, the grid will remain empty of contents the end-user initiates a search. This can be useful if the target entity contains an extremely large set of objects but most mutations only require a subset of the data. Waiting for search will ensure that no database query is performed until the desired subset is specified, thus skipping the initial loading period associated with major data retrievals.

Default: *false*

### Sort Order

**Sort order** is only available for a [**Data grid 2**](/appstore/modules/data-grid-2/) widget. Click **Edit…** to select attributes to sort on, and choose whether to sort in **Ascending** or **Descending** order.

## Read More

* [Data Containers](/refguide/data-widgets/)
* [Data Grid](/refguide/data-grid/)
