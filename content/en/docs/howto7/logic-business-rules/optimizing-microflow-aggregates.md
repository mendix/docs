---
title: "Optimize Microflow Aggregates"
url: /howto7/logic-business-rules/optimizing-microflow-aggregates/
category: "Logic & Business Rules"
weight: 7
tags: ["microflow", "aggregate"]
#To update screenshots of these microflows in the Desktop Modeler, use the Microflow Screenshots app.
---

## 1 Optimization

In some projects, it is necessary to evaluate large datasets in a microflow (for example, for reporting purposes). If all those microflows do a lot of retrieves and aggregates on large datasets, it is easy to run into performance or memory problems. 

When a database retrieve activity is only used in list aggregate activities and a custom range is not configured, the platform can automatically merge these two activities into a single action. This executes a single aggregate query on the database. So, if you retrieve all 100k log lines from a database and only do a count on the list, you will not receive a heap space. This is because the microflow will never place all 100k records in memory. However, if you reuse the same list variable for multiple list aggregates, this does not apply.

The platform only creates an optimized SQL query if the list is not used in the microflow afterwards and a custom range is not configured. If you use the list later (for example, to iterate over) or a custom range is configured, the query will not be optimized.

If you do want to use the list but you also want the optimized query, do two separate retrieves. This will do the optimized query, and you can use the second retrieve in your microflow.

{{< figure src="/attachments/howto7/logic-business-rules/optimizing-microflow-aggregates/18580944.png" >}}

## 2 Read More

* [How to Define Access Rules Using XPath](/howto7/logic-business-rules/define-access-rules-using-xpath/)
* [How to Work with Lists in a Microflow](/howto7/logic-business-rules/working-with-lists-in-a-microflow/)
* [How to Trigger Logic Using Microflows](/howto7/logic-business-rules/triggering-logic-using-microflows/)
* [How to Create a Custom Save Button](/howto7/logic-business-rules/create-a-custom-save-button/)
* [How to Optimize Retrieve Activities](/howto7/logic-business-rules/optimizing-retrieve-activities/)
* [How to Configure Error Handling](/howto7/logic-business-rules/set-up-error-handling/)
* [How to Optimize Microflow Aggregates](/howto7/logic-business-rules/optimizing-microflow-aggregates/)
* [How to Extract & Use Sub-Microflows](/howto7/logic-business-rules/extract-and-use-sub-microflows/)
