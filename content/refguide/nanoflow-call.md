---
title: "Nanoflow Call"
parent: "action-call-activities"
menu_order: 2
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert type="warning" %}}
This activity can only be used in nanoflows.
{{% /alert %}}

The nanoflow call activity can be used to call another [nanoflow](nanoflows). Arguments can be passed to the nanoflow and the result can be stored in a variable.

{{% alert type="info" %}}
For the properties that all activities share (fo example, **Caption**), see [Common Properties](microflow-element-common-properties) . This page only describes properties specific to the action.
{{% /alert %}}

## 2 Action Properties

### 2.1 Nanoflow

This is the nanoflow called by this activity.

### 2.2 Arguments

For each parameter of the nanoflow, you have to supply an argument of the same type. The values of the arguments are expressed using [expressions](expressions).

## 3 Output Properties

### 3.1 Return Type

This is the data type of the result of the called nanoflow. The return type is defined by the called nanoflow.

### 3.2 Use Return Value

If **User return value** is set to *Yes* you will be asked to give the return value a name.

### 3.3 Variable Name, Object Name, or List Name

The name of the variable, object, or list that will contain the result of the called nanoflow.
