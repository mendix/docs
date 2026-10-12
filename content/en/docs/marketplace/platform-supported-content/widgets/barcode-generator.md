---
title: "Barcode Generator"
url: /appstore/widgets/barcode-generator/
description: "Describes the configuration and usage of the Barcode Generator widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Barcode Generator](https://marketplace.mendix.com/link/component/200681) widget generates a barcode or QR code from a string value and displays it in your Mendix web application.

The widget does the following:

* Encodes a static or dynamic string value as a barcode or QR code
* Supports ten linear barcode formats as well as QR codes
* Validates the input value against the selected format before rendering
* Renders the result as a scalable SVG image
* Lets end-users download the generated code as a PNG file
* Supports EAN addons and image overlays on QR codes
* Allows additional styling customizations through Atlas UI

### Features

* Two render modes selected through a single property: linear barcode or QR code
* Per-format input validation with configurable logging
* Optional download button with a customizable caption, file name, and position
* EAN-2 and EAN-5 addon support for EAN barcodes
* Error correction levels and image overlays for QR codes
* Offline capable

## Properties Pane

The Barcode Generator properties are organized into the following tabs:

* [General](#general)
* [Advanced](#advanced)
* [Display](#display)

The following sections describe the available properties and how to configure the widget with them.

### General Tab {#general}

The **General** tab configures the value to encode, the code format, and the download button:

* **Dynamic value** (required) – The string to encode as a barcode or QR code.
* **Barcode Format** (required) – The type of code to generate. Choose **Barcode** to render a standard linear barcode, **QR Code** to render a QR code, or **Custom** to select a specific linear format on the **Advanced** tab.
* **Empty message** – The text shown when no value is provided to encode.
* **Allow download** – When enabled, the widget shows a button that lets end-users download the generated code as a PNG file. Enabling this property reveals the following options:
    * **Button text** – The caption shown on the download button.
    * **Button aria-label** – The accessible label for the download button, used by assistive technologies.
    * **File name** – A custom file name for the downloaded file, without the extension. When empty, the file name is generated automatically based on the format and value.
    * **Button position** – The position of the download button relative to the code. Choose **Top** or **Bottom**.

### Advanced Tab {#advanced}

The **Advanced** tab configures format-specific settings for linear barcodes and QR codes.

#### Advanced Barcode Settings

* **Custom Format** (required) – The linear barcode format to generate when **Barcode Format** is set to **Custom**. The available formats are CODE128, EAN-13, EAN-8, UPC, CODE39, ITF-14, MSI, Pharmacode, Codabar, and CODE93.
* **EAN-128** – When enabled, encodes CODE128 as GS1-128 (EAN-128).
* **Flat** – When enabled, renders a flat barcode without guard bars. This option does not work with EAN addons.
* **Last character** – A character rendered after the barcode. This option does not work when **Flat** is enabled or with EAN addons.
* **Mod43** – When enabled, adds a modulo 43 check digit for CODE39.

#### EAN Addons

* **Addon format** (required) – The EAN addon to render next to the main barcode. Choose **None**, **EAN-5**, or **EAN-2**.
* **Addon value** (required) – The value for the addon barcode. Use 5 digits for EAN-5 and 2 digits for EAN-2.
* **Addon spacing** (required) – The space between the main barcode and the addon, in pixels.

#### Advanced QR Code Settings

* **Level** (required) – The error correction level to use. Choose **L**, **M**, **Q**, or **H**, from lowest to highest correction.
* **QR Size** (required) – The size of the QR code box, in pixels. In the Studio Pro preview, the maximum height is 200 pixels; the QR code renders at full size in your application.

#### Development

* **Log Level** (required) – The level of logging when barcode generation fails. Choose **None** for no logging, **Info** to display a generic error message in the user interface, or **Debug** to log detailed information to the developer console.

### Display Tab {#display}

The **Display** tab configures the size and appearance of the rendered code.

* **Display value** – When enabled, shows the encoded value below the code.
* **Show as card** – When enabled, displays the widget with a border, background, and padding.
* **Bar width** (required) – The width of a single bar, in pixels.
* **Code height** (required) – The height of the barcode, in pixels. In the Studio Pro preview, the maximum height is 200 pixels; the barcode renders at full height in your application.
* **Margin size** (barcode, required) – The barcode margin, in pixels.
* **Margin size** (QR, required) – The QR code margin, expressed as a number of module units (QR grid cells). Increasing the margin compresses the QR pattern within the fixed size. The margin is not visible in the preview.
* **Title** (required) – The title of the QR code, used for accessibility.
* **Show title** – When enabled, displays the title on top of the QR code.
* **Overlay image** (required) – When enabled, includes an image overlay on the QR code. Enabling this property reveals the following options:
    * **Image source** (required) – The image to display on the QR code.
    * **Center image** (required) – When enabled, centers the image on the QR code.
    * **Image X position** (required) – The horizontal position of the image.
    * **Image Y position** (required) – The vertical position of the image.
    * **Image height** (required) – The height of the image, in pixels.
    * **Image width** (required) – The width of the image, in pixels.
    * **Image opacity** (required) – The opacity of the image, ranging from 0.0 to 1.0.
    * **Excavate background** (required) – When enabled, removes the QR code dots behind the image.

## Supported Barcode Formats

The widget supports the following formats:

| Linear     | 2D      |
| ---------- | ------- |
| CODE128    | QR Code |
| EAN-13     |         |
| EAN-8      |         |
| UPC        |         |
| CODE39     |         |
| ITF-14     |         |
| MSI        |         |
| Pharmacode |         |
| Codabar    |         |
| CODE93     |         |

Each format accepts a specific set of values:

| Format     | Accepted input                                              |
| ---------- | ----------------------------------------------------------- |
| CODE128    | Up to 80 characters                                         |
| EAN-13     | 12 or 13 digits                                             |
| EAN-8      | 7 or 8 digits                                               |
| UPC        | 11 or 12 digits                                             |
| CODE39     | Up to 43 characters: A–Z, digits, space, and `- . $ / + %`  |
| ITF-14     | Exactly 14 digits                                           |
| MSI        | Up to 30 digits                                             |
| Pharmacode | Up to 7 digits                                              |
| Codabar    | Up to 20 characters: digits, A–D, and `- $ : / . +`         |
| CODE93     | Up to 47 characters                                         |
| QR Code    | Up to 1200 characters                                       |

{{% alert color="info" %}}
When a value does not match the requirements of the selected format, the widget does not render a code. Set the **Log Level** property to **Info** or **Debug** to surface the reason.
{{% /alert %}}

## Styling

Even without additional configuration, the Barcode Generator widget works out of the box with the necessary styling. Enable the **Show as card** property to display the code inside a bordered, padded container with a background.

For further customization or personalization, installing [Atlas UI](/howto/front-end/get-started/) is required.
