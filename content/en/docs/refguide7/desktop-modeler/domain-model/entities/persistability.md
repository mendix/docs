---
title: "Persistability"
url: /refguide7/persistability/
weight: 10
tags: ["domain model", "entity", "persistability", "persistable", "non-persistable", "transient"]
---

The "persistable" property of an entity in the domain model defines whether an object can be stored in the database. This page describes what it means for an entity to be persistable and what the related term "transient" means.

## 1 Persistable and Non-Persistable Properties

When an entity is declared persistable, a database table is created for the entity. Committing an instance of such an entity results in a row being inserted into the table. Attribute and association information stored in this instance is saved in the database as well.

Performing a rollback on persistable auto-committed objects or objects with the state "NEW" deletes the row corresponding with this object from the database table for the associated entity. Otherwise, a rollback only reverts changes in memory since the last commit.

Non-persistable entities cannot be stored in the database and hence have no associated database table. Committing non-persistable entities only stores the current attribute values and association values in memory, which allows for a rollback to revert to those values.

## 2 Transient Property

All objects associated with domain model entities are inherently transient when they are created in Mendix. In this context transient means they only exist in memory.

When an object is created, the database will not be accessed. The exception is when retrieving autonumber information when attributes of this type are present (autonumber attributes are only allowed for persistable entities). This means a transient object is eligible for garbage collection when not in use anymore.
