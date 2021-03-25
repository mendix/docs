---
title: "Maps"
category: "Widgets"
description: "Describes the configuration and usage of the Maps widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "maps", "google maps", "openstreetmap", "mapbox", "here maps", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Maps](https://appstore.home.mendix.com/link/app/108261/) widget enables showing locations on maps. It supports the following different map providers:

* [Google Maps](https://www.google.com/maps/)
* [OpenStreetMap](https://www.openstreetmap.org)
* [Mapbox](https://www.mapbox.com)
* [HERE maps](https://www.here.com/)

## 2 Basic Usage

For the easiest way to get started with a basic map in your application, follow these steps:
1. Drag a **Maps** widget onto your page.
2. Go to the widget properties and add a Google Maps access token under **General > Configurations > Google maps API Key**
3. Under the **General > Markers** properties section, select **New** for **Markers**.
4. Create a new location marker based on either **latitude and longitude** or an **address**.

If you want to configure more of your map, like how users can interact, the styling, or use a different map provider, please refer to next section for a detailed overview of all the settings and their possibilities.

## 3 Settings

### 3.1 Map Provider

By default, the Maps widget will use Google Maps.
To change the map provider, go to the **General** properties of the map and enable the **Advanced > Show advanced** setting.
This will introduce a new **Advanced** tab in the setting window.
In there, all the above mentioned map providers are available to pick from.

### 3.2 Access Token

For all map types except OpenStreetMap, you need to have a token in order to view the map.
The appropriate tokens can be retrieved via the links to the map types listed in the [Introduction](#intro) section above.
After obtaining the access token, it can be provided to the widget in the **General > Configurations** widget settings section.
For Google Maps the **Google maps API Key** property should be used, while for the other map providers the **API key** property should be used.

_Please note that placing markers based on addresses does not work without an access token set for **General > Configurations > Google maps API key**.
This is especially relevant if you're opting into one of the non-Google maps providers, since you should still provide a Google maps API access token if you want to specify markers through their address.
The token is necessary for converting addresses to their corresponding latitude and longitude values, which in turn are used to place the markers.
If no Google maps API token is provided, the map is still usable but markers based on addresses will not be shown._

### 3.3 Current Location

If you want to show the user's location on the map, this can be enabled under **General > Configurations > Show current location marker**.

### 3.4 Markers

To enhance the map widget, locations can be marked on the map by providing them in the widget through **General > Markers**.
If exactly one location is provided, the map will center to that location.
If multiple locations are provided, the map will center to a position in which all markers are visible.
If no location is provided, a default center location of the Mendix offices is provided.

There are two ways to specify locations to be marked, either **based on latitude and longitude** or **based on address**. 
Providing either of them is also the only requirement for creating a marker.
Each individual marker can be customized in the following way:
* Each marker can be provided a title that will be displayed when clicking on the marker as a popup through the **Location > Title** setting.
* The icon of the location marker is also customizable through the individual marker's setting **Visualization > Marker style**. Setting it to _Image_ allows you to customize it with either a static resource or dynamic entity.
* An event handler can be attached to the marker to trigger when an user clicks on it through the **Events > On click** setting.

To make the process of marking batches of locations easier, there's also the possibility to specify entire lists of markers at once.
This can be done through the **General > Markers > Marker list** setting and requires a data source.
All the usual Mendix data source settings apply here, as well as the same marker requirements and customizability as the individual markers. 

### 3.5 Controls

Under the **Controls** properties tab, the following settings can be adjusted that are related to how the users interacts with the map:
* **Drag**: When enabled, the map will move along when dragging the map.
* **Scroll to zoom**: When enabled, the user can change the zoom level of the map by mouse scrolling on desktop or using pinch gestures on mobile.*
* **Zoom**: When enabled, additional control buttons will be shown on the map
* **Attribution**: When enabled, attributions will be shown at the bottom of the map (credits).

If you're using Google Maps provider, there will be some additional controls available:
* **Street view**: When enabled, the user will have an icon button available in the bottom right corner to view the map in Google's street view mode.
* **Map type**: When enabled, the user will be provided control buttons in the top left corner to change the type of the map. Options available are **Map**, with or without a **Terrain** layer, and **Satellite**, with or without a **Labels** layer. By default this is set to **Map** without the **Terrain** layer.
* **Full screen**: When enabled, the user will have an icon button available in the top right corner to view the map in full screen.

_\* - When using the Google Maps provider, the **scroll to zoom** setting requires the **drag** setting to be enabled in order to work._

### 3.6 Dimensions

Under the **Dimensions** properties tab, the following settings can be adjusted that are related to dimensional aspects of the map widgets:
* **Width unit** and **Width**: The width of the widget in relation to the rest of the elements on the page. The available options for unit are _Percentage_ and _Pixels_. The width can then be set as an appropriate CSS value. These two properties need to be used together to work.
* **Height unit** and **Height**: The height of the widget in relation to the rest of the elements on the page. The available options for unit are _Percentage of width_, _Pixels_, and _Percentage of parent_. The height can then be set as an appropriate CSS value. These two properties need to be used together to work.
* **Zoom level**: The starting zoom level of the map. Options are: Automatic, World, Continent, City, Street, and Buildings. Please keep in mind when using this feature with multiple marked locations, the level of zoom chosen here will be applied after the map has centered to a position in which all markers are visible. 

## 4 Widgets Below Version 2.0.0

### 4.1 Introduction {#intro}

The [Maps](https://appstore.home.mendix.com/link/app/108261/) widget enables showing locations on maps. These are the available map types:

* [Google Maps](https://www.google.com/maps/)
* [OpenStreetMap](https://www.openstreetmap.org)
* [Mapbox](https://www.mapbox.com)
* [HERE maps](https://www.here.com/)

#### 4.1.1 Features

* Show a location on a map based on coordinates
* Show a list of coordinates on the map
* Support for multiple data sources
* Support actions when a marker is clicked:
	* Open a page
	* Call a microflow or nanoflow
* Customize the display of the marker – if the marker cannot be found from the custom markers, the widget uses the specified custom markers; otherwise, it uses the widget-bundled marker

#### 4.1.2 Limitations

* Addresses are not supported
* Context and static data sources are offline-capable with Mendix data, but you still need to be online to view the map
* For all map types except OpenStreetMap, you need to have a token in order to view the map – you can get the tokens via the links to the map types listed in the [Introduction](#intro) section above
* Google maps uses [Google Maps API v3](https://cloud.google.com/maps-platform/), so the limitations from Google [Premium Plan Usage Rates and Limits](https://developers.google.com/maps/premium/usage-limits) apply

#### 4.1.3 Demo App

For a demo app that has been deployed with this widget, see [here](https://leafletmaps.mxapps.io/).

### 4.2 How the Widget Works

Locations are displayed based on coordinates. If there is one location, the map will center to that location. If there are multiple locations, the map will center to a position in which all markers are visible. If no location is available, a default center location of the Mendix offices is provided (in case default center coordinates are not specified).

If auto-zoom is enabled, the map uses bounds zoom; otherwise, it uses the custom zoom level specified. The minimum zoom level is 2, and the maximum is 20.

### 4.3 Usage

To add a basic map to your application, follow these steps:

1. On the **Map properties** tab, select **New** for **Locations**.
2. On the **Data source** tab of the **Edit Locations Item** dialog box, select **Context** for **Data source**.
3. Set the **Locations entity**, **Latitude attribute**, and **Longitude attribute**.
4. On the **Markers** tab of the **Edit Locations Item** dialog box, you can configure a marker icon:
	* **Default** – displays the widget-bundled marker
	* **Static** – upload a static **Image** (for best results, use a PNG file at 32px width and 32px height where the bottom pin is at the center of the image)
	* **System image** – add a **System image path** that is a reference to the locations enity (the entity selected should inherit from **System.Image**, because an error will be displayed otherwise); upload an image into the database to view the system image marker at runtime
	* **Marker list** – add an enumeration containing the name and caption of the markers to your app and assign that enumeration to the locations entity; then, on the **Marker image list** tab back on the **Edit Maps** dialog box, click **New** for **Images** to specify the enumeration key **Value** and the **Image**
5. Back on the **Map properties** tab, select a **Map provider**.
6. Fill in the **Access token** field according to the following scenarios;
	* For **Mapbox** and **Google Maps**, add an access token
	* For **HERE maps**, add an app ID and app code

### 5 Developing This Marketplace Component

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendix/maps](https://github.com/mendix/maps/issues).
