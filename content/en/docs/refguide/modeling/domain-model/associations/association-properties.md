---
title: "Association Properties"
url: /refguide/association-properties/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

There are two ways to edit the properties of an [association](/refguide/associations/). This page describes the properties you can edit in the properties pane of the association in the domain model, or from opening the association properties dialog directly from the association or the association tab in the entity properties.

You can also edit an association directly within the association tab in the entity properties. For more information see [Association Tab Properties](/refguide/association-member-properties/).

{{% alert color="info" %}}
Attributes properties for associated external entities are defined in the originating app and the only local changes that can be applied to these entities is a local name and description. For further information, see the [Attributes](/refguide/external-entities/#attributes) section of *External Entities*.
{{% /alert %}}

## Association Properties

An example of the association properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-properties/association-properties.png" alt="Association Properties" class="no-border" >}}

Associations have the following properties:

* [Name](#name) 
* [Documentation](#documentation)
* [Multiplicity](#multiplicity)
* [Navigability](#navigability)
* [On Delete Behavior](#delete-behavior)

### Name {#name}

The name used to refer to the association. For example, in forms or microflows.

### Export Level 

{{% alert color="info" %}}

This property is only available for add-on and solution modules. For more information on types of modules, see the [Module Types](/refguide/modules/#module-types) section in *Modules*. 

{{% /alert %}}

**Export level** allows you to define access level to this document on the consumer (customer) side when developing an add-on module or a solution. 

| Value              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Hidden *(default)* | The document/element content is hidden from a consumer.      |
| Usable             | Consumers can see the association in the domain model and use it in their app. |

### Documentation {#documentation}

You can write notes and documentation in the **Documentation** property.

### Multiplicity {#multiplicity}

Multiplicity can be of the following types:

| Multiplicity | Meaning | Equivalent of |
| --- | --- | --- |
| One-to-one | One X object is associated with one Y object | An association of type **Reference** with owner set to **Both** |
| One-to-many *(default)*| One X object is associated with multiple Y object | An association of type **Reference** with owner set to **Default** |
| Many-to-many | Multiple X objects are associated with multiple Y objects |  An association of type **Reference set** – in this case ownership is set by the **Navigability** property |

For more information about association types, see the [Type](/refguide/association-member-properties/#type) section in *Association Tab Properties*, and for information on ownership, see the [Owner](/refguide/association-member-properties/#owner) section in *Association Tab Properties*.

### Navigability {#navigability}

| Navigability | Meaning | Equivalent of |
| --- | --- | --- |
| X objects refer to Y objects *(default)* | The owner of the association is X | An association of type **Reference set** with owner set to **Default** |
| X and Y objects refer to each other | Both entities are owners | An association of type **Reference set** with owner set to **Both** |

This corresponds to the **Owner** property for **Reference sets**. See the [Owner](/refguide/association-member-properties/#owner) section of *Association Tab Properties* for a more detailed discussion of the impact of changing navigability.

Despite its name, navigability is usually only important when adding or changing associations. Making one object owner of an association does not prevent you reading the association from the non-owner end.

#### One-Way Navigable Associations {#one-way-navigable}

One-way navigable associations are associations that allow navigation to associated entities only in a single direction: from [parent to child](/refguide/association-member-properties/#parent-child). These associations are typically introduced by integration using [external entities](/refguide/external-entities/#associations). The major implications of one-way navigability are related to XPath use cases such as constraints and queries.

You can retrieve data from all other domain model associations in both directions.

One-way navigable associations are represented by a dashed arrow in Domain model editor. An icon shows the direction of its navigability.

### On Delete Behavior {#delete-behavior}

When you delete an object, there are three ways to treat associated objects:

* Keep associated object(s) *(default)*
* Delete associated object(s) as well
* Delete the object only if there are no associated object(s)

These options are described in more detail below.

#### On Delete of ‘{Name of Entity}’ Object Keep ‘{Name of Associated Entity}’ Object(s) *(default)*

When an object is deleted, the associated object( or objects) are not deleted. This is the default.

#### On Delete of ‘{Name of Entity}’ Object Delete ‘{Name of Associated Entity}’ Object(s) as Well

When an object is deleted, the associated object (or objects) are also deleted.

This delete behavior is used, for example, if you want to delete any associated **Profile** when a **Customer** is deleted:

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-properties/association-delete-both.png" class="no-border" >}}

{{% alert color="info" %}}
This option is not available for associations that involve an external entity.
{{% /alert %}}

#### On Delete of ‘{Name of Entity}’ Object Delete ‘{Name of Entity}’ Object Only If It Is Not Associated with ‘{Name of Associated Entity}’ Object(s)

An object can only be deleted if it is not associated with any other object (or objects).

This delete behavior is used, for example, if you want to be able to delete a **Customer** only if it is not associated with any **Order**. In this case you will be asked to enter an **Error message if 'Customer' object cannot be deleted** to inform the end user that this customer cannot be deleted and perhaps suggest a next course of action:

{{< figure src="/attachments/refguide/modeling/domain-model/associations/association-properties/association-prevent-delete.png" class="no-border" >}}

{{% alert color="info" %}}
This option is not available for an external entity that is the [child](/refguide/association-member-properties/#parent-child) of an association to a local entity.
{{% /alert %}}

## Read More

* [Associations](/refguide/associations/)
