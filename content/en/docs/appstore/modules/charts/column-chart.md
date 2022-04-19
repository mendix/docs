---
title: "Column Chart"
url: /appstore/modules/charts/column-chart
parent: "charts"
description: "Describes the configuration and usage of the Column Chart widget, which is available as part of Charts module in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "charts", "platform support", "column", "data", "visualisation"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{< figure src="/attachments/appstore/modules/charts/ColumnChart.png" alt="Column chart showing set of columns of different height with blue and orange color." >}}



## Introduction

{{% alert color="danger" %}} **TODO:** Add introduction {{% /alert%}}

## Data Source

{{% alert color="danger" %}} **TODO:** Discuss where to host this section as this will be same almost for all chart widgets. {{% /alert%}}

## General

### Enable developer mode

{{% alert color="warning" %}}
**Warning**: All changes made in dveloper editor are not permanent. That means that to save your progress you should copy settings from "Custom settings" area to chart settings in Studio Pro.
{{% /alert %}}


This property when set to "yes" enable *Developer mode* for selected chart. After enabling Developer mode you will see "Toggle Editor" button which when clicked should open chart settings panel. 


{{< figure src="/attachments/appstore/modules/charts/toggle-editor-button.png" alt="Toggle Editor button in top right corner of the chart widget." >}}


This dev mode panel is "live" settings editor which means that all your changes will be instantly applied to the current chart.

At the top of the panel you should see dropdown which controls which settings group is currently selected. By default each chart has **Layout** group and **Configuration** group — this groups control chart and layout settings. Also, in this dropdown you will find named groups that allow you to configure chart settings per series.


{{< figure src="/attachments/appstore/modules/charts/charts-dev-panel.png" title="Custom settings for Microsoft series in column chart" alt="Panel with dropdown on top and textarea below. Textarea content is a JSON object." >}}

{{% alert color="info" %}} **Note**: To get in deep docs on available options and many useful examples you can visit [Figure Reference](https://plotly.com/javascript/reference/index/) guide on plotly website. {{% /alert %}}



Please, visit [Advanced/Custom layout](#custom-layout) and [Advanced/Custom configurations](#custom-configurations) sections to get more information on how you can save your custom settings for the chart.


#### Custom series settings

Our underlying graphics library has really flexible API which allow you configure each *series* in char individually.

To navigate to series custom settings perform next simple steps:

{{< figure src="/attachments/appstore/modules/charts/custom-series-settings-step-1.png" alt="Two dialog windows. First shows Data source property with list of series records. Second dialog show settings for the first series in list. Big red arrow pointing to the Advnaced tab of second dialog." >}}

1. Go to chart settings, Data Source, Series. Select series you want to configure. Click Edit.
2. Open "Advanced" tab and paste your custom series settings object (in JSON format).

{{< figure src="/attachments/appstore/modules/charts/custom-series-settings-step-2.png" alt="Settings dialog window with Advanced tab being active and single textarea elemnt." >}}


### Show legend

{{< figure src="/attachments/appstore/modules/charts/chart-with-legend.png" alt="Column chart. The legend list on right side is highlighted with red square." >}}

This settings controls visibility of charts legend block (highlighted with red square). If set to "no" then legend block is hidden.



### Y axis label and X axis label

This two properties controls label for each axis accordingly.



### Grid lines

This property controls horizontal and vertical rulers of the chart:

- **None** — no rulers visible.
- **Horizontal** — only horizontal ruler is visible.
- **Vertical** — only vertical ruler is visible.
- **Both** — both types of rulers are visible.



### Chart format

This setting controls chart format. In group format, columns go one after another. In stacked format columns from each series will be stacked on top of each other. 

{{< figure src="/attachments/appstore/modules/charts/column-chart-format-grouped-vs-stacked.png" alt="Two column charts. On the left chart columns go one after another. On the right chart pairs of columns stacked on each other, each pair go one after another." title="Two format types of column chart, where group format is present on the left and stack format is present on the right." >}}



## Dimensions

### Width unit

Width unit controls type of unit for measuring widget with. Could be **percentage** or **pixels**.

### Width

This property controls width of the widget.



### Height unit

Hight unit controls type of unit for measuring widget height. Possible values are:

- **Percentage of width** — height is measuring relative to widget width (use this mode when you need to keep width and height in aspect ratio).
- **Pixels** — use pixels as height unit (good option for most cases).
- **Percentage of parent** — height is measuring relative to parent **height** property (only works when parent have **height** CSS property).



### Height

This property controls height of the widget.

## Advanced

### Enable theme folder config

If set to **Yes** then this widget will try to load global chart settings specified in the **theme/web/com.mendix.charts.json** file. Before using this feature make sure this file is present in your project.


### Custom layout

This property allows you to save your custom **Layout** settings for this widget.

To save your custom settings that related to **Layout** group you need go to **Advanced** tab and paste you JSON in **Custom layout** text area:

{{< figure src="/attachments/appstore/modules/charts/custom-layout-settings.png" alt="Settings dialog window with Advanced tab being active. Tab includes two text area on of which is focused." >}}

This layout settings will be passed to underlying plotly javascript library. To see available options and their description. Visit [layout seciton in plotly reference guide](https://plotly.com/javascript/reference/#layout).

### Custom configurations

This property allows you to save your custom **Configuration** settings for this widget.

This object will be merged with default settings and passed to underlying [plotly javascript](https://plotly.com/javascript/) library. To see available settings and examples check [Configuration Options in JavaScript](https://plotly.com/javascript/configuration-options/) section on plotly docs website.

{{< figure src="/attachments/appstore/modules/charts/custom-config.png" alt="Settings dialog window with Advanced tab being active. Tab includes two text area on of which is focused." >}}
