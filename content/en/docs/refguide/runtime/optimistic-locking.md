---
title: "Optimistic Locking"
url: /refguide/optimistic-locking/
description: "Describes optimistic locking support."
beta: true
---

## Introduction

{{% alert color="info" %}}
This feature is available in Beta starting with Mendix version 11.5.0.
{{% /alert %}}

Optimistic locking is a strategy used in concurrent systems to prevent lost updates when multiple users or processes try to modify the same piece of data at the same time. Instead of locking the data immediately, and preventing other users from accessing it, optimistic locking allows multiple users to read, and potentially modify, the same data concurrently. In optimistic locking, the assumption is that conflicts are rare, so it checks for conflicts only at the very last moment, when an update is attempted.

If a conflict is detected—meaning someone else has modified the data since you last read it—your update is rejected, and you typically have to re-read the data and try again.

You can decide whether optimistic locking is enabled or disabled for your app.

## Behavior of App with Optimistic Locking Disabled

When two modifications are saved, they are applied in the order of processing. Only changed attributes are written to the database. This means that if the two commits change different attributes or associations of an object, the changes are not overwritten.

For example, if one user commits changes for `AttributeA` and `AttributeB` and another user commits changes for `AttributeB` and `AttributeC` for the same object, then both `AttributeA` and `AttributeC` are committed according to both users' changes. `AttributeB` is committed based on whichever change was committed later.

## Behavior of App with Optimistic Locking Enabled

The Mendix runtime implements optimistic locking by tracking the version of all objects using the attribute `MxObjectVersion` with type `Long`. Although the `MxObjectVersion` attribute is not write-protected, setting this value does not result in it being saved to the database. Its current value is compared with the value for the same object in the database.

### How to Enable and Use Optimistic Locking

You can enable optimistic locking for your Mendix application in the `Runtime` tab in the **App Settings** dialog:

{{< figure src="/attachments/refguide/runtime/optimistic-locking/runtime-settings-dialog.png" >}}

After optimistic locking is enabled, whenever a commit is executed, the Mendix runtime automatically ensures that the object that is committed was not already changed by another party after the committer retrieved the object.

### New Projects and Migration

If an existing app already has the `MxObjectVersion` attribute, a duplicate attribute is reported in Studio Pro when optimistic locking is enabled. This must be fixed by renaming the existing attribute. The system attribute cannot be renamed.

### Behavior

The following runtime actions are influenced by optimistic locking.

#### Create Object

Initializes the `MxObjectVersion` attribute to `0`.

#### Commit Object

When the `MxObjectVersion` attribute in the object being committed is different from the value in the database, or the object was deleted from the database, the runtime throws a `ConcurrentModificationRuntimeException`. Otherwise, it proceeds with the commit while incrementing `MxObjectVersion` by one.

#### Delete Object

When the `MxObjectVersion` attribute in the object being deleted is different from the value in the database, the runtime throws a `ConcurrentModificationRuntimeException`. Otherwise, it proceeds with the delete. If the object has already been deleted, no error occurs.

## Performance Impact

Because of the version check performed during commit and delete, optimistic locking incurs some minor performance impact.

## Handling Optimistic Locking Errors in Microflows{#microflow-errors}

When an optimistic locking error occurs, the runtime log contains an entry similar to the following:

```
com.mendix.modules.microflowengine.MicroflowException:
com.mendix.core.CoreRuntimeException:
com.mendix.systemwideinterfaces.MendixRuntimeException:
com.mendix.core.CoreException:
com.mendix.core.CoreRuntimeException:
com.mendix.systemwideinterfaces.MendixRuntimeException:
com.mendix.systemwideinterfaces.connectionbus.data.ConcurrentModificationRuntimeException:
Object of type 'MyFirstModule.MyEntity' with guid '3940649673949185' cannot be updated, as it is modified by someone else at MyFirstModule.MyMicroflow (Change : 'Change 'MyEntity'')
```

This error shows that there was a `ConcurrentModificationRuntimeException` while executing the `Change 'MyEntity'` change action of the `MyFirstModule.MyMicroflow` microflow. The object had the `3940649673949185` ID and was of type `MyFirstModule.MyEntity`.

If committing an object causes an optimistic locking error, trying to commit the same object without reloading always results in an optimistic locking error.

If the changes are still deemed valid, you can retry the action causing the optimistic locking error by doing the following:

1. Change the error handling for that action to either `Custom with Rollback` or `Custom without Rollback`, and do the following steps in the error flow.
2. If `$latestError/ErrorType` is `com.mendix.systemwideinterfaces.connectionbus.data.ConcurrentModificationRuntimeException`.
3. Retrieve a fresh copy of the object from the database.
4. Apply the original changes to the retrieved copy.
5. Perform the operation again.

You can see an example implementation in the following image. The change action has error handling `Custom without Rollback`. If an optimistic locking error is detected, the latest version of the object is retrieved from the database, changes are applied again, and the change action is retried.

{{< figure src="/attachments/refguide/runtime/optimistic-locking/retry-example.png" >}}

Check the [documentation](https://docs.mendix.com/refguide/error-handling-in-microflows/) about error handling to find more information about differences between `Custom with Rollback` and `Custom without Rollback`.

## Handling Optimistic Locking Errors in Java Actions

You can handle optimistic locking errors in Java actions using similar steps to those described in [Handling Optimistic Locking Errors in Microflows](#microflow-errors). However, the `com.mendix.systemwideinterfaces.connectionbus.data.ConcurrentModificationRuntimeException` exception will not be the top level exception thrown by the Mendix runtime. It will be wrapped in another exception, so you need to inspect the `cause` chain of caught exceptions.

## Handling Optimistic Locking Errors in the Client

If the optimistic locking error is propagated to the client, the following error is displayed: "The data you're trying to save has already been modified by another user. Please refresh the page and try again."

{{< figure src="/attachments/refguide/runtime/optimistic-locking/optimistic-locking-error-dialog.png" >}}

You can implement one of the following approaches to handle the optimistic locking error:

### Single `Save` Button

In this case the user can refresh the whole page, but this causes all their changes to be lost.

### `Save` Button With a Separate `Refresh` Button

Add a separate `Refresh` button that retrieves the latest object state from the database and applies the original changes to the retrieved object. After clicking the `Refresh` button, the user can inspect the latest state and can click the `Save` button again. This would be similar to a single retry from [Handling Optimistic Locking Errors in Microflows](#microflow-errors).

### Custom `Save` Button

Implement a custom `Save` button that retries saving object using similar steps described in [Handling Optimistic Locking Errors in Microflows](#microflow-errors), to retry until successful.
