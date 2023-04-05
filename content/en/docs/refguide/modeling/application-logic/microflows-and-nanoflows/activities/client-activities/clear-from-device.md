---
title: "Clear from device"
url: /refguide/clear-from-device/
weight: 70
tags: ["studio pro", "clear from device", "offline", "client activity"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Nanoflows** that run in an offline-first app (a native or offline PWA app).
{{% /alert %}}

## 1 Introduction

The **Clear from device** activity can be used to clear all objects of a persistable **entity** only from the local database of a device but these objects are not going to be deleted from the server after synchronization.

## 2 Properties
An example of clearing entity objects from local database is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/clear-from-device/clear-from-device-properties.png" >}}

This activity can only be used with offline persistable entities.

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The clear from device activity properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the nanoflow or right-clicking the activity and selecting **Properties**.

### 3.1 Entity

The entity that you want to clear all its objects from the local database of the device.

{{% alert color="info" %}}
If the entity data are downloaded from the server, the cleared objects will be restored with the latest state they had on the runtime.
{{% /alert %}}

## 4 Common Section{#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## 5 Limitations

* Deleting non-persistable objects is not supported
* If the entity passed to the activity has any associations with other entities in the domain model, the associated objects will keep the references of the deleted objects
* When you create/update an object in the client and do not synchronize it, the runtime database is not aware of that change until you synchronize it
  * clearing the entity of such an object removes it from the device and does not synchronize it to the runtime, so the runtime database will not be aware of the "cleared" not synchronized state of the object.
