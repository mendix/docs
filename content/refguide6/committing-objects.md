---
title: "Commit Object(s)"
parent: "object-activities"
---

This action can commit one or more objects. For persistable entities, this means that the object will be stored in the database. Committing non-persistable entities stores the current attribute values and association values in memory, this allows a rollback to revert to those values. See also [Persistability](persistability).

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Input Properties

### Variable

The object or list of objects that you want to commit.

## Action Properties

### With events

Indicates whether or not to execute the commit event handlers of the objects.

### Refresh in client

This property specifies whether pages that use the entity of the object(s) being committed are refreshed.

| Option | Description |
| --- | --- |
| Yes | Objects of same entity are refreshed in the user's browser. |
| No | Objects of same entity are not refreshed in the user's browser. |

_Default value_: No

{{% alert type="warning" %}}

When committing a large number of objects, we recommend that you do not enable 'Refresh in client' because it can slow things down.

{{% /alert %}}
