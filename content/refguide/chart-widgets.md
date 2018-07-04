---
title: "Chart Widgets"
parent: "pages"
---

{{% alert type="info" %}}Please note that, Charts are published through the Mendix App Store and are included in the Atlas UI themes building blocks. Updates can be retrieved through the Mendix App Store:<br />
* [Charts](https://appstore.home.mendix.com/link/app/105695/)
* [AnyChart](https://appstore.home.mendix.com/link/app/106517/)
{{% /alert %}}

## 1 Basic Charts

With Mendix Charts, you can quickly create beautiful charts. The following charts are included:
 - Line chart: straight or curved lines, with or without markers
 - Area Chart: similar to the line chart with a fill to the x axis
 - Column chart: vertical bars, grouped or stacked
 - Bar Chart: horizontal bars, grouped or stacked
 - Pie chart: a pie or a doughnut chart
 - Time series: show time series data
 - Heat map: show color data values in a 2D matrix
 - Bubble chart: add a size dimension to your chart

The widgets contain several settings in the Desktop Modeler to customize the look and feel and also offer support for on click events and custom tooltips.

## 2 Dynamic Series Chart

When the amount of series depends on the data at runtime, the basic charts will not suffice. The Any Chart should be used instead. We are looking to create an other chart types for dynamic series.

## 3 Any Chart

With the Any Chart,you can build all the chart types that are possible with Plotly.js and highly dynamic charts too. So if you want to build a 3D chart or have a dynamic set of series, the Any Chart is your friend.

The plotly charts require a configuration based on JSON and therefore the Any Chart has JSON as input parameters. You can dynamically create this JSON in your microflow via the JSON Structure document and put it in an attribute that is configured in the AnyChart configuration. It is also possible to define static JSON configuration which is combined with the dynamic JSON.

This module also contains several building blocks for inspiration and as starting point. If you want to create a new chart, we suggest to check out the plotly.js website

### 3.1 References

- [Any Chart Configuration](charts-any-configuration)
- [Any Chart Building Bocks](charts-any-building-bocks)
- [Any Chart Cheat Sheet](charts-any-cheat-sheet)
- [Basic Chart Cheat Sheet](charts-advanced-cheat-sheet)

## 4 Chart Theming

Advanced JSON settings can also be added in a global context via the theme folder of your mendix project root directory.

To the theme folder, add a `.json` file named *com.mendix.charts*. The JSON should be in the following format:

``` json
{
  "layout": {
    // Add shared layout options here (for all charts)
  },
  "configuration": {
    // Add shared configuration options here (for all charts)
  },
  "charts": {
    "LineChart": {
      "layout": {
        // Add line chart only layout options here
      },
      "data": {
        // Add line chart only data options here
      },
      "configuration": {
          // Add line chart only configuration options here
      }
    },
    "AreaChart": {
      // Same arrangement as the line chart
    },
    "BubbleChart": {
      // Same arrangement as the line chart
    },
    "TimeSeries": {
      // Same arrangement as the line chart
    },
    "ColumnChart": {
      // Same arrangement as the line chart
    },
    "BarChart": {
      // Same arrangement as the line chart
    },
    "PieChart": {
      // Same arrangement as the line chart
    },
    "HeatMap": {
      // Same arrangement as the line chart
    }
  }
}
```

{{% alert type="info" %}}

Please use with caution, as the configuration set up here shall be applied to every instance of the charts in your application.  
Only the advanced configurations set up in the widget itself have a higher precedence.

{{% /alert %}}
