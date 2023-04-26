---
title: "Use Any Chart"
url: /howto7/extensibility/charts-any-usage/
weight: 20
description: "How to use the Any Chart widget to create advanced charts"
tags: ["Any Chart", "Advanced Charts", "Charts", "Desktop Modeler", "Widgets"]
---

## 1 Introduction

The basic chart widgets provide a set of easy to configure charts such as line, bar, column, pie, and so forth. These charts can be fine tuned with the advanced options.

When the advanced options are not enough, the **Any Chart** widget can be used.

With **Any Chart** you can build all the chart types that are possible with Plotly.js as well as options for configuring charts dynamically. So, if you want to build a 3D chart or have a dynamic set of series, **Any Chart** is your friend.

This how-to will teach you how to do the following:

* Create a line chart with sample data
* Export data for a chart
* Fine tune the chart with the run-time playground

## 2 Prerequisites

Before starting this how-to, make sure you have the following prerequisites:

* The latest Mendix modeler
* The latest **Any Chart** widget module from the [Mendix Marketplace](/appstore/modules/any-chart/)
* An understanding of JSON data structures

## 3 Chart Structure

An **Any Chart** widget can be configured with a JSON **Data** array and **Layout** object. The configuration can be set statically, via the **Source attribute** or with the **Sample data**.

The configuration in the **Source attribute** will be merged into the static settings and will overwrite any common properties. The **Sample data** is for demo purposes at run time when there is no **Source** attribute selected or when rendering sample data in the modeler preview.

## 4 Creating a Chart

To create a line chart with the **Any Chart** widget, follow these steps:

1. Create a page with a data view (Chart context).
2. Add the Any Chart widget in the data view.
3. Select the line chart sample from the [Any Chart cheat sheet](/refguide7/charts-any-cheat-sheet/#line-chart):

    ```json
    [ { "x": [ 1, 2 ], "y": [ 1, 2 ], "type": "scatter" } ]
    ```

4. In the modeler, copy the data into the Any Chart widget property tab **Data**, field **Static**.
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

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-any-usage/any-chart-configuration.png" alt="Any Chart Configuration" >}}

7. Run the app to preview the chart.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-any-usage/charts-any-sample.png" alt="Any Chart result" >}}

## 5 Exporting Data

To generate JSON data for the Charts widget, follow these steps:

1. Add a **Data** string (unlimited length) attribute to the Chart (context) entity.
2. In the widget, set the **Source attribute** field in the **Data** tab.
    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-any-usage/any-chart-configuration-attribute.png" alt="Select data attribute" >}}
3. Create a **JSON Structure** and use the **Sample data** as the snippet.
    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-any-usage/any-chart-json-structure-line-chart-data.png" alt="Create export mapping" >}}
4. Create an **Export Mapping** with the **JSON Structure**.
    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-any-usage/any-chart-line-chart-export-mapping-select.png" alt="Select data structure" >}}
    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-any-usage/any-chart-line-chart-export-mapping.png" alt="Map objects" >}}
5. Create a microflow that retrieves the data.
6. Use the **Export Mapping** to generate a **String Variable**. Store the value in the object attribute that is selected as **Source attribute**.
    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-any-usage/any-chart-export-microflow.png" alt="Export microflow" >}}
    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-any-usage/any-chart-export-microflow-structure.png" alt="Export microflow" >}}

If need be, the layout can also be generated in the same way as the data. In most cases, a **Static** layout will suffice.

## 6 Fine tuning

Editing the JSON configuration in the modeler can be cumbersome. With the live preview editor, developers can directly see the output of their changes. 

{{% alert color="warning" %}}

The editor is only a playground and no settings are stored. All changes you make in the runtime preview that you wish to use the next time you view the app have to be applied to your **Any Chart** widget too.

{{% /alert %}}

To fine tune a Charts widget configuration, follow these steps:

1. In the **Data** tab, set the **Mode** option to **Development**.

2. Run the app, and open the page containing the chart.

3. Click the **Toggle Editor** button on the top right of the chart to fine-tune your settings.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-advanced-tuning/charts-toggle-editor-open.png" alt="chart editor" >}}

4. In the editor, select either **Data** or **Layout** from the dropdown menu.

5. Edit Static or Data settings.

6. Copy the new settings and apply them in the modeler.

7. Re-run the app to confirm the changes have been applied.

## 7 Read More

* **Any Chart** properties: [Any Chart Reference Guide](/refguide7/charts-any-configuration/)
* The most common chart types:  [Any Chart Cheat Sheet](/refguide7/charts-any-cheat-sheet/)
* The most common settings: [Configuration Cheat Sheet](/refguide7/charts-advanced-cheat-sheet/)
* The full JSON reference: [https://plot.ly/javascript/reference/](https://plot.ly/javascript/reference/)
* Mendix modeler documentation: [JSON structures](/refguide7/json-structures/)
* Mendix modeler documentation: [Export Mappings](/refguide7/export-mappings/)  
