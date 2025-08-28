---
title: "View Entities"
url: /refguide/view-entities/
weight: 17
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A view entity represents a dynamic set of data retrieved using a stored [OQL query](/refguide/oql/) and can be used similarly to a [persistable entity](/refguide/persistability/#persistable). This concept is analogous to views commonly found in relational database systems. Whenever a view entity is accessed through a page or microflow, the associated OQL query executes to retrieve the relevant data dynamically. Unlike materialized views, the results of a view entity are not stored as a separate table in the database. Instead, the query is executed each time the view entity is accessed, ensuring the data retrieved is always up-to-date.

During modeling, changes to the underlying entities used in the OQL query affect the options available within the query. At runtime, any changes to the data in the underlying entities immediately impact the data available through the view entity.

View entities can also reference other view entities, allowing for more complex structures and better data organization. 

{{% alert color="info" %}}
View entities are read-only. To change the resulting data of a view entity retrieval, the source data should be modified. For this purpose, you can set up a microflow to map a view object to an object (or objects) of their corresponding source entity (or entities) and commit those.
{{% /alert %}}

## Prerequisites

Your app must use OQL version 2 to use view entities. You can change this setting by clicking **App 'APP_NAME'** > **Settings** > **Runtime** and setting [OQL version 2](/refguide/app-settings/#oql-version-2) to **Yes**. Alternatively, you can drag a new view entity from the toolbar or **Toolbox** to the domain model, which opens a dialog box where you can confirm upgrading to OQL version 2 if it has not been upgraded yet.

## Properties Dialog

Double-click a view entity to open its Properties dialog box. An example of a view entity's properties dialog box is represented in the image below:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/view-entity-dialog.png" class="no-border" >}}

The view entities **Properties** dialog consists of the following sections:

* [General](#general)
* [Access rules](#access-rules)
* [Documentation](#documentation)

### General Section {#general}

#### Name {#name}

The name property defines the name of the view entity and OQL query document. This name is used to refer to the view entity in forms, microflows, queries, constraints, etc.

The name has to be unique only within the domain model of a module. You can have two view entities with the same name, provided they are in the domain models of different modules.

#### Image {#image}

The image property can be used to associate an image with a view entity. In the domain model, this image is shown in the top-left corner of the view entity. The image is also shown in other places where view entities are mentioned, such as the entity selection pop-up window when selecting an entity for a data view.

### Access Rules {#access-rules}

When the security level of the app is set to **Production**, the **Access rules** tab becomes available in the view entity properties.

Assigning write access to an attribute allows the selected module role to edit the in-memory representation of the query result, but not the underlying source entity. The access level set on the view entity is the sole determining factor for whether a role can read or write to it. The access levels of underlying entities are not considered. This is crucial to prevent unintended exposure of data that is restricted at the source entity level.

{{% alert color="info" %}}
Direct writing from the view entity to its source entities is not supported, but you can set up a microflow to retrieve and update the source entities to achieve this. See [Update Underlying Persistent Entities](/refguide/view-entity-overview-pages/#update-underlying-persistent-entities) in *Creating Overview Pages* for more information.
{{% /alert %}}

### Documentation {#documentation}

You can add any local information about the view entity in this tab. This is also available to other users working on the app.

## OQL Query Tab {#oql-query-tab}

To open the OQL query tab, click **Show** in the view entity dialog:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/view-entity-dialog-show.png" class="no-border" >}}

Alternatively, you can right-click the view entity and click **Go to OQL query** from the context menu:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/view-entity-contextual-menu.png" width="400" >}}

The OQL query tab consists of the following sections:

* [OQL editor](#oql-editor)
* [Maia for OQL](#maia-for-oql)
* [Preview data table](#preview-data)

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/view-entity-document.png">}}

### OQL Editor {#oql-editor}

The **OQL editor** runs in the OQL query tab, where you can interact with various UI components in Studio Pro, such as the Properties pane, the Maia pane, the Domain model, and more.

The **OQL editor** allows you to write the query that defines this view entity. While writing the query, the editor suggests names of the entities and attributes in your domain model, as well as allowed clauses, operators, and functions. If the query is not valid, a list of validation errors are displayed underneath the editor with the line and column number of the place where the error was found.

To learn more about how to write OQL code, see [OQL](/refguide/oql/).

#### Supported OQL Syntax Patterns

An OQL query can begin with either a `SELECT` clause or a `FROM` clause, as both syntaxes are supported in the OQL editor. Regardless of which clause you choose to start with, you must follow the specific sequence of OQL clauses as follows:

| Classic | Alternative |
| --- | --- |
| SELECT | FROM<br />JOIN<br />WHERE<br />GROUP BY<br />HAVING |
| FROM<br />JOIN<br />WHERE<br />GROUP BY<br />HAVING | SELECT |
| ORDER BY<br />LIMIT<br />OFFSET | ORDER BY<br />LIMIT<br />OFFSET |

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/syntax.png">}}

#### `ORDER BY` Is Only Needed with `LIMIT` or `OFFSET`

Similar to other types of Mendix entity, view entities represent data without enforcing any specific order. Therefore, using the `ORDER BY` clause in the view entity query to sort query results is neither possible nor necessary. Data retrieved from a view entity can be sorted on retrieval (like regular entities) using options like the [Sorting](/refguide/retrieve/#sorting) feature in a Retrieve microflow activity.

The `ORDER BY` clause is only required in a view entity when using `LIMIT` or `OFFSET` to create data subsets. For example, you might need to use `ORDER BY` when retrieving:

* The top 5 customers by revenue
* The 10 most recent transactions
* The first 20 products by profit margin

For more information, see [ORDER BY Clause](/refguide/oql-clauses/#order-by) in *OQL Clauses*.

#### `ID` as Association

You can create [one-way navigable associations](/refguide/association-properties/#one-way-navigable) from a view entity to its source entities. To establish this association, include the source entity's reserved `ID` in the `SELECT` clause. In this specific scenario, the alias is optional. If the alias is omitted, a default name following the association naming convention will be applied. However, you can always customize the association name by specifying an alias of the reserved `ID` in your code.

```sql
SELECT
    o.ID,
    o.OrderDate AS OrderDate,
FROM Shop.Order AS o
```

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/association.png">}}

```sql
SELECT
    o.ID AS FromOrderViewToOrder,
    o.OrderDate AS OrderDate,
FROM Shop.Order AS o
```

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/association-alias.png" >}}

### Maia for OQL {#maia-for-oql}

You can ask Maia to suggest OQL queries for you. For more information, see [Maia for OQL](/refguide/maia-for-oql/).

### Preview Data Table {#preview-data}

You can view the resulting data set of your OQL query by clicking **Run Query**, which enables Studio Pro to retrieve the data from the database that is configured in your app settings. The database type of the active configuration is also listed in the header of the section.

{{% alert color="info" %}}
You can only use this functionality when your app is running as it needs access the test data.
{{% /alert %}}

{{% alert color="warning" %}}
The **Preview data** table tries to retrieve the data using your OQL query from the running app. This means if you have changed your domain model since you last started the app, you can run into errors when the OQL query uses attributes or entities that do not yet exist in the version of the app that is running.
{{% /alert %}}

## Using a View Entity

After creating a view entity in the domain model, it can be used in microflows and pages like any other entity. For more information, see [Use View Entities](/refguide/use-view-entities/).

## Read More

For specific use case scenarios, see the following:

* [Creating Overview Pages](/refguide/view-entity-overview-pages/)
* [Decoupling APIs](/refguide/decoupling-apis/)
* [Charting with View Entities](/refguide/charting-with-view-entities/)
* [Multilingual Apps and Translations](/refguide/multilingual-apps/)
* [View Archived Data](/refguide/view-archived-data/)
* [Create a Pivot Table with View Entities](/refguide/view-entity-pivot-table/)
* [Data Versioning with View Entities](/refguide/view-entity-data-versioning/)
* [Exporting Data with View Entities](/refguide/view-entity-expport-data/)
* [Abstracting Data of Add-On Modules](/refguide/abstracting-view-entity-data/)
* [Multitenant Applications](/refguide/view-entity-multitenant-apps/)
