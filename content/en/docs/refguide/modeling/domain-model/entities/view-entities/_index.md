---
title: "View Entities"
url: /refguide/view-entities/
weight: 17
cascade:
    - beta: true
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}} This feature was introduced in Mendix 10.19 and is currently in beta. For more information, see [Beta and Experimental Releases](/releasenotes/beta-features/). {{% /alert %}}

## Introduction

A view entity represents the result set of a stored [OQL query](/refguide/oql/) and can be used similarly to a [persistable entity](/refguide/persistability/#persistable). This concept is similar to the function of views in general database technology. Whenever a view entity is retrieved via a page or a microflow, the corresponding OQL query executes to fetch the relevant data. Consequently, the result set of a view entity is not stored as a separate table in the database (like a materialized view). Instead, the query runs each time the view entity is accessed, dynamically retrieving the data.

During modeling, changes to the underlying entities used in the OQL query affect the options available within the query. At runtime, any changes to the data in the underlying entities immediately impact the data available through the view entity.

View entities can also reference other view entities, allowing for more complex structures and better data organization. 

{{% alert color="info" %}} View entities are read-only. To change the resulting data of a view entity retrieval, the source data should be modified. For this purpose, you can set up a microflow to map a view object to object (or objects) of their corresponding source entity/entities and commit those. {{% /alert %}}

## Enabling OQL Version 2 

Your app must use OQL version 2 to use view entities. You can change this setting by clicking **App** > **Settings** > **Runtime** and setting [OQL version 2](/refguide/app-settings/#oql-version-2) to **Yes**. You can also drag a new view entity from the toolbar or **Toolbox** to the domain model, in which Studio Pro will confirm setting the OQL version to 2. 

## Properties 

After adding a view entity, you can specify the OQL query by double-clicking the entity to open the view entity properties dialog:

{{< figure src="/attachments/refguide/modeling/domain-model/use-view-entities/customer-with-address.png" width="500" >}}

### General

The **General** field contains the **OQL editor** and the **Preview data** table.

The **OQL editor** allows you to write the query that defines this view entity. While writing this query, the editor suggests names of the entities and attributes in your domain model, as well as allowed clauses, operators, and functions. If the query is not valid, a list of validation errors will be displayed underneath the editor with the line and column number of the place where the error was found.

The resulting names and types of the attributes will be displayed as column headers in the **Preview data** table. You can view the resulting data set of your OQL query by clicking **Run Query**, which enables Studio Pro to retrieve the data from the database that is configured in your app settings. The database type of the active configuration is also listed in the header of the section. To use this functionality, your app must be running.

{{% alert color="warning" %}}
The **Preview data** table tries to retrieve the data using your OQL query from the running app. This means if you have changed your domain model since you last started the app, you can run into errors when the OQL query uses attributes or entities that do not yet exist in the version of the app that is running.
{{% /alert %}}

### Access Rules

When the security level of the app is set to **Production**, the **Access rules** tab becomes available in the view entity properties.

Assigning write access to an attribute allows the selected module role to edit the in-memory representation of the query result, but not the underlying source entity. The access level set on the view entity is the sole determining factor for whether a role can read or write to it. The access levels of underlying entities are not considered. This is crucial to prevent unintended exposure of data that is restricted at the source entity level.

Direct writing from the view entity to its source entities is not supported, but you can set up a microflow to retrieve and update the source entities to achieve this functionality.

### Documentation

You can add any local information about the view entity in this tab. This is also available to other users working on the app.

## Using a View Entity

After creating a view entity in the domain model, it can be used in microflows and pages like any other entity. For more information, see [Use View Entities](/refguide/use-view-entities/).
