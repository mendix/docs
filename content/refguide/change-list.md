---
title: "Change List"
parent: "list-activities"
menu_order: 2
tags: ["studio pro", "List"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.

Note that there are minor differences between the way this function works in microflows, and the way it works in nanoflows.
{{% /alert %}}

## 1 Introduction

With this activity you can change a list.

{{% alert type="info" %}}

See [Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 List

Specifies the list that is changed.

## 3 Action Properties

### 3.1 Type

Defines the type of change that is applied to the list.

| Option | Description |
| --- | --- |
| Add *(default)* | The object(s) referred to by value are added to the list. The same object can be added multiple times. |
| Remove | The object(s) referred to by value are removed from the list. If there are duplicate objects in the list, then only one will be removed. If you ask to remove an object which isn't in the list, there is no error |
| Clear | The list is emptied. |
| Replace | The list is emptied and the object(s) referred to by value are added to the list. |

If you do not want duplicates in your (microflow) list, you can either remove the object(s) first, or use the **Contains** [list operation](list-operation) to examine the list before adding the object(s).

{{% alert type="warning" %}}
Currently, this works differently in **nanoflows**. In a **nanoflow** objects will *not* be added if they are already in the list whereas, in a **microflow**, the same object can be added multiple times.
{{% /alert %}}

### 3.2 Value

Value defines the objects that are used to change the list. The value is entered using an [expression](expressions). The expression should result in an object or list of objects of the same type of [entity](entities) as the input list.
