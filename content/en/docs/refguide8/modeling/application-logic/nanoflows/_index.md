---
title: "Nanoflows"
url: /refguide8/nanoflows/
weight: 20
description: "Presents an overview of all the elements that can be used in a nanoflow."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Nanoflows are similar to [microflows](/refguide8/microflows/), in that they allow you to express the logic of your application. However, they do have some specific benefits (for example, they run directly on the browser/device and can be used in an offline app). Furthermore, most of the actions run directly on the device, so there is also a speed benefit for logic which does not need access to the server.

{{% alert color="info" %}}
This page is an overview of all the elements that can be used in a nanoflow. For the properties of the nanoflow itself, see [Nanoflow Properties](/refguide8/nanoflow/).
{{% /alert %}}

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

## Differences from Microflows

There are five main differences between nanoflows and microflows:

1. When a nanoflow steps through its actions, client actions are directly executed. For example, an open page action immediately opens a page instead of at the end of the nanoflow. This is different from client actions in a microflow, which only run when the client receives the result from the microflow.
2. When used in nanoflow activities, expressions do not support the following objects and variables: `$latestSoapFault`, `$latestHttpResponse`, `$currentSession`, `$currentUser`, `$currentDeviceType`.
3. Nanoflows are not run inside a transaction so, if an error occurs in a nanoflow, it will not roll back any previous changes.
4. Nanoflows and microflows do not provide the same actions. Some actions available in microflows are not available in nanoflows, and vice versa.
5. Because nanoflows use JavaScript libraries and microflows use Java libraries, there can sometimes be slight differences in the way expressions are executed.

## Notation and Categories

The graphical notation of nanoflows is based on the [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN). BPMN is a standardized graphical notation for drawing business processes in a workflow.

A nanoflow is composed of elements. The following categories are used:

* [Events](#events) represent the start and endpoints of a nanoflow and special operations in a loop
* [Flows](#flows) form the connection between elements
* [Decisions](#decisions) deal with making choices and merging different paths again
* [Activities](#activities) are the actions that are executed in a nanoflow
* [Loop](/refguide8/loop/) is used to iterate over a list of objects
* [Parameter](#parameter) is data that serves as input for the microflow.
* [Annotation](#annotation) is an element that can be used to put comments in a microflow.

### Events {#events}

Events represent the start and endpoints of a nanoflow and special operations in a loop.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/start-event.png" alt="start event" link="/refguide8/start-event/" class="no-border" >}} | [Start event](/refguide8/start-event/) | The starting point of the nanoflow. A nanoflow can only have one start event. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/end-event.png" alt="end event" link="/refguide8/end-event/" class="no-border" >}} | [End event](/refguide8/end-event/) | Defines the location where the nanoflow will stop. Depending on the return type of the nanoflow, in some cases a value must be specified. There can be more than one end event. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/error-event.png" link="/refguide8/error-event/" class="no-border" >}} | [Error Event](/refguide8/error-event/) | An error event defines a location where the nanoflow will stop and throw an error that occurred earlier. If you call a nanoflow, you may want to know whether any errors occurred within the nanoflow or not. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/continue-event.png" alt="continue event" link="/refguide8/continue-event/" class="no-border" >}} | [Continue event](/refguide8/continue-event/) | Used to stop the current iteration of a loop and continue with the next iteration. Continue events can only be used inside a [loop](/refguide8/loop/). |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/break-event.png" alt="break event" link="/refguide8/break-event/" class="no-border" >}} | [Break Event](/refguide8/break-event/) | Used to stop iterating over the list of objects and to continue with the rest of the flow after the loop. Break events can only be used inside a [loop](/refguide8/loop/). |

### Flows {#flows}

Flows form the connection between elements.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/sequence-flow.png" link="/refguide8/sequence-flow/" class="no-border" >}} | [Sequence flow](/refguide8/sequence-flow/) | An arrow that links events, activities, decisions, and merges with each other. Together they define the order of execution within a nanoflow. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/annotation-flow.png" link="/refguide8/annotation/#annotation-flow" class="no-border" >}} | [Annotation flow](/refguide8/annotation/#annotation-flow) | A connection that can be used to connect an annotation to another element. |

### Decisions {#decisions}

Decisions deal with making choices and merging different paths.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/decision.png" alt="decision" link="/refguide8/decision/" class="no-border" >}} | [Decision](/refguide8/decision/) | Makes a decision based on a condition and follows one and only one of the outgoing flows. **Note**: there is no parallel execution in nanoflows. |
| {{< figure src="/attachments/refguide8/modeling/application-logic/microflows/merge.png" alt="merge" link="/refguide8/merge/" class="no-border" >}} | [Merge](/refguide8/merge/) | Can be used to combine multiple sequence flows into one. If a choice is made in a nanoflow and afterwards some common work needs to be done, you can combine the two (or more) paths using a merge. |

### Activities{#activities}

[Activities](/refguide8/activities/) are the actions that are executed in a nanoflow:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/activity.png" alt="Activity" class="no-border" >}}

### Loop {#loop}

A [loop](/refguide8/loop/) is used to iterate over a list of objects:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/loop.png" alt="Loop" class="no-border" >}}

For every object the flow inside the loop is executed. A loop activity can contain all elements used in nanoflow, with the exception of start and end events. 

### Parameter {#parameter}

A [parameter](/refguide8/parameter/) is data that serves as input for the nanoflow. 

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/parameter.png" alt="Parameter" class="no-border" >}}

Parameters are filled at the location from where the nanoflow is triggered.

### Annotation {#annotation}

An [annotation](/refguide8/annotation/) is an element that can be used to put comments in a microflow:

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/annotation.png" alt="Annotation" class="no-border" >}}

### Item Usages

Studio Pro visualizes which items are used by the selected element(s). It does this by showing the used items in white text on a blue background. Conversely, elements that use the item(s) returned by the selected element(s) are marked with the word 'Usage' in white text on a green background.

In the example below, the parameter **AccountPasswordData** is highlighted because it is used in the selected activity (**Retrieve Account**). And the activity **Save password** has a **Usage** label because it uses the object returned by **Retrieve Account**.

{{< figure src="/attachments/refguide8/modeling/application-logic/microflows/microflow-nanoflow-example.png" class="no-border" >}}

## Keyboard Support

The nanoflow editor offers keyboard support for navigating and manipulating the nanoflows. The following table shows the keys that can be used.

| Key(s) | Effect |
| --- | --- |
| Arrow keys | Selects the nearby element (activity, event, loop, or parameter) in the direction of the arrow. |
| <kbd>Enter</kbd> | Edits the properties of the selected element. |
| <kbd>F2</kbd> | Renames the item returned by the selected element. |
| <kbd>Shift</kbd> + <kbd>F2</kbd> or just starting to type | Edits the caption of the selected element. |
| <kbd>Ctrl</kbd> + arrow keys | Moves the selected element in the direction of the arrow. |
| <kbd>Tab</kbd> | If a loop is selected, the first element inside the loop is selected. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | If an element inside a loop is selected, the loop itself is selected. |
| <kbd>Home</kbd> | Selects the start event. |
| <kbd>End</kbd> | Cycles through the end events. |
| Context-menu key or <kbd>Shift</kbd> + <kbd>F10</kbd> | Opens the context menu for the currently selected element. |

## Nanoflow Debugging

Step-by-step debugging is not supported yet. For now, Mendix recommends using a log message activity, which is shown in the console log of Studio Pro.

## Security

Nanoflows are executed in the context of the current user. Any operation for which the user is unauthorized will fail. For instance, when objects are retrieved in a nanoflow, only the ones for which the current user has read access will be returned. Committing an object only succeeds when the current user has write access for all changes.
