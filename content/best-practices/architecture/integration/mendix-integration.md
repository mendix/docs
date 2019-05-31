---
title: "Mendix & Integration"
parent: "integration-overview"
menu_order: 2
draft: true
---

## 1 Introduction

The Mendix Platform is very good for building business functionality and for integrating apps with virually any other technology. This Best Practices section provides an overview of how Mendix integrates with other parts of the enterprise landscape. It also describes how Mendix apps are by default good microservices keeping GUI, logic, and data together and requiring clear contracts for integration.

## 2 Mendix Integration Characteristics

### 2.1 Internal Integration Available Out of the Box

Most business functions require UX for human interaction, some logic and workflow, some data to store and work on, and some integration with the rest of the organization. Thanks to the way the Mendix Platform works, all of these parts are kept together in the same application model all the way from design to deployment. This results in the following benefits:

* Developers do not have to build and test internal integration
* Business features are kept together and consistency is checked by the platform
* It is easier and faster for non-technical developers to build Mendix apps

This diagram illustrates how the Mendix Platform keeps everything together from design to operations, as is recommended by the microservice-architecture and cloud-containerization paradigms:

![](attachments/mendix-integration/feature-requirements.png)

### 2.2 External Integration Is by Contract

In Mendix, all external integration occurs via the app's runtime server, which requires clear contracts defined in the Mendix app model to allow for integration. This means that any app is aware of potential integration before deployment into production, making it secure and manageable. 

The opposite approach here would be to allow for direct database connections with SQL defined outside the Mendix app model. This would mean that integration could change after deployment, testing would be unable to predict interactions, and the app functioning in runtime would be at risk. Therefore, in the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy), direct connections to the Mendix internal database and file store are not allowed.

The diagram below shows the following points:

* Internal app integration between the Mendix UX, Mendix Runtime, database, and file server are private and not accessible by outside parties, which enhances the security and predictability of the app
* External integration is funneled through the Mendix Runtime, requiring contracts to be defined in design time
* A number of standard integration formats are shown (for more information, see the [Standard Integration Formats](#standard-formats) section below)

![](attachments/mendix-integration/runtime.png)

### 2.3 Standard Integration Formats {#standard-formats}

Mendix handles a large array of formats and protocols out of the box:

* **REST** – This is the most commonly used format for synchronous services, and it is always used for integration to the UI. The message format is JSON, which is a bit lighter than XML. Mendix supports REST publishing and the importing of Swagger files with REST service definitions, so this integration is easy to set up and maintain. There is always a microflow between the service and the endpoint.
* **SOAP** – This is still used by many older services, with WSDL files to share both the definition of the message and the endpoint. Mendix connects easily with SOAP services. To validate messages before sending them, XSD validation is available for SOAP interfaces.
* **OData** – This is a newer format already supported by the Mendix Platform. The transport is also REST, but instead of JSON, there is a direct OData contract from the endpoint to the domain model.
* **Deep links** – Deep links allow the developer to redirect an end-user with a specific context from the UX of one app to a specific point in the UX of another app. This is frequently used in microservice architectures.
* **URL links** – These links are used to redirect the end-user to other apps or web pages. They are also used to encapsulate an external component in a Mendix widget, such as a Google map with enriched information overlayed.
* **Queues** – Queues are used for asynchronous use cases. The Mendix Platform can use internal queues or connect to external queues. In both cases, there are good [Mendix App Store](https://appstore.home.mendix.com/index3.html) modules to import and use.
* **Kafka** – Kafka is a new modern distributed event-streaming system that Mendix integrates seamlessly with using the [Kafka Connector](https://appstore.home.mendix.com/link/app/67994/). Kafka is used for IoT and other high-volume, distributed, typically one-directional event flows.
* **File extracts & imports** – These are still frequently used, mostly via the [Excel Importer](https://appstore.home.mendix.com/link/app/72/) module, which works on *csv*-formated text files saved from Excel. These files are important for periodic busines processes, backups, and integrating with legacy systems.
* **FTP or SFTP** – This is used to move files to and from the internal file store in Mendix, often together with an import or export. The [SFTP](https://appstore.home.mendix.com/link/app/107256/) connector in the Mendix App Store provides an FTP client that can be used to call any FTP server it can reach.

For information on how to use these in the [version 7 Mendix Desktop Modeler](https://docs.mendix.com/releasenotes/studio-pro/7), see the [Mendix 7 Integration How-to's](/howto7/integration/).

### 2.4 Non-Standard Formats

If there is a format that is not immediateley supported, it is easy to extend Mendix using the [Mendix Platform SDK](/apidocs-mxsdk/mxsdk/). This can happen when integrating to legacy systems and mainframes. For example, there could be an RPC with a text format message communicating directly on sockets over TCP/IP. 

Even if this requires a more technical Mendix developer, there is no reason to avoid such extensions. Once the adapter is built, it can be published as in the Mendix App Store and be reused in other Mendix apps (for more information, see [How to Share App Store Content](/developerportal/app-store/share-app-store-content) in the *Developer Portal Guide*).

### 2.5 Security of Integration

Most Mendix apps are deployed on the Mendix cloud and communicating with non-Mendix apps means communicating over the Internet. This is standard in all modern solutions, using encrypted channels:

* SSL for service calls
* Sending along the authenticated user token for UI links
* SFTP for files

User tokens can also be sent along with service calls from one app to the other, but this is rarely necessary. The source app of any service call should make sure that the end-user is authorized to perform the UX function that requires the service call. I.e. for service integration, app-level authentication with SSL is usually sufficient and simpler to manage. 

## 3 Integration Categories

The Best Practices are oganized as a number of solution categories where Mendix often plays an important role: 

* [Service Integration](service-integration)
* [UI Integration](ui-integration)
* [Event-Based Integration](event-integration)
* [Batch Integration](batch-integration)
* [Central Data](central-data)
* [Integration Layers](integration-layers)
* [Ops Itegration](ops-integration)  <<added>>
  
Within these solution categories there are a number of use-cases and integration scenarios used in the documentation that shows how Mendix integrates within a landscape. Those can be accessed directly via the links below:

### 3.1. Service Integration cases

<<SHOULD RE-DO SERVICE INTEGRATION FIRST - leave this like this for now>>
* 3. REST Request-Reply to Transfer Data
* 4. OData Integration
* 5 Integration Apps & Adapters

### 3.2. UI Integration cases

* 2 Deep Linking from App to App
* 3 Web Link Integration for Websites
* 4 CMS Integration for Customer Portals
* 5 CDN Integration for Global Portals & Apps

### 3.3. Event Based Integration

* 4 Event Streams, IoT, Logging & Metrics
* 5 State Engines & Event Managers
* 6 Using Queues with Mendix

### 3.4 Batch Integration

* 2 Using Batch Processing
* 3 Reference Data Examples with Mendix
* 4 File Integration and Management
* 5 Export & Import
* 6 ETL, DWH & BI Integration

### 3.5 Central Data

* 2 Shared Data Apps (SDA)
* 3 Self-learning Processes using Data Lakes  <<WILL RE-NAME THIS>>

### 3.5 Process Integration

* 2 Business Events & Process Flow
* 4 Case Management
* 5 Process Orchestration
* 6 Event Managers

### 3.6 Integration Layers

* 2 From SOA to Microservices
* 5 Microservice Integration Apps

### 3.7 Ops Integration

* 1 CICD and Test Automation
* 2 Deployment and Monitoring

## 4 Summary

Mendix is a platform that allows the developer to adapt to almost any situation. The amount of business use-case where Mendix has been used by Mendix partners and customers is very large and growing. The integration capability is very solid, so the main challenge with integration for Mendix projects is the dendendency on other systems to make good services available. 
