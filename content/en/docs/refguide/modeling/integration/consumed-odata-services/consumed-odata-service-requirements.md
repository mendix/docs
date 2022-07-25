---
title: "Consumed OData Service Requirements"
url: /refguide/consumed-odata-service-requirements/
weight: 20
description: "Requirements on OData services consumed in Mendix."
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This document describes the requirements for an OData service that is going to be consumed. These requirements are not further verified at runtime and expected to hold. If these requirements are not met, errors may result.

## 2 Requirements for a Consumed OData Service

The requirements for a consumed OData service used in a Mendix app are the following:

* The OData service must be either an OData v3 service returning Atom XML, or an OData v4 service returning either Atom XML or JSON
* It should support queries on the OData feed, including `$filter`, `$orderby`, `$top`, `$skip`, `$expand`, and `$count` (or `$inlinecount`)

## 3 Requirements on the Service Entities and Attributes

This section describes the features of a consumed OData service that are supported in Mendix apps. These features are checked before an external entity is used in the domain model.

### 3.1 Entities

Vocabulary annotations can be used in a service to indicate features that are not supported. The following vocabulary annotations are recognized for entity sets:

* **Countable** – an entity set marked as `Countable="false"` prevents the user from adding the entity to the app
* **Filterable** – an entity set marked as `Filterable="false"` sets all properties as non-filterable
* **Sortable** – an entity set marked as `Sortable="false"` sets all properties as non-sortable
* Marking an entity set as `Filterable="false"` and `Sortable="false"` sets all properties as non-filterable and non-sortable; marking properties with the `NonFilterableProperties` annotation or the `NonSortableProperties` annotation sets specific attributes as non-filterable or non-sortable
* **Updatable** - an entity marked as `Updatable="true"` with `DeltaUpdateSupported="true"` and `UpdateMethod="2"` will make the entity updatable in the domain model. That means, for instance, that you can model pages that change attributes values and associated objects, and that you can use the entity in the [Change object action](/refguide/change-object/). For updatable entities, the annotations `NonUpdatableProperties` and `NonUpdatableNavigationProperties` can be used to list the (navigation)properties that cannot be updated.
* **Insertable** – an entity marked as `Insertable="true"` will make the entity creatable in the domain model. That means, for example, that you can model pages that create new objects, and that you can use the entity in the [Create Object](/refguide/create-object/) activity. For insertable entities, the annotations `NonInsertableProperties` and `NonInsertableNavigationProperties` list the (navigation) properties that cannot be passed to the service in the [Send External Object](/refguide/send-external-object/) activity.
* **Updatable** – an entity marked as `Updatable="true"` with `DeltaUpdateSupported="true"` and `UpdateMethod="2"` will make the entity updatable in the domain model. That means, for example, that you can model pages that change attributes values and associated objects, and that you can use the entity in the [Change Object](/refguide/change-object/) activity. For updatable entities, the annotations `NonUpdatableProperties` and `NonUpdatableNavigationProperties` list the (navigation)properties that cannot be updated.
* **Deletable** - an entity marked as `Deletable="true"` can be used in the [Delete External Object](/refguide/delete-external-object/) activity.

{{% alert type="info" %}}
The **Insertable** and **Deletable** functionalities were introduced in Studio Pro [9.12.0](/releasenotes/studio-pro/9.12/).
{{% /alert %}}

An entity can only be used when it is accessible through an entity set.

Furthermore, an entity can only be used if it is uniquely identifiable with a key. The key can consist of one or more properties, as long as the following conditions are met:

* The properties cannot be nullable (so they must have `isNullable="false"` specified).
* Only the following types are allowed: `Byte`, `SByte`, `Int16`, `Int32`, `Int64`, `Boolean`, `Decimal`, `Single`, `Double`, and `String`.
* If the type of a key property is `String`, it must have a limited  (maximum) length specified. This is because not all databases support indexes on strings of unlimited length. It is sufficient if  a `MaxLength` is specified in the contract. However, if a `MaxLength` is not specified in the contract, and you know that the string is limited in length, you can still use the entity by specifying the maximum length of the attribute in the the domain model.

{{% alert color="info" %}}
This feature of using entities with keys that do not have a maximum length specified in the contract applies to version 9.3.0 and above. In previous versions of Studio Pro, you must change the contract to ensure that `MaxLength` is specified.
{{% /alert %}}

{{% alert color="info" %}}
The list above for supported key fields does not include `Date` or `DateTime` data types.
{{% /alert %}}

### 3.2 Attributes

{{% alert color="warning" %}}
Attributes marked as `FC_KeepInContent=false` cannot be used.
{{% /alert %}}

Attribute types have to be primitive (not complex, collections, or enumerations). The types of the attributes in your app will be based on the types of the attributes in the OData metadata, as given in the following table:

| OData Type | Mendix Type |
| --- | --- |
| Binary                         | Binary (but see 3.4) |
| Boolean                        | Boolean <sup><small>[1]</small></sup> |
| Byte, SByte, Int16, Int32      | Integer |
| DateTime, DateTimeOffset, Time | Date/time |
| Decimal, Double, Single        | Decimal <sup><small>[2]</small></sup> |
| Int64                          | Long |
| String, Guid                   | String |
| (Other)                        | (Ignored) |

{{% alert color="warning" %}}
When the OData endpoint contains operations, these are not imported in the consumed OData service. You can use a [Call REST service](/refguide/call-rest-action/) activity to call these operations.
{{% /alert %}}

<small><sup>[1]</sup> In Mendix, Booleans cannot be null. If the service returns null, the value will be false in Mendix.<br /><sup>[2]</sup> Decimal values outside of the range of a [Mendix decimal](/refguide/attributes/#type) are currently not supported. If the service returns a value outside of the range, there will be an error.</small>

### 3.3 Generalizations

The consumed OData service does not support importing generalizations and specializations. This means that the Published OData service contract from the originating app will show specializations as discrete entities which will include the attributes of the generalization along with the attributes of the specialized entity.

This means that when you are consuming a Mendix OData endpoint, it is not necessary to consume both a generalization and its specialization. The specialization will now be an entity with all the attributes and associations of the generalization.

Associations to the generalizations with other exposed entities in the published OData service will be included for the now discrete "specialized" entities.

{{% alert color="warning" %}}
When a generalization and a specialized entity are exposed in the same service. Only the association for the generalization will be visible when both entities are consumed. The now discrete specialization will have the inherited association. A possible work-around for this is to publish a service with the specializations without the generalization. Alternatively, the association for the generalization should not be published, allowing for the inherited association in the specialization to be preserved.
{{% /alert %}}

### 3.4 Binary Attributes

The binary data format is supported in the form of *media entities*. When a media entity is dragged into the domain model, a corresponding external entity is created. The entity will have a `contents` attribute with the binary data.

Currently, the binary data can only be accessed by Java actions.

### 3.5 Associations

An OData v3 association can only be used if it has two ends.

An OData v4 navigation property can only be used as an association if it has a partner.

When you publish a self-referencing association, you can only publish one side of it. This means that you cannot use the association when you consume the resource as an external entity.

## 4 Data Hub License

### 4.1 Limitations {#license-limitations}

Mendix Data Hub is a separately licensed product. 

Without a license, an app can retrieve a total of 1000 OData objects per day for each runtime instance. After that limit is exceeded, an error occurs when users try to retrieve more data. The number of consumed objects per day is reset at midnight in the time zone of the Mendix Runtime scheduler (which can be defined in the [Scheduled Event Time Zone](/refguide/app-settings/#scheduled) of the **App Settings**).

With a Data Hub license, apps are not limited in retrieving OData objects.

{{% alert color="info" %}}
Apps running in development environments (and also when running from the Studios) do not have this limitation. This means that you can run your app from the Studios without Data Hub license limitations.
{{% /alert %}}

Contact your [Mendix Admin](/developerportal/control-center/#company) to find out what type of Data Hub license your organization has.

### 4.1 Limitation Errors

For each call, the app instance logs how many objects it has retrieved and how many are left within the license limitation. Once the limit of a 1000 objects has been reached, two different statements are logged.

* On the `info` level, the following statement is logged when the limit is reached: `"Exceeded the daily limit. Retrieved $delta objects, which would increase the counter to $newCount (of max $max per day)."`
* On the `error` level, the following statement is logged when the limit is reached: `"The limit of $max objects has been reached."`

{{% alert color="warning" %}}
It is up to the application to communicate to its end-users that the daily limit has been reached. If this is not done, the end-user gets a message that an error occurred.
{{% /alert %}}