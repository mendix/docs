---
title: "Integration Solutions"
parent: "integration-overview"
menu_order: 2
draft: true
---

{{% todo %}}[**Needs review after restructuring. This content now serves as the top-level solutions content. It can be moved into a separate doc called "Select the Best Integration Solution"; but in that case, new content would need to be added for this doc.**]{{% /todo %}}

## 1 Deciding on the Best Integration Solution

This is an example sequence of questions that an Architect or Lead Developer would consider to find the best way to integrate:

1. What is the business use case? <br />
	a. Can I reference the [Overview of Use Cases & Solution Options](#overview) section below to see if one use case fits?
2. What are the functional requirements? <br />
	a.  Who needs what data when and for which reason? <br />
	b. Does it need to be real-time? <br />
	c. What error-handling options should be there?
3.  What are the functional options? <br />
	a. How can we operate this interface in production? <br />
	b. How do we manage errors? <br />
	c. Real-time or batch? <br />
	d. Request–reply or events? <br />
	e.  Is there an available integration layer? An [integration layer](integration-layers) means there are two parts of the integration where you one can choose events, request–reply, or batch separately for the best possible operational solution.<br />
		* If there is an integration layer available, what functions does it handle (for example security, monitoring, queueing, simple mapping)? <br />
4. What are the technical options for each functional option? <br />
	a. What protocols are available? <br />
	b. What will each option mean for operations? <br />
	c. What is the most secure option? <br />
	d. Which option has better error handling?

The options should then be compared against each other.

It is important to think of the overall solution, and to recognize that integration starts inside one system and ends inside (one-to-many) other systems.

If it gets complicated on one side of an integration, it is often because the other side of the integration is not ideal. Then, the best solution may be to try to change the other side of the integration.

## 2 Five Basic Solution Categories

{{% todo %}}[**Is it correct to say only "five" here, when there are 8 solution categories that will be published? Furthermore, "Process Integration" is not listed as a basic solution category here, yet it has extra content in the form of an example ("Workflow Integration with Data Transfer") -  if it's not a basic solution option, why does it already have an example?**]{{% /todo %}}

For most of the integration related to Mendix, there are five basic solution categories that are almost always used. Sometimes just one is used, and sometimes a combination is used:

![](attachments/integration-solutions/solution-categories.png)

* [Service Integration](service-integration) – This is otherwise known as remote procedure call (RPC) integration. This category uses request and reply, and it is almost always synchronous. The request-reply interfaces with REST and SOAP. There is also database integration with OData and SQL, business event and process integration, process orchestration, integration apps, and distributed ESBs.
* [UI Integration](ui-integration) – This solution category includes, for example, using a deep link from the UI of one app to open the UI of another app (either in the same or another browser tab). It also includes integration with websites, content management systems, and content delivery networks.
* [Event-Based Integration](event-integration) – This category usually does not have a response, and it is used to distribute data at large scales or large distances, or simply distribute data in a decoupled way. Event-driven integration can involve IoT, metrics, and social media, as well as state engines and event management.
* [Batch Integration](batch-integration) – This category includes exporting, moving, and importing files as well as file integration.
* [Central Data](central-data) – This category uses a pattern where data is landed and combined in a central place before it is distributed. This could be, for example, an operational data store (ODS); extract, transform, load (ETL); business intelligence (BI); or a data lake solution.

## 3 Overview of Use Cases & Integration Methods {#overview}

{{% todo %}}**Should the methods in the table below correspond more closely to the basic solution categories listed above? There are 5 solution categories above and 5 methods in the table - some of them match up, but maybe that correspondence can be clarified?**]{{% /todo %}}

Plotting functional use cases against basic integration methods allows you to see the common solutions available. That is good, because integration needs to be flexible for an Architect to select the best method for a specific situation. 

For example, you may choose not to change an old system, which leads you to choose a different integration method than you would if you were building two new apps. This means that you may choose the less ideal way to integrate in order not to change an old system. In the scenario that you were building two new apps, you would make another choice.

As another example, when integrating to SaaS solutions and older systems, there may only be one method available. Such a scenario will determine which integration method to use, rather than these guidelines. 

The table below plots use cases and integration methods, with further detail on the use cases available in the subsequent sections. The table uses the following symbols:

| Symbol | Meaning |
| --- | --- |
| ![](attachments/integration-solutions/green.png) | The common or preferred use of the method. In some cases, the solution will require several methods, so several of these symbols are used. |
| ![](attachments/integration-solutions/grey.png) | Possible use in some cases. |

| Use Case | UI Integration | RPC / Services | Events / Queues | Export, Import, Batch | Central Data |
| --- | --- | --- | --- | --- | --- |
| [SSO, AD & Identity Integration](#sso) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/green.png) | | | |
| [ Importing & Distributing Reference Data](#import-dist) | | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) |
| [Viewing & Searching Data in Another System](#view-search)  | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/green.png) | | | |
| [Using & Referring to Data in Another System](#use-refer) | | ![](attachments/integration-solutions/green.png) | | | ![](attachments/integration-solutions/grey.png) |
| [Process Integration](#process) | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/grey.png) | | |
| [Export, Import & Batch Processing](#export-import) | | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/grey.png) |
| [Master Data Integration](#master-data)| ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) | | |
| Distributing Master & Transactional Data | | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/grey.png) |
| Mobile Integration & Offline | | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) | | |
| [CMS & CDN Integration](#cms-cdn) | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) | | | |
| [Integration with BI & Reporting](#int-bi) | | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) |
| Process Orchestration & State Engines | | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) | | ![](attachments/integration-solutions/green.png) |
| [Integration with CICD, Ops & Monitoring](#int-cicd) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/green.png) |
| [Integration with AI & IoT Solutions](#ai-iot) | | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) | ![](attachments/integration-solutions/green.png) |
| [Integration with AI & Machine Learning](#ai-machine) | | ![](attachments/integration-solutions/green.png) | ![](attachments/integration-solutions/grey.png) | | ![](attachments/integration-solutions/green.png) |

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

{{% todo %}}[**Needs content to justify keeping in table above**]{{% /todo %}}

### 3.9 Mobile Integration & Offline

{{% todo %}}[**Needs content to justify keeping in table above**]{{% /todo %}}

### 3.10 CMS & CDN Integration  {#cms-cdn}

Mendix often needs to integrate with content management systems (CMS) like Magnolia. This allows for external facing apps to have a main menu and marketing material in a CMS system that is specialized for these purposes, while Mendix runs the functional part of the portal.

This use case will also discuss Mendix integration with content delivery node solutions (such as Akamai) for geo-scaled solutions.

### 3.11 Integration with BI & Reporting {#int-bi}

This use case describes several options for how Mendix developers can provide data from the apps towards a DWH, data lake, or other BI tooling using, for example, files, OData, or database dumps.

This use case will also look at creating reports in Mendix apps and integration with data mining tools like Tableau.

### 3.12 Process Orchestration & State Engines

{{% todo %}}[**Needs content to justify keeping in table above**]{{% /todo %}}

### 3.13 Integration with CICD, Ops & Monitoring {#int-cicd}

DevOps is rolling out around the world and many processes—from development and testing to deploying and monitoring—are being automated. Together with cloud and low-code technologies, DevOps is contributing to the digital transformation of the IT industry.

Integration from functional apps towards this automation and operations tooling is becoming increasingly important. These areas will be covered in the use cases:.

* CI/CD integration
* Test automation (building specific test services)
* App management
* Health checks and basic monitoring
* Business activity monitoring
* Professional monitoring and trend analysis
* Security monitoring

DevOps involves collaborating and using the same (or similar) tools to improve the
flexibility of releasing functionality more often while maintaining stable solutions in production.

### 3.14 Integration with AI & IoT Solutions {#ai-iot}

{{% todo %}}[**Keep "Google" below? No documentation available on Google, but on IBM and Mindsphere yes, as well as SAP (which could be listed here)**]{{% /todo %}}

Mendix already integrates well with AI solutions from [IBM](/refguide/ibm/ibm-watson-connector) and Google and with IoT solutions such as [Siemens MindSphere](/howto/mindsphere/). 

This use case describes what to think for this type of integration and provides simple example implementations to use as references.

### 3.15 Integration with AI & Machine Learning {#ai-machine}

{{% todo %}}[**Needs content to justify keeping in table above**]{{% /todo %}}
