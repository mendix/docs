---
title: "Image Cropper"
url: /appstore/widgets/image-cropper/
description: "Describes the configuration and usage of the Image Cropper widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Image Cropper](https://marketplace.mendix.com/link/component/302076) widget lets an end-user crop, rotate, zoom, and convert an image to grayscale directly in the browser. The edited result is saved back to the same image attribute the widget is bound to.

All editing is done client-side on an HTML canvas. There is no separate apply or save button: the crop is saved back to the image attribute automatically as the end-user works.

{{% alert color="info" %}}
This widget replaces the legacy [Image Crop](/appstore/modules/image-crop/) module.
{{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/widgets/image-cropper/image-cropper-demo.gif" alt="Cropping an image with a rectangular crop shape" class="no-border" >}}

### Features

* Crop with a rectangular or circular crop shape
* Constrain the crop to a fixed aspect ratio (1:1, 16:9, 4:3, 3:4), a custom ratio, or a free selection
* Zoom with a slider and/or the mouse wheel
* Rotate the image in 90-degree increments
* Convert the image to grayscale
* Reset the image back to its original state
* Save the result as PNG or JPEG at the source or on-screen resolution
* Trigger a Mendix action each time the crop is applied

### Limitations

* The widget requires an editable image attribute and both reads from and writes to that same attribute. There is no separate output attribute.
* Editing operations do not save back to a read-only image attribute.
* The widget is available on the web platform only and is not offline capable.

## Configuration

The following sections will describe the different available widget properties and configurations.

### General Tab {#general}

#### Source Section

The **Source** section (required) is used to configure the image the widget edits. It has the following property:

* **Image attribute** – Specifies the image the end-user wants to crop.
    * The cropped result is saved back to this same attribute.
    * The attribute is both the source and the destination for the widget.

#### Crop Area Section

The **Crop area** section is used to configure the shape and proportions of the crop selection. It includes the following properties:

* **Crop shape** – Defines the shape of the crop.
    * **Rectangle** (default) – When enabled, the full crop rectangle is saved.
    * **Circle** – When enabled, the corners are masked and the saved image is clipped to an ellipse inscribed in the crop rectangle.
* **Aspect ratio** – Locks the crop proportions.
    * **Free** (default) – The end-user can resize the selection to any proportion.
    * **1:1**, **16:9**, **4:3**, or **3:4** – When set to one of these predetermined ratios, the selection is locked to that ratio during resize.
    * **Custom** – When enabled, the selection is locked to the ratio defined by **Custom aspect width** and **Custom aspect height**.
* **Custom aspect width** (default **1**) – The width side of the ratio (for example, *3* in 3:2).
    * Configurable when **Aspect ratio** is set to **Custom**.
    * When either the custom width or custom height is not greater than *0*, the selection falls back to a free-form shape.
* **Custom aspect height** (default **1**) – The height side of the ratio (for example, *2* in 3:2).
    * Configurable when **Aspect ratio** is set to **Custom**.
    * When either the custom width or custom height is not greater than *0*, the selection falls back to a free-form shape.

{{< figure src="/attachments/appstore/platform-supported-content/widgets/image-cropper/image-cropper-circle-demo.gif" alt="Cropping an image with a circular crop shape" class="no-border" >}}

#### Events Section

The **Events** section allows you to configure what happens each time the crop is applied. It includes the following property:

* **On crop** (optional) – A Mendix action that runs each time the crop is auto-applied to the image attribute.
    * The action runs after a crop is saved back, but not after a rotation or a reset.

### Dimensions Tab {#dimensions}

#### Canvas Section

The **Canvas** section is used to configure the on-screen size of the crop area. It includes the following properties:

* **Canvas max width (px)** (default **800**) – Sets the maximum on-screen width of the crop area.
    * The image scales down to fit, and the canvas wraps the rendered image so that smaller crops produce a smaller canvas with no blank gaps.
    * This property does not change the saved image size.
* **Canvas max height (px)** (default **800**) – the maximum on-screen height of the crop area.
    * The image scales down to fit, and the canvas wraps the rendered image so that smaller crops produce a smaller canvas with no blank gaps.
    * This property does not change the saved image size.

### Behavior Tab {#behavior}

#### Interaction Section

The **Interaction** section is used to configure how the end-user interacts with the crop selection. It includes the following property:

* **Resizable handles** (default **Yes**) – Allows the end-user to resize the selection by dragging its corners.
    * When set to **No**, the selection cannot be resized by dragging its corners.

#### Buttons Section

The **Buttons** section is used to configure the editing buttons shown in the toolbar. It includes the following properties:

* **Enable rotation** (default **Yes**) – Shows rotate-left and rotate-right buttons that rotate the image in 90-degree increments.
    * The rotation is baked into the saved image.
* **Enable grayscale** (default **No**) – Shows a grayscale toggle.
    * When the toggle is on, the saved image is converted to grayscale (black and white).
* **Enable reset** (default **Yes**) – Shows a **Reset** button that restores the original image and clears zoom, rotation, and grayscale.
    * The button is available only when the original image could be captured.

#### Zoom Section

The **Zoom** section is used to configure how the end-user zooms the image. It includes the following properties:

* **Enable zoom** (default **Yes**) – The primary switch for zooming.
    * When set to **No**, the slider and mouse-wheel zoom are disabled and the image stays at **1x**.
* **Show zoom slider**  (default **Yes**) – shows the zoom slider below the crop area.
    * Configurable when **Enable zoom** is set to **Yes**.
    * Turn this off to keep mouse-wheel zoom while hiding the slider.
* **Mouse wheel zoom** (default **On (hold Ctrl)**) – Determines whether the mouse wheel zooms the image.
    * Configurable when **Enable zoom** is set to **Yes**.
    * When set to **On (hold Ctrl)**, the wheel zooms only while <kbd>Ctrl</kbd> is held, so page scroll keeps working.
    * When set to **On**, the wheel always zooms.
    * When set to **Off**, the wheel never zooms.
* **Minimum zoom** (default **1**) – Sets the smallest zoom level.
    * Configurable when **Enable zoom** is set to **Yes**.
    * A value of *1* means the image fits the canvas; a value below *1* lets the end-user zoom out further.
* **Maximum zoom** (default **4**) – Sets the largest zoom level.
    * Configurable when **Enable zoom** is set to **Yes**.
    * A value of *4* means the image can be zoomed up to four times the canvas size.
    * This value must be greater than **Minimum zoom**.

### Output Tab {#output}

#### Output Section

The **Output** section is used to configure the format and resolution of the saved image. It includes the following properties:

* **Output format** (default **PNG**) – Sets the file format of the saved image.
    * When set to **PNG**, transparency is preserved and **JPEG quality** is ignored.
    * When set to **JPEG**, a white background is filled behind the image and smaller files are produced.
* **JPEG quality (0.0 - 1.0)** (default **0.92**) – Sets the JPEG compression level.
    * Configurable when **Output format** is set to **JPEG**.
    * A higher value produces a sharper and larger file.
* **Output size** (default **Original (source resolution)**) – Sets the resolution of the saved crop.
    * When set to **Original (source resolution)**, the crop is saved at the source resolution of the cropped region, which is the sharpest option.
    * When set to **Viewport (canvas dimensions)**, the crop is saved at the on-screen canvas size.

## Usage

When the widget loads, it shows the image bound to the **Image attribute** with a default crop box centered on the image and covering 80% of it at the configured aspect ratio. If no image is available, the widget shows a **No image** message.

The end-user edits the image as follows:

* **Move or resize the crop box** – The crop is saved immediately when the end-user finishes the drag.
* **Zoom or toggle grayscale** – The change is saved a short moment after the last adjustment.
* **Rotate** – A live preview is shown immediately, and the rotation is then saved back to the image attribute.
* **Reset** – The original image is restored and zoom, rotation, and grayscale are cleared. A reset is not saved as a crop and does not trigger the **On crop** action.

## Styling

The widget is shipped with default styles and works out of the box without Atlas UI.

## Read More

* [Image](/appstore/widgets/image/)
