---
title: "Create Variable"
space: "Mendix 7 Reference Guide"
parent: "variable-activities"
---


With the 'Create Variable' action you can create a new variable and assign a value to it.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Action Properties

### Data type

Defines what kind of data can be stored in the variable. A variable can have one of the following [data types](data-types): Boolean, Enumeration, Decimal, Float (deprecated), Integer/Long or String.

### Initial value

Defines the initial value of the variable. The value is entered using a [microflow expression](microflow-expressions). The result of the microflow expression should match the data type of the variable.

## Output Properties

### Variable name

Variable name defines the name of the resulting variable. The variable can be used by all activities following this activity in the flow.
