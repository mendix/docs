---
title: "Dynamic Image"
url: /refguide/image-viewer/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The Dynamic Image widget, which is not supported by the React client added to Mendix in [10.7](/releasenotes/studio-pro/10.7/#react-client), can be converted to an [Image widget](/appstore/widgets/image/) through the context menu of the widget when the React client is enabled.

For more information, see the Mendix React Client's [Migration Guide](/refguide/mendix-client/react/#migration-guide).{{% /alert %}}

## Introduction

A dynamic image can be used to display an image or its thumbnail. For example, you can show a profile picture:

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image-viewer/image-viewer.png" class="no-border" >}}

{{% alert type="info" %}}

A dynamic image must be placed in a data view or a template grid. 

{{% /alert %}}

## Defining an Image Entity 

To correctly configure a dynamic image (for more information, see the [Data Source](#data-source) section below), you first need to create an entity in your domain model and define that it is an image entity. This is done by the concept of *inheritance*, sometimes called *generalization*. By inheriting from System.Image your entity gets all the properties of the system image entity. 

Do the following:

1. Open your domain model and create an entity that you would like to define as an image entity.

2. Double-click the entity to open its properties.

3. In the **Generalization** property, click **Select**.

    {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image-viewer/generalization.png" class="no-border" >}}

4. In the **Select Entity** dialog box, choose **System.Image** and click the **Select** button.

    {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image-viewer/select-entity.png" class="no-border" >}}

5. Click **OK**. 

Your entity now inherits all properties from the System.Image entity you selected:

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image-viewer/entity-example.png" class="no-border" >}}

## Properties

An example of dynamic image properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image-viewer/image-viewer-properties.png" alt="Dynamic Image Properties"   width="250"  class="no-border" >}}

Dynamic image properties consist of the following sections:

* [Common](#common) 
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [Events](#events)
* [General](#general)
* [Visibility](#visibility)

### Common Section{#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### Data Source Section {#data-source}

#### Entity (Path)

The **Entity (path)** property specifies which object will be shown in the dynamic image. It must be a System.Image or a specialization thereof. If the object in the data view is (a specialization of) System.Image you can use this object in the dynamic image as well.

### Events Section {#events}

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

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

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

## Read More

* [Page](/refguide/page/)
* [Images, Videos, and Files](/refguide/image-and-file-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
