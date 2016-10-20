---
title: "Entities"
parent: "Domain+Model"
space: "Reference Guide 5"
---


An entity represents a class of real-world objects, such as customers, invoices, work items, etc. An instance of an entity is called an object. For example, the object representing the person 'Bob Marley' could be an instance of the entity 'Person'.

The properties or features of an entity are described using [attributes](Attributes). An attribute represents a small piece of information about an entity, such as the name or birth date of a person.

The domain model editor uses the following symbols for visualization on entities:

<table><thead><tr><th class="confluenceTh">Symbol</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd"><img class="confluence-embedded-image" src="attachments/819203/917594.png" data-image-src="https://world.mendix.com/download/attachments/819203/eventHandlerSymbol.png?version=1&amp;modificationDate=1259076620000&amp;api=v2"></td><td class="confluenceTd">This entity has one or more event handlers.</td></tr></tbody></table><div class="alert alert-info">{% markdown %}

Let us say you have a collection of CDs like the one in the table below.

<table><thead><tr><th class="confluenceTh">Title</th><th class="confluenceTh">Artist</th></tr></thead><tbody><tr><td class="confluenceTd">How to Dismantle an Atomic Bomb</td><td class="confluenceTd">U2</td></tr><tr><td class="confluenceTd">Exodus</td><td class="confluenceTd">Bob Marley &amp; The Wailers</td></tr></tbody></table>

The rows in the table are CDs. The type of the two rows is 'CD' and this is the entity name. A specific CD like 'How to Dismantle an Atomic Bomb' of the band U2 is called an object of the entity 'CD'. Characteristics like the title and artist are called attributes.

{% endmarkdown %}</div>

## Components

*   [Attributes](Attributes)

*   [Validation Rules](Validation+Rules)

*   [Event Handlers](Event+Handlers)

*   [Indexes](Indexes)

*   [Access Rules](Access+Rules)

## Common Properties

### Name

The name property defines the name of the entity. This name is used to refer to the entity from forms, microflows, queries, constraints, etc.

### Image

The image property can be used to associate the entity with an image. In the domain model this image is visualized in the right-top corner of the entity representation. The image is also visible in entity selection windows and in the Connector. For instance, when selecting an entity for a data view.

### Persistable

Define whether instances of this entity can be stored in the database. See [persistability](Persistability) for more information about this property. Non-persistable entities are painted orange instead of blue to indicate the difference.

<div class="alert alert-info">{% markdown %}

![](attachments/4194533/4325380.png)

{% endmarkdown %}</div>

## Inheritance Properties

### Generalization

An entity can be a more specialized version of a general entity. This means that the specialized entity has all the attributes, associations, events etcetera of the more general entity. Using the generalization property you can specify which entity is the generalization of the entity. For example, the Car entity has Vehicle as its generalization.

The generalization specifies the entity of which this entity derives her properties (attributes, assciations, events, etc.). This is used when entities have common attributes and can be generalized using a super entity. Using this feature it is possible to derive functionality from the System module like images from the entity 'Image' and files from the entity 'FileDocument'. In object oriented programming (OOP) the generic term for generalization and specialization is called inheritance.

<div class="alert alert-info">{% markdown %}

This property can be used in a situation where one has an entity 'Student' and an entity 'Professor' which have some generic properties. They both have a name, telephone number and email address and can be a member of one or more courses. Both entities are generalized in the entity 'Member'. Contrary this means that the entity 'Member' can be specialized in the entity 'Student' and the entity 'Professor'.
![](attachments/819203/917900.png)

{% endmarkdown %}</div>

## System Members Properties

### Store 'createdDate'

This property defines whether the entity contains the system attribute 'createdDate'. This is an attribute of type DateTime that stores the date and time when the object was created. The value of this attribute is automatically set by the server upon creating an object.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">True</td><td class="confluenceTd">Entity contains the system attribute 'createdDate'.</td></tr><tr><td class="confluenceTd">False</td><td class="confluenceTd">Entity does not contain the system attribute 'createdDate'.</td></tr></tbody></table>

_Default value:_ True

### Store 'changedDate'

This property defines whether the entity contains the system attribute 'changedDate'. This is an attribute of type DateTime that stores the most recent date and time when the object was changed.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">True</td><td class="confluenceTd">Entity contains the system attribute 'changedDate'.</td></tr><tr><td class="confluenceTd">False</td><td class="confluenceTd">Entity does not contain the system attribute 'changedDate'.</td></tr></tbody></table>

_Default value:_ True

### Store 'owner'

This property defines whether the entity has the system association 'owner'. This is an association to the system entity 'User' that (initially) stores a reference to the user that created the object. This association is automatically set by the server upon creating an object.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">True</td><td class="confluenceTd">Entity has the system association 'owner'.</td></tr><tr><td class="confluenceTd">False</td><td class="confluenceTd">Entity does not have the system association 'owner'.</td></tr></tbody></table>

_Default value:_ True

### Store 'changedBy'

This property defines whether the entity has the system association 'changedBy'. This is an association to the system entity 'User' that stores a reference to the user that most recently changed the object.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">True</td><td class="confluenceTd">Entity has the system association 'changedBy'.</td></tr><tr><td class="confluenceTd">False</td><td class="confluenceTd">Entity does not have the system association 'changedBy'.</td></tr></tbody></table>

_Default value:_ True
