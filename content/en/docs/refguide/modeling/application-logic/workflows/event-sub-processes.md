---
title: "Event Sub-Processes"
url: /refguide/workflow-event-sub-processes/
weight: 20
---

## Introduction

{{% alert color="info" %}}
This feature was released in beta in Studio Pro 11.8.0. To enable this feature, navigate to Studio Pro **Preferences** > **New features** > the **Workflow** section and select the **Enable workflow event sub-processes (beta)** option.
{{% /alert %}}

An event sub-process is a separate execution flow that is not part of the normal sequence flow of a workflow. It resides inside the workflow and starts executing upon receiving a specific trigger. It is crucial to understand that an event sub-process is part of the same workflow instance. It is not a separate workflow but a single workflow instance that can contain multiple concurrent processes.

Below is an example of an event sub-process, shown inside the dashed rectangle:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/event-sub-processes/event-sub-process-example.png" alt="Event sub-process example" width="400" >}}

### When to Use Event Sub-Processes

An event sub-process is similar to a [boundary event](/refguide/workflow-boundary-events/), with the exception that an event sub-process can start at any time, whereas a boundary event can start only while the activity it is attached to is active. Choosing between a boundary event and an event sub-process is a common architectural crossroads.

#### Ideal Use Cases

Event sub-processes are particularly useful in the following scenarios:

* **Global exception handling** – Handling errors or cancellations that could occur at any point during the workflow execution.
* **Isolated logic** – Handling complex steps triggered by a specific event (for example, "Change of Address") without cluttering the main flow.
* **Inline updates** – Updating data in a long-running process without interrupting the primary state of the workflow.

### When Not to Use Event Sub-Processes

* **Sequential logic** – If the logic must happen after a specific task, use a standard sequence flow.
* **Conditional logic based on activity state** – You may want to execute a flow only if a certain condition is met while a specific activity is active. A boundary event should be used here because it is triggered only if the activity it is attached to is active.
* **Returning to a specific point** – If you need to abort a specific task execution and resume it later, an interrupting boundary event is often more appropriate. Once the event is triggered, the boundary event can utilize a **Jump** activity to return to the original task.

### How Event Sub-Processes Work

#### Lifecycle

An event sub-process is initialized (but not started) as soon as the main process starts and remains in a waiting state until a notification is received.

{{% alert color="info" %}}
A workflow instance remains **In Progress** as long as at least ONE of the following conditions is met:

* The main process path has not yet reached its end event.
* Any event sub-process that was started has not yet reached its end event.
{{% /alert %}}

The workflow will NOT complete until all active execution paths, both the main flow and any triggered event sub-processes, have reached their respective end events.

#### Triggers and Notifications

Event sub-processes are triggered by a [Notify workflow](/refguide/notify-workflow/) microflow activity. When the trigger is received, the sub-process becomes **In Progress**.

#### Interrupting vs. Non-Interrupting

Event sub-processes can be configured as either interrupting or non-interrupting, depending on how they interact with the main process flow.

* **Interrupting (solid line)** – Immediately cancels the main process flow.
* **Non-Interrupting (dashed line)** – Runs in parallel with the main flow.

{{% alert color="info" %}}
Currently, Mendix only supports the non-interrupting variant of event sub-processes. Support for interrupting event sub-processes is planned for a future release.
{{% /alert %}}

#### Concurrency Limitation

Mendix workflows currently support a **single concurrent instance** per defined event sub-process. If a non-interrupting event sub-process is already active, subsequent attempts to trigger that same sub-process via the **Notify workflow** activity will return `false`. No new instances will be created for that specific sub-process while one is **In Progress**. A new instance can only be initiated once the active sub-process has completed its execution path.

If your workflow has multiple, distinct event sub-processes defined (for example, one for "Address Change" and one for "Document Upload"), each one can have its own active instance simultaneously. One being active does not prevent a different one from being triggered.

## Getting started

### Adding Event Sub-Processes

To add an **Event sub-process** to a workflow, follow these steps:

* Select an event sub-process from the **Sub-processes** section in the workflow **Toolbox**.
* Drag it onto a dashed drop zone adjacent to the main workflow process.

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/event-sub-processes/drag-and-drop.png" alt="Add Event sub-process example" width="500" >}}

* The sub-process flow is contained within a dashed rectangle. This dashed border around the sub-process start event indicates that it is a non-interrupting sub-process.
* The flow can contain the same types of activities as the main process flow (for example, **User Task**, **Call Microflow**, **Decision**).
* It must start with a **Start** event (triggered by a notification) and end with at least one **End** event.

## Execution

To start an event sub-process, create a **Notify workflow** microflow activity and point it to the event sub-process start event.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/event-sub-processes/notify-workflow.png" alt="Notify workflow example" width="400" >}}

### Operational Lifecycle Management

An event sub-process is bound to the lifecycle of its parent workflow instance. Administrative actions and system-level events (such as errors or version conflicts) directly impact the execution state of active sub-processes.

The following table outlines how top-level workflow operations and system states affect any event sub-process that is currently **In Progress**:

| Event or Operation | Effect on Event Sub-Process | System Behavior |
| --- | --- | --- |
| Abort Workflow | Aborted | The sub-process is permanently stopped and cannot be re-notified. |
| Restart Workflow | Aborted and Reset | The active sub-process instance is aborted. It returns to a waiting state and can be notified again. |
| Pause Workflow | Execution Halted | Execution of the sub-process halts immediately. Logic resumes from the same point once the workflow is Unpaused. |
| Workflow Incompatible | Execution Halted | The sub-process is "frozen" due to a version conflict. Execution resumes from the current point once the conflict is Resolved. |
| Error Inside Sub-process | Failed | The sub-process activity enters a Failed state. After the issue is fixed and the workflow is Retried, the sub-process resumes from the failed activity. |
| Error Outside Sub-process | Execution Halted | If a failure occurs elsewhere in the workflow, the healthy sub-process stops processing. It resumes once the error is fixed and the workflow is Retried. |

## Jump Rules

Event sub-processes have specific restrictions regarding [Jump activity](/refguide/jump-activity/) and [Jump to](/refguide/jump-to/):

* Between processes: It is not possible to jump into a sub-process from the main process (or vice versa), nor between different sub-processes.
* Within a sub-process: Jumps within the same sub-process are permitted.
    * **Jump to Start Event**: Aborts the current sub-process instance and returns it to a waiting state.
    * **Jump to End Event**: Completes the sub-process instance immediately.

## Domain Model Structure

To provide comprehensive monitoring, management, and auditing capabilities, the Mendix Workflow Engine utilizes specific system entities and associations. These ensure that every event sub-process instance is traceable back to its definition and correctly linked to the overall workflow lifecycle.

### WorkflowSubProcessDefinition

The `WorkflowSubProcessDefinition` entity represents the metadata of a sub-process as defined in the workflow model.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/event-sub-processes/domain-model/workflow-sub-process-definition.png" class="no-border" >}}

#### Attributes

| Attribute    | Type    | Description                                                                   |
|--------------|---------|-------------------------------------------------------------------------------|
| `Caption`    | String  | The caption of the sub-process.                                               |
| `IsObsolete` | Boolean | Set to `true` if the sub-process has been deleted from the application model. |

#### Associations

| Association | Parent Entity | Description |
| --- | --- | --- |
| `WorkflowSubProcessDefinition_WorkflowDefinition` | `WorkflowSubProcessDefinition` | Links to the parent workflow definition. |
| `WorkflowUserTaskDefinition_WorkflowSubProcessDefinition` | `WorkflowUserTaskDefinition` | Links user task definitions to their containing sub-process definition. |
| `WorkflowActivityRecord_WorkflowSubProcessDefinition` | `WorkflowActivityRecord` | Links historical activity records to the sub-process definition. |

### WorkflowSubProcess

The `WorkflowSubProcess` entity represents a specific runtime instance of an event sub-process. A `WorkflowSubProcess` object is created only after an event sub-process is notified and started its execution.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/event-sub-processes/domain-model/workflow-sub-process.png" class="no-border" >}}

#### Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| `Caption` | String | The caption of the sub-process instance. |
| `StartTime` | DateTime | The timestamp when execution begins. This is set by the Engine and is read-only. |
| `EndTime` | DateTime | The timestamp when execution ends (either through completion or failure). This is set by the Engine and is read-only. |
| `State` | Enumeration | The current lifecycle state of the sub-process instance (see [WorkflowSubProcessState](#workflowsubprocessstate-enumeration)). |
| `Reason` | String (Unlimited) | A technical description providing context for the current state (for example, error details). |

#### Associations

| Association | Parent Entity | Description |
| --- | --- | --- |
| `WorkflowSubProcess_WorkflowSubProcessDefinition` | `WorkflowSubProcess` | The association to the underlying definition for this instance. |
| `WorkflowSubProcess_Workflow` | `WorkflowSubProcess` | The association to the parent workflow instance. |
| `WorkflowUserTask_WorkflowSubProcess` | `WorkflowUserTask` | The association to active user tasks within this sub-process instance. |
| `WorkflowEndedUserTask_WorkflowSubProcess` | `WorkflowEndedUserTask` | The association to completed or ended user tasks within this instance. |
| `WorkflowActivityRecord_WorkflowSubProcess` | `WorkflowActivityRecord` | The association to the historical execution records for this instance. |
| `WorkflowCurrentActivity_WorkflowSubProcess` | `WorkflowCurrentActivity` | The association to the activities currently being executed in this sub-process (see [Jump to](/refguide/jump-to/)). |

### WorkflowSubProcessState (Enumeration)

The `WorkflowSubProcessState` enumeration defines the possible lifecycle phases of a sub-process instance:

| Caption     | Name         | Description                                                                                               |
|-------------|--------------|-----------------------------------------------------------------------------------------------------------|
| In progress | `InProgress` | The sub-process has been triggered and is currently executing.                                            |
| Aborted     | `Aborted`    | Execution was terminated, either because the parent workflow was aborted or due to an interrupting event. |
| Failed      | `Failed`     | Execution ended unsuccessfully because an activity within the sub-process encountered an error.           |
| Completed   | `Completed`  | The sub-process reached its end event and finished successfully.                                          |
| Paused      | `Paused`     | The sub-process was paused because the parent workflow was paused.                                        |

## Read more

* [Notify Workflow](/refguide/notify-workflow/)
* [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/)
* [Jump activity](/refguide/jump-activity/)
* [Jump to](/refguide/jump-to/)
