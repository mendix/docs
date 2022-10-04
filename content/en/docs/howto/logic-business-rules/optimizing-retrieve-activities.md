---
title: "Optimize Retrieve Activities"
url: /howto/logic-business-rules/optimizing-retrieve-activities/
category: "Logic & Business Rules"
weight: 90
description: "Describes how to find and create objects to continue your process as well as retrieve an instance of an object."
tags: ["microflow", "retrieve", "optimize"]
#To update screenshots of these microflows in Studio Pro, use the Microflow Screenshots app.
---

## 1 Introduction

Often in processes you need to retrieve objects in order to complete the process. Sometimes objects cannot be found and you need to take additional actions. And sometimes the objects you retrieve and the objects you create are assigned different names, and you cannot merge them back into a single flow.

This document presents an example of optimizing retrieve activities during the process of finding and creating objects. It also gives an example of retrieving an instance of an object.

## 2 Finding and Creating Objects to Continue Your Process 

### 2.1 A Common Example 

A common example is shown below in which creating an order needs to be associated with the customer and their address. This example ends up with three different flows, and they cannot be merged back into the main flow because that causes the entities **OtherAddress** and **NewPrimaryAddress** to be unreachable.

{{< figure src="/attachments/howto/logic-business-rules/optimizing-retrieve-activities/example-create-order.png" width="500px">}}

One solution for this is to include the logic (partially) in a sub-microflow (as shown in the following example). However, this is not easy to read, and preventing creating the same object multiple times at different places also causes a lot of unnecessary maintenance.

{{< figure src="/attachments/howto/logic-business-rules/optimizing-retrieve-activities/example-solution-one.png" >}}

### 2.2 Optimizing the Retrieve Activities 

You can easily work around the above issue by using a sub-microflow at a different place. To avoid making exceptions in your microflow for the default behavior, do not put the standard logic in a sub-microflow that is difficult to read (because of one exception earlier in the process). Since we got to this point because of an exception, it makes the most sense to solve this problem by altering the exception so that it fits in our standard flow.

The easiest way to implement this is to move all the logic for acquiring the customer's address into one sub-microflow (the **GetCustomerPrimaryAddress** sub-microflow). By doing so, all the logic acquired after getting the address only needs to be specified once, and the microflow is still easily readable. 

{{< figure src="/attachments/howto/logic-business-rules/optimizing-retrieve-activities/example-solution-two.png" >}}

As we can see in the example below, the **GetCustomerPrimaryAddress** sub-microflow contains the same logic as in the original example, except that there is only one result from this sub-microflow: the correct customer's address.

{{< figure src="/attachments/howto/logic-business-rules/optimizing-retrieve-activities/get-address-sub-microflow.png" >}}

## 3 Retrieving an Instance of an Object

Sometimes you only need to have a specific instance of an object. Building a sub-flow for just one retrieve-and-create action is too much. An alternative way is to build your own loop, which allows you to have one main flow but still be able to find and create objects during this process.

However, there is the risk of creating an infinite loop if the retrieve activity applies a constraint that is not set correctly during the creating activity. So, always make sure to print a log message so that you can easily identify any problems in your design.

{{< figure src="/attachments/howto/logic-business-rules/optimizing-retrieve-activities/retrieve-one-object-instance.png" >}}

## 4 Read More

* [Retrieve Activities](/refguide/retrieve/)
* [Extract and Use Sub-Microflows](/howto/logic-business-rules/extract-and-use-sub-microflows/)

