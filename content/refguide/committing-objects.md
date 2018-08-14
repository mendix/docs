---
title: "Commit Object(s)"
parent: "object-activities"
---

## 1 Introduction

This action can commit one or more objects. For persistable entities this means that the object will be stored in the database. Committing non-persistable entities stores the current attribute values and association values in memory, this allows a rollback to revert to those values. See also [Persistability](persistability).

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 Variable

The object or list of objects that you want to commit.

## 3 Action Properties

### 3.1 With Events

Indicates whether or not to execute the commit event handlers of the objects.

{{% alert type="warning" %}}

Nanoflows do not have this property. Committing while running in an online app sends a commit request to the Mendix Runtime and always runs the events. If the commit object(s) action is used in an offline app, the changes are committed to the offline database, and event handlers will run when the offline app synchronizes.

{{% /alert %}}

### 3.2 Refresh in Client

When set, Refresh in client will cause [data grids](data-grid), [template grids](template-grid), [list views](list-view), [reference selectors](reference-selector), [reference set selectors](reference-set-selector), and [input reference set selectors](input-reference-set-selector) to be refreshed if they show the entity of the committed object.

{{% alert type="info" %}}

For input widgets, this setting behaves differently as of 7.18.0. Before 7.18.0, if this setting was set to _No_, [input widgets](input-widgets) showing the changed object's attributes wouldn't be refreshed, including their visibility and editability [conditions](conditions). Since 7.18.0, input widgets and their conditions will always be refreshed.

{{% /alert %}}

{{% alert type="warning" %}}

When committing a large number of objects, we recommend that you do not enable 'Refresh in client' because it can slow things down.

{{% /alert %}}

{{% alert type="warning" %}}

When inside a [nanoflow](nanoflows), the Commit object action does not have the Refresh in client option. It will refresh [input widgets](input-widgets) showing the changed object's attributes including their [conditions](conditions). [Data grids](data-grid), [template grids](template-grid), [list views](list-view), [reference selectors](reference-selector), [reference set selectors](reference-set-selector) and [input reference set selectors](input-reference-set-selector) will be refreshed if they show the entity of the changed object.

{{% /alert %}}

_Default value_: No
