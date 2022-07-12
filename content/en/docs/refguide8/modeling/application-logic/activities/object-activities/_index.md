---
title: "Object Activities"
url: /refguide8/object-activities/
weight: 10
tags: ["studio pro", "microflow", "object"]
#To update screenshots of these microflows in Studio Pro, use the Microflow Screenshots app.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/object-activities.pdf).
{{% /alert %}}

## 1 Introduction

When working with the Mendix Platform, objects of entities are always being manipulated. This happens implicitly within [data widgets](/refguide8/data-widgets/) on a page, or explicitly using activities in microflows and nanoflows.

The activities in this section of the microflow and nanoflow toolbox generally work on single objects, however **commit object(s)**, **delete object(s)**, and **retrieve** also work on lists of objects. For other activities which work with lists, see [List Activities](/refguide8/list-activities/).

The activities described in this document are in the **Object Activities** section of the **Toolbox**:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/object-activities/object-activities-toolbox.png" alt="Object activities toolbox"   width="40%"  >}}

The following are the object activities you can use in your microflow or nanoflow:

* [Cast object](/refguide8/cast-object/) *(only in microflows)* – changes the type of object from a generalized object type to the specialized object type

* [Change object](/refguide8/change-object/) – changes the members of an object

* [Commit objects(s)](/refguide8/committing-objects/) – either stores objects of persistable entities in the database or stores objects of non-persistable entities in memory to allow them to be rolled back

* [Create object](/refguide8/create-object/) – creates an object

* [Delete object(s)](/refguide8/deleting-objects/) *(only in microflows)* – activity deletes one or more objects

* [Retrieve](/refguide8/retrieve/) – gets one or more objects of an entity

* [Rollback object](/refguide8/rollback-object/) – undoes uncommitted changes made to an object

## 2 Read More

* [Activities](/refguide8/activities/)