---
title: "Offline Best Practices"
url: /refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/
weight: 30
description: "Describes how to make secure, high-performing offline-first apps."
---

## Generic Best Practices

To ensure the best user experience for your Mendix application, follow these best practices:

* Limit the amount of data that will be synchronized by customizing the synchronization configuration or security access rules
* Because network connections can be slow and unreliable and mobile devices often have limited storage, avoid synchronizing large files or images (for example, by limiting the size of photos)
* Try to synchronize through a nanoflow instead of a UI element so you can add error handling to the synchronization activity which can handle cases when synchronization fails (connection errors, model and data related errors, and more)
* Synchronize large files or images using selective synchronization
* Use an `isDeleted` Boolean attribute for delete functionality so that conflicts can be handled correctly on the server
* Use before- and after-commit microflows to pre- or post-process data
* Use a [microflow call](/refguide/microflow-call/) in your nanoflows to perform additional server-side logic such as retrieving data from a REST service, or accessing and using complex logic such as Java actions
* Help your user remember to synchronize their data so it is processed as soon as possible: you can check for connectivity and automatically synchronize in the nanoflow that commits your object, or remind a user to synchronize while using a notification or before signing out to ensure no data is lost

## Preventing Synchronization Issues

To avoid the problems mentioned above, Mendix suggests following these best practices:

* Do not remove, rename, or change the type of entities or their attributes in offline apps after your initial release—this may cause objects or values to be no longer accessible to offline users (if needed, you can do an "in-between" release that is still backwards-compatible, and then make the changes in the next release after all the apps are synchronized)
* Do not delete objects which can be synced to offline users (this will result in lost changes on those objects when attempted to synchronize them)
* Avoid using domain-level validation for offline entities – use nanoflows or input validation instead (it is also a good practice to validate again on the server using microflows)
* When committing objects that are being referenced by other objects, make sure the other objects are also committed

If synchronization is triggered using a synchronize action in a nanoflow and an error occurs, it is possible to handle the error gracefully using the nanoflow error handling.

## Conflict Resolution

It can happen that multiple users synchronize the same state of an object on their device, change it, and then synchronize this object back to the server. In this case, the last synchronization overwrites the entire content of the object on the server. This is also called a "last wins" approach.

If another approach is needed, conflicts can be detected in a before-commit microflow (for example, by using a revision ID attribute on the entity). Based on that, custom conflict resolution can be performed.

## Differences with Regular Web Apps

Mendix helps developers build rich offline-first apps. However, there are some limitations. See the subsections below for details.

### Microflows {#microflows}

Microflows can be called from offline apps by using [microflow call](/refguide/microflow-call/) action in your nanoflows to perform logic on the server. However, it works a bit different from when used in online profiles, these differences are explained below:

#### Microflow Arguments Type

* Passing an object or a list of a persistable entity is not supported
* Passing an object or a list of a non-persistable entity that has an association with a persistable entity is not supported (such an association can be an indirect association)

{{% alert color="info" %}}
If you need to execute a microflow with a persistable object as parameter, you can define a before/after commit event handler on the desired persistable entity. When you create and commit an instance of this entity in the client and perform synchronization, the configured event handler (or handlers) will run. 
{{% /alert %}}

#### UI Actions

UI-related actions will be ignored and will not have any effect. We encourage you to model such UI-side effects in the caller nanoflow.

These actions are as the following:

* [Show message](/refguide/show-message/)
* [Show validation message](/refguide/validation-feedback/)
* [Show home page](/refguide/show-home-page/)
* [Show page](/refguide/show-page/)
* [Close page](/refguide/close-page/)
* [Download file](/refguide/download-file/)

#### Object Side-Effects

Changes to persistable objects made in a microflow will not be reflected on the client unless you synchronize. Non-persistable objects must be returned in order for changes to be reflected.

#### Microflow Return Value

* Returning an object or a list of persistable entity is not supported
* Returning an object or a list of a non-persistable entity that has an association with a persistable entity is not supported (such association can be an indirect association)

#### Language Switching

To be able to switch the language of a Mendix app, a device must be online and have access to the Mendix runtime. For more information on the runtime, see the [Runtime Reference Guide](/refguide/runtime/).

### Offline Microflow Best Practices {#offline-mf-best-practices}

To make microflow calls work from offline-first apps, Mendix stores some microflow information in the offline app. That information is called from the app. This means that changes to microflows used from offline apps must be backwards-compatible, because there can be older apps which have not received an over the air update yet. All microflow calls from such a device will still contain the old microflow call configuration in nanoflows, which means that the request might fail. For more information on over-the-air updates, see [Updating Native Apps](/refguide/mobile/distributing-mobile-apps/overtheair-updates/).

To avoid backwards-compatibility errors in offline microflow calls after the initial release, Mendix suggests these best practices:

* Do not rename microflows or move them to different modules
* Do not rename modules that contain microflows called from offline apps
* Do not add, remove, rename, or change types of microflow parameters
* Do not change return types
* Do not delete a microflow before making sure that all devices have received an update

If you want to deviate from the practices outlined above, introduce a new microflow. You can change the contents of the microflow, but keep in mind that older apps might call the new version of the microflow until they are updated.

### Autonumbers and Calculated Attributes {#autonumbers}

Both autonumbers and calculated attributes require input from the server; therefore, they are not allowed. Objects with these attribute types can still be viewed and created offline, but the attributes themselves cannot be displayed.

### Many-to-Many Associations {#many-to-many}

Many-to-many associations are not supported. A common alternative is to introduce a third entity that has one-to-many associations with the other entities.

### Inheritance {#inheritance}

It is not possible to use more than one entity from a generalization or specialization relation. For example if you have an `Animal` entity and a `Dog` specialization, you can use either use `Animal` or `Dog`, but not both from your offline profile. An alternative pattern is to use composition (for example, object associations).

### System Members {#system-members}

System members (`createdDate`, `changedDate`, `owner`, `changedBy`) are not supported.

### Excel and CSV Export {#excel-cv}

Excel and CSV export are not available in offline applications.

### Hashed String Attributes {#hashed-strings}

Attributes with the hashed string [attribute type](/refguide/attributes/#type) will not be synchronized.

### Access Rules with XPath Constraints {#access-rules}

While working offline, offline-first apps cannot apply access rules with XPath constraints. For example, consider a `Customer` entity with `Locked` (Boolean) and `Name` (string) attributes. There is an access rule where the `Name` attribute of the customer is writable only when the `Locked` attribute is false. Changing and committing the `Locked` attribute’s value while offline will not change the read-only status of the `Name` attribute. Instead, this change will take effect after you synchronize the changed `Customer` object.
