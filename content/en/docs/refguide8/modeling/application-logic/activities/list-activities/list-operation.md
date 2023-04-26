---
title: "List Operation"
url: /refguide8/list-operation/
weight: 4
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/list-operation.pdf).
{{% /alert %}}

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The **List operation** activity can perform various actions on a list. The result of the action is returned as a new list in contrast to the [Change list](/refguide8/change-list/) activity.

The actions which can be performed are:

* Union 
* Intersect 
* Subtract 
* Contains 
* Equals 
* Sort 
* Filter 
* Find 
* Head 
* Tail 

See below for details on these actions.

## 2 Properties

An example of list operation properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/list-activities/list-operation/list-operation-properties.png" alt="list operation properties" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The list operation properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Operation

A list operation action can execute any of the following operations. The operations are categorized by the type of operands they have:

* Binary – operations which work with a second list or object
* Member Inspections – operations which work with specified elements (attributes and associations) of the objects in the list
* Unary – operations which work on the list with no other operands

#### 3.1.1 Binary

These binary operations have as an input a list and either another list or an object. They return another list or a Boolean, depending on the operation. All lists and objects must relate to the same entity.

| Operation | Description | Result Type |
| --- | --- | --- |
| Union | The result is a combination of the elements of both parameters avoiding duplicates. | List |
| Intersect | The result is a list containing elements that appear in both parameters. | List |
| Subtract | The result is the first parameter with the element(s) of the second parameter removed. | List |
| Contains | Checks whether all elements of the second parameter are present in the first parameter. | Boolean |
| Equals | Checks whether the lists contain the same elements. | Boolean |

#### 3.1.2 Member Inspections

These operations takes a list and one or more members (attributes or associations) as input. They return either an object or another list, depending on the operation.

| Operation | Description | Result Type |
| --- | --- | --- |
| Sort | Allows you to sort a list based on a number of a attributes. The attributes are ordered to determine their priority while sorting. You cannot use associations to sort a list. Sorting attributes from generalized entities is not allowed. | List |
| Find | Find the first object of which the member has the given value. | Object |
| Filter | Find all objects of which the member has the given value. | List |

#### 3.1.3 Unary

These unary operations have a list as the single operand and return either an object or another list, depending on the operation.

| Operation | Description | Result Type |
| --- | --- | --- |
| Head | The result is the first element of the list, or empty if the parameter contains zero elements or was initialized as empty. | Object |
| Tail | The result is a list containing all elements of the parameter except the first, or an empty list if the parameter contains zero elements or was initialized as empty. | List |

### 3.2 List Name, Object Name, or Variable Name

This is the name of the resulting List, Object, or Boolean variable. The result can be used by all activities that follow this activity.

## 4 Common Section{#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}
