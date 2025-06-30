---
title: "Fine-Tune a Chart with Chart Playground"
linktitle: "Chart Advanced Tuning"
url: /appstore/widgets/chart-advanced-tuning/
weight: 30
description: "Describes the settings you can use to change chart layouts and types"
aliases:
    - /howto/front-end/chart-advanced-tuning/
---

## Introduction

The individual charts widgets can be fine-tuned using a **Chart Playground** widget. The settings can affect the layout, configuration, and data.

{{% alert color="info" %}}
The **Chart Playground** widget is included in [Charts Widget](/appstore/widgets/charts/). It replaces developer mode in Charts Widget versions 5 and higher.
{{% /alert %}}

This guide teaches you how to do the following:  

* Change font style (layout)
* Change chart type (data series)
* Enable toolbar (configuration)

## Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Installed the latest version of Mendix Studio Pro
* Downloaded the latest [Charts Widget](/appstore/widgets/charts/) from the Mendix Marketplace
* Set up a chart by using [How to Create a Chart](/howto/front-end/charts-basic-create/)

## Changing the Layout {#layout-changes}

This is what the original chart looks like:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-toggle-editor.png" alt="chart" class="no-border" >}}

To create a custom layout, follow these steps:

1. Open an app containing a chart.
1. Open the page with the charts widget.
1. Open the charts widget's settings.
1. Click the **General** tab.
1. Set **Show playground slot** to **Yes**. If you check, you can see the widget **Playground slot** drop zone area is now visible in the chart.
1. Find the **Chart playground** widget in **Toolbox**.
1. Drag and drop the **Chart playground** widget onto the available **Playground slot**.
1. Run the app.
1. In your browser, open the page with the chart.
1. Click the button **Toggle Editor**.
1. In the **Layout** section add the following **Custom setting**:

    ```json
    {
      "font": {
        "family": "Open Sans",
        "size": 14,
        "color": "#555"
      }
    }
    ```

1. Change the font settings until the chart shows the required font. Copy the font settings:

    {{% alert color="warning" %}}Please note that changes made in the editor will not persist unless they are stored in the advanced settings of the widget or in the theme.{{% /alert %}}

    After making some changes, the chart looks like this:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-toggle-editor-open.png" alt="chart editor" class="no-border" >}}

1. Paste the new font settings into the **Custom layout** property in the **Advanced** tab.
1. Change the **Show playground slot** back to **No** in Studio Pro, this will remove the Toggle Editor button from the chart.  

## Changing the Chart Type

This is what the chart looks like before making any changes:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-widget-bar.png" alt="chart editor" class="no-border" >}}

To create a custom configuration, follow these steps:

1. Repeat steps 1 to 11 from the [layout instructions](#layout-changes).
2. Select the name of the series you want to display differently from the drop-down menu: in this case **Series 1**.
3. Edit the **Custom settings**; change them to `{ "type": "line" }`.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination.png" alt="chart editor" class="no-border" >}}
4. Copy the custom settings.
5. In Studio Pro, open the **Series 1** configuration.
6. Paste the new configuration for the data into the **(Layout) Options** property in the **Advanced** tab.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination-properties.png" alt="chart editor" class="no-border" >}}

After the changes, the chart looks like this:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination-result.png" alt="chart editor" class="no-border" >}}

## Changing the Configuration 

To create custom a configuration, follow these steps:

1. Repeat steps 1 to 11 from the [layout instructions](#layout-changes).
2. Select **Configuration** from the drop-down menu.
3. Edit the **Custom settings**, change them to `{ "displayModeBar": true }`.
4. Add more Custom settings as desired. See [here](https://plot.ly/javascript/configuration-options/) for more configuration settings.
5. The changes made in the editor are not persistable; copy the required settings.
6. Paste the new configuration into the **Configuration options** property in the **Advanced** tab.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-widget-properties-advanced-config.png" alt="chart editor" class="no-border" >}}
7. Change **Mode** to **Advanced**, set Studio Pro to remove the **Toggle Editor** button.

    {{% alert color="warning" %}}Please note that the advanced settings only apply to the chart in Advanced or Developer mode{{% /alert %}}

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-config-toolbar.png" alt="chart editor" class="no-border" >}}

## Read More

* Reference for the [advanced properties](/refguide/charts-configuration/#advanced)
* Layout options: [cheat sheet](/refguide/charts-advanced-cheat-sheet/#layout-all)  
* Configuration options: [cheat sheet](/refguide/charts-advanced-cheat-sheet/#config-options)  
* Data series options: [cheat sheet](/refguide/charts-advanced-cheat-sheet/#data-series)  
* Full reference: [Plotly JavaScript Open Source Graphing Library](https://plot.ly/javascript/)
