---
title: "Consume Registered Assets"
url: /data-hub/data-hub-catalog/consume/
category: "Data Hub Catalog"
weight: 20
description: "Using shared data sources and datasets through Medix Data Hub."
tags: ["data hub", "data hub catalog", "consume", "external entities", "asset", "entities", data hub pane", "studio pro"]
---

## 1 Introduction

The Data Hub Catalog is a catalog of OData services exposing datasets that you can use in your apps. In Mendix Studio Pro, these exposed datasets are added as *external entities* through the [Data Hub pane](/refguide/data-hub-pane/). The integrated Data Hub Catalog [search](/data-hub/data-hub-catalog/search/) functionality in Studio Pro is available to find suitable datasets to use in your apps. 

This document provides general information and guidelines on consumed datasets in apps. For details on using shared datasets in Studio Pro, see [External Entities](/refguide/external-entities/) in the *Studio Pro Guide*.

For details on the security of the data that the shared datasets connect to, and for defining access to the datasets for specified user roles, see [Data Accessibility and Security](/data-hub/data-hub-catalog/security/).

## 2 Using Registered Assets in Your App {#consuming-services-entities}

You can use the Catalog or the [Data Hub pane](/refguide/data-hub-pane/) in Studio Pro to find registered data sources and use the [Copy Data Source URI](/data-hub/data-hub-catalog/search/#service-details) button obtain the OData service URI which can be used in other enterprise applications.

The following sections summarize important points to consider when using OData services and registered datasets in your apps in Studio Pro.

### 2.1 Services

When a new version of the OData service for an external entity is registered in the Data Hub Catalog, the consumed OData service can be updated in the consuming app. For more details on updating a consumed service see the [Updating or Switching a Consumed OData Service](/refguide/consumed-odata-service/#updating) section of *Consumed OData Service*.

{{% alert color="info" %}}
In Studio Pro, new versions of a service are indicated and users can choose to **Update** the service, or **Switch** to another version of the service deployed to another endpoint.
{{% /alert %}}

It is good practice for publishers of a service to deprecate a service version if it contains breaking changes. 

### 2.2 Consumed External Entities

When you use an external entity from a published OData service through the **Data Hub** pane in Studio Pro, you are consuming the dataset from the service  deployed to a specific environment. 

When security is enabled for your app, you can define access rules for external entities just as you would for [persistable](/refguide/persistability/#persistable) and [non-persistable](/refguide/persistability/#non-persistable) entities. You can define access rules based on user roles (for more details, see [Security and Controlling Access to Information](/data-hub/data-hub-catalog/security/)).

You can associate external entities with both [persistable and non-persistable](/refguide/persistability/) local entities. However, the external entity cannot be the owner of an association. This means that the association has to be from a local entity to the external entity in the domain model, and the value for the association [owner](/refguide/associations/#ownership) must be set to **Default**.

Mendix entities that are [specializations](/refguide/generalization-and-association/) in the originating app will be published and consumed as discrete entities that include the inherited attributes and associations. When the generalized entity is also exposed in the same service as the specialized entities, the inheritance relationship will not be present in the metadata contract or when both are consumed. 

{{% alert color="warning" %}}
Associations that are inherited from a generalization will be exposed and shown when the specialization is consumed. However, the same association of the generalized entity is not supported for the specialization in the same domain model. The same association cannot be exposed and consumed for two different external entities in the same domain model.
{{% /alert %}}

### 2.3 Datasets

Data for external entities is in the database of the app that publishes the OData service, not in the consuming app's database. The dataset that is associated with the consumed entity is maintained in the publishing app.

Access to the data is through the published REST OData service, with reading, querying, and updating or inserting of the data by the consuming app.

## 3 Operations Affected by Using External Entities

The following operations are affected by using external entities in a consuming app:

* Aggregations – you can count a list of external entities, but you cannot show other aggregations such as sum, average, minimum, and maximum.
	* [OData version 3.0](https://www.odata.org/documentation/odata-version-3-0/) does not support these operations; the only exception is that you can use the [aggregate list](/refguide/aggregate-list/) microflow activity, which for all aggregations except **Count** will retrieve everything and perform the aggregation in memory
*  [XPath](/refguide/xpath/) – you can use XPath to filter external entities; all XPath constructs are supported, except the following:
	* Three conversions from date/time: `day-of-year-from-dateTime`, `weekday-from-dateTime`, and ` week-from-dateTime`
	* Aggregations: `avg()`, `max()`, `min()`, and `sum()`
	* Using an association between a local and an external entity
	* Comparing attributes to other attributes (you can only compare an attribute to a literal value or a variable)
	* [Exist expressions](/refguide/xpath-expressions/#exist) (filtering on whether an associated object exists)
	* Filtering in the middle of a path (such as `[Module.Car_Person/Module.Car[Brand='BMW']/Module.Car_Plate/Module.Plate/Number='123']`, where` [Brand='BMW']` appears in the middle of the path)
	* Expressions with `reverse()` (as mentioned in [Querying Over Self-References](/refguide/query-over/))
* [OQL](/refguide/oql/) – you cannot define OQL queries on external entities (for example, in datasets)

## 4 Registered Datasets in OData Services from Non-Mendix Systems

For registered OData datasets from non-Mendix apps, the restrictions described below apply.

### 4.1 Keys

All datasets must have a key. The key can have one or more properties with the following conditions:

* The properties cannot be nullable (so they must have `isNullable="false"` specified)
* Only the following types are allowed: `Byte`, `SByte`, `Int16`, `Int32`, `Int64`,     `Boolean`, `Decimal`, `Single`, `Double`, and `String`
* If the property type is `String`, a `MaxLength` must be specified

The key attributes are not available as attributes of the external entity.

### 4.2 Supported Metadata Features

When importing metadata in a consumed OData service in Studio Pro, all unsupported constructs are ignored. The following constructs are supported:

* Only entities that are published in the service feed can be imported. Entities that only appear in the metadata file and not in the service feed cannot be imported as external entities.
*  Attribute types have to be primitive (not complex, collections, or enumerations). The types of the attributes in your app are based on the types of the attributes in the OData metadata:

	| OData Type | Mendix Type |
	| --- | --- |
	| Binary | Binary (refer also to the [FileDocuments](#filedocs) section below) |
	| Boolean | Boolean \*1 |
	| Byte, SByte, Int16, Int32 | Integer |
	| DateTime, DateTimeOffset, Time | DateTime |
	| Decimal, Double, Single | Decimal \*2 |
	| Int64 | Long |
	| String, Guid | String |
	| (Other) | (Ignored) |

The following conditions apply:

* When the OData endpoints contain operations, these are not imported in the consumed OData service; you can use a [Call REST service](/refguide/call-rest-action/) activity to call these operations
* In Mendix, Booleans cannot be null; when the service returns a null, the value is false
* Attributes marked as `FC_KeepInContent=false` are not supported
* Decimal values outside the range of a Mendix decimal are currently not supported; when the service returns a value outside of the range, there is an error

### 4.3 FileDocuments {#filedocs}

External entities with binary attributes are not imported as FileDocuments. That means that their use is limited.
