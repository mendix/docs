---
title: "Entities"
url: /refguide7/entities/
tags: ["domain model", "entity", "entities", "attribute", "validation rule", "even handler", "access rule"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

An entity represents a class of real-world objects, such as customers, invoices, work items, etc. An instance of an entity is called an object. For example, the object representing the person 'Bob Marley' could be an instance of the entity 'Person'.

The properties or features of an entity are described using [attributes](/refguide7/attributes/). An attribute represents a small piece of information about an entity, such as the name or birth date of a person.

The domain model editor uses the following symbols for visualization on entities:

| Symbol | Description |
| --- | --- |
| {{< figure src="/attachments/refguide7/desktop-modeler/domain-model/entities/917594.png" >}} | This entity has one or more event handlers. |

{{% alert color="info" %}}

Let us say you have a collection of CDs like the one in the table below.

| Title | Artist |
| --- | --- |
| How to Dismantle an Atomic Bomb | U2 |
| Exodus | Bob Marley & The Wailers |

The rows in the table are CDs. The type of the two rows is 'CD' and this is the entity name. A specific CD like 'How to Dismantle an Atomic Bomb' of the band U2 is called an object of the entity 'CD'. Characteristics like the title and artist are called attributes.

{{% /alert %}}

## Components

*   [Attributes](/refguide7/attributes/)
*   [Associations](/refguide7/associations/)
*   [Validation Rules](/refguide7/validation-rules/)
*   [Event Handlers](/refguide7/event-handlers/)
*   [Indexes](/refguide7/indexes/)
*   [Access Rules](/refguide7/access-rules/)

## General Properties {#entities-general-properties}

### Name

The name property defines the name of the entity. This name is used to refer to the entity from forms, microflows, queries, constraints, etc.

### Generalization

An entity can be a more specialized version of a general entity. This means that the specialized entity has all the attributes, associations, events etcetera of the more general entity. Using the generalization property you can specify which entity is the generalization of the entity. For example, the Car entity has Vehicle as its generalization.

The generalization specifies the entity of which this entity derives her properties (attributes, associations, events, etc.). This is used when entities have common attributes and can be generalized using a super entity. Using this feature it is possible to derive functionality from the System module like images from the entity 'Image' and files from the entity 'FileDocument'. In object oriented programming (OOP) the generic term for generalization and specialization is called inheritance.

{{% alert color="info" %}}

This property can be used in a situation where one has an entity 'Student' and an entity 'Professor' which have some generic properties. They both have a name, telephone number and email address and can be a member of one or more courses. Both entities are generalized in the entity 'Member'. Contrary this means that the entity 'Member' can be specialized in the entity 'Student' and the entity 'Professor'.
{{< figure src="/attachments/refguide7/desktop-modeler/domain-model/entities/917900.png" >}}

{{% /alert %}}

### Image

The image property can be used to associate the entity with an image. In the domain model this image is visualized in the right-top corner of the entity representation. The image is also visible in entity selection windows and in the Connector. For instance, when selecting an entity for a data view.

### Persistable

Define whether instances of this entity can be stored in the database. See [persistability](/refguide7/persistability/) for more information about this property. Non-persistable entities are painted orange instead of blue to indicate the difference.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/domain-model/entities/4325380.png" >}}

{{% /alert %}}

## System Members Properties

### Store 'createdDate'

This property defines whether the entity contains the system attribute 'createdDate'. This is an attribute of type DateTime that stores the date and time when the object was created. The value of this attribute is automatically set by the server upon creating an object.

| Option | Description |
| --- | --- |
| True | Entity contains the system attribute 'createdDate'. |
| False | Entity does not contain the system attribute 'createdDate'. |

_Default value:_ False

{{% alert color="info" %}}
We do not support displaying this system member of the System.User entity or its specializations in a data grid directly.
{{% /alert %}}

### Store 'changedDate'

This property defines whether the entity contains the system attribute 'changedDate'. This is an attribute of type DateTime that stores the most recent date and time when the object was changed.

| Option | Description |
| --- | --- |
| True | Entity contains the system attribute 'changedDate'. |
| False | Entity does not contain the system attribute 'changedDate'. |

_Default value:_ False

{{% alert color="info" %}}
We do not support displaying this system member of the System.User entity or its specializations in a data grid directly.
{{% /alert %}}

### Store 'owner'

This property defines whether the entity has the system association 'owner'. This is an association to the system entity 'User' that (initially) stores a reference to the user that created the object. This association is automatically set by the server upon creating an object.

| Option | Description |
| --- | --- |
| True | Entity has the system association 'owner'. |
| False | Entity does not have the system association 'owner'. |

_Default value:_ False

### Store 'changedBy'

This property defines whether the entity has the system association 'changedBy'. This is an association to the system entity 'User' that stores a reference to the user that most recently changed the object.

| Option | Description |
| --- | --- |
| True | Entity has the system association 'changedBy'. |
| False | Entity does not have the system association 'changedBy'. |

_Default value:_ False
