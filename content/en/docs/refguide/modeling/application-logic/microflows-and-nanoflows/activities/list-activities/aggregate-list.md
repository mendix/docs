---
title: "Aggregate List"
url: /refguide/aggregate-list/
weight: 1
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#To update screenshots of these microflows in Studio Pro, use the Microflow Screenshots app.
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

## Introduction

The **Aggregate list** activity can be used to calculate aggregated values over a list of objects. The aggregated values supported by this activity are:

* sum
* average
* count
* minimum
* maximum
* all
* any
* reduce

## Properties

An example of **Aggregate list** properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/aggregate-list/aggregate-list-properties.png" alt="aggregate list properties" width="650px" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Aggregate list** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### List

The name of the list to aggregate.

### Function

Defines which type of aggregation is applied.

| Value   | Description                                                             |
| ------- | ------------------------------------------------------------------------|
| Sum     | The sum of all values of an attribute from the list of objects.         |
| Average | The average of all values of an attribute from the list of objects.     |
| Count   | The total number of objects in the list.                                |
| Minimum | The minimum of all values of an attribute from the list of objects.     |
| Maximum | The maximum of all values of an attribute from the list of objects.     |
| All     | If an expression is true for all objects in the list of objects.        |
| Any     | If an expression is true for any of the objects in the list of objects. |
| Reduce  | Allows for a custom aggregation to be defined.                          |

### Return Type

This option is only visible if the **Function** is **Reduce**. The **Return type** selected here will be the type of the output variable, the type of the **Initial value**, and the type of the **Expression**. 

In the example below, the **Return type** is **String** with the **Initial value** being `'Product names: '` and the **Expression** being `$currentResult + $currentObject/Name`.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/aggregate-list/aggregate-list-reduce-example.png" width="500px" alt="Aggregate list reduce example" class="no-border" >}}

### Aggregate with

This option is only visible if the **Function** is **Average**, **Minimum**, **Maximum** or **Sum**. For those functions, you can define if you want to aggregate using an attribute or an expression.

{{% alert color="info" %}}
When using the `Count` function, it is not necessary to select an attribute or enter an expression, as it simply counts the number of objects in the list.
{{% /alert %}}

### Attribute

Defines which attribute of the objects in the list is used to aggregate over. This must be a numeric attribute (**Long**, **Integer**, or **Decimal**). This option is only visible if **Aggregate with** is set to **Attribute**.

### Initial Value

This option is only visible if the **Function** is **Reduce**. The expression you enter in the **Initial value** field will be used first as the initial value for the aggregation. When aggregating with **Reduce** over an empty list, the result of the aggregation will be this initial value. Otherwise, the initial value will be updated to the value of `$currentResult` when the expression in the **Expression** field is evaluated for the first item.

### Expression

The expression you enter in the **Expression** field is evaluated for each item in the list of objects and its result is used for the aggregation. For **Average**, **Minimum**, **Maximum** and **Sum**, its type must be numeric (**Long**, **Integer**, or **Decimal**). For **Any** and **All**, the type of this expression must be a **Boolean**. For **Reduce**, its type is the same as the type that is defined in **Return type**.

In this expression, the variable `$currentObject` contains the item of the list of objects that is currently being processed. If the function is **Reduce**, the variable `$currentResult` contains the latest accumulated result (the resulting value of this expression is the next value of `$currentResult`).

### Variable Name

The name of the variable in which the result of the aggregation is stored. The variable will have a numeric data type if the aggregation function is **Sum**, **Average**, **Count**, **Minimum** or **Maximum**. The type will be a **Boolean** if the aggregation function is **Any** or **All**. For **Reduce**, the type is same as the type that is defined in **Return type**.

## Common Section{#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Optimizing Aggregate Activities

In some apps, it is necessary to evaluate large datasets in a microflow (for example, for reporting purposes). If there are a lot of [retrieves](/refguide/retrieve/) and aggregates on large datasets in a microflow, it is easy to run into performance or memory problems.

This section describes how Mendix Runtime optimizes **Aggregate list** activities with large datasets and some recommended approaches for optimization.

When a database **Retrieve** activity is only used once in one **Aggregate list** activity, a custom range is not configured and the activity does not use an expression, the Mendix Runtime can automatically merge these two activities into a single action. This executes a single aggregate query on the database. So, if you retrieve all 100k log lines from a database and only do a count on the list, you will not receive a heap space. This is because the microflow never places all 100k records in memory.

For instance, in this microflow, the Mendix Runtime merges the two activities into one single count query:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/aggregate-list/one-single-retrieve-query.png" width="500px" class="no-border" >}}

### Examples for When Optimization is Not Applied

If you reuse the same list for multiple **Aggregates list** activities, an optimization process is not applied. The Mendix Runtime only creates an optimized SQL query if the list is not used in the microflow afterwards, a custom range is not configured and the activity does not use an expression. If you use the list later (for example, to iterate over the list) or a custom range is configured, the query is not optimized.

For instance, in this example, the same list is used multiple times, and hence the Mendix Runtime no longer merges the activities:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/aggregate-list/not-merged-activities.png" class="no-border" >}}

If the list is not merged into a single query, all these records are kept in memory. Basically, this has the same effect as when you iterate over the list. If you iterate over the list, you have to think about the memory consumption, meaning that you cannot retrieve 10,000 objects with a single retrieve query. To prevent memory errors (for example, heap space or GC limit overhead), you should not use a list multiple times in a microflow unless you use a limit and offset.

### Recommended Optimization Approaches

If you do want to use the list more than once and you also want the optimized query, do two separate retrieves. As shown in the following example, an optimized query is applied and you can use the second retrieve in your microflow.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/list-activities/aggregate-list/two-separate-retrieves.png" class="no-border" >}}

When an average is calculated within an optimized SQL query, the rounding mode configured in the app settings is not respected. The result that is returned is rounded by the database according to the database settings. If the rounding mode setting for the app is essential for the result, you can retrieve the sum and count separately and perform the division in the microflow.

Since the Mendix Runtime merges list retrieve and aggregate activities, you do not have to think about the memory consumption of these activities. If you are dealing with datasets of thousands and larger, it is even faster to do multiple aggregates in the database, as a database is designed for doing retrieves and aggregates as fast as possible. The only reason you do not want to use multiple retrieves is when there are very complex constraints (for example, multiple associations and attributes) or when your data is likely to change in the few milliseconds between the two queries.

## Read More

* [Retrieve Activities](/refguide/retrieve/)
