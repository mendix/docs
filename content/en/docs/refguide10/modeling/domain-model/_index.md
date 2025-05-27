---
title: "Data in the Domain Model"
linktitle: "Data (Domain Model)"
url: /refguide10/domain-model/
weight: 30
description: "Introduces the domain model in Studio Pro."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The **domain model** describes the information (or data) used by your app in a visual way. The domain model is a data model which abstracts the structure of a relational database management system (RDBMS) which stores the business data which powers your app. See [Implementation](#implementation), below, for information on the relationship between the domain model and the underlying RDBMS.

The domain model is central to the architecture of your application. Each [module](/refguide10/modules/) has its own domain model which describes the data used in that module. All modules in an app can use data from all the domain models within the app.

A domain model consists of [entities](/refguide10/entities/) with their relationships to other entities represented by [associations](/refguide10/associations/). Entities can be one of four types:

* Persistable (blue) – entities which hold app information which needs to be held permanently or shared with other end-users of the app (see [Implementation of Persistable Entities](#implementation), below, for information on how these are implemented)
* Non-persistable (orange) – entities which hold app information which is needed while the end-user is using the app but can then be thrown away
* External (purple) – entities, described in the [Mendix Catalog](/catalog/), which contain data which belongs to another app or service and is needed while the end-user is using the app but isn't stored in the database of the app
* View (green) – entities which are the result of a stored OQL query on persistable entities or other view entities (this feature is in beta)

{{% alert color="info" %}}
[View entities](/refguide10/view-entities/) were introduced in [Studio Pro 10.19](/releasenotes/studio-pro/10.19/) as a beta feature. To enable this feature in your app, set the OQL version to version 2 by clicking **App** > **Settings** > **Runtime**.
{{% /alert %}}

You can also add [annotations](/refguide10/annotations/) to your domain model to remind yourself, and other team members, how it is to be used.

See [Configuring a Domain Model](/refguide10/configuring-a-domain-model/) for information on how to create persistable and non-persistable entities in the domain model of your app modules. See [External Entities](/refguide10/external-entities/) for how to add an external entity to your app.

## Representation of the Domain Model

Below is a domain model that describes customers and orders. The names of the entities are `Customer` and `Order`. The line between them is an association. `Order_Customer`. One customer can have many orders, but each order is for one customer. Within the boxes representing the entities you can see the [attributes](/refguide10/attributes/) of the entities together with the [type](/refguide10/attributes/#type) of data they hold. There is also a [non-persistable](/refguide10/persistability/) entity, `ProductQueryResults`, which is used to record product information which is retrieved from a separate product system, and an [external entity](/refguide10/external-entities/), `Products`, which holds a list of products stored in a separate system.

{{< figure src="/attachments/refguide10/modeling/domain-model/annotated-domain-model.png" alt="Domain Model annotated with structure" >}}

| Element | Displays |
| --- | --- |
| Annotation | A comment explaining an aspect of the domain model |
| Generalization | Indicates that this entity is based on another entity (see [generalization](/refguide10/entities/#generalization) in *Entities*) and will include that entity's attributes and behavior |
| Image | An image which helps to identify the entity |
| Event Handler | An indication that one or more [event handlers](/refguide10/event-handlers/) have been set up for this entity |
| Validation Rule | An indication that one or more [validation rules](/refguide10/validation-rules/) have been set up for this attribute, the attribute *"FullName"* |
| Calculated Value | An indication that the value of this attribute (*"NameLength"*) is calculated |
| Persistable Entity | This is an entity stored permanently in a database |
| One | Indicates that one of this entity relates to the quantity of the entity at the other end of the association |
| Association Name | How the [association](/refguide10/associations/) will be referred to in the database |
| Many | Indicates that many of these entities relate to the quantity of the entity at the other end of the association |
| Association Owner | An end of an association without an arrow indicates that this entity owns the association (it is also possible for both entities to own the association, see [ownership](/refguide10/associations/#ownership) in *Associations* for more information) |
| Entity Name | How the [entity](/refguide10/entities/) will be referred to in the database, *Order* |
| Attribute Name | How this [attribute](/refguide10/attributes/) will be referred to in the database, *"Number"* |
| Attribute Type | The [type](/refguide10/attributes/#type) (*Autonumber*) of data stored in this attribute |
| Service Name | The service which provides the data for this external entity |
| Non-persistable Entity | This is an entity which is not stored in a database but only stored temporarily within the app |
| View Entity | This is an entity which is the result set of a stored OQL query |
| External Entity | This is an entity which represents a link to an external data source |

## Implementation of Persistable Entities {#implementation}

While data in non-persistable and external entities is maintained in the memory of the app, every app has its own database or schema where it stores persistable data. This is solely for its own use and cannot be shared with another Mendix app. The persistable (persistent or permanent) data is stored in one of the [supported RDBMSs](/refguide10/system-requirements/#databases), depending on where the app is being deployed. For example, an app deployed to Mendix Cloud will use a PostgreSQL database to store its data. The database structure is created during the app deployment to support the domain models in the app.

In the database, every entity is stored in a separate table and has columns for the attributes defined in Studio Pro (except those which are calculated) and the system attributes. Each row of the table contains the data for an object of this particular entity type, and every entity table contains a column holding a unique identifier for the object. If an entity has specializations there is also a column indicating which specialization the object belongs to.

Associations are stored in association tables with columns holding the identifiers (ID) of both associated objects. This allows for more flexibility when creating your domain model. In Mendix 10.21 and above, you can also choose to store direct associations for one-to-one and one-to-many associations. For more information, see [Association Storage Options](/refguide10/association-storage/).

{{% alert color="info" %}}
Mendix apps cannot share data by sharing the same database. If you want two apps to share the same database, then you need to share the data from one app to the other using APIs. In Mendix, these are supported by external entities or the REST and OData services described in the [Integration](/refguide10/integration/) section of the Studio Pro Guide. This is referred to as a microservices architecture.

For more information on how the underlying database behaves and why data cannot be shared between apps see [Data Storage](/refguide10/data-storage/).
{{% /alert %}}

### Implementation Example

Take a look at the following domain model.

{{< figure src="/attachments/refguide10/modeling/domain-model/customer-order.png" >}}

#### Customer Entity

Objects of the entity `Customer` are stored in the table `module$customer` which is shown below. The `system$owner` and `system$changedby` columns are added to tables when indicated in the entity definition and contain the IDs of objects from the `System.User` entity (the `User` entity in the `System` module domain model). This indicates the end-user who owns, and the one which last changed, each object. The `NameLength` attribute is calculated and is not stored in the table.

| id | createddate | changeddate | system$owner | system$changedby | fullname |
| --: | --- | --- | --: | --: | --- |
| 1 | 2006-10-24 08:10:45.053 | 2009-11-27 09:56:45.099 | 66 | 29 | Steve Jobs |
| 3 | 2007-09-30 09:56:45.099 | 2008-04-01 08:10:45.053 | 66 | 34 | Bill Gates |

#### Order_Customer Association

The association `Order_Customer` is implemented through an association table and is stored in the table `module$order_customer` which is shown below. Both columns contain IDs of the associated objects.

| module$orderid | module$customerid |
| --: | --: |
| 8 | 1 |
| 5 | 3 |

#### Order Entity

The entity `Order` is stored in the table `module$order` which is shown below. It is similar to the table of the entity `Customer`. However no system attributes have been defined in the domain model and so they are not stored in the table.

| id | number | date |
| --: | --: | --- |
| 5 | 5 | 2009-11-27 09:56:45.099 |
| 8 | 8 | 2008-04-01 08:10:45.053 |

#### OrderLine Entity

{{% alert color="info" %}}
The description of the `OrderLine` includes direct associations, which were introduced in Mendix 10.21.0. See [Association Storage Options](/refguide10/association-storage/) for more information.
{{% /alert %}}

The entity `OrderLine` is stored in the table `module$orderline` which is shown below. It is similar to the table of the entity `Order`. `Orderline` also has an association, `OrderLine_Order` associating each order line with the order it belongs to. This is implemented as a direct association, so the information is stored in the `module$orderline` table, as shown below.

| id | module$orderline_order | productid | quantity |
| --: | --: | --- | --: |
| 22 | 5 | X23592 | 1 |
| 23 | 5 | X23613 | 7 |
| 55 | 8 | Z97D22 | 2 |
| 57 | 8 | A49TS3 | 2 |

## Read More

* [Configuring a Domain Model](/refguide10/configuring-a-domain-model/)
* [Maia for Domain Model](/refguide10/maia-for-domain-model/)
