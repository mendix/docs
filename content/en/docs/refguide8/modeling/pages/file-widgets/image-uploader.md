---
title: "Image Uploader"
url: /refguide8/image-uploader/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The image uploader widget is not supported on native mobile pages.{{% /alert %}}

## Introduction

An image uploader is used to upload images to the server. It also generates a thumbnail of the uploaded image. The uploaded image or its thumbnail can be displayed by an image viewer. It must be placed inside a data view connected to the entity System.Image or a specialization thereof.

In the example below, an image uploader is placed in a nested data view (the *Profile* entity is a specialization of System.Image):

{{< figure src="/attachments/refguide8/modeling/pages/file-widgets/image-uploader/image-uploader.png" alt="Image Uploader" class="no-border" >}}

## Properties

An example of image uploader properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/file-widgets/image-uploader/image-uploader-properties.png" alt="Image Uploader Properties"   width="250"  class="no-border" >}}

Image uploader properties consist of the following sections:

* [Common](#common) 
* [Design Properties](#design-properties)
* [Editability](#editability)
* [General](#general)
* [Label](#label)
* [Visibility](#visibility)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### Editability Section {#editability}

{{% snippet file="/static/_includes/refguide8/editability-section-link.md" %}}

### General Section {#general}

#### Maximum file size (MB)

**Max file size (MB)** determines the maximum size of files (in megabytes) that can be uploaded.

Default: *5*

#### Allowed Extensions {#allowed-extensions}

You can specify file extensions that users are allowed to upload. If no extension is specified, all file extensions are allowed. Separate multiple extensions by a semi-colon (for example, `txt;doc`).

If a file with an extension that is not allowed is selected, a [system text](/refguide8/system-texts/) for **File manager/image viewer** > **Error: incorrect file extension** will be shown below the file manager.

#### Thumbnail Width

**Thumbnail width** determines the width of the generated thumbnail in pixels. However, the aspect ratio of the image will remain the same during thumbnail generation.

#### Thumbnail Height

**Thumbnail height** determines the height of the generated thumbnail in pixels. However, the aspect ratio of the image will remain the same during thumbnail generation.

### Label Section {#label}

{{% snippet file="/static/_includes/refguide8/label-section-link.md" %}}

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## Read More

* [Page](/refguide8/page/)
* [File Widgets](/refguide8/file-widgets/)
* [Properties Common in the Page Editor](/refguide8/common-widget-properties/)
