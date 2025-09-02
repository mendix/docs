---
title: "Snowflake Modules"
url: /appstore/snowflake-modules/
description: "Presents details on the Snowflake-specific modules available in the Mendix Marketplace."
weight: 40
no_list: false
description_list: true
---

## Introduction

Mendix has several options available for users who want to integrate their app with Snowflake in order to create data-driven enterprise applications.

## Snowflake Integration Options

The integration between Mendix and Snowflake is available in either direction. That is, you can use data from Snowflake in your Mendix app with the External Database connector or the REST SQL connector, but you can also ingest your Mendix data into Snowflake by using the Mendix Data Loader. For more information, refer to the sections below.

The following diagram outlines the available integration options:

{{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/snowflake_architecture_setup.png" >}}

### Building Mendix Apps on Top of Snowflake

Mendix provides real-time interaction with Snowflake through the [External Database connector](https://marketplace.mendix.com/link/component/219862) and the [REST SQL connector](https://marketplace.mendix.com/link/component/225717). These connectors can enable you to perform the following tasks:

* Read, write, and use data from Snowflake in your application.
* Execute Java [stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-overview).
* Leverage [Cortex Machine Learning](https://docs.snowflake.com/en/guides-overview-ml-functions) and [Cortex Large Language Model](https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions) functions.

For a comparison of the functions of the connectors, refer to the sections below.

#### External Database Connector

The [External Database connector](https://marketplace.mendix.com/link/component/219862) is the recommended option that you can use to integrate your Mendix app with Snowflake. It offers a premium developer experience where you can test connections and queries during design time by using a view of all schemas and objects to which you can connect. It makes use of the JDBC protocol and the usage of Python stored procedures in addition to Java. 

The External Database connector only supports system-level authentication. It can authenticate in Snowflake by using the username and password of a single Snowflake user. It also offers key-pair authentication with a private key. The connector does not support role-based access control (RBAC) per end user.

The External Database connector has GA support for Snowflake from [Studio Pro 10.12](/releasenotes/studio-pro/10.12/) (Beta versions are available from [Studio Pro 10.10](/releasenotes/studio-pro/10.10/)). Some Cortex functionalities are currently limited when using the External Database connector, but they are on the roadmap.

#### REST SQL Connector

The [REST SQL connector](https://marketplace.mendix.com/link/component/225717), available from the Mendix Marketplace, supports the 9.24 LTS version of Mendix. It offers key-pair authentication with a private key file according to PKCS #8 standard and OAuth.

With the REST SQL connector, authentication can be done either on system or on end-user level, and the connector supports role-based access control (RBAC) per end user as well.

The REST SQL connector requires an additional step to transform data rows received from the REST SQL API into Mendix objects. For more information, see [Snowflake REST SQL Connector](/appstore/connectors/snowflake/snowflake-rest-sql/).

##### Role Base Access Control (RBAC)

For information about using Snowflake's role-based access control in a Mendix application, see [Role-based Access Control](/appstore/modules/snowflake/snowflake-rbac/).

### Loading Mendix Data into Snowflake

The [Mendix Data Loader](https://app.snowflake.com/marketplace/listing/GZTDZHHIE0/mendix-mendix-data-loader/), available from the [Snowflake Marketplace](https://app.snowflake.com/marketplace), aids in ingesting Mendix data into Snowflake. The application is deployed in your Snowflake environment and interacts with the configured Mendix apps to ingest data that is exposed using an [Published OData Service](/refguide/published-odata-services/). 

## Documents in This Category
