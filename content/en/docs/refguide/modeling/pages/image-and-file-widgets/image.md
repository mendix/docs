---
title: "Static Image"
url: /refguide/image/
weight: 20
aliases:
    - /refguide/image-property.html
    - /refguide/image-property
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The Static Image widget, which is not supported by the React client added to Mendix in [10.7](/releasenotes/studio-pro/10.7/#react-client), can be converted to an [Image widget](/appstore/widgets/image/) through the context menu of the widget when the React client is enabled.

For more information, see the Mendix React Client's [Migration Guide](/refguide/mendix-client/react/#migration-guide).
{{% /alert %}}

## Introduction

The **Static image** widget can be used to show a static image on a page, layout, or snippet.

For example, you can configure an image clicking which a page with customer details opens:

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image/image-example.png" alt="Image Example" class="no-border" >}}

{{% alert color="info" %}}
If you want to dynamically show different images based on data, you need to add [dynamic image](/refguide/image-viewer/) on your page.
{{% /alert %}}

## Properties

An example of static image properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image/image-properties.png" alt="Image Properties"   width="300"  class="no-border" >}}

Static image properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [Events](/refguide/events/)
* [General](#general)
* [Visibility](#visibility)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### Events Section {#events}

For information on the Events section and its properties, see [On Click Event and Events Section](/refguide/on-click-event/). 

### General Section {#general}

#### Image

The file name that this widget shows. For more information on when to use images and supported formats, see [Images](/refguide/images/).

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

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

## Converting to a Dynamic Image

You can convert a static image to a dynamic image that allows you to display dynamic data. For more information on dynamic image and its properties, see [Dynamic Image](/refguide/image-viewer/). 

To convert an image widget into a dynamic image, do the following:

1. Select the **Static image** widget on a page and right-click it.
2. From the list of actions, select **Convert to dynamic image**. 

The **Static image** widget is converted to the dynamic image and you can configure it. 

## Read More

* [Page](/refguide/page/)
* [Images, Videos, and Files](/refguide/image-and-file-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
