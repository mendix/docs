---
title: "Image"
url: /refguide8/image/
weight: 20
aliases:
    - /refguide8/image-property.html
    - /refguide8/image-property
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The image widget can be used to show a static image on a page, layout, or snippet.

For example, you can configure an image clicking which a page with customer details opens:

{{< figure src="/attachments/refguide8/modeling/pages/common-widgets/image/image-example.png" alt="Image Example" class="no-border" >}}

{{% alert color="info" %}}
If you want to dynamically show different images based on data, you need to add [image viewer](/refguide8/image-viewer/) on your page.
{{% /alert %}}

## Properties

An example of image properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/common-widgets/image/image-properties.png" alt="Image Properties"   width="300"  class="no-border" >}}

Image properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [Events](/refguide8/events/)
* [General](#general)
* [Visibility](#visibility)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### Events Section {#events}

For information on the Events section and its properties, see [On Click Event and Events Section](/refguide8/on-click-event/). 

### General Section {#general}

#### Image

The file name that this widget shows. For more information on when to use images and supported formats, see [Images](/refguide8/images/).

#### Width Unit

The width of an image. Possible values of this property are described in the table below:

| Value      | Definition                                                   |
| ---------- | ------------------------------------------------------------ |
| Auto  *(default)*       | The width of the given image is used.                        |
| Pixels     | The width is specified in a number of pixels. If you specify both width and height, the image will be scaled automatically: the proportions will be kept, the picture will not be stretched. |
| Percentage | The width is specified in a percentage of the original width. It can be larger than its original width in which case the image is stretched |

{{% alert color="info" %}}This property is not supported on native mobile pages.{{% /alert %}}

#### Width

Specifies the width of the image in pixels or percentage. This option is displayed only when **Pixels** or **Percentage** are selected for the **Width Unit** described above. 

Default: *not applicable*

#### Height Unit

The height of an image. Possible values of this property are described in the table below: 

| Value      | Definition                                                   |
| ---------- | ------------------------------------------------------------ |
| Auto  *(default)*       | The height of the given image is used.                       |
| Pixels     | The height is specified in a number of pixels. If you specify both width and height, the image will be scaled automatically: the proportions will be kept, the picture will not be stretched. |
| Percentage | The height is specified in a percentage of the original height. It can be larger than its original height in which case the image is stretched. |

{{% alert color="info" %}}This property is not supported on native mobile pages.{{% /alert %}}

#### Height

Specifies the width of the image in pixels or percentage. This option is displayed only when **Pixels** or **Percentage** are selected for the **Width Unit** described above. 

Default: *not applicable*

#### Responsive

This property influences how the image scales. If the value is 'Yes', the image will never get bigger than its original size. It can become smaller. If the value is 'No', the image can become both larger and smaller than its original size.

Default: *Yes*

{{% alert color="info" %}}This property is not supported on native mobile pages.{{% /alert %}}

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## Converting to an Image Viewer

You can convert an image to an image viewer that allows you to display dynamic data. For more information on image viewer and its properties, see [Image Viewer](/refguide8/image-viewer/). 

To convert an image widget into an image viewer, do the following:

1. Select the image widget on a page and right-click it.
2. From the list of actions, select **Convert to image viewer**. 

The image widget is converted to the image viewer and you can configure it. 

## Read More

* [Page](/refguide8/page/)
* [Common Widgets](/refguide8/common-widgets/)
* [Properties Common in the Page Editor](/refguide8/common-widget-properties/)
