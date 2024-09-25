---
title: "Aggregate List"
url: /refguide8/aggregate-list/
weight: 1
---

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## Introduction

The **Aggregate list** activity can be used to calculate aggregated values over a list of objects. The aggregated values supported by this activity are:

* average
* count
* maximum
* minimum
* sum

## Properties

An example of aggregate list properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/list-activities/aggregate-list/aggregate-list-properties.png" alt="aggregate list properties" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The aggregate list properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### List

The name of the list to aggregate.

### Function

Defines which type of aggregation is applied.

| Value | Description |
| --- | --- |
| Average | The average of all values of an attribute from the list of objects. |
| Count | The total number of objects in the list. |
| Minimum | The minimum of all values of an attribute from the list of objects. |
| Maximum | The maximum of all values of an attribute from the list of objects. |
| Sum | The sum of all values of an attribute from the list of objects. |

### Attribute

Defines which attribute of the objects in the list is used to aggregate over. This must be a numeric attribute (Long, Integer, or Decimal).

{{% alert color="info" %}}
When using the 'Count' function it is not necessary to select an attribute, as it simply counts the number of objects in the list.
{{% /alert %}}

### Variable Name

The name of the variable in which the result of the aggregation is stored. This variable will have a numeric data type that depends on the selected function.

## Common Section{#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}
