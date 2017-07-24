---
title: "Aggregate List"
parent: "list-activities"
---
Aggregate List can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Input Properties

### List

The list to compute an aggregate over.

## Action Properties

### Function

Aggregate function defines which type of aggregation is applied.

| Value | Description |
| --- | --- |
| Sum | The sum of all values of an attribute from the list of objects. |
| Average | The average of all values of an attribute from the list of objects. |
| Count | The total amount of objects in the list. |
| Minimum | The minimum of all values of an attribute from the list of objects. |
| Maximum | The maximum of all values of an attribute from the list of objects. |

### Attribute

Attribute defines which attribute of the objects in the list is used to aggregate over. This must be a numeric attribute (Long, Integer, Float or Currency).

## Output

### Variable name

The name of the (numeric) variable in which the result of the aggregation is stored.
