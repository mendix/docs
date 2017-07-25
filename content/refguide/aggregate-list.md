---
title: "Aggregate List"
parent: "list-activities"
---


Aggregate List can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Input Properties

### Variable

The list variable to compute an aggregate over.

## Action Properties

### Function

Defines which type of aggregation is applied.

| Value | Description |
| --- | --- |
| Sum | The sum of all values of an attribute from the list of objects. |
| Average | The average of all values of an attribute from the list of objects. |
| Count | The total number of objects in the list. |
| Minimum | The minimum of all values of an attribute from the list of objects. |
| Maximum | The maximum of all values of an attribute from the list of objects. |

### Attribute

Defines which attribute of the objects in the list is used to aggregate over. This must be a numeric attribute (Long, Integer, Float (deprecated), Currency (deprecated) or Decimal). When using the 'Count' function it is not necessary to select an attribute, as it simply counts the number of objects in the list.

## Output

### Variable

The name of the variable in which the result of the aggregation is stored. This variable will have a numeric data type that is based on the selected function.
