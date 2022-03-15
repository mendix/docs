---
title: "Microflows"
url: /refguide/microflows/
parent: "microflows-and-nanoflows"
menu_order: 10
description: "Presents an overview of all the elements that can be used in a microflow."
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Microflows allow you to express the logic of your application. A microflow can perform actions such as creating and updating objects, showing pages and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

Microflows run in the runtime server and can therefore not be used in offline apps. For application logic within offline apps, see [Nanoflows](/refguide/nanoflows/).

This page is a summary of the elements which make up a microflow, together with their visual representation within the microflow. It also covers [keyboard support](#keyboard) when editing microflows.

{{% alert color="info" %}}
For the properties of the microflow itself, see [Microflow Properties](/refguide/microflow/).
{{% /alert %}}

## 2 Microflow Notation

The graphical notation of microflows is based on the [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN). BPMN is a standardized graphical notation for drawing business processes in a workflow.

A microflow is composed of elements. Below is a categorized overview of all elements. The following categories are used:

*   [Events](#events) represent start and endpoints of a microflow and special operations in a loop.
*   [Flows](#flows) form the connection between elements.
*   [Decisions](#decisions) deal with making choices and merging different paths again.
*   [Activities](#activities) are the actions that are executed in a microflow.
*   [Loop](/refguide/loop/) is used to iterate over a list of objects.
*   [Parameter](#parameter) is data that serves as input for the microflow.
*   [Annotation](#annotation) is an element that can be used to put comments in a microflow.

### 2.1 Events{#events}

Events represent start and endpoints of a microflow and special operations in a loop.

| Graphic | Name | Description |
| --- | --- | --- |
| [{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/start-event.png" >}}](/refguide/start-event/) | [Start Event](/refguide/start-event/) | A start event is the starting point of the microflow. A microflow can only have one start event. |
| [{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/end-event.png" >}}](/refguide/end-event/) | [End Event](/refguide/end-event/) | An end event defines the location where the microflow will stop. Depending on the return type of the microflow in some cases a value must be specified. There can be more than one end event. |
| [{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-event.png" >}}](/refguide/error-event/) | [Error Event](/refguide/error-event/) | An error event defines a location where the microflow will stop and throw an error that occurred earlier. If you call a microflow, you may want to know whether any errors occurred within the microflow or not. |
| [{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/continue-event.png" >}}](/refguide/continue-event/) | [Continue Event](/refguide/continue-event/) | A continue event is used to stop the current iteration of a loop and continue with the next iteration. Continue events can only be used inside a [Loop](/refguide/loop/). |
| [{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/break-event.png" >}}](/refguide/break-event/) | [Break Event](/refguide/break-event/) | A break event is used to stop iterating over the list of objects and continue with the rest of the flow after the loop. Break events can only be used inside a [Loop](/refguide/loop/). |

### 2.2 Flows{#flows}

Flows form the connection between elements.

| Graphic | Name | Description |
| --- | --- | --- |
| [{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/sequence-flow.png" >}}](/refguide/sequence-flow/) | [Sequence Flow](/refguide/sequence-flow/) | A sequence flow is an arrow that links events, activities, decisions, and merges with each other. Together they define the order of execution within a microflow. |
| [{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/annotation-flow.png" >}}](/refguide/annotation/#annotation-flow) | [Annotation flow](/refguide/annotation/#annotation-flow) | An association is a connection that can be used to connect an annotation to another element. |

### 2.3 Decisions {#decisions}

Decisions deal with making choices and merging different paths again.

| Graphic                                                      | Name                                         | Description                                                  |
| ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| [{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/decision.png" >}}](/refguide/decision/) | [Decision](/refguide/decision/)                         | A decision makes a decision based on a condition and follows one and only one of the outgoing flows. There is no parallel execution in microflows. |
| [{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/object-type-decision.png" >}}](/refguide/object-type-decision/) | [Object Type Decision](/refguide/object-type-decision/) | An object type decision is an element that makes a choice based on the [specialization](/refguide/entities/) of the selected object. You can give the specialized object a name using a [cast object](/refguide/cast-object/) action. |
| [{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/merge.png" >}}](/refguide/merge/) | [Merge](/refguide/merge/)                               | A merge can be used to combine multiple sequence flows into one. If a choice is made in a microflow and afterwards some common work needs to be done, you can combine the two (or more) paths using a merge. |

### 2.4 Activities{#activities}

[Activities](/refguide/activities/) are the actions that are executed in a microflow:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/activity.png" alt="Activity" >}}

### 2.5 Loop {#loop}

A [loop](/refguide/loop/) is used to iterate over a list of objects:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/loop.png" alt="Loop" >}}

For every object the flow inside the loop is executed. A loop activity can contain all elements used in microflows, with the exception of start and end events. 

### 2.6 Parameter {#parameter}

A [parameter](/refguide/parameter/) is data that serves as input for the microflow. 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/parameter.png" alt="Parameter" >}}

Parameters are filled at the location from where the microflow is triggered.

### 2.7 Annotation {#annotation}

An [annotation](/refguide/annotation/) is an element that can be used to put comments in a microflow:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/annotation.png" alt="Annotation" >}}

### 2.6 Item Usages

Studio Pro visualizes which items are used by the selected element(s). It does this by showing the used items in white text on a blue background. Conversely, elements that use the item(s) returned by the selected element(s) are marked with the word 'Usage' in white text on a green background.

In the example below, the parameter **AccountPasswordData** is highlighted because it is used in the selected activity (**Retrieve Account**). And the activity **Save password** has a **Usage** label because it uses the object returned by **Retrieve Account**.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/microflow-nanoflow-example.png" >}}

## 3 Keyboard Support{#keyboard}

The microflow editor offers keyboard support for navigating and manipulating microflows. The following table shows the keys that can be used.

| Key | Effect |
| --- | --- |
| Arrow Keys | Select nearby element (activity, event, loop or parameter) in the direction of the arrow. |
| <kbd>Enter</kbd> | Edit the properties of the selected element. |
| <kbd>F2</kbd> | Rename the item returned by the selected element. |
| <kbd>Shift</kbd> + <kbd>F2</kbd> or just start typing | Edit the caption of the selected element. |
| <kbd>Ctrl</kbd> + arrow keys | Move the selected element in the direction of the arrow. |
| <kbd>Tab</kbd> | If a loop is selected, the first element inside the loop will be selected. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | If an element inside a loop is selected, the loop itself will be selected. |
| <kbd>Home</kbd> | Select the start event. |
| <kbd>End</kbd> | Cycle through the end events. |
| Context-menu key or <kbd>Shift</kbd> + <kbd>F10</kbd> | Open the context-menu for the currently selected element. |

## 4 Microflow Debugging

If you want to see what happens while a microflow is executing, you can use the microflow debugger. See the following how-tos:

*   [Debugging Microflows and Nanoflows](/howto/monitoring-troubleshooting/debug-microflows-and-nanoflows/)
*   [Debugging Microflows Remotely](/howto/monitoring-troubleshooting/debug-microflows-remotely/)
