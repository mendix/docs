---
title: "Configure the External Database Connector for Snowflake"
linktitle: "External Database Connector"
url: /appstore/modules/snowflake/external-database-connector/
description: "Describes the steps required to use the Mendix External Database connector with Snowflake."
weight: 10
---

## Introduction

The [External Database connector](/appstore/modules/external-database-connector/) allows you to connect to databases and select data to use in your app. You can use it to directly test connections and queries during configuration in Studio Pro (design time). For Mendix apps that use Snowflake as their database, the External Database connector is the recommended integration option for Mendix 10.

This how-to describes the steps required to enable your app to use the External Database connector with Snowflake, and to model several common use cases.

## Configuring the Connection Between Your Mendix App and Snowflake

To configure connect your Mendix application to Snowflake with the External Database connector, follow these steps:

1. [Install the External Database connector](/appstore/modules/external-database-connector/#installation). If you are using Studio Pro 10.12, please make sure to use the latest version 3.0.0 [External Database Connector](https://marketplace.mendix.com/link/component/219862).
2. Run the [Connect to Database wizard](/appstore/modules/external-database-connector/#configuration) and select **Snowflake** as the database type.
3. Provide a name for the database connection document.
4. Provide connection details that can be used to access Snowflake. You can either provide a connection string, or enter connection details. If you enter connection details, a constant with a connection string will be created based on your connection details.
5. If you decide to use the connection details, copy the **Account URL** from the Snowflake console and use it as the **Host parameter** for the **Connection details**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/snowsight-account-url.png" >}}

6. Provide a user name and a password or a private key (also a passphrase if the private key is encrypted).
7. Click **Test Connection** to verify the connection details, and then click **Save**.

{{% alert color="info" %}}
When using the private key for authentication, format the key as a single line by removing any line breaks. The format should start with "-----BEGIN [ENCRYPTED PRIVATE KEY]-----" and end with "-----END [ENCRYPTED PRIVATE KEY]-----". Note that the text [ENCRYPTED PRIVATE KEY] will vary depending on the type of the key file.
{{% /alert %}}

{{% alert color="info" %}}
Mendix supports the PKCS#8 (Public Key Cryptography Standards) format for private keys, both encrypted (with a passphrase) and unencrypted. For more details, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/key-pair-auth). 
{{% /alert %}}

Your Mendix app now connects to Snowflake with the provided connection details. When the connection is successful, you can see your Snowflake schemas and objects in your Mendix app.

You can use the connection constants to point your application to a different Snowflake database if you are deploying in a different environment.

You can now configure the queries that you need to run on your Snowflake database. The following sections of this document provide examples of some common queries, using data from the *Global Weather & Climate Data for BI* demo dataset available in Snowflake. For general information about creating queries, see [External Database Connector: Querying a Database](/appstore/modules/external-database-connector/#query-database) and [External Database Connector: Using Query Response](/appstore/modules/external-database-connector/#use-query-response).

## Configuring a Basic Query

This section provides an example of a query that determines the average minimum, maximum, and average temperature for a given postal code for the next 10 calendar days, based on the climate data in the **CLIMATOLOGY_DAY** view.

To execute and test the query in Studio Pro, follow these steps:

1. In your Mendix app, in the **App Explorer**, find and open the external connection document that you created with the Connect to Database wizard.
2. In the **Name** field, enter a name for your query, for example, *ClimateForecastNext10DaysQuery*.
3. Enter the following **SQL Query**:

    ```sql
    select POSTAL_CODE                                                   as "PostalCode"
        , COUNTRY                                                        as "Country"
        , doy_std                                                        as "DayOfYearClimate"
        , dayofyear(CURRENT_DATE)                                        as "DayOfYearToday"
        , current_date + doy_std - dayofyear(CURRENT_DATE)               as "ClimateDate"
        , round((AVG_OF__DAILY_AVG_TEMPERATURE_AIR_F - 32) * (5 / 9), 1) as "AvgAvgTempCelsius"
        , round((AVG_OF__DAILY_MIN_TEMPERATURE_AIR_F - 32) * (5 / 9), 1) as "AvgMinTempCelsius"
        , round((AVG_OF__DAILY_MAX_TEMPERATURE_AIR_F - 32) * (5 / 9), 1) as "AvgMaxTempCelsius"
    from  CLIMATOLOGY_DAY
    where postal_code = {postal_code} 
    and   ((doy_std + 365) - dayofyear (current_date)) % 365 <=10
    order by doy_std asc
    limit 10
    ```

4. Click **Run Query**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-basic.png" >}}

    {{% alert color="info" %}}As shown in the above example, if your input parameters do no exactly match what the database needs, or if the output of the query does not match what you need in Mendix, you can cast or transform your data in your query. You can also use column aliases to help generate entities with the required names.{{% /alert %}}

5. Verify that the results are correct, and then generate the required entity to collect the data in your Mendix application. For more information, see [External Database Connector: Creating an Entity from the Response](/appstore/modules/external-database-connector/#create-entity).
6. Create a page with a gallery widget to show the results. Above the gallery widget you need form to allow the user to specify a postalcode. For this you need to create an NPE, e.g. name Filter, with one field, postalcode. The gallery widget will get its data from the Microflow in the next step. You can refresh this widget by using a nanoflow to trigger refresh of the entity shown in the Gallery widget.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-gallery-page.png" >}}

7. Create a microflow that will run the query by doing the following steps:
    1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
    2. Enter a name for your microflow, for example, *ACT_RetrieveWeatherData*, and then click **OK**.
    3. Set the Filter NPE as input parameter for your microflow.
    4. In your **Toolbox**, find the **Query External Database** activity and drag it onto the work area of your microflow.
    5. Position the **Query External Database** activity between the start and end event of your microflow.
    6. Double-click the **Query External Database** microflow activity to configure the required parameters.
    7. In the **Database** section, select your Snowflake database.
    8. In the **Query** list, select the query name that you entered in step 2.
    9. In the **Parameters** section, add the following parameter:
        * **Name** - *postal_code*
        * **Type** - **String**
        * **Value** - *$Filter/PostalCode*
    10. In the **Output** section, provide the following values:
        * **Return type** - **List of *{your module name}*.CLIMATOLOGY_FORECAST**
        * **Use return value** - set to **Yes**
        * **List name** - enter *CLIMATOLOGY_DAY*
    11. Click **OK**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-basic-flow.png" >}}

8. Specify the microflow as the datasource for the gallery widget.
9. Run the page, provide a valid postalcode, and validate the result of the page.

## Configuring a Filtered Query

This section provides an example of a filtered query. Although you can filter, sort, and paginate data in your Mendix app by using the [Data Grid 2](/appstore/modules/data-grid-2/) widget, this widget operates mostly client-side, so as a best practice, you may want to pre-filter the data retrieved from Snowflake before using it in a grid. The following example shows how you can specify a filter based on the postal code and country in your SQL query. After running the query, you can then further limit the results with data grid filters, sorting, and pagination.

To execute and test the query in Studio Pro, follow these steps:

1. In your Mendix app, in the **App Explorer**, find and open the external connection document that you created with the Connect to Database wizard.
2. In the **Name** field, enter a name for your query, for example, *QueryHistoryDay*.
3. Enter the following **SQL Query**:

    ```sql
    select *
    from   STANDARD_TILE.HISTORY_DAY
    where  ({filterPostalCode1} IS NULL 
                or (postal_code like '%' ||{filterPostalCode2}|| '%'))
        and ({filterCountry1} IS NULL 
                or (country like '%' ||{filterCountry2}|| '%')) 
    limit 1000
    ```

4. Click **Run Query**.
5. Verify that the results are correct, and then generate the required entity to collect the data in your Mendix application. For more information, see [External Database Connector: Creating an Entity from the Response](/appstore/modules/external-database-connector/#create-entity).
6. [Add a **Data grid 2** widget](/refguide/page/#add-elements) to the page where you want to display the query results.
7. Similar to the previous example, add a dataview with filter fields, and a filter NPE to collect the user's filter values.
8. Double-click the data grid widget, and give it a data source microflow by selecting **Data source** > **Type** > **Microflow**.
9. Next to the microflow field, click the **Select** button, and then click **New**.
10. Configure the microflow that will run the query by doing the following steps:
    1. Enter a name for your microflow, for example, *ACT_RetrieveFilteredResults*, and then click **OK**.
    2. Specify the Filter NPE as input parameter for your microflow.
    3. In your **Toolbox**, find the **Query External Database** activity and drag it onto the work area of your microflow.
    4. Position the **Query External Database** activity between the start and end event of your microflow.
    5. Double-click the **Query External Database** microflow activity to configure the required parameters.
    6. In the **Database** section, select your Snowflake database.
    7. In the **Query** list, select the query name that you entered in step 2.
    8. In the **Parameters** section, add the following parameters:

        | Name | Type | Value |
        | --- | --- | --- |
        | *filterPostalCode1* | **String** | *$HistoryDayFilter/PostalCode* |
        | *filterPostalCode2* | **String** | *$HistoryDayFilter/PostalCode* |
        | *filterCountry1* | **String** | *$HistoryDayFilter/Country* |
        | *filterCountry2* | **String** | *$HistoryDayFilter/Country* |

    9. In the **Output** section, provide the following values:
        * **Return type** - **List of *{your module name}*.HISTORY_DAY**
        * **Use return value** - set to **Yes**
        * **List name** - enter *HISTORY_DAY*
    10. Click **OK**.
11. Configure a nanoflow with the [Refresh entity](/appstore/modules/nanoflow-commons/) action to refresh the data grid if a user changes one of the filter values.

{{% alert color="info" %}}When using JDK version above 16, set JVM Parameter **--add-opens=java.base/java.nio=ALL-UNNAMED** in the App configuration.{{% /alert %}}

## Configuring a Query to Display Data as a Chart

This section provides an example of configuring a query that provides the data required to generate a chart. The chart in the example contains multiple series of historic temperatures. The query averages the minimum, maximum and average temperature in Celsius for all US locations and returns one record for each day available in the database.

### Displaying the Data in a Multi-Series Chart

To define, test and execute the query in Studio Pro, follow these steps:

1. In your Mendix app, in the **App Explorer**, find and open the external connection document that you created with the Connect to Database wizard.
2. In the **Name** field, enter a name for your query, for example, *QueryHistoryDay*.
3. Enter the following **SQL Query**:

    ```sql
    select date_valid_std
    ,      avg(avg_temperature_air_2m_f) as avg_temp_f
    ,      round(avg((avg_temperature_air_2m_f - 21) * (5/9)),1) as avg_temp_c
    ,      min(avg_temperature_air_2m_f) as min_temp_f
    ,      round(min((avg_temperature_air_2m_f - 21) * (5/9)),1) as min_temp_c
    ,      max(avg_temperature_air_2m_f) as max_temp_f
    ,      round(max((avg_temperature_air_2m_f - 21) * (5/9)),1) as max_temp_c
    from   STANDARD_TILE.HISTORY_DAY
    group by date_valid_std
    order by DATE_VALID_STD asc
    ```

4. Click **Run Query**.
5. Verify that the results are correct, and then generate the required entity to collect the data in your Mendix application. For more information, see [External Database Connector: Creating an Entity from the Response](/appstore/modules/external-database-connector/#create-entity).
6. Create a microflow that will run the query by doing the following steps:
    1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
    2. Enter a name for your microflow, for example, *ACT_RetrieveHistoryAverages*, and then click **OK**.
    3. In your **Toolbox**, find the **Query External Database** activity and drag it onto the work area of your microflow.
    4. Position the **Query External Database** activity between the start and end event of your microflow.
    5. Double-click the **Query External Database** microflow activity to configure the required parameters.
    6. In the **Database** section, select your Snowflake database.
    7. In the **Query** list, select the query name that you entered in step 2.
    8. In the **Output** section, provide the following values:
        * **Return type** - **List of *{your module name}*.STANDARD_TILE_HISTORY_DAY**
        * **Use return value** - set to **Yes**
        * **List name** - enter *STANDARD_TILE_HISTORY_DAY*
    9. Click **OK**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-chart.png" >}}

7. Select the microflow as the [data source for every series in the chart](/refguide/charts-configuration/) that you want to display the weather data.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-chart-source.png" >}}

### Improving the Performance by Fetching the Data in a Single Query

Using a multi-series chart as in the above example can result in slower performance, because the query is executed for every series. To improve performance, you can replace the query in the previous section with the following one, which returns a row per measurement type. In this version, a single query is sufficient to fetch all data for the chart.

```sql
with days as (
    select date_valid_std
    ,      avg(avg_temperature_air_2m_f) as avg_temp_f
    ,      round(avg((avg_temperature_air_2m_f - 21) * (5/9)),1) as avg_temp_c
    ,      min(avg_temperature_air_2m_f) as min_temp_f
    ,      round(min((avg_temperature_air_2m_f - 21) * (5/9)),1) as min_temp_c
    ,      max(avg_temperature_air_2m_f) as max_temp_f
    ,      round(max((avg_temperature_air_2m_f - 21) * (5/9)),1) as max_temp_c
    from   STANDARD_TILE.HISTORY_DAY
    group by date_valid_std
    order by DATE_VALID_STD asc
)
select d1.DATE_VALID_STD
,      'AvgTempCelcius' as "MeasurementType"
,      d1.avg_temp_c as "Value"
from   days as d1
union
select d2.DATE_VALID_STD
,      'MinTempCelcius' as "MeasurementType"
,      d2.min_temp_c as "Value"
from   days as d2
union
select d3.DATE_VALID_STD
,      'MaxTempCelcius' as "MeasurementType"
,      d3.max_temp_c as "Value"
from   days as d3
order by 1,2
```

The **group by** property is used to select the column that indicates the series. This results in a single query send to Snowflake, which is usually faster than executing three separate queries.

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-chart-source2.png" >}}

## Implementing Data Replication

Data replication involves copying the data from Snowflake into the database of your app. This makes the data faster to access and easier to use in your app pages. To ensure that the data in your app is up to date, the data replication process must be recurrent. For example, you can configure a query that iterates over Snowflake data (for example, the list of your customers) at a preconfigured interval, in order to find any differences compared to the last iteration and copy them over to your app database. 

However, iterating over a list of objects can be a performance-heavy operation, and more complex data (such as a list of your customers together with their billing and shipping addresses) can require complex queries with multiple *fetch* operations. Because of this, for complex nested data structures, it might be better and more performant to use the JSON capabilities of Snowflake.

This section provides an example of a query that builds a nested structure consisting of records from multiple tables or views, and returns the result as a single string or JSON value.

To execute and test the query in Studio Pro, follow these steps:

1. In your Mendix app, in the **App Explorer**, find and open the external connection document that you created with the Connect to Database wizard.
2. In the **Name** field, enter a name for your query, for example, *TodayForecast*.
3. Enter the following **SQL Query**:

    ```sql
    with ftoday as (
        select fd.postal_code as zipcode
        ,      fd.country as country
        ,      fd.DATE_VALID_STD as forecast_date
        ,      round((fd.AVG_TEMPERATURE_AIR_2M_F -32) * (5/9),1) as avg_temp_c
        ,      round((fd.MIN_TEMPERATURE_AIR_2M_F -32) * (5/9),1) as min_temp_c
        ,      round((fd.MAX_TEMPERATURE_AIR_2M_F -32) * (5/9),1) as max_temp_c
        from   STANDARD_TILE.FORECAST_DAY fd
        where  fd.DATE_VALID_STD = current_date
    ), ztoday as (
        select f.zipcode || '-' || f.country as id
        ,      f.zipcode, f.country
        ,      object_construct(
                    'ForecastId', f.zipcode || '-' || f.country || '-' || f.forecast_date
                   ,'Date',f.forecast_date
                   ,'AvgTempCelcius',f.avg_temp_c
                   ,'MinTempCelcius',f.min_temp_c
                   ,'MaxTempCelcius',f.max_temp_c
               ) as forecast
        from   ftoday f
        order by 1,2
    )
    select array_agg(object_construct('LocationId',zt.id,'ZipCode',zt.zipcode,'Country',zt.country,'Forecast',zt.forecast)) as today_forecast_json
    from   ztoday as zt
    ```
    
    This query results in a single string return value, containing a nested JSON with weather forecast for today for multiple postal code areas. This resulting string is captured in a non-persistable entity (NPE) with a single attribute.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-replication.png" >}}

4. Use a JSON import mapping to directly import the data into multiple associated persistable entities by doing the following steps:

    1. Define a [JSON structure](/refguide/json-structures/) for the data retrieved from Snowflake.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-replication-json.png" >}}

    2. Define an [import mapping](/refguide/import-mappings/) for the JSON structure.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-replication-map.png" >}}

5. Execute the query in a microflow, take the resulting JSON string, and import it by using an **Import from JSON** microflow activity, as shown in the following figure:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-replication-flow.png" >}}

6. Optionally, to track the status of the replication jobs, create a page with a data grid showing data from the [System.ProcessedQueueTask](/refguide/task-queue/) database table.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-replication-grid.png" >}}

## Using Cortex AI functions

Snowflake comes with built in AI functionality that you can leverage in your Mendix applications. This section provides an example of a query that calls the *sentiment* function to analyze the sentiment of a piece of text.

To execute and test the query in Studio Pro, follow these steps:

1. In your Mendix app, in the **App Explorer**, find and open the external connection document that you created with the Connect to Database wizard.
2. In the **Name** field, enter a name for your query, for example, *GetSentiment*.
3. Enter the following **SQL Query**:

    ```sql
    select snowflake.cortex.sentiment({text}) as "Sentiment"
    from   dual  as sentiment_result
    ```

4. Click **Run Query**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-cortex.png" >}}

5. Verify that the results are correct, and then generate the required entity to collect the data in your Mendix application. For more information, see [External Database Connector: Creating an Entity from the Response](/appstore/modules/external-database-connector/#create-entity).

    {{% alert color="info" %}}Mendix expects a table when generating the entity. As a workaround, you can use a dummy dual table.{{% /alert %}}

6. Create a microflow that will run the query by doing the following steps:
    1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
    2. Enter a name for your microflow, for example, *ACT_RetrieveSentiment*, and then click **OK**.
    3. In your **Toolbox**, find the **Query External Database** activity and drag it onto the work area of your microflow.
    4. Position the **Query External Database** activity between the start and end event of your microflow.
    5. Double-click the **Query External Database** microflow activity to configure the required parameters.
    6. In the **Database** section, select your Snowflake database.
    7. In the **Query** list, select the query name that you entered in step 2.
    8. In the **Parameters** section, add the following parameter:
        * **Name** - *p_text*
        * **Type** - **String**
        * **Value** - *$SentimentForm/Text*
    9. In the **Output** section, provide the following values:
        * **Return type** - **List of *{your module name}*.SentimentResult**
        * **Use return value** - set to **Yes**
        * **List name** - enter *SentimentResult*
    10. Click **OK**.
  
    {{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/sample-snowflake-query-cortex-flow.png" >}}

7. Configure a method for triggering the **ACT_RetrieveSentiment** microflow. For example, you can trigger a microflow by associating it with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
8. Run the **ACT_RetrieveSentiment** microflow and verify the results.
