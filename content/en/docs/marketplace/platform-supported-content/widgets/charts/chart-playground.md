---
title: "Chart Playground"
url: /appstore/widgets/chart-playground/
weight: 180
description: "Describes the Chart playground widget, which lets you edit the layout, configuration, and series settings of a chart live while the app runs."
aliases:
    - /appstore/widgets/ChartPlayground/
---

## Introduction

The Chart playground widget is a helper for customizing charts. It adds a live JSON editor to a chart in the running app, so you can see the effect of layout, configuration, and series settings right away. When you are happy with the result, you copy the JSON to the chart properties in Studio Pro.

The Chart playground widget is included in the [Charts](/appstore/widgets/charts/) module. It works with all chart widgets in the module, including [Custom chart](/appstore/widgets/charts-custom-usage/).

{{% alert color="warning" %}}
Changes made in the Chart playground are for preview only. They are lost when you reload the page. To keep your changes, copy the JSON to the chart properties in Studio Pro.
{{% /alert %}}

{{% alert color="info" %}}
In Charts versions below 5.0.0, the live editor was enabled with the **Enable developer mode** property instead of a separate Chart playground widget.
{{% /alert %}}

## Adding Chart Playground to a Chart {#add}

To add a Chart playground to a chart, do the following:

1. Open the page with the chart in Studio Pro.
1. Open the chart properties and go to the **General** tab.
1. Set **Show playground slot** to **Yes**. A **Playground slot** drop zone appears on the chart.
1. In the **Toolbox**, find the **Chart playground** widget.
1. Drag the **Chart playground** widget into the **Playground slot**.

    {{% todo %}}[SCR-147: Chart in the page editor with a Chart playground widget in the Playground slot, Toolbox visible]{{% /todo %}}

1. Run the app and open the page with the chart.

{{% alert color="info" %}}
The Chart playground widget has no properties of its own. It gets all its data from the chart it is placed in. If you place it anywhere other than a **Playground slot**, it shows an error.
{{% /alert %}}

## Using the Editor {#editor}

In the running app, click **Toggle Editor** on the chart to open the editor panel.

{{% todo %}}[SCR-148: Running app, chart with the Chart playground editor panel open, Layout selected in the drop-down list]{{% /todo %}}

The editor panel has these parts:

* **Drop-down list** – Selects which settings to edit:
    * **Layout** – The layout of the whole chart, such as fonts, titles, axes, and legend. For available options, see [Layout](https://plotly.com/javascript/reference/layout/) in the Plotly documentation.
    * One item per series – The settings of a single series (a trace in Plotly). The item shows the series name, or **trace** with a number if the series has no name. For available options, see the [JavaScript Figure Reference](https://plotly.com/javascript/reference/) in the Plotly documentation.
    * **Configuration** – The configuration of the chart, such as the mode bar and zoom behavior. For available options, see [Configuration Options](https://plotly.com/javascript/configuration-options/) in the Plotly documentation.
* **Custom settings** – An editable JSON editor. Your changes are applied to the chart immediately. If the JSON is invalid, the editor shows it and the chart is not updated.
* **Settings from the Studio Pro** – A read-only view of the settings that come from the chart properties in Studio Pro.

To move the keyboard focus out of the editor, press <kbd>Esc</kbd> and then <kbd>Tab</kbd>.

## Saving Your Changes {#save}

The playground does not save anything. Copy the JSON from **Custom settings** to the matching chart property in Studio Pro:

| Playground Item | Chart Widgets | Custom Chart |
| --- | --- | --- |
| **Layout** | **Advanced** tab > **Custom layout** | **Layout options** tab > **Static** |
| A series | **Edit Series** dialog box > **Advanced** tab > **Custom series options** (for pie charts and heat maps: **Advanced** tab > **Custom series options**) | **Data** tab > **Static** (the item at the same position in the array) |
| **Configuration** | **Advanced** tab > **Custom configurations** | **Configuration options** tab > **Configuration options** |

## Removing Chart Playground {#remove}

Chart playground is a development tool. Before you deploy your app to production, remove it from your charts:

1. Delete the **Chart playground** widget from the **Playground slot**.
1. Set **Show playground slot** to **No**.

If **Show playground slot** is set to **No** while a widget is still in the slot, Studio Pro shows an error asking you to remove the widget from the slot.

## Read More

* [Fine-Tune a Chart with Chart Playground](/appstore/widgets/chart-advanced-tuning/)
* [Chart Advanced Cheat Sheet](/refguide/charts-advanced-cheat-sheet/)
* [Charts](/appstore/widgets/charts/)
