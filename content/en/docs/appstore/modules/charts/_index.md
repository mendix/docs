---
title: "Charts"
url: /appstore/modules/charts/
category: "Modules"
description: "Describes the configuration and usage of the Charts module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "charts", "platform support", "area chart", "bar chart", "bubble chart", "column chart", "heatmap chart", "line chart", "pie chart", "time series chart"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="danger" %}} **TODO:** Add introduction {{% /alert%}}



## Common chart properties

### Data Source

#### Series

We reworked **Data Source** property for most of the charts. Now it should be much easer to configure, control and modify chart series.

{{< figure src="/attachments/appstore/modules/charts/data-source-example.png" >}}



Now you don't need put chart into Data View to feed data into widget.



When you press **New** button on series panel the **Edit Series** dialog will be shown.

{{< figure src="/attachments/appstore/modules/charts/series-item-example.png" >}}



In this dialog you will find next properties:

- **Data set** — **Single** or **Multiple**. Single represents controls single set of date. This is good option to start as you can have multiple **Single** series. If you have more complex data model or you have Microflow which could be used as data source for your chart — you can use **Multiple** option. In this case you have to specify which attribute to use as **Series name**, otherwise widget will be unable to visualise your data correctly.
- **Data source** — this property controls type and source of your data set. If you press **Edit** , you will be presented with Data source edit dialog where you can chose from where data series should be retrieved.
- **Series name** — this property available only when **Single** data set is used. It controls legend of a data series.
- **Aggregation function** — this prop allow you configure aggregation function for Y attribute of data series.



Beside **General** tab, you will find 3 more tabs in **Edit Seris** dialog, which can be described as following:

**Appearance** — on this tab you will find properties that allow you to modify styling for current data series. In most cases there will be color properties.

**Events** — on this tab you will find possible event triggers.

**Advanced** — this tab has only one field which will hold JSON object with advanced configuration for this data series.



### General

#### Enable developer mode

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

#### Show legend

{{< figure src="/attachments/appstore/modules/charts/chart-with-legend.png" alt="Column chart. The legend list on right side is highlighted with red square." >}}

This settings controls visibility of charts legend block (highlighted with red square). If set to "no" then legend block is hidden.



#### Y axis label and X axis label

This two properties controls label for each axis accordingly.



#### Grid lines

This property controls horizontal and vertical rulers of the chart:

- **None** — no rulers visible.
- **Horizontal** — only horizontal ruler is visible.
- **Vertical** — only vertical ruler is visible.
- **Both** — both types of rulers are visible.



### Dimensions

#### Width unit

Width unit controls type of unit for measuring widget with. Could be **percentage** or **pixels**.

#### Width

This property controls width of the widget.



#### Height unit

Hight unit controls type of unit for measuring widget height. Possible values are:

- **Percentage of width** — height is measuring relative to widget width (use this mode when you need to keep width and height in aspect ratio).
- **Pixels** — use pixels as height unit (good option for most cases).
- **Percentage of parent** — height is measuring relative to parent **height** property (only works when parent have **height** CSS property).



#### Height

This property controls height of the widget.



### Advanced

#### Enable theme folder config

If set to **Yes** then this widget will try to load global chart settings specified in the **theme/web/com.mendix.charts.json** file. Before using this feature make sure this file is present in your project.


#### Custom layout

This property allows you to save your custom **Layout** settings for this widget.

To save your custom settings that related to **Layout** group you need go to **Advanced** tab and paste you JSON in **Custom layout** text area:

{{< figure src="/attachments/appstore/modules/charts/custom-layout-settings.png" alt="Settings dialog window with Advanced tab being active. Tab includes two text area on of which is focused." >}}

This layout settings will be passed to underlying plotly javascript library. To see available options and their description. Visit [layout seciton in plotly reference guide](https://plotly.com/javascript/reference/#layout).

#### Custom configurations

This property allows you to save your custom **Configuration** settings for this widget.

This object will be merged with default settings and passed to underlying [plotly javascript](https://plotly.com/javascript/) library. To see available settings and examples check [Configuration Options in JavaScript](https://plotly.com/javascript/configuration-options/) section on plotly docs website.

{{< figure src="/attachments/appstore/modules/charts/custom-config.png" alt="Settings dialog window with Advanced tab being active. Tab includes two text area on of which is focused." >}}



## 

## Chart specific settings

### Column Chart

#### Chart format

This setting controls chart format. In group format, columns go one after another. In stacked format columns from each series will be stacked on top of each other. 

{{< figure src="/attachments/appstore/modules/charts/column-chart-format-grouped-vs-stacked.png" alt="Two column charts. On the left chart columns go one after another. On the right chart pairs of columns stacked on each other, each pair go one after another." title="Two format types of column chart, where group format is present on the left and stack format is present on the right." >}}



### Bar Chart

#### Bar format

This setting controls bar format. In group format, bars go one below another. In stacked format bars are stacked on top of one another, forming one line.

{{< figure src="/attachments/appstore/modules/charts/bar-chart-formats.png" alt="Two bar charts. On the left bar chart lines in group go one below other. On the right chart, lines in group stacked on top of each other, forming one big line." >}}



### Bubble chart

#### Bubble size attribute

The attribute to control bubbles size for given item in series.

#### Auto scale

If **Yes** then bubble size and proportions will be computed automatically. Otherwise value from **Scale factor** will be used.

#### Scale factor

The scale factor of bubbles on chart. This value will be used to determine final bubble size by multiplying current scale factor value and value from bubble size attribute.

### Heat map

#### Data Source

Controls single data series. Entity in his series should have at least three attributes:

- x — for x axis
- y — for y axis
- value (z) — for displaying "heat" at [x y] location.



#### Horizontal axis attribute

Value for horizontal (x) axis of the chart.

#### Horizontal sort attribute

Attribute to sort values on horizontal (x) axis.

{{% alert color="warning" %}} **Warning:** This property works only when data source is **Database** {{% /alert%}}

#### Horizontal sort order

Controls order of items along horizontal axis.

#### Vertical axis attribute

Value for vertical (y) axis of the chart.

#### Vertical sort attribute

Attribute to sort values on vertical (y) axis.

{{% alert color="warning" %}} **Warning:** This property works only when data source is **Database** {{% /alert%}}

#### Vertical sort order

Controls order of items along vertical axis.

#### Value attribute

Attribute that will be used as heat value for given single entity.

### Pie chart

#### Series

Series data source for pie chart.

#### Series name

Should an expression that when evaluated will return uniq name for single series.



{{< figure src="/attachments/appstore/modules/charts/pie-chart-series-name-example.png" >}}



{{% alert color="warning" %}} **Warning:** This property is required. {{% /alert%}}

#### Value attribute

Attribute that will serve as source of value for current series.

#### Slice color

Optional expression that when evaluated will return uniq color for single series.

#### Hole radius

Controls hole radius at the center of the chart. When value is zero the hole is not visible.

## Migration from Charts v1 and v2 to Charts Module

In this guide we would like to give you instructions on how to migrate Charts,
and it's widget to new version.
Don't be afraid this just easy as copy and paste few files and directories and should 
take just couple of minutes.

Again, this steps only required if you're already using Charts widget, and you want to update
this widget to version 2. If you're starting new project you don't need to do any extra steps ---
just download latest Charts widget from marketplace.

To update your Charts widget follow steps below.

### Step 1 - Making backup

So, its good idea to start with backup of your current project.
If something goes wrong, you always may restore previous files and
start again.

In our case we don't need to back up whole project. All we have to do is make a copy of
**<YOUR_PROJECT>/widgets** directory.

{{% alert color="info" %}} **Note:** You can use **App** > **Show App Directory in Explorer** command from app menu to open you project in file manager. {{% /alert%}}



For now you can just make **widgets** copy in project folder:

{{< figure src="/attachments/appstore/modules/charts/copy-widgets-folder.png" alt="File manager window with list of Mendix project files and directories and two directories is being selected: widgets and widgets - Copy" >}}

Now we should have two folders: **widgets** and **widgets - Copy**.

If something go wrong, you can delete current "widgets" folder and rename "widgets - Copy" to "widgets".

### Step 2 - Removing existing Charts widget from the project

So now we have to remove previous version of Charts widget.
To do so, open your project in File Manager. Navigate to **<YOUR_PROJECT>/widgets** directory
and find file with name **Charts.mpk**. Now you have to remove this file.

{{< figure src="/attachments/appstore/modules/charts/delete-chart-widget.png" alt="File manager window with list of widgets. Charts.mpk file is selected with open context menu next to it. Delete item is hovered." >}}

And we are done! Now all what's left is to install new version of Charts widget.



{{% alert color="info" %}}

**Note**: if you using AnyChart widget in your project we highly recommend you to migrate your charts to new charts module — it has better developer experience and give you advanced set of chart widgets to visualize your data.

{{% /alert %}}


### Step 3 - Installing Charts module from marketplace

So, now you can open Studio Pro, go to marketplace and install brand new Charts module.

<!-- Add screenshots of marketplace with Charts module -->

After this step you need to synchronize open project and file system. You can do it by pressing **F4** on the keyboard or through the app menu by running **App** > **Synchronize App Directory** command. This action will notify Studio Pro about new Chart widgets. 

If you see some errors in error tab, do not panic — errors appears quite often when you migrate your widget to new version. One of this errors will be about new widget version.

{{% alert color="warning" %}}

**Warning**: Although new widgets from charts module has same settings and behaviour, they also introduce some breaking changes. The main breaking change is **Data Source** property. That means that migration process can't be fully automated and it's up to you as a developer to update each widget individually.

{{% /alert %}}

Go to next section to see example of updating settings for the column chart.

### Step 4 - Updating chart widgets

This step assume that you go over all chart widgets in your project and update them one by one.

The easiest way is by dropping new charts widget right next to your existing widget, copying or changing settings and then removing old widget. If you prefer step-by-step guide:

1. Go to old chart widget.
2. Add new version fo the widget of the same chart type.
3. Copy properties from old widget to the new widget.
4. Remove old widget.
5. If there any other old chart widgets in your project, repeat steps 1-5.



{{% alert color="warning" %}}

**Warning**: If your project was created in Studio Pro version < v9.18.0 then you probably may see some additional errors in **Errors List** tab from **Atlas_Web_Content** module. They coming from some page templates that we shipping by default with Studio Pro distribution. Simplest solution would be go to the template and remove all chart widgets from the template. If you are using this templates in your app, then just repeat steps in "Updating chart widgets" section.

{{% /alert %}}

### Step 5 - Testing your project

Congratulations! We successfully updated Charts widget and now we can run our project to make
sure that all works fine and app can do a successful start.
