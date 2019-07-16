---
title: "Change List"
parent: "list-activities"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With this activity you can change a list that is stored in a variable.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 List

Defines the list variable that is changed.

## 3 Action Properties

### 3.1 Type

Defines the type of change that is performed to the list.

| Option | Description |
| --- | --- |
| Add | The value is added to the list If the value is already in the list, it will result in a duplicate entry. |
| Remove | If the value is in the list, it is removed from the list. Otherwise nothing happens. |
| Clear | The list is emptied. |
| Replace | The list is emptied and the value is added to the list. |
Adding a value with preventing a duplicate entry can be done in two steps: first remove the value, then add the value. Other option is to do a Aggregate List-acivity->Contains and only this results in true then Add the value.

_Default value:_ Add

### 3.2 Value

Value defines the value that is used to change the list. The value is entered using an [expression](expressions). The expression should result in an object or list of the same [entity](entities) as the input list.
