---
title: "Snowflake REST SQL Connector"
url: /appstore/connectors/snowflake/snowflake-rest-sql/
description: "Describes the configuration and usage of the Mendix-Snowflake bulk data loader module from the Mendix Marketplace."
weight: 20
tags: ["marketplace", "marketplace component", "snowflake", "data loader", "module"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

# !!IMPORTANT!! THIS TEMPLATE IS COPIED OVER FROM THE AWS TEMPLATE. PLEASE ADJUST IT AS NEEDED AND LET ME KNOW IF ANY PARTS ARE NOT APPLICABLE, OR IF ANYTHING SHOULD BE ADDED.

# Snowflake REST SQL Connector

## 1 Introduction

The Snowflake REST SQL connector enables you to enrich your Mendix app with the capabilities of Snowflake.

### 1.1 Typical Use Cases

The Snowflake REST SQL connector provides a way to first setup key-pair authentication with a 2048-bit RSA key pair and then execute SQL statements on Snowflake via a REST call from within your Mendix application. These statements allow you to:

- Read data from Snowflake
- Write data to Snowflake
- Trigger [Snowflake Cortex ML functions](https://docs.snowflake.com/en/guides-overview-ml-functions)
- Use [Snowflake Cortex LLM functions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions)

The current version of the connector supports:
- authentication with a 2048-bit RSA key pair
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

In order to use the capabilities of Snowflake in a Mendix app with the Snowflake REST SQL connector, a 2048-bit RSA key pair authentication method must be used.

### 3.1.1 Configuring key-pair authentication in Snowflake

To configure 2048-bit RSA key pair authentication for you account in Snowflake, the following steps need to be taken:

1. Generate the private key
2. Generate a public key
3. Assign the public key to a Snowflake user

A more descriptive explanation of these steps can be found in the official [Snowflake documenantation](https://docs.snowflake.com/en/user-guide/key-pair-auth).

### 3.1.2 Setting up the key-pair authentication in a Mendix app


### 3.2 Configuring a Microflow for the Service

After you configure the authentication profile for {SERVICE NAME}, you can implement the functions of the connector by using the provided activities in microflows. For example, to {DESCRIBE A TASK}, implement the {ACTIVITY NAME, WITH LINK TO THE RELEVANT SECTION IN TECHNICAL REFERENCE BELOW} activity by doing the following steps:

{A DETAILED STEP-BY-STEP CONFIGURATION PROCEDURE, WITH SCREENSHOTS. SEE THE DYNAMODB CONNECTOR DOC FOR THE LEVEL OF DETAIL THAT'S REQUIRED.}

## 4 Technical Reference

To help you work with the {CONNECTOR NAME} connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

The entities in the table below describe all generalizations. These are reused by the different models for the specific microflow activities or for storing connection details.

| Name | Description |
| --- | --- |
| {ENTITY NAME} | {ENTITY DESCRIPTION} |

### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the {CONNECTOR NAME} connector, enumerations list values such as {AS REQUIRED}.

#### 4.2.1 `{ENUMERATION NAME}`

| Name | Caption | Description |
| --- | --- | --- |
| {ENUMERATION ELEMENT NAME} | {ENUMERATION ELEMENT VALUE} | {ENUMERATION ELEMENT DESCRIPTION} |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the {CONNECTOR NAME} connector, they {PURPOSE OF THE ACTIVITIES}.

#### 4.3.1 {ACTIVITY NAME}

The `{ACTIVITYNAME}` {AWS SERVICE NAME} activity allows you to {ACTIVITY PURPOSE}. It requires {REQUIRED PARAMETERS}. {OPTIONAL, IF THE ACTIVITY HAS NO OUTPUT: "This activity has no return value.
"}

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `{INPUT OBJECT}` | `{OUTPUT OBJECT}` |

##### OPTIONAL, INCLUDE ONLY IF THE ACTIVITY RETURNS AN OUTPUT:

This activity returns a `{OUTPUT OBJECT}` object with objects from the following entities, as shown in the table below:

| Name |    Generalization |    Documentation |
| --- | --- | --- |
| `{ENTITY NAME}` | `{ENTITY GENERALIZATION}` | {ENTITY DESCRIPTION} |
