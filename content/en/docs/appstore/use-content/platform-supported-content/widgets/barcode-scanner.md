---
title: "Barcode Scanner"
url: /appstore/widgets/barcode-scanner/
description: "Describes the configuration and usage of the Barcode Scanner widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Barcode Scanner](https://marketplace.mendix.com/link/component/117627) widget enables a barcode scanning functionality within your Mendix web application.

The widget does the following:

* Displays a full-screen canvas overlay that allows the end-user to scan a barcode
* Supports QR codes and a wide range of different barcode types
* Allows for additional styling customizations through Atlas UI

{{% alert color="info" %}}
For security reasons, certain browsers will only allow access to an end-user device's camera over an HTTPS connection and not a default HTTP connection. Since this widget accesses the end-user device's camera through this method, the same constraints apply for using this widget in both production and local development. For production, an appropriate security setting can be applied when deploying to Mendix Cloud. For local development, the easiest solution is to set up a local proxy that secures the connection towards your local Mendix application.
{{% /alert %}}

## Usage

The only requirement for the Barcode Scanner widget is that it needs to be placed inside a data view that provides an object with a string attribute. The barcode detection result (being a string) will be stored in this attribute.

{{% alert color="info" %}}
Make sure the length of this string attribute is long enough to store the barcode detection results for your use case, or the application will throw an error. If you are not sure about what length is required, then Mendix recommends setting the string attribute length to **Unlimited**.
{{% /alert %}}

When the widget is placed on a page, it will automatically put a black canvas overlay on top of the entire page. This canvas will provide end-users with the ability to see their device's camera feed and scan barcodes if they allow the permission request from the application.

### Data Source Tab

* **Barcode** (required) – the attribute of the data view object that will store the barcode detection result as a string

### Mask Tab

* **Show barcode mask** (enabled by default) – determines whether the black canvas overlay with a focus square is shown on top of the end-user's camera feed
    * If this property is disabled, the entire screen will be the end-user's camera feed when the barcode scanner is open

### Events Tab

These widget properties provide control over situations where the end-user interacts with the widget:

* **On detect** – an optional event handler that is triggered when the widget detects a barcode
* **On close** – an optional nanoflow that is triggered once when the end-user closes the black canvas overlay of the widget

## Supported Barcode Types

| 1D Product | 1D Industrial       | 2D             |
| ---------- | ------------------- | -------------- |
| UPC-A      | Code 39             | QR Code        |
| UPC-E      | Code 128            | Data Matrix    |
| EAN-8      | ITF                 | Aztec          |
| EAN-13     | RSS-14              | PDF 417        |

## Styling

Even without additional configuration, the Barcode Scanner widget will work out of the box and contain all the necessary styling

If additional customization or personalization is desired for the black canvas overlay, then installing Atlas UI is required.
