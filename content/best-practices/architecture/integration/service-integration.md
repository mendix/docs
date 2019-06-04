---
title: "Service Integration"
parent: "integration-overview"
menu_order: 3
draft: true
---

## 1 Introduction

Service integration means using a synchronous request-reply interaction. The system or person that initiates the call can take a relevant action depending on what the reply contains. If there is an error or a timeout, it can be handled directly in the context of where the call was initiated from.

There are these types of service integration:

* **REST call** – This type is used for calling most modern APIs and SaaS systems, initiating a function, finding information, or sending a business event. This is also used to transfer data to another app or system when data needs to be validated by a destination app (for example, when a user fills in an order in a portal, and the ordering app needs to accept it for it to be valid).
* **REST pull** – This is the most common way to keep data in sync between two Mendix apps, or to retrieve the next business event in an automated chain.
* **OData retrieve** – This type is becoming popular for reading data in other apps and systems. OData creates a data contract directly from the data model that allows another app to use that data as remote objects. OData is also used to retrieve information from modern versions of SAP.
* **SOAP call** – This is used in many applications that are 10–20 years old and on many ESBs. It is similar to REST, but it uses XML instead of JSON as the messaging format. It is more formal and the messages are a bit larger, which makes it unsuitable for mobile and UX integration. 
* **RPC integration** – A remote procedure call (RPC) can have many formats (for example, text messages on TCP/IP sockets). When something is identified with "RPC," that generally means it is older than the SOAP format, often from the 1990s. Such a system is often a legacy, and a custom module or adapter should be created to make the connection easily reusable.
* **DB integration** – This means you connect directly to a database, using direct SQL on base tables or database views. Or, you can call a stored database procedure, which is virtually a remote procedure call directly on a database.
* **Queue integration** – Calls to put messages on queues and get them from the queues are also synchronous. However, the queues are generally used in asynchronous scenarios and for event streams, as further described in [Event-Based Integration](event-integration).

![](attachments/service-integration/si-1.png)

Service integration is the most commonly used integration paradigm, and it should be considered the default method. What you need to decide is how far the synchronous part of the integration needs to go. You can decide this via these two questions:

1. Does the synchronous part of the integration end when the call is processed in the destination? That means you have a confirmation of delivery or an error message, but also an operational dependency on the destination app being available.
2. Does the synchronous part of the integration end on a queue or message broker? In that case, any end-to-end confirmation of delivery is in a separate service (for details, see [Event-Based Integration](event-integration)).	

The sections below focus on the simpler case, in which there is an end-to-end synchronous call and no integration layer in between.
	
## 2 REST to Call Other Systems {#push-transfer}

Most common off-the-shelf systems or SaaS systems provide API services to initiate a function, get data, and update data. REST is the most commonly used format today, while SOAP was the most common ten years ago. The API services validate the input fields, and do something before returning an answer or acknowledgement.

Pushing data to another system is useful when there is validation in the destination app that should be presented back to the source app and the end-user directly. It allows errors to be corrected immediately or any other action to be taken, as determined by the end-user. 

In a typical scenario, the end-user fills in an order or form in one app, and the resulting information is processed in another app, as visualized in this diagram:

![](attachments/service-integration/si-rest-to-call.png)

The first app does the technical validation at the field-level. Only the destination app can do the final functional validation. If something does not work, the end-user can change the data and retry, try again later, or abandon the activity entirely. The end-user is an active part of the service integration across the two apps.

### 2.1 When the Destination App Is Down

The issue with synchronous end-to-end calls is that they create an operational dependency. The systems are tightly coupled, because the second app has to be up and running for the service to work. To handle this, there are the following options:

* The business function in the source app that needs the service is disabled when the destination app is down
* The source system stores the input and tells the end-user to retry later
* The source system stores the input and retries automatically later, informing the end-user of the results separately

There is a tradeoff between receiving direct feedback (which is good) and one or both of the following points:

* How easy it is to make sure the second app is up and running
* How acceptable it is to retry later

### 2.2 Retries & Selective Validation

This diagram shows the three integrations that can be involved in pushing events or data:

![](attachments/service-integration/push-validation.png)

These steps are illustrated in the diagram:

1. The main service call pushes events directly from the process that changes the data in the destination, directly providing full validation. 
2. To manage automatic retries, it is possible to use the Mendix [Process Queue](https://appstore.home.mendix.com/link/app/393/) module, where events are stored if the destination app is down. A separate process retries the messages to the destination until it is delivered. If there are validation errors in this case, the end-user is informed separately.
3. If the processing in the destination app is complex and takes time, and we want the end user to be able to continue his work, it is possible to use the [Process Queue](https://appstore.home.mendix.com/link/app/393/) module in the destination. The service that receives the call does selected validations, then it stores the message on a queue before acknowledging the reception of data.

### 3 REST Pull to Transfer Data {#pull-transfer}

To avoid retries, Mendix apps often use a REST pull between themselves to replicate data or transfer business events. This is the easiest option when replicating data from points A to B. The system that needs the data (the destination app) is in charge of triggering the interface. If it is up and running, it can also poll for changes or business events. If the source is down, we know that no changes happen and no business events are created.

This means that we get rid of an operational dependency. The two apps do not need to be up and running at the same time. When the destination app comes up after downtime, it quickly recovers the missing data before it starts operating.

This diagram functionally illustrates this situation:

![](attachments/service-integration/si-intro2.png)

The user interaction is separated from the integration, meaning it is "functionally asynchonous." The end-user finishes their work, which creates an event or a change in the source app. The destination app uses a synchronous REST pull to retrieve the changed data or business event. The two apps are operationally decoupled: the first app can operate without the second app being up and running, and vice versa. 

For this to work, there needs to be something in the source app that tags which data needs to be picked up. This diagram shows three common options:

![](attachments/service-integration/pull-transfer.png)

Option 1 – Use the last updated time stamp of the record to retrieve `all changes since <last time stamp>`. This is quite robust, but for high volumes, there are some edge cases where this can miss an update.
Option 2 – Use a flag on the base table that indicates the record changed, which is reset when the change is picked up. For more than one subscriber, there will be more than one flag (for details, see [Workflow Integration with Data Transfer Example](workflow-int-data-transfer)). This is the recommended option for most situations
Option 3 – Use the Mendix [Process Queue](https://appstore.home.mendix.com/link/app/393/) module. In this case, the source app will already map the data into a REST JSON message that is ready to be picked up from the outbound queue. 

Options 1 and 2 mean that the service that gets the data or event works on the base tables in the domain model. In turn, this means that if the same data is changed four times while the destination app is down, it will only lead to one update when polling starts again.

For option 3, every transaction is registered as a business event that is placed on the internal queue. This means that four changes will lead to four events, providing the entire change history. 

Functional requirements will decide which mechanism is preferred. Often option 2 is used to keep data synchronized, while option 3 is used for business events and transactions.

{{% alert type="info" %}}
"Functionally asynchronous" means the process that results in a business event does not complete the integration end-to-end. Instead, it may create a REST message and put it on an internal queue for delivery by a separate process.
{{% /alert %}}

### 4 OData Retrieve {#odata-retrieve}

For several reasons Mendix does not allow other systems to access the internal data-base tables directly, see also <<Introduction to Integration>> and <<Mendix and Integration>>.

As an alternative to this and to REST services, Mendix enables OData contracts to be used. OData does not use a Microflow to retrieve data as is the case for REST calls. Instead the OData contract automatically creates REST end-points from the data-base tables with very little effort by the developer. 

OData is a relatively new protocol and it requires both sides of the integration to be OData enabled. It is now mainly used for :
1. BI solutions can access specific data in Mendix apps, more real-time than data-warehose solutions
2. Mendix apps can access data in newer versions of SAP this way, see the [SAP OData Connector](/refguide/sap/sap-odata-connector)
3. Mendix apps can use data from each others data-models directly this way, which is especially interesting within clusters of microservices that work together as a system. 

<< FIGURE 6 >>

In a future version of Mendix, OData contracts will be easier to use and will make some data replication unnecessary (at least within microservices systems). A Mendix app will then be able to provide OData objects and REST services to the rest of the Mendix apps in the same organization in a platform provided service catalog, improving access and control of service integration in general.

Using OData to retrieve data means a tighter integration than most REST services, since it links database table formats to the integration and it can be sensitive to changes. As long as this is managed well, OData provides a great way to work more closely between apps. For example when the data-model is already stable, there is no issue, or when two apps are maintained by the same DevOps team.

## 4 Database Integration {#db-odata}

Mendix can integrate directly with external databases using DB calls, usually via JDBC calls.

There are only two cases when this is recommended:
1. When there is a legacy system or database that can not be changed any more and the only way to access the data is via direct database interaction. This could be part of a migration scenario, or maintained for some time. If the source system really does not change anymore the risk is small that something will break in the connection.
2. When there is a desire to maintain a very large data history in connection with a system of Mendix apps. The data may be stored for compliancy reasons, and very rarely accessed from the operational apps. Since this is "within" the same system, Mendix then interacts diretly with an external database.

The diagram shows these cases:

* Retrieve data from a legacy database, preferrably using a database view
* Update data in a legacy database, preferably calling a stored procedure
* Read and write via SQL calls to a History database as part of the Microservices system

![](attachments/service-integration/odata.png)  << FIGURE 7 - Updated>>

A good architectural guideline is to avoid tight coupling of the data models of different systems. Each data model is adapted to what that app is focusing on doing. This allows apps to develop their data model and functionality without impacting other apps and systems. 

If you have to go directly on a database, it is wise to use database views and stored procedures as a "padding" between the underlaying data model and the service interaction, and one should never do JDBC through firewalls. If the legacy database is on premises and DB calls is the only option, then either deploy the Mendix app on premises as well, or create a Mendix "Adapter App" on premises and have the main apps using the data on the cloud.

## 5 SOAP Integration

SOAP integration uses XML messages and a SOAP header that includes the end-point in a WSDL file. For large solutions the integration points can be figured out early, WSDLs created, and after that point the teams can work and test relatively independently. Using XML allows XSLT mappings and a filled in message can be compared with an XSD to do relatively detailed validation before sending messages, which can be good for asynchronous flows.

SOAP was most populat between year 2000 and 2010, and there are still an enormous amount of SOAP services available in most organizations. When mobile internet became more important the SOAP format was quite heavy, and since then REST services are more frequenlt used for almost all new synchronous services. 

Mendix connects easily with SOAP services, but it is rare that new SOAP services are created in Mendix apps these days. Instead the REST functionality has been expanded allowing REST publish and REST consume via Swagger-files, making REST services even easier to use.

## 5 RPC Integration & Adapters {#adapters}

Many old legacy systems have a very specific format of communication. It could be to and from mainframes or any other old technology. It is possible to build services to these old formats, but a more technical developer and the Mendix SDK is often required. 

To build this technical integration repeatedly is not a good idea. There are two options to avoid building this over and over again:

1. Create an AppStore module that works as an adapter and can be used in several apps with little effort. This allows easy access to existing RPCs.
2. Create an Integration App or Adapter, that makes data and services from the legacy system available in an easy to use format for other apps, e.g. using OData or REST services. 
   a) It could bundle 3 TCP/IP calls into one operation and provide it via a REST services
   b) It can import files with data or get data in real-time to store locally. This can provide faster services for other apps, more up-time for real-time requests, or it can extract a certain part of the data to store it in a format that is suitable for a specific purpose, see also SDA apps.

In the diagram below shows how an Integration App enables easy interaction with a legacy system:

![](attachments/service-integration/rpc.png)

In the example diagram, most of the interaction is the retrieval of data. To make that fast and easy, the integration app imports the relevant data via a file and stores it in a format that is ideal for retrieval, e.g. using materialized views. This data is from the legacy system is easily available via OData.  To update the legacy system the interaction needs to be synchronous. A REST service is created that translates the call to three RPC calls, that and update  legacy system, informing the user of success or failure

When Mendix for Integration apps it is easy to create an admin UI when that is needed, something that makes it more flexible and adaptable than most integration layers provide. In effect, with this pattern, one can create a distributed ESB, see also <<Integration Layers>>.
	
## 6 Queue integration

Queue integration is described more in detail in the << Event based Integration >> section. Using queues or a message broker or Kafka typically means that the end-to-end integration is asynchronous, but each leg in the end-to-end integration is always a synchronous call to either put an event or get an event:

* Push event to a queue, returns an acknowledgement or reception from the queue manager
* Pull an event from the queue, returns data, after which the message is 'committed' or 'consumed'. The queue manager deletes consumed messages after a configurable time frame.

## 7 Where to Use Synchronous Integration?

Synchronous calls can be used for almost anything. They are easy to design, build, deploy and operate. These are the most typical synchronous service scenarios:

* Data retrieval with REST, OData, SOAP, RPC or direct SQL
* Initiation of a function in another system, usually using REST, SOAP or RPC
* Transferring business events, either pushing or pulling with REST
* Keeping data up to date when one app has a copy of some data, using REST pull
* Committing data changes to another SaaS systems or apps, where validation is part of the integration
* Legacy integration with older RPC protocols on mid-range systems or with mainframe transactions
* Business-to-business protocols, such as EDI, SWIFT, or EDIFACT, often via an API gateway, (for details, see [Integration Layers](integration-layers))
* Process orchestration where you need to know that the target received and processed the message (for details, see [Process Integration](process-integration))
* CI/CD integration, test automation, and some health-checks for monitoring (for details, see [Ops & CI/CD Integration](ops-cicd-integration).

### 7.1 Where Not to Use Synchronous Integration?

For synchronous integration to work, it is necessary that the other system is directly reachable through the network. 

For IoT, user metrics, logging scenarios and stock-ticker updates the commmunication is truly one-directional, and synchronous calls have little benefit. The messages will be accepted as they are in the destination.

If the network is unreliable, geographical distances are large, or volumes are extremely high, the synchronous calls are difficult to accomplish, and there may be reasons to implement other mechanisms. Integration will often become more functionally complex in these cases, because to fully guarantee delivery end to end, you should implement two interfaces: one to send the event, and one going back acknowledging the reception. For details, see [Event-Based Integration](event-integration).

If a synchronous end-to-end call is impractical, it can be replaced by two asynchronous separate services. E.g. Order is one service, and Status is another one. A queue somewhere is required to store messages on the way. Most times it is prossible to use a Mendix internal queue, which means there are fewer moving parts and fewer places where things can fail. The other option is to use an external queue manager Integration layer (for details, see [Integration Layers](integration-layers)).

For scenarios where there are many-to-one or many-to-many situations, between distributed components there is no reason to be synchronous. In fact, it would be very hard to use synchronous communication. In these cases, Mendix recommends using Kafka, a message broker, or file interaction. For more information, see [Event-Based Integration](event-integration).

For periodic interactions that handle large datasets (for example, in reporting, billing, and invoicing), there is no reason to be working in real-time. Furthermore, processing will be slower and take more CPU power if transactions are processed one by one via services. For details on such cases, see [Export, Import & Batch Processing](export-import-batch).## 6 Summary

## 8 Summary

Synchronous calls are used everywhere and in amost all integration situations.

* If it is synchronous end-to-end there is an operational dependency, but on the other hand the result of the operation can be provided back instantly
* If there is a layer inbetween where messages are persisted before delivery, it is functionally asynchronous which is further described in the << Event Driven Integration>> and <<Integration Layers>>

In order of relevance and priority for synchronous end-to-end interaction, Mendix prefers the protocols in this order :

1. REST
2. OData
3. SOAP
4. RPC
5. DB calls

The Mendix Platform has very rich integration functionality. Several organizations use Mendix to build integration apps and adapters to various systems or shared data apps that provide combined datasets.

The diagram shows the main functional cases, where the rounded shape represents a process or microflow within an app:

* Pulling for new data or events to process from the source app
* Initiating a function remotely and often receiving results back
* Pushing data forward to an app that validates and returns results

![](attachments/service-integration/cases.png)


