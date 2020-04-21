---
title: "Sync to device"
parent: "client-activities"
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can only be used in microflows.
{{% /alert %}}

## 1 Introduction

A *Sync to device* activity can be used to selectively sync
one or more objects or lists to a device and store them in the offline database.
It is meant to be used from offline apps and does nothing when used in online apps.

## 2 Properties

### 2.1 Object or list

A variable that refers to an object or a list to be synced.

## 3 Limitations

* Only persistable objects or lists of persistable objects can be synced.
* If the current user can't access some of the objects due to access rules,
they will not be synced to a device. If the offline database already contains the same object, it will be removed.
* If the object to synchronize to a device is deleted in the same microflow,
sync to device activity will remove it from the offline database, if found.
* Autocommited and new objects get skipped.
* Syncing files is not allowed.

## 4 Remarks

* Sync to device action works in append mode, it does not replace all data in the database.
Any existing data is kept and only objects that are sent to the client are affected.
* Syncing the same object or list multiple times will sync it only once. The latest commited state will be synced.
* When syncing an already existing dirty object, dirty values are overridden and dirty status is cleaned.
But uncommitted changes are still available in the app until you rollback the object.
* Sync to device always overrides the existing data when the same object has been found in the database.
That means if sync to device is used for offline objects that were changed and commited in offline,
all those changes will be lost and attributes of the affected objects will be reset to their runtime values.
* Uncommitted changes in a microflow for synced objects are sent to the client, but the objects rollback to their offline versions.

