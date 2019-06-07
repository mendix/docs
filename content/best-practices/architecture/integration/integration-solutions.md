---
title: "Integration Solutions"
parent: "integration-overview"
menu_order: 2
draft: true
---

## 1 Introduction

This section of the *Expert Best Practices* presents various integration solutions. Reading the material on [Service Integration](service-integration), [UI Integration](ui-integration), and other methods will give you ideas for where Mendix applications can play a useful role in your integration solutions.

Getting your integration right will not only reduce the cost of implementation and maintenance, it will also raise the confidence that the business has in the solution. A simple and robust solution will lead to fewer errors in production, better ways to manage the errors do occur, and a solution that is easier to understand, change, and extend.

## 2 Considering Solution Options

Below is an example sequence of questions that an Architect or Lead Developer typically considers to find the best way to integrate:

1. What is the business use case? <br />
	a. Can I reference the [Integration Use Cases](integration-use-cases) to see if one use case fits?
2. What are the functional requirements? <br />
	a. Who needs what data when and for which reason? <br />
	b. Does it need to be real-time? <br />
	c. What error-handling options should be there?
3.  What are the functional options? <br />
	a. How can we operate this interface in production? <br />
	b. Can we copy the data ahead of time, or get it in real time on request?
	c. How do we manage errors? <br />
	d. Real-time or batch? <br />
	e. Request–reply or events? <br />
	f. Is there an available integration layer? An [integration layer](integration-layers) means there are two parts of the integration where you one can choose events, request–reply, or batch separately for the best possible operational solution.<br />
	g. If there is an integration layer available, what functions does it handle (for example security, monitoring, queueing, simple mapping)? <br />
4. What are the technical options for each functional option? <br />
	a. What protocols are available? <br />
	b. What will each option mean for operations? <br />
	c. What is the most secure option? <br />
	d. Which option has better error handling?

The options should then be compared against each other.

It is important to think of the overall solution, and to recognize that integration starts inside one system and ends inside (one-to-many) other systems.

If it gets complicated on one side of an integration, it is often because the other side of the integration is not ideal. Then, the best solution may be to try to change the other side of the integration.

## 3 Managing Dependencies

After you have determined the correct integration solution method—along with the correct microservices, integration between those microservices, and integration externally to other parts of the enterprise—your integration solution will inevitably lead to some kind of dependency. Dependencies need to be managed through design, building, testing, deploying, and operations. For more information, see [Managing Dependencies](manage-dependencies).
	
It is impossible to completely remove dependencies, since systems and apps need to inter-operate to generate automation, digitization, and seamless user experiences. Finding the right solution should make the dependencies that occur through the lifecycle as easy to manage as possible.

## 4 Integration Best Practices Structure

### 4.1 Introduction to Integration

To start learning about the Mendix capabilities for integration, see [Introduction to Integration](integration-intro) for background information on integration and [Managing Dependencies](manage-dependencies) for details on how to minimize and manage team, functional, operational, and other types of dependencies.

Then move on to [Mendix & Integration](mendix-integration) for more specific details on integration in the Mendix Platform and [Integration Use Cases](integration-use-cases) for an explanation of basic integration solutions and use cases.

### 4.2 Integration Solutions

These best practices are organized with theoretical guidelines in the following solution categories where Mendix plays an important role: 

* [Service Integration](service-integration)
* [UI Integration](ui-integration)
* [Event-Based Integration](event-integration)
* [Batch Integration](batch-integration)
* [Central Data](central-data)
* [Process Integration](process-integration)
* [Integration Layers](integration-layers)
* [Ops & CI/CD Integration](ops-cicd-integration)

Within these solution categories, the methods listed below show how the Mendix Platform integrates within a landscape.

{{% todo %}}[**Unify use cases below with use cases presented in Integration Use Cases?**]{{% /todo %}}

#### 4.2.1 Service Integration Use Cases

* [REST to Call Other Systems](service-integration#rest-call)
* [REST Pull to Transfer Data](service-integration#pull-transfer)
* [OData Retrieve](service-integration#odata-retrieve)
* [Database Integration](service-integration#db-int)
* [SOAP Integration](service-integration#soap-int)
* [RPC Integration & Adapters](service-integration#adapters)
* [Queue Integration](service-integration#queue-int)

#### 4.2.2 UI Integration Use Cases

* [Deep Linking from App to App](ui-integration#deep)
* [Web Link Integration for Websites](ui-integration#web)
* [CMS Integration for Customer Portals](ui-integration#cms)
* [CDN Integration for Global Portals & Apps](ui-integration#cdn)

#### 4.2.3 Event-Based Integration Use Cases

* [Event Streams, IoT, Logging & Metrics](event-integration#stream-iot)
* [State Engines & Event Managers](event-integration#state)
* [Using Queues with Mendix](event-integration#queues)

#### 4.2.4 Batch Integration Use Cases

* [Using Batch Processing](batch-integration#using)
* [Reference Data Examples with Mendix](batch-integration#reference)
* [File Integration & Management](batch-integration#file-integration)
* [Export & Import](batch-integration#export-import)
* [ETL, DWH & BI Integration](batch-integration#int)
* [Example – File Import Integration with CSV](csv)

#### 4.2.5 Central Data Use Cases

* [Shared Data App (SDA)](central-data#sda)
* [Self-Learning Processes Using Data Lakes](central-data#data-lakes)

#### 4.2.6 Process Integration Use Cases

* [Business Events & Process Flow](process-integration#business)
* [Case Management](process-integration#case)
* [Process Orchestration](process-integration#po)
* [Event Managers](process-integration#event-managers)
* [Example – Workflow Integration with Data Transfer](workflow-int-data-transfer)

#### 4.2.7 Integration Layers Use Cases

* [From SOA to Microservices](integration-layers#soa-micro)
* [Microservice Integration Apps](integration-layers#microservice)

#### 4.2.8 Ops & CI/CD Integration Use Cases

* [CI/CD & Test Automation](ops-cicd-integration#test)
* [Deployment & Monitoring](ops-cicd-integration#deploy)