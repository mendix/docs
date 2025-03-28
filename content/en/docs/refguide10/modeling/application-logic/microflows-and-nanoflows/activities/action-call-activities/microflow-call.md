---
title: "Microflow Call"
url: /refguide/microflow-call/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

## Introduction

The **Microflow call** activity can be used to call a [microflow](/refguide/microflows/). Arguments can be passed to the microflow and the result can be stored.

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/action-call-activities/microflow-call/microflow-call-properties.png" alt="Microflow Call Properties" width="700px" class="no-border" >}}

The **Microflow call** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Microflow

The microflow that is called by this activity. 

### Parameters

Depending on the selected microflow, you will see a list of its parameters in a table. Parameters pass data to the activity. 

#### Name

The name of the parameter that is read-only.

#### Type

The type of the parameter that is read-only. For more information on possible types of parameters, see [Data Types](/refguide/data-types/). 

#### Argument {#argument}

The **Edit parameter value** button allows you to edit the argument value. For each parameter of the microflow, you need to supply an argument of the same type. The values of the arguments are expressed using [expressions](/refguide/expressions/). There is a difference in the way argument values are passed to a sub-microflow:

* Lists and objects are passed as references (meaning, if the list/object is changed in a sub-microflow, the original list/object is altered)
* Primitive types (strings, numbers, etc.) are passed as values (meaning, they are immutable, and not changeable via sub-microflows)

{{% alert color="warning" %}}
When used inside a nanoflow in an offline profile, only primitives and non-persistable entities that have no associations with persistable entities are allowed as arguments for the call. For more information, see the [Microflows](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of *Offline Best Practices*.
{{% /alert %}}

### Task Queue

{{% alert color="warning" %}}
You cannot execute microflows in a task queue when calling them from a nanoflow.
{{% /alert %}}

If you want a microflow to call a microflow to run in the background using a task queue, then you need to do the following:

1. Check **Execute this microflow in a Task Queue**.
2. Identify which task queue it should run in in **Select Task Queue**.
3. (optionally) Select an automatic retry strategy.

For more information about task queues, see [Task Queue](/refguide/task-queue/).

### Return Type

This read-only property indicates whether you will retrieve a variable, object or list. 

### Use Return Value

This property determines if the returned value from the called microflow should be available in the rest of the current microflow or nanoflow. If **Use return value** is set to *Yes*, you will need to fill in the [name](#name) of the variable, object, or list returned by the activity.

### Variable Name, Object Name, or List Name {#name}

The name of the variable, list, or object returned by the activity.

If you specify a name for the returned value in the called microflow's end event, this field will utilise that name while ensuring it remains unique within the current scope.

## Microflow Calls in Offline-First Apps

It is possible to perform a microflow call from an offline-first app. However, it works a bit differently than in online applications. For more information, see the [Microflows](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of *Offline Best Practices*

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
