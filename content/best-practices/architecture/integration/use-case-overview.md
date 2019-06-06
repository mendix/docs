---
title: "Overview of Use Cases"
parent: "integration-intro"
menu_order: 4
draft: true
---

## 1 Basic Solution Categories

For most of the integration related to Mendix, there are five basic solution categories that are almost always used. Sometimes just one is used, and sometimes a combination is used:

![](attachments/basic-solution-categories/solution-categories.png)

* [Service Integration](service-integration) – This is otherwise known as remote procedure call (RPC) integration. This category uses request and reply, and it is almost always synchronous. The request–reply interfaces with REST and SOAP. There is also database integration with OData and SQL, business event and process integration, process orchestration, integration apps, and distributed ESBs.
* [UI Integration](ui-integration) – This solution category includes, for example, using a deep link from the UI of one app to open the UI of another app (either in the same or another browser tab). It also includes integration with websites, content management systems, and content delivery networks.
* [Event-Based Integration](event-integration) – This category usually does not have a response, and it is used to distribute data at large scales or large distances, or simply distribute data in a decoupled way. Event-driven integration can involve IoT, metrics, and social media, as well as state engines and event management.
* [Batch Integration](batch-integration) – This category includes exporting, moving, and importing files as well as file integration.
* [Central Data](central-data) – This category uses a pattern where data is landed and combined in a central place before it is distributed. This could be, for example, an operational data store (ODS); extract, transform, load (ETL); business intelligence (BI); or a data lake solution.

## 2 Use Cases & Integration Methods {#overview}

Plotting functional use cases against basic integration methods allows you to see the common solutions available. That is good, because integration needs to be flexible for an Architect to select the best method for a specific situation. 

For example, you may choose not to change an old system, which leads you to choose a different integration method than you would if you were building two new apps. This means that you may choose the less ideal way to integrate in order not to change an old system. In the scenario that you were building two new apps, you would make another choice.

As another example, when integrating to SaaS solutions and older systems, there may only be one method available. Such a scenario will determine which integration method to use, rather than these guidelines. 

The table below plots use cases and integration methods, with further detail on the use cases available in the subsequent sections. The table uses the following symbols:

| Symbol | Meaning |
| --- | --- |
| ![](attachments/use-case-overview/green.png) | The common or preferred use of the method. In some cases, the solution will require several methods, so several of these symbols are used. |
| ![](attachments/use-case-overview/grey.png) | Possible use in some cases. |

| Use Case | UI Integration | RPC / Services | Events / Queues | Export, Import, Batch | Central Data |
| --- | --- | --- | --- | --- | --- |
| [SSO, AD & Identity Integration](#sso) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/green.png) | | | |
| [ Importing & Distributing Reference Data](#import-dist) | | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) |
| [Viewing & Searching Data in Another System](#view-search)  | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/green.png) | | | |
| [Using & Referring to Data in Another System](#use-refer) | | ![](attachments/use-case-overview/green.png) | | | ![](attachments/use-case-overview/grey.png) |
| [Process Integration](#process) | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/grey.png) | | |
| [Export, Import & Batch Processing](#export-import) | | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/grey.png) |
| [Master Data Integration](#master-data)| ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) | | |
| Distributing Master & Transactional Data | | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/grey.png) |
| Mobile Integration & Offline | | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) | | |
| [CMS & CDN Integration](#cms-cdn) | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) | | | |
| [Integration with BI & Reporting](#int-bi) | | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) |
| Process Orchestration & State Engines | | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) | | ![](attachments/use-case-overview/green.png) |
| [Integration with CICD, Ops & Monitoring](#int-cicd) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/green.png) |
| [Integration with AI & IoT Solutions](#ai-iot) | | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) | ![](attachments/use-case-overview/green.png) |
| [Integration with AI & Machine Learning](#ai-machine) | | ![](attachments/use-case-overview/green.png) | ![](attachments/use-case-overview/grey.png) | | ![](attachments/use-case-overview/green.png) |

## 3 Use Case Descriptions

### 3.1 SSO, AD & Identity Integration {#sso}

This use case involves handling security around the following:

* User login integration using standard SSO (for example, SAML and Open ID)
* Service integration (for example, SSL, tokens, and encryption)
* Events (for example, securing data on queues)
* Batch interfaces (for example, using SFTP)

### 3.2 Importing & Distributing Reference Data {#import-dist}

This use case involves managing reference data, such as country codes, currencies, and  product sets. These slow-changing datasets are often maintained in another system and regularly imported into an app (for example, from a CSV file).

Along with a microservices cluster, Mendix recommends using one app as the reference data-importing point and then distributing data from there to the rest of the apps.

### 3.3 Viewing & Searching Data in Another System {#view-search}

A typical use case for integration is using one app to view or search data from another system. This is a simple functional use case, but it has a few technical options that are worth understanding.

### 3.4 Using & Referring to Data in Another System {#use-refer}

This use case involves searching and viewing data in another system as well as store parts of the data locally and set up a functional link between the objects. With such a link, you can  subscribe to updates, reretrieve a new version of the data on request later, or configure a downstream system (for example, finance) to use the reference for its processing.

### 3.5 Process Integration {#process}

Process integration is the most common integration type in most enterprises. As soon as a business process spans more than one app, there is usually some level of process integration needed. For example, when an end-user submits an order in an ordering system, it should go to a fulfilment system and maybe after that to finance. And of course you will want to also inform the customer.

Read more in [Process Integration](process-integration).

### 3.6 Export, Import & Batch Processing {#export-import}

Even in a real-time world, there is plenty of integration that still makes sense to do in a batch-oriented way. Batch integration is usually decoupled, because one step extracts a file, another step moves the file, and a third step imports the file.

This is a great option for reference data and other periodically updated data as well as for initial loads and exports towards DWH solutions, for example.

Read more in [Export, Import & Batch Processing](export-import-batch).

### 3.7 Master Data Integration {#master-data}

Master data consists of semi-permanent objects that are used throughout several business processes. That means that several processes and/or departments use the same objects (and often also change the same objects). The most common example is customer data, where a  customer may order products from five different departments but needs to be treated as the same customer.

In its full scope, master data management is a complex process involving the following:

* A central place where the master copy of the data is stored
* Several mechanisms for updating the master data
* A (normally human) workflow that is managed by data stewards in order to resolve conflicts and de-duplicate data
* One or more mechanisms for distributing updates to the master data

The best practices will describe how to update data in the master app and how to distribute the data to other subscribing apps.

### 3.8 Distributing Master & Transactional Data

This use-case is about the distribution of Master data and of transactional data across the enterprise using a variety of methods including:
* REST Pull from the recipient
* REST Push from the source
* OData integration
* Events on queues
* Files

### 3.9 Mobile Integration & Offline

This section involves the integration with Mobile apps and the synchronization of data from an Off-line app back to the Mobile app. It also deals with push notifications.

### 3.10 CMS & CDN Integration  {#cms-cdn}

Mendix often needs to integrate with content management systems (CMS) and content delivery nodes (CDN). CMS allows for external facing apps to have a main menu and marketing material in a CMS system that is specialized for these purposes, while Mendix runs the functional part of the portal. CDN solutions provide better responsiveness for geo-scaled solutions.

### 3.11 Integration with BI & Reporting {#int-bi}

This use case describes several options for how Mendix developers can provide data from the apps towards a DWH, data lake, or other BI tooling using, for example, files, OData, or database dumps. This use case will also look at creating reports in Mendix apps and integration with data mining tools like Tableau.

### 3.12 Process Orchestration & State Engines

This is describing active and passive process orchestration, mainly automated straight-through-processing, while Case Management handles workflow and human process management. 

### 3.13 Integration with CICD, Ops & Monitoring {#int-cicd}

DevOps is rolling out around the world and many processes—from development and testing to deploying and monitoring—are being automated. Together with cloud and low-code technologies, DevOps is contributing to the digital transformation of the IT industry. Integration from functional apps towards this automation and operations tooling is becoming increasingly important. These areas will be covered in the use cases:.

* CI/CD integration
* Test automation (building specific test services)
* App management
* Health checks and basic monitoring
* Business activity monitoring
* Professional monitoring and trend analysis
* Security monitoring

DevOps involves collaborating and using the same (or similar) tools to improve the flexibility of releasing functionality more often while maintaining stable solutions in production.

### 3.14 Integration with IoT Solutions {#ai-iot}

Mendix already integrates well with various IoT solutions, from monitoring farm-animals to office locations to technical components in industrial processes. This use case describes what to think for this type of integration and provides simple example implementations to use as references.  << IoT solutions>>

### 3.15 Integration with Machine Learning {#ai-machine}

Mendix automation apps are using statistical information from Data Lakes to finetune automated processes, and can include algorithms as Java actions or Java scripts from e.g. AWS Machine learning solutions. Mendix also integrates well with Watson from IBM: [IBM](/refguide/ibm/ibm-watson-connector)
