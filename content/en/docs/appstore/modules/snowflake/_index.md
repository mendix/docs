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

Mendix has several options available for users who want to integrate their app with Snowflake. 

### 1.1 Real time interaction with Snowflake  

Mendix provides real time interaction with Snowflake through two different connectors on the Mendix marketplace:  

* The External database connector with Snowflake support (using the JDBC protocol) within you can write/read data, execute procedures or tasks directly from or into Snowflake. This allows you to connect to data within Snowflake and select that data to use in your application directly, test connections and queries during configuration in Studio Pro (design time). This functionality is available in Mendix 10 and the preferred approach offering a premium developer experience.

* The REST SQL connector supports a similar set of use cases as the External database connector, but on a reduced level of detail as the external database connector does. However, it supports 9.24 LTS and can be used in situations when JDBC cannot be used due to internal policies. Currently the REST SQL connector supports key-pair authentication for service accounts and there are ways to set up OAuth for user-based-authentication.

### 1.2 Data loading into Snowflake

Snowflake provides the following two main solutions for data loading. The best solution may depend upon the volume of data to load and the frequency of loading. Both approaches are being facilitated by Mendix.

* Bulk data loading: This option enables loading batches of data from one or more Mendix applications. For this purpose Mendix developed a connector on the Snowflake Marketplace leveraging the Native app Framework of Snowflake.

* Continuous data loading: This option is designed to load small volumes of data (i.e. micro-batches) and incrementally make them available for analysis. For this Mendix created a specific Snowpipe how-to. Snowpipe loads data within minutes after files are added to a stage and submitted for ingestion. This ensures users have the latest results, as soon as the raw data is available.

## 2 Documents in This Category


