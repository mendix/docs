---
title: "Retrieve"
parent: "object-activities"
---


Retrieve can be used to get one or more objects, either by directly traversing an association of another object, or by retrieving objects from the database.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Action Properties

### Retrieve type

Retrieve type defines the way the objects are retrieved.

| Option | Description |
| --- | --- |
| Association | Retrieve the object(s) associated to an object by following an association. Changes to the association that have not been committed to the database can be retrieved only by using this type of retrieval. |
| From database | Retrieve objects from the database. |

{{% alert type="warning" %}}

When objects and/or its associations are changed and not committed, the data is not available in the database yet. By retrieving by association the data that is not committed can be retrieved.

{{% /alert %}}

## Retrieve By Association Properties

### Association

This property specifies which association will be followed. The association must be an association from an object that is already available in a variable. Associations can be followed in both directions.

## Retrieve From Database Properties

### Entity

The entity of which to retrieve instances (objects).

### Range

The range determines how many objects are retrieved.

| Range | Meaning |
| --- | --- |
| All | Retrieve all objects at once. |
| First | Retrieve only the first object. The result of the retrieve action will be a single object instead of a list. |
| Custom | Retrieve a given number of objects (limit) starting at a given index (offset). Limit and offset are microflow expressions that should result in a number. Note: the first object has offset 0. A limit of 0 means that all objects are retrieved. |

{{% alert type="warning" %}}

When you know you have only one object or you only want to use the first object in your list, use 'first' to get a result of type object (as opposed to list).

{{% /alert %}}

### XPath constraint

[XPath](xpath) constraint defines the condition the objects need to suffice to be retrieved. If there is no XPath constraint, all objects of the entity are retrieved.

### Sorting

Sorting defines the order of the list. The list can be sorted in ascending and descending order on the values of an attribute. If there are objects that have the same attribute value the list is sorted based on the second attribute (if any) and so on.

## Output Properties

### Variable name

Variable name defines the name of the result list or object variable. It can be used by all activities that follow this activity.
