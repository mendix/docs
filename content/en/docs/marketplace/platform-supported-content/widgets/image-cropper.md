---
title: "Image Cropper"
url: /appstore/widgets/image-cropper/
description: "Describes the configuration and usage of the Image Cropper widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Image Cropper](https://marketplace.mendix.com/link/component/<COMPONENT_ID>) widget lets an end-user crop, rotate, zoom, and convert an image to grayscale directly in the browser. The edited result is saved back to the same image attribute the widget is bound to.

All editing is done client-side on an HTML canvas. There is no separate apply or save button: the crop is saved back to the image attribute automatically as the end-user works.

{{% alert color="info" %}}
This widget replaces the legacy [Image Crop](../modules/image-crop.md) module.
{{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/widgets/image-cropper/image-cropper-demo.gif" alt="Cropping an image with a rectangular crop shape" class="no-border" >}}

### Features

- Crop with a rectangular or circular crop shape
- Constrain the crop to a fixed aspect ratio (1:1, 16:9, 4:3, 3:4), a custom ratio, or a free selection
- Zoom with a slider and/or the mouse wheel
- Rotate the image in 90-degree steps
- Convert the image to grayscale
- Reset the image back to its original state
- Save the result as PNG or JPEG at the source or on-screen resolution
- Trigger a Mendix action each time the crop is applied

### Limitations

- The widget requires an editable image attribute and both reads from and writes to that same attribute. There is no separate output attribute.
- Editing operations do not save back to a read-only image attribute.
- The widget is available on the web platform only and is not offline capable.

## Configuration

The following sections will describe the different available widget properties and how to configure the widget using them.

### General Tab {#general}

#### Source Section

The **Source** section (required) is used to configure the image the widget edits. It has the following property:

- **Image attribute** – the image to crop
  - The cropped result is saved back to this same attribute
  - The attribute is both the source and the destination for the widget

#### Crop Area Section

The **Crop area** section is used to configure the shape and proportions of the crop selection. It includes the following properties:

- **Crop shape** – the shape of the crop
  - Default: **Rectangle**
  - When set to **Rectangle**, the full crop rectangle is saved
  - When set to **Circle**, the corners are masked and the saved image is clipped to an ellipse inscribed in the crop rectangle
- **Aspect ratio** – locks the crop proportions
  - Default: **Free**
  - When set to **Free**, the end-user can resize the selection to any proportion
  - When set to **1:1**, **16:9**, **4:3**, or **3:4**, the selection is locked to that ratio during resize
  - When set to **Custom**, the selection is locked to the ratio defined by **Custom aspect width** and **Custom aspect height**
- **Custom aspect width** – the width side of the ratio (for example, _3_ in 3:2)
  - Default: _1_
  - Configurable when **Aspect ratio** is set to **Custom**
  - When either the custom width or custom height is not greater than _0_, the selection falls back to a free-form shape
- **Custom aspect height** – the height side of the ratio (for example, _2_ in 3:2)
  - Default: _1_
  - Configurable when **Aspect ratio** is set to **Custom**
  - When either the custom width or custom height is not greater than _0_, the selection falls back to a free-form shape

{{< figure src="/attachments/appstore/platform-supported-content/widgets/image-cropper/image-cropper-circle-demo.gif" alt="Cropping an image with a circular crop shape" class="no-border" >}}

#### Events Section

The **Events** section allows you to configure what happens each time the crop is applied. It includes the following property:

- **On crop** – a Mendix action that runs each time the crop is auto-applied to the image attribute
  - This property is optional
  - The action runs after a crop is saved back, but not after a rotation or a reset

### Dimensions Tab {#dimensions}

#### Canvas Section

The **Canvas** section is used to configure the on-screen size of the crop area. It includes the following properties:

- **Canvas max width (px)** – the maximum on-screen width of the crop area
  - Default: _800_
  - The image scales down to fit, and the canvas wraps the rendered image so that smaller crops produce a smaller canvas with no blank gaps
  - This property does not change the saved image size
- **Canvas max height (px)** – the maximum on-screen height of the crop area
  - Default: _800_
  - The image scales down to fit, and the canvas wraps the rendered image so that smaller crops produce a smaller canvas with no blank gaps
  - This property does not change the saved image size

### Behavior Tab {#behavior}

#### Interaction Section

The **Interaction** section is used to configure how the end-user interacts with the crop selection. It includes the following property:

- **Resizable handles** – lets the end-user resize the selection by dragging its corners
  - Default: **Yes**
  - When set to **No**, the selection cannot be resized by dragging its corners

#### Buttons Section

The **Buttons** section is used to configure the editing buttons shown in the toolbar. It includes the following properties:

- **Enable rotation** – shows rotate-left and rotate-right buttons that rotate the image in 90-degree steps
  - Default: **Yes**
  - The rotation is baked into the saved image
- **Enable grayscale** – shows a grayscale toggle
  - Default: **No**
  - When the toggle is on, the saved image is converted to grayscale (black and white)
- **Enable reset** – shows a **Reset** button that restores the original image and clears zoom, rotation, and grayscale
  - Default: **Yes**
  - The button is available only when the original image could be captured

#### Zoom Section

The **Zoom** section is used to configure how the end-user zooms the image. It includes the following properties:

- **Enable zoom** – the master switch for zooming
  - Default: **Yes**
  - When set to **No**, the slider and mouse-wheel zoom are disabled and the image stays at 1x
- **Show zoom slider** – shows the zoom slider below the crop area
  - Default: **Yes**
  - Configurable when **Enable zoom** is set to **Yes**
  - Turn this off to keep mouse-wheel zoom while hiding the slider
- **Mouse wheel zoom** – determines whether the mouse wheel zooms the image
  - Default: **On (hold Ctrl)**
  - Configurable when **Enable zoom** is set to **Yes**
  - When set to **On (hold Ctrl)**, the wheel zooms only while Ctrl is held, so page scroll keeps working
  - When set to **On**, the wheel always zooms
  - When set to **Off**, the wheel never zooms
- **Minimum zoom** – the smallest zoom level
  - Default: _1_
  - Configurable when **Enable zoom** is set to **Yes**
  - A value of _1_ means the image fits the canvas; a value below _1_ lets the end-user zoom out further
- **Maximum zoom** – the largest zoom level
  - Default: _4_
  - Configurable when **Enable zoom** is set to **Yes**
  - A value of _4_ means the image can be zoomed up to four times the canvas size
  - This value must be greater than **Minimum zoom**

### Output Tab {#output}

#### Output Section

The **Output** section is used to configure the format and resolution of the saved image. It includes the following properties:

- **Output format** – the file format of the saved image
  - Default: **PNG**
  - When set to **PNG**, transparency is preserved and **JPEG quality** is ignored
  - When set to **JPEG**, a white background is filled behind the image and smaller files are produced
- **JPEG quality (0.0 - 1.0)** – the JPEG compression level
  - Default: _0.92_
  - Configurable when **Output format** is set to **JPEG**
  - A higher value produces a sharper and larger file
- **Output size** – the resolution of the saved crop
  - Default: **Original (source resolution)**
  - When set to **Original (source resolution)**, the crop is saved at the source resolution of the cropped region, which is the sharpest option
  - When set to **Viewport (canvas dimensions)**, the crop is saved at the on-screen canvas size

## Usage

When the widget loads, it shows the image bound to the **Image attribute** with a default crop box centered on the image and covering 80% of it at the configured aspect ratio. If no image is available, the widget shows a **No image** message.

The end-user edits the image as follows:

- **Move or resize the crop box** – the crop is saved immediately when the end-user finishes the drag.
- **Zoom or toggle grayscale** – the change is saved a short moment after the last adjustment.
- **Rotate** – a live preview is shown immediately, and the rotation is then saved back to the image attribute.
- **Reset** – the original image is restored and zoom, rotation, and grayscale are cleared. A reset is not saved as a crop and does not trigger the **On crop** action.

## Styling

The widget is shipped with default styles and works out of the box without Atlas UI.

## Read More

- [Image](/appstore/widgets/image/)
- [Image Crop](/appstore/modules/image-crop/)
