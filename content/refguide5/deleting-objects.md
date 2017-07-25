---
title: "Delete Object(s)"
parent: "object-activities"
---


Delete Object can be used to delete one or more objects.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Input Properties

### Variabele

The variable that refers to the object or list of objects that will be deleted. If you choose a list, all objects in that list will be deleted.

## Action Properties

### Refresh in browser

Refresh in browser defines whether forms that use the entity of the object being deleted are refreshed.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">True</td><td class="confluenceTd">Objects of same entity are refreshed in the user's browser.</td></tr><tr><td class="confluenceTd">False</td><td class="confluenceTd">Objects of same entity are not refreshed in the user's browser.</td></tr></tbody></table>

_Default value:_ False
