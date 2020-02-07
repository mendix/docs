---
title: "Lightbox"
category: "Widgets"
description: "Describes the configuration and usage of the Lightbox widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "lighbtox", "web gallery", "platform support"]
draft: true
---

## 1 Introduction

The [Lightbox](https://appstore.home.mendix.com/link/app/827/) enables showing images in a lightbox. The widget adds a clickable thumbnail of the original image to a page in your app. When the thumbnail is clicked, the widget overlays the full-sized image on top of the current page.

### 1.1 Typical Usage Scenario

* Web gallery

### 1.2 Dependencies

* [jQuery 1.8.3](https://blog.jquery.com/2012/11/13/jquery-1-8-3-released/)
* [Lightbox2](https://github.com/lokesh/lightbox2) plugin (included)

## 2 Configuration

There are two options available: a data view version and a non-data view version.

These are the properties for the **Data source** properties tab:

* **Lightbox image** – the entity of the images to add to the lightbox; this should be a descendant of **System.Image**
* **Image constraint** – the constraint on the fetch
* **Lightbox name** – the name used for grouping the images
