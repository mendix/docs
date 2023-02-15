---
title: "Unlock Workflow"
url: /refguide/unlock-workflow/
weight: 10
tags: ["studio pro", "unlock workflow", "workflow unlock"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}

This activity can only be used in **Microflows**.

This activity was introduced in Studio Pro [9.23.0](/releasenotes/studio-pro/9.23/#9230).
{{% /alert %}}

## 1 Introduction

The **Unlock workflow** activity can be used to unlock [workflow](/refguide/workflows/). 
If the workflow is unlocked, new instances of the workflow can be created.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/unlock-workflow/unlock-workflow.jpg" >}}

{{% alert color="warning" %}} 

When you try the unlock the workflow which is not locked, it will result in a runtime error. To handle the error, see [error handling in microflows](/refguide/error-handling-in-microflows/).

{{% /alert %}}

## 2 Properties

An example of Unlock workflow properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/unlock-workflow/unlock-workflow-properties.jpg" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Unlock workflow** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Workflow {#workflow}

The workflow that is unlocked by this activity. 

### 3.2 Unpause Instances {#workflow}

With this option, all paused running workflow instances are reverted to their previous state.
For more information about the state transitions, please see the [table](/refguide/unlock-workflow/#)
This option is enabled by default.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
