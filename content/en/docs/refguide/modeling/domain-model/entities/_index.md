---
title: "Entities"
url: /refguide/entities/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

An entity usually represents a class of real-world objects, such as customers, invoices, CDs, etc. An instance of an entity is called an object.

For example, the object representing the CD 'Exodus' could be an instance of the entity 'CD'.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/example-entity.png" alt="Example of a CD entity" width="650px" class="no-border" >}} 

The properties or features of an entity are described using [attributes](/refguide/attributes/). An attribute represents a small piece of information about an entity, such as the name or birth date of a person.

For example, you have a collection of CDs like the one in the table below:

| Title | Artist |
| --- | --- |
| How to Dismantle an Atomic Bomb | U2 |
| Exodus | Bob Marley and The Wailers |

The rows in the table are CDs. The type of the two rows is *CD* and this is the entity name. A specific CD like *How to Dismantle an Atomic Bomb* from the band *U2* is called an object of the entity *CD*. Characteristics like the title and artist are called attributes.

## Types of Entities {#entity-types}

The entity type defines how the data is handled and there are three types:

* Persistable entity
    * When an entity is declared persistable, a database table is created for the entity. These type of entities are colored *blue* in the domain model.
* Non-persistable entity
    * Non-persistable entities are stored in the runtime memory and never get committed to the database. These type of entities are colored *orange* in the domain model.
* External entity
    * External entities represent the link to datasets that are made available through shared data sources registered in Mendix Catalog. These type of entities are colored *purple* in the domain model. 

{{< figure src="/attachments/refguide/modeling/domain-model/entities/type-of-entities.jpg" class="no-border" >}}

The structure of Persistable and Non-persistable entities are defined within your app. This page describes how to add and update Persistable and Non-persistable entities. For more information on persistable entities, see [Persistability](/refguide/persistability/).

The structure of an External entity is defined in the source system where the underlying data (objects) is stored. For more information on external entities and how to add them to your app, see [External Entities](/refguide/external-entities/).

## Properties {#properties}

An example of the entity properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/domain-model/entities/entity-properties.png"   width="300"  class="no-border" >}}

Entity properties consist of the following sections:

* [General](#entities-general-properties)
* [System members](#system-members)
* [Access rules](#access-rules)
* [Documentation](#documentation)

{{% alert color="info" %}}
For more information on how these properties relate to external entities, see the [Properties](/refguide/external-entities/#properties) section of *External Entities*.
{{% /alert %}}

### General Section {#entities-general-properties}

#### Name {#name}

The name property defines the name of the entity. This name is used to refer to the entity in forms, microflows, queries, constraints, etc.

The name has to be unique only within the domain model of a module. You can have two entities with the same name, provided they are in the domain models of different modules.

#### Export Level 

**Export level** allows you to define access level to this document on the consumer (customer) side when developing an add-on module or a solution.

| Value              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Hidden *(default)* | The document/element content is hidden from a consumer.      |
| Usable             | Consumers can see the entity in the domain model and use it in their app. |

{{% alert color="info" %}}
**Export level** is only available for add-on and solution modules. For more information on types of modules, see the [Module Types](/refguide/modules/#module-types) section in *Modules*. 

If the entity is set to **Hidden**, all attributes will be hidden automatically and cannot be set to **Usable**.
{{% /alert %}}

#### Generalization {#generalization}

An entity can be a more specialized version of a general entity. This means that the specialized entity has all the attributes, associations, events, and other properties of the more general entity. Using the generalization property you can specify which entity is the generalization of the entity. For example, the **Car** entity could have **Vehicle** as its generalization.

In object oriented programming (OOP) the generic term for generalization and specialization is called **inheritance**.

When an entity that has a specialization is retrieved (for example, in a data grid or microflow), specializations of that entity are included in the result. When a specialization is retrieved, its generalizations are not included in the result. Using the previous example, if **Vehicle** is retrieved, the resulting set will contain objects of types **Vehicle** and **Car**. If **Car** is retrieved, only objects of **Car** are included in the result set.

One important use of this feature is to derive functionality from the **System** module (for example, images from the **Image** entity and files from the **FileDocument** entity).

An example of generalization is a situation where you have entities, say a **Student** entity and a **Professor** entity, which both have some generic properties. In this case, they both have a name, telephone number, and email address and can be a member of one or more courses. Both entities are generalized in the **Member** entity. Conversely, this means that the **Member** entity is specialized in the **Student** and **Professor** entities.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/917900.png" class="no-border" >}}

For more information, and a discussion on the relative merits of using generalization or associations, see [Generalization vs 1-1 Associations](/refguide/generalization-and-association/).

#### Image {#image}

The image property can be used to associate an image with the entity. In the domain model this image is shown in the top-left corner of the entity. The image is also shown in other places where entities are mentioned, such as the entity selection pop-up window when selecting an entity for a data view.

#### Persistable

Define whether instances of this entity can be stored in the database. For more information, see [Persistability](/refguide/persistability/).

### System Members Properties{#system-members}

#### Store 'createdDate'

This property defines whether the entity contains the system attribute 'createdDate'. This is an attribute of type **Date and time** that stores the date and time when the object was created. The value of this attribute is automatically set by the server upon creating an object.

| Option | Description |
| --- | --- |
| True | Entity contains the system attribute 'createdDate'. |
| False *(default)* | Entity does not contain the system attribute 'createdDate'. |

{{% alert color="info" %}}
Data grids do not directly display this date.
{{% /alert %}}

#### Store 'changedDate'

This property defines whether the entity contains the system attribute 'changedDate'. This is an attribute of type **Date and time** that stores the most recent date and time when the object was changed.

| Option | Description |
| --- | --- |
| True | Entity contains the system attribute 'changedDate'. |
| False *(default)* | Entity does not contain the system attribute 'changedDate'. |

{{% alert color="info" %}}
Data grids do not directly display this date.
{{% /alert %}}

{{% alert color="info" %}}
The 'changedDate' property is updated when a value is set. Setting an attribute to the value it already has and committing the entity updates the 'changedDate' without changing the attribute value.
{{% /alert %}}

{{% alert color="warning" %}}
The `changedDate` value is not updated if you update the entity directly in Java using calls which resolve to use the [`com.mendix.systemwideinterfaces.core.IMendixObject.setValue​(IContext context, java.lang.String memberName, java.lang.Object value)`](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/systemwideinterfaces/core/IMendixObject.html#setValue(com.mendix.systemwideinterfaces.core.IContext,java.lang.String,java.lang.Object)) method (for example, `Entity.setValue(IContext, String)`). If you need `changedDate` to be updated when using Java, use the [`com.mendix.core.Core.change​(IContext context, IMendixObject object, java.util.Map<java.lang.String,​java.lang.String> changes)`](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/core/Core.html#change(com.mendix.systemwideinterfaces.core.IContext,com.mendix.systemwideinterfaces.core.IMendixObject,java.util.Map)) method.
{{% /alert %}}

#### Store 'owner' {#store-owner}

This property defines whether the entity has the system association 'owner'. This is an association to the system entity 'User' that (initially) stores a reference to the user that created the object. This association is automatically set by the server upon creating an object.

| Option | Description |
| --- | --- |
| True | Entity has the system association 'owner'. |
| False  *(default)* | Entity does not have the system association 'owner'. |

{{% alert color="info" %}}
Data grids do not directly display the associated System.User entity or its specializations.
{{% /alert %}}

#### Store 'changedBy' 

This property defines whether the entity has the system association 'changedBy'. This is an association to the system entity 'User' that stores a reference to the user that most recently changed the object.

| Option | Description |
| --- | --- |
| True | Entity has the system association 'changedBy'. |
| False *(default)*  | Entity does not have the system association 'changedBy'. |

{{% alert color="info" %}}
Data grids do not directly display the associated System.User entity or its specializations.
{{% /alert %}}

### Access Rules Section {#access-rules}

#### Access Rules

For more information on access rules, see [Access Rules](/refguide/access-rules/).

### Documentation Section {#documentation}

#### Documentation {#documentation-property}

This allows you to document the entity to help you or other team members use the entity within the app.

## Entity Dialog Box {#dialog-box}

You can also edit an entity by opening the entity properties dialog box.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/example-entity.png" alt="Example of a CD entity" class="no-border" >}}

In addition to the properties described above, there are also tabs which allow you to edit the following:

* [Attributes](/refguide/attributes/)
* [Associations](/refguide/associations/)
* [Validation Rules](/refguide/validation-rules/)
* [Event Handlers](/refguide/event-handlers/)
* [Indexes](/refguide/indexes/)
* [Access Rules](/refguide/access-rules/)
* [Documentation](#documentation-property)

See the detailed pages for each of these tabs for more information.
