---
title: "Microflows"
url: /refguide/microflows/
weight: 10
description: "Presents an overview of all the elements that can be used in a microflow."
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Microflows allow you to express the logic of your application. A microflow can perform actions such as creating and updating objects, showing pages and making choices. It is a visual way of expressing what traditionally ends up in textual program code.

Microflows run in the runtime server and can therefore not be used in offline apps. For application logic within offline apps, see [Nanoflows](/refguide/nanoflows/).

This page is a summary of the elements which make up a microflow, together with their visual representation within the microflow. It also covers [keyboard support](#keyboard) when editing microflows.

For the properties of the microflow itself, see [Microflow Properties](/refguide/microflow/). For more best practice details, see [Microflow Naming Conventions](/refguide/dev-best-practices/#microflow-naming-conventions), [Microflow General Best Practices](/refguide/dev-best-practices/#microflow-dev-best-practices), and [Microflow Best Practices from the Community](/refguide/community-best-practices-for-app-performance/#microflow-community-best-practices).

For information on using microflows as data sources, see [Microflow Source](/refguide/microflow-source/).

## 2 Microflow Notation

The graphical notation of microflows is based on the [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN). BPMN is a standardized graphical notation for drawing business processes in a workflow.

A microflow is composed of elements. Below is a categorized overview of all elements. The following categories are used:

* [Events](#events) represent start and endpoints of a microflow and special operations in a loop.
* [Flows](#flows) form the connection between elements.
* [Decisions](#decisions) deal with making choices and merging different paths again.
* [Activities](#activities) are the actions that are executed in a microflow.
* [Loop](/refguide/loop/) is used to iterate over a list of objects.
* [Parameter](#parameter) is data that serves as input for the microflow.
* [Annotation](#annotation) is an element that can be used to put comments in a microflow.

### 2.1 Events{#events}

Events represent start and endpoints of a microflow and special operations in a loop.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/start-event.png" link="/refguide/start-event/" >}} | [Start Event](/refguide/start-event/) | A start event is the starting point of the microflow. A microflow can only have one start event. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/end-event.png" link="/refguide/end-event/" >}} | [End Event](/refguide/end-event/) | An end event defines the location where the microflow will stop. Depending on the return type of the microflow in some cases a value must be specified. There can be more than one end event. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/error-event.png" link="/refguide/error-event/" >}} | [Error Event](/refguide/error-event/) | An error event defines a location where the microflow will stop and throw an error that occurred earlier. If you call a microflow, you may want to know whether any errors occurred within the microflow or not. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/continue-event.png" link="/refguide/continue-event/" >}} | [Continue Event](/refguide/continue-event/) | A continue event is used to stop the current iteration of a loop and continue with the next iteration. Continue events can only be used inside a [Loop](/refguide/loop/). |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/break-event.png" link="/refguide/break-event/" >}} | [Break Event](/refguide/break-event/) | A break event is used to stop iterating over the list of objects and continue with the rest of the flow after the loop. Break events can only be used inside a [Loop](/refguide/loop/). |

### 2.2 Flows{#flows}

Flows form the connection between elements.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/sequence-flow.png" link="/refguide/sequence-flow/" >}} | [Sequence Flow](/refguide/sequence-flow/) | A sequence flow is an arrow that links events, activities, decisions, and merges with each other. Together they define the order of execution within a microflow. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/annotation-flow.png" link="/refguide/annotation/#annotation-flow" >}} | [Annotation flow](/refguide/annotation/#annotation-flow) | An association is a connection that can be used to connect an annotation to another element. |

### 2.3 Decisions {#decisions}

Decisions deal with making choices and merging different paths again.

| Graphic                                                      | Name                                         | Description                                                  |
| ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/decision.png" link="/refguide/decision/" >}} | [Decision](/refguide/decision/)                         | A decision makes a decision based on a condition and follows one and only one of the outgoing flows. There is no parallel execution in microflows. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/object-type-decision.png" link="/refguide/object-type-decision/" >}} | [Object Type Decision](/refguide/object-type-decision/) | An object type decision is an element that makes a choice based on the [specialization](/refguide/entities/) of the selected object. You can give the specialized object a name using a [cast object](/refguide/cast-object/) action. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/merge.png" link="/refguide/merge/" >}} | [Merge](/refguide/merge/)                               | A merge can be used to combine multiple sequence flows into one. If a choice is made in a microflow and afterwards some common work needs to be done, you can combine the two (or more) paths using a merge. |

### 2.4 Activities{#activities}

[Activities](/refguide/activities/) are the actions that are executed in a microflow:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/activity.png" alt="Activity" width="150px" >}}

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

## 3 Keyboard Support {#keyboard}

### 3.1 Studio Pro 10.6 and Above {#keyboard-improved}

The tables in the following sub-sections present the shortcut keys that can be used for navigating and manipulating microflows in the microflow editor in Studio Pro 10.6 and above.

#### 3.1.1 Selection

| Key | Effect |
| --- | --- |
| Arrow Keys | Select nearby element (activity, event, loop or parameter) in the direction of the arrow. |
| <kbd>Home</kbd> | Select the start event. |
| <kbd>End</kbd> | Select the first end event. |
| <kbd>Ctrl</kbd> + <kbd>a</kbd> | Select all elements. |
| <kbd>Tab</kbd> | If a loop is selected, the first element inside the loop will be selected. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | If an element inside a loop is selected, the loop itself will be selected. |

#### 3.1.2 Navigation

| Key | Effect |
| --- | --- |
| mouse scroll | Scroll up/down. |
| <kbd>Shift</kbd> + mouse scroll | Scroll left/right. |
| <kbd>Space</kbd> + mouse button | Drag screen.  |
| <kbd>Ctrl</kbd> + <kbd>+</kbd>/<kbd>-</kbd> | Zoom in/out.  |
| <kbd>Ctrl</kbd> + <kbd>0</kbd> | Reset zoom level to 100%. |
| <kbd>Ctrl</kbd> + mouse scroll | Zoom in/out. |

#### 3.1.3 Element Manipulation

| Key | Effect |
| --- | --- |
| <kbd>Enter</kbd> - on an element | If an element is selected, edit its properties. |
| <kbd>Enter</kbd> - on a flow arrow | If a flow arrow is selected, open the Logic Bot dialog box. |
| <kbd>Enter</kbd> - on a Logic Bot suggestion list item | The selected item is added on the flow arrow. The Logic Bot dialog box is shown again for the next action to be added. |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> (or <kbd>Shift</kbd> + mouse click) - on a Logic Bot suggestion list item| The selected item is added on the flow arrow. The element’s property dialog box is opened. |
| <kbd>F2</kbd> | Rename the variable returned by the selected element. |
| <kbd>Shift</kbd> + <kbd>F2</kbd> | Edit the caption of the selected element. |
| Context-menu key | Open the context-menu for the currently selected element. |

### 3.2 Studio Pro 10.5 and Below

The following table shows the shortcut keys that can be used in the microflow editor in Studio Pro 10.5 and below.

| Key | Effect |
| --- | --- |
| Arrow keys | Move the selection box to the activity or element in the direction of the arrow key. For example, if currently a show page activity is selected and you press the right arrow key, the activity to the right of it becomes selected. |
| <kbd>Enter</kbd> | Edit the properties of the selected element. |
| <kbd>F2</kbd> | Edit the name of the return value of the selected activity. This shortcut only functions on activities that return a result. |
| <kbd>Shift</kbd> + <kbd>F2</kbd> or just start typing | Edit the caption of the selected element. |
| <kbd>Ctrl</kbd> + arrow keys | Move the selected element in the direction of the arrow. |
| <kbd>Tab</kbd> | If a loop is selected, the first element inside the loop will be selected. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | If an element inside a loop is selected, the loop itself will be selected. |
| <kbd>Home</kbd> | Select the start event. |
| <kbd>End</kbd> | Cycle through the end events. |
| <kbd>Shift</kbd>  | By holding <kbd>Shift</kbd> when resizing an activity, it will stay centered at its current position and expand equally in all directions. |
| <kbd>Ctrl</kbd>  | When pressing the <kbd>Ctrl</kbd>, you can select additional activities. Clicking a selected component while holding <kbd>Ctrl</kbd> will deselect it. |
| Context-menu key or <kbd>Shift</kbd> + <kbd>F10</kbd> | Open the context-menu for the currently selected element. |

## 4 Microflow Debugging

If you want to see what happens while a microflow is executing, you can use the microflow debugger. See the following how-tos:

* [Debugging Microflows and Nanoflows](/refguide/debug-microflows-and-nanoflows/)
* [Debugging Microflows Remotely](/refguide/debug-microflows-remotely/)

## 5 Converting a Microflow to a Nanoflow {#convert-to-nanoflow}

To convert a microflow to a nanoflow, you have two options. The first option is to right-click anywhere in the microflow editor and select **Convert to nanoflow**. Alternatively, in the **App Explorer**, right-click on the name of the microflow you want to convert, and select **Convert to nanoflow**.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/convert-to-nanoflow.PNG" alt="Convert to nanoflow" width="550px" >}}

A new nanoflow is created and added to the same directory, and you can get consistency errors if there are actions that are not supported by nanoflows.

## 6 Canvas Interaction {#canvas-interaction}

In the microflow editor from Studio Pro 10.6, you can use common patterns like unlimited canvas, enhanced zoom and scroll, and a snap-to-flow to make new activities from the toolbox and toolbar always well aligned in your flow. 
