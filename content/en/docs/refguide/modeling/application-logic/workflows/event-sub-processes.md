---
title: "Event Sub-Processes"
url: /refguide/workflow-event-sub-processes/
weight: 20
description: "Describes event sub-processes in Mendix workflows, including start event types, interrupting behavior, concurrency, and domain model structure."
---

## Introduction

An event sub-process is a separate execution flow that is not part of the normal sequence flow of a workflow. It resides inside the workflow and starts executing upon receiving a specific trigger. It is crucial to understand that an event sub-process is part of the same workflow instance. It is not a separate workflow but a single workflow instance that can contain multiple concurrent processes.

Below is an example of event sub-processes, shown inside the dashed rectangles:

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

An event sub-process is initialized (but not started) as soon as the main process starts and remains in a waiting state until triggered by its configured start event.

{{% alert color="info" %}}
A workflow instance remains **In Progress** as long as at least ONE of the following conditions is met:

* The main process path has not yet reached its end event.
* Any event sub-process that was started has not yet reached its end event.
{{% /alert %}}

The workflow will NOT complete until all active execution paths, both the main flow and any triggered event sub-processes, have reached their respective end events.

#### Start Event Types {#start-event-types}

Event sub-processes can be triggered by one of the following start event types:

* **Notification start event** – The sub-process is triggered by a [Notify workflow](/refguide/notify-workflow/) microflow activity.
* **Timer start event** – The sub-process is triggered automatically when the configured duration elapses or the configured date and time is reached. The timer configuration follows the same rules as the standalone [Timer](/refguide/timer/) activity. For more information, refer to the [Timer](/refguide/timer/#timer) section in *Timer*.

When the trigger is received, the sub-process becomes **In Progress**.

#### Interrupting vs. Non-Interrupting

Event sub-processes can be configured as either interrupting or non-interrupting, depending on how they interact with the main process flow.

* **Interrupting (solid line)** – Immediately cancels the main process flow and all ongoing sub-processes within the workflow instance.
* **Non-Interrupting (dashed line)** – Runs in parallel with the main flow.

#### Concurrency Limitation

Mendix workflows currently support a **single concurrent instance** per defined event sub-process. If an event sub-process is already active, subsequent attempts to trigger it, either via the **Notify workflow** activity or when a timer fires again, are ignored. No new instances are created for that specific sub-process while one is **In Progress**. A new instance can be initiated only after the active sub-process has completed its execution path.

If your workflow has multiple, distinct event sub-processes defined (for example, one for "Address Change" and one for "Document Upload"), each one can have its own active instance simultaneously. One being active does not prevent a different one from being triggered.

{{% alert color="info" %}}
Currently, a timer start event fires only once. Support for recurring timers may be added in the future.
{{% /alert %}}

## Getting Started

### Adding Event Sub-Processes

To add an **Event sub-process** to a workflow, follow these steps:

1. Select an event sub-process from the **Sub-processes** section in the workflow **Toolbox**.
2. Drag it onto a dashed drop zone adjacent to the main workflow process.

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/event-sub-processes/drag-and-drop.png" alt="Add Event sub-process example" width="500" >}}

3. In the **Select Events** dialog, choose the type of start event for the sub-process: **Timer (Interrupting)**, **Timer (Non-Interrupting)**, **Notification (Interrupting)**, or **Notification (Non-Interrupting)**.

   {{< figure src="/attachments/refguide/modeling/application-logic/workflows/event-sub-processes/select-event-dialog.png" alt="Select Event Dialog" width="500" >}}

4. The sub-process flow is contained within a dashed rectangle. The border around the sub-process start event indicates its interrupting behavior: a dashed border indicates a non-interrupting sub-process, and a solid border indicates an interrupting sub-process.

* The flow can contain the same types of activities as the main process flow (for example, **User Task**, **Call Microflow**, **Decision**).
* It must start with a **Start** event (triggered by a notification or a timer) and end with at least one **End** event.

### Changing Sub-Process Start Event Type

You can change the type of an existing sub-process start event using the context menu without having to delete and re-add it. To do this:

1. Right-click the sub-process start event to open its context menu.
2. Click **Change type**.
3. Select one of the available options:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/event-sub-processes/context-menu-change-event.png" alt="Changing sub-process start event type through context menu" width="450" >}}

You can convert between the following supported start event types:

* Notification (Interrupting)
* Notification (Non-Interrupting)
* Timer (Interrupting)
* Timer (Non-Interrupting)

#### Implications of Changing the Interrupting Behavior {#event-type-change}

For an existing sub-process start event, when you change its interrupting behavior from non-interrupting to interrupting or vice versa, you will be presented with a warning dialog. For example, when you change a sub-process start event from non-interrupting to interrupting, you will see the following warning dialog:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/event-sub-processes/security-dialog.png" alt="Security Dialog when changing type" width="450">}}

After you confirm the change:

* The event sub-process is re-created with a start event of the specified interrupting behavior. The new sub-process start event can be triggered after the workflow is redeployed and is in progress.
* The workflow becomes incompatible if the changed event sub-process is already being executed in one of the ongoing workflow instances.

The event sub-process is re-created upon interrupting behavior change because in-place conversion can result in invalid states. An interrupting event sub-process cancels the parent process scope and all other active sub-processes when triggered, while a non-interrupting one runs in parallel without affecting them. These are mutually exclusive execution models: an event sub-process instance belongs to exactly one of them from the moment it starts. Changing the type in place for an already-active instance would leave it in a state that is neither valid interrupting nor valid non-interrupting behavior.

### Rearranging Event Sub-Processes

In Studio Pro 11.11 and above, you can rearrange event sub-processes by right-clicking an event sub-process to open its context menu and clicking **Move event sub-process left** or **Move event sub-process right**, or you can use the <kbd>Ctrl</kbd>/<kbd>Command</kbd> + Left arrow or <kbd>Ctrl</kbd>/<kbd>Command</kbd> + Right arrow shortcut keys.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/event-sub-processes/arrange-in-editor.png" max-width=90% alt="Event sub-process arrange in editor" >}}

{{% alert color="info" %}}
This does not change the order of execution of the sub-processes, as this is dependent on when the sub-process is triggered.
{{% /alert %}}

## Execution

How an event sub-process is started depends on its start event type:

* **Notification start event** – Create a **Notify workflow** microflow activity and point it to the event sub-process start event.

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/event-sub-processes/notify-workflow.png" alt="Notify workflow example" max-width=90% >}}

* **Timer start event** – The sub-process starts automatically when the configured duration elapses or the configured date and time is reached. No additional configuration outside the sub-process is required.

### Operational Lifecycle Management

An event sub-process is bound to the lifecycle of its parent workflow instance. Administrative actions and system-level events (such as errors or version conflicts) directly impact the execution state of active sub-processes.

The following table outlines how top-level workflow operations and system states affect any event sub-process that is currently **In Progress**:

| Event or Operation | Effect on Event Sub-Process | System Behavior |
| --- | --- | --- |
| Abort Workflow | Aborted | The sub-process is permanently stopped and cannot be triggered again. |
| Restart Workflow | Aborted and Reset | The active sub-process instance is aborted. It returns to a waiting state and can be triggered again. |
| Pause Workflow | Execution Halted | Execution of the sub-process halts immediately. Logic resumes from the same point once the workflow is Unpaused. |
| Workflow Incompatible | Execution Halted | The sub-process is "frozen" due to a version conflict. Execution resumes from the current point once the conflict is Resolved. |
| Error Inside Sub-process | Failed | The sub-process activity enters a Failed state. After the issue is fixed and the workflow is Retried, the sub-process resumes from the failed activity. |
| Error Outside Sub-process | Execution Halted | If a failure occurs elsewhere in the workflow, the healthy sub-process stops processing. It resumes once the error is fixed and the workflow is Retried. |

## Jump Rules

Event sub-processes have specific restrictions regarding [Jump activity](/refguide/jump-activity/) and [Jump to](/refguide/jump-to/):

* Between processes: It is not possible to jump into a sub-process from the main process (or vice versa), nor between different sub-processes.
* Within a sub-process: Jumps within the same sub-process are permitted.
    * **Jump to Start Event**: Aborts the current sub-process instance and returns it to a waiting state. If no other activities are in progress in the workflow instance after the jump, the workflow is aborted.
    * **Jump to End Event**: Completes the sub-process instance immediately. If no other activities are in progress in the workflow instance after the jump to the sub-process end event, the workflow is completed.

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

The `WorkflowSubProcess` entity represents a specific runtime instance of an event sub-process. A `WorkflowSubProcess` object is created only after an event sub-process has been triggered and started its execution.

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
* [Timer](/refguide/timer/)
* [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/)
* [Jump activity](/refguide/jump-activity/)
* [Jump to](/refguide/jump-to/)
