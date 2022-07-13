---
title: "Build a Preview Image for a Custom Widget"
url: /howto8/extensibility/add-a-preview-image-for-custom-widget/
tags: ["image", "preview", "widget", "custom"]
---

## 1 Introduction

This how-to will show you how to specify a preview image that will be rendered in Studio Pro.

This how-to will teach you how to do the following:

* Configure a preview image for custom widgets

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Download and install [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/)
* Read [Custom Widgets](/howto8/extensibility/widget-development/)

## 3 Adding a Preview Image to Your Custom Widget Package

You need to put an image file named *preview.png* next to your custom widget XML configuration file:

{{< figure src="/attachments/howto8/extensibility/widget-development/add-a-preview-image-for-custom-widget/01_Folder_View.png" >}}

After packaging your custom widget, the image provided will be rendered in Studio Pro whenever it is used:

{{< figure src="/attachments/howto8/extensibility/widget-development/add-a-preview-image-for-custom-widget/02_Preview.png" >}}

Please note that older versions of Studio Pro ignore this image and render a grey rectangle as usual.

