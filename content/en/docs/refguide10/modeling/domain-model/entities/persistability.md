---
title: "Persistability"
url: /refguide/persistability/
weight: 20
---

## Introduction

The **Persistable** property of an entity in the domain model defines whether an object can be committed to the database.

Persistable entities are colored blue in the domain model. Non-persistable entities are colored orange. The **Customer** entity in the image below is persistable, while **ProductQueryResults** is non-persistable.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/persistability/persistable-vs-non-persistable.png" alt="Picture of a persistable and a non-persistable entity" class="no-border" >}}

## Persistable Entities {#persistable}

When an entity is declared persistable, a database table is created for the entity.

Committing an object of this entity type results in a row being inserted into the table. The attribute and association values for the object are saved in the database as well.

### Autocommitted Objects

Usually, a rollback reverts changes in memory since the last commit.

However, performing a rollback on persistable autocommitted objects or objects with the state "NEW" deletes the row corresponding with this object from the database table for the associated entity. See [Object Activities](/refguide/object-activities/) for more information about autocommitted objects.

## Non-Persistable Entities {#non-persistable}

Non-persistable entities are stored in the runtime memory and never get committed to the database. Therefore, they have no table in the database and the only way to retrieve them is [over associations](/refguide/retrieve/#association).

Committing non-persistable entities records the current attribute values and association values in memory, allowing a rollback to revert to these values.

### Creating Non-Persistable Entities

Non-persistable entities can be created either on the Mendix client or the runtime server, depending on their properties.

A non-persistable entity is created on the client side, without sending a request to the runtime, if it:

* does not have an event handler attached
* does not contain any calculated attributes
* has no read-only attributes (as they cannot be written to client-side)

This allows for faster object creation and reduced server load.

Otherwise, a request is sent to the runtime server to create the object, ensuring that the event handler is executed and calculated attributes are properly initialized.
