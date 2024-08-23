---
title: "Incremental Synchronization"
url: /refguide/mobile/best-practices/incremental-synchronization
weight: 20
description: "This pattern makes it possible to incrementally sync objects from the server to the device based on changed dates."
---

## Introduction

This pattern makes it possible to incrementally sync objects from the server to the device based on changed dates.

This pattern was developed by our MVP Marcel Groeneweg. You can watch him explain it in [this video](https://www.mendix.com/videos/lightning-fast-native-sync-for-large-data-sets/):

{{% vidyard dUhLAZukL7AU3JY43eUQ4Q %}}

## Challenge

The **All Objects** synchronization always sends all objects stored on the server to the mobile device, regardless of if these objects have been synchronized before and are unchanged. This can cause long wait times for larger data sets, due to the amount of data that needs to be transmitted every time the **Full Synchronization** action is triggered.

## Solution

Incremental synchronization lets you speed up synchronization by transmitting only objects with changes. It is achieved by enabling the **changedDate** attribute of the entity, and limiting the synchronization to objects where the **changedDate** is later than the date of the last synchronization. This way, large data sets can be kept synchronized with the offline database in a speedy manner (after the initial synchronization).

## Implementation

To implement this pattern, do the following:

1. Implement the [Deleted Flag](/refguide/mobile/best-practices/deleted-flag/) best practice for the target entity.
1. Enable **Store changedDate** for the target entity.
1. Add a new entity with an attribute to store the last synchronization date (for example, **SyncHelper/LastSyncDate**).
1. Set the default value for the synchronization date attribute to **1970-01-01**.
1. Set the synchronization mode of the **SyncHelper** entity to **Never**.
1. Create a microflow to trigger the incremental synchronization:
    1. Add a parameter of type **Date and time**.
    1. Retrieve all objects from the database that have a **changedDate** greater than the parameter.
    1. Synchronize these objects to the device:

    {{< figure src="/attachments/refguide/mobile/best-practices/incremental-synchronization-1.png" alt="Microflow that synchronizes all product objects changed after the last synchronization date" >}}

1. Create a nanoflow to initialize the SyncHelper:
    1. Retrieve the first **SyncHelper** object from the database and return it if it exists.
    1. Otherwise, create and commit a new **SyncHelper** object and return that:

    {{< figure src="/attachments/refguide/mobile/best-practices/incremental-synchronization-2.png" alt="Nanoflow that initializes the SyncHelper object" >}}

1. Create a nanoflow to trigger the incremental synchronization from the mobile device:
    1. Call the initialization nanoflow above to retrieve the SyncHelper.
    1. Call the synchronization microflow above with the parameter **SyncHelper/LastSyncDate** to trigger the synchronization.
    1. Retrieve the object with the latest **changedDate** from the database (retrieve the first object and sort by **changedDate descending**).
    1. Change and commit the SyncHelper to update **SyncHelper/LastSyncDate** to the **changedDate** of the retrieved object.
    1. Optionally, show a progress bar:

    {{< figure src="/attachments/refguide/mobile/best-practices/incremental-synchronization-3.png" alt="Nanoflow that triggers the synchronization microflow" >}}

## Recommendations

To improve your apps further, consult the following recommendations:

* Incremental synchronization does not speed up an app's initial synchronization.
* If you are using this best practice for multiple entities, you can track the individual synchronization dates as different attributes of the **SyncHelper** object.
* The **SyncHelper** object is best stored in the offline database using synchronization mode **Never**.This way, it is cleared when the database is reset to trigger a full synchronization afterwards.
* Instead of using a **SyncHelper**, it is also possible to retrieve the most recent **changedDate** from the offline database. However, this can lead to issues when committing and synchronizing a change from the offline device.

## Read More

* To increase the clarity, organization, and documentation of your apps, see [Mendix Best Practices for Development
](/refguide/dev-best-practices/)
