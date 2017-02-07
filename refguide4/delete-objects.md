---
title: "Delete Object(s)"
category: "refguide4"
space: "Reference Guide 4"
---
Delete Object can be used to delete one or more objects.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Input Properties

### Variabele

The variable that refers to the object or list of objects that will be deleted. If you choose a list, all objects in that list will be deleted.

## Action Properties

### Refresh in browser

Refresh in browser defines whether forms that use the entity of the object being deleted are refreshed.

| Option | Description |
| --- | --- |
| True | Objects of same entity are refreshed in the user's browser. |
| False | Objects of same entity are not refreshed in the user's browser. |

_Default value:_ False