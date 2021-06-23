---
title: "Image Viewer"
category: "Widgets"
description: "Describes the configuration and usage of the Image Viewer widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "image viewer", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

<!-- TODO: It's still under consideration whether it will be a new module or overwrite the existing one -->
The [Image Viewer]() widget enables an image to be displayed within your Mendix web application.

The widget:

* can display an image from the modeler, an image from the internet by link, or an icon
* includes a responsive mode for images out of the box
* supports configuration of accessibility features
* allows optional configuration of different on-click actions, like enlarging the image, opening a page, calling a microflow, or other Mendix related actions
* allows full control over the dimensions of an image
* allows for additional styling customizations through Atlas UI

## 2 Usage

The Image Viewer widget has a lot of different configuration possibilities. In this section, we will cover all of them.

### 2.1 Data Source

There are several ways to configure a data source for the Image Viewer widget.

* **Image** - use an image from the modeler. This can be either a static image from the system's image collections or a dynamic image retrieved from an Image entity of the context object.
* **Image link** - use a link to retrieve an image from the internet. The image link can either be static or dynamically retrieved from a String attribute of the context object.
* **Icon** - to display a glyphicon instead of an image.

### 2.2 Events

These widget properties provide control over situations where the end-user interacts with the widget through clicking.

* **Action** - allows you to configure a custom **On click** event handler with Mendix actions, like calling a microflow, opening a page, doing nothing, and more.
* **Enlarge** - enlarges the image in a mobile-friendly lightbox.

### 2.3 Accessibility

These widget properties provide control over accessibility features of images, which can e.g. enhance the experience of your application through screen readers.

* **Alternative text** - optional field to set an alternative text on the image or icon for descriptive purposes.

### 2.4 Dimensions

The following widget properties allow you to configure the dimensions of the image to best suit its purpose in your application.

* **Width unit** and **Width** – the width of the widget in relation to the rest of the elements on the page
	* The available **Width unit** options are **Auto** (default), **Pixels**, and **Percentage**.
	* Choosing **Auto** will preserve the width of the original image.
	* If you opt for **Pixels** or **Percentage**, then the **Width** can be set as an appropriate CSS value.
	* In those cases, these two properties need to be used together to work.
* **Height unit** and **Height** – the height of the widget in relation to the rest of the elements on the page
	* The available **Height unit** options **Auto** (default) and **Pixels**.
	* Choosing **Auto** will preserve the height of the original image.
	* If you opt for **Pixels**, then the **Height** can be set as an appropriate CSS value.
	* In those cases, these two properties need to be used together to work.
* **Display as** - the format at which the image is displayed. This feature only works if an image is displayed from an **Image** data source.
	* **Thumbnail** - show the smaller sized thumbnail of the image.
	* **Full image** (default) - display the image in its original sized format.
* **Responsive** (enabled by default) - when enabled, the image will never get larger than its original size. However, it can become smaller and scale with the container.

## 3 Styling

The Image Viewer widget is shipped with default styles and works out of the box without the need for Atlas UI. However, including Atlas UI in the app brings improved styling and customizations, like design properties.

The design properties shipped with Atlas UI for the Image Viewer are:

| Name         | Options                                          | Description                                                          |
|--------------|--------------------------------------------------|----------------------------------------------------------------------|
| Image style  | Rounded, Circle, Square, None (default)          | Change the style of the image                                        |
| Center image | Yes, No (default)                                | Whether the image is centered horizontally in its container          |
| Image fit    | Fill, Contain, Cover, Scale-down, None (default) | Change the fit of the image according to the object-fit CSS property |

## 4 Previous Versions' Documentation

### Widgets Below v2.0.0

#### 1 Introduction

The [Image Viewer](https://marketplace.mendix.com/link/component/65122/) widget displays an image and optionally performs an on-click action (enlarging to mobile-friendly, opening a page, or calling a mircoflow).

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
