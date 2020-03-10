---
title: "Retrieve"
parent: "object-activities"
menu_order: 6
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

A **Retrieve** activity can be used to get one or more objects, either by directly traversing an association of another object, or by retrieving objects from the database.

{{% alert type="info" %}}
For the properties that all microflow activities share (for example, the **Caption**), see [Common Properties](microflow-element-common-properties). This page only describes the properties specific to this activity.

{{% /alert %}}

## 2 Activity Properties

### 2.1 Retrieve Source {#source}

The **Source** defines the way the objects are retrieved:

| Option | Description |
| --- | --- |
| By association | Retrieve the object(s) associated to an object by following an association. Note that when objects and/or their associations are changed and not committed, the data is not yet available in the database. By retrieving **By association**, the data that is not committed can be retrieved. For more information, see the [Retrieve by Association Properties](#association) section below.  |
| From database | Retrieve objects from the database. For more information, see the [Retrieve from Database Properties](#from-database) section below. |

### 2.2 Retrieve by Association Properties {#association}

#### 2.2.1 Association

This property specifies which association will be followed. The association must be an association from an object that is already available to the retrieve activity. Associations can be followed in both directions.

### 2.3 Retrieve from Database Properties {#from-database}

#### 2.3.1 Entity

This property specifies the entity from which to retrieve instances (objects).

#### 2.3.2 Range

This property specifies the range that determines how many objects are retrieved:

| Range | Meaning |
| --- | --- |
| All | Retrieve all objects at once. |
| First | Retrieve only the first object. The result of the retrieve action will be a single object instead of a list. Note that when you know you have only one object or you only want to use the first object in a list, use **First** to get a result of the object type (as opposed to a list). |
| Custom | Retrieve a given number of objects (**Amount**) starting at a given index (**Offset**). The amount and offset are expressions that should result in a number. Note that the first object has an offset of 0. An amount of 0 means that all objects are retrieved. |

#### 2.3.3 XPath Constraint

The [XPath](xpath) constraint defines the condition the objects need to fulfill to be retrieved. If there is no XPath constraint, all objects of the entity are retrieved.

{{% alert type="info" %}}
Date functions, user-role tokens, computations based on tokens, and following associations are not supported in XPath constraints when the retrieve activity is in a nanoflow.
{{% /alert %}}

#### 2.3.4 Sorting

This property defines the order of the list. The list can be sorted in ascending and descending order on the values of an attribute. If there are objects that have the same attribute value, the list is sorted based on the second attribute (if any) and so on.

## 5 Output Properties

### 5.1 List Name or Object Name

This is the name of the list or object returned by the activity. It can be used by all the activities that follow this activity.
