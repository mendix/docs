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

### 2.1 Good Dependencies via Contracts

Microservice apps are smaller functional pieces that contain a business function. The following best practices are important:

* Avoid having too many functional areas that depend on the same data model, as often occurs in monoliths
* Avoid functional areas that are built across technical components and layers by different teams, as often occurs in SOA architectures

Instead, you must try to contain everything required to perform a business function within each app. A new business feature requirement is then likely to land within only one single app, which will be maintained by one single team. This means you can change quickly when necessary and provide flexibility to the business unit that owns that functionality.

There is still integration required between microservice apps. However, there will be less integration than needed between the application server and database in a monolith, or between the layers in an SOA-layered architecture. This is because most of the work that the app does is contained within the app itself. Therefore, the dependencies are local, private (meaning, not externally exposed), and easily owned and maintained by a small DevOps team.

The Mendix Platform is perfect for building this type of microservice solution, because within a Mendix app, all the internal dependencies are kept private. They are managed and consistency-checked by the Mendix app model itself, and the developer builds UX, logic, workflows, and data structures directly for a business function.

Some microservices will be complete end-user oriented apps with GUI, logic, data, and workflows. Some can be "headless" microservices providing functionality and data under UX-oriented apps or layers. Some are pure integration apps that act as legacy adapters, shared data apps, or distributed ESBs.

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

### 2.2 Microservice Integration Best Practices

The following best practices should be followed:

* Organize components around business capabilities
* Implement less functionality in the integration layers ("smart endpoints and dumb pipes")
* Balance autonomy against reuse (meaning, only reuse something when it does not impair the flexibility of evolving separate microservices)
* Have clear contracts for communication between microservices (typically, these are REST, OData, or SOAP contracts)
* Decentralize data management (meaning, do not be afraid to have a local copy of data, but do not copy all data and do not copy data models; you should just copy the data required for one function and adjust the data structure to what is needed in each app)
* Design for failure (as in, make sure the UX is not impacted when a source app is down)
  * In some cases, copying core data beforehand is recommended; when this is not possible, implement a user-friendly message that the service is unavailable
* Automate the infrastructure – keep in mind that infrastructure automation is already at a very high level on the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy), but additional automated testing and deployment management can be added

## 3 Overall Recommendations

Using a microservices architecture enhances efficiency and flexibility in the IT industry. There is an amazing opportunity to reshape how organizations build and manage IT to support different business functions if the right microservice architecture is created and good robust integration patterns are selected.

* Apps should act as actors in a business process. They typically do different things, and often they have different views of the data. So, it is ok to copy some data from one app to another as part of the business process or share reference data between apps. 
* If the microservices fullfill a business function the integration can often be implemented as business events that fulfill a step in a business process. 
* Reference data is often copied between microservices to make them autonomous
* Integration layers are used for certain situations only, and they are "thinner" with less functionality than typical ESBs have.

When approaching an inegration problem, it is good to think functionally first. When it is clear what the entire integration should do (including acknoledgements, statuses, and errors), it is advicable to consider more than one solution option, compare the technical solutions impact on simplicity, robustness and manageability.




