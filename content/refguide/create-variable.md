---
title: "Create Variable"
parent: "variable-activities"
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

With this action, you can create a new variable and assign a value to it.

{{% alert type="info" %}}

See [Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Data Type

Defines what kind of data can be stored in the variable. A variable can have one of the following [data types](data-types): Boolean, Enumeration, Decimal, Integer/Long or String.

### 2.2 Initial Value

Defines the initial value of the variable. The value is entered using an [expression](expressions) (the result of the microflow expression must match the data type of the variable).

## 3 Output Properties

### 3.1 Variable Name

Variable defines the name of the resulting variable. The variable can be used by all activities following this activity in the flow.
