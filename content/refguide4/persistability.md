---
title: "Persistability"
parent: "entities"
---
The "Persistable" property of an entity in the domain model defines whether an object can be stored in the database. This page describes in more details what it means for an entity to be persistable and what the related term "transient" means.

## Persistable and non-persistable

When an entity is declared persistable a database table is created for this entity.
Committing an instance of such an entity results in a row being inserted into this table. Attribute and association information stored in this instance is saved in the database as well.
Performing a rollback on persistable auto-committed objects or objects with state "NEW" deletes the row corresponding with this object from the database table for the associated entity. Otherwise a rollback only reverts changes in memory since the last commit.

Non-persistable entities cannot be stored in the database and hence have no associated database table. Committing non-persistable entities only stores the current attribute values and association values in memory, this allows a rollback to revert to those values.

## Transient

All objects associated with domain model entities are inherently transient when they are created in Mendix. In this context transient means they only exist in memory.
When an objects is created the database will not be accessed, with the exception for retrieving autonumber information when attributes of this type are present (autonumber attributes are only allowed for persistable entities). This means a transient object is eligible for garbage collection when not in use anymore.
