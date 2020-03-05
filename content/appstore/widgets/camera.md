---
title: "Camera"
category: "Widgets"
description: "Describes the configuration and usage of the Camera widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "camera", "ios", "android", "picture source", "platform support"]
draft: true
---

## 1 Introduction

The [Camera](https://appstore.home.mendix.com/link/app/1377/) widget enables PhoneGap native camera functionality within your Mendix mobile application.

## 2 Compatibility

This widget functions on the latest versions of both iOS and Android. Windows Phone is not supported. 

## 3 Offline

Support for offline profiles was introduced in version 3.0 of the widget. The functionality is  the same in the new offline profile, with the exception that on-save microflows and the Autosave setting will trigger an error in the client when enabled.

## 4 Configuration

Place the widget in a data view where you want the button to be placed. Make sure this form is reachable from a mobile application.

### 4.1  Image Container Class

This is the class that will be set on the image preview container.

### 4.2 Width

This is the width of the image preview.

### 4.3 Height

This is the height of the image preview.

### 4.4 Image Location

This is where the image preview will be shown relative to the button.

### 4.5 Label

This is the label text that is shown on the button.

### 4.6 Class

This is an optional class to be placed directly on the button document object model (DOM) node.

### 4.7 On Save Microflow {#osm}

This is an optional microflow that will be triggered when the object is saved.

### 4.8 On Save Nanoflow

This is an optional nanoflow that will be triggered when the object is saved.

### 4.9 Autosave

This is an optional setting to autosave an image to the context object. Use the [on-save microflow](#osm) to commit the object and run further actions.

### 4.10 Picture Source

Setting this determines where the image will come from: the gallery or the camera.

### 4.11 Image Quality

This will change the image width and height on output. Be aware that setting this higher will be more taxing and will take longer to upload. If quality width and height are both set to `0`, the image will be saved full-size.

### 4.12 Quality Width

This is the width in pixels to scale the image. This must be used with the `targetHeight`. The aspect ratio remains constant.

### 4.13 Quality Height

This is the height in pixels to scale the image. This must be used with `targetWidth`. The aspect ratio remains constant.
