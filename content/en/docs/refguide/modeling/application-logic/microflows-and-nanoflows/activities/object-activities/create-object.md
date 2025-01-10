---
title: "Create Object"
url: /refguide/create-object/
weight: 40
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

## Introduction

The **Create object** activity can be used to create an object.

## Properties

An example of create object properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/create-object/create-properties.png" alt="create object properties" width="700px" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The create object properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Entity

The entity of which you want to create an object.

### Commit

**Commit** defines the way the object is committed. For more information on committing, see the section [How Commits Work](/refguide/committing-objects/#how-commits-work) in *Commit Object(s)*.

| Option | Description |
| --- | --- |
| Yes with event handlers | The object is saved in the database and the [event handlers](/refguide/event-handlers/) are triggered. |
| Yes without event handlers | The object is saved in the database, but the [event handlers](/refguide/event-handlers/) are not triggered. |
| No *(default)*  | The object is changed without being saved in the database. |

#### Commits in Nanoflows

Nanoflows do not support committing changes without events. Committing while running in an online app sends a commit request to the Mendix Runtime and runs the events. If a change object activity is used in an offline app, the changes are committed to the offline database.

### Refresh in Client

This setting defines how changes are reflected in the pages presented to the end-user.

Default: **No**

#### Microflow Is Called from the Client in an Online App

If **Refresh in client** is set to **No**, the change is not reflected in any widgets in the client.

If **Commit** and **Refresh in client** are both set to **Yes**, [data sources](/refguide/data-sources/) are reloaded and the new object's values are displayed in relevant widgets.

#### Microflow Is Called in an Offline or Native App

When inside a microflow that is called from an offline or native app, the **Refresh in client** option is ignored and functions as if it was set to **No**.

For more information, see the [Microflows](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of Offline-First Data.

#### Action Is in a Nanoflow

In a nanoflow, the create object action reloads [data sources](/refguide/data-sources/) as if **Refresh in client** was set to **Yes**.

### Change Members

You can set the values of members (attributes and associations) of the newly created object to be different from the default value set in the [entity](/refguide/entities/). Values for members are specified with an [expression](/refguide/expressions/) and must be of the same type as the member.

### Object Name

This is the name of the resulting object which can be used by all activities that follow this activity.

## Common Section{#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## What Happens During a Create?

Wherever an object is initialized, all the events are always executed. The default **Create** button, a create activity in a microflow and web services always follows the steps described in the image below.

* Events:
    * All before and after events are executed, and if any before-create event returns false, an exception can be thrown
    * If an exception occurs during an event, all the changes are reverted with the default error handling behavior
* Database:
    * There is no database communication happening during this event unless it is specified in a before- or after-create event
* Result:
    * A new object is available after these triggers
    * The object has the **Instantiated** state
    * This influences the behavior in the other object actions

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/create-object/during-creates.png" class="no-border" >}}

{{% alert color="info" %}}
Any changes made to an object are visible in all widgets. This is because changes are stored globally in the client.
{{% /alert %}}
