---
title: "Google Maps"
deprecated: true
url: /appstore/widgets/google-maps/
description: "Describes the configuration and usage of the Google Maps widget, which is available in the Mendix Marketplace."
aliases:
    - /howto/front-end/style-google-maps/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This widget is deprecated. You can use the [Maps](/appstore/widgets/maps/) widget instead.
{{% /alert %}}

## Introduction

The [Google Maps](https://marketplace.mendix.com/link/component/48911/) widget can be used to show Google Maps locations in your app.

For information on styling your Google Maps widget, see the [Style Google Maps](#style-google-maps) section below.

### Features

* Show the location on a map based on an address or a coordinate
* Show a list of both addresses and coordinates on the map
* Use the context, static, XPath, or microflow data sources
* Customize the display of the marker (if the marker cannot be found, the widget will use the specified custom marker; otherwise, it will use the marker bundled with the widget)

### Limitations

* The context and static data sources are offline-capable with Mendix data; however, they still need to be online to see the map.
* The widget uses [Google Maps API v3](https://developers.google.com/maps/documentation/javascript/reference/), so the limitations from Google apply, especially for geocoding; advise geocoding your locations within your Mendix application and storing them for later use as coordinates on the widget is recommended

### Prerequisites

To use the widget, you need to obtain a Google API Key.

{{% alert color="warning" %}}
Make sure that you keep the API key secure. For more information, see [API security best practices](https://developers.google.com/maps/api-security-best-practices).
{{% /alert %}}

## How It Works

When displaying locations, the widget will prioritize coordinates over addresses. If the coordinate is not specified, it will use address. If there are multiple locations, the map will be centered based on the default address specified. However, if there is only a single point in the list, the map will center to that point.

When the zoom level is zero, then the map will use the bounds zoom. When the default center is not specified, the map will use the bounds center.

## Configuration

### Data Sources

#### Static Tab

For the static data source option, click **Static locations** > **New** to add static locations.

#### Database / Microflow Tab

For the XPath data source option, specify the **Locations entity** and the **XPath constraint** (if any).

For the microflow data source option, specify the **Locations entity** and the **Microflow** from which the map locations will be retrieved.

### Appearance Tab

The properties on this tab are used to configure how the map responsively looks in relation to the container in which it is placed.

### Markers Tab

This is used to configure how the marker icon should look. The markers are created based on enumerations. An enumeration containing the name and caption of the markers should be created within your app, and that enumeration is then assigned to the **Location** entity. From the **Markers** tab, the enumeration key and image is then specified in **Images**.

## Style Google Maps {#style-google-maps}

Google Maps is a very powerful addition to your applications. You can use it to display locations, areas, routes, etc. By default every map overview looks the same, like on the default Google Maps website. There is now a new option available on the Google Maps widget to style the map overview to make it match your application design. Follow the steps below to sauce-up the map overviews in your applications with a minimal amount of effort!

**After completing this styling guide, you will know:**

* How to configure the new style feature of the Google Maps widget
* Find and implement the right style matching your application
* Upload new styles to support the community

## Preparation

Before you start this styling guide, please make sure you have completed the following prerequisite:

* Have the latest version of the [Google Maps](https://marketplace.mendix.com/link/component/48911/) widget in your app

{{% alert color="warning" %}}
These instructions are for the Google Maps widget which you can download from the Marketplace. The Google Maps widget within the Atlas UI template has different options.
{{% /alert %}}

## Adding the Style

### Widget Properties

In this chapter you will learn how to add styling to the Google Maps widget.

1. Open the properties of your Google Maps widget and go to the **Customisation** tab.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/style-google-maps/customisation-tab.png" class="no-border" >}}

2. Simply enter the style in the **Style Array** section and you're done!
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/style-google-maps/new-styling.png" class="no-border" >}}

    Here is the example styling:

    ```json
    [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]}]
    ```

3. The example style will give you this result:
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/style-google-maps/style-example.png" class="no-border" >}}

### Finding the Right Style

Choosing an existing style sheet from a large library that fits your application will save you a lot of time. Here is a community website where new styles are uploaded on a regular basis: [https://snazzymaps.com/](https://snazzymaps.com/).

1. On the website click **Explore:**
2. Explore the styles to find one that matches your application and click it:
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/style-google-maps/snazzymaps-style.png" class="no-border" >}}
3. On the lefthand pane you will see the style array:
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/style-google-maps/snazzymaps-style-array.png" class="no-border" >}}
4. Now simply press **Copy.** The style is copied to your clipboard.
5. Open the **Customisation** tab of the Google Maps widget and paste the style array you just copied from snazzymaps:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/style-google-maps/snazzymaps-styling.png" class="no-border" >}}

    The style array:

    ```json
    [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
    ```

6. And there it is:
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/style-google-maps/new-style-example.png" class="no-border" >}}

### Upload Your Own Style Array

Using community tools, this is how you can upload your own custom style array to the website:

1. Go-to Snazzymaps and click **Create.**
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/style-google-maps/snazzymaps.png" class="no-border" >}} 
2. Now you will see the same sort of handy quick style method that Mendix provides at the [Atlas 3](https://atlas.mendix.com/) site.
    {{< figure src="/attachments/appstore/platform-supported-content/widgets/style-google-maps/custom-snazzymaps.png" class="no-border" >}} 

    Happy app building!
