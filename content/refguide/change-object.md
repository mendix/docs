---
title: "Change Object"
parent: "object-activities"
menu_order: 20
tags: ["studio pro"]
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The change object activity can be used to change the members of an object. This can be done with or without committing and with or without events.

## 2 Properties

An example of change object properties is represented in the image below:

![change object properties](attachments/object-activities/change-properties.png)

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The change object properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Object

**Object** defines the object that is changed.

### 3.2 Commit

**Commit** defines the way the object is committed. See the section [How Commits Work](committing-objects#how-commits-work) in *Commit Object(s)* for more information on committing.

| Option | Description |
| --- | --- |
| Yes with event handlers | The object is saved in the database and the [event handlers](event-handlers) are triggered |
| Yes without event handlers | The object is saved in the database, but the [event handlers](event-handlers) are not triggered |
| No *(default)*| The object is changed without being saved in the database |

#### 3.2.1 Use Cases for Setting Commit

If a flow is triggered from a data view (for example by the 'on change' of an text field) you often do not want to commit the changes you make to the data view object yet. The end-user can press the Save or Cancel button to commit or rollback the changes.

However, if the flow is triggered from a data grid button that just performs an operation on a selection you will want to commit the changes to avoid losing them.

#### 3.2.2 Commits in Nanoflows

Nanoflows do not support committing changes without events. Committing while running in an online app sends a commit request to the Mendix Runtime and runs the events. If a change object action is used in an offline app, the changes are committed to the offline database.

### 3.3 Refresh in Client{#refresh-in-client}

This setting defines how changes are reflected in the pages presented to the end-user.

Default: *No*

#### 3.3.1 Microflow is Called from the Client in an Online App

If **Refresh in client** is set to *No*, the change is not reflected in the client.

If set to *Yes*, the object is refreshed across the client, which includes reloading the relevant [data sources](data-sources).

{{% alert type="info" %}}
Changed attribute values are *always* reflected in the client. If the object is committed, the object is refreshed from the Mendix Runtime, which includes updating virtual attributes. [Data sources](data-sources) are only reloaded if **Refresh in client** is set to *Yes*.
{{% /alert %}}

#### 3.3.2 Microflow is Called in an Offline, Native, or Hybrid App

When inside a microflow that is called from an offline, native, or hybrid app, the **Refresh in client** option is ignored and functions as if it was set to **No**.

For more information, see the [Microflows](offline-first#microflows) section of the *Offline-First Reference Guide*.

#### 3.3.3 Action is in a Nanoflow

The **Refresh in client** option is not available when change object is used in a [nanoflow](nanoflows). In this case, the refresh behavior depends on the **Commit type** option. It always reflects the changed attribute values in the client, including [visibility](common-widget-properties#visibility-properties).

If **Commit type** is set to *Yes*, the object is refreshed across the client as if **Refresh in client** was set to *Yes*.

### 3.4 Change Members

You can specify a list of changes that to apply to the object. Values for members are specified with [expressions](expressions) and must be of the same type as the member.

For a reference set association, it is also possible to add and remove an association (instead of only setting the member). For **add**, an object or a list of objects can be added to the currently associated objects. For **remove**, an object or a list of objects can be removed from the currently associated objects.

## 4 Common Section{#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}
