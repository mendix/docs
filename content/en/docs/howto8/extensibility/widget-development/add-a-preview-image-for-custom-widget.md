---
title: "Build a Preview Image for a Custom Widget"
linktitle: "Preview Image for Custom Widget"
url: /howto8/extensibility/add-a-preview-image-for-custom-widget/
---

## Introduction

This how-to will show you how to specify a preview image that will be rendered in Studio Pro.

This how-to teaches you how to do the following:

* Configure a preview image for custom widgets

## Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Download and install [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/)
* Read [Custom Widgets](/howto8/extensibility/widget-development/)

## Adding a Preview Image to Your Custom Widget Package

You need to put an image file named *preview.png* next to your custom widget XML configuration file:

{{< figure src="/attachments/howto8/extensibility/widget-development/add-a-preview-image-for-custom-widget/01_Folder_View.png" class="no-border" >}}

After packaging your custom widget, the image provided will be rendered in Studio Pro whenever it is used:

{{< figure src="/attachments/howto8/extensibility/widget-development/add-a-preview-image-for-custom-widget/02_Preview.png" class="no-border" >}}

Please note that older versions of Studio Pro ignore this image and render a grey rectangle as usual.
