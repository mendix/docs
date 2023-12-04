---
title: "Incremental Synchronization"
url: /refguide/mobile/best-practices/incremental-synchronization
category: Mobile
weight: 20
description: "This patterns makes it possible to incrementally sync objects from the server to the device based on changed dates."
tags: ["mobile", "best practices", "patterns", "offline-first", "synchronization"]
---
## Summary

This patterns makes it possible to incrementally sync objects from the server to the device based on changed dates.

## Challenge

The *All Objects* synchronization always sends all objects stored on the server to the mobile device, independent of whether these objects have been synchronized before and are unchanged. This can cause long wait times for larger data sets because of the amount of data that needs to be transmitted every time the *Full Synchronization* action is triggered.

## Solution

Incremental synchronization lets you speed up synchronization by transmitting only objects with changes. It is achieved by enabling the *changedDate* attribute of the entity and limiting the synchronization to objects where the changedDate is later than the date of the last synchronization. This way, large data sets can be kept synchronized with the offline database in a speedy manner (after the initial synchronization).

## Implementation

1. Implement the Deleted Flag (see above) for the target entity.
2. Enable *Store ‘changedDate’* for the target entity.
3. Add a new entity with an attribute to store the last synchronization date (for example, *SyncHelper/LastSyncDate*).
4. Set the default value for the synchronization date attribute to *1970-01-01*.
5. Set the synchronization mode of the *SyncHelper* entity to *Never*.
6. Create a Microflow to trigger the incremental synchronization:
    1. Add a Parameter of type *Date and time.*
    2. Retrieve all objects from the database that have a *changedDate* greater than the parameter.
    3. Synchronize these objects to the device.

{{< figure src="/attachments/refguide/mobile/best-practices/incremental-synchronization-1.png" alt="Microflow that synchronizes all product objects changed after the last synchronization date" >}}

1. Create a Nanoflow **to initialize the *SyncHelper*:
    1. Retrieve the first *SyncHelper* object from the database and return it if it exists.
    2. Otherwise, create and commit a new *SyncHelper* object and return that.

{{< figure src="/attachments/refguide/mobile/best-practices/incremental-synchronization-2.png" alt="Nanoflow that initiatlizes the SyncHelper object" >}}

1. Create a Nanoflow to trigger the incremental synchronization from the mobile device.
    1. Call the initialization Nanoflow above to retrieve the SyncHelper.
    2. Call the synchronization Microflow above with the parameter *SyncHelper/LastSyncDate* to trigger the synchronization.
    3. Retrieve the object with the latest *changedDate* from the database (Retrieve the first object and sort by changedDate descending).
    4. Change and commit the SyncHelper to update *SyncHelper/LastSyncDate* to the *changedDate* of the retrieved object.
    5. Optionally: show a progress bar.

{{< figure src="/attachments/refguide/mobile/best-practices/incremental-synchronization-3.png" alt="Nanoflow that triggers the synchronization Microflow" >}}

## Considerations

- Incremental Sync does not speed up the initial synchronization.
- If you are using this pattern for multiple entities, you can track the individual synchronization dates as different attributes of the SyncHelper object.
- The *SyncHelper* object is best stored in the offline database using synchronization mode *Never* because this way it is cleared when the database is reset to trigger a full synchronization afterwards.
- Instead of using a *SyncHelper* it is also possible to retrieve the most recent changeDate from the offline database. This can, however, lead to issues when committing and synchronizing a change from the offline client.
