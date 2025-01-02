---
title: "Create a Dynamic Series Chart"
url: /appstore/widgets/charts-dynamic-series/
weight: 50
aliases:
    - /howto/front-end/charts-dynamic-series/
---

## Introduction

The charts widget provides a basic implementation of dynamic series. This allows you to vary the number of data series (for example lines on a line chart) in your chart at runtime, based on the data in your app.

This how-to teaches you how to do the following:

* Create a chart with dynamic series

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download the latest [Charts Widget](/appstore/widgets/charts/) from the Mendix Marketplace

## Setting up Chart Data

### Setting up the Domain Model

In order to create the Charts widget with dynamic series, a specific data structure is set up.

1. Configure your domain model to contain an entity **Value** with attributes **xValue** and **yValue**.
1. Add another entity, **Series**, with attributes **name**, **color**, and **fillColor**.
1. Add an association **Value_Series** between the two entities.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-dynamic-series/charts-dynamic-series-model.png" alt="Values entity" class="no-border" >}}

### Entering Data for the Chart

Now you need to enter data for the chart.

1. Right-click the **Series** entity.
2. Choose **Generate overview pages...**.
3. Select both **Series** and **Value** as the entities for which to generate pages.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-dynamic-series/charts-dynamic-series-generate-pages.png" alt="Generate Series and Value overview and data entry pages" class="no-border" >}}

4. Connect the **Series_Overview** page to the navigation.
5. Click **Run Locally** ({{% icon name="controls-play" %}}) to run the app locally.
6. Enter some sample data.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-dynamic-series/charts-dynamic-series-data-entry.png" alt="Enter data for chart" class="no-border" >}}

## Configuring the Charts Widget

### Adding a Chart Page

Now you need to create a page containing the chart.

1. Create a new page.
2. Add a data view which uses a microflow to make a context which is the first object of the **Value**.
3. Add an **Area chart** widget inside the data view.

### Configuring the Area Chart with Dynamic Series

To configure a Charts widget with a dynamic series, follow these steps:

1. Right-click the area chart widget and select **Properties**.
1. In the tab **Chart properties**, add a new **Series** property.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-series.png" alt="Chart Series" class="no-border" >}}

1. In the tab **Data source**, select **Dynamic**.
1. Set the **Data entity** to *Value*. This is the entity from which the data values will be retrieved.
1. Set the **Data source** as **Database** (note that REST endpoints are not supported for dynamic series).

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-dynamic-series/charts-dynamic-series-select.png" alt="select Dynamic" class="no-border" >}}

1. In the tab **Data Points**, set:

    * **X-axis data attribute** to *Value/xValue*
    * **Y-axis data attribute** to *Value/yValue*

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-dynamic-series/charts-dynamic-series-data-points.png" alt="select Data Points" class="no-border" >}}

1. In the tab **Dynamic series**, set: 

    * **Series entity** to *Series*
    * **Series name attribute** to *Series/name*
    * **Line color attribute** to *Series/color*
    * **Area color attribute** to *Series/fillcolor*

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-dynamic-series/charts-dynamic-series-attributes.png" alt="select Data Points" class="no-border" >}}

1. Add the charts page to user navigation.

## Viewing the Chart

To view the chart, follow these steps:

1. Run the app (locally).
1. Open the page containing the dynamic series chart.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-dynamic-series/charts-dynamic-series-chart.png" alt="Dynamic Series Chart" class="no-border" >}}

## Read More

* [Create a Basic Chart](/appstore/widgets/charts-basic-create/)
* [Fine-Tune a Chart with Advance Settings](/appstore/widgets/chart-advanced-tuning/)
* [Use Any Chart](/appstore/widgets/charts-any-usage/)
