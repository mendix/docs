---
title: "Any Chart Widgets"
url: /refguide/charts-any-configuration/
description: "A reference for the configuration of the Any Chart widget to pass the correct values to plotly. This enables you to draw a wide variety of charts"
weight: 30
tags: ["Any Chart", "Options", "Configuration", "Charts", "studio pro"]
---

## 1 Introduction

With **Any Chart**, you can build any chart type that is supported by Plotly.js up to the version mentioned in the widget description in the Marketplace. So if you want to build a chart which is not available as a standard chart widget, such as a 3D chart, Any Chart is your friend.

The configuration of this chart type is complex. For help, you can look at the **building blocks** that are delivered in the [Any Chart](/appstore/modules/any-chart/) module from the Mendix Marketplace. Alternatively, use [How to Use Any Chart](/howto/front-end/charts-any-usage/) or the [Any Chart cheat sheet](/refguide/charts-any-cheat-sheet/) for a quick start.

Any Charts are configured with a JSON **Data** array and **Layout** object. The configuration can be set statically, via the **Source attribute** and **Sample data** properties.

The layout JSON, which can be created dynamically or retrieved from the database, will be merged into the static settings and will overwrite any common properties.

The Sample data is for demo purposes. It is shown at run time when there is no Source attribute selected, and when rendering the chart in Studio Pro preview.

## 2 Location of Any Chart Widget

The Any Chart Widget must be placed in the context of a **data view**. The data view contains an entity object which has a **Source attribute** (unlimited length string) which contains the JSON representation of the data which you want to plot. Unlike the basic chart widgets, the Any Chart widget does not work directly on the data in your domain model. You have to convert the data you want to plot into the JSON format which Any Chart expects. See [How to Use Any Chart](/howto/front-end/charts-any-usage/) for a step-by-step explanation of how to do this.

## 3 Data

The data to be plotted is described in an array. The elements of this array are the points to be plotted on the selected chart type (scatter or bar, for example) as documented in the [Full Reference](https://plot.ly/javascript/reference).

### 3.1 Static

A JSON array (based on https://plot.ly/javascript/reference/) which contains the *static* parts of the chart description. These is the default description of the chart and could be, for example, the type of chart which you want to plot.

### 3.2 Source Attribute

This is an unlimited string attribute which is an attribute of the entity which forms the context of the data view in which the **Any Chart** widget is placed.

In the image below, the **Source attribute** is the *data* attribute of the *ChartContext* entity which is the data view context in which the Any Chart widget is placed.

{{< figure src="/attachments/refguide/modeling/pages/chart-widgets/charts-any-configuration/any-chart-page-placement.png" >}}

The **Source attribute** contains a JSON structure which will merge with, and overwrite, the **Static** data. Commonly, this contains the data which you wish to plot, but it can also overwrite other static elements such as the type of chart, colors of lines, or the orientation of bars in a bar chart.

### 3.3 Sample data

The data for previewing the chart. This will be merged with the **Static data** in Studio Pro or at runtime when no **Source attribute** is selected.

### 3.4 Mode

**Development** mode adds a button to the charts when running the app. This button is used to toggle a live editor for testing advanced configuration options.

**Production** mode removes this button so that the user sees the chart as you have designed it.

## 4 Layout options

The layout of the plot – non-data-related visual attributes such as the title, annotations etc. – is described in a JSON object as documented in the [Full Reference](https://plot.ly/javascript/reference/#layout).

### 4.1 Static

A JSON object describing the default layout of the chart based on https://plot.ly/javascript/reference/.

### 4.2 Source Attribute

This is an unlimited length string attribute of the entity which forms the context of the data view in which the **Any Chart** widget is placed. It contains a JSON structure which will merge with, and overwrite, the **Static** layout. This allows you to dynamically change layout information from within your app.

### 4.3 Sample layout

Layout options for preview. It will be merged with the *Static* layout in Studio Pro or at runtime when no *Source attribute* is selected.

## 5 Configuration options

The JSON containing the plotly high-level configuration options for the plot, such as the scroll/zoom/hover behavior. These high-level configuration options are documented here: https://plot.ly/javascript/configuration-options.

The difference between **config** and **layout** is that layout relates to the content of the plot, whereas config relates to the context in which the plot is being shown. The **Any Chart** widget does not allow the configuration options to be changed dynamically in your app.

## 6 Appearance

The appearance settings are use to set the dimensions of the chart.

### 6.1 Width Unit

The type of unit which is used for the **Width** property: *Percentage* or *Pixels*.

### 6.2 Width

The width of the chart in pixels or as a percentage, based on the **Width unit** setting.

### 6.3 Height unit

**Percentage of width** allows you to change the aspect ratio, **Pixels** is an absolute measure, and **Percentage of parent** allows you to set the height in relation to the parent container.

{{% alert color="warning" %}}
Warning: When using **Percentage of parent** the parent container must have an absolute height, else nothing is displayed.
{{% /alert %}}

### 6.4 Height

The height in pixels or as a percentage based on the settings of the **Height unit**.

## 7 Events

The **Any Chart** widget supports two sorts of event, related to the points plotted on the chart:

* **hover**: which resolves as a *Tooltip* request
* **click**: which resolves as an *On click* event

{{% alert color="info" %}}
Events will be triggered by hovering over or clicking on the points plotted on the chart. Clicks on other parts of the chart will NOT trigger an event.
{{% /alert %}}

{{% alert color="info" %}}
Preventing the hover event from triggerring will also prevent the click event from triggering. This includes setting the layout parameter `hovermode` to `false` and setting the data parameter `hoverinfo` to `skip`.
{{% /alert %}}

When an event occurs, plotly will return a JSON object as described here: https://plot.ly/javascript/plotlyjs-events/#event-data. This JSON data is stored in a string attribute of an entity object which is passed to **Any Data**. The JSON contains raw data from the chart which has been plotted, such as the x and y coordinates of the point, and needs to be interpreted in the microflow which is triggered by the event.

### 7.1 Event Entity

The entity used to receive the event data from plotly. This needs to contain a string attribute which will hold the event data.

### 7.2 Event Data Attribute

The string attribute where the JSON data from the chart event is stored.

### 7.3 On Click Microflow

The microflow that will be executed when a data point on the chart is clicked on. This will have the **Event entity** as context.

### 7.4 On Click Nanoflow

The nanoflow that will be executed when a data point on the chart is clicked on. This will have the **Event entity** as context

### 7.5 Tooltip Form Entity

When a **Tooltip microflow** is triggered by a plotly hover event, it needs to return an entity object which forms the context of the **Tooltip form**.

The entity that is returned by the tooltip microflow is identified here. It does not have to be the **Event entity** which is the context of the **Tooltip microflow**. The developer can determine and populate the attributes and associations of the entity based on the data displayed by the Tooltip form and the information provided in the **Event entity** by the hover event. 

### 7.6 Tooltip Microflow

The microflow identified here is called by an on hover event received from plotly. It receives an event object of the type **Event entity** with the **Event data attribute** containing the JSON event data. The data should be interpreted and an object of type **Tooltip form entity** returned. This will form the context of the **Tooltip form**.

### 7.7 Tooltip Form

The form to show when a user hovers over a chart plot point. It has the context **Tooltip entity**. The form is displayed while the mouse is over a point which is plotted on the chart. It is closed automatically when the mouse is not over a plotted point.

## 8 Chart Theming

Advanced JSON settings can also be added in a global context via the theme folder of your Mendix app root directory.

To the theme folder, add a *.json* file named *com.mendix.charts*. The JSON should be in the following format:

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

For guidance on how to set up chart theming see: [How to Use the Charts Theme](/howto/front-end/charts-theme/).

{{% alert color="info" %}}

Please use with caution, as the configuration set up here will be applied to every chart in your application. Only the advanced configurations set up in the widget itself have a higher precedence.

{{% /alert %}}

## 9 Strict CSP Compatibility

This widget is not yet fully compliant with strict content security policy (CSP). If used with strict CSP, it will result in visual defects.
