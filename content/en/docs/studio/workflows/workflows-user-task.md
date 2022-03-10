---
title: "User Task"
url: /studio/workflows-user-task/
category: "Workflows"
weight: 20
tags: ["workflow", "workflows", "user task", "task"]
---

## 1 Introduction

User task allows you to assign a workflow task to a certain user or a group of users. 

For example, you can add filters and assign a task to the IT department. When the workflow reaches this user task, the task will appear in their inbox.

## 2 Properties

User task properties consist of the following sections:

* [General](#general)
* [User Assignment](#user-assignment)
* [Task Page](#task-page)
* [Display Information](#display-info)
* [Due Date](#due-date)
* [Outcomes](#outcomes)
* [Events](#events)
* [Permissions](#permissions)

### 2.1 General Section {#general}

**Caption** defines a title of the user task:

{{< figure src="/attachments/studio/workflows/workflows-user-task/general.jpg" alt="General Section" >}}

### 2.2 User Assignment Section {#user-assignment}

**Assign user task using** allows you to manage which users can pick up the task. You can filter users or implement a more complicated logic and add several checks using a microflow. 

{{< figure src="/attachments/studio/workflows/workflows-user-task/user-assignment.jpg" alt="User Assignment" >}}

Possible options of this property are described in the table below:

| Option    | Description                                                  |
| --------- | ------------------------------------------------------------ |
| Filter    | Allows you to filter users who should be assigned to the user task. For example, you can assign a certain task only to users with the Administrator user role. For more information on how to use filters, see [Data Filters](/studio/data-filters/). |
| Microflow | Allows you to assign the user task to certain users. Using a microflow you can check, for example, what users are in the right department and are currently not on vacation and assign the task only to users who passed the check. For more information on microflows, see [Microflows](/studio/microflows/). |

### 2.3 Task Page Section {#task-page}

**Page** is the page that an assigned user will use to inspect their task and complete it: 

{{< figure src="/attachments/studio/workflows/workflows-user-task/task-page.jpg" alt="Task Page" >}}

### 2.4 Display Information Section {#display-info}

The **Display Information** section defines the user task name and its description that are displayed in the running (published) app, for example, in the user's task inbox and on the task page. 

{{< figure src="/attachments/studio/workflows/workflows-user-task/display-information.jpg" alt="Display Information" >}}

The **Display Information** section properties are described in the table below:

| Property         | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| Task Name        | **Task Name** is displayed in the running app. The **Task Name** can contain expression outcomes, which will be displayed to the end-users. For example, you can add the **FullName** attribute value from the **Employee Onboarding** data to display the name of the new employee. |
| Task Description | **Task Description** is a description of the workflow displayed in the running app. The **Task Description** can contain expression outcomes, which will be displayed to the end-users. For example, you can add the **PhoneModel** attribute value from the **Employee Onboarding** data to display what phone needs to be shipped for this employee. |

### 2.4 Due Date Section {#due-date}

The **Due Date** section allows you to set a deadline for the user task and keep track of it. However, this is not an automatic reminder but rather a deadline you reference when keeping track of the workflow. For example, you can use this due date to show overdue tasks on a dashboard.

{{< figure src="/attachments/studio/workflows/workflows-user-task/due-date.jpg" alt="Due Date Section" >}}

The **Due Date** section properties are described in the table below:

| Property   | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| None       | No due date is set.                                          |
| Duration   | You can set the deadline for the user task with the **Due In** option, which indicates the number of hours, days, or weeks the task is due in. Possible values of the property are the following ones:<br /><ul><li>Hour(s)</li><li>Day(s)</li><li>Week(s)</li> </ul> |
| Expression | You can set a due date for the user task writing an expression. For example, to set a due date to tomorrow, you can use `addDays([%CurrentDateTime%], 1)`. |

### 2.6 Outcomes Section {#outcomes}

The **Outcomes** property allows you to create new outcomes for the user task. These outcomes can be referred to by other elements, such as buttons. For example, you have a process when you need to approve or reject a request. One button on a [task page](#task-page) can refer to the **Approve** outcome of the user task, while the other one can use the **Reject** outcome:

{{< figure src="/attachments/studio/workflows/workflows-user-task/outcomes.jpg" alt="Outcomes Section" >}}

### 2.7 Events Section {#events}

**On Create** event allows you to select a microflow that is executed immediately after users have been determined for a newly created task. For example, you can use this setting for a microflow that will send an email notification about the user task to the assigned users.

{{< figure src="/attachments/studio/workflows/workflows-user-task/events.jpg" alt="Events Section" >}}

Possible options for this setting are the following:

* **Microflow** – a microflow that is executed when users have been determined for a newly created task 
* **Nothing** – no event is executed

### 2.8 Permissions Section {#permissions}

**Allowed roles** defines the [user role](/studio/settings-security/#roles-and-permissions) that can execute the user task.

{{< figure src="/attachments/studio/workflows/workflows-user-task/permissions.jpg" alt="Permissions Section" >}}

## 3 Read More

* [Workflows](/studio/workflows/)