---
title: "Optimize Retrieve Activities"
url: /howto8/logic-business-rules/optimizing-retrieve-activities/
weight: 9
#To update screenshots of these microflows in , use the Microflow Screenshots app.
---

## Introduction

Often in processes you need to retrieve objects in order to complete the process. But what if those objects cannot be found? Usually additional actions are required, but since the objects you retrieve and create are assigned different names, sometimes you cannot merge them back into a single flow.

This how-to teaches you how to do the following:

* Find and create objects to continue your process
* Retrieve an instance of an object

## Finding and Creating Objects to Continue Your Process

A common example is shown below in which creating an order needs to be associated with the customer and its primary address. This example ends up in three different flows and cannot be merged back into the main flow, because that causes the **OtherAddress** or **NewPrimaryAddress** to be unreachable. 

Preventing the creation of the same objects multiple times on different places causes a lot of unnecessary maintenance. One solution for this is to copy the logic (partially) into a sub-microflow (as shown in the example), but this doesn't make it easier to read.

{{< figure src="/attachments/howto8/logic-business-rules/optimizing-retrieve-activities/18581014.png" class="no-border" >}}

You can easily work around this by using a sub-microflow at a different place. In order to avoid making exceptions in your microflow for the default behavior, do not put the standard logic in a sub microflow that is difficult to read (because of one exception earlier in the process). Since we got to this point because of an exception, it makes the most sense to solve this problem by altering the exception and changing it so that it fits in our standard flow.

The easiest way to implement this is to move all the logic for acquiring the primary address into a sub-microflow. This way, all the logic acquired after getting the address only needs to be specified once, and the microflow is still easily readable. 

{{< figure src="/attachments/howto8/logic-business-rules/optimizing-retrieve-activities/18581013.png" class="no-border" >}}

The **GetCustomerPrimaryAddress** sub-microflow contains the same logic as the original example, except this way there is only one result: the correct primary address.

{{< figure src="/attachments/howto8/logic-business-rules/optimizing-retrieve-activities/18581012.png" class="no-border" >}}

## Retrieving an Instance of an Object

Sometimes you need to have a specific instance of an object, and building a sub-flow for just one retrieve-and-create seems like too much work. An alternative is to build your own loop, which allows you to have one main flow but still be able to find and create objects during this process.

However, there is the risk of creating an infinite loop if the retrieve applies a constraint that is not set correctly during the create. So, always be sure to print a log message so that you can easily identify any problems in your design.

{{< figure src="/attachments/howto8/logic-business-rules/optimizing-retrieve-activities/18581011.png" class="no-border" >}}

## Read More

* [Define Access Rules Using XPath](/howto8/logic-business-rules/define-access-rules-using-xpath/)
* [Extend Your Application with Custom Java](/howto8/logic-business-rules/extending-your-application-with-custom-java/)
* [Work with Lists in a Microflow](/howto8/logic-business-rules/working-with-lists-in-a-microflow/)
* [Create a Custom Save Button](/howto8/logic-business-rules/create-a-custom-save-button/)
* [Optimize Retrieve Activities](/howto8/logic-business-rules/optimizing-retrieve-activities/)
* [Configure Error Handling](/howto8/logic-business-rules/set-up-error-handling/)
* [Optimize Microflow Aggregates](/howto8/logic-business-rules/optimizing-microflow-aggregates/)
* [Extract and Use Sub-Microflows](/howto8/logic-business-rules/extract-and-use-sub-microflows/)
