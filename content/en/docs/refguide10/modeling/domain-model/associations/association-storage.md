---
title: "Association Storage Options"
linktitle: "Association Storage"
url: /refguide10/association-storage/
weight: 25
---

## Introduction

Association storage options were introduced in Mendix 10.21 to give you more control over how associations are implemented in the underlying database.

## Association Tables vs. Direct Associations

<!--- Everything except simple associations is in tables – what do you mean "except simple associations?" --->

Prior to Mendix 10.21, all associations (except the system associations `owner` and `changedby`, where selected) were stored in association tables. This had the advantage that you didn't have to worry about the [multiplicity](/refguide10/association-properties/#multiplicity) or [navigability](/refguide10/association-properties/#navigability) of the associations. You could change things as your domain model evolved.

In Mendix 10.21 you can choose to implement some associations as direct associations. This means that the ID of the **Child** object is stored as a foreign key column of the **Parent** object (for example the "many" side of the association) in the underlying database table, thus removing the need for an association table.

XPath and OQL queries work identically for both association tables and direct associations. You do not have to change anything or learn different flavors of these languages to work with them.

## Default Association Storage

In Mendix 10.20 and below associations are always implemented as association tables.

In Mendix 10.21 and above, the following defaults apply:

* **New projects** – one-to-many and one-to-one associations are implemented as direct associations
* **Upgraded projects** – for projects which are upgraded from an older version of Mendix, all new associations continue to be implemented as association tables

{{% alert color="info" %}}
In your app settings you can [change the default](/refguide10/app-settings/#miscellaneous) for all new associations. Existing associations will not be affected. Please note that some associations managed in the System module will be updated even if you haven't created new associations.
{{% /alert %}}

## Advantages of Direct Associations

Because they don't have association tables, using direct associations can bring the following advantages:

* In many cases, using direct associations can speed up data retrieval and modification
* They use less space in the database
* You can choose to implement direct associations for some of your associations, while leaving others as association tables

## Limitations of Direct Associations

You cannot replace association tables with direct associations for all types of association in your app. Direct associations have the following limitations: 

* You can only use direct associations for one-to-many (1-*, default owner) and one-to-one (1-1, owner both) associations – you cannot use it for many-many associations.
* Association storage only applies to associations stored in the local database, that is associations between persistable entities or between a persistable entity and a persistable external entity. Associations from view entities, non-persistable entities, or external entities are not stored in the local database, so they do not have an association storage option.

## Enabling Direct Associations

Enabling direct associations is simple, and has the following features:

* The choice is reversible – you can decide to revert to using association tables (but see things to think about [before switching to direct associations](#before))
* Direct associations are available in Mendix versions 10.21 and above
* You can [change the default](/refguide10/app-settings/#miscellaneous) for all new associations
* You can enable it for specific associations

For more information, see the [Association Storage](/refguide10/association-properties/#storage) section of *Association Properties*.

## Before Switching to Direct Associations{#before}

Before deciding to switch from an association table to a direct association, bear the following in mind:

* Do not use direct associations in modules which are designed to be imported into apps (for example, Marketplace modules) as this could cause unexpected migrations in an app the module is being imported into.
* Associations have to be rewritten to the database so migration can take a long time, especially where you have a large amount of data already stored in your database 
* Queries are not always faster, and might not be faster in your use case
* If you have written any custom SQL that accesses Mendix tables directly, this might break, but existing XPaths and OQL queries will not be affected
