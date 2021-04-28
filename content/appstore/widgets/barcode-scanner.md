---
title: "Barcode scanner"
category: "Widgets"
description: "Describes the configuration and usage of the Barcode scanner widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "barcode scanner", "phonegap", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Barcode scanner](https://appstore.home.mendix.com/link/app/1469/) widget enables a barcode scanning functionality within your Mendix web application.

The widget does the following:

- Displays a fullscreen canvas overlay that allows the user to scan a barcode.
- Also supports QR codes and a wide range of different barcode types.
- Allows additional styling customizations through Atlas.

## 2 Usage

The only requirement for the Barcode scanner widget is that it needs to be placed inside a data view that provides an object with a string attribute.
This attribute will be used to store the resulting string of the barcode detection in.

When the widget is placed on a page, it will automatically put a black canvas overlay on top of the entire page.
This canvas will provide users the ability to see their device's camera feed and scan barcodes if they allow the permission request from the application.

### 2.1 Data Source Tab

- **Barcode** - the attribute on the data view object in which the string result of the barcode detection will be stored in.
  This widget property is required.

### 2.2 Mask Tab

- **Show barcode mask** - Whether the black canvas overlay with a focus square is shown on top of the user's camera feed.
  If this property is disabled, then the entire screen will be the user's camera feed when the barcode scanner is open.
  This property is by defauled enabled.

### 2.3 Events Tab

These widget properties provide control over situations where the users interact with the Barcode scanner widget.

- **On detect** – an optional event handler that is triggered when the Barcode scanner detects a barcode.
- **On close** – an optional nanoflow that is triggered once when the user closes the black canvas overlay of the Barcode scanner widget.

## 3 Supported Barcode Types

| 1D product | 1D industrial       | 2D             |
| ---------- | ------------------- | -------------- |
| UPC-A      | Code 39             | QR Code        |
| UPC-E      | Code 128            | Data Matrix    |
| EAN-8      | ITF                 | Aztec          |
| EAN-13     | RSS-14              | PDF 417        |

## 4 Styling

Even without additional configuration, the Barcode scanner widget will work out of the box and contain all the necessary styling.
But if additional customization or personalization is desired for the black canvas overlay, then installing Atlas is required.
