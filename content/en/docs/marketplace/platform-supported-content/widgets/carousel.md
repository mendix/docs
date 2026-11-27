---
title: "Carousel"
url: /appstore/widgets/carousel/
description: "Describes the configuration and usage of the Carousel widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Carousel](https://marketplace.mendix.com/link/component/47784/) widget displays images in a carousel.

### Features

* Allows you to use the widget as a composable region for your image widgets, text widgets, and more
* Navigate to the next or previous image using arrows or dots
* Autoplay your images
* Set the timeouts between each slide
* Use the infinite loop to scroll through slides endlessly
* Add animation when slides are switched
* Show several slides at the same time and slide them in groups

## Usage

The widget requires a defined **Data source** available in the **General** tab. The possible data sources are described below.

### Data Source

* Select a **System.Image** type of entity as a data source
* Place an **Image** widget inside of the content area and configure it as it is described in [Image](/appstore/widgets/image/)

## Configuration

The following sections will describe the different available widget properties and how to configure the widget using them.

### General tab

* **Data source** – see [Data source](/refguide/data-sources/) documentation for more details
* **Content** – the widgets displayed in each slide, one slide per item in the data source

### Display

* **Pagination** – shows pagination dots
    * Default: **Yes**
* **Navigation controls** – shows arrows on the left and right side
    * Default: **Yes**
* **Auto play** – allows images to start sliding automatically when the widget is ready
    * Default: **No**
* **Delay** – creates a time interval between one item cycling to the next, in milliseconds
    * Default: **1000**
    * Configurable when **Auto play** is set to **Yes**
* **Infinite loop** – cycles between images endlessly
    * Default: **Yes**
* **Slides per view** – the number of slides visible at the same time in the carousel
    * Default: **1**
* **Slides per group** – the number of slides that move together when the end-user navigates to the next or previous slide; useful when **Slides per view** is greater than 1
    * Default: **1**
* **Animation** – adds a fade animation on each cycle
    * Default: **Yes**
    * Configurable only when **Slides per view** and **Slides per group** are both set to **1**; when more than one slide is shown or grouped, slides align to the start of the carousel and the fade animation is turned off

### Events

* **On click action** – executes an action when the carousel item is clicked

## Widgets Below Version 2.0.0

Features:

* Supports different data sources:
    * Set static images in Studio Pro
    * Retrieve images from the database via XPath
    * Retrieve images via a microflow
* Use images from **System.Images** or from a URL
* Navigate to the next or previous image
* Execute a microflow or nanoflow or open a page when an image is clicked
* Swipe through images on mobile devices

Usage

The widget requires a context configured on the **Data Source** tab. The possible data sources are described below.

Static Data Source:

* In the **Static images** section, click **New** to add static images from Studio Pro and also configure an on-click action
* On the **On click action** tab of the **Edit Static Images Item** dialog box, configure only one of option: **Microflow**, **Nanoflow**, or **Page**

Database Data Source:

* Specify the **Images entity** and the **XPath** constraint (if any)
* On the **Behavior** tab, configure the **On click** behavior
    * For the **Call microflow**, **Call nanoflow**, and **Show page** options, specify the respective microflow, nanoflow, or page
* Specifying a **URL attribute** will make the value of the URL attribute the priority

Microflow Data Source:

* Specify the **Images entity** and the **Microflow** from which the carousel images will be retrieved (both are required)
* On the **Behavior** tab, configure the **On click** behavior
    * For the **Call microflow**, **Call nanoflow**, and **Show page** options, specify the respective microflow, nanoflow, or page
* Specifying a **URL attribute** will make the value of the URL attribute the priority
