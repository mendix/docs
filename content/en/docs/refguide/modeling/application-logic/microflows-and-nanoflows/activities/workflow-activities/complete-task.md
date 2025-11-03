---
title: "Complete User Task"
url: /refguide/complete-user-task/
weight: 30
aliases:
    - /refguide/complete-task/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

## Introduction

The **Complete user task** activity can be used to define which outcome the [user task](/refguide/user-task/) should follow. 

## Properties

An example of complete user task properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/complete-task/complete-task-properties.jpg" alt="Complete Task Properties" max-width=100% >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Complete user task** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### User Task Object

The user task object of the **System.WorkflowUserTask** entity available from the microflow parameters.

### User Task

The user task for which you want to set an outcome. 

### Outcome

Gives you a list of available outcomes for the selected user task. The user task will follow the selected outcome. If there is only one outcome available, the value is set to *Default* and is not editable.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
