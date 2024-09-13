---
title: "Workflow Engine"
url: /refguide/workflow-engine/
weight: 35
---

## Introduction

The Mendix Workflow Engine is the Mendix Runtime engine to execute workflows. This document describes how the engine works, how you can interact with the engine, and what information it stores. This gives you a better understanding on how you can develop with Mendix workflows.

## Workflow Data in the Mendix Database

In the domain model of the System module, there are several Workflow Engine-related entities:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-engine/workflow-data.png" class="no-border" >}}

These entities are populated by the Workflow Engine, some on the start of the app, others – while running workflows. The entities can be divided into the following groups:

* [Definition-related entities](#definition) (populated when the app starts)
* [Instance-related entities](#instance) (populated while running workflows)
* [Action-related entities](#action) (that fulfill a specific action)

The Workflow Engine stores the state of the workflow instances in the database. It also uses a couple of internal, hidden entities to store the details about the workflow execution progress. These entities are not described in this document, but can be seen when exploring the tables in the database. These entities are hidden intentionally as they should not be used outside the Workflow Engine, for example, to be displayed in pages or used in microflows. 

### Definition-Related Entities {#definition}

Objects of definition-related entities are created automatically by the Workflow Engine when the app is started and are based on the app’s model. The following entities are definition-related:

* **System.WorkflowDefinition** – It represents your workflow in the database. This entity gets one object per workflow as defined in your app in Studio Pro. 
* **System.WorkflowUserTaskDefinition** – It represents your [user tasks](/refguide/user-task/) and [system activities](/refguide/call-microflow/) in the database. This entity gets one object per user task/system activity inside a workflow as defined in the app in Studio Pro. 

When a workflow, a user task, or a system activity is deleted from the app, the object remains in the database (you will still be able to create reports with it), however, its attribute **IsObsolete** is set to **true**.

[Instance-related entities](#instance) refer to definition-related entities. When there are no objects of instance-related entities and the **IsObsolete** attribute is set to **true**, the app administrator may delete the corresponding object. 

{{% alert color="info" %}}
Mendix does not provide out-of-the-box ways to automatically clean up definition-related entity instances, you need to build this logic yourself. 
{{% /alert %}}

Security-wise, only users with the **Administrator** role can access definition-related entities.

### Instance-Related Entities {#instance}

The Workflow Engine stores execution data in regular entities. The purpose of these entities is to store the state during workflow execution. Only users who are involved in the workflow process have access to these entities. The main purpose of the workflow data is to handle the tasks and process execution and it is unaware of the business context it is running in. All workflow data is aimed at supporting the Workflow Engine. Business context can be added by a developer via the context entity.

#### System.Workflow {#system-workflow}

It represents a running workflow, that is, a workflow instance. As soon as the workflow is initiated (using the **Call workflow** activity in microflows, a client action, or using the corresponding Java API), an object of this entity is created. 

The **Name** and **Description** attributes are populated based on the [properties defined in the workflow](/refguide/workflow-properties/). The **DueDate** attribute is based on the configured [Due date workflow property](/refguide/workflow-properties/#due-date). The **StartTime** attribute is set to the current time. The **State** attribute is set to **InProgress**. The **System.Workflow_WorkflowDefinition** association is set to the corresponding **System.WorkflowDefinition** object. The **System.owner** is set to the user initiating the workflow.

During the execution of the workflow, some of the attributes and associations of the workflow may change as the Workflow Engine uses **System.Workflow** entity to store the current state of the workflow. For more information on different states, see the [Workflow Execution](#execution) section below.

When a workflow instance finishes, the object stays in the database. Removing completed and aborted instances from the workflow entity should be done by the app operator.

Security-wise, users with the **Administrator** role can access all instances. Other users can access them only when they are an assigned or a targeted user in one of the associated **System.WorkflowUserTask** instances (you can set that in the [access rules](/refguide/access-rules/) of the **System.Workflow** entity). If other users need to access the **System.Workflow** data, the app developer needs to set [state-change event](/refguide/workflow-properties/#workflow-state-change) in [App Settings](/refguide/app-settings/#events) or in [workflow properties](/refguide/workflow-properties/#events) to copy the data to other entities with more specific security constraints (For an example, see the *OCh_Workflow_State* microflow in the [Workflow Commons](/appstore/modules/workflow-commons/) module).

{{% alert color="warning" %}}
For an app developer, it is allowed to change the **Name**, **Description**, and **DueDate** attributes of **System.Workflow** instances. Other attributes or outgoing associations should not be changed.
{{% /alert %}}

#### System.WorkflowUserTask {#system-workflow-user-task}

When the workflow runs a user task activity, an instance of **System.WorkflowUserTask** is created. 

The **Name** and **Description** attributes are populated based on the user task **Task name** and **Task description** properties defined in the [Display Information](/refguide/user-task/#display-info) section. The **DueDate** attribute is based on the configured [Due Date property](/refguide/user-task/#due-date). The **StartTime** is set to the current time, and the **State** is set to **Created**. The **System.WorkflowUserTask_Workflow** association points to the running workflow instance, and the **System.WorkflowUserTask_WorkflowUserTaskDefinition** association points to the corresponding **System.WorkflowUserTaskDefinition** object. The **System.WorkflowUserTask_TargetUsers** is populated based on the [Targeted Users section](/refguide/user-task/#users) in user task properties.

The **System.WorkflowUserTask_Assignee** association is populated by the Workflow Engine upon creation only when there is one targeted user and when **Auto-assign when targeting results in one user** is enabled in the user task properties. App developers may populate this association either by setting the [on-created event](/refguide/user-task/#events) in the properties or later via a user action that assigns the task to the end-user, for example, when an end-user opens a task page and a task is automatically assigned to them. 

During the process of targeting users, if the configured [on-created event](/refguide/user-task/#events) and user task state-change event (set in [App Settings](/refguide/app-settings/#events) or in [workflow properties](/refguide/workflow-properties/#events)) succeed, the **State** changes to **In Progress**. If one of them fails, the **State** is set to **Failed**. After the user task state is set to **Failed**, the workflow state will be changed to **Failed**. 

Failed workflows can be retried using the **Retry workflow** option of the [Change Workflow State microflow activity](/refguide/change-workflow-state/#operation). This option will attempt to run the user task from the point it failed. When the user task failed because no users were targeted, it is possible to manually correct user targeting and then use the **Retry workflow** option to set the workflow into the in-progress state again.

The **System.WorkflowUserTask** entity is used for the Task Inbox. To keep the Task Inbox performant, user task objects are deleted when they are no longer necessary. This happens when the user task state becomes **Completed** or **Aborted**.

Security-wise, users with the **Administrator** role can access all instances. Other users can access only an instance they were targeted for (you can set it in the access rules of the **System.WorkflowUserTask** entity). If other users need to access the **System.Workflow** data, the app developer needs to set the [User task state change property](/refguide/workflow-properties/#user-task-state-change) in workflow properties to copy the data to other entities with more specific security constraints (you can reference the **OCh_WorkflowUserTask_State** microflow as an example from the [Workflow Commons](/appstore/modules/workflow-commons/) module).

{{% alert color="warning" %}}
As an app developer you can change the **Name**, **Description**, **DueDate**, **System.WorkflowUserTask_TargetUsers**, and **System.WorkflowUserTask_Assignee** members of **System.WorkflowUserTask** instances. Other attributes or outgoing associations should not be changed.
{{% /alert %}}

#### System.WorkflowUserTaskOutcome

When a user selects an outcome for a user task, this information is stored as an object in the **System.WorkflowUserTaskOutcome** entity. The user selecting an outcome is stored in the **System.WorkflowUserTaskOutcome_User** association, the user task is stored in the **System.WorkflowUserTaskOutcome_WorkflowUserTask** association, and the outcome and the time are stored in the attributes of **System.WorkflowUserTaskOutcome**.

Security-wise, users with the **Administrator** role can access all instances. Other users can access them only when they are an assigned or a targeted user of the associated user task. If other users need to access the **System.Workflow** data, the app developer needs to set state-change events in [App Settings](/refguide/app-settings/#events) or in [workflow properties](/refguide/workflow-properties/#events) to copy the data to other entities with more specific security constraints. 

### Action-Related Entities {#action}

Action-related entities are entities that refer to jumping to different activities in a workflow. For more information, see [Jumping to Different Activities in a Workflow](/refguide/jump-to/).

## Workflow Execution {#execution}

### Instantiation

Workflow execution uses the Task Queue mechanism in Mendix to run a process. A workflow is instantiated in the Mendix Runtime server using the **Call Workflow** microflow activity, a client action or the corresponding Java API. Upon instantiation, the System.Workflow object is created and persisted and a workflow execution task is queued to run the workflow instance. As the execution is asynchronous, it does not start directly, it starts after the current transaction is successfully completed. Therefore, the microflow activity, the client action or Java API call will return instantly, before the workflow execution has actually started. 

Upon instantiation, the **Start** activity of the workflow becomes the current activity.

As the Workflow Engine executes tasks asynchronously, you cannot have it present the first task page of the workflow for the current user. Instead, ensure that all data is put into the context entity before instantiating the workflow.

### Execution

The user running the workflow is the System user. That is the reason why you cannot use `[%CurrentUser%]` in XPath constraints in workflows. This is also the reason why you cannot have user interactions (such as **Show Page** microflow activity or **Show Message** microflow activity) in microflows called from workflows. 

During execution the System.Workflow object record gets locked beforehand. This way concurrent execution and changes to the workflow instance outside the Workflow Engine that executes the workflow are prohibited. 

The execution of a workflow will load the workflow instance and will try to advance the workflow from the current activity. If this is not possible (the prerequisites for advancing an activity have not been met yet), or when the workflow reaches another activity that has to wait for completion, the workflow is suspended and it stores the new state in the database. The execution of that workflow instance will then stop and the engine may continue executing other workflow instances. For example, when a user task is in progress, the workflow is suspended until the user task is completed. As soon as something happens in the system that may allow a workflow instance to advance again, a workflow execution task will be queued to execute that workflow instance again, which may advance that workflow instance further. When the Workflow Engine reaches the **End** activity, the workflow execution will stop and the state of the workflow instance will become **Completed**. 

Before execution, the Workflow Engine verifies whether a workflow is compatible with the latest workflow definition of the app model. If version conflicts are found, the workflow instance becomes incompatible (the **State** attribute becomes **Incompatible** and the **Reason** attribute will contain the description of the conflicts). Next to an **In-Progress** or **Paused** workflow becoming incompatible, it is also possible that an incompatible workflow returns to its previous in-progress/paused state. For more information, see [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/).

Only workflow instances with the **State** attribute being **InProgress** are executed.

#### When Are Workflows Queued for Execution?

The Workflow Engine queues workflow instances for execution automatically. This happens at the following stages:

* After workflow instantiation
* After workflow-initiated microflow execution finishes (either successfully or failing)
* After an outcome has been selected for a user task
* After a sub-workflow finishes (either successfully, failing, or being aborted)
* After redeployment of a change in the workflow model
* After a workflow activity in microflows (such as [Change workflow state](/refguide/change-workflow-state/) or [Generate jump-to options](/refguide/generate-jump-to-options/))

#### Task Queues {#workflow-task-queue}

The Workflow Engine uses two different task queues. They can be configured in the **App Settings** > the **Workflows** tab > the **Optimization** section. There is one task queue for workflow execution (the **Workflow instance threads** setting) and one task queue for the execution of all microflows that are executed by the workflow (the **Microflow threads** setting)

The microflows executed on the **Microflow threads** queue include: event handler microflows (set in [App Settings](/refguide/app-settings/#event-handlers) or in [workflow properties](/refguide/workflow-properties/#event-handlers)), workflow state-change events (set in [App Settings](/refguide/app-settings/#events) or in [workflow properties](/refguide/workflow-properties/#events)), user task state-change events (set in [App Settings](/refguide/app-settings/#events) or in [workflow properties](/refguide/workflow-properties/#events)), the [targeted-users microflow](/refguide/user-task/#users) for a user task, the [on-created event](/refguide/user-task/#events) for a user task, the [decision-method microflow](/refguide/multi-user-task/#microflow) for a multi-user task, and the microflow set for a [Call microflow](/refguide/call-microflow/#microflow) activity.

When one of these workflow-related tasks fails (the workflow execution fails or the microflow execution fails), the task queue task still succeeds. However, the result is always reflected in the workflow instance (it gets the state **Failed** with an exception in the **Reason** attribute), except for failures with [event handlers](/refguide/workflow-properties/#event-handlers). You can handle the failures from the Workflow administration pages or automate them using event handlers. For more information on possible actions that an administrator can take, see the [Workflow States](#workflow-states) section below.

#### Microflow Executions and Transaction Scopes

All microflows that are run as part of the workflow are executed as an asynchronous microflow via the task queue. Therefore, microflow execution does not have an impact on the workflow (except that when it finishes successfully, the workflow can continue with the next activity and when it fails, the workflow is marked as failed). This also means that the transaction scope of such microflows only encompass the microflow execution itself.

Failed workflows can be retried using the **Retry workflow** option of the [Change Workflow State microflow activity](/refguide/change-workflow-state/#operation). This option will attempt to run the user task from the point it failed. When the user task failed because no users were targeted, it is possible to manually correct user targeting and then use the **Retry Workflow** option to set the workflow into the in-progress state again.

#### Measures Against Endless Loops

The [Jump activity](/refguide/jump-activity/) allows the workflow to jump to another activity of the same workflow. Jumping back to an earlier activity can create endless loops if defined incorrectly. To prevent endless loops occupying the Workflow Engine, the Workflow Engine executes only a limited amount of activities in the workflow (default number is 50, but it can be changed using the custom Runtime Server setting `com.mendix.workflow.MaxActivityExecutions`). When the limit is reached, the workflow execution stops and the workflow instance is queued for re-execution (which means that it is put at the end of the queue). This queuing mechanism allows other workflow instances to proceed. 

#### Workflow States {#workflow-states}

The workflow states are stored in the **State** attribute of the **System.Workflow** entity. This attribute uses the System.WorkflowState enumeration to have a fixed set of states. These states represent different technical states a workflow instance can have. 
In the picture below, you see two yellow boxes with outgoing and incoming arrows. The yellow boxes are not concrete states, they mean that any state inside the box can transition following the outgoing arrow and can transition back into the previous state by following the incoming arrow.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-engine/workflow-states.png" class="no-border" >}}

In the table below, you can find description of these states and allowed actions for each state:

| State        | Description                                                  | Allowed actions                                              |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| In Progress   | The state of the workflow instance when it starts. This state indicates that the workflow instance can be executed. | <ul><li>Abort&nbsp;workflow</li><li>Restart&nbsp;workflow</li><li>Generate&nbsp;jump&#8209;to&nbsp;options</li><li>Apply&nbsp;jump&#8209;to&nbsp;option</li><li>Pause&nbsp;workflow</li></ul> |
| Paused       | This state prevents the workflow from being executed.        | <ul><li>Abort&nbsp;workflow</li><li>Restart&nbsp;workflow</li><li>Generate&nbsp;jump&#8209;to&nbsp;options</li><li>Apply&nbsp;jump&#8209;to&nbsp;option</li><li>Unpause&nbsp;workflow</li></ul> |
| Incompatible | This state indicates that this workflow instance is not compatible with the current workflow in the model.<br><br>The attribute **CanBeRestarted** indicates whether the workflow can be restarted, the attribute **CanBeContinued** indicates whether the workflow can be marked as resolved, the **CanApplyJumpTo** attribute indicates whether a jump-to option can be applied to the workflow.<br><br>Resolving the Incompatible state puts the workflow in either **In Progress** or **Paused** state depending on its previous state before it became Incompatible. | <ul><li>Abort&nbsp;workflow</li><li>Restart&nbsp;workflow</li><li>Generate&nbsp;jump&#8209;to&nbsp;options</li><li>Apply&nbsp;jump&#8209;to&nbsp;option</li><li>Mark&nbsp;as&nbsp;resolved</li></ul> |
| Failed       | This state indicates that an exception has occurred during execution of the workflow or the workflow-initiated microflow. The exception details can be found in the **Reason** attribute.<br><br>{{% alert color="info" %}}Failed workflows should be either retried/restarted to fix the problem or aborted to clean up user tasks that are part of the failed workflows.{{% /alert %}} | <ul><li>Abort&nbsp;workflow</li><li>Restart&nbsp;workflow</li><li>Generate&nbsp;jump&#8209;to&nbsp;options</li><li>Apply&nbsp;jump&#8209;to&nbsp;option</li><li>Retry&nbsp;workflow</li></ul> |
| Completed    | This state indicates that the workflow has successfully completed. |                                                              |
| Aborted      | This state indicates that this workflow instance has been aborted by a user. The reason is stored in the **Reason** member. |                                                              |

In case you want the workflow to store different functional states depending on the activity the workflow instance is currently in, you need to model this into your **Workflow context** object. 

It is advised to not leave **Failed** or **Incompatible** workflows as **Failed** or **Incompatible**. Either solve the problem for those workflows or abort them to ensure that the data in the system stays up-to-date and the tables in the database remain smaller as user tasks will stay in the **System.WorkflowUserTask** table while the workflow instance is **Failed** or **Incompatible**.

### User Tasks in Workflows

User task activities represent actions that have to be completed by a user. Therefore, user tasks can only be completed by named users in Mendix. User tasks are shown in a Task Inbox page from which they can be completed.

#### Task Inbox

The Task Inbox page shows objects from the **System.WorkflowUserTask** entity. The access rules allow to select only `InProgress` user tasks that either target the current user (the current user is part of the **System.WorkflowUserTask_TargetUsers** association) or are assigned to the current user (the current user is set in the **System.WorkflowUserTask_Assignee** association). For more information, see the access rules of the **System.WorkflowUserTask** entity.

In case you want to show specific information from the **Workflow Context** object in the Task Inbox, there are two options:

1. Use the **Task Name** and/or **Task Description** in the task properties to contain that information.
2. Build a workflow context-specific Task Inbox that only shows tasks from workflows that have this specific Workflow Context. In this case, we advice to use the user task state-change events to store the information in a custom entity to show in the task inbox.

The **Show user task page** microflow activity can be used to open the user task page that is configured in the user task activity of the workflow of the given **System.WorkflowUserTask** object.

#### User Task States

The user task states are stored in the **State** attribute of the **System.WorkflowUserTask** entity. This attribute uses the System.WorkflowUserTaskState enumeration to have a fixed set of states. These states represent the different technical states a user task can have. 

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-engine/user-task-states.png" class="no-border" >}}

Note the following: 

* Transitions from **In Progress** to **Paused** (and vice-versa), from any state into **Aborted**, and from **Failed** into the **Created** state are a result of actions on the workflow (Pause/Unpause, Abort, or Retry).
* State transitions from **Created** to **In Progress**, from **Completed** to the end state, from **Aborted** to the end state happen automatically when the actions that are part of the state are finished.
* The end state (red circle) means that the user task is deleted.
* Yellow boxes are not concrete states, but mean that any state inside the box can transition following the outgoing arrow and can transition back into the previous state by following the incoming arrow.

In the table below, you can find the description of different states:

| State      | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| Created    | This is the initial state after creation. User tasks have this state until users have been targeted and the on-created event (when specified) has been successfully completed. User tasks in this state are not visible in the Task Inbox yet. |
| In Progress | User tasks in this state are visible in the Task Inbox of targeted or assigned users and can be completed. |
| Paused     | When a workflow instance is paused, the user tasks of the workflow instance are also paused. The user tasks are not visible in the Task Inbox. |
| Completed  | When a user task is completed, it gets the **Completed** state. After execution of the state-change microflow, this user task instance is deleted. |
| Aborted    | When a workflow gets aborted or a user task activity gets aborted (for example, because the workflow gets restarted or the **Apply jump-to option** is used to change the workflow to another activity), a user task gets the **Aborted** state. After execution of the state-change microflow, the user task instance is deleted. |
| Failed     | When user targeting fails or the on-created event or on-state-change event fails, the user task gets the **Failed** state. This state also triggers an on-state-change microflow. |

{{% alert color="info" %}}
When the workflow instance becomes incompatible, this does not affect user task states (although the user tasks will disappear from the Task Inbox until the workflow instance is fixed).

When no user task state change microflow is configured, the user task instance is deleted as soon as the **Completed** or **Aborted** state is reached.

There will be no user task state change microflow executed for the **Created** state. It will only be executed for all other state changes.
{{% /alert %}}

#### Mitigation Options for Failed User Tasks

The most common reason for a user task to fail is because the user targeting resulted in no users. As user task instances are no longer deleted when they are failed they can be corrected and then retried by retrying the workflow. A failing user targeting can be corrected by adding users to the **System.WorkflowUserTask_TargetUsers** association. In Workflow Commons this is implemented in the Admin Dashboard where administrators to assign users to a user task.

Upon retry, the Workflow Engine recognizes that the user task has targeted users and continues to execute the workflow from that point.

Another solution may be to use a microflow for user targeting. In case no users are returned from the user targeting query, you can decide to select some known, fixed user (for example, an administrator, to ensure at least one user is targeted). This way, that user gets targeted and the workflow will suspend execution waiting till that user completes the user task. The administrator can then manually re-target the user task to correct the user task and allow the user task to continue automatically. Alternatively, it is also possible to target a user which can handle the user task in absence of the intended targeted users of course (without re-targeting the user task).

Other reasons for the user task to fail are failures during execution of the on-created event or during execution of the **Change workflow state** microflow. Depending on the error description the administrator may be able to fix the cause and then retry the workflow.

It is advised to not leave failed user tasks as failed in the system. Either fix the user tasks and retry the workflow or abort the workflow. This is important to prevent the **System.WorkflowUserTask** entity table from growing as it will slow down the Task Inbox.
