---
title: "Change Object"
parent: "object-activities"
---

## 1 Introduction

The Change object activity can be used to change the members of an object. This can be done with or without committing and with or without events.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 Object

Object defines the object variable that is changed.

## 3 Action Properties

### 3.1 Commit Type

Commit type defines the way the object is committed.

| Option | Description |
| --- | --- |
| Yes with event handlers | The object is saved in the database and the [event handlers](event-handlers) are triggered |
| Yes without event handlers | The object is saved in the database, but the [event handlers](event-handlers) are not triggered |
| No | The object is changed without being saved in the database |

{{% alert type="success" %}}

If a flow is triggered from a data view (for example by the 'on change' of an text field) you often do not want to commit the changes you make to the data view object yet. The end user can press the Save or Cancel button to commit or rollback the changes.

However, if the flow is triggered from a data grid button that just performs an operation on a selection you will want to commit the changes to avoid losing them.

{{% /alert %}}

{{% alert type="warning" %}}
Nanoflows do not support committing changes without events. Committing while running in an online app sends a commit request to the Mendix Runtime and runs the events. If a change object action is used in an offline app, the changes are committed to the offline database.
{{% /alert %}}

_Default value:_ No

### 3.2 Refresh in Client

If the microflow is called from the client, the change is not reflected in the client if Refresh in client is set to *No*. If Refresh in client is set to *Yes*, the object is refreshed across the client, which includes reloading of relevant [data sources](data-sources).

{{% alert type="info" %}}

As of 7.19.0, changed attribute values are always reflected in the client. If the object is committed, the object is refreshed from the runtime, which includes updating virtual attributes. [Data sources](data-sources) are only reloaded if Refresh in client is set to *Yes*.

{{% /alert %}}

{{% alert type="warning" %}}

When inside a [nanoflow](nanoflows), the Change object action does not have the Refresh in client option and the refresh behavior depends on the **Commit type** option. It always reflects changed attribute values in the client, including [conditions](conditions).

If **Commit type** is set to *Yes*, the object is refreshed across the client as if Refresh in client was set to *Yes*.

{{% /alert %}}

_Default value_: No

### 3.3 Change Members

You can specify a list of changes that to apply to the object. Values for members are specified with [expressions](expressions) and should be of the same type as the member. For a reference set association, it is also possible to add and remove (instead of only setting the member). For **add**, an object or a list of objects can be added to the currently associated objects. For **remove**, an object or a list of objects can be removed from the currently associated objects.
