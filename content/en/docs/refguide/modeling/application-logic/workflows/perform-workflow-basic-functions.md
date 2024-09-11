---
title: "Performing Workflow Basic Functions"
linktitle: "Perform Basic Functions"
url: /refguide/perform-workflow-basic-functions/
weight: 20
---

## Introduction

A workflow is composed of [elements](/refguide/workflow-elements/) that you can use in the workflow editor. In this document, you will learn how to perform the following basic functions when working on workflows and on workflow elements:

* [Add a workflow](#add-workflow)
* [Delete a workflow](#delete-workflow)
* [Add elements to a workflow](#add-elements-to-workflow)
* [Move elements in a workflow](#move-elements)
* [Cut, copy, or paste elements in a workflow](#cut-copy-paste-elements)
* [View element properties](#view-element-properties)
* [Trigger a workflow from a page or via a microflow](#trigger-workflow)
* [Export a workflow to an image](#export-workflow)
* [Switch between portrait and landscape editor orientation](#orientation-modes)

## Adding a Workflow {#add-workflow}

To add a workflow to your app, do the following:

1. In the [App Explorer](/refguide/app-explorer/), right-click the module or a folder you want to create a page in and select **Add workflow**.
2. In the **Add Workflow** dialog box, fill in the **Name** for the workflow.
3. Select an **Entity** to use it as a [workflow parameter](/refguide/workflow-parameters/):

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/add-workflow-dialog.png" alt="Adding Workflow" class="no-border" >}}

The workflow is created.

## Deleting a Workflow {#delete-workflow}

To delete a workflow, do the following:

1. In the [App Explorer](/refguide/app-explorer/), select a workflow you would like to delete and right-click it.
2. In the displayed list, select **Delete** and confirm your choice by clicking **Delete** in the pop-up dialog.

The selected workflow is deleted. 

{{% alert color="info" %}}
The **Workflow** entity that was generated when the workflow was created remains in the domain model. You have to delete it manually.
{{% /alert %}}

## Adding Elements to a Workflow {#add-elements-to-workflow}

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

## Moving Elements and Paths in a Workflow {#move-elements}

### Moving Elements in a Workflow

You can move elements around in your workflow. To do so, drag and drop an element to another path in the working area. 

This moves the whole structure of the dragged element, meaning that the element and its underlying elements are moved too.

You cannot move the first (and only) start event and the last end event.

### Moving Outgoing Paths in a Workflow

You can swap outgoing paths from a parallel split, a user task, or a decision in a workflow. To do so, drag and drop a path to another path of the same element.

This swaps the dragged path and its content with the targeted path. You can only swap paths that come from the same element.

## Cutting/Coping/Pasting Elements in a Workflow {#cut-copy-paste-elements}

To cut/copy/paste elements, use <kbd>Ctrl</kbd> + <kbd>X</kbd> /  <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>V</kbd> or  <kbd>Command</kbd> + <kbd>X</kbd> /  <kbd>Command</kbd> + <kbd>C</kbd> / <kbd>Command</kbd> + <kbd>V</kbd>.

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

### Elements that Cannot be Cut, Copied or Pasted

The following elements cannot be cut, copied or pasted in the workflow editor:

* Workflow (this can be only be done in the [App Explorer](/refguide/app-explorer/#basic-functions))
* WorkflowContext
* Start activity
* End activity (the final **End activity** which is at the end of the workflow)
* Outcomes (meaning outcomes of different outgoing flows from an activity that can have several flows, for example, a Decision)

## Viewing Element Properties {#view-element-properties}

To view properties of an element, do one of the following:

* Select an element and open **Properties** pane to view its properties.
* Right-click an element and select **Properties** from the list of options that opens.
* Double-click an element.

## Triggering a Workflow {#trigger-workflow}

You can trigger a workflow [from a page](#trigger-page) or [via a microflow](#trigger-microflow). 

### Triggering a Workflow from a Page {#trigger-page}

To start the workflow, you can add a widget with a specific on-click event on a page. For more information on on-click events, see [On Click Event and Events Section](/refguide/on-click-event/).

Do the following:

1. Open a page from where you would like to trigger a workflow.
2. Make sure you have a data container with the workflow context on your page. 
3. Drag a widget that has on-click event in its properties (for example, a button) into the data container with the workflow context. 
4. Open button's properties > **Events** section. 
5. Set **On-click** property to **Call workflow**. 
6. Set **Workflow** to the workflow you would like to trigger.

You have configured the button to trigger the workflow.

### Triggering a Workflow via a Microflow {#trigger-microflow}

To trigger a workflow via a microflow, you can add a **Call workflow** activity to the microflow. For more information on this activity, see [Call Workflow](/refguide/workflow-call/).  

Do the following:

1. Open a microflow that will trigger a workflow.
2. Make sure the microflow has a necessary parameter with the workflow context.
3. In the **Toolbox**, find **Call workflow** activity and drag it into the microflow.
4. Double-click the activity to open its properties.
5. Set **Workflow** to the workflow you would like to trigger.
6. Set **Context object** to the workflow context:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/call-workflow-example.png" alt="Call Workflow Example" width="500" class="no-border" >}}

7. Click **OK**.

Now when you run this microflow, it will trigger the selected workflow. 

## Exporting a Workflow to an Image {#export-workflow}

There are two ways to export a workflow to an image: 

* Through the [File menu](/refguide/file-menu/) in the top bar: **File** > **Export as image**.
* By clicking **Export as image** in the upper-left corner of the workflow editor.

Both options open a **Save file** dialog-box allowing you to choose a name and location for the exported image. After clicking **Save** the **Export workflow model to image** dialog-box is opened, where you can change parameters for your image export such as a transparent or opaque background and a relative size of the exported image by selecting a zoom level:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/export-workflow-to-image.png" alt="Export workflow to image prompt" width="600" class="no-border" >}}

The current document is exported as an image in the .png format.

## Switching between Portrait and Landscape Editor Orientation {#orientation-modes}

You can switch between the portrait (vertical) and landscape (horizontal) editor orientation by clicking the orientation icon located in the upper-right corner of the workflow editor. Despite potential minor visual differences in certain canvas elements, the functionality remains entirely consistent across both rendering modes.

It is important to bear in mind that the chosen orientation is not preserved or shared across projects. Consequently, each time you re-open a workflow, the orientation will reset to its default portrait mode.

## Read More

* [Workflow Elements](/refguide/workflow-elements/)
* [Configuring a Workflow in Studio Pro for the Employee Onboarding Process](/refguide/workflow-how-to-configure/)
