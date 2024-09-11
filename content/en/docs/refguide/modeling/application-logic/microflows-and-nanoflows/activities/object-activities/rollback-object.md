---
title: "Rollback Object"
url: /refguide/rollback-object/
weight: 70
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

## Introduction

The **Rollback object** activity can be used to undo changes (that have not been committed) made to the object in the part of the flow preceding the activity. Furthermore, it deletes objects that have been created but never committed.

{{% alert color="info" %}}
When the rollback object activity is performed in a sub-microflow, it rolls back the changes in its parent microflow as well as in the sub-microflow.
{{% /alert %}}

## Properties

An example of rollback object properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/rollback-object/rollback-properties.png" alt="rollback object properties" width="650px" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The rollback object properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Object

**Object** defines the object that needs to be rolled back.

### Refresh in Client

This setting defines how changes are reflected in the pages presented to the end-user.

Default: **No**

{{% alert color="info" %}}
To make pages of a Mendix app efficient, many widgets display values from an attribute of an object which is cached on the page. Attributes in widgets which use cached data are always reflected in the client even if they are not committed and irrespective of the value of **Refresh in client**.

If a widget is only updated when a [data source](/refguide/data-sources/) is loaded, then rollbacks will only be seen if they are committed and **Refresh in client** is set to **Yes**.

When testing your app, ensure that the desired data is being displayed by the widgets you have chosen.
{{% /alert %}}

#### Microflow Is Called from the Client in an Online App

If **Refresh in client** is set to **No**, the rollback is not reflected in the client.

If set to **Yes**, the object is refreshed across the client, which includes reloading the relevant [data sources](/refguide/data-sources/).

#### Microflow Is Called in an Offline or Native App

When inside a microflow that is called from an offline or native app, the **Refresh in client** option is ignored and functions as if it was set to **No**.

For more information, see the [Microflows](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of Offline-First Data.

#### Action Is in a Nanoflow

When inside a [nanoflow](/refguide/nanoflows/), the rollback object activity reloads [data sources](/refguide/data-sources/) as if **Refresh in client** was set to **Yes**.

## Common Section{#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## What Does Rollback Do?

{{% alert color="info" %}}
A rollback object activity in a microflow or nanoflow is not the same as the rollback option on an [Error Event](/refguide/error-event/) in a microflow.

A rollback from an error event does not trigger any rollback events, and does not reflect whether changes to objects have been committed.
{{% /alert %}}

Pressing a **Cancel** button or triggering a rollback object activity will initiate the rollback events.

* Events:
    * All before and after events are executed
    * If any before-rollback event returns false, an exception can be thrown
    * If an exception occurs during an event, all the applied changes are reverted with the default error handling behavior
    * Changes made prior to the rollback are kept
* Database:
    * There is no database communication happening during this event unless it is specified in a before- or after-create event
* Result:
    * An object with the state **Instantiated** will be removed, and an object with any other state will be reverted back to the values it had during the last commit

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/rollback-object/during-rollback.png" class="no-border" >}}

{{% alert color="warning" %}}
The **Committing** state of the **IMendixObject** is deprecated.
{{% /alert %}}
