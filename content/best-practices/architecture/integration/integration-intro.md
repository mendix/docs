---
title: "Introduction to Integration"
parent: "integration-overview"
menu_order: 1
draft: true
---

## 1 Introduction

Integration between different systems means that data flows are automated and functions in different apps are connected. In turn, integration drives the automation and digitization of processes, saving time and money for your organization. This means integration is an incredibly important area to master and do right.

The sections below will go through a number of methods for integrating the Mendix Platform with other systems, things, SaaS solutions, and microservice systems made up of many Mendix apps.

Unless you are building a stand-alone Mendix app, there will be integration with existing systems and between Mendix apps. Even if Mendix makes it very easy to integrate technically, it is still important to functionally define the most efficient overall solution, in which the integration should be as simple as possible. That will determine how easy it is to maintain, update, or extend the solution.

To assist Mendix app projects in this area, typical examples are presented of how Mendix apps play functionally different roles and how they integrate well within an enterprise landscape. This is especially helpful for organizations that want to use Mendix for core systems replacement or large scale migrations towards the cloud as well as when Mendix is the preferred platform for all custom development.

## 2 Microservices Integration

Microservices architecture prevails nowadays over layered SOA architectures as a much more efficient way to implement service-oriented and event-driven architectures.

However, microservice architecture has changed a lot of things in the area of integration. For more information, see [Microservices: a definition of this new architectural term](https://martinfowler.com/articles/microservices.html ) by Martin Fowler.

In general, microservices replace solutions where functional dependencies have become too complex, like the following:

* Large monolithic systems working on one single large database
* SOA-layered architectures

![](attachments/integration-intro/intro-1.png)

### 2.1 Good Dependencies

Microservice apps are smaller functional pieces that contain a business function. The following best practices are important to understand for dependencies:

* There must not be too many functional areas that depend on the same data model (as occurs in monoliths)
* There must not be too many functional areas that depend on the same technical layers (as occurs in SOA-layered architectures)

Instead, you must try to contain everything required to perform a business function within each app. A new business feature requirement is then likely to land within only one single app, which will be maintained by one single team. This means you can change quickly when necessary and provide flexibility to the business unit that owns that functionality.

There is still integration required between microservice apps. However, there will be less integration than needed between the application server and database in a monolith, or between the layers in an SOA-layered architecture. This is because most of the work that the app does is contained within the app itself. Therefore, the dependencies are local, private (meaning, not externally exposed), and easily owned and maintained by a small DevOps team.

The Mendix Platform is perfect for building this type of microservice solution, because within a Mendix app, all the internal dependencies are kept private. They are managed and consistency-checked by the Mendix app model itself, and the developer builds UX, logic, workflows, and data structures directly for a business function.

Some microservices will be complete end-user-oriented apps with GUI, logic, data, and workflows. Some can be "headless" microservices providing functionality and data under UX-oriented apps or layers. Some are pure integration apps that act as legacy adapters, shared data apps, or distributed ESBs.

There is no one rule for what microservice should do or contain. The best practice is that they fulfill a clear function and have a clearly defined external interface, using clear contracts for external integration. 

In a landscape of many microservice styles, Mendix can take any role and evolve from one to another. For example, with a headless Mendix app supporting a customer portal UX via REST services, it would be easy to add internal UX for a support group to set business values, monitor progress, and do other internal tasks at the same functional area.

This diagram shows a number of typical microservices:

![](attachments/integration-intro/intro-2.png)

The **Mendix microservices system** section of the diagram illustrates a microservices system covering a larger functional area where several user groups cooperate. It has the following features: 

* A login screen and overviews dashboard
* Three separate functional microservices, each covering a phase in a process
* A shared data app for the combined dataset that can import reference data and perform other external integration

The **Headless Mendix microservices** section of the diagram includes Mendix apps that are built with no UI at all, or with only a business administration UI. These apps provide  the business functions via REST services to a separate UI layer (for example, a customer portal).

Finally, the **Mendix integration apps** section of the diagram shows where Mendix acts as an integration layer. This makes it easy for other apps to access key data and functions from, for example, SAP or older legacy systems.

### 2.2 Changes with Microservices & Resulting Best Practices

Using microservices requires a specific approach and certain changes to be made. The following best practices should be followed:

* Organize components around business capabilities
* Implement less functionality in the integration layers ("smart endpoints and dumb pipes")
* Balance autonomy against reuse (meaning, you should only reuse something when it does not impair the flexibility of evolving separate microservices)
* Have clear contracts for communication between microservices (typically, these are REST, OData, or SOAP contracts)
* Decentralize data management (meaning, do not be afraid to have a local copy of data, but do not copy all data and do not copy data models; you should just copy the data required for one function and adjust the data structure to what is needed in each app)
* Design for failure (as in, make sure the UX is not impacted when a source app is down)
  * In some cases, copying core data beforehand is recommended; when this is not possible, implement a user-friendly message that the service is unavailable
* Automate the infrastructure – keep in mind that infrastructure automation is already at a very high level on the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy), but additional automated testing and deployment management can be added

## 3 Minimizing & Managing Dependencies

While integration leads to automation and digitization, it also creates dependencies between systems. Dependencies need to be managed from design to production for different releases of apps going live at different times.

The target for a Solution Architect designing a larger solution will therefore be to design apps and systems of apps that do the following:

* Minimize integration
* Find a solution where integration dependencies are easy to build, change, and manage

There are two main steps here:

1. Find the correct, right-sized, functional, and autonoumous microservices.
2. Find the integration method that is easy to build and manage. That is where the *Expert Best Practices for Integration* can help. 

The best solution varies from case to case and depends on organizational, technical, functional, and operational aspects. The optimal solution takes all of these factors into consideration.

### 3.1 Team Dependencies

Dependencies for the development team can follow from using a microservices architecture. This means that every app should be built and managed by one single DevOps team, and that team should autonomously complete the entire microservice. In that case, the only dependencies are external integration, which ideally can be defined as REST services in the beginning of the app project.

You can achieve fewer dependencies between business units of an organization by defining functional apps that align relatively well with a business process or business organization. That leads to fewer comprimises on requirements, fewer prioritizations between different stakeholders, and often a more purpose-oriented app that is good at one specific area.

### 3.2 Functional Dependencies

When the right microservices have been chosen, there will still be some functional dependencies left, which should be automated by building good interfaces between the apps. These functional dependencies cannot be removed, so they just need to be minimized.

For example, if you have a feature request where two apps need a new field implemented (for example, GPS coordinates) and one app is the source of this data, it is inevitable that the service contract needs to change. You then need a good process for managing this through separate releases. The typical way to do this is by going-live with the source app first (with two endpoints), and then going-live with the consumer app afterwards, swapping from the first endpoint to the next one.

If it is easy to go-live with the two apps at the same time, then the two new versions should be tested and deployed together. This diagram illustrates this more generic case of service management, as the two apps are now not dependent on the same release date:

![](attachments/integration-intro/intro-3.png)

To minimize functional dependencies, you should make service contracts that imitate a business event. Often data is from more than one table, but rarely does it include all the fields from one table. If the functional requirement for the business event changes, you have to change the service, but if other data in the same tables change, there is no impact.

You should also make consumer-specific services when different consumers want different things. When one consumer wants additional functionality in the service, the other consumers are not impacted.

### 3.3 Operational Dependencies

Operational dependencies relate to the fact that one system must be up and running for a certain function in another app to work. For example, an end-user needs to search for products in another app when creating an order. If the products app is down, there is also no ordering possible. Therefore, in all synchronous services, both apps needs to be up and running for the integration to work. 

It is possible to minimize operational dependencies by copying data over to the service that needs it before it is needed. This is particularly common for slow-changing data (for example, product definitions). In the example above, you can remove the operational dependency by simply copying the important part of the product definition over to the ordering app. Then, you poll the product app for any changes.

The desire for autonomy in microservices architectures allows for copying data more often than in the SOA-architecture pattern, where the reuse of functions was more important and developers strived to retrieve data in real-time from the source system.

In high-volume automated situations, copying required data becomes even more important. This is because every outbound service call takes time and CPU resources, which leads to the risk of failed processing that may be difficult to manage manually.

Sometimes, when operational dependencies are required (for example, a source system needs to validate data in an input form), the best approach is to functionally build around this dependency in order to soften the impact on the end-user if the other system is down. This can be accomplished via awareness of the other system's status and then informing the end-user early or simply disabling the local function temporarily. 

Microservices theory also suggests using circuit breakers for high-volume situations. This means that the source app will stop bombarding the destination with requests when the service is already timing out the majority of requests. In turn, this will help both apps to operate better.

### 3.4 Technical Dependencies

In quite a few cases there is already a legacy system to integrate with, or you need to integrate with a SaaS solution via an already existing API. In such cases, there is often little choice in the format and protocol of the services we need to use.

In these cases, the Mendix app will typically adapt to the existing technical and functional format of services provided (for example, via an SaaS system such as SAP or SalesForce). The Mendix Platform is the more flexible side in most integration relations, as it can adapt to almost any format provided.

However, there are cases when it is better to change even old legacy systems. For example, when you cannot retrieve data without looping over a service call hundreds of times, then either a new service should be built, or you should switch to copying the data ahead of time (for example, with a file).

### 3.5 Scoping Integration Early & Implementing Late

Because integration is an external dependency, it makes sense to scope out the required integration early. This will give teams the maximum amount of time to provide updated services or files before the go-live date. While waiting, users can use mock services and/or files, and then connect to the final version towards the end of the app project.

### 3.6 Keep It Simple!

As in all design, a simpler solution is always easier to build and maintain than a more complex one. If something can be done with fewer service calls, components, or technologies involved, that is usually better. 

The most frequently used and accepted service protocol at the moment is REST over Http(s). This allows the caller of the service to manage errors or issues, and within a single service call, there is both the request and reply.

However, there is an incredible amount of integration scenarios to take into account. This document will go through quite a few technical and functional scenarios where other formats and protocols are recommended.

## 4 Overall Recommendations

Apps should act as actors in a business process. They typically do different things, and often they have different views of the data. So, it is ok to copy some data from one app to another as part of the business process or share reference data between apps. 

You should implement integration points as business events that fulfill a step in a business process. For sharing reference data, it is typical to poll the source for changes and/or send files with updated data for slowly-changing data.

When approaching an inegration problem, it is good to think functionally first. When it is clear what the entire integration should do (including acknoledgements, statuses, and errors), only then should you compare the technical solutions that can handle the situation in a simple way.

In the days of SOA layers, a central ESB would take care of a lot of integration functionality, such as transformation, routing, re-tries, queueing, and even combining services. But now, in the era of microservices, you should aim for "dumb pipes and smart endpoints" in the following scenarios:

* Within a system of microservices owned by the same organizational area, where there is no reason to use an integration layer at all
* In a number of other cases, especially for large organizations, where a thin integration layer is helpful

Integration is easy with Mendix, and microservices are enhancing the efficiency and flexibility in the IT industry. If in such scenarios the integration can be made simple, there is an amazing opportunity to reshape how organizations build and manage IT to support different business functions.

### 4.1 Basic Solution Categories

For most of the integration related to Mendix, there are five basic solution categories that are almost always used. Sometimes just one is used, and sometimes a combination is used:

![](attachments/integration-intro/solution-categories.png)

* [Service Integration](service-integration) – This is otherwise known as remote procedure call (RPC) integration. This category uses request and reply, and it almost always synchronous. The request-reply interfaces with REST and SOAP. There is also database integration with OData and SQL, business event and process integration, process orchestration, integration apps, and distributed ESBs.
* [UI Integration](ui-integration) – This solution category includes, for example, using a deep link from the UI of one app to open the UI of another app (either in the same browser tab or another tab). It also includes website, content management system, and content delivery network integration.
* [Event-Based Integration](event-integration) – This category usually does not have a response, and it is used to distribute data at large scales or large distances, or simply distribute data in a decoupled way. Event-driven integration can involve IoT, metrics, and social media, as well as state engines and event management.
* [Batch Integration](batch-integration) – This category includes exporting, moving, and importing files as well as file integration.
* [Central Data](central-data) – This category uses a pattern where data is landed and combined in a central place before it is distributed. This could be, for example, an operational data store (ODS); extract, transform, load (ETL); business intelligence (BI); or data lake solution.

### 4.2 Overview of Use Cases & Solution Options

Plotting functional use cases against basic methods of integration allows you to see there are several common options available. That is good, because integration needs to be flexible in a solution for the architect to select the best option for a specific situation. 

For example, you may choose not to change an old system, which leads you to choose another option than you would if you were building two new apps. This means that you may choose the less ideal way to integrate in order not to change an old system. In the scenario that you were building two new apps, you would make another choice.

As another example, when integrating to SaaS solutions and older systems, there may only be one option available. Such a scenario will determine which integration to use, rather than these guidelines. 

The table below presents use cases that you can reference  for more detail. The table uses the following symbols:

| Symbol | Meaning |
| --- | --- |
| ![](attachments/integration-intro/green.png) | Indicates the common or preferred use of the method. In some of cases (for example, "Integration with IoT solutions"), the solution will require several methods, so several of these symbols are used. |
| ![](attachments/integration-intro/grey.png) | Indicates possible use in some cases. |

| Use Case | UI Integration | RPC / Services | Events / Queues | Export, Import, Batch | Central Data |
| --- | --- | --- | --- | --- | --- |
| SSO, AD & Identity integration | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/green.png) | | | |
| Import & Distribute Reference Data | | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intron/grey.png) | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/grey.png) |
| View & Search Data in Another System  | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/green.png) | | | |
| Use & Refer to Data in Another System | | ![](attachments/integration-intro/green.png) | | | ![](attachments/integration-intro/grey.png) |
| [Process Int.](process-integration) (cont. workflow) | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/grey.png) | | |
| [Export, Import & Batch Processing](export-import-batch) | | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/grey.png) |
| Update Data in Master App | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/grey.png) | | |
| Distribute Master & Transactional Data | | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/grey.png) |
| Int. with BI & Reporting | | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/grey.png) |
| Mobile Int. & Offline | | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/grey.png) | | |
| CMS & CDN Int. | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/grey.png) | | | |
| Process Orch. & State Engines | | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/grey.png) | | ![](attachments/integration-intro/green.png) |
| Int. with Ops & Monitoring | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/green.png) |
| Int. with IoT Solutions | | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intro/grey.png) | ![](attachments/integration-intro/green.png) |
| Int. with AI & Machine Learning | | ![](attachments/integration-intro/green.png) | ![](attachments/integration-intron/grey.png) | | ![](attachments/integration-intro/green.png) |

For more details, see [Integration Examples](integration-examples).
