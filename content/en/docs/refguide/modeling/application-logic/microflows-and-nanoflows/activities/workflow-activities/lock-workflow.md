---
title: "Lock Workflow"
url: /refguide/lock-workflow/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

## Introduction

The **Lock workflow** activity can be used to lock a [workflow](/refguide/workflows/). 

{{% alert color="info" %}}
When the workflow is locked, it is the workflow definition that is locked. It means that when a workflow definition is locked it is not possible to start new instances of the workflow.
{{% /alert %}}

This microflow activity allows developers to build a function for the workflow administration that stops the workflow execution. The Lock workflow activity can be used when the workflow definition contains errors and you have to prevent further damage to the process execution or data that will be difficult to undo/revert.

The information whether the workflow is locked is stored in the **IsLocked** attribute of the **WorkflowDefinition** entity. For more information, see the [Definition-Related Entities](/refguide/workflow-engine/#definition) section in *Workflow Engine*. 

{{% alert color="warning" %}}
If the workflow is locked, new workflow instances from the selected workflow cannot be created and the activity will result in a Runtime error. If you try the lock the workflow which has been already locked, it will also result in a Runtime error.  For information on how to handle the error, see [Error Handling in Microflows](/refguide/error-handling-in-microflows/).
{{% /alert %}}

For information on unlocking the workflow, see the [Unlock Workflow](/refguide/unlock-workflow/).

## Properties

An example of Lock workflow properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/lock-workflow/lock-workflow-properties.jpg" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Lock workflow** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Input Type {#workflow}

This option allows you to choose between a workflow document (the one that you usually select in the **App Explorer** of your app) and a workflow object provided by the Runtime to target the workflow you want to lock.

### Workflow {#workflow}

The workflow that is locked by this activity. 

### Pause Instances 

With this option, all existing instances of the selected workflow which are in **Incompatible** or **In Progress** state are paused. We do not pause the **Aborted** and **Completed** workflow instances because those are final states and there is no way to revert those instances. It is not possible to pause **Failed** workflow instances, because even if you unpause them by unlocking the workflow, they would not start to run automatically and you would lose data on the reason of a failure.

This option is enabled by default.

#### Workflow State Transitions Upon Lock And Unlock {#workflow-state-transitions}

The table below shows all workflow state transitions upon lock and unlock the workflow.

| State | State After Pausing Instances Upon Lock | State After Reverting Instances Upon Unlock |
| :----: | :----: | :----: |
| In Progress | Paused | In Progress |
| Incompatible | Paused | Incompatible |
| Paused | Paused | Paused |
| Failed | Failed | Failed |
| Aborted | Aborted | Aborted |
| Completed | Completed | Completed |

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
