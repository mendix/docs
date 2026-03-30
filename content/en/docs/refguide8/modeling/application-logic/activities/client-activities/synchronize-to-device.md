---
title: "Synchronize to Device"
url: /refguide8/synchronize-to-device/
weight: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## Introduction

The **Synchronize to device** activity can be used to selectively synchronize one or more objects or lists to a device and store them in the offline database. It is meant to be used in offline apps and does nothing when used in online ones.

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/synchronize-to-device/synchronize-to-device-action.png" alt="Synchronize to device"   width="200"  class="no-border" >}}

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/synchronize-to-device/synchronize-to-device-action-properties.png" alt="Synchronize to device Properties" class="no-border" >}}

The **Synchronize to device** activity properties consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (…) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Object or List

A variable that refers to an object or a list to be synchronized.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}

## Limitations

When adding **Synchronize to device** to a microflow consider the following:

* Only persistable objects or lists of persistable objects that you use in your offline-first app can be synchronized.
* If the current user cannot access some of the objects due to access rules,
they will not be synchronized to a device. If the offline database already contains the same object, it will be removed.
* If the object to synchronize to a device is deleted in the same microflow,
**Synchronize to device** activity will remove it from the offline database, if found.
* Autocommitted and new objects get skipped.
* Synchronizing files is not allowed.
* It will only synchronize objects in a microflow that are called from a nanoflow, not from an event microflow.

## Remarks

When adding **Synchronize to device** to a microflow consider the following:

* This action should be used in combination with the [Nothing (preserve data)](/refguide8/offline-first/#customizable-synchronization) option to make sure your data is not cleared during a synchronize action.
* **Synchronize to device** action works in an append mode, it does not replace all data in the database.
Any existing data is kept and only objects that are sent to the client are affected.
* synchronizing the same object or list multiple times will synchronize it only once. The latest committed state will be synchronized.
* When synchronizing an already existing dirty object, dirty values are overridden and dirty status is cleaned.
But uncommitted changes are still available in the app until you rollback the object.
* **Synchronize to device** always overrides the existing data when the same object has been found in the database.
That means if **Synchronize to device** is used for offline objects that were changed and committed in offline,
all those changes will be lost and attributes of the affected objects will be reset to their runtime values.
* Uncommitted changes in a microflow for synchronized objects are sent to the client, but the objects rollback to their offline versions.
