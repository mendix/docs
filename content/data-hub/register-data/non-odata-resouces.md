---
title: "How to Register Non-OData resources in the Data Hub Catalog"
description: "Steps for how to convert resources into OData resources so they can be registered in the Data Hub Catalog."
tags: ["Data Hub", "Data Hub Catalog", "registration", "OData"]
---

## 1 Introduction

{Describe what this how-to will cover and what the user will learn.}

**This how-to will teach you how to do the following:**

* Create...
* Build...
* Configure...

## 2 Prerequisites

{If there are no prerequisites, leave this section out}

Before starting this how-to, make sure you have completed the following prerequisites:

* {Prerequisite 1}
* {Prerequisite 2}

## 3 Build a Mendix App to expose your data as OData

1. Connect to your empty Mendix app to a data source. This could using a connector module in the Martketplace or a REST API.
2. Create a module to retrive the data. Set up a **Scheduled Event** to perioridically pull new data in.
3. Create a second module and domain model to process and save the data.
4. From this second module, expose the data as OData. 

## 4 Build a whole 'nother thing to expose your data as OData

What this app does is:

1. Connect to an AWS Redshift Cluster.
2. Pull the data from there using the Play Framework.
3. Use a custom OData handler to convert the data to OData. This part's built on top of the Apache Olingo library.
4. Grab the metadata file so you can register your service in the Catalog. You can find this on your Redshift cluster at the `jdbc:redshift://<endpoint>:port/<database-name> 

Stuff you'll need: 
- The sample application files for this how-to issued in the .zip file OData-service- example-master
- JDK (Java Development Kit) 11
- sbt (Scala build tool)
- AWS Redshift cluster

