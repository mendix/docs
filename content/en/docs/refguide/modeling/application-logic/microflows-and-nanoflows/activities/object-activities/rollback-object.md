---
title: "Rollback Object"
url: /refguide/rollback-object/
parent: "object-activities"
menu_order: 70
tags: ["studio pro"]
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The rollback object action can be used to undo changes (that have not been committed) made to the object in the part of the flow preceding the activity. Furthermore, it deletes objects that have been created but never committed.

{{% alert type="info" %}}
When the rollback object action is performed in a sub-microflow, it rolls back the changes in its parent microflow as well as the sub-microflow.
{{% /alert %}}

## 2 Properties

An example of rollback object properties is represented in the image below:

![rollback object properties](/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/rollback-object/rollback-properties.png)

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The rollback object properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Object

**Object** defines the object that needs to be rolled back.

### 3.2 Refresh in Client

This setting defines how changes are reflected in the pages presented to the end-user.

Default: *No*

{{% alert type="info" %}}
To make pages of a Mendix app efficient, many widgets display values from an attribute of an object which is cached on the page. Attributes in widgets which use cached data are *always* reflected in the client even if they are not committed and irrespective of the value of **Refresh in client**.

If a widget is only updated when a [data source](/refguide/data-sources/) is loaded, then rollbacks will only be seen if they are committed and **Refresh in client** is set to *Yes*.

When testing your app, ensure that the desired data is being displayed by the widgets you have chosen.
{{% /alert %}}

#### 3.2.1 Microflow Is Called from the Client in an Online App

If **Refresh in client** is set to *No*, the rollback is not reflected in the client.

If set to *Yes*, the object is refreshed across the client, which includes reloading the relevant [data sources](/refguide/data-sources/).

#### 3.2.2 Microflow Is Called in an Offline, Native, or Hybrid App

When inside a microflow that is called from an offline, native, or hybrid app, the **Refresh in client** option is ignored and functions as if it was set to **No**.

For more information, see the [Microflows](/refguide/offline-first/#microflows) section of the *Offline-First Reference Guide*.

#### 3.2.3 Action Is in a Nanoflow

When inside a [nanoflow](/refguide/nanoflows/), the rollback object action reloads [data sources](/refguide/data-sources/) as if **Refresh in client** was set to *Yes*.

## 4 Common Section{#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}

## 5 What Does Rollback Do?

{{% alert type="info" %}}
A rollback action in a microflow or nanoflow is not the same as the rollback option on an [Error Event](/refguide/error-event/#errors-in-microflows) in a microflow.

A rollback from an error event does not trigger any rollback events, and does not reflect whether changes to objects have been committed.
{{% /alert %}}

Pressing a **Cancel** button or triggering a rollback activity will initiate the rollback events.

* **Events**: all before and after events are executed
    * If any before-rollback event returns false, an exception can be thrown
	* If an exception occurs during an event, all the applied changes are reverted with the default error handling behavior
	* Changes made prior to the rollback will be kept
* **Database**: there is no database communication happening during this event unless it is specified in a before- or after-create event
* **Result**: an object with the state **Instantiated** will be removed, and an object with any other state will be reverted back to the values it had during the last commit

![](/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/rollback-object/18582170.png)
