---
title: "Java Action Call"
parent: "action-call-activities"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

The Java action call activity can be used to call a [Java action](java-actions). Arguments can be passed to the action and the result can be stored in a variable.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Java action

The Java action that is called by this activity.

### 2.2 Arguments

For each parameter of the Java action you have to supply an argument of the same type. The values of the arguments are expressed using [expressions](expressions).

## 3 Output Properties

### 3.1 Return Type

The return type is the [data type](data-types) of the result of the Java action. The return type is defined by the Java action.

### 3.2 Variable Name

The result of the Java action will be stored in a variable with this name.
