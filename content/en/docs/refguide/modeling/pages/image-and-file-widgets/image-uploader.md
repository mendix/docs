---
title: "Image Uploader"
url: /refguide/image-uploader/
weight: 50
weight: 50
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The image uploader widget is not supported on native mobile pages.{{% /alert %}}

## Introduction

An image uploader is used to upload images to the server. It also generates a thumbnail of the uploaded image. The uploaded image or its thumbnail can be displayed by a dynamic image. It must be placed inside a data view connected to the entity System.Image or a specialization thereof.

In the example below, an image uploader is placed in a nested data view (the *Profile* entity is a specialization of System.Image):

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image-uploader/image-uploader.png" alt="Image Uploader" class="no-border" >}}

## Properties

An example of image uploader properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image-uploader/image-uploader-properties.png" alt="Image Uploader Properties"   width="250"  class="no-border" >}}

Image uploader properties consist of the following sections:

* [Common](#common) 
* [Design Properties](#design-properties)
* [Editability](#editability)
* [General](#general)
* [Label](#label)
* [Visibility](#visibility)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### Editability Section {#editability}

{{% snippet file="/static/_includes/refguide/editability-section-link.md" %}}

### General Section {#general}

#### Maximum file size (MB)

**Max file size (MB)** determines the maximum size of files (in megabytes) that can be uploaded.

Default: *5*

#### Allowed Extensions {#allowed-extensions}

You can specify file extensions that users are allowed to upload. If no extension is specified, all file extensions are allowed. Separate multiple extensions by a semi-colon (for example, `jpeg;png`).

If a file with an extension that is not allowed is selected, a [system text](/refguide/system-texts/) for **File manager/dynamic image** > **Error: incorrect file extension** will be shown below the file manager.

Uploaded images are read by the runtime. Mendix use the [TwelveMonkeys ImageIO](https://haraldk.github.io/TwelveMonkeys/) library which supports a wide variety of image formats.

For SVG files, TwelveMonkeys ImageIO itself delegates to the Batik library—which is known to have issues with specifically formatted files. For full information on Batik's feature support, see this [Batik documentation](https://xmlgraphics.apache.org/batik/status.html).

#### Thumbnail Width

**Thumbnail width** determines the width of the generated thumbnail in pixels. However, the aspect ratio of the image will remain the same during thumbnail generation.

#### Thumbnail Height

**Thumbnail height** determines the height of the generated thumbnail in pixels. However, the aspect ratio of the image will remain the same during thumbnail generation.

### Label Section {#label}

{{% snippet file="/static/_includes/refguide/label-section-link.md" %}}

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

## Example of Image Uploader Usage

An image uploader needs to be placed in a data view or a snippet that is connected to System.Image or is a specialization of it. 

For that you can create an entity in your domain model and define that it is an image entity. This is done by the concept of *inheritance*, sometimes called *generalization*. By inheriting from System.Image your entity gets all the properties of the system image entity. 

Do the following:

1. Open your domain model and create an entity that you would like to define as an image entity.

2. Double-click the entity to open its properties.

3. In the **Generalization** property, click **Select**.

   {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image-uploader/generalization.png" class="no-border" >}}

4. In the **Select Entity** dialog box, choose **System.Image** and click the **Select** button.

   {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image-uploader/select-entity.png" class="no-border" >}}

5. Click **OK**. Your entity now inherits all properties from the System.Image entity you selected:

   {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image-uploader/entity-example.png" class="no-border" >}}

6. Open a page or a snippet where you would like to place the image uploader and add a data view there.

7. Set the image entity you have created in your domain model as data view's data source. 

8. Place the image uploader inside the data view. You can reference the page example below:

    {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/image-uploader/page-example.png" class="no-border" >}}

## Read More

* [Page](/refguide/page/)
* [Images, Videos, and Files](/refguide/image-and-file-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
