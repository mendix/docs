---
title: "Persistent Create Object"
parent: "object-activities"
---
The persistent-create-object action is the result of converting a create-object action from version 3\. This action not only creates the object in memory but also inserts a row in the database. This action is deprecated and there will be a warning for it in the error list. Right-clicking the warning allows you to find all occurrences and to convert them to new [create actions](create-object).

In obscure cases you can detect the difference between the old and the new create action. For example, if you look at the database after the create action but before a corresponding commit action, the object will not be in the database if you used the new create action. Because we cannot guarantee 100% backward compatibility we do not convert the persistent create actions automatically.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Action Properties

### Entity

The entity of which you want to create an object.

### Refresh in browser

Refresh in browser defines whether forms that use the entity of the object being created are refreshed.

| Option | Description |
| --- | --- |
| True | Objects of same entity are refreshed in the user's browser. |
| False | Objects of same entity are not refreshed in the user's browser. |

_Default value_: False

## Output Properties

### Variable name

Variable name defines the name of the resulting object variable. It can be used by all activities that follow this activity.
