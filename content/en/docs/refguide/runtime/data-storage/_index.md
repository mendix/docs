---
title: "Data Storage"
url: /refguide/data-storage/
category: "Mendix Runtime"
tags: ["studio pro", "Databases"]
---

## 1 Introduction

Data storage is the data foundation of the Mendix Runtime. Data storage does the following:

* Connects to supported relational databases
* Stores and retrieves entities and associations from the domain model
* Translates XPath and OQL queries to SQL queries
* Handles security transparently and effectively

{{% alert type="warning" %}}
Each app has its own database which cannot be shared directly with other apps. If you want to share data with another app, you must publish an API using [Data Hub](/data-hub/share-data/) or the [REST and OData](/refguide/integration/) capabilities of Mendix.

See [Databases and Apps](#databases), below, for an overview of this.
{{% /alert %}}

## 2 Supported Databases

For apps deployed to the Mendix Cloud, Mendix uses a PostgreSQL database for storing the data defined in the app domain model(s).

If you are deploying to a different infrastructure, Mendix supports the following databases.

* IBM DB2
* HSQLDB
* MySQL
* Oracle RDBMS
* PostgreSQL
* SAP HANA
* Microsoft SQL Server

## 3 Databases and Apps{#databases}

Each app has its own database which is described in the domain models of the modules in the app.

This section explains why you cannot share a database between apps, and gives alternative methods to share data.

### 3.1 Database Table Names

Your app refers to entities using their names and modules. However, the database table holding the data for each entity is linked to the entity in the domain model by a unique identifier. For example, an `Order` entity in your app may be given an ID `807106d1-c0a8-4ef5-a387-2073cdee6d55`. If you delete an entity and create a new entity with the same name, it will be give a different ID as the model will see it as a new entity.

The ID will remain attached to this entity within your app so that you can create multiple branches and deploy new versions of your app while using the same database. This allows you to change the entity in the domain model, renaming it for example, and the app will know that it is still the same entity.

However, if you export your module and import it to another app, the entities in the new app will be given new IDs. Since the ID is used to confirm the relationship between tables in the database and your domain model, you will get a completely different database table when you deploy your app, even though the domain model is the same. This also applies to restoring data to one app when it was backed up from a different app.

### 3.2 Consequence of Sharing a Database

Imagine you have an order handling app, `Order Processing`, which uses an `MyModule.Order` entity with the ID `807106d1-c0a8-4ef5-a387-2073cdee6d55`.

You now create a second app, `Order Viewer`, which you want to use to view your orders. You export the domain model from `Order Processing` and import it into `Order Viewer`. However, the `MyModule.Order` entity in this new app will be given a different ID, for example `836a64f6-6e70-4f69-ba30-ed3876fd33b9`.

You now try to deploy `Order Viewer` to use the same database as `Order Processing`. Because, the `Order` entity has a different ID, the Mendix Runtime will see the two tables as being different. The existing table `mymodule$order` will be deleted and a new `mymodule$order` table will be created linked to the new ID.

### 3.3 How to Share Data

If you want to share data between apps, you should set up a *microservices* architecture. In short, identify one app which you want to use to store the data. This app will now do all the creating, reading, updating, and deleting of the data. It will publish an API to allow other apps to access the data using, for example, [OData](/refguide/published-odata-services/) or [Data Hub](/data-hub/share-data/). Other apps can then consume this API to use the data. This ensures that there is only one source for the data and that it is kept consistent.

An alternative is to copy the data to another app, for example using the [Database Replication](/appstore/modules/database-replication/) module. This however, will be a snapshot of your data at the time you replicate it and changes to the data made in the original app will not be reflected in your new app.
