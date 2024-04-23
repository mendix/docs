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
* read/write data and use data from snowflake in your application
* execute java procedures
* leverage Cortex ML and LLM functions
* test connections and queries during configuration in Studio Pro (design time)

with both of these connectors. Below, we explain why the external database connector is the preferred approach and which differences you should still consider.

* The [External database connector](https://marketplace.mendix.com/link/component/2888) with Snowflake support (using the JDBC protocol) offers a premium developer experience and is therefor the preferred option. In addition, it supports not only stored procedures in java but also in python. This functionality is only available in Mendix 10.

* The [REST SQL connector](https://marketplace.mendix.com/link/component/225717) supports a similar set of use cases as the External database connector, but on a reduced level of detail. However, it supports 9.24 LTS and can be used in situations when JDBC cannot be used due to internal policies. The REST SQL connector supports key-pair authentication for service accounts and there are ways to set up OAuth for user-based-authentication which currently further distinguishes this connector from the external database connector.
