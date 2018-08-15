---
title: "Rollback Object"
parent: "object-activities"
---

## 1 Introduction

The Rollback object action can be used to undo changes (that have not been committed) that were made to the object in the part of the flow preceding the activity. Furthermore, it deletes objects that have been created but have never been committed.

{{% alert type="info" %}}

When the Rollback object action is performed in a sub-microflow, it rolls back the changes in both the sub-microflow as well as its parent microflow.

{{% /alert %}}

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

If the microflow is called from the client, [input widgets](input-widgets) showing the rolled back object's attributes are refreshed automatically. This includes updating their visibility and editability [conditions](conditions).

## 2 Input Properties

### 2.1 Object

Object defines the object that needs to be rolled back.

### 2.2 Refresh in Client

When set and the microflow is called from the client, Refresh in client causes [data grids](data-grid), [template grids](template-grid), [list views](list-view), [reference selectors](reference-selector), [reference set selectors](reference-set-selector), and [input reference set selectors](input-reference-set-selector) to be refreshed if they show the entity of the rolled back object.

{{% alert type="info" %}}

For [input widgets](input-widgets), this setting behaves differently as of 7.19.0. For Mendix versions below 7.19.0, if this setting is set to *No*, input widgets showing the rolled back object's attributes are not refreshed (including their visibility and editability [conditions](conditions)). For version 7.19.0 and above, input widgets and their conditions are always refreshed.

{{% /alert %}}

{{% alert type="warning" %}}

When inside a [nanoflow](nanoflows), the Rollback object action does not have the Refresh in client option. It refreshes [input widgets](input-widgets) showing the rolled back object's attributes (including their [conditions](conditions)). [Data grids](data-grid), [template grids](template-grid), [list views](list-view), [reference selectors](reference-selector), [reference set selectors](reference-set-selector), and [input reference set selectors](input-reference-set-selector) are refreshed if they show the entity of the rolled back object.

{{% /alert %}}

_Default value_: No
