---
title: "Offline"
category: "General"
---

## 1 Introduction

We define an offline application as the portion of a Mendix app that is accessible through the [Hybrid Tablet profile](hybrid-tablet-profile) and/or the [Hybrid Phone profile](hybrid-phone-profile). Offline support must be enabled. Pages available in these profiles can be viewed without an Internet connection. Consequently, they are subject to a number of restrictions which are explained below.

## 2 Availability

To access the offline application, you need to have a mobile device that runs a correctly configured [PhoneGap](http://phonegap.com/) hybrid application. The app will require an internet connection the first time it is opened in order to download the necessary resources from the server. After the initial synchronization, the data will remain available in the app, even without an internet connection. Please note that the offline profile will be used, even if there is an internet connection available.

## 3 Synchronization<a name="synchronization"></a>

The first time an [offline-enabled](configuring-hybrid-mobile-apps-to-run-offline) mobile application is run, it will retrieve all the data it requires to run offline from the server. After that, it will remain in offline mode until a synchronization event is triggered. Remaining in offline mode will significantly improve the performance of your application. Synchronization can be triggered by either the server or the user. The server will automatically resynchronize the app if it is opened after a new model is uploaded, in order to prevent inconsistencies. The user can trigger a synchronization by triggering a sync action, for example from an [action button](action-button). Lastly, the app will always attempt to synchronize if it is (re)started. If your device is not connected to the internet on startup, this step will be skipped.

During synchronization, any changed, created, and deleted objects will be applied to the offline database. Additionally, any objects created by the user since the application last synchronized will be uploaded to the server. The server will perform any relevant event handlers on these objects as usual. If the synchronization action encounters an error during this process, the entire upload process is reverted. For example, if ten objects are uploaded and one of these commits triggers a validation error, all ten objects are lost. This is to ensure that the internal consistency between your newly created objects is maintained. For example, if a user creates an order with several order lines and the order fails to commit, the entire transaction is rolled back to prevent your order lines from ending up in the database without an order and corrupting your data.

## 4 Restrictions

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

### 4.7 Default Attribute Values

Default attribute values for entities in the domain model don't have any effect for objects created offline. Boolean attributes will always default to `false`, numeric attributes to `0`, and other attributes to `empty`.

### 4.8 Associations

Attribute paths which follow references are not allowed in grid columns. In addition, reference set selectors cannot be used.
Also, usage of reference set associations (accessing through custom widgets etc) are not supported.

### 4.9 Inheritance

It is not possible to use more than one entity from a generalization/specialization relation. If you use two or more related entities on your offline pages, synchronization will fail because objects of these entities will be inserted multiple times into the database with the same ID.

### 4.10 System Members

System members (`createdDate`, `changedDate`, `owner`, `changedBy`) are not supported.

### 4.11 Excel/CSV Export

Spreadsheets are generated through direct database interaction, which is not available offline.

### 4.12 Platforms

Offline-enabled apps are only supported on the iOS and Android platforms.

For more information on offline apps, see [Configuring Hybrid Mobile Apps to Run Offline](configuring-hybrid-mobile-apps-to-run-offline).
