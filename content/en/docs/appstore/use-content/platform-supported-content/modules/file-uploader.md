---
title: "File Uploader"
url: /appstore/modules/file-uploader/
description: "Describes the configuration and usage of the File Uploader module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [File Uploader](https://marketplace.mendix.com/link/component/235351) enables you to upload files or images by dragging and dropping them onto the widget, or by using the file selection dialog box. 

It supports multi-file uploading, and includes an image-only mode that previews thumbnails of the uploaded images. The module comes with a domain model containing the entities and nanoflows it needs to function properly.

{{< figure src="/attachments/appstore/platform-supported-content/modules/file-uploader/fileuploader.png" class="no-border" >}}

## Setup

Read below for either [simple setup](#simple-setup) instructions, or a more [advanced setup](#advanced-setup)  (needed when modifying the context entity is not possible).

{{% alert color="info" %}}
In the following sections, the term "context entity" refers to the entity of the context object in which the file uploader widget is placed. This can be either a data view or a page parameter.
{{% /alert %}}

### Simple Setup {#simple-setup}

For a simple setup, the context entity needs to be a specialization of the **FileUploader.FileUploadContext** entity. This allows you to use the nanoflows and entities provided with the module:

* **In your domain model**: 
    1. Set the generalization of the context entity to **FileUploader.FileUploadContext**.
* **On your page**: 
    1. Place the **FileUploader** widget.
    1. Set the **Associated files** property to **FileUploader.UploadedFile** or **FileUploader.UploadedImage**, depending on the upload mode.
    1. Set the **Action to create new files** property to one of the nanoflows shipped with the module, depending on the upload mode.

{{% alert color="info" %}}
Starting with File Uploader 2.0, the widget properties will be set automatically.
{{% /alert %}}

### Advanced Setup {#advanced-setup}

For an advanced setup, useful when modifying the context entity is not possible, follow these steps:

* **In your domain model**: 
    1. Create a new specialized image/file entity by setting its generalization to **System.FileDocument** or **System.Image**, depending on the upload mode.
    1. Create a many-to-one association from this image/file entity to your context entity.
* **In the App Explorer / Logic Editor**:
    1. Copy one of the two nanoflows (depending on the upload mode) from the module and modify it to use your context entity and the newly created file/image entity.
* **On your page**: 
    1. Place the **FileUploader** widget.
    1. Set the widget property **Associated files** to the newly created file/image entity.
    1. Set the widget property **Action to create new files** to the modified nanoflow.

### Widget Configuration

#### General Tab {#general}

##### Upload mode

* **Files** - Allows all file types by default, and adds a configuration option to specify a custom set of allowed file types.
* **Images** - Limits uploads to images and shows a preview thumbnail.

##### Associated Files / Associated Images

* Defines the entity which is used to store the files or images. Needs to be a specialization of **System.FileDocument** or **System.Image**.
* By default, use **FileUploader.UploadedFile** for upload mode Files and **FileUploader.UploadedImage** for upload mode Images.

##### Action to Create New Files

* Configuration to set up the nanoflow which creates an associated file object and commits it.
* By default, calls **Nanoflow ACT_CreateUploadedFileDocument** for a **Files** upload mode and **ACT_CreateUploadedImageDocument** for an **Images** upload mode.

##### Allowed File Format

This configuration is only shown for the **Files** upload mode. Users can manually set restrictions on the allowed file types.

##### Maximum Number of Files

This configuration sets a limit on how many files can be uploaded at once.

##### Maximum File Size (MB)

This configuration sets a maximum limit on the file size of uploaded files.

#### Text Tab {#general}

Configures the displayed text used in **File Uploader**.

### Nanoflows

This module includes two predefined nanoflows:

#### ACT_CreateUploadedFileDocument

This nanoflow will attach an uploaded file to the context object.

#### ACT_CreateUploadedImageDocument

This nanoflow will attach an uploaded image to the context object.
