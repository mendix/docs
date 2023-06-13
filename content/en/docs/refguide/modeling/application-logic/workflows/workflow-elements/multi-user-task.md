---
title: "Multi-User Task"
url: /refguide/multi-user-task/
weight: 30
tags: ["workflow", "workflows", "multi-user task", "multi user task", "task", "Studio Pro"]
---

## 1 Introduction

Multi-user tasks are tasks that have to be executed by multiple users. Each user performs the same task. The outcomes from all individual tasks will be aggregated into a single multi-user task outcome based on the [completion condition](#completion-condition).

For example, you can assign a review task to multiple users:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/multi-user-task/multi-user-task.jpg" alt="Multi-user Task Example" width="200">}}

## 2 Properties

Multi-user task properties consist of the following sections:

* [General](#general)
* [Due date](#due-date)
* [Events](#events)
* [Targeted users](#users)
* [Completion condition](#completion-condition)
* [Outcomes](#outcomes)
* [Task page](#task-page)
* [Display information](#display-info)
* [Common](#common)

### 2.1 General Section {#general}

**Caption** defines a title of the multi-user task.

### 2.2 Due Date Section {#due-date}

**Due date** is stored in the System module on the **UserTask** entity as an attribute and its data can be dynamically displayed in the running app. For example, you can use it to set a deadline for the multi-user task and display it in your app. However, this is not an automatic reminder but rather a deadline you reference when keeping track of the multi-user task. If you are using the **Workflow Commons** module, **Due date** is used in page templates and preconfigured dashboards.

The **Due date** section properties are described in the table below:

| Property | Description |
| --- | --- |
| None | No due date is set. |
| Duration | You can set the deadline for the multi-user task with the **Due in** option, which indicates the number of hours, days, or weeks the task is due in. Possible values of the property are the following ones:<br /><ul><li>Hour(s)</li><li>Day(s)</li><li>Week(s)</li> </ul> |
| Expression | You can set a due date for the multi-user task writing an expression. For example, to set a due date to tomorrow, you can use `addDays([%CurrentDateTime%], 1)`. |

### 2.3 Events Section {#events}

**On Created** event allows you to select a microflow that is executed immediately after users have been determined for a newly created task instance. You can use this setting for a microflow that will send an email notification about the multi-user task to the assigned users.

### 2.4 Targeted Users Section {#users}

#### 2.4.1 Target Users Using {#target-users}

**Target users using** allows you to manage what users will the task be assigned to. You can filter users using XPath or implement more flexible logic and add several checks using a microflow.

Possible options of this property are described in the table below:

| Option | Description |
| --- | --- |
| XPath | Allows you to filter users who should be assigned to the multi-user task. For example, you can assign a certain task only to users with the Manager user role. You can use attributes of the **User Entity** set in [App Settings](/refguide/app-settings/#workflows). |
| Microflow | Allows you to assign the multi-user task to certain users. Using microflow you can check, for example, which users have the right to approve multi-user tasks and are currently not on vacation and assign the task only to users who passed the check.<br />The return type of the microflow should be the **User Entity** set in [App Settings](/refguide/app-settings/#workflows). |
| No assignment | Allows you to not assign the multi-user task to certain users immediately. This can be useful when you, for example, want the multi-user task to be created but have an administrator assign it to certain users later. |

In case **Target users using** (an XPath or a microflow) results in an empty list of users (0 users), the workflow fails. For more information on how to handle this kind of issues, see the [Operation](/refguide/change-workflow-state/#operation) section in *Change Workflow State*.

#### 2.4.2 XPath Constraint

Specifies the expression used to assign the multi-user task. This option is displayed only when the [Target users using](#target-users) is set to **XPath**.

#### 2.4.3 Microflow

Specifies the microflow used to assign the multi-user task. This option is displayed only when the [Target users using](#target-users) is set to **Microflow**.

### 2.5 Completion Condition Section {#completion-condition}

#### 2.5.1 Participant Input {#participant-input}

This property determines the maximum number of targeted users that are required to select an outcome to complete a multi-user task.

##### 2.5.1.1 All

All targeted users should select an outcome to complete the multi-user task.

##### 2.5.1.2 Absolute Number {#absolute-number}

The specified amount of targeted users should select an outcome to complete the multi-user task.

##### 2.5.1.3 Percentage

The specified percentage of targeted users should select an outcome to complete the multi-user task.

The result of applying the percentage will be rounded upwards to the nearest mathematical integer value.

For example, when there are 19 targeted users and the **Percentage** is set to `50%`, then 10 users need to select an outcome to complete the multi-user task.

#### 2.5.2 Decision Method

With this property, you specify how the outcomes of the individual users are aggregated into a single multi-user task outcome. This aggregated outcome is used as the final outcome to complete the multi-user task.

##### 2.5.2.1 Consensus

Select this rule when all users should be in agreement with the provided outcome. That is, they should all select the same outcome. There has to be consensus. When there is no consensus, the multi-user task will complete with the selected [fallback outcome](#fallback-outcome).

###### 2.5.2.1.1 Example

The following example shows how you can use **Consensus** as the **Decision method**:

Out of a group of two or more users, two users need to perform the same task: to approve or reject a request. Their decisions are represented by the task outcomes. When the **Decision method** is set to **Consensus**:

* If they both approve the request, the multi-user task is completed with the outcome `Approve`.
* If they both reject the request, the multi-user task is completed with the outcome `Reject`.
* If no consensus is reached between the two users, the multi-user task will then be completed with a fallback outcome (in this example, `NoConsensus` )

You can refer to the following properties settings for this example:

* **Targeted users**: The users that can perform the task (they can be a team, a department, or two pre-selected users)
* **Participant input**: **Absolute number** > `2`
* **Decision method**: **Consensus**
* **Fallback outcome**: An outcome users can select but it will be selected automatically when there is no consensus (in this example, `NoConsensus`)
* **Outcomes**: `Approve`, `Reject`, `NoConsensus`

###### 2.5.2.1.2 Fallback Outcome {#fallback-outcome}

This outcome will be the final outcome of the multi-user task in the following cases:

* If any of the users during consensus decision method selects a different outcome from the rest of the users
* If the number of [targeted users](#users) is less than the [absolute number](#absolute-number) specified in the **Participant input** section:

  For example, if the targeted user count is `10` and you set the absolute number to `20` as the **Participant input**, then consensus can never be reached and fallback outcome will be used as the final outcome to complete the task.

{{% alert color="info" %}}
The fallback outcome should not be an option a user can select on the task page.
{{% /alert %}}

{{% alert color="info" %}}
The completion condition is evaluated after each user selects an outcome. Therefore，it is possible that a multi-user task completes with a final outcome before all required users have completed their task. For example, when 5 users need to review a contract (`Approve`, `Reject`) and the first 2 users are not in agreement (one selects `Approve` and the other one selects `Reject`), this multi-user task will be completed with the **Fallback outcome**. The input from the other users will not change the final outcome anymore. The task will no longer appear in their inbox.
{{% /alert %}}

##### 2.5.2.2 Veto {#veto}

Veto decision method requires two outcomes, one of which is the veto outcome. If anyone selects the veto outcome, then the multi-user task will be completed with the veto outcome.

For a multi-user task to complete with the non-veto outcome, all users, as defined in property **Participant input**, need to complete their task by selecting the non-veto outcome.

###### 2.5.2.2.1 Examples

Two examples are provided here to show how you can use **Veto** as the **Decision method**.

One example is when a whole team needs to make a joint decision during a hiring process: `Hire` or `DoNotHire`. The candidate receives an offer if the whole team agrees that this person should be hired. When one team member decides the person should not be hired (veto), the outcome of the multi-user task will be `DoNotHire`. As soon as someone decides this is not the right candidate, the rest do not have to make a decision anymore, as their decisions cannot influence the final outcome.

You can refer to the following properties settings for the example above:

* **Targeted users**: All users that need to decide during the hiring process (the whole team)
* **Participant input**: **All** targeted users
* **Decision method**: **Veto**
* **Veto outcome**: `DoNotHire`
* **Outcomes**: `Hire`, `DoNotHire`

Another example is when a group of five experts needs to decide whether a change request is `Minor` or `Major`. If any one of the five experts decides it is a major request, the change request will be `Major`. The input from the other four experts is not relevant anymore. If all five of them decide it is a minor change request, the final multi-user task outcome will be `Minor`. In this case, the outcome `Major` is the veto outcome.

You can refer to the following properties settings for the second example above:

* **Targeted users**: group of experts
* **Participant input**: **Absolute number** > `5`
* **Decision method**: **Veto**
* **Veto outcome**: `Major`
* **Outcomes**: `Minor`, `Major`

###### 2.5.2.2.2 Veto Outcome

This property defines the [veto](#veto) outcome.

{{% alert color="info" %}}
The completion condition is evaluated after each user selects an outcome. When one user completes the task by selecting the veto outcome, the multi-user task will be completed with the veto outcome. The task will be removed from the inbox of the remaining users. Their outcomes will not change the final multi-user task outcome.
{{% /alert %}}

### 2.6 Outcomes Section {#outcomes}

The outcomes property allows you to create new outcomes for the multi-user task. Outcomes are translated into different outgoing paths of the multi-user task and can be referred to by other elements, such as a button. For example, you have a process when you need to approve or reject a request. One button on a [task page](#task-page) can refer to the **Approve** outcome of the multi-user task, while another one can use the **Reject** outcome.

### 2.7 Task Page Section {#task-page}

Task page is the page that an assigned user will use to inspect their task and complete it. You can also allow users to add comments or attachments on this page.

If you generate the page using the templates in the **Workflows Commons** module, these templates contain necessary data containers and associated context entity.

### 2.8 Display Information Section {#display-info}

#### 2.8.1 Task Name

**Task name** is stored in the System module on the **UserTask** entity as an attribute and its data can be dynamically displayed in the running app. If you are using the **Workflow Commons** module, the **Task name** is used in page templates and on preconfigured pages to identify the task.

For more information on using parameters, see the [Parameters](#parameters) section below.

#### 2.8.2 Task Description

**Task Description** is stored in the System module on the **UserTask** entity as an attribute and its data can be dynamically displayed in the running app. If you are using the **Workflow Commons** module, the **Task description** is used in page templates.

The **Task description** can contain parameters that are written between braces, e.g. {1}.

#### 2.8.3 Parameters {#parameters}

Parameters are attributes the value of which will be displayed. For example, you can display when the task is due using the **DueDate** parameter.

To view **Parameters**, click the ellipsis icon next to the **Task name** or **Task description** in properties depending on where you would like to display these parameters.

Parameters have the following settings:

* **Index** – an identification number of a parameter
* **Expression** – an XPath expression that will be displayed

##### 2.8.3.1 Adding New Parameters

To add a parameter to the **Task name** or the **Task description**, do the following:

1. Click the ellipsis icon next to the **Task name** or the **Task description**.

2. In the **Edit task name/description** dialog box > **Parameters** section, click the **New** button.

3. In the **Template Parameter (String)** dialog box, specify the expression, and confirm your choice:

   {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/user-task/parameter-example.jpg" alt="Parameter Example" >}}

   {{% alert color="info" %}}Make sure that the attribute you use in the expression is of the string type.{{% /alert %}}

4. In the **Template** setting, write the text you would like to display and type **Index** of the parameter you would like to include. For example, you can add a template for the **Task description** specifying the name of the workflow and what the workflow due date is :

   {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/user-task/task-description-example.jpg" alt="Task Description Example" >}}

##### 2.8.3.2 Performing Other Actions on Parameters

In addition to adding new parameters, you can perform the following actions on parameters:

* **Delete** – to delete a parameter click **Delete** or press <kbd>Delete</kbd> on your keyboard
* **Edit** – double-click a parameter to edit it or click **Edit**
* **Move up** – to move a parameter up in the list of parameters and also to change its index, click **Move up**
* **Move down** – to move a parameter down in the list of parameters and also to change its index, click **Move down**

### 2.9 Common Section {#common}

**Name** is the internal name of the multi-user task. When referring to the multi-user task in the app you will use this name. It must be unique within the workflow, but you can have two multi-user tasks with the same name in different workflows.

## 3 Read More

* [Workflows](/refguide/workflows/)
* [User Task](/refguide/user-task/)
