---
title: "Delete Object(s)"
parent: "object-activities"
---

{{% alert type="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

Delete Object can be used to delete one or more objects.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 Variable

The variable that refers to the object or list of objects that will be deleted. If you choose a list, all objects in that list will be deleted.

## 3 Action Properties

### 3.1 Refresh in Client

Refresh in client defines whether pages that use the entity of the object being deleted are refreshed.

| Option | Description |
| --- | --- |
| Yes | Objects of same entity are refreshed in the user's browser. |
| No | Objects of same entity are not refreshed in the user's browser. |

_Default value:_ No
