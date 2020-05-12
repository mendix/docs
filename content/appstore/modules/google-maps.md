---
title: "Google Maps"
category: "Modules"
description: "Describes the configuration and usage of the Google Maps module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "google maps","platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Google Maps](https://appstore.home.mendix.com/link/app/174/) module lets you work on latitude/longitude, among other features. The module contains a Java action that geocodes addressess with the Google geocoding service. All you need to do is connect the module to your user information entity with a reference.

{{% alert type="warning" %}}
Disclaimer: before using this module, make sure you read the [Google Maps APIs Terms of Service](https://developers.google.com/maps/terms-20180207) and [Google Maps Platform Terms of Service](https://cloud.google.com/maps-platform/terms), which states that the latitude/longitude coordinates retrieved with their service can only be used in combination with Google Maps.
{{% /alert %}}

### 1.1 Features

* No geo-coordinate calculations needed in the client
* Not constrained by an hourly limit

## 2 Configuration

To configure this module, follow these steps:

1. Load the module into your app project.
2. Connect the **Location** entity to the entity that needs to be displayed on a Google Map:
	* Option 1: Use a reference and have the widget load the attributes over it
	* Option 2: Inherit/generalize from **Location** (for more information, see [Generalization vs One-to-One Associations](/refguide/generalization-and-association))
3. Set the [Google Maps widget](../widgets/google-maps) to show your objects as needed.
   
## 3 Read More

* [Google Maps widget](../widgets/google-maps)

