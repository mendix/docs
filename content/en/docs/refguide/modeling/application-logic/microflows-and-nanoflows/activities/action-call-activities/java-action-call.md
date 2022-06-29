---
title: "Java Action Call"
url: /refguide/java-action-call/
weight: 10
tags: ["studio pro", "Java", "java action call", "action call"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Java action call** activity can be used to call a [Java action](/refguide/java-actions/). 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/action-call-activities/java-action-call/java-action-call.png" alt="Java Action"   width="200"  >}}

Arguments can be passed to the action and the result can be stored.

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/action-call-activities/java-action-call/java-action-call-properties.png" alt="Java Action Call Properties" >}}

The **Java action call** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Java Action

The Java action that is called by this activity.

### 3.2 Arguments

Click **Edit** next to the parameter to fill in the arguments. 

An argument is the input data that you are passing to the Java action. For each Java action parameter, you must supply an argument of the same type. 

The values of the arguments are defined using [expressions](/refguide/expressions/):

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/action-call-activities/java-action-call/argument-edit.png" alt="argument" >}}

### 3.3 Return Type

This read-only property indicates whether you will retrieve a variable, object or list. The return type is defined by the Java action. 

### 3.4 Use Return Value

If **User return value** is set to *Yes* you will be asked to give the return value a name.

### 3.5 Variable Name, Object Name, or List Name

The result of the Java action will be given this name. The label indicates whether the result is a variable, object, or list. If it is an object or list, the **Return type** will indicate the entity which is being returned.

### 3.6 Task Queue

{{% alert color="warning" %}}
You cannot execute Java actions in a task queue when calling them from a nanoflow.
{{% /alert %}}

If you want a microflow to call a Java action to run in the background using a task queue, then you need to do the following:

1. Check **Execute this Java action in a Task Queue**.
2. Identify which task queue it should run in in **Select Task Queue**.
3. (optionally – in Mendix version 9.10.0 and above) Select an automatic retry strategy.

For more information about task queues, see [Task Queue](/refguide/task-queue/).

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}