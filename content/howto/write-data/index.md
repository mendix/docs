---
title: "How to Write Data to Another App with Data Hub"
description: "Describes add annotations to an OData service in Mendix Studio Pro, see external entities with these features in the Data Hub Catalog, and use them to build your app."
tags: ["Data Hub", "external entities", "published OData service" ,"how to","OData", "Data Hub Catalog"]
---

## 1 Introduction

This how-to builds on the information provided in [Share Data Between Apps](/data-hub/share-data/) and shows you how OData annotations give you the power to create, update, and delete data.

**This how-to will teach you how to do the following:**

* Expose your OData entities, attributes, and associations with create, update, and delete options in Mendix Studio Pro
* See which capabilities a particular entity, attribute, or association has in the Data Hub Catalog
* Consume an insertable, updatable, or deletable OData resource in your Mendix app

The OData protocol allows data to be read, created, updated, and deleted. Mendix Studio Pro v9.6 takes advantage of these capabilities. The Data Hub Catalog uses developer-familiar shorthand for these features, while Mendix Studio Pro sticks with the OData definitions: 

    | **Terminology Differences** |
    | Data Hub    | Studio Pro |
    | :---------- | :--------- |
    | Create      | Creatable  |
    | Read        | Insertable |
    | Update      | Updatable  |
    | Delete      | Deletable  |

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Studio Pro version [9.6.0 or above](https://marketplace.mendix.com/link/studiopro/)
* Understand how read-only external entities behave by reading [Share Data Between Apps](/data-hub/share-data/)

## 3 Exposing OData Contracts in Mendix Studio Pro

When you publish an entity in a published OData service, clients can read the data by default. To allow clients to update the data as well, do the following:

1. Open the published OData service in **MyFirstModule** > **APIs** > **{yourname}CustomerODataService**.
1. Select the **Customer** entity and click **Edit**.
1. Select the **Updatable (write)** check box.

## 4 Viewing OData Capabilities in Data Hub Catalog

The OData insertable, updatable, and deletable capabilities all pertain to the data in your app. The Data Hub Catalog provides an inventory of the metadata in your apps. In the Data Hub Catalog you can see the capabilities of entities, attributes, and associations. Changes to the data itself occur in Mendix apps themselves, not in the Data Hub Catalog.

To see the capabilities of a particular OData entity, do the following: 

1. Go to the Data Hub Catalog and search for the name of an exposed OData service endpoint, entity, attribute, or association. For more information, see the [Using the Data Hub Catalog and Curating Your Own Service](/data-hub/share-data#use-and-curate) section of *Share Data Between Apps*.
1. Select your entity from the left-side search results pane. If you are not seeing many results, try removing the **Production** filter on your search.
1. Notice the highlighted **CRUD** letters next to the entity name in the search panel and in the detailed information in the center. The purple letters indicate which operations are supported. The grey letters indicate which are not. Hover over the letters to see which operations are supported:

![entity capabilities](attachments/left-panel-crud.png)
![entity capabilities](attachments/center-panel-crud.png)

## 5 Consuming OData resources in your Mendix app

Just like in the Catalog you can see the CRUD capabilities of entities, attributes, and associations inside the Data Hub pane of the Mendix Studio Pro.

 Version 1: The CRUD capabilities displayed in Studio Pro correspond to the values in the Catalog and also the support in Studio Pro.
 Version 2: If Studio Pro supports displaying CRUD capabilities, then the values correspond to the values in the Catalog
 
![crud capabilities](attachments/crud-capabilities.png)

To consume an OData entity:
 1. Inside the Data Hub pane start typing in the search field
 2. Select your entity from the Data Hub pane. If you're not seeing any or enough results, try enabling the **Show development environment** filter on your search.
 3. Drag an entity to the Domain Model.
 4. Consume that entity anywhere in your module just like a local entity. This is based on the CRUD capabilities.
 
 Is this part necessary??: After dragging an entity to the Domain Model you are free to change the properties as you wish.
 Is this part necessary??: When consuming the resources inside Microflows, Pages, ... it acts the same as a local entity.
 Is this part necessary??: In the Domain Model external entities have a purple color so it is easy to distinguish between different types.
 Is this part necessary??: If this is the first entity from a Service inside the module, then this action will also add the Service to the module.

