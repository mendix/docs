---
title: "Delete Object(s)"
parent: "object-activities"
---

{{% alert type="info" %}}
This action can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

Delete object can be used to delete one or more objects.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 Variable

The variable that refers to the object or list of objects that will be deleted. If you choose a list, all objects in that list will be deleted.

## 3 Action Properties

### 3.1 Refresh in Client

When set, Refresh in client will cause [data grids](data-grid), [template grids](template-grid), [list views](list-view), [reference selectors](reference-selector), [reference set selectors](reference-set-selector), and [input reference set selectors](input-reference-set-selector) to be refreshed if they show the entity of the deleted object(s).

{{% alert type="info" %}}

For [data views](data-view) and [input widgets](input-widgets), this setting behaves differently as of 7.19.0. For Mendix versions below 7.19.0, if this setting is set to *No*, data views showing the deleted object and input widgets showing its attributes are not refreshed (including their visibility and editability [conditions](conditions)). For version 7.19.0 and above, they are always refreshed.

{{% /alert %}}

_Default value_: No
