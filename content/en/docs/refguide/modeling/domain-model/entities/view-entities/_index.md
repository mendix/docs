---
title: "View Entities"
url: /refguide/view-entities/
weight: 17
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta and Experimental Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

A view entity represents a dynamic set of data retrieved using a stored [OQL query](/refguide/oql/) and can be used similarly to a [persistable entity](/refguide/persistability/#persistable). This concept is analogous to views commonly found in relational database systems. Whenever a view entity is accessed through a page or microflow, the associated OQL query executes to retrieve the relevant data dynamically. Unlike materialized views, the results of a view entity are not stored as a separate table in the database. Instead, the query is executed each time the view entity is accessed, ensuring the data retrieved is always up-to-date.

During modeling, changes to the underlying entities used in the OQL query affect the options available within the query. At runtime, any changes to the data in the underlying entities immediately impact the data available through the view entity.

View entities can also reference other view entities, allowing for more complex structures and better data organization. 

{{% alert color="info" %}}
View entities are read-only. To change the resulting data of a view entity retrieval, the source data should be modified. For this purpose, you can set up a microflow to map a view object to an object (or objects) of their corresponding source entity (or entities) and commit those.
{{% /alert %}}

## Prerequisites

Your app must use OQL version 2 to use view entities. You can change this setting by clicking **App 'APP_NAME'** > **Settings** > **Runtime** and setting [OQL version 2](/refguide/app-settings/#oql-version-2) to **Yes**. Alternatively, you can drag a new view entity from the toolbar or **Toolbox** to the domain model, which opens a dialog box where you can confirm upgrading to OQL version 2 if it has not been upgraded yet.

## Properties 

Double-click a view entity to open its Properties dialog box. An example of a view entity's properties dialog box is represented in the image below:

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/view-entity.png" width="200" >}}

An example of a view entity's properties dialog is represented in the image below:

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/view-entity-dialog.png" width="500" >}}

To open the OQL query, click the **Show** button in the view entity dialog:

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/view-entity-document.png" width="500" >}}

Alternatively, you can right-click the entity and click **Go to OQL query** from the context menu:

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/view-entity-contextual-menu.png" width="300" >}}

View entity properties consist of the following sections:

* [General](#general)
* [Access rules](#access-rules)
* [Documentation](#documentation)
* [OQL Query Tab Editor](#view-entity-doc-tab-editor)

### General Section {#general}

#### Name {#name}

The name property defines the name of the view entity and OQL query document. This name is used to refer to the view entity in forms, microflows, queries, constraints, etc.

The name has to be unique only within the domain model of a module. You can have two view entities with the same name, provided they are in the domain models of different modules.

#### Image {#image}

The image property can be used to associate an image with a view entity. In the domain model, this image is shown in the top-left corner of the view entity. The image is also shown in other places where view entities are mentioned, such as the entity selection pop-up window when selecting an entity for a data view.

### Access Rules {#access-rules}

When the security level of the app is set to **Production**, the **Access rules** tab becomes available in the view entity properties.

Assigning write access to an attribute allows the selected module role to edit the in-memory representation of the query result, but not the underlying source entity. The access level set on the view entity is the sole determining factor for whether a role can read or write to it. The access levels of underlying entities are not considered. This is crucial to prevent unintended exposure of data that is restricted at the source entity level.

Direct writing from the view entity to its source entities is not supported, but you can set up a microflow to retrieve and update the source entities to achieve this.

### Documentation {#documentation}

You can add any local information about the view entity in this tab. This is also available to other users working on the app.

### OQL Query Tab Editor {#view-entity-doc-tab-editor}

This section contains the **OQL editor** and the **Preview data** table.

The **OQL editor** runs in the OQL query tab, where you can interact with various UI components in Studio Pro, such as the Properties pane and a real-time view to preview your data.

The **OQL editor** allows you to write the query that defines this view entity. While writing the query, the editor suggests names of the entities and attributes in your domain model, as well as allowed clauses, operators, and functions. If the query is not valid, a list of validation errors are displayed underneath the editor with the line and column number of the place where the error was found.

The resulting names and types of the attributes are displayed as column headers in the **Preview data** table. You can view the resulting data set of your OQL query by clicking **Run Query**, which enables Studio Pro to retrieve the data from the database that is configured in your app settings. The database type of the active configuration is also listed in the header of the section. To use this functionality, your app must be running.

{{% alert color="warning" %}}
The **Preview data** table tries to retrieve the data using your OQL query from the running app. This means if you have changed your domain model since you last started the app, you can run into errors when the OQL query uses attributes or entities that do not yet exist in the version of the app that is running.
{{% /alert %}}


## Using a View Entity 

After creating a view entity in the domain model, it can be used in microflows and pages like any other entity. For more information, see [Use View Entities](/refguide/use-view-entities/) and [OQL]( /refguide/oql/).

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
