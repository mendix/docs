---
title: "Activate Ad-Hoc Sub-Process Activity"
linktitle: "Activate Ad-Hoc Sub-Process"
url: /refguide/activate-ad-hoc-sub-process-activity/
weight: 3
description: "Describes the Activate ad-hoc sub-process activity in Mendix microflows, including its execution behavior, properties, and consistency errors."
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

{{% alert color="warning" %}}
Ad-hoc sub-processes are a beta feature, available in Studio Pro 11.18 and above. To use this activity, you first need to enable ad-hoc sub-processes in the **Preferences** dialog box, as described in [Enabling Ad-Hoc Sub-Processes](/refguide/workflow-ad-hoc-sub-processes/#enable).
{{% /alert %}}

## Introduction

The **Activate ad-hoc sub-process activity** starts a flow inside an [ad-hoc sub-process](/refguide/workflow-ad-hoc-sub-processes/). It takes a workflow object and a target activity as inputs, and returns a Boolean that indicates whether the flow was activated.

{{% alert color="warning" %}}
Attempting to activate a flow in a workflow that is **Completed** or **Aborted** results in a runtime error. For information on how to handle these cases, see [Error Handling in Microflows](/refguide/error-handling-in-microflows/).
{{% /alert %}}

### Execution Behavior {#execution-behavior}

The table below describes how the Workflow Engine responds when an **Activate ad-hoc sub-process activity** is called, depending on the state of the workflow and the ad-hoc sub-process.

| Workflow/Element State | Action Result | System Behavior |
| --- | --- | --- |
| Aborted or Completed | Error | The activation fails because the workflow is in an incorrect state. |
| Ad-hoc sub-process not active | False | The ad-hoc sub-process is not waiting. This occurs when the workflow has not yet reached the sub-process, when the sub-process has already completed or moved on after a jump, or when the sub-process failed because its completion condition could not be evaluated. |
| Flow already running | False | A new instance of the flow is not created. |
| Ad-hoc sub-process active, target flow not running | True | The first activity of the flow starts. |
| Failed because of an error outside the ad-hoc sub-process | True | The flow starts running when the workflow is retried. |
| Failed because of an error inside a flow — target flow is not running | True | The flow starts running when the workflow is retried. |
| Paused or Incompatible | True | The flow starts running after the workflow is unpaused or the conflict is resolved. |
| Target not found in the current workflow definition | Error | A technical error is raised. |

## Properties

An example of **Activate ad-hoc sub-process activity** properties is shown below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/activate-ad-hoc-sub-process-activity/activate-action-properties.png" alt="Activate ad-hoc sub-process activity properties dialog showing Workflow object, Target, and Output fields" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Activate ad-hoc sub-process activity** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Workflow Object {#workflow}

The workflow instance that contains the ad-hoc sub-process to activate a flow in. This is a `System.Workflow` object; use the [Retrieve workflows](/refguide/retrieve-workflows/) activity to obtain it from the workflow context object.

### Target

The first activity of the flow to activate. The target must be the first activity of a flow in an ad-hoc sub-process in the same workflow as the **Workflow object**.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/activate-ad-hoc-sub-process-activity/activate-target-tree.png" alt="Target activity dialog showing a tree organized by module, workflow, ad-hoc sub-process, and the first activities of its flows" class="no-border" >}}

The dialog shows a tree organized by module and workflow. Under each workflow, expand an ad-hoc sub-process to see the first activities of its flows. Only the first activity of each flow can be selected.

### Variable Name

The name of the variable returned by this activity. The variable is a Boolean that indicates whether the flow was activated. The default variable name is `IsActivityActivated`.

For the full list of return values, see [Execution Behavior](#execution-behavior).

## Consistency Errors

The following consistency errors can occur when you configure this activity:

* "The 'Workflow' property is required." — The **Workflow object** field is empty. Select the `System.Workflow` instance for the workflow that contains the ad-hoc sub-process.
* "Workflow variable should be of type 'System.Workflow'." — The selected **Workflow object** is not of type `System.Workflow`. Use the [Retrieve workflows](/refguide/retrieve-workflows/) activity to obtain the correct object.
* "A target activity must be selected." — The **Target** field is empty. Select the first activity of a flow in an ad-hoc sub-process.
* "The target must be inside an ad-hoc sub-process." — The selected target activity is not inside an ad-hoc sub-process. Select an activity that is the first activity of a flow in an ad-hoc sub-process.
* "The target must be the first activity of an ad-hoc sub-process." — The selected target activity is not the first activity of a flow. Select the first activity of the flow you want to activate.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
