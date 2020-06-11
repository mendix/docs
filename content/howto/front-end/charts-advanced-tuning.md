---
title: "Fine-Tune a Chart with Advanced Settings"
parent: "charts-tutorials"
menu_order: 30
description: "Describes the settings you can use to change chart layouts and types"
tags: ["Studio Pro", "Charts", "Layout", "Chart Type"]
---

## 1 Introduction

The individual Charts widgets can be fine-tuned with advanced settings. The settings can affect the layout, configuration and data.

**This how-to will teach you how to do the following:**  

* Change font style (layout)
* Change chart type (data series)
* Enable toolbar (configuration)

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Installed the latest version of Mendix Studio Pro
* Downloaded the latest [Chart Widget](/appstore/widgets/charts) from the Mendix App Store
* Setup a chart, see [How to Create a Chart](charts-basic-create)

## 3 Changing the Layout {#layout-changes}

This is what the original chart looks like:

![chart](attachments/charts/charts-toggle-editor.png)

To create a custom layout, follow these steps:

1. Open a project containing a chart.
2. Open the page with the charts widget.
3. Open the charts widget settings.
4. Go to the tab **Advanced**.
5. Set the **Mode** to **Developer**.
    ![chart widget properties](attachments/charts/charts-widget-properties-advanced.png)
6. Run the project.
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

    {{% alert type="warning" %}}Please note that changes made in the editor will not persist unless they are stored in the advanced settings of the widget or in the theme.{{% /alert %}}

    After making some changes, the chart looks like this:

    ![chart editor](attachments/charts/charts-toggle-editor-open.png)

11. Paste the new font settings into the **Layout options** property in the **Advanced** tab.

    ![chart editor](attachments/charts/charts-widget-properties-advanced-layout.png)

12. Change the **Mode** back to **Advanced** in Studio Pro, this will remove the Toggle Editor button from the chart.  

{{% alert type="warning" %}}

Please note that the advanced settings only apply to the chart in Advanced or Developer mode.

{{% /alert %}}

## 4 Changing the Chart Type

This is what the chart looks like before making any changes:

![chart editor](attachments/charts/charts-widget-bar.png)

To create a custom configuration, follow these steps:

1. Repeat steps 1 to 8 from the [layout instructions](#layout-changes).
2. Select the name of the series you want to display differently from the drop-down menu: in this case **Series 1**.
3. Edit the **Custom settings**; change them to `{ "type": "line" }`.
    ![chart editor](attachments/charts/charts-widget-bar-line-combination.png)
4. Copy the the custom settings.
5. In Studio Pro, open the **Series 1** configuration.
6. Paste the new configuration for the data into the **(Layout) Options** property in the **Advanced** tab.

    ![chart editor](attachments/charts/charts-widget-bar-line-combination-properties.png)

After the changes, the chart looks like this:

![chart editor](attachments/charts/charts-widget-bar-line-combination-result.png)

## 5 Changing the Configuration 

To create custom a configuration, follow these steps:

1. Repeat steps 1 to 8 from the [layout instructions](#layout-changes).
2. Select **Configuration** from the drop-down menu.
3. Edit the **Custom settings**, change them to `{ "displayModeBar": true }`.
4. Add more Custom settings as desired. See [here](https://plot.ly/javascript/configuration-options/) for more configuration settings.
5. The changes made in the editor are not persistable; copy the required settings.
6. Paste the new configuration into the **Configuration options** property in the **Advanced** tab.
    ![chart editor](attachments/charts/charts-widget-properties-advanced-config.png)
7. Change **Mode** to **Advanced**, set Studio Pro to remove the **Toggle Editor** button.

    {{% alert type="warning" %}}Please note that the advanced settings only apply to the chart in Advanced or Developer mode{{% /alert %}}

    ![chart editor](attachments/charts/charts-config-toolbar.png)

## 6 Read More

Reference for the [advanced properties](/refguide/charts-configuration#advanced)

Layout options: [cheat sheet](/refguide/charts-advanced-cheat-sheet#layout-all)  
Configuration options: [cheat sheet](/refguide/charts-advanced-cheat-sheet#config-options)  
Data series options: [cheat sheet](/refguide/charts-advanced-cheat-sheet#data-series)  

Full reference: https://plot.ly/javascript/
