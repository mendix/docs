---
title: "Mendix Data Loader"
url: /appstore/modules/snowflake/mendix-data-loader/
description: "Describes the configuration and usage of the Mendix Data Loader application from the Snowflake Marketplace."
weight: 20
tags: ["marketplace", "marketplace component", "snowflake", "data loader"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Mendix Data Loader](https://app.snowflake.com/marketplace/listing/GZTDZHHIDJ/mendix-data-loader) allows for seamless data ingestion from operational Mendix applications into Snowflake, enhancing an organization's business intelligence and reporting capabilities.

### 1.1 Typical Use Cases

The Mendix Data Loader supports a range of data ingestion tasks, enabling organizations to leverage their operational data within Snowflake for analytical purposes. The key functionalities include ingesting data from Mendix to Snowflake.

### 1.2 Prerequisites {#prerequisites}

To use the Mendix Data Loader, you must have the following:

* A Mendix application with a [published OData service](https://docs.mendix.com/refguide/published-odata-services/) that includes exposed entities
* A Snowflake environment

### 1.3 Licensing and Cost

The Mendix Data Loader is covered under the Mendix EULA. While the loader itself does not incur additional costs, operating within Snowflake may incur a usage cost. For more information, refer to the [Snowflake pricing documentation](https://www.snowflake.com/en/data-cloud/pricing-options/).

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the procedures for adding marketplace components to your Snowflake environment. For detailed instructions, see [Install an app from a listing](https://other-docs.snowflake.com/en/native-apps/consumer-installing).

## 3 Configuration

Upon installation, configure the Mendix Data Loader as follows:

### 3.1 Initial Setup

1. **Open the Application**: Access the Mendix Data Loader via the `MENDIX_DATA_LOADER` tab inside your Snowflake environment.
2. **Grant Required Privileges**: Ensure the application has the `CREATE DATABASE` privilege in Snowflake. On first initialization, you'll be prompted to grant the application this privilege.

### 3.2 Data Ingestion Configuration

Configure each data ingestion job by specifying the endpoint, authentication details, and target database:

1. **Endpoint**: URL to your Mendix application’s OData service.
2. **Authentication**: Provide username and password for accessing the OData service.
3. **Target Database Name**: Specify the Snowflake database target for the data ingestion.
4. **Target Schema Name**: Specify the target schema name where all the data will be ingested in to. Every time an ingestion is performed all data already present in the target schema will be removed/replaced.
5. **Generate and Execute SQL Script**: This step needs to be executed for every data ingestion endpoint once. Click the `Generate Script` button to produce and execute the required SQL scripts with necessary privileges.

### 3.3 Executing and Monitoring Ingestion

1. **Ingest Data**: After setting up, use the `Ingest Data` button to start the data transfer. All data exposed by the Odata service will be ingested and all ingested data will be stored in [transient tables](https://docs.snowflake.com/en/user-guide/tables-temp-transient#transient-tables).
2. **View Results**: Check the job ID and verify the data in the specified target database.

## 4 Technical Reference

### 4.1 Current Limitations

1. At present the Mendix Data Loader supports username and password authentication so please make sure to use this setting when setting up your Odata service.
2. The recommended way (by Mendix) of exposing an association in an Odata service is as a link. This is not supported yet by the Mendix Data Loader. Please choose the "As an associated object id" option in your Odata settings. This option will store the associated object id in the table, but not explicitly as foreign key.

### 4.2 Troubleshooting

No known issues known at present. For any troubleshooting, contact the [development team](mailto:sa_dev_team@mendix.com).

### 4.3 Contact Information

For support or queries regarding the Mendix Data Loader, please email the development team at [SA_Dev_Team@mendix.com](mailto:sa_dev_team@mendix.com).
