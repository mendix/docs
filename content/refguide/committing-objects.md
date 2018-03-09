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

This property specifies whether pages that use the entity of the object(s) being committed are refreshed.

| Option | Description |
| --- | --- |
| Yes | Objects of same entity are refreshed in the user's browser. |
| No | Objects of same entity are not refreshed in the user's browser. |

_Default value_: No

{{% alert type="warning" %}}

When committing a large number of objects, we recommend that you do not enable 'Refresh in client' because it can slow things down.

{{% /alert %}}

{{% alert type="warning" %}}

Nanoflows do not have this property. All the changes made in a nanoflow refresh the client by default.

{{% /alert %}}
