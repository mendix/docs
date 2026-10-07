---
title: "Time Series"
url: /appstore/widgets/charts-time-series/
weight: 170
description: "Describes the properties of the Time Series widget in the Charts module."
aliases:
    - /appstore/widgets/time-series-chart/
---

## Introduction

A time series shows one or more series as lines over a date and time X axis.

For the properties that all series-based charts share, such as the **Series** list, **Dimensions**, and **Advanced** settings, see [Common Chart Properties](/appstore/widgets/charts/#common-properties). This page describes the properties that are specific to the time series.

The **X axis attribute** of a time series must be of the **Date and time** type.

## General Section

### Show Range Slider

If set to **Yes**, an additional range control is shown at the bottom of the chart. The default value is **Yes**.

## Advanced Section

### Y-Axis Range Mode

This property controls the range of the Y axis:

* **Auto** – The range is based on the plotted values.
* **From zero** – The Y axis starts from zero. This is the default value.
* **Non-negative** – The Y axis only shows positive values.

## Edit Series Dialog Box – Appearance Tab

* **Interpolation** – Determines the line shape:
    * **Linear** – Data points are connected with straight lines.
    * **Curved** – Data points are connected with curved lines.
* **Line style**:
    * **Line** – Draws the series as a simple line.
    * **Line with markers** – Draws a line with a marker on each data point.
    * **Custom** – Draws a line with markers as a starting point for your own style in **Custom series options**.
* **Line color** – The color of the line for this series.
* **Marker color** – The color of the markers for this series. This property is visible only when **Line style** is set to **Line with markers**.
* **Fill area** – If set to **Yes**, the area between the data points and the X axis is filled. The default value is **Yes**.
* **Area color** – The color of the filled area. By default, the line color with transparency is used. This property is visible only when **Fill area** is set to **Yes**.

{{% alert color="info" %}}
On a time series, the color properties are text templates, not expressions.
{{% /alert %}}

## Read More

* [Charts](/appstore/widgets/charts/)
* [Fine-Tune a Chart with Chart Playground](/appstore/widgets/chart-advanced-tuning/)
