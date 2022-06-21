---
title: "Chart Widgets"
url: /appstore/modules/charts/
category: "Modules"
description: "Describes the configuration and usage of the charts module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "charts", "platform support", "area chart", "bar chart", "bubble chart", "column chart", "heatmap chart", "line chart", "pie chart", "time series chart"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Chart Widgets module](https://marketplace.mendix.com/link/component/120527) hosts a collection of updated and improved chart widgets. Beside widget improvements, this module introduces a shared settings file that allows you to define common properties for all your charts in your app.

For information on migrating an older version of the [Charts widget](https://marketplace.mendix.com/link/component/105695) to the newer chart widgets module, see the [Migrating to the Chart Widgets Module](#migrate-to-module) section below.

For information on this module's properties and configurations, see all other sections.

## 2 Common Chart Properties

### 2.1 Data Source

#### 2.1.1 Series

The **Data Source** property makes it easy to configure, control, and modify a chart series:

{{< figure src="/attachments/appstore/modules/charts/data-source-example.png" width="450px">}}

You do not need to put a chart into a data view to feed data into a widget. When you click the **New** button on a series panel, the **Edit Series** dialog box will be shown:

{{< figure src="/attachments/appstore/modules/charts/series-item-example.png" width="450px">}}

In this dialog box you will find next properties:

* **Data set**
  *  **Single** – This represents controls for a single set of dates. This is good option to start, as you can have multiple **Single** series. 
  *   **Multiple** – This is useful if you have a more complex data model or you have a microflow which could be used as data source for your chart. In this case you have to specify which attribute to use as **Series name**, otherwise your widget will be unable to visualize your data correctly.
* **Data source** – This property controls type and source of your data set. If you click **Edit** you will be presented with a **Data source edit** dialog box where you the data series retrieval location.
* **Series name** – This property is available only when a **Single** data set is used. It controls the legend of a data series.
* **Aggregation function** – This property allows you configure the aggregation function for a data series' Y attribute.

Beside the **General** tab, you will find three more tabs in the **Edit Series** dialog box:

* **Appearance** – This lists properties that allow you to modify styling for current data series. In most cases there will be color properties.
* **Events** – This lists possible event triggers.
* **Advanced** – Uses one field which will hold a JSON object with advanced configuration for this data series.

### 2.2 General

#### 2.2.1 Enable Developer Mode

{{% alert color="warning" %}}
All changes made in developer editor are temporary. To save your progress you should copy settings from the **Custom settings** area to **Chart settings** in Studio Pro.
{{% /alert %}}

When set to **Yes** this property enables **Developer mode** for the selected chart. After enabling **Developer mode** you will see a **Toggle Editor** button. When clicked, this button opens the **Chart settings** panel:

{{< figure src="/attachments/appstore/modules/charts/toggle-editor-button.png" width="350px" alt="Toggle Editor button in top right corner of the chart widget." >}}

This developer mode panel is a "live" settings editor, which means that all your changes will be instantly applied to the current chart.

At the top of the panel you should see drop-down list which controls which shows which settings group is currently selected. By default each chart has a **Layout** group and **Configuration** group—these groups control chart and layout settings. Also, in this drop-down list you will find named groups that allow you to configure chart settings per series.

{{< figure src="/attachments/appstore/modules/charts/charts-dev-panel.png" width="350px" alt="Panel with dropdown on top and textarea below. Textarea content is a JSON object." >}}

{{% alert color="info" %}} 
To see available options and useful examples, see Plotly's [JavaScript Figure Reference](https://plotly.com/javascript/reference/index/) guide. 
{{% /alert %}}

For more information on saving custom settings for a chart, see the [Custom Layout](#custom-layout) and [Custom Configurations](#custom-configurations) sections.

#### 2.2.2 Custom Series Settings

Our underlying graphics library has a flexible API which allows you to configure each series in a chart individually.

To navigate to a series' custom settings, do the following:

1. Go to **Chart settings** > **Data Source** > **Series**. 
1. Select the series you want to configure, then click **Edit**.
1. Open the **Advanced** tab and paste your custom series settings object there (in JSON format):

	{{< figure src="/attachments/appstore/modules/charts/custom-series-settings-step-1.png" width="450px" alt="Two dialog boxes. First shows Data source property with list of series records. Second dialog box show settings for the first series in list. Big red arrow pointing to the Advanced tab of the second dialog box." >}}

	{{< figure src="/attachments/appstore/modules/charts/custom-series-settings-step-2.png" width="450px" alt="Settings dialog box window with Advanced tab being active and single textarea elemnt." >}}

#### 2.2.3 Show Legend

{{< figure src="/attachments/appstore/modules/charts/chart-with-legend.png" width="450px" alt="Column chart. The legend list on right side is highlighted with red square." >}}

This setting controls the visibility of a chart's legend block (highlighted with a red square). If set to **no**, then the legend block is hidden.

#### 2.2.4 Y Axis Label and X Axis Label

These two properties control labels for each axis respectively.

#### 2.2.5 Grid Lines

This property controls horizontal and vertical rulers of the chart:

* **None** – No rulers are visible.
* **Horizontal** – Only a horizontal ruler is visible.
* **Vertical** – Only a vertical ruler is visible.
* **Both** – Both types of rulers are visible.

### 3 Dimensions

#### 3.1 Width Unit

This property controls the unit measuring the widget (it can be **percentage** or **pixels**).

#### 3.2 Width

This property controls width of the widget.

#### 3.3 Height Unit

This property controls the unit for measuring widget height:

* **Percentage of width** – Height is measured relative to widget width (use this mode to keep width and height in aspect ratio).
* **Pixels** – This uses pixels as height unit (a good option for most cases).
* **Percentage of parent** – Height is measured relative to a parent **height** property (only works when parent has **height** CSS property).

#### 3.4 Height

This property controls height of the widget.

### 4 Advanced

#### 4.1 Enable Theme Folder Config

If set to **Yes** this widget will try to load global chart settings specified in the *theme/web/com.mendix.charts.json* file. Before using this feature make sure this file is present in your app.

#### 4.2 Custom Layout {#custom-layout}

This property allows you to save your custom **Layout** settings for this widget.

To save your custom settings that related to the **Layout** group, navigate to the **Advanced** tab and paste your JSON in **Custom layout** text area:

{{< figure src="/attachments/appstore/modules/charts/custom-layout-settings.png" width="450px" alt="Settings dialog box with Advanced tab being active. Tab includes two text area on of which is focused." >}}

These layout settings will be passed to the underlying Plotly JavaScript library. To see available options and their description. Visit the [Layout](https://plotly.com/javascript/reference/#layout) section of the *Plotly Reference Guide*. 

#### 4.3 Custom Configurations {#custom-configurations}

This property allows you to save your custom **Configuration** settings for this widget.

This object will be merged with default settings and passed to the underlying [Plotly JavaScript](https://plotly.com/javascript/) library. To see available settings and examples check the [Configuration Options in JavaScript](https://plotly.com/javascript/configuration-options/) section of the *Plotly Reference Guide*.

{{< figure src="/attachments/appstore/modules/charts/custom-config.png" width="450px" alt="Settings dialog box with Advanced tab being active. Tab includes two text area on of which is focused." >}}

## 5 Chart-Specific Settings

### 5.1 Column Chart

#### 5.1.1 Chart Format

This setting controls a chart's format. In the **group** format, columns go one after another. In the **stacked** format columns from each series will be stacked on top of each other. 

{{< figure src="/attachments/appstore/modules/charts/column-chart-format-grouped-vs-stacked.png" alt="Two column charts. On the left chart columns go one after another. On the right chart pairs of columns stacked on each other, each pair go one after another." title="Two format types of column chart, where group format is present on the left and stack format is present on the right." >}}

### 5.2 Bar Chart

#### 5.2.1 Bar format

This setting controls bar format. In the **group** format, bars go one below the other. In the **stacked** format bars are stacked on top of one another, forming one line.

{{< figure src="/attachments/appstore/modules/charts/bar-chart-formats.png" width="450px" alt="Two bar charts. On the left bar chart lines in group go one below other. On the right chart, lines in group stacked on top of each other, forming one big line." >}}

### 5.3 Bubble Chart

#### 5.3.1  Bubble Size Attribute

This attribute controls bubble size for a given item in series.

#### 5.3.2 Auto Scale

If **Yes** then bubble size and proportions will be computed automatically (otherwise the value from **Scale factor** will be used).

#### 5.3.3 Scale Factor

This controls the scale factor of bubbles on a chart. This value will be used to determine the final bubble size by multiplying current scale factor value and value from the bubble size attribute.

### 5.3 Heat Map

#### 5.3.1  Data Source

This property controls a single data series. An entity in this series should have at least three attributes:

* **x** – This controls the x axis.
* **y** – This controls the y axis.
* **value (z)** – This displays "heat" at an "x y" location.

#### 5.3.2 Horizontal Axis Attribute

This is a value for a chart's horizontal (x) axis.

#### 5.3.3 Horizontal Sort Attribute

This attribute sorts values on a horizontal (x) axis.

{{% alert color="warning" %}} 
This property works only when data source is **Database**.
{{% /alert%}}

#### 5.3.4 Horizontal Sort Order

This property controls the order of items along a horizontal axis.

#### 5.3.5 Vertical Axis Attribute

This is a value for a chart's vertical (y) axis.

#### 5.3.6 Vertical Sort Attribute

This attribute sorts values on a vertical (y) axis.

{{% alert color="warning" %}} 
This property works only when data source is **Database**. 
{{% /alert%}}

#### 5.3.7 Vertical Sort Order

This property controls the order of items along a vertical axis.

#### 5.3.8 Value Attribute

This is the attribute that will be used as a heat value for given single entity.

### 5.4 Pie Chart

#### 5.4.1 Series

This property is the series data source for a pie chart.

#### 5.4.2 Series Name

This property allows for an expression that when evaluated will return a unique name for a single series:

{{< figure src="/attachments/appstore/modules/charts/pie-chart-series-name-example.png" width="450px">}}

{{% alert color="warning" %}} 
This property is required. 
{{% /alert%}}

#### 5.4.3 Value Attribute

This attribute serves as a value source for the current series.

#### 5.4.4 Slice Color

This is an optional expression that, when evaluated, will return a unique color for a single series.

#### 5.4.5 Hole Radius

This property controls hole radius at the center of the chart (a value of *0* renders the hole invisible).

## 6 Migrating to the Chart Widgets Module {#migrate-to-module}

Follow these sections to migrate older charts widget versions to the new module version. This process only requires you copy and paste a few files and directories. It should take just couple of minutes.

These steps are only required if you are already using the charts widget and you want to update it widget to the new module version. If you are starting new app you do not need to do any extra steps: just download the latest [Chart Widgets module](https://marketplace.mendix.com/link/component/120527) from Marketplace.

To update your charts widget follow sections below.

### 6.1 Making a Backup

In this section you will make a backup of your current app. If something goes wrong, you always may restore previous files and start again. You do not need to back up your entire app, you only need to make a copy of your **<YOUR_APP>/widgets** folder.

{{% alert color="info" %}} 
You can use **App** > **Show App Directory in Explorer** command from app menu to open you project in file manager. 
{{% /alert%}}

Make a copy of your **widgets** folder in your app folder called *widgets - Copy*:

{{< figure src="/attachments/appstore/modules/charts/copy-widgets-folder.png" width="450px" alt="File manager window with list of Mendix project files and directories and two directories is being selected: widgets and widgets - Copy" >}}

Now your should have two folders: **widgets** and **widgets - Copy**.

If something goes wrong, you can delete your current **widgets** folder and rename **widgets - Copy** to **widgets**.

### 6.2 Removing Existing Charts Widget from Your App

Now you must remove previous version of the charts widget:

1. Open your app in **File Manager**. 
1. Navigate to your **<YOUR_App>/widgets** directory.
1. Find the *Charts.mpk* file. 
1. Delete the *Charts.mpk* file:

	{{< figure src="/attachments/appstore/modules/charts/delete-chart-widget.png" width="450px" alt="File manager window with list of widgets. Charts.mpk file is selected with open context menu next to it. Delete item is hovered." >}}

Now all that is left is to install the new version of the charts module.

{{% alert color="info" %}}
If you using an AnyChart widget in your app we highly recommend you migrate your charts to the new charts module. The new module has a better developer experience and gives you advanced set of chart widgets to visualize your data.
{{% /alert %}}

### 6.3 Installing the Chart Widgets Module from Marketplace

Now do the following:

1. Open Studio Pro.
1. Navigate to Marketplace.
1. Install the new chart widgets module.
1. Press <kbd>{F4}</kbd> (or click **App** > **Synchronize App Directory**) to synchronize your open app with your file system. This action will notify Studio Pro about new Chart widgets. 

If you see errors in your **Errors List** tab, do not worry. Errors often appear after migration to a new version. Follow the next section to see examples of widget updating which will solve your charts errors.

{{% alert color="warning" %}}
Although new widgets from chart widgets module have similar settings and behavior as the old widget, they also introduce some breaking changes. The main breaking change is the **Data Source** property. That means that migration process cannot be fully automated and it is up to you as a developer to update each widget individually.
{{% /alert %}}

### 6.4 Updating Chart Widgets

This section will show you how to update a charts widget to the new charts widgets module. You must apply this workflow to each chart widget in your app, updating them one by one.

The easiest way to update a charts widget is to drop a new charts module next to your existing widget, copy or change the settings, and then remove old widget. Here is a step-by-step guide:

1. Go to old chart widget.
1. Add new version for the widget of the same chart type.
1. Copy properties from old widget to the new module.
1. Remove the old widget.
1. If there any other old chart widgets in your app, repeat the previous steps.

{{% alert color="warning" %}}
If your app was created in a Studio Pro version below v9.18.0 then you may see some additional errors in the **Errors List** tab from the **Atlas_Web_Content** module. These errors come from some page templates shipped by default with Studio Pro. The simplest solution for these errors is to go to the template and remove all chart widgets from it. If you are using these templates in your app, apply the steps in the *Updating Chart Widgets* section to your templates.
{{% /alert %}}

Congratulations! You successfully updated your charts module. After you troubleshoot your errors, run your app to enjoy the new chart widgets module.
