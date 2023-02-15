---
title: "Lock Workflow"
url: /refguide/lock-workflow/
weight: 10
tags: ["studio pro", "lock workflow", "workflow lock"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}

This activity can only be used in **Microflows**.

This activity was introduced in Studio Pro [9.23.0](/releasenotes/studio-pro/9.23/#9230).

{{% /alert %}}

## 1 Introduction

The **Lock workflow** activity can be used to lock [workflow](/refguide/workflows/). 
Please note that we put lock on workflow, not the workflow instance.
The information if the workflow is locked is stored in **IsLocked** attribute of[WorkflowDefinition] entity(/refguide/workflows/).
If the workflow is locked, new workflow instances from the selected workflow can not be created and it will result in a runtime error. To handle the error, see [error handling in microflows](/refguide/error-handling-in-microflows/).
This microflow activity allows developers to build a workflow administration function that prevents further business or data damage in scenario's where continuation is not possible.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/lock-workflow/lock-workflow.jpg" >}}

{{% alert color="info" %}}

To unlock the workflow, see the [unlock workflow activity](/refguide/unlock-workflow/).

{{% /alert %}}

{{% alert color="warning" %}} 

When you try the lock the workflow which has been already locked, it will result in a runtime error. To handle the error, see [error handling in microflows](/refguide/error-handling-in-microflows/).

{{% /alert %}}

## 2 Properties

An example of Lock workflow properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/lock-workflow/lock-workflow-properties.jpg" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Lock workflow** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Workflow {#workflow}

The workflow that is locked by this activity. 

### 3.2 Pause Instances {#workflow}

With this option, all existing instances of selected workflow which are in Incompatible or InProgress state are paused.
We do not pause the Aborted and Completed workflow instances because those are final states and there is no way to revert those instances.
For Failed workflow instances, we don't pause because because even if you unpause upon unlock, they would not start to run automatically and you would lose the failure reason.
Please see the table below for all workflow state transitions upon lock and unlock the workflow.
This option is enabled by default.

#### 3.2.1 Workflow State Transitions Upon Lock And Unlock {#workflow-state-transitions}
| State | State After Pausing Instances Upon Lock | State After Reverting Instances Upon Unlock |
| :----: | :----: | :----: |
| InProgress | **Paused** | **InProgress** |
| Incompatible | **Paused** | **Incompatible** |
| Paused | Paused | Paused |
| Failed | Failed | Failed |
| Aborted | Aborted | Aborted |
| Completed | Completed | Completed |


## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
