---
title: "Multi-User Task"
url: /refguide/multi-user-task/
weight: 30
tags: ["workflow", "workflows", "multi-user task", ""multi user task"", "task", "Studio Pro"]
---

## 1 Introduction

Multi-user task allows you to submit a workflow task to multiple users for approval. The user task will be completed based on the [completion criteria](#24-completion-criteria).

For example, you can assign a review task to multiple users:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/multi-user-task/multi-user-task.jpg" alt="Multi-user Task Example" width="200">}}

## 2 Properties

Multi-user task properties consist of the following sections:

* [General](#general)
* [Targeted users](#users)
* [User input](#user-input)
* [Due date](#due-date)
* [Events](#events)
* [Outcomes](#outcomes)
* [Task page](#task-page)
* [Display information](#display-info)
* [Common](#common)

### 2.1 General Section {#general}

See [User task general section](/refguide/user-task/#general)

### 2.2 Targeted Users Section {#users}

See [User task targeted users section](/refguide/user-task/#users)

### 2.3 User Input Section {#user-input}

#### 2.3.1 Input from

You can switch between a single-user task and a multi-user task.

#### 2.3.2 Required Input

This property determines the minimum number of targeted users that are required to select an outcome for a user task to be completed.

##### 2.3.2.1 All

All targeted users should select an outcome for the task to be completed.

##### 2.3.2.2 Absolute number

The specified amount of targeted users should select an outcome for the task to be completed.

##### 2.3.2.3 Percentage

The specified percentage of targeted users should select an outcome for the task to be completed.

The result of applying the percentage will be rounded upwards to the nearest mathematical integer value.

### 2.4 Completion Criteria

This property specifies the algorithm used to complete a multi-user task.

#### 2.4.1 Consensus

All the assigned users need to select the same outcome for the task. The outcome selected by all the users will be the final outcome of the task.

**Fallback outcome**

This outcome will be the final outcome of the task in the following cases:

- If any of the users during consensus completion criteria selects a different outcome than the rest
- If the number of [targeted users](#users) is less than the [absolute targeted users](#2322-absolute-number).

#### 2.4.2 Veto

Veto completion criteria allows only two outcomes, one of which is the veto outcome. If anyone selects the veto outcome than that will be the final outcome of the task.

For all the non-veto outcomes, if we group them per outcome, then for any outcome to become the final outcome of the task, the number of items for that outcome group should be greater than or equal to the [minimum number of targeted users](#232-required-input).

**Veto outcome**

This property defines the veto outcome. See [Veto](#242-veto) for more information on this outcome.

### 2.3 Due Date Section {#due-date}

See [User task due date section](/refguide/user-task/#due-date)

### 2.4 Events Section {#events}

See [User task events section](/refguide/user-task/#events)

### 2.5 Outcomes Section {#outcomes}

See [User task outcomes section](/refguide/user-task/#outcomes)

### 2.6 Task Page Section {#task-page}

See [User task task page section](/refguide/user-task/#task-page)

### 2.7 Display Information Section {#display-info}

See [User task display information section](/refguide/user-task/#display-info)

### 2.8 Common Section {#common}

**Name** is the internal name of the user task. When referring to the user task in the app you will use this name. It must be unique within the workflow, but you can have two user tasks with the same name in different workflows.

## 3 Read More

* [Workflows](/refguide/workflows/)
