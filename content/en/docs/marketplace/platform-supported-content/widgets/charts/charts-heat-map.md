---
title: "Heat Map"
url: /appstore/widgets/charts-heat-map/
weight: 140
description: "Describes the properties of the Heat Map widget in the Charts module."
---

## Introduction

A heat map shows values as colors on a grid of X and Y locations.

For the **Dimensions** and **Advanced** settings, which all charts share, see [Common Chart Properties](/appstore/widgets/charts/#common-properties). This page describes the properties that are specific to the heat map.

The heat map does not use a series list. It uses one data source and draws a value (the "heat") at each X and Y location.

## Data Source Section

* **Series** – The data source for the heat map.
* **Value attribute** – The attribute used to display the heat at an X and Y location.
* **Selection type** – Set to **Single** to let users select a cell. Other widgets can then listen to the selection.

## Axis Section

* **X Axis Attribute** – The attribute used for the horizontal (X) axis.
* **X Axis Sort Attribute** – The attribute used to sort the items on the horizontal axis. Sorting only works when the data source is **Database**. For a **Microflow** data source, sort the data in the microflow.
* **X Axis Sort Order** – **Ascending** or **Descending**.
* **Y Axis Attribute** – The attribute used for the vertical (Y) axis.
* **Y Axis Sort Attribute** – The attribute used to sort the items on the vertical axis. Sorting only works when the data source is **Database**. For a **Microflow** data source, sort the data in the microflow.
* **Y Axis Sort Order** – **Ascending** or **Descending**.

## General Section

* **Show Scale** – If set to **Yes**, a color scale is shown on the right side of the chart.

The heat map also has the **X axis label**, **Y axis label**, and **Grid lines** properties described in [General Section](/appstore/widgets/charts/#general). It does not have the **Show legend** property.

## Scale Section

* **Colors** – The list of colors to use in the heat map. Each item sets a color for a **Percentage** of the value range, between 0 and 100. Specify at least two items, for 0% and 100%. Otherwise, the default colors are used.
* **Smooth color** – If set to **Yes**, the colors form a gradual gradient between data points.
* **Show values** – If set to **Yes**, the value of each cell is shown on the chart.
* **Font value color** – The font color of the values shown on the chart.

## Events Section

* **On click action** – The action that runs when the user clicks a cell.
* **Tooltip hover text** – The text template for the message shown when the user hovers over a cell.

## Read More

* [Charts](/appstore/widgets/charts/)
* [Fine-Tune a Chart with Chart Playground](/appstore/widgets/chart-advanced-tuning/)
