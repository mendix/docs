---
title: "Use Any Chart"
url: /appstore/widgets/charts-any-usage/
weight: 20
description: "How to use the Any Chart widget to create advanced charts"
aliases:
    - /howto/front-end/charts-any-usage/
---

## Introduction

The basic charts provide a set of easy to configure charts such as line, bar, column, pie, and so forth. These charts can be fine tuned with the advanced options.

When the advanced options are not enough, the **Any Chart** widget can be used.

With **Any Chart** you can build all the chart types that are possible with Plotly.js as well as options for configuring charts dynamically. So, if you want to build a 3D chart or have a dynamic set of series, **Any Chart** is your friend.

This how-to teaches you how to do the following:

* Create a line chart with sample data
* Export data for a chart
* Fine tune the chart with the run-time playground

## Prerequisites

Before starting this how-to, make sure you have the following prerequisites:

* The latest version of Mendix Studio Pro
* The latest [Any Chart](/appstore/modules/any-chart/) module
* An understanding of JSON data structures

## Chart Structure

An **Any Chart** widget can be configured with a JSON **Data** array and **Layout** object. The configuration can be set statically, via the **Source attribute** or with the **Sample data**.

The configuration in the **Source attribute** will be merged into the static settings and will overwrite any common properties. The **Sample data** is for demo purposes at run time when there is no **Source** attribute selected or when rendering sample data in the Studio Pro preview.

## Creating a Chart

To create a line chart with the **Any Chart** widget, follow these steps:

1. Create a page with a data view (Chart context).
2. Add the Any Chart widget in the data view.
3. Select the line chart sample from the [Any Chart cheat sheet](/refguide/charts-any-cheat-sheet/#line-chart):

    ```json
    [ { "x": [ 1, 2 ], "y": [ 1, 2 ], "type": "scatter" } ]
    ```

4. In Studio Pro, copy the data into the Any Chart widget property tab **Data**, field **Static**.
5. Run the app to confirm the chart renders correctly.
6. Split the data into static and dynamic parts that are going to be generated from the domain model.

    Static :  

    ```json
    [ { "type": "scatter" } ]
    ```

    Sample data :  

    ```json
    [ { "x": [ 1, 2 ], "y": [ 1, 2 ] } ]
    ```

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-any-usage/any-chart-configuration.png" alt="Any Chart Configuration" class="no-border" >}}

7. Run the app to preview the chart.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-any-usage/charts-any-sample.png" alt="Any Chart result" class="no-border" >}}

## Exporting Data

To generate JSON data for the Charts widget, follow these steps:

1. Add a **Data** string (unlimited length) attribute to the Chart (context) entity.
2. In the widget, set the **Source attribute** field in the **Data** tab.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-any-usage/any-chart-configuration-attribute.png" alt="Select data attribute" class="no-border" >}}
3. Create a **JSON Structure** and use the **Sample data** as the snippet.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-any-usage/any-chart-json-structure-line-chart-data.png" alt="Create export mapping" class="no-border" >}}
4. Create an **Export Mapping** with the **JSON Structure**.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-any-usage/any-chart-line-chart-export-mapping-select.png" alt="Select data structure" class="no-border" >}}
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-any-usage/any-chart-line-chart-export-mapping.png" alt="Map objects" class="no-border" >}}
5. Create a microflow that retrieves the data.
6. Use the **Export Mapping** to generate a **String Variable**. Store the value in the object attribute that is selected as **Source attribute**.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-any-usage/any-chart-export-microflow.png" alt="Export microflow" class="no-border" >}}
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-any-usage/any-chart-export-microflow-structure.png" alt="Export microflow" class="no-border" >}}

If need be, the layout can also be generated in the same way as the data. In most cases, a **Static** layout will suffice.

## Fine tuning

Editing the JSON configuration in Studio Pro can be cumbersome. With the live preview editor, developers can directly see the output of their changes. 

{{% alert color="warning" %}}

The editor is only a playground and no settings are stored. All changes you make in the runtime preview that you wish to use the next time you view the app have to be applied to your **Any Chart** widget too.

{{% /alert %}}

To fine tune a Charts widget configuration, follow these steps:

1. In the **Data** tab, set the **Mode** option to **Development**.
2. Run the app, and open the page containing the chart.
3. Click the **Toggle Editor** button on the top right of the chart to fine-tune your settings.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-toggle-editor-open.png" alt="chart editor" class="no-border" >}}

4. In the editor, select either **Data** or **Layout** from the drop-down menu.
5. Edit Static or Data settings.
6. Copy the new settings and apply them in Studio Pro.
7. Re-run the app to confirm the changes have been applied.

## Read More

* **Any Chart** properties: [Any Chart](/refguide/charts-any-configuration/)
* The most common chart types:  [Any Chart Cheat Sheet](/refguide/charts-any-cheat-sheet/)
* The most common settings: [Configuration Cheat Sheet](/refguide/charts-advanced-cheat-sheet/)
* The full JSON reference: [https://plot.ly/javascript/reference/](https://plot.ly/javascript/reference/)
* [JSON Structures](/refguide/json-structures/)
* [Export Mappings](/refguide/export-mappings/)  
