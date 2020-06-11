---
title: "Widgets"
category: "Pages"
description: "Describes widgets in Mendix Studio."
tags: ["studio", "page editor", "pages", "widgets"]
---

## 1 Introduction

Widgets are single user-interface elements that can be configured: for example, a drop-down menu or different kinds of buttons.

{{% image_container width="300" %}}![](attachments/page-editor-widgets/widgets-examples.png)
{{% /image_container %}}

Widgets in Studio are grouped by category and can be classified by their origin.

## 2 Viewing Widgets

To view widgets in Mendix Studio, do the following:

1. Click the **Pages** icon in the left menu bar.

2. In the displayed list of app pages, select the page you want to open and click it.

3. In the **Toolbox** tab, **Widgets** are opened by default.

   ![](attachments/page-editor-widgets/toolbox-widgets.png)

## 3 Quick Configuration of Widget Properties {#quick-config}

Quick configuration of properties is available for most of the non-custom widgets. This means that their properties can be configured in a pop-up window when adding these widgets on a page. 

Once you drag and drop a widget, a small pop-up window appears next to it. You can set the properties that are necessary for the widget to function without resulting in [consistency errors](consistency-errors) as well as other frequently used properties to help you configure the widget quickly. However, you can configure all properties from the **Properties** tab at all times. 

For example, quickly configuring the data source of a data grid helps you avoid consistency errors when previewing or publishing your app, and you can configure the rest of the properties later.

![](attachments/page-editor-widgets/quick-config.png)

The pop-up window disappears once you start interacting with the page or the menu items, for example, if you start clicking elements on the page or if you open **Toolbox**, **Properties**, **Buzz**. To access the quick configuration pop-up window again, click the gear icon in the top-right corner of the widget:

![](attachments/page-editor-widgets/quick-widget-icon.png)

## 4 Widgets by Category {#widget-categories}

Widgets of Studio are divided into categories that you can see when you open the **Widgets** tab.

{{% image_container width="350" %}}![](attachments/page-editor-widgets/widgets-categories.png)
{{% /image_container %}}

Widget categories are described in the table below:

| Widget Category                                      | Description                                                  | Link to More Detailed Documentation                          |
| ---------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Data Containers                                      | Contains a data view (the starting point for showing the contents of one object),  list view (the starting point for showing the contents of list of objects), and a data grid (shows a list of objects in a table format). | [Data View & List View Properties](page-editor-data-view-list-view)<br />[Data Grid Properties](page-editor-data-grid) |
| [Structure](page-editor-widgets-structure)           | Contains pre-set layout grids with a specific number of columns and widgets for controlling the placing widgets. | [Structure Widgets](page-editor-widgets-structure)           |
| [Input Elements](page-editor-widgets-input-elements) | Contains elements that can be used for inputting data.       | [Input Element Widgets](page-editor-widgets-input-elements)  |
| [Text](page-editor-widgets-text)                     | Contains text display widgets.                               | [Text Widgets](page-editor-widgets-text)                     |
| [Images](page-editor-widgets-images)                 | Contains image display widgets.                              | [Image Widgets](page-editor-widgets-images)                  |
| [Buttons](page-editor-widgets-buttons)               | Contains a variety of buttons for placing on a page.         | [Button Widgets](page-editor-widgets-buttons)                |
| [Menus](/refguide/menu-widgets)                      | Contains menu creation widgets. Currently, these widgets can be configured only in Studio Pro. | [Menu Widgets](/refguide/menu-widgets) in the *Studio Pro Guide* |
| Add-ons                                              | Contains all custom widgets previously installed in the app. If widgets cannot be matched to the App Store profile they will be shown in the add-ons. |                                                              |
| Charts                                               | Contains different charts. This category consist of the App Store widgets. | section [4 Widgets by Origin](#widgets-by-origin)            |
| Display                                              | Contains widgets which display changing elements on a page, for example a map, or a progress bar. This category consists of the App Store widgets. | section [4 Widgets by Origin](#widgets-by-origin)            |
| List view Controls                                   | Contains controls for the list view. This category consist of the App Store widgets. | section [4 Widgets by Origin](#widgets-by-origin)            |

## 5 Widgets by Origin {#widgets-by-origin}

Widgets in Studio can be divided by origin as shown in the table below:

| Type              | Description                                                  | Origin                                                       |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Default widgets   | Widgets that are included into your app by default and do not have the information icon in the top-right corner. | Apps created in the Developer Portal. For more information on the Developer Portal, see [Developer Portal](https://docs.mendix.com/developerportal/). |
| App Store widgets | Widgets that are you can download to your project directly from Studio. Some App Store widgets are already in your project as a part of the app. Such widgets have the information icon in the top-right corner of widgets in the **Toolbox**. <br />For more information on the App Store, see [App Store Overview](/appstore/general/app-store-overview). | [App Store](/appstore/index)                     |
| Local widgets     | Either widgets that are a part of an app template, or widgets created by your or your team locally via Studio Pro. For more information on developing widgets, see the [Custom Widget Development](/howto/extensibility/widget-development) how-to's. As a rule local widgets will be listed in the **Add-ons** category. For more information on categories, see section [3 Widgets by Category](#widget-categories). | Apps created in the  Developer Portal/Studio Pro        |

## 6 Adding the App Store Widgets

You can add App Store widgets to your app by downloading them directly in the **Widgets** tab in Studio. These widgets are a subset of all widgets available in the App Store: you can only download the ones that are approved for use in Studio. You can also update them if an update is available.

To add an App Store widget, do the following:

1. Open the **Widgets** tab.

2.  Do one of the following: <br />

    a. Find a category with the **View App Store widgets** option and click it.  <br />

    {{% image_container width="300" %}}![](attachments/page-editor-widgets/view-app-store-widgets.png)
    {{% /image_container %}}<br />

    b.  Start typing the name of the category or of a specific widget in the **Search** field. <br />

    ![](attachments/page-editor-widgets/slider.png)

3.  Click the cloud icon to download the widget and add it to your project.

    ![](attachments/page-editor-widgets/app-store-download.png)

The widget is now added to your project, you can simply drag and drop it to the page to use it. You can also view settings of this widget in the **App Settings**.  For more information on managing widgets in your app, see [Settings](settings).

{{% alert type="info" %}}

Some similar widgets are packaged together: downloading one of these widgets will cause a number of other widgets to be downloaded as well. For example, downloading a line chart will give you all chart widgets.

{{% /alert %}}

## 7 Read More 

* [Pages](page-editor)
* [Settings](settings)
* [App Store Overview](/appstore/general/app-store-overview)
