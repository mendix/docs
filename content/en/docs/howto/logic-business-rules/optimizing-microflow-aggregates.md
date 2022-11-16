---
title: "Optimize Microflow Aggregates"
url: /howto/logic-business-rules/optimizing-microflow-aggregates/
category: "Logic and Business Rules"
weight: 70
description: "Describes how to evaluate large datasets in microflows."
tags: ["microflow", "aggregate", "retrieve"]
#To update screenshots of these microflows in Studio Pro, use the Microflow Screenshots app.
---

## 1 Introduction

In some apps, it is necessary to evaluate large datasets in a microflow (for example, for reporting purposes). If there are a lot of retrieves and aggregates on large datasets in a microflow, it is easy to run into performance or memory problems. 

This document describes how Mendix Runtime optimizes list aggregate activities with large datasets and some recommended approaches for optimization. 

When a database retrieve activity is only used once in one list aggregate activity and a custom range is not configured, the Mendix Runtime can automatically merge these two activities into a single action. This executes a single aggregate query on the database. So, if you retrieve all 100k log lines from a database and only do a count on the list, you will not receive a heap space. This is because the microflow never places all 100k records in memory.

For instance, in the microflow shown in the following example, the Mendix Runtime will merge the two activities into one single count query:

{{< figure src="/attachments/howto/logic-business-rules/optimizing-microflow-aggregates/one-single-retrieve-query.png" width="500px" >}}

## 2 Optimization

### 2.1 Examples for When Optimization is not Applied

However, if you reuse the same list for multiple list aggregates, an optimization process will not be applied. The Mendix Runtime only creates an optimized SQL query if the list is not used in the microflow afterwards and a custom range is not configured. If you use the list later (for example, to iterate over) or a custom range is configured, the query will not be optimized. 

For instance, in the following example, it uses the same list variable multiple times, the Mendix Runtime no longer merges the activities. 

{{< figure src="/attachments/howto/logic-business-rules/optimizing-microflow-aggregates/not-merged-activities.png" >}}

If the list is not merged into a single query, all these records are kept in memory. Basically, this has the same effect as when you iterate over the list. If you iterate over the list, you have to think about the memory consumption, meaning that you cannot retrieve 10,000 objects with a single retrieve query. To prevent memory errors (for example, heap space, GC limit overhead), you should not use a list multiple times in a microflow unless you use a limit and offset.

### 2.2 Recommended Optimization Approaches

If you do want to use the list more than once and you also want the optimized query, do two separate retrieves. As shown in the following example, an optimized query is applied and you can use the second retrieve in your microflow.

{{< figure src="/attachments/howto/logic-business-rules/optimizing-microflow-aggregates/two-separate-retrieves.png" >}}

When an average is calculated within an optimized SQL query, the rounding mode configured in the app settings is not be respected. The result that is returned is rounded by the database according to the database settings. If the rounding mode setting for the app is essential for the result, you can retrieve the sum and count separately and perform the division in the microflow.

Since the Mendix Runtime merges list retrieve activities and list aggregates, you do not have to think about the memory consumption of these activities. If we are talking about data sets of thousands and larger, it is even faster to do multiple aggregates in the database, as a database is designed for doing retrieves and aggregates as fast as possible. The only reason you would not want to use multiple retrieves is in a case with very complex constraints (for example, multiple associations and attributes) or when your data is likely to change in the few milliseconds between the two queries.

## 3 Read More

* [Retrieve Activities](/refguide/retrieve/)
* [Optimize Retrieve Activities](/howto/logic-business-rules/optimizing-retrieve-activities/)
