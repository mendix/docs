---
title: "Synchronization & Auto-Committed Objects"
url: /refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/auto-committed-objects/
weight: 40
description: "Describes when offline sync can create auto-committed objects and what to do when that occurs."
aliases:
    - /refguide9/mobile/using-mobile-capabilities/offlinefirst-data/auto-committed-objects/
# If moving or renaming this doc file, implement a permanent redirect and let the respective team (R&D/AppDev/Frontend/Mobile Offline Team) update the URL in the product.
---

## Introduction

Auto-committed objects are Mendix objects committed to the database automatically because the app commits another object that references the auto-committed object. To learn more about auto-committed objects, see the [Autocommit and Associated Objects](/refguide9/committing-objects/#autocommit-and-associated-objects) section of *Commit Object(s)*.

## Offline-First Apps and Auto-Commit Logic

Offline-first apps do not have an auto-commit logic. When you commit an object that references an uncommitted object in an offline-first app, the Mendix Client will only commit the original object and not the referenced object. This means the local database has an invalid reference until the app explicitly commits the referenced object.

Here is an example domain model that showcases this situation:

{{< figure src="/attachments/refguide9/mobile/offline-first/example-domain-model.png" width="1242px" alt="Example domain model with an Customer and Order entity, connected by an one-to-many association which indicates a Customer can have multiple Orders" class="no-border" >}}

To continue the example, here is the related nanoflow:

{{< figure src="/attachments/refguide9/mobile/offline-first/flow-creating-invalid-customer-reference.png" width="1508px" alt="A nanoflow creating a Customer and an Order, associating them, and only committing the Order instance" class="no-border" >}}

The example above saves the `$NewOrder` object to the local database, including the association value referencing the uncommitted `$NewCustomer` object. Since the `$NewCustomer` is not yet committed, however, the reference is invalid. To solve this issue, the nanoflow must commit the `$NewCustomer` object.

Assume a user closes the app right after the example nanoflow has run. Since the `$NewCustomer` object is stored only in memory, it will be gone. The `$NewOrder` object references a customer object which no longer exists. When you try to synchronize `$NewOrder` later, it will fail due to the dangling reference error. You must set the reference to `empty` to successfully synchronize this object. To learn more about dangling references, see the [Dangling References](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/#dangling-references) section of *Offline Synchronization*.

It is true that an offline-first app *can* create auto-committed objects on the runtime database. However, although auto-committed objects help ensure database consistency in web applications, creating auto-committed objects in offline-first apps is *not recommended*.

## Auto-Committed Objects: Not Recommended in Offline-First Apps

Auto-committed objects live until the user's session expires. When the user's session expires, the Mendix Runtime deletes any auto-committed objects created in that session. This logic works well for web applications, but is not a good fit for offline-first apps for the following reasons:

* **Long-lived sessions** – offline-first progressive web apps use [long-lived sessions](/refguide9/mobile/introduction-to-mobile-technologies/progressive-web-app/#sessions) with longer session timeout by default. This causes auto-committed objects to remain on the server database as long as a session is active. Other PWA users can synchronize the auto-committed objects to their local databases. For example, a user changes and attempts to synchronize an auto-committed object with validation problems. In that case the server may fail to synchronize it.
* **Session expiration** – native mobile apps use regular sessions that expire according to the [`SessionTimeout` runtime setting](/refguide9/tricky-custom-runtime-settings/#general-settings). A session on the server may expire as the user uses the app. The server will remove any auto-committed objects, even if the end-user is still interacting with the app.This can cause unexpected behaviors. For example, suppose the user changes the auto-committed object and attempts to synchronize. The Mendix Runtime will not be able to do that, because the runtime database no longer has this object.
    * It is useful to keep in mind that a native session may expire on the server if the end-user uses the app while there is no network condition. When this happens, the Mendix Client attempts to create a new session automatically when the device sends a request to the Mendix Runtime.  
* **Auto-committed objects as regular objects** – auto-committed objects can be synchronized to other users' local databases and treated as regular objects, which may cause the following problems:
    * The Mendix Runtime does not run any validations or event handler microflows while auto-committing an object. Therefore, auto-committed objects synchronized to local databases may be invalid or incomplete. This may lead to bugs in the app model (nanoflows, UI, or other areas) if the app model is not resistant to invalid objects.
    * The synchronization may fail if a user changes and synchronizes an invalid auto-committed object.
* **Delete behavior issues** – the Mendix Runtime may delete other associated objects while deleting the auto-committed objects at the end of a session. This can happen if the association's [delete behavior](/refguide9/association-properties/#delete-behavior) is set to deleting associated objects.

## How Offline-First Apps Create Auto-Committed Objects

Even though an offline-first app always works against the local database, it can still execute logic on the runtime creating auto-committed objects.

### Calling Microflows

An offline-first app can call microflows on the runtime, creating auto-committed objects. See the following example:

{{< figure src="/attachments/refguide9/mobile/offline-first/flow-creating-invalid-customer-reference.png" width="1508px" alt="A microflow creating a Customer and an Order, associating them, and only committing the Order instance" class="no-border" >}}

In the example microflow above, the commit action of the `$Order` object will auto-commit the `$Customer` object.

#### Preventing Microflows from Creating Auto-Committed Objects

To prevent auto-committed objects from microflows, commit any new objects created in microflows executed in an offline-first app.

### Synchronization

During synchronization, the Mendix Runtime may create new objects and commit/delete existing objects. For example, imagine event handler microflows are defined on the domain model for the synchronized entities. In that case, the Mendix Runtime will execute them. 

A more complex way to create auto-committed objects is when the synchronization of an object fails due to an error, but others succeed. See this example nanoflow:

{{< figure src="/attachments/refguide9/mobile/offline-first/nanoflow-causing-auto-committed-object.png" width="711px" alt="A nanoflow creating an invalid Customer object, creating a valid Order object associated with the new Customer object, and synchronizing them" class="no-border" >}}

Assume the `$NewCustomer` object is invalid due to a missing required attribute value; therefore, the runtime cannot synchronize it. Here is what happens in the Mendix Runtime:

* The runtime will receive both `$NewCustomer` and `$NewOrder` (it will commit each object one after another)
* The runtime commits the `$NewOrder` object first
    * Since `$NewOrder` references `$NewCustomer`, the runtime will auto-commit the `$NewCustomer`, without performing data validation or executing event handlers
* The runtime attempts to commit `$NewCustomer`
    * The commit fails due to the validation error (synchronization creates a `System.SynchronizationError` entry for this object and continues)
* The `$NewCustomer` object remains auto-committed

#### Preventing Synchronization from Creating Auto-Committed Objects

To prevent synchronization from creating auto-committed objects, Solve the root cause of the validation failure. 

## How Mendix Handles Auto-Committed Objects in an Offline-First App

Mendix's method of handling auto-committed objects depends on the application type and the Mendix version. The sections below have more information divided by app type:

* [Offline-First Progressive Web Apps](#offline-pwas)
* [Native Mobile Apps](#native-apps)

### Offline-First Progressive Web Apps {#offline-pwas}

#### Created During Synchronization

The Mendix Runtime will delete auto-committed objects created during synchronization. It will also log a warning in the `Offline Synchronization` log node.

The contents of the log message depend on the Mendix version.

This is how the message will appear in Mendix 9.17 and below:

```text
Some autocommitted objects still existed after synchronize action is executed by {user}. This is not allowed in offline-first PWA apps, because they use long-lived sessions. Autocommitted objects are newly created objects which were not yet committed, but are inserted into the database because an associated object was committed. Autocommitted objects should explicitly have been committed, please check your model and apply the necessary changes. The autocommitted objects have been deleted from the database to prevent database corruption. Number of autocommitted objects per type which still existed after synchronizing the objects:

- {Entity1}: {count} object(s)
- {Entity2}: {count} object(s)
...
- {EntityN}: {count} object(s)
```

This is how the message will appear in Mendix 9.18 and above:

```text
The offline synchronization detected {count} auto-committed objects during synchronization executed by {user}. Auto committed objects are not supported during offline synchronization. The Mendix runtime has deleted the following objects:
- {Entity1}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})
- {Entity2}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})
...
- {EntityN}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})

Please refer to the documentation to learn more about this issue and how to solve it:
https://docs.mendix.com/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/auto-committed-objects/
```

#### Created While Executing a Microflow

Auto-committed objects created inside microflows that are called from a nanoflow will remain in the database. An error will be logged when the user's session expires unless auto-committed objects are explicitly committed or deleted.

### Native Mobile Apps {#native-apps}

In Mendix 9.17 and below, auto-committed objects remain in the database regardless of how they are created. An error will be logged when the user's session expires unless auto-committed objects are explicitly committed or deleted.

In Mendix 9.18 and above, auto-committed objects created during synchronization are deleted immediately after the synchronization. When this happens, a warning is logged in the `Offline Synchronization` node:

```text
The offline synchronization detected {count} auto-committed objects during synchronization executed by {user}. Auto committed objects are not supported during offline synchronization. The Mendix runtime has deleted the following objects:
- {Entity1}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})
- {Entity2}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})
...
- {EntityN}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})

Please refer to the documentation to learn more about this issue and how to solve it:
https://docs.mendix.com/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/auto-committed-objects/
```

Auto-committed objects created inside microflows that are called from a nanoflow will remain on the database.

## Customizing the Auto-Commit Handling Behavior

A custom runtime setting (`com.mendix.offline.DeleteAutoCommittedObjectsAfterSync`) is available to disable deleting the auto-committed objects created during synchronization. This setting can be used in apps from Mendix Studio Pro 9.18 and above.

This setting is intended for offline-first apps created in Mendix 9.17 and below to keep the previous behavior. Disabling this setting for new applications is not recommended. For details on changing this setting, see [Advanced Custom Settings in Mendix Runtime](/refguide9/tricky-custom-runtime-settings/#general-settings)
