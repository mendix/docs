---
title: "Show User Task Page"
url: /refguide/show-task-page/
weight: 50
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

## 1 Introduction

The **Show user task page** activity can be used to open a user task page defined in the user task properties. 

## 2 Properties

An example of show user task page properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/show-task-page/open-task-page-properties.jpg" alt="Show user task page Properties" width="650px" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Show user task page** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### 3.1 User Task Object

The user task object of the System.WorkflowUserTask entity available from the microflow parameters.

### 3.2 Auto-Assign {#auto-assign}

With this option, you can automatically assign the user task to the user who has opened the task page.

For a [single user task](/refguide/user-task/), the auto assignment happens only if the user task has not been assigned to anyone yet.

For a [multi-user task](/refguide/multi-user-task/), the auto assignment happens irrespective of whether the task was assigned before (to another user) or not.

This option is enabled by default.

{{% alert color="info" %}}
Only the user who is assigned to the task can complete it (otherwise, it results in a Runtime error). If you choose to not automatically assign the user to the task when the page is opened, make sure that the user is assigned before the task is completed. For example, you can add the **Assign to me** button to the page.
{{% /alert %}}

### 3.3 Who Can Open

This option specifies who is able to open the user task page when a user has already been assigned to it.

| Option | Description |
| --- | --- |
| Assigned user *(default)* | Only the user who is currently assigned to the task is able to open the user task page. |
| Users with access  | All users who have access to the user task can open the user task page.<br />Note that this option means that multiple users can open the page at the same time. Only the assigned user is able to complete the task, however, other users can make changes to the page, and the data will not be saved unless you add a **Save** button. This button saves data, but does not complete the task. <br />Take into account that when two users have the task page open simultaneously, data from the user who saves changes the last is stored and this will overwrite data from the other user. |

{{% alert color="info" %}}
For a multi-user task, this setting has no effect if the [Auto-Assign](#auto-assign) is enabled.
{{% /alert %}}

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
