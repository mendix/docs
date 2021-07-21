---
title: "Image Viewer"
category: "Widgets"
description: "Describes the configuration and usage of the Image Viewer widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "image viewer", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Image Viewer](https://marketplace.mendix.com/link/component/65122/) widget displays an image and optionally performs an on-click action (enlarging to mobile-friendly, opening a page, or calling a mircoflow).

### 1.1 Features

* Supports different data sources:
	* Set a static image
	* Retrieve an image from a static URL
	* Retrieve an image from the URL attribute of a context object
	* Retrieve an image from **System.Images**
* Supports the following actions:
	* Enlarge and pinch zoom
	* Open page
	* Call a microflow or nanoflow

### 1.2 Demo App

For a demo app that has been deployed with these widgets, see [here](https://imageviewer.mxapps.io/).

## 2 Usage

The widget requires a context via the following available data sources:

* Dynamic image
	* For the **Data source** option of the **General** tab, select the dynamic image
	* The widget will pick the image from the context object (context object should inherit from the **system.image** entity)
	* Refer to the **Appearance** section for configuring the height and width
* Dynamic URL attribute
	* For the **Data source** option of the **General** tab, select the dynamic URL
	* Select the attribute from the context objext that contains the URL of the image
	* Refer to the **Appearance** section for configuring the height and width
* Static URL
	* For the **Data source** option of the **General** tab, select the static URL
	* Specify the URL that points to the image (a URL outside the Mendix Platform)
	* Refer to the **Appearance** section for configuring the height and width
* Static image
	* For the **Data source** option of the **General** tab, select the static image
	* Click **Select** to add static images from Studio Pro
	* Refer to the **Appearance** section for configuring the height and width
