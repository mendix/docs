---
title: "Notify Workflow"
url: /refguide/notify-workflow/
weight: 80
tags: ["studio pro", "notify workflow", "workflow notify"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Notify workflow** activity can be used to notify a [workflow](/refguide/workflows/) that is suspended on the [WaitForNotification](/refguide/wait-for-notification) workflow activity.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/notify-workflow/notify-workflow.jpg" >}}

{{% alert color="warning" %}}

When you try to notify a workflow which is already `Completed` or `Aborted`, it will result in a Runtime error. For information on how to handle the error, see [Error Handling in Microflows](/refguide/error-handling-in-microflows/).

## 2 Properties

An example of Notify workflow properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/notify-workflow/notify-workflow-properties.jpg" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Notify workflow** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Workflow Object {#workflow}

The workflow instance that will be notified by this activity.

### 3.2 Activity

The [WaitForNotification](/refguide/wait-for-notification) workflow activity on which the workflow instance is suspended on and you would like to notify so that the workflow can continue further.

### 3.3 Output

If the workflow is suspended on the specified wait for notification activity then this activity will return `true` and the workflow execution will continue further, otherwise it will simply return a `false`.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
