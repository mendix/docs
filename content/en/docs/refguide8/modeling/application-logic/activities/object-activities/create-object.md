---
title: "Create Object"
url: /refguide8/create-object/
weight: 40
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/create-object.pdf).
{{% /alert %}}

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The create object activity can be used to create an object.

## 2 Properties

An example of create object properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/object-activities/create-object/create-properties.png" alt="create object properties" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The create object properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Entity

The entity of which you want to create an object.

### 3.2 Commit

**Commit** defines the way the object is committed. See the section [How Commits Work](/refguide8/committing-objects/#how-commits-work) in *Commit Object(s)* for more information on committing.

| Option | Description |
| --- | --- |
| Yes with event handlers | The object is saved in the database and the [event handlers](/refguide8/event-handlers/) are triggered. |
| Yes without event handlers | The object is saved in the database, but the [event handlers](/refguide8/event-handlers/) are not triggered. |
| No *(default)*  | The object is changed without being saved in the database. |

#### 3.2.1 Commits in Nanoflows

Nanoflows do not support committing changes without events. Committing while running in an online app sends a commit request to the Mendix Runtime and runs the events. If a change object action is used in an offline app, the changes are committed to the offline database.

### 3.3 Refresh in Client

This setting defines how changes are reflected in the pages presented to the end-user.

Default: *No*

#### 3.3.1 Microflow Is Called from the Client in an Online App

If **Refresh in client** is set to *No*, the change is not reflected in any widgets in the client.

If **Commit** and **Refresh in client** are both set to *Yes*, [data sources](/refguide8/data-sources/) are reloaded and the new object's values are displayed in relevant widgets.

#### 3.3.2  Microflow Is Called in an Offline, Native, or Hybrid App

When inside a microflow that is called from an offline, native, or hybrid app, the **Refresh in client** option is ignored and functions as if it was set to **No**.

For more information, see the [Microflows](/refguide8/offline-first/#microflows) section of the *Offline-First Reference Guide*.

#### 3.3.4  Action Is in a Nanoflow

In a nanoflow, the create object action reloads [data sources](/refguide8/data-sources/) as if Refresh in client was set to *Yes*.

### 3.4 Change Members

You can set the values of members (attributes and associations) of the newly created object to be different from the default value set in the [entity](/refguide8/entities/). Values for members are specified with an [expression](/refguide8/expressions/) and must be of the same type as the member.

### 3.5 Object Name

This is the name of the resulting object which can be used by all activities that follow this activity.

## 4 Common Section{#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}

## 5 What Happens During a Create?

Wherever an object is initialized, all the events are always executed. The default **Create** button, a create activity in a microflow, and web services will always follow the steps described in the image below.

* Events: all before and after events are executed, and if any before-create event returns false, an exception can be thrown
	* If an exception occurs during an event, all the changes are reverted with the default error handling behavior
* Database: there is no database communication happening during this event unless it is specified in a before- or after-create event
* Result: a new object is available after these triggers
	* The object will have the **Instantiated** state
	* This influences the behavior in the other object actions

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/object-activities/create-object/18582173.png" >}}
