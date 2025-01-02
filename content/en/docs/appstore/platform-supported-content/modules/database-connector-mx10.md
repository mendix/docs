---
title: "External Database Connector"
url: /appstore/modules/external-database-connector/
description: "Describes the configuration and usage of the new Database connector, which incorporates your external data directly in your Mendix app."
aliases:
    - /appstore/connectors/external-database-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

Connect to Microsoft SQL, MySQL, PostgreSQL, Oracle, and Snowflake databases with the [External Database Connector](https://marketplace.mendix.com/link/component/219862). The External Database Connector is supported for [Studio Pro 10.6](/releasenotes/studio-pro/10.6/) and above.

{{% alert color="info" %}}
If you are using Studio Pro 10.12, make sure to use the latest version 3.0.0 [External Database Connector](https://marketplace.mendix.com/link/component/219862).
{{% /alert %}}

This document provides instructions on how to configure and use the External Database Connector. For information on the database wizard and how to connect using the External Database Connection document, see [External Database Connection](/refguide/external-database-connection/). For information on how to create and validate SQL queries, see [Use the External Database Connector](/refguide/use-the-external-database-connector/).

### Typical Use Cases

Use this module if you need to connect to databases and select data to use in your app. This connector allows you to directly test connections and queries during configuration in Studio Pro (design time). 

If you need to connect to other database types, check out the [Database Connector](/appstore/modules/database-connector/). Keep in mind that design time support is not available for the older version of the connector.

### Features {#features}

This connector supports connections to the following database types:

* Microsoft SQL
* MySQL
* PostgreSQL - For certificate-based authentication (available from Studio Pro 10.16), see the [Use Certificate-Based Authentication for PostgreSQL Connections](#postgres-ssl) section below
* Oracle
* Snowflake – GA support from [Studio Pro 10.12](/releasenotes/studio-pro/10.12/) (Beta versions are available from [Studio Pro 10.10](/releasenotes/studio-pro/10.10/)). For more information, see [Configure the External Database Connector for Snowflake](/appstore/modules/snowflake/external-database-connector/)

If you are looking for another database type, follow the prompt to request support your database when you open the database connection wizard.

This connector supports the following statements:

* `SELECT`
* `INSERT` 
* `UPDATE`
* `DELETE`
* `Stored Procedure`

### Limitations 

* `SELECT` queries and `Stored Procedure` can be saved only if they are successfully executed and a response structure is created
* The connector supports columns and stored procedure parameters with primitive data types only
* If column names contain special characters, use an alias for the column name
* Parameters are only supported for filter values (prepared statements)
* Certificate-based authentication for PostgreSQL is not supported on macOS

### Prerequisites

* Studio Pro 10.6 or above
* External database connection details, including the following:
    * Login credentials
    * Database type
    * Hostname, port, and database name; or, instead, the JDBC connection string

## Installation {#installation}

Download the [External Database Connector](https://marketplace.mendix.com/link/component/219862) and [add it to your app](/appstore/use-content/).

## Configuration in Design Time {#configuration}

With this connector, you can test database connections and add queries and parameters during design time before your app is running. This allows you to make sure everything works before deploying your app.

### Getting Started: Connecting to a Database {#connect-database}

After [installing](#installation) the connector, get started by doing the following:

1. Right-click the module you would like to add the connection to and click **Add other** > **External database connection**. This opens the **Database Connection** wizard:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/database-connection-wizard.png" class="no-border" >}}

2. Select the database to which you would like to connect and enter the required information.

3. Click **Test Connection** to see if the connection works. If you do not see a green **Connection Successful** text confirmation, try checking your database details again.

4. Click **Save** to open the external database document for this database.

{{% alert color="info" %}}
Connection details are stored as constants, their values are stored in the Active configuration of the user, the password is stored as a private value.
{{% /alert %}}

Now you can start [querying the database](#query-database) to select data to use in your app.

### Querying a Database {#query-database}

To query the database, do the following:

1. Enter a query **Name** so you can access the same query later.
2. Enter your **SQL Query** to select data from your database for use in your app. For example, the query `SELECT * from customers` selects all rows in the **Customers** table:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/select-query-columns.png" class="no-border" >}}
   
3. Click **Run Query** to move to the **Response data** tab and view the queried data.

#### Adding Parameters {#parameters}

Click **Add Parameter** to add parameters to your SQL queries to pass dynamic values to the query at runtime. 

The example database in [Querying a Database](#query-database) is a table of customer details with information such as customer name, address, and phone number. Let's say you want to specify a specific customer while your app is running. You can add the following parameter:

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/example-parameter.png" class="no-border" >}}

Then, use the parameter in the query:

`select * from customers where contactFirstName like {paramFirstName}`

### Using Query Response {#use-query-response}

After [querying the database](#query-database), you can view the response in the **Response** screen. 

Click **Use Response** if you want to [create an entity from the response](#create-entity).

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/execute-query.png" class="no-border" >}}

### Creating an Entity from the Response {#create-entity}

In the **Response Structure** tab, there is a preview of the queried data in an entity. You can adjust the entity name, though one is suggested for you:

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/response-structure.png" class="no-border" >}}

Click **Save Query & Create Entity** to create the entity and add it to your domain model:

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/entity-created-from-database.png" class="no-border" >}}

### Using the Entity in a Microflow {#entity-microflow}

Use the [Query External Database](/refguide/query-external-database/) activity to call the database in a microflow. Do the following:

1. Create a new microflow and drag the **Query external database** activity into it.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/query-external-database.png" class="no-border" >}}

2. Double-click the activity and in the **Database** field, click **Select** to choose the database you want to query.
3. Select the **Query** you want to include in the activity (that you saved while [querying the database](#query-database)).
4. Include any [parameters](#parameters).
5. In the **Output** field, choose if you want to **Use return value**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/return-type.png" class="no-border" >}}

6. Click **OK**.
7. Configure the end event (such as displaying a list, if you are selecting data to appear in a list). 

You can now use the microflow in your app. Below is an example of a configured microflow:

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/example-microflow.png" class="no-border" >}}

See the [Integration Activities](/refguide/integration-activities/) section of the *Studio Pro Guide* for further explanation of the properties in this activity.
See the [Call Stored Procedure](/howto/integration/use-the-external-database-connector/) section of *Use the External Database Connector* for more information on how to call a stored procedure.

## Use Certificate-Based Authentication for PostgreSQL Connections {#postgres-ssl}

### Prerequisites 

The certificates below are required for server configuration and the SSL mode selected.

* Authority certificate (CA certificate), which is used to sign the server and client certificate. The CA file should have only one certificate. 
* A PKCS12 certificate file that contains a private key. These files typically have the *.pfx* or .*p12* file extension and a password to open the file.

### Running Locally

You can configure custom settings that are only used when you run your app locally. To do this, follow these steps: 

1. Add the authority certificate (CA) to the **Certificates** tab in the App Settings. See the [Certificates Tab](/refguide/app-settings/#certificates-tab) section of *App Settings* for information about adding certificates. 

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/certificates-tab.png" class="no-border" >}}

    <!-- Need to do it this way to satisfy linter and get correct format -->
    {{% alert color="info" %}}
To test SSL-based connections from the Database Connection wizard, use the Certificate Manager to add a CA certificate. To do this, follow these steps:

1. Open the Start menu and search `Manage computer certificates`
1. Open **Trusted Root Certification Authorities** > **Certificates** 
1. Import the CA certificate file
    {{% /alert %}}

1. If the PostgreSQL server requires Mendix to authenticate using a client certificate, add the client certificate details to the App Settings by clicking **Configuration** > **Edit** > **Custom**. See the [Running Locally](/howto/integration/use-a-client-certificate/) section of *Use a Client Certificate* for further instructions of how to add the certificate details.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/edit-configuration.png" class="no-border" >}}

1. Add the connection details to the [Database Connection wizard](#connect-database). Fill in the following details:
    * Set SSL encryption to **Yes**
    * Set SSL mode as per your requirement
    * Add the Client certificate identifier; this must match the value provided in the custom settings dialog

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/example-SSL-connection.png" class="no-border" >}}

1. Click **Test Connection**.

1. Run your application to test the connection for local runtime.

### Running in the Cloud

To connect to PostgreSQL when the application is running in Mendix Cloud, follow these steps:

1. To configure SSL-based authentication in Mendix Cloud, add a CA certificate and client certificate for server configuration and the selected SSL mode. For more details, see the [Running in the Cloud](/howto/integration/use-a-client-certificate/#running-in-the-cloud) section of *Use a Client Certificate*.
2. After the client certificate has been added, double-click the client certificate and add the value `ClientCertificateIdentifier` to `Use Client Certificate for specific services`. This must match the value provided for the constant `ClientCertificateIdentifier`.
3. Add the required values to the constants created for DBSource, DBUsername, DBPassword, and ClientCertificateIdentifier.
