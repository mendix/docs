---
title: "Image"
parent: "common-widgets"
menu_order: 20
tags: ["studio pro", "image", "image widget"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The image widget can be used to show a static image on a page, layout, or snippet.

For example, you can configure an image clicking which a page with customer details opens:

![Image Example](attachments/common-widgets/image-example.png)

{{% alert type="info" %}}

If you want to dynamically show different images based on data, you need to add [image viewer](image-viewer) on your page.

{{% /alert %}}

## 2 Properties

An example of text properties is represented in the image below:

{{% image_container width="350" %}}![Image Properties](attachments/common-widgets/image-properties.png)
{{% /image_container %}}

Text properties consist of the following sections:

* [Common](#common)
* Design Properties
* [Events](events)
* [General](#general)
* [Visibility](#visibility)

### 2.1 Common Section {#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 2.2 Events Section {#events}

For information on the Events section and its properties, see [On Click Event & Events Section](on-click-event). 

### 2.3 General Section {#general}

#### 2.3.1 Image

The file name that this widget shows. For more information on when to use images and supported formats, see [Images](images).

#### 2.3.2 Width Unit

The width of an image. Possible values of this property are described in the table below:

| Value      | Definition                                                   |
| ---------- | ------------------------------------------------------------ |
| Auto       | The width of the given image is used.                        |
| Pixels     | he width is specified in a number of pixels. If you specify both width and height, the image will be scaled automatically: the proportions will be kept, the picture will not be stretched. |
| Percentage | The width is specified in a percentage of the original width. It can be larger than its original width in which case the image is stretched |

_Default value_: Auto

{{% alert type="info" %}}Not supported on native mobile pages.{{% /alert %}}

#### 2.3.3 Width

Specifies the width of the image in pixels or percentage. This option is displayed only when **Pixels** or **Percentage** are selected for the **Width Unit** described above. 

_Default value_: not applicable

#### 2.3.4 Height Unit

The height of an image. Possible values of this property are described in the table below: 

| Value      | Definition                                                   |
| ---------- | ------------------------------------------------------------ |
| Auto       | The height of the given image is used.                       |
| Pixels     | The height is specified in a number of pixels. If you specify both width and height, the image will be scaled automatically: the proportions will be kept, the picture will not be stretched. |
| Percentage | The height is specified in a percentage of the original height. It can be larger than its original height in which case the image is stretched. |

_Default value_: Auto

{{% alert type="info" %}}Not supported on native mobile pages.{{% /alert %}}

#### 2.3.5 Height

Specifies the width of the image in pixels or percentage. This option is displayed only when **Pixels** or **Percentage** are selected for the **Width Unit** described above. 

_Default value_: not applicable

#### 2.3.6 Responsive

This property influences how the image scales. If the value is 'Yes', the image will never get bigger than its original size. It can become smaller. If the value is 'No', the image can become both larger and smaller than its original size.

_Default value:_ Yes

{{% alert type="info" %}}Not supported on native mobile pages.{{% /alert %}}

### 2.4 Visibility Section {#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 3 Read More

* [Page](page)
* [Common Widgets](common-widgets)
* [Properties Common for Widgets](common-widget-properties)


