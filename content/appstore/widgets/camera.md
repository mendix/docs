---
title: "Camera"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Camera](https://appstore.home.mendix.com/link/app/1377/) widget enables PhoneGap native camera functionality within your Mendix mobile application.
Contributing

For more information on contributing to this repository visit Contributing to a GitHub repository!
Compatibility

The camera widget functions on the latest versions of both iOS and Android. Windows Phone is currently not supported. Additionally, v3.0 drops support for Mendix 5 projects. If you wish to include the widget in an older project, please download v2.5 from the versions tab.
Offline

In version 3.0, support for offline profiles was introduced. Functionality remains the same in the new offline profile, with the exception that on save microflows and the Autosave setting will trigger an error in the client when enabled.
Configuration

Place the widget in a dataview where you want the button to be placed. Make sure this form is reachable from a mobile application.
Appearance
Image container class

The class that will be set on the image preview container.
Width

The width of the image preview.
Height

The height of the image preview.
Image Location

Where the image preview will be shown relative to the button.
Button
Label

The label text that is shown on the button.
Class

An optional class to be placed directly on the button dom node.
Behaviour
On save microflow

An optional microflow that will be triggered when the object is saved.
On save nanoflow

An optional nanoflow that will be triggered when the object is saved.
Autosave

Optional setting to auto-save an image to the contextobject. use the on save mf to commit the object and run further actions.
Picture Source

Setting that determines where the image will come from: gallery or the camera.
Image quality

This will change the image-width and height on output. Be aware that setting this higher will be more taxing and will take longer to upload. If quality width and height are both set to 0, the image will be saved full size.
Quality width

Width in pixels to scale image. Must be used with targetHeight. Aspect ratio remains constant.
Quality height

Height in pixels to scale image. Must be used with targetWidth. Aspect ratio remains constant.