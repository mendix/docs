---
title: "Charts"
url: /appstore/widgets/charts/
description: "Describes the configuration and usage of the Charts widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Charts](https://marketplace.mendix.com/link/component/105695/) widget enables plotting and comparing your data across different charts.

For more examples of what Charts widgets can do, see the following documents:

* [Create a Basic Chart](/appstore/widgets/charts-basic-create/)
* [Use Any Chart](/appstore/widgets/charts-any-usage/)
* [Fine-Tune a Chart with Advanced Settings](/appstore/widgets/chart-advanced-tuning/)
* [Use the Charts Theme](/appstore/widgets/charts-theme/)
* [Create a Dynamic Series Chart](/appstore/widgets/charts-dynamic-series/)
* [Use a Chart with a REST Data Source](/appstore/widgets/charts-basic-rest/)
* [Use the Plotly Images REST Service Endpoint](/appstore/widgets/charts-plotly-images-rest/)

{{% alert color="info" %}}
This document assumes that you are using Charts widget v3.0.0 or above. To read documentation for older versions, see the [Legacy Chart Widget Documentation](#legacy-widget-docs) section below.
{{% /alert %}}

These are the available charts:

* Column chart
* Line chart
* Pie chart
* Area chart
* Bar chart
* Time series chart
* Heat chart
* Bubble chart

## Common Chart Properties

### Data Source

#### Series

The **Series** property makes it easy to configure, control, and modify a chart series:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/data-source-example.png" width="450px" class="no-border" >}}

You do not need to put a chart into a data view to feed data into a widget. When you click the **New** button on a series panel, the **Edit Series** dialog box will be shown:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/series-item-example.png" width="450px" class="no-border" >}}

In this dialog box you will find these properties:

* **Data set**
    * **Single** – This represents controls for a single set of dates. This is good option to start with, as you can have multiple **Single** series. 
    * **Multiple** – This is useful if you have a more complex data model or a microflow which could be used as data source for your chart. In this case you must specify which attribute to use as the **Series name**, otherwise your widget will be unable to visualize your data correctly.
* **Data source** – This property controls your data set's type and source. If you click **Edit** you will see a **Data source edit** dialog box where you specify the data series retrieval location.
* **Group by** – This is the attribute used to split items into groups (visible only when **Data set** is set to **Multiple**).
* **Series name** – This property controls the legend of a data series.
* **X axis attribute** – This is the attribute used to get a value for the X axis (visible only when **Data source** is set).
* **Y axis attribute** – This is the attribute used to get a value for the Y axis (visible only when **Data source** is set).
* **Aggregation function** – This attribute defines how data is aggregated when multiple Y values are available for a single X value.
* **Tooltip hover text** – This is the text template used to customize the message shown to user upon a cursor hovering over the series.

Beside the **General** tab you will find 3 more tabs in the **Edit Series** dialog box:

* **Appearance** – This lists properties which allow you to modify styling for the current data series. In most cases there will be color properties.
* **Events** – This lists possible event triggers.
* **Advanced** – This uses one field which will hold a JSON object with advanced configuration for this data series.

### General

#### Enable Developer Mode

{{% alert color="warning" %}}
All changes made in the developer editor are temporary. To save your progress, copy the settings from the **Custom settings** area to the **Chart settings** in Studio Pro.
{{% /alert %}}

When set to **Yes** this property enables **Developer mode** for the selected chart. After enabling **Developer mode** you will see a **Toggle Editor** button. When clicked, this button opens the **Chart settings** panel:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/toggle-editor-button.png" width="350px" alt="Toggle Editor button in top right corner of the chart widget." class="no-border" >}}

This developer mode panel is a live settings editor, meaning that your changes will be instantly applied to the current chart.

At the top of the panel there is a drop-down list which shows the currently selected settings group. By default each chart has a **Layout** group and **Configuration** group—these groups control chart and layout settings. Also, in this drop-down list you will find named groups that allow you to configure chart settings per series:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-dev-panel.png" width="350px" alt="Panel with dropdown on top and textarea below. Textarea content is a JSON object." class="no-border" >}}

{{% alert color="info" %}} 
To see available options and useful examples, see Plotly's [JavaScript Figure Reference](https://plotly.com/javascript/reference/index/) guide. 
{{% /alert %}}

For more information on saving custom settings for a chart, see the [Chart customization](#customization).

#### Show Legend

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/chart-with-legend.png" width="450px" alt="Column chart. The legend list on right side is highlighted with red square." class="no-border" >}}

This setting controls the visibility of a chart's legend block (highlighted in the picture above). If set to **no**, then the legend block is hidden.

#### X Axis Label and Y Axis Label

These two properties control labels for the X and Y axis respectively.

#### Grid Lines

This property controls horizontal and vertical rulers of the chart:

* **None** – No rulers are visible.
* **Horizontal** – Only a horizontal ruler is visible.
* **Vertical** – Only a vertical ruler is visible.
* **Both** – Both types of rulers are visible.

## Dimensions

### Width Unit

This property controls the unit measuring the widget (it can be **percentage** or **pixels**).

### Width

This property controls width of the widget.

### Height Unit

This property controls the unit for measuring widget height:

* **Percentage of width** – Height is measured relative to widget width (use this mode to keep width and height in aspect ratio).
* **Pixels** – This uses pixels as height unit (a good option for most cases).
* **Percentage of parent** – Height is measured relative to a parent **height** property (only works when parent has **height** CSS property).

### Height

This property controls height of the widget.

## Advanced

### Enable Theme Folder Config

If set to **Yes** this widget will try to load global chart settings specified in the *theme/web/com.mendix.charts.json* file. Before using this feature make sure this file is present in your app.

### Custom Layout

Please, find more details in [Custom Layout](#custom-layout) in customization section.

### Custom Configurations

Please, find more details in [Custom Configurations](#custom-configurations) in customization section.

## Chart-Specific Settings

### Area Chart

#### Edit Series Item Dialog

##### Appearance

* **Interpolation** – Determines the line shape. Could be  **linear** or **curved**. In **linear** mode dots will be connected using straight lines, in **curved** they will be connected using curved lines.
* **Line style**
    * **Line** – Draws a series as simple line.
    * **Line with markers** – Draws a line with markers on top of each dot.
    * **Custom** – Makes a custom line style for series.
* **Line color** – The color used to fill line for this data series.
* **Area fill color** – The color used to fill area for this data series.

### Bar Chart

#### General

##### Bar Format

This setting controls the bar format. In the **group** format, bars go one below the other. In the **stacked** format, bars are stacked on top of one another forming one line.

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/bar-chart-formats.png" width="450px" alt="Two bar charts. On the left bar chart lines in group go one below other. On the right chart, lines in group stacked on top of each other, forming one big line." class="no-border" >}}

#### Edit Series Item Dialog

##### Appearance

* **Bar color** – The color used to fill line for this data series.

### Bubble Chart

#### Edit Series Item Dialog

##### General

* **Bubble Size Attribute** – This attribute controls bubble size for a given item in series.
* **Auto Scale** – If **Yes** then bubble size and proportions will be computed automatically (otherwise the value from **Scale factor** will be used).
* **Scale Factor** – This controls the scale factor of bubbles on a chart. This value will be used to determine the final bubble size by multiplying current scale factor value and value from the bubble size attribute.

##### Appearance

* **Marker color** – The color used to fill marker for this data series.

### Column Chart

#### General

##### Column Format

This setting controls a chart's format. In the **group** format, columns go one after another. In the **stacked** format columns from each series will be stacked on top of each other. 

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/column-chart-format-grouped-vs-stacked.png" alt="Two column charts. On the left chart columns go one after another. On the right chart pairs of columns stacked on each other, each pair go one after another." title="Two format types of column chart, where group format is present on the left and stack format is present on the right." class="no-border" >}}

#### Edit Series Item Dialog

##### Appearance

* **Column color** – The color used to fill columns for this data series.

### Heat Map

#### Data Source

##### Value attribute

The entity attribute used to retrieve value for z axis (aka heat).

#### Axis

##### X Axis Attribute

This is a value for a chart's horizontal (x) axis.

##### X Axis Sort Attribute

The attribute to used when sorting items in series for horizontal axis.

##### Y Axis Attribute

This is a value for a chart's vertical (y) axis.

##### Y Axis Sort Attribute

The attribute to used when sorting items in series for vertical axis.

#### General

##### Show Scale

If set to **Yes** then show scale on the right side of the chart.

#### Scale

##### Colors

Allow to specify list of colors to use in the heat map. Each item define color for value in percentage. At least two values needs to be specified, for 0% and 100%, else the default colors are used.

##### Smooth Color

If set to **Yes** then show scale as smooth gradient between two colors.

##### Show Values

If set to **Yes** then show value for each dot on chart.

##### Font Value Color

The font color to display values for each dot.

### Line Chart

#### Edit Series Item dialog

##### Appearance

* **Interpolation** – This determines the line shape: **linear** or **curved**. In **linear** mode dots will be connected using straight lines, in **curved** they will be connected using curved lines.
* **Line style**
    * **Line** – Draws a series as a simple line.
    * **Line with markers** – Draws a line with markers on top of each dot.
    * **Custom** – A custom line style for a series.
* **Line color** – The color used to fill line for this data series.
* **Area fill color** – The color used to fill area for this data series.

### Pie Chart

#### Data Source

##### Series Name

This property allows for an expression that when evaluated will return a unique name for a single series:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/pie-chart-series-name-example.png" width="450px" class="no-border" >}}

{{% alert color="warning" %}} 
This property is required. 
{{% /alert%}}

##### Value Attribute

The attribute used to retrieve value for an item in the series.

##### Sort Attribute

The attribute used to sort items in the series.

##### Slice Color

Text template used to get color value for an item. Can use attributes as parameters.

#### General

##### Hole Radius

A percentage between 0 an 100 indicating the radius of the hole in the pice chart relative to the chart itself. Defaults to 0.

### Time Series

#### General

##### Show Range Slider

If set to **Yes** then show additional range control at the bottom of chart.

#### Edit Series Item Dialog

##### Appearance

* **Interpolation** – Determines the line shape. Could be  **linear** or **curved**. In **linear** mode dots will be connected using straight lines, in **curved** they will be connected using curved lines.
* **Line style**
    * **Line** – Draws a series as a simple line.
    * **Line with markers** – Draws a line with markers on top of each dot.
    * **Custom** – Makes a custom line style for a series.
* **Line color** – The color used to fill line for this data series.
* **Fill area** – If set to **Yes** then fill area between data point and x-axis.
* **Area fill color** – The color used to fill area for this data series.

## Chart Customization {#customization}

### Custom Series Settings

Our underlying graphics library has a flexible API which allows you to configure each series in a chart individually.

To navigate to a series' custom settings, do the following:

1. Go to **Chart settings** > **Data Source** > **Series**. 
1. Select the series you want to configure, then click **Edit**.
1. Open the **Advanced** tab and paste your custom series settings object there (in JSON format):

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/custom-series-settings-step-1.png" width="450px" alt="Two dialog boxes. First shows Data source property with list of series records. Second dialog box show settings for the first series in list. Big red arrow pointing to the Advanced tab of the second dialog box." class="no-border" >}}

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/custom-series-settings-step-2.png" width="450px" alt="Settings dialog box window with Advanced tab being active and single textarea element." class="no-border" >}}

### Custom Layout {#custom-layout}

This property allows you to save your custom **Layout** settings for this widget.

To save your custom settings that related to the **Layout** group, navigate to the **Advanced** tab and paste your JSON in **Custom layout** text area:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/custom-layout-settings.png" width="450px" alt="Settings dialog box with Advanced tab being active. Tab includes two text area on of which is focused." class="no-border" >}}

These layout settings will be passed to the underlying Plotly JavaScript library. To see available options and their description. Visit the [Layout](https://plotly.com/javascript/reference/#layout) section of the *Plotly Reference Guide*. 

### Custom Configurations {#custom-configurations}

This property allows you to save your custom **Configuration** settings for this widget.

This object will be merged with default settings and passed to the underlying [Plotly JavaScript](https://plotly.com/javascript/) library. To see available settings and examples check the [Configuration Options in JavaScript](https://plotly.com/javascript/configuration-options/) section of the *Plotly Reference Guide*.

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/custom-config.png" width="450px" alt="Settings dialog box with Advanced tab being active. Tab includes two text area on of which is focused." class="no-border" >}}

## Legacy Chart Widget Documentation {#legacy-widget-docs}

{{% alert color="warning" %}}
This widget is experiencing rendering issues in Studio Pro's **Design mode**. The behavior is under investigation.
{{% /alert %}}

### Introduction

The [Charts](https://marketplace.mendix.com/link/component/105695/) widget enables plotting and comparing your data across different charts.

These are the available charts:

* Column chart
* Line chart
* Pie chart
* Area chart
* Bar chart
* Time series chart
* Heat chart
* Bubble chart

### Basic Configuration

#### Line Chart {#line-chart}

A **Line chart** (scatter chart) should have one or more series, each displaying commonly grouped data points.

A series' data can be retrieved from the database, by a microflow, or from a REST endpoint:

1. Place the widget in a page within the context of an entity.
2. Select the either **Static** or **Dynamic** for the **Series**.
3. Select a **Data entity** for the chart values.
4. Select the **Data source**:
    * If the **Data source** selected is **Database**, optionally change the **XPath constraint**
    * If the **Data source** selected is **Microflow,** select a **Microflow** that returns the series values
    * If the **Data source** selected is **REST endpoint**, enter the **REST URL**
5. If you set a **Dynamic** series, this will retrieve all the chart series in one configuration. Add configurations for them on the **Dynamic series** tab.

{{% alert color="info" %}}
The line chart's X-axis provides support for dates, and thus the line chart can be configured as a [time series chart](#time-series).
{{% /alert %}}

#### Area Chart

The **Area chart** has data properties identical to those of the [Line chart](#line-chart).

#### Column Chart {#column-chart}

The **Column chart** has data properties identical to those of the [Line chart](#line-chart). However, there is no support for the **Date and time** data type.

#### Bar Chart

The **Bar chart** has data properties identical to those of the [Column chart](#column-chart). 

#### Pie Chart {#pie-chart}

Unlike the chart types above, the **Pie chart** requires no series. 

These are the properties for configuring Pie chart data:

* **Data source** tab
    * **Entity** (required) – the entity from which the data values will be retrieved
* **Data points** tab
    * **Name attribute** (required) – the attribute that contains the data point captions
    * **Value attribute** (required) – the attribute that contains the data point values
    * **Color attribute** (required) – the attribute that contains the data point colors
    * **Sort attribute** – the attribute to use for sorting the X-axis data

#### Time Series Chart {#time-series}

The **Time series chart** is a specialised version of the [Line chart](#line-chart), focusing on the X-axis dates. Therefore, it has data properties identical to those of the line chart.

#### Heat Map

The **Heat map** should be configured with required horizontal, vertical, and data attributes.

The sample domain model could be either of the two configurations below:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/heat-map.png" class="no-border" >}}

#### Bubble chart

The **Bubble chart** has data properties identical to those of the [Line chart](#line-chart). However, the **Bubble size data** attribute is required, as it contains and determines the size of the bubble.

### Advanced Configuration

The charts in this widget are based on the [mendixlabs/charts](https://github.com/mendixlabs/charts/issues) library. As such, the widget provides support for advanced users to extend or overwrite the basic settings by adding the chart properties as JSON.

To enable this feature, go to the **Mode** option in the **Advanced** properties tab. For the [Line chart](#line-chart) and [Column chart](#column-chart), each series has its own **Advanced** tab for specialized configurations.

The available advanced options and their usage are described below.

#### Layout Options for All Charts

The layout options control the general appearance of a chart. Common options include `title`, `showlegend`, `xaxis`, and `yaxis`. 

```json
{
  "showlegend": true,
  "legend": {
    "orientation": "h",
    "y": "auto"
  }
}
```

#### Configurations Options for All Charts

Configuration options control the appearance of a chart beyond the layout options. Common options include `displayModeBar` and `doubleClick`.

```json
{
  "displayModeBar": true,
  "doubleClick": true,
  "displaylogo": false
}
```

For more details, see the [Advanced Configuration Settings](https://raw.githubusercontent.com/mendixlabs/charts/v1.4.4/AdvancedCheatSheet.md).

#### Data Options for the Pie Chart

On the [Pie chart](#pie-chart), the data options control the appearance of the pie circle beyond the general layout options. Options include `hole`, `name`, and `marker`.

```json
{
  "hole": 0.5
}
```

For more details, see the [Advanced Configuration Settings](https://raw.githubusercontent.com/mendixlabs/charts/v1.4.4/AdvancedCheatSheet.md).

#### Series Options for the Line and Column Charts

The series options control the appearance of a specific series on the [Line chart](#line-chart) and [Column chart](#column-chart). Options include `line color` and `line shape`.

For the full Plotly API reference, see [JavaScript Figure Reference](https://plot.ly/javascript/reference/).

#### Theme-Based Advanced Configuration

The settings above can also be added in a global context via the **theme** folder of your Mendix app root directory.

Add a *.json* file named *com.mendix.charts* to the **theme** folder. The JSON should be in the following format:

```json
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

{{% alert color="warning" %}}
Use this with caution, as the configs set up here shall be applied to every instance of the charts in your application. Only the advanced configurations set up in the widget itself have a higher precedence.
{{% /alert %}}

### Read More

* [Charts Configuration](/refguide/charts-configuration/)
