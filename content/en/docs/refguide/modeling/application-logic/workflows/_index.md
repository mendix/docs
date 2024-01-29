---
title: "Workflows"
url: /refguide/workflows/
weight: 20
tags: ["workflow", "workflows", "Studio Pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Workflow is a visual language that allows you to build extendable processes. It is fully integrated with other visual languages, such as the microflow editor and page editor. 

## 2 Workflow Elements

A workflow is composed of elements that you can use in the workflow editor: you can either see them in the working area (start and end events, a parameter), or drag them from **Toolbox** to the flow. For more information, see [Workflow Elements](/refguide/workflow-elements/). 

## 3 Performing Basic Functions

You can perform the following basic functions when working on workflows:

* Open a workflow
* Create a workflow
* Delete a workflow
* Add elements to a workflow
* Move elements in a workflow
* Cut, copy, or paste elements in a workflow
* View element properties
* Trigger a workflow from a page or via a microflow
* Export a workflow to an image
* Switch between portrait and landscape editor orientation

### 3.1 Opening a Workflow

To open a workflow in Studio Pro, do the following:

1. In the [App Explorer](/refguide/app-explorer/), open a module where this workflow is located.
2. Navigate to the workflow’s location inside the module and double-click the workflow.

The selected workflow is opened.

### 3.2 Adding a Workflow

To add a workflow to your app, do the following:

1. In the [App Explorer](/refguide/app-explorer/), right-click the module or a folder you want to create a page in and select **Add workflow**.
2. In the **Add Workflow** dialog box, fill in the **Name** for the workflow.
3. Select an **Entity** to use it as a [workflow parameter](/refguide/workflow-parameters/):

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/add-workflow-dialog.png" alt="Adding Workflow" >}}

The workflow is created.

### 3.3 Deleting a Workflow

To delete a workflow, do the following:

1. In the [App Explorer](/refguide/app-explorer/), select a workflow you would like to delete and right-click it.
2. In the displayed list, select **Delete** and confirm your choice by clicking **Delete** in the pop-up dialog.

The selected workflow is deleted. 

{{% alert color="info" %}}
The **Workflow** entity that was generated when the workflow was created remains in the domain model. You have to delete it manually.
{{% /alert %}}

### 3.4 Adding Elements to a Workflow {#add-elements-to-workflow}

There are several ways to add an element to a workflow:

* You can add an element via the **Toolbox**:

    1. Open the **Toolbox**.
    2. Select an element you would like to add and drag this element into the working area.

* You can add an element via an path in your workflow (available from Studio Pro 10.4.0):

    1. Place your mouse on any path you would like to add an element to. A plus icon appears to indicate that a new element can be added.
    2. Click the plus icon and select an element from the pop-up menu.

* You can also add an element by right-clicking an existing element (available from Studio Pro 10.4.0):

    1. Right-click an existing element and go to **Insert after**.
    2. Select an element from the menu.

When adding elements, note the following:

* It is not possible to add an **End** event or a **Jump** activity after an element as this makes the next element unreachable.
* It is not possible to add an **End** event or a **Jump** activity before an **End** event or a **Jump** activity as this makes the next element unreachable.
* An **End** event cannot be placed in paths of a parallel split. This is the same for placing an **End** event on, for example, an outcome of a user task if this user task is placed on a path of a parallel split. 

### 3.5 Moving Elements and Paths in a Workflow

#### 3.5.1 Moving Elements in a Workflow

You can move elements around in your workflow. To do so, drag and drop an element to another path in the working area. 

This moves the whole structure of the dragged element, meaning that the element and its underlying elements are moved too.

You cannot move the first (and only) start event and the last end event.

#### 3.5.2 Moving Outgoing Paths in a Workflow

You can swap outgoing paths from a parallel split, a user task, or a decision in a workflow. To do so, drag and drop a path to another path of the same element.

This swaps the dragged path and its content with the targeted path. You can only swap paths that come from the same element.

### 3.6 Cutting/Coping/Pasting Elements in a Workflow

To cut/copy/paste elements, use <kbd>Ctrl</kbd> + <kbd>X</kbd> /  <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>V</kbd> or  <kbd>Cmd</kbd> + <kbd>X</kbd> /  <kbd>Cmd</kbd> + <kbd>C</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd>.

When using cut/copy/paste, note the following:

* When cutting or copying an element, the clipboard contains the whole structure of the element. For example, when copying a **User Task** with **Outcomes** which contain activities, the **User Task** and the **Outcomes** and its activities are copied. 

    Note that copying a **User Task** or a **Microflow** does not create a copy of the elements that are being referenced. Instead, the copied element will have the same references as the original. For example, when the original **User Task** has a task page configured, the copied **User Task** refers to the same task page.
* When no element is selected in the workflow, the clipboard content is pasted at the end of the workflow.
* When the start event is selected, the clipboard content is pasted at the start of the workflow.
* When an activity is selected, the clipboard content is pasted under the selected activity.
* When a flow is selected, the clipboard content is pasted at the beginning of the selected flow.
* When the clipboard contents has an **Annotation**, it can only be pasted into the workflow or into individual activities that support annotations.
* Pasting an activity after an **End** or **Jump** activity results in a consistency error as an **End** or **Jump** activity should be placed at the end of a flow.
* Pasting activity can result in a consistency error when the next activity becomes unreachable by either placing an **End** or **Jump** activity in front of it or when all flows before a merge end with an **End** or **Jump** activity.

#### 3.6.1 Elements that Cannot be Cut, Copied or Pasted

The following elements cannot be cut, copied or pasted in the workflow editor:

* Workflow (this can be only be done in the [App Explorer](/refguide/app-explorer/#basic-functions))
* WorkflowContext
* Start activity
* End activity (the final **End activity** which is at the end of the workflow)
* Outcomes (meaning outcomes of different outgoing flows from an activity that can have several flows, for example, a Decision)

### 3.7 Viewing Element Properties 

To view properties of an element, do one of the following:

1. Select an element and open **Properties** pane to view its properties.
2. Right-click an element and select **Properties** from the list of options that opens.
3. Double-click an element.

### 3.8 Triggering a Workflow

You can trigger a workflow [from a page](#trigger-page) or [via a microflow](#trigger-microflow). 

#### 3.8.1 Triggering a Workflow from a Page {#trigger-page}

To start the workflow, you can add a widget with a specific on-click event on a page. For more information on on-click events, see [On Click Event and Events Section](/refguide/on-click-event/).

Do the following:

1. Open a page from where you would like to trigger a workflow.
2. Make sure you have a data container with the workflow context on your page. 
3. Drag a widget that has on-click event in its properties (for example, a button) into the data container with the workflow context. 
4. Open button's properties > **Events** section. 
5. Set **On-click** property to **Call workflow**. 
6. Set **Workflow** to the workflow you would like to trigger.

You have configured the button to trigger the workflow.

#### 3.8.2 Triggering a Workflow via a Microflow {#trigger-microflow}

To trigger a workflow via a microflow, you can add a **Call workflow** activity to the microflow. For more information on this activity, see [Call Workflow](/refguide/workflow-call/).  

Do the following:

1. Open a microflow that will trigger a workflow.
2. Make sure the microflow has a necessary parameter with the workflow context.
3. In the **Toolbox**, find **Call workflow** activity and drag it into the microflow.
4. Double-click the activity to open its properties.
5. Set **Workflow** to to the workflow you would like to trigger.
6. Set **Context object** to the workflow context:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/call-workflow-example.png" alt="Call Workflow Example" width="500">}}

7. Click **OK**.

Now when you run this microflow, it will trigger the selected workflow. 

### 3.9 Exporting a Workflow to an Image

There are two ways to export a workflow to an image: 

* Through the [File menu](/refguide/file-menu/) in the top bar: **File** > **Export as image**.
* By clicking **Export as image** in the upper-left corner of the workflow editor.

Both options open a **Save file** dialog-box allowing you to choose a name and location for the exported image. After clicking **Save** the **Export workflow model to image** dialog-box is opened, where you can change parameters for your image export such as a transparent or opaque background and a relative size of the exported image by selecting a zoom level:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/export-workflow-to-image.png" alt="Export workflow to image prompt" width="600">}}

The current document is exported as an image in the .png format.

### 3.10 Switching between Portrait and Landscape Editor Orientation {#orientation-modes}

You can switch between the portrait (vertical) and landscape (horizontal) editor orientation by clicking the orientation icon located in the upper-right corner of the workflow editor. Despite potential minor visual differences in certain canvas elements, the functionality remains entirely consistent across both rendering modes.

It is important to bear in mind that the chosen orientation is not preserved or shared across projects. Consequently, each time you re-open a workflow, the orientation will reset to its default portrait mode.

## 4 Workflow Entities in the System Module {#workflow-entities}

There are several workflow-related entities in the System module of your app, some of which can be used in in an XPath and expressions, and some are there as basic entities that are internally only (for example, by the Runtime). 

You can find the following workflow-related entities in the System module: 

* **WorkflowDefinition** – Represents your workflow in the database. It contains following four attributes:
    * **Name** and **Title** are **Name** and **Title** properties of the workflow
    * **IsObsolete** is a Boolean that is marked as true when you delete your workflow 
    * **IsLocked** is a Boolean that is marked as true when you lock your workflow and marked as false when you unlock your workflow
    In the case that you delete the workflow, the workflow still stays in the database (and you will still be able to create reports with it), but Mendix marks that it does not exist anymore. For more information on properties, see [Workflow Properties](/refguide/workflow-properties/). 

* **WorkflowUserTaskDefinition** – Represents your [user tasks](/refguide/user-task/) and [system activities](/refguide/call-microflow/) in the database. It contains two attributes, where **Name** is a **Name** property of the user task or a system activity, and **IsObsolete** is a Boolean that is marked as true when you delete a user task/system activity from your workflow. They still stay in the database (and you will still be able to create reports with them), but Mendix marks that they do not exist anymore. 
* **Workflow** – A representation of a running workflow, so every time when the new workflow is started, the Runtime creates a new instance.
* **WorkflowRecord** - A representation of a workflow instance data at a specific execution moment. For example, a snapshot of a workflow instance at the moment when it was completed.
* **WorkflowUserTask** – This entity is created when the Runtime executes the user task and an end-user chooses an action (for example, clicks an **Approve** button to approve a request). This entity can be used for workflow overview pages and in an application logic.
* **WorkflowJumpToDetails** – This non-persistent entity is generated by the [Generate Jump-to Option](/refguide/generate-jump-to-options/) microflow action and contains information on the workflow instance and activities where the workflow can jump to.
* **WorkflowCurrentActivity** – This non-persistent entity represents data generated by the [Generate Jump-to Option](/refguide/generate-jump-to-options/) microflow action and contains information on the current activity of the workflow instance.
* **WorkflowActivityDetails** – This non-persistent entity represents data generated by the [Generate Jump-to Option](/refguide/generate-jump-to-options/) microflow action and contains information on activities of the workflow instance.
* **WorkflowActivityRecord** - A representation of the workflow activity data at a specific execution moment. For example, a snapshot of a workflow activity at the moment when it was completed.
* **WorkflowEvent** - A representation of the workflow event data at a specific execution moment. It contains the following attributes:
    * **EventTime** is the time at which the event occurred.
    * **EventType** is the type of the event being triggered. For more information, see the [Event Types](/refguide/workflow-events/#workflow-event-types) section in *Workflow Events*.
    * **WorkflowEvent_Initiator** is an association to the current user object which is logged in. The [activity workflow events](/refguide/workflow-events/#activity-event-type) will have an initiator in cases where a user takes some action, otherwise it will be empty. For example, when a user specifies the outcome of a user task or when a user notifies a suspended workflow, then this user becomes the initiator. As a special case, it will also be empty for the **Workflow Initiated** event of a sub-workflow because a sub-workflow is directly related to the [Call workflow](/refguide/call-workflow/) activity.

## 5 Workflow Variables

Workflows have dedicated variables that can be used in an XPath and Expressions inside the Workflow editor. 

The list of variables is described below: 

* `$WorkflowContext` – an instance of the business-related entity that travels through the workflow
* `$WorkflowInstance` – an instance of a currently running workflow (**System.Workflow**)

For more information on workflow-related entities in the System module, see the [Workflow Entities in the System Module](#workflow-entities) section above. 

For example, you can use these variables as parameters in the **Task name** and **Task description** properties of a user task. For more information, see [User Task](/refguide/user-task/). 

## 6 Workflow-Specific Activities in Microflows

You can add workflow-related activities to your microflows. For more information on these activities, see [Workflow Activities](/refguide/workflow-activities/). 

## 7 Workflow-Specific On-Click Events on Pages

You can trigger workflows or user tasks from pages via specific on-click events configured on widgets. For more details, see [On Click Event and Events Section](/refguide/on-click-event/).

## 8 Workflow Commons Module

The **Workflow Commons** module is a workflow specific module that has preconfigured page templates, pages, dashboards, etc. It can save you a lot of time during development. You can either download it from the Marketplace or use one of the app templates when creating a new app in the Developer Portal. These templates already contain the **Workflows Commons** module.

For more information on how to configure the **Workflow Commons** in an existing app, see [Adding a Workflow to an Existing App with Workflow Commons](/refguide/workflow-setting-up-app/).

## 9 Workflow Engine

The Workflow Engine is the Mendix Runtime engine for executing workflows. For information on how the engine works, how you can interact with the engine, and what information it stores, see [Workflow Engine](/refguide/workflow-engine/).

## 10 Read More

* [Adding a Workflow to an Existing App with Workflow Commons](/refguide/workflow-setting-up-app/)
* [Jumping to Different Activities in a Workflow](/refguide/jump-to/)
* [Workflow Events](/refguide/workflow-events/)
