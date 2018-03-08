---
title: "Create Object"
parent: "object-activities"
---

The create-object action can be used to create an object.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Action Properties

### Entity

The entity of which you want to create an object.

### Refresh in Client

This property specifies whether pages that use the entity of the object being created are refreshed.

| Option | Description |
| --- | --- |
| Yes | Objects of same entity are refreshed in the user's browser. |
| No | Objects of same entity are not refreshed in the user's browser. |

_Default value_: No

{{% alert type="warning" %}}

Nanoflows do not have this property. All the changes made in a nanoflow refresh the client by default.

{{% /alert %}}

### Initialize Members

You can initialize members of the newly created object. Values for members are specified with a [microflow expression](expressions) and should be of the same type as the member.

## Output Properties

### Variable Name

Variable name defines the name of the resulting object variable. It can be used by all activities that follow this activity.
