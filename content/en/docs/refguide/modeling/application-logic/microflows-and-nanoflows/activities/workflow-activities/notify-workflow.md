---
title: "Notify Workflow"
url: /refguide/notify-workflow/
weight: 90
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

## Introduction {#introduction}

The **Notify workflow** activity can be used to notify a [workflow](/refguide/workflows/) that is suspended on the [Wait for notification](/refguide/wait-for-notification/) workflow activity.

If the workflow is suspended on the specified wait for notification activity, then this activity will return `true` and the workflow execution will continue further. Otherwise, it will simply return `false`.

{{% alert color="warning" %}}
When you try to notify a workflow which is already `Completed` or `Aborted`, it will result in a Runtime error. For information on how to handle the error, see [Error Handling in Microflows](/refguide/error-handling-in-microflows/).
{{% /alert %}}

## Properties

An example of **Notify workflow** properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/notify-workflow/notify-workflow-properties.jpg" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Notify workflow** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Workflow Object {#workflow}

The workflow instance that will be notified by this activity.

### Activity

The ([caption](/refguide/wait-for-notification/#general) of the) [wait for notification](/refguide/wait-for-notification/) workflow activity that suspends the workflow instance. This wait for notification workflow activity needs to be notified so that the workflow can continue.

### Variable Name

The name of the variable returned by the activity. This variable will be a Boolean that indicates whether the notification is received or not by the workflow instance.

For more information on the return values, see the [Introduction](#introduction) section above.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
