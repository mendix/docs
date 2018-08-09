---
title: "Rollback Object"
parent: "object-activities"
---

## 1 Introduction

The Rollback object action can be used to undo changes (that have not been committed) that were made to the object in the part of the flow preceding the activity. Furthermore, it deletes objects that have been created but have never been committed.

{{% alert type="info" %}}

When the Rollback object action is performed in a sub-microflow it will roll back the changes in both the sub-microflow as well as its parent microflow.

{{% /alert %}}

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

If the microflow is called from the client, [input widgets](input-widgets) showing the rolled back object's attributes will be refreshed automatically. This includes updating their visibility and editability [conditions](conditions).

## 2 Input Properties

### 2.1 Object

Object defines the object that needs to be rolled back.

### 2.2 Refresh in Client

When set, Refresh in client will cause [data grids](data-grid), [template grids](template-grid), [list views](list-view), [reference selectors](reference-selector), [reference set selectors](reference-set-selector), and [input reference set selectors](input-reference-set-selector) to be refreshed if they show the entity of the rolled back object.

_Default value_: No

{{% alert type="warning" %}}

When inside a [nanoflow](nanoflows), the Rollback object action does not have the Refresh in client option. It behaves as if set to _Yes_.

{{% /alert %}}
