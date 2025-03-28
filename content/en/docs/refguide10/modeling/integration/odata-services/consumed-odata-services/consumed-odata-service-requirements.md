---
title: "Consumed OData Service Requirements"
url: /refguide/consumed-odata-service-requirements/
weight: 20
description: "Requirements on OData services consumed in Mendix."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
The OData implementation in Mendix does not support all features of the OData specification, nor do we have any plans to provide a full implementation of the entire specification. The supported capabilities of OData are focused on providing a simple and productive way to share data and logic between Mendix apps. Although OData [external entities](/refguide/external-entities/) may also work for third-party OData APIs, their use is not tested nor guaranteed.

When using third-party APIs, it is advised you to make a proof of concept to ensure the functionality provided in Mendix matches the requirements of your third-party APIs. If external entities do not work with your OData APIs, you can use the Mendix [REST](/refguide/consumed-rest-services/) functionality instead.
{{% /alert %}}

## Introduction

This document describes the requirements for an OData service that is going to be consumed. These requirements are not further verified at runtime and are expected to hold. If these requirements are not met, errors may result.

## Requirements for a Consumed OData Service

The requirements for a consumed OData service used in a Mendix app are the following:

* The OData service must be either an OData v3 service returning Atom XML, or an OData v4 service returning either Atom XML or JSON
* It should support queries on the OData feed, including:
    * `$filter`
    * `$orderby`
    * `$top`
    * `$skip`
    * `$expand`
    * `$count` (or `$inlinecount`)

## Requirements on the Service Entities and Attributes

This section describes the features of a consumed OData service that are supported in Mendix apps. These features are checked before an external entity is used in the domain model.

### Entities

Vocabulary annotations can be used in a service to indicate features that are not supported. The following vocabulary annotations are recognized for entity sets:

* **Countable** – an entity set marked as `Countable="false"` prevents the user from adding the entity to the app.
* **Filterable** – an entity set marked as `Filterable="false"` sets all properties as non-filterable.
* **Sortable** – an entity set marked as `Sortable="false"` sets all properties as non-sortable.
* Marking an entity set as `Filterable="false"` and `Sortable="false"` sets all properties as non-filterable and non-sortable. Marking properties with the `NonFilterableProperties` annotation or the `NonSortableProperties` annotation sets specific attributes as non-filterable or non-sortable.
* **Insertable** – an entity marked as `Insertable="true"` will make the entity creatable in the domain model. That means, for example, that you can model pages that create new objects, and that you can use the entity in the [Create Object](/refguide/create-object/) activity. For insertable entities, the annotations `NonInsertableProperties` and `NonInsertableNavigationProperties` list the (navigation) properties that cannot be passed to the service in the [Send External Object](/refguide/send-external-object/) activity.
* **Updatable** – an entity marked as `Updatable="true"` with `DeltaUpdateSupported="true"` and `UpdateMethod="2"` will make the entity updatable in the domain model. That means, for example, that you can model pages that change attributes values and associated objects, and that you can use the entity in the [Change Object](/refguide/change-object/) activity. For updatable entities, the annotations `NonUpdatableProperties` and `NonUpdatableNavigationProperties` list the (navigation) properties that cannot be updated.
* **Deletable** - an entity marked as `Deletable="true"` can be used in the [Delete External Object](/refguide/delete-external-object/) activity.

An entity can only be used as an external entity when it is accessible through an entity set, and when it is uniquely identifiable with a key. 
The key can consist of one or more properties, as long as the following conditions are met:

* The properties cannot be nullable (so they must have `isNullable="false"` specified).
* Only the following types are allowed: 
    * `Byte`
    * `SByte`
    * `Int16`
    * `Int32`
    * `Int64`
    * `Boolean`
    * `Decimal`
    * `Single`
    * `Double`
    * `String`
* If the type of a key property is `String`, it must have a limited  (maximum) length specified. This is because not all databases support indexes on strings of unlimited length. It is sufficient if a `MaxLength` is specified in the contract. However, if a `MaxLength` is not specified and you know the string is limited in length, you can still use the entity by specifying the maximum length of the attribute in the domain model.

{{% alert color="info" %}}
The list above for supported key fields does not include `Date` or `DateTime` data types.
{{% /alert %}}

Entities that are not accessible through an entity set can be used as a [non-persistable entity](/refguide/consumed-odata-services/#external-non-persistable-entities).

### Attributes

#### Supported Attribute Types {#supported-types}

{{% alert color="warning" %}}
Attributes marked as `FC_KeepInContent=false` cannot be used.
{{% /alert %}}

The most commonly used attribute types can be used in your app. The types of the attributes are be based on the types of the attributes in the OData metadata, as given in the following table:

| OData Type                     | Mendix Type                           |
| ---                            | ---                                   |
| Binary                         | Binary (see [Binary Attributes](#binary-attributes) below) |
| Boolean                        | Boolean ¹ |
| Byte, SByte, Int16, Int32      | Integer |
| DateTime, DateTimeOffset, Time | Date/time |
| Decimal, Double, Single        | Decimal ² |
| Enumeration                    | Enumeration |
| Int64                          | Long |
| String, Guid                   | String |
| (Other)                        | (Ignored) |

¹ In Studio Pro, Booleans cannot be null. If the service returns null, the app will use the value `false`.

² Decimal values outside of the range of a [Mendix Decimal](/refguide/attributes/#type) are currently not supported. If the service returns a value outside of the range, there will be an error.

#### Attributes of Complex Types

{{% alert color="info" %}}
Support for consuming attributes of complex types was introduced in Mendix version 10.6.
{{% /alert %}}

Complex types are not supported by the domain model. However, Studio Pro allows you to read external entities that contain attributes of a complex type by importing the properties of the complex type as attributes of the containing entity.

By default, the attribute names consist of the name of the complex attribute and the name of the property that is part of the complex type, separated by an underscore. For example, if your external entity `Employee` contains an attribute `HomeAddress` of type `Lato.Address` with properties `Street`, `PostcalCode`, and `City`, Studio Pro allows you to add these as attributes of external entity `Employee` with default names `HomeAddress_Street`, `HomeAddress_PostalCode`, and `HomeAddress_City`, respectively. Note that only the properties of the types described in [Supported Attribute Types](#supported-types) are supported.

{{% alert color="warning" %}}
External entities that contain attributes of complex types can only be read or deleted. They cannot be created, updated, or used in external actions.
{{% /alert %}}

### Generalizations

The consumed OData service does not support importing generalizations and specializations. This means that the Published OData service contract from the originating app will show specializations as discrete entities which will include the attributes of the generalization along with the attributes of the specialized entity.

This means that when you are consuming a Mendix OData endpoint, it is not necessary to consume both a generalization and its specialization. The specialization will now be an entity with all the attributes and associations of the generalization.

Associations to the generalizations with other published entities in the published OData service will be included for the now discrete "specialized" entities.

{{% alert color="warning" %}}
When a generalization and a specialized entity are published in the same service. Only the association for the generalization will be visible when both entities are consumed. The now discrete specialization will have the inherited association. A possible work-around for this is to publish a service with the specializations without the generalization. Alternatively, the association for the generalization should not be published, allowing for the inherited association in the specialization to be preserved.
{{% /alert %}}

### Binary Attributes {#binary-attributes}

The binary data format is supported in the form of *media entities*. When a media entity is dragged into the domain model, a corresponding external entity is created. The entity will have a `contents` attribute with the binary data.

Currently, the binary data can only be accessed by Java actions.

### Associations

An OData v3 association can only be used if it has two ends.

An OData v4 navigation property can only be used as an association if it has a partner.

When you publish a self-referencing association, you can only publish one side of it. This means that you cannot use the association when you consume it as an external entity.

### Enumerations

In Studio Pro 10.11 and earlier, enumeration types that have one or more members with a name that is not a valid [enumeration value name](/refguide/enumerations/#name) are not supported.

{{% alert color="info" %}}
As of Mendix 10.12, the original enumeration member value is stored separately from the enumeration member name and caption in the app model. This enables Studio Pro to consume enumerations that have special characters or reserved keywords as enumeration values. By default, the caption will be equal to the remote value; the name will be equal to the remote value, with any unsupported characters replaced by underscores. 
{{% /alert %}}

## Requirements on Actions {#actions}

The [Call External Action](/refguide/call-external-action/) activity calls actions. It cannot call

* Bound actions
* Actions that take an unsupported type as parameter
* Actions that return a value of an unsupported type

Supported types, and their corresponding type in Mendix, are:

| OData Type                        | Mendix Type                           |
| ---                               | ---                                   |
| Boolean                           | Boolean ¹ |
| Byte, SByte, Int16, Int32, Int64  | Integer/Long |
| Collection of Entities            | List of objects ³ |
| DateTime, DateTimeOffset, Time    | Date and time |
| Decimal, Double, Single           | Decimal ² |
| Entity                            | Object ³ |
| Enumeration                       | Enumeration |
| String, Guid                      | String |

Note that the only supported Collection type is a Collection of Entities, and that binary parameters or return values are not supported for consumed OData actions.

¹ In Mendix, Booleans cannot be null. If the action returns null, the value will be false in Mendix.

² Decimal values outside of the range of a Mendix [Decimal](/refguide/attributes/#type) are currently not supported. If the action returns a value outside of the range, the action will return an error.

³ Objects that contain attributes of complex types are not currently supported in actions.

{{% alert color="warning" %}}
When the OData endpoint contains functions, these are not imported in the consumed OData service. You can use a [Call REST service](/refguide/call-rest-action/) activity to call these functions.
{{% /alert %}}
