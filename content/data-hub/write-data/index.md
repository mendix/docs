---
title: "Write Data to Another App"
description: "Describes add annotations to an OData service in Mendix Studio Pro, see external entities with these features in the Data Hub Catalog, and use them to build your app."
tags: ["Data Hub", "external entities", "published OData service" ,"how to","OData", "Data Hub Catalog"]
---

## 1 Introduction

This how-to builds on the information provided in [How to Share Data Between Apps](share-data/) and shows you how OData annotations give you the power to create, update, and delete data.

**This how-to will teach you how to do the following:**

* Expose your OData entities, attributes, and associations with create, update, and delete options in Mendix Studio Pro
* See which capabilities a particular entity, attribute, or association has in the Data Hub Catalog
* Consume an insertable, updatable, or deletable OData resource in your Mendix app

The OData protocol allows data to be read, created, updated, and deleted. Mendix Studio Pro version 9.6 and above takes advantage of these capabilities. The Data Hub Catalog uses developer-familiar shorthand for these features, while Mendix Studio Pro sticks with the OData definitions.

Note the following terminology differences described in the table below:

| Data Hub | Studio Pro |
| -------- | ---------- |
| Create   | Creatable  |
| Read     | Insertable |
| Update   | Updatable  |
| Delete   | Deletable  |


## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Studio Pro version [9.6.0 or above](https://marketplace.mendix.com/link/studiopro/)
* Understand how read-only external entities behave by reading [How to Share Data Between Apps](share-data/)

## 3 Exposing OData Contracts in Mendix Studio Pro

When you publish an entity in a published OData service, clients can read the data by default. To allow clients to update the data as well, do the following:

1. Open the published OData service in **MyFirstModule** > **APIs** > **{yourname}CustomerODataService**.
2. Select the **Customer** entity and click **Edit**.
3. Select the **Updatable (write)** checkbox.

## 4 Viewing OData Capabilities in Data Hub Catalog

The OData insertable, updatable, and deletable capabilities all pertain to the data in your app. The Data Hub Catalog provides an inventory of the metadata in your apps. In the Data Hub Catalog you can see the capabilities of entities, attributes, and associations. Changes to the data itself occur in Mendix apps themselves, not in the Data Hub Catalog.

To see the capabilities of a particular OData entity, do the following: 

1. Go to the Data Hub Catalog and search for the name of an exposed OData service endpoint, entity, attribute, or association. For more information, see the [Using the Data Hub Catalog and Curating Your Own Service](share-data#use-and-curate) section in *Share Data Between Apps*.
2. Select your entity from the left-side search results pane. If you are not seeing many results, try removing the **Production** filter on your search.
3. Notice the highlighted **CRUD** letters next to the entity name in the search panel and in the detailed information in the center. The purple letters indicate which operations are supported. The gray letters indicate which are not. Hover over the letters to see which operations are supported:

    ![entity capabilities](attachments/crud-info.png)

## 5 Consuming OData Resources in Your Mendix App

Just like in the Catalog, you can see the **CRUD** capabilities of entities, attributes, and associations inside the **Data Hub** pane of Studio Pro.

In Studio Pro you might not see all the **CRUD** capabilities highlighted that are highlighted in Data Hub Catalog. A **CRUD** capability will only be highlighted when it is both supported by the contract and by Studio Pro.

![crud capabilities](attachments/crud-capabilities.png)

To consume an OData entity, do the following:

 1. In the **Data Hub** pane, enter a search term in the search field. 
 2. Select your entity from the **Data Hub** pane. By default it shows only results published to the production environment. If you also want to see results from other environments, click the filter icon and check the **Show development environment** checkbox.
  3. Drag the entity to the domain model.

Now you have an external entity in your domain model. Depending on the capabilities, for example the **CRUD** capabilities, you can use them to model your app as you would normally do.
