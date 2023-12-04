---
title: "Request Object"
url: /refguide/mobile/best-practices/request-object
category: Mobile
weight: 50
description: "This pattern lets you capture changes as objects and apply them after synchronizing them making these changes more secure."
tags: ["mobile", "best practices", "patterns", "offline-first", "synchronization"]
---
## Summary

This pattern lets you capture changes as objects and apply them after synchronizing them making these changes more secure.

## Challenge

Creating and manipulating objects in a complex data structure from an offline client can lead to performance issues, security concerns, and data inconsistency. This is because the entire domain model is replicated in the offline database, and synchronizing changes can lead to conflicts with other parties editing the data.

## Solution

Request objects help in this situation by capturing the requested changes in a separate object in the offline database and applying the changes in a single transaction after it was synchronized. This reduces the amount of data that needs to be synchronized and allows the transaction to be rolled back in case of inconsistent data.

## Implementation

1. Create one or more entities to store the changes that the offline client can make. Below example adds *TemplateOrder* and *TemplateOrderPosition* to allow creating orders with order positions while offline.

{{< figure src="/attachments/refguide/mobile/best-practices/request-object-1.png" alt="Example domain model with several entities and associations" >}}

1. Change your offline client to create and edit only request objects.
2. Create a Microflow that applies the changes. 
3. In the Microflow, retrieve the request objects and apply the stored changes to your domain model. Below example creates *Order* and *OrderPosition* objects based on the request objects and reduces *Stock* count.

{{< figure src="/attachments/refguide/mobile/best-practices/request-object-2.png" alt="Microflow that applies changes to multiple objects based on the instructions stored in a request object" >}}

1. Create a Nanoflow that triggers above Microflow. Ensure that all request objects are synchronized before and, if changed in the process, after calling the Microflow.

{{< figure src="/attachments/refguide/mobile/best-practices/request-object-3.png" alt="Nanoflow that synchronized the request object and then triggers the Microflow to apply it" >}}

## Considerations

- If the offline client employs multiple request objects in parallel, add a unique identifier (for example by using the Nanoflow action *Get guid)* to the main request object and use it as a reference that can be passed to the Microflow.
- It can be beneficial for data integrity to keep the processed request objects in the server database. In that case, use a Deleted Flag to remove them from the offline client.
- This best practice can be combined with 
- Combine Request Object with Compound object to allow reading from and writing to complex data structures.