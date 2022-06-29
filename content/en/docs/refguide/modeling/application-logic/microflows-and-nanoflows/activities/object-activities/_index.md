---
title: "Object Activities"
url: /refguide/object-activities/
weight: 10
tags: ["studio pro", "microflow", "object"]
#To update screenshots of these microflows in Studio Pro, use the Microflow Screenshots app.
---

## 1 Introduction

When working with the Mendix Platform, objects of entities are always being manipulated. This happens implicitly within [data containers](/refguide/data-widgets/) on a page, or explicitly using activities in microflows and nanoflows.

The activities in this section of the microflow and nanoflow toolbox generally work on single objects, however **commit object(s)**, **delete object(s)**, and **retrieve** also work on lists of objects. For other activities which work with lists, see [List Activities](/refguide/list-activities/).

The activities described in this document are in the **Object Activities** section of the **Toolbox**.

The following are the object activities you can use in your microflow or nanoflow:

* [Cast object](/refguide/cast-object/) *(only in microflows)* – changes the type of object from a generalized object type to the specialized object type
* [Change object](/refguide/change-object/) – changes the members of an object
* [Commit objects(s)](/refguide/committing-objects/) – either stores objects of persistable entities in the database or stores objects of non-persistable entities in memory to allow them to be rolled back
* [Create object](/refguide/create-object/) – creates an object
* [Delete object(s)](/refguide/deleting-objects/) *(only in microflows)* – activity deletes one or more objects
* [Retrieve](/refguide/retrieve/) – gets one or more objects of an entity
* [Rollback object](/refguide/rollback-object/) – undoes uncommitted changes made to an object

## 2 Read More

* [Activities](/refguide/activities/)