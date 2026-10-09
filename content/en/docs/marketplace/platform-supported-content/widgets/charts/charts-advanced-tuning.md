---
title: "Fine-Tune a Chart with Chart Playground"
linktitle: "Chart Advanced Tuning"
url: /appstore/widgets/chart-advanced-tuning/
weight: 30
description: "Describes how to use the Chart playground widget to change the layout, series, and configuration of a chart."
aliases:
    - /howto/front-end/chart-advanced-tuning/
---

## Introduction

You can fine-tune individual chart widgets with the [Chart playground](/appstore/widgets/chart-playground/) widget. The playground lets you change the layout, configuration, and series settings of a chart in the running app and see the result right away.

{{% alert color="info" %}}
The Chart playground widget is included in the [Charts](/appstore/widgets/charts/) module. It replaces developer mode in Charts versions 5.0.0 and above.
{{% /alert %}}

This guide teaches you how to do the following:

* Change the font style (layout)
* Change the chart type of a series (series)
* Enable the toolbar (configuration)

## Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Install the latest version of Mendix Studio Pro
* Download the latest [Charts](https://marketplace.mendix.com/link/component/105695/) module from the Mendix Marketplace
* Set up a chart by following [Create a Basic Chart](/appstore/widgets/charts-basic-create/)

## Opening the Playground {#open-playground}

To open the playground on your chart, follow these steps:

1. Open the page with the chart in Studio Pro.
1. Open the chart properties and go to the **General** tab.
1. Set **Show playground slot** to **Yes**. The **Playground slot** drop zone appears on the chart.
1. Find the **Chart playground** widget in the **Toolbox**.
1. Drag the **Chart playground** widget into the **Playground slot**.
1. Run the app.
1. In your browser, open the page with the chart.
1. Click **Toggle Editor**.

    {{% todo %}}[SCR-149: Running app, chart with the Toggle Editor button visible, before opening the editor]{{% /todo %}}

## Changing the Layout {#layout-changes}

This is what the original chart looks like:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-toggle-editor.png" alt="Line chart with two series and the Toggle Editor button, using the default font" class="no-border" >}}

To create a custom layout, follow these steps:

1. Open the playground as described in [Opening the Playground](#open-playground).
1. In the drop-down list, select **Layout**.
1. In **Custom settings**, add the following JSON:

    ```json
    {
      "font": {
        "family": "Open Sans",
        "size": 14,
        "color": "#555"
      }
    }
    ```

1. Change the font settings until the chart shows the font you want, then copy the JSON.

    {{% alert color="warning" %}}Changes made in the playground do not persist. Store them in the chart properties or in the [Charts theme](/appstore/widgets/charts-theme/).{{% /alert %}}

    After making some changes, the chart looks like this:

    {{% todo %}}[SCR-150: Replace image below — Chart playground editor open with Layout selected and the font JSON in Custom settings]{{% /todo %}}

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-toggle-editor-open.png" alt="Chart playground editor open next to a chart with changed font settings" class="no-border" >}}

1. In Studio Pro, paste the JSON into the **Custom layout** property on the **Advanced** tab of the chart.

## Changing the Chart Type of a Series {#series-changes}

This is what the chart looks like before making any changes:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-widget-bar.png" alt="Column chart with two series" class="no-border" >}}

To change how one series is drawn, follow these steps:

1. Open the playground as described in [Opening the Playground](#open-playground).
1. In the drop-down list, select the series you want to display differently. In this example, this is **Series 1**.
1. Change **Custom settings** to `{ "type": "line" }`.

    {{% todo %}}[SCR-151: Replace image below — Chart playground editor with Series 1 selected and { "type": "line" } in Custom settings]{{% /todo %}}

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination.png" alt="Chart playground editor with a series changed to a line" class="no-border" >}}

1. Copy the JSON.
1. In Studio Pro, open the chart properties, select **Series 1** in the **Series** list, and click **Edit**.
1. On the **Advanced** tab of the **Edit Series** dialog box, paste the JSON into **Custom series options**.

    {{% todo %}}[SCR-152: Replace image below — Edit Series dialog box, Advanced tab, Custom series options with { "type": "line" }]{{% /todo %}}

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination-properties.png" alt="Custom series options property in the Edit Series dialog box" class="no-border" >}}

After the changes, the chart looks like this:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination-result.png" alt="Chart with one series shown as columns and one series shown as a line" class="no-border" >}}

## Changing the Configuration {#configuration-changes}

To create a custom configuration, follow these steps:

1. Open the playground as described in [Opening the Playground](#open-playground).
1. In the drop-down list, select **Configuration**.
1. Change **Custom settings** to `{ "displayModeBar": true }`.
1. Add more settings as needed. For all configuration settings, see [Configuration Options](https://plotly.com/javascript/configuration-options/) in the Plotly documentation.
1. Copy the JSON.
1. In Studio Pro, paste the JSON into the **Custom configurations** property on the **Advanced** tab of the chart.

    {{% todo %}}[SCR-153: Replace image below — chart Advanced tab with Custom configurations filled in]{{% /todo %}}

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-widget-properties-advanced-config.png" alt="Custom configurations property on the Advanced tab of the chart" class="no-border" >}}

The chart now shows the toolbar:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-config-toolbar.png" alt="Chart with the Plotly toolbar visible in the top right corner" class="no-border" >}}

## Removing the Playground {#remove-playground}

When you are done, remove the playground from the chart:

1. Delete the **Chart playground** widget from the **Playground slot**.
1. Set **Show playground slot** to **No**.

Your changes in **Custom layout**, **Custom configurations**, and **Custom series options** stay in effect.

## Read More

* [Chart Playground](/appstore/widgets/chart-playground/)
* [Charts](/appstore/widgets/charts/)
* Layout options: [Chart Advanced Cheat Sheet](/refguide/charts-advanced-cheat-sheet/#layout-all)
* Configuration options: [Chart Advanced Cheat Sheet](/refguide/charts-advanced-cheat-sheet/#config-options)
* Data series options: [Chart Advanced Cheat Sheet](/refguide/charts-advanced-cheat-sheet/#data-series)
* Full reference: [Plotly JavaScript Open Source Graphing Library](https://plotly.com/javascript/)
