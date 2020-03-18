---
title: "Change Object"
parent: "object-activities"
menu_order: 2
tags: ["studio pro"]
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The change object activity can be used to change the members of an object. This can be done with or without committing and with or without events.

{{% alert type="info" %}}

See [Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 Object

Object defines the object that is changed.

## 3 Action Properties

### 3.1 Commit

Commit defines the way the object is committed.

| Option | Description |
| --- | --- |
| Yes with event handlers | The object is saved in the database and the [event handlers](event-handlers) are triggered |
| Yes without event handlers | The object is saved in the database, but the [event handlers](event-handlers) are not triggered |
| No | The object is changed without being saved in the database |

{{% alert type="info" %}}

If a flow is triggered from a data view (for example by the 'on change' of an text field) you often do not want to commit the changes you make to the data view object yet. The end-user can press the Save or Cancel button to commit or rollback the changes.

However, if the flow is triggered from a data grid button that just performs an operation on a selection you will want to commit the changes to avoid losing them.

{{% /alert %}}

{{% alert type="warning" %}}
Nanoflows do not support committing changes without events. Committing while running in an online app sends a commit request to the Mendix Runtime and runs the events. If a change object action is used in an offline app, the changes are committed to the offline database.
{{% /alert %}}

Default: *No*

### 3.2 Refresh in Client

If the microflow is called from the client, the change is not reflected in the client if **Refresh in client** is set to *No*. If set to *Yes*, the object is refreshed across the client, which includes reloading the relevant [data sources](data-sources).

{{% alert type="info" %}}
Changed attribute values are *always* reflected in the client. If the object is committed, the object is refreshed from the Mendix Runtime, which includes updating virtual attributes. [Data sources](data-sources) are only reloaded if **Refresh in client** is set to *Yes*.
{{% /alert %}}

{{% alert type="warning" %}}
When inside a [nanoflow](nanoflows), the change object action does not have the **Refresh in client** option available, and the refresh behavior depends on the **Commit type** option. It always reflects the changed attribute values in the client, including [visibility](common-widget-properties#visibility-properties).

If **Commit type** is set to *Yes*, the object is refreshed across the client as if **Refresh in client** was set to *Yes*.
{{% /alert %}}

Default: *No*

### 3.3 Change Members

You can specify a list of changes that to apply to the object. Values for members are specified with [expressions](expressions) and must be of the same type as the member. For a reference set association, it is also possible to add and remove (instead of only setting the member). For **add**, an object or a list of objects can be added to the currently associated objects. For **remove**, an object or a list of objects can be removed from the currently associated objects.
