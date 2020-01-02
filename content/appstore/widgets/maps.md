---
title: "Maps"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

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
* For all map types except OpenStreetMap, you need to have a token in order to view the map – you can get the tokens via the links to the map types listed above
* Google maps uses [Google Maps API v3](https://cloud.google.com/maps-platform/), so the limitations from Google [Premium Plan Usage Rates and Limits](https://developers.google.com/maps/premium/usage-limits) apply

### 1.3 Demo App Project

For a demo app project that has been deployed with this widget, see [here](https://leafletmaps.mxapps.io/).

## 2 How the Widget Works

Locations are displayed based on coordinates. If there is one location, the map will center to that location. If there are multiple locations, the map will center to a position in which all markers are visible. If no location is available, a default center location of the Mendix offices is provided (in case default center coordinates are not specified).

If auto-zoom is enabled, the map uses bounds zoom; otherwise, it uses the custom zoom level specified. The minimum zoom level is 2, and the maximum is 20.

## 3 Usage

To add a basic map to your application, follow these steps:

1. On the **Map properties** tab, select **New**. 
2. On the **Data source** tab of the dialog box that opens, select **Context** for **Data source**.
3. Set the **Locations entity**, **Latitude attribute**, and **Longitude attribute**.s
* Under the Map properties tab, select a Map provider
* Add Access token if Map provider is not Open street
* Run the application and add some locations
* For Here maps add app ID, app code respectively.

Locations
Data source: Static

    On the Map properties tab, select new on the locations option
    Under Data source tab, Select Static
    On the Static tab add new static locations

static
Data source: Xpath

    On the Map properties tab, select new on the locations option
    Select Database, Add the locations entity
    Add the Latitude and Longitude attributes
    Add an XPath Constraint Optional

Custom Markers

NOTE

For best results (see image), your custom marker must be

    PNG
    32px width 32px height
    The bottom pin must be on the center of the image

customMarker

    It is used to configure how the marker icon should be look.
    Under locations option on the Map properties tab, select the Markers tab
    For the Default option, the widget bundled marker will be displayed
    For the Static option, upload a static image
    For the System image option, add a system image path, which is a reference to the locations enity. The entity selected should inherit from System.Image otherwise it will display an error.
    Upload an image into the database to view the system image marker at runtime
    Markers can also be created based on enumeration. Select the Marker list option, then add an enumeration containing the name and caption of the markers to your project and assign that enumeration to the Locations entity.
    Markers
    From the Marker image list tab, the enumeration key and image is then specified under Images
    Enumeration markers

Issues, suggestions and feature requests

We are actively maintaining this widget, please report any issues or suggestion for improvement at
https://github.com/mendix/maps/issues.
