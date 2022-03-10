---
title: "Microflows"
url: /refguide8/microflows/
parent: "application-logic"
menu_order: 10
description: "Presents an overview of all the elements that can be used in a microflow."
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/microflows.pdf).
{{% /alert %}}

## 1 Introduction

Microflows allow you to express the logic of your application. A microflow can perform actions such as creating and updating objects, showing pages and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

Microflows run in the runtime server and can therefore not be used in offline apps. For application logic within offline apps, see [Nanoflows](nanoflows).

This page is a summary of the elements which make up a microflow, together with their visual representation within the microflow. It also covers [keyboard support](#keyboard) when editing microflows.

{{% alert type="info" %}}
For the properties of the microflow itself, see [Microflow Properties](microflow).
{{% /alert %}}

## 2 Microflow Notation

The graphical notation of microflows is based on the [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN). BPMN is a standardized graphical notation for drawing business processes in a workflow.

A microflow is composed of elements. Below is a categorized overview of all elements. The following categories are used:

*   [Events](#events) represent start and endpoints of a microflow and special operations in a loop.
*   [Flows](#flows) form the connection between elements.
*   [Decisions](#decisions) deal with making choices and merging different paths again.
*   [Activities](#activities) are the actions that are executed in a microflow.
*   [Loop](loop) is used to iterate over a list of objects.
*   [Parameter](#parameter) is data that serves as input for the microflow.
*   [Annotation](#annotation) is an element that can be used to put comments in a microflow.

### 2.1 Events{#events}

Events represent start and endpoints of a microflow and special operations in a loop.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/microflows-and-nanoflows/start-event.png)](start-event) | [Start Event](start-event) | A start event is the starting point of the microflow. A microflow can only have one start event. |
| [![](attachments/microflows-and-nanoflows/end-event.png)](end-event) | [End Event](end-event) | An end event defines the location where the microflow will stop. Depending on the return type of the microflow in some cases a value must be specified. There can be more than one end event. |
| [![](attachments/microflows-and-nanoflows/error-event.png)](error-event) | [Error Event](error-event) | An error event defines a location where the microflow will stop and throw an error that occurred earlier. If you call a microflow, you may want to know whether any errors occurred within the microflow or not. |
| [![](attachments/microflows-and-nanoflows/continue-event.png)](continue-event) | [Continue Event](continue-event) | A continue event is used to stop the current iteration of a loop and continue with the next iteration. Continue events can only be used inside a [Loop](loop). |
| [![](attachments/microflows-and-nanoflows/break-event.png)](break-event) | [Break Event](break-event) | A break event is used to stop iterating over the list of objects and continue with the rest of the flow after the loop. Break events can only be used inside a [Loop](loop). |

### 2.2 Flows{#flows}

Flows form the connection between elements.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/microflows-and-nanoflows/sequence-flow.png)](sequence-flow) | [Sequence Flow](sequence-flow) | A sequence flow is an arrow that links events, activities, decisions, and merges with each other. Together they define the order of execution within a microflow. |
| [![](attachments/microflows-and-nanoflows/annotation-flow.png)](annotation#annotation-flow) | [Annotation flow](annotation#annotation-flow) | An association is a connection that can be used to connect an annotation to another element. |

### 2.3 Decisions {#decisions}

Decisions deal with making choices and merging different paths again.

| Graphic                                                      | Name                                         | Description                                                  |
| ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| [![](attachments/microflows-and-nanoflows/decision.png)](decision) | [Decision](decision)                         | A decision makes a decision based on a condition and follows one and only one of the outgoing flows. There is no parallel execution in microflows. |
| [![](attachments/microflows-and-nanoflows/object-type-decision.png)](object-type-decision) | [Object Type Decision](object-type-decision) | An object type decision is an element that makes a choice based on the [specialization](entities) of the selected object. You can give the specialized object a name using a [cast object](cast-object) action. |
| [![](attachments/microflows-and-nanoflows/merge.png)](merge) | [Merge](merge)                               | A merge can be used to combine multiple sequence flows into one. If a choice is made in a microflow and afterwards some common work needs to be done, you can combine the two (or more) paths using a merge. |

### 2.4 Activities{#activities}

[Activities](activities) are the actions that are executed in a microflow:

![Activity](attachments/microflows-and-nanoflows/activity.png)

### 2.5 Loop {#loop}

A [loop](loop) is used to iterate over a list of objects:

![Loop](attachments/microflows-and-nanoflows/loop.png)

For every object the flow inside the loop is executed. A loop activity can contain all elements used in microflows, with the exception of start and end events. 

### 2.6 Parameter {#parameter}

A [parameter](parameter) is data that serves as input for the microflow. 

![Parameter](attachments/microflows-and-nanoflows/parameter.png)

Parameters are filled at the location from where the microflow is triggered.

### 2.7 Annotation {#annotation}

An [annotation](annotation) is an element that can be used to put comments in a microflow:

![Annotation](attachments/microflows-and-nanoflows/annotation.png)

### 2.6 Item Usages

Studio Pro visualizes which items are used by the selected element(s). It does this by showing the used items in white text on a blue background. Conversely, elements that use the item(s) returned by the selected element(s) are marked with the word 'Usage' in white text on a green background.

In the example below, the parameter **AccountPasswordData** is highlighted because it is used in the selected activity (**Retrieve Account**). And the activity **Save password** has a **Usage** label because it uses the object returned by **Retrieve Account**.

![](attachments/microflows-and-nanoflows/microflow-nanoflow-example.png)

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

*   [Debugging Microflows](/howto8/monitoring-troubleshooting/debug-microflows)
*   [Debugging Microflows Remotely](/howto8/monitoring-troubleshooting/debug-microflows-remotely)
