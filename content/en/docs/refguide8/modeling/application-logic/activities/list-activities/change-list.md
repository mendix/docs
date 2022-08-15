---
title: "Change List"
url: /refguide8/change-list/
weight: 2
tags: ["studio pro", "List"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/change-list.pdf).
{{% /alert %}}

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.

Note that there are minor differences between the way this function works in microflows, and the way it works in nanoflows.
{{% /alert %}}

## 1 Introduction

The **Change list** activity allows you to change a list by adding objects to, and removing objects from, it. The activity works directly on the list provided, in contrast to the [List operation](/refguide8/list-operation/) activity.

## 2 Properties

An example of change list properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/list-activities/change-list/change-list-properties.png" alt="change list properties" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The change list properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 List

The name of the list to be changed.

### 3.2 Type

Defines the type of change that is applied to the list.

| Option | Description |
| --- | --- |
| Add *(default)* | The object(s) in the value property are added to the list. See [notes](#notes) below for additional information. |
| Remove | The object(s) in the value property are removed from the list. If there are duplicate objects in the list, then only one will be removed. If you ask to remove an object which isn't in the list, there is no error. |
| Clear | The list is emptied. |
| Replace | The list is emptied and the object(s) in the value property are added to the list. |

#### 3.2.1 Notes When Using the Add Type{#notes}

If you do not want duplicates in your (microflow) list, you can either remove the object(s) first, or use the **Contains** [list operation](/refguide8/list-operation/) to examine the list before adding the object(s).

{{% alert color="warning" %}}
Currently, this works differently in **nanoflows** and **microflows**. In a **nanoflow** objects will *not* be added if they are already in the list whereas, in a **microflow**, the same object can be added multiple times.
{{% /alert %}}

### 3.3 Value

Value defines the objects that are used to change the list. The value is entered using an [expression](/refguide8/expressions/). The expression must result in an object or list of objects of the same type of [entity](/refguide8/entities/) as the input list.

## 4 Common Section{#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}
