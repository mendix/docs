---
title: "Create Variable"
parent: "Variable+Activities"
space: "Reference Guide 5"
---


With the 'Create Variable' action you can create a new variable and assign a value to it.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](Microflow+Element+Common+Properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Action Properties

### Data type

Defines what kind of data can be stored in the variable. A variable can have one of the following [data types](Data+Types): Boolean, Enumeration, Decimal, Float, Integer/Long or String.

### Initial value

Initial value defines the value where the primitive variable will start with. The value needs to be entered using [microflow expressions](Microflow+Expressions). The microflow expression should result in the type of data that corresponds with the one of the property data type.

## Output Properties

### Variable name

Variable name defines the name of the resulting primitive variable. It can be used by all activities that follow-up this activity.
