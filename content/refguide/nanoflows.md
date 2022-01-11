---
title: "Nanoflows"
parent: "microflows-and-nanoflows"
menu_order: 20
description: "Presents an overview of all the elements that can be used in a nanoflow."
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Nanoflows are similar to [microflows](microflows), in that they allow you to express the logic of your application. However, they do have some specific benefits (for example, they run directly on the browser/device and can be used in an offline app). Furthermore, most of the actions run directly on the device, so there is also a speed benefit for logic which does not need access to the server.

{{% alert type="info" %}}
This page is an overview of all the elements that can be used in a nanoflow. For the properties of the nanoflow itself, see [Nanoflow Properties](nanoflow).
{{% /alert %}}

## 2 When to Use Nanoflows

### 2.1 Offline Mobile Apps

Nanoflows are designed with offline-first applications in mind, as they allow you to model application logic that works in offline apps. Since all database-related actions will be executed on the local offline database, nanoflows in offline apps will be fast.

### 2.2 Logic Where No Connection Is Needed

Nanoflows also offer great value to online applications (for example, for UI logic, validations, calculations, and navigation). However, please keep in mind that, when you perform database-related actions, each action will create a separate network request to the Mendix Runtime.

The following actions interact with the database:

* Create
* Commit
* Retrieve
* Rollback

Therefore, the best practice is to use nanoflows in online applications when they do not contain the above actions.

{{% alert type="info" %}}
Changing objects without committing is not a database-related action, as changes are applied on the device or in the browser.
{{% /alert %}}

#### 2.2.1 Other Cases

Although nanoflows perform best in online applications when no database-related actions are used, and these are generally the best cases, nanoflows that contain at most one database-related action can also still perform well. Because such nanoflows only require one network call, they perform as well as a microflow. An example of such a use case is performing validation logic on an object and committing the object in the same nanoflow.

## 3 Differences from Microflows

There are five main differences between nanoflows and microflows:

1. When a nanoflow steps through its actions, client actions are directly executed. For example, an open page action immediately opens a page instead of at the end of the nanoflow. This is different from client actions in a microflow, which only run when the client receives the result from the microflow.
2. When used in nanoflow activities, expressions do not support the following objects and variables: `$latestSoapFault`, `$latestHttpResponse`, `$currentSession`, `$currentUser`, `$currentDeviceType`.
3. Nanoflows are not run inside a transaction so, if an error occurs in a nanoflow, it will not roll back any previous changes.
4. Nanoflows and microflows do not provide the same actions. Some actions available in microflows are not available in nanoflows, and vice versa.
5. Because nanoflows use JavaScript libraries and microflows use Java libraries, there can sometimes be slight differences in the way expressions are executed.
6. Changes done to the lists in a sub-nanoflow are not reflected in the original nanoflow.

## 4 Notation & Categories

The graphical notation of nanoflows is based on the [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN). BPMN is a standardized graphical notation for drawing business processes in a workflow.

A nanoflow is composed of elements. The following categories are used:

* [Events](#events) represent the start and endpoints of a nanoflow and special operations in a loop
* [Flows](#flows) form the connection between elements
* [Decisions](#decisions) deal with making choices and merging different paths again
* [Activities](#activities) are the actions that are executed in a nanoflow
* [Loop](loop) is used to iterate over a list of objects
* [Parameter](#parameter) is data that serves as input for the nanoflow.
* [Annotation](#annotation) is an element that can be used to put comments in a nanoflow.

### 4.1 Events {#events}

Events represent the start and endpoints of a nanoflow and special operations in a loop.

| Graphic | Name | Description |
| --- | --- | --- |
| [![start event](attachments/microflows-and-nanoflows/start-event.png)](start-event) | [Start event](start-event) | The starting point of the nanoflow. A nanoflow can only have one start event. |
| [![end event](attachments/microflows-and-nanoflows/end-event.png)](end-event) | [End event](end-event) | Defines the location where the nanoflow will stop. Depending on the return type of the nanoflow, in some cases a value must be specified. There can be more than one end event. |
| ![](attachments/microflows-and-nanoflows/error-event.png) | [Error Event](error-event) | An error event defines a location where the nanoflow will stop and throw an error that occurred earlier. If you call a nanoflow, you may want to know whether any errors occurred within the nanoflow or not. |
| [![continue event](attachments/microflows-and-nanoflows/continue-event.png)](continue-event) | [Continue event](continue-event) | Used to stop the current iteration of a loop and continue with the next iteration. Continue events can only be used inside a [loop](loop). |
| [![break event](attachments/microflows-and-nanoflows/break-event.png)](break-event) | [Break Event](break-event) | Used to stop iterating over the list of objects and to continue with the rest of the flow after the loop. Break events can only be used inside a [loop](loop). |

### 4.2 Flows {#flows}

Flows form the connection between elements.

| Graphic | Name | Description |
| --- | --- | --- |
| [![](attachments/microflows-and-nanoflows/sequence-flow.png)](sequence-flow) | [Sequence flow](sequence-flow) | An arrow that links events, activities, decisions, and merges with each other. Together they define the order of execution within a nanoflow. |
| [![](attachments/microflows-and-nanoflows/annotation-flow.png)](annotation#annotation-flow) | [Annotation flow](annotation#annotation-flow) | A connection that can be used to connect an annotation to another element. |

### 4.3 Decisions {#decisions}

Decisions deal with making choices and merging different paths.

| Graphic | Name | Description |
| --- | --- | --- |
| [![decision](attachments/microflows-and-nanoflows/decision.png)](decision) | [Decision](decision) | Makes a decision based on a condition and follows one and only one of the outgoing flows. **Note**: there is no parallel execution in nanoflows. |
| [![merge](attachments/microflows-and-nanoflows/merge.png)](merge) | [Merge](merge) | Can be used to combine multiple sequence flows into one. If a choice is made in a nanoflow and afterwards some common work needs to be done, you can combine the two (or more) paths using a merge. |

### 4.4 Activities{#activities}

[Activities](activities) are the actions that are executed in a nanoflow:

![Activity](attachments/microflows-and-nanoflows/activity.png)

### 4.5 Loop {#loop}

A [loop](loop) is used to iterate over a list of objects:

![Loop](attachments/microflows-and-nanoflows/loop.png)

For every object the flow inside the loop is executed. A loop activity can contain all elements used in nanoflow, with the exception of start and end events. 

### 4.6 Parameter {#parameter}

A [parameter](parameter) is data that serves as input for the nanoflow. 

![Parameter](attachments/microflows-and-nanoflows/parameter.png)

Parameters are filled at the location from where the nanoflow is triggered.

### 4.7 Annotation {#annotation}

An [annotation](annotation) is an element that can be used to put comments in a microflow:

![Annotation](attachments/microflows-and-nanoflows/annotation.png)

### 4.8 Item Usages

Studio Pro visualizes which items are used by the selected element(s). It does this by showing the used items in white text on a blue background. Conversely, elements that use the item(s) returned by the selected element(s) are marked with the word 'Usage' in white text on a green background.

In the example below, the parameter **AccountPasswordData** is highlighted because it is used in the selected activity (**Retrieve Account**). And the activity **Save password** has a **Usage** label because it uses the object returned by **Retrieve Account**.

![](attachments/microflows-and-nanoflows/microflow-nanoflow-example.png)

## 5 Keyboard Support

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

## 6 Security

Nanoflows are executed in the context of the current user. Any operation for which the user is unauthorized will fail. For instance, when objects are retrieved in a nanoflow, only the ones for which the current user has read access will be returned. Committing an object only succeeds when the current user has write access for all changes.
