---
title: "Aggregate List"
url: /refguide7/aggregate-list/
---

{{% alert color="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

Aggregate List can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects.

{{% alert color="info" %}}

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/) for properties that all activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 Variable

The list variable to compute an aggregate over.

## 3 Action Properties

### 3.1 Function

Defines which type of aggregation is applied.

| Value | Description |
| --- | --- |
| Sum | The sum of all values of an attribute from the list of objects. |
| Average | The average of all values of an attribute from the list of objects. |
| Count | The total number of objects in the list. |
| Minimum | The minimum of all values of an attribute from the list of objects. |
| Maximum | The maximum of all values of an attribute from the list of objects. |

### 3.2 Attribute

Defines which attribute of the objects in the list is used to aggregate over. This must be a numeric attribute (Long, Integer, Float (deprecated), Currency (deprecated) or Decimal). When using the 'Count' function it is not necessary to select an attribute, as it simply counts the number of objects in the list.

## 4 Output

### 4.1 Variable

The name of the variable in which the result of the aggregation is stored. This variable will have a numeric data type that is based on the selected function.
