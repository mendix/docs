---
title: "Charting with View Entities"
url: /refguide/charting-with-view-entities/
weight: 40
---

## Introduction

You can use view entities to create charts in Studio Pro. This process uses aggregated data. 

## Use Case

For this purpose of this use case, the following domain model is used:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/charting-with-view-entities/domain-model.png" width="500" >}}

For example, you own a small business. To keep track of what is being sold, you want to visualize your sales. You want to see how much you make in sales each year, and how each product category contributes to the number. You would like your chart to look similar to the one below:

{{< figure src="/attachments/refguide/modeling/domain-model/view-entities/charting-with-view-entities/chart-example.png" width="500" >}}

### Create a View Entity

Mendix charts do not take associations, so you usually have to take extra steps to use a non-persistable entity as a source. Using view entities is a faster and simpler way to create a chart.

For the chart, you want the year on the X axis, and the total sales on the Y axis. Create a view entity that groups this data by product category. To do this, follow the steps below:

1. Open your domain model and create a new view entity named *YearlySalesByCategoryVE*. 
2. Add the following query to the OQL editor:

    ```sql
    SELECT
      CAST(DATEPART(YEAR, o.OrderDate) as INTEGER) as OrderYear
      , c.CategoryId as CategoryId
      , c.CategoryName as CategoryName
      , SUM(ol.Quantity * ol.UnitPrice * (1 - ol.Discount)) as TotalSales
    FROM SalesDashboard."Order" as o
      JOIN SalesDashboard.OrderLine_Order/SalesDashboard.OrderLine as ol
      LEFT JOIN SalesDashboard.OrderLine_Product/SalesDashboard.Product as p
    LEFT JOIN SalesDashboard.Product_Category/SalesDashboard.Category as c
    GROUP BY c.CategoryId, c.CategoryName, CAST(DATEPART(YEAR, o.OrderDate) as INTEGER)
    ``` 

{{% alert color="info" %}}

View entities allow you to calculate and aggregate the total sales in a single line. You can also take the year by using `DateTime`. 
{{% /alert %}}

### Create the Chart

Use the new view entity to create a chart. Follow the steps below:

1. Create a new page or open an existing page.
2. Navigate to the **Toolbox** and add a **Column chart** to the page. 
3. Double-click the chart and in the **Data Source** field, click **New**. 
4. Configure the chart by filling out the following:

   * Data set - **Multiple series**
   * Data source - **YearlySalesByCategoryVE**
   * Group by - **CategoryId** 
   * X axis attribute - **OrderYear**
   * Y axis attribute - **TotalSales*

5. Set the series name to reflect the category name. Do the following:
  
   * In the **Series name** field, click **Edit** and add **{1}** in the **Template** field. 
   * In the **Parameters** field, click **New** > **Select** > **CategoryName** > **Select** > **OK**.

        {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/charting-with-view-entities/series-name.png" width="400" >}}

 The chart should be configured as seen below: 

  {{< figure src="/attachments/refguide/modeling/domain-model/view-entities/charting-with-view-entities/chart-final.png" width="400" >}}

6. Click **OK** to save.

7. Run your app locally and you should see the chart populated with your data. 
