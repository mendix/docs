---
title: "Workflow Tab"
url: /refguide/workflow-tab/
weight: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Configure workflow-specific settings for your app in the Workflow tab.

### User Entity

**User entity** defines the entity which is used in [user targeting](/refguide/user-task/#users). If you assign a user task using an XPath, you can use attributes of this entity. If you are using a microflow, the entity defines the return type the microflows expects. For more information, see the [Target User(s)](/refguide/user-task/#users) section in *User Task*.

### Workflow Groups

**Workflow group(s)** defines groups of users for [user task targeting](/refguide/user-task/#workflow-group). When users are added or removed from the group, the targeted users of a user task change accordingly. For more information, see [Workflow Groups](/refguide/workflow-groups/).

### Optimization

This section allows you to configure the maximum number of workflow and microflow threads that can be executed simultaneously by the Runtime. This is an advanced setting that gives developers control over app performance. Change these settings when you face performance issues on executing workflow instances or workflow-initiated microflows. The two values in this field indicate the amount of threads that process the queues containing workflow instances or workflow-initiated microflows. For more information, see the [Workflow Instance Threads](#workflow-instance-threads) and [Microflow Threads](#microflow-threads) sections below. 

App performance can be tracked (from Mendix 9.19 and above) using the following Task Queue metrics:

* `mx.runtime.stats.taskqueue.queue-wait-time` – the amount of time a task has to wait for execution
* `mx.runtime.stats.taskqueue.queue-active-threads` – the actual amount of threads executing tasks from the queue
* `mx.runtime.stats.taskqueue.task-execution-time` – time needed to execute a task from the queue

These metrics have a tag-named queue which has the following values relevant to workflow execution:

* `System.MendixWorkflows-WorkflowExecution` – a queue for workflow instance execution
* `System.MendixWorkflows-DefaultTaskExecution` – a queue for workflow-initiated microflows execution

If the waiting time of the queue increases and active threads in the queue reach the current maximum, it is advised to increase the maximum in settings.

#### Workflow Instance Threads {#workflow-instance-threads}

This defines the maximum number of threads that can process active workflow instances simultaneously. This setting does not relate to the amount of workflow instances that are active in the system.

#### Microflow Threads {#microflow-threads}

This defines the maximum number of workflow-initiated microflows that the Runtime executes simultaneously. Workflow-initiated microflows are microflows defined as event handlers or microflow call activities defined in workflows. This setting has no influence on microflows executed by pages or other parts of the system.

### Event Handlers {#event-handlers}

An event handler allows you to specify a microflow which is triggered when the subscribed event (or events) occur. Each event handler can subscribe to multiple events and there can be multiple event handlers. An event is triggered when the workflow or its activity goes through transitions which warrant the event. This setting is app-wide; you can override it by setting workflow-specific event handlers in [workflow properties](/refguide/workflow-properties/#event-handlers).

An event handler has the following configuration:

* **Name** – describes the event handler
* **Documentation** – provides more information regarding the usage of the event handler
* **When** – allows you to select the [workflow event types](/refguide/workflow-events/#workflow-event-types), for which the handler should be triggered
* **Microflow** – allows you to select a microflow that should be triggered for each of the above selected workflow event types

You can use the data from the event handler microflow to build audit trails or for logging purposes. For example, you can define an event handler that only collects data from user task events.

For more information on workflow events, see [Workflow Events](/refguide/workflow-events/).

### ⚠ Events (Deprecated) {#events} 

{{% alert color="warning" %}}
State-change events are deprecated and replaced with the new [event handlers](#event-handlers) above that also contain events for state changes. It is suggested to migrate the microflows to the new event handlers.
{{% /alert %}}

Events allow you to set a microflow for workflow and user task state changes in your app. 

Security settings of workflows and user tasks allow you to access workflow or user task data only if you have Admin rights or if the workflow/user task is targeted to you. Data from events allows you to build a dashboard or audit trails. For example, it can be useful for a manager to see progress of an employee onboarding process. 

#### Workflow State Change {#workflow-state-change}

A microflow selected for this setting will start every time a workflow changes its state, for example, when the workflow is completed or has failed. This setting is app-wide; you can override it by setting a workflow-specific microflow in [workflow properties](/refguide/workflow-properties/#events).

#### User Task State Change {#user-task-state-change}

A microflow selected for this setting will start every time a user task changes its state, for example, when a user task is completed or paused. This setting is app-wide; you can override it by setting a workflow-specific microflow in [workflow properties](/refguide/workflow-properties/#events).