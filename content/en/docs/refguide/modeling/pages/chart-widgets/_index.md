---
title: "Charts"
url: /refguide/chart-widgets/
weight: 70
no_list: false
description_list: true
description: "Describes the chart widgets you can use on your app pages."
---

## Introduction

Charts allow you to display data series visually on your app pages in a wide range of charts.

The chart widgets are part of the [Charts](https://marketplace.mendix.com/link/component/105695/) module, which you can download from the Mendix Marketplace. The widgets are based on the [Plotly JavaScript](https://plotly.com/javascript/) library. For the configuration of the chart widgets, see [Charts](/appstore/widgets/charts/) in the *Marketplace Guide*.

## Chart Types {#basic-charts}

The Charts module contains these chart widgets:

* **Area** chart – a line chart with a fill to the X-axis {{< figure src="/attachments/refguide/modeling/pages/chart-widgets/sample-area-chart.png" alt="Sample Area Chart"   width="200"  class="no-border" >}}
* **Bar** chart – horizontal bars, grouped or stacked {{< figure src="/attachments/refguide/modeling/pages/chart-widgets/sample-bar-chart.png" alt="Sample Bar Chart" width="200" class="no-border" >}}
* **Bubble** chart – add a size dimension to your chart {{< figure src="/attachments/refguide/modeling/pages/chart-widgets/sample-bubble-chart.png" alt="Sample Bubble Chart" width="200" class="no-border" >}}
* **Column** chart – vertical bars, grouped or stacked {{< figure src="/attachments/refguide/modeling/pages/chart-widgets/sample-column-chart.png" alt="Sample Column Chart" width="200" class="no-border" >}}
* **Heat map** – show data values by color in a 2D matrix {{< figure src="/attachments/refguide/modeling/pages/chart-widgets/sample-heat-map.png" alt="Sample Heat Map" width="200" class="no-border" >}}
* **Line** chart – straight or curved lines, with or without markers {{< figure src="/attachments/refguide/modeling/pages/chart-widgets/sample-line-chart.png" alt="Sample Line Chart" width="200" class="no-border" >}}
* **Pie** chart – a pie or a doughnut chart {{< figure src="/attachments/refguide/modeling/pages/chart-widgets/sample-pie-chart.png" alt="Sample Pie Chart" width="200" class="no-border" >}}
* **Time series** – show data ordered by time {{< figure src="/attachments/refguide/modeling/pages/chart-widgets/sample-time-series.png" alt="Sample Time Series" width="200" class="no-border" >}}

The widgets have settings in Studio Pro to customize the look and feel, and support on click actions and custom tooltips. For details on each chart type, see [Charts](/appstore/widgets/charts/).

If the standard chart settings are not sufficient for your purposes, see [Chart Advanced Cheat Sheet](/refguide/charts-advanced-cheat-sheet/) for information on the advanced configuration of your charts. To change settings live in the running app, use the [Chart Playground](/appstore/widgets/chart-playground/).

Only plotly.js features available in the version bundled with your Charts widget release can be used when configuring charts.

To create a chart with a variable number of data series, see [Create a Dynamic Series Chart](/appstore/widgets/charts-dynamic-series/).

## Custom Chart {#custom-chart}

With the Custom chart widget, you can build all chart types that are possible with Plotly by configuring the chart with JSON. Use it when the standard chart widgets do not support the chart you need. For more information, see [Use Custom Chart](/appstore/widgets/charts-custom-usage/).

## Any Chart {#any-chart}

{{% alert color="warning" %}}
Any Chart is deprecated and is not compatible with the [Mendix React Client](/refguide/mendix-client/react/). Use the Custom chart widget, available in [Charts](/appstore/widgets/charts/) version 6.0.0 and above, instead.
{{% /alert %}}

For the legacy Any Chart documentation, see [Any Chart Widgets](/refguide/charts-any-configuration/), [Any Chart Building Blocks](/refguide/charts-any-building-blocks/), and [Any Chart Cheat Sheet](/refguide/charts-any-cheat-sheet/).

For the legacy chart widgets below version 3.0.0, see [Chart Configuration](/refguide/charts-configuration/).

## Performing Basic Functions

{{% snippet file="/static/_includes/refguide/performing-basic-functions-widgets.md" %}}

## Documents in This Section
