---
title: "Commit Object(s)"
parent: "Object+Activities"
---


This action can commit one or more objects. For persistent entities this means that the object will be stored in the database. Committing non-persistable entities stores the current attribute values and association values in memory, this allows a rollback to revert to those values. See also [Persistability](Persistability).

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](Microflow+Element+Common+Properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

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

<div class="alert alert-warning">{% markdown %}

When committing a large number of objects, we recommend that you do not enable 'Refresh in client' because it can slow things down.

{% endmarkdown %}</div>
