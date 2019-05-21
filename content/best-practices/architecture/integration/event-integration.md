---
title: "Event-Based Integration"
parent: "integration-overview"
menu_order: 4
draft: true
---

<<We have to mention IoT and Mindspere in this chapter, I will check with Roald>>

## 1 Introduction

At the moment, event-driven architectures are making their return into the mainstream of integration. This follows an increased interest in and focus on, for example, IoT solutions, distributed networks of actors, and central monitoring. Several solution providers are promoting new paradigms for managing large, distributed, high-volume event driven architectures, where Kafka is probably the most interesting new protocol.

The diagram below presents a basic event-driven integration example:

![](attachments/event-integration/ei-intro.png)

The main characteristic for event-driven integration is that the process that produces events or data does not communicate directly to the target system. Rather, it creates an “event” message that is put on a queue for asynchronous delivery. This means that the triggering process does not know if the message arrives or if there were errors in the delivery. If status or errors need to be handled in the source system, there is a need for a separate interface and a separate process or workflow for this.

Event-driven integration is important in the following scenarios:

* Integration is truly one-directional, e.g. for IoT solutions and user metrics or when updating stock tickers or on-line games
* When synchronous communication is hard to achieve, due to one of the following factors:
	* The uptime of the destination system is hard to predict
	* The destination system is far away network-wise or geographically
  	* There is high-volume, distributed, many-to-many, one-to-very-many, or very-many-to-one communication

## 2 Types of Event-Driven Integration

There are many types of event-driven integration. The main differentiators are functional or infrastructure-oriented, which determines the most appropriate queue management. The figure below shows six options for event driven integration between two Mendix apps.

![](attachments/event-integration/queue.png)

The queue management solution that is used depends on the situation, and Mendix supports almost all the options:

1. **Internal Mendix queue inside the sending app** – This is the simplest solution. It allows for the sending process in app 1 to finish, even if the target system is not up. A synchronous call is used to pick up events from the source app, see <<Service Integration, Request-Reply Pull>>
2. **Internal Mendix queue in the receiving app** –  This allows for the quick reception of many messages without processing them all at once. Accordingly, this means that peaks in volume have less effect on the receiving app.
3. **For very high volumes, a Mendix input app can be used as a queue** – This liberates the receiving app from the peak loads in an even better way. Additionally, it allows the receiving app to be redeployed easily without effecting the message flow.
4. **External queues like Rabbit MQ can be used in distributed architectures** – A queue management system handles transport over network borders and longer distances, but it requires an extra element of maintenance.
5. **ESB and message brokers can act as queues with additional mapping and routing** – ESBs also do synchronous calls and can push messages forward. If there is an ESB available and it is centrally recommended, then it can be a good option.
6. **Kafka** – This queue option is the newest and originated at LinkedIn to distribute user posts between nodes and collect user metrics. For distributed, high-volume, resilient, many-to-many solutions, Kafka is the clear choice.

The internal queues and the Mendix "Input App" require only Mendix technology. This is a clear advantage for skills and operations. External queues, ESBs, and Kafka require a Mendix adapter from the <<App Store>> and external infrastructure that needs to be deployed and maintained. If this infrastructure is already there and frequently used, the operational advantage of a pure Mendix solution is smaller. See also section <<Integration Layers>>.

## 3 Good Examples for Event-Driven

Always consider a synchronous request–reply as the standard option for integration, because it is the simplest and most robust way to integrate syetems. It is easier to think about and easier to manage errors.

Below are some examples for when Event driven and/or external queueing systems will make sense:

![](attachments/event-integration/event-use-cases.png)

1. Network Distance: Geographical distance or slow networks make direct communication impossible or unstable. For these situation an ESB or a message broker with queueing capabilities is often a good solution, bridging network issues with adapters in all regions and providing a communication line between all apps and systems. If functionally the source needs to know the status or receive errors, which is the most common situation, an second asynchronous "Status" interface is built in the opposite direction. Mendix communicates with ESBs and message brokers using REST, SOAP or using an AppStore component for specific queue-management formats.

2. High Volume: For extremely high and/or fluctuating volume, or when there are hundreds of pulishers and subscribers in a distributed network, Kafka seems to be the most efficient solution. It provide incredible resilience and many exciting new event-streaming features. But it does take expertice and tooling to manage and maintain so ideally the operationalization of Kafka is already be done. Then Mendix can then easily connect as a standard Kafka client using the Kafka AppStore Module, https://appstore.home.mendix.com/link/app/67994/ 

3. Fire & Forget: One-way communication means that you can afford to lose a message or two over time, as with stock tickers, IoT, logging messages, or non-vital notifications. It also means that the destination accepts all messages as they are. For these cases event driven queueing is a good option. If there is already an ESB or Kafka in operation, any other queue manager can be used, like SQS from AWS, MQTT on Azure or Rabbit MQ on any platform

4. Controlled Delivery: By this we meen the case described a Pull request-reply interface in <<Service Integration>>. It is functionally a business event created in the source, placed on an internal Mendix queue, picked up by the destination app(s) via a synchronous call. In the Meta-data of the queue we add a flag for each subscriber so we know who has picked up which event. We call this Controlled delivery of business events because the entire integration is handled within the two Apps. It is suitable when the two apps are close to each other on the network.

## 4 Event Streams, IoT, Logging & Metrics

### 4.1 One-Way Communication

The key to event-streams is that they only flow in one direction. A device leaving metrics in an IoT system does not expect an immediate answer to the data it ships. Additionally, there could be very many devices that are geographically distributed and shipping a lot of data. Request–reply is neither needed nor practical for inbound IoT.

Big-data integration is only the beginning of an expected explosion of new IT that will be built alongside the current IT landscape. In the coming years, Mendix and Siemens will invest heavily in this area.

### 4.2 IoT, MindSphere, Kafka

IoT, Kafka, and other event-based architecture will play an important role in the coming years. Mendix is working to incorporate Kafka into the platform, and am integration with MindSphere for IoT has been set up. Mendix also integrates directly to MQTT on Azures IoT Hub making it possible to aquire, process, store and display the monitoring data directly in a Mendix App, specially built to view data and tune specific devices in factory situations.

Mendix then often works as a dashboard for event streams and sometimes as the control center for devices and other connected items. Note that for commanding a drone or other device, the interface back to the device is sometimes synchronous. This diagram gives a schematic view of a potential Mendix integration where one app provides a dashboard and the other one is used to control a robot:

![](attachments/event-integration/schematic.png)

Using Kafka is a relevant option for this case, espceially when the Mendix app is located far away from the IoT implementation.

## 5 State Engines & Event Managers {#state}

A good example of event based processing is for packages sent by a postal service sometimes take longer than anticipated to be delivered, and the receiver needs to find out where the package is, so uses a Track and Trace system. Track and Trace in turn is fed by an Event manager that scopes up all events in the chain an that way knows what has happened to a package and where it is in the process. 

![](attachments/event-integration/state.png)

Theses processes are very high-volume and 99% straight-through processing and involve a chain of systems as is often the case in Supply-Chain and logistics solutions. Sometimes, the real world does not exactly match the data in the systems and there are many exceptions. 

When one stage of the process finishes, the system pushes the event to a queue of some kind (for more information, see [Using Queues with Mendix](#queues) below). The systems are  decoupled, but it requires an Event Manager or State Enging to manage any errors in the process

The Event Manager collects events from a number of systems, devices, and scanners that are part of the process and puts together what the status is. 

## 6 Using Queues with Mendix {#queues}

### 6.1 Using Internal Queues

Mendix itself does not currently provide an external queue management system. So most organizations use the Mendix internal queues instead, which means there is only one technology and fewer places to look for errors and one less deployment point. 

In the Mendix App Store, there are two options for internal queue. Please contact Mendix Expert Services if you hesitate on which one to use.

1. The queue provided by Mendix Expert Services: [Process Queue](https://appstore.home.mendix.com/link/app/393/)
2. A Queue provided by Webflight, [Queue] https://appstore.home.mendix.com/link/app/106628/

There are plans to provide Kafka as a queueing system for Mendix “under the hood." in future releases.

### 6.1 Using External Queues

Many customers also use Mendix with external queues like Rabbit MQ, IBM MQ, and HornetQ. In the Mendix App Store, there are connectors to most standard queue managers on the market. A limitation can be the queue size or the time-to live, which is often limited. In really high-volume situations, customers can use a Mendix input app as a queue, which would have almost indefinite depth and no limits on time-to-live.

Queues often used with Mendix are 

* Kafka, https://appstore.home.mendix.com/link/app/67994/
* Rabbit MQ, https://appstore.home.mendix.com/link/app/3066/ 
* MQTT for Azure IoT https://appstore.home.mendix.com/link/app/3066/
* MindSphere, see https://docs.mendix.com/refguide/mindsphere/

Other connectors exist or are very easy to build with a Java action if required. 

## Summary

Event driven interfaces play a role in the business applications world, when synchronous calls are difficult to do or manage, or when it is a one-way communication. Even when it is a functionally asynchronous interaction, it is often implemented in Mendix using an internal queue, see <<Service Integration>>, but in some cases an ESB, message broker, Kafka or external queues are used, see << Integration Layers>>

In the rapidly expanding area of IoT, user metrics and monitoring, event streaming solutions are becoming much more common. The extreme volumes and the many subscribers and publishers make Kafka and other similar solutions very attractive. Mendix apps interact very well with these frameworks, providing dashboards, rules and/or easy integration.
