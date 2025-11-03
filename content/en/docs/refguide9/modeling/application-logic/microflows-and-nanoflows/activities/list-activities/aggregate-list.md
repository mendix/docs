---
title: "Aggregate List"
url: /refguide9/aggregate-list/
weight: 1
#To update screenshots of these microflows in Studio Pro, use the Microflow Screenshots app.
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

An example of **Aggregate list** properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/aggregate-list/aggregate-list-properties.png" alt="aggregate list properties" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Aggregate list** properties pane consists of the following sections:

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
When using the `Count` function, it is not necessary to select an attribute, as it simply counts the number of objects in the list.
{{% /alert %}}

### Variable Name

The name of the variable in which the result of the aggregation is stored. This variable will have a numeric data type that depends on the selected function.

## Common Section{#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}

## Optimizing Aggregate Activities

In some apps, it is necessary to evaluate large datasets in a microflow (for example, for reporting purposes). If there are a lot of [retrieves](/refguide9/retrieve/) and aggregates on large datasets in a microflow, it is easy to run into performance or memory problems. 

This section describes how Mendix Runtime optimizes **Aggregate list** activities with large datasets and some recommended approaches for optimization. 

When a database **Retrieve** activity is only used once in one **Aggregate list** activity and a custom range is not configured, the Mendix Runtime can automatically merge these two activities into a single action. This executes a single aggregate query on the database. So, if you retrieve all 100k log lines from a database and only do a count on the list, you will not receive a heap space. This is because the microflow never places all 100k records in memory.

For instance, in this microflow, the Mendix Runtime merges the two activities into one single count query:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/aggregate-list/one-single-retrieve-query.png" width="500px" class="no-border" >}}

### Examples for When Optimization is Not Applied

If you reuse the same list for multiple **Aggregates list** activities, an optimization process is not applied. The Mendix Runtime only creates an optimized SQL query if the list is not used in the microflow afterwards and a custom range is not configured. If you use the list later (for example, to iterate over the list) or a custom range is configured, the query is not optimized. 

For instance, in this example, the same list is used multiple times, and hence the Mendix Runtime no longer merges the activities:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/aggregate-list/not-merged-activities.png" class="no-border" >}}

If the list is not merged into a single query, all these records are kept in memory. Basically, this has the same effect as when you iterate over the list. If you iterate over the list, you have to think about the memory consumption, meaning that you cannot retrieve 10,000 objects with a single retrieve query. To prevent memory errors (for example, heap space or GC limit overhead), you should not use a list multiple times in a microflow unless you use a limit and offset.

### Recommended Optimization Approaches

If you do want to use the list more than once and you also want the optimized query, do two separate retrieves. As shown in the following example, an optimized query is applied and you can use the second retrieve in your microflow.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/aggregate-list/two-separate-retrieves.png" class="no-border" >}}

When an average is calculated within an optimized SQL query, the rounding mode configured in the app settings is not respected. The result that is returned is rounded by the database according to the database settings. If the rounding mode setting for the app is essential for the result, you can retrieve the sum and count separately and perform the division in the microflow.

Since the Mendix Runtime merges list retrieve and aggregate activities, you do not have to think about the memory consumption of these activities. If you are dealing with datasets of thousands and larger, it is even faster to do multiple aggregates in the database, as a database is designed for doing retrieves and aggregates as fast as possible. The only reason you do not want to use multiple retrieves is when there are very complex constraints (for example, multiple associations and attributes) or when your data is likely to change in the few milliseconds between the two queries.

## Read More

* [Retrieve Activities](/refguide9/retrieve/)
