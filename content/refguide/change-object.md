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

When set and the microflow is called from the client, Refresh in client will cause [data grids](data-grid), [template grids](template-grid), [list views](list-view), [reference selectors](reference-selector), [reference set selectors](reference-set-selector), and [input reference set selectors](input-reference-set-selector) to be refreshed if they show the entity of the changed object.

{{% alert type="info" %}}

For input widgets, this setting behaves differently as of 7.19.0. For Mendix versions below 7.19.0, if this setting is set to *No*, [input widgets](input-widgets) showing the changed object's attributes are not refreshed (including their visibility and editability [conditions](conditions)). For version 7.19.0 and above, input widgets and their conditions are always refreshed.

{{% /alert %}}

{{% alert type="warning" %}}

When inside a [nanoflow](nanoflows), the Change object action does not have the Refresh in client option, and the refresh behavior depends on the **Commit type** option. It always refreshes [input widgets](input-widgets) showing the changed object's attributes (including their [conditions](conditions)).

If **Commit type** is set to *Yes*, then [data grids](data-grid), [template grids](template-grid), [list views](list-view), [reference selectors](reference-selector), [reference set selectors](reference-set-selector), and [input reference set selectors](input-reference-set-selector) are refreshed if they show the entity of the changed object.

{{% /alert %}}

_Default value_: No

### 3.3 Change Members

You can specify a list of changes that will be applied to the object. Values for members are specified with [expressions](expressions) and should be of the same type as the member. For a reference set association, it is also possible to add and remove (instead of only setting the member). For **add**, an object or a list of objects can be added to the currently associated objects. For **remove**, an object or a list of objects can be removed from the currently associated objects.
