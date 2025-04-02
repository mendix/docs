---
title: "View Entities"
url: /refguide/view-entities/
weight: 17
cascade:
    - beta: true
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This feature was introduced in Studio Pro 10.19 and is currently in beta. For more information, see [Beta and Experimental Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

A view entity represents the result set of a stored [OQL query](/refguide/oql/) and can be used similarly to a [persistable entity](/refguide/persistability/#persistable). This concept is similar to the function of views in general database technology. Whenever a view entity is retrieved via a page or a microflow, the corresponding OQL query runs and fetches the relevant data. Consequently, the result set of a view entity is not stored as a separate table in the database (like a materialized view). Instead, the query runs each time the view entity is accessed, dynamically retrieving the data.

During modeling, changes to the underlying entities used in the OQL query affect the options available within the query. At runtime, any changes to the data in the underlying entities immediately impact the data available through the view entity.

View entities can also reference other view entities, allowing for more complex structures and better data organization. 

{{% alert color="info" %}}
View entities are read-only. To change the resulting data of a view entity retrieval, the source data should be modified. For this purpose, you can set up a microflow to map a view object to an object (or objects) of their corresponding source entity (or entities) and commit those.
{{% /alert %}}

## Prerequisites

Your app must use OQL version 2 to use view entities. You can change this setting by clicking **App 'APP_NAME'** > **Settings** > **Runtime** and setting [OQL version 2](/refguide/app-settings/#oql-version-2) to **Yes**. Alternatively, you can drag a new view entity from the toolbar or **Toolbox** to the domain model, which opens a dialog box where you can confirm upgrading to OQL version 2 if it has not been upgraded yet.

## Properties 

Double-click a view entity to open its Properties dialog box. An example of a view entity's properties dialog box is represented in the image below:

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/customer-with-address.png" width="500" >}}

View entity properties consist of the following sections:

* [General](#general)
* [OQL editor](#oql-editor)
* [Access rules](#access-rules)
* [Documentation](#documentation)

### General Section {#general}

#### Name {#name}

The name property defines the name of the view entity. This name is used to refer to the view entity in forms, microflows, queries, constraints, etc.

The name has to be unique only within the domain model of a module. You can have two view entities with the same name, provided they are in the domain models of different modules.

#### Image {#image}

The image property can be used to associate an image with a view entity. In the domain model, this image is shown in the top-left corner of the view entity. The image is also shown in other places where view entities are mentioned, such as the entity selection pop-up window when selecting an entity for a data view.

### OQL Editor Section {#oql-editor}

This section contains the **OQL editor** and the **Preview data** table.

The **OQL editor** allows you to write the query that defines this view entity. While writing this query, the editor suggests names of the entities and attributes in your domain model, as well as allowed clauses, operators, and functions. If the query is not valid, a list of validation errors will be displayed underneath the editor with the line and column number of the place where the error was found.

The resulting names and types of the attributes will be displayed as column headers in the **Preview data** table. You can view the resulting data set of your OQL query by clicking **Run Query**, which enables Studio Pro to retrieve the data from the database that is configured in your app settings. The database type of the active configuration is also listed in the header of the section. To use this functionality, your app must be running.

{{% alert color="warning" %}}
The **Preview data** table tries to retrieve the data using your OQL query from the running app. This means if you have changed your domain model since you last started the app, you can run into errors when the OQL query uses attributes or entities that do not yet exist in the version of the app that is running.
{{% /alert %}}

### Access Rules {#access-rules}

When the security level of the app is set to **Production**, the **Access rules** tab becomes available in the view entity properties.

Assigning write access to an attribute allows the selected module role to edit the in-memory representation of the query result, but not the underlying source entity. The access level set on the view entity is the sole determining factor for whether a role can read or write to it. The access levels of underlying entities are not considered. This is crucial to prevent unintended exposure of data that is restricted at the source entity level.

Direct writing from the view entity to its source entities is not supported, but you can set up a microflow to retrieve and update the source entities to achieve this.

### Documentation {#documentation}

You can add any local information about the view entity in this tab. This is also available to other users working on the app.

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
