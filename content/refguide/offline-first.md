---
title: "Offline-First"
category: "Mobile"
menu_order: 30
tags: ["offline", "native", "mobile", "studio pro"]
---

## 1 Introduction

Offline-first applications work regardless of the connection in order to provide a continuous experience. Pages and logic interact with an offline database on the device itself, and data is synchronized with the server. This results in a snappier UI, increased reliability, and improved device battery life.

{{% alert type="info" %}}
It is important to understand that offline-first is an architectural concept and not an approach based on the network state of the device. Offline-first apps do not rely on a connection, but they can use connections (for example, you can use a Google Maps widget or push notifications).
{{% /alert %}}

Mendix supports building offline-first applications for [native mobile](native-mobile) and [hybrid mobile](hybrid-mobile) apps. Both native and hybrid apps share the same core, and this gives them the same offline-first capabilities. Native mobile apps are always offline-first, but for hybrid mobile apps, it depends on the navigation profile that is configured. The data is stored on the device in a local database, and the files are stored on the file storage of the device.

Mendix Studio Pro performs validations to make sure your app follows an offline-first approach and works even when there is no connection.

During development, the [Make It Native mobile app](https://play.google.com/store/apps/details?id=com.mendix.developerapp) (for native mobile apps) or [Mendix mobile app](https://play.google.com/store/apps/details?id=com.mendix.SprintrMobile) (for hybrid mobile apps) can be used to preview and test your Mendix app on a device. The first time your Mendix app is loaded, an internet connection will be required to create a session on the server and download the necessary data and resources. After this initial synchronization, data will remain available in the app even without an internet connection. Subsequent synchronizations will be performed when requested by the user, through application logic or after a model change.

## 2 Synchronization {#synchronization}

Mendix automatically analyzes your app's data model to determine which entities should be synchronized based on the pages and nanoflows used within your offline navigation profile. In addition, the platform takes entity access into account so that only the data the user is allowed to access is synchronized.

Synchronization is automatically triggered during the following scenarios:

* The initial startup of your mobile app
* The first startup of your mobile app after your Mendix app is redeployed (if there is a network connection)

Synchronization can also be configured via different places in your Mendix app, for example:

* As an action on a button
* As an action in a nanoflow
* As a pull-down action on a list view (for native mobile only)

The synchronization process consists of two phases. In the [upload phase](#upload), your app updates the server database with the new or changed objects that are committed. In the [download phase](#download), your app updates its local database using data from the server database.

### 2.1 Upload Phase {#upload}

The upload phase begins with a referential integrity validation of the new or changed objects that should be committed to the server. This validation checks for references to other objects that are not yet committed to the local database. 

For example, when a committed `City` object refers to an uncommitted `Country` object, synchronizing the `City` object will yield an invalid `Country` object reference, which will break the app's data integrity. If a synchronization is triggered while data integrity is broken, the following error message will appear (indicating an error in the model to fix): "Sync has failed due to a modeling error. Your database contains objects that reference uncommitted objects: object of type `City` (reference `City_Country`)." To fix this, such objects must also be committed before synchronizing (in this example, `Country`should be committed before synchronizing).

The upload phase executes the following operations after validation:

1. It detects all the changes made to the local database. The local database can be modified only by committing an object. Such an object can be a new object created (while offline), or it can be an existing object previously sychronized from the server.
2. <a name="steptwo"></a>If there are changed or new file objects, their contents are uploaded to the server and stored temporarily. Each file is uploaded in a separate network request.
3. <a name="stepthree"></a>All the changed and new objects are committed to the server, and the content of the files are linked to the objects. This step is performed in a single network request. Any configured before- or after-commit event handlers on these objects will run as usual.

### 2.2 Download Phase {#download}

If the upload phase was successful, the download phase starts in which the local database is updated with the newest data from the server database. A network request is made to the server per entity.

You can manage which entities are synchronized to the local database by customizing your app's synchronization behavior. For more details on this procedure, see the [Customizable Synchronization](#customizable-synchronization) section below.

The download process also downloads the file entities' contents and saves that to your device storage. This process is incremental. The app only downloads the contents of a file object if the file has not been downloaded before, or if the file has been changed since it was last downloaded. The changed date attribute of the file entity is used to determine if the contents of a file object have changed.

After the download process (and thus synchronization) is completed, the widgets on your app's current page will be refreshed to reflect the latest data.

### 2.3 Customizable Synchronization {#customizable-synchronization}

By default Mendix automatically determines which objects need to be synchronized as mentioned in [Synchronization](#synchronization).

Depending on the use-case, more fine-grained synchronization controls might be required. Therefore, an app's  synchronization configuration can be customized to override the default configuration. It is possible to limit what is downloaded by using [XPath Constraints](xpath-constraints), which is applied in addition to the security constraints.

Furthermore, it is possible to disable downloads for an entity. This can be very useful in cases where the objects should only be uploaded, for example a `Feedback` entity.

If you have custom widgets or JavaScript actions which use an entity that cannot be detected by Studio Pro in your offline-first profile (because its only used in the code), you can use customizable synchronization to include such entities.

{{% image_container width="450" %}}![custom synchronization](attachments/offline-first/custom-sync.png){{% /image_container %}}

### 2.4 Error Handling

During synchronization, errors might occur. This section describes how Mendix handles these errors and how you can prevent them.

#### 2.4.1 Network-Related Errors

Synchronization requires a connection to the server, so during synchronization, errors may occur due to failing or poor network connections. Network errors may involve a dropped connection or a timeout. By default, the timeout for synchronization is 30 seconds per network request.

The synchronization is atomic, which means that either everything or nothing is synchronized. Exceptions are described in the [Model- or Data-Related Errors](#othererrors) section below.

If a network error happens during the file upload (via [step 2 in the upload phase](#steptwo)), Mendix retries to upload the failed files. If there is an error for the second time, the synchronization is aborted. The changes at that moment are kept on the local device, so it can be retried later.

If a network error occurs while uploading the data (via [step 3 in the upload phase](#stepthree)), the data is kept on the local device and no changes are made on the server. Any files uploaded in [step 2](#steptwo) will be uploaded again during the next synchronization.

If a network error occurs during the download phase, no data is updated on the device, so the user can keep working or retry. The effects of the upload phase are not rolled back on the server.

If the synchronization is called from a nanoflow, the error can be handled using nanoflow error handling. In other cases (for example, synchronization called from a button or at startup), a message will be displayed to the user that the data could not be synchronized.

#### 2.4.2 Model- or Data-Related Errors {#othererrors}

During the synchronization, changed and new objects are committed. An object's synchronization might encounter problems due to the following reasons:

* The object is no longer available on the server (either from deletion or inaccessibility due to access rules)
* A member of the object has become inaccessible due to access rules
* An error occurs during the execution of a before- or after-commit event microflow
* The object is not valid according to domain-level validation rules

{{% alert type="warning" %}}When a synchronization error occurs because of one the reasons above, an object's commit is skipped, its changes are ignored, and references from other objects to it become invalid. Objects referencing such a skipped object (which are not triggering errors) will be synchronized normally. Such a situation is likely to be a modeling error and is logged on the server.{{% /alert %}}

### 2.4.3 Preventing Synchronization Issues

To avoid the problems mentioned above, we suggest following these best practices:

* Do not remove, rename, or change the type of entities or their attributes in offline apps after your initial release. This may cause objects or values to be no longer accessible to offline users. If needed, you can do an "in-between" release that is still backwards-compatible, and then make the changes in the next release after all the apps are synchronized.
* Do not delete objects which can be synced to offline users. This will result in lost changes on those objects when attempted to synchronize them.
* Avoid using domain-level validation for offline entities – use nanoflows or input validation instead. It is also a good practice to validate again on the server using microflows.
* When committing objects that are being referenced by other objects, make sure the other objects are also committed.

If synchronization is triggered using a synchronize action in a nanoflow and an error occurs, it is possible to handle the error gracefully using the nanoflow error handling.

### 2.4.4 Conflict Resolution

It can happen that multiple users synchronize the same state of an object on their device, change it, and then synchronize this object back to the server. In this case, the last synchronization overwrites the entire content of the object on the server. This is also called a "last wins" approach. 

If another approach is needed, conflicts can be detected in a before-commit microflow (for example, by using a revision ID attribute on the entity). Based on that, custom conflict resolution can be performed.

## 3 Best Practices

To ensure the best user experience for your Mendix application, follow these best practices:

* Limit the amount of data that will be synchronized by customizing the synchronization configuration or security access rules
* Because network connections can be slow and unreliable and mobile devices often have limited storage, avoid synchronizing large files or images (for example, by limiting the size of photos)
* Use an `isDeleted` Boolean attribute for delete functionality so that conflicts can be handled correctly on the server
* Use before- and after-commit microflows to pre- or post-process data, or perform additional server-side logic using microflows
* Help your user remember to synchronize their data so it is processed as soon as possible: you can check for connectivity and automatically synchronize in the nanoflow that commits your object, or remind a user to synchronize while using a notification or before signing out to ensure no data is lost

## 4 Ensuring Your App Is Offline-First {#limitations}

Mendix helps developers in building rich offline-first apps. However, there are some limitations.

### 4.1 Microflows

Microflows cannot be called directly from offline apps. However, before- and after-commit microflows still run during synchronization, which can be used for application logic on the server.

### 4.2 Autonumbers & Calculated Attributes

Both autonumbers and calculated attributes require input from the server; therefore, they are not allowed. Objects with these attribute types can still be viewed and created offline, but the attributes themselves cannot be displayed.

### 4.3 Default Attribute Values

Default attribute values for entities in the domain model do not have any effect on objects created offline. Boolean attributes will always default to `false`, numeric attributes to `0`, and other attributes to `empty`.

### 4.4 Many-to-Many Associations

Many-to-many associations are not supported. A common alternative is to introduce a third entity that has one-to-many associations with the other entities.

### 4.5 Inheritance

It is not possible to use more than one entity from a generalization or specialization relation. For example if you have an `Animal` entity and a `Dog` specialization, you can use either use `Animal` or `Dog`, but not both from your offline profile. An alternative pattern is to use composition (for example, object associations).

### 4.6 System Members

System members (`createdDate`, `changedDate`, `owner`, `changedBy`) are not supported.

### 4.7 Excel and CSV Export

Excel and CSV export are not available in offline applications.
