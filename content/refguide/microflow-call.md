---
title: "Microflow Call"
parent: "action-call-activities"
menu_order: 1
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The microflow call activity can be used to call another [microflow](microflows). Arguments can be passed to the microflow and the result can be stored.

{{% alert type="info" %}}

See [Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Microflow

The microflow that is called by this activity.

### 2.2 Arguments

For each parameter of the microflow, you have to supply an argument of the same type. The values of the arguments are expressed using [expressions](expressions). There is a difference in the way argument values are passed to a sub-microflow:
  * Lists and objects are passed as references (meaning, if the list/object is changed in a sub-microflow, the original list/object is altered)
  * Primitive types (strings, numbers, etc.) are passed as values (meaning, they are immutable, and not changeable via sub-microflows)
  
{{% alert type="warning" %}}
When used inside a nanoflow in an offline profile, only primitives and non-persistable entities that have no associations with persistable entities are allowed as arguments for the call. For more information, see the [Microflows](offline-first#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## 3 Output Properties

### 3.1 Return Type

The data type of the result of the called microflow. The return type is defined by the called microflow.

### 3.2 Use Return Value

If **User return value** is set to *Yes* you will be asked to give the return value a name.

### 3.3 Variable Name, Object Name, or List Name

The name of the result of the called microflow.
