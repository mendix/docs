---
title: "Compound Object"
url: /refguide/mobile/best-practices/compound-object
category: Mobile
weight: 40
description: "This pattern lets you combine multiple objects to improve synchronization performance."
tags: ["mobile", "best practices", "patterns", "offline-first", "synchronization"]
---

## Summary

This pattern lets you combine multiple objects to improve synchronization performance.

## Challenge

Synchronizing data that is spread across multiple entities requires each entity to be synchronized individually. This can lead to performance problems because of the amount of data that is transmitted and the complexity of the queries on the offline database.

## Solution

This can be countered by combining multiple objects into compound objects. It is then sufficient to synchronize to only the compound objects and ignore much of the complexity of the server’s database on the client.

## Implementation

1. Create a new entity (for example *OfflineProduct)* to store the compound object.
2. Add all attributes needed in the offline client, including those from related entities, to the compound object.
3. Create a 1-1 association between the compound object and the target object. Configure the association to delete the compound object on deleting the target object.

{{< figure src="/attachments/refguide/mobile/best-practices/compound-object-1.png" alt="Dialog with the on delete action set to delete" >}}

1. Create a Microflow (*SUB_CreateOrRetrieveOfflineProduct*) that retrieves and returns the compound object associated with the target object. If it does not exist, a new compound object is returned instead. For the new object, the association to the target object must be set.

{{< figure src="/attachments/refguide/mobile/best-practices/compound-object-2.png" alt="Microflow that creates or retrieves an OfflineProduct object" >}}

1. Create a Microflow (*ACO_Product* - the update Microflow) and configure it as an *After Commit* event handler of the target entity. This Microflow ensures that the compound object is created and updated when the target object is created or changed.
2. To do so, retrieve the compound object with above Microflow and set its attributes, retrieving all related objects as needed.

{{< figure src="/attachments/refguide/mobile/best-practices/compound-object-3.png" alt="Microflow that creates or updates an OfflineProduct object when a Product object changes" >}}


1. Create additional Microflows as *After Commit* event handlers for all other entities that have attributes included in the compound object. These Microflows ensure that the compound object is updated when the related object is changed.
    - Create a list of compound objects to commit all changes in a single action.
    - Traverse the associations with Retrieve by Association to get to the target entity. Use loops as needed.
    - Retrieve the compound object for the product and add it to the initially created list.
    - Change the compound object and update the attributes relating to the object from the Microflow’s parameter.
    - Commit the list of compound objects.
    - Below image shows an example for an entity that is nested 2 levels deep (Store → StoreSection → Product)

{{< figure src="/attachments/refguide/mobile/best-practices/compound-object-4.png" alt="Microflow that creates or updates all OfflineProduct objects when an assoicated object of the Product object changes" >}}

1. Replace all usages of the target object and related objects with the compound object in your offline client.

## Considerations

- The after commit event handlers used in the best practice can lead to performance issues if the target object or a related object changes frequently. In this case, use a designated update Microflow instead of after commit event handlers.
- If associations to related objects can be empty, ensure to handle this in the update Microflow, for example by using the expression `if ($Store=empty) then '-' else $Store/Name`.
- It is often useful for compound objects to store aggregate values, such as the number of related objects. These can be computed using the appropriate List Aggregation action in the update Microflow.
- It is assumed that compound objects are not changed by the offline client. If this is needed, combine the Compound Object with Request Object.
- Combined the Compound Object with Incremental Sync to increase synchronization performance further.