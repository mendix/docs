---
title: "Change Variable"
parent: "variable-activities"
tags: ["studio pro", "change variable", "variable", "variable activities"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

Change variable allows you to change the value of an existing variable. For example, if you have a *$Discount* variable that gives customers a 50% discount on certain items, you can change this variable and assign a new value to it. You can use this value to give new customers a bigger discount:

![Change Variable](attachments/variable-activities/change-variable.png)



## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

![Change Variable Properties](attachments/variable-activities/change-variable-properties.png)

The **Change variable** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

### 3.1 Variable

The variable which you want to change the value of.

### 3.2 Value

The new value for the variable. The value is entered using an [expression](expressions). The type of the expression must be the same as the type of the selected variable.

## 4 Common Section {#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}

## 5 Read More

* [Activities](activities)