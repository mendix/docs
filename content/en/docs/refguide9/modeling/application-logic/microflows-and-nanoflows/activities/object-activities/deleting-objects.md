---
title: "Delete Object(s)"
url: /refguide9/deleting-objects/
weight: 50
---

## Introduction

The **Delete object(s)** activity can be used to delete one or more objects.

## Properties

An example of delete object properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/deleting-objects/delete-properties.png" alt="delete object properties" class="no-border" >}}

This activity cannot be used to delete [external objects](/refguide9/external-entities/). Use the [Delete External Object](/refguide9/delete-external-object/) activity to delete external objects.

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The delete object properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Object or List

The name of the object or list of objects that will be deleted. If you choose a list, all objects in that list will be deleted.

### Refresh in Client

This setting defines whether data sources are rerun after objects are deleted from the database.

Default: **No**

{{% alert color="info" %}}
To make pages of a Mendix app efficient, many widgets display values from an attribute of an object which is cached on the page. Attributes in widgets which use cached data are always reflected in the client even if they are not committed and irrespective of the value of **Refresh in client**. When an object is deleted, it will display any attributes as null, but the object will still be displayed (for example, there will be a blank entry for the deleted object in a list view).

If **Refresh in client** is set to **Yes**, then all widgets are updated, including those which are only updated when a [data source](/refguide9/data-sources/) is loaded. 

When testing your app, ensure that the desired data is being displayed by the widgets you have chosen.
{{% /alert %}}

#### Activity Used in a Microflow Called from the Client in a Responsive Web App or PWA

If **Refresh in client** is set to **No**, the data sources are not rerun, and widgets which need to reload data will still display the object(s).

If set to **Yes**, the deletion is reflected across the client, which includes reloading the relevant [data sources](/refguide9/data-sources/).

#### Activity Used in a Microflow Called in an Offline-First App

When inside a microflow that is called from an offline, native, or hybrid app, the **Refresh in client** option is ignored and functions as if it was set to **No**.

For more information, see the [Microflows](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of Offline-First Data.

#### Activity Used in a Nanoflow {#delete-in-nano}

The **Refresh in client** option is not configurable when the activity is used in a nanoflow. 

All changes immediately take effect in the client while executing such a nanoflow, similar to when **Refresh in client** is set to **Yes**.

## Limitations

When using the activity in a nanoflow accessible from an offline profile, please note the following limitations:

* Deleting non-persistable objects is not supported
* If the entity of an object passed to the activity has any associations with other entities in the domain model, the delete behavior for each of those associations must be set to **Keep {associated entity name} object(s)** (for more details, see the [example below](#delete-example))
* Setting a different delete behavior option triggers a consistency error
* Before and after delete events are only triggered upon synchronization of the deleted object
* Before and after delete events are not triggered for an object that does not exist in the runtime database
* When you create an object in the client and optionally commit it, it does not exist in the runtime database until you synchronize it
    * Deleting such an object removes it from the device and does not require synchronization, and therefore the before and after events of the corresponding entity will not be triggered

For more information on associations' delete behavior, see the [Delete Behavior](/refguide9/association-properties/#delete-behavior) section of Association Properties.

### Example {#delete-example}

The following example shows that one **Customer** object is associated with multiple **Order** objects:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/deleting-objects/delete-limitations-example-0.png"   width="350"  class="no-border" >}}

The **On delete of 'Customer' object** option below should be set to **Keep 'Order' objects**:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/deleting-objects/delete-limitations-example-1.png"   width="350"  class="no-border" >}}

## Common Section{#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}

## What Happens During a Delete? 

### Activity Used in a Microflow or a Nanoflow in a Responsive Web App or PWA

Clicking a **Delete** button or triggering a delete activity will initiate delete events. In addition, when an object is removed through the configured delete behavior, it will execute all before and after events.

In detail, the following graph shows what happens during deletions:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/deleting-objects/during-deletes.png" class="no-border" >}}

{{% alert color="info" %}}
The **Committing** state of the **IMendixObject** is deprecated.
{{% /alert %}}

{{% alert color="warning" %}}
The **Delete object(s)** activity also removes the variable from the microflow. Be careful not to use the variable anymore after using it in a **Delete object(s)** activity.
{{% /alert %}}

* Events:
    * All before and after events are executed, and if any before-delete event returns false, an exception can be thrown
    * If an exception occurs during an event, all the applied changes are reverted with the default error handling behavior
    * Changes made prior to the rollback are kept
* Database:
    * If an object has the **Instantiated** state, there will be no database communication required
    * For any other status, a delete query is executed in the database
* Result:
    * The object is be removed from memory and (if applicable) from the database
    * All delete behavior for the associations is validated, and any associated objects are removed as well

### Activity Used in a Nanoflow in an Offline-First App 

Depending on the type of an object being deleted, the client acts as described below.

#### Deleting a Persistable Object Which Has Not Been Committed  

1. Removes the object from memory.
1. Searches the device database for all objects that reference the deleted object.
1. Clears all references to the deleted object from all objects found previously.

No before or after delete events will be executed in this case.

#### Deleting a Committed Persistable Object That Has Not Been Synchronized with the Runtime

1. Removes the object from memory.
1. Searches the device database for all objects that reference the deleted object.
1. Clears all references to the deleted object from all objects found previously.
1. Deletes the object from the device database.
1. Clear all references to the deleted object from any uncommitted objects.

No before or after delete events will be executed in this case.

#### Deleting a Persistable Object That Exists in the Runtime Database

1. Removes the object from memory.
1. Searches the device database for all objects that reference the deleted object.
1. Clears all references to the deleted object from all objects found previously.
1. Deletes the object from the device database.
1. Marks the object as deleted in the offline database, which makes it possible to synchronize the deletion with the server.

Before and after events for the deleted object will be executed upon synchronization.

#### Deleting a Non-Persistable Object

Deleting a NPE is not supported in a nanoflow in an offline-first app.
