---
title: "Unlock Workflow"
url: /refguide9/unlock-workflow/
weight: 80
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}

This activity can only be used in **Microflows**.

This activity was introduced in Studio Pro [9.23.0](/releasenotes/studio-pro/9.23/#9230).
{{% /alert %}}

## Introduction

The **Unlock workflow** activity can be used to unlock a [workflow](/refguide9/workflows/), i.e. a workflow definition. 
If the workflow is unlocked, new instances of the workflow can be created.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/unlock-workflow/unlock-workflow.jpg" class="no-border" >}}

{{% alert color="warning" %}} 

When you try the unlock the workflow which is not locked, it will result in a Runtime error. For information on how to handle the error, see [Error Handling in Microflows](/refguide9/error-handling-in-microflows/).

{{% /alert %}}

For information on locking the workflow, see the [Lock Workflow](/refguide9/lock-workflow/).

## Properties

An example of Unlock workflow properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/unlock-workflow/unlock-workflow-properties.jpg" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Unlock workflow** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Workflow {#workflow}

The workflow that is unlocked by this activity. 

### Unpause Instances {#workflow}

With this option, all paused running workflow instances are reverted to their previous state. Workflow instances that are not currently paused are not impacted.
For more information on workflow state transitions, see the [Workflow State Transitions Upon Locking and Unlocking](/refguide9/lock-workflow/#workflow-state-transitions) section in *Lock Workflow*.

This option is enabled by default.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}
