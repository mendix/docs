---
title: "Carousel"
category: "Widgets"
description: "Describes the configuration and usage of the Carousel widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "carousel", "image", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Carousel](https://marketplace.mendix.com/link/component/47784/) widget displays images in a carousel.

### 1.1 Features

* Supports different data sources:
	* Set static images in Studio Pro
	* Retrieve images from the database via XPath
	* Retrieve images via a microflow
* Use images from **System.Images** or from a URL
* Navigate to the next or previous image
* Execute a microflow or nanoflow or open a page when an image is clicked
* Swipe through images on mobile devices

### 1.2 Demo App

For a demo app that has been deployed with this widget, see [here](https://carousel.mxapps.io/).

## 2 Usage

The widget requires a context configured on the **Data Source** tab. The possible data sources are described below.

### 2.1 Static Data Source

When this option is selected, do the following:

* In the **Static images** section, click **New** to add static images from Studio Pro and also configure an on-click action
* On the **On click action** tab of the **Edit Static Images Item** dialog box, configure only one of option:: **Microflow**, **Nanoflow**, or **Page**

### 2.2 Database Data Source

When this option is selected, do the following:

* Specify the **Images entity** and the **XPath** constraint (if any)
* On the **Behavior** tab, configure the **On click** behavior
	* For the **Call microflow**, **Call nanoflow**, and **Show page** options, specify the respective microflow, nanoflow, or page
* Specifying a **URL attribute** will make the value of the URL attribute the priority

### 2.3 Microflow Data Source

When this option is selected, do the following:

* Specify the **Images entity** and the **Microflow** from which the carousel images will be retrieved (both are required)
* On the **Behavior** tab, configure the **On click** behavior
	* For the **Call microflow**, **Call nanoflow**, and **Show page** options, specify the respective microflow, nanoflow, or page
* Specifying a **URL attribute** will make the value of the URL attribute the priority
