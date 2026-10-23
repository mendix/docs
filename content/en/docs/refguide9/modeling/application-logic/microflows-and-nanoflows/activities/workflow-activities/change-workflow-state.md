---
title: "Change Workflow State"
url: /refguide9/change-workflow-state/
weight: 20
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.

This activity was introduced in Studio Pro [9.6.0](/releasenotes/studio-pro/9.6/#960). The **Retry workflow** option of this activity was introduced in Studio Pro [9.12.0](/releasenotes/studio-pro/9.12/#9120). The **Unpause workflow** option was called **Resume workflow** in Studio Pro versions below 9.12.0.
{{% /alert %}}

## Introduction

The **Change workflow state** activity can be used to add **Abort**, **Continue**, **Pause**, **Restart**, and **Resume** operations to a workflow and control workflow instances. 

## Properties

An example of change workflow state properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/change-workflow-state/properties.png" alt="Change Workflow State Properties" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Change workflow state** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Operation {#operation}

You can select the following operations that represent the new state of the workflow instance:

* **Abort workflow** – This operation aborts the workflow instance and brings it to its final state; there is no operation to undo an abort operation. The **Reason** property can be set for administration purposes to indicate why the workflow instance is aborted. For more information on the **Reason** property, see the [Reason](#reason) section below.

* **Continue workflow** – This operation continues the processing of the workflow instance from the point where it was before a new version of the workflow definition was deployed. The workflow instance will no longer be in the *Incompatible* state. If the task is no longer in the new workflow definition, this action results in an error.

* **Pause workflow** – This operation pauses further processing of the workflow. User tasks cannot be completed when the workflow instance is in the *Pause* state. Use the **Resume workflow** operation to resume processing of the workflow.

* **Restart workflow** – This operation stops the current task of the workflow and starts it from the initial task in the workflow definition. This action can be used when a workflow instance has become *incompatible* after a modified workflow definition has been deployed. Note that when the workflow instance is restarted, the workflow context object has the same values as before the **Restart workflow** operation was executed.

* **Unpause workflow** – This operation resumes the workflow after it has been paused with the **Pause workflow** operation. User tasks can be completed again.

* **Retry workflow** – This operation allows you to retry the failed workflow. **Retry workflow** differs from **Restart workflow** – **Restart workflow** starts the same workflow from the beginning, while **Retry workflow** retries the failed activity to see whether the workflow can get back into the in-progress state. There can be the following use cases:
    * If the failed activity is a user task activity, **Retry workflow** attempts to get the user task back to the state it had before it failed. 
    * If the user task failed due to an execution error in the event handling microflow (for more information, see the [Events Section](/refguide9/user-task/#events) in *User Task* and the [User Task State Change](/refguide9/workflow-properties/#user-task-state-change) section in *Workflow Properties*), the failed microflow is re-executed. 
    * If the user task failed because no users were targeted by a microflow or XPath expression (for more information, see the [Assign User Task Using](/refguide9/user-task/#assign-user-task) section in *User Task*), there are two ways to fix this:
        * Change the data that is used by the targeting microflow or the XPath expression so that it results in one or more users (for example, making sure each role has at least one user). After that the **Retry workflow** will re-execute the targeting microflow or XPath expression.
        * Add targeted users to the **System.WorkflowUserTask_TargetUsers** association (for example, from the **DefaultWorkflowAdmin** page in the [Workflow Commons](/appstore/modules/workflow-commons/) module or from your own functionality). In this case the **Retry workflow** puts the workflow into the in-progress state and does not execute the targeting microflow or XPath expression again.

{{% alert color="info" %}}
The workflow instance state changes are reflected in the **System.Workflow.State** attribute.
{{% /alert %}}

### Workflow Object

The **Workflow object** property should be a specialization of the **System.Workflow** entity and identifies the workflow instance the operation should be executed on.

### Reason {#reason}

The **Reason** property is only used when **Abort workflow** is selected in the [Operation](#operation) property and allows you to add a description on why this workflow instance was aborted.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}
