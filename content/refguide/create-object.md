---
title: "Create Object"
parent: "object-activities"
---

## 1 Introduction 

The create-object action can be used to create an object.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Entity

The entity of which you want to create an object.

### 2.2 Refresh in Client

This property specifies whether pages that use the entity of the object being created are refreshed.

| Option | Description |
| --- | --- |
| Yes | Objects of same entity are refreshed in the user's browser. |
| No | Objects of same entity are not refreshed in the user's browser. |

_Default value_: No

{{% alert type="warning" %}}

Nanoflows do not have this property. All the changes made in a nanoflow refresh the client by default.

{{% /alert %}}

### 2.3 Initialize Members

You can initialize members of the newly created object. Values for members are specified with an [expression](expressions) and should be of the same type as the member.

## 3 Output Properties

### 3.1 Variable Name

Variable name defines the name of the resulting object variable. It can be used by all activities that follow this activity.
