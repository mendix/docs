---
title: "Associations"
url: /studio/domain-models-association-properties/
description: "Describes the association properties in Mendix Studio."
tags: ["studio", "domain model"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

An association describes a relation between entities. In the domain model, an association is represented by a line or an arrow between two entities.

In Mendix Studio, associations have the following properties:

* [Name](#name)
* [Multiplicity](#multiplicity)
* [Delete behavior](#delete-behavior)

    {{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-association-properties/association-properties.png" >}}

In relation to the module the associations can be of two types:

* Associations within one module
* [Cross module associations](#cross-module-associations)

## 2 Name {#name}

The name of the association is used to refer to it from forms, microflows, etc.

## 3 Multiplicity {#multiplicity}

Multiplicity  defines the number of possible referred objects. The cardinality (or number of referred objects) of an association is indicated by the number one (`1`) or a star (`*`) at either side of the association.

Multiplicity can be of the following types:

* One-to-one – one X object is associated with one Y object
* One-to-many – one X object is associated with multiple Y object
* Many-to-many – multiple X objects are associated with multiple Y objects

Multiplicity shows the owner and the direction of association if the association is of the one-to-many or many-to-many type. In the domain model it is displayed as an arrow pointing the direction. The owner is the entity the association starts from, so it is located at the start of the arrow. In one-to-one associations both entities are owners. 

{{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-association-properties/association-domainmodel.png" >}}

You can swap the direction of the multiplicity if its type is one-to-many or many-to-many. In this case you will change the owner of association.

{{% alert color="info" %}}
For more details on the reasoning underlying associations, ownership, and multiplicity, see the [Introduction](/refguide/associations/#intro) section of *Associations* in the *Studio Pro Guide*.
{{% /alert %}}

## 4 Delete Behavior {#delete-behavior}

Delete behavior defines what should happen to the associated object when an object is deleted. The following options can be configured for each end of the association. 

| Value                                                        | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Keep {name of entity} object(s)                              | When an object is deleted, the associated object(s) are not deleted. |
| Delete {name of entity} object(s) as well                    | When an object is deleted, the associated object(s) are also deleted. |
| Delete {name of entity} object only if it is not associated with {name of other entity} object(s) | An object can only be deleted if it is not associated with any other object(s). <br />You can also specify an error message for your end-users when they try to delete an object that is associated with other entity's objects. For example: "You cannot delete this location, because a course is associated with it." |

For examples of delete behavior configuring, see [Delete Behavior](/howto/data-models/create-a-basic-data-layer/#delete-behavior) section in *How to Create a Basic Data Layer* in the *Mendix Studio Pro How-tos*.


## 5 Cross-Module Associations {#cross-module-associations}

Cross-module association makes an association between entities of different modules.

{{% alert color="info" %}}

You cannot create separate modules in Studio. But if you have different modules in Studio Pro, you can see the list of different domain models (except the System module and Marketplace modules) and make cross-module associations in Studio. 

{{% /alert %}}

In Studio, cross-module association is indicated with the following:

*  An icon next to the entity that has such association: 

   {{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-association-properties/association-icon.png" >}}

*  A pop-up window, which displays when you click the icon:

   {{< figure src="/attachments/studio/work-with-data/domain-models/domain-models-association-properties/association-pop-up.png" >}}

Cross module associations have the following properties:

| Property                      | Description                                                  |
| ----------------------------- | ------------------------------------------------------------ |
| Type                          | Defines the direction of the association and can be of two types: **Outgoing** and **Incoming** |
| Name                          | Defines the name of the association                          |
| [Multiplicity](#multiplicity) | Defines the type of multiplicity                             |
| Target                        | Defines the module (name before the dot) and second entity of the association (goes after the dot). |

## 6 Read More

* [Domain Model](/studio/domain-models/)
* [Pages](/studio/page-editor/)
