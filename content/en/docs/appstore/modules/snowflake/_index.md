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

If you want to create data-driven enterprise applications, building Mendix on top of Snowflake might just be the right thing for you. Mendix has several options available for users who want to integrate their app with Snowflake. 

## 2 Documents in This Category

### 2.1 Real time interaction with Snowflake  

Mendix provides real time interaction with Snowflake through two different connectors on the Mendix marketplace. You can 
* read/write and use data from snowflake in your application
* execute Java [stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-overview)
* leverage [Cortex Machine Learning](https://docs.snowflake.com/en/guides-overview-ml-functions) and [Cortex Large Language Model](https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions) functions

with both of these connectors. Below, we explain why the external database connector is the preferred approach and which differences you should still consider.

* The [External database connector](https://marketplace.mendix.com/link/component/2888) with Snowflake support offers a premium developer experience where you can test connections and queries during design time thanks to a view of all schemas and objects you can connect to. It makes use of the JDBC protocol, supports authentication with username and password and the usage of Python stored procedures in addition to Java. It currently finds itself in a public Beta version and is available in Mendix 10. 

* The [REST SQL connector](https://marketplace.mendix.com/link/component/225717) has been developed to support 9.24 LTS and key-pair authentication with a private key file according to PKCS #8 standard. It requires an additional step to transform data rows received from the REST SQL API into Mendix objects.
