---
title: "Image Viewer"
category: "Widgets"
description: "Describes the configuration and usage of the Image Viewer widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "image viewer", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

<!-- TODO: It's still under consideration whether it will be a new module or overwrite the existing one -->
The [Image Viewer]() widget allows you to display an image within your Mendix web application.

The widget can do the following things:

* Can display an image from the app, an image from the internet using a link, or an icon
* Includes a responsive mode for images 
* Supports configuration of accessibility features
* Allows optional configuration of different on-click actions like enlarging the image, opening a page, calling a microflow, or other Mendix-related actions
* Allows full control over the dimensions of an image
* Allows for additional styling customizations through Atlas UI

## 2 Usage

See the sections below for information on the Image Viewer widget's configurations. 

### 2.1 Data Source

There are several ways to configure a data source for the Image Viewer widget:

* **Image**: Uses an image from the app (this can be either a static image from the system's image collections or a dynamic image retrieved from an **Image** entity of the context object)
* **Image link**: Uses a link to retrieve an image from the internet (the image link can either be static or dynamically retrieved from a String attribute of the context object)
* **Icon**: Displays a Glyphicon instead of an image

### 2.2 Events

These widget properties provide control over situations where the end-user interacts with the widget through their mouse or keyboard:

* **On click type**: Sets the type of the event handler on end-user interaction
	* **Action** (default): Allows you to configure a custom **On click** event handler to execute a Mendix action like calling a microflow, opening a page, doing nothing, and more
	* **Enlarge**: Enlarges the image in a mobile-friendly lightbox

### 2.3 Accessibility

This widget property provide control over the accessibility features of images, such as screen reader compliance:

* **Alternative text**: Optional field to set an alternative text on the image or icon for descriptive purposes

### 2.4 Dimensions

The following widget properties allow you to configure the dimensions of the image to best suit its purpose in your application:

* **Width unit** and **Width**: The width of the widget in relation to the rest of the elements on the page
	* The available **Width unit** options are **Auto** (default), **Pixels**, and **Percentage**
	* Choosing **Auto** will preserve the width of the original image
	* If you opt for **Pixels** or **Percentage**, then the **Width** can be set as an appropriate CSS value (these two properties must be used together to work)
* **Height unit** and **Height**: the height of the widget in relation to the rest of the elements on the page
	* The available **Height unit** options are **Auto** (default) and **Pixels**
	* Choosing **Auto** will preserve the height of the original image
	* If you opt for **Pixels**, then the **Height** can be set as an appropriate CSS value (these two properties must be used together to work)
* **Display as** — The format at which the image is displayed (this feature only works if an image is displayed from an **Image** data source)
	* **Thumbnail**: Shows the smaller sized thumbnail of the image
	* **Full image** (default): Displays the image in its original sized format
* **Responsive** (enabled by default): when enabled, the image will never get larger than its original size (note that it can become smaller and scale with the container)

## 3 Styling

The Image Viewer widget is shipped with default styles and works out of the box without the need for Atlas UI. However, including Atlas UI in the app brings improved styling and customizations, like design properties.

The design properties shipped with Atlas UI for the Image Viewer are as follows:

* **Image style** (Rounded, Circle, Square, None (Default)) – Changes the style of the image.   
* **Center image** (Yes, No (Default)) – Changes whether the image is centered horizontally in its container or not.
* **Image fit** (Fill, Contain, Cover, Scale-down, None (default)) – Changes the fit of the image according to the object-fit CSS property.

## 4 Previous Versions' Documentation

### Widgets Below v2.0.0

#### 1 Introduction

The [Image Viewer](https://appstore.home.mendix.com/link/app/65122/) widget displays an image and optionally performs an on-click action (enlarging to mobile-friendly, opening a page, or calling a mircoflow).

##### 1.1 Features

* Supports different data sources:
	* Set a static image
	* Retrieve an image from a static URL
	* Retrieve an image from the URL attribute of a context object
	* Retrieve an image from **System.Images**
* Supports the following actions:
	* Enlarge and pinch zoom
	* Open page
	* Call a microflow or nanoflow

##### 1.2 Demo App

For a demo app that has been deployed with these widgets, see [here](https://imageviewer.mxapps.io/).

#### 2 Usage

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
