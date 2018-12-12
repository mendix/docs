---
title: "Offline"
category: "General"
---
{{% alert type="warning" %}}

The documentation in this section describes a new feature that is still in beta, and is subject to change before the final release.

{{% /alert %}}

We define an offline application as the portion of a Mendix app that is accessible through the [Offline Device](offline-device-profile) [profile](navigation). For Mendix 6.10.4 or later, the Offline Device profile is replaced by the [Hybrid Tablet profile](hybrid-tablet-profile) and the [Hybrid Phone profile](hybrid-phone-profile). Offline support must be enabled for the Hybrid Tablet and Hybrid Phone profiles. Pages available in these profiles can be viewed without an internet connection. Consequently, they are subject to a number of restrictions, explained below.

## Availability

To access the offline application, you need to have a mobile device that runs a correctly configured [PhoneGap](http://phonegap.com/) hybrid application. The app will require an internet connection the first time it is opened in order to download the necessary resources from the server. After the initial synchronization the data will remain available in the app, even without an internet connection. Please note that the Offline Profile will be used, even if there is an internet connection available. Which profile is used depends on the PhoneGap app settings, not the connection status of the device.

## Synchronization

The first time an [offline-enabled](configuring-hybrid-mobile-apps-to-run-offline) mobile application is run, it will retrieve all the data it requires to run offline from the server. After that, it will remain in offline mode until a synchronization event is triggered. Remaining in offline mode will significantly improve the performance of your application. Synchronization can be triggered by either the server or the user. The server will automatically resynchronize the app if it is opened after a new model is uploaded, in order to prevent inconsistencies. The user can trigger a synchronization by triggering a sync action, for example from an [action button](action-button). Lastly, the app will always attempt to synchronize if it is (re)started. If your device is not connected to the internet on startup, this step will be skipped.

Synchronization consists of two steps:

1. Uploading new and changed objects.
2. Recreating the database by downloading all necessary objects from the runtime.

During upload, objects newly created by the user will be created on the server. Then, new and changed objects are uploaded to the server by committing them. Any relevant event handlers on these objects will run as usual. If the synchronization action encounters an error during this process, the entire upload process is reverted. For example, if ten objects are uploaded and one of these commits triggers a validation error, all ten objects are lost. This is to ensure that the internal consistency between your newly created objects is maintained. For example, if a user creates an order with several order lines and the order fails to commit, the entire transaction is rolled back to prevent your order lines from ending up in the database without an order and corrupting your data.

During download, the offline database is dropped and recreated to avoid any conflicts. The database is then filled by querying all objects that are used in the offline profile.

Because synchronization depends on the regular runtime APIs, the models of the app and the runtime should be compatible. This is important when deploying a new version of your app. For example, if you remove the `Brand` attribute of an offline-visible entity `Car`, someone using an old version of the offline app will get an error during synchronization if they change the brand of their car. Therefore, as a rule of thumb, never remove, rename, or change the type of an offline visible entity or its attributes.

Synchronization of files is only triggered by modifications to the attributes of the object, not by modifying the contents of the file itself.

## Restrictions

### Microflows

Without a server to process all the necessary logic, microflows run from the Mendix client cannot function in offline pages. This applies to any and all client-side microflows, from data source microflows to on-change actions. Please note that all microflows that are run outside the scope of the client will still run. For instance, a before commit microflow can still be used to process complex logic, as long as the developer remains aware of the fact that it will be run on synchronization rather than the initial save.

### XPath

The database used to store data on your mobile device for offline use does not support complex queries. As such, the XPath setting is disallowed on all the widgets accessible through the Offline Device profile. Alternatively, the simple constraints found in the database data source can be used, as well as modeling complex queries using entity access.

### Data Sources

Only the database data source is allowed offline, due in part to the restrictions on both XPath and microflows described above.

### Search

Because our search behavior relies on database queries, searching is currently not available to offline grids and list views.

### Data Manipulation

To simplify the synchronization process, offline pages only support the creation of new objects. Objects imported from the online database can be viewed but not changed. Objects can only be edited in the period between creation and synchronization.

### Autonumbers and Calculated Attributes

Both autonumbers and calculated attributes require server intervention, and are therefore disallowed. Objects with these attribute types can still be viewed and created offline, but the attributes themselves cannot be displayed.

### Files

Storing and uploading files offline is not supported. Specializations of the System.FileDocument can still be created offline, but files cannot be uploaded or downloaded. The exception to this rule is System.Image, which can be accessed, viewed, and uploaded as usual with the image viewer and upload widgets. 

### Associations

With the exception of data views, list views, template grids, and data grids, data displayed over an association is prohibited. This applies to everything from a data grid column that displays data in an associated object to reference selectors. In most cases, the desired goal can still be achieved by filling a nested data view with the relevant association and filling it with the required widgets.

### Excel/CSV Export

Spreadsheets are generated through direct database interaction, which is not available offline.

### Platforms

Offline enabled apps are only supported on the iOS and Android platforms.

For more information on offline apps:

*   [Configuring Hybrid Mobile Apps to Run Offline](configuring-hybrid-mobile-apps-to-run-offline)
