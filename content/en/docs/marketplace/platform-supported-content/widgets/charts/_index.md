---
title: "Charts"
url: /appstore/widgets/charts/
description: "Describes the configuration and usage of the Charts widget, which is available in the Mendix Marketplace."
aliases:
    - /appstore/widgets/charts-plotly-images-rest/
    - /howto/front-end/charts-plotly-images-rest/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Charts](https://marketplace.mendix.com/link/component/105695/) module contains widgets that plot and compare your data in different chart types. The widgets are based on the [Plotly JavaScript](https://plotly.com/javascript/) library.

For more examples of what Charts widgets can do, see the following documents:

* [Create a Basic Chart](/appstore/widgets/charts-basic-create/)
* [Use Any Chart](/appstore/widgets/charts-any-usage/)
* [Use Custom Chart](/appstore/widgets/charts-custom-usage/)
* [Fine-Tune a Chart with Chart Playground](/appstore/widgets/chart-advanced-tuning/)
* [Use the Charts Theme](/appstore/widgets/charts-theme/)
* [Create a Multiple Series Chart](/appstore/widgets/charts-dynamic-series/)
* [Use a Chart with a REST Data Source](/appstore/widgets/charts-basic-rest/)

{{% alert color="info" %}}
This document assumes that you are using Charts widget v3.0.0 or above. To read documentation for older versions, see the [Legacy Chart Widget Documentation](#legacy-widget-docs) section below.
{{% /alert %}}

### Chart Types

The Charts module contains these widgets:

* [Area chart](/appstore/widgets/charts-area-chart/)
* [Bar chart](/appstore/widgets/charts-bar-chart/)
* [Bubble chart](/appstore/widgets/charts-bubble-chart/)
* [Column chart](/appstore/widgets/charts-column-chart/)
* [Heat map](/appstore/widgets/charts-heat-map/)
* [Line chart](/appstore/widgets/charts-line-chart/)
* [Pie chart](/appstore/widgets/charts-pie-chart/)
* [Time series](/appstore/widgets/charts-time-series/)
* Custom chart – For more information, see [Use Custom Chart](/appstore/widgets/charts-custom-usage/).
* Chart playground – For more information, see [Fine-Tune a Chart with Chart Playground](/appstore/widgets/chart-advanced-tuning/).

Area, bar, bubble, column, line, and time series charts share the series-based properties described in [Common Chart Properties](#common-properties). Heat map and pie chart use a single data source instead of a series list. For properties unique to each chart type, see the page for that chart type.

## Common Chart Properties {#common-properties}

### Data Source Section {#data-source}

#### Series {#series}

The **Series** property contains the list of data series that the chart shows. Each series is drawn as a separate line, set of bars, or set of bubbles. The order of the list influences how series overlay one another: the first series in the list is drawn lowest, and the series after it are drawn on top.

{{% todo %}}[SCR-141: Series list on the General tab of a line chart, with two series added]{{% /todo %}}

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/data-source-example.png" alt="Series property with a list of configured series" width="450px" class="no-border" >}}

You do not need to put a chart into a data view to feed data into a widget. To add a series, click **New** in the **Series** list. To change a series, select it and click **Edit**. The **Edit Series** dialog box has four tabs: **General**, **Appearance**, **Events**, and **Advanced**.

##### General Tab {#series-general}

{{% todo %}}[SCR-142: Edit Series dialog box, General tab, Data set set to Single series]{{% /todo %}}

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/series-item-example.png" alt="General tab of the Edit Series dialog box" width="450px" class="no-border" >}}

The **General** tab has these properties:

* **Data set** – Defines how the series gets its data:
    * **Single series** – One data source draws one series. This is a good option to start with. To show more data, add more **Single series** items to the list.
    * **Multiple series** – One data source draws several series, split by the **Group by** attribute. This is useful if you have a more complex data model or a microflow that returns the data for all series at once.
* **Data source** – The source of the data points for the series. Click **Edit** to set the data source type and the entity.
* **Group by** – The attribute used to split data points into groups. Each group becomes one series. This property is visible only when **Data set** is set to **Multiple series**.
* **Series name** – The series name shown in the legend. When **Data set** is set to **Multiple series**, use an attribute of the group in this text template, so each series gets its own name.
* **X axis attribute** – The attribute used for the value on the X axis.
* **Y axis attribute** – The attribute used for the value on the Y axis.
* **Aggregation function** – Defines how data is aggregated when multiple Y values are available for a single X value. Possible values are **None**, **Count**, **Sum**, **Average**, **Minimum**, **Maximum**, **Median**, **Mode**, **First**, and **Last**.
* **Tooltip hover text** – The text template for the message shown when the user hovers over a data point.

##### Appearance Tab {#series-appearance}

The **Appearance** tab contains the styling properties for the current series, such as line, marker, bar, or fill colors. These properties differ per chart type. For details, see [Chart-Specific Settings](#chart-specific-settings).

Color properties on this tab accept a CSS color value, such as `blue`, `#48B0F7`, or `rgb(72, 176, 247)`.

{{% todo %}}[SCR-143: Edit Series dialog box, Appearance tab of a line chart, Line style set to Line with markers]{{% /todo %}}

{{% alert color="info" %}}
The **Appearance** tab of the **Edit Series** dialog box only styles the data series. To style the chart widget as a whole, use its design properties, classes, and styles. For more information, see [Design Properties API](/apidocs-mxsdk/apidocs/design-properties/).
{{% /alert %}}

##### Events Tab {#series-events}

The **Events** tab contains the **On click action** property. This action runs when the user clicks a data point in this series. The action runs in the context of the object behind the data point.

##### Advanced Tab {#series-advanced}

The **Advanced** tab contains the **Custom series options** property. This property holds a JSON object with advanced configuration for this series. For more information, see [Custom Series Settings](#custom-series-settings).

### General Section {#general}

#### Show Playground Slot {#show-playground-slot}

If set to **Yes**, the chart shows a **Playground slot** in the page editor. Place a Chart playground widget in this slot to edit the chart's layout, configuration, and series settings live while the app runs. For more information, see [Fine-Tune a Chart with Chart Playground](/appstore/widgets/chart-advanced-tuning/).

{{% todo %}}[SCR-144: Line chart in the page editor with Show playground slot set to Yes and a Chart playground widget in the Playground slot]{{% /todo %}}

{{% alert color="warning" %}}
All changes made in the Chart playground are temporary. To keep your changes, copy the JSON from the playground to the **Custom layout**, **Custom configurations**, or **Custom series options** properties in Studio Pro.
{{% /alert %}}

{{% alert color="info" %}}
In Charts versions below 5.0.0, the live editor was enabled with the **Enable developer mode** property instead of a separate Chart playground widget.
{{% /alert %}}

{{% alert color="info" %}}
To see available options and useful examples, see Plotly's [JavaScript Figure Reference](https://plotly.com/javascript/reference/index/) guide.
{{% /alert %}}

#### X Axis Label and Y Axis Label {#axis-labels}

These two properties set the labels for the X and Y axis.

#### Show Legend {#show-legend}

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/chart-with-legend.png" width="450px" alt="Column chart. The legend list on right side is highlighted with red square." class="no-border" >}}

This setting controls the visibility of a chart's legend block (highlighted in the picture above). If set to **No**, the legend block is hidden.

#### Grid Lines {#grid-lines}

This property controls the horizontal and vertical grid lines of the chart:

* **None** – No grid lines are visible.
* **Horizontal** – Only horizontal grid lines are visible.
* **Vertical** – Only vertical grid lines are visible.
* **Both** – Both horizontal and vertical grid lines are visible.

### Dimensions Section {#dimensions}

The **Dimensions** tab sets the size of the chart on the page.

#### Width Unit

This property sets the unit for the widget width:

* **Percentage** – Width is a percentage of the parent width.
* **Pixels** – Width is an absolute number of pixels.

#### Width

This property sets the width of the widget. The default value is **100**.

#### Height Unit

This property sets the unit for the widget height:

* **Percentage of width** – Height is a percentage of the widget width. Use this mode to keep the aspect ratio of the chart.
* **Pixels** – Height is an absolute number of pixels. This is a good option for most cases.
* **Percentage of parent** – Height is a percentage of the parent height. This only works when the parent has a CSS `height` value.

#### Height

This property sets the height of the widget. The default value is **75**.

### Advanced Section {#advanced}

#### Enable Theme Folder Config Loading {#enable-theme-folder-config}

If set to **Yes**, this widget loads global chart settings from the `theme/web/com.mendix.charts.json` file. Before using this feature, make sure this file is present in your app. For more information, see [Use the Charts Theme](/appstore/widgets/charts-theme/).

#### Custom Layout

For more information, see the [Custom Layout](#custom-layout) section below.

#### Custom Configurations

For more information, see the [Custom Configurations](#custom-configurations) section below.

## Chart-Specific Settings {#chart-specific-settings}

Each chart type has its own properties in addition to the common properties above. For details, see the page for each chart type:

* [Area Chart](/appstore/widgets/charts-area-chart/)
* [Bar Chart](/appstore/widgets/charts-bar-chart/)
* [Bubble Chart](/appstore/widgets/charts-bubble-chart/)
* [Column Chart](/appstore/widgets/charts-column-chart/)
* [Heat Map](/appstore/widgets/charts-heat-map/)
* [Line Chart](/appstore/widgets/charts-line-chart/)
* [Pie Chart](/appstore/widgets/charts-pie-chart/)
* [Time Series](/appstore/widgets/charts-time-series/)

## Chart Customization {#customization}

### Custom Series Settings {#custom-series-settings}

The Plotly library allows you to configure each series in a chart individually.

To add custom settings to a series, do the following:

1. On the **General** tab of the chart, go to **Data source** > **Series**.
1. Select the series you want to configure, then click **Edit**.
1. Open the **Advanced** tab and paste your custom series settings object in JSON format into **Custom series options**:

    {{% todo %}}[SCR-146: Replace both images below — Series list with Edit button, and Edit Series dialog box with Advanced tab and Custom series options]{{% /todo %}}

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/custom-series-settings-step-1.png" width="450px" alt="Two dialog boxes. First shows Data source property with list of series records. Second dialog box show settings for the first series in list. Big red arrow pointing to the Advanced tab of the second dialog box." class="no-border" >}}

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/custom-series-settings-step-2.png" width="450px" alt="Settings dialog box window with Advanced tab being active and single textarea element." class="no-border" >}}

To see available series options, see the [JavaScript Figure Reference](https://plotly.com/javascript/reference/index/) in the Plotly documentation.

### Custom Layout {#custom-layout}

This property allows you to save custom layout settings for this widget.

To save custom layout settings, go to the **Advanced** tab of the chart and paste your JSON into **Custom layout**:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/custom-layout-settings.png" width="450px" alt="Settings dialog box with Advanced tab being active. Tab includes two text area on of which is focused." class="no-border" >}}

These layout settings are passed to the Plotly library. To see available options, see the [Layout](https://plotly.com/javascript/reference/#layout) section of the Plotly documentation.

### Custom Configurations {#custom-configurations}

This property allows you to save custom configuration settings for this widget.

This object is merged with the default settings and passed to the [Plotly JavaScript](https://plotly.com/javascript/) library. To see available settings and examples, see [Configuration Options in JavaScript](https://plotly.com/javascript/configuration-options/) in the Plotly documentation.

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/custom-config.png" width="450px" alt="Settings dialog box with Advanced tab being active. Tab includes two text area on of which is focused." class="no-border" >}}

## Legacy Chart Widget Documentation {#legacy-widget-docs}

Charts versions below 3.0.0 use a different set of properties, such as the **Data points** tab, the REST endpoint data source, and the **Mode** option. For the configuration options of these versions, see [Chart Configuration](/refguide/charts-configuration/) and [Advanced Configuration Settings](https://raw.githubusercontent.com/mendixlabs/charts/v1.4.4/AdvancedCheatSheet.md) in the mendixlabs/charts repository.
