---
title: "Pie Chart"
url: /appstore/widgets/charts-pie-chart/
weight: 160
description: "Describes the properties of the Pie Chart widget in the Charts module."
---

## Introduction

A pie chart shows the values of one data source as slices of a circle. With a hole in the middle, it becomes a doughnut chart.

For the **Dimensions** and **Advanced** settings, which all charts share, see [Common Chart Properties](/appstore/widgets/charts/#common-properties). This page describes the properties that are specific to the pie chart.

The pie chart does not use a series list. It uses one data source, and each object in it becomes one slice.

## Data Source Section

### Series

The data source for the slices of the pie chart.

### Series Name

This required property is a text template that returns a unique name for each slice:

{{% todo %}}[SCR-145: Pie chart Data source section with Series name filled in]{{% /todo %}}

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/pie-chart-series-name-example.png" alt="Series name property of a pie chart" width="450px" class="no-border" >}}

### Value Attribute

The attribute used to get the value for each slice.

### Sort Attribute and Sort Order

The attribute used to sort the slices, and the sort order: **Ascending** or **Descending**.

### Slice Color

An expression that returns the color of each slice. You can use attributes of the object in the expression.

### Selection Type

Set to **Single** to let users select a slice. Other widgets can then listen to the selection.

## General Section

### Hole Radius

A percentage between 0 and 100 that sets the radius of the hole in the middle of the chart, relative to the chart itself. Set to **0** for a pie chart, or to a higher value for a doughnut chart. The default value is **0**.

The pie chart also has the **Show legend** property described in [General Section](/appstore/widgets/charts/#general), and a **Tooltip hover text** property for the message shown when the user hovers over a slice.

## Events Section

* **On click action** – The action that runs when the user clicks a slice.

## Read More

* [Charts](/appstore/widgets/charts/)
* [Fine-Tune a Chart with Chart Playground](/appstore/widgets/chart-advanced-tuning/)
