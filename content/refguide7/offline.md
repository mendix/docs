---
title: "Offline"
category: "General"
menu_order: 40
---

## 1 Introduction

We define an offline application as the portion of a Mendix app that is accessible through the [Hybrid Tablet profile](hybrid-tablet-profile) and/or the [Hybrid Phone profile](hybrid-phone-profile). Offline support must be enabled. Pages available in these profiles can be viewed without an Internet connection. Consequently, they are subject to a number of restrictions which are explained below.

## 2 Availability

To access the offline application, you need to have a mobile device that runs a correctly configured [PhoneGap](http://phonegap.com/) hybrid application. The app will require an internet connection the first time it is opened in order to download the necessary resources from the server. After the initial synchronization, the data will remain available in the app, even without an internet connection. Please note that the offline profile will be used, even if there is an internet connection available.

## 3 Synchronization {#synchronization}

The first time an [offline-enabled](configuring-hybrid-mobile-apps-to-run-offline) mobile application is run, it will retrieve all the data it requires to run offline from the server. After that, it will remain in offline mode until a synchronization event is triggered. Remaining in offline mode will significantly improve the performance of your application. Synchronization can be triggered by either the server or the user. The server will automatically resynchronize the app if it is opened after a new model is uploaded, in order to prevent inconsistencies. The user can trigger a synchronization by triggering a sync action, for example from an [action button](action-button). 

{{% alert type="info" %}}

As of Mendix 7.6, the startup performance of offline apps skips data and file synchronizations on subsequent application startups. Mendix still does them, but only if your app has been redeployed in the meantime. In that case, synchronization consists of two steps: Uploading new and changed objects, and then recreating the database by downloading all necessary objects from the runtime.

{{% /alert %}}

During upload, objects newly created by the user will be created on the server. Then, new and changed objects are uploaded to the server by committing them. Any relevant event handlers on these objects will run as usual. If the synchronization action encounters an error during this process, the entire upload process is reverted. For example, if ten objects are uploaded and one of these commits triggers a validation error, all ten objects are lost. This is to ensure that the internal consistency between your newly created objects is maintained. For example, if a user creates an order with several order lines and the order fails to commit, the entire transaction is rolled back to prevent your order lines from ending up in the database without an order and corrupting your data.

During download, the offline database is dropped and recreated to avoid any conflicts. The database is then filled by querying all objects that are used in the offline profile.

Because synchronization depends on the regular runtime APIs, the models of the app and the runtime should be compatible. This is important when deploying a new version of your app. For example, if you remove the `Brand` attribute of an offline-visible entity `Car`, someone using an old version of the offline app will get an error during synchronization if they change the brand of their car. Therefore, as a rule of thumb, never remove, rename, or change the type of an offline visible entity or its attributes.

Synchronization of files is only triggered by modifications to the attributes of the object, not by modifying the contents of the file itself.

{{% alert type="warning" %}}When a synchronization error occurs because of one the reasons above, an object's commit is skipped, its changes are ignored, and references from other objects to it become invalid. Objects referencing such a skipped object (which are not triggering errors) will be synchronized normally. Such a situation is likely to be a modeling error and is logged on the server.{{% /alert %}}

## 4 Restrictions {#restrictions}

### 4.1 Microflows

Without a server to process all the necessary logic, microflows run from the Mendix client cannot function in offline pages. This applies to any and all client-side microflows, from data source microflows to on-change actions. Please note that every microflow run outside the scope of the client will still run. For instance, a before-commit microflow can still be used to process complex logic, as long as the developer remains aware of the fact that it will be run on synchronization rather than the initial save.

### 4.2 XPath

The database used to store data on your mobile device for offline use does not support complex queries. As such, the XPath setting is disallowed on all the widgets accessible through the offline device profile. Alternatively, the simple constraints found in the database data source can be used, as well as modeling complex queries using entity access.

### 4.3 Data Sources

Only the database data source is allowed offline, due in part to the restrictions on both XPath and microflows described above.

### 4.4 Search

Because our search behavior relies on database queries, searching is currently not available to offline grids and list views.

### 4.5 Data Manipulation

Before Mendix 7.4.0, offline pages only supported the creation of new objects. Objects imported from the online database could be viewed but not changed. Objects could only be edited in the period between creation and synchronization.

From Mendix 7.4.0 on, objects can also be edited after synchronization.

### 4.6 Autonumbers and Calculated Attributes

Both autonumbers and calculated attributes require server intervention, and are therefore disallowed. Objects with these attribute types can still be viewed and created offline, but the attributes themselves cannot be displayed.

### 4.7 Files

Storing and uploading files offline is not supported. Specializations of the System.FileDocument can still be created offline, but files cannot be uploaded or downloaded. The exception to this rule is System.Image, which can be accessed, viewed, and uploaded as usual with the image viewer and upload widgets.

### 4.8 Default Attribute Values

Default attribute values for entities in the domain model don't have any effect for objects created offline. Boolean attributes will always default to `false`, numeric attributes to `0`, and other attributes to `empty`.

### 4.9 Associations

Attribute paths which follow references are not allowed in grid columns. In addition, reference set selectors cannot be used. 

In addition, usage of reference set associations (accessing through custom widgets etc) is not supported.

### 4.10 Inheritance

It is not possible to use more than one entity from a generalization/specialization relation. If you use two or more related entities on your offline pages or offline nanoflows, synchronization will fail, because the objects of these entities will be inserted multiple times into the database with the same ID.

### 4.11 System Members

System members (`createdDate`, `changedDate`, `owner`, `changedBy`) are not supported.

### 4.12 Excel/CSV Export

Spreadsheets are generated through direct database interaction, which is not available offline.

### 4.13 Platforms

Offline-enabled apps are only supported on the iOS and Android platforms.

For more information on offline apps, see [Configuring Hybrid Mobile Apps to Run Offline](configuring-hybrid-mobile-apps-to-run-offline).

### 4.14 Synchronization

Mendix does not have a recommended maximum app size for the synchronization process. This process depends on the amount of data as well as the connection quality and speed of the mobile device. 

The timeout is set to 30 seconds per entity downloaded per the [July 3rd, 2018 Hybrid App Base & Template](/releasenotes/mobile/hybrid-app#7318) release.

In addition, Mendix recommends limiting the amount of data and syncing as much as possible by configuring security access so that users do not sync entities they do not need.

### 4.15 Read-Only Attributes

There is a restriction with creating and syncing objects with read-only attributes from an offline app. The offline app does not know access rules, so it will allow a user that creates an object offline to edit all attributes, regardless of whether the user actually has write access to them. When syncing the object, this will result in errors, as access rules will be applied when committing the object.

Please note that this does not apply to changing existing objects.
