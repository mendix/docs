---
title: "Change Variable"
space: "Mendix 7 Reference Guide"
parent: "variable-activities"
---


The 'Change Variable' action can be used to change the value of an existing variable.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Input Properties

### Variable name

The variable of which you want to change the value.

## Action Properties

### Value

The new value for the variable. The value is entered using a [microflow expression](microflow-expressions). The type of the microflow expression should be the same as the type of the selected variable.
