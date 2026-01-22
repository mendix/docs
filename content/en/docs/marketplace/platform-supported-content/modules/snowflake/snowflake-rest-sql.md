---
title: "Snowflake REST SQL Connector"
url: /appstore/connectors/snowflake/snowflake-rest-sql/
description: "Describes the configuration and usage of the Mendix-Snowflake REST SQL connector from the Mendix Marketplace." 
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Snowflake REST SQL connector](https://marketplace.mendix.com/link/component/225717) allows you to use data from Snowflake in your Mendix application and enrich your app with the capabilities that Snowflake provides.

### Typical Use Cases

The Snowflake REST SQL connector supports the following:

* Authentication:

    * Key-pair authentication (using PKCS #8 standard RSA keys)
    * OAuth authentication

* Functionality: Execute SQL statements on Snowflake via REST calls from your Mendix application. These statements allow you to perform the following tasks:

    * Read data from Snowflake.
    * Write data to Snowflake.
    * Trigger the following [Snowflake Cortex ML functions](https://docs.snowflake.com/en/guides-overview-ml-functions):
        * [Forecasting](https://docs.snowflake.com/en/user-guide/ml-functions/forecasting) – Predicts future metric values from past trends in time-series data.
        * [Anomaly Detection](https://docs.snowflake.com/en/user-guide/ml-functions/anomaly-detection) – Flags metric values that differ from typical expectations.
        * [CLASSIFY_TEXT](https://docs.snowflake.com/en/sql-reference/functions/classify_text-snowflake-cortex) – Given a piece of text, classifies it into one of the categories that you define.
        * [EXTRACT_ANSWER](https://docs.snowflake.com/en/sql-reference/functions/extract_answer-snowflake-cortex) – Given a question and unstructured data, returns the answer to the question if it can be found in the data.
        * [PARSE_DOCUMENT](https://docs.snowflake.com/en/sql-reference/functions/parse_document-snowflake-cortex) – Given an internal or external stage with documents, returns an object that contains extracted text content using OCR mode, or the extracted text and layout elements using LAYOUT mode.
        * [SENTIMENT](https://docs.snowflake.com/en/sql-reference/functions/sentiment-snowflake-cortex) – Returns a sentiment score, from -1 to 1, representing the detected positive or negative sentiment of the given text.
        * [SUMMARIZE](https://docs.snowflake.com/en/sql-reference/functions/summarize-snowflake-cortex) – Returns a summary of the given text.
        * [TRANSLATE](https://docs.snowflake.com/en/sql-reference/functions/translate-snowflake-cortex) – Translates given text from any supported language to any other.
        * [EMBED_TEXT_768](https://docs.snowflake.com/en/sql-reference/functions/embed_text-snowflake-cortex) – Given a piece of text, returns a vector embedding of 768 dimensions that represents that text.
        * [EMBED_TEXT_1024](https://docs.snowflake.com/en/sql-reference/functions/embed_text_1024-snowflake-cortex) – Given a piece of text, returns a vector embedding of 1024 dimensions that represents that text. 
    * Use [Snowflake Cortex Analyst](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst) – This Snowflake Cortex feature is used to get information/insights out of structured data sets using natural language instead of sql.

For more use cases and examples for [Snowflake Cortex LLM functions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions), written by the Head of Snowflake Tech Consulting, see [Karthik S Raman's Medium profile](https://medium.com/@karthiksraman).

The current version of the connector supports the following:

* Authentication with an RSA key pair according to PKCS #8 standard
* Authentication with OAUTH through an OIDC provider
* Execution of single SQL statements
* Synchronous execution of calls
* Execution of a Cortex Analyst query

### Prerequisites {#prerequisites}

The Snowflake REST SQL connector requires Mendix Studio Pro version 9.18.0 or above.

To use the Snowflake REST SQL connector, you must also install and configure the following modules from the Mendix marketplace:

* [Community Commons](https://marketplace.mendix.com/link/component/170) – This module is a required dependency for the Snowflake REST SQL connector.
* [Encryption](https://marketplace.mendix.com/link/component/1011) – This module is a required dependency for the Snowflake REST SQL connector. The EncryptionKey constant must be set up in your application settings.
* GenAI Commons module from the [GenAI For Mendix](https://marketplace.mendix.com/link/component/227931) bundle – Only required for the Snowflake REST Connector version 2.x. This module is a required dependency for the Snowflake Cortex Analyst.

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the services in Snowflake to which is connects may incur a usage cost. For more information, refer to the [Snowflake documentation](https://www.snowflake.com/en/data-cloud/pricing-options/).

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Snowflake REST SQL connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **SnowflakeRESTSQL** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use. 

### Configuring Snowflake Authentication

To use the capabilities of Snowflake in a Mendix app with the Snowflake REST SQL connector, you must use either OAUTH authentication or RSA key-pair authentication.

#### Configuring OAUTH Authentication {#setup-OAUTH-snowflake}

To find out how configure the OAUTH Authentication method, see [Role-based Access Control](/appstore/modules/snowflake/snowflake-rbac/).

#### Configuring Key-Pair Authentication in Snowflake {#setup-key-pair-snowflake}

To configure RSA key-pair authentication for your account in Snowflake, perform the following steps:

1. Generate the private key.
2. Generate a public key.
3. Assign the public key to a Snowflake user.

For more details about each step, refer to the official [Snowflake documentation](https://docs.snowflake.com/en/user-guide/key-pair-auth).

#### Setting up the Key-Pair Authentication in a Mendix App {#setup-key-pair-mendix}

To make it easier for users to configure the key-pair authentication in a Mendix app, the Snowflake REST SQL connector includes pages and microflows that you can simply drag and drop them into your own modules.

To configure the authentication, perform the following steps:

1. In the **App Explorer**, under the **SnowflakeRESTSQL** section, find the **SNIPPET_SnowflakeConfiguration** snippet and drag and drop it into a page in your module.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/drag_snippet_to_page.png" >}}

2. Assign the module role **SnowflakeRESTSQL.Administrator** to the application role that will be used to set up the configuration, so that the added logic will be usable.
3. Run the application and go to the page where you added the snippet.
4. Click **New**. 
5. On the **Connection details** page, fill out all fields with the details of your Snowflake account. For more information, see [ConnectionDetails](#connection-details).
6. In the Snowflake console, click **Copy account URL**. This URL will be used as the **Account URL** parameter for **Connection details**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/snowsight-account-url.png" >}}

7. In the Snowflake console, click **Copy account identifier**. Before using it inside Mendix, you must replace the `.` separator with a `-`. The final string will be used as the **Account identifier** parameter for the **Connection details**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/snowsight-account-identifier.png" >}}

8. Enter the passphrase and upload [your private key file](#setup-key-pair-snowflake) in *.p8* format.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/connection_details.png" >}}

9. Click **Save** to save the connection, or click **Save and test connection** to generate a JSON Web Token (JWT) and validate your connection.

### Configuring a Microflow for the Service

After you configure the authentication for Snowflake, you can implement the functions of the connector by using the provided activities in microflows. An extended microflow has been implemented and added to the Snowflake REST SQL connector as an example for users that would like to retrieve a list of objects from an existing table in Snowflake. In the **SnowflakeRESTSQL** module, see the **ExampleImplementation** microflow and the **ExampleObject** domain model entity to learn how the [**TransformResponsesToMxObjects** operation](#transform-response-to-mx-object) can be used to easily convert the data received in **HttpResponse** objects into Mendix objects. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/example_implementation.png" >}}

#### Asynchronous Query Execution

At present, the Snowflake REST SQL Connector does not provide any out of the box operation microflows for making asynchronous calls. However, you can still configure asynchronous calls manually using the connector.

To set this up:

1. Locate the **POST_v1_ExecuteStatement** microflow.
2. Open the **Call REST (POST)** action within this microflow and examine the **Location** field. Note a query parameter named **async** that is set to **false**.
3. Duplicate the **Call REST (POST)** action, modify the **async** query parameter to **true**, and use this as a basis to build your custom asynchronous microflows.

Your custom microflows should consist of the following:

* **A request call microflow** – Sends the request and returns the request ID.
* **A polling microflow** – Uses the request ID to check if the response is available, and then returns the response once it is ready.

This approach allows you to achieve asynchronous behavior while leveraging the Snowflake REST SQL Connector.

#### Programmatic Triggering of Ingestion Jobs

The Snowflake REST SQL connector can be used to trigger data ingestion jobs with an SQL statement. For more information, see [Mendix Data Loader: Programmatically Triggering an Ingestion Job From a Mendix App](/appstore/modules/snowflake/mendix-data-loader/#trigering-jobs).

## Binding Variables in Snowflake using the Snowflake REST SQL Connector

When executing SQL statements from Mendix into Snowflake, *binding variables* is a critical concept that improves security, performance, and maintainability of your database interactions.

### What Is Variable Binding?

Instead of putting values directly into your SQL, you can use `?` placeholders and provide the values separately. This is called *binding*. It works in a similar way to using parameters in a Mendix microflow, that is, it keeps your logic and data separate.

In Mendix, you do this by creating a `Statement` entity with a SQL query that includes `?`. Then, you add `Binding` entities to provide the values for those placeholders.

Each `Binding` is linked to the `Statement`. The order of the bindings matters — the first binding fills the first `?`, the second fills the second `?`, and so on.

Make sure the number of bindings matches the number of `?` placeholders in your SQL. Otherwise, the execution will fail due to mismatched parameters.

### Benefits of Variable Binding

Binding variables provides the following benefits:

* **Security** - Prevents SQL injection attacks by treating values as data, not code.
* **Reusability** - You can reuse the same SQL template with different values.
* **Performance** - Snowflake can cache and reuse execution plans for bound SQL.
* **Clarity** - Keeps SQL readable and separates logic from values—easier to debug and maintain.

## Sample SQL for Variable Binding

The following is an example of unbound SQL:

```sql
INSERT INTO db.sch.Persons (PersonID, LastName, FirstName, Address, City, IsActiveUser) 
VALUES (12, 'Doe', 'Jane', 'Main Street 123', 'Metroville', true);
```

The following is an example of bound SQL using `?` placeholders:

```sql
INSERT INTO db.sch.Persons (PersonID, LastName, FirstName, Address, City, IsActiveUser)
VALUES (?, ?, ?, ?, ?, ?);
```

The following values are provided separately in a bindings structure:

```sql
"bindings": {
    "1": { "type": "FIXED", "value": "12" },
    "2": { "type": "TEXT", "value": "Doe" },
    "3": { "type": "TEXT", "value": "Jane" },
    "4": { "type": "TEXT", "value": "Main Street 123" },
    "5": { "type": "TEXT", "value": "Metroville" },
    "6": { "type": "BOOLEAN", "value": "true" }
}
```

### Mendix Attribute Type to Snowflake Data Type Mapping

This table maps Mendix attribute types to Snowflake data types, along with common binding types and usage notes.

| Mendix Attribute Type | Snowflake Data Type | Typical Binding Type | Notes |
| --- | --- | --- | --- |
| Integer | `INT` / `NUMBER` | FIXED | Maps from Snowflake *INT* or *NUMBER*, depending on the range. |
| Decimal | `FLOAT` | REAL | Supports floating-point precision. |
| String | `VARCHAR` | TEXT | Use for general text data. |
| Binary / String | `BINARY` | BINARY / TEXT | *Binary* for raw data; *String* for hex representations. |
| Boolean | `BOOLEAN` | BOOLEAN / TEXT | Accepts `true`/`false` or `0`/`1`. |
| DateTime | `DATE` | DATE / TEXT | Stores both date and time; time defaults to `00:00:00`. |
| String / DateTime | `TIME` | TIME / TEXT | Store as *String* or convert to *DateTime*. |
| DateTime | `TIMESTAMP_TZ` | TIMESTAMP_TZ / TEXT | Time zone-aware; stored in UTC. |
| DateTime | `TIMESTAMP_LTZ` | TIMESTAMP_LTZ / TEXT | Local time zone; stored in UTC. |
| DateTime | `TIMESTAMP_NTZ` | TIMESTAMP_NTZ / TEXT | No time zone; stored in UTC. |

## Proxy Usage

Since version 3.1.0, the Snowflake REST SQL Connector supports using a proxy to make your REST calls. You can use the new `ProxySettings` entity to enable a proxy by performing the following steps: 

1. Create a **ProxySettings** object.
2. Set the `Host` and `Port` attributes to the host of the proxy and the port on which the proxy is listening.
3. Optional: Set the `User` and `Password` to authenticate against your proxy.
4. Associate the **ProxySettings** to your **ConnectionDetails** object (when using the **POST_v1_ExecuteStatement** operation), or the **CortexConnection** object (when using the **CortexAnalyst** operation).

Once configured, the connector automatically detects the `ProxySettings` object and routes REST requests through the specified proxy.

 {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/ProxyExample.png" >}}

## Technical Reference

To help you work with the Snowflake REST SQL connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Data in the Domain Model](/refguide/domain-model/).

#### ConnectionDetails {#connection-details}

| Name | Description |
| --- | --- |
| `Name` | An identifier of the connection inside the Mendix app. This property is not passed to Snowflake. |
| `AccountURL` | The unique account URL of the Snowflake account within your organization to connect to the [Snowflake API](https://sdc-prd.snowflakecomputing.com). For more information, refer to the Snowflake documentation about [account identifiers](https://docs.snowflake.com/en/user-guide/admin-account-identifier#finding-the-organization-and-account-name-for-an-account). |
| `ResourcePath` | The path to a resource in Snowflake API, for example, `/api/v2/statements`. |
| `AccountIdentifier` | A unique account identifier that identifies a Snowflake account within your organization, as well as throughout the global network of Snowflake-supported cloud platforms and cloud regions, for example, `<orgname>-<account_name>`. For more information, refer to the Snowflake documentation about [account identifiers](https://docs.snowflake.com/en/user-guide/admin-account-identifier#finding-the-organization-and-account-name-for-an-account). |
| `Username` | The username with which you sign in to your Snowflake account. |

#### PrivateKey {#private-key}

| Name | Description |
| --- | --- |
| `Passphrase` | A passphrase which is used to encode and decode the private key file. |

#### JWT {#jwt}

| Name | Description |
| --- | --- |
| `Token` | Value of the JSON Web Token as a string. |
| `ExpirationDate` | Expiration date of the JSON Web Token.  |

#### Statement {#statement}

| Name | Description |
| --- | --- |
| `SQLStatement` | The SQL statement to execute. |
| `Timeout` | The amount of seconds after which the connection will be closed. |
| `Database` | The database to use. |
| `Schema` | The database schema to use, for example `PUBLIC`. |
| `Warehouse` | The warehouse to use for computations. |
| `Role` | The role to use to execute the SQL statement. The role sufficient permissions to execute the statement. |

#### Binding {#binding}

| **Attribute**   | **Description**                                                       |
|----------------|------------------------------------------------------------------------|
| `createdDate`  | The timestamp when this binding was generated.                         |
| `BindingType`  | The Snowflake data type used in binding (e.g., `FIXED`, `TEXT`).       |
| `value`        | The actual value passed into the query for that position.              |

#### ResultSet {#result-set}

| Name | Description |
| --- | --- |
| `Code` | Code that is returned from Snowflake as a response to the executed statement. |
| `StatementHandle` | Unique handle given to the statement that has been executed. It is saved as part of the `ResultSet` object. It can be used to retrieve the `ResultSet` object for each request. |
| `Message` | Message that is returned from Snowflake as a response to the executed statement. |
| `NumRows` | The amount of rows which will be returned by the executed statement. This is a sum of all the rows in the partitions. |

#### PartitionInfo {#partition-info}

| Name | Description |
| --- | --- |
| `RowCount` | The number of rows within this partition. The sum of all `PartitionInfo.RowCount` corresponds to `ResultSet.NumRows`. |

### Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. 

#### ExecuteStatement {#execute-statement}

The `ExecuteStatement` activity allows you to execute a command in Snowflake using the SQL statement and the configuration details given in a `Statement` object. It requires a `Statement` object and returns a list of `HttpResponse` objects.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Statement` | `{HttpResponseList}` |

#### TransformResponsesToMxObjects {#transform-response-to-mx-object}

The `TransformResponsesToMxObjects` activity allows you to transform the list of `HttpResponse` objects into objects of the entity of your choice. 

It requires a list of `HttpResponse` objects and the entity of the objects that you would like to create with the received information. It returns a list of Mendix objects of the entity given in the input.

| Input | Output |
| --- | --- |
| `HttpResponseList`, `EntityType` | `{EntityType}ObjectList` |

To showcase this, we have created an example entity in the domain model of the connector:

| ExampleObject |
| --- |
| `ATTR_TXT` (string) |
| `ATTR_INT` (integer) |
| `ATTR_LONG` (long) |
| `ATTR_BOOL` (Boolean) |
| `ATTR_DECI` (decimal) |
| `ATTR_ENUM` (enumeration) |
| `ParsedDate` (date and time)|

This entity is only an example. You must review properties such as the naming of the attributes, what datatypes they have or in which order they are added, and configure them according to your needs. This information is important after the entity has been decided on and the data will be received from a Snowflake account. The order in which you receive the columns from a Snowflake table, the name of these columns as well as the datatypes of these values must match the entity that you have selected.

For example, a table in Snowflake may contain multiple columns named `column1, column2,.......,column8`. To retrieve data from the column, create `ExampleObject` objects and display them on a page, you must execute an SQL statement that would retrieve the table columns with the name of my attributes and have the same datatypes. After making sure that the datatypes in Snowflake and Mendix match, you can execute a statement such as the one shown in the following example:

```sql
SELECT 
     column1 as ATTR_TXT,
     column2 as ATTR_INT,
     column3 as ATTR_LONG,
     column4 as ATTR_BOOL,
     column5 as ATTR_DECI,
     column6 as ATTR_ENUM
FROM your_table 
```

This statement returns data from a Snowflake table with the columns named as specified with the `as **NewColumnName**" part` of each line. If the attribute names, datatypes and their order match, the `TransformResponsesToMxObjects` activity automatically converts the retrieved data into Mendix objects.

## Configuring Snowflake Cortex Analyst {#cortex-analyst}

[Snowflake Cortex Analyst](/appstore/modules/genai/snowflake-cortex/) is a fully-managed, LLM-powered Snowflake Cortex feature that helps you create applications capable of reliably answering business questions based on your structured data in Snowflake.

{{% alert color="info" %}}
Snowflake Cortex Analyst is currently in open preview. For more information, refer to the [Snowflake Cortex Analyst documentation](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst).
{{% /alert %}}

### Prerequisites

* Make sure that you have access to Cortex Analyst. For more information, refer to the [Snowflake Cortex Analyst documentation](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst).
* Create the semantic model for Cortex Analyst. For more information, refer to [Creating Semantic Models for Snowflake Cortex Analyst](https://developers.snowflake.com/solution/creating-semantic-models-for-snowflakes-cortex-analyst/) in the Snowflake Cortex Analyst documentation.
* Set up one of the following supported authentication methods for Cortex Analyst:
    * OAUTH
    * WT-Keypair

### Configuration 

To configure your Mendix app for Snowflake Cortex Analyst, perform the following steps:

1. Create a microflow and add the **Cortex Analyst: Create Cortex Analyst Connection** action from the **Toolbox**.
2. Provide the following mandatory information:
    * **Token** – The authentication token created from the OIDC provider, or the JWT Token
    * **AccountURL** – The URL of the Snowflake account that has access to Snowflake Cortex Analyst
    * **Authentication Type**
3. Add the **Cortex Analyst: Create Request** action from the **Toolbox**, and then configure the **Request** to contain the path to the Snowflake semantic model file.
4. Add the **Chat: Add Message to Request** action from the Toolbox and provide the following information:
    * **Request** – The request that you configured for the **Cortex Analyst: Create Request** action
    * **ENUM_MessageRole** – The role of the entity that creates the message; in the current version, the role must be set to **user**
    * **ContentString** – The text of the question for Cortex Analyst
5. Add the **Snowflake Cortex Analyst** action from the Toolbox and provide the following information:
    * **Connection** – The Cortex Analyst connection that you configured for the **Cortex Analyst: Create Cortex Analyst Connection** action
    * **Request** – The request that you configured for the **Cortex Analyst: Create Request** action
6. To get the response message from the response, add the **Response: Get Cortex Analyst Response Message** action from the Toolbox, and then add the **Response** entity as a parameter. The message contains the following information:
    * **Content** – This is the content of the response message. It includes the text and the SQL, or the suggestions if no SQL is returned
    * **Cortex Role** – The entity that produced the message; possible values are *user* or *analyst*
    * **SQLText** – The returned SQL suggestion
7. To get the Cortex Analyst Response entity, add the **Response: Get Cortex Analyst Response** action from the Toolbox, and then add the **Response** entity as a parameter. The response contains the following information:
    * **Request_ID** – The returned *RequestId*
   
 {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/CortexAnalystRequestExample.png" >}}

### Example Implementation

 The [Snowflake showcase app](https://marketplace.mendix.com/link/component/225845) contains example implementations of the Analyst, ANOMALY DETECTION, COMPLETE and TRANSLATE functionalities. For more information, see [Snowflake Cortex Analyst](/appstore/modules/genai/snowflake-cortex/#functionalities).
