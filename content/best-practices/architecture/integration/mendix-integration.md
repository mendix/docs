---
title: "Mendix & Integration"
parent: "integration-overview"
menu_order: 1
draft: true
---

## 1 Introduction

Mendix makes it easy to build, update, and maintain an app or microservice that fulfils a business function. Usually a business functions need a GUI, some logic, and data. The internal integration of those layers is handled by Mendix, but for most apps as well as microservice architectures, there is a need for integration with other systems.

This diagram presents how Mendix keeps all these parts together and checks consistency in the app model:

![](attachments/mendix-integration/feature-requirements.png)

So, you do not have to worry about the integration of internal app layers. However, the Solution Architect or Lead Developer does need to design good microservices and interfaces that can integrate seamlessly with other apps and systems in the enterprise.

In Mendix, all the integration goes via the app's runtime server, which is a clear advantage for security and control, as presented in this diagram:

![](attachments/mendix-integration/runtime.png)

Mendix handles a large array of formats and protocols. For more information, see the [Integration how-to's](/howto/integration/).

The most important thing to do is to choose the right integration option from a lot of possibilities. These best practices will present an overview of integration methods and typical use cases.

### 1.1 Security

The standard for security is to almost always use encrypted channels: SSL for service calls and SFTP for files. This always allows an app to be on different clouds and data centers will communicating safely.

### 1.2 Always Think *Functionally* First {#functionally}

The first best practice is to have an open mind regarding integration requirements. Think about what the integration need really is and consider more than one option for the solution.

It is important to remember that an interface starts inside one system and ends inside one or more other systems. There could also be integration components in the middle, so the
number of options to decide on can be quite large.

First, consider the following questions:

* What triggers the interface?
* Who needs what data when?
* Who should handle functional errors if they occur?
* Who should handle technical errors?
* How can integration be minimized?
* How can a UX be built that requires very few service calls to load?

Next, consider which use case applies and which options are available. 

Finally, make a conscious choice about why one method is chosen over another.

## 2 Use Case Categories

"Integration" means any kind of interaction between any person, thing, app, or system for any type of purpose. The scope is enormous, and there are hundreds of use cases. When scoping out a new project, there is a fair chance you may find a new type of use case, even if you have worked on integration for years. So, there is reason to keep your eyes open for what is similar and what is different in the use cases we already know.

However, there are typical use cases for which Mendix is creating example implementations. These best practices are related to such typical use cases.

{{% todo %}}[**EXPLAIN DIAGRAM**]{{% /todo %}}

![](attachments/mendix-integration/common-use-cases.png)

For each use case, we need to consider which solution is most suitable under which condition.

## 3 Basic Solution Categories

For most of the integration related to Mendix, there are five solution categories that are almost always used. Sometimes just one is used, and sometimes a combination is used:

{{% todo %}}[**EXPLAIN DIAGRAM**]{{% /todo %}}

![](attachments/mendix-integration/solution-categories.png)

{{% todo %}}[**ADD LINKS BELOW TO INTEGRATION DOCS WHEN AVAILABLE**]{{% /todo %}}

* [UI integration](ui-integration) – This solution category includes, for example, using a deep link from the UI of one app to open the UI of another app (either in the same browser tab or another tab). It also includes website, content management system, and content delivery network integration.
* [Service integration](service-integration) – This is otherwise known as remote procedure call (RPC) integration. This category uses request and reply, and it almost always synchronous. The request-reply interfaces with REST and SOAP. There is also database integration with OData and SQL, business event and process integration, process orchestration, integration apps, and distributed ESBs.
* [Event-driven integration](event-integration) – This category usually does not have a response, and it is used to distribute data at large scales or large distances, or simply distribute data in a decoupled way. Event-driven integration can involve IoT, metrics, and social media, as well as state engines and event management.
* **Batch-oriented integration** – This category includes exporting, moving, and importing files as well as file integration.
* **Central data** – This category uses a pattern where data is landed and combined in a central place before it is distributed. This could be, for example, an operational data store (ODS); extract, transform, load (ETL); business intelligence (BI); or data lake solution.
* **Integration Layers & Gateways** – This category involves ESB, internal and external API management, and other gateways.

## 4 Overview of Use Case & Solution Options

Plotting functional use cases against basic methods of integration allows us to see that there are several common options available. That is good, because integration needs to be flexible in a solution in order to adapt to how systems, things, or people communicate. 

The table below presents use cases that you can reference  for more detail. The table uses the following symbols:

{{% todo %}}[**ADD LINKS AS DOCS AVAILABLE**]{{% /todo %}}

| Symbol | Meaning |
| --- | --- |
| ![](attachments/mendix-integration/green.png) | Indicates the common or preferred use of the method. In some of cases (for example, "Integration with IoT solutions"), the solution will require several methods, so several of these symbols are used. |
| ![](attachments/mendix-integration/grey.png) | Indicates possible use in some cases. |

| Use Case | UI Integration | RPC / Services | Events / Queues | Export, Import, Batch | Central Data |
| --- | --- | --- | --- | --- | --- |
| SSO, AD & Identity integration | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/green.png) | | | |
| Import & Distribute Reference Data | | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) |
| View & Search Data in Another System  | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/green.png) | | | |
| Use & Refer to Data in Another System | | ![](attachments/mendix-integration/green.png) | | | ![](attachments/mendix-integration/grey.png) |
| [Process Int.](process-integration) (cont. workflow) | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/grey.png) | | |
| [Export, Import & Batch Processing](export-import-batch) | | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/grey.png) |
| Update Data in Master App | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) | | |
| Distribute Master & Transactional Data | | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/grey.png) |
| Int. with BI & Reporting | | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) |
| Mobile Int. & Offline | | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) | | |
| CMS & CDN Int. | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) | | | |
| Process Orch. & State Engines | | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) | | ![](attachments/mendix-integration/green.png) |
| Int. with Ops & Monitoring | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/green.png) |
| Int. with IoT Solutions | | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) | ![](attachments/mendix-integration/green.png) |
| Int. with AI & Machine Learning | | ![](attachments/mendix-integration/green.png) | ![](attachments/mendix-integration/grey.png) | | ![](attachments/mendix-integration/green.png) |

To read these use cases, start with [Integration Use Cases](integration-use-cases).