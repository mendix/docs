---
title: "Image"
category: "Widgets"
description: "Describes the configuration and usage of the Image widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "image", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Image]() widget displays an image and optionally performs an on-click action, like enlarging to mobile-friendly, opening a page, calling a mircoflow, or more.

### 1.1 Features

* Supports different data sources:
	* Set a static image or icon
	* Retrieve an image from a static URL
	* Retrieve an image from the URL attribute of a context object
	* Retrieve an image from **System.Images**
* Supports the following actions:
	* Enlarge and pinch zoom
	* Any Mendix action, like opening a page, calling a microflow, calling a nanoflow, or more

## 2 Configuration

The following sections will describe the different available widget properties and how to configure the Image widget using them.  

### 2.1 General Tab {#general}

#### 2.1.1 Data source Section

The **Data source** section (required) is used to configure the data for the image widget. It has the following properties:

* **Data source** (default: **Image**) - Determines the data source for this Image widget. When set to **Image**, a static or dynamic image can be retrieved. When set to **Image URL**, an image will be loaded from URL, either statically or as an attribute of a context object. When set to **Icon**, a static icon or image from **System.Images** can be retrieved.
* **Image** and **Default image** (configurable when **Data source** is set to **Image**) - The **Image** widget property is used to configure the image of this widget either statically from **System.Images** or dynamically as an entity. The **Default image** property is used to configure a fallback image for this widget when **Image** is configured as a dynamic image.
* **Image URL** (configurable when **Data source** is set to **Image URL**) - A text template to configure the image for this widget through an URL. This can be done either statically or dynamically through the attribute of a context object.
* **Icon** (configurable when **Data source** is set to **Icon**) - Used to retrieve a static icon or image for the widget.

#### 2.1.2 Events Section

The **Events** sections allows you to configure what happens when the user interacts with the image. It includes the following properties:

* **On click type** (default: **Action**) - Determines the type of on click for this Image widget. When set to **Action**, the **On click** property can be used to configure a Mendix action. When set to **Enlarge**, the image will enlarge into a lightbox when a user clicks on the image.
* **On click** (configurable when **On click type** is set to **Action**) - An action property to configure a Mendix action for when a user clicks on the image.

#### 2.1.3 Accessibility Section

The **Accessibility** sections allows you to configure accessibility features for the image widget. It includes the following properties:

* **Alternative text** - Alternative text of the image for accessibility purposes.

### 2.2 Dimensions Tab {#dimensions}

The **Dimensions** tab allows you to configure settings that are related to the dimensional aspects of the image widget. It includes the following properties:

* **Width unit** and **Width** – the width of the widget in relation to the rest of the elements on the page
	* The available **Width unit** options are **Auto**, **Percentage** and **Pixels**
	* The **Width** can be set as an appropriate CSS value when **Width unit** is not set to **Auto**
	* These two properties need to be used together to work
* **Height unit** and **Height** – the height of the widget in relation to the rest of the elements on the page
	* The available **Height unit** options **Auto** and **Pixels**. **Auto** will keep the aspect ratio of the image
	* The **Height** can be set as an appropriate CSS value when **Height unit** is not set to **Auto**
	* These two properties need to be used together to work
* **Show** (default: **Full image**) - Determines how the image will be shown. When set to **Thumbnail**, the widget will try to retrieve the thumbnail version of the image if present.
* **Responsive** (default: **Yes**) - When set to **Yes**, the image will scale with its parent container. It will never get larger than its original size, but it can become smaller.

### 3 Styling

The Image widget is shipped with default styles and works out of the box without Atlas UI. However, including Atlas UI in the app brings improved styling and customizations such as design properties, helper classes, and custom variables.

These are the design properties shipped with Atlas UI for this widget:

* **Image style** (**Rounded**, **Circle**, **Square**, **None** (default)) - Changes the style of the image.
* **Center image** (**Yes**, **No** (default)) - Changes whether the image is centered horizontally in its container or not.
* **Image fit** (**Fill**, **Contain**, **Cover**, **Scale-down**, **None** (default)) - Change the fit of the image according to the object-fit CSS property.
