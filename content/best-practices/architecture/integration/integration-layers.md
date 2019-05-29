---
title: "Integration Layers"
parent: "integration-overview"
menu_order: 8
draft: true
---

## 1 Introduction

For large enterprises with several departments and hundreds of systems, it makes sense to create integration layers. These layers provide one or more benefits to an organization:

* A form of decoupling between systems and departments, so that every app does not connect directly to every other app.
* A connectivity layer between networks, for example between cloud and premises, geographies or areas, and customer systems and external companies (as an external API gateway) 
* A messaging platform with queue management

The benefit of decoupling systems for large organizations can be exemplified by introducing a new Mendix app that needs to, for example, call 20 existing services from 10 different systems in 3 locations. To design, build, and test the usage of all these services would be difficult, and network issues could be a problem. If, in this case, all the services were already exposed on an API management gateway, the project would only need to align with one party. Then it would connect to one technology and one network location.

Decoupling comes with the cost of introducing an additional dependency that affects projects flexibility and timelines. In addition, if functional mapping is done in the integration layer, this can often become a bottleneck for building and maintaining services.

Mendix recommends to balance these pros and cons by doing the following:

* Do not use integration layers for all integration, but only when it is beneficial (for usage guidelines, see the [Different Integration Layers](#different) section below)
* Build functional and autonomous microservices/apps or systems of apps, where the internal integration of the system does not have to go through an integration layer (meaning, there should be no integration layer between the GUI, logic, and data of the same business function, and no integration layer between Mendix apps that are part of the same functional system)
* Use relatively "thin" integration layers, as suggested by microservice architecture guidelines (in other words, use less mapping and less functionality in the integration layer)
* Consider using integration layers for distributed messaging, integration between departments, or integration with external parties

As the diagram below presents, Mendix prefers a mixed strategy with local connections between closely related microservices, while a thin integration layer is good for communication that is organizationally or network-wise farther away:

![](attachments/integration-layers/il-intro2.png)

## 2 From SOA to Microservices

### 2.1 Reuse the Early SOA

In early SOA architectures, applications connected to each other via an ESB, which transformed messages into a common format and sometimes transformed them again into the destination format. The ESB took over a lot of integration functionality, leaving the participating systems relatively vanilla. The systems on each side of the ESB where full-blown applications with GUI, data, logic, and an API.

This version of SOA (when already implemented) is beneficial for new projects, because a large amount of useful services may already be available for new apps and services to use. In addition, it is quite easy to switch towards a more microservice-oriented approach by simply adjusting the guidelines for new solutions being built to accomplish the following factors:

* Less mapping in the integration layer
* Local integration allowed to go directly

This diagram shows how this can be done:

![](attachments/integration-layers/il-2.png)

In the old situation, all communication went via the ESB, and it did a lot of functional mapping. In the new situation, you benefit from the existing services, but you also build new services with less mapping in the ESB. In addition, you only connect new systems of apps to the ESB for cross-departmental communication. Below the ESB, you can see two new single-purpose apps, while above the ESB, there is a microservices system that has a shared data app (SDA) for external communication (for details, see the [Example - Microservices SDA](central-data#example-sda-micro) section of *Central Data*).

### 2.2 Transitions from Layered SOA

In later stages of SOA architectures, an "N-layered" architecture was used. This meant that almost all the functionality was split up in a number of layers, where each layer had a technical task. This also meant that every feature crossed several technical layers, with an explosion of dependencies as a result. 

The layers and the names of the layers varied, but they often contained the following components:

* UX layer 
* Logic layer
* Process or BPM layer
* ESB
* System of record or data layer

Characteristically, the architecture would not allow business data to be stored in any of the layers above the ESB. If this was strictly implemented, it meant that an incredible amount of integration had to be built, and often a several service calls had to be made for every user interaction. 

In small situations, layered SOA could work reasonably well. Building an application in 3–4 layers is still common, even if it is done much less quickly than can be done with low-code. The real issues occurred over time, when the size grew and reuse across areas was encouraged. Feature evolution could grind to a halt when managing all the dependecies, service calls, and related complex regression testing scenarios.

This diagram shows how business features cross many layers in SOA layerd architectures, and almost all the systems and functions depend on each other in some way:

![](attachments/integration-layers/il-3.png)

The diagram also shows that the transition from a large functional scope built in an SOA-layered architecture towards a microservices architecture requires a complete functional redesign. It usually also requires a rebuild of most of the functionality. However, there are often still services towards the legacy systems that can be reused in the new architecture.

Migrating from a layered SOA architecture is still strongly recommended for any area of functionality that requires flexibility and/or low-cost maintenance. A possible way to soften the impact of such a migration is to build Mendix "headless" services for the end-user or customer UX. This saves most of the UX investment, and you can redirect current REST services to the new Mendix apps, which will take over the core business functionality. 

This diagram shows how this replacement could be done, with two Mendix apps replacing the business function for a functional area of a customer portal, for example:

![](attachments/integration-layers/il-4.png)

As the diagram displays, the Mendix apps replace the logic and process functionality. These apps take over the immediate integration of data by storing a local copy of all the core data as well as some reference data. The interaction with legacy systems will be less frequent, and occur only when committing changes to the data.

### 2.3 Summary for Transitioning from SOA to Microservices

In summary, we see these changes for integration layers with microservices architectures:

* Integration layers are getting thinner, and they do less functionally than before
* There are no integration layers between technical layers of the same system (for example, between UX and data)
* There are no integration layers between apps that belong to the same microservices system

## 3 Different Integration Layers {#different}

These are the typical integration layers and how they are typically used:

| Layer | Description |
| --- | --- |
| **Reverse proxy** | This is an integration component that sits in the firewall and provides restricted access to certain domains and IP addresses, providing security for externally provided services. |
| **API management B2B** | This is a professional and central reverse proxy with consistent logging, security, and protection against denial-of-service attacks. |
| **API management** |  This can also be used by large enterprises to provide a single technical connection point for all systems. This means that you only have to know how to connect a new app to this layer instead of to all the source systems. |
| **ESBs** |  Enterprise service buses are like API management, but ESBs also provide mapping of messages and service orchestration. This can be valuable, but there is a tendency for a bottleneck in the delivery of enterprise-wide integration. |
| **Integration apps** | These can be built with Mendix and provide a way to have a distributed ESB that consists of many apps, each specializing in a different area. |
| **Message brokers** | This focuses on event-driven integration with a queue manager plus routing and possible mapping. |
| **Kafka** | This event-streaming technology is a modernized message broker that provides high-volume, resilient, many-to-many event integration. |
| **ETL tooling** | Extract, transform, and load tooling is like an ESB, but it focuses on batch processing and BI and DWH integration. It usually stages the data first, does heavy mapping, and then updates the destination. It can do direct DB connections or use files. |
| **MFT tooling** | Managed file transfer tooling can create a practical deposit and pickup point with access security for all file interfaces. It often has scheduling included and can raise alarms if files do not arrive as expected. |

In large enterprises, there may be several different integration layers and various requirements for using them in different circumstances. For example, there could be ETL for data transition, ESB for internal integration, and an API management gateway for external integration.

In all of these cases, the integration between the Mendix app and integration layer has the same properties as the integration between two Mendix apps. In addition, the same integration patterns exist and the same technical protocols can be used.

## 3 Why Use an Integration Layer?

### 3.1 Distance

If there is a large geographical, network, or ever organizational distance between two systems, an integration layer can provide a shared and secure way to bridge this distance.

### 3.2 Event Streams & Queues

For event streams and queues—where there is high volume or distributed systems—an integration layer takes the responsibility for delivery.

For more information, see [Event-Based Integration](event-integration).

### 3.3 Service Maintenance

Imagine if all the connections in a large organization were point-to-point interfaces. There would be far too many direct dependencies, and all the systems would have to know too much about integration.

All real-time interfaces can be routed via an ESB or API management. This does not change much for the publisher or the consumer, besides the fact that there is a technical decoupling point.

However, *decoupling* does not mean *independent*. As soon as there is a new contract and a new service, consumers should be informed and given time to migrate. Therefore, keeping a service repository that lists all the services and service users is recommended for your organization. 

Changes to services are usually done as a new endpoint next to the old one, allowing consumers to migrate and deploy the new version at their own pace. ESBs can help with this by allowing the source system to go live with only the new version and having the ESB map it into two endpoints. This is useful for large enterprises with many service users.

In summary, API management or ESBs start making sense when there are hundreds of systems and several business domains that are organizationally separated. They can create a level of stability for the services used across an enterprise.

### 3.4 Service Options

An integration layer can also provide connectivity to old protocols and/or provide different protocols on each side of an integration in order not to change existing systems. For example, the integration layer can receive a file and deliver the data as events or service calls. An ESB can collect events on a queue and generate a file at the end of the day.

This diagram presents some examples of how an integration layer enables new patterns by dividing the integration into two parts:

![](attachments/integration-layers/il-6.png)

* Service orchestration combines services
* Service reuse is the same as with direct integration. 

## 4 Microservice Integration Apps

An integration layer does not have to be central and enterprise-wide for an entire organization. If you are driving all integration onto the same framework, it is likely to become a bottleneck for all. Therefore, many organizations have several solutions, and there is no significant reason to consolidate them.

With microservices, there is a new style for achieving many ESB benefits using separate localized integration apps or shared data apps. For more information, see the [Shared Data App (SDA)](central-data#sda) section of *Central Data* and the [Integration Apps & Adapters](service-integration#adapters) section of *Service Integration*.

Mendix has strong integration capabilities, and it is easy to add UI elements to handle errors, manage lookups, and manage reference data. That is why the Mendix Platform is increasingly being used to quickly build and efficiently maintain integration solution.

This diagram shows the three styles next to each other – thick ESB, thin ESB, and integration apps:

![](attachments/integration-layers/il-7.png)

## 5 Summary

In summary, these are the recommendations for integration layers:

* Use integration layers when there is a clear reason to use them
* Do not push all integration through an integration layer
* When using integration layers, avoid functionality in the middle when possible
* Consider Mendix apps as a possible part of the solution to complex integration problems
