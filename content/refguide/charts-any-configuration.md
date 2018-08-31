---
title: "Any Chart Widgets"
parent: "chart-widgets"
description: "A reference guide on the configuration of the Any Chart widget to pass the correct values to plotly. This enables you to draw a wide variety of charts"
tags: ["Any Chart", "Reference Guide", "Options", "Configuration", "Charts"]
---

## 1 Introduction

With **Any Chart**, you can build all the chart types that are possible with Plotly.js, including 'dynamic' charts with a data-driven structure. So if you want to build a 3D chart or have a dynamic set of series, Any Chart is your friend.

The configuration of this chart type is complex and it is recommended to start by looking at the building blocks that are delivered in the [Any Chart module](https://appstore.home.mendix.com/link/app/106517/) from the Mendix App Store. Alternatively, use [How to Use Any Chart](/howto/extensibility/charts-any-usage) or the [Any Chart cheat sheet](charts-any-cheat-sheet) for a quick start.

Any Charts are configured with a JSON **Data** array and **Layout** object. The configuration can be set statically, via the **Source attribute** and **Sample data** properties.

The layout JSON, which is created dynamically or retrieved from the database, will be merged into the static settings and will overwrite any common properties.

The Sample data is for demo purposes at run time when there is no Source attribute selected or when rendering sample data in the modeler preview.

## 2 Data

The data to be plotted is described in an array, usually called data, whose elements are trace objects of various types (scatter or bar, for example) as documented in the [Full Reference](https://plot.ly/javascript/reference).

### Static

The data JSON array based on https://plot.ly/javascript/reference/.

### Source attribute

The data from this attribute will merge with, and overwrite, the **Static** data.

### Sample data

Data for previewing the chart. This will be merged with the **Static data** in the modeler or at runtime when no **Source attribute** is selected.

### Mode

**Development** mode adds a button to the charts when running the app. This button is used to toggle a live editor for testing advanced configuration options.

## 3 Layout options

The layout of the plot – non-data-related visual attributes such as the title, annotations etc – is described in a json object, usually called layout, as documented in the [Full Reference](https://plot.ly/javascript/reference/#layout).

### Static

A JSON object based on https://plot.ly/javascript/reference/.

### Source attribute

The data in an attribute containing layout information will be merged with, and will overwrite, static layout options.

### Sample layout

Layout options for preview. It will be merged with the 'Static' in the modeler or at runtime when no 'Source attribute' is selected.

## 4 Configuration options

The JSON containing the Plotly configuration options.

High-level configuration options for the plot, such as the scroll/zoom/hover behavior, is described in an object, usually called config, as [documented here](https://plot.ly/javascript/configuration-options).  
The difference between **config** and **layout** is that layout relates to the content of the plot, whereas config relates to the context in which the plot is being shown.

### Appearance

The appearance settings are use to set the dimensions of the chart.

#### Width unit

The type of units which are used for the **Width** property: Percentage or Pixels.

#### Width

The width of the chart in pixels or percentage based on the **Width unit** setting.

#### Height unit

**Percentage of width** is the aspect ratio, **Pixels** is absolute. Warning: When using **Percentage of parent** the parent container must have an absolute height, else nothing is displayed.

#### Height

The height in pixels or percentage based on the settings of the **Height unit**.

## 5 Events
Data in the any chart is not directly related to data object in the Mendix server. So the event will share chart event data. https://plot.ly/javascript/plotlyjs-events/#event-data
This JSON data is stored in the **Data attribute** and should interpreted by the developer.

### Event entity
The entity used to pass the event data to the server.

### Event data attribute
The attribute to store received raw data from the chart event. https://plot.ly/javascript/plotlyjs-events/#event-data

### On click microflow
The microflow that will be executed on click.

### On click nanoflow
The nanoflow that will be executed on click.

### Tooltip form entity
The entity that will be returned by tooltip microflow, to be used in the tooltip form.

### Tooltip microflow
The microflow called on hover receives an event object of the type **Event entity** with the **Event data attribute** containing the JSON event data. The data should interpret and an object of the type **Tooltip form entity** needs to be returned. The chart will show **Tooltip form** the returned object.

### Tooltip form
The form to show when a user hovers over a chart plot point, context uses **Tooltip entity**.

## Chart Theming

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

For guidance on how to set up chart theming see: [How to Use the Charts Theme](/howto/extensibility/charts-theme).

{{% alert type="info" %}}

Please use with caution, as the configuration set up here will be applied to every chart in your application. Only the advanced configurations set up in the widget itself have a higher precedence.

{{% /alert %}}

