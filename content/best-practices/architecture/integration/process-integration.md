---
title: "Process Integration"
parent: "integration-overview"
menu_order: 4
draft: true
---

## 1 What Is Process Integration?

Process integration is a wide and important area that promises automation, digitization, and operational improvement. Often there is a significant business case for this type of IT development, where companies can gain on their competition by being more
efficient, running lower costs, and providing better and faster service to customers. 

When a business process runs across several systems, there will be some type of process integration. There are many ways this can be done:

* **Business event Integration**: Work finishes in one App or Thing. The next App is notified to start the next step of the process automatically. This avoids e.g. sending emails and/or re-typing information into another system.
* **Workflow integration**: A user works in one App and then continues the same process in another App, using e.g. a Deep-Link. By allowing this integration we can have specialized Microservices or Apps that evolve separately, but for the user it seems to be the same system. Refer to Workflow Itnegration Use Case.
* **Case Management**: Human workflow in phases maintaining a “case”-object with data and status. The case is routed to different user group baskets, and/or sub-cases are created and completed in other systems. This is the best way to support a cross-departmental process, where several user-groups are involved with approvals and coordination.
* **Process orchestration**: A system actively orchestrates a process across several systems, keeping track of status, re-trying when required, and escalating to human workflow when required. This is useful to automate transaction processing for e.g. banks or provisioning a bill-of-materials and/or when a business event should lead to updates in several systems in parallel.
* **State Engine/Event Manager**: Passively gathering events related to a process that runs across several systems, to determine that the process finishes correctly, and taking action when something is wrong. This is useful to monitor and manage a chain of Business events (e.g. packages for Track & Trace), or for high volume asynchronous process orchestration.

I.e. quite a significant part of all integration and automation is related to process integration. The areas which are **not** in this category are e.g. BI, DWH, Master data Management, and most IoT solutions (that are just collecting data).

## 2 Business Events – Process Flow

The most common process integration is probably Business Events, i.e. some part of the process finishes in one App, which should trigger something to happen in the next App or system of Apps.

The “Business Event” messages can be transferred in in different ways depending on the requirements, the most common options are:

-   **Use REST Pull from the next system,** which is the simplest and most commonly used option, which works well for a majority of situations
-   **Use Message Broker in the middle,** or any other external queuing system when there is High Volume, Large Distance or Poor Network:
-   **Use REST Push end-to-end** when the destination system should validate the     business event, especially when there is an end-user working in the source system and that can correct information directly

Using a real business example:

1.  An Order is completed in the Ordering App
2.  A message goes to the Packaging App, where shipment is prepared
3.  Packaging App, calls the Shipment App, that sends the shipment
4.  Shipment App calls Notification App, that sends a message to the customer.

The figure below shows the three main cases, and after that each case is
described:

![](process-integration/2e8b281d4d37acfc134d721f220c6457.png)

1.  **Simple and low volume**: **Use REST Pull** from the next system:

    1.  App 1 finishes a piece of work and a flag is set or an internal event is
        created and stored internally. App 2 polls App 1 to ask for new work.
        When it has correctly picked up a piece of work it re-sets the flag.
    2.  If a functional exception occurs in App 2, it may need to notify App 2
        and ask for a correction using a separate service

2.  **High Volume, Large Distance or Poor Network**: **Use Message Broker** in
    the middle, or any other external queue.

    1.  App 1 finishes a piece of work and pushes an event to the external
        queue. App 2 polls the queue to ask for new work, committing from queue
        when safely stored
    2.  If a functional exception occurs in App 2, we may need to notify App 2,
        which then often also goes via a response queue.
    3.  To minimize the number of errors in destination, an XSD validation can
        be made in App 1 before sending. This gives a technical validation of
        the message
    4.  See also *IoT integration* and *State Engines* for larger scale

3.  **Validation required in Destination**: **Use REST Push** from the next
    system:

    1.  App 1 finishes a piece of work pushes the business event forward, which
        is a good idea when a human worked on the case. App 2 needs to verify
        that the data is correct. By doing this synchronously the user can
        correct data directly.

### 2.1 Selecting the Best Option

* Consider if REST Pull would work well, and if it does use this option.
	* If the source is down, there are no events created
	* If destination is down, it cannot process events and will catch up later
	* I.e. this is quite fault tolerant
* If REST Pull for some reason is not a good option, consider an external queue or message broker. E.g. if it is IoT, logging or other true fire and forget messaging, then queues or Kafka are more efficient 
	* Queues technically decouple the Apps, while they are still functionally dependent on the same message definition.
* Consider if the Process or End User that creates the event should be aware of the result of the transaction in the next system, then use REST Push
	* This is technically coupled, and the source process or user may not be able to complete the transaction if the destination system is down.
	* Consider a circuit breaker for this, so the source system is aware when the target is down, and may disable this option in the UX

## 3 Workflow Integration

Mendix is often used as a Workflow tool, where a business process is implemented in a Mendix App, avoiding Excel, email trails and other non-structured human processes.

The Mendix App can also be a simplified UX on top of SAP or legacy systems, or it could be a departmental “business portal”, that allows users to work in one single App instead of opening 10-20 different applications.

With *Workflow integration* we mean that human work on the same overall process is handled across several Apps via UX links (usually Deep-links), usually without the user even knowing about it. Sometimes we need to copy data behind the scenes, so the user has new data when coming back to the original App.

The pattern is a very common *Microservices* Patterns: The process is so large and/or contains functionally separate parts, that is makes sense to split the “system” in a set of Microservices.

Separate user-groups that work on this process, and they sometimes need to work in more than one of the functional areas. This leads to creation of a Dashboard App (or Portal or Landing Page), where all user-groups log in and where they have the right to access different parts of the process.

The Dashboard App has overviews, work-baskets, overall workflow. Sometimes there is a separate Shared Data App (SDA) for external access to the combined data set and then the SDA handles import and management of reference data. If there is no SDA, the reference data is also handled by the Dashboard which already has workflow.

![](process-integration/99ea423e2a7995c6710712a9122f159b.png)

### 3.1 Deep Linking & Updating Data

In the figure above there is also a Deep-link combined with a REST Pull interface which is common in cases where the same user works across two Apps in one single workflow.

This could be an Ordering App, that has a Sub-App for each Product configuration, which is common in some Insurance case that have very complex products.

In the picture above the Customer App is separated from the Ordering App, because managing customer data is quite different from ordering, and because customer data is used and shared across all the phases in this system. The Customer App has a lot of validation and logic, contained in both the UX and Micro-flows we do not want to copy to the other Apps,

In this use-case the same user enters both customer information (if new) and the ordering information. We then get a workflow across two Apps where data needs to be copied directly after the transaction in the 2nd App, to be used in the Ordering App directly after created in the Customer App. 

1.  Create Order in Order App
2.  Find Customer in Customer App and allow user to select it in the Order App 
3.  If not found: Click *Create User* in Ordering App UX, that via a Deep-Link goes to the Customer App UX
4.  A customer is created and stored in the Customer App, after which we link back to the same context/order in the Ordering App.
    1.  Note that data should saved in the Order App to be available when coming
        back, or alternatively choosing the customer is made the first step in
        the Ordering process.
5.  Before we hand over control to the user in the Ordering App, we get the Customer data and store the relevant fields on the Order, and display them  in the Ordering UI.

![](process-integration/b008ebf323f96d188e5beb8eb4ead4f1.png)

The figure shows how one step of the process is done in another App, while the customer usually is un-aware that he is using two separate Apps.

## 4 Process Orchestration

In some (relatively rare) cases a process finishes, and several systems need to be updated at the same time. The process runs over several systems and we need a place that knows what the current status is and what to do next.

This pattern is similar to what BPM engines do, and it works for highly automated and well-defined processes. Some time ago BPM was considered the way to solve also human processes, but that is hard since people usually work on several tasks and think in phases.

Process Orchestration is an adequate solution for deterministic processes across systems or between companies with exact and defined input, output and exception management. A great example is a Swift engine that almost all banks have to handle transaction messaging in and out of the bank in a standard supported way.

The other problem with processes and work is that depending on the sector and the type of work, there are different ways of interacting and working. The consequence is that it’s often hard to fit real work onto specific BPM and Case Management engines.

Mendix is a platform to build processes and work on. It provides a good alternative to pre-defined BPM and Case management systems. The advantage is that automation and the case management can be adapted to the specific problem to solve.

In the figure below, the Support App has been given the task of *Process Orchestration* for the operationalization of a newly sold product. The reason was: 1) The Support App already deals with cases and distribution of tasks, 2) If there is an issue the customer is likely to call Support.

![](process-integration/20b9dfca8ea45d36f2aa420ce5891fe8.png)

## 5 Case Management

Human work is mostly done “when possible” in “phases” where certain pre-conditions are completed first, leading to Case management solutions. 

When there are long running cross-departmental processes, with many decision points and approvals, it makes sense to treat it as a Case. The Case contains a set of data that is enriched through the process and the Case Management tool manages the Case through a set of Phases where several tasks can be done simultaneously.

A simple example is a Service Desk or Ticket management system, that manages the ticket-Case through several steps. It can be re-assigned to other groups or users within the same App, or as send out sub-cases to other Apps to complete.

A more complex process could be a Patent application or Corporate loan or Bond issuance application. The Case goes through several stages/phases over 6-24 months. Within each phase a significant number of tasks are completed; some in parallel, some requiring a set of other tasks to be completed first, some automated, some sent out to other systems for completion, some done by a human in the Case system itself.

The figure below shows a typical situation. A Case is triggered from the outside or from a Core system. The Intake phase collects and validates required data and the case is planned. After that a due diligence or research phase done in an App specializing in that. Then a decision maker in the Case system can decide to proceed and create a proposal, which requires document creation and legal capabilities. After that a negotiation phase specializing in internal and external collaboration. New Proposals can be created. In the end a Contract is signed and other systems are initiated, including the Core system, similar to Process orchestration.

![](process-integration/ead44dfe290dfb3a10200fc0108f5cdb.png)

## 6 Passive Process Control & State Engines

In certain situations, active process orchestration is not recommended. This is typically the case when:

1.  There is very high volume
2.  Systems are distributed or have un-clear up-times
3.  Any other reason for using an event driven architecture

It’s hard to make synchronous calls in these situations, so the “phases” in the process are using some queueing system or Message broker as transportation mechanism.

To make sure that messages are not lost and processes not half-way finished, and to provide status like in Track & Trace, there is usually an Event Manager and/or a State Engine that passively monitors the overall process and sets of alarms when some phase is missing or something seems to go wrong.

See the section *State Engines, Event Managers*, in *Event driven architectures.* Mendix makes very good cases to handle steps in straight-through processing Apps, and can act as Event Manager for most cases except when the volumes are extreme.

![](process-integration/ad53661fa341bde24503ba5f2320e772.png)

## 7 Summary

Process integration is maybe one of the most important things companies should focus on to automate things, digitize processes and make things leaner and more efficient.

Mendix provides a great basis for these architectures, since the implementer is not forced into a specific way of looking at processes. Rather process automation and case management support, or straight through processing with exceptions can be adapted exactly to the problem that needs to be solved. 

Building these solutions in a Microservices way, using Mendix Apps, saves customers large amounts in reduced workload for personnel and leaves them flexible to adapt to changing circumstances inside and outside the company.
