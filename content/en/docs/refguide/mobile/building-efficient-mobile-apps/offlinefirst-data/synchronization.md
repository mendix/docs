---
title: "Offline Synchronization"
url: /refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/
weight: 20
description: "Describes how and when synchronization occurs, and how to resolve sync errors."
aliases:
    - /refguide/mobile/using-mobile-capabilities/offlinefirst-data/synchronization/
---

## Introduction

Mendix automatically analyzes your app's data model to determine which entities should be synchronized based on the pages and nanoflows used within your offline navigation profile. In addition, the platform takes entity access into account so that only the data the user is allowed to access is synchronized.

Synchronization is automatically triggered during the following scenarios:

* The initial startup of your mobile app
* The first startup of your mobile app after your Mendix app is redeployed when the following conditions are matched:
    * There is a network connection
    * You are using a new Mendix version
    * The domain model used in the offline-first app has changed (note that the Mendix Client can sometimes optimize the process for certain domain model changes and will skip this automatic synchronization leading to a faster startup time)
* After the app user logs in or out (note that synchronization after log out does not synchronize the data of the logged-out user, but rather synchronizes the data for the anonymous user)

## Synchronization{#synchronization}

Synchronization can also be configured via different places in your Mendix app, for example:

* As an action on a button
* As an action in a nanoflow
* As a pull-down action on a list view (for native mobile only)

Synchronization is performed on the database level. This means if you synchronize while having some uncommitted changes for an object, the attribute values in local database will be synchronized, ignoring the uncommitted changes. Uncommitted changes are still available after a synchronization.

### Synchronization Types{#synchronization-types}

There are three different types of synchronization that can be triggered from the client:

* [Full synchronization](#full-sync)
* [Synchronize unsynchronized objects](#unsynchronized-objects)
* [Selective synchronization](#selective-sync)

#### Full Synchronization {#full-sync}

This mode performs both the upload and the download phases for all entities used in the offline-first app. You can customize the behavior of each entity with [customizable synchronization](#customizable-synchronization).

#### Synchronize Unsynchronized Objects {#unsynchronized-objects}

This type of synchronization can only be done through a **Synchronize** action inside a nanoflow. In this mode, all objects with changes committed to the offline database are synchronized. Information about objects deleted since the last synchronization is also sent to the server.

#### Selective Synchronization {#selective-sync}

Selective synchronization can only be done through a **Synchronize** action inside a nanoflow. In this mode, a specific set of objects will be synchronized. These objects can be either all unsynchronized objects when the [synchronize unsynchronized objects](/refguide/synchronize/#unsynchronized-objects) mode is selected, or a manually selected set of objects when the [synchronize selected object (or objects)](/refguide/synchronize/#selected-objects) mode is selected.

Deleted objects cannot be synchronized using selective synchronization.

Synchronization performed using a UI element (for example, a button or an on-change action) performs the full synchronization.

### Synchronization Phases

The synchronization process consists of two phases. In the [upload phase](#upload), your app updates the server database with the new or changed objects that are committed. In the [download phase](#download), your app updates its local database using data from the server database. Note that synchronization only works at the database level. That means that new uncommitted objects and attribute changes are not synchronized.

#### Upload Phase {#upload}

The upload phase executes the following operations:

1. <a id="upload-step-one"></a>As the local database can be modified only by committing or deleting an object, such an object can be either a new object created while offline or an existing object previously synced from the server. The upload phase detects which objects have been committed to the local database since the last sync. The detection logic differs per sync type. For **Synchronize all**, all committed objects in the local database are checked. For **Synchronize objects**, all committed objects from the list of selected objects are checked.
2. <a id="upload-step-two"></a>There might be objects deleted from the device database since the last sync. The upload phase checks which objects have been deleted.
3. <a id="upload-step-three"></a>If there are any changed or new file objects their content is uploaded to the server and stored there temporarily. Each file is uploaded in a separate network request. If a file upload fails, the whole sync is aborted without causing any changes to the server or device database.
4. <a id="upload-step-four"></a>All the changed and new objects are sent to the server, and the content of the files is linked to the objects. The server performs referential integrity validation of the objects (for more information, see the [Dangling References](#dangling-references) section below). The objects are committed to the server database. Information about deleted objects is also sent to the server so the server can delete them from its database too. This step is performed in a single network request.
5. <a id="upload-step-five"></a>Any configured before- or after-commit or before- or after-delete event handlers on these objects will run on the server as usual: after the data has been uploaded and before the device database is updated. 
    This means that any further changes you make to the synced objects in the event handlers will be applied to the device database during the download phase. There is one exception to this rule: changing the contents of a file entity is not applied when you attempt to change them in the event handlers.
    Before- and after-commit event handlers for new objects will also be executed.

#### Download Phase {#download}

If the upload phase was successful, the download phase starts in which the local database is updated with the newest data from the server database. The behavior of download phase differs per synchronization type:

* **Full synchronization** – A network request is made to the server per entity to retrieve the newest data from the server database. You can manage which entities are synchronized to the local database by customizing your app's synchronization behavior. For more details on this procedure, see the [Customizable Synchronization](#customizable-synchronization) section below. The download process also downloads the file entities' contents and saves that to your device storage. This process is incremental. The app only downloads the contents of a file object if the file has not been downloaded before, or if the file has been changed since it was last downloaded. The changed date attribute of the file entity is used to determine if the contents of a file object have changed.
* **Selective synchronization** – Only the objects selected for synchronization are synchronized to the local database. There are no extra network requests made to retrieve these objects. The objects are returned in the response of a network request made during the upload phase. If a file entity is selected for synchronization, its content is also updated on the device storage incrementally. The logic is the same in the full synchronization.

### After Synchronization

After synchronization is completed, the widgets on your app's current page will be refreshed to reflect the latest data. If the synchronization is triggered from a nanoflow, all nanoflow object/list variables are updated (uncommitted changes are still preserved).

Please note that a nanoflow object variable's value might become `empty` after synchronization, if the object is removed from the device during synchronization. This might happen under the following cases:

* The object is deleted on the server
* The current user does not have enough access to the object (defined by the security access rules)
* The entity is configured with an XPath constraint on the [customizable synchronization](#customizable-synchronization) screen, and the object no longer matches the specified XPath constraint
* The entity is configured with **Nothing (clear data)** option on the customizable synchronization screen
* The upload phase fails for the object—for example when a before commit event handler returns false, or committing fails due to violation of a unique validation

### Customizable Synchronization {#customizable-synchronization}

{{% alert color="warning" %}}
These settings are not applied for [selective synchronization](#selective-sync).
{{% /alert %}}

By default, Mendix automatically determines which objects need to be synchronized as mentioned in [Synchronization](#synchronization).

Depending on the use-case, more fine-grained synchronization controls might be required. Therefore, it is possible to change the synchronization mode for an entity. You can choose between the following options:

* **All Objects** – Download all objects applying the regular security constraints.
* **By XPath** – Only download the objects which match the [XPath Constraints](/refguide/xpath-constraints/) in addition to the regular security constraints. This means all previously synchronized objects that do not match the XPath constraint will be removed.
* **Nothing (clear data)** – Do not download any objects automatically, but do clear the data stored in the database for this entity when performing a synchronization (this can be useful in cases where the objects should only be uploaded, for example a `Feedback` entity).
* **Nothing (preserve data)** – Do not download any objects automatically, and do not clear the data stored in the database for this entity when performing a synchronization  (this can be useful in cases where you want have full control over the synchronization and should be used in combination with the [Synchronize to device](/refguide/synchronize-to-device/) or [Synchronize](/refguide/synchronize/) activity with specific objects selected).
* **Never** – When an entity is set to `Never`, its objects will not be synchronized between the runtime and the offline database during a Startup Synchronization, [Synchronize all Objects](/refguide/synchronize/#all-objects), or [Synchronize Unsynchronized Objects](/refguide/synchronize/#unsynchronized-objects). Alternatively, the objects can still be synchronized using [Synchronize to device](/refguide/synchronize-to-device/) or [Synchronize selected object (or objects)](/refguide/synchronize/#selected-objects), but you will be in control when and what is synchronized.

If you have custom widgets or JavaScript actions which use an entity that cannot be detected by Studio Pro in your offline-first profile (because its only used in the code), you can use customizable synchronization to include such entities.

{{< figure src="/attachments/refguide/mobile/offline-first/custom-synchronization-configs.png" alt="custom synchronization"   width="450"  class="no-border" >}}

### Limitations

Please be aware of the following limitation affecting synchronization: 

* Running multiple synchronization processes at the same time is not supported, regardless the of the type (**full** or **selective**). For more information, see the [Limitations](/refguide/synchronize/#limitations) section of the *Synchronize Guide*.
* An entity configured with the **Never** synchronization mode is not allowed to be associated with either of the following:
    * An entity that is not used in offline.
    * An entity that is configured with a synchronization mode other than **Never**.
* File and Image documents are not supported for entities configured with the **Never** synchronization mode.
* An entity configured with **Never** synchronization mode is not allowed to have generalization from either of the following:
    * An entity that is not used in offline.
    * An entity that is configured with a synchronization mode other than **Never**.
* Deleted objects configured with **Never** will be ignored during Startup Synchronization, [Synchronize all Objects](/refguide/synchronize/#all-objects), or [Synchronize Unsynchronized Objects](/refguide/synchronize/#unsynchronized-objects).
* If the offline database is reset (for example, because of a domain model change), all offline objects of entities configured with **Never** will be removed. To avoid data loss, only use the synchronization mode **Never** for objects you can recreate.

### Error Handling {#error-handling}

During synchronization, errors might occur. This section describes how Mendix handles these errors and how you can prevent them.

#### Network-Related Errors {#network-errors}

Synchronization requires a connection to the server, so during synchronization, errors may occur due to failing or poor network connections. Network errors may involve a dropped connection or a timeout. For native apps, there is no default timeout, and the timeout is determined by the platform and OS version.

The synchronization is atomic, which means that either everything or nothing is synchronized. Exceptions are described in the [Model- or Data-Related Errors](#othererrors) section below.

If a network error happens during the file upload (via [step 2 in the upload phase](#upload-step-two)), Mendix retries to upload the failed files. If there is an error for the second time, the synchronization is aborted. The changes at that moment are kept on the local device, so it can be retried later.

If a network error occurs while uploading the data (via [step 3 in the upload phase](#upload-step-three)), the data is kept on the local device and no changes are made on the server. Any files uploaded in [step 2](#upload-step-two) will be uploaded again during the next synchronization.

If a network error (such as a timeout) occurs after uploading the data (at [step 3 in the upload phase](#upload-step-three)), the data is kept on the local device. However, since the server has already started working on the request it will complete the request and commit the changes to server database. The device cannot distinguish whether the server processed the request or not, so the next synchronization attempt will contain the already-applied changes. In this case, the server will behave differently based on Mendix version. In Mendix Studio Pro 8.18 or below, the server will commit the same changes again, which might overwrite potential changes made by other users between the two synchronizations. From Studio Pro 8.18 and above this process is optimized and the server will not commit the same changes because they have been applied before.

If a network error occurs during the download phase, no data is updated on the device. Therefore the user can keep working or retry. The effects of the upload phase are not rolled back on the server.

If the synchronization is called from a nanoflow, the error can be handled using nanoflow error handling. In other cases (for example, if synchronization is called from a button or at startup), a message will be displayed to the user that the data could not be synchronized.

#### Model- or Data-Related Errors {#othererrors}

During the synchronization, changed and new objects are committed. An object's synchronization might encounter problems due to the following reasons:

* The object is no longer available on the server (either from deletion or inaccessibility due to access rules)
* A member of the object has become inaccessible due to access rules
* An error occurs during the execution of a before- or after-commit event microflow
* The object is not valid according to domain-level validation rules
* The object has a dangling reference (for more information, see the [Dangling References](#dangling-references) section below)

{{% alert color="warning" %}}When a synchronization error occurs because of one the reasons above, an object's commit is skipped, its changes are ignored, and references from other objects to it become invalid. Objects referencing such a skipped object (which are not triggering errors) will be synchronized normally. Such a situation is likely to be a modeling error and is logged on the server. To prevent data loss, the attribute values for such objects are stored in the `System.SynchronizationError` entity (since Mendix 8.12).  {{% /alert %}}

#### Broken or Missing File Contents

The client downloads the contents of file objects during synchronization. Errors may occur while downloading a file, such as:

* Missing file content on the server
* Generic error on the server while processing the file download request
* Connection-related issues (no connection, connection reset, and others)

In these cases, synchronization fails. When it fails due to a connection error the client can retry. If it fails for other reasons, such as broken file content, the root cause must be fixed.

{{% alert color="info" %}}
In Mendix Studio Pro, the client handles file download errors gracefully. Specifically, this means two things. 

Firstly, when a connection error occurs while downloading a file, the synchronization fails. The nanoflow or end-user can retry later when the connection is stable.

Secondly, the client will skip the file object and continue synchronization for any other error. The file object will not be available in the local database until the error's root cause is fixed, ensuring that the local database and file system is consistent. The client will also log the following trace log:

"Could not download the file content for the object with guid {OBJECT-GUID} due to an error. This may be due to broken file content on the server. Synchronization will continue and ignore this object."
{{% /alert %}}

#### Dangling References {#dangling-references}

During synchronization, the server performs referential integrity validation of the new or changed objects that are being synchronized to the server. This validation ensures that none of the synchronized objects have associations pointing to an object that exists only on the device. If an association does not satisfy this condition, it is a dangling reference.

For example, when a committed `City` object refers to an uncommitted `Country` object, synchronizing the `City` object alone will yield an invalid `Country` object reference, which will trigger a dangling reference error upon synchronization.

A dangling reference error is a modeling error.

To prevent dangling errors during selective synchronization, make sure that for every object selected for the sync any other referenced objects that have been created on the device but not yet synchronized are also selected for the sync. Alternatively, you can synchronize these objects first.

To prevent dangling reference errors during full synchronization, make sure both sides of the association are committed before synchronizing.

When some of the synchronized objects have dangling references, the server will synchronize all other objects except the ones with dangling references. For the objects with dangling references, the server will create a synchronization error and store it in the `System.SynchronizationError` entity. In such a situation you will see an error message like this:

```text
Synchronizing an object of type City with GUID {123} has failed due to a modelling error. The object has a reference to other objects (City_Country) that have not been synchronized to the runtime yet. This breaks referential integrity of the object because it references a non-existing object in the runtime database. Please make sure that you synchronize the referenced object together with the City or before synchronizing the City.
```

To prevent data loss, an error object contains a JSON representation of the data of an object that caused the error.
