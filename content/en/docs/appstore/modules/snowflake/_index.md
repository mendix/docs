---
title: "Snowflake Modules"
url: /appstore/snowflake-modules/
description: "Presents details on the Snowflake-specific modules available in the Mendix Marketplace."
weight: 40
no_list: false
description_list: true
tags: ["marketplace", "marketplace component", "module", "Snowflake"]
---

## 1 Introduction

Mendix has several options available for users who want to integrate their app with Snowflake in order to create data-driven enterprise applications.

{{< figure src="/attachments/appstore/modules/snowflake-rest-sql/snowflake_architecture_setup.png" >}}

## 2 Snowflake Integration Options  

Mendix provides real-time interaction with Snowflake through the [External Database connector](https://marketplace.mendix.com/link/component/219862) or the [REST SQL connector](https://marketplace.mendix.com/link/component/225717). Both of these connectors enable you to perform the following tasks:

* Read, write, and use data from Snowflake in your application.
* Execute Java [stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-overview).
* Leverage [Cortex Machine Learning](https://docs.snowflake.com/en/guides-overview-ml-functions) and [Cortex Large Language Model](https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions) functions.

For a comparison of the functions of both connectors, refer to the sections below.

### 2.1 External Database Connector

The [External Database connector](https://marketplace.mendix.com/link/component/219862) is the recommended option that you can use to integrate your Mendix app with Snowflake. It offers a premium developer experience where you can test connections and queries during design time by using a view of all schemas and objects to which you can connect. It makes use of the JDBC protocol, supports authentication with a username and password, and the usage of Python stored procedures in addition to Java. 

The External Database connector is currently in a public Beta version. It is available only for Mendix 10.

### 2.2 REST SQL Connector

The [REST SQL connector](https://marketplace.mendix.com/link/component/225717), available from the Mendix Marketplace, supports the 9.24 LTS version of Mendix. It offers key-pair authentication with a private key file according to PKCS #8 standard.

The REST SQL connector requires an additional step to transform data rows received from the REST SQL API into Mendix objects. For more information, see [Snowflake REST SQL Connector](/appstore/connectors/snowflake/snowflake-rest-sql/).

### 2.3 Role Base Access Control (RBAC)

For information about using Snowflake's role-based access control in a Mendix application, see [Role-based Access Control](/appstore/connectors/snowflake/snowflake-role-based-access-control-RBAC/).

## 3 Documents in This Category
