---
title: "Workflow events"
url: /refguide/workflow-events/
linktitle: "Workflow events"
weight: 55
tags: ["workflow", "workflows", "workflow-events", "workflow event"]
---

## 1 Introduction

Workflow engine emits near real time workflow events. These events provide a great way to build audit trails, handle errors, update KPI dashboards, etc.

## 2 Configuration

The events can be configured using the event handlers as described in [App Settings](/refguide/app-settings/#event-handlers) or in [workflow properties](/refguide/workflow-properties/#event-handlers).

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-events/event-handler-overview.png" >}}

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-events/add-event-handler.png" >}}


## 3 Event Mechanism

When something happens in the workflow engine an event is emitted when subscribed to that event. This event is posted asynchronously using the task queue as described in [workflow engine](/refguide/workflow-engine/#workflow-task-queue). We take a snapshot of the event state at the time it occurs so that we get real time data. This snapshot data is then converted by the task queue task to the system module non-persistent entities [Workflow Entities](/refguide/workflows/##workflow-entities): **WorkflowEvent**, **WorkflowRecord** and **Workflow Activity Record**.

The advantages of this mechanism are:
  - that the event handler microflow might fail, without failing or halting the workflow.
  - that the execution (time) of the event handler microflow is not delaying the continuation of the workflow.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-events/workflow-event-entities.png" >}}


{{% alert color="warning" %}}
All associations to the above mentioned non-persistent entities (with the exception of a sub `WorkflowRecord`) are associations to 'live' objects, whose state may have been updated since the event occurred.
{{% /alert %}}

These non-persistent entities are provided as the default input parameters to the microflow specified in the event handler configuration:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-events/event-handler-microflow-parameters.png" >}}

You can use the data from these input parameters to construct audit trails, for logging purposes, etc. For example, you can define an event handler that only collects data from user task events.

## 4 Event State

When a particular workflow action results in multiple events (e.g. abort or end of workflow) being triggered, then we treat this action as an atomic action and include the state (workflow and activity) as it will be at the end of the transaction. The rationale behind this is that this is also what is observable in the database: there, all objects will also be updated atomically in a single transaction.

Examples of this are:

- Both the `EndEventExecuted` and the subsequent `WorkflowCompleted` event will have an identical workflow record, with state `Completed`.
- On an abort, all events (e.g. `UserTaskEnded`, `WaitForNotificationEnded`, `CallMicroflowEnded`, `CallWorkflowEnded`
  and `WorkflowAborted`) will have an identical workflow record, with state `Aborted`.

In case of workflow operations, the workflow lifecycle events are the last event being triggered and the activity related events come before that. For example, if you abort a workflow which is currently suspended on a user task then we first fire the `UserTaskEnded` event and later on the `WorkflowAborted` event.

## 5 Event Types {#workflow-event-types}

## 5.1 Workflow Lifecycle Events

|   Event Type                | Description                                                                                                                                 | Examples                                                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| WORKFLOWINITIATED           | Triggered when a new workflow instance is initiated                                                                                         |                                                                                                                    |
| WORKFLOWCOMPLETED           | Triggered when a workflow completes successfully                                                                                            |                                                                                                                    |
| WORKFLOWFAILED              | Triggered when a workflow instance fails                                                                                                    | When a user task fails, we fail the workflow                                                                       |
| WORKFLOWRESTARTED           | Triggered when a workflow is restarted                                                                                                      | See [Operation](/refguide/change-workflow-state/#operation)                                                        |
| WORKFLOWABORTED             | Triggered when a workflow is aborted                                                                                                        | See [Operation](/refguide/change-workflow-state/#operation)                                                        |                          
| WORKFLOWPAUSED              | Triggered when a workflow is paused                                                                                                         | See [Operation](/refguide/change-workflow-state/#operation)                                                        |
| WORKFLOWUNPAUSED            | Triggered when a paused workflow is unpaused                                                                                                | See [Operation](/refguide/change-workflow-state/#operation)                                                        |
| WORKFLOWRETRIED             | Triggered when a workflow is retried after being failed or incompatible                                                                     | See [Operation](/refguide/change-workflow-state/#operation)                                                        |
| WORKFLOWUPDATED             | Triggered when a parent workflow is put back into progress after the sub-workflow is retried, restarted, or when jump-to option is applied  | See [Operation](/refguide/change-workflow-state/#operation)                                                        |
| WORKFLOWUPGRADED            | Triggered when the workflow definition has a new version having non-conflicting changes                                                     | See [Workflow versioning](/refguide/workflow-versioning/#31-successful-upgrades-to-the-latest-workflow-definition) |
| WORKFLOWCONFLICTED          | Triggered when the workflow definition has a new version having conflicting changes                                                         | See [Workflow versioning](/refguide/workflow-versioning/#32-workflow-versioning-conflict-types)                    |
| WORKFLOWRESOLVED            | Triggered when the workflow is continued after being incompatible                                                                           | See [Operation](/refguide/change-workflow-state/#operation)                                                        |
| WORKFLOWJUMPTOOPTIONAPPLIED | Triggered when a jump-to option is applied on the workflow                                                                                  | See [Jump-To](refguide/jump-to/)                                                                                   |

## 5.2 Activity Events {#activity-event-type}

|   Event Type                | Description                                                                                             | Examples                                                                |
| --------------------------- | --------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| STARTEVENTEXECUTED          | Triggered when the start event is executed                                                              |                                                                         |
| ENDEVENTEXECUTED            | Triggered when the end event is executed                                                                |                                                                         |
| DECISIONEXECUTED            | Triggered when a `Decision` activity is executed                                                        | See [Decision](/refguide/decision-in-workflows/)                        |
| JUMPEXECUTED                | Triggered when a `Jump` activity is executed                                                            | See [Jump](/refguide/jump-activity/)                                    |
| PARALLELSPLITEXECUTED       | Triggered when a `ParallelSplit` activity is started                                                    | See [Parallel-Split](/refguide/parallel-split/)                         |
| PARALLELMERGEEXECUTED       | Triggered when all parallel split paths are completed                                                   |                                                                         |
| CALLWORKFLOWSTARTED         | Triggered in following cases:<br> - Sub-workflow is successfully instantiated<br> - Sub-workflow definition is not found (in this case it is triggered together with `CALLWORKFLOWENDED`)<br> - Sub-workflow is retried, restarted or when jump-to option is applied | See [CallWorkflow](/refguide/call-workflow/) |
| CALLWORKFLOWENDED           | Triggered in following cases:<br> - Workflow is `Completed`, `Failed` and `Aborted`<br> - Sub-workflow definition is not found (in this case it is triggered together with `CALLWORKFLOWSTARTED`)<br> - Workflow suspended on `CallWorkflow` is aborted, restarted or when jump-to option is applied<br> - Parallel path containing `CallWorkflow` is removed and workflow is continued | See [CallWorkflow](/refguide/call-workflow/) |
| CALLMICROFLOWSTARTED        | Triggered when `CallMicroflow` activity is started | See [CallMicroflow](/refguide/call-microflow/) |
| CALLMICROFLOWENDED          | Triggered in following situations:<br> - Microflow is executed successfully with a valid outcome<br> - Workflow suspended on `CallMicroflow` is aborted, restarted or when jump-to option is applied<br> - Parallel path containing `CallMicroflow` is removed and workflow is continued<br> - Microflow is executed with an invalid outcome | See [CallMicroflow](/refguide/call-microflow/)  |
| WAITFORNOTIFICATIONSTARTED  | Triggered when `WaitForNotification` activity is started | See [WaitForNotification](/refguide/wait-for-notification/) |
| WAITFORNOTIFICATIONENDED    | Triggered in following situations:<br> - Notification is received successfully<br> - Workflow suspended on `WaitForNotification` is aborted, restarted or when jump-to option is applied<br> - Parallel path containing `WaitForNotification` is removed and workflow is continued  | See [WaitForNotification](/refguide/wait-for-notification/) | 
| WAITFORTIMERSTARTED         | Triggered in following cases:<br> - Timer is successfully scheduled<br> - Delay expression results in an empty value<br> - Delay expression in invalid (e.g divide by zero error in expression) | See [WaitForTimer](/refguide/wait-for-timer/) |
| WAITFORTIMERENDED           | Triggered in following cases:<br> - Timer has expired<br>- Delay expression results in an empty value<br> - Delay expression in invalid (e.g divide by zero error in expression)<br> - Workflow suspended on `WaitForTimer` is aborted, restarted or when jump-to option is applied<br> - Parallel path containing `WaitForTimer` is removed and workflow is continued | See [WaitForTimer](/refguide/wait-for-timer/) |
| USERTASKSTARTED             | Triggered in following cases:<br> - User targeting is evaluated or<br> - OnCreated microflow is successfully scheduled | See [UserTask](/refguide/user-task/) or [MultiUserTask](/refguide/multi-user-task/) |
| MULTIUSERTASKOUTCOMESELECTED| Triggered when a vote is specified for a multi user task. ||
| USERTASKENDED               | Triggered in following cases:<br> - User task fails<br> - Workflow suspended on `UserTask` is aborted, restarted or when jump-to option is applied<br> - Parallel path containing `UserTask` is removed and workflow is continued | See [UserTask](/refguide/user-task/) or [MultiUserTask](/refguide/multi-user-task/)<br><br>User task can fail due to the following reasons:<br>- On created microflow fails<br> - Multi-user task when number of required users is more than the targeted users<br><br>Note:<br>_- ActivityRecord for failure cases will have the activity state as failed._<br>_-ActivityRecord will only have an actor in case of single-user task._|



## 6 Sub-Workflows

A sub-workflow will emit exactly the same events as a main workflow.
This means it will have its own `WorkflowInitiated` event when it started and either `WorkflowCompleted` or `WorkflowAborted` when it ends.
Basically, a workflow will output exactly the same events when it's executed as a sub-workflow as when it's executed as the main workflow.


## 7 Removed Definitions

When a workflow definition is removed while there are active workflow instances, they will be marked as `Incompatible`.
Since the definition no longer exists, workflow instances can only be aborted, which will also abort all their activities.
However, without the definition it is no longer possible to determine what type of activities they were.
As such, it is impossible to send the appropriate `XyzEnded` event, so in this particular case no event is
sent at all for the aborted activities.
This exception to the rules that a `XyzStarted` event is matched with an `XyzEnded` event is acceptable,
because this situation is deemed abnormal and rare.