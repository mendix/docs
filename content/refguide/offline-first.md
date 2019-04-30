---
title: "Offline First"
category: "General"
menu_order: 40
tags: ["offline", "native", "mobile"]
---

## 1 Introduction

{{% todo %}}[add link to JavaScript actions refguide when published]{{% /todo %}}
{{% todo %}}[add link mendix "makeitnative" app below when link exists]{{% /todo %}}

Offline-first applications work regardless of connection, providing a continuous experience. Pages and logic interact with an offline database on the device itself, and data is synchronized with the server when possible. This results in snappier UI, increased reliability, and improved device battery life.

Mendix enables offline-first apps using the following components:

	* A [native profile](navigation-profile) with an optional bottom bar for navigation
	* [Nanoflows](nanoflows) to execute logic and behavior
	* JavaScript actions for integration with native APIs
	* A [synchronization action](action-button#events-on-click) enabling synchronization with the server

During development, the Mendix App from the [App Store](https://itunes.apple.com/us/app/mendix/id458058946?mt=8) or [Google Play](https://play.google.com/store/apps/details?id=com.mendix.SprintrMobile&gl=NL) can be used to preview your Mendix app on a device or in an emulator. The first time it is opened, your app will require an internet connection to download necessary resources from the server. After this initial synchronization, data will remain available in the app even without an internet connection. Subsequent synchronizations will only be performed when requested by the user.

## 2 Synchronization {#synchronization}

Synchronization is automatically triggered in the following scenarios:

	* During the initial startup of your mobile app
	* During the first startup of your mobile app after your Mendix app is redeployed (if there is a network connection)

Synchronization can also be triggered by the following actions:

	* An action button with synchronize action
	* A synchronize nanoflow action

The synchronization process consists of two phases. First, your Mendix app updates the server database with changes to existing Mendix objects or new objects committed while offline in the upload phase. Second, your Mendix app updates its offline database using data from the server database in the download phase.

### 2.1 Upload Phase

The upload phase begins with a referential integrity validation of the new or changed objects which should be committed to the server. This validation checks for references to other objects which are not yet committed to the offline database – for example, when a committed `City` object refers to an uncommitted `Country` object. Synchronizing the `City` object in such a case would yield an invalid `Country` object reference, which breaks the app's data integrity. If users trigger a sync while data integrity is broken, they will see the following error message (which probably indicates an error in your model for you to fix): 

> Sync has failed due to a modeling error. Your database contains objects that reference uncommitted objects: object of type `City` (reference `City_Country`)

The upload phase executes the following operations after validation:

	1. It detects all changes made to the offline database. Offline database can be modified only by committing an object. Such an object can be a new object created while offline, or can be an existing object previously synchronized from the server.
	2. If there are changed or new file objects, their contents are uploaded to the server and stored temporarily.
	3. All changed and new objects are committed to the server, including file contents. Any relevant before or after commit event handlers on these objects will run as usual.

#### 2.1.2 Upload Error Handling

An object's synchronization might encounter problems due to the following reasons:

	* The object is no longer available on the server (either from deletion or inaccessibility due to access rules)
	* A member of the object has become inaccessible due to access rules
	* An error occurs during the execution of a before or after commit event microflow for a synchronized object
	* The object is not valid according to domain-level validation rules

When a synchronization problem occurs due to the reasons above, an object's commit is skipped, your changes will be ignored, and references from other objects to it will be invalid.

{{% alert type="info" %}}
This behavior will be part of GA release.
{{% /alert %}}

#### 2.1.3 Upload Best Practices

To avoid problems mentioned above, we suggest following these best practices:

	* Never remove, rename, or change the type of an offline visible entity or its attributes after your initial release
	* Avoid using domain level validation for offline entities – use nanoflows or input validation instead
	* When committing objects that are being referenced by other objects, make sure that the other objects are also committed

If synchronization is triggered using a synchronize action in a nanoflow and an error occurs, it is possible to handle the error yourself using nanoflow error handling (right click on the activity and select **Set error handling**) and display an error message by using a nanoflow error handler.

### 2.2 Download Phase

During the download phase, the offline database is updated with the newest data from the server database. You can manage which entities are synchronized to the offline database by customizing your app's synchronization behavior. For more detail on this procedure, see the [customizable synchronization](#customizable-synchronization) section below.

The download process also downloads file entities' contents and saves those contents to your device storage. This process is incremental. The offline database only downloads the contents of a file if the file has not been downloaded before, or if the file has been changed since it was last downloaded. The offline database uses a file entity's change date to determine if the contents of a file object have changed.

After the download process is completed, the widgets on your app's current page will be refreshed to reflect the latest data.

#### 2.2.1 Download Best Practices

To ensure the best user experience for your application, follow these best practices:

	* Limit the amount of data that will be synchronized, as there is a 30 second time-out per entity (limiting data synchronization can be done by configuring security access rules or by customizing the synchronization configuration)
	
	* Avoid synchronizing large files - mobile devices often have limited storage, and network connections are unreliable

### 2.3 Customizable Synchronization {#customizable-synchronization}

By default Mendix automatically analyzes your app's data model to determine which entities should be synchronized based on the pages and nanoflows used within your offline navigation profile.

Depending on the use-case, more fine-grained synchronization controls might be required. Therefore, an app's initial synchronization configuration can be customized to override the default configuration. It is possible to limit what is downloaded by using [XPath Constraints](xpath-constraints), or by disallowing downloads for an entity altogether. If you have custom widgets or JavaScript actions which use an entity not used anywhere else in your offline profile, you can use customizable synchronization to synchronize such entities to your device.

## 3 Building Your Offline App{#building-offline-app}

Some app features require a connection to the server. In offline apps, certain features have limited functionality.

### 3.1 Microflows

Without a server to process all the necessary logic, microflows which run from the Mendix client cannot function in offline pages. This applies to all client-side microflows, from data source microflows to on-change actions. Every microflow that runs outside the scope of the client, however, will still run. For instance, a before-commit microflow can still be used to process complex logic. In this case the microflow will be run on synchronization rather than the initial save.

### 3.2 Data Sources

For most widgets, you may use either a database source or a nanoflow source.

### 3.3 Search

Searching is only supported for string attributes in a list view widget.

### 3.4 Autonumbers and Calculated Attributes

Both autonumbers and calculated attributes require input from the server, and are therefore disallowed. Objects with these attribute types can still be viewed and created offline, but the attributes themselves cannot be displayed.

### 3.5 Files

The file picker widget is not supported in offline applications. The only way to upload an image to an offline app is to use your device's camera or saved photos directly.

### 3.6 Default Attribute Values

Default attribute values for entities in the domain model do not have any effect for objects created offline. Boolean attributes will always default to `false`, numeric attributes to `0`, and other attributes to `empty`.

### 3.7 Associations

Attribute paths which follow references are disallowed in grid columns. Furthermore, reference set selectors cannot be used. In addition, the usage of reference set associations (by accessing through custom widgets or other means) is not supported.

### 3.8 Inheritance

It is not possible to use more than one entity from a generalization or specialization relation. If you use two or more related entities on your offline pages or offline nanoflows, synchronization will fail as these entities' objects are be inserted multiple times into the database using same ID.

### 3.9 System Members

System members (`createdDate`, `changedDate`, `owner`, `changedBy`) are not supported.

### 3.10 Excel and CSV Export

Excel and CSV export are not available in offline applications.

### 3.11 Platforms

The target platforms for offline-first applications can be found in the [Mobile Operating Systems](system-requirements#7-mobile-operating-systems) section of *System Requirements*.