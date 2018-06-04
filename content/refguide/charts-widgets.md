---
title: "Chart Widgets"
parent: "Chart Widgets"
---

{{% alert type="info" %}} Pleate note that, Charts are published trough the Mendix App Store and are included in the Atlas UI themes building blocks.
Update can be retrieved trough the Mendix App Store.
Charts: https://appstore.home.mendix.com/link/app/105695/
Any Chart: https://appstore.home.mendix.com/link/app/106517/ {{% /alert %}}

## 1 Introduction


## 2 Basic charts
With Mendix Charts you can quickly create beautiful charts. The following charts are included:

 - [Line chart](chart-configuration#22-line-chart): straight or curved lines, with or without markers
 - Area Chart: similar to the line chart with a fill to the x axis
 - Column chart: vertical bars, grouped or stacked
 - Bar Chart: horizontal bars, grouped or stacked
 - Pie chart: a pie or a doughnut chart
 - Time series: show time series data
 - Heat map: show color data values in a 2D matrix
 - Bubble chart: add a size dimension to your chart

The widgets contain several settings in the Desktop Modeler to customize the look and feel and also offer support for on click events and custom tooltips.

## 3 Dynamic Series Chart
When the the amount of series depends on the data at runtime the basic charts will not service. The Any Chart should be used. We are looking to create an other chart types for dynamic series.

## 4 Any Chart
With the AnyChart it is possible to build all the chart types that are possible with Plotly.js and it allows you build highly dynamic charts. So if you want to build a 3D chart or have a dynamic set of series, the AnyChart is your friend.

The plotly charts require a configuration based on JSON and therefore the AnyChart has JSON as input parameters. You can dynamically create this JSON in your microflow via the JSON Structure document and put it in an attribute that is configured in the AnyChart configuration. It is also possible to define static JSON configuration which is combined with the dynamic JSON.

This module also contains several building blocks for inspiration and as starting point. If you want to create a new chart, we suggest to check out the plotly.js website

### 4.1 References:
- [Any Chart Configuration](charts-any-configuration.md)
- [Any Chart Building Bocks](charts-any-building-bocks.md)
- [Any Chart Cheat Sheet](charts-any-cheat-sheet.md)
- [Basic Chart Cheat Sheet](charts-advanced-cheat-sheet.md)

## 5 Chart theming



## 4 Related Content
