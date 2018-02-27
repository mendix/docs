---
title: "Rollback Object"
parent: "object-activities"
---

The rollback-object action can be used to undo changes (that have not been committed) that were made to the object in the part of the microflow preceding the activity. Furthermore, it deletes objects that have been created but have never been committed.

{{% alert type="info" %}}

When the rollback-object action is performed in a sub microflow it will roll back the changes in the sub microflow, as well as its parent microflow.

{{% /alert %}}

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Input Properties

### Object

Object defines the object that needs to be rolled back.

### Refresh in Client

This property specifies whether forms that use the entity of the object being rolled back are refreshed.

| Option | Description |
| --- | --- |
| Yes | Objects of same entity are refreshed in the user's browser. |
| No | Objects of same entity are not refreshed in the user's browser. |

_Default value_: No

{{% alert type="warning" %}}

Nanoflows do not have this property. The rollback object activity in a nanoflow refreshes the client by default.

{{% /alert %}}
