---
title: "Build a Preview Image for a Custom Widget"
linktitle: "Preview Image for Custom Widget"
url: /howto7/widget-development/add-a-preview-image-for-custom-widget/
---

## 1 Introduction

This how-to will show you how to specify a preview image that will be rendered in the Modeler.

This how-to teaches you how to do the following:

* Configure a preview image for custom widgets

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Download and install the [Mendix Modeler](https://marketplace.mendix.com/link/studiopro/)
* Read [How to Get Start with the Widget Development Plugin for Adobe Brackets](/howto7/widget-development/use-the-widget-development-plugin-for-adobe-brackets/)

## 3 Adding a Preview Image to Your Custom Widget Package

You need to put an image file named *preview.png* next to your custom widget XML configuration file:

{{< figure src="/attachments/howto7/widget-development/add-a-preview-image-for-custom-widget/01_Folder_View.png" class="no-border" >}}

After packaging your custom widget, the image provided will be rendered in the Modeler whenever it is used:

{{< figure src="/attachments/howto7/widget-development/add-a-preview-image-for-custom-widget/02_Modeler_Preview.png" class="no-border" >}}

Please note that older versions of the Modeler ignore this image and render a grey rectangle as usual.

## 4 Read More

* [How to Use the Widget Development Plugin for Adobe Brackets](/howto7/widget-development/use-the-widget-development-plugin-for-adobe-brackets/)
