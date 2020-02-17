---
title: "Maps"
category: "Widgets"
description: "Describes the configuration and usage of the Maps widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "maps", "google maps", "openstreetmap", "mapbox", "here maps", "platform support"]
draft: true
---

## 1 Introduction {#intro}

The [Maps](https://appstore.home.mendix.com/link/app/108261/) widget enables showing locations on maps. These are the available map types:

* [Google Maps](https://www.google.com/maps/)
* [OpenStreetMap](https://www.openstreetmap.org)
* [Mapbox](https://www.mapbox.com)
* [HERE maps](https://www.here.com/)

### 1.1 Features

* Show a location on a map based on coordinates
* Show a list of coordinates on the map
* Support for multiple data sources
* Support actions when a marker is clicked:
	* Open a page
	* Call a microflow or nanoflow
* Customize the display of the marker – if the marker cannot be found from the custom markers, the widget uses the specified custom markers; otherwise, it uses the widget-bundled marker

### 1.2 Limitations

* Addresses are not supported
* Context and static data sources are offline-capable with Mendix data, but you still need to be online to view the map
* For all map types except OpenStreetMap, you need to have a token in order to view the map – you can get the tokens via the links to the map types listed in the [Introduction](#intro) section above
* Google maps uses [Google Maps API v3](https://cloud.google.com/maps-platform/), so the limitations from Google [Premium Plan Usage Rates and Limits](https://developers.google.com/maps/premium/usage-limits) apply

### 1.3 Demo App Project

For a demo app project that has been deployed with this widget, see [here](https://leafletmaps.mxapps.io/).

## 2 How the Widget Works

Locations are displayed based on coordinates. If there is one location, the map will center to that location. If there are multiple locations, the map will center to a position in which all markers are visible. If no location is available, a default center location of the Mendix offices is provided (in case default center coordinates are not specified).

If auto-zoom is enabled, the map uses bounds zoom; otherwise, it uses the custom zoom level specified. The minimum zoom level is 2, and the maximum is 20.

## 3 Usage

To add a basic map to your application, follow these steps:

1. On the **Map properties** tab, select **New** for **Locations**.
2. On the **Data source** tab of the **Edit Locations Item** dialog box, select **Context** for **Data source**.
3. Set the **Locations entity**, **Latitude attribute**, and **Longitude attribute**.
4. On the **Markers** tab of the **Edit Locations Item** dialog box, you can configure a marker icon:
	* **Default** – displays the widget-bundled marker
	* **Static** – upload a static **Image** (for best results, use a PNG file at 32px width and 32px height where the bottom pin is at the center of the image)
	* **System image** – add a **System image path** that is a reference to the locations enity (the entity selected should inherit from **System.Image**, because an error will be displayed otherwise); upload an image into the database to view the system image marker at runtime
	* **Marker list** – add an enumeration containing the name and caption of the markers to your app project and assign that enumeration to the locations entity; then, on the **Marker image list** tab back on the **Edit Maps** dialog box, click **New** for **Images** to specify the enumeration key **Value** and the **Image**
5. Back on the **Map properties** tab, select a **Map provider**.
6. Fill in the **Access token** field according to the following scenarios;
	* For **Mapbox** and **Google Maps**, add an access token
	* For **HERE maps**, add an app ID and app code

## 4 Developing This App Store Component

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendix/maps](https://github.com/mendix/maps/issues).
