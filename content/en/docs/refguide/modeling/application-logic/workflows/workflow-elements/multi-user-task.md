---
title: "Multi-User Task"
url: /refguide/multi-user-task/
weight: 30
---

## Introduction

Multi-user tasks are tasks that have to be executed by multiple users. Each user performs the same task. The outcomes from all individual tasks will be aggregated into a single multi-user task outcome based on the [completion condition](#completion-condition).

For example, you can assign a review task to multiple users:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/multi-user-task/multi-user-task.jpg" alt="Multi-User Task Example" width="200" class="no-border" >}}

## Properties

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

### General Section {#general}

**Caption** defines a title of the multi-user task.

### Due Date Section {#due-date}

**Due date** is stored in the System module on the **UserTask** entity as an attribute and its data can be dynamically displayed in the running app. For example, you can use it to set a deadline for the multi-user task and display it in your app. However, this is not an automatic reminder but rather a deadline you reference when keeping track of the multi-user task. If you are using the **Workflow Commons** module, **Due date** is used in page templates and preconfigured dashboards.

The **Due date** section properties are described in the table below:

| Property | Description |
| --- | --- |
| None | No due date is set. |
| Duration | You can set the deadline for the multi-user task with the **Due in** option, which indicates the number of hours, days, or weeks the task is due in. Possible values of the property are the following ones:<br /><ul><li>Hours</li><li>Days</li><li>Weeks</li> </ul> |
| Expression | You can set a due date for the multi-user task writing an expression. For example, to set a due date to tomorrow, you can use `addDays([%CurrentDateTime%], 1)`. |

### Events Section {#events}

**On Created** event allows you to select a microflow that is executed immediately after users have been determined for a newly created task instance. You can use this setting for a microflow that will send an email notification about the multi-user task to the assigned users.

### Targeted Users Section {#users}

#### Target Users Using {#target-users}

**Target users using** allows you to manage what users will the task be assigned to. You can filter users using XPath, or implement more flexible logic and add several checks using a microflow.

Possible options of this property are described in the table below:

| Option | Description |
| --- | --- |
| XPath | Allows you to filter users who should be assigned to the multi-user task. For example, you can assign a certain task only to users with the Manager user role. You can use attributes of the **User Entity** set in [App Settings](/refguide/app-settings/#workflows). |
| Microflow | Allows you to assign the multi-user task to certain users. Using microflow you can check, for example, which users have the right to approve multi-user tasks and are currently not on vacation and assign the task only to users who passed the check.<br><br>The return type of the microflow should be the **User Entity** set in [App Settings](/refguide/app-settings/#workflows). |
| No assignment | Allows you to not assign the multi-user task to certain users immediately. This can be useful when you, for example, want the multi-user task to be created but have an administrator assign it to certain users later. |

In case **Target users using** (an XPath or a microflow) results in an empty list of users (0 users), the workflow fails. For more information on how to handle this kind of issues, see the [Operation](/refguide/change-workflow-state/#operation) section in *Change Workflow State*.

#### XPath Constraint

Specifies the expression used to assign the multi-user task. This option is displayed only when the [Target users using](#target-users) is set to **XPath**. Click **Edit** to edit the [XPath constraint](/refguide/xpath-constraints/).

#### Microflow

Specifies the microflow used to assign the multi-user task. This option is displayed only when the [Target users using](#target-users) is set to **Microflow**.

### Completion Condition Section {#completion-condition}

**Completion condition** defines all the criteria that must be fulfilled for the multi-user task to be marked as completed. It consists of the following settings:

* [Participant input](#participant-input)
* [Decision method](#decision-method)
* [Completion moment](#completion-moment)

#### Participant Input {#participant-input}

This property determines the maximum number of targeted users that are required to select an outcome to complete the multi-user task. The targeted users that are required to select an outcome for the multi-user task are participants of the multi-user task.

Possible options of participant input are described in the table below:

| Participant Input | Description |
| --- | --- |
| All target users | All targeted users should select an outcome to complete the multi-user task. |
| Absolute number | The specified amount of targeted users who should select an outcome to complete the multi-user task.<br><br>**Amount**: The property that defines the absolute number. |
| Percentage | The specified percentage of targeted users who should select an outcome to complete the multi-user task. The result of applying the percentage will be rounded upwards to the nearest mathematical integer value.<br><br>For example, when there are 19 targeted users and the **Percentage** is set to `50%`, then 10 targeted users need to select an outcome to complete the multi-user task. |

{{% alert color="warning" %}}
If the number of [targeted users](#users) is less than the absolute number specified in the [Participant input](#participant-input) section, it is impossible to complete the multi-user task and the workflow will fail.
{{% /alert %}}

#### Decision Method {#decision-method}

With this property, you specify how the outcomes of the individual participants are aggregated into a single multi-user task outcome. This aggregated outcome is used as the final outcome to complete the multi-user task.

The table below briefly describes the available decision methods:

| Decision Method | Description |
| ---| --- |
| [Consensus](#consensus) | Select this decision method when all participants should be in agreement with one provided outcome. |
| [Veto](#veto) | Select this decision method when the multi-user task should complete with the veto outcome when anyone selects the veto outcome. |
| [Majority](#majority) | Select this decision method when the multi-user task should result in an outcome based on an absolute or relative majority number of votes. |
| [Threshold](#threshold) | Select this decision method when the multi-user task should complete with an outcome when the number of votes for this outcome reaches the amount of votes set as the threshold value. |
| [Microflow](#microflow) | Select this decision method when the multi-user task should complete in a customized way, by providing your own microflow. |

{{% alert color="info" %}}
A fallback outcome can be both a selectable outcome and a fallback outcome at the same time.
{{% /alert %}}

{{% alert color="info" %}}
In all the examples given below for the decision methods, the **When outcome is known** option is the default setting for the [Completion moment](#completion-moment) property.
{{% /alert %}}

For more details and examples of how each decision method works, see the sub-sections below.

##### Consensus {#consensus}

Select this decision method when all participants should be in agreement with the provided outcome. That is, they should all select the same outcome. There has to be consensus. When there is no consensus, the multi-user task will complete with the fallback outcome.

**Fallback outcome**: This outcome will be the final outcome of the multi-user task if any of the participants during consensus decision method selects a different outcome from the rest of the participants.

###### Example

The following example shows how it works when the decision method is **Consensus**:

Out of a group of two or more targeted users, two of them need to perform the same task: to approve or reject a request. Their decisions are represented by the task outcomes. When the **Decision method** is set to **Consensus**:

* If they both approve the request, the multi-user task is completed with the outcome `Approve`.
* If they both reject the request, the multi-user task is completed with the outcome `Reject`.
* If no consensus is reached between the two participants, the multi-user task will then be completed with a fallback outcome (in this example, `NoConsensus` )

You can refer to the following properties settings for this example:

* **Targeted users**: The users that can perform the task (they can be a team, a department, or two pre-selected users)
* **Participant input**: **Absolute number** = `2`
* **Decision method**: **Consensus**
* **Fallback outcome**: An outcome users can select but it will be selected automatically when there is no consensus (in this example, `NoConsensus`)
* **Completion moment**: **When outcome is known**
* **Outcomes**: `Approve`, `Reject`, `NoConsensus`

##### Veto {#veto}

Veto decision method requires two outcomes, one of which is the veto outcome. If anyone selects the veto outcome, then the multi-user task will be completed with the veto outcome.

For a multi-user task to complete with the non-veto outcome, all participants defined in property **Participant input** need to complete their task by selecting the non-veto outcome.

**Veto outcome**: This property defines the [veto](#veto) outcome.

###### Examples

Two examples are provided here to show how it works when the decision method is **Veto**.

One example is when a whole team needs to make a joint decision during a hiring process: `Hire` or `DoNotHire`. The candidate receives an offer if the whole team agrees that this person should be hired. When one team member decides the person should not be hired (veto), the outcome of the multi-user task will be `DoNotHire`. 

You can refer to the following properties settings for the example above:

* **Targeted users**: The users that can perform the task (the whole team)
* **Participant input**: **All target users**
* **Decision method**: **Veto**
* **Veto outcome**: `DoNotHire`
* **Completion moment**: **When outcome is known**
* **Outcomes**: `Hire`, `DoNotHire`

Another example is from a group of experts, five of them need to decide whether a change request is `Minor` or `Major`. In this example, the outcome `Major` is the veto outcome. If any one of the five experts decides it is a major request, the change request will be `Major`. The input from the other four experts will not change the outcome anymore. If all five of them decide it is a minor change request, the final multi-user task outcome will be `Minor`.

You can refer to the following properties settings for the second example above:

* **Targeted users**: group of experts
* **Participant input**: **Absolute number** = `5`
* **Decision method**: **Veto**
* **Veto outcome**: `Major`
* **Completion moment**: **When outcome is known**
* **Outcomes**: `Minor`, `Major`

##### Majority {#majority}

Select this decision method when a task should result in an outcome based on an absolute or relative majority number of votes. The number of required votes is defined as the result of the [participant input](#participant-input).

**Majority type**: This property determines the majority type that will be applied when using the majority decision method. Possible options of majority type are described in the table below:

| Majority Type | Description |
| --- | --- |
| More than half | The outcome that reaches more than 50% of all possible votes (absolute majority) will be set as the final outcome of the multi-user task. |
| Most chosen | The outcome that gets most of the votes (relative majority) will be set as the final outcome of the multi-user task. |

**Fallback outcome**: This outcome will be the final outcome of the multi-user task if no majority was reached.

{{% alert color="info" %}}
When the **Majority type** is set to **More than half**, the fallback outcome is only required when there are 2 or more outcomes defined.
{{% /alert %}}

{{% alert color="info" %}}
When there are only 2 outcomes for a task, there is no difference between the majority type **More than half** and **Most chosen**.
{{% /alert %}}

###### Example

The following example shows how it works when the decision method is **Majority** and when the majority type is **More than half** or **Most chosen**.

There are 50 targeted users and 10 of them are required to participate in the task. The possible outcomes are A, B and C. 5 participants have voted for outcome A, 4 participants have voted for outcome B, and 0 participants voted for outcome C. This means that the task has 9 completed votes, and 1 vote is left to determine the final outcome of the multi-user task.

| Outcomes | A   | B   | C   |
|----------|-----|-----|-----|
| Votes    | 5   | 4   | 0   |

* In case the majority type is **More than half**, there is no absolute majority yet, as this would require more than half (6 votes) of the participants to select the same outcome. In this example, if the next participant votes for outcome A, the task will be completed with outcome A, as this is the first outcome to receive the absolute majority of the available votes. In case the last participant selects outcome B or C, the task will be completed with the fallback outcome, as there is no absolute majority possible.
* In case the majority type is **Most chosen**, if the last participant selects outcome A or C, the task will be completed with outcome A, since it has most votes of all outcomes. If the participant selects outcome B, the task will complete with the fallback outcome because both A and B have 5 votes.

You can refer to the following properties settings for this example:

* **Targeted users**: The users that can perform the task
* **Participant input**: **Absolute number** = `10`
* **Decision method**: **Majority**
* **Majority type**: **More than half** or **Most chosen**
* **Fallback outcome**: An outcome participants can select, but it will be selected automatically when there is no majority (in this example, `C`)
* **Completion moment**: **When outcome is known**
* **Outcomes**: `A`, `B`, `C`

##### Threshold {#threshold}

Select this decision method when a task should complete with an outcome when the number of votes for this outcome reaches the amount of votes set as the threshold value. 

**Threshold Type**: This property determines the threshold type that is applied when using the threshold decision method. Possible options of threshold type are described in the table below:

| Threshold Type | Description |
| --- | --- |
| Percentage | Of the specified participants defined in the participant input section, a task will be completed with an outcome if it reaches the specified percentage of votes. The result of applying the percentage will be rounded upwards to the nearest mathematical integer value.<br><br>**Percentage**: The property that defines the percentage of the threshold.<br><br>For example, when the [participant input](#participant-input) results in 10 participants and the threshold value is set to `50%`, the multi-user task will complete with the outcome that gets 5 votes. |
| Absolute number | Of the specified participants defined in the participant input section, a task will be completed with an outcome if it reaches the specified amount of votes.<br><br>**Amount**: The property that defines the absolute number of the threshold.<br><br>For example, when the [participant input](#participant-input) results in 10 participants and the threshold value is set to `5`, the multi-user task will complete with the outcome that gets 5 votes. |

{{% alert color="info" %}}
A threshold of `51%` is the same as using **Majority** as the decision method with **More than half** as the majority type.
{{% /alert %}}

{{% alert color="info" %}}
A threshold of `100%` is the same as using **Consensus** as the decision method.
{{% /alert %}}

**Fallback Outcome**: This outcome will be the final outcome of the multi-user task if no outcome reached the amount of votes set as the threshold value.

###### Example

The following example shows how it works when the decision method is **Threshold** and the threshold type is **Percentage**.

There are 50 targeted users and 10 of them are required to participate in the task. The possible outcomes are A, B and C. The threshold value is `60%`. 3 participants voted for outcome A, 4 participants voted for outcome B, and 1 participant voted for outcome C. This means that in total, 8 participants have voted and there are a maximum of 2 votes to go to complete the task.

| Outcomes | A   | B   | C   |
|----------|-----|-----|-----|
| Votes    | 3   | 5   | 1   |

* In case the next participant votes outcome A or C, the remaining votes will never reach the threshold of `60%`. As a result, the task will complete with the fallback outcome.
* In case the last two participants vote for outcome B, the task will be completed with outcome B, as it is the first outcome that reaches the threshold of `60%`.
* In case the next participant votes for outcome B and the last participant votes for either outcome A or C, none of the outcomes reaches the threshold of `60%`. As a result, the task will complete with the fallback outcome.

You can refer to the following properties settings for this example:

* **Targeted users**: The users that can perform the task
* **Participant input**: **Absolute number** = `10`
* **Decision method**: **Threshold**
* **Threshold type**: **Percentage**
* **Fallback outcome**: An outcome participants can select, but it will be selected automatically when the specified threshold is not reached (in this example, `C`)
* **Completion moment**: **When outcome is known**
* **Outcomes**: `A`, `B`, `C`

##### Microflow {#microflow}

Select this decision method when none of the other decision methods does what you need, and you want to provide your own microflow to determine the final outcome of the multi-user task. This microflow is executed every time when a participant selects an outcome for the multi-user task, regardless of the [Completion moment](#completion-moment) setting.

Through the **Decision microflow** setting, you can provide your own microflow. The provided microflow can have any or all of the following parameters, all of which are optional:

| Type                                     | Description |
|------------------------------------------|-------------|
| `Integer/Long`                           | The number of participants that is required to select an outcome. Its value is determined by the [Completion condition](#completion-condition) settings. |
| List of `System.WorkflowUserTaskOutcome` | All outcomes that have been selected so far. These outcomes are ordered in the order in which they occurred, earliest first. |
| `System.WorkflowUserTask`                | The multi-user task for which the decision must be made. |
| `System.Workflow`                        | The workflow instance that contains the multi-user task. |
| workflow context                         | The [workflow parameter](/refguide/workflow-parameters/) variable. |

The provided microflow should return a value of type **String**, containing the final outcome of the multi-user task. 
If no decision can be taken yet based on the selected outcomes, the microflow should return `empty` (or an empty string).
The multi-user task completes as soon as a non-empty outcome is returned, unless the [Completion moment](#completion-moment) has been set to **When all participants completed their task**.

{{% alert color="warning" %}}
When all required participants (based on the [Completion condition](#completion-condition)) have completed their task and the microflow still returns an empty value, the workflow is marked as failed. To prevent this from happening, it is suggested to check this in the microflow. For example, when the number of selected outcomes equals to the number of required participants, then a fallback outcome is returned. 
{{% /alert %}}

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/multi-user-task/microflow-decision-fallback.png" alt="Custom Microflow Decision Method" class="no-border" >}}

{{% alert color="warning" %}}
When a value is returned that is not defined in the [Outcomes](#outcomes), the multi-user task will be marked as failed.
{{% /alert %}}

{{% alert color="warning" %}}
If the microflow is changed in between deployments, it might return a different result after the deployment from during the previous deployment, for user tasks that are in progress. This cannot be detected during [workflow versioning conflict detection](/refguide/workflow-versioning/) because the microflow cannot be called at that point. As a result, it will not cause a conflict and behaves like when the workflow is marked as resolved.
{{% /alert %}}

###### Example

As an example, consider the trivial case where the quickest participant decides, which basically means choosing the first outcome. This can be achieved using the following microflow:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/multi-user-task/microflow-decision.png" alt="Custom Microflow Decision Method" class="no-border" >}}

#### Completion Moment {#completion-moment}

{{% alert color="warning" %}}
This property was added in Studio Pro 10.2. In Studio Pro 10.0 and 10.1, the multi-user task is marked as completed as soon as its outcome is known, and adding additional votes is not possible once the outcome is known. 
{{% /alert %}}

This property determines when the multi-user task is marked as completed. That can either be as soon as the outcome is known, meaning that sufficient participants have completed their task so that the final outcome is already determined, or after all participants have completed their task. This property has no influence on the final outcome of the multi-user task. 

Possible options are described in the table below:

| Completion Moment | Description |
| --- | --- |
| When outcome is known <br><br>(*Default*)<br><br>| The completion condition is evaluated after each participant selects an outcome. When a participant selects an outcome and this already determines the final outcome, the multi-user task will be completed and will be removed from the inbox of the remaining participants (if there are any), as their votes will not change the final outcome of the multi-user task. |
| When all participants completed their task | The completion condition is evaluated after all participants have selected an outcome. This means that only after **all** participants have completed their task, the final outcome of the multi-user task will be set. |

{{% alert color="info" %}}
The option **When outcome is known** is selected by default because this is the most efficient choice. With this option selected, the multi-user task completes with the minimum number of participants that have completed their task.
{{% /alert %}}

##### Example

The following example shows how **Completion moment** works.

The decision method is **Majority** and the majority type is **More than half** or **Most chosen**. There are 3 targeted users and all of them are required to participate in the task. The possible outcomes are A, B and C. Both the first and the second participant have selected option A.

* In case the completion moment is **When outcome is known**, the multi-user task is marked as completed as soon as the second participant selected outcome A because a majority was reached (2 out of 3).
* In case the completion moment is **When all participants completed their task**, the multi-user task is marked as completed only after the third participant also selected an outcome.

In both cases, the multi-user task will complete with outcome A, as this outcome has the majority of the votes. The final participant's vote will not change the final outcome of the multi-user task.

### Outcomes Section {#outcomes}

The outcomes property allows you to create new outcomes for the multi-user task. Outcomes are translated into different outgoing paths of the multi-user task and can be referred to by other elements, such as a button. For example, you have a process when you need to approve or reject a request. One button on a [task page](#task-page) can refer to the **Approve** outcome of the multi-user task, while another one can use the **Reject** outcome.

### Task Page Section {#task-page}

Task page is the page that an assigned user will use to inspect their task and complete it. You can also allow users to add comments or attachments on this page.

If you generate the page using the templates in the **Workflows Commons** module, these templates contain necessary data containers and associated context entity.

### Display Information Section {#display-info}

#### Task Name

**Task name** is stored in the System module on the **UserTask** entity as an attribute and its data can be dynamically displayed in the running app. If you are using the **Workflow Commons** module, the **Task name** is used in page templates and on preconfigured pages to identify the task.

For more information on using parameters, see the [Parameters](#parameters) section below.

#### Task Description

**Task Description** is stored in the System module on the **UserTask** entity as an attribute and its data can be dynamically displayed in the running app. If you are using the **Workflow Commons** module, the **Task description** is used in page templates.

The **Task description** can contain parameters that are written between braces, for example, {1}.

#### Parameters {#parameters}

Parameters are attributes the value of which will be displayed. For example, you can display when the task is due using the **DueDate** parameter.

To view **Parameters**, click the ellipsis icon next to the **Task name** or **Task description** in properties depending on where you would like to display these parameters.

Parameters have the following settings:

* **Index** – an identification number of a parameter
* **Expression** – an attribute from the context that will be displayed

##### Adding New Parameters

To add a parameter to the **Task name** or the **Task description**, do the following:

1. Click the ellipsis icon next to the **Task name** or the **Task description**.

2. In the **Edit task name/description** dialog box > **Parameters** section, click the **New** button.

3. In the **Template Parameter (String)** dialog box, specify the expression, and confirm your choice:

   {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/user-task/parameter-example.jpg" alt="Parameter Example" class="no-border" >}}

   {{% alert color="info" %}}Make sure that the attribute you use in the expression is of the string type.{{% /alert %}}

4. In the **Template** setting, write the text you would like to display and type **Index** of the parameter you would like to include. For example, you can add a template for the **Task description** specifying the name of the workflow and what the workflow due date is :

   {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/user-task/task-description-example.jpg" alt="Task Description Example" class="no-border" >}}

##### Performing Other Actions on Parameters

In addition to adding new parameters, you can perform the following actions on parameters:

* **Delete** – to delete a parameter click **Delete** or press <kbd>Delete</kbd> on your keyboard
* **Edit** – double-click a parameter to edit it or click **Edit**
* **Move up** – to move a parameter up in the list of parameters and also to change its index, click **Move up**
* **Move down** – to move a parameter down in the list of parameters and also to change its index, click **Move down**

### Common Section {#common}

**Name** is the internal name of the multi-user task. When referring to the multi-user task in the app you will use this name. It must be unique within the workflow, but you can have two multi-user tasks with the same name in different workflows.

## Read More

* [Workflows](/refguide/workflows/)
* [User Task](/refguide/user-task/)
