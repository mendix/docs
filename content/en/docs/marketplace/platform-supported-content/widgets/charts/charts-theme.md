---
title: "Use the Charts Theme"
url: /appstore/widgets/charts-theme/
weight: 40
description: "How to set up a theme file that applies settings to all charts created with the Charts module in an app."
aliases:
    - /howto/front-end/charts-theme/
---

## Introduction

You can fine-tune the look of individual Charts widgets with their advanced settings. A theme file lets you create global settings that apply to all charts in an app. In this way, you can set colors, language, fonts, and many other things for all charts at once.

This how-to teaches you how to do the following:

* Find the settings you want with the Chart playground
* Add a theme configuration file
* Change the font for all charts

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download the latest [Charts](https://marketplace.mendix.com/link/component/105695/) module from the Mendix Marketplace
* Set up a chart by following [Create a Basic Chart](/appstore/widgets/charts-basic-create/)

## Creating a Chart Theme

This is how the original chart looks:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-toggle-editor.png" alt="Line chart with two series and the Toggle Editor button, using the default font" class="no-border" >}}

### Finding the Settings with Chart Playground

To find the settings you want, follow these steps:

1. Add a [Chart playground](/appstore/widgets/chart-playground/) to your chart, as described in [Opening the Playground](/appstore/widgets/chart-advanced-tuning/#open-playground).
1. Run the app and open the page with the chart in the browser.
1. Click **Toggle Editor**.
1. In the drop-down list, select **Layout**, and add the following JSON to **Custom settings**:

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

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-advanced-tuning/charts-toggle-editor-open.png" alt="Chart playground editor open next to a chart with changed font settings" class="no-border" >}}

    {{% alert color="warning" %}}Changes made in the playground do not persist. Store them in the advanced settings of the widget or in the theme file.{{% /alert %}}

1. In Studio Pro, remove the Chart playground from the chart, as described in [Removing the Playground](/appstore/widgets/chart-advanced-tuning/#remove-playground).

### Adding a Theme Configuration

To add a theme file that applies to all charts in the app, follow these steps:

1. In Studio Pro, go to **App** > **Show App Directory in Explorer** (or **Show App Directory in Finder** on macOS).
1. Open the *theme/web* folder.
1. Create a new file named *com.mendix.charts.json*.

    {{% alert color="info" %}}The file name is case-sensitive, and the file extension is *.json*. The file must contain a JSON object, even if it is empty, for example `{ }`.{{% /alert %}}

1. For each chart that should use the theme, open the chart properties, go to the **Advanced** tab, and set **Enable theme folder config loading** to **Yes**.

    {{% todo %}}[SCR-154: Chart Advanced tab with Enable theme folder config loading set to Yes]{{% /todo %}}

    {{% alert color="info" %}}Charts that have **Enable theme folder config loading** set to **No** ignore the theme file.{{% /alert %}}

### Changing the Font Globally

To change the font in all charts in the app, follow these steps:

1. Open the *[app folder]/theme/web/com.mendix.charts.json* file in a plain text editor.
1. Replace or update the content. In the `layout` section, place the font settings that you found in the playground:

    ```json
    {
      "layout": {
        "font": {
          "family": "Impact",
          "size": 20,
          "color": "#4682B4"
        }
      }
    }
    ```

1. Restart the Mendix app.
1. Check the result.

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/charts/charts-tutorials/charts-theme/charts-toggle-editor-changed.png" alt="Line chart using the Impact font from the theme file" class="no-border" >}}

## Theme File Structure {#theme-file-structure}

The theme file can contain three top-level properties. At least one of them must be present; otherwise, the file is ignored and a warning is logged in the browser console.

* `layout` – Layout settings applied to all charts. For available options, see [Layout](https://plotly.com/javascript/reference/layout/) in the Plotly documentation.
* `configuration` – Configuration settings applied to all charts. For available options, see [Configuration Options](https://plotly.com/javascript/configuration-options/) in the Plotly documentation.
* `charts` – Series settings per chart type. Each key is a chart type, and its value is applied to every series of that chart type. For available options, see the [JavaScript Figure Reference](https://plotly.com/javascript/reference/) in the Plotly documentation. The possible keys are `AreaChart`, `BarChart`, `BubbleChart`, `ColumnChart`, `HeatMap`, `LineChart`, `PieChart`, and `TimeSeries`.

This is an example of a theme file:

```json
{
  "layout": {
    "font": {
      "family": "Open Sans",
      "size": 14
    }
  },
  "configuration": {
    "displayModeBar": false
  },
  "charts": {
    "LineChart": {
      "line": {
        "width": 3
      }
    },
    "BarChart": {
      "opacity": 0.8
    }
  }
}
```

{{% alert color="warning" %}}
Use this with caution, because the settings in the theme file apply to every chart in your app that has **Enable theme folder config loading** set to **Yes**. The **Custom layout**, **Custom configurations**, and **Custom series options** set in the widget itself take precedence over the theme file.
{{% /alert %}}

{{% alert color="info" %}}
The theme file is not used by the [Custom chart](/appstore/widgets/charts-custom-usage/) widget.
{{% /alert %}}

## Read More

* [Charts](/appstore/widgets/charts/)
* [Chart Playground](/appstore/widgets/chart-playground/)
* [Layout samples](/refguide/charts-advanced-cheat-sheet/#layout-all)
* [Configuration samples](/refguide/charts-advanced-cheat-sheet/#config-options)
