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

The benefit of decoupling systems for large organizations can be examplified by introducing a new Mendix app that needs to call 20 existing services from 10 different systems in 3 locations. To design, build and test the usage of all these services would be quite difficult, and network issues could be a problem. If, in this case, all the services already were exposed on an API management gateway, the project would only need to align with one party, and connect to one technology and one network-location.

The decoupling comes with the cost of introducing an additional dependency that affects projects flexibility and time-lines. Especially if functional mapping is done in the integration layer, it often becomes a bottleneck for building and maintaining services.

Mendix recommends to balance these pros and cons by:

* Not using integration layers for all integration, but only when it is beneficial, see <<Different Integration Layers>>
* Building functional and autonomous microservices/apps or systems of apps, where the internal integration of the system does not have to go through an integration layer. I.e. no integration layer between GUI, logic and data of the same business function, and no integration layer between Mendix apps that are part of the same functional system.
* Use relatively "thin" integration layers, as suggested by microservice architecture guidelines, i.e. less mapping and less functionality in the integration layer
* Consider using integration layers for distributed messaging or integration between departments or to external partis etcetera
  
As this diagram presents, Mendix prefers a mixed strategy in which local connections between closely related microservices, while a thin integration layer is good for communication that is organizationally or network-wise farther away:

![](attachments/integration-layers/il-intro2.png)

## 2. From SOA to Microservices

### 2.1 Re-use the early SOA

In early SOA architectures, applications connected to each other via an ESB, that transformed messages to a common format and sometimes transformed them again to the destination format. The ESB took over quite a lot of integration functionality, leaving the participating systems relatively vanilla. The systems on each side of the ESB where full-blown applications with GUI, data, logic and an API.

This version of SOA (when already implemented) is beneficial for new projects, because a large amount of useful services may already be available for new apps and services to use.  In addition, it is quite easy to switch towards a more microservice oriented approach by simply adjusting the guidlines for new solutions being built: 
1) Less mapping in the integration layer
2) allowing local integration to go directly

See diagram below showing how this can be done. 

<<FIGURE 2 - NEW >>

In the old situation all communication goes via the ESB, and it does a lot of functional mapping. In the new situation we benefit from the existing services, but build new services with less mapping in the ESB, and where we only connect new systems of apps to the ESB for cross departmental communication. Below the ESB we see two new single purpose apps, while above the ESB there is a microservices system that has a Shared Data App (SDA), for external communication, see also <<Central Data - SDA for Microservice systems>>

### 2.2 Transitions from layered SOA

In later stages of SOA architures there would be an "N-layered" architecture, meaning that almost all functionality was split up in a number of layers where each layer had a technical task. This meant that every feature would cross several technical layers with an explosion of dependencies as a result. 

The layers and the names of the layers would vary but often contained:

* UX Layer 
* Logic layer
* Process layer or BPM layer
* ESB
* System of record or Data layer

Characteristically the architecture would not allow business data to be stored in any of the layers above the ESB, and if this was strictly implemented, it meant that an incredible amount of integration had to be built, and often a several service calls had to be made for every user-interaction. 

In small situations Layered SOA could work reasonably well. Building an application in 3-4 layers is still common, even if it's far from as fast as using low-code. The real issues occured over time when the size grew and re-use across areas were encouraged. Feature evolution could grind to a halt when managing all dependecies, service calls and related complex regression testing scenarios.

The diagram below shows how in SOA Layere architectures the business features cross many layers, and where almost all systems and all functions depended on each other in some way.

<<FIGURE 3>>

The diagram also shows that the transition from a large functional scope built in a SOA layered architecture, towards a microservices architecture requires a complete functional re-design and usually a re-build of most of the functionality. But there usually still  services towards the Legacy systems that can be re-used in the new architecture.

It is still a strongly recommended migration for any functionality area that requires flexibility and/or low cost maintenance.

A possible way to soften the impact of a migration from a layered SOA architecture would be to build Mendix "head-less" services for the end-user or customer UX. This saves most of the UX investment and one can re-direct current REST services to the new Mendix apps, that will take over the core business functionality. 

The diagram below shows how this replacement could be done, two Mendix apps replacing the business function for a functional area of e.g. a customer portal.

<<FIGURE 4>>

As the diagram shows the Mendix apps replaces the logic and process functionality, and takes over the immediate integration to data by storing a local copy of all core data, and some reference data. the interaction to legacy systems will be less frequent, only when committing changes to the data.

### 2.3 Summary for SOA to Microservices

As a summary, with Microservices architectures we see these changes for integration layers:

* Integration layers are getting thinner; they do less functionally than before.
* There are no integration layers between technical layers of the same system, e.g. between UX and data
* There are no integration layers between apps that belong to the same microservices system

## 2 Different Integration Layers

These are typical integration layers and how they are typically used:

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

In large enterprises, there may be several different integration layers and various requirements for using them in different circumstances. E.g. there could be ETL for data-transition, ESB for internal integration and an API management gateway for external integration.

In all of these cases, the integration between the Mendix app and the integration layer has the same properties as the integration between two Mendix apps. In addition, the same integration patterns exist and the same technical protocols can be used.

## 3 Why Use an Integration Layer?

### 3.1 Distance

If there is a large distance between two systems, geographically, network wise or ever organizationally, an integration layer can provide a shared and secure way to bridge these distances

### 3.2 Event streams and Queues

For event streams and queues, where there is high volume or distributed systems, an integration layer takes the responsibility for delivery, see also <<Event Driven Integration>>

### 3.3 Service Maintenance

If all connections in a large organization would be point-to-point interfaces, there would be too many direct dependencies, and all systems would have to know too much about integration.

All real-time interfaces can be routed via an ESB or API management and it not change much for the publisher and the consumer except for the fact that there is a technical decoupling point.

However, *decoupling* does not mean *independent*. As soon as there is a new contract and a new service, the consumers should be informed and given time to migrate. It is therefore recommended to keep a service repository that lists all the services and all the service users in the organization. 

Changes to services are usually done as a new end-point next to the old one, allowing the consumers to migrate and deploy the new version at their own pace. ESBs can help with this, allowing the source system to go live with only the new version, and having the ESB map it into two end-points. This is useful for large enterprises with many service users.

So API management or ESBs start making sense when there are hundreds of systems and several business domains that are organizationally separated. It creates a level of stability for the services used across an enterprise.

### 3.4 Service Options

An integration layer can also provide connectivity to old protocols and/or provide different protocols on each side of an integration in order not to change existing systems. For example, the integration layer can receive a file and deliver the data as events or service calls. An ESB can collect events on a queue, and generate a file at the end of the day etcetera.

The diagram presents some examples of how an integration layer enables new patterns by dividing the integration into two parts:

![](attachments/integration-layers/management.png)

* Service orchestration combines services
* Service reuse is the same as with direct integration. 

## 4 Microservice Integration Apps

An integration layer does not have to be central and enterprise-wide for an entire organization. If driving all integration onto the same framework, it is likely to become a bottle-neck for all. Therefore many organizations have several solutions and there is no significant reason to consolidate them.

With the entry of Microservices there is also a new style for achieving many of the ESB benefits using separate, localized Integration Apps or Shared Data Apps, see for example <<Central Data - SDA>>, and <<Service Integration - Legacy Adapter>>

Mendix has strong integration capabilities, and it's easy to add a UI to handle errors or manage look-ups and reference data, so increasingly Mendix is being used as a very fast to build and maintain integration solution.

The diagram below shows the three styles next to each other: Thick ESB, thin ESB and Integration Apps.

<<FIGURE 6>>

## Summary

As a summary for Integration Layers we recommend:

1. Use integration layers when there is a clear reason to use them
2. Do not push all integration through an integration layer
3. When using integration layers, avoid functionality in the middle when possible
4. Consider Mendix apps as a possible part of the solution to complex integration problems

