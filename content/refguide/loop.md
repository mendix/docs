---
title: "Loop"
parent: "application-logic"
menu_order: 80
tags: ["studio pro", "loop", "iterate over"]
---

## 1 Introduction

A loop is used to iterate over a list of objects and is visualized as a frame. For each object the flow inside the loop is executed. The iterator, which looks the same as a parameter, represents the current object in the list for each iteration. The name of the object is shown in black and the entity type of the object is in blue. 

For example, if you have a list of objects of the *OrderLine* entity and you want to set the purchase date for every object, you can use a loop with a change activity in it that sets the purchase date:

![](attachments/loop/loop.png)

The loop can contain all types of elements used in microflows, except for start and end events. Only a loop can contain [break events](break-event) and [continue events](continue-event).

## 2 Input Properties

### 2.1 Iterate over

A variable that is a list of items you will loop through.

## 3 Action Properties

### 3.1 Loop Object Name

**Loop object name** is the name of the list item that is currently being worked on. The flow inside the loop is executed for each object in the list, and the object will always have this name. For example, if the list over which the loop iterates is of type *List of Order*, the iterator object will be of type *Order*.