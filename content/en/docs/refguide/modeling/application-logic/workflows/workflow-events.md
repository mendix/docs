---
title: "Workflow Events"
url: /refguide/workflow-events/
weight: 55
---

## Introduction

The [Workflow Engine](/refguide/workflow-engine/) emits near real-time workflow events. These events provide a great way to build audit trails, handle errors, update KPI dashboards, etc. For example, you can define an event handler that only collects data from user task events.

## Configuration {#configuration}

There are two ways in which you can configure workflow-related event handlers:

* The events can be configured via the **Event handlers** setting in [workflow properties](/refguide/workflow-properties/#event-handlers).
* The **Event handlers** setting can also be configured in [App Settings](/refguide/app-settings/#event-handlers):

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-events/event-handler-overview.png" max-width=80% >}}

{{% alert color="info" %}}
The event handlers added in workflow properties override the app-wide event handlers in **App Settings**.
{{% /alert %}}

The image below presents an example of how you can configure an event handler either in workflow properties or in **App Settings**:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-events/add-event-handler.png" max-width=80% >}}

## Event Mechanism {#event-mechanism}

When something happens in the workflow engine, an event is emitted when subscribed to that event. This event is posted asynchronously using the task queue as described in [Workflow Engine](/refguide/workflow-engine/#workflow-task-queue). We take a snapshot of the event state at the time when it occurs to get real-time data. This snapshot data is then converted by the task queue task to the system module non-persistent workflow entities: **WorkflowEvent**, **WorkflowRecord**, and **WorkflowActivityRecord**.

There are a few advantages of this mechanism:

* The event handler microflow might fail, without failing or halting the workflow.
* The execution (time) of the event handler microflow is not delaying the continuation of the workflow.

The **WorkflowEvent** entity represents workflow event data at a specific execution moment. It contains the following attributes and association:

* **EventTime** – the time at which the event occurred.
* **EventType** – the type of the event being triggered. For more information, see the [Event Types](#workflow-event-types) section below.
* **WorkflowEvent_Initiator** – an association to the current user object which is logged in. The [activity workflow events](/refguide/workflow-events/#activity-event-type) will have an initiator in cases where a user takes some action, otherwise it will be empty. For example, when a user specifies the outcome of a user task or when a user notifies a suspended workflow, then this user becomes the initiator. As a special case, it will also be empty for the **Workflow Initiated** event of a sub-workflow because a sub-workflow is directly related to the [Call workflow](/refguide/call-workflow/) activity.

The **WorkflowActivityRecord** entity represents workflow activity data at a specific execution moment. For example, a snapshot of a workflow activity at the moment when it was completed.

The **WorkflowRecord** entity represents workflow instance data at a specific execution moment. For example, a snapshot of a workflow instance at the moment when it was completed.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-events/workflow-event-entities.png" max-width=100% >}}

{{% alert color="warning" %}}
All associations to the above-mentioned non-persistent entities (with the exception of a sub **WorkflowRecord**) are associations to "live" objects, whose state may have been updated since the event occurred.
{{% /alert %}}

These non-persistent entities are provided as the default input parameters to the microflow specified in the event handler configuration:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-events/event-handler-microflow-parameters.png" max-width=80% >}}

You can use the data from these input parameters to construct audit trails, for logging purposes, etc. For example, you can define an event handler that only collects data from user task events.

## Event State

When a particular workflow action triggers multiple events (for example, aborting or ending a workflow), we treat this action as an atomic action and include the state of the workflow and activity, as it will be at the end of the transaction. The rationale behind this is that the database reflects the same behavior: all objects are updated atomically in a single transaction.

Examples are shown below:

* Both the **End Event Executed** and the subsequent **Workflow Completed** event will have an identical workflow record, with state **Completed**.
* On an abort, all events (for example, **User Task Ended**, **Wait for Notification Ended**, **Call Microflow Ended**, **Call Workflow Ended**
  and **Workflow Aborted**) will have an identical workflow record, with state **Aborted**.

In the case of workflow [operations](/refguide/change-workflow-state/#operation), the workflow lifecycle events are the last event being triggered and the activity-related events come before that. For example, if you abort a workflow which is currently suspended on a user task, then the **User Task Ended** event is triggered first and later on the **Workflow Aborted** event.

## Event Types {#workflow-event-types}

{{% alert color="info" %}}
The event types listed in the tables below correspond to the enumeration values of the **EventType** attribute of the workflow entity **WorkflowEvent** in the system module.
{{% /alert %}}

### Workflow Lifecycle Events

| Event Type | Description | Examples |
| --- | --- |--- |
| Workflow Completed | Triggered when a workflow completes successfully | |
| Workflow Initiated | Triggered when a new workflow instance is initiated | |
| Workflow Restarted | Triggered when a workflow is restarted | See the [Operation](/refguide/change-workflow-state/#operation) section in *Change Workflow State* |
| Workflow Failed | Triggered when a workflow instance fails | When a user task fails, the workflow fails |
| Workflow Aborted | Triggered when a workflow is aborted | See the [Operation](/refguide/change-workflow-state/#operation) section in *Change Workflow State* |
| Workflow Paused  | Triggered when a workflow is paused | See the [Operation](/refguide/change-workflow-state/#operation) section in *Change Workflow State* |
| Workflow Unpaused | Triggered when a paused workflow is resumed | See the [Operation](/refguide/change-workflow-state/#operation) section in *Change Workflow State* |
| Workflow Retried | Triggered when a workflow is retried after being failed or incompatible | See the [Operation](/refguide/change-workflow-state/#operation) section in *Change Workflow State* |
| Workflow Updated | Triggered when a parent workflow is put back into progress after the sub-workflow is retried, restarted, or when jump-to option is applied | See the [Operation](/refguide/change-workflow-state/#operation) section in *Change Workflow State* |
| Workflow Upgraded | Triggered when the workflow definition has a new version having non-conflicting changes | See [Successful Upgrades to the Latest Workflow Definition](/refguide/workflow-versioning/#workflow-definition-upgrade) |
| Workflow Conflicted | Triggered when the workflow definition has a new version having conflicting changes | See [Workflow Versioning Conflict Types](/refguide/workflow-versioning/#conflict-types) |
| Workflow Resolved | Triggered when the workflow is continued after being incompatible | See the [Operation](/refguide/change-workflow-state/#operation) section in *Change Workflow State* |
| Workflow Jump-To Option Applied | Triggered when a jump-to option is applied on the workflow | See [Jumping to Different Activities in a Workflow](/refguide/jump-to/) |

### Activity Events {#activity-event-type}

| Event Type | Description | Examples |
| --- | --- | --- |
| Start Event Executed | Triggered when the start event is executed  | |
| End Event Executed | Triggered when the end event is executed | |
| Decision Executed | Triggered when a **Decision** is executed | See [Decision in Workflows](/refguide/decision-in-workflows/) |
| Jump Executed | Triggered when a **Jump** activity is executed | See [Jump Activity](/refguide/jump-activity/) |
| Parallel Split Executed | Triggered when a **Parallel split** activity is started | See [Parallel Split](/refguide/parallel-split/) |
| Parallel Merge Executed | Triggered when all parallel split paths are completed |                                                                         |
| Call Workflow Started | Triggered in the following cases:<br /><ul><li>Sub-workflow is successfully instantiated</li><li>Sub-workflow definition is not found (in this case it is triggered together with **Call Workflow Ended** event)</li><li>Sub-workflow is retried, restarted, or when jump-to option is applied | See [Call Workflow](/refguide/call-workflow/) |
| Call Workflow Ended | Triggered in the following cases:<br /><ul><li>Workflow is **Completed**, **Failed**, or **Aborted**</li><li>Sub-workflow definition is not found (in this case it is triggered together with **Call Workflow Started** event)</li><li>Workflow suspended on **Call workflow** activity is aborted, restarted, or when jump-to option is applied</li><li>Parallel path containing **Call workflow** activity is removed and workflow is continued</li> </ul> | See [Call Workflow](/refguide/call-workflow/) |
| Call Microflow Started | Triggered when **Call microflow** activity is started | See [Call Microflow](/refguide/call-microflow/) |
| Call Microflow Ended | Triggered in the following situations:<br /><ul><li>Microflow is executed successfully with a valid outcome</li><li>Workflow suspended on **Call microflow** activity is aborted, restarted, or when jump-to option is applied</li><li>Parallel path containing **Call microflow** activity is removed and workflow is continued</li><li>Microflow is executed with an invalid outcome | See [Call Microflow](/refguide/call-microflow/)  |
| Wait for Notification Started | Triggered when **Wait for notification** activity is started | See [Wait for Notification](/refguide/wait-for-notification/) |
| Wait for Notification Ended | Triggered in the following situations:<br /><ul><li>Notification is received successfully</li><li>Workflow suspended on **Wait for notification** activity is aborted, restarted, or when jump-to option is applied</li><li>Parallel path containing **Wait for notification** activity is removed and workflow is continued  | See [Wait for Notification](/refguide/wait-for-notification/) | 
| Wait for Timer Started | Triggered in the following cases:<br /><ul><li>Timer is successfully scheduled</li><li>Delay expression results in an empty value</li><li>Delay expression is invalid (for example, divide by zero error in an expression) | See [Wait for Timer](/refguide/wait-for-timer/) |
| Wait for Timer Ended | Triggered in following cases:<br /><ul><li>Timer has expired</li><li>Delay expression results in an empty value</li><li>Delay expression in invalid (for example, divide by zero error in expression)</li><li>Workflow suspended on **Wait for timer** activity is aborted, restarted, or when jump-to option is applied</li><li>Parallel path containing **Wait for timer** activity is removed and workflow is continued | See [Wait for Timer](/refguide/wait-for-timer/) |
| User Task Started | Triggered in following cases:<br /><ul><li>User targeting is evaluated</li><li>On-created microflow is successfully scheduled | See [User Task](/refguide/user-task/) or [Multi-User Task](/refguide/multi-user-task/) |
| Multi-User Task Outcome Selected | Triggered when a vote is specified for a multi-user task | |
| User Task Ended | Triggered in following cases:<br /><ul><li>User task fails</li><li>Workflow suspended on a user task is aborted, restarted, or when jump-to option is applied</li><li>Parallel path containing a user task is removed and workflow is continued | See [User Task](/refguide/user-task/) or [Multi-User Task](/refguide/multi-user-task/)<br><br>User task can fail due to the following reasons:<br /><ul><li>On-created microflow fails</li><li>When number of required users is more than the targeted users in a multi-user task <br><br>{{% alert color="info" %}}**WorkflowActivityRecord** for failure cases will have the **Failed** activity state.<br><br>**WorkflowActivityRecord** will only have one actor in the case of a single-user task.{{% /alert %}} |

## Sub-Workflows

A sub-workflow emits exactly the same events as a main workflow. This means that it will have its own **Workflow Initiated** event when it starts, and either **Workflow Completed** or **Workflow Aborted** event when it ends. Basically, a workflow outputs exactly the same events when it is executed as a sub-workflow as when it is executed as a main workflow.

## Removed Definitions

When a workflow definition is removed while there are active workflow instances, they will be marked as **Incompatible**. Since the definition no longer exists, workflow instances can only be aborted, which will also abort all their activities.

However, without the definition, it is no longer possible to determine what type of activities they were. As such, it is impossible to send the appropriate **{Activity name} Ended** event. So, in this particular case, no event is
sent at all for the aborted activities. This exception to the rule that a **{Activity name} Started** event is matched with an **{Activity name} Ended** event is acceptable, because this situation is rare.
