---
title: "Implement Mendix Best Practices for App Performance"
category: "General Info"
menu_order: 9
tags: ["best practice", "development", "develop", "reusable", "prefix", "performance"]
#Academy are SMEs for verification, they discuss and link to this doc in training
---

## Introduction

{{% alert type="info" %}}

This document collects Mendix application performance best practices in the form of performance issue description and suggests resolution steps.

{{% /alert %}}

## Remove Unused Calculated Attributes {#p1b}

For an object that has calculated attributes, each time that object is changed or retrieved from storage, it’s calculated attributes are computed by calling a microflow. If the logic behind calculated attributes retrieves other objects or executes Integration activities, it will cause an extra load (and delay) on the system when the outcome of the logic doesn't matter at that moment. Creating calculated attributes always affect performance, so decide if this is worth it for what you are using the calculated attribute for

It is safe to assume the logic behind a calculated attribute is always executed when the object is used. It is executed whenever there's no retrieval schema present for a retrieve activity (which is the case with data grids). The logic behind calculated attributes is executed at:

- Retrieve and change object activities in microflows
- Within UI widgets (e.g. data views, custom widgets)
- When an object is passed from UI as a parameter to a microflow (e.g. microflow button).

Because retrieve activities also trigger the logic of calculated attributes, it could lead to an execution chain of database actions and microflow calls (objects retrieving each other through calculated attributes).

Unused calculated attributes serve no meaningful purpose in the project and can safely be removed to avoid redundant microflow calls.

### Suggested resolution steps

1. Delete the unused calculated attribute.
2. OR Start using the calculated attribute.

### More about

1. Calculated attributes : https://docs.mendix.com/refguide/attributes

## Avoid committing objects inside a loop {#m1}

In a microflow, Mendix objects can be persisted to the database with three actions: Create Object Activity, Change Object Activity, and Commit Activity. For objects that are created or changed in a loop, it is not advisable to commit them immediately in the loop, as this comes with an unnecessary performance overhead. Instead, better performance can be achieved by performing a batch commit of several created/changed objects with Commit Activity outside of the loop to reduce database, application, and network overhead.

Committing lists of objects has these benefits compared to individual commits:

- The prepared statement of creating or modifying records in the database is explicitly reused by the JDBC driver and has the following benefits:
        - The execution plan is cached
        - The driver cares for a minimum of network overhead
- For each database action that changes data the following actions are taken and add overhead:
    - A savepoint is created before the action and released afterwards
    - Autocomitted objects are retrieved from the database
    - Autocomitted objects are stored to the database (if relevant)

### Suggested resolution steps

1. Within a loop, change Commit option of a Create/Change Object activity from No and make sure created/changed objects are available in a list
2. Commit the list after the loop when the iteration has finished or when number of objects in the list reaches 1000 to avoid excessive memory usage.

### More about

1. Change Object Activity properties https://docs.mendix.com/refguide/change-object
2. Commit Activity properties https://docs.mendix.com/refguide/committing-objects
