---
title: "Request Object"
url: /refguide/mobile/best-practices/request-object/
weight: 50
description: "This pattern lets you capture changes as objects and apply them after synchronization making these changes more secure."
---

## Introduction

This pattern lets you capture changes as objects and apply them after synchronization, making these changes more secure.

## Challenge

Creating and manipulating objects in a complex data structure from an offline client can lead to performance issues, security concerns, and data inconsistency. This is because the entire domain model is replicated in the offline database, and synchronizing changes can lead to conflicts with other parties editing the data.

## Solution

Request objects help alleviate this situation. Specifically, request objects capture the requested changes in a separate object in the offline database, and then apply the changes in a single transaction after it was synchronized. This reduces the amount of data that needs to be synchronized, and allows the transaction to be rolled back in the case of inconsistent data.

## Implementation

To implement this pattern, do the following:

1. Create one or more entities to store the changes that the offline client can make. The example below adds **TemplateOrder** and **TemplateOrderPosition** to allow creating orders with order positions while offline:

    {{< figure src="/attachments/refguide/mobile/best-practices/request-object-1.png" alt="Example domain model with several entities and associations" >}}

1. Enable **Store owner** for these entities and limit access to objects owned by the user.
1. Change your offline client to create and edit only request objects.
1. Create a microflow that applies the changes. 
1. In the microflow, retrieve the request objects and apply the stored changes to your domain model. The example below creates **Order** and **OrderPosition** objects based on the request objects (and reduces **Stock** count):

    {{< figure src="/attachments/refguide/mobile/best-practices/request-object-2.png" alt="Microflow that applies changes to multiple objects based on the instructions stored in a request object" >}}

1. Create a nanoflow that triggers the microflow listed above. Ensure that all request objects are synchronized before and (if changed in the process) after calling the microflow:

    {{< figure src="/attachments/refguide/mobile/best-practices/request-object-3.png" alt="Nanoflow that synchronized the request object and then triggers the Microflow to apply it" >}}

## Recommendations

To improve your apps further, consult the following recommendations:

* If the offline client employs multiple request objects in parallel, add a unique identifier (for example by using the nanoflow action **Get guid**) to the main request object and use it as a reference that can be passed to the microflow.
* It can be beneficial for data integrity to keep the processed request objects in the server database. In that case, use a [Deleted Flag](/refguide/mobile/best-practices/deleted-flag/) to remove them from the offline client.
* Combine **Request Object** with [Compound Object](/refguide/mobile/best-practices/compound-object/) to allow reading from and writing to complex data structures.

## Read More

* To increase the clarity, organization, and documentation of your apps, see [Mendix Best Practices for Development
](/refguide/dev-best-practices/)
