---
title: "Configure the External Database Connector for Amazon Athena"
linktitle: "Amazon Athena"
url: /appstore/modules/athena-external-database-connector/
description: "Describes the steps required to use the Mendix External Database connector with Amazon Athena."
---

## Introduction

The [External Database connector](/appstore/modules/external-database-connector/) allows you to connect to databases and select data to use in your app. You can use it to directly test connections and queries during configuration in Studio Pro at design time. 

If you are using Studio Pro 11.13 or later, you do not need to download this module from the Marketplace, as the External Database Connector comes included with Studio Pro. For more information, see [Connect to an External Database](/refguide/external-database-connection/).

## Prerequisites

For some general information on how to use bring your own JDBC driver with the external database connector, read [External Database Connector: Configure for Any Database](/appstore/modules/external-database-connector/#byod).

## Configuring the Connection Between Your Mendix App and Amazon Athena

To connect your Mendix application to Amazon Athena with the External Database connector, follow these steps:

1. Optional: If your Studio Pro version is older than 11.13, install the [External Database connector](https://marketplace.mendix.com/link/component/219862). 
2. Ensure that you have the required Amazon Athena JDBC Driver by choosing one of the following options:

    * To have the dependency downloaded automatically on running your project, add a **Java Dependency** in the **Settings** of your module and provide the following information:    

        * **Group ID** - set to **com.amazonaws.athena.jdbc**
        * **Artifact ID** - set to **AthenaJDBC42**
        * **Version** - set to the latest version
     
   * To install the dependency manually, download the latest version of the [JDBC driver](https://docs.aws.amazon.com/athena/latest/ug/jdbc-v3-driver.html#jdbc-v3-driver-download) that Amazon Athena provides and put the .jar file into the *userlib* of your Mendix project.

   AWS supplies the Athena JDBC driver as one of the following driver packages:
   
       * The *uber* .jar contains all dependencies packed into a single fat .jar
       * The *lean* .jar ontains only the driver .jar, with all dependencies as separate .jars.

3. Rerun your app to load the driver.
4. Run the [Connect to Database wizard](/appstore/modules/external-database-connector/#configuration), selecting **Other** as the database type, and provide the following configuration parameters:

    *  **JDBC Connection String** - Provide the JDBC URL. You can create it using the following template:

        ```text
        jdbc:awsathena://athena.eu-central-1.amazonaws.com:443;AwsRegion=<AWS-REGION>;Workgroup=<ATHENA-WORGROUP>;S3OutputLocation=<S3-LOCATION-FOR-QUERY-RESULTS>
        ```

        If you are using a temporary Access Key and Secret, you must also add a Session Token to the URL: `SessionToken=<SESSION-TOKEN>`,

    * **Username** - Enter the Access Key, if you are using it.
    * **Password** - Enter the Secret Access Key, if you are using it.

{{< figure src="/attachments/appstore/platform-supported-content/modules/aws-athena/athena1.png" >}}

For advanced connection use cases, see [Amazon Athena JDBC 3.x connection parameters - Amazon Athena](https://docs.aws.amazon.com/athena/latest/ug/jdbc-v3-driver-connection-parameters.html).

## Configuring Metadata Discovery

After the connection is established, you will see an error log like the following: *Unrecognized table type: "BASE TABLE"*. The tables and views explorer will be empty.This is because the External Database Connector module does not support Amazon Athena out of the box and therefore cannot explore the tables and views. 

To enable metadata discovery, you must add a custom Java class for exploring database objects. For more information, see [External Database Connector](/appstore/modules/external-database-connector/#configure-database-schema-information).

## Running Queries and Handling Query Responses

Execute queries in the same way as you would with the supported databases and retrieve responses in the associated entity. For more information about syntax and execution options, refer to the documentation of your specific JDBC library.

For full usage documentation, including how to use query output as an entity, see [External Database Connector](/appstore/modules/external-database-connector/#configure-database-schema-information).