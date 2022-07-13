---
title: "Create a Basic Chart"
url: /howto7/extensibility/charts-basic-create/
weight: 10
description: "How to create a basic chart and configure the display options"
tags: ["Charts", "Widgets", "Basic Chart", "Area Chart"]
---

## 1 Introduction

The charts widget provides a basic implementation of different types of chart (for example: area, line, bar, column, and pie) in a Mendix application.

This how-to will teach you how to do the following:

* Create a chart with basic sample data

* Configure the chart display options

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install the latest Mendix desktop modeler

* Download the latest [Charts Widget](/appstore/widgets/charts/) from the Mendix Marketplace

## 3 Implementing the Charts Widget in an Existing App

In this section, you will create a chart with basic sample data.

## 3.1 Setting up the Domain Model

To use the Charts widget, a specific data structure is set up. This is defined by entities and attributes in the domain model.

1. Create a new module called **charts**.

2. Configure your domain model to contain an entity **Value** with a string attribute **xValue** and a decimal attribute **yValue**.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-basic-create/charts-entity.png" alt="Value entity" >}}

## 3.2 Creating a Data Entry Page

To create a basic data entry page from which the Charts widget will fetch data, follow these steps:

1. Right Click on value entity.

2. Select **Generate overview pages**.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-basic-create/charts-rest-generate-overview-pages.png" alt="Generate overview pages for Value entity" >}}

3. Add the **Value_NewEdit** page to user navigation.

## 3.3 Adding the Charts Widget to a New Page

1. Create a page named *ShowChart*.

2. Add it to the user navigation.

3. Add a **Data view** to this page that contains the **Value** entity and has a microflow as a data source.

4. Create a new microflow named **DS_NewValue** to fill the data view.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-basic-create/charts-create-new-value.png" alt="Data view showing the Value entity" >}}

5. Right-click the data view and select **Go to microflow**.

6. In the new **DS_NewValue** microflow, create a new *Value* object and set that object as the return.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-basic-create/charts-new-values-microflow.png" alt="New Value microflow" >}}

7. On the ShowChart page, add the widget **Area chart**.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-basic-create/charts-select-chart.png" alt="Select widget" >}}

8. The final page should look like this.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-basic-create/charts-widget-page.png" alt="Final widget Page" >}}

## 3.4 Configuring the Charts Widget

To configure a Charts widget, follow these steps:

1. Open the page with the Charts widget.

2. Right-click the **Area chart** and select **Properties**.

3. In the tab **Chart properties**, add a new **Series** property.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-basic-create/charts-series.png" alt="Chart Series" >}}

4. In the tab **Data source**, select *Value* as the **Entity**.

5. Set the **Data source** as **Database**.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-basic-create/chart-add-entity.png" alt="select Entity" >}}

6. In the tab **Data points**, select *xValue* as the **X-axis data attribute** and *yValue* as the **Y-axis data attribute**.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-basic-create/charts-data-points.png" alt="select Data Points" >}}

## 3.5 Viewing the Chart

To view the chart, follow these steps:

1. Run the app.

2. In your browser, open the data entry page.

3. Enter data values for **x value** and **y value**.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-basic-create/charts-front-end.png" alt="Enter Data" >}}

4. Click the **Save** button.

5. Open the **ShowChart** page to view the chart created.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-basic-create/charts-area-chart.png" alt="Show Chart" >}}

## 4 Read More

* [How to Use a Chart With a REST Data Source](/howto7/extensibility/charts-basic-rest/)
* [How to Use Any Chart](/howto7/extensibility/charts-any-usage/)
* [How to Use Charts Themes](/howto7/extensibility/charts-theme/)
