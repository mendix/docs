---
title: "List Operation"
space: "Mendix 7 Reference Guide"
parent: "list-activities"
---


The List Operation activity can perform various actions on a list. See below for details on these actions.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Operation Types

A list operation action can execute any of the following types of operations.

### Binary

These binary operations have as an input a list and either another list or an object. The resulting type depends on the type of the operation. All lists and objects must relate to the same entity.

| Operation | Description | Result Type |
| --- | --- | --- |
| Union | The result is a combination of the elements of both parameters avoiding duplicates. | List |
| Intersect | The result is a list containing elements that appear in both parameters. | List |
| Subtract | The result is the first parameter with the element(s) of the second parameter removed. | List |
| Contains | Checks whether all elements of the second parameter are present in the first parameter. | Boolean |
| Equals | Checks whether the lists contain the same elements. | Boolean |

### Sort

| Operation | Description | Result Type |
| --- | --- | --- |
| Sort | Allows you to sort a list based on a number of a attributes. The attributes are ordered to determine their priority while sorting. The input list remains in its original order while the sorted list is stored in the output variable. | List |

### Member Inspections

These operations take a single list and a member (attribute or association) as input. The resulting type depends on the type of the operation.

| Operation | Description | Result Type |
| --- | --- | --- |
| Find | Find the first object of which the member has the given value. | Object |
| Filter | Find all objects of which the member has the given value. | List |

### Unary

These unary operations have a list as input and either an object or another list as a resulting type, depending on the operation.

| Operation | Description | Result Type |
| --- | --- | --- |
| Head | The result is the first element of the list, or empty if the parameter contains zero elements or was initialized as empty. | Object |
| Tail | The result is a list containing all elements of the parameter except the first, or an empty list if the parameter contains zero elements or was initialized as empty. | List |

## Output Properties

### Name

Defines the name of the resulting List, Object or Boolean variable. The variable can be used by all activities that follow this activity.
