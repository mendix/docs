---
title: "Chart Widgets"
parent: "pages"
tags: ["Charts", "Any Chart", "Desktop Modeler", "Pages"]
---

## 1 Introduction

You can add a wide range of charts to your app pages to display data series visually.

[Basic Charts](#basic-charts) are included in Mendix starter apps based on Atlas UI. They can be included in other Mendix apps by downloading them from the Mendix App Store here: https://appstore.home.mendix.com/link/app/105695/.

[Any Chart](#any-chart) gives much more control and implements all the features of [plotly.js](https://plot.ly/). The *Any chart* widget can be included in your Mendix app by downloading it from the Mendix App Store here: https://appstore.home.mendix.com/link/app/106517/.

## 2 Basic Charts <a name="basic-charts"></a>

With Mendix Charts you can quickly create beautiful charts. The following charts are included:

* Area Chart: a line chart with a fill to the x axis
* Bar Chart: horizontal bars, grouped or stacked
* Bubble chart: add a size dimension to your chart
* Column chart: vertical bars, grouped or stacked
* Heat map: show color data values in a 2D matrix
* Line chart: straight or curved lines, with or without markers
* Pie chart: a pie or a doughnut chart
* Time series: show time series data

The widgets contain several settings in the Desktop Modeler to customize the look and feel and also offer support for on click events and custom tooltips. See [Chart Configuration](charts-configuration) to learn how to configure Mendix charts.

### 2.1 Dynamic Series Chart

Basic charts cannot currently be used when the number of series depends on the data at runtime. In this case, you will have to use *Any Chart* instead.

## 3 Any Chart <a name="any-chart"></a>

With *Any Chart* you can build all the chart types that are possible with Plotly.js and highly dynamic charts too. If you want to build a 3D chart or have a dynamic set of series, *Any Chart* is your friend.

The plotly charts require a configuration based on JSON, therefore *Any Chart* has JSON as input parameters. You can create this JSON dynamically in your microflow via the JSON Structure document and use this in the *Any Chart* configuration. It is also possible to define static JSON configuration which is combined with the dynamic JSON.

This module also contains several building blocks for inspiration and as starting point. If you want to create a new chart, we suggest you check out the plotly.js website.

See [Any Chart Widgets](charts-any-configuration) to learn how to configure *Any charts* widgets.

## 4 Related Content

* [Any Chart Configuration](charts-any-configuration)
* [Any Chart Building Bocks](charts-any-building-bocks)
* [Any Chart Cheat Sheet](charts-any-cheat-sheet)
* [Basic Chart Cheat Sheet](charts-advanced-cheat-sheet)
