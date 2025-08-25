---
title: "External Database Connector"
url: /appstore/modules/external-database-connector/
description: "Describes the configuration and usage of the External Database Connector."
aliases:
    - /appstore/connectors/external-database-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

Connect to Microsoft SQL, MySQL, PostgreSQL, Oracle, and Snowflake databases with the [External Database Connector](https://marketplace.mendix.com/link/component/219862).

## Use Cases

Use this module to connect to databases and select data to use in your app. This connector allows you to directly test connections and queries during configuration in Studio Pro (design time). 

{{% alert color="info" %}}
If you need to connect to other database types, see the [Database Connector](/appstore/modules/database-connector/). Keep in mind that design time support is not available for the older version of the connector.
{{% /alert %}}

## Features {#features}

This connector supports connections to the following database types:

* Microsoft SQL
* MySQL
* PostgreSQL
* Oracle
* Snowflake

This connector supports the following statements:

* `SELECT`
* `INSERT` 
* `UPDATE`
* `DELETE`
* `Stored Procedure`

### Limitations 

* The connector supports columns and stored procedure parameters with primitive data types only
* Parameters are only supported for filter values (prepared statements)
* Certificate-based authentication for PostgreSQL is not supported on macOS

### Prerequisites

* External database connection details, including the following:
    * Login credentials
    * Database type
    * Hostname, port, and database name; or, instead, the JDBC connection string

## Installation {#installation}

Download the [External Database Connector](https://marketplace.mendix.com/link/component/219862) and [add it to your app](/appstore/use-content/).

## Configuration in Design Time {#configuration}

With this connector, you can test database connections and add queries and parameters during design time before your app is running. This allows you to make sure everything works before deploying your app.

### Connecting to a Database {#connect-database}

After installing the connector, get started by doing the following:

1. Right-click the module you would like to add the connection to and click **Add other** > **External database connection**. This opens the **Database Connection** wizard:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/database-connection-wizard.png" class="no-border" >}}

2. Select the database to which you would like to connect and enter the required information.

3. Click **Test Connection** to see if the connection works. If you do not see a green **Connection Successful** text confirmation, try checking your database details again.

4. Click **Save** to open the external database document for this database.

For more information on the connection details, see [Connect to an External Database](/refguide/external-database-connection/).

### Saving Connection Details

The connection details are stored in 3 constants:

* `\<Document Name\>_DBSource`
* `\<Document Name\>_DBUsername`
* `\<Document Name\>_DBPassword`

For example: `*Database*_DBsource.`

Values for these constants are stored in the active configuration of the user. The password is stored as a private value.

{{% alert color="info" %}}
Constants are an environment variable whose values can differ per environment, When you deploy an app on Mendix Cloud, values for constants are not added. For more information, see [Constants](/refguide/configuration/#constants).

For free apps, make sure to add the default values to the constant in Studio Pro. For more information, see the [Deploying a Free App](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/#deploy-free-app) section of *Deploying an App to Mendix Cloud*. {{% /alert %}}

{{% alert color="info" %}}
From Studio Pro 11.1, you can provide dynamic values to connection properties using connection parameters in the Query External Database activity. {{% /alert %}}

### Exploring Schemas of a Connected Database

When the connection is successful and saved, you can search the **Browse database** tab for Tables, Views, Procedures, and Functions.

{{< figure src="/attachments/refguide/modeling/integration/use-platform-supported-content/use-the-external-database-connector/3.png" width="700" >}}

## Querying a Database {#query-database}

To query the database, do the following:

1. Enter a query **Name** so you can access the same query later.
2. Enter your **SQL Query** to select data from your database for use in your app. For example, the query `SELECT * from customers` selects all rows in the **Customers** table:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/select-query-columns.png" class="no-border" >}}
   
3. Click **Run Query** to move to the **Response data** tab and view the queried data.

### Adding Parameters {#parameters}

Click **Add Parameter** to add parameters to your SQL queries to pass dynamic values to the query at runtime. 

The example database in [Querying a Database](#query-database) is a table of customer details with information such as customer name, address, and phone number. Let's say you want to specify a specific customer while your app is running. You can add the following parameter:

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/example-parameter.png" class="no-border" >}}

Then, use the parameter in the query:

`select * from customers where contactFirstName like {paramFirstName}`

To pass a list of values to a parameter, you can use the following approach:

```sql
WITH empids AS (
   SELECT empid
   FROM json_table({EmpIdList}, '$[*]' columns (empid number PATH '$'))
)
SELECT *
FROM emp
WHERE empno IN
    (SELECT empid
     FROM empids);
```

Here, the parameter `EmpIdList` is of type String with the  value `[1,7946,3,4,7942,7943,7945]`.

### Using Query Response {#use-query-response}

After querying the database, you can view the response in the **Response** screen. 

Click **Use Response** if you want to create an entity from the response.

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
5. Modify values for connection parameters, if you want to use a different set of connection details during runtime.
6. In the **Output** field, choose if you want to **Use return value**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/return-type.png" class="no-border" >}}

7. Click **OK**.
8. Configure the end event (such as displaying a list, if you are selecting data to appear in a list). 

You can now use the microflow in your app. Below is an example of a configured microflow:

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/example-microflow.png" class="no-border" >}}

See the [Integration Activities](/refguide/integration-activities/) section of the *Studio Pro Guide* for further explanation of the properties in this activity.
See the [Call Stored Procedure](/howto/integration/use-the-external-database-connector/) section of *Use the External Database Connector* for more information on how to call a stored procedure.

### Saving Intermediate Queries

As of Studio Pro 10.20, it is possible to save queries at intermediate stages.

Studio Pro's standard save behavior is implemented, including the dot indicator in the tab to signify unsaved changes.

Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to store changes when switching to a different query or performing another action. Make sure to not to use queries that are saved intermediately in the [Query External Database](/refguide/query-external-database/) activity of a microflow, as it might lead to runtime exception.

## Use Certificate-Based Authentication for PostgreSQL Connections {#postgres-ssl}

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

2. If the PostgreSQL server requires Mendix to authenticate using a client certificate, add the client certificate details to the App Settings by clicking **Configuration** > **Edit** > **Custom**. See the [Running Locally](/developerportal/deploy/use-a-client-certificate/) section of *Use a Client Certificate* for further instructions of how to add the certificate details.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/edit-configuration.png" class="no-border" >}}

3. Add the connection details to the [Database Connection wizard](#connect-database). Fill in the following details:
    * Set SSL encryption to **Yes**
    * Set SSL mode as per your requirement
    * Add the Client certificate identifier; this must match the value provided in the custom settings dialog

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/example-SSL-connection.png" class="no-border" >}}

4. Click **Test Connection**.

5. Run your application to test the connection for local runtime.

### Running in the Cloud

To connect to PostgreSQL when the application is running in Mendix Cloud, follow these steps:

1. To configure SSL-based authentication in Mendix Cloud, add a CA certificate and client certificate for server configuration and the selected SSL mode. For more details, see the [Running in the Cloud](//developerportal/deploy/use-a-client-certificate/) section of *Use a Client Certificate*.
2. After the client certificate has been added, double-click the client certificate and add the value `ClientCertificateIdentifier` to `Use Client Certificate for specific services`. This must match the value provided for the constant `ClientCertificateIdentifier`.
3. Add the required values to the constants created for DBSource, DBUsername, DBPassword, and ClientCertificateIdentifier.

## Configure for Any Database {#byod}

### Prerequisites 

* Ensure you have the appropriate Java Database Connectivity (JDBC) JAR file for the specific database.
* Gather the external connection details, including login credentials and the JDBC connection string.

### Connect to the Database

1. Open the module settings and add the JDBC JAR File.
   
   * Alternatively, place the downloaded JAR file in the userlib folder of your application.

2. Run the app with the latest version of the External Database Connector. 

3. Create a New External Database Connection.
4. Open the connection settings and under Database Type, select **Other**.
5. Enter the login credentials and JDBC connection string.
6. Click **Test Connection** to ensure the database connection is successful.
7. Click **Save** to save the connection details. 

### Configure Database Schema Information 

The Browse Database Schema tab might not display a comprehensive overview of all available schemas for certain databases. You can customize this behavior using the Configure option. To do so, follow these steps:

1. Open the **App** menu and select **Deploy for Eclipse**.
2. Extend the class MxQueryBasedSchemaInfoProvider.
3. Override the following methods based on your requirements:
    * getTableMetaDataQuery
    * getViewMetaDataQuery
    * getProcedureMetaDataQuery
    * getFunctionMetaDataQuery
4. Use the provided example, MxDb2SchemaInfoProvider for IBM Db2, for a better understanding of how to customize the schema information.

### Running Queries and Handling Query Responses

Execute queries as you would with supported databases, and retrieve responses in the associated entity. Refer to the documentation of your specific JDBC library for detailed syntax and execution options.

{{% alert color="info" %}}
By default, autocommit is set to false for design time queries.
{{% /alert %}}

### Resolving Dependency Issues with Apache Arrow on JDK 17 or 21

When using JDK versions 17 or 21 (or any version above 16), you may encounter compatibility issues if database you are connecting to has a dependency on Apache Arrow.

### Resolving Apache Arrow Dependency Issues in Snowflake

The Snowflake JDBC Driver uses Arrow as the default result format for query execution to improve performance. However, you can override this default setting by switching the result format to JSON.

To set the result format at the Snowflake session or user level, use the following SQL statement:

```sql
**ALTER USER <user_name> SET JDBC_QUERY_RESULT_FORMAT='JSON';**
```

This approach ensures compatibility with JDK 16+.
For more information, see [Getting Java Lang NoClassDefFoundError](https://community.snowflake.com/s/article/Getting-java-lang-NoClassDefFoundError-for-class-RootAllocator) in Snowflake documentation.

### Resolve Apache Arrow Dependency Issues in Databricks {#apache-arrow-databricks}

The Databricks JDBC Driver uses Arrow for serialization as it improves performance.

To override this setting add below parameter to JDBC URL

```sql
EnableArrow=0
```

For more information, see:

* [Java 21 Support with Databricks](https://community.databricks.com/t5/data-engineering/java-21-support-with-databricks-jdbc-driver/td-p/49297) in Databricks documentation
* [Configure the External Database Connector for Databricks](/appstore/modules/databricks/external-database-connector/)

## Read More

* [Connect to an External Database](/refguide/external-database-connection/), an overview of the External Database Connection document.
* [Querying and Integrating External Data](/refguide/query-and-integrate-external-data/), describes how to use the External Database Connector to query external databases and integrate data into your Mendix application.
