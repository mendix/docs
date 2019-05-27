---
title: "Central Data"
parent: "integration-overview"
menu_order: 6
draft: true
---

## 1 Introduction

The central data pattern is an integration pattern that stores a combined set of data in order to redistribute it to other systems. It has an API, some logic, a database, and some UX for configuration and error management. This pattern involves a system or a Mendix app who purpose is to facilitate integration solutions that are hard to do as services, events, or files.

Data warehouses (DWH) and data lakes provide an enterprise-scale version this pattern. But even when there is a central DWH, the Central Data pattern is still useful for  does not mean that small, local, or departmental integration needs. When microservices replace a large monolith, there is often a good reason to have both a dashboard app for login as well as a shared data app (for details, see the [Typical Central Data Patterns](#tcdp) section below).

### 1.1 Using Central Data Integration

The central data pattern reflects the ability to do the following:

* Combine data from many sources and provide it in various formats to other systems
* Compare incoming data with the data that was shared before

This diagram displays some typical ways to use the data:

![](attachments/central-data/cd-intro.png)

With a [shared data app](#sda), you can typically do the following:

* View combined data using real-time services
* Poll for combined updates (rather than polling many systems)
* Receive files or batches (for example, of the day’s updates)
* Process the data and streaming a new combination of data on to the next queue or Kafka
* Enable business intelligence and statistics
* Report on all kinds of data (for example, financial, business, and operational)

The basic reason for a central data pattern in that it is better to specialize one app to combine data from different sources and with different formats than to build that logic into several apps that need the combination. 

A small local app could be used to collect orders or tickets from a number of systems and enable searching for orders or tickets globally, see <<Example Orders SDA>>

### 1.2 Typical Central Data Patterns {#tcdp}

These are a few of the main ways the central data pattern is used:

* **Shared data apps** – An SDA combines data from different processes and is used in operational processes. It is a combination of Operational Data Store (ODS) and Integration App, and it usually combines shared data within a Microservices system or within a department, or it may be collecting the same type of data from several departments
	* For more information, see the [Shared Data App (SDA)](#sda) section below
* **DWH and Data Lakes** – A DWH is used for combining all types of data from the entire company and providing data for statistics, reporting, and business intelligence (BI). Data Lakes are an eviolution of DWH solutions to use Hadoop-style solutions and being able to provide statistical data also to operational systems in order to support self-learning, AI and tuning of automated processes 
	* For details, see the [Operational & DWH Data](#owd) section below
* **BI solutions** – BI solutions collect data to provide insight into processes and trends. They can collect bulk data from DWH and data lake solutions, while refining it in real-time with information from Operational apps and systems
	* For more information, see the [Integration to DWH & BI](batch-integration#int) section of *Batch Integration*
* **Extract-transform-load (ETL)** – ETL is usually used for integration towards DWH solutions or for Data transition tasks during go-live of new large solutions. ETL solutions are professional integration frameworks, doing the "Integration App" part of the SDA on an enterprise level: they compare new data with previous loads and are beneficial for very large data volumes and large files
	* For more information, see the [Integration to DWH & BI](batch-integration#int) section of *Batch Integration*

## 2 Shared Data App (SDA) {#sda}

### 2.1 When to consider an SDA### 
 
SDAs can be very useful on the following levels:

* **Functional Area level** – for combining that same type of data (for example, orders from different departments)
* **Microservice system level** – for supporting 3–10 apps that form a system
* **Departmental level** – for supporting important and shared data within a deparment.
* **Referenca Data management** – see also <<"Reference Data Managent / Batch Integration>>

The diagram below shows an overview of the first three cases, while Reference data management is decribed in Batch integration. The cases are described in detail below.

<<Figure 2>>

These are the microservice versions of the central data pattern. Any combinations of data that has a larger scope that what has been described should make use of a central data lake or DWH, which most organizations will already have available. 

If there is already a central DWH and an ETL solution available within the enterprise: why use a Mendix SDA? The answer is that local Mendix SDA solutions provide a flexible local alternative with less dependencies:
1. Conway's law means that teams will (or should) design systems that aligns with organizational structures
2. Microservices architectures strive for autonomous functional parts 

Mendix SDAs will be part of the Microservices landscape, where we break the enterprise problem down in smaller pieces, and allow a local tribes of Mendix developers to also use the "central-data" integration pattern. The advatages are that a team can use the same technology and deployment stream, so it is organizationally easier to manage. It is built in low-code so it is easy to build, configure and maintain, and it is functionally autonomous, becase the scope of the SDA should never become very large.

### 2.2 When not to create an SDA 

Mendix SDA solutions will not replace an enterprise DWH, or compete with Kafka for massive event streams or compete with ETL for managing massive data-files and data transitions. Mendix SDA will only provide a local flexible option that actually can make DWH and ETL solutions simpler by e.g. collecting data from a functional area before sending it on to the enterprise level aggregation.

For many Microservices systems, there is little need to work on the combined data set, or the functional area is very small. Then typically the Dashboard app will take the responsibility for Reference data import for the cluster, and no SDA is required.

If a business app already has 90% of some combined information, it  makes sense to add the missing 10% and make it act as the SDA instead of creating another app and copying a lot of data.

If the integration problems can be easily solved, without collecting data in an SDA, i.e. the end-users are given the combinations of data they need in a snappy UX experience, then an SDA may not be needed.

### 2.3 What Does an SDA Do?

These are the typical responsibilities of an SDA:

* Act as a local operational data store and combine data
* Act as an integration app or adapter and provide services, files, or events for external system to retrieve data
* Perform reference data management by importing files with reference data or manually setting look-up values used across a microservices system
* Perform batch processing, export, and import while not disturbing the UX with heavy loads, in turn allowing neighboring microservices to poll the SDA for updates
* Perform exception handling for all the above areas

### 2.4 Example – Orders SDA

In the diagram below, there are many business lines with different ordering systems, and a customer may order products from several different business lines. At the same time there are three different systems that need to search between the entire set of orders and present overviews of orders across business lines.

![](attachments/central-data/sda.png)  <<FIGURE 3 >>

The decision was made to specialize a microservice for the following tasks:

* Collecting all relevant orders 
* Providing good views and searches on the total set of orders for various purposes

By doing this design we avoid the Customer Portal, the CRM app and the Support app to all have to integrate with the ordering systems of many different business lines. This is not suitable for ETL or DWH because we went it to be real-time and flexible with a specific functional scope. It is not suitable for an ESB, because we store data long term, and we combine data objects in a relational format in the Domain Model.

### 2.5 Example - Microservices SDA

The diagram below shows a Microservices SDA, in this case for a Master Data Management system built using Mendix. Each interaction is described below the diagram.

<<FIGURE 4>>

Starting from the top-left corner, we allow Drivers to view addressing and route information overviews. We let the SDA provide this service from optimized materialized views, to handle relatively high volume. We also allow Drivers to add certain information on top of addressing and route information. This will be less frequent, and we allow these "source data updates" to go to the Addressing app in the cluster, where the correct validation is done in real-time.

At the core of the microservices system there are people working on updating and managing the Address and Routing information. Most of the time it is short workflows and for every save in the master data apps, we push the data to the SDA to keep it up-to-date. Certain workflow is longer, e.g. planning a new area, and then new data is only submitted to the SDA at the very end of the workflow. This could also be a pull action, but REST-push was selected to make sure SDA is always 100% up-to-date, meaning that SDA has to be up-and-running for work to be submitted.

The SDA also imports other Reference data from SAP and other sources, comparing with the old data, it sets a flag on all records that changed and allows the other apps to swiftly get those changes via REST pull services. There is also a Business administrator UI on the SDA to manage these flows and any errors that may occur, also manually managing some internal reference data when required.

I.e. reference data flows up from the SDA to the other apps, while Master data only flows down toward the SDA. We avoid dataflows of the same data-type to go in two directions, because it leads to conflicts.

For all external systems to access the data, the SDA is the only access point. This off-loads the MDM apps from external load. It also assures that the team that owns this cluster also owns how the data from Address and Routing is combined, and how it is accessed, providing a unified view of the data across the enterprise.

### 2.6 Departmental SDAs

Within many departments of large organizations there are plenty of systems that hold different parts of the truth. End users might work in 15 systems over the day, where integration of data is poor and people use Excel or similar tools to handle the data and the processes. Mendix is often used to solve this problem, creating Departmental SDAs or Portals: 

1. Mendix provides a secure alternative to Excel sheets to manage business data and operational data
2. Mendix provides a better way to collaboarte across a process than sending emails with many in cc
2. Where there are old legacy systems or ERP systems with data that is hard to reach or change, Mendix provides a possibility to extract the data and allos end-users to work on the data before sending it on.

The diagram below shows a schematic view of how Departmental Portals or SDAs can help make the business management of data much more systematic and professional.

<<FIGURE 5>>

### 2.3 What Does an SDA Store?

The SDA typically can store:

1. Operational Data in a relational data format
2. An event stream from a microservices system, i.e. list of transactions in order
3. Imported or locally created reference data for further processing by the other apps

The relational data can be stored both in a normalized form as well as in a "flattened-out" materialized view that serves a specific purpose (for example, to provide high-volume access to a specific set of frequently requested data).

SDAs can also support a "local" event stream from updates in the microservices system or updates from a set of ordering systems. These can be treated as "Business Events" or business transactions and are often stored in an Internal Queue [internal process queue](event-integration#internal-queues). 

The diagram below shows schematically how this can take place, using the example above with an Address app and a Route app being master data management apps, pushing changes down to the SDA.

<<FIGURE 6>>

The SDA receives Business Events into one single internal process queue, in order to process them in the same order as they happened. A scheduled "Process Event" will take the next event and transform it into the data-model of the SDA, that is very similar to the datamodel of the Address and Routing apps, minimizing functional errors in this step. Should that still occur, a human workflow is required to solve the issue. This typically only happens at a new release when testing has been in-sufficient.

After that is done the SDA flag is set, the other systems that subscribe to the same events can start retrieving them from the same queue. When all subscribers have noted success, the successfully processed messages are moved to a "transaction history" queue. If transformation is required in the SDA, an additional out-bound queue is created for each different event stream.

The lower middle part of the diagram shows how processing on the entire data set now can be done within an app, directly on the combined data-set in the same domain model. If there was no SDA, then this processing may require thousands of service calls to both Address and Route apps, which would consume a lot more CPU and take a lot longer to finish.

The right side of the diagram shows how the SDAs is often used to import reference data and providing it to other apps locally. If the reference data comes as a file with all the data in it, the SDA compares and makes sure to set the update flag only on records that have changed. This makes the impact smaller on other apps that are retrieving the data (for example, via REST services).
	
## 3 Separate Operational data from Statistical Data {#owd}

It is good to keep operational data flows separate from statistical data that come from Data Lakes and other warehouses. There are different time-requirements and needs for accuracy. 

Making a Data-lake double as an operational datastore does not work well, because: 

1. There is simply too much data to combine if it is done on enterprise level
2. All this data is collected with different time-staps, so any combination will never show the exact situation at any point in time

### 3.1 Statistical Data in Operational Processes

However Data lakes provide a great way to gather statistical and trend oriented data - that can be used in self-learning systems. We recommend having a reference data app between any dataware house and the direct use of this statistics, to avoid any direct dependencies from operational systems to the data-lake or event warehouse.

The diagram diagram presents how an event-manager collects events, that go to a data lake, which in turn produce statistical data that is fed back into the highly automated delivery process, allowing savings and fine-tuning of the process.

![](attachments/central-data/owd.png)

The example has been used for deliveries to the homes. Knowing how and when the recipient is answering their doors over time one can change the delivery pattern. This is statistical data from the Data lake solution that rarely changes, it is not operational data. The statistical information is first processed by the Reference data app (belonging to the delivery stream), to be suitable for the business rules in the automated apps above.

### 3.2 Enterprise concerns and Local concerns

The other reason to keep operational data separate from DWH solutions is that operational processes change often, and different business units need flexibility and autonomy from each other. Even if it seems like two use cases need the same data, they may have very different needs when it comes to data models, functionality and flexibility.

If different business use cases are difficult to combine using one component, it can be much more effcient to have different SDA microservices covering each a reasonable scope in order to retain flexibility and maintainability. 

Data lakes and DWH solutions are large, enterprise-wide, generic, incredibly complex, and quite far from the people that work in the business. This set of attributes makes them inefficient for use in operational processes. The data flows through the system slowly, and it is often enough to update every month in a report. All the business units share the DWH, so changing things takes time. A DWH is in a way a "necessary" monolith.

## 5 Summary

Mendix will not replace the need for DWH solutions, ETL or high-volume data streaming platforms. But in a flexible Microservices architecture landscape, there is often a benefit to create small local Shared Data Apps, that make integration easier in an area, to remove excel and shadow IT, and to provide an easier, more flexible overall solution to various business problems 
