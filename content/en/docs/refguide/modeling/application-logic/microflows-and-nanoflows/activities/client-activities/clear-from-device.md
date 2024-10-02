---
title: "Clear from Device"
url: /refguide/clear-from-device/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in Nanoflows that run in an offline-first app (a native or offline PWA app).

This activity can only be used with offline [persistable entities](/refguide/persistability/).
{{% /alert %}}

## Introduction

The **Clear from device** activity can be used to clear all objects of a [persistable entity](/refguide/persistability/) only from the local database of a device but these objects are not going to be deleted from the server after synchronization.

{{% alert color="info" %}}
If the entity is synchronized after clearing, the objects are downloaded from the Mendix Runtime again.
{{% /alert %}}

{{% alert color="warning" %}}
Objects with unsynchronized changes are also removed without synchronizing them. To avoid data loss, it is recommended to run [Synchronize unsynchronized objects](/refguide/synchronize/#unsynchronized-objects) before running this activity.
{{% /alert %}}

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/clear-from-device/clear-from-device-properties.png" class="no-border" >}}

The **Clear from device** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Entity

The entity that you want to clear all its objects from the local database of the device.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Limitations

* Deleting non-persistable objects is not supported.
* If the entity passed to the activity has any associations with other entities in the domain model, the associated objects will keep the references of the deleted objects.
* When you create/update an object in the client and do not synchronize it, the Runtime database is not aware of that change until you synchronize it.
    * Clearing the entity of such an object removes it from the device and does not synchronize it to the Runtime, so the Runtime database will not be aware of the "cleared" not synchronized state of the object.
