---
title: "Optimizing Microflow Aggregates"
space: "Mendix 6 How-to's"
category: "Logic & Business Rules"
tags: []
---
In some projects it is necessary to evaluate and large datasets in a microflow, for example for reporting purposes. If all those microflows do many retrieves and aggregates on large datasets it is easy to run into performance or memory problems. 

When a database retrieve activity is only used in a list aggregate activities the platform can automatically merged these two activities into a single action. This would execute a single aggregate query on the database. So if you would retrieve all 100k log lines from database and only do a count on the list you don’t receive a heap space because the microflow would never place all 100k records in the memory. However if you re-use the same list variable for multiple list aggregates this no longer applies.

Apparently the platform only merges the activities together as long as a list is only used for 1 single aggregate, as soon as you start reusing the list variable anywhere you could end up with memory issues.

So next time when you want to do multiple aggregates on the same list variable, please don’t. Just create to separate retrieve activities instead, you’ll prevent memory errors and in mycase the speed process improved drastically as well (from >60minutes to <10).

![](attachments/18448676/18580944.png)

## Related content

*   [Defining access rules using XPath](Define+Access+Rules+Using+XPath)
*   [Extending Your Application with Custom Java](Extending+Your+Application+with+Custom+Java)
*   [Working With Lists in a Microflow](Working+With+Lists+in+a+Microflow)
*   [Triggering Logic using Microflows](Triggering+Logic+using+Microflows)
*   [Creating a Custom Save Button](Create+a+Custom+Save+Button)
*   [Optimizing Retrieve Activities](Optimizing+Retrieve+Activities)
*   [Error Handling](Set+Up+Error+Handling)
*   [Optimizing Microflow Aggregates](Optimizing+Microflow+Aggregates)
*   [Extract and use sub microflows](Extract+and+use+sub+microflows)
