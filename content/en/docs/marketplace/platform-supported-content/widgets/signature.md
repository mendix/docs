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
3. Configure the widget using the properties described in the sections below.

When the user finishes a stroke on the canvas, the widget stores the signature as a PNG image in the **Image value** property. To view the result, the [Image](/appstore/widgets/image/) widget can be used.

{{% alert color="warning" %}}
Signature version 2.0.0 is a complete rewrite as a pluggable widget and requires Studio Pro 11.8.0 or above. It is not backward compatible with version 1.x, so existing Signature widgets must be reconfigured. The widget ID changed from `com.mendix.widget.custom.signature.Signature` to `com.mendix.widget.web.signature.Signature`, the widget category changed from **Add-ons** to **Input elements**, and the widget file changed from `Signature.mpk` to `com.mendix.widget.web.Signature.mpk`. This lets the old and new versions coexist during migration. After the migration is complete, remove the old `Signature.mpk` file from the `widgets` folder of your app manually.
{{% /alert %}}

### General Tab

#### Data Source Section

* **Image value** (required) – the image in which the signature is stored
* **File name** – the file name (without extension) for the stored image; if empty, a file name is generated automatically based on the current date and time
* **Has signature** – an optional Boolean attribute that is set to true after the canvas is signed; when the attribute is set to false, the canvas is cleared, but the stored image is not cleared
* **Editable** – determines if the widget can be edited; for more information, see [Editability Section](/refguide/common-widget-properties/#editability) in *Properties Common in the Page Editor*

#### Appearance Section

* **Type** – the type of pen used to draw the signature
    * **Fountain pen** (default)
    * **Ball point pen**
    * **Highlight marker**
* **Color** – the color of the line, as a color name or code such as `green`, `#00FF00`, or `rgb(0,255,0)` (default: `#000`)

### Dimensions Tab

* **Width unit** – the unit of the **Width** property
    * **Pixels**
    * **Percentage** (default)
* **Width** – the width of the canvas (default: 100)
* **Height unit** – the unit of the **Height** property
    * **Auto** – the height adjusts automatically, within the limits of the **Minimum height** and **Maximum height** properties
    * **Pixels** (default)
    * **Percentage** – a percentage of the parent's height
    * **Viewport** – a percentage of the viewport's height
* **Height** – the height of the canvas (default: 250); not available when **Height unit** is set to **Auto**

The following properties are available when **Height unit** is set to **Auto**:

* **Minimum Height unit** – the unit of the **Minimum height** property: **None**, **Pixels** (default), **Percentage**, or **Viewport**
* **Minimum height** – the minimum height of the canvas (default: 250); not available when **Minimum Height unit** is set to **None**
* **Maximum Height unit** – the unit of the **Maximum height** property: **None** (default), **Pixels**, **Percentage**, or **Viewport**
* **Maximum height** – the maximum height of the canvas (default: 250); not available when **Maximum Height unit** is set to **None**
* **Vertical Overflow** – determines what happens when the content is higher than the maximum height: **Auto** (default), **Scroll**, or **Hidden**; not available when **Maximum Height unit** is set to **None**

### Events Tab

**On sign end** – the action that is executed when the user finishes a stroke on the canvas; the action receives the signature image as a data URI in the **Signature Image Uri** String variable

### Accessibility Tab

* **Aria required** – an expression that determines whether the canvas is marked as required for assistive technologies (default: false)
* **Aria label** – the accessible label of the canvas (default: "Signature canvas")

### Advanced Tab

* **Show background grid** – when set to **Yes**, a grid is shown in the background of the writable area (default: **No**); the grid is not shown when the widget is read-only
* **Line color** – the HTML color code of the grid lines (default: `#D7D7D7`)
* **Cell height** – the height of the grid cell in pixels (default: 50)
* **Cell width** – the width of the grid cell in pixels (default: 50)
* **Line width** – the width of the grid line border in pixels (default: 1)
