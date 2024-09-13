---
title: "Signature"
url: /appstore/widgets/signature/
description: "Describes the configuration and usage of the Signature widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Signature](https://marketplace.mendix.com/link/component/107984/) widget is a signature pad for capturing signatures in your app. The widget implements bezier curves and velocity for the smooth drawing of the signature.

### Features

* Record a signature
* Customizable pen color and pen size
* Toggle an attribute to delete the signature and reset the canvas

### Limitations

To store the signature image in the object, the Mendix Platform forces a commit if the object is new. This behavior might have an influence on a cancel action, so a rollback in a microflow will not roll back the creation of the signature object. In addition, the rollback will not fall back to the previous signature.

Previous signatures can not be edited. When the signature is captured and stored as an image, the widget cannot be used on a new or other page for editing the existing widget. In this case, the widget will display an empty canvas, and when the signature is saved, it will overwrite the previous image.

A resized signature is captured. If the canvas is resized, the strokes outside the visible canvas are not shown, but they are stored.

## Configuration

To use this widget, follow these steps:

1. Add an entity to the domain model that should inherit from the Mendix **system.image**.
2. Create a page with a data view, and place the widget inside the data view.
3. Optionally, on the **Canvas** properties tab, add the **Has signature** attribute to the entity in to toggle to clear the canvas.
4. On the **Pen** tab, customize the signature by selecting a pen **Type** and the **Color** (which is an HTML color code).
5. On the **Grid** tab, configure the following: <br />
    1. **Show background grid** – when set to yes, a grid is shown in the background of the writable area <br />
    1. **Cell width** – the width of the grid cell in pixels <br />
    1. **Cell height** – the height of the grid cell in pixels <br />
    1. **Line color** – the HTML color code of the grid lines <br />
    1. **Line width** – the width of the grid line border in pixels
6. On the **Appearance** tab in the **Common** section, custom CSS **Style** properties can be set for responsive design when the width and height are a percentage – for example:
    `min-width: 200px;`
    `max-width: 600px;`
    `min-height: 200px;`
    `max-height: 600px;`
7. Upon running the application, after signing on the canvas, the **Has signature** attribute is toggled to show that the canvas has a signature. The end-user can toggle to **No** in order to clear the signature data source.
8. When the form is submitted—which can be triggered by the start of a microflow or a save—the signature is captured and stored as an image. To view the result, the [Dynamic Image](https://marketplace.mendix.com/link/component/13) widget can be used.
