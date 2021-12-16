---
title: "Google Maps"
category: "Widgets"
description: "Describes the configuration and usage of the Google Maps widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "google maps", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This module is deprecated. You can use the [Maps](/appstore/widgets/maps) widget instead.
{{% /alert %}}

## 1 Introduction

The [Google Maps](https://marketplace.mendix.com/link/component/48911/) widget can be used to show Google Maps locations in your app.

### 1.1 Features

* Show the location on a map based on an address or a coordinate
* Show a list of both addresses and coordinates on the map
* Use the context, static, XPath, or microflow data sources
* Customize the display of the marker (if the marker cannot be found, the widget will use the specified custom marker; otherwise, it will use the marker bundled with the widget)

### 1.2 Limitations

* The context and static data sources are offline-capable with Mendix data; however, they still need to be online to see the map.
* The widget uses [Google Maps API v3](https://developers.google.com/maps/documentation/javascript/reference/), so the limitations from Google apply, especially for geocoding; advise geocoding your locations within your Mendix application and storing them for later use as coordinates on the widget is recommended

### 1.3 Prerequisites

To use the widget, you need to obtain a Google API Key.

{{% alert type="warning" %}}
Make sure that you keep the API key secure. For more information, see [API security best practices](https://developers.google.com/maps/api-security-best-practices).
{{% /alert %}}

## 2 How It Works

When displaying locations, the widget will prioritize coordinates over addresses. If the coordinate is not specified, it will use address. If there are multiple locations, the map will be centered based on the default address specified. However, if there is only a single point in the list, the map will center to that point.

When the zoom level is zero, then the map will use the bounds zoom. When the default center is not specified, the map will use the bounds center.

## 3 Configuration

### 3.1 Data Sources

#### 3.1.1 Static Tab

For the static data source option, click **Static locations** > **New** to add static locations.

#### 3.1.2 Database / Microflow Tab

For the XPath data source option, specify the **Locations entity** and the **XPath constraint** (if any).

For the microflow data source option, specify the **Locations entity** and the **Microflow** from which the map locations will be retrieved.

### 3.2 Appearance Tab

The properties on this tab are used to configure how the map responsively looks in relation to the container in which it is placed.

### 3.3 Markers Tab

This is used to configure how the marker icon should look. The markers are created based on enumerations. An enumeration containing the name and caption of the markers should be created within your app, and that enumeration is then assigned to the **Location** entity. From the **Markers** tab, the enumeration key and image is then specified in **Images**.
