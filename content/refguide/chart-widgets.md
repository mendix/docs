---
title: "Chart Widgets"
parent: "pages"
tags: ["Charts", "Any Chart", "Desktop Modeler", "Pages"]
---

## 1 Introduction

You can add a wide range of charts to your app pages to display data series visually.

[Basic Charts](#basic-charts) are included in Mendix starter apps based on Atlas UI. They can be included in other Mendix apps by downloading them from the Mendix App Store here: https://appstore.home.mendix.com/link/app/105695/.

[Any Chart](#any-chart) gives much more control and implements all the features of [plotly.js](https://plot.ly/). The *Any chart* widget can be included in your Mendix app by downloading it from the Mendix App Store here: https://appstore.home.mendix.com/link/app/106517/.

## 2 Basic Charts {#basic-charts}

With Mendix Charts you can quickly create beautiful charts. The following charts are included:

* **Area** chart – a line chart with a fill to the x axis
* **Bar** chart – horizontal bars, grouped or stacked
* **Bubble** chart – add a size dimension to your chart
* **Column** chart – vertical bars, grouped or stacked
* **Heat map** – show data values by color in a 2D matrix
* **Line** chart – straight or curved lines, with or without markers
* **Pie** chart – a pie or a doughnut chart
* **Time series** – show data ordered by time

The widgets contain several settings which can be changed in the Modeler to customize the look and feel and also offer support for on click events and custom tooltips. See [Chart Configuration](charts-configuration) to learn how to configure Mendix charts.

**Dynamic Series Chart**

From version 1.4 of the basic charts you can create charts with a variable number of data series. For instructions on how to do this, see [How to Create a Dynamic Series Chart](/howto/extensibility/charts-dynamic-series).

## 3 Any Chart {#any-chart}

With *Any Chart* you can build all the chart types that are possible with Plotly.js. If you want to build a chart which is not available in the Basic charts, *Any Chart* is your friend.

The plotly charts require a configuration based on JSON, therefore *Any Chart* has JSON as input parameters. You can create this JSON dynamically in your microflow via a JSON Structure document and use this in the *Any Chart* configuration. It is also possible to define static JSON configuration which is combined with the dynamic JSON.

This module also contains several building blocks for inspiration and as starting point. If you want to create a new chart, we suggest you check out the plotly.js website.

See [Any Chart Widgets](charts-any-configuration) to learn how to configure *Any charts* widgets.

## 4 Related Content

* [Any Chart Configuration](charts-any-configuration)
* [Any Chart Building Bocks](charts-any-building-bocks)
* [Any Chart Cheat Sheet](charts-any-cheat-sheet)
* [Basic Chart Cheat Sheet](charts-advanced-cheat-sheet)
