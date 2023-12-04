---
title: "Batch Synchronization"
url: /refguide/mobile/best-practices/batch-synchronization
category: Mobile
weight: 30
description: "This pattern lets you spread long synchronizations to multiple actions and present a progress to your users."
tags: ["mobile", "best practices", "patterns", "offline-first", "synchronization"]
---
## Summary

This pattern lets you spread long synchronizations to multiple actions and present a progress to your users.

## Challenge

When synchronizing objects in an offline-first application, no feedback is given to the user about the duration of the synchronization. This can be frustrating for users especially if the synchronization takes a long time.

## Solution

Batch synchronization lets you group large synchronization actions into smaller actions. These smaller actions can be tracked in the client to show progress when synchronizing all data.

## Implementation

1. Implement [Incremental Synchronization](/refguide/mobile/best-practices/incremental-synchronization) for the target entity.
2. Add a non-persistent entity to store the progress of your synchronization (for example, *SyncProgress* with an attribute *Progress* of type Integer).
3. Change the Microflow that retrieves and synchronizes the changed objects to accept an offset:
    1. Add a parameter *Offset* of type Integer.
    2. Set the offset of the retrieve to the parameter and the amount to a fixed value (for example, 100).
    3. Sort the results by *changedDate*.

{{< figure src="/attachments/refguide/mobile/best-practices/batch-synchronization-1.png" alt="Microflow that retrieves objects with offset" >}}

4. Create a Microflow that returns the count of changed objects for a given synchronization date:

{{< figure src="/attachments/refguide/mobile/best-practices/batch-synchronization-2.png" alt="Microflow that returns the count of changed objects for a given synchronization date" >}}

5. Change the Nanoflow that triggers the synchronization to use a loop to trigger the synchronization repeatedly and track its progress:
    1. Add a parameter of type *SyncProgress* to the Nanoflow.
    2. Call the Microflow to count the changed objects at the beginning.
    3. Create a variable *Offset* and initialize it with 0 after the Microflow call.
    4. Add a While Loop afterwards with condition *Offset <= Count* and place the call to the synchronization Microflow into the loop.
    5. Set the *Offset* variable as a parameter to the synchronization Microflow call.
    6. Add a *Change Variable* action after the synchronization Microflow call and set the *Offset* variable to `$Offset + 100` (adjust to your chosen batch size).
    7. Set *SyncProgress/Progress* to reflect the current progress: `round($Offset div $Count * 100)`

{{< figure src="/attachments/refguide/mobile/best-practices/batch-synchronization-3.png" alt="Nanoflow with a loop to trigger the synchronization" >}}

6. Create a Nanoflow *DS_SyncProgress* to create and return a new *SyncProgress* object.
7. Add a DataView around the button that triggers the synchronization and set its data source to the Nanoflow *DS_SyncProgress*.
8. Add a widget to show the value of *SyncProgress/Progress* into the DataView, such as a Progress Bar.

## Considerations

- For more complex synchronization scenarios that use multiple entities, it can be beneficial to create a separate synchronization page to show the progress of all synchronized entities and let users start and pause the synchronization as needed.
- The batch size should be between 100 and 10.000 objects. Larger batches tend to synchronize faster but smaller batches give more responsive feedback to users.
- If the data changes during the batch synchronization, the offset might run out of sync and result in incomplete synchronizations. Use this pattern only for data that changes infrequently and at times when users are not using the app. If overlap cannot be avoided, add a locking mechanism that prevents synchronization while the data is changing.

This pattern was developed by our MVP Marcel Groeneweg. You can watch him explain it in [this video](https://www.mendix.com/videos/lightning-fast-native-sync-for-large-data-sets/).