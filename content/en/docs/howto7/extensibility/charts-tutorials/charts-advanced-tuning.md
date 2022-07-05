---
title: "Fine-Tune a Chart with Advanced Settings"
url: /howto7/extensibility/charts-advanced-tuning/
weight: 30
description: "Describes the settings you can use to change chart layouts and types"
tags: ["Desktop Modeler", "Charts", "Layout", "Chart Type"]
---

## 1 Introduction

The individual Charts widgets can be fine-tuned with advanced settings. The settings can affect the layout, configuration and data.

This how-to will teach you how to do the following:  

* Change font style (layout)
* Change chart type (data series)
* Enable toolbar (configuration)

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Installed the latest Mendix modeler
* Downloaded the latest [Chart Widget](/appstore/widgets/charts/) from the Mendix Marketplace
* Setup a chart, see [How to create a chart](/howto7/extensibility/charts-basic-create/)

## 3 Changing the Layout {#layout-changes}

This is what the original chart looks like:

{{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-advanced-tuning/charts-toggle-editor.png" alt="chart" >}}

To create a custom layout, follow these steps:

1. Open an app containing a chart.
2. Open the page with the charts widget.
3. Open the charts widget settings.
4. Go to the tab **Advanced**.
5. Set the **Mode** to **Developer**.
    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-advanced-tuning/charts-widget-properties-advanced.png" alt="chart widget properties" >}}
6. Run the app.
7. In your browser, open the page with the chart.
8. Click on the button **Toggle Editor**.
9. In the **Layout** section add the following **Custom setting**:

    ```json
    {
      "font": {
        "family": "Open Sans",
        "size": 14,
        "color": "#555"
      }
    }
    ```
10. Change the font settings till the chart shows the required font. Copy the font settings.

    {{% alert color="warning" %}}Please note that changes made in the editor will not persist unless they are stored in the advanced settings of the widget or in the theme.{{% /alert %}}

    After making some changes, the chart looks like this:

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-advanced-tuning/charts-toggle-editor-open.png" alt="chart editor" >}}

11. Paste the new font settings into the **Layout options** property in the **Advanced** tab.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-advanced-tuning/charts-widget-properties-advanced-layout.png" alt="chart editor" >}}

12. Change the **Mode** back to **Advanced** in the  modeler, this will remove the Toggle Editor button from the chart.  

{{% alert color="warning" %}}

Please note that the advanced settings only apply to the chart in Advanced or Developer mode.

{{% /alert %}}

## 4 Changing the Chart Type

This is what the chart looks like before making any changes:

{{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-advanced-tuning/charts-widget-bar.png" alt="chart editor" >}}

To create a custom configuration, follow these steps:

1. Repeat steps 1 to 8 from the [layout instructions](#layout-changes).
2. Select the name of the series you want to display differently from the drop down menu: in this case **Series 1**.
3. Edit the **Custom settings**; change them to `{ "type": "line" }`.
    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination.png" alt="chart editor" >}}
4. Copy the the custom settings.
5. In the modeler, open the **Series 1** configuration.
6. Paste the new configuration for the data into the **(Layout) Options** property in the **Advanced** tab.

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination-properties.png" alt="chart editor" >}}

After the changes, the chart looks like this:

{{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination-result.png" alt="chart editor" >}}

## 5 Changing the Configuration 

To create custom a configuration, follow these steps:

1. Repeat steps 1 to 8 from the [layout instructions](#layout-changes).
2. Select **Configuration** from the drop down menu.
3. Edit the **Custom settings**, change them to `{ "displayModeBar": true }`.
4. Add more Custom settings as desired. See [here](https://plot.ly/javascript/configuration-options/) for more configuration settings.
5. The changes made in the editor are not persistent; copy the required settings.
6. Paste the new configuration into the **Configuration options** property in the **Advanced** tab.
    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-advanced-tuning/charts-widget-properties-advanced-config.png" alt="chart editor" >}}
7. Change **Mode** to **Advanced** set modeler, to remove the **Toggle Editor** button.

    {{% alert color="warning" %}}Please note that the advanced settings only apply to the chart in Advanced or Developer mode{{% /alert %}}

    {{< figure src="/attachments/howto7/extensibility/charts-tutorials/charts-advanced-tuning/charts-config-toolbar.png" alt="chart editor" >}}

## 6 Read More

Reference guide for the [advanced properties](/refguide7/charts-configuration/#advanced)

Layout options: [cheat sheet](/refguide7/charts-advanced-cheat-sheet/#layout-all)  
Configuration options: [cheat sheet](/refguide7/charts-advanced-cheat-sheet/#config-options)  
Data series options: [cheat sheet](/refguide7/charts-advanced-cheat-sheet/#data-series)  

Full reference: https://plot.ly/javascript/
