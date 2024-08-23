---
title: "Synchronize"
url: /refguide/synchronize/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in nanoflows that run in an offline-first app (a native or offline PWA app).
{{% /alert %}}

## Introduction

The **Synchronize** activity can be used to synchronize your data between your device and the server.  The action has three modes, which are described below.

## Synchronization Modes

All three modes perform synchronization in two phases: upload and download. For more information, see the [Synchronization Behavior](#synchronization-behavior) section below and the [Synchronization types](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/) section of *Offline Synchronization*.

### All Objects {#all-objects}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/synchronize/synchronize.png" alt="Synchronize"   width="200"  class="no-border" >}}

The **All objects** mode synchronizes the entire local database. The server database is updated with the changes from the local database. The local database is updated with the latest data from the server, including the file contents.

The behavior of this mode can be configured through [synchronization configuration](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/#customizable-synchronization).

### Unsynchronized Objects {#unsynchronized-objects}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/synchronize/synchronize-unsynchronized-objects.png" alt="Synchronize"   width="200"  class="no-border" >}}

Using the **Unsynchronized objects** mode, all objects with changes committed to the offline database are synchronized. Information about objects deleted since the last synchronization is also sent to the server. For more information, see the [Synchronization Behavior](#synchronization-behavior) section below.

### Selected Objects {#selected-objects}

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/synchronize/synchronize-objects.png" alt="Synchronize"   width="200"  class="no-border" >}}

The **Selected object(s)** mode synchronizes objects partially, based on a selection:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/synchronize/synchronize-objects-selection.png" alt="Synchronize"   width="600"  class="no-border" >}}

Using this mode, only the selected objects or lists are synchronized. Deleted objects cannot be synchronized using selective synchronization. 

## Synchronization Behavior {#synchronization-behavior}

This section describes the behavior for the [Unsynchronized objects](#unsynchronized-objects) and [Selected object(s)](#selected-objects) modes.

{{% alert color="warning" %}}
The settings in [synchronization configuration](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/#customizable-synchronization) are not applied for the **Unsynchronized objects** and **Selected object(s)** modes.
{{% /alert %}}

In the **Selected object(s)** mode, if the set of objects selected for synchronization contains any objects that have not been committed yet, those objects will be skipped and thus not synchronized.

If the selected object has local changes, the following steps are performed:

1. The server database is updated with the changes from local database.
2. The local database is updated from the server database. This is useful in case the selected object has calculated attributes or has been modified in a before/after event handler microflow.

If the selected object originated from the server (not created on the device), and no longer exists on the server (or is inaccessible due to the access rules), the local changes are not applied and the object is removed from the local database. In this case the value of the variable in the nanoflow for that object becomes `empty`. The server stores the discarded changes in the `System.SynchronizationFailure` entity to prevent data loss.

If the set of objects selected for synchronization contains objects without local changes, synchronization updates the local copy from the server database. If there is an object that has been deleted from the server or is no longer accessible due to access rules, that object will be removed from the local database too.

## Properties

The **Synchronize** activity properties consists of the following sections:

* [Action](#action)
* [Common](#common)

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/synchronize/synchronize-properties.png" alt="Synchronize Action Properties"   width="300"  class="no-border" >}}

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Limitations {#limitations}

Running multiple synchronization processes at the same time is not supported, regardless of the synchronization mode.

If you try to trigger another synchronization process while the synchronization is in progress, the following error message will be shown: "Performing simultaneous synchronizations is not supported. Please try again after the current synchronization is completed."

Such an error can be handled in the nanoflow from which the synchronization attempt was triggered using [error handlers](/refguide/error-handling-in-nanoflows/#errorhandlers-nano).

## Read More

* [Activities](/refguide/activities/)
* [Offline Synchronization](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/)
