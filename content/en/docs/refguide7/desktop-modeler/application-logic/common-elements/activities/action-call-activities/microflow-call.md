---
title: "Microflow Call"
url: /refguide7/microflow-call/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

The Microflow call activity can be used to call another [microflow](/refguide7/microflows/). Arguments can be passed to the microflow and the result can be stored in a variable.

{{% alert color="info" %}}

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/) for properties that all activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Microflow

The microflow that is called by this activity.

### 2.2 Arguments

For each parameter of the microflow you have to supply an argument of the same type. The values of the arguments are expressed using [expressions](/refguide7/expressions/).

## 3 Output Properties

### 3.1 Return Type

The data type of the result of the called microflow. The return type is defined by the called microflow.

### 3.2 Variable Name

The name of the variable that will contain the result of the called microflow.
