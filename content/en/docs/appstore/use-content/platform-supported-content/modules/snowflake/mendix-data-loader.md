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
    3. Click **Save**.
    4. Grant the application **CREATE DATABASE** and **EXECUTE TASK** privileges. This step is necessary for the application to create the staging database for data ingestion and to execute tasks.

5. To view the status of your data source, check the **Details**.
6. To view the configuration status, click the **Authentication Configuration** tab.
7. To set up authentication, click **Edit**, and then provide the required information based on the selected authentication type:

    [//]: # (<!-- markdownlint-disable no-space-in-emphasis -->)

    * For basic authentication, enter the following information:
        * **Username** – A username for basic authentication into the OData resource in your Mendix application
        * **Password** – A password for basic authentication into the OData resource in your Mendix application
    * For OAuth authentication, enter the following information:
        * **Client ID** – A client ID from your OAuth provider
        * **Client Secret** – A secret associated with the client from your OAuth provider
        * **Token Endpoint** – An endpoint at which the token will be validated by your OAuth provider
        * **Allowed Scopes** – Allowed and custom scopes configured on the client from your OAuth provider
        * **Access Token Validity** – Duration (in seconds) for which the access token is valid

    [//]: # (<!-- markdownlint-enable no-space-in-emphasis -->)

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

## Using Unique Schemas to Avoid Ingestion Job Conflicts

As a best practice, when setting up ingestion jobs, use unique schemas for each job to avoid potential conflicts. Using distinct schemas allows each ingestion job to manage its data separately, which can prevent issues with data overlap, naming conflicts, and accidental overwrites. This is particularly important when multiple ingestion jobs are running concurrently, as they may otherwise attempt to access or modify the same tables.

## Viewing Ingestion Jobs for a Data Source

To view all ingestion jobs associated with a specific data source in Snowflake, you can use an SQL `SELECT` statement. This query retrieves records from the `core.ingestion_job` table for the specified `DATASOURCE_ID`, and orders them by the job creation date in descending order, so the most recent ingestions appear first.

### Example SQL Query

```sql
SELECT * FROM core.ingestion_job WHERE DATASOURCE_ID = '1234abcd' ORDER BY CREATED_DATE_TIME DESC;
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

## Current Limitations

* Exposing an association in an OData service as a link is not supported yet by the Mendix Data Loader. Instead, choose the **As an associated object id** option in your OData settings. This option stores the associated object ID in the table, but not explicitly as foreign key.
* The Mendix Data Loader always ingests all data exposed by the OData published by your Mendix application. If you do not want to use everything within the exposed entities, you must apply further filtering on the Snowflake side. Enabling filtering on the Mendix side is currently on the roadmap.
* The Mendix Data Loader does not support custom domains for Mendix applications when using pagination in published OData services. This is because the OData response always returns the base domain's root URL, regardless of the custom domain being used. As a result, the call for the next page fails because the returned root URL does not have a corresponding network rule in Snowflake.
* Loading deltas is not yet supported on the OData side.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro. You can also download a copy of the full documentation available for your app.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}

## Troubleshooting

If you encounter any issues while using the Mendix Data Loader, use the following troubleshooting tips to help you solve them.

For any additional troubleshooting, contact the [development team](mailto:sa_dev_team@mendix.com).

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

## Contact Information

For support or queries regarding the Mendix Data Loader, email the development team at [SA_Dev_Team@mendix.com](mailto:sa_dev_team@mendix.com).
