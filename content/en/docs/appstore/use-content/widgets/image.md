---
title: "Image"
url: /appstore/widgets/image/
description: "Describes the configuration and usage of the Image widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Image](https://marketplace.mendix.com/link/component/118579) widget displays an image and optionally performs an on-click action like enlarging to mobile-friendly, opening a page, calling a microflow, and more.

### Features

* Supports different data sources
    * Set a static image or icon
    * Retrieve an image from a static URL
    * Retrieve an image from the URL attribute of a context object
    * Retrieve an image from **System.Images**
* Supports the following actions
    * Enlarge and pinch zoom
    * Any Mendix action, like opening a page, calling a microflow, calling a nanoflow, or more

## Configuration

The following sections will describe the different available widget properties and how to configure the widget using them.  

### General Tab {#general}

#### Data Source Section

The **Data source** section (required) is used to configure the data for the widget. It has the following properties:

* **Image type** – determines the data source for this widget
    * Default: **Image**
    * When set to **Image**, a static or dynamic image can be retrieved
    * When set to **Image URL**, an image will be loaded from URL, either statically or as an attribute of a context object
    * When set to **Icon**, a static icon or image from **System.Images** can be retrieved
* **Image source** and **Default image** – configurable when **Image type** is set to **Image**
    * The **Image source** widget property is used to configure the image of this widget either statically from **System.Images** or dynamically as an entity
    * The **Default image** property is used to configure a fallback image for this widget when **Image** is configured as a dynamic image
* **Image URL** – a text template to configure the image for this widget through a URL
    * Configurable when **Image type** is set to **Image URL**
    * Can be used statically or dynamically through the attribute of a context object
    * Must be a URL prefaced with *https://*
* **Icon** – used to retrieve a static icon or image for the widget
    * Configurable when **Image type** is set to **Icon**
* **Background image** – used to render an image as a background

#### Events Section

The **Events** sections allows you to configure what happens when the user interacts with the image. It includes the following properties:

* **On click type** – determines the type of On click for this widget
    * Default: **Action**
    * When set to **Action**, the **On click** property can be used to configure a Mendix action
    * When set to **Enlarge**, the image will enlarge into a lightbox when a user clicks on the image
* **On click** – an action property to configure a Mendix action for when a user clicks on the image
    * Configurable when **On click type** is set to **Action** 

#### Accessibility Section

The **Accessibility** sections allows you to configure accessibility features for the widget. It includes the following properties:

* **Alternative text** – alternative text of the image for accessibility purposes

### Dimensions Tab {#dimensions}

The **Dimensions** tab allows you to configure settings that are related to the dimensional aspects of the widget. It includes the following properties:

* **Width unit** and **Width** – the width of the widget in relation to the rest of the elements on the page
    * The available **Width unit** options are **Auto**, **Percentage**, and **Pixels**
    * The **Width** can be set as an appropriate CSS value when **Width unit** is not set to **Auto**
    * These two properties need to be used together to work
* **Height unit** and **Height** – the height of the widget in relation to the rest of the elements on the page
    * The available **Height unit** options **Auto** and **Pixels** (**Auto** will keep the aspect ratio of the image)
    * The **Height** can be set as an appropriate CSS value when **Height unit** is not set to **Auto**
    * These two properties need to be used together to work
* **Show** – determines how the image will be shown
    * Default: **Full image**
    * When set to **Thumbnail**, the widget will try to retrieve the thumbnail version of the image if present
* **Responsive** – when set to **Yes**, the image will scale with its parent container
    * Default: **Yes**
    * The image will never get larger than its original size, but it can become smaller
    * This option will be hidden if **Image type** is set to **Icon**

## Styling

The widget is shipped with default styles and works out of the box without Atlas UI. However, including Atlas UI in the app brings improved styling and customizations such as design properties, helper classes, and custom variables.

These are the design properties shipped with Atlas UI for this widget:

* **Image style** – changes the style of the image
    * **Rounded**, **Circle**, **Square**, **None** (default)
* **Center image** – determines whether the image is centered horizontally in its container or not
    * **Yes**, **No** (default) 
* **Image fit** – changes the fit of the image according to the object-fit CSS property
    * **Fill**, **Contain**, **Cover**, **Scale-down**, **None** (default)
* **Align content** – aligns elements inside the container as a row or as a column
    * **Left align as a row**, **Center align as a row**, **Right align as a row**, **Right align as a column**, **Center align as a column**, **Left align as a column**
