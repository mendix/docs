---
title: "Offline-First"
url: /refguide8/offline-first/
weight: 30
---

## Introduction

Offline-first applications work regardless of the connection in order to provide a continuous experience. Pages and logic interact with an offline database on the device itself, and data is synchronized with the server. This results in a snappier UI, increased reliability, and improved device battery life.

{{% alert color="info" %}}
It is important to understand that offline-first is an architectural concept and not an approach based on the network state of the device. Offline-first apps do not rely on a connection, but they can use connections (for example, you can call microflows, use a Google Maps widget, or use push notifications).
{{% /alert %}}

Mendix supports building offline-first applications for [native mobile](/refguide8/native-mobile/) and [hybrid mobile](/refguide8/hybrid-mobile/) apps. Both native and hybrid apps share the same core, and this gives them the same offline-first capabilities. Native mobile apps are always offline-first, but for hybrid mobile apps, it depends on the navigation profile that is configured. The data is stored on the device in a local database, and the files are stored on the file storage of the device.

Mendix Studio Pro performs validations to make sure your app follows an offline-first approach and works even when there is no connection.

During development, the [Make It Native 8 app](/refguide8/getting-the-make-it-native-app/) (for native mobile apps) or [Mendix Developer App](/refguide8/getting-the-mendix-app/) (for hybrid mobile apps) can be used to preview and test your Mendix app on a device. The first time your Mendix app is loaded, an internet connection will be required to create a session on the server and download the necessary data and resources. After this initial synchronization, data will remain available in the app even without an internet connection. Subsequent synchronizations will be performed when requested by the user, through application logic or after a model change.

## Synchronization{#synchronization}

Mendix automatically analyzes your app's data model to determine which entities should be synchronized based on the pages and nanoflows used within your offline navigation profile. In addition, the platform takes entity access into account so that only the data the user is allowed to access is synchronized.

Synchronization is automatically triggered during the following scenarios:

* The initial startup of your mobile app
* The first startup of your mobile app after your Mendix app is redeployed when the following conditions are matched:
* There is a network connection
* You are using a new Mendix version or the domain model used in the offline-first app has changed
* After the app user logs in or out

Synchronization can also be configured via different places in your Mendix app, for example:

* As an action on a button
* As an action in a nanoflow
* As a pull-down action on a list view (for native mobile only)

Synchronization is performed on the database level. This means if you synchronize while having some uncommitted changes for an object, the attribute values in local database will be synchronized, ignoring the uncommitted changes. Uncommitted changes are still available after a synchronization.

### Synchronization Types

You can perform synchronization on two levels:

* [Full synchronization](#full-sync)
* [Selective synchronization](#selective-sync)

#### Full Synchronization {#full-sync}

This mode performs both the upload and the download phases for all entities used in the offline-first app. You can customize the behavior of each entity with [customizable synchronization](#customizable-synchronization).

#### Selective Synchronization {#selective-sync}

This mode allows you to select specific objects to synchronize.

Selective synchronization can only be done through a **Synchronize** action inside a nanoflow. Synchronization performed using a UI element (for example a button, an onchange action, or other elements) performs the full synchronization.

### Synchronization Phases

The synchronization process consists of two phases. In the [upload phase](#upload), your app updates the server database with the new or changed objects that are committed. In the [download phase](#download), your app updates its local database using data from the server database. Note that synchronization only works at the database level. That means that new uncommitted objects and attribute changes are not synchronized.

#### Upload Phase {#upload}

The upload phase executes the following operations:

1. As the local database can be modified only by committing or deleting an object, such an object can be either a new object created while offline or an existing object previously synced from the server. The upload phase detects which objects have been committed to the local database since the last sync. The detection logic differs per sync type. For **Synchronize all**, all committed objects in the local database are checked. For **Synchronize objects**, all committed objects from the list of selected objects are checked.
2. <a id="steptwo"></a>If there are any changed or new file objects their content is uploaded to the server and stored there temporarily. Each file is uploaded in a separate network request. If a file upload fails, the whole sync is aborted without causing any changes to the server or device database.
3. <a id="stepthree"></a>All the changed and new objects are sent to the server, and the content of the files is linked to the objects. The server performs referential integrity validation of the objects (for more information, see the [Dangling References](#dangling-references) section below). The objects are committed to the server database. This step is performed in a single network request.
4. Any configured before- or after-commit or before- or after-delete event handlers on these objects will run on the server as usual: after the data has been uploaded and before the device database is updated.
    This means that any further changes you make to the synced objects in the event handlers will be applied to the device database during the download phase. There is one exception to this rule: changing the contents of a file entity is not applied when you attempt to change them in the event handlers.
    Before- and after-commit event handlers for new objects will also be executed.

#### Download Phase {#download}

If the upload phase was successful, the download phase starts in which the local database is updated with the newest data from the server database. The behavior of download phase differs per synchronization type.

**Full synchronization** — A network request is made to the server per entity to retrieve the newest data from the server database. You can manage which entities are synchronized to the local database by customizing your app's synchronization behavior. For more details on this procedure, see the [Customizable Synchronization](#customizable-synchronization) section below. The download process also downloads the file entities' contents and saves that to your device storage. This process is incremental. The app only downloads the contents of a file object if the file has not been downloaded before, or if the file has been changed since it was last downloaded. The changed date attribute of the file entity is used to determine if the contents of a file object have changed.

**Selective synchronization** — Only the objects selected for synchronization are synchronized to the local database. There are no extra network requests made to retrieve these objects. The objects are returned in the response of a network request made during the upload phase. If a file entity is selected for synchronization, its content is also updated on the device storage incrementally. The logic is the same with the full synchronization.

### After Synchronization

After synchronization is completed, the widgets on your app's current page will be refreshed to reflect the latest data. If the synchronization is triggered from a nanoflow, all nanoflow object/list variables are updated (uncommitted changes are still preserved).

Please note that a nanoflow object variable's value might become `empty` after synchronization, if the object is removed from the device during synchronization. This might happen under the following cases:

* The object is deleted on the server
* The current user does not have enough access to the object (defined by the security access rules)
* The entity is configured with an XPath constraint on the [customizable synchronization](#customizable-synchronization) screen, and the object no longer matches the specified XPath constraint
* The entity is configured with **Nothing (clear data)** option on the customizable synchronization screen
* The upload phase fails for the object, for example when before commit event handler returns false or committing fails due to violation of an unique validation

### Customizable Synchronization {#customizable-synchronization}

{{% alert color="warning" %}}
These settings are not applied for [selective synchronization](#selective-sync).
{{% /alert %}}

By default, Mendix automatically determines which objects need to be synchronized as mentioned in [Synchronization](#synchronization).

Depending on the use-case, more fine-grained synchronization controls might be required. Therefore, it is possible to change the download behavior for an entity. You can choose between the following options:

* **All Objects** — download all objects applying the regular security constraints
* **By XPath** — only download the objects which match the [XPath Constraints](/refguide8/xpath-constraints/) in addition to the regular security constraints. This means all previously synchronized objects that do not match the XPath constraint will be removed.
* **Nothing (clear data)** — do not download any objects automatically, but do clear the data stored in the database for this entity when performing a synchronization (this can be useful in cases where the objects should only be uploaded, for example a `Feedback` entity)
* **Nothing (preserve data)** — do not download any objects automatically, and do not clear the data stored in the database for this entity when performing a synchronization  (this can be useful in cases where you want have full control over the synchronization and should be used in combination with the [Synchronize to device](/refguide8/synchronize-to-device/) or [Synchronize](/refguide8/synchronize/) activity with specific objects selected)

If you have custom widgets or JavaScript actions which use an entity that cannot be detected by Studio Pro in your offline-first profile (because its only used in the code), you can use customizable synchronization to include such entities.

{{< figure src="/attachments/refguide8/mobile/offline-first/custom-sync.png" alt="custom synchronization"   width="450"  class="no-border" >}}

### Limitations

Running multiple synchronization processes at the same time is not supported, regardless the of the type (**full** or **selective**). For more information, see the [Limitations](/refguide8/synchronize/#limitations) section of the *Synchronize Reference Guide*.

### Error Handling {#error-handling}

During synchronization, errors might occur. This section describes how Mendix handles these errors and how you can prevent them.

#### Network-Related Errors {#network-errors}

Synchronization requires a connection to the server, so during synchronization, errors may occur due to failing or poor network connections. Network errors may involve a dropped connection or a timeout. By default, the timeout for synchronization is 30 seconds per network request for hybrid mobile apps. For native apps, there is no default timeout, and the timeout is determined by the platform and OS version.

The synchronization is atomic, which means that either everything or nothing is synchronized. Exceptions are described in the [Model- or Data-Related Errors](#othererrors) section below.

If a network error happens during the file upload (via [step 2 in the upload phase](#steptwo)), Mendix tries to upload the failed files again. If there is an error for the second time, the synchronization is aborted. The changes at that moment are kept on the local device, so it can be retried later.

If a network error occurs while uploading the data (via [step 3 in the upload phase](#stepthree)), the data is kept on the local device and no changes are made on the server. Any files uploaded in [step 2](#steptwo) will be uploaded again during the next synchronization.

If a network error occurs (such as a timeout) after uploading the data (at [step 3 in the upload phase](#stepthree)), the data is kept on the local device. However, since the server has already started working on the request it will complete the request and commit the changes to server database. The device can not distinguish whether the server processed the request or not, so the next synchronization attempt will contain the already-applied changes. In this case, the server will behave differently based on Mendix version. In Mendix Studio Pro 8.18 or below, the server will commit the same changes again, which might overwrite potential changes made by other users between the two synchronizations. From Studio Pro 8.18 and above this process is optimized and the server will not commit the same changes because they have been applied before.

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

#### Dangling References {#dangling-references}

During synchronization the server performs referential integrity validation of the new or changed objects that are being synchronized to the server. This validation ensures that none of the synchronized objects have associations pointing to an object that exists only on the device. If an association does not satisfy this condition, it is a dangling reference.

For example, when a committed `City` object refers to an uncommitted `Country` object, synchronizing the `City` object alone will yield an invalid `Country` object reference, which will trigger a dangling reference error upon synchronization.

A dangling reference error is a modeling error.

To prevent dangling errors during selective synchronization, make sure that for every object selected for the sync any other referenced objects that have been created on the device but not yet synchronized are also selected for the sync. Alternatively, you can synchronize these objects first.

To prevent dangling reference errors during full synchronization, make sure both sides of the association are committed before synchronizing.

When some of the synchronized objects have dangling references, the server will synchronize all other objects except the ones with dangling references. For the objects with dangling references, the server will create a synchronization error and store it in the `System.SynchronizationError` entity. In such a situation you will see an error message like this:

```text
Synchronizing an object of type City with GUID {123} has failed due to a modelling error. The object has a reference to other objects (City_Country) that have not been synchronized to the runtime yet. This breaks referential integrity of the object because it references a non-existing object in the runtime database. Please make sure that you synchronize the referenced object together with the City or before synchronizing the City.
```

To prevent data loss, an error object contains a JSON representation of the data of an object that caused the error.

### Preventing Synchronization Issues {#prevent-sync-issues}

To avoid the problems mentioned above, Mendix suggests following these best practices:

* Do not remove, rename, or change the type of entities or their attributes in offline apps after your initial release — this may cause objects or values to be no longer accessible to offline users (if needed, you can do an "in-between" release that is still backwards-compatible, and then make the changes in the next release after all the apps are synchronized)
* Do not delete objects which can be synced to offline users (this will result in lost changes on those objects when attempted to synchronize them)
* Avoid using domain-level validation for offline entities – use nanoflows or input validation instead (it is also a good practice to validate again on the server using microflows)
* When committing objects that are being referenced by other objects, make sure the other objects are also committed

If synchronization is triggered using a synchronize action in a nanoflow and an error occurs, it is possible to handle the error gracefully using the nanoflow error handling.

### Conflict Resolution {#conflict-res}

It can happen that multiple users synchronize the same state of an object on their device, change it, and then synchronize this object back to the server. In this case, the last synchronization overwrites the entire content of the object on the server. This is also called a "last wins" approach.

If another approach is needed, conflicts can be detected in a before-commit microflow (for example, by using a revision ID attribute on the entity). Based on that, custom conflict resolution can be performed.

## Best Practices {#best-practices}

To ensure the best user experience for your Mendix application, follow these best practices:

* Limit the amount of data that will be synchronized by customizing the synchronization configuration or security access rules
* Because network connections can be slow and unreliable and mobile devices often have limited storage, avoid synchronizing large files or images (for example, by limiting the size of photos)
* Try to synchronize through a nanoflow instead of a UI element so you can add error handling to the synchronization activity which can handle cases when synchronization fails (connection errors, model and data related errors, and more)
* Synchronize large files or images using selective synchronization
* Use an `isDeleted` Boolean attribute for delete functionality so that conflicts can be handled correctly on the server
* Use before- and after-commit microflows to pre- or post-process data.
* Use a [microflow call](/refguide8/microflow-call/) in your nanoflows to perform additional server-side logic such as retrieving data from a REST service, or accessing and using complex logic such as Java actions.
* Help your user remember to synchronize their data so it is processed as soon as possible: you can check for connectivity and automatically synchronize in the nanoflow that commits your object, or remind a user to synchronize while using a notification or before signing out to ensure no data is lost

## Ensuring Your App Is Offline-First {#limitations}

Mendix helps developers in building rich offline-first apps. However, there are some limitations.

### Microflows {#microflows}

Microflows can be called from offline apps by using [microflow call](/refguide8/microflow-call/) action in your nanoflows to perform logic on the server. However, it works a bit different from when used in online profiles, these differences are explained below:

#### Microflow Arguments Type

* Passing an object or a list of a persistable entity is not supported.
* Passing an object or a list of a non-persistable entity that has an association with a persistable entity is not supported (such an association can be an indirect association).
* Passing a non-persistable entity that was created in another microflow is not supported

#### UI Actions

UI-related actions will be ignored and will not have any effect. We encourage you to model such UI-side effects in the caller nanoflow.

These actions are as the following:

* [Show message](/refguide8/show-message/)
* [Show validation message](/refguide8/validation-feedback/)
* [Show home page](/refguide8/show-home-page/)
* [Show page](/refguide8/show-page/)
* [Close page](/refguide8/close-page/)
* [Download file](/refguide8/download-file/)

#### Object Side-Effects

Changes to persistable objects made in a microflow will not be reflected on the client unless you synchronize. Non-persistable objects must be returned in order for changes to be reflected.

#### Microflow Return Value

* Returning an object or a list of persistable entity is not supported.
* Returning an object or a list of a non-persistable entity that has an association with a persistable entity is not supported (such association can be an indirect association).

#### Language Switching

To be able to switch the language of a Mendix app, a device must be online and have access to the Mendix runtime. For more information on the runtime, see the [Runtime Reference Guide](/refguide8/runtime/).

### Offline Microflow Best Practices {#offline-mf-best-practices}

To make microflow calls work from offline-first apps, Mendix stores some microflow information in the offline app. That information is called from the app. This means that changes to microflows used from offline apps must be backwards-compatible, because there can be older apps which have not received an over the air update yet. All microflow calls from such a device will still contain the old microflow call configuration in nanoflows, which means that the request might fail. For more information on over-the-air updates, see [How to Use Over the Air Updates](/howto8/mobile/how-to-ota/).

To avoid backwards-compatibility errors in offline microflow calls after the initial release, Mendix suggests these best practices:

* Do not rename microflows or move them to different modules
* Do not rename modules that contain microflows called from offline apps
* Do not add, remove, rename, or change types of microflow parameters
* Do not change return types
* Do not delete a microflow before making sure that all devices have received an update

If you want to deviate from the practices outlined above, introduce a new microflow. You can change the contents of the microflow, but keep in mind that older apps might call the new version of the microflow until they are updated.

### Autonumbers and Calculated Attributes {#autonumbers}

Both autonumbers and calculated attributes require input from the server; therefore, they are not allowed. Objects with these attribute types can still be viewed and created offline, but the attributes themselves cannot be displayed.

### Default Attribute Values {#default-attributive}

Default attribute values for entities in the domain model do not have any effect on objects created offline. Boolean attributes will always default to `false`, numeric attributes to `0`, and other attributes to `empty`.

### Many-to-Many Associations {#many-to-many}

Many-to-many associations are not supported. A common alternative is to introduce a third entity that has one-to-many associations with the other entities.

### Inheritance {#inheritance}

It is not possible to use more than one entity from a generalization or specialization relation. For example if you have an `Animal` entity and a `Dog` specialization, you can use either use `Animal` or `Dog`, but not both from your offline profile. An alternative pattern is to use composition (for example, object associations).

### System Members {#system-members}

System members (`createdDate`, `changedDate`, `owner`, `changedBy`) are not supported.

### Excel and CSV Export {#excel-cv}

Excel and CSV export are not available in offline applications.

### Hashed String Attributes {#hashed-strings}

Attributes with the hashed string [attribute type](/refguide8/attributes/#type) will not be synchronized.
