---
title: "Configure the External Database Connector for Databricks"
linktitle: "Databricks"
url: /appstore/modules/databricks/external-database-connector/
description: "Describes the steps required to use the Mendix External Database connector with Databricks."
---

## Introduction

The [External Database connector](/appstore/modules/external-database-connector/) allows you to connect to databases and select data to use in your app. You can use it to directly test connections and queries during configuration in Studio Pro at design time. For Mendix apps that use Databricks as their database, the External Database connector is the recommended integration option for Mendix 10.20.0 and above.

This how-to describes the steps required to enable your app to use the External Database connector with Databricks.

## Prerequisites

For some general information on how to use bring your own JDBC driver with the external database connector, read [External Database Connector: Configure for Any Database](https://docs.mendix.com/appstore/modules/external-database-connector/#byod).

## Configuring the Connection Between Your Mendix App and Databricks

To connect your Mendix application to Databricks with the External Database connector, follow these steps:

1. Install the [External Database connector](https://marketplace.mendix.com/link/component/219862) version 5.1.1 or higher. 
2. Ensure that you have the required Databricks JDBC Driver by choosing one of the following options:

    * To have the dependency downloaded automatically on running your project, add a **Java Dependency** in the **Settings** of you module and provide the following information:    
        * **Group ID** - set to **com.databricks**
        * **Artifact ID** - set to **databricks-jdbc**
        * **Version** - set to the latest **2.x** version
   
   {{< figure src="/attachments/appstore/platform-supported-content/modules/databricks/JavaDependency.png" >}}
   
   * To install the dependency manually, download the latest 2.x version of the [JDBC driver](https://www.databricks.com/spark/jdbc-drivers-archive) that Databricks provides and put the .jar file into the *userlib* of your Mendix project.

3. Run you Mendix project and run the [Connect to Database wizard](/appstore/modules/external-database-connector/#configuration), selecting **Other** as the database type.

   {{< figure src="/attachments/appstore/platform-supported-content/modules/databricks/DatabricksConfig.png" >}}

4. Provide a name for the database connection document.
5. Enter the following connection details:

    * **User name** - set to **token**
    * **Password** - set to the personal access token (PAT) that you can generate through the user settings in Databricks:

   {{< figure src="/attachments/appstore/platform-supported-content/modules/databricks/PAT.png" >}}
   
6. In your Databricks account find the JDBC URL related to the SQL warehouse or cluster which you are using.
7. Copy the URL into the **JDBC URL** field and add *UID=token;PWD=`PAT`*, where `PAT` is your actual PAT.

   {{< figure src="/attachments/appstore/platform-supported-content/modules/databricks/JDBC_URL.png" >}}
  
8. Click **Test Connection** to verify the connection details, and then click **Save**.

Your Mendix app now connects to Databricks with the provided connection details. When the connection is successful, you can see your Databricks tables in your Mendix app.

{{< figure src="/attachments/appstore/platform-supported-content/modules/databricks/Database_structure.png" >}}

You can now configure the queries that you need to run on your Databricks database. The following section of this document provides an example of a common query. For general information about creating queries, see [External Database Connector: Querying a Database](/appstore/modules/external-database-connector/#query-database) and [External Database Connector: Using Query Response](/appstore/modules/external-database-connector/#use-query-response).

## Configuring a Basic Query

This section shows a basic example of how to use the database connector to execute a query on your Databricks data. 

### Creating Data in your Databricks Workspace

If you do not have any test customer data in your Databricks workspace, you can create it by running the following SQL command in your workspace's SQL Editor:

```sql
CREATE TABLE customerData (
    name varchar(64),
    address varchar(64),
    postal_code varchar(6),
    gender varchar(64)
); 

INSERT INTO customerData (name, address, postal_code, gender) VALUES 
    ('Henk de Vries', 'Klaprooslaan 5, Bloemenstad', '1234AB', 'Male'),
    ('Sanne Verbeek', 'Molendam 8, Waterveen', '2345CD', 'Female'),
    ('Jan-Willem Bos', 'Zonstraat 22, Zomerhoven', '3456EF', 'Male'),
    ('Marieke de Groot', 'Windmolenweg 33, Korenveld', '4567GH', 'Female'),
    ('Bert van Dijk', 'Vlinderplein 15, Lenteveen', '5678JK', 'Male'),
    ('Lotte van Dam', 'Regenboogpad 10, Kleurenburg', '6789LM', 'Female'),
    ('Koen Smits', 'Eikenlaan 2, Bosrijk', '7890NO', 'Male'),
    ('Emma Visser', 'Druppelweg 45, Regenstad', '8901QP', 'Female'),
    ('Thomas Mulder', 'Sterrenhof 7, Hemelrijk', '9012RS', 'Male'),
    ('Sophie Jansen', 'Kersenstraat 12, Fruitdorp', '0123TU', 'Female');
```

{{< figure src="/attachments/appstore/platform-supported-content/modules/databricks/SQL_Editor.png" >}}

### Querying the Data

After you have created a table with some entries, you can now be query from your Mendix application.

1. In your Mendix app, in the **App Explorer**, find and open the external connection document that you created with the Connect to Database wizard.
2. In the **Name** field, enter a name for your query, for example, *CustomerData_Get*.
3. Enter the following **SQL Query**:

    ```sql
    SELECT * FROM customerData
    ```

4. Click **Run Query**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/databricks/Query.png" >}}

5. Verify that the results are correct, and then generate the required entity to collect the data in your Mendix application. For more information, see [External Database Connector: Creating an Entity from the Response](/appstore/modules/external-database-connector/#create-entity).
6. Create a microflow that will run the query by doing the following steps:
    1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
    2. Enter a name for your microflow, for example, *ACT_Customerdata_Get*, and then click **OK**.
    3. In your **Toolbox**, find the **Query External Database** activity and drag it onto the work area of your microflow.
    4. Position the **Query External Database** activity between the start and end event of your microflow.
    5. Double-click the **Query External Database** microflow activity to configure the required parameters.
    6. In the **Database** section, select your Databricks database.
    7. In the **Query** list, select the query name that you entered in step 2.
    8. In the **Output** section, provide the following values:
        * **Return type** - **List of *{your module name}*.customerdata**
        * **Use return value** - set to **Yes**
        * **List name** - enter *Customerdata_list*
    9. Click **OK**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/databricks/JA_Query.png" >}}

7. Link the microflow to a microflow button and use the Debugger to test if the objects are properly returned.

## Read More

* [External Database Connector: Resolving Apache Arrow dependency issue in Databricks](/appstore/modules/external-database-connector/#apache-arrow-databricks)
