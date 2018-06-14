---
title: "Chart configuration"
parent: "Chart Widgets"
---

# 1 Common configuration
The configuration that common across all charts are describe here. For chart specific configuration see below.

## 1.1 Single series
Contain a single set of data like a pie chart.

## 1.2 Multi series
Can contain multiple series of data like a chart with multiple line.

### Chart properties
#### Series
Add series and configure their properties, each series will represents a data set. For example a line in a line chart.

##### Data source
The data for each each series can origination from a different data source.

###### Series name
Name of the series, use in the legends, when enabled.

###### Entity
The entity from which the data values will be retrieved

###### Data source
Select the data source type for the series: Database, Microflow or REST endpoint

###### REST URL
Relative or full URL to REST endpoint. More information on setting up a REST end point see [REST Charts](../howto/extensibility/charts-basic-rest.md)

###### XPath constraint
The constraint on the data from the entity (used when the data source is Database)

###### Microflow
A microflow that returns a list object with data values

##### Data points

###### X-axis data attribute
For data source Database, attributes over reference are supported with a maximum of one level deep. For data source Microflow, references are not supported.

###### Y-axis data attribute
For data source Database, attribute over reference is supported with a maximal of one level deep. For data source Microflow references are not supported.

###### X-axis sort attribute
For data source Database, attribute over reference is supported with a maximal of one level deep. For data source Microflow references are not supported.

###### Sort order
The order of sorting that data provide by the "X-axis sort attribute".

##### Events

###### On click
Select the way a click of a data point should be handled. Do nothing, Show a page, Call a microflow, Call a nanoflow. Configure the corresponding setting

###### On click page
The page that will be opened on click. Required when the "On click" "Show a page" is selected.

###### Open page as
Full page, Popup or Blocking popup

###### On click microflow
The microflow that will be executed on click

###### On click nanoflow
The nanoflow that will be executed on click

###### Tooltip form
The form to show when a user hovers over a chart plot point

##### Advanced

###### Options
The Plotly series options as JSON. This options will only be used when the in the tab Advanced Mode is set to Advanced or Developer.

### Appearance
The appearance settings are use to set dimension of the chart

#### Width unit
The type of units which are used for the `Width` property: Percentage or Pixels

#### Width
The width of the chart in pixels or percentage based on the `Width unit` setting.

#### Height unit
'Percentage of width' is the aspect ratio, 'Pixels' is absolute. Warning: When using 'Percentage of parent' the parent container must have an absolute height, else nothing is displayed.

#### Height
The height in pixels or percentage based on the settings of the `Height unit`

### REST
Add parameters to REST request, The contextId, and series name are provided by default

### Advanced
There are three modes how you can use these charts:
 - Basic: quickly setup a chart with the various widget options
 - Advanced: specify additional JSON configuration
 - Developer: this will add a “Toggle Editor” button at runtime to the chart which toggles an editor to play with different settings

The charts are based on the popular framework plotly.js which uses JSON to configure the charts. Via the advanced and developer mode you can specify additional JSON unlocking the many features of plotly.js. You can do this with a live preview. See the following link for more information about plotly.js and the options: https://plot.ly/javascript/

#### Mode
The developer option adds a button to the charts when running the app which can be used to toggle a live editor for the advanced configuration options.

#### Layout options
The JSON containing the Plotly layout options
- [Samples](charts-advanced-cheat-sheet##-Layout-all-charts)
- [Full reference](https://plot.ly/javascript/reference/#layout)

#### Configuration options
The JSON containing the Plotly configuration options
- [Samples](charts-advanced-cheat-sheet###-configurations-options-all-charts) 
- [Documentation](https://plot.ly/javascript/configuration-options/)
- [Full reference](https://github.com/plotly/plotly.js/blob/master/src/plot_api/plot_config.js)

## 1.3 Dynamic series
The basic charts only support a static amount of series which can be configured in the modeler. 
Dynamic series changes during the runtime depending on the data of the application. To setup dynamic series see [Any charts](charts-any-configuration.md)
We are looking into added dynamic series into basic charts at a later moment.

# 2 Configuration per chart type
The properties above are common across the chart types. In this section the properties are described that are specific for the chart type.

## 2.1 Column Chart

## 2.2 Line Chart

### Series

#### Appearance

##### Line mode
Lines, Lines with markers

##### Line style
Straight line, Curved line (spline)

##### Line color
HTML color of the line e.g. green, #00FF00, rgb(0,255,0), rgba(0,255,0, 0.5)


## 2.3 Pie Chart

## 2.4 Area Chart

## 2.5 Bar Chart

## 2.6 Time Series Chart

## 2.7 Heat Map

## 2.8 Bubble Chart
