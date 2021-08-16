---
title: "How to Register Non-OData resources in the Data Hub Catalog"
description: "Steps for how to convert resources into OData resources so they can be registered in the Data Hub Catalog."
tags: ["Data Hub", "Data Hub Catalog", "registration", "OData"]
---

## 1 Introduction

The Data Hub Catalog collects exposed OData services. But what if you've got data that isn't in the OData format? Convert it! 

**This how-to will teach you how to convert your data into OData using:**

* a Mendix app
* [this sample application](attachments/odata-service-example-master.zip) written in Scala

## 2 Prerequisites

### 2.1 Prerequisites for a Mendix App
If you're going to build a Mendix app, be sure you've already:

* Installed Mendix Studio Pro version [8.14.0 or above](https://marketplace.mendix.com/link/studiopro/)

### 2.2 Prerequisites for the Scala solution
If you're going to use the Scala sample app, be sure you've already got access to these on your machine:

- sample application files
- JDK (Java Development Kit) 11
- sbt (Scala build tool)
- AWS Redshift cluster


## 3 Build a Mendix App to expose your data as OData

1. Connect to your empty Mendix app to a data source. This could using a connector module from the Martketplace or a REST API.
2. Create a module to retrive the data. Set up a **Scheduled Event** to perioridically pull new data in.
3. Create a second module and domain model to collect and save the data.
4. From this second module, expose the data as OData. 

## 4 Use this sample Scala app to expose your data as OData

What this app does is:

1. Connect to an AWS Redshift Cluster.
2. Pull the data from there using the Play Framework.
3. Use a custom OData handler to convert the data to OData. This part's built on top of the Apache Olingo library.
4. Grab the metadata file so you can register your service in the Catalog. You can find this on your Redshift cluster at `jdbc:redshift://<endpoint>:port/<database-name>`.

Here's how to adjust what's already in the application to expose your data as OData: 

1. Change the `conf/application.conf` to specify the Redshift settings.
2. In the project directory, run `sbt run` to start the application at `http://localhost:9000`.
3. Navigate to `http://localhost:9000/service/<database- name>/$metadata` to view the metadata for all the data in the database. 
4. 