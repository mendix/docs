---
title: "Java Action Call"
parent: "action-call-activities"
menu_order: 3
tags: ["studio pro", "Java"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can only be used in microflows.
{{% /alert %}}

## 1 Introduction

The Java action call activity can be used to call a [Java action](java-actions). Arguments can be passed to the action and the result can be stored.

{{% alert type="info" %}}

See [Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Java action

The Java action that is called by this activity.

### 2.2 Arguments

For each parameter of the Java action you have to supply an argument of the same type. The values of the arguments are expressed using [expressions](expressions).

## 3 Output Properties

### 3.1 Return Type

The return type is the [data type](data-types) of the result of the Java action. The return type is defined by the Java action.

### 3.2 Use Return Value

If **User return value** is set to *Yes* you will be asked to give the return value a name.

### 3.3 Variable Name, Object Name, or List Name

The result of the Java action will be given this name. The label indicates whether the result is a variable, object, or list. If it is an object or list, the **Return type** will indicate the entity which is being returned.
