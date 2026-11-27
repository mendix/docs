---
title: "Barcode Scanner"
url: /appstore/widgets/barcode-scanner/
description: "Describes the configuration and usage of the Barcode Scanner widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Barcode Scanner](https://marketplace.mendix.com/link/component/117627) widget enables a barcode scanning functionality within your Mendix web application.

The widget does the following:

* Displays the camera feed of the end-user's device so the end-user can scan a barcode
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

When the widget is placed on a page, it shows a black canvas with the size configured on the [Dimensions](#dimensions) tab. This canvas will provide end-users with the ability to see their device's camera feed and scan barcodes if they allow the permission request from the application.

### General Tab

The **General** section has the following properties:

* **Scanned result** (required) – the string attribute of the data view object that will store the barcode detection result
* **Show barcode mask** (enabled by default) – determines whether a mask with a focus square is shown on top of the end-user's camera feed, as a specific target area for the barcode
    * If this property is disabled, the entire widget area shows the end-user's camera feed
* **Use all barcode formats** (enabled by default) – determines whether the widget scans for all [supported barcode types](#supported-barcode-types)
    * Disable this property to restrict scanning to specific formats and prevent incorrect scanning
* **Enabled barcode formats** – the list of barcode formats the scanner recognizes; for each item, select a **Barcode format**
    * Configurable when **Use all barcode formats** is disabled

The **Events** section has the following property, which provides control over situations where the end-user interacts with the widget:

* **On detect action** – an optional action that is triggered when the widget successfully detects a barcode

### Dimensions Tab {#dimensions}

* **Width unit** – determines the unit of the width: **Percentage** (portion of the parent size, default) or **Pixels** (absolute amount of pixels)
* **Width** – the width of the widget
    * Default: **100**
* **Height unit** – determines the unit of the height: **Percentage of width** (default), **Pixels**, or **Percentage of parent**
* **Height** – the height of the widget
    * Default: **75**

### Advanced Tab

* **Detection logic** – determines the detection logic used for barcode scanning
    * **BarcodeDetector API (experimental fast scan, fallback to ZXing)** (default) – uses the native BarcodeDetector API of the browser when it is available, and the ZXing library otherwise
    * **ZXing** – always uses the ZXing library

## Supported Barcode Types {#supported-barcode-types}

| 1D Product | 1D Industrial       | 2D             |
| ---------- | ------------------- | -------------- |
| UPC-A      | Code 39             | QR Code        |
| UPC-E      | Code 128            | Data Matrix    |
| EAN-8      | ITF                 | Aztec          |
| EAN-13     | RSS-14              | PDF 417        |

## Styling

Even without additional configuration, the Barcode Scanner widget will work out of the box and contain all the necessary styling

If additional customization or personalization is desired for the black canvas overlay, then installing Atlas UI is required.
