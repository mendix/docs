---
title: "Rollback Object"
space: "Mendix 7 Reference Guide"
parent: "object-activities"
---


The rollback-object action can be used to undo changes (that have not been committed) that were made to the object in the part of the microflow preceding the activity. Furthermore, it deletes objects that have been created but have never been committed.

**Rollback in sub microflows**

When the rollback-object action is performed in a sub microflow it will roll back the uncommitted changes in the sub microflow, as well as its parent microflow.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Input Properties

### Object

Object defines the object that needs to be rolled back.

### Refresh in client

This property specifies whether forms that use the entity of the object being rolled back are refreshed.

| Option | Description |
| --- | --- |
| Yes | Objects of same entity are refreshed in the user's browser. |
| No | Objects of same entity are not refreshed in the user's browser. |

_Default value_: No
