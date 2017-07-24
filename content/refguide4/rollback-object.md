---
title: "Rollback Object"
parent: "object-activities"
---
The rollback-object action can be used to undo changes (that have not been committed) that were made to the object in the part of the microflow preceding the activity. Furthermore, it deletes objects that have been created but have never been committed.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Input Properties

### Object

Object defines the object that needs to be rolled back.

### Refresh in client

This property specifies whether forms that use the entity of the object being rolled back are refreshed.

| Option | Description |
| --- | --- |
| True | Objects of same entity are refreshed in the user's browser. |
| False | Objects of same entity are not refreshed in the user's browser. |

_Default value_: False
