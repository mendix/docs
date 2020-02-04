---
title: "Persistability"
parent: "entities"
menu_order: 20
tags: ["domain model", "entity", "persistability", "persistable", "non-persistable"]
---

## 1 Introduction

The **Persistable** property of an entity in the domain model defines whether an object can be committed to the database.

## 2 Persistable Entities

When an entity is declared persistable, a database table is created for the entity.

Committing an object of this entity type results in a row being inserted into the table. The attribute and association values for the object are saved in the database as well.

### 2.1 Autocommitted Objects

Usually, a rollback reverts changes in memory since the last commit.

However, performing a rollback on persistable autocommitted objects or objects with the state "NEW" deletes the row corresponding with this object from the database table for the associated entity. See [Object Activities](object-activities) for more information about autocommitted objects.

## 3 Non-Persistable Entities

Non-persistable entities are stored in the runtime memory and never get committed to the database. Therefore, they have no table in the database.

Committing non-persistable entities records the current attribute values and association values in memory, allowing a rollback to revert to these values.
