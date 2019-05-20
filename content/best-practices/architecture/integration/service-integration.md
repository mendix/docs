---
title: "Service Integration"
parent: "integration-overview"
menu_order: 2
draft: true
---

## 1 Introduction

Service integration means using synchronous request-reply as the integration paradigm. This is most commonly done via REST and OData, and sometimes via SOAP. In addition, older versions of RPC calls, SQL database interactions, and many mainframe transactions are  synchronous. It is easy to understand synchronous request-reply interfaces, as the initiating process gets feedback instantly. This makes error handling easier, because the same system that initiates the call also gets information about the result and can take a relevant action.

Service integration should be considered the default method for integration. Only when there are strong reasons to avoid synchronous request-reply should other options be considered. 

In a typical scenario, an app end-user is filling in an order or a form, and they need to be informed of mistakes in their entries or that the product they requested is out of stock, for example (as visualized in the diagram below). The systems are tightly coupled, because the second app has to be up and running for this to work. However, the end-user is able to decide how they want to proceed when there is an error or a time-out. The end-user is in this case fully part of this interaction.

![](attachments/service-integration/si-intro1.png)

In another typical scenario, the user interaction is separated from the integration, meaning it is "functionally asynchonous." However, a technically synchronous integration mechanism is still preferred for retrieving the event, using a REST `pull` request from the second app to get the next business event(s) (as visualized in the diagram below). This means that the two apps are decoupled from each other. The first app can operate without the second app being up and running, and vice versa. The first app needs to implement something that acts as a queue (for more information, see the [REST Pull Request-Reply to Transfer Data](#pull-transfer) section below).

![](attachments/service-integration/si-intro2.png)

{{% alert type="info" %}}
"Functionally asynchronous" means the process that results in a business event does not complete the integration end-to-end. Instead, it may already create a REST message and put it on an internal queue for later delivery.
{{% /alert %}}

## 2 What Is Service Integration?

Service-based integration is request-reply and almost always synchronous. It follows this flow:

1. One system initiates the call and waits for an answer. 
	* There should be a time-out configured, after which the integration is abandoned
	* In some cases it is desirable to re-try, but if this can be avoided, the solution becomes simpler and more robust
2. The originating system will know the result of the call immediately:
	* A success status if the operation succeeded
	* A time-out if the destination system was unavailable
	* A set of data that was requested in the call
	* An error with information about why the call did not work

The diagram below presents the following main functional cases, where the rounded shape represents a process or microflow within an app:

* Pulling for new data or events to process from the source app
* Initiating a function remotely and often receiving results back
* Pushing data forward to an app that validates and returns results

![](attachments/service-integration/cases.png)

### 2.1 Where to Use Synchronous Integration?

Synchronous calls can be used for almost anything where you want to assure that messages arrive safely. They are easy to design, build, deploy, and operate, and they have the easiest error handling. This means they should be the default method for most integration.

These are some typical synchronous service scenarios:

* Request-reply interfaces with REST and SOAP
* Data retrieval with OData, REST, SOAP, or direct SQL
* Legacy integration to older RPC protocols on mid-range systems or to mainframe transactions
* API management and other external gateways to, for example, EDI, SWIFT, or EDIFACT protocols for busines-to-business transactions
* Process orchestration where we need to know that the target received and processed the message
* Transeferring business events when using internal queues
* CI/CD and test automation orchestration

Synchronous integration styles are the most commonly used and easiest to manage, because there are no moving parts between the two systems. It is possible to estimate that more than 50% of all integration is synchronous request-reply in the current landcape.

### 2.2 Where Not to Use Synchronous Integration?

For synchronous integration to work, it is necessary that the other system is directly reachable through the network. If the network is unreliable, geographical distances are large, or volumes are extremely high, the synchronous calls can be more difficult to accomplish. In that case, there may be reasons to implement other mechanisms. Integration will often become more functionally complex in these cases, because to fully guarantee delivery end to end, you should implement two interfaces: one to send the event, and one going back acknowledging the reception. For details, see [Event-Based Integration](event-integration).

For IoT and logging scenarios where there are many-to-one or many-to-many situations, which are often distributed and where commmunication is truly one-directional, there is no reason to be synchronous. In fact, it would be very hard to realize such situations as synchronous communication. In these cases, Mendix recommends using Kafka, a message broker, or file interaction. For more information, see [Event-Based Integration](event-integration).

For periodic interactions that handle large datasets (for example, in reporting, billing, and invoicing), there is no reason to be working in real-time. Furthermore, processing will be slower and take more CPU power if transactions are processed one by one via services. For details on such cases, see [Export, Import & Batch Processing](export-import-batch).

## 3 Request-Reply to Transfer Data

The diagram below shows the most typical ways to transfer data in real-time:

![](attachments/service-integration/request-reply.png)

* Pulling data/business event from the destination – this is the most common way and the easiest to operate
* Pushing data/business event to the destination – this is a good way to validate data in the destination before it can be stored ther
* Using a service layer in between, such as API management or a message broker – using a service layer (with queues or with transformation) can further decouple the apps, and this is recommended if there is a large organizational or geographical distance between the apps
* Using OData to retrieve "remote objects" – this is a tighter integration that is more closely linked to the data model; this method will be strengthened in a future version of Mendix, and it should be very useful when apps are close (meaning, within microservices systems)

### 3.1 REST Pull Request-Reply to Transfer Data {#pull-transfer}

The REST-pull request-reply is the default option when replicating data from point A to point B. The system that needs the data is in charge of triggering the interface and the apps do not need to by up and running at the same time for this to work. To know what has changed, there are at least 3 options:

1. Use the last-updated-time-stamp of the record to retrieve "all changes since <last time stamp>". This is quite robust, but for high volume there are some edge cases where this can miss an update.
2. Use a flag on the base table that indicates the record changed, and its re-set when the change is picked up. For more than one subscriber there would be more than one flag, see https://documentation-accp.cfapps.io/best-practices/architecture/integration/workflow-int-data-transfer.
3. Use the Mendix [Process Queue](https://appstore.home.mendix.com/link/app/393/) App Store module. In this case the source App already maps the data into a REST JSON message that is ready to picked up from the out-bound queue.

<< FIGURE B>>

The last two options are the most recommended. 

Option 3 has an additional advantage that the transformation to a business event or transaction takes place directly. I.e. we already created a REST message, so we know that it reflects the exact situation when the change happened. The service call will also be slighly faster, because this work is already done.

However if the subscribing App only is interested in the latest stage, there is no use to receive "every save" in the source system, and then Option 2, using a flag, is the easiest and most efficient method, see https://documentation-accp.cfapps.io/best-practices/architecture/integration/workflow-int-data-transfer.

### 3.2 REST Push Request-Reply When Validation Is Needed

Pushing data to another system is useful when there is validation in the destination (for example, to change master data). If there is a validation error, the user should see it directly while in the process of changing the data so that they can correct it immediately, or at least an error workflow should be considered.

There are technically two options to do this:
1. Pushing directly from the process that changes the data. This is typical when an end-user interacts with the system so he will receive errors directly from the source service, potentially showing the error messages to him, so he can correct data or take other action.
2. Use the Mendix [Process Queue](https://appstore.home.mendix.com/link/app/393/) App Store module as described above, and then have a separate process that tries (and re-tries) to push these messages to the destination. Still receiving validation messages, but in this case the end-user is not directly informed, but will get a task later to correct something.
3. Using the process queue on the destination side, means that the message will arrive on the destination app, but without full validation there. I.e. the destination side has a separate process that gets them from the queue and updates the domain model.

<< FIGURE C >>

The choice for pushing data is usually validation related. But it could also be that the destination system is unable to poll for new data, as is often the case for SaaS solutions. E.g. creating an order in SAP or Siebel will be a push request.

The choice between Option 1 and 2 will be depending on if we want the end-user to fix things directly (Option 1), or if we want him to be able to finish his work, and handle errors later (Option 2).
Option 3 is often preferred as an alternative to Option 1 when less validation errors are expected, or when the validation would take too long for an end-user to be waiting. The end-user is  assured that the business event has arrived in the destination, and he can continue working on something else. Any exceptions later would have to be transferred separatelly back to the source, if required. Compare this with submitting an order on line and getting an email confirmation or error message later.

### 3.3 Using a Message Broker or other Integration Layer

Using an integration layer will provide a level of decoupling, but also another dependency, another place to maintain integration functionality, and another place where things can go wrong.

Still in many instances Integration layers are used for a variaty of reasons:
1. There is a desire for functional decoupling, so allowing e.g. an ESB to tranform the messages on the way
2. There is a large distance in network or geography, and the integration layer handles these distances
3. Integration layers are almost always up and running while destination systems may not be, and then the integration layer can queue up messages, see also Event base integration https://documentation-accp.cfapps.io/best-practices/architecture/integration/event-integration
4. There is a standard at an organization to use a specific integration layer between e.g. departments, which provides a standard gateway for integration

In the case of using an Integration layer for transfering or replicating data we would expect the source system to push a message to the integration layer, receiving just an acknowledgement of reception. This could be REST Push or any other format, but the call is always synchrnous. Even Kafka and queue managers have their own APIs, and there are modules in the Mendix App store to make these calls easy.

Please refer to the section https://documentation-accp.cfapps.io/best-practices/architecture/integration/integration-layers for more information on this.

### 3.4 Using OData Retrieve

In Mendix 8, when the Data Hub will be available, OData contracts will be much easier to use, and will make some data replication un-necessary, at least within microservices clusters. An app can "provide" OData objects and REST services to the rest of the Mendix apps in the same organization, that can "consume" these. This will simplify use of both REST and OData at the same time as it increases the control over integration.

For some data transfer use-cases, especially for BI and within Microservices clusters, it will make sense to use OData. Data is then retrieved from another app's data tables more or less automatically, to be used in the Widgets of the other app, with the caveat that domain models can become more tightly linked. This being the reason why it should probably be in "organizationally close" situation, where teams are aware of developments, and/or in e.g. BI where the business risk to changes is smaller.

## 4 Database Integration & OData {#db-odata}

Mendix can integrate directly with external databases using OSQL, OData, or SQL. But Mendix does not allow integration directly into its own database. This is to avoid risk and to use clear contracts in the communication. OData then provides a solution to easily access data tables in Mendix from an OData enabled system. Writing with OData to a Mendix app will not be allowed in the first releases, so for pushing a change a REST service is required.

OData provides a clear contract and is directly supported from the Mendix Platform. Both sides of the integration are required to support the OData. For example, the integration from Mendix to [SAP](/refguide/sap/sap-odata-connector) is well supported via OData contracts, in all recent versions of SAP.

The typical Data use cases are:

1. OData can be used between Mendix apps for reading out data directly from Widgets in the UI. At any point in this interaction some data can be saved locally, in effect creating a data transfer, see section 3.4
2. OData can be used from BI solutions to retrieve data from a Mendix app close to real-time
3. OData is used for integrating with SAP solutions (or any other external system that supports OData)

Sometimes within a Microservice cluster where Mendix plays a role, there is a need for e.g. a very large History database, which for BI reasons can be an external database. Since this is 'within' the same system, Mendix then interacts diretly with an external database. 

Other common reasons to use direct SQL is for older systems or databases. There may be no OData, REST or SOAP options. There could be an  RPC, and if it has the required functions it is recommended to use that, building a small "adapter" maybe using Java actions. But if even the RPC is in-adequate we come to the last resort option of connecting directly to an external database.

4. Retrieving data from a legacy system or other database, using SQL, preferrably on a Database view
5. Updating data in a legacy system or database, preferably calling a stored procedure

![](attachments/service-integration/odata.png) ---replace <<Figure D>>

A good architectural guideline is to avoid coupling the data-models of different systems tightly. Each data-model is adapted to what that app is focusing on doing, and it is good to leave freedom of developing the datamodel without impacting other apps and systems. That is why OData is better than direct Database interactions, and if you have to go directly on a Database, it is wise to use database views and stored procedures as a "padding" between the underlaying data-model and the service interaction.

{{% alert type="warning" %}}
Never do SQL across firewalls, because it would open a hole where an external party could do anything to the database.
{{% /alert %}}

## 5 Integration Apps and Adapteres

Many old legacy systems have a very specific format of communication, which could be from mainframes or any other old technology. To create good integration with these systems takes a technical developer.

To build this technical integration repeatedly is not a good idea. There is the option to create one single adapter or integration app that specializes in the intricacies of that legacy system.

Other apps can then integrate with the adapter in a simple format using, for example, REST or files and pre-configured functionality. As an example scenario, it could take 3 TCP/IP RPC calls to do an operation, which the integration app encapsulates into one single easy-to-use REST service.

Depending on the case, the integration app may only forward real-time requests to the back-end system, cache some requests, or even store entire datasets and provide them via services or files. It really depends on the following questions:

* What is the legacy system capable of?
* What is the requirement to use the data from other systems?

In the diagram below, both file and RPC integration is shown to the legacy system. Depending on the situation one can use one method or both.

![](attachments/service-integration/rpc.png)

For example, imagine that most of the interaction is the retrieval of data. To make that fast and easy, the integration app imports the relevant data via a file and stores it in a format that is ideal for retrieval with a materialized view that makes parts of the legacy system data easily available via OData. For the updates, you prefer them to be synchronous all the way, so you use REST into the integration app. That will translate to TCP/IP and update the legacy system as a request-reply interface, informing the user of success or failure

The benefit of using Mendix in this type of scenario is that if there is an admin UI needed, it is easy to provide. In effect, with this pattern you can create a distributed ESB.

## 6 Summary

Request Reply integration is an easy way to integrate systems, and should be considered the default option. The one thing to consider is that the other system needs to be up and running for the integration to work. 

As described in this section, using pull requests solves this  for most cases. This means that work can continue in the first app while later other work continues in the other systems. For simplicity and easier error management, we would in most cases recommend using a Mendix internal queue, instead of exteranl queue managers or message brokers, but there are exceptions when an integration layer is preferred.

In some cases we want the business interaction to be direct across the two apps, to be informed directly, e.g. to get validations and confirmations directly back to an end-user. The business function then requires both apps to be up and running. THis does make sense in many cases, so it should not be avoided, it should be selected when its better. It is the way most SaaS solutions work. When we need to update them from another app we call a service and get the results back.

For BI and microservice systems and for retrieving data from SAP, OData provides a new paradigm that will be both easy to build and easy to control. More details will be provided when the Data Hub is released in Mendix 8.

For Legacy databases and for e.g. History databases, there may be a reason to use direct SQL, and then DB views annd stored procedures are preferred to using direct SQL statements.

In order of relevance and priority, for synchronous interactions, we would prefer the protocols in this order:

1. REST
2. OData
3. SOAP
4. Other RPC
5. SQL to DB view or stored procedure
6. Direct SQL

Mendix has very rich and good integration functionality, and several organizations use Mendix to build integration apps and adapters to various systems, or shared data apps, that provide a combined data-sets.

## 7 Ops Integration & Test Services <<Move to separate Chapter>>

A new trend (which is part of microservices and DevOps) is to build services from live systems that are specifically oriented towards automated testing and health checks on live systems. A service that is used to test things in CI/CD pipelines may later be reused to verify a production deployment, check a live system, or collect user metrics for a dashboard.

This diagram presents three typical parts covered via IT delivery automation, which is a very common form of process orchestration:

![](attachments/service-integration/automation-service.png)

CI/CD & test automation is often done with Jenkins, GitHub CI, or AKS. However, there are Mendix customers that run on Mendix Cloud and do CI/CD with a Mendix app calling Mendix Cloud APIs while using test systems like [ATS](/ats/index) or specific test services. Typically, this chain is run nightly and gives a report each morning to the DevOps team on the issues found.

The new app in the diagram above has the [UnitTesting](https://appstore.home.mendix.com/link/app/390/) module installed and unit tests configured for key microflows. It also has specific test services that cover full functional scenarios and a health check that is used in production. Finally, the app has an admin page with collected technical and functional KPIs that help with maintaining the solution.

From the app management dashboard, you have an overview of everything that is needed as well as a deep link to the admin page for closer inspection when required. You can  make deployments possible here (if that is user-friendly) by calling the APIs of the Mendix Cloud (or, if on VPC, by calling Jenkins or Azure DevOps).

For professional operations solutions, there is often an agent per node that is shipping data in near-real time towards an application performance monitoring ([APM](https://docs.mendix.com/apm/)) system (such as Data Dog) that is used for root-cause analysis, trend analysis, sizing metrics, and alarms.
