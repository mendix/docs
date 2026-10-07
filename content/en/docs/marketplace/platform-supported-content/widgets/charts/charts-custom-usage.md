---
title: "Use Custom Chart"
url: /appstore/widgets/charts-custom-usage/
weight: 15
description: "How to use the Custom chart widget to create advanced charts with Plotly JSON, and a reference of its properties."
aliases:
    - /howto/front-end/charts-custom-usage/
---

## Introduction

The basic charts provide a set of easy to configure charts such as line, bar, column, pie, and so forth. These charts can be fine tuned with the advanced options.

When the advanced options are not enough, use the **Custom Chart** widget, available in Charts version 6.0.0 and above.

With **Custom Chart** you can build all the chart types that are possible with Plotly.js as well as options for configuring charts dynamically. So, if you want to build a 3D chart or have a dynamic set of series, **Custom Chart** is your friend.
**Custom Chart** is a successor of **Any Chart** module that is compatible with **React client** mode.

This how-to teaches you how to do the following:

* Create a line chart with sample data
* Export data for a chart
* Fine tune the chart with the run-time playground

## Prerequisites

Before starting this how-to, make sure you have the following prerequisites:

* The latest version of Mendix Studio Pro
* The latest [Charts](https://marketplace.mendix.com/link/component/105695/) module
* An understanding of JSON data structures

## Chart Structure {#chart-structure}

A **Custom Chart** widget can be configured with a JSON **Data** array and **Layout** object. The configuration can be set statically, via the **Source attribute** or with the **Sample data**.

The configuration in the **Source attribute** is merged into the static settings and overwrites any common properties. The **Sample data** is for demo purposes: it is used in the Studio Pro preview, and at runtime when no **Source attribute** is selected.

Data traces are merged by their position in the array. The first trace in the **Source attribute** is merged with the first trace in **Static**, the second with the second, and so on. When both have a value for the same property, the value from the **Source attribute** wins.

{{% alert color="info" %}}
In Charts versions below 6.3.0, the traces from the **Source attribute** were added after the **Static** traces as separate traces, instead of being merged by position.
{{% /alert %}}

## Creating a Chart

To create a line chart with the **Custom Chart** widget, follow these steps:

1. Create a page with a data view (Chart context).
2. Add the Custom Chart widget in the data view.
3. Select the line chart sample from the [Any Chart cheat sheet](/refguide/charts-any-cheat-sheet/#line-chart):

    ```json
    [ { "x": [ 1, 2 ], "y": [ 1, 2 ], "type": "scatter" } ]
    ```

4. In Studio Pro, copy the data into the Custom Chart widget property tab **Data**, field **Static**.
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
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-any-usage/custom-chart-configuration-attribute.png" alt="Select data attribute" class="no-border" >}}
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

## Fine-Tuning

Editing the JSON configuration in Studio Pro can be cumbersome. With the live preview editor, developers can directly see the output of their changes. 

For more information on fine-tuning **Custom Chart** with the Chart playground widget, see [Chart Playground](/appstore/widgets/chart-playground/).

{{% alert color="info" %}}
In the Studio Pro page editor, the chart renders the **Static** and **Sample** data and layout as you enter them. This lets you check your configuration without running the app.
{{% /alert %}}

## Properties {#properties}

### Data Tab

* **Static** – A JSON array of traces. For the available options, see the [JavaScript Figure Reference](https://plotly.com/javascript/reference/) in the Plotly documentation.
* **Source attribute** – A string attribute that contains a JSON array of traces. These traces are merged with the **Static** data by position, as described in [Chart Structure](#chart-structure).
* **Sample data** – A JSON array of traces used for the preview in Studio Pro, and at runtime when no **Source attribute** is selected. It is merged with the **Static** data.
* **Show playground slot** – If set to **Yes**, the chart shows a **Playground slot** for a [Chart playground](/appstore/widgets/chart-playground/) widget.

### Layout Options Tab

* **Static** – A JSON object with the layout of the chart. For the available options, see [Layout](https://plotly.com/javascript/reference/layout/) in the Plotly documentation.
* **Source attribute** – A string attribute that contains a JSON layout object. It is merged with the **Static** layout and overwrites it.
* **Sample layout** – A JSON layout object used for the preview in Studio Pro, and at runtime when no **Source attribute** is selected. It is merged with the **Static** layout.

### Configuration Options Tab

* **Configuration options** – A JSON object with the Plotly configuration options. For the available options, see [Configuration Options](https://plotly.com/javascript/configuration-options/) in the Plotly documentation.

### Dimensions Tab

* **Width unit** – **Percentage** of the parent width, or **Pixels**.
* **Width** – The width of the chart. The default value is **100**.
* **Height unit**:
    * **Auto** – The height is set automatically. Use **Minimum height** and **Maximum height** to limit it.
    * **Pixels** – The height is an absolute number of pixels.
    * **Percentage** – The height is a percentage of the parent height.
    * **Viewport** – The height is a percentage of the viewport height.
* **Height** – The height of the chart. The default value is **100**. This property is not visible when **Height unit** is set to **Auto**.

When **Height unit** is set to **Auto**, these properties are also available:

* **Minimum Height unit** and **Minimum height** – The minimum height of the chart container: **None**, **Pixels**, **Percentage**, or **Viewport**.
* **Maximum Height unit** and **Maximum height** – The maximum height of the chart container: **None**, **Pixels**, **Percentage**, or **Viewport**.
* **Vertical Overflow** – What happens when the content is higher than the maximum height: **Auto**, **Scroll**, or **Hidden**. This property is visible only when a maximum height is set.

### Events Tab

* **On click** – The action that runs when the user clicks a part of the chart.
* **Event data attribute** – A string attribute in which the chart stores the raw Plotly event data when the user clicks the chart. You can use this attribute in the **On click** action to read which part of the chart was clicked. For the format of the data, see [Event Data](https://plotly.com/javascript/plotlyjs-events/#event-data) in the Plotly documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-any-usage/custom-chart-events-attribute.png" alt="On click action that uses the event data attribute" class="no-border" >}}

## Read More

* **Any Chart** properties: [Any Chart](/refguide/charts-any-configuration/)
* The most common chart types:  [Any Chart Cheat Sheet](/refguide/charts-any-cheat-sheet/)
* The most common settings: [Configuration Cheat Sheet](/refguide/charts-advanced-cheat-sheet/)
* The full JSON reference: [https://plot.ly/javascript/reference/](https://plot.ly/javascript/reference/)
* [JSON Structures](/refguide/json-structures/)
* [Export Mappings](/refguide/export-mappings/)  
