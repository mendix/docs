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
1.  Notice the highlighted **CRUD** letters next to the entity name in the search panel and in the detailed information in the center. The purple letters indicate which operations are supported. The grey letters indicate which are not. Hover over the letters to see which operations are supported:

    ![entity capabilities](attachments/write-data/left-panel-crud.png)
    ![entity capabilities](attachments/write-data/center-panel-crud.png)


## 5 Consuming OData Resources in your Mendix App

**TODO** Data Modelling team explains that the CRUD letters visible in the Catalog match what you'll see in the Data Hub pane in Studio Pro. And corresponds to what you'll be able to do with the data when you consume that external entity in your app.
