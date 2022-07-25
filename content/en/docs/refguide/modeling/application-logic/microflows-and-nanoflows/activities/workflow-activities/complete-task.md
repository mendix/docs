---
title: "Complete Task"
url: /refguide/complete-task/
weight: 30
tags: ["studio pro", "user task", "workflow", "task outcome", "complete task"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Complete task** activity can be used to define which outcome the [user task](/refguide/user-task/) should follow. 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/complete-task/complete-task.jpg" alt="Complete Task" >}}

## 2 Properties

An example of complete task properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/complete-task/complete-task-properties.jpg" alt="Complete Task Properties" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Complete task** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 User Task Object

The user task object of the System.WorkflowUserTask entity available from the microflow parameters.

### 3.2 User Task

The user task for which you want to set an outcome. 

### 3.3 Outcome

Gives you a list of available outcomes for the selected user task. The user task will follow the selected outcome. If there is only one outcome available, the value is set to *Default* and is not editable.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}