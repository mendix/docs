---
title: "Central Data"
parent: "integration-overview"
menu_order: 6
draft: true
---

## 1 Introduction

The central data pattern is an integration pattern that stores a combined set of data in order to redistribute it to other systems. It has an API, some logic, a database, and some UX for configuration and error management. This pattern involves a system or a Mendix app who purpose is to facilitate integration solutions that are hard to do as services, events, or files.

Data warehouses (DWH) and data lakes provide an enterprise-scale version this pattern. However, that does not mean that small, local, or departmental solutions are unhelpful for local integration needs. In fact, it is clear that when microservices replace a large monolith, there is often a good reason to have both a dashboard app for login as well as a shared data app (for details, see the [Typical Central Data Patterns](#tcdp) section below).

### 1.1 Using Central Data Integration

The central data pattern reflects the ability to do the following:

* Combine data from many sources and provide it on in various formats
* Compare new incoming data with the data that was shared before

This diagram displays some typical ways to use the data:

![](attachments/central-data/cd-intro.png)

With a [shared data app](#sda), you can typically do the following:

* View combined data using real-time services
* Poll for combined updates (rather than polling many systems)
* Receive files or batches (for example, of the day’s updates)
* Process the data and streaming a new combination of data on to the next queue or Kafka
* Enable business intelligence and statistics
* Report on all kinds of data (for example, financial, business, and operational)

For many scenarios, it is better to specialize a system to handle subscriptions and combine data from different sources with different formats than to build it.

A typical use-case is if a company has 10 business lines with all different ordering systems, but only one single support desk that needs to see them all. A small local app could be used that collects orders or tickets from a number of systems and enables easily searching them. A full data warehouse (DWH) could also be used for enterprise reporting.

### 1.2 Typical Central Data Patterns {#tcdp}

These are a few of the main ways the central data pattern is used:

* **Shared data app** – This combines the same types of data from different processes and is used in operational processes
	* For more information, see the [Shared Data App (SDA)](#sda) section below
* **DWH** – This is used for combining all types of data from the company and providing data for statistics, reporting, and business intelligence (BI)
	* For details, see the [Operational & DWH Data](#owd) section below
* **Data lakes** – These have been popular recently as a Hadoop-style DWH good for statistics, reporting, and BI
	* Data Lakes should not provide operational data, since the time stamp of combined data may be different
	* For details, see the [Operational & Data Warehouse Data](#owd) section below
* **BI solutions** – These extract data from a DWH or data lake, for example
	* This is often statistical data for management overviews, or it is used to fine-tune processes in smart Mendix apps
	* For more information, see the [Integration to DWH & BI](batch-integration#int) section of *Batch Integration*
* **Extract-transform-load (ETL) solutions** – These are usually used for integration towards DWH solutions
	* They are beneficial for massive data volumes and can compare new data with previous loads 
	* For more information, see the [Integration to DWH & BI](batch-integration#int) section of *Batch Integration*

## 2 Shared Data App (SDA) {#sda}

SDAs can be very useful on the following levels:

* **Microservice system level** – for supporting 3–10 apps that form a system
* **Departmental level** – for supporting important and shared data within a deparment
* **Functional Area level** – for combining that same type of data (for example, orders from different departments)

These are the microservice versions of the central data pattern. Any combinations of data that has a larger scope that what has been described should make use of a central data lake or DWH, which most organizations will already have available.

### 2.1 Example – Orders SDA

In the diagram below, there are many business lines with different ordering systems. However, there are also three different systems that need to search between the entire set of orders and present overviews of the current orders across business lines.

![](attachments/central-data/sda.png)

The decision was made to specialize a microservice for the following tasks:

* Collecting all relevant orders 
* Provoiding good views and searches on the total set of orders

You should create another ODS when it gets difficult to provide flexibility for more than one purpose. For example, an orders ODS can send overview ordering information to a customer ODS, which means they can both evolve autonomously.

### 2.2 What Does an SDA Do?

These are the typical responsibilities of an SDA:

* Act as a local operational data store and combine data
* Act as an integration app or adapter and provide services, files, or events for external system to retrieve data
* Perform reference data management by importing files with reference data or manually setting look-up values used across a microservices system
* Perform batch processing, export, and import while not disturbing the UX with heavy loads, in turn allowing neighboring microservices to poll the SDA for updates
* Perform exception handling for all the above areas

### 2.3 What Does an SDA Store?

The SDA typically stores data in relational tables in order to make them easily searchable and accessible in different formats. In many cases, data can be stored both in a normalized form as well as in a "flattened-out" materialized view that serves a specific purpose (for example, to provide high-volume access to a specific set of frequently requested data).

SDAs can naturally enrich data with other reference data, and combining data is part of their purpose. SDAs are often used as a component specializing in importing reference data and providing it to other apps locally. If the reference data comes as a file with all the data in it, the SDA compares and makes sure to set the update flag only on records that have changed. This makes the impact smaller on other apps that are retrieving the data (for example, via REST services).

The general rule is that master data from the other apps is never updated in the SDA, while almost all reference data (static data from other systems) is imported into the SDA first. However, if another system updates the master data, it should call the service that owns that data. This way, two-way updates of the same data types are avoided.

SDAs often support event streams at a small scale by using an [internal process queue](event-integration#internal-queues). If updates from a microservices system with several apps should be distributed by events in real-time, the SDA provides a good way to manage this flow and make sure that the SDA is fully updated. At the same time, all updates are assembled in the same queue, in order to assure they are diffused in the same order that they happened.
	
## 3 Operational & DWH Data {#owd}

It is good to keep operational data flows separate from statistical, BI, and DWH data unless you are using statistics or historical data as reference data in operational flows. The only patterns that should provide operational data are the [ODS pattern](#ods) and, in some cases, ETL solutions used operationally.

Data lakes have been popular as an enterprise-wide Hadoop-style DWH solution that attempts to double as an enterprise-wide ODS. However, it is an almost impossible undertaking to make this work nicely. Snapshot-type data used for statistics makes for a slow and unreliable source of operational information.

A DWH per definition does not store operational data. Time-stamp differences in the incoming data and the methods used to merge it means that DWH cannot be used as a reliable data source. However, on the other side of the DWH, you can get statistical data, metrics, reports, and snapshots of previous moments in time that can be used in operational processes to fine-tune them.

An example use case is a home delivery system in which you keep track of whether the recipients are answering their doors over time. You can then decide to change the delivery pattern based on this information. If a recipient is rarely home, that is statistical data from the DWH solution that may rarely change, but it can be used as reference data for routing delivery services.

This diagram presents a number of apps in a process that shares business events with an event manager that knows the status of each process:

![](attachments/central-data/owd.png)

The event manager shares all the data with a data lake (or DWH), which processes the data into various data collections. One of those collections is sent to a Mendix app that manages that reference data and provides it back to three of the apps that “learn” from the past results.

## 4 Small Operational Data Store (ODS) & Large DWH

The other reason to keep operational data separate from DWH solutions is that operational processes change often, and different business units need flexibility and autonomy from each other. Even if it seems like two use cases need the same data, they may have very different needs when it comes to data models and functionality.

If different use cases become difficult to easily combine, it may be better to have different ODS microservices covering each a reasonable scope in order to retain flexibility and maintainability. ODS solutions are better as microservices than as behemoths.

However, data lakes and DWH solutions are large, enterprise-wide, generic, incredibly complex, and quite far from the people that work in the business. This set of attributes makes them inefficient for use in operational processes. The data flows through the system slowly, and it is often enough to update every month in a report. All the business units share the DWH, so changing things takes time. A DWH is in a way a "necessary" monolith.

## 5 Mendix for ODS

An ODS solution is similar to a legacy adapter or an integration app, in that it can collect and store data from one or more systems and provide the data in a format that is easier to use or that is combined with data from other places.

Mendix is a good choice for ODS solutions because of its strong integration capabilities, UX for managing data and errors, and REST services that are easy to create and maintain for providing the data. There is no Mendix customer that has tried to use Mendix for DWH, because that is for other technologies to handle.
