---
title: "Best Practices for Asynchronous Job Orchestration"
linktitle: "Asynchronous Job Orchestration"
url: /refguide/asynchronous-job-orchestration/
weight: 20
description: "Describes best practices for orchestrating long-running asynchronous jobs between Mendix apps and external systems."
---

## Introduction

Mendix provides an extensive toolset for integration between multiple systems, such as REST, OData, or Business Events. You can use these building blocks to organize secure, reliable, and synchronous or asynchronous communication, such as sending requests, listening to events, or transferring data.

This document focuses on a specific use case where one system hands work to another system and observes its completion asynchronously. It assumes long-running external jobs that could fail or be interrupted. A typical case is submitting a request to an external system where completion might take hours or days.

## Prerequisites

Make sure you have access to the following Studio Pro features:

* [Business event services](/refguide/business-event-services/) – available in Studio Pro [9.18](/releasenotes/studio-pro/9.18/) and above. They also require the [Mendix Business Events](/appstore/services/business-events/) module from Mendix Marketplace.
* The [Notify Workflow](/refguide/notify-workflow/) microflow activity – available in Studio Pro [10.0](/releasenotes/studio-pro/10.0/) and above.
* [Notification](/refguide/notification/) boundary events – available in Studio Pro [11.11](/releasenotes/studio-pro/11.11/) and above.

## Architecture Overview

This document describes the recommended approach. In some cases, it is reasonable to deviate from it. For example, for small and simple systems that only use Mendix apps, you can combine the domain app and the adapter. The sections below describe the trade-offs of these architectural decisions.

### Layers

The system consists of the following layers:

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/architecture-layers.png" alt="Component diagram showing the domain app and adapter Mendix apps communicating through an event broker, and the adapter communicating with the external system through an event broker or REST" >}}

* Domain app – a Mendix app that holds business logic. It orchestrates the processes running inside the app itself and in various external systems.
* Adapter – a Mendix app that manages the communication between the domain app and the external system. An adapter adds overhead, because it is a separate app that you must build and manage. If there is only a single app or performance is critical, you can include the adapter functionality in the domain app instead. However, an adapter also brings the following advantages, which is why this architecture includes it:

    * Promotes loose coupling between the domain app and the external system, which makes it easier and safer to develop the apps independently.
    * Allows better control over integration boundaries, such as security.
    * Helps to manage load redistribution in high-load systems.

* External system – any system (including a Mendix app) that does the work. This work is typically a long-running job that produces decisions, data, or both.
* Event broker – for event-driven, asynchronous communication between the domain app and the adapter, and optionally between the adapter and the external system. This document uses Mendix Business Events, which the Mendix Event Broker can provide for apps running in Mendix Cloud, or a local broker such as Kafka.

### Use Case: Observing the Completion of a Long-Running Task

The flow to build is as follows:

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/long-running-task-flow.png" alt="Sequence diagram of the domain app submitting a task to the adapter, the adapter forwarding it to the external system and acknowledging acceptance, and the external system notifying completion later" >}}

1. The domain app submits a task with a payload.
2. The adapter forwards the task to the external system.
3. The adapter acknowledges that the task is accepted and communicates it to the domain app.
4. After a certain time, the external system completes the task and notifies the adapter.
5. The adapter sends the task completion event to the domain app.

This flow also handles the following scenarios:

1. The adapter or external system is down at the moment of the request, or goes down mid-execution. The domain app can escalate to the responsible party when the acceptance or completion deadline is exceeded.
2. The external system refuses work or fails during execution. The adapter can relay the error message back to the domain app.
3. The domain app sends a cancellation signal.

The following topics are out of scope: handling more than one task type, integrating with multiple external systems, restarting a failed task, security configuration, and message schema versioning.

## Configuration

### Shared Elements

The domain app and the adapter can share certain domain model entities and microflows related to message processing. You can extract them into a separate module and reuse it in both apps. Examples are the **ProcessedMessage** entity and the **SUB_Handle_Event** microflow. To keep each layer's specification complete, this document describes every component and indicates which ones you can share.

{{% alert color="info" %}}
The names of domain model entities, attributes, microflows, and services are suggestions based on best practices in distributed computing and Mendix development. None of them are mandatory, and you can use your own terminology instead.
{{% /alert %}}

### Domain App

The domain app is a Mendix app that orchestrates long-running tasks executed by external systems. In this example, it communicates only with the adapter to do the following:

* Publish new task requests
* Cancel the execution of existing tasks
* Listen to task completion events

#### Domain Model

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/domain-app-domain-model.png" alt="Domain model of the domain app with the ExternalTask, ProcessedMessage, and OrphanEvent entities and their attributes" >}}

The **ExternalTask** entity is used for tracking a long-running job in the external system.

* **CorrelationId** is a UID owned by the domain app. The domain app creates it before submitting a new task. The **CorrelationId** provides a stable identifier that relates all requests, events, and callbacks to the same business operation.
* **State** (**Requested**, **Accepted**, **Succeeded**, **Failed**, **Canceled**) reflects the last available execution state of an external job. It is updated when the domain app receives an event from the adapter.
* **ExecutionDeadline** indicates the time to escalate if the task is not completed yet.
* **Input** is a payload sent to the external job that contains the required parameters to start and execute the job. These parameters can include the job name and context data, such as object IDs, timestamps, and user input. The shape of the input is app-specific. It can be a list of comma-separated values or a stringified JSON structure. For example, `job_name=my_first_task,target_group=management,item_id=295128537,deadline=1790689440`.
* **Outcome** is a payload received upon the completion of the task. Its shape is also app-specific, and it can contain either the result of the external job or an error message when the job failed.

The **ProcessedMessage** entity records messages from the adapter that have already been processed. It ensures that the same message is not processed more than once in case of a redelivery. For more details on its purpose and management, see [Message Deduplication and Retention](#deduplication). It requires only one attribute:

* **MessageId** is a UID generated by the adapter in the same transaction that publishes the message.

The remaining attributes are optional and primarily used for auditing:

* **ProcessedAt** is the time when the message was received.
* **MessageType** (**TaskAccepted**, **TaskCompleted**) is the event type for which the message was sent.

The **OrphanEvent** entity is used to store events received from the adapter that could not be associated with any existing **ExternalTask** by their **CorrelationId**. An orphan event usually indicates a missing **ExternalTask** object or a mistake in the **CorrelationId** value sent by the adapter. Such events need to be investigated and resolved manually.

#### Workflows

A Mendix workflow is a top-level organization facilitator designed to handle long-running tasks. The following example is a reusable workflow that takes an **ExternalTask** as its context object. You can add this workflow to one or several processes (other workflows) as a **Call workflow** activity. The workflow does the following:

* It calls **HandleBE_SubmitTask**, which in turn generates a **CorrelationId** if it does not exist yet and publishes a **SubmitTask** business event for the adapter.
* After the submission, it schedules a non-interrupting timer boundary event that triggers an escalation microflow if the execution deadline is exceeded, for example, to notify the responsible person or perform automatic actions. You can handle other types of deadlines, such as an acceptance deadline, in a similar way. This example omits them for simplicity.
* The workflow remains **In Progress** until it receives a completion notification.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/domain-app-task-workflow.png" alt="Workflow with an ExternalTask context object that publishes SubmitTask, waits for a task completed event, and has boundary events for a deadline exceeded escalation and a cancellation request" >}}

Parent workflows that call this workflow wait for it to finish before continuing. The following example is a process that sequentially starts two asynchronous jobs and waits for them to finish. Every sub-workflow call requires a separate **ExternalTask** context object to submit and track its own asynchronous job instance. You can pass this **ExternalTask** to the sub-workflow call through an association to the parent workflow context object. In this example, the parent workflow has a **WorkflowContext** entity with **WorkflowContext_ExternalTask_A** and **WorkflowContext_ExternalTask_B** associations.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/domain-app-parent-workflow.png" alt="Parent workflow calling two sub-workflows, External Task A and External Task B, in sequence, alongside a WorkflowContext entity with two associations to ExternalTask" >}}

#### Business Event Services

The domain app can publish two business events: **SubmitTask** and **CancelTask**.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/domain-app-business-event-service.png" alt="ExternalTask_Commands business event service in Studio Pro with SubmitTask and CancelTask definitions published through the PBE_SubmitTask and PBE_CancelTask entities" >}}

Every business event must carry a **MessageId** for deduplication and a **CorrelationId** to resolve the **TaskCorrelation** tracked by the adapter.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/domain-app-business-event-entities.png" alt="PBE_SubmitTask entity with MessageId, CorrelationId, and Input attributes, and PBE_CancelTask entity with MessageId, CorrelationId, and Reason attributes" >}}

#### Microflows

Microflows are the main executors of the logic in the app. They verify message fields, retrieve and update relevant data, and publish or handle consumed business events.

The following two microflows, **HandleBE_SubmitTask** and **HandleBE_CancelTask**, publish **SubmitTask** and **CancelTask** business events respectively. Both generate a unique **MessageId** and create the business event objects to publish.

The **HandleBE_SubmitTask** microflow also generates and sets the **CorrelationId** on the given **ExternalTask** object. You can call this microflow directly from one or several workflows. The **CorrelationId** acts as a resubmission guard: when it is not set, the task is new and is submitted; when it is already set, the task has already been submitted and the microflow does nothing.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/domain-app-handle-submit-task.png" alt="HandleBE_SubmitTask microflow that checks whether a CorrelationId exists, generates a random hash for the CorrelationId and MessageId, creates a PBE_SubmitTask object, and publishes the business event" >}}

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/domain-app-handle-cancel-task.png" alt="HandleBE_CancelTask microflow that generates a random hash for the MessageId, creates a PBE_CancelTask object from the CorrelationId and Reason parameters, and publishes the business event" >}}

A reusable **SUB_Handle_Event** microflow handles the consumed business events, **TaskAccepted** and **TaskCompleted**, in a similar way. First, it checks whether a business event with the given **MessageId** has already been processed. If so, it is a redelivery and the microflow returns empty to indicate that no action follows. If the message has not been processed yet, it is saved as a **ProcessedMessage**, the **ExternalTask** is retrieved by **CorrelationId**, and if one is found, its state is updated and it is returned from the microflow. If it finds no **ExternalTask** with the given **CorrelationId**, it stores the message as an **OrphanEvent** to be resolved later.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/domain-app-sub-handle-event.png" alt="SUB_Handle_Event microflow that checks for an already processed message, creates a ProcessedMessage, retrieves the ExternalTask by CorrelationId, and either changes its state or creates an OrphanEvent" >}}

After you import the AsyncAPI YAML for **ExternalTask_Events** from the adapter, you can subscribe to the **TaskAccepted** and **TaskCompleted** business events, which adds the **HandleBE_TaskAccepted** and **HandleBE_TaskCompleted** microflows, respectively.

The **HandleBE_TaskAccepted** microflow maps the required parameters, such as **MessageId**, **CorrelationId**, and **Outcome**, sets the **ExternalTaskState** to **Accepted** and the **ProcessedMessageType** to **TaskAccepted**, and calls the **SUB_Handle_Event** microflow.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/domain-app-handle-task-accepted.png" alt="HandleBE_TaskAccepted microflow calling SUB_Handle_Event, with the Edit Call Microflow dialog showing the parameter mapping from the PBE_TaskAccepted business event" >}}

The **HandleBE_TaskCompleted** microflow maps the parameters in a similar way, setting the **ExternalTaskState** to **Succeeded**, **Failed**, or **Canceled** and the **ProcessedMessageType** to **TaskCompleted**. The handler also retrieves all workflows that use the **ExternalTask** as their context object and notifies them about the task completion.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/domain-app-handle-task-completed.png" alt="HandleBE_TaskCompleted microflow calling SUB_Handle_Event, retrieving workflows for the ExternalTask and notifying them, with the parameter mapping expression that converts the completion status into an ExternalTaskState" >}}

### Adapter

The adapter is a Mendix app that manages the communication between the domain app and the external system. This section focuses on the part where the adapter connects with the domain app. The communication between the adapter and the external system is described in [External System](#external-system).

#### Domain Model {#adapter-domain-model}

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/adapter-domain-model.png" alt="Domain model of the adapter with the TaskCorrelation, ProcessedMessage, and OrphanCallback entities and their attributes" >}}

The **TaskCorrelation** entity stores a reference between the **CorrelationId** received from the domain app and the **VendorJobId** received from the external system. **ProcessingStage** (**Received**, **Submitted**, **Completed**) indicates the execution stage of the external job. You can use it for auditing, retrying after a failure, or filtering records to prune.

The **ProcessedMessage** entity has the same goal as the entity with the same name in the domain app: to ensure that the same message is not processed more than once. You can extract the **ProcessedMessage** entity into a separate module and reuse it in both the domain app and the adapter.

The **OrphanCallback** entity has the same role as the **OrphanEvent** entity in the domain app. However, it stores events that came from the external system and do not have a **TaskCorrelation** with the corresponding **VendorJobId**. Depending on the external system configuration, these can also be callbacks, hence the name. This can happen if a **TaskCorrelation** object was dropped or the external system sent an event for an untracked job. In any case, you need to resolve such an orphan callback manually.

#### Business Event Services {#adapter-business-event-services}

The adapter can publish two business events: **TaskAccepted** and **TaskCompleted**.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/adapter-business-event-service.png" alt="ExternalTask_Events business event service in Studio Pro with TaskAccepted and TaskCompleted definitions published through the PBE_TaskAccepted and PBE_TaskCompleted entities" >}}

Every business event must carry a **MessageId** for deduplication and a **CorrelationId** to resolve the **ExternalTask** tracked by the domain app.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/adapter-business-event-entities.png" alt="PBE_TaskAccepted entity with MessageId and CorrelationId attributes, and PBE_TaskCompleted entity with MessageId, CorrelationId, CompletionStatus, and Outcome attributes" >}}

#### Microflows {#adapter-microflows}

The adapter has microflows, designed similarly to those in the domain app, that handle the other side of the task management. **HandleBE_TaskAccepted** and **HandleBE_TaskCompleted** publish **TaskAccepted** and **TaskCompleted** business events respectively. Both microflows first retrieve the **TaskCorrelation** object by **VendorJobId**. If none is found, they register an **OrphanCallback** from the external system to be resolved later. If the correlation is found, its **CorrelationId**, together with a generated unique **MessageId** and an optional payload, is written to the business event objects to be published.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/adapter-handle-task-accepted.png" alt="Adapter HandleBE_TaskAccepted microflow that retrieves the TaskCorrelation by VendorJobId, creates an OrphanCallback when none exists, and otherwise creates and publishes a PBE_TaskAccepted business event" >}}

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/adapter-handle-task-completed.png" alt="Adapter HandleBE_TaskCompleted microflow that retrieves the TaskCorrelation by VendorJobId, creates an OrphanCallback when none exists, and otherwise creates and publishes a PBE_TaskCompleted business event" >}}

A reusable **SUB_Handle_Command** microflow handles the consumed business events from the domain app. It follows logic similar to **SUB_Handle_Event** in the domain app. It creates a new **ProcessedMessage** if this is the first time it processes the message, or returns from the microflow otherwise. It then finds the **TaskCorrelation** and updates its **ProcessingStage** if the **TaskCorrelation** already exists, or creates a new **TaskCorrelation** object if this is the first submission of the task.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/adapter-sub-handle-command.png" alt="SUB_Handle_Command microflow that checks for an already processed message, creates a ProcessedMessage, and then either changes the ProcessingStage of an existing TaskCorrelation or creates a new one" >}}

Now you can import the AsyncAPI YAML for **ExternalTask_Commands** from the domain app.

The **HandleBE_SubmitTask** and **HandleBE_CancelTask** microflows, which are added during subscription to the corresponding business events, then call the **SUB_Handle_Command** microflow.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/adapter-handle-submit-task.png" alt="Adapter HandleBE_SubmitTask microflow calling SUB_Handle_Command, with the Edit Call Microflow dialog showing the parameter mapping from the PBE_SubmitTask business event" >}}

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/adapter-handle-cancel-task.png" alt="Adapter HandleBE_CancelTask microflow calling SUB_Handle_Command, with the Edit Call Microflow dialog showing the parameter mapping from the PBE_CancelTask business event" >}}

### External System {#external-system}

The previous sections cover only the communication between the domain app and the adapter. How the adapter works with the external system depends on the capabilities of the external system. There are two general cases:

* The external system has event broker capabilities, which allows fully event-driven communication.
* The external system can only use REST calls or OData actions for request submission and task completion callbacks.

#### Event-Driven Communication with the External System

This is the recommended approach. A fully event-driven approach provides at-least-once delivery guarantees that you would otherwise need to build yourself, and it allows the solution to scale more easily.

A fully event-driven approach also allows you to integrate the adapter into the domain app for small and simple systems. The main role of the adapter is to mitigate the shortcoming of the lack of event-driven communication between the domain app and the external system. For example, the adapter can significantly reduce the risk of message duplication by adding a layer that processes the domain app messages. The duplication risk can never be zero.

For more complex systems, Mendix recommends using the adapter together with event-driven communication. It adds a data resilience and security isolation layer, and it supports scalability.

Fully asynchronous communication between the adapter and the external system is organized the same way as communication between the domain app and the adapter. If the external system is also a Mendix app, the setup is even more similar when you use Business Events:

* The adapter publishes **SubmitTask** and **CancelTask** events with a unique **MessageId**.
* The external system deduplicates on **MessageId** by verifying that there is no **ProcessedMessage** yet. This means the system must store a list of already processed messages. For more details on the purpose and management of processed messages, see [Message Deduplication and Retention](#deduplication).
* The external system starts the work and publishes **TaskAccepted** and later **TaskCompleted** events with the results.
* The adapter consumes the callback events from the external system and relays them to the domain app.

In this architecture, only the adapter knows the external system authentication and **VendorJobId**. The domain app has no access to them.

If the adapter or external system fails, you might need to reconcile already executed events. You can do this by replaying the already received messages. A unique **MessageId** prevents the same work from being done more than once. If the **CorrelationId** is lost, however, you need to reconcile manually by correlating the records yourself.

#### REST or OData Communication with the External System

Not all systems have event broker capabilities. However, almost every system supports REST or OData for synchronous request/response communication with other systems. In this case, communication between the adapter and the external system is one way: the adapter sends a REST call to the external system to start the work, and later the external system sends a similar REST call back to the adapter to communicate acceptance or completion of the work. In this pipeline, you must either accept certain aspects that an event broker manages as costs or build them manually:

* At-least-once delivery – the event broker usually guarantees it, while a REST call can fail and needs an additional retry mechanism to ensure delivery. This applies to both the incoming calls to the external system and the callbacks from the external system.
* Buffering and load balancing – much easier to set up and manage with an event broker.
* Additional debugging capabilities, such as message replay.

{{% alert color="info" %}}
The REST-based system must also implement message deduplication to ensure the same message is not processed more than once. If the external system does not support deduplication, use an adapter to reduce the risk of duplication.
{{% /alert %}}

The setup for REST-based communication is similar to the event-based setup. The major difference is that instead of a business event service, you create a published REST service in the adapter and configure its endpoint beforehand, and a consumed REST service linking it to a handler microflow.

## Message Deduplication and Retention {#deduplication}

Every message object in this system contains a mandatory **MessageId** attribute. The **MessageId** ensures idempotency: processing the same message multiple times yields the same effective outcome as processing it once. For example, a redelivery of the same task submission request does not start a duplicate job.

The system stores a record of every consumed **MessageId** upon its first arrival. It then checks every new message against the records to see whether it is the first delivery or a duplicate. You do not need to store the whole message. You need only the **MessageId** for deduplication and **ProcessedAt** for automatic cleanup.

With this approach, the database can grow indefinitely. To prevent this, define a retention window for storing the received messages. Base the retention period on the maximum plausible redelivery window, plus a safety margin. For example, if the system guarantees that messages are not redelivered after more than 7 days, a retention period of 14 days is reasonable. If the system cannot guarantee a maximum redelivery window, or if a message is redelivered much later than the window, the message can be processed twice.

Mendix Business Events accumulates messages that it fails to deliver. It retries the messages at increasing intervals for 48 hours, after which they fail. Therefore, a reasonable retention period is 96 hours.

### Automatic Cleanup

Mendix scheduled events are a good choice for regularly running a cleanup microflow. For example, you can configure a scheduled event with a 96-hour interval that runs the following microflow:

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/async-job-orchestration/cleanup-processed-messages.png" alt="Cleanup microflow with a while loop that retrieves a list of expired ProcessedMessage objects, exits when the list is empty, and otherwise deletes the objects in the list" >}}

The cleanup microflow retrieves **ProcessedMessage** objects in batches of 1000, using the XPath constraint `[ProcessedAt < '[%CurrentDateTime%] - 96 * [%HourLength%]']` to select only those processed more than 96 hours ago. It then deletes the retrieved objects, or exits the loop when the list is empty. For better performance, index the **ProcessedAt** attribute.

## Read More

* [Mendix Business Events](/appstore/services/business-events/)
* [Scheduled Events](/refguide/scheduled-events/)
