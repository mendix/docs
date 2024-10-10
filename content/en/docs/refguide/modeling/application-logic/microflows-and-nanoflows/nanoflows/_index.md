---
title: "Nanoflows"
url: /refguide/nanoflows/
weight: 20
description: "Presents an overview of all the elements that can be used in a nanoflow."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Nanoflows are similar to [microflows](/refguide/microflows/), in that they allow you to express the logic of your application. However, they do have some specific benefits (for example, they run directly on the browser/device and can be used in an offline app). Furthermore, most of the actions run directly on the device, so there is also a speed benefit for logic which does not need access to the server.

This page is an overview of all the elements that can be used in a nanoflow. For the properties of the nanoflow itself, see [Nanoflow Properties](/refguide/nanoflow/). 

For information on using nanoflows as data sources, see [Nanoflow Source](/refguide/nanoflow-source/).

## When to Use Nanoflows

### Offline Mobile Apps

Nanoflows are designed with offline-first applications in mind, as they allow you to model application logic that works in offline apps. Since all database-related actions will be executed on the local offline database, nanoflows in offline apps will be fast.

### Logic Where No Connection Is Needed

Nanoflows also offer great value to online applications (for example, for UI logic, validations, calculations, and navigation). However, please keep in mind that, when you perform database-related actions, each action will create a separate network request to the Mendix Runtime.

The following actions interact with the database:

* Create
* Commit
* Retrieve
* Rollback

Therefore, the best practice is to use nanoflows in online applications when they do not contain the above actions.

{{% alert color="info" %}}
Changing objects without committing is not a database-related action, as changes are applied on the device or in the browser.
{{% /alert %}}

#### Other Cases

Although nanoflows perform best in online applications when no database-related actions are used, and these are generally the best cases, nanoflows that contain at most one database-related action can also still perform well. Because such nanoflows only require one network call, they perform as well as a microflow. An example of such a use case is performing validation logic on an object and committing the object in the same nanoflow.

## Notation and Categories

The graphical notation of nanoflows is based on the [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN). BPMN is a standardized graphical notation for drawing business processes in a workflow.

A nanoflow is composed of elements. The following categories are used:

* [Events](#events) represent the start and endpoints of a nanoflow and special operations in a loop
* [Flows](#flows) form the connection between elements
* [Decisions](#decisions) deal with making choices and merging different paths again
* [Activities](#activities) are the actions that are executed in a nanoflow
* [Loop](/refguide/loop/) is used to iterate over a list of objects
* [Parameter](#parameter) is data that serves as input for the nanoflow.
* [Annotation](#annotation) is an element that can be used to put comments in a nanoflow.

### Events {#events}

Events represent the start and endpoints of a nanoflow and special operations in a loop.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/start-event.png" alt="start event" link="/refguide/start-event/" class="no-border" >}} | [Start event](/refguide/start-event/) | The starting point of the nanoflow. A nanoflow can only have one start event. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/end-event.png" alt="end event" link="/refguide/end-event/" class="no-border" >}} | [End event](/refguide/end-event/) | Defines the location where the nanoflow will stop. Depending on the return type of the nanoflow, in some cases a value must be specified. There can be more than one end event. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/continue-event.png" alt="continue event" link="/refguide/continue-event/" class="no-border" >}} | [Continue event](/refguide/continue-event/) | Used to stop the current iteration of a loop and continue with the next iteration. Continue events can only be used inside a [loop](/refguide/loop/). |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/break-event.png" alt="break event" link="/refguide/break-event/" class="no-border" >}} | [Break Event](/refguide/break-event/) | Used to stop iterating over the list of objects and to continue with the rest of the flow after the loop. Break events can only be used inside a [loop](/refguide/loop/). |

### Flows {#flows}

Flows form the connection between elements.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/sequence-flow.png" link="/refguide/sequence-flow/" class="no-border" >}} | [Sequence flow](/refguide/sequence-flow/) | An arrow that links events, activities, decisions, and merges with each other. Together they define the order of execution within a nanoflow. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/annotation-flow.png" link="/refguide/annotation/#annotation-flow" class="no-border" >}} | [Annotation flow](/refguide/annotation/#annotation-flow) | A connection that can be used to connect an annotation to another element. |

### Decisions {#decisions}

Decisions deal with making choices and merging different paths.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/decision.png" alt="decision" link="/refguide/decision/" class="no-border" >}} | [Decision](/refguide/decision/) | Makes a decision based on a condition and follows one and only one of the outgoing flows. **Note**: there is no parallel execution in nanoflows. |
| {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/merge.png" alt="merge" link="/refguide/merge/" class="no-border" >}} | [Merge](/refguide/merge/) | Can be used to combine multiple sequence flows into one. If a choice is made in a nanoflow and afterwards some common work needs to be done, you can combine the two (or more) paths using a merge. |

### Activities{#activities}

[Activities](/refguide/activities/) are the actions that are executed in a nanoflow:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/activity.png" alt="Activity" class="no-border" >}}

### Loop {#loop}

A [loop](/refguide/loop/) is used to iterate over a list of objects:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/loop.png" alt="Loop" class="no-border" >}}

For every object the flow inside the loop is executed. A loop activity can contain all elements used in nanoflow, with the exception of start and end events. 

### Parameter {#parameter}

A [parameter](/refguide/parameter/) is data that serves as input for the nanoflow. 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/parameter.png" alt="Parameter" class="no-border" >}}

Parameters are filled at the location from where the nanoflow is triggered.

### Annotation {#annotation}

An [annotation](/refguide/annotation/) is an element that can be used to put comments in a nanoflow:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/annotation.png" alt="Annotation" class="no-border" >}}

### Item Usages

Studio Pro visualizes which items are used by the selected element (or elements). It does this by showing the used items in white text on a blue background. Conversely, elements that use the item (or items) returned by the selected element (or elements) are marked with the word 'Usage' in white text on a green background.

In the example below, the parameter **AccountPasswordData** is highlighted because it is used in the selected activity (**Retrieve Account**). And the activity **Save password** has a **Usage** label because it uses the object returned by **Retrieve Account**.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/microflows/microflow-nanoflow-example.png" class="no-border" >}}

## Keyboard Support

For an overview of the shortcut keys that are supported in the nanoflow editor, see the [Microflow, Nanoflow, and Rule Editor Shortcut Keys](/refguide/keyboard-shortcuts/#logic-editor-keyboard-support) section in *Keyboard Shortcuts*.

## Security {#security}

Nanoflows are executed in the context of the current user. Any operation for which the user is unauthorized will fail. For instance, when objects are retrieved in a nanoflow, only the ones for which the current user has read access will be returned. Committing an object only succeeds when the current user has write access for all changes.

## Converting a Nanoflow to a Microflow {#convert-to-microflow}

To convert a nanoflow to a microflow, you have two options. The first option is to right-click anywhere in the nanoflow editor and select **Convert to microflow**. Alternatively, in the **App Explorer**, right-click on the name of the nanoflow you want to convert, and select **Convert to microflow**.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/nanoflows/convert-to-microflow.PNG" alt="Convert to microflow" width="550px" class="no-border" >}}

A new microflow is created and added to the same directory, and you can get consistency errors if there are actions that are not supported by microflows.

## Canvas Interaction

In the nanoflow editor from Studio Pro 10.6, you can use common patterns like unlimited canvas, enhanced zoom and scroll, and a snap-to-flow to make new activities from the toolbox and toolbar always well aligned in your flow.
