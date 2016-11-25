---
title: "Change List"
parent: "list-activities"
space: "Reference Guide 5"
---


With the change-list action you can change the list that is stored in a variable.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Input Properties

### List

List defines the list variable that is changed.

## Action Properties

### Type

Type defines the how the value changes the list.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Add</td><td class="confluenceTd">The value is added to the list.</td></tr><tr><td class="confluenceTd">Remove</td><td class="confluenceTd">The value is removed from the list.</td></tr><tr><td class="confluenceTd">Clear</td><td class="confluenceTd">The list is emptied.</td></tr><tr><td class="confluenceTd">Replace</td><td class="confluenceTd">The list is emptied and the value is added to the list.</td></tr></tbody></table>

_Default value:_ Add

### Value

Value defines the value that is used to change the list. The value needs to be entered using [microflow expressions](microflow-expressions). The microflow expression should result in an object or list of the same entity as the input list.
