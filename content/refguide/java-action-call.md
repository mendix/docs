---
title: "Java Action Call"
parent: "action-call-activities"
---


The Java action call activity can be used to call a [Java action](java-actions). Arguments can be passed to the action and the result can be stored in a variable.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Action Properties

### Java action

The Java action that is called by this activity.

### Arguments

For each parameter of the Java action you have to supply an argument of the same type. The values of the arguments are expressed using [microflow expressions](expressions).

## Output Properties

### Return type

The return type is the [data type](data-types) of the result of the Java action. The return type is defined by the Java action.

### Variable name

The result of the Java action will be stored in a variable with this name.
