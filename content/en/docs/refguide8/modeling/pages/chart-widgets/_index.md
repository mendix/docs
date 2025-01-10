---
title: "Chart Widgets"
url: /refguide8/chart-widgets/
weight: 70
no_list: false
description_list: true 
---

## Introduction

Chart widgets allow you to display data series visually on your app pages in a wide range of charts.

[Basic Charts](#basic-charts) are included in Mendix app templates based on Atlas UI. They can be included in other Mendix apps by downloading them from the Mendix Marketplace (for more information, see [Charts](/appstore/widgets/charts/)). Basic charts are based on version 1.47.4 of plotly.js.

[Any Chart](#any-chart) gives much more control and allows more flexible use of the features of [plotly.js](https://plot.ly/). The [Any Chart](/appstore/modules/any-chart/) widget can be included in your app. See the widget documentation for what version of plotly.js is supported.

## Basic Charts {#basic-charts}

With Mendix Charts you can quickly create beautiful charts. The following charts are included:

* **Area** chart – a line chart with a fill to the X-axis {{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/sample-area-chart.png" alt="Sample Area Chart"   width="200"  class="no-border" >}}
* **Bar** chart – horizontal bars, grouped or stacked {{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/sample-bar-chart.png" alt="Sample Bar Chart" width="200" class="no-border" >}}
* **Bubble** chart – add a size dimension to your chart {{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/sample-bubble-chart.png" alt="Sample Bubble Chart"  width="200" class="no-border" >}}
* **Column** chart – vertical bars, grouped or stacked {{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/sample-column-chart.png" alt="Sample Column Chart" width="200" class="no-border" >}}
* **Heat map** – show data values by color in a 2D matrix {{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/sample-heat-map.png" alt="Sample Heat Map" width="200" class="no-border" >}}
* **Line** chart – straight or curved lines, with or without markers {{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/sample-line-chart.png" alt="Sample Line Chart" width="200" class="no-border" >}}
* **Pie** chart – a pie or a doughnut chart {{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/sample-pie-chart.png" alt="Sample Pie Chart" width="200" class="no-border" >}}
* **Time series** – show data ordered by time {{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/sample-time-series.png" alt="Sample Time Series" width="200" class="no-border" >}}

The widgets contain several settings which can be changed in Studio Pro to customize the look and feel and also offer support for on click events and custom tooltips. See [Chart Configuration](/refguide8/charts-configuration/) to learn how to configure Mendix charts.

If the standard chart settings are not sufficient for your purposes, see [Chart Advanced Cheat Sheet](/refguide8/charts-advanced-cheat-sheet/) for information on advanced configuration of your basic charts.

Note that only features up to version 1.47.4 of plotly.js can be used when configuring charts.

**Dynamic Series Chart**

From version 1.4 of the basic charts you can create charts with a variable number of data series. For instructions on how to do this, see [How to Create a Dynamic Series Chart](/howto8/front-end/charts-dynamic-series/).

## Any Chart {#any-chart}

With *Any Chart* you can build all the chart types that are possible with Plotly.js up to the version supported by the widget (see the widget description in the Marketplace for more details). If you want to build a chart which is not available in the Basic charts, *Any Chart* is your friend.

{{< figure src="/attachments/refguide8/modeling/pages/chart-widgets/contour.png" alt="Sample Contour Chart made with Any Chart"   width="400"  class="no-border" >}}

The plotly charts require a configuration based on JSON, therefore *Any Chart* has JSON as input parameters. You can create this JSON dynamically in your microflow via a JSON Structure document and use this in the *Any Chart* configuration. It is also possible to define static JSON configuration which is combined with the dynamic JSON.

This module also contains several [building blocks](/refguide8/charts-any-building-blocks/) for inspiration and as starting point. If you want to create a new chart, Mendix suggests checking out the plotly.js website.

See [Any Chart Widgets](/refguide8/charts-any-configuration/) to learn how to configure *Any charts* widgets.

The [Any Chart Cheat Sheet](/refguide8/charts-any-cheat-sheet/) lists the most common chart types and the JSON required to create them in Any Chart.

## Performing Basic Functions

{{% snippet file="/static/_includes/refguide8/performing-basic-functions-widgets.md" %}}

## Documents in This Section
