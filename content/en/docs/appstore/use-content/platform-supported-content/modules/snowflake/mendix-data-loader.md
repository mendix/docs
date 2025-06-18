---
title: "Mendix Data Loader"
url: /appstore/modules/snowflake/mendix-data-loader/
description: "Describes the configuration and usage of the Mendix Data Loader application from the Snowflake Marketplace."
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Mendix Data Loader](https://app.snowflake.com/marketplace/listing/GZTDZHHIE0/mendix-mendix-data-loader) allows for seamless data ingestion from operational Mendix applications by using an exposed OData service into Snowflake, enhancing an organization's business intelligence and reporting capabilities.

### Typical Use Cases

The Mendix Data Loader supports a range of data ingestion tasks, enabling organizations to leverage their operational data within Snowflake for analytical purposes. The key functionalities include ingesting data dynamically from Mendix applications (only needing an OData endpoint and credentials) to Snowflake. The ingested data is stored in the target schema of the target database specified by the user and created by the Mendix Data Loader application. This target schema in the target database serves as a staging area. The user should copy the tables of the target schema into a database and schema where they want to store the ingested data. This should be done after every ingestion.

### Prerequisites {#prerequisites}

To use the Mendix Data Loader, you must have the following:

* A Mendix application with a [published OData service](/refguide/published-odata-services/) that includes exposed entities.
* A Snowflake account with [Anaconda Packages enabled by ORGADMIN](https://docs.snowflake.com/en/developer-guide/udf/python/udf-python-packages.html#using-third-party-packages-from-anaconda). If you do not have a Snowflake account, you can register for a [free trial account](https://signup.snowflake.com).
* A Snowflake environment in which the account has the necessary permissions to create and maintain tables.

### Licensing and Cost

The Mendix Data Loader is covered under the Mendix EULA. While the loader itself does not incur additional costs, operating within Snowflake may incur a usage cost. For more information, refer to the [Snowflake pricing documentation](https://www.snowflake.com/en/data-cloud/pricing-options/).

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow instructions in [Install an app from a listing](https://other-docs.snowflake.com/en/native-apps/consumer-installing) to add the component to your Snowflake environment.

## Configuration

Once the Mendix Data Loader is deployed, follow these steps to configure and use it:

1. View the README file, which the application displays upon starting.
2. Click the **MENDIX_DATA_LOADER** tab in the header to open the application interface.
3. Use the **Data Source overview** page to manage your data sources.
4. Click **Create** to create a new data source.
    1. Enter a **Name** for your data source within the Data Loader.
    2. Enter an **API endpoint** – that is, the base endpoint for the OData resource in your Mendix application, for example, `https://yourmendixapp.mendixcloud.com/odata/snowflakedata/v1/`.
    3. Use the **Use Delta Ingestion** check box to specify if you want to ingest all exposed data with every ingestion, or if you want to ingest only data that was newly created or changed since the last ingestion for this data source.
    4. Click **Save**.
    5. Grant the application **CREATE DATABASE** and **EXECUTE TASK** privileges. This step is necessary for the application to create the staging database for data ingestion and to execute tasks.

5. To view the status of your data source, check the **Details**.
6. To view the configuration status, click the **Authentication Configuration** tab.
7. To set up authentication, click **Edit**, and then provide the required information based on the selected authentication type:

    * For basic authentication, enter the following information:
        * **Username** – A username for basic authentication into the OData resource in your Mendix application
        * **Password** – A password for basic authentication into the OData resource in your Mendix application
    * For OAuth authentication, enter the following information:
        * **Client ID** – A client ID from your OAuth provider
        * **Client Secret** – A secret associated with the client from your OAuth provider
        * **Token Endpoint** – An endpoint at which the token will be validated by your OAuth provider
        * **Allowed Scopes** – Allowed and custom scopes configured on the client from your OAuth provider
        * **Access Token Validity** – Duration (in seconds) for which the access token is valid

8. Click **Generate Script**.
9. Click **Back** to return to the **Details** page.
10. Click the **Ingestion Configuration** tab to set up your ingestion destination table.
11. Click **Create** to start setting up the Ingestion Configuration.
    * **Target Database** – Name of the database for data ingestion
    * **Target Schema** – Target schema where all data will be ingested
12. Click **Save**.
13. Click the **Data Ingestion** tab, where you can start your data ingestion or set up a schedule.
14. Click **Ingest Now** to start a data ingestion.
15. Click **New Task** to create a CRON job for scheduled data ingestions.
    * To schedule the data ingestion, specify the following parameters:
        * **Ingestion Task Schedule** – Choose from custom CRON expression, every day at 00:00 AM UTC, every Monday at 00:00 AM UTC, or every first day of the month at 00:00 AM UTC.
        * **Custom CRON Expression** – Use this field only when specifying a custom CRON expression.
        * **Timeout** – Optional setting to specify when a timeout exception should occur.
        * **Number of Retry Attempts** – Number of retries for failed ingestion jobs.
        * **Suspend Task After Failures** – Number of consecutive failures allowed before suspending the task.

16. Click **Schedule Ingestion Task**.
17. To view the created task, go to the **Task Management** tab, where you can monitor performed ingestion jobs, suspend or enable the task, or drop it. Currently, only one ingestion task can exist at a time.
18. Grant the application **USAGE** privilege on a warehouse to enable scheduling of data ingestions. All data ingestions use the same warehouse.
    You are now redirected to the **Details** page, where you can see the status of the last three ingestions.
19. To view the ingested data, access the schema specified in the target database within your Snowflake environment.

The ingested data is stored in the target schema of the specified target database, created by the Mendix Data Loader application. This target schema serves as a staging area. After each ingestion, copy the tables from the target schema to the desired database and schema that you want to use to store the ingested data.

## Exposing Associations in OData

Depending on how you expose the associations in your published OData, you can expect slightly different structure of the ingested data in your staging area in Snowflake. Navigate to your OData resource in Studio Pro and select one of the following options:

* **As a Link**
* **As an Associated Object ID**

### As a Link

When exposing associations as a link, we recommend that you expose the associations on the owners side of the association. This prevents the creation of duplicate junction tables when ingesting the data. When choosing this option, all associations are ingested into junction tables where the name of the table has the format *MX_OwnerObjectName_TargetObjectName_ExposedAssociationName*. The column names are the names of the attributes that are exposed in the OData as the object key. Make sure that the attribute you choose as object key has unique values for all the different objects.

### As an Associated Object ID

When exposing associations as an object ID, no junction tables are created on ingestion. Instead, a column is added on the target table with the ID of the associated object. This setting does not support many-to-many associations. 

## Using Delta Ingestion Setting

If you do not want to ingest all exposed data from the published OData of your Mendix application, you can enable the **Use Delta Ingestion** setting on your data source when creating or editing the data source in the Mendix Data Loader.

The first ingestion performed for the data source with this setting enabled ingests all data exposed by your OData endpoint. Subsequent ingestions ingest only the data with a **changedDate** later than the date of the last ingestion.

### Enabling ChangedDate for Delta Ingestion

To use delta ingestion, you must expose a Date and Time attribute with the name **changedDate** in your OData resource. This attribute is used to track changes and must follow the `yyyy-MM-dd'T'HH:mm:ss.SSS` format.

{{% alert color="info" %}}This format should be the default for date attributes in Mendix when exposed through OData.{{% /alert %}}

To provide this date choose one of the following options:

* Use the **changedDate** system member:

    1. Navigate to the entities in your domain model.
    2. In their properties, select the **Store changedDate** check box.
        This option automatically tracks when each object is modified.

* Use any custom date attribute - Use any Date and Time attribute from your domain model, with any name you choose. Make sure to expose it in OData under the name **changedDate**.

In both cases, make sure the **changedDate** attribute is exposed in your OData resource so it can be used during delta ingestion.

### Handling Deleted Objects

Deleted objects are not automatically handled on the Snowflake side. To properly manage deletions, we recommend adding a boolean field to your exposed entities, for example, **IsSoftDeleted**. You can then set the field to **true** when an object needs to be deleted.

After these objects are ingested into the staging area in Snowflake, you can process them accordingly during further data processing. After ingesting a soft-deleted object, you can delete it from the database of your Mendix application. 

## Using Unique Schemas to Avoid Ingestion Job Conflicts

As a best practice, when setting up ingestion jobs, use unique schemas for each job to avoid potential conflicts. Using distinct schemas allows each ingestion job to manage its data separately, which can prevent issues with data overlap, naming conflicts, and accidental overwrites. This is particularly important when multiple ingestion jobs are running concurrently, as they may otherwise attempt to access or modify the same tables.

## Viewing Ingestion Jobs for a Data Source

To view all ingestion jobs associated with a specific data source in Snowflake, you can use an SQL `SELECT` statement. This query retrieves records from the `core.ingestion_job` table for the specified `DATASOURCE_ID`, and orders them by the job creation date in descending order, so the most recent ingestions appear first.

### Example SQL Query

```sql
SELECT * FROM core.ingestion_job WHERE DATASOURCE_ID = '1234abcd' ORDER BY CREATED_DATE_TIME DESC;
```

## Programmatically Triggering an Ingestion Job From a Mendix App {#trigering-jobs}

Programmatically triggering an ingestion job can meet data ingestion requirements where a scheduled task may not, for example in the following use cases:

* Waiting for a last submission to be submitted to a Mendix app before data ingestion occurs.
* Starting data ingestion when the load on the Mendix app is the lowest.

### Prerequisites

* A fully configured data source in the Mendix Data Loader
* A Mendix app equipped with the Snowflake REST SQL connector
* An authenticated user that is allowed to trigger stored procedures

### Triggering the Ingestion

To trigger an ingestion job programmatically, use the `ExecuteStatement` operation available in the [Snowflake REST SQL connector](/appstore/connectors/snowflake/snowflake-rest-sql/).

1. Obtain the Snowflake data source ID by performing the following steps:

    1. In the Snowflake environment, open the Mendix Data Loader by clicking **Data Products** > **Apps** > **Mendix Data Loader**.
    2. Open the application by clicking the `MENDIX_DATA_LOADER` tab.
    3. Click **View** by the configured data source.
    4. Copy the value for the `ID` key.

2. In the Snowflake REST SQL connector, use the `ExecuteStatement` operation to execute the following statement:

```sql
CALL {NAME_OF_THE_MENDIX_DATA_LOADER}.MX_FUNCTIONS.RUN_INGESTION_JOB('{DATASOURCE_ID}','');
```

where you must specify the following variables:

* `{NAME_OF_THE_MENDIX_DATA_LOADER}` - The default name for the Mendix Data Loader is `MENDIX_DATA_LOADER`
* `{DATASOURCE_ID}` - Required; the data source ID that you obtained in step 1

For example, for a data source with the ID *40FJYP9D*, the resulting statement would be:

```sql
CALL MENDIX_DATA_LOADER.MX_FUNCTIONS.RUN_INGESTION_JOB('40FJYP9D','');
```

## Setting Up Mail Notifications on Failed Task Execution

Snowflake provides a built-in functionality for alerts and notifications. This `ALERT` object lets you specify a conditional expression to check if tasks have failed and send notifications if required. 

To use this functionality, perform the following steps:

1. Create a [notifcation integration email](https://docs.snowflake.com/en/sql-reference/sql/create-notification-integration-email).
2. Create an [ALERT](https://docs.snowflake.com/en/sql-reference/commands-alert) using the notification integration and the ["SYSTEM$SEND_EMAIL"](https://docs.snowflake.com/en/sql-reference/stored-procedures/system_send_email) system function.

For more information about using external integrations for sending all types of notifications, see [Introduction to Snowflake's data pipeline alerts & notifications](https://medium.com/snowflake/introduction-to-snowflakes-data-pipeline-alerts-notifications-9beac8d127cc).

### Sample SQL to Set up a Mail Notification

The following is a sample SQL template which you can customize with your data and execute in a worksheet:

```sql
CREATE DATABASE IF NOT EXISTS <db name>;

CREATE SCHEMA IF NOT <schema name>;

USE SCHEMA <schema name>;

CREATE OR REPLACE NOTIFICATION INTEGRATION <NOTIFICATION INTEGRATION name>
  TYPE = EMAIL
  ENABLED = TRUE
  ALLOWED_RECIPIENTS = ('<mail1@company.com>', '<mail2@company.com>', ...);

CREATE OR REPLACE ALERT <ALERT name>
  WAREHOUSE = <warehouse name>
  SCHEDULE = '<integer> MINUTE' -- Or use CRON e.g. 15 * * * * UTC
  IF (
    EXISTS (
      SELECT 1
      FROM SNOWFLAKE.ACCOUNT_USAGE.TASK_HISTORY
      WHERE (STATE = 'FAILED' OR STATE = 'FAILED_AND_AUTO_SUSPENDED') AND NAME = '<task name>'
        AND SCHEDULED_TIME >= CONVERT_TIMEZONE('UTC',DATEADD(MINUTE, -<integer>, CURRENT_TIMESTAMP()))
    )
  )
  THEN CALL SYSTEM$SEND_EMAIL(
    '<NOTIFICATION INTEGRATION name>',
    ('<mail1@company.com>', '<mail5@company.com>', ...) --Subset of ALLOWED_RECIPIENTS in NOTIFICATION INTEGRATION. 
    '<Mail subject>',
    '<Mail Body>.'
  );

ALTER ALERT <ALERT name> RESUME; -- The ALERT has STATE Suspended when created and is started by this statement

SHOW ALERTS;
```

## Verifying the Access Token

When using OAuth authentication with the Mendix Data Loader, it is crucial to verify the access token received by your Mendix application. This verification process ensures the token's authenticity and integrity, protecting your application from unauthorized access attempts.

The [OIDC SSO module](https://marketplace.mendix.com/link/component/120371) in the Mendix Marketplace can be used to authenticate the access token. For more information, refer to the [OIDC SSO documentation](/appstore/modules/oidc/#client-credential-grant).

### Token Verification Process

To verify an access token, follow these high-level steps:

1. Decode the access token using the JSON Web Key Set (JWKS) from your OAuth provider.
2. Extract the claims from the token's payload.
3. Verify the payload by checking specific properties.

### Verifying the Payload

When verifying the payload, typically you should check the following properties:

* `iss` (Issuer): Ensure it matches the expected OAuth provider's URL.
* `aud` (Audience): Confirm it corresponds to your application's client ID.
* `exp` (Expiration Time): Verify the token hasn't expired.
* `iat` (Issued At): Check if the token was issued at a reasonable time.

Additionally, you may need to verify custom claims specific to your OAuth provider or application requirements.

{{% alert color="info" %}} The exact properties and verification process may vary depending on your OAuth provider and security requirements. Always refer to your provider's documentation and your organization's security policies when implementing token verification. {{% /alert %}}

## Setting up the App Client in your OAuth Provider

When setting up the OAuth provider to be able to use it with the Mendix Data Loader, you must specify a redirect URL in order for the authorization server to redirect the user back to the application. The redirect URL from your Snowflake environment has the following format:

```
https://apps-api.c1.<cloud_region_id>.<cloud>.app.snowflake.com/oauth/complete-secret
```

The *cloud_region_id* and the *cloud* in the URL depend on the configurations of your Snowflake account. See [Supported Cloud Regions](https://docs.snowflake.com/en/user-guide/intro-regions) and [Supported Cloud Platforms](https://docs.snowflake.com/en/user-guide/intro-cloud-platforms) for more information on what these values are according to the region and cloud platform your account is in.

## Using Mendix Data Loader with a Private Link

If you do not want the connection between the Mendix Data Loader and your Mendix apps to run through the public internet (for example, due to regulations or internal policies), you can configure a private link functionality for your cloud. This section outlines a sample high-level process that your company can implement to enable private links.

{{% alert color="info" %}}Creating private endpoints is not available on [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).

The process described in this section applies to setting up a private link within the same cloud provider. Private links between different cloud providers, for example, Azure and AWS, require special measures such as an S2S VPN to link the two VNets.{{% /alert %}}

To implement the connection between Mendix Data Loader and your app, perform the following steps:

1. Obtain the necessary information from your Mendix Platform owner (for example, your system administrator, or a partner who implemented the Platform for you).

    You must know in which cluster your app is running, so you can set up a private link tunnel to the location.

2. Configure the private link as described in the following documents:

    * For AWS - [Get started with AWS PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/getting-started.html) and [Manage private connectivity endpoints: AWS](https://docs.snowflake.com/en/user-guide/private-manage-endpoints-aws)
    * For Azure - [Quickstart: Create a Private Link service by using the Azure portal](https://learn.microsoft.com/en-us/azure/private-link/create-private-link-service-portal) and [Manage private connectivity endpoints: Azure](https://docs.snowflake.com/en/user-guide/private-manage-endpoints-azure)

## Current Limitations

* The Mendix Data Loader does not support custom domains for Mendix applications when using pagination in published OData services. This is because the OData response always returns the base domain's root URL, regardless of the custom domain being used. As a result, the call for the next page fails because the returned root URL does not have a corresponding network rule in Snowflake.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro. You can also download a copy of the full documentation available for your app.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}

## Troubleshooting

If you encounter any issues while using the Mendix Data Loader, use the following troubleshooting tips to help you solve them.

For any additional troubleshooting, contact the [development team](mailto:sa_dev_team@mendix.com).

### Ingestion Fails at RETRIEVING_METADATA

When ingesting data, the Mendix Data Loader displays an error similar to the following: `connection.ConnectionValidationException: Failed to validate connection to https://nodename.mendixcloud.com/odata/TableName/v1/`.

#### Cause

The authentication configuration may be incorrect, or the endpoint might not be properly set up.

#### Solution

In the Data Loader, go to the **Authentication Configuration** tab. Ensure that the correct **Auth Type** is selected and that the credentials are accurate. If the issue persists, try testing the connection using Postman.

### Error Parsing JSON: Document Is Too Large

When ingesting data, the Mendix Data Loader shows an error similar to the following: `net.snowflake.client.jdbc.SnowflakeSQLException: Error parsing JSON: document is too large, max size 16777216 bytes`.

#### Cause

The amount of data being ingested is so large that the JSON file has become too large to parse.

#### Solution

To solve this issue, configure the exposed OData entities to have pagination. For the best performance, make the pages as large as possible while still ensuring that the JSON does not become too large to parse.

### No Response from my Mendix Application when Pagination is Enabled on Mendix Studio Pro 10.10

In the process of ingesting data, the Mendix application may not return any values if pagination is enabled for the published OData service and if the Mendix Studio Pro version is 10.10.

#### Cause

A bug in the published OData service resource in Mendix Studio Pro 10.10 where the application root url is set incorrectly causes no data to be returned.

#### Solution

This issue is resolved in Mendix Studio Pro version 10.12 and newer. For information about using OData pagination, see [Published OData Entity: Use Paging](/refguide/published-odata-entity/#paging).

### Error Using Delta Ingestion: Could Not Map 'ChangedDate' to Attribute or Association

When ingesting data using the **Use Delta Ingestion** setting, the stacktrace shows the error code 400 with the message `Could not map 'changedDate' to attribute or association.`.

#### Cause 

The **ChangedDate** system member on the exposed entity is not enabled or is not exposed in the OData endpoint.

#### Solution

Enable the **changedDate** system member on the exposed entity and expose it on the published OData resource.

## Contact Information

For support or queries regarding the Mendix Data Loader, email the development team at [SA_Dev_Team@mendix.com](mailto:sa_dev_team@mendix.com).
