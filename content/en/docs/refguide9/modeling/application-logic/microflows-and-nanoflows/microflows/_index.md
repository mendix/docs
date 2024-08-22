---
title: "Microflows"
url: /refguide9/microflows/
weight: 10
description: "Presents an overview of all the elements that can be used in a microflow."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Microflows allow you to express the logic of your application. A microflow can perform actions such as creating and updating objects, showing pages and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

Microflows run in the runtime server and can therefore not be used in offline apps. For application logic within offline apps, see [Nanoflows](/refguide9/nanoflows/).

This page is a summary of the elements which make up a microflow, together with their visual representation within the microflow. It also covers [keyboard support](#keyboard) when editing microflows.

For the properties of the microflow itself, see [Microflow Properties](/refguide9/microflow/). For more best practice details, see [Microflow Naming Conventions](/refguide9/dev-best-practices/#microflow-naming-conventions), [Microflow General Best Practices](/refguide9/dev-best-practices/#microflow-dev-best-practices), and [Microflow Best Practices from the Community](/refguide9/community-best-practices-for-app-performance/#microflow-community-best-practices).

For information on using microflows as data sources, see [Microflow Source](/refguide9/microflow-source/).

## Microflow Notation

The graphical notation of microflows is based on the [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN). BPMN is a standardized graphical notation for drawing business processes in a workflow.

A microflow is composed of elements. Below is a categorized overview of all elements. The following categories are used:

* [Events](#events) represent start and endpoints of a microflow and special operations in a loop.
* [Flows](#flows) form the connection between elements.
* [Decisions](#decisions) deal with making choices and merging different paths again.
* [Activities](#activities) are the actions that are executed in a microflow.
* [Loop](/refguide9/loop/) is used to iterate over a list of objects.
* [Parameter](#parameter) is data that serves as input for the microflow.
* [Annotation](#annotation) is an element that can be used to put comments in a microflow.

### Events{#events}

Events represent start and endpoints of a microflow and special operations in a loop.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/start-event.png" link="/refguide9/start-event/" class="no-border" >}} | [Start Event](/refguide9/start-event/) | A start event is the starting point of the microflow. A microflow can only have one start event. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/end-event.png" link="/refguide9/end-event/" class="no-border" >}} | [End Event](/refguide9/end-event/) | An end event defines the location where the microflow will stop. Depending on the return type of the microflow in some cases a value must be specified. There can be more than one end event. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/error-event.png" link="/refguide9/error-event/" class="no-border" >}} | [Error Event](/refguide9/error-event/) | An error event defines a location where the microflow will stop and throw an error that occurred earlier. If you call a microflow, you may want to know whether any errors occurred within the microflow or not. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/continue-event.png" link="/refguide9/continue-event/" class="no-border" >}} | [Continue Event](/refguide9/continue-event/) | A continue event is used to stop the current iteration of a loop and continue with the next iteration. Continue events can only be used inside a [Loop](/refguide9/loop/). |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/break-event.png" link="/refguide9/break-event/" class="no-border" >}} | [Break Event](/refguide9/break-event/) | A break event is used to stop iterating over the list of objects and continue with the rest of the flow after the loop. Break events can only be used inside a [Loop](/refguide9/loop/). |

### Flows{#flows}

Flows form the connection between elements.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/sequence-flow.png" link="/refguide9/sequence-flow/" class="no-border" >}} | [Sequence Flow](/refguide9/sequence-flow/) | A sequence flow is an arrow that links events, activities, decisions, and merges with each other. Together they define the order of execution within a microflow. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/annotation-flow.png" link="/refguide9/annotation/#annotation-flow" class="no-border" >}} | [Annotation flow](/refguide9/annotation/#annotation-flow) | An association is a connection that can be used to connect an annotation to another element. |

### Decisions {#decisions}

Decisions deal with making choices and merging different paths again.

| Graphic                                                      | Name                                         | Description                                                  |
| ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/decision.png" link="/refguide9/decision/" class="no-border" >}} | [Decision](/refguide9/decision/)                         | A decision makes a decision based on a condition and follows one and only one of the outgoing flows. There is no parallel execution in microflows. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/object-type-decision.png" link="/refguide9/object-type-decision/" class="no-border" >}} | [Object Type Decision](/refguide9/object-type-decision/) | An object type decision is an element that makes a choice based on the [specialization](/refguide9/entities/) of the selected object. You can give the specialized object a name using a [cast object](/refguide9/cast-object/) action. |
| {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/merge.png" link="/refguide9/merge/" class="no-border" >}} | [Merge](/refguide9/merge/)                               | A merge can be used to combine multiple sequence flows into one. If a choice is made in a microflow and afterwards some common work needs to be done, you can combine the two (or more) paths using a merge. |

### Activities{#activities}

[Activities](/refguide9/activities/) are the actions that are executed in a microflow:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/activity.png" alt="Activity" class="no-border" >}}

### Loop {#loop}

A [loop](/refguide9/loop/) is used to iterate over a list of objects:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/loop.png" alt="Loop" class="no-border" >}}

For every object the flow inside the loop is executed. A loop activity can contain all elements used in microflows, with the exception of start and end events. 

### Parameter {#parameter}

A [parameter](/refguide9/parameter/) is data that serves as input for the microflow. 

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/parameter.png" alt="Parameter" class="no-border" >}}

Parameters are filled at the location from where the microflow is triggered.

### Annotation {#annotation}

An [annotation](/refguide9/annotation/) is an element that can be used to put comments in a microflow:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/annotation.png" alt="Annotation" class="no-border" >}}

### Item Usages

Studio Pro visualizes which items are used by the selected element(s). It does this by showing the used items in white text on a blue background. Conversely, elements that use the item(s) returned by the selected element(s) are marked with the word 'Usage' in white text on a green background.

In the example below, the parameter **AccountPasswordData** is highlighted because it is used in the selected activity (**Retrieve Account**). And the activity **Save password** has a **Usage** label because it uses the object returned by **Retrieve Account**.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/microflow-nanoflow-example.png" class="no-border" >}}

## Keyboard Support{#keyboard}

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

## Microflow Debugging

If you want to see what happens while a microflow is executing, you can use the microflow debugger. See the following how-tos:

* [Debugging Microflows and Nanoflows](/refguide9/debug-microflows-and-nanoflows/)
* [Debugging Microflows Remotely](/refguide9/debug-microflows-remotely/)

## Converting a Microflow to a Nanoflow {#convert-to-nanoflow}

{{% alert color="info" %}}
This feature was introduced in Studio Pro [9.24.0](/releasenotes/studio-pro/9.24/#9240) and the alternative option was added in Studio Pro 9.24.1.
{{% /alert %}}

To convert a microflow to a nanoflow, you have two options. The first option is to right-click anywhere in the microflow editor and select **Convert to nanoflow**. Alternatively, in the **App Explorer**, right-click on the name of the microflow you want to convert, and select **Convert to nanoflow**.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/convert-to-nanoflow.PNG" alt="Convert to nanoflow" width="550px" class="no-border" >}}

A new nanoflow is created and added to the same directory, and you can get consistency errors if there are actions that are not supported by nanoflows.
