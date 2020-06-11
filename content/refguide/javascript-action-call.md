---
title: "JavaScript Action Call"
parent: "action-call-activities"
menu_order: 20
description: "This reference explains the properties of the JavaScript action call activity."
tags: ["javascript", "return", "variable", "studio pro", "action call"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can only be used in **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The JavaScript action call activity can be used to call a [JavaScript action](javascript-actions). Arguments can be passed to the action, and the result can be stored.

{{% image_container width="200" %}}
![javascript action call properties](attachments/action-call-activities/javascript-call.png)
{{% /image_container %}}

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

![JavaScript Action Properties](attachments/action-call-activities/javascript-action-call.png)

The **JavaScript action call** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 JavaScript Action

This property sets the JavaScript action called by an activity.

### 3.2 Parameter

Depending on the selected JavaScript action, you will see a list of its parameters. Parameters pass data to the activity. 

#### 3.2.1 Arguments

Click **Edit** next to the parameter to fill in the arguments. 

An argument is the input data that you are passing to the JavaScript action. For each JavaScript action parameter, you must supply an argument of the same type. 

The values of the arguments are defined using [expressions](expressions):

![argument](attachments/action-call-activities/argument-edit.png)

### 3.3 Return Type {#return-type}

This read-only property indicates whether you will retrieve a variable, object or list. The return type is defined by the JavaScript action.

### 3.4 Use Return Value

This property determines if the returned value from the JavaScript action should be available in the rest of the microflow or nanoflow. If **Use return value** is set to *Yes*, you will need to fill in the [name](#name) of the variable, object, or list returned by the activity.

### 3.5 Variable Name, Object Name, or List Name {#name}

The name of the variable, list, or object returned by the activity. If it is an object or list, the [Return type](#return-type) will indicate the entity which is being returned. 

## 4 Common Section {#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}

## 5 Read More

* [JavaScript Actions](javascript-actions)
* [Build JavaScript Actions](/howto/extensibility/build-javascript-actions)
* [Nanoflows](nanoflows)
* [Java Action Call](java-action-call)
