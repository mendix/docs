---
title: "Compound Object"
url: /refguide/mobile/best-practices/compound-object
weight: 40
description: "This pattern lets you combine multiple objects to improve synchronization performance."
---

## Introduction

This pattern lets you combine multiple objects to improve synchronization performance.

## Challenge

Synchronizing data that is spread across multiple entities requires each entity to be synchronized individually. This can lead to performance problems because of the amount of data that is transmitted and the complexity of the queries on the offline database.

## Solution

These performance problems can be countered by combining multiple objects into compound objects. It is then sufficient to synchronize only the compound objects and ignore much of the complexity of the server’s database on the client.

## Implementation

To implement this pattern, do the following:

1. Create a new entity (for example *OfflineProduct*) to store the compound object.
1. Add all attributes needed in the offline client, including those from related entities, to the compound object.
1. Create a 1-1 association between the compound object and the target object. Configure the association to delete the compound object on deleting the target object:

    {{< figure src="/attachments/refguide/mobile/best-practices/compound-object-1.png" alt="Dialog with the on delete action set to delete" >}}

1. Create a microflow (call it *SUB_CreateOrRetrieveOfflineProduct*) that retrieves and returns the compound object associated with the target object. If it does not exist, a new compound object is returned instead. For the new object, the association to the target object must be set:

    {{< figure src="/attachments/refguide/mobile/best-practices/compound-object-2.png" alt="Microflow that creates or retrieves an OfflineProduct object" >}}

1. Create a microflow (called *ACO_Product*, which will serve as the update microflow) and configure it as an *After Commit* event handler of the target entity. This microflow ensures that the compound object is created and updated when the target object is created or changed.
1. To do so, retrieve the compound object with the above microflow and set its attributes, retrieving all related objects as needed:

    {{< figure src="/attachments/refguide/mobile/best-practices/compound-object-3.png" alt="Microflow that creates or updates an OfflineProduct object when a Product object changes" >}}

1. Create additional microflows as *After Commit* event handlers for all other entities that have attributes included in the compound object. These microflows ensure that the compound object is updated when the related object is changed:
    1. Create a list of compound objects to commit all changes in a single action.
    1. Traverse the associations with **Retrieve by Association** to get to the target entity. Use loops as needed.
    1. Retrieve the compound object for the product and add it to the initially created list.
    1. Change the compound object and update the attributes relating to the object from the microflow’s parameter.
    1. Commit the list of compound objects.
    1. Here is an example illustration for an entity that is nested 2 levels deep (**Store** → **StoreSection** → **Product**):

        {{< figure src="/attachments/refguide/mobile/best-practices/compound-object-4.png" alt="Microflow that creates or updates all OfflineProduct objects when an associated object of the Product object changes" >}}

1. Replace all usages of the target object and related objects with the compound object in your offline client.

## Recommendations

To improve your apps further, consult the following recommendations:

* The after commit event handlers used in the best practice can lead to performance issues if the target object or a related object changes frequently. In this case, use a designated update microflow instead of after commit event handlers.
* If associations to related objects can be empty, be sure to handle this in the update microflow — for example by using the expression `if ($Store=empty) then '-' else $Store/Name`.
* It is often useful for compound objects to store aggregate values, such as the number of related objects. These can be computed using the appropriate **List Aggregation** action in the update microflow.
* It is assumed that compound objects are not changed by the offline client. If this is needed, combine the compound object with a [Request Object](/refguide/mobile/best-practices/request-object/).
* Combine the compound object with [Incremental Synchronization](/refguide/mobile/best-practices/incremental-synchronization/) to further increase synchronization performance.

## Read More

* To increase the clarity, organization, and documentation of your apps, see [Mendix Best Practices for Development
](/refguide/dev-best-practices/)
