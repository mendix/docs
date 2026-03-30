---
title: "Optimize Microflow Aggregates"
url: /howto8/logic-business-rules/optimizing-microflow-aggregates/
weight: 7
#To update screenshots of these microflows in , use the Microflow Screenshots app.
---

## Optimization

In some projects, it is necessary to evaluate large datasets in a microflow (for example, for reporting purposes). If all those microflows do a lot of retrieves and aggregates on large datasets, it is easy to run into performance or memory problems. 

When a database retrieve activity is only used in list aggregate activities and a custom range is not configured, the platform can automatically merge these two activities into a single action. This executes a single aggregate query on the database. So, if you retrieve all 100k log lines from a database and only do a count on the list, you will not receive a heap space. This is because the microflow will never place all 100k records in memory. However, if you reuse the same list for multiple list aggregates, this does not apply. 

The Mendix Platform only creates an optimized SQL query if the list is not used in the microflow afterwards and a custom range is not configured. If you use the list later (for example, to iterate over) or a custom range is configured, the query will not be optimized.

If you do want to use the list but you also want the optimized query, do two separate retrieves. This will do the optimized query, and you can use the second retrieve in your microflow.

{{< figure src="/attachments/howto8/logic-business-rules/optimizing-microflow-aggregates/18580944.png" class="no-border" >}}

## Read More

* [Define Access Rules Using XPath](/howto8/logic-business-rules/define-access-rules-using-xpath/)
* [Extend Your Application with Custom Java](/howto8/logic-business-rules/extending-your-application-with-custom-java/)
* [Work with Lists in a Microflow](/howto8/logic-business-rules/working-with-lists-in-a-microflow/)
* [Create a Custom Save Button](/howto8/logic-business-rules/create-a-custom-save-button/)
* [Optimize Retrieve Activities](/howto8/logic-business-rules/optimizing-retrieve-activities/)
* [Configure Error Handling](/howto8/logic-business-rules/set-up-error-handling/)
* [Optimize Microflow Aggregates](/howto8/logic-business-rules/optimizing-microflow-aggregates/)
* [Extract and Use Sub-Microflows](/howto8/logic-business-rules/extract-and-use-sub-microflows/)
