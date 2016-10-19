---
title: "Microflow Call"
space: "Reference Guide 6"
parent: "Action+Call+Activities"
---


The Microflow call activity can be used to call another [microflow](Microflows). Arguments can be passed to the microflow and the result can be stored in a variable.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](Microflow+Element+Common+Properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Action Properties

### Microflow

The microflow that is called by this activity.

### Arguments

For each parameter of the microflow you have to supply an argument of the same type. The values of the arguments are expressed using [microflow expressions](Microflow+Expressions).

## Output Properties

### Return type

The data type of the result of the called microflow. The return type is defined by the called microflow.

### Variable name

The name of the variable that will contain the result of the called microflow.
