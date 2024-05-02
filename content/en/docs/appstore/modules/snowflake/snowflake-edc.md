---
title: "Configure the External Database Connector for Snowflake"
linktitle: "External Database Connector"
url: /appstore/modules/snowflake/external-database-connector/
description: "Describes the steps required to use the Mendix External Database connector with Snowflake."
weight: 10
tags: ["Snowflake", "External Database Connector"]
---

## 1 Introduction

The [External Database connector](/appstore/modules/external-database-connector/) allows you to connect to databases and select data to use in your app. You can use it to directly test connections and queries during configuration in Studio Pro (design time). For Mendix apps that use Snowflake as their database, the External Database connector is the recommended integration option for Mendix 10.

This how-to describes the steps required to enable your app to use the External Database connector with Snowflake, and to configure several common use cases.

## 2 Configuring the Connection Between Your Mendix App and Snowflake

To configure connect your Mendix application to Snowflake with the External Database connector, follow these steps:

1. [Install the External Database connector](/appstore/modules/external-database-connector/#installation).
2. Run the [Connect to Database wizard](/appstore/modules/external-database-connector/#configuration) and select **Snowflake** as the database type.
2. Select **Use connection string**, and then enter a user name and password that can be used to access Snowflake.
3. Click **Test Connection** to verify the connection details, and then click **Save**.

Your Mendix app now connects to Snowflake with the provided connection details. When the connection is successful, you can see your Snowflake schemas and objects in your Mendix app.

You can now configure the queries that you need to run on your Snowflake database. The following sections of this document provide examples of some common queries, using data from the *Global Weather & Climate Data for BI* demo dataset available in Snowflake. For general information about creating queries, see [External Database Connector: Querying a Database](/appstore/modules/external-database-connector/#query-database) and [External Database Connector: Using Query Response](/appstore/modules/external-database-connector/#use-query-response).

## 3 Configuring a Basic Query

This section provides an example of a query that determines the average minimum, maximum, and average temperature for a given postal code for the next 10 calendar days, based on the climate data in the **CLIMATOLOGY_DAY** view.

To execute and test the query in Studio Pro, follow these steps:

1. In your Mendix app, in the **App Explorer**, find and open the external connection document that you created with the Connect to Database wizard.
2. In the **Name** field, enter a name for your query, for example, *ClimateForecastNext10DaysQuery*.
3. Enter the following **SQL Query**:

    ```text
    select POSTAL_CODE as "PostalCode"
    , COUNTRY as "Country"
    , doy_std as "DayOfYearClimate"
    , dayofyear(CURRENT_DATE) as "DayOfYearToday"
    , current_date + doy_std - dayofyear(CURRENT_DATE) as "ClimateDate"
    , round((AVG_OF__DAILY_AVG_TEMPERATURE_AIR_F - 32) * (5/9),1)
    as "AvgAvgTempCelsius"
    , round((AVG_OF__DAILY_MIN_TEMPERATURE_AIR_F - 32) * (5/9),1)
    as "AvgMinTempCelsius"
    , round((AVG_OF__DAILY_MAX_TEMPERATURE_AIR_F - 32) * (5/9),1)
    as "AvgMaxTempCelsius"
    from CLIMATOLOGY_DAY
    where postal_code = {postal_code}
    and ((doy_std + 365) - dayofyear(current_date)) % 365 <=10
    order by doy_std asc
    limit 10
    ```

4. Click **Run Query**.

    {{< figure src="/attachments/appstore/modules/external-database-connector/sample-snowflake-query-basic.png" >}}

{{% alert color="info" %}}
As shown in the above example, if your input parameters do no exactly match what the database needs, or if the out put of the query does not match what you need in Mendix, you can cast or transform your data in your query. You can also use column aliases to help generate entities with the required names.
{{% /alert %}}

5. Verify that the results are correct, and then generate the required entity to collect the data in your Mendix application. For more information, see [External Database Connector: Creating an Entity from the Response](/appstore/modules/external-database-connector/#create-entity).
6. Create a microflow that will run the query by doing the following steps:
    1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
    2. Enter a name for your microflow, for example, *ACT_RetrieveWeatherData*, and then click **OK**.
    3. In your **Toolbox**, find the **Query External Database** activity and drag it onto the work area of your microflow.
    4. Position the **Query External Database** activity between the start and end event of your microflow.
    5. Double-click the **Query External Database** microflow activity to configure the required parameters.
    6. In the **Database** section, select your Snowflake database.
    7. In the **Query** list, select the query name that you entered in step 2.
    8. In the **Parameters** section, add the following parameter:
        * **Name** - *postal_code*
        * **Type** - **String**
        * **Value** - *$Filter/PostalCode*
    9. In the **Output** section, provide the following values:
        * **Return type** - **List of *{your module name}*.CLIMATOLOGY_FORECAST**
        * **Use return value** - set to **Yes**
        * **List name** - enter *CLIMATOLOGY_DAY*
    10. Click **OK**.

    {{< figure src="/attachments/appstore/modules/external-database-connector/sample-snowflake-query-basic.png" >}}

7. Configure a method for triggering the **ACT_RetrieveWeatherData** microflow. For example, you can trigger a microflow by associating it with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
8. Run the **ACT_RetrieveWeatherData** microflow and verify the results.

    {{< figure src="/attachments/appstore/modules/external-database-connector/sample-snowflake-query-result.png" >}}

## 4 Configuring a Filtered Query

This section provides an example of a filtered query. Although you can filter, sort, and paginate data in your Mendix app by using the [Data Grid 2](/appstore/modules/data-grid-2/) widget, this widget operates mostly client-side, so as a best practice, you may want to pre-filter the data retrieved from Snowflake before using it in a grid. The following example shows how you can specify a filter based on the postal code and country in your SQL query. After running the query, you can then further limit the results with data grid filters, sorting, and pagination.

To execute and test the query in Studio Pro, follow these steps:

1. In your Mendix app, in the **App Explorer**, find and open the external connection document that you created with the Connect to Database wizard.
2. In the **Name** field, enter a name for your query, for example, *QueryHistoryDay*.
3. Enter the following **SQL Query**:

    ```text
    select *
    from STANDARD_TILE.HISTORY_DAY
    where ( {filterPostalCode1} IS NULL
    or (postal_code like '%' ||{filterPostalCode2}|| '%'))
    and ( {filterCountry1} IS NULL
    or ( country like '%' ||{filterCountry2}|| '%'))
    limit 1000
    ```

4. Click **Run Query**.
5. Verify that the results are correct, and then generate the required entity to collect the data in your Mendix application. For more information, see [External Database Connector: Creating an Entity from the Response](/appstore/modules/external-database-connector/#create-entity).

[TBD]

## 5 Configuring a Query to Display Data as a Chart

This section provides an example of configuring a query that provides the data required to generate a chart. The chart in the example contains multiple series of historic temperatures. The query averages the minimum, maximum and average temperature in Celsius for all US locations and returns one record for each day available in the database.

### 5.1 Displaying the Data in a Multi-Series Chart

To execute and test the query in Studio Pro, follow these steps:

1. In your Mendix app, in the **App Explorer**, find and open the external connection document that you created with the Connect to Database wizard.
2. In the **Name** field, enter a name for your query, for example, *QueryHistoryDay*.
3. Enter the following **SQL Query**:

    ```text
    select date_valid_std
    , avg(avg_temperature_air_2m_f) as avg_temp_f
    , round(avg((avg_temperature_air_2m_f - 21 * (5/9)),1) as avg_temp_c)
    , min(min_temperature_air_2m_f) as min_temp_f
    , round(min((min_temperature_air_2m_f - 21 * (5/9)),1) as min_temp_c)
    , max(max_temperature_air_2m_f) as max_temp_f
    , round(max((max_temperature_air_2m_f - 21 * (5/9)),1) as max_temp_c)
    from STANDARD_TILE.HISTORY_DAY
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

    {{< figure src="/attachments/appstore/modules/external-database-connector/sample-snowflake-query-chart.png" >}}

7. Select the microflow as the [data source for every series in the chart](/refguide/charts-configuration/) that you want to display the weather data.

    {{< figure src="/attachments/appstore/modules/external-database-connector/sample-snowflake-query-chart-source.png" >}}

### 5.2 Improving the Performance by Fetching the Data in a Single Query

Using a multi-series chart as in the above example can result in slower performance, because the query is executed for every series. To improve performance, you can replace the query in the previous section with the following one, which returns a row per measurement type. In this version, a single query is sufficient to fetch all data for the chart.

    ```text
    with days as (
    select date_valid_std
    , avg(avg_temperature_air_2m_f) as avg_temp_f
    , round(avg((avg_temperature_air_2m_f - 21 * (5/9)),1) as avg_temp_c)
    , min(min_temperature_air_2m_f) as min_temp_f
    , round(min((min_temperature_air_2m_f - 21 * (5/9)),1) as min_temp_c)
    , max(max_temperature_air_2m_f) as max_temp_f
    , round(max((max_temperature_air_2m_f - 21 * (5/9)),1) as max_temp_c)
    from STANDARD_TILE.HISTORY_DAY
    group by date_valid_std
    order by DATE_VALID_STD asc
    )
    select d1.DATE_VALID_STD
    , 'AvgTempCelsius' as "Measurement Type"
    , d1.avg_temp_c as "Value"
    from days as d1
    union
    select d2.DATE_VALID_STD
    , 'MinTempCelsius' as "Measurement Type"
    , d2.min_temp_c as "Value"
    from days as d2
    union
    select d3.DATE_VALID_STD
    , 'MaxTempCelsius' as "Measurement Type"
    , d3.max_temp_c as "Value"
    from days as d3
    ```

The **group by** property is used to select the column that indicates the series. This results in a single query send to Snowflake, which is usually faster than executing three separate queries.

    {{< figure src="/attachments/appstore/modules/external-database-connector/sample-snowflake-query-chart-source2.png" >}}

## 6 Implementing Data Replication

## 7 Using Cortex AI functions

Snowflake comes with built in AI functionality take you can leverage in your Mendix applications. This section provides an example of a query that calls the *sentiment* function to to analyze the sentiment of a piece of text.

To execute and test the query in Studio Pro, follow these steps: