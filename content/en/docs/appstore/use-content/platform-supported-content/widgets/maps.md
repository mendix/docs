---
title: "Maps"
url: /appstore/widgets/maps/
description: "Describes the configuration and usage of the Maps widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction {#introduction}

The [Maps](https://marketplace.mendix.com/link/component/108261/) widget enables showing locations on maps. It supports the following map providers:

* [Google Maps](https://www.google.com/maps/)
* [OpenStreetMap](https://www.openstreetmap.org)
* [Mapbox](https://www.mapbox.com)
* [HERE maps](https://www.here.com/)

## Basic Usage

For the easiest way to get started with a basic map in your application, follow these steps:

1. Drag the **Maps** widget onto your page.
2. Open the widget properties and add a Google Maps access token in **General** > **Configurations** > **Google Maps API Key**.
3. In the **General** > **Markers** properties section, select **New** for **Markers**.
4. Create a new location marker based on either **Latitude and longitude** or an **Address**.

If you want to configure more of your map (for example, end-user interactions and styling) or use a different map provider, see the [Settings](#settings) section below.

{{% alert color="info" %}}
If you are using Google Maps, be sure to include an empty JSON array (specifically `{}`) in **Advanced** > **Map Styles** so your widget is successfully displayed in your app:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/maps/gmaps.png" class="no-border" >}}

{{% /alert %}}

## Settings {#settings}

### Map Provider

By default, the Maps widget will use Google Maps. 

To change the map provider, go to the **General** properties of the map and enable the **Advanced** > **Show advanced** setting. This will introduce a new **Advanced** tab in the setting window. You can now select one of the map providers listed in the [Introduction](#introduction).

### Access Token

For all the map providers except OpenStreetMap, you need to have a token in order to view the map. The appropriate tokens can be retrieved via the links to the map types listed in the [Introduction](#introduction).

After obtaining the access token, provide it to the widget in the **General** > **Configurations** widget settings. For Google Maps, the **Google Maps API Key** property should be used, while for the other map providers the **API key** property should be used.

{{% alert color="warning" %}}
Make sure that you keep the API key secure. For more information, see [API security best practices](https://developers.google.com/maps/api-security-best-practices).
{{% /alert %}}

{{% alert color="info" %}}
Placing markers based on addresses does not work without an access token set for **General** > **Configurations** > **Google Maps API key**. This is especially relevant if you are opting into one of the non-Google Maps providers, since you should still provide a Google Maps API access token if you want to specify markers through their address.
The token is necessary for converting addresses to their corresponding latitude and longitude values, which in turn are used to place the markers. If no Google Maps API token is provided, the map is still usable, but markers based on addresses will not be shown.
{{% /alert %}}

### Current Location

To show the user's location on the map, enable this in **General** > **Configurations** > **Show current location marker**.

### Markers

To enhance the map widget, you can mark locations on the map by providing them in the widget through **General** > **Markers**. The following conditions apply:

* If exactly one location is provided, the map will center to that location
* If multiple locations are provided, the map will center to a position in which all markers are visible
* If no location is provided, a default center location of the Mendix offices is provided

There are two ways to specify locations to be marked, either **Based on latitude and longitude** or **Based on address**. Providing either of these is also the only requirement for creating a marker.

You can customize each individual marker in the following ways:

* You can provide each marker with a title that will be displayed in a pop-up window when the marker is clicked via the **Location** > **Title** setting
* You can customize the icon of the location marker via the individual marker's setting in **Visualization** > **Marker style** (setting it to *Image* allows you to customize it with either a static resource or dynamic entity)
* You can attach an event handler to the marker to trigger when an end-user clicks it via the **Events** > **On click** setting

To make the process of marking batches of locations easier, it is also possible to specify entire lists of markers at once. You can do this through the **General** > **Markers** > **Marker list** setting, which requires a data source. All the usual Mendix data-source settings apply here, as well as the same marker requirements and customizability as the individual markers. 

### Controls

Under the **Controls** properties tab, you can adjust the following settings related to how an end-user interacts with the map:

* **Drag** – when enabled, the map will move along when dragging the map
* **Scroll to zoom** – when enabled, the end-user can change the zoom level of the map by mouse-scrolling on a desktop machine or using pinch gestures on mobile
    * Note that when using the Google Maps provider, this setting requires the **Drag** setting to be enabled in order to work
* **Zoom** – when enabled, additional control buttons are shown on the map
* **Attribution** – when enabled, attributions (credits) are shown at the bottom of the map 

If you are using the Google Maps provider, these additional controls are available:

* **Street view** – when enabled, there is a button available in the lower-right corner of the map to view the map in Google's Street View mode
* **Map type** – when enabled, there are control buttons in the upper-left corner of the map to change the type of the map
    * The available options are **Map**, with or without a **Terrain** layer, and **Satellite**, with or without a **Labels** layer
    * By default, this is set to **Map** without the **Terrain** layer
* **Full screen** – when enabled, there is a button available in the upper-right corner of the map to view the map in full screen

### Dimensions

Under the **Dimensions** properties tab, you can adjust the following settings that are related to dimensional aspects:

* **Width unit** and **Width** – the width of the widget in relation to the rest of the elements on the page
    * The available **Width unit** options are **Percentage** and **Pixels**
    * The **Width** can be set as an appropriate CSS value
    * These two properties need to be used together to work
* **Height unit** and **Height** – the height of the widget in relation to the rest of the elements on the page
    * The available **Height unit** options **Percentage of width**, **Pixels**, and **Percentage of parent**
    * The **Height** can be set as an appropriate CSS value
    * These two properties need to be used together to work
* **Zoom level** – the starting zoom level of the map
    * The available options are: **Automatic**, **World**, **Continent**, **City**, **Street**, and **Buildings**
    * Note that when using this setting with multiple marked locations, the level of zoom chosen here will be applied after the map has centered to a position in which all markers are visible

## Strict CSP Compatibility

This widget is not yet fully compliant with strict content security policy (CSP). If used with strict CSP, it will result in CSP errors in the console and potentially broken flows in the widget.

Please refer to the [Maps CSP](/appstore/widgets/security/content-security-policy/maps-csp/) guide for more detail.

## Widgets Below Version 2.0.0

The Maps widget enables showing locations on maps. These are the available map types:

* [Google Maps](https://www.google.com/maps/)
* [OpenStreetMap](https://www.openstreetmap.org)
* [Mapbox](https://www.mapbox.com)
* [HERE maps](https://www.here.com/)

Features:

* Show a location on a map based on coordinates
* Show a list of coordinates on the map
* Support for multiple data sources
* Support actions when a marker is clicked:
    * Open a page
    * Call a microflow or nanoflow
* Customize the display of the marker – if the marker cannot be found from the custom markers, the widget uses the specified custom markers; otherwise, it uses the widget-bundled marker

Limitations:

* Addresses are not supported
* Context and static data sources are offline-capable with Mendix data, but you still need to be online to view the map
* For all map types except OpenStreetMap, you need to have a token in order to view the map – you can get the tokens via the links to the map types listed above
* Google maps uses [Google Maps API v3](https://cloud.google.com/maps-platform/), so the limitations from Google [Premium Plan Usage Rates and Limits](https://developers.google.com/maps/premium/usage-limits) apply

Locations are displayed based on coordinates. If there is one location, the map will center to that location. If there are multiple locations, the map will center to a position in which all markers are visible. If no location is available, a default center location of the Mendix offices is provided (in case default center coordinates are not specified).

If auto-zoom is enabled, the map uses bounds zoom; otherwise, it uses the custom zoom level specified. The minimum zoom level is 2, and the maximum is 20.

To add a basic map to your application, follow these steps:

1. On the **Map properties** tab, select **New** for **Locations**.
2. On the **Data source** tab of the **Edit Locations Item** dialog box, select **Context** for **Data source**.
3. Set the **Locations entity**, **Latitude attribute**, and **Longitude attribute**.
4. On the **Markers** tab of the **Edit Locations Item** dialog box, you can configure a marker icon:
    * **Default** – displays the widget-bundled marker
    * **Static** – upload a static **Image** (for best results, use a PNG file at 32px width and 32px height where the bottom pin is at the center of the image)
    * **System image** – add a **System image path** that is a reference to the locations entity (the entity selected should inherit from **System.Image**, because an error will be displayed otherwise); upload an image into the database to view the system image marker at runtime
    * **Marker list** – add an enumeration containing the name and caption of the markers to your app and assign that enumeration to the locations entity; then, on the **Marker image list** tab back on the **Edit Maps** dialog box, click **New** for **Images** to specify the enumeration key **Value** and the **Image**
5. Back on the **Map properties** tab, select a **Map provider**.
6. Fill in the **Access token** field according to the following scenarios;
    * For **Mapbox** and **Google Maps**, add an access token
    * For **HERE maps**, add an app ID and app code
