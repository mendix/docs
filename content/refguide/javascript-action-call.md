---
title: "JavaScript Action Call"
category: "App Modeling"
description: "This reference guide explains the properties of the JavaScript action call activity."
tags: ["javascript", "return", "variable", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The JavaScript action call activity can be used to call a [JavaScript action](javascript-actions). Arguments can be passed to the action, and the result can be stored in a variable. This activity can be used in nanoflows, but not in microflows.

## 2 Action Properties

Understanding action properties will allow you to integrate JavaScript actions into your nanoflows.

### 2.1 JavaScript Action

This property sets the JavaScript action called by an activity.

### 2.2 Arguments

For each JavaScript action parameter, you must supply an argument of the same type. The values of the arguments are defined using [expressions](expressions).

## 3 Output Properties

Understanding output properties will allow you to customize the action result of your JavaScript action. When set up properly, output properties will allow action results to be handled by your nanoflow.

### 3.1 Return Type

The return type property is the data type of the JavaScript action's result. The return type is defined by the JavaScript action.

### 3.2 Use Return Value

This property determines if the returned value from the JavaScript action should be stored in a variable.

### 3.3 Variable Name

This property determines if the result of the JavaScript action will be stored in a variable with this name. You may only set a variable name if **Use return value** has been set to **Yes**.

## 4 Read More

* [JavaScript Actions](javascript-actions)
* [Write JavaScript Actions](/howto/extensibility/write-javascript-actions)
* [Nanoflows](nanoflows)
* [Java Action Call](java-action-call)