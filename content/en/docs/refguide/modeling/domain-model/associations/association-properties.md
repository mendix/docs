---
title: "Association Properties"
url: /refguide/association-properties/
weight: 10
tags: ["domain model", "association", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

There are two ways to edit the properties of an [association](/refguide/associations/). This page describes the properties you can edit in the properties pane of the association in the domain model, or from opening the association properties dialog directly from the association or the association tab in the entity properties.

You can also edit an association directly within the association tab in the entity properties. For more information see [Association Tab Properties](/refguide/association-member-properties/).

{{% alert color="info" %}}
Attributes properties for associated external entities are defined in the originating app and the only local changes that can be applied to these entities is a local name and description. For further information, see the [Attributes](/refguide/external-entities/#attributes) section of *External Entities*.
{{% /alert %}}

## 2 Association Properties

An example of the association properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-properties/association-properties.png" alt="Association Properties" >}}

Associations have the following properties:

* [Name](#name) 
* [Documentation](#documentation)
* [Multiplicity](#multiplicity)
* [Navigability](#navigability)
* [Delete Behavior](#delete-behavior)

### 2.1 Name {#name}

The name used to refer to the association. For example, in forms or microflows.

### 2.2 Export Level 

{{% alert color="info" %}}

This property is only available for add-on and solution modules. For more information on types of modules, see the [Module Types](/refguide/modules/#module-types) section in *Modules*. 

{{% /alert %}}

**Export level** allows you to define access level to this document on the consumer (customer) side when developing an add-on module or a solution. 

| Value              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Hidden *(default)* | The document/element content is hidden from a consumer.      |
| Usable             | Consumers can see the association in the domain model and use it in their app. |

### 2.3 Documentation {#documentation}

You can write notes and documentation in the **Documentation** property.

### 2.4 Multiplicity {#multiplicity}

Multiplicity can be of the following types:

| Multiplicity | Meaning | Equivalent of |
| --- | --- | --- |
| One-to-one | One X object is associated with one Y object | An association of type **Reference** with owner set to **Both** |
| One-to-many *(default)*| One X object is associated with multiple Y object | An association of type **Reference** with owner set to **Default** |
| Many-to-many | Multiple X objects are associated with multiple Y objects |  An association of type **Reference set** – in this case ownership is set by the **Navigability** property |

For more information about association types, see the [Type](/refguide/association-member-properties/#type) section in *Association Tab Properties*, and for information on ownership, see the [Owner](/refguide/association-member-properties/#owner) section in *Association Tab Properties*.

### 2.5 Navigability {#navigability}

| Navigability | Meaning | Equivalent of |
| --- | --- | --- |
| X objects refer to Y objects *(default)* | The owner of the association is X | An association of type **Reference set** with owner set to **Default** |
| X and Y objects refer to each other | Both entities are owners | An association of type **Reference set** with owner set to **Both** |

This corresponds to the **Owner** property for **Reference sets**. See the [Owner](/refguide/association-member-properties/#owner) section of *Association Tab Properties* for a more detailed discussion of the impact of changing navigability.

Despite it's name, navigability is usually only important when adding or changing associations. Making one object owner of an association does not prevent you reading the association from the non-owner end.

### 2.6 Delete Behavior {#delete-behavior}

| Value | Description |
| --- | --- |
| Delete {name of entity} object but keep {name of other entity} object(s) *(default)* | When an object is deleted, the associated object(s) are not deleted. |
| Delete {name of entity} object and {name of other entity} object(s) as well<sup><small>[1]</small></sup> | When an object is deleted, the associated object(s) are also deleted. |
| Delete {name of entity} object only if it is not associated with {name of other entity}<sup><small>[2]</small></sup> object(s) | An object can only be deleted if it is not associated with any other object(s). |

<sup><small>[1]</small></sup> This delete behavior is used if you want to delete any associated **Profile** when a **Customer** is deleted:

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-properties/association-delete-both.png" >}}

<sup><small>[2]</small></sup> This delete behavior is used if you want to be able to delete a **Customer** only if it is not associated with any **Order**. In this case you will be asked to enter an **Error message if 'Customer' object cannot be deleted** to inform the end user that this customer cannot be deleted and perhaps suggest a next course of action:

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-properties/association-prevent-delete.png" >}}

## 3 Read More

* [Associations](/refguide/associations/)
