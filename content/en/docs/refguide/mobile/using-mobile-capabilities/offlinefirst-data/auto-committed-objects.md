---
title: "Synchronization & Auto-Committed Objects "
url: /refguide/mobile/using-mobile-capabilities/offlinefirst-data/auto-committed-objects/
weight: 40
description: "Describes when offline sync can create auto-committed objects and suggests solutions to solve it."
tags: ["offline", "offline-first", "auto-committed", "autocommitted"]
# If moving or renaming this doc file, implement a permanent redirect and let the respective team (R&D/AppDev/Frontend/Mobile Offline Team) update the URL in the product.
---

## 1 Introduction

Auto-committed objects are Mendix objects committed to the database automatically because the app commits another object that references the auto-committed object. To learn more about auto-committed objects, see [Autocommit and Associated Objects](/refguide/committing-objects/#52-autocommit-and-associated-objects).

## 2 Do Offline-First Apps Have an Auto-Commit logic?

Offline-first apps do not have an auto-commit logic. When you commit an object that references another (new) object in an offline-first app, the Mendix Client will only commit the original object and not the referenced object. This means the local database has an invalid reference until the app explicitly commits the referenced object.

Here is an example domain model that showcases this situation:

{{< figure src="/attachments/refguide/mobile/offline-first/example-domain-model.png" width="1242px" alt="Example domain model with an Customer and Order entity, connected by an one-to-many association which indicates a Customer can have multiple Orders">}}

To continue the example, here is the related nanoflow:

{{< figure src="/attachments/refguide/mobile/offline-first/flow-creating-invalid-customer-reference.png" width="1508px" alt="A nanoflow creating a Customer and an Order, associating them, and only committing the Order instance">}}

The example above saves the `$NewOrder` object to the local database, including the association value referencing the uncommitted `$NewCustomer` object. However, since the `$NewCustomer` is not yet committed the reference is invalid. To solve this issue the nanoflow must commit the `$NewCustomer` object.

Assume a user closes the app right after the example nanoflow has run. Since the `$NewCustomer` object is stored only in memory, it will be gone. The `$NewOrder` object references a customer object which no longer exists. When you try the synchronize `$NewOrder` later, it will fail due to the dangling reference error. You must set the reference to `empty` to successfully synchronize this object. To learn more about dangling references, see the [Dangling References](refguide/mobile/using-mobile-capabilities/offlinefirst-data/synchronization/#dangling-references) section of *Offline Synchronization*.

Finally, it is true that an offline-first app *can* create auto-committed objects on the runtime database. However, although auto-committed objects help ensure database consistency in web applications, creating auto-committed objects in offline-first apps is *not recommended*.

## 3 Why are auto-committed objects not recommended in offline-first apps?

Auto-committed objects live until the user's session expires. When the user's session expires, the Mendix Runtime deletes any auto-committed objects created in that session. This logic works well for web applications, but is not a good fit for offline-first apps for the following reasons:

* **Long-lived Sessions** – Offline-first progressive web applications use [long-lived-sessions](refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/#52-sessions) with longer session timeout by default. This causes auto-committed objects to remain on the server database as long as the session is active. Other PWA users could synchronize the auto-committed to their local databases. Suppose a user changes and attempts to synchronize an auto-committed object with validation problems. In that case, the server may fail to synchronize it.
* **Session Expiration** – Native mobile apps use regular sessions that expire according to the [`SessionTimeout` runtime setting](refguide/tricky-custom-runtime-settings/#22-general-settings). A session on the server may expire as the user uses the app. The server will remove any auto-committed objects, even if the end-user still interacts with the app, which can cause unexpected behaviors. For example, suppose the user changes the auto-committed object and attempts to synchronize. In that case, the Mendix runtime won't be able to do that because the runtime database no longer has this object.
    * It is useful to keep in mind that a native session may expire on the server if the end-user uses the app while there is no network condition. When this happens, the Mendix client attempts to create a new session automatically when the device sends a request to the runtime.  
* **Auto-Committed Objects as Regular Objects** – Auto-committed objects can be synchronized to other users' local databases and treated as regular objects, which may cause the following problems:
  * The Mendix runtime does not run any validations or event handler microflows while auto-committing an object. Therefore, auto-committed objects synchronized to local databases may be invalid or incomplete. This may lead to bugs in the app model (nanoflows, UI, etc.) if the app model is not resistant to invalid objects.
  * The synchronization may fail if a user changes and synchronizes an (invalid) auto-committed object.
* **Delete Behavior Issues** – The Mendix Runtime may delete other associated objects while deleting the auto-committed objects at the end of a session. This can happen if the association's [delete behavior](refguide/association-properties/#delete-behavior) is set to deleting associated objects.

## 4 How can an offline-first app create auto-committed objects?

Even though an offline-first app always works against the local database, it can still execute logic on the runtime, creating auto-committed objects.

### 4.1 Calling Microflows

An offline-first app can call microflows on the runtime, creating auto-committed objects. See the following example below.

{{< figure src="/attachments/refguide/mobile/offline-first/flow-creating-invalid-customer-reference.png" width="1508px" alt="A microflow creating a Customer and an Order, associating them, and only committing the Order instance">}}

In the microflow above, the commit action of the `$Order` object will auto-commit the `$Customer` object.

#### 4.1.1 How to prevent it?

Explicitly commit any new objects created in microflows executed in an offline-first app.

### 4.2 Synchronization

During synchronization, the Mendix runtime may create new objects and commit/delete existing objects. Suppose event handler microflows are defined on the domain model for the synchronized entities. In that case, the Mendix runtime will execute them. 

A more complex way to create auto-committed objects is when the synchronization of an object fails due to an error, but others succeed. See the example nanoflow:

{{< figure src="/attachments/refguide/mobile/offline-first/nanoflow-causing-auto-committed-object.png" width="711px" alt="A nanoflow creating an invalid Customer object, creating a valid Order object associated with the new Customer object, and synchronizing them">}}

Assume the `$NewCustomer` object is invalid due to a missing required attribute value; therefore, the runtime can't synchronize it. Here is what happens in the Mendix runtime:

* The runtime will receive both `$NewCustomer` and `$NewOrder`. It will commit each object one after another.
* The runtime commits the `$NewOrder` object first.
  * Since `$NewOrder` references `$NewCustomer`, the runtime will auto-commit the `$NewCustomer`, without performing data validation or executing event handlers.
* The runtime attempts to commit `$NewCustomer`.
  * The commit fails due to the validation error. Synchronization creates a `System.SynchronizationError` entry for this object and continues.
* The `$NewCustomer` object remains auto-committed.

#### 4.2.1 How to prevent it?

Solve the root cause of the validation failure. 

## 5 How does Mendix handle auto-committed objects in an offline-first app?

Handling auto-committed objects depend on the application type and the Mendix version.

### 5.1 Offline-first Progressive Web Apps

#### 5.1.1 Created during synchronization

The Mendix runtime will delete auto-committed objects created during synchronization. It will also log a warning in the `Offline Synchronization` log node.

The contents of the log message depend on the Mendix version:

Mendix 9.16 and below:

```
Some autocommitted objects still existed after synchronize action is executed by {user}. This is not allowed in offline-first PWA apps, because they use long-lived sessions. Autocommitted objects are newly created objects which were not yet committed, but are inserted into the database because an associated object was committed. Autocommitted objects should explicitly have been committed, please check your model and apply the necessary changes. The autocommitted objects have been deleted from the database to prevent database corruption. Number of autocommitted objects per type which still existed after synchronizing the objects:

- {Entity1}: {count} object(s)
- {Entity2}: {count} object(s)
...
- {EntityN}: {count} object(s)
```

Mendix 9.18 and above:

```
The offline synchronization detected {count} auto-committed objects during synchronization executed by {user}. Auto committed objects are not supported during offline synchronization. The Mendix runtime has deleted the following objects:
- {Entity1}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})
- {Entity2}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})
...
- {EntityN}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})

Please refer to the documentation to learn more about this issue and how to solve it:
https://docs.mendix.com/refguide/mobile/using-mobile-capabilities/offlinefirst-data/auto-committed-objects/
```

#### 5.1.2 Created while executing a microflow

Auto-committed objects created inside microflows that are called from a nanoflow will remain in the database. An error will be logged when the user's session expires unless auto-committed objects are explicitly committed or deleted.

### 5.2 Native mobile apps

On Mendix 9.16 and below, Auto-committed objects remain in the database regardless of how they are created. An error will be logged when the user's session expires unless auto-committed objects are explicitly committed or deleted.

On Mendix 9.18 and above, auto-committed objects created during synchronization are deleted immediately after the synchronization. When this happens, a warning is logged in the `Offline Synchronization` node.

```
The offline synchronization detected {count} auto-committed objects during synchronization executed by {user}. Auto committed objects are not supported during offline synchronization. The Mendix runtime has deleted the following objects:
- {Entity1}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})
- {Entity2}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})
...
- {EntityN}: {count} object(s) - ({guid1}, {guid2}, ... {guidN})

Please refer to the documentation to learn more about this issue and how to solve it:
https://docs.mendix.com/refguide/mobile/using-mobile-capabilities/offlinefirst-data/auto-committed-objects/
```

Auto-committed objects created inside microflows that are called from a nanoflow will remain on the database.

## 6 Customizing the auto-commit handling behavior

A new custom runtime setting (`com.mendix.offline.DeleteAutoCommittedObjectsAfterSync`) is available to disable deleting the auto-committed objects created during synchronization. This setting is intended for offline-first apps created in Mendix versions earlier than 9.18 to keep the previous behavior. Disabling this setting for new applications is not recommended. For details on how to change this setting, refer to the following documentation: [Advanced Custom Settings in Mendix Runtime](refguide/tricky-custom-runtime-settings/#22-general-settings)
