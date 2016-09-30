---
title: "Java Action Call"
space: "Reference Guide 6"
parent: "Action+Call+Activities"
---


The Java action call activity can be used to call a [Java action](Java+Actions). Arguments can be passed to the action and the result can be stored in a variable.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](Microflow+Element+Common+Properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Action Properties

### Java action

The Java action that is called by this activity.

### Arguments

For each parameter of the Java action you have to supply an argument of the same type. The values of the arguments are expressed using [microflow expressions](Microflow+Expressions).

## Output Properties

### Return type

The return type is the [data type](Data+Types) of the result of the Java action. The return type is defined by the Java action.

### Variable name

The result of the Java action will be stored in a variable with this name.
