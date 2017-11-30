---
title: "List Operation"
parent: "list-activities"
---
List operations perform various actions on a list. See below for details on these actions.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Operation Types

A list operation action can execute any of the following types of operations.

### Binary

These binary operations have as an input a list and either another list or an object. The resulting type depends on the type of the operation. All lists and objects must relate to the same entity.

| Operation | Description | Result Type |
| --- | --- | --- |
| Union | The result is a combination of the elements of both parameters avoiding duplicates. | List |
| Intersect | The result is a list containing elements that appear in both parameters. | Boolean |
| Subtract | The result is the first parameter with the element(s) of the second parameter removed. | Boolean |
| Contains | Checks whether all elements of the second parameter are present in the first parameter. | Boolean |
| Equals | Checks whether the lists contain the same elements. | Boolean |

### Attribute Inspections

These operations take a single list and an attribute as input. The resulting type depends on the type of the operation.

| Operation | Description | Result Type |
| --- | --- | --- |
| Find | Find the first object of which the attribute has the given value. | Object |
| Filter | Find all objects of which the attribute has the given value. | List |

### Sort

The Sort operation allows you to sort a list based on a number of a attributes. The attributes are ordered to determine their priority while sorting. The input list remains in its original order while the sorted list is stored in the output variable.

## Output Properties

### Variable name

The variable name defines the name of the resulting list, object or boolean. It can be used by all activities that follow this activity.
