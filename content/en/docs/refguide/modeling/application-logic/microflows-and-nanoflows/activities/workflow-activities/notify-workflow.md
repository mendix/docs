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

The **Notify workflow** activity is used to resume or trigger logic within a [workflow](/refguide/workflows/). It specifically targets two types of elements:

* A [Wait for notification](/refguide/wait-for-notification/) workflow activity currently suspended in a flow.
* A [Notification event sub-process](/refguide/workflow-event-sub-processes/) defined within the workflow.

When the **Notify workflow** activity is executed, the Workflow Engine checks for an active receiver. If a valid **Wait for notification** activity or a **Notification event sub-process** is found and successfully triggered, the activity returns `true`. If no active receiver is found, it returns `false`.

{{% alert color="warning" %}}
Attempting to notify a workflow that is already `Completed` or `Aborted` results in a runtime error. For information on how to handle these cases, see [Error Handling in Microflows](/refguide/error-handling-in-microflows/).
{{% /alert %}}

### Execution Behavior

The table below describes how the Workflow Engine responds when a **Notify workflow** activity is called, depending on the state of the workflow and the type of receiver configured.

| Workflow/Element State | Action Result | System Behavior |
| --- | --- | --- |
| Aborted or Completed | Error | The activity fails. An error is logged indicating the workflow is no longer in an active state and cannot be notified. |
| Paused, Failed, or Incompatible | True | The notification is accepted and "queued." The targeted activity or event sub-process is triggered automatically once the workflow is resumed or resolved. |
| Wait for notification (Active) | True | The workflow resumes execution from the point of the **Wait for notification** activity. |
| Event sub-process (Inactive) | True | The event sub-process is triggered immediately and its execution path begins. |
| Event sub-process (In Progress) | False | The notification is ignored because an instance of this specific sub-process is already running. No new instance is created. |
| No matching receiver | False | If the workflow is active but does not contain the specified **Wait for notification** activity or **Event sub-process**, the activity returns `false`. |

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

It returns `false` in the following situations:

* The [wait for notification](/refguide/wait-for-notification/) workflow activity is not suspended at the time **Notify workflow** is triggered, meaning it is not waiting.
* The [wait for notification](/refguide/wait-for-notification/) workflow activity has already been notified.

For more information on the return values, see the [Introduction](#introduction) section above.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
