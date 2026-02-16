---
title: "Create a Basic Chart"
url: /appstore/widgets/charts-basic-create/
weight: 10
description: "How to create a basic chart and configure the display options"
aliases:
    - /howto/front-end/charts-basic-create/
---

## Introduction

The charts widget provides a basic implementation of different types of chart (for example: area, line, bar, column, and pie) in a Mendix application.

This how-to teaches you how to do the following:

* Create a chart with basic sample data

* Configure the chart display options

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download the latest [Charts Widget](/appstore/widgets/charts/) from the Mendix Marketplace

## Implementing the Charts Widget in an Existing App

In this section, you will create a chart with basic sample data.

### Setting up the Domain Model

To use the Charts widget, a specific data structure is set up. This is defined by entities and attributes in the domain model.

1. Create a new module called **charts**.
2. Configure your domain model to contain an entity **Value** with a string attribute **xValue** and a decimal attribute **yValue**.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-entity.png" alt="Value entity" class="no-border" >}}

### Creating a Data Entry Page

To create a basic data entry page from which the Charts widget will fetch data, follow these steps:

1. Right Click on value entity.
2. Select **Generate overview pages**.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-rest-generate-overview-pages.png" alt="Generate overview pages for Value entity" class="no-border" >}}

3. Add the **Value_Overview** page to user navigation.

### Adding the Charts Widget to a New Page

1. Create a page named *ShowChart*.
2. Add it to the user navigation.
3. Add a **Data view** to this page that contains the **Value** entity and has a microflow as a data source.
4. Create a new microflow named **DS_NewValue** to fill the data view.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-create-new-value.png" alt="Data view showing the Value entity" class="no-border" >}}

5. Right-click the data view and select **Go to microflow**.
6. In the new **DS_NewValue** microflow, create a new *Value* object and set that object as the return.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-new-values-microflow.png" alt="New Value microflow" class="no-border" >}}

7. On the ShowChart page, add the widget **Area chart**.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-select-chart.png" alt="Select widget" class="no-border" >}}

8. The final page should look like this.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-widget-page.png" alt="Final widget Page" class="no-border" >}}

### Configuring the Charts Widget

To configure a Charts widget, follow these steps:

1. Open the page with the Charts widget.
2. Right-click the **Area chart** and select **Properties**.
3. In the tab **Chart properties**, add a new **Series** property.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-series.png" alt="Chart Series" class="no-border" >}}

4. In the tab **Data source**, select *Value* as the **Entity**.
5. Set the **Data source** as **Database**.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/chart-add-entity.png" alt="select Entity" class="no-border" >}}

6. In the tab **Data points**, select *xValue* as the **X-axis data attribute** and *yValue* as the **Y-axis data attribute**.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-data-points.png" alt="select Data Points" class="no-border" >}}

### Viewing the Chart

To view the chart, follow these steps:

1. Run the app.
2. In your browser, open the data entry page.
3. Enter data values for **x value** and **y value**.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-front-end.png" alt="Enter Data" class="no-border" >}}

4. Click the **Save** button.
5. Open the **ShowChart** page to view the chart created.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-basic-create/charts-area-chart.png" alt="Show Chart" class="no-border" >}}

## Read More

* [Use a Chart With a REST Data Source](/howto/front-end/charts-basic-rest/)
* [Use Any Chart](/appstore/widgets/charts-any-usage/)
* [Use Charts Themes](/howto/front-end/charts-theme/)
