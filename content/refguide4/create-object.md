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

### Refresh in client

This property specifies whether forms that use the entity of the object being created are refreshed.

| Option | Description |
| --- | --- |
| True | Objects of same entity are refreshed in the user's browser. |
| False | Objects of same entity are not refreshed in the user's browser. |

_Default value_: False

### Initialize members

You can initialize members of the newly created object. Values for members are specified with a [microflow expression](microflow-expressions) and should be of the same type as the member.

## Output Properties

### Variable name

Variable name defines the name of the resulting object variable. It can be used by all activities that follow this activity.
