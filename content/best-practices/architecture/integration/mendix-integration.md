---
title: "Mendix & Integration"
parent: "integration-overview"
menu_order: 2
draft: true
---

## 1 Introduction

The Mendix Platform is good for building all types of apps and integrating them virtually any other technology. These integration best practices provide an overview of how Mendix integrates with other systems and technologies, using clear contracts as is prescribed for microservice architectures.

## 2 Mendix Integration Characteristics

### 2.1 Internal Integration Consistency Checks

Most business functions require UX for human interaction, some logic and workflow, some data to store and work on, and some integration with the rest of the organization. Thanks to the way the Mendix Platform works, all of these parts are kept together in the same application model, all the way from design to deployment. 

This results in the following benefits:

* Developers do not have to build and test internal integration
* Business features are kept together and consistency is checked by the platform
* It is easier and faster for non-technical developers to build Mendix apps

This diagram illustrates how the Mendix Platform keeps everything together from design to operations, as is recommended by the microservice-architecture and cloud-containerization paradigms:

![](attachments/mendix-integration/feature-requirements.png)

When using Mendix in almost any business use case, there is less alignment between development teams and less integration testing needed than with other technology choices. This provides the low-code advantage of speed, security, and flexibility.

### 2.2 External Integration by Contract {#external-contract}

Microservice architectures prescribe clear contracts for integration between components, and this is also the way Mendix operates. All external integration occurs via an application's runtime server, and this integration requires clear contracts to be defined in the Mendix app model. The app model is aware of all external integration contracts before deployment into production.

If, for example, Mendix allowed direct database connections to an internal database using SQL defined outside the Mendix app model, there would be a risk to the functioning of the app in production. Testing would be unable to predict all possible interactions. Therefore, in the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy), all connections to the Mendix internal database and file store have to use an agreed contract executed by the Mendix app server.

The diagram below illustrates the following points:

* Internal app integration between the Mendix UX, Mendix Runtime, database, and file server are private and not accessible by outside parties, which enhances the security and predictability of the app
* External integration is funneled through the Mendix Runtime, requiring contracts to be defined in design time
* A number of standard integration formats are shown (for more information, see the [Standard Integration Formats](#standard-formats) section below)

![](attachments/mendix-integration/runtime.png)

### 2.3 Standard Integration Formats {#standard-formats}

Mendix handles a large array of formats and protocols out of the box:

* **REST** – This is the most commonly used format for synchronous services, and it is always used for integration to the UI. The message format is JSON, which is a bit lighter than XML. Mendix supports REST publishing and the importing of Swagger files with REST service definitions, so this integration is easy to set up and maintain. There is always a microflow between the service and the endpoint.
* **SOAP** – This is still used by many older services, with WSDL files to share both the message definition and the endpoint. Mendix connects easily with SOAP services. 
* **OData** – This is a newer format already supported by the Mendix Platform. The transport is also REST, but instead of JSON, there is a direct OData contract from the endpoint to the domain model. This is often used with BI and SAP as well as between Mendix apps.
* **Deep links** – Deep links allow the developer to redirect an end-user with a specific context from the UX of one app to a specific point in the UX of another app. This is frequently used in microservice architectures.
* **URL links** – These links are used to redirect the end-user to other apps or web pages. They are also used to encapsulate an external component in a Mendix widget, such as a Google map with enriched information overlayed.
* **Queues** – Queues are used for asynchronous use cases. The Mendix Platform can use internal queues or connect to external queues. In both cases, there are good [Mendix App Store](https://appstore.home.mendix.com/index3.html) modules to import and use.
* **Kafka** – Kafka is a new modern distributed event-streaming system that Mendix integrates seamlessly with using the [Kafka Connector](https://appstore.home.mendix.com/link/app/67994/). Kafka is used for IoT and other high-volume, distributed, one-directional event streams.
* **File extracts & imports** – These are still frequently used, mostly via the [Excel Importer](https://appstore.home.mendix.com/link/app/72/) module, which works on *csv*-formated text files saved from Excel. These files are important for periodic busines processes, backups, and integrating with legacy systems.
* **FTP or SFTP** – This is used to move files to and from the internal file store in Mendix, often together with an import or export. The [SFTP](https://appstore.home.mendix.com/link/app/107256/) connector in the Mendix App Store provides an FTP client that can be used to call any FTP server it can reach.

For information on how to use these in the [version 7 Mendix Desktop Modeler](https://docs.mendix.com/releasenotes/studio-pro/7), see the [Mendix 7 Integration How-to's](/howto7/integration/).

### 2.4 Non-Standard Formats

If there is a format that is not immediateley supported, it is easy to extend Mendix using the [Mendix Platform SDK](/apidocs-mxsdk/mxsdk/). This can be required when integrating to legacy systems and mainframes. For example, there could be an RPC with text format messages communicating directly on TCP/IP sockets. 

Even if this requires a more technical Mendix developer, there is no reason to avoid such extensions. Once an adapter is built, it can be published in the [Mendix App Store](https://appstore.home.mendix.com/index3.html) and be reused in other Mendix apps (for more information, see [How to Share App Store Content](/developerportal/app-store/share-app-store-content) in the *Developer Portal Guide*).

Alternatively, when investing in this legacy integration, you could use a Mendix adapter or "integration app" that provides other apps and systems with the required access to old systems using modern protocols such as REST or OData. If the legacy system is on premises, this adapter can also be installed on premises, while the other apps will be on the Mendix Cloud or a VPC.

### 2.5 Security of Integration

Most Mendix apps are deployed on the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy), so communicating with non-Mendix apps means communicating over the internet. This is standard in all modern solutions via these encrypted channels:

* SSL for service calls
* Sending along an authenticated user token for UI links
* SFTP for files

User tokens can also be sent along with service calls from one app to the other, but this is rarely necessary. The source app of any service call should make sure that the end-user is authorized to perform the UX function that requires the service call. This means that for service integration, app-level authentication with SSL is usually sufficient and simpler to manage. 

## 3 Summary

The Mendix Platform allows developers to adapt to almost any situation, which is why the number of business use cases for customers and partners using Mendix is constantly increasing. The integration capabilities of the Mendix Platform are solid, which means the main challenge for integration in Mendix app projects is the dendendency on other systems to make good services available.
