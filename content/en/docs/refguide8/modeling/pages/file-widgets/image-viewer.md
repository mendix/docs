---
title: "Image Viewer"
url: /refguide8/image-viewer/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

An image viewer can be used to display an image or its thumbnail. For example, you can show a profile picture:

{{< figure src="/attachments/refguide8/modeling/pages/file-widgets/image-viewer/image-viewer.png" class="no-border" >}}

An image viewer must be placed in a data view or a template grid.

## Properties

An example of image viewer properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/file-widgets/image-viewer/image-viewer-properties.png" alt="Image Viewer Properties"   width="250"  class="no-border" >}}

Image viewer properties consist of the following sections:

* [Common](#common) 
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [Events](#events)
* [General](#general)
* [Visibility](#visibility)

### Common Section{#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### Data Source Section {#data-source}

#### Entity (Path)

The **Entity (path)** property specifies which object will be shown in the image viewer. It must be a System.Image or a specialization thereof. If the object in the data view is (a specialization of) System.Image you can use this object in the image viewer as well.

### Events Section {#events}

{{% snippet file="/static/_includes/refguide8/events-section-link.md" %}}

### General Section{#general}

#### Default Image

This is the image that is displayed if no image is uploaded.

#### Width Unit {#width-unit}

The table below describes possible ways to specify the width of an image: 

| Value | Definition |
| --- | --- |
| Pixels | The width is specified in a number of pixels. If you specify both width and height, the image will be scaled automatically: the proportions will be kept, the picture will not be stretched. |
| Percentage  *(default)* | The width is specified in a percentage of the original width. It can be larger than its original width in which case the image is stretched. |
| Auto | The width of the given image is used. |

{{% alert color="info" %}}
Not supported on native mobile pages.
{{% /alert %}}

#### Width 

This property is displayed only when the [Width unit](#width-unit) property is set to *Pixels* or *Percentage*. This property determines the width of the image, either in pixels or a percentage.

Default: *0*

#### Height Unit {#height-unit}

The table below describes possible ways to specify the height of an image: 

| Value      | Definition                                                   |
| ---------- | ------------------------------------------------------------ |
| Pixels     | The height is specified in a number of pixels. If you specify both width and height, the image will be scaled automatically: the proportions will be kept, the picture will not be stretched. |
| Percentage | The height is specified in a percentage of the original height. It can be larger than its original height in which case the image is stretched. |
| Auto  *(default)*       | The height of the given image is used.                       |

{{% alert color="info" %}}This property is not supported on native mobile pages.{{% /alert %}}

#### Height

This property is displayed only when the [Height unit](#height-unit) property is set to *Pixels* or *Percentage*. This property determines the height of the image, either in pixels or a percentage.

Default: *0*

#### Responsive

This property determines how the image scales. If the value is set to *Yes*, the image will never get bigger than its original size, but it can become smaller. If the value is set to *No*, the image can become both larger and smaller than its original size.

Default: *Yes*

#### Show

This property indicates whether the generated thumbnail or the full image is shown.

Default: *Thumbnail*

### Visibility Properties{#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## Read More

* [Page](/refguide8/page/)
* [File Widgets](/refguide8/file-widgets/)
* [Properties Common in the Page Editor](/refguide8/common-widget-properties/)
