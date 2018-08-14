---
title: "Create Object"
parent: "object-activities"
---

## 1 Introduction 

The Create object action can be used to create an object.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Entity

The entity of which you want to create an object.

### 2.2 Commit Type

The **Commit type** defines the way the object is committed.

| Option | Description |
| --- | --- |
| Yes with event handlers | The object is saved in the database and the [event handlers](event-handlers) are triggered. |
| Yes without event handlers | The object is saved in the database, but the [event handlers](event-handlers) are not triggered. |
| No | The object is changed without being saved in the database. |

{{% alert type="warning" %}}

Nanoflows do not support committing changes without events. Committing while running in an online app sends a commit request to the Mendix Runtime and runs the events. If a Create object action is used in an offline app, the changes are committed to the offline database.

{{% /alert %}}

_Default value:_ No

### 2.3 Refresh in Client

When set, Refresh in client will cause [data grids](data-grid), [template grids](template-grid), [list views](list-view), [reference selectors](reference-selector), [reference set selectors](reference-set-selector), and [input reference set selectors](input-reference-set-selector) to be refreshed if they show the entity of the created object.

{{% alert type="warning" %}}

When inside a [nanoflow](nanoflows), the Create object action does not have the Refresh in client option and the refresh behavior depends on the Commit type option. If Commit type is set to _Yes_, [data grids](data-grid), [template grids](template-grid), [list views](list-view), [reference selectors](reference-selector), [reference set selectors](reference-set-selector) and [input reference set selectors](input-reference-set-selector) will be refreshed if they show the entity of the changed object.

{{% /alert %}}

_Default value_: No

### 2.3 Initialize Members

You can initialize members of the newly created object. Values for members are specified with an [expression](expressions) and should be of the same type as the member.

## 3 Output Properties

### 3.1 Variable Name

Variable name defines the name of the resulting object variable. It can be used by all activities that follow this activity.
