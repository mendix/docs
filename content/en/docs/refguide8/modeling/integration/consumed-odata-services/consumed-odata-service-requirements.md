---
title: "Consumed OData Service Requirements"
url: /refguide8/consumed-odata-service-requirements/
weight: 20
description: "Requirements on OData services consumed in Mendix."
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/consumed-odata-service-requirements.pdf).
{{% /alert %}}

## 1 Introduction

This document describes the requirements for an OData service that is going to be consumed. These requirements are not further verified at runtime and expected to hold. If these requirements are not met, errors may result.

## 2 Requirements for a Consumed OData Service

The requirements for a consumed OData service used in a Mendix app are the following: 

* The OData service must be either an OData v3 service returning Atom XML, or an OData v4 service returning either Atom XML or JSON
* It should support queries on the OData feed, including `$filter`, `$orderby`, `$top`, `$skip`, `$expand`, and `$count` (or `$inlinecount`)

## 3 Requirements on the Service Entities and Attributes

This section describes the features of a consumed OData service that are supported in Mendix app. These features are checked before an external entity is used in the domain model.

### 3.1 Entities

Vocabulary annotations can be used in a service to indicate features that are not supported. The following vocabulary annotations are recognized for entity sets:

* **Countable** – marking an entity set as `Countable="false"` prevents the user from adding the entity to the project
* **Filterable** – marking an entity set as `Filterable="false"` sets all properties as non-filterable
* **Sortable** – marking an entity set as `Sortable="false"` sets all properties as non-sortable
* Marking an entity set as `Filterable="false"` and `Sortable="false"` sets all properties as non-filterable and non-sortable; marking properties with the `NonFilterableProperties` annotation or the `NonSortableProperties` annotation sets specific attributes as non-filterable or non-sortable

An entity can only be used when it is accessible through an entity set.

Furthermore, an entity can only be used if it is uniquely identifiable with a key. The key can consist of one or more properties, as long as the following conditions are met:

* The properties cannot be nullable (so they must have `isNullable="false"` specified)
* Only the following types are allowed: `Byte`, `SByte`, `Int16`, `Int32`, `Int64`, `Boolean`, `Decimal`, `Single`, `Double`, and `String`
* If the type is `String`, a `MaxLength` must be specified

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
When the OData endpoint contains operations, these are not imported in the consumed OData service. You can use a [Call REST service](/refguide8/call-rest-action/) activity to call these operations.
{{% /alert %}}

<small><sup>[1]</sup> In Mendix, Booleans cannot be null. If the service returns null, the value will be false in Mendix.<br /><sup>[2]</sup> Decimal values outside of the range of a [Mendix decimal](/refguide8/attributes/#type) are currently not supported. If the service returns a value outside of the range, there will be an error.</small>

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

## 4 Data Hub License Limitations {#license-limitations}

Mendix Data Hub is a separately licensed product. The type of license that you have determines the total number of data objects that can be requested from a consumed OData service *per day* for *each* runtime instance of an app.

There are two types of Data Hub licenses currently available:

* **Data Hub** – this is the *default* license with no limitation on the number of OData objects that can be consumed.

* **Freemium** – this enables you to retrieve a total of 1000 OData objects per day for each runtime instance. After that limit is exceeded, an error will occur when users try to retrieve more data.
  The number of consumed objects per day is reset at midnight in the timezone of the Mendix Runtime scheduler (which can be defined in the app [Project Settings](/refguide8/project-settings/#scheduled)).

  {{% alert color="info" %}}The Freemium Data Hub license is issued on an invitation-only basis. {{% /alert %}}
  {{% alert color="info" %}}For Mendix 8.12.3 and later, apps running without a [Mendix license](/developerportal/deploy/licensing-apps-outside-mxcloud/) (and also when running from the Studios) do not have this limitation. This also means that you can run your app from the Studios without the Data Hub license limitations. {{% /alert %}}

Contact your [Mendix Admin](/developerportal/control-center/#company) or Data Hub Admin to find out what type of Data Hub license your organization has.


### 4.1 Local development

Local development is subject to the same license as the freemium model. You have the ability to retrieve a total of 1000 OData objects, after which an error will occur. It is possible to reset this by restarting the App.
