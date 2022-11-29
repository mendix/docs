---
title: "Retrieve"
url: /refguide7/retrieve/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Retrieve can be used to get one or more objects, either by directly traversing an association of another object, or by retrieving objects from the database.

{{% alert color="info" %}}

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Retrieve type

Retrieve type defines the way the objects are retrieved.

| Option | Description |
| --- | --- |
| Association | Retrieve the object(s) associated to an object by following an association. Changes to the association that have not been committed to the database can be retrieved only by using this type of retrieval. |
| From database | Retrieve objects from the database. |

{{% alert color="warning" %}}

When objects and/or its associations are changed and not committed, the data is not available in the database yet. By retrieving by association the data that is not committed can be retrieved.

{{% /alert %}}

## 3 Retrieve By Association Properties

### 3.1 Association

This property specifies which association will be followed. The association must be an association from an object that is already available in a variable. Associations can be followed in both directions.

## 4 Retrieve From Database Properties

### 4.1 Entity

The entity of which to retrieve instances (objects).

### 4.2 Range

The range determines how many objects are retrieved.

| Range | Meaning |
| --- | --- |
| All | Retrieve all objects at once. |
| First | Retrieve only the first object. The result of the retrieve action will be a single object instead of a list. |
| Custom | Retrieve a given number of objects (amount) starting at a given index (offset). Amount and offset are expressions that should result in a number. Note: the first object has offset 0. An amount of 0 means that all objects are retrieved. |

{{% alert color="warning" %}}

When you know you have only one object or you only want to use the first object in your list, use 'first' to get a result of type object (as opposed to list).

{{% /alert %}}

### 4.3 XPath Constraint

[XPath](/refguide7/xpath/) constraint defines the condition the objects need to suffice to be retrieved. If there is no XPath constraint, all objects of the entity are retrieved.

{{% alert color="warning" %}}

Nanoflows do not support this property.

{{% /alert %}}

### 4.4 Sorting

Sorting defines the order of the list. The list can be sorted in ascending and descending order on the values of an attribute. If there are objects that have the same attribute value the list is sorted based on the second attribute (if any) and so on.

## 5 Output Properties

### 5.1 Variable Name

Variable name defines the name of the result list or object variable. It can be used by all activities that follow this activity.
