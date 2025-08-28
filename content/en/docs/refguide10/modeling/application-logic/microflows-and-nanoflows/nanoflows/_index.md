---
title: "Nanoflows"
url: /refguide10/nanoflows/
weight: 20
description: "Presents an overview of all the elements that can be used in a nanoflow."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Nanoflows are similar to [microflows](/refguide10/microflows/), in that they allow you to express the logic of your application. However, they do have some specific benefits. For example, they run directly on a browser/device and hence can be used in an offline app. Furthermore, since most of the activities run directly on the device, there is also a speed benefit for logic which does not need access to the server. For more information on how nanoflows and microflows differ, see the [Differences between Microflows and Nanoflows](/refguide10/microflows-and-nanoflows/#differences) section in *Microflows and Nanoflows*.

This page is an overview of all the elements that can be used in a nanoflow. For the properties of the nanoflow itself, see [Nanoflow Properties](/refguide10/nanoflow/). 

For information on using nanoflows as data sources, see [Nanoflow Source](/refguide10/nanoflow-source/).

## When to Use Nanoflows

### Offline Mobile Apps

Nanoflows are designed with offline-first applications in mind, as they allow you to model application logic that works in offline apps. Since all database-related activities are executed on the local offline database, nanoflows in offline apps are fast.

### Logic Where No Connection Is Needed

Nanoflows also offer great value to online applications (for example, for UI logic, validations, calculations, and navigation). However, keep in mind that when you perform database-related activities, each activity creates a separate network request to the Mendix Runtime.

The following activities interact with the database:

* [Create object](/refguide10/create-object/)
* [Commit object(s)](/refguide10/committing-objects/)
* [Retrieve](/refguide10/retrieve/)
* [Rollback object](/refguide10/rollback-object/)

Therefore, the best practice is to use nanoflows in online applications when they do not contain the above activities.

{{% alert color="info" %}}
An exception is that you can use the **Create object** activity to create a [non-persistable entity](/refguide10/persistability/#non-persistable) if this NPE:

* does not have any event handlers attached
* does not have any calculated attributes
* does not have any read-only attributes

In this case, the NPE is created on the client side and no request is sent to the Mendix Runtime.
{{% /alert %}}

{{% alert color="info" %}}
Changing objects without committing is not a database-related activity, as changes are applied on the device or in the browser.
{{% /alert %}}

#### Other Cases

Nanoflows perform best in online applications when no database-related activities are used, which are generally the best cases. However, nanoflows containing at most one database-related activity can still perform well. Since such nanoflows only require one network call, they perform as efficiently as a microflow. An example of this is performing validation logic on an object and committing the object in the same nanoflow.

## Notation and Categories

The graphical notation of nanoflows is based on the [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN). BPMN is a standardized graphical notation for drawing business processes in a workflow.

A nanoflow is composed of elements. The following categories are used:

* [Events](#events) represent the start and endpoints of a nanoflow and special operations in a loop
* [Flows](#flows) form the connection between elements
* [Decisions](#decisions) deal with making choices and merging different paths again
* [Activities](#activities) are the actions that are executed in a nanoflow
* [Loop](/refguide10/loop/) is used to iterate over a list of objects
* [Parameter](#parameter) is data that serves as input for the nanoflow.
* [Annotation](#annotation) is an element that can be used to put comments in a nanoflow.

### Events {#events}

Events represent the start and endpoints of a nanoflow and special operations in a loop.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/start-event.png" alt="start event" link="/refguide10/start-event/" class="no-border" >}} | [Start event](/refguide10/start-event/) | The starting point of a nanoflow. A nanoflow can only have one start event. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/end-event.png" alt="end event" link="/refguide10/end-event/" class="no-border" >}} | [End event](/refguide10/end-event/) | Defines the location where a nanoflow stops. Depending on the return type of the nanoflow, in some cases a value must be specified. There can be more than one end event. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/continue-event.png" alt="continue event" link="/refguide10/continue-event/" class="no-border" >}} | [Continue event](/refguide10/continue-event/) | Used to stop the current iteration of a loop and continue with the next iteration. Continue events can only be used inside a [loop](/refguide10/loop/). |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/break-event.png" alt="break event" link="/refguide10/break-event/" class="no-border" >}} | [Break Event](/refguide10/break-event/) | Used to stop iterating over a list of objects and to continue with the rest of the flow after the loop. Break events can only be used inside a [loop](/refguide10/loop/). |

### Flows {#flows}

Flows form the connection between elements.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/sequence-flow.png" link="/refguide10/sequence-flow/" class="no-border" >}} | [Sequence flow](/refguide10/sequence-flow/) | An arrow that links events, activities, decisions, and merges with each other. Together they define the order of execution within a nanoflow. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/annotation-flow.png" link="/refguide10/annotation/#annotation-flow" class="no-border" >}} | [Annotation flow](/refguide10/annotation/#annotation-flow) | A dashed-line that is used to connect an [annotation](#annotation) to another element. |

### Decisions {#decisions}

Decisions deal with making choices and merging different paths.

| Graphic | Name | Description |
| --- | --- | --- |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/decision.png" alt="decision" link="/refguide10/decision/" class="no-border" >}} | [Decision](/refguide10/decision/) | Makes a decision based on a condition and follows one and only one of the outgoing flows. There is no parallel execution in nanoflows. |
| {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/merge.png" alt="merge" link="/refguide10/merge/" class="no-border" >}} | [Merge](/refguide10/merge/) | Used to combine multiple sequence flows into one. If a choice is made in a nanoflow and afterwards some common work needs to be done, you can combine the two (or more) paths using a merge. |

### Activities{#activities}

[Activities](/refguide10/activities/) are the actions that are executed in a nanoflow:

{{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/activity.png" alt="Activity" class="no-border" >}}

### Loop {#loop}

A [loop](/refguide10/loop/) is used to iterate over a list of objects:

{{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/loop.png" alt="Loop" class="no-border" >}}

For every object, the flow inside the loop is executed. A loop activity can contain all elements used in nanoflow, with the exception of start and end events. 

### Parameter {#parameter}

A [parameter](/refguide10/parameter/) is data that serves as input for a nanoflow. 

{{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/parameter.png" alt="Parameter" class="no-border" >}}

Parameters are filled at the location from where the nanoflow is triggered.

### Annotation {#annotation}

An [annotation](/refguide10/annotation/) is an element that can be used to put comments in a nanoflow:

{{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/annotation.png" alt="Annotation" class="no-border" >}}

### Item Usages

Studio Pro visualizes which items are used by the selected element (or elements). It does this by showing the used items in white text on a blue background. Conversely, elements that use the item (or items) returned by the selected element (or elements) are marked with the word 'Usage' in white text on a green background.

In the example below, the parameter **AccountPasswordData** is highlighted because it is used in the selected activity (**Retrieve Account**). And the activity **Save password** has a **Usage** label because it uses the object returned by **Retrieve Account**.

{{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/microflow-nanoflow-example.png" class="no-border" >}}

## Keyboard Support

For an overview of the shortcut keys that are supported in the nanoflow editor, see the [Microflow, Nanoflow, and Rule Editor Shortcut Keys](/refguide10/keyboard-shortcuts/#logic-editor-keyboard-support) section in *Keyboard Shortcuts*.

## Security {#security}

Nanoflows are executed in the context of the current user. Any operation for which the user is unauthorized will fail. For instance, when objects are retrieved in a nanoflow, only the ones for which the current user has read access will be returned. Committing an object only succeeds when the current user has write access for all changes.

## Converting a Nanoflow to a Microflow {#convert-to-microflow}

In Studio Pro 10.19 and below, you can use the **Convert to microflow** functionality to create a new microflow based on the original nanoflow. There are two ways to find this option:

* Right-click anywhere in the nanoflow editor and click **Convert to microflow**. 
* Alternatively, in the **App Explorer**, right-click on the name of the nanoflow you want to convert, and click **Convert to microflow**.

{{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/nanoflows/convert-to-microflow.PNG" alt="Convert to microflow" width="550px" class="no-border" >}}

Afterwards, a new microflow is created and added to the same directory, and you can get consistency errors if there are elements that are not supported by microflows.

Starting from Studio Pro 10.20, there are two options available:

* **Duplicate as microflow**: This option creates a new microflow based on the original nanoflow. This works the same as the **Convert to microflow** functionality in Studio Pro 10.19 and below.
* **Convert to microflow**: This option removes the original nanoflow and replaces it with a new microflow. All possible usages throughout your app are updated and any non-replaceable usages remain as they are. When some usages cannot be replaced because they are not allowing microflows, a warning dialog appears. See below as an example:

    {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/nanoflows/warning-dialog.png" alt="Conversion warning dialog" width="550px" >}}

    In the warning dialog, you have the following options:

    * **Convert**: The original nanoflow is removed, only replaceable usages are updated, and any non-replaceable usages remain as they are.
    * **Show usages**: Stops the conversion and shows the irreplaceable usages of the original nanoflow.
    * **Cancel**: The conversion is cancelled and no changes are made.

## Canvas Interaction

In the nanoflow editor from Studio Pro 10.6, you can use common patterns like unlimited canvas, enhanced zoom and scroll, and a snap-to-flow to make new activities from the toolbox and toolbar always well aligned in your flow.

## Exporting a Nanoflow to an Image {#export-nanoflow}

To export a nanoflow to an image, navigate to the [File menu](/refguide10/file-menu/) in the Studio Pro top bar, and click **File** > **Export as image**.

This opens an **Export to image** dialog box allowing you to choose a name and location for the exported image. After clicking **Save**, another dialog box is opened, where you can change parameters for your image export such as a transparent or opaque background and a relative size of the exported image by selecting a zoom level.

The current document is exported as an image in the .png format.
