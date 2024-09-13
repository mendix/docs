---
title: "Batch Synchronization"
url: /refguide/mobile/best-practices/batch-synchronization
weight: 30
description: "This pattern lets you spread long synchronizations to multiple actions and present a progress to your users."
---

## Introduction

This pattern lets you spread long synchronizations to multiple actions and present a progress to your users.

This pattern was developed by our MVP Marcel Groeneweg. You can watch him explain it in [this video](https://www.mendix.com/videos/lightning-fast-native-sync-for-large-data-sets/):

{{% vidyard dUhLAZukL7AU3JY43eUQ4Q %}}

## Challenge

When synchronizing objects in an offline-first application, no feedback is given to the user about the duration of the synchronization. This can be frustrating for users if the synchronization takes a long time.

## Solution

Batch synchronization lets you group large synchronization actions into smaller actions. These smaller actions can be tracked in the client to show progress when synchronizing all data. This increases the user's sense of understanding and control while using your app.

## Implementation

To implement this best practice, do the following:

1. Implement [incremental synchronization](/refguide/mobile/best-practices/incremental-synchronization/) for the target entity.
1. Add a non-persistent entity to store the progress of your synchronization (for example, *SyncProgress* with an attribute **Progress** of type `Integer`).
1. Change the microflow that retrieves and synchronizes the changed objects to accept an offset:
    1. Add a parameter **Offset** of type `Integer`.
    1. Set the offset of the retrieve to the parameter and the amount to a fixed value (for example, `100`).
    1. Sort the results by **changedDate**.

    {{< figure src="/attachments/refguide/mobile/best-practices/batch-synchronization-1.png" alt="Microflow that retrieves objects with offset" >}}

1. Create a microflow that returns the count of changed objects for a given synchronization date:

    {{< figure src="/attachments/refguide/mobile/best-practices/batch-synchronization-2.png" alt="Microflow that returns the count of changed objects for a given synchronization date" >}}

1. Change the nanoflow that triggers the synchronization to use a loop to trigger the synchronization repeatedly and track its progress:
    1. Add a parameter of type `SyncProgress` to the nanoflow.
    1. Call the microflow to count the changed objects at the beginning.
    1. Create a variable *Offset* and initialize it with 0 after the microflow call.
    1. Add a **While Loop** afterwards with condition **Offset <= Count** and place the call to the synchronization microflow into the loop.
    1. Set the `Offset` variable as a parameter to the synchronization microflow call.
    1. Add a **Change Variable** action after the synchronization Microflow call and set the `Offset` variable to `$Offset + 100` (adjust to your chosen batch size).
    1. Set **SyncProgress/Progress** to reflect the current progress: `round($Offset div $Count * 100)`

    {{< figure src="/attachments/refguide/mobile/best-practices/batch-synchronization-3.png" alt="Nanoflow with a loop to trigger the synchronization" >}}

1. Create a nanoflow called *DS_SyncProgress* to create and return a new `SyncProgress` object.
1. Add a data view around the button that triggers the synchronization and set its data source to the nanoflow **DS_SyncProgress**.
1. Add a widget to show the value of **SyncProgress/Progress** into the data view, such as a [progress bar](/appstore/widgets/progress-bar/).

## Recommendations

To improve your apps further, consult the following recommendations:

* For more complex synchronization scenarios that use multiple entities, create a separate synchronization page to show the progress of all synchronized entities. This lets users start and pause the synchronization as needed.
* Batch size should be between 100 and 10,000 objects. Larger batches tend to synchronize faster, but smaller batches give more responsive feedback to users.
* If the data changes during the batch synchronization, then the offset might run out of sync resulting in incomplete synchronizations. Use this pattern only for data that changes infrequently when users are not using the app. If overlap cannot be avoided, add a locking mechanism that prevents synchronization while the data is changing.

## Read More

* To increase the clarity, organization, and documentation of your apps, see [Mendix Best Practices for Development
](/refguide/dev-best-practices/)
