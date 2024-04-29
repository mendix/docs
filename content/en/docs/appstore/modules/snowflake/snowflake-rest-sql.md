---
title: "Snowflake REST SQL Connector"
url: /appstore/connectors/snowflake/snowflake-rest-sql/
description: "Describes the configuration and usage of the Mendix-Snowflake bulk data loader module from the Mendix Marketplace."
weight: 20
tags: ["marketplace", "marketplace component", "snowflake", "data loader", "module"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---


# Snowflake REST SQL Connector

## 1 Introduction

The [Snowflake REST SQL connector](https://marketplace.mendix.com/link/component/225717) allows you to use data from Snowflake in your Mendix application. It can also enable you to enrich your app with the capabilities that Snowflake provides.

### 1.1 Typical Use Cases

The Snowflake REST SQL connector provides a way to first setup key-pair authentication with an RSA key pair according to PKCS #8 standard and then execute SQL statements on Snowflake via a REST call from within your Mendix application. These statements allow you to:

- Read data from Snowflake
- Write data to Snowflake
- Trigger [Snowflake Cortex ML functions](https://docs.snowflake.com/en/guides-overview-ml-functions)
- Use [Snowflake Cortex LLM functions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions)

The current version of the connector supports:
- authentication with an RSA key pair according to PKCS #8 standard
- execution of single SQL statements
- synchronous execution of calls

### 1.2 Prerequisites {#prerequisites}

The Snowflake REST SQL connector requires Mendix Studio Pro version 9.18.0 or above.

To use the Snowflake REST SQL connector, you must also install and configure the following modules from the Mendix marketplace:

-  [Community Commons](https://marketplace.mendix.com/link/component/170) - This module is a required dependency for the Snowflake REST SQL connector.
-  [Encryption](https://marketplace.mendix.com/link/component/1011) - This module is a required dependency for the Snowflake REST SQL connector. The EncryptionKey constant must be set up in your application settings.

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the services in Snowflake to which is connects may incur a usage cost. For more information, refer to the [Snowflake documentation](https://www.snowflake.com/en/data-cloud/pricing-options/).

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Snowflake REST SQL connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **SnowflakeRESTSQL** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use. 

### 3.1 Configuring Snowflake Authentication

In order to use the capabilities of Snowflake in a Mendix app with the Snowflake REST SQL connector, an RSA key-pair authentication method must be used.

### 3.1.1 Configuring key-pair authentication in Snowflake {#setup-key-pair-snowflake}

To configure RSA key-pair authentication for your account in Snowflake, the following steps need to be taken:

1. Generate the private key
2. Generate a public key
3. Assign the public key to a Snowflake user

A more descriptive explanation of these steps can be found in the official [Snowflake documentation](https://docs.snowflake.com/en/user-guide/key-pair-auth).

### 3.1.2 Setting up the key-pair authentication in a Mendix app {#setup-key-pair-mendix}

To make it easier for users to configure the key-pair authentication in a Mendix app, we have created pages and microflows that can directly be used after drag and dropping them into their own modules.

Please take the following steps:

1. In the **App Explorer**, under the **SnowflakeRESTSQL** section, find the **SNIPPET_SnowflakeConfiguration** snippet and drag and drop it into a page in your module.

{{< figure src="/attachments/appstore/modules/snowflake-rest-sql/drag_snippet_to_page.png" >}}

2. Assign the module role **SnowflakeRESTSQL.Administrator** to the application role that will be used to set up the configuration so that the added logic will be usable.
3. Run the application and go to the page the snippet was added in.
4. Click on **New** and a page to fill out your connection details will open. 
5. Fill out all fields with the details of your Snowflake account. To learn more about what all the fields mean, go to the detailed explanation of the [ConnectionDetails](#connection-details) entity.
6. Enter the passphrase and upload your private key file in .p8 format, that was created following the [previous section](#setup-key-pair-snowflake).

{{< figure src="/attachments/appstore/modules/snowflake-rest-sql/connection_details.png" >}}

7. You can then either **Save** the connection or click on **Save and test connection** to go to the second step to generate a JSON Web Token (JWT) and validate your connection to 


### 3.2 Configuring a Microflow for the Service

After you configure the authentication for Snowflake, you can implement the functions of the connector by using the provided activities in microflows. An extended microflow has been implemented and added to the Snowflake REST SQL connector as an example for users that would like to retrieve a list of objects from an existing table in Snowflake. In the **SnowflakeRESTSQL** module, please take a look at the **ExampleImplementation** microflow and the **ExampleObject** entity in the domain model to see how the [**TransformResponsesToMxObjects** operation](#transform-response-to-mx-object) can be used to easily convert the data received in **HttpResponse** objects into Mendix objects. 

{{< figure src="/attachments/appstore/modules/snowflake-rest-sql/example_implementation.png" >}}

## 4 Technical Reference

To help you work with the Snowflake REST SQL connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.1.1 ConnectionDetails {#connection-details}

| Name | Description |
| --- | --- |
| Name | Identifier of the connection inside of the Mendix app (has nothing to do with snowflake). |
| AccountURL | The unique account URL of the Snowflake account within your organization to connect to the Snowflake API i.e. https://sdc-prd.snowflakecomputing.com. For more information, check out the Snowflake documentation about [account identifiers](https://docs.snowflake.com/en/user-guide/admin-account-identifier#finding-the-organization-and-account-name-for-an-account). |
| ResourcePath | Path to a resource on Snowflake API i.e. /api/v2/statements |
| AccountIdentifier | It is the unique account identifier that identifies a Snowflake account within your organization, as well as throughout the global network of Snowflake-supported cloud platforms and cloud regions. For example, <orgname>-<account_name>. For more information, check out the Snowflake documentation about [account identifiers](https://docs.snowflake.com/en/user-guide/admin-account-identifier#finding-the-organization-and-account-name-for-an-account). |
| Username | The username with which you sign in to your Snowflake account. |

#### 4.1.2 PrivateKey {#private-key}

| Name | Description |
| --- | --- |
| Passphrase | Passphrase which is used to encode/decode the private key file. |^

#### 4.1.3 JWT {#jwt}

| Name | Description |
| --- | --- |
| Token | Value of the JSON Web Token as a string. |
| ExpirationDate | Expiration date of the JSON Web Token  |

#### 4.1.4 Statement {#statement}

| Name | Description |
| --- | --- |
| SQLStatement | The SQL statement to execute. |
| Timeout | The amount of seconds after which the connection will be closed. |
| Database | The database to use. |
| Schema | The database schema to use, for example 'PUBLIC'. |
| Warehouse | The warehouse to use for computations. |
| Role | The role to use to execute the SQL ttatement (preferably one with sufficient permissions). |

#### 4.1.5 ResultSet {#result-set}

| Name | Description |
| --- | --- |
| Code | Code that is returned from Snowflake as a response to the executed statement. |
| StatementHandle | Unique handle given to the statement that has been executed. It is saved as part of the ResultSet object. It can be used to retrieve the ResultSet object for each request. |
| Message | Message that is returned from Snowflake as a response to the executed statement. |
| NumRows | The amount of rows which will be returned by the executed statement (sum of all rows of partitions). |

#### 4.1.6 PartitionInfo {#partition-info}

| Name | Description |
| --- | --- |
| RowCount | The number of rows within this partition. The sum of all PartitionInfo.RowCount corresponds to ResultSet.NumRows |

### 4.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. 

#### 4.2.1 ExecuteStatement {#execute-statement}

The `ExecuteStatement` activity allows you to execute a command in Snowflake using the SQL statement and the configuration details given in a `Statement` object. It requires a `Statement` object and returns a list of `HttpResponse` objects.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Statement` | `{HttpResponseList}` |

#### 4.2.1 ExecuteStatement {#execute-statement}

The `ExecuteStatement` activity allows you to execute a command in Snowflake using the SQL statement and the configuration details given in a `Statement` object. It requires a `Statement` object and returns a list of `HttpResponse` objects.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Statement` | `HttpResponseList` |

#### 4.2.2 TransformResponsesToMxObjects {#transform-response-to-mx-object}

The `TransformResponsesToMxObjects` activity allows you to transform the list of `HttpResponse` objects into objects of the entity of your choice. 

It requires a list of `HttpResponse` objects and the entity of the objects you would like to create with the received information and returns a list of Mx objects of the entity given in the input.

| Input | Output |
| --- | --- |
| `HttpResponseList` `EntityType` | `{EntityType}ObjectList` |

To showcase this, we have created an example entity in the domain model of the connector:

| ExampleObject |
| --- |
| ATTR_TXT (string) |
| ATTR_INT (integer) |
| ATTR_LONG (long) |
| ATTR_BOOL (boolean) |
| ATTR_DECI (decimal) |
| ATTR_ENUM (enumeration) |
| ParsedDate (date and time)|

This entity was only created as an example and how the attibutes are named, what datatypes they have or in which order they are added, these decisions are completely up to the user. However, these information are important after the entity has been decided on and the data will be received from a Snowflake account. The order in which you receive the columns from a Snowflake table, the name of these columns as well as the datatypes of these values **must** match the entity you have selected.

Let's say I have a table in Snowflake with multiple columns named `column1, column2,.......,column8`. I would like to retrieve data from the column, create ExampleObject objects and display them on a page. In order to do this, I would need to execute an SQL statement that would retrieve the table columns with the name of my attributes and have the same datatypes. After making sure that the datatypes in Snowflake and Mendix match, a statement like this can be executed:

```
SELECT 
     column1 as ATTR_TXT,
     column2 as ATTR_INT,
     column3 as ATTR_LONG,
     column4 as ATTR_BOOL,
     column5 as ATTR_DECI,
     column6 as ATTR_ENUM
FROM your_table 
```

This statement returns data from a Snowflake table with the columns named as specified with the "as **NewColumnName**" part in the lines. If the attribute names, datatypes and their order match, the `TransformResponsesToMxObjects` activity automatically converts the retrieved data into Mendix objects.
