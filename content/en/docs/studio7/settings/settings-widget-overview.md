---
title: "Widget Overview"
url: /studio7/settings-widget-overview/
category: "Settings"
description: "Describes the Widget Overview tab in Mendix Studio."
menu_order: 20
tags: ["studio", "settings", "widgets"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

**Widget Overview** contains information on Mendix Marketplace widgets and local widgets in your app. For more details on widgets, see [Widgets](/studio7/page-editor-widgets/).

## 2 Widget Overview in App Settings

**App Settings** contains **Widget Overview** – an overview of all Marketplace widgets and local widgets in your app.

{{< figure src="/attachments/studio7/settings/settings-widget-overview/widget-overview.png" >}}

The following types of widgets are included into the widget overview of the App Settings:

* Marketplace widgets that are Studio approved, which are either, widgets that have been added by default when you created your app, or widgets you can download from the [Marketplace](/appstore/) to your app directly from Studio (for more information on widgets, see [Widgets](/studio7/page-editor-widgets/))
* Local widgets – widgets created by users in Studio Pro (you can create local widgets yourself via Studio Pro, for more information, see [Custom Widget Development](/howto7/widget-development/))

In the App Settings the following columns are displayed:

| Column            | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| Name              | Contains the following information on the widget: <ul><li>Widget icon</li><li> Name – the name of a single widget or the group of widgets</li><li>Version – the version of the widget installed in your app <li>Contributor's name – the name of the contributor who uploaded widgets in the Marketplace</li><li>Number of widgets in a package (when applicable) with a drop-down listing the widget names</li> |
| Support Level     | Indicates the level of Support for Marketplace content. It is determined by the content support category and the Service Level Agreement (SLA) the user possesses.<br />The following support categories can be displayed in this column: <ul><li>**Platform Support** – Mendix supports all the content in this category when you are equipped with an Service Level Agreement (**platform**, **gold**, or **platinum**) with Mendix. Content in this category is proactively incorporated into test cycles as part of our platform release management. </li><li>**Community Support** – content is provided as-is by members of our Community and support depends on the availability and effort of the owner. </li></ul> For more information, see [Marketplace Content Support](/appstore/general/app-store-content-support/). |
| Status            | Indicates if the update is available. Click **Update Available** to update the particular widget. When the widget is updated, the new version of this widget is displayed in the **App Settings**. Also, the widget is updated on all pages where it is used. **Note** You may have a situation that the new version properties differ from the old one, and you can get consistency errors when publishing. For details on errors, see [Checks](/studio7/checks/). |
| **Delete** button | Deletes the widget from your app and from all pages where it was used. |

## 3 Read More

* [General Info](/studio7/general/)
* [Marketplace Content Support](/appstore/general/app-store-content-support/)
