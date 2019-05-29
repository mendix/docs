---
title: "Mendix & Integration"
parent: "integration-overview"
menu_order: 1
draft: true
---

## 1 Introduction

The Mendix Platform is very good for building business functionality and for integrating apps with virually any other technology. This Best Practices section provides an overview of how Mendix integrates with other parts of the enterprise landscape, and how Mendix apps by default are good microservices keeping GUI, logic and data together and requiring clear contracts for integration.

## 2 Mendix Integration Characteristics

### 2.1 Internal Integration is Out of the Box

Most business functions require a UX for human interaction, some logic and workflow, some data to store and work on, and some integration with the rest of the organization. Thanks to the way the Mendix platform works, all these parts are kept together in the same model all the way from design to deployment resulting in:

1. Developers do not have to build and test internal integration
2. Business features are kept together and consistency checked by the platform
3. It is much easier and faster for non-technical developers to build Mendix apps.

The diagram presents how the Mendix Platform keeps everything together from design to operations, as is recommended by microservice architecture and the cloud-containerization paredigms

![](attachments/mendix-integration/feature-requirements.png)

### 2.2 External Integration is by Contract

In Mendix, all external integration occurs via the app's runtime server, as presented in the diagram below, and it requires clear contracts to be defined in the Mendix model to allow the integration. This means that any app is aware of the potential integration before deployment into production, making it secure and manageable. 

The contrary to this would be to allow direct DB connections with SQL defined outside the Mendix model. THis would mean that integration can change after deployment, testing is un-able to predict interactions and the app functioning in run-time would be at risk. Therefore in the Mendix Cloud, direct connections to the Mendix internal database and file-store are dis-allowed.

The diagram below shows:
1. Internal app integration between the Mendix UX, run-time, database and fileserver are private and not accessible by outside parties, which enhances security and predictability of the app.
2. External integration is funneled through the Mendix run-time, requiring contracts to be defined in design time. 
3. A number of standard integration formats are shown, see also next section.

![](attachments/mendix-integration/runtime.png)

For new 

### 2.3 Standard Integration Formats

Mendix handles a large array of formats and protocols out of the box  The diagram above shows some of those formats:

1. REST is the most commonly used format for synchronous services, and it is always used for integration to the UX. Message format is JSON which is a bit lighter than XML. Mendix supports REST publish and importing of Swagger files with REST service definitions, so it is very easy to set up and maintain. There is always a microflow between the service and the end-point.
2. SOAP is still used by many older services, using a WSDL files to share both definition of the message and the end-point. Mendix connects easily with SOAP services. To validate messages before sending them, XSD validation is available for SOAP interfaces.
3. OData is a newer format already supported by Mendix. The transport is also REST, but instead of JSON it has a direct OData contract from the end-point to the domain model. Mendix 8 will enhance this capability.
4. Deep-links allows the developer to re-direct a user with a specific context from the UX of one App to a specific point in the UX of another app. This is frequently used in microservices architectures.
5. URL links are used to re-direct to other apps or web-pages, but also for encapsulating an external component in a Mendix widget, such as a Google map with enriched information overlayed.
6. Queues are used for asynchronous use-cases. Mendix can use internal queues or connect to external queues, in both cases there are good App Store modules to import and use.
7. Kafka is a new modern distributed event streaming system that Mendix integrates seemlessly with using the Kafka connector. It will be used for IoT and other high-volume, distributed, typically one-directional event flows.
8. File extracts and imports are still frequently used, mostly using the Excel module, that works on csv-formated text files saved from Excel. Files are important for periodic busines processes, back-ups, and integrating with legacy systems.
9. FTP or SFTP is used to move files to and from the internal file store in Mendix, often together with an import or export. A module in the AppStore provides the FTP client that can be used to call any FTP server that it can reach.

For information on how to use these in the Mendix Modeller, see the [Integration How-to's](/howto/integration/).

### 2.4 Non-standard Formats

If there is a format that is not immediateley supported it is easy to extend Mendix using the [Mendix Platform SDK](/apidocs-mxsdk/mxsdk/). This can happen when integrating to legacy systems and mainframes. There could be an RPC with a text format message communicating directly on sockets over tcp/ip. 

Even if this requires a more technical Mendix developer, there is no reason to avoid this option, because once the adapter is built it can be made a component in the local App Store and re-used by other Mendix apps.

Mendix recommends using REST services, OData contracts, or SOAP for real-time integration; SFTP for files; and Kafka or a queue management system for distributed architectures. Mendix also recommends avoiding any direct database queries to the Mendix database. In fact, this option is disabled on Mendix Cloud, because the platform cannot check external SQL, which raises the risk of problems in production. Poor SQL can destroy things in an app, and when things change in the domain model, the platform cannot warn the developer of broken links.

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
* 5 CDN Integration for Global Portals & Apps

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
