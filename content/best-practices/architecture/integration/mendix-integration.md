---
title: "Mendix & Integration"
parent: "integration-overview"
menu_order: 1
draft: true
---

## 1 Introduction

Mendix makes it easy to build, update, and maintain an app or microservice that fulfils a business function. The recommendation is to try to keep as much of a business function as possible in the App to minimize external integration and complexity, which in turn makes the DevOps team more independent and sevelopment and maintenance even faster and more efficient. But most apps will need some external integration to other apps, systems, API layers, things or humans as well.

Mendix is very good at integrating with virually any other technology and this chapter gives an overview of how Mendix integrates to different formats and how it does this so securely and easily that some organizations build  Mendix apps whoS focus is almost entirely on integration.

<< Add picture 1 from email >>

### 1.1 Internal Integration within each App is for Free

This diagram presents how Mendix keeps all these parts together from design to operations, and the platform checks the consistency in the app model before allowing changes to be committed to the team server:

![](attachments/mendix-integration/feature-requirements.png)

So, you do not have to worry about the integration of internal app layers. The communication between an Apps own UX layer, Run-time server, data-base and file-store are all private and handled automatically by the Mendix platform itself. It is a strong recommendation to not interfer with these mechanisms and always integrate via defined services or file contracts,  handled by the Mendix run-time server, see figure below.


### 1.1 External Integration by Contract and Secured

In Mendix, all external integration goes via the app's runtime server as presented in the diagram below. This internal Mendix architecture means that the Mendix model is in control of all integration, which also makes it more secure and easy to maintain. 

![](attachments/mendix-integration/runtime.png)

Mendix handles a large array of formats and protocols out of the box. For more information, see the [Integration how-to's](/howto/integration/). If there is a format that is not immediatelly supported, e.g. to an old legacy system, then it is easy to extend Mendix with a new adapter using the Platform SDK. 

Mendix recommends using REST Services, OData contracts or SOAP for real-time integration, SFTP for files and Kafka or a queue management system for distributed architectures. Mendix recommend avoiding any direct database queries to the Mendix database. In fact this option is disabled on Mendix Cloud. This is because the platform can not check external SQL risking problems in production. Poor SQL can destroy things in the app and  when things change in the Domain Model the platform can not warn the developer of broken links.

The standard for security on external integration is to use encrypted channels: SSL for service calls and SFTP for files. This always allows an app to be on different clouds and data centers will communicating safely. In fact the App itself and its separate components are harder

### 2 Think *Functionally* First {#functionally}

The most important thing for good solutions is to choose the right integration option from a lot of possibilities. These best practices will present an overview of integration methods and typical use cases.  The first best practice is to have an open mind regarding integration requirements. Think about what the integration really needs to do and consider more than one option for the solution.

In the time of SOA layers a central ESB would take care of quite a lot of integration functionality, such as transformation, routing, re-tries, queueing and even combining services. In the modern era of Microservices we aim for "dumb pipes and smart end-points", i.e. we almost always put transformation in the app itself, and within a close cluster of apps we do all integration directly, leaving for larger enterprises a thin API management layers or a message broket for communications between departments, networks and geographies.

This means that interface functionality starts inside one app and ends inside another system and the Mendix developer needs to think through the entire interaction functioally and technically. The best practice is to think functionally first. and then compare different technical options to see which one has least errors to manage and is the easiest to maintain through separate deployments of the two apps being integrated.

For example a data replication can be identified as functionally asynchonous, i.e. the process creating the business event with data does not have to be directly aware when the second app receives the information. In this case the most simple and stable implementation could be to use the Mendix Process Queue <<LINK AppStore> in the first app. Then implement a synchronous REST call from the second app to the first app, picking up the next message.


## 3 Best Practices for Integration Design:

* Think before you integrate. There is a chance that a simpler approach can make the project a lot easier to build, test, deploy and manage in production.
* List all the planned integration early, and maintain the list through the project 
* How can I make the overall integration simple, e.g. by choosing the right apps or microservices? Too much and too complex integration is a sign that apps should be merged or the functional division is sub-optimal.
* Start addressing external teams where we depend on integration early. If the other team would need to make changes to make our app work, that needs to be identified imediatelly.
* Even if there are existing external services, make sure that they are adequate, e.g. avoid all types of loops on services because they tend to make apps slow. If the source app can collect information internally with SQL it is more efficient and integration will be faster. 
* Then design the integration well. What triggers the interface? Who needs what data when? Can I cache the data (store a local copy)?
* What functional errors can occur and how do I manage them? What technical errors can occur and how do I manage them?
* How can the overall integration complexity be minimized?
* Consider which integration use case applies and which technical options are available, e.g. using the Mendix integration best practices
* Finally, make a conscious choice about why one method is chosen over another.

## 4 Use Case Categories and Best Practices

See section https://documentation-accp.cfapps.io/best-practices/architecture/integration/integration-overview

## 3 Basic Solution Categories

For most of the integration related to Mendix, there are five basic solution categories that are almost always used. Sometimes just one is used, and sometimes a combination is used:

![](attachments/mendix-integration/solution-categories.png)

* [UI integration](ui-integration) – This solution category includes, for example, using a deep link from the UI of one app to open the UI of another app (either in the same browser tab or another tab). It also includes website, content management system, and content delivery network integration.
* [Service integration](service-integration) – This is otherwise known as remote procedure call (RPC) integration. This category uses request and reply, and it almost always synchronous. The request-reply interfaces with REST and SOAP. There is also database integration with OData and SQL, business event and process integration, process orchestration, integration apps, and distributed ESBs.
* [Event-driven integration](event-integration) – This category usually does not have a response, and it is used to distribute data at large scales or large distances, or simply distribute data in a decoupled way. Event-driven integration can involve IoT, metrics, and social media, as well as state engines and event management.
* **Batch-oriented integration** – This category includes exporting, moving, and importing files as well as file integration.
* **Central data** – This category uses a pattern where data is landed and combined in a central place before it is distributed. This could be, for example, an operational data store (ODS); extract, transform, load (ETL); business intelligence (BI); or data lake solution.
* **Integration Layers & Gateways** – This category involves ESB, internal and external API management, and other gateways.

## 4 Overview of Use Case & Solution Options

Plotting functional use cases against basic methods of integration allows us to see that there are several common options available. That is good, because integration needs to be flexible in a solution for the designer to be able to select the best option for a specific situation. E.g. we may choose not to change an old system leading to another choice than if we built two new apps. 

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
