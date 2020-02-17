---
title: "Barcode Scanner"
category: "Widgets"
description: "Describes the configuration and usage of the Barcode Scanner widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "barcode scanner", "phonegap", "platform support"]
draft: true
---

## 1 Introduction

The [Barcode Scanner](https://appstore.home.mendix.com/link/app/1469/) widget enables the PhoneGap-native barcode scanning functionality within your Mendix mobile application.

## 2 Configuration

Place this widget in a data view where you want the button to be placed. Make sure this form is reachable from a mobile application.

### 2.1 Data Source Tab

* **Attribute** – the attribute on the data view object to which the resulting string should be set

### 2.2 Button Tab

* **Caption** – the caption text that is shown on the button
* **Class** – an optional class to be placed directly on the button DOM node

### 2.3 Events Tab

* **On change microflow** – an optional microflow that will be triggered once the location has been retrieved
* **On change nanoflow** –  an optional nanoflow that will be triggered once the location has been retrieved

## 3 Adding the Plugin

When publishing an app to mobile app stores, add in this custom Phonegap/Cordova configuration for the barcode plugin:

```
<plugin name="phonegap-plugin-barcodescanner" />
<edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge">
    <string>To scan barcodes</string>
</edit-config>
```

## 4 Read More

* [Native Styling](https://docs.mendix.com/refguide/native-styling-refguide#10-4-barcode-scanner)
