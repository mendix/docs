---
title: "Event-Based Integration"
parent: "integration-overview"
menu_order: 4
draft: true
---

## 1 Introduction

At the moment, event-driven architectures are making their return into the mainstream of integration. This follows an increased interest focus on, for example, IoT solutions and distributed networks. Several solution providers are promoting new paradigms for managing large, distributed, high-volume event driven architectures, where Kafka is probably the most interesting new protocol.

The diagram below presents a basic event-driven integration example:

![](attachments/event-integration/ei-intro.png)  << Figure 1 - very small change>>

The main characteristic for event-driven integration is that the process that produces events or data does not communicate directly to the target system. Rather, it creates an “event” message that is put on a queue for asynchronous delivery. This means that the triggering process does not know if the message arrives or if there were errors in the delivery. If status or errors need to be handled in the source system, there is a need for a separate interface and a separate process or workflow for this.

Event-driven integration is important in the following scenarios:

* Where integration is truly one-directional, for example, for IoT solutions and user metrics, or when updating stock tickers or online games
* When synchronous communication is hard to achieve, due to one of the following factors:
	* The uptime of the destination system is hard to predict
	* The destination system is far away network-wise or geographically
  	* There is high-volume, distributed, many-to-many, one-to-very-many, or very-many-to-one communication

## 2 Types of Event-Driven Integration

There are many types of event-driven integration. The main differentiators are functional or infrastructure-oriented, which determines the most appropriate queue management. This diagram shows six options for event driven integration between two Mendix applications:

![](attachments/event-integration/queue.png)

The queue management solution that is used depends on the situation, and Mendix supports almost all the options:

<<numbers link to numbers in picture now>>
1. **Internal Mendix queue inside the sending app** – This is the simplest solution. It allows for the sending process in app 1 to finish, even if the target system is not up. A synchronous call is used to pick up events from the source app, see <<Service Integration, Request-Reply Pull>>
2. **Internal Mendix queue in the receiving app** –  This allows for the quick reception of many messages without processing them all at once. Accordingly, this means that peaks in volume have less effect on the receiving app.
* **For very high volumes, a Mendix input app can be used as a queue** – This liberates the receiving app from the peak loads in an even better way. Additionally, it allows the receiving app to be redeployed easily without effecting the message flow.
* **External queues like Rabbit MQ can be used in distributed architectures** – A queue management system handles transport over network borders and longer distances, but it requires an extra element of maintenance.
* **ESB and message brokers can act as queues with additional mapping and routing** – ESBs also do synchronous calls and can push messages forward. If there is an ESB available and it is centrally recommended, then it can be a good option.
* **Kafka** – This queue option is the newest and originated at LinkedIn to distribute user posts between nodes and collect user metrics. For distributed, high-volume, resilient, many-to-many solutions, Kafka is the clear choice.

The internal queues and the Mendix input app require only Mendix technology. This is a clear advantage for skills and operations. External queues, ESBs, and Kafka require a Mendix adapter from the [Mendix App Store](https://appstore.home.mendix.com/index3.html) and external infrastructure that needs to be deployed and maintained. If this infrastructure is already there and frequently used, the operational advantage of a pure Mendix solution is smaller. For more information, see [Integration Layers](integration-layers).

## 3 Examples of Event-Driven Cases

This diagram presents some examples of when an event-driven architecture make sense::

![](attachments/event-integration/event-use-cases.png)  <<Figure 3 - Only changed the order of the reasons

* **Controlled delivery** – The example shows the case described in the [REST Pull to Transfer Data](service-integration#pull-transfer) section of *Service Integration*. A functional business event is created in the source, placed on an internal Mendix queue, and picked up by the destination app(s) via a synchronous call. In the metadata of the queue, you add a flag for each subscriber so that you know who picks up which event. This solution gives a controlled delivery of business events, because the entire integration is handled within the two apps and it is suitable when the two apps are close to each other on the network.
* **Fire & forget** – One-way "fire-and-forget" communication means that you can afford to lose a message or two over time (for example, with stock tickers, IoT, logging messages, and non-vital notifications). It also means that the destination accepts all messages as they are. For these cases, event driven queueing is a good option. If there is already an ESB or Kafka in operation, any other queue manager can be used, like [Amazon Simple Queue Service](https://aws.amazon.com/sqs/), [MQTT](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support) on Azure, or [RabbitMQ](https://www.rabbitmq.com/) on any platform.
* **Network distance** – Geographical distance or slow networks make direct communication unstable or even impossible. For these situations, an ESB or message broker with queueing capabilities are often good solutions, as they can bridge network issues with adapters in all regions and provide a communication line between all apps and systems. If the source needs to functionally know the status or receive errors (which is the most common situation), a second asynchronous "status" interface is built in the opposite direction. The Mendix Platform communicates with ESBs and message brokers using REST, SOAP, or an App Store component for specific queue-management formats.
* **Massive volumes** – For extremely high and/or fluctuating volumes, or when there are hundreds of publishers and subscribers in a distributed network, Kafka is the most efficient solution. It provides incredible resilience and many exciting new event-streaming features. However, managing and maintaining Kafka does require expertise and tooling, so ideally, this operationalization is already done in your organization. Mendix can then easily connect as a standard Kafka client using the [Kafka Connector](https://appstore.home.mendix.com/link/app/67994/). 

## 4 Event Streams, IoT, Logging & Metrics

IoT integration is at the beginning of an expected explosion of new IT that will be built alongside the current IT landscape. In the coming years, Mendix and Siemens will invest a lot in this area.

### 4.1 One-Way Communication

The key to event-streams is that they only flow in one direction. A device leaving metrics in an IoT system does not expect an immediate answer to the data it ships. Additionally, there could be many devices that are geographically distributed and shipping a lot of data. Request–reply is neither needed nor practical for inbound IoT. Queues or Kafka are recommended for one-way communication. E.g. the Azure IoT Hub is a service layer on top of MQTT queues.

### 4.2 Examples for IoT with Mendix

Mendix often works as a dashboard for event streams and sometimes as the control center for devices and other connected items. Note that for commanding a drone or another device, the interface back to the device is sometimes synchronous. This diagram gives a schematic view of a potential Mendix integration where one app provides a dashboard and the other one is used to control a robot:

<<Figure 4>>

The three cases shown in the diagram are described below:

1. Light-weight IoT is the case with a reasonable stream of data, where there is no need to process the incoming measurements before sending them to Mendix. Mendix then does most steps of the chain: data-aquisition, data-processing, data-storage and data-display and management. The advantage is that it  easy for business users to manage and change the IoT solution, and the relatively costly cloud based IoT data-processing units are not longer needed. In this example Mendix would e.g. poll the Azure Data Hub using REST to get the next sample of measurements (preferred), or request events directly from MQTT queues.
2. Full-scale IoT is the case where massive amounts of data is collected, filtered, cached and pre-processed using cloud components and/or e.g. Kafka components. Mendix then receives a small filtered stream of data, and adds functional value to the use of that data, as a Dashboard with easy to change rules and display of data.
3. Mendix can also act as a control app for devices and industrial machines, receiving measurements and sending commands back down. In this case the commands are often synchronous calls back, but request-reply event integration is also common.

## 5 State Engines & Event Managers {#state}

A good example of event-based processing occurs when a package sent by post takes longer to be delivered than anticipated and the receiver needs to find out where the package is, so they use a track-and-trace system. A track-and-trace system is fed by an event manager that gathers all the events in a chain and thus knows what has happened to the package and where it is in the process. 

![](attachments/event-integration/state.png)

Theses processes have very high volumes and 99% straight-through processing. Furthermore, they involve a chain of systems, as is often the case in supply-chain and logistics solutions. Sometimes, the real world does not exactly match the data in the systems, and there can be many exceptions. 

When one stage of the process finishes, the system pushes the event to a queue of some kind (for details, see [Using Queues with Mendix](#queues) below). The systems are decoupled, but an event manager or state engine is required to manage any errors in the process.

The event manager collects events from a number of systems, devices, and scanners that are part of the process. Then it puts together what the status is. 

## 6 Using Queues with Mendix {#queues}

### 6.1 Using Internal Queues {#internal-queues}

Mendix itself does not currently provide an external queue management system, so most organizations use Mendix internal queues instead. This means that there is only one technology used, fewer places to look for errors, and one fewer deployment point.

In the Mendix App Store, there are two options for internal queues:

* The queue module provided by Mendix Expert Services: [Process Queue](https://appstore.home.mendix.com/link/app/393/)
* A queue module provided by [WebFlight](https://developer.mendixcloud.com/link/partnerprofile/17438): [Queue](https://appstore.home.mendix.com/link/app/106628/)

Please contact the Mendix Architecture Guild via <DIS_Architecture_Guild@mendix.com> if you need advice on which one to use.

There are plans to provide Kafka as a queueing system for Mendix “under the hood" in a future release.

### 6.2 Using External Queues

Many customers also use the Mendix Platform with external queues like [RabbitMQ](https://www.rabbitmq.com/), [IBM MQ](https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_8.0.0/com.ibm.mq.pro.doc/q001020_.htm), and [HornetQ](http://hornetq.blogspot.com/2015/06/hornetq-apache-donation-and-apache.html). In the Mendix App Store, there are connectors to most standard queue managers on the market. A limitation can be the queue size or the time-to-live, which is often limited. In really high-volume situations, customers can use a Mendix input app as a queue, which would have almost indefinite depth and no limits on time-to-live.

These are the queue connectors often used with Mendix: 

* [Kafka Connector](https://appstore.home.mendix.com/link/app/67994/)
* [Rabbit MQ Connector](https://appstore.home.mendix.com/link/app/31947/) 
* [MQTT Client](https://appstore.home.mendix.com/link/app/3066/)
* [Siemens MindSphere](https://docs.mendix.com/refguide/mindsphere/)

Other connectors exist or are very easy to build with a Java action if required. 

## 7 Summary

Event-driven interfaces play a role in the business applications world when synchronous calls are difficult to do or manage or when there is one-way communication. Even when the interaction is functionally asynchronous, it is often implemented in the Mendix Platform using an internal queue (for details, see [Service Integration](service-integration)). However, in some cases, an ESB, message broker, Kafka, or external queue is used (for more information, see [Integration Layers](integration-layers)).

In the rapidly expanding area of IoT, with user metrics and monitoring, event-streaming solutions are becoming much more common. The extreme volumes and the many subscribers and publishers make Kafka and similar solutions very attractive. Mendix apps interact well with these frameworks, providing dashboards, rules, and easy integration.
