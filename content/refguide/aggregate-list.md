---
title: "Aggregate List"
parent: "list-activities"
menu_order: 1
tags: ["studio pro", "Aggregate", "Sum", "Average", "Count", "Minimum", "Maximum"]
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The aggregate list activity can be used to calculate aggregated values such as the maximum, minimum, sum, average and total number of objects over a list of objects.

{{% alert type="info" %}}

See [Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 List

The name of the list to compute an aggregate over.

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

Defines which attribute of the objects in the list is used to aggregate over. This must be a numeric attribute (Long, Integer, or Decimal). When using the 'Count' function it is not necessary to select an attribute, as it simply counts the number of objects in the list.

## 4 Output

### 4.1 Variable Name

The name of the variable in which the result of the aggregation is stored. This variable will have a numeric data type that is based on the selected function.
