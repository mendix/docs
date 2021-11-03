---
title: "Performance Best Practices"
description: "Describes Mendix best practices on optimizing an app performance."
parent: "mx-assist-performance-bot"
tags: ["studio pro", "performance", "performance bot", "mx assist", "mendix assist"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchors <mxp001-mxp008> below are all mapped, so they should not be removed or changed.
---

## 1 Introduction

This document outlines performance issues and Mendix best practices for optimizing an app performance. 

## 2 Calculated Attributes Best Practices {#mxp001} 

<a name="mxp002"></a>When an object has calculated attributes, each time this object is changed or retrieved from the storage, its calculated attributes are computed by calling a microflow. If the logic behind calculated attributes retrieves other objects or executes Integration activities, it will result in an extra load (and delay) while the outcome of the logic is not used. Creating calculated attributes always affects performance, so you should evaluate whether it is necessary to use them. For more information on attributes, see [Attributes](attributes).

In most cases, the logic behind a calculated attribute is always executed when the object is used. It is executed whenever there is no retrieval schema for a Retrieve activity (which is the case with data grids). The logic behind calculated attributes is executed in the following elements:

- Retrieve and change object activities in microflows
- In UI widgets (for example, data views, custom widgets)
- When an object is passed from the UI as a parameter to a microflow (for example, a button triggering a microflow).

There are two different performance issues with calculated attributes that you can easily fix:

1. [When you use calculated attributes on a page](#calculated-attribute-on-page)
2. [When there are unused calculated attributes](#unused-calculated-attributes)

### 2.1 Avoid Using Calculated Attributes on a Page {#calculated-attribute-on-page}

Retrieve activities trigger the logic of calculated attributes, which can lead to database actions and microflow calls being executed (objects retrieving each other through calculated attributes).

If data containers (list view, data view, or data grid) on a page are using calculated attributes, this may affect the time to load and display the page. 

#### 2.1.1 Steps to Fix

To fix the issue, do the following:

1. In the domain model, change the attribute to be stored instead of calculated.
2. Wherever the attribute is about to be committed to the database, calculate the value using the relevant microflow.

{{% alert type="info" %}}

You will also need to migrate any existing data, since when the attribute is changed to be stored, the database will only contain the default value for that data type.

{{% /alert %}}

### 2.2 Remove Unused Calculated Attributes {#unused-calculated-attributes}

As Retrieve activities trigger the logic of calculated attributes, it could lead to an execution chain of database actions and microflow calls (objects retrieving each other through calculated attributes).

If calculated attributes are not used, they can safely be removed to avoid redundant microflow calls.

#### 2.2.1 Steps to Fix

To fix the issue, delete the unused calculated attribute.

## 3 Add an Index to Attributes in Sort Bars {#mxp003}

[Sort bars](sort-bar) are used to sort items in data containers. Sort bars can be used in three different types of data containers:

- Data grid
- Template grid
- Reference set selector

Each sort item in the sort bar is sequentially utilized to order the data in the widget. Adding an [index](indexes) on the attributes used in sort items can make the sorting process faster, subsequently improve the performance of the page. 

There can be four operations performed on an entity: create, update, delete, and select. Entities, for which the number of create, update, and delete operations is much greater than the number of select operations can be called *write-intensive* because most operations mutate data in a database rather than select from it.

Entities, for which the number of select operations is much greater than the number of create, update, and delete operations can be called *read-intensive* because most operations select data from the database. It is important to perform this optimization only on attributes belonging to entities which are predominantly *read-intensive*. 

As totally different best practices apply for read-intensive and write-intensive entities, it would be valuable to differentiate entities by the type of operations that are performed on the entities.

### 3.1 Steps to Fix

To fix the issue, add an index on attributes which are used as sort items in sort bars on pages.

## 4 Avoid Committing Objects Inside a Loop with Create Object, Change Object, or Commit Activities {#mxp004} 

<a name="mxp005"></a>In a microflow, Mendix objects can be persisted to the database with three activities: the **Create object** activity, **Change object** activity, and **Commit** activity. For objects that are created or changed in a loop, it is not the best practice to commit them immediately in the loop, as this comes with an unnecessary performance overhead. Instead, it is recommended to perform a batch commit of several created/changed objects with the **Commit** activity outside of the loop to reduce database, application, and network overhead. For more information on **Create object**, **Change object**, and **Commit** activities, see [Create Object](create-object), [Change Object](change-object), and [Commit Object(s)](committing-objects).

Committing lists of objects has the following benefits compared to individual commits:

- The prepared statement of creating or modifying records in the database is explicitly reused by the JDBC driver and has the following benefits:
    - The execution plan is cached
    - The driver cares for a minimum of network overhead
- For each database action that changes data the following actions are taken and added overhead:
    - A savepoint is created before the action and released afterwards
    - Auto-committed objects are retrieved from the database
    - Auto-committed objects are stored to the database (if relevant)

### 4.1 Steps to Fix for Create or Change Object Activities

To fix the issue for **Create** or **Change object** activities inside the loop, do the following:

1. Change the **Commit** option of a **Create**/**Change** object activity from *No* and make sure created/changed objects are available in a list.
2. Commit the list after the loop when the iteration has finished or when number of objects in the list reaches 1000 to avoid excessive memory usage.

### 4.2 Steps to Fix for the Commit Activity

To fix the issue for the **Commit** activity, commit the list after the loop when the iteration has finished or when number of objects in the list reaches 1000 to avoid excessive memory usage.

## 5 Convert Eligible Microflows to Nanoflows {#mxp006}

Nanoflows are executed directly on an end-user's device or browser. This makes them ideal for offline usage. In contrast, microflows run in the Runtime server, thus involve usage of network traffic. Converting an eligible microflow to a nanoflow helps avoiding communication over networks and significantly boosts app performance. For more information on when to use on nanoflows and when to use them, see [Nanoflows](nanoflows).

You can identify convertible microflows using the following criteria:

- Microflows that have one or more of the following categories:
    - Microflow has logic meant for offline applications.
    - Microflow has logic for online applications but does not involve any database related actions like a committing **Create object**, **Commit**, **Retrieve**, and **Rollback** activities. 
    - Microflow has at-most one database related action. (Not the best practice)
- Microflows that contain nanoflow-compatible activities. For information on activities supported by nanoflows, see [Activities](activities). 
- Microflow expressions do not contain the following variables: `$latestSoapFault`, `$latestHttpResponse`, `$currentSession`, `$currentUser`, `$currentDeviceType`. These variables are not supported by nanoflows.
- As nanoflows are executed in the context of the current user, ensure that the microflow has only operations for which the current user is authorized. Otherwise the converted nanoflow will fail.

### 5.1 Steps to Fix

To fix the issue, do the following:

1. Create a new nanoflow by right-clicking the module and selecting **Add nanoflow**.
2. Replicate the same logic from the microflow. The new nanoflow must look almost identical to the microflow.
3. Check usages of the microflow by right-clicking the microflow and selecting **Find usages**. Replace all usages with the newly created nanoflow.
4. Delete the unused microflow. You can do this by selecting the microflow and pressing <kbd>Delete</kbd> or by right-clicking it and selecting **Delete**.

## 6 Add Index to Attributes that Are Used in XPath Expressions {#mxp007}

[XPath expressions](xpath) can take a long time to run depending on how many records the underlying entities contain. For read-intensive entities, it makes sense to add an index on the attributes used in XPath expressions. This can significantly boost performance of object retrieval from the database. XPath expressions can also be optimized by ordering them in such a way that the first class excludes as many items as possible. This can be achieved by using indexed attributes earlier in the expression. This will make the rest of the data set to join/filter as small as possible and reduce the load on the database.

Note that XPath expressions can be used in three different places:

- Access rules and entities
- Source/Filter for lists and grids on pages
- Retrieve actions in both microflows and Java actions

### 6.1 Steps to Fix

To fix the issue, do the following:

1. Check if the underlying entity contains a substantial amount of records before adding an index (at least 10000 records).
2. Add an index per each attribute used in the XPath expression only for scenarios where read-intensive operations are predominantly performed on the underlying entities.

{{% alert type="info" %}}

This optimization may not be very beneficial for data types like Boolean and enumerations due to a limited number of possible values of these types. It is not recommended to add indexes for such types.

{{% /alert %}}

## 7 Avoid Caching Non-Persistable Entities {#mxp008}

A non-persistable object is an object that is considered temporary and only exists in the memory. It is an instance of a non-persistable entity. For more information on persistable and non-persistable entities, see [Persistablity](persistability). As these objects exist only in memory, caching them is not useful. On the one hand, it is redundant to create associations of non-persistable entities with System.Session or System.User persistable entities. On the other hand, it is important to cache objects which do not change very often but are used frequently in logic. This will help avoid the overhead of database communication. Persistable entities can be connected to the System.Session of the user and be used as a cache of outcomes. For more information on objects and caching, see [Objects & Caching](objects-and-caching).

You can use the following guidelines to decide whether caching is needed:

- Data does not change very often
- Data is read very often
- The volume of data is limited (usually less than 10 000 records)
- The impact of using stale data is accepted

### 7.1 Steps to Fix

To fix the issue, do the following:

1. For an entity that does not change very often, make it persistable if its objects are used frequently for your logic.
2. If the above condition is not met, remove the association of the non persisted entity with System.User or System.Session.

