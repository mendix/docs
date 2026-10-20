---
title: "Create a Multiple Series Chart"
url: /appstore/widgets/charts-dynamic-series/
weight: 50
description: "Describes how to configure a chart that derives its series from your data at runtime by grouping a single data source."
aliases:
    - /howto/front-end/charts-dynamic-series/
---

## Introduction

The Charts widget can derive its series from your data at runtime. Instead of configuring one series for every line you want to show, you configure a single series, point it at one data source, and choose an attribute to group by. Every distinct value of that attribute becomes its own series, so the number of lines in the chart follows the data in your app.

This how-to teaches you how to do the following:

* Create a chart whose series are determined by your data at runtime

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download the latest [Charts](/appstore/widgets/charts/) widget from the Mendix Marketplace

## Setting up Chart Data

### Setting up the Domain Model

The chart reads all data points from one data source and splits them into series. This means the attribute that identifies the series must be stored on the same entity as the data points.

1. Configure your domain model to contain an entity **Value**.
1. Give **Value** an attribute for each axis: **xValue** and **yValue**.
1. Give **Value** a third attribute to group by, for example a string attribute named **seriesName**.

{{% alert color="info" %}}
The **Group by** property can only use an attribute of the entity the data source returns. It cannot follow an association, so storing the series name on a separate entity does not work.
{{% /alert %}}

### Entering Data for the Chart

Now you need to enter data for the chart.

1. Right-click the **Value** entity.
1. Choose **Generate overview pages...**.
1. Connect the **Value_Overview** page to the navigation.
1. Click **Run Locally** ({{% icon name="controls-play" %}}) to run the app locally.
1. Enter some sample data. Give every data point that belongs to the same line the same **seriesName** value.

## Configuring the Charts Widget

### Adding a Chart Page

Now you need to create a page containing the chart.

1. Create a new page.
1. Add an **Area chart** widget to the page.
1. Add the page to the user navigation.

### Configuring the Area Chart with Multiple Series

To configure a chart that builds its series from the data, follow these steps:

1. Double-click the **Area chart** widget to open its properties.
1. On the **General** tab, in the **Data source** section, add a new **Series** item.
1. In the **General** section of the series, set **Data set** to **Multiple series**.
1. Set **Data source** to **Database** and select the **Value** entity. This is the entity from which all data points are retrieved.
1. Set **Group by** to **seriesName**. Data points that share a value form one series.
1. Set **Series name** to a text template that renders the label shown in the legend, for example the **seriesName** attribute. The name is taken from the first data point in each group.
1. Set **X axis attribute** to **xValue** and **Y axis attribute** to **yValue**.
1. Optionally, set **Aggregation function** to combine data points when several Y values share the same X value.

To give the series distinct colors, use the **Appearance** section of the series. **Line color**, **Marker color**, and **Area fill color** are expressions that return a color string, and each is evaluated against the first data point of the group, so the value applies to the whole series. For example, store a color on the **Value** entity and enter `$currentObject/color` as the expression.

## Viewing the Chart

To view the chart, follow these steps:

1. Run the app (locally).
1. Open the page containing the chart.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-dynamic-series/charts-dynamic-series-chart.png" alt="Area chart showing one line for each series name found in the data" class="no-border" >}}

## Read More

* [Create a Basic Chart](/appstore/widgets/charts-basic-create/)
* [Fine-Tune a Chart with Chart Playground](/appstore/widgets/chart-advanced-tuning/)
* [Use Any Chart](/appstore/widgets/charts-any-usage/)
