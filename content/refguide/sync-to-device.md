---
title: "Sync to Device"
parent: "client-activities"
tags: ["studio pro", "sync to device", "client activities"]
menu_order: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Sync to device** activity can be used to selectively sync one or more objects or lists to a device and store them in the offline database. It is meant to be used in offline apps and does nothing when used in online ones.

{{% image_container width="200" %}}
![Sync to Device](attachments/client-activities/sync-to-device.png)
{{% /image_container %}}

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

![Sync to Device Properties](attachments/client-activities/sync-to-device-properties.png)

The **Sync to device** activity properties consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (…) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Object or List

A variable that refers to an object or a list to be synced.

## 4 Common Section {#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}

## 5 Limitations

When adding **Sync to device** to a microflow consider the following:

* Only persistable objects or lists of persistable objects can be synced.
* If the current user cannot access some of the objects due to access rules,
they will not be synced to a device. If the offline database already contains the same object, it will be removed.
* If the object to synchronize to a device is deleted in the same microflow,
sync to device activity will remove it from the offline database, if found.
* Autocommited and new objects get skipped.
* Syncing files is not allowed.

## 6 Remarks

When adding **Sync to device** to a microflow consider the following:

* This action should be used in combination with the [**Nothing (preserve data)**](offline-first#customizable-synchronization) option to make sure your data is not cleared during a synchronize action
* Sync to device action works in an append mode, it does not replace all data in the database.
Any existing data is kept and only objects that are sent to the client are affected.
* Syncing the same object or list multiple times will sync it only once. The latest commited state will be synced.
* When syncing an already existing dirty object, dirty values are overridden and dirty status is cleaned.
But uncommitted changes are still available in the app until you rollback the object.
* **Sync to device** always overrides the existing data when the same object has been found in the database.
That means if **Sync to device** is used for offline objects that were changed and commited in offline,
all those changes will be lost and attributes of the affected objects will be reset to their runtime values.
* Uncommitted changes in a microflow for synced objects are sent to the client, but the objects rollback to their offline versions.

