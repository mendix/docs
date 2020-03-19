---
title: "Loop"
parent: "application-logic"
menu_order: 80
tags: ["studio pro", "loop"]
---

## 1 Introduction

A loop is used to iterate over a list of objects. For each object the flow inside the loop is executed. The iterator, which looks the same as a parameter, represents the current object in the list for each iteration. Beneath it the name of the object is shown in black and the entity type of the object in blue.

The flow starts at the element that has no incoming sequence flows. A loop can contain all elements used in flows, with the exception of start and stop events. Additionally, a loop (and only a loop) can contain [break events](break-event) and [continue events](continue-event).

For example, if you have a situation where you have a list of objects of the entity 'OrderLine' and you want to set the purchase date for every object, you can use a loop with a change activity in it that sets the purchase date.

![](attachments/819203/917942.png)

## 2 Input Properties

### 2.1 Iterate over

The list over which this loop will iterate.

## 3 Action Properties

### 3.1 Loop Object Name

The name of the current object taken from the list. The flow inside the loop is executed for each object in the list, and the object will always have this name. If the list over which the loop iterates is of type `List of Order`, the iterator object will be of type `Order`.
