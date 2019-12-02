---
title: "Persistability"
parent: "entities"
menu_order: 10
tags: ["domain model", "entity", "persistability", "persistable", "non-persistable"]
---

## 1 Introduction

The **Persistable** property of an entity in the domain model defines whether an object can be stored in the database. This page describes what it means for an entity to be persistable.

## 2 Persistable & Non-Persistable Properties

When an entity is declared persistable, a database table is created for the entity. Committing an instance of such an entity results in a row being inserted into the table. Attribute and association information stored in this instance is saved in the database as well.

Performing a rollback on persistable autocommitted objects or objects with the state "NEW" deletes the row corresponding with this object from the database table for the associated entity. See [Object Activities](object-activities) for more information about autocommitted objects. Otherwise, a rollback only reverts changes in memory since the last commit.

Non-persistable entities cannot be stored in the database and hence have no associated database table. Committing non-persistable entities only stores the current attribute values and association values in memory, which allows for a rollback to revert to those values.
