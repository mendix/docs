---
title: "Microflow Call"
url: /refguide8/microflow-call/
tags: ["studio pro", "microflow call", "call microflow", "action call activities"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/microflow-call.pdf).
{{% /alert %}}

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

The **Microflow call** activity can be used to call a [microflow](/refguide8/microflows/). 

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/action-call-activities/microflow-call/microflow-call.png" alt="Call Microflow"   width="200"  >}}

Arguments can be passed to the microflow and the result can be stored.

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/action-call-activities/microflow-call/microflow-call-properties.png" alt="Microflow Call Properties" >}}

The **Microflow call** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Microflow

The microflow that is called by this activity. 

### 3.2 Parameters

Depending on the selected microflow, you will see a list of its parameters in a table. Parameters pass data to the activity. 

#### 3.2.1 Name

The name of the parameter that is read-only.

#### 3.2.2 Type

The type of the parameter that is read-only. For more information on possible types of parameters, see [Data Types](/refguide8/data-types/). 

#### 3.2.3 Argument {#argument}

The **Edit parameter value** button allows you to edit the argument value. For each parameter of the microflow, you need to supply an argument of the same type. The values of the arguments are expressed using [expressions](/refguide8/expressions/). There is a difference in the way argument values are passed to a sub-microflow:

  * Lists and objects are passed as references (meaning, if the list/object is changed in a sub-microflow, the original list/object is altered)
  * Primitive types (strings, numbers, etc.) are passed as values (meaning, they are immutable, and not changeable via sub-microflows)

{{% alert color="warning" %}}
When used inside a nanoflow in an offline profile, only primitives and non-persistable entities that have no associations with persistable entities are allowed as arguments for the call. For more information, see the [Microflows](/refguide8/offline-first/#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

### 3.3 Return Type

This read-only property indicates whether you will retrieve a variable, object or list. 

### 3.4 Use Return Value

This property determines if the returned value from the called microflow should be available in the rest of the current microflow or nanoflow. If **Use return value** is set to *Yes*, you will need to fill in the [name](#name) of the variable, object, or list returned by the activity.

### 3.5 Variable Name, Object Name, or List Name {#name}

The name of the variable, list, or object returned by the activity.

## 4 Microflow Calls in Offline-First Apps

It is possible to perform a microflow call from an offline-first app. However, it works a bit differently than in online applications. For more information on the differences, see the [Microflows](/refguide8/offline-first/#microflows) section of the *Offline-First Reference Guide*. 

## 5 Common Section {#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}
