---
title: "Commit Object(s)"
parent: "object-activities"
menu_order: 30
tags: ["studio pro"]
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The **Commit** activity can commit one or more objects. For persistable entities this means that the object will be stored in the database. Committing non-persistable entities stores the current attribute values and association values in memory, this allows a rollback to revert to those values. See also [Persistability](persistability).

## 2 Properties

An example of commit object(s) properties is represented in the image below:

![commit object(s) properties](attachments/object-activities/commit-properties.png)

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The commit object(s) properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

The Action section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Object or List

The object or list of objects that you want to commit.

### 3.2 With Events

{{% alert type="info" %}}
This property is for microflows only.
{{% /alert %}}

Indicates whether or not to execute the commit event handlers of the objects.

Default: *Yes*

#### 3.2.1 Events in Nanoflows

Nanoflows do not have this property.

If the commit object(s) action is used in an online app, it sends a commit request to the Mendix Runtime and always runs the events.

If the commit object(s) action is used in an offline app, the changes are committed to the offline database, and event handlers are run when the offline app synchronizes.

### 3.3 Refresh in Client{#refresh-in-client}

This setting defines how changes are reflected in the pages presented to the end-user.

Default: *No*

#### 3.3.1 Microflow is Called from the Client in an Online App

If **Refresh in client** is set to *No*, the change is not reflected in the client.

If set to *Yes*, the object is refreshed across the client, which includes reloading the relevant [data sources](data-sources).

{{% alert type="info" %}}
Changed attribute values are *always* reflected in the client. The object is refreshed from the Mendix Runtime, which includes updating virtual attributes.
{{% /alert %}}

{{% alert type="warning" %}}
When committing a large number of objects, we recommend that you do not enable 'Refresh in client' because it can slow things down.
{{% /alert %}}

#### 3.3.2 Microflow is Called in an Offline, Native, or Hybrid App

When inside a microflow that is called from an offline, native, or hybrid app, the **Refresh in client** option is ignored and functions as if it was set to **No**.

For more information, see the [Microflows](offline-first#microflows) section of the *Offline-First Reference Guide*.

#### 3.3.3 Action is in a Nanoflow

When inside a [nanoflow](nanoflows), the object is refreshed across the client as if **Refresh in client** was set to *Yes*.

## 4 Common Section{#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}

## 5 How Commits Work{#how-commits-work}

When an object is committed through a default Save button, a commit activity, or web services, it will always trigger the commit events. The platform will also evaluate all associated objects. To guarantee data consistency, the platform may also autocommit associated objects.

An autocommit is an automatic commit from the platform, which is done to keep the domain model in sync. If your application ends up having autocommitted objects, then you will have a modeling error. Since an association is also a member of an object, the association will be stored in the database as well. This means that if you create an order line inside an order and the order line is the parent of the association, when you commit the order line, the order will be autocommitted.

{{% alert type="warning" %}}
An autocommit is not the same as an explicit commit!

If a rollback is triggered for any reason (for example, if the user session is terminated by the user closing the browser), then autocommitted objects will be deleted from the database. See [Persistability](/refguide/persistability) for more information about how Mendix handles persistable objects.
{{% /alert %}}

If you end up with autocommitted objects, it is always because of a modeling error. At some point in time, an association was set to a new object, the associated object was committed, and all of its associations were committed as well to keep all the data consistent.

For both explicitly committed and autocommitted objects, the following will occur:

* Events: all before and after events are executed, and if any before-rollback event returns false, an exception can be thrown
	* If an exception occurs during an event, all the applied changes are reverted with the default error handling behavior
	* Changes made prior to the commit will be kept
* Database: there is an insert or update query executed
	* Depending on the object state, the platform will do an insert for objects with the state **Instantiated** and an update for all other states
* Result: an object with the state Instantiated will be inserted into the database, and an object with any other state will be updated

![](attachments/object-activities/18582172.png)
