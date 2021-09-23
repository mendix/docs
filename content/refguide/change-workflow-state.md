---
title: "Change Workflow State"
parent: "workflow-activities"
menu_order: 15
tags: ["studio pro", "user task", "workflow", "change workflow state", "workflow state"]
---

{{% alert type="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Change workflow state** activity can be used to add **Abort**, **Restart**,  **Continue**, **Pause**, and **Resume** operations to a workflow and control workflow instances. 

## 2 Properties

An example of change workflow state properties is represented in the image below:

![Change Workflow State Properties](attachments/change-workflow-state/change-workflow-state-properties.png)

{{% todo %}}[Update the screenshot]{{% /todo %}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Change workflow state** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Operation

You can select the following operations that represent the new state of the workflow instance:

* **Abort workflow** – This operation aborts the workflow instance and brings the workflow instance to its final state; there is no operation to undo an abort operation. The **Reason** property can be set for administration purposes, as to why the workflow instance is aborted. For more information on the **Reason** property, see the [Reason](#reason) section below.
* **Continue workflow** – This operation continues the processing of the workflow instance from the point where it was before a new version of the workflow definition was deployed. The workflow instance will no longer be in the *Incompatible* state . If the task is no longer in the new workflow definition this action will result in an error.
* **Pause workflow** – This operation halts (pauses) further processing of the workflow. User tasks cannot be completed when the workflow instance is in  the *Pause* state. Use the **Resume workflow** operation to resume the processing of the workflow.
* **Restart workflow** – This operation stops the current task of the workflow and starts it from the initial task in the workflow definition. This action can be used when a workflow instance has become *Incompatible* after a modified workflow definition has been deployed. Note that at the restart of the workflow instance, the workflow context object has the same values as before the **Restart workflow** operation was executed.
* **Resume workflow** – This operation resumes the workflow after it has been paused with the **Pause workflow** operation. User tasks can be completed again.

{{% alert type="info" %}}

The workflow instance state changes are reflected in the **System.Workflow.State** attribute.

{{% /alert %}}

### 3.2 Workflow Object

The **Workflow object** property should be a specialization of the **System.Workflow** entity and identifies the workflow instance the operation should be executed on.

### 3.3 Reason {#reason}

The **Reason** property is only used when **Abort workflow** is selected in the **Operation** property and allows you to define a description why this workflow instance was aborted.

## 4 Common Section {#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}