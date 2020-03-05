---
title: "Association Properties"
parent: "associations"
menu_order: 10
tags: ["domain model", "association", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

There are two ways to edit the properties of an [association](associations). This page describes the properties you can edit in the properties pane of the association in the domain model, or from opening the association properties dialog directly from the association or the association tab in the entity properties.

You can also edit an association directly within the association tab in the entity properties. For more information see [Association Tab Properties](association-member-properties).

## 2 Association Properties

An example of the association properties is represented in the image below:

![Association Properties](attachments/associations/association-properties.png)

Associations have the following properties:

* [Name](#name) 
* [Documentation](#documentation)
* [Multiplicity](#multiplicity)
* [Navigability](#navigability)
* [Delete Behavior](#delete-behavior)

### 2.1 Name {#name}

The name of the association is used to refer to it. For example, in forms or microflows.

### 2.2 Documentation {#documentation}

You can write notes and documentation in the **Documentation** property.

### 2.3 Multiplicity {#multiplicity}

Multiplicity specifies the number of objects which can be referred to. It is indicated by the number one (`1`) or a star (`*`) at either side of the association.

Multiplicity can be of the following types:

| Multiplicity | Meaning | Equivalent of |
| --- | --- | --- |
| One-to-one | One X object is associated with one Y object | An association of type **Reference** with owner set to **Both** |
| One-to-many *(default)*| One X object is associated with multiple Y object | An association of type **Reference** with owner set to **Default** |
| Many-to-many | Multiple X objects are associated with multiple Y objects |  An association of type **Reference set** – in this case ownership is set by the **Navigability** property |

For more information about association types, see the [Type](association-member-properties#type) section in *Association Tab Properties*, and for information on ownership, see the [Owner](association-member-properties#owner) section in *Association Tab Properties*.

### 2.4 Navigability {#navigability}

Navigability changes the owner of many-to-many associations. Navigability has the following options:

| Navigability | Meaning | Equivalent of |
| --- | --- | --- |
| X objects refer to Y objects *(default)* | The owner of the association is X | An association of type **Reference set** with owner set to **Default** |
| X and Y objects refer to each other | Both entities are owners | An association of type **Reference set** with owner set to **Both** |

This corresponds to the **Owner** property for **Reference sets**. See the [Owner](association-member-properties#owner) section of *Association Tab Properties* for a more detailed discussion of the impact of changing navigability.

Despite it's name, navigability is usually only important when adding or changing associations. Making one object owner of an association does not prevent you reading the association from the non-owner end.

### 2.5 Delete Behavior {#delete-behavior}

Delete behavior defines what should happen to the associated object when an object is deleted. The following options can be configured for each end of the association.

| Value | Description |
| --- | --- |
| Delete {name of entity} object but keep {name of other entity} object(s) *(default)* | When an object is deleted, the associated object(s) are not deleted. |
| Delete {name of entity} object and {name of other entity} object(s) as well<sup><small>[1]</small></sup> | When an object is deleted, the associated object(s) are also deleted. |
| Delete {name of entity} object only if it is not associated with {name of other entity}<sup><small>[2]</small></sup> object(s) | An object can only be deleted if it is not associated with any other object(s). |

<sup><small>[1]</small></sup>This delete behavior is used if you want to delete any associated **Profile** when a **Customer** is deleted:

![](attachments/associations/association-delete-both.png)

<sup><small>[2]</small></sup>This delete behavior is used if you want to be able to delete a **Customer** only if it is not associated with any **Order**. In this case you will be asked to enter an **Error message if 'Customer' object cannot be deleted** to inform the end user that this customer cannot be deleted and perhaps suggest a next course of action:

![](attachments/associations/association-prevent-delete.png)

## 3 Read More

* [Associations](associations)
