---
title: "Best Practices for Asynchronous Job Orchestration"
linktitle: "Async Job Orchestration"
url: /howto/integration/async-job-orchestration/
weight: 10
description: "Describes best practices for orchestrating long-running asynchronous jobs between Mendix apps and external systems."
---

## Introduction

Mendix provides an extensive toolset for integration between multiple systems, such as REST, OData, or Business Events. Those building blocks can be used to organize secure, reliable, and synchronous or asynchronous communication, such as sending requests, listening to events, or transferring data.

This how-to focuses on a specific use case where one system hands work to another system and observes its completion asynchronously. It assumes long-running external jobs that could fail or be interrupted. A typical case is submitting a request to an external system where completion might take hours or days.

## Prerequisites

Before starting this how-to, make sure you have access to the following Studio Pro features:

* [Business event services](/refguide/business-event-services/) – available in Studio Pro [9.18](/releasenotes/studio-pro/9.18/) and above. They also require the [Mendix Business Events](/appstore/services/business-events/) module from the Marketplace.
* The [Notify Workflow](/refguide/notify-workflow/) microflow activity – available in Studio Pro [10.0](/releasenotes/studio-pro/10.0/) and above.
* [Notification](/refguide/notification/) boundary events – available in Studio Pro [11.11](/releasenotes/studio-pro/11.11/) and above.

## Architecture Overview

This how-to describes the recommended approach. In some cases it is reasonable to deviate from it. For example, for small and simple systems that only use Mendix apps, it makes sense to combine the domain app and the adapter. The advantages and disadvantages of each such architectural decision are listed below.

### Layers

The system consists of the following layers:

{{< figure src="/attachments/howto/integration/async-job-orchestration/architecture-layers.png" alt="Component diagram showing the domain app and adapter Mendix apps communicating through an event broker, and the adapter communicating with the external system through an event broker or REST" >}}

* Domain app – a Mendix application that holds business logic. It is an orchestrator between the processes running inside the app itself and in various external systems.
* Adapter – a Mendix application that manages the communication between the domain app and the external system. Including an adapter does bring overhead: it is a separate app that has to be built and managed. As such, it is an option not to have a separate adapter, but to include its functionality in the domain app if there is only a single app or performance is critical. However, an adapter also brings the following advantages, which is why it is included in this architecture:

    * Promotes loose coupling between the domain app and the external system, which makes it easier and safer to develop the apps independently.
    * Allows better control over integration boundaries, such as security.
    * Helps to manage load redistribution in high-load systems.

* External system – any system (including a Mendix app) that does the work. This work is typically a long-running job that produces decisions, data, or both.
* Event broker – for event-driven, asynchronous communication between the domain app and the adapter, and optionally between the adapter and the external system. This how-to uses Mendix Business Events, which can be provided by the Mendix Event Broker for apps running in Mendix Cloud, or a local broker such as Kafka.

### Use Case: Observing the Completion of a Long-Running Task

The flow to build is the following:

{{< figure src="/attachments/howto/integration/async-job-orchestration/long-running-task-flow.png" alt="Sequence diagram of the domain app submitting a task to the adapter, the adapter forwarding it to the external system and acknowledging acceptance, and the external system notifying completion later" >}}

1. The domain app submits a task with a payload.
2. The adapter forwards the task to the external system.
3. The adapter acknowledges that the task is accepted and communicates it to the domain app.
4. After a certain time, the external system completes the task and notifies the adapter.
5. The adapter sends the task completion event to the domain app.

This flow also ensures that the following scenarios can be handled appropriately:

1. The adapter or external system is down at the moment of the request, or goes down mid-execution. The domain app should be able to escalate to the responsible party when the acceptable or completion deadline is exceeded.
2. The external system refuses work or fails during execution. The adapter should be able to relay the error message back to the domain app.
3. The domain app sends a cancellation signal.

The following topics are out of scope: handling more than one task type, integrating with multiple external systems, restarting a failed task, security configuration, and message schema versioning.

## Configuration

### Shared Elements

Certain domain model entities and microflows related to message processing can be shared between the domain app and the adapter. They can be extracted into a separate module and later reused by both parties. Examples are the **ProcessedMessage** entity and the **SUB_Handle_Event** microflow listed below. However, to keep each layer's specification complete, every component is listed with an indication of which ones can be shared.

{{% alert color="info" %}}
The names of domain model entities, attributes, microflows, and services are suggestions based on best practices in distributed computing and Mendix development. None of them are mandatory, and you are free to use your own terminology instead.
{{% /alert %}}

### Domain App

The domain app is a Mendix app that serves as an orchestrator for long-running tasks executed by external systems. In this example, it communicates only with the adapter to do the following:

* Publish new task requests
* Cancel the execution of existing tasks
* Listen to task completion events

#### Domain Model

{{< figure src="/attachments/howto/integration/async-job-orchestration/domain-app-domain-model.png" alt="Domain model of the domain app with the ExternalTask, ProcessedMessage, and OrphanEvent entities and their attributes" >}}

The **ExternalTask** entity is used for tracking a long-running job in the external system.

* **CorrelationId** is a UID owned by the domain app. It is created before a new task is submitted. The main purpose of the **CorrelationId** is to provide a stable identifier that allows all requests, events, and callbacks to be related to the same business operation.
* **State** (**Requested**, **Accepted**, **Succeeded**, **Failed**, **Cancelled**) reflects the last available execution state of an external job. It is updated when the domain app receives an event from the adapter.
* **ExecutionDeadline** indicates the time when to escalate if the task is not completed yet.
* **Input** is a payload sent to the external job that contains the required parameters to start and execute the job. Such parameters may include the job name as well as context data: object IDs, timestamps, user input, and so on. The shape of the input is application specific: it can be a list of comma-separated values or a stringified JSON structure. For example, `job_name=my_first_task,target_group=management,item_id=295128537,deadline=1790689440`.
* **Outcome** is a payload received upon the completion of the task. Its shape is also application specific, and it can contain either the result of the external job or an error message when the job failed.

The **ProcessedMessage** entity records messages from the adapter that have already been processed. It is used to ensure that the same message is not processed more than once in case of a redelivery. For more details on its purpose and management, see [Message Deduplication and Retention](#deduplication). It only requires one attribute:

* **MessageId** is a UID generated by the adapter in the same transaction that publishes the message.

The rest of the attributes are optional and primarily used for auditing:

* **ProcessedAt** is the time when the message was received.
* **MessageType** (**TaskAccepted**, **TaskCompleted**) is the event type for which the message was sent.

The **OrphanEvent** entity is used to store events received from the adapter that could not be associated with any existing **ExternalTask** by their **CorrelationId**. An orphan event usually indicates a missing **ExternalTask** object or a mistake in the **CorrelationId** value sent by the adapter. Such events need to be investigated and resolved manually.

#### Workflows

A Mendix workflow is a top-level organization facilitator specifically designed to handle long-running tasks. Below is an example of a reusable workflow that takes an **ExternalTask** as its context object. Such a workflow can be plugged into one or several processes (other workflows) as a **Call workflow** activity.

* It calls **HandleBE_SubmitTask**, which in turn generates a **CorrelationId** if it does not exist yet and publishes a **SubmitTask** business event for the adapter.
* After the submission, it schedules a non-interrupting timer boundary event that triggers an escalation microflow if the execution deadline is exceeded, for example to notify the responsible person or perform automatic actions. Other types of deadlines, such as an acceptance deadline, can be handled in a similar way. They are omitted from this example for the sake of simplicity.
* The workflow remains **In Progress** until it receives a completion notification.

{{< figure src="/attachments/howto/integration/async-job-orchestration/domain-app-task-workflow.png" alt="Workflow with an ExternalTask context object that publishes SubmitTask, waits for a task completed event, and has boundary events for a deadline exceeded escalation and a cancellation request" >}}

The parent workflows that call this workflow wait for it to be finished before continuing. Below is an example of a process that sequentially starts two asynchronous jobs and waits for them to be finished. Every sub-workflow call requires a separate **ExternalTask** context object in order to submit and track its own asynchronous job instance. Such an **ExternalTask** can be passed to the sub-workflow call through an association to the parent workflow context object. In this example, the parent workflow has a **WorkflowContext** entity with **WorkflowContext_ExternalTask_A** and **WorkflowContext_ExternalTask_B** associations.

{{< figure src="/attachments/howto/integration/async-job-orchestration/domain-app-parent-workflow.png" alt="Parent workflow calling two sub-workflows, External Task A and External Task B, in sequence, alongside a WorkflowContext entity with two associations to ExternalTask" >}}

#### Business Event Services

The domain app can publish two business events: **SubmitTask** and **CancelTask**.

{{< figure src="/attachments/howto/integration/async-job-orchestration/domain-app-business-event-service.png" alt="ExternalTask_Commands business event service in Studio Pro with SubmitTask and CancelTask definitions published through the PBE_SubmitTask and PBE_CancelTask entities" >}}

Every business event is required to carry a **MessageId** for deduplication and a **CorrelationId** to resolve the **TaskCorrelation** tracked by the adapter.

{{< figure src="/attachments/howto/integration/async-job-orchestration/domain-app-business-event-entities.png" alt="PBE_SubmitTask entity with MessageId, CorrelationId, and Input attributes, and PBE_CancelTask entity with MessageId, CorrelationId, and Reason attributes" >}}

#### Microflows

Microflows are the main executors of the logic in the app. They are responsible for verifying message fields, retrieving and updating relevant data, and either publishing a business event or handling a consumed business event.

The following two microflows, **HandleBE_SubmitTask** and **HandleBE_CancelTask**, publish **SubmitTask** and **CancelTask** business events respectively. They both generate a unique **MessageId** and create the business event objects to be published.

The **HandleBE_SubmitTask** microflow also generates and sets the **CorrelationId** on the given **ExternalTask** object. This microflow can be called directly from one or several workflows with the **CorrelationId** used as a resubmission guard: when it is not set, this is a new task to be submitted; when it is already set, the task has already been submitted and no action follows.

{{< figure src="/attachments/howto/integration/async-job-orchestration/domain-app-handle-submit-task.png" alt="HandleBE_SubmitTask microflow that checks whether a CorrelationId exists, generates a random hash for the CorrelationId and MessageId, creates a PBE_SubmitTask object, and publishes the business event" >}}

{{< figure src="/attachments/howto/integration/async-job-orchestration/domain-app-handle-cancel-task.png" alt="HandleBE_CancelTask microflow that generates a random hash for the MessageId, creates a PBE_CancelTask object from the CorrelationId and Reason parameters, and publishes the business event" >}}

The consumed business events, **TaskAccepted** and **TaskCompleted**, are handled in a similar way by a reusable **SUB_Handle_Event** microflow. First, it checks whether a business event with the given **MessageId** has already been processed. If so, it is a redelivery and the microflow returns empty to indicate that no action follows. If the message has not been processed yet, it is saved as a **ProcessedMessage**, the **ExternalTask** is retrieved by **CorrelationId**, and if one is found, its state is updated and it is returned from the microflow. If no **ExternalTask** with the given **CorrelationId** is found, the message is parked as an **OrphanEvent** to be resolved later.

{{< figure src="/attachments/howto/integration/async-job-orchestration/domain-app-sub-handle-event.png" alt="SUB_Handle_Event microflow that checks for an already processed message, creates a ProcessedMessage, retrieves the ExternalTask by CorrelationId, and either changes its state or creates an OrphanEvent" >}}

After you import the AsyncAPI YAML for **ExternalTask_Events** from the adapter, you can subscribe to the **TaskAccepted** and **TaskCompleted** business events, which adds the **HandleBE_TaskAccepted** and **HandleBE_TaskCompleted** microflows correspondingly.

The **HandleBE_TaskAccepted** microflow maps the required parameters, such as **MessageId**, **CorrelationId**, and **Outcome**, sets the **ExternalTaskState** to **Accepted** and the **ProcessedMessageType** to **TaskAccepted**, and calls the **SUB_Handle_Event** microflow.

{{< figure src="/attachments/howto/integration/async-job-orchestration/domain-app-handle-task-accepted.png" alt="HandleBE_TaskAccepted microflow calling SUB_Handle_Event, with the Edit Call Microflow dialog showing the parameter mapping from the PBE_TaskAccepted business event" >}}

The **HandleBE_TaskCompleted** microflow does a similar mapping, setting the **ExternalTaskState** to **Succeeded**, **Failed**, or **Cancelled** and the **ProcessedMessageType** to **TaskCompleted**. Additionally, the handler retrieves all workflows that use the **ExternalTask** as their context object and notifies them about the task completion.

{{< figure src="/attachments/howto/integration/async-job-orchestration/domain-app-handle-task-completed.png" alt="HandleBE_TaskCompleted microflow calling SUB_Handle_Event, retrieving workflows for the ExternalTask and notifying them, with the parameter mapping expression that converts the completion status into an ExternalTaskState" >}}

### Adapter

The adapter is a Mendix application that manages the communication between the domain app and the external system. This section focuses on the part where the adapter connects with the domain app. The communication between the adapter and the external system is described in [External System](#external-system).

#### Domain Model {#adapter-domain-model}

{{< figure src="/attachments/howto/integration/async-job-orchestration/adapter-domain-model.png" alt="Domain model of the adapter with the TaskCorrelation, ProcessedMessage, and OrphanCallback entities and their attributes" >}}

The **TaskCorrelation** entity stores a reference between the **CorrelationId** received from the domain app and the **VendorJobId** received from the external system. **ProcessingStage** (**Received**, **Submitted**, **Completed**) indicates the execution stage of the external job and can be used for audit, retry due to a failure, or filtering records to be pruned.

The **ProcessedMessage** entity serves the same goal as the entity with the same name in the domain app: to ensure that the same message is not processed more than once. The **ProcessedMessage** entity can be extracted into a separate module and reused by both the domain app and the adapter.

The **OrphanCallback** entity has the same role as the **OrphanEvent** entity in the domain app. However, it stores events (or callbacks, depending on the external system configuration, hence the name) that came from the external system and do not have a **TaskCorrelation** with the corresponding **VendorJobId**. This can happen if a **TaskCorrelation** object was dropped or the external system sent an event for an untracked job. In any case, such an orphan callback needs to be resolved manually.

#### Business Event Services {#adapter-business-event-services}

The adapter can publish two business events: **TaskAccepted** and **TaskCompleted**.

{{< figure src="/attachments/howto/integration/async-job-orchestration/adapter-business-event-service.png" alt="ExternalTask_Events business event service in Studio Pro with TaskAccepted and TaskCompleted definitions published through the PBE_TaskAccepted and PBE_TaskCompleted entities" >}}

Every business event is required to carry a **MessageId** for deduplication and a **CorrelationId** to resolve the **ExternalTask** tracked by the domain app.

{{< figure src="/attachments/howto/integration/async-job-orchestration/adapter-business-event-entities.png" alt="PBE_TaskAccepted entity with MessageId and CorrelationId attributes, and PBE_TaskCompleted entity with MessageId, CorrelationId, CompletionStatus, and Outcome attributes" >}}

#### Microflows {#adapter-microflows}

The adapter has microflows designed similarly to those in the domain app that handle the other side of the task management. **HandleBE_TaskAccepted** and **HandleBE_TaskCompleted** publish **TaskAccepted** and **TaskCompleted** business events respectively. Both microflows first retrieve the **TaskCorrelation** object by **VendorJobId**. If none is found, they register an **OrphanCallback** from the external system to be resolved later. If the correlation is found, its **CorrelationId**, together with a generated unique **MessageId** and an optional payload, is written to the business event objects to be published.

{{< figure src="/attachments/howto/integration/async-job-orchestration/adapter-handle-task-accepted.png" alt="Adapter HandleBE_TaskAccepted microflow that retrieves the TaskCorrelation by VendorJobId, creates an OrphanCallback when none exists, and otherwise creates and publishes a PBE_TaskAccepted business event" >}}

{{< figure src="/attachments/howto/integration/async-job-orchestration/adapter-handle-task-completed.png" alt="Adapter HandleBE_TaskCompleted microflow that retrieves the TaskCorrelation by VendorJobId, creates an OrphanCallback when none exists, and otherwise creates and publishes a PBE_TaskCompleted business event" >}}

Handling of consumed business events from the domain app is done by the reusable **SUB_Handle_Command** microflow. It follows logic similar to **SUB_Handle_Event** in the domain app: it creates a new **ProcessedMessage** if this is the first time the message is being processed, or returns from the microflow otherwise; it finds the **TaskCorrelation** if it already exists and updates its **ProcessingStage**, or creates a new **TaskCorrelation** object if this is the first submission of the task.

{{< figure src="/attachments/howto/integration/async-job-orchestration/adapter-sub-handle-command.png" alt="SUB_Handle_Command microflow that checks for an already processed message, creates a ProcessedMessage, and then either changes the ProcessingStage of an existing TaskCorrelation or creates a new one" >}}

Now you can import the AsyncAPI YAML for **ExternalTask_Commands** from the domain app.

The **SUB_Handle_Command** microflow is then called by the **HandleBE_SubmitTask** and **HandleBE_CancelTask** microflows that are added during subscription to the corresponding business events.

{{< figure src="/attachments/howto/integration/async-job-orchestration/adapter-handle-submit-task.png" alt="Adapter HandleBE_SubmitTask microflow calling SUB_Handle_Command, with the Edit Call Microflow dialog showing the parameter mapping from the PBE_SubmitTask business event" >}}

{{< figure src="/attachments/howto/integration/async-job-orchestration/adapter-handle-cancel-task.png" alt="Adapter HandleBE_CancelTask microflow calling SUB_Handle_Command, with the Edit Call Microflow dialog showing the parameter mapping from the PBE_CancelTask business event" >}}

### External System {#external-system}

The sections above cover only the communication between the domain app and the adapter. The way the adapter works with the external system depends on the capabilities of the latter. There are two general cases:

* The external system has event broker capabilities, which allows fully event-driven communication.
* The external system can only use REST calls or OData actions for request submission and task completion callbacks.

#### Event-Driven Communication with the External System

This is the best practice, since the fully event-driven approach provides at-least-once delivery guarantees that you would otherwise need to build yourself, and allows the solution to scale more easily.

The fully event-driven approach also allows the adapter to be integrated into the domain app for small and simple systems. The main role of the adapter is to mitigate the shortcoming of the lack of event-driven communication between the domain app and the external system. For example, the adapter can significantly reduce the risk of message duplication by introducing an additional layer that takes care of processing the domain app messages. Note that the duplication risk can never be zero.

For more complex systems, using the adapter together with event-driven communication is the recommended approach. It adds an additional data resilience and security isolation layer, and ensures the scalability of the system.

The approach for organizing fully asynchronous communication between the adapter and the external system is exactly the same as for the communication between the domain app and the adapter. If the external system is also a Mendix app, the setup becomes even more similar with the use of Business Events:

* The adapter publishes **SubmitTask** and **CancelTask** events with a unique **MessageId**.
* The external system deduplicates on **MessageId**, verifying that there is no **ProcessedMessage** yet. This means the system has to store a list of already processed messages. For more details on the purpose and management of the processed messages, see [Message Deduplication and Retention](#deduplication).
* The external system starts the work and publishes **TaskAccepted** and later **TaskCompleted** events with the results.
* The adapter consumes the callback events from the external system and relays them to the domain app.

In this architecture, only the adapter is aware of the external system authentication and **VendorJobId**. The domain app does not have access to them.

If the adapter or external system fails, it might require reconciliation of already executed events. This can be done by replaying the already received messages. This is where a unique **MessageId** is very important to prevent the same work from being done more than once. If the **CorrelationId** is lost, however, a manual reconciliation is needed, where the operator correlates the records manually.

#### REST or OData Communication with the External System

Not all systems have event broker capabilities. However, almost every system has REST or OData support for synchronous request/response communication with the outer world. If this is the case, the communication between the adapter and the external system becomes one way: the adapter sends a REST call to the external system to start the work, and later the external system performs a similar REST call back to the adapter to communicate the acceptance or completion of the work. In this pipeline, certain aspects that are managed by the event broker now have to be either accepted as costs or built manually:

* At-least-once delivery – usually guaranteed by the event broker, while a REST call can simply fail and an additional retry mechanism is needed to ensure the delivery. This concerns both the incoming calls to the external system and the callbacks from the external system.
* Buffering and load balancing – much easier to set up and manage with an event broker.
* Additional debugging capabilities such as message replay.

{{% alert color="info" %}}
Message deduplication has to be implemented by the REST-based system as well, to ensure the same message is not processed more than once. If the external system does not support deduplication, having an adapter is strongly recommended to reduce the risk of duplication.
{{% /alert %}}

The setup for the REST-based communication is similar to the event-based one, with the major difference that instead of a business event service you need to create a published REST service in the adapter, providing the endpoint configuration beforehand, and a consumed REST service linking it to a handler microflow.

## Message Deduplication and Retention {#deduplication}

Every message object in this system contains a mandatory **MessageId** attribute. The main purpose of the **MessageId** is to ensure idempotency: processing the same message multiple times yields the same effective outcome as processing it once. For example, a redelivery of the same task submission request does not start a duplicate job.

A record of every **MessageId** that was consumed is stored upon its first arrival. Later, every new message is checked against the record to see whether it is the first delivery or a duplicate. It is not necessary to store the whole message; it only requires the **MessageId** for deduplication and **ProcessedAt** for automatic cleanup.

It is important to take into consideration that the database can grow indefinitely with this approach. To prevent this, a common practice is to define the retention window for storing the received messages. The exact retention period should be based on the maximum plausible redelivery window, plus some safety margin. For example, if the system guarantees the messages are not redelivered after more than 7 days, it is reasonable to set the retention period to 14 days. If the system cannot guarantee the maximum redelivery window, or if for some reason a message is redelivered much later than the window, it can result in duplicate message processing.

Mendix Business Events accumulates messages that it failed to deliver. The messages are retried at increasing intervals for 48 hours and fail after that time. Therefore, a reasonable retention period is 96 hours.

### Automatic Cleanup

Mendix scheduled events are a good choice for regularly running a cleanup microflow. For example, you can configure a scheduled event with a 96-hour interval that executes the following microflow:

{{< figure src="/attachments/howto/integration/async-job-orchestration/cleanup-processed-messages.png" alt="Cleanup microflow with a while loop that retrieves a list of expired ProcessedMessage objects, exits when the list is empty, and otherwise deletes the objects in the list" >}}

The cleanup microflow retrieves **ProcessedMessage** objects in batches of 1000, using the XPath constraint `[ProcessedAt < '[%CurrentDateTime%] - 96 * [%HourLength%]']` to select only those processed more than 96 hours ago. It then deletes the retrieved objects, or exits the loop when the list is empty. Indexing the **ProcessedAt** attribute is recommended for better performance.

## Read More

* [Mendix Business Events](/appstore/services/business-events/)
* [Scheduled Events](/refguide/scheduled-events/)
