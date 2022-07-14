---
title: "Synchronize"
url: /refguide8/synchronize/
weight: 70
tags: ["studio pro", "synchronize", "offline", "client activity"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/synchronize.pdf).
{{% /alert %}}

{{% alert color="warning" %}}
This activity can only be used in **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The **Synchronize** activity can be used to synchronize your data between your device and the server.  The **Synchronize** action has two modes:

### 1.1 Synchronize All Objects

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/synchronize/synchronize.png" alt="Synchronize"   width="200"  >}}

This mode synchronizes the entire local database. The server database is updated with the changes from the local database. The local database is updated with the latest data from the server, including the file contents.

The behavior of this mode can be configured through [**Synchronization configuration**](/refguide8/offline-first/#customizable-synchronization).

### 1.2 Synchronize Selected Object(s)

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/synchronize/synchronize-objects.png" alt="Synchronize"   width="200"  >}}

This mode synchronizes objects partially, based on a selection:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/synchronize/synchronize-objects-selection.png" alt="Synchronize"   width="600"  >}}

With this mode, only the selected objects or lists are synchronized. The synchronization is bi-directional,
meaning both the server database and the local database is updated for the selected objects.

If the set of objects selected for synchronization contains any objects that have not been committed yet, those objects will be skipped and thus not synchronized.

If the selected object has local changes, the following steps are performed:

1. The server database is updated with the changes from local database.
1. The local database is updated from the server database. This is useful in case the selected object has calculated attributes or has been modified in a before/after event handler microflow.

If the selected object originated from the server (not created on the device), and no longer exists on the server (or is inaccessible due to the access rules), the local changes are not applied and the object is removed from the local database. In this case the value of the variable in the nanoflow for that object becomes `empty`. The server stores the discarded changes in the `System.SynchronizationFailure` entity to prevent data loss.

If the set of objects selected for synchronization contains objects without local changes, synchronization updates the local copy from the server database. If there is an object that has been deleted from the server or is no longer accessible due to access rules, that object will be removed from the local database too.

## 2 Properties

The **Synchronize** activity properties consists of the following sections:

* [Action](#action)

* [Common](#common)

	{{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/synchronize/synchronize-properties.png" alt="Synchronize Action Properties"   width="300"  >}}

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}

## 5 Limitations {#limitations}

Running multiple synchronization processes at the same time is not supported, regardless of the type (**full** or **selective**).

If you try to trigger another synchronization process while the synchronization is in progress, the following error message will be shown:

**Performing simultaneous synchronizations is not supported. Please try again after the current synchronization is completed.**

Such an error can be handled in the nanoflow from which the synchronization attempt was triggered using [error handlers](/refguide8/error-event/#errorhandlers).

## 6 Read More

* [Activities](/refguide8/activities/)
* [Offline-first](/refguide8/offline-first/)
