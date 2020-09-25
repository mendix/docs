---
title: "Consumed OData Service Requirements"
parent: "consumed-odata-services"
menu-order: 20
description: "Requirements on OData services consumed in Mendix."
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% todo %}}[edit further and add x-refs, and notify https://gitlab.rnd.mendix.com/integration/integration.wiki/-/blob/master/refguide/consumed-odata-services.md that this version is now the latest. Compare to information published in the DH guide for repetitions and add x-refs. Can this be integrated into intro doc?]{{% /todo %}}

## 1 Introduction

This document describes the requirements for an OData service which is going to be consumed. These are not further verified at runtime and expected to hold. If they are not met, an error may occur.

{{% todo %}}[**AD: wondering if "requirements expected to hold" is clear enough here?**]]{{% /todo %}}

## 2 Requirements for a Consumed OData Service

The requirements for a consumed OData service used in a Mendix app project are the following: 

* The OData service must be either an OData v3 service returning Atom XML, or an OData v4 service returning either Atom XML or JSON
* It should support queries on the OData feed, including `$filter`, `$orderby`, `$top`, `$skip`, `$expand`, `$count` (or `$inlinecount`)

## 3 Limitations on the Service

This section describes the features of a consumed OData service that are supported in Mendix app projects. These features are checked before an external entity is used in the domain model.

{{% todo %}}[Original text referred to an OData entity, but I have changed this to external entity. Iterate if this should refer specifically to "Odata" entities as opposed to other types that DH will eventually support]{{% /todo %}}

### 3.1 Entities

A service may indicate that certain features are not supported by using vocabulary annotations. The following vocabulary annotations are recognized for entity sets:

* **Countable** – marking an entity set as `Countable="false"` prevents the user from adding the entity to the project
* **Filterable** – marking an entity set as `Filterable="false"` sets all proprties as non-filterable; marking properties as non-filterable in the `NonFilterableProperties` annotation prevents the user from adding these as attributes in the project
* **Sortable** – marking an entity set as `Sortable="false"` sets all proprties as non-sortable; marking properties as non-sortable in the `NonSortableProperties` annotation prevents the user from adding these as attributes in the project

An entity can only be used when it is accessible through an entity set.

Furthermore, an entity can only be used if it is uniquely identifiable with a key. The key can consist of one or more properties, as long as the following conditions are met:

* Those properties cannot be nullable (so they must have `isNullable="false"` specified)
* Only the following types are allowed: `Byte`, `SByte`, `Int16`, `Int32`, `Int64`, `Boolean`, `Decimal`, `Single`, `Double`, and `String`
* If the type is `String`, a `MaxLength` must be specified

### 3.2 Attributes

Attributes marked as `FC_KeepInContent=false` cannot be used.

Attribute types have to be primitive (not complex, collections or enumerations). The types of the attributes in your app will be based on the types of the attributes in the OData metadata, as given in the following table:

| OData Type | Mendix Type |
| --- | --- |
| Binary                         | Binary (but see 2.4) |
| Boolean                        | Boolean <sup><small>[1]</small></sup> |
| Byte, SByte, Int16, Int32      | Integer |
| DateTime, DateTimeOffset, Time | Date/time |
| Decimal, Double, Single        | Decimal <sup><small>[2]</small></sup> |
| Int64                          | Long |
| String, Guid                   | String |
| (Other)                        | (Ignored) |

{{% alert type="warning" %}}
When the OData endpoint contains operations, these are not imported in the consumed OData service. You can use a [Call REST service](call-rest-action) activity to call these operations.
{{% /alert %}}

{{% todo %}}[These seem to be footnotes to the table - how are table footnotes handled??]{{% /todo %}}

{{% todo %}}[**AD: the footnotes will work, you can see an example here: https://docs.mendix.com/refguide/attributes#2-2-1-type**]{{% /todo %}}

<sup><small>[1]</small></sup>: In Mendix, Booleans cannot be null. When the service returns null, the value will be false in Mendix.

<sup><small>[2]</small></sup>: Decimal values outside of the range of a Mendix decimal are currently not supported. When the service returns a value outside of the range, there will be an error.

### 3.3 Generalizations

{{% todo %}}[Investigate what this means precisely ]{{% /todo %}}

The consumed OData service does not support importing generalizations, which means that when you import entities that are each other's generalization, they will be imported independently without a generalization.

When you are consuming a Mendix OData endpoint, do not import both a generalization and its specification; that is not supported.

### 3.4 Binary Attributes

The binary data format is supported in the form of *media entities*. When a media entity is dragged into the domain model, a corresponding external entity is created. The entity will have a `contents` attribute with the binary data.

Currently, the binary data can be accessed by Java actions only.

{{% todo %}}[Following to be finalized depending on final licensing decisions and also has to incorporate, trial and freemium users - also this section seems to be describing back-end limitations not user facing limitations. Only the first paragraph - edited is applicable  ]{{% /todo %}}

## 4 License Limitations

Mendix Data Hub is a separately licensed product. The type of license that you have determines the total number of objects that can be requested from a consumed OData service *per day*.

There are three main types of OData licenses:

* **Unlimited** – there is no limitation on the number of OData objects consumed from the service
* **Limited** – a specific limitation has been set for your Data Hub license and this is specified by the `limit` constraint
* **Default** – the default Data Hub license is set to 1000 OData objects per day

The number of consumed objects per day is reset at midnight in the timezone of the Mendix Runtime scheduler (which can be defined in the app [Project Settings](project-settings#scheduled)).

{{% todo %}}[**AD: would be good to cross-reference a doc where licensing is discussed. Also, include how to contact Mendix in order to secure a license?**]{{% /todo %}}