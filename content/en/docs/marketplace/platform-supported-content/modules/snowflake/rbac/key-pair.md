---
title: "Use Key-Pair Authentication for Role-Based Access Control"
url: /appstore/modules/snowflake/key-pair-auth/
description: "Describes how to use key-pair authentication to enable role-based access control in a Mendix application." 
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

You can use key-pair authentication to enable your Mendix app to use role-based access control (RBAC). Key pair authentication is a method of authenticating with a system using a pair of keys that comply with specific security requirements. The following diagram is a graphic representation of how key-pair authentication can work between Snowflake and a Mendix application. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/RBACKeyPairExplanations.png" >}}

In the context of integration between Snowflake and Mendix, RBAC helps ensure that the data being exposed to a certain user or role within Snowflake is the same as the data presented to the same user in a Mendix app.

### Prerequisites

To enable key-pair RBAC for your Mendix app, you must first install and configure the [Snowflake REST SQL Connector](/appstore/connectors/snowflake/snowflake-rest-sql/).

## Configuring the Connection Details {#connection-details}

To enable role-based access control for your Snowflake-integrated Mendix app, perform the following steps:

1. Ensure your Mendix app has the necessary domain model and entities, as shown in the following figure:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/domain-model.png" >}}

2. Decide on the authentication method. For Snowflake, key-pair authentication is recommended.
3. Configure the necessary keys and credentials in your Snowflake account and assign the public key to a Snowflake user. For more information, see [Key-pair authentication and key-pair rotation](https://docs.snowflake.com/en/user-guide/key-pair-auth) in the Snowflake documentation.
4. In your Mendix app, create a new **Account Overview** page, were you can add the connection details to the users. A new **Connection Details** record is needed for every user that has access to data in Snowflake. The Connection Details object should be filled in at the end-user level.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/connection-details-account.png" >}}

5. Optional: If using the [key-pair authentication method](https://docs.snowflake.com/en/user-guide/key-pair-auth), create a **Private Key** object to store each user's private key.
6. Create a microflow that gets a **Connection Details** object associated with the account if it exists, or otherwise creates one along with a private key, as shown in the following figure:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/connection-details-microflow.png" >}}

7. Create a microflow to redirect the user to a page where they can create or edit their connection details, as shown in the following figure:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/connection-details-newedit.png" >}}

## Configuring the SQL Queries {#queries}

To interact with Snowflake, you must configure your Mendix app to execute SQL queries by using the **Execute Statement** microflow action. 

1. In your Mendix app, create a microflow that contains the **Statement** object. This object contains the fields required for a statement.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/create-statement-object.png" >}}

2. In the **SQL Statement** field, enter your SQL query. For example, to select the item and region data from the `Example_RBAC` table in Snowflake, enter the following query:

    ```SQL
    SELECT ITEM,
           Region,  
           FROM EXAMPLE_RBAC;
    ```

3. Fill out the **Timeout**, **Database**, **Schema**, and **Warehouse** fields as required.
4. In the **Role** field, specify the Snowflake user role to be used for executing the query, or leave the field blank if you want the statement to be executed with the user's default role in Snowflake. Keep in mind that the user only has access to the warehouse, schema, database, and data granted to their assigned user role.
5. Add a **Retrieve Objects** action after the **Statement** object.
6. In the **XPath constraint** field, enter the following XPath: `[SnowflakeRESTSQL.ConnectionDetails_Account = $currentUser]`

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/retrieve-details.png" >}}

    This ensures that the connection details are the ones associated with the current user account, so that the user can only access the data to which they have access in Snowflake.

7. Add an **Execute Statement** action provided by the [Rest SQL Connector](/appstore/connectors/snowflake/snowflake-rest-sql/) after the **Retrieve Objects** action.
8. Configure the **Statement** and **ConnectionDetails** parameters as shown in the following figure:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/execute-statement.png" >}}

9. If required, map the HTTP Response to an MxObject by using an [import mapping](/refguide/import-mappings/), or by adding a [Transform Responses to MxObjects](/appstore/connectors/snowflake/snowflake-rest-sql/#transform-response-to-mx-object) microflow action, as shown in the following figure:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/execute-statement-microflow.png" >}}

    The **Transform Responses** action creates a single table with the HTTP Response data. To do that, it requires a domain model entity with the attributes names being exactly as the same the returned response attributes. For example, for the sample query used in step 2, you should configure the following domain model entity:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/mapping-entity.png" >}}

10. Create a page in your app to display the results of the query.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/sample-results.png" >}}

## Sample Test Scenario

This section provides an example of how to set up RBAC in Snowflake for two test users and view the same data for the same users in a Mendix app.

1. Log in to Snowflake as a user account administrator privileges.
2. Create the following roles in Snowflake. For more information, refer to the [Snowflake documentation](https://docs.snowflake.com/sql-reference).

    ```SQL
    CREATE ROLE ROLETESTA;
    CREATE ROLE ROLETESTB;
    ```

3. Create the following users in Snowflake:

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

4. Assign one role to each user:
  
    ```SQL
    GRANT ROLE ROLETESTA TO USER Testuser1; 
    GRANT ROLE ROLETESTB TO USER Testuser2;
    ```

5. Make each user role default for the user:

    ```SQL 
    ALTER USER TESTUSER1 SET DEFAULT_ROLE = ROLETESTA;
    ALTER USER TESTUSER2 SET DEFAULT_ROLE = ROLETESTB;
    ```

6. Create an example database. The following statement creates a test database named `Example_RBAC`, a schema named `RBAC_Schema`, and a table named `Example RBAC`. It also adds data to the table.

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

7. Grant `Usage` to the `Warehouse`, `Database`, `Schema` and `Table` for the user roles that you created.

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

8. Create a `Row` base access policy that will limit the use of the data for `RoleTestA` to the EU region, and for `RoleTestB` only to the US.

    ```SQL
    CREATE OR REPLACE ROW ACCESS POLICY RegionRole
    AS (region varchar) RETURNS BOOLEAN -> case 
    when region = 'EU' and 'ROLETESTA' = current_role()  then true 
    when region = 'US' and 'ROLETESTB' = current_role()  then true else false end
    ;
    ```

9. Assign `Ownership` of the role base policy to the `AccountAdmin` role, and grant the `Apply` action of the policy to the roles.

    ```SQL
    GRANT OWNERSHIP ON ROW ACCESS POLICY RegionRole TO AccountAdmin;

    GRANT APPLY ON ROW ACCESS POLICY RegionRole TO ROLE ROLETESTA;
    GRANT APPLY ON ROW ACCESS POLICY RegionRole TO ROLE ROLETESTB;
    ```
  
10. Assign the access policy to the example table.

    ```SQL
    ALTER TABLE EXAMPLE_RBAC ADD ROW ACCESS POLICY RegionRole ON (Region);
    ```
 
11. Log in to Snowflake with the **TestUser1** account. 
12. Execute the following statement and view the results:

    ```SQL
    SELECT ITEM,
        Region, 
    FROM EXAMPLE_RBAC;
    ```

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/test-user1-snowflake.png" >}}

13. Log in to Snowflake with the **TestUser2** account and execute the same statement.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/test-user2-snowflake.png" >}}

14. In your Mendix app, configure the [connection details for your test users](#connection-details), as well as the [Execute Statement microflow](#queries).
15. Create and assign the public key and the private key to the equivalent users in Snowflake.
16. Log in to your Mendix app as **TestUser1**.
17. Verify that you can view the same data as in Snowflake.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/test-user1-mendix.png" >}}

18. Log in to your Mendix app as **TestUser2**.
19. Verify that you can view the same data as in Snowflake.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/test-user2-mendix.png" >}}
