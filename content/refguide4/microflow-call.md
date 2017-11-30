---
title: "Microflow Call"
parent: "action-call-activities"
---
Microflow call can be used to call another microflow. Arguments can be passed to the microflow and the result can be stored in a variable.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Action Properties

### Microflow

The microflow that is called by this activity.

### Parameters

For each parameter of the microflow you have to supply an argument of the same type. The values of the arguments can be expressed using [microflow expressions](microflow-expressions).

## Output Properties

### Return type

The return type of the called microflow.

### Variable name

The name of the variable that will contain the result of the called microflow.
