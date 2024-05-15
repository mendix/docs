---
title: "Snowflake Role-Based Access Control"
url: /appstore/modules/snowflake/snowflake-rbac/
description: "Describes how to use the role-based access control of Snowflake in a Mendix application."
weight: 20
tags: ["snowflake", "rbac", "rest sql"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

Snowflake's [role-based access control (RBAC)](https://www.snowflake.com/trending/what-rbac/) approach allows you to assign privileges that define levels of access to data within Snowflake. You can assign these privileges to roles, which are then assigned to users or other roles. This model provides both control and flexibility, making it easier to manage access to data and resources within Snowflake. 

This is relevant when data is presented within Mendix applications, to ensure the data being exposed to a certain user or role within Snowflake is guaranteed to be the same as to when presented in a Mendix app to for the same user.

Role-Based Access Control (RBAC) is crucial for Snowflake integration due to several reasons. First, it adheres to the “Least Privilege” principle, ensuring that users have access only to the necessary information and functionalities based on their job roles. Note that the Least Privilege principle does not come by default, it needs to be followed by the person configuring the access in snowflake. Second, RBAC provides granularity and flexibility, allowing fine-grained control over access to securable objects. Third, the structured hierarchy in Snowflake ensures organized and manageable access control. Finally, RBAC mitigates risks by preventing unauthorized actions and reducing the likelihood of data breaches and insider threats.

Remember, implementing RBAC is essential for maintaining security and managing access effectively in Snowflake link.

## 2 Set up 

### 2.1 Prerequisites

* Download the Rest SQL Connector for Mendix [Rest SQL Connector module](https://marketplace.mendix.com/link/component/225717) from Mendix marketplace that supports Snowflake integration.
* Ensure your Mendix app has the necessary domain model and entities.
* For the Role-based access control the Connection Details is associated with the account
{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/domain-model.png" >}}

### 2.2 Key-Pair Authentication Method

* Decide on the authentication method. Since we’re using Snowflake, consider using key-pair authentication.
* Configure the necessary keys and credentials in your Snowflake account based on the [documentation](https://docs.snowflake.com/en/user-guide/key-pair-auth) and make sure to assign the public Key to a Snowflake user.

### 2.3 Create Connection Details object and Associate it with the Account

* A new connection Details record is needed for every user that have access to Data at Snowflake. 
* To apply Mendix best practices when it come to market place modules, and security, create a new account overview page where you can add the Connection details to the Users
* When using the Key pair authentication a private key object is also needed to store the user's Private Key.
  
  For more details about each step, refer to the official [Snowflake documentation](https://docs.snowflake.com/en/user-guide/key-pair-auth)

* Below is an example of a microflow that gets a Connection details object associate with the account if it exist or creates one along with the private key object if it doesn’t.
  
  {{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/connection-details-microflow.png" >}}
  
  {{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/connection-details-account.png" >}}

* And a example of a microflow to redirect to the ConnectionDetails_NewEdit_Step1 page

{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/connection-details-newedit.png" >}}

### 2.4 Connection Details at End User Level

* The Connection Details object should be filled in at the end-user level.
* To fill in the connection details (such as Snowflake credentials), test the connection and/or generate a JWT Token (if applicable), the ConnectionDetails_NewEdit_Step1 and Step2 pages can be used.
* Read the documentation about the Snowflake REST SQL Connector to find out more about how to set up the Key-Pair authentication.

## 3 Execute Statement Action

To interact with Snowflake, SQL queries need to be executed. To execute the SQL queries the "Execute Statement" action is needed  

### 3.1 Create a microflow or Nanoflow that performs the following steps:

* In the microflow create an object "Statement" this object contains the necessary fields needed for a statement
{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/create-statement-object.png" >}}
* SQL Statement: this is the field that will contains your SQL Query for example, to select the item and region data from "Example_RBAC" table write the following in the SQL statement
```SQL
SELECT ITEM,
       Region,  
       FROM EXAMPLE_RBAC;
``` 
** Based on what is needed the Timeout,  Database , Schema, Warehouse, Role will need to be filled for example for the above statement if the Table "Example_RBAC"
is in "Example_RBAC" Database, the "RBAC_Schema" and the "COMPUTE_WH" then the information will need to be added as below
{pic.4}

### 3.2 Snowflake Role (Role) attribute 

* In your statement entity, you can specify the Role (Snowflake user role) to be used for executing the query.
* If the role is left empty, the statement will be executed with the user’s default user role in Snowflake. 
* Remember that the user will only have access to the warehouse, schema, database, and data granted to their assigned user role.

### 3.3 Retrieve connection details

Next in line action in the execute statement microflow should be the retrieve "Connection Details" action. 
To apply the RBAC the connection details should be the ones associate with the current user account so that the user will be able to access the data that is allowed in Snowflake
To retrieve the "Connection Details" associated with the "current user" use the XPath: [SnowflakeRESTSQL.ConnectionDetails_Account = $currentUser]

{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/retrieve-details.png" >}}

### 3.4 Execute Statement

* Execute the statement using the execute statement action provided by the [Rest SQL Connector (https://docs.mendix.com/appstore/connectors/snowflake/snowflake-rest-sql/)].
* At Statement field add the Statement\s action outcome
* At the Connection Details add the Connection details' action outcome

{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/execute-statement.png" >}}

### 3.5 Map the HttpResponse List 

The Http Response can be mapped if needed to Mx Objects 
* By an [import mapping (https://docs.mendix.com/refguide/import-mappings/)]
* With [‘Transform Responses to MxObjects’ (https://docs.mendix.com/appstore/connectors/snowflake/snowflake-rest-sql/#transform-response-to-mx-object)]
The Transform Responses action creates a single table with the HTTP Response data. To do that a Domain model Entity is needed with the attributes named exactly as the returned response attributes, for example for the Query of the 3.1 the entity should look as follows

{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/mapping-entity.png" >}}

{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/execute-statement-microflow.png" >}}

* The results then can be visualized in a page

{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/sample-results.png" >}}

## 4 Snowflake Test (optional)

The follow up is an example of how to set up Role-Based Access Control (RBAC) on Snowflake for two test users and view the same data in a Mendix app for the equivalent test users following the steps above.

### 4.1 Prerequisites

* A user in Snowflake platform with account administrator privileges
* A public key from ### 2.2 

### 4.2 Snowflake  

For further details please check the Snowflake [documentation](https://docs.snowflake.com/sql-reference)

* Create 2 roles in Snowflake Role Test A and Role Test B

    ```SQL
    CREATE ROLE ROLETESTA;
    CREATE ROLE ROLETESTB;
    ```
* Create Two users Test User 1 and Test User 2

    ```SQL
    CREATE OR REPLACE USER TestUser1
    PASSWORD = 'TestPass1'
    LOGIN_NAME = 'TestUser1'
    FIRST_NAME = 'TestUser'
    LAST_NAME = 'Testuser'
    EMAIL = 'TestUser1@email.com'
    MUST_CHANGE_PASSWORD = false //only for testing 
    DEFAULT_WAREHOUSE = COMPUTE_WH;

    CREATE OR REPLACE USER TestUser2
    PASSWORD = 'TestPass2'
    LOGIN_NAME = 'TestUser2'
    FIRST_NAME = 'TestUser2'
    LAST_NAME = 'Testuser2'
    EMAIL = 'TestUser2@email.com'
    MUST_CHANGE_PASSWORD = false //only for testing 
    DEFAULT_WAREHOUSE = COMPUTE_WH;
    ```

* Assign one role to each user
  
    ```SQL
    GRANT ROLE ROLETESTA TO USER Testuser1; 
    GRANT ROLE ROLETESTB TO USER Testuser2;
    ```
* Make each user role default for each user

    ```SQL 
    ALTER USER TESTUSER1 SET DEFAULT_ROLE = ROLETESTA;
    ALTER USER TESTUSER2 SET DEFAULT_ROLE = ROLETESTB;
    ```

* Create an example  database

    Use the following statement to create  a test database named Example_RBAC , schema named RBAC_Schema a table named Example RBAC and add data to the table

    ```SQL
    Create Database Example_RBAC;
    CREATE SCHEMA Example_RBAC.RBAC_schema;
    USE SCHEMA Example_RBAC.RBAC_schema;
    CREATE OR REPLACE TABLE Example_RBAC (
      store_id NUMBER, item VARCHAR, region VARCHAR);
    use warehouse COMPUTE_WH;
    INSERT INTO Example_RBAC VALUES
      (1, 'jacket', 'EU'),
      (1, 'PC', 'EU'),
      (1, 'jacket', 'EU'),
      (1, 'XBOX', 'EU'),
      (1, 'jacket', 'EU'),
      (1, 'XBOx', 'EU'),
      (1, 'jacket', 'US'),
      (1, 'jacket', 'US'),
      (1, 'jacket', 'US'),
      (1, 'jacket', 'US'),
      (1, 'PC', 'US'),
      (1, 'jacket', 'US'),
      (1, 'jacket', 'US'),
      (1, 'jacket', 'ASIA'),
      (2, 'umbrella', 'EU'),
      (2, 'umbrella','EU'),
      (2, 'umbrella', 'EU'),
      (2, 'umbrella', 'EU'),
      (2, 'umbrella', 'EU'),
      (2, 'umbrella', 'EU'),
      (2, 'umbrella','EU'),
      (2, 'umbrella', 'EU'),
      (2, 'umbrella', 'US'),
      (2, 'umbrella', 'US'),
      (2, 'umbrella', 'US'),
      (2, 'umbrella', 'US'),
      (2, 'umbrella', 'ASIA'),
      (2, 'umbrella', 'ASIA');
    ```

* Grant Usage to the Warehouse, database, Schema and table for the user roles RoleTest A and Role Test B

    ```SQL
    GRANT USAGE ON WAREHOUSE COMPUTE_WH to role ROLETESTA;
    GRANT USAGE ON WAREHOUSE COMPUTE_WH to role ROLETESTB;
    GRANT USAGE ON DATABASE EXAMPLE_RBAC to role ROLETESTA;
    GRANT USAGE ON DATABASE EXAMPLE_RBAC to role ROLETESTB;
    GRANT USAGE ON SCHEMA EXAMPLE_RBAC.RBAC_SCHEMA to role ROLETESTA;
    GRANT USAGE ON SCHEMA EXAMPLE_RBAC.RBAC_SCHEMA to role ROLETESTB;
    GRANT SELECT ON TABLE EXAMPLE_RBAC.RBAC_SCHEMA.EXAMPLE_RBAC to role ROLETESTA;
    GRANT SELECT ON table EXAMPLE_RBAC.RBAC_SCHEMA.EXAMPLE_RBAC to role ROLETESTB;
    ```

* Create a Row base access policy for that will limit the use of the data for RoleTestA only to EU region and 
for the RoleTestB only to US

    ```SQL
    CREATE OR REPLACE ROW ACCESS POLICY RegionRole
    AS (region varchar) RETURNS BOOLEAN -> case 
    when region = 'EU' and 'ROLETESTA' = current_role()  then true 
    when region = 'US' and 'ROLETESTB' = current_role()  then true else false end
    ;
    ```

* Assign Ownership of the role base policy to the accountadmin role, grant the apply action of the policy to the roles

    ```SQL
    GRANT OWNERSHIP ON ROW ACCESS POLICY RegionRole TO AccountAdmin;

    GRANT APPLY ON ROW ACCESS POLICY RegionRole TO ROLE ROLETESTA;
    GRANT APPLY ON ROW ACCESS POLICY RegionRole TO ROLE ROLETESTB;
    ```
  
* Assign the access policy to the example table

    ```SQL
    ALTER TABLE EXAMPLE_RBAC ADD ROW ACCESS POLICY RegionRole ON (Region);
    ```
 
* Login with the Test user 1 
* Execute the statement

    ```SQL
    SELECT ITEM,
        Region, 
    FROM EXAMPLE_RBAC;
    ```

* Check the result

{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/test-user1-snowflake.png" >}}

* Logout and login with the TestUser 2 and execute the same statement

{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/test-user1-mendix.png" >}}

* Compare the Results
  
* Follow the instructions 2-5 so you can create two test users in the Mendix app with Connection details and also the Execute Statement microflow.

* Create and assign the public key and the private key to the equivalent users in Snowflake   

* Log in with each user separately.
*  Compare results with each user and also with the results from snowflake

{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/test-user2-snowflake.png" >}}

{{< figure src="static/attachments/appstore/modules/snowflake-rest-sql/test-user2-mendix.png" >}}