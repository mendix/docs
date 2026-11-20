---
title: "File Uploader"
url: /appstore/modules/file-uploader/
description: "Describes the configuration and usage of the File Uploader module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [File Uploader](https://marketplace.mendix.com/link/component/235351) enables you to upload files or images by dragging and dropping them onto the widget, or by using the file selection dialog box. You can also paste a file into the focused drop zone to upload it. Pasted files go through the same file type and size checks.

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

##### Upload Mode

* **Files** – Allows all file types by default, and adds a configuration option to specify a custom set of allowed file types. This is the default.
* **Images** – Limits uploads to images and shows a preview thumbnail.

##### Associated Files / Associated Images

* Defines the entity which is used to store the files or images. Needs to be a specialization of **System.FileDocument** or **System.Image**.
* By default, use **FileUploader.UploadedFile** for upload mode Files and **FileUploader.UploadedImage** for upload mode Images.

##### Read-Only Mode

If set to **Yes**, the widget only displays the associated files or images. The drop zone is hidden, so users cannot upload new files. The default value is **No**.

When read-only mode is enabled, the **Action to create new files**, **Allowed file formats**, **Maximum number of files**, **Maximum concurrent uploads**, **Maximum file size (MB)**, and **Object creation timeout** properties are not available.

##### Action to Create New Files / Action to Create New Images

* Configuration to set up the nanoflow which creates an associated file object and commits it.
* By default, calls **Nanoflow ACT_CreateUploadedFileDocument** for a **Files** upload mode and **ACT_CreateUploadedImageDocument** for an **Images** upload mode.

##### Allowed File Formats

This configuration is only shown for the **Files** upload mode. Users can manually set restrictions on the allowed file types. If the list is empty, there are no restrictions.

Each allowed file format has the following properties:

* **Configuration mode** – Determines how the file format is defined:
    * **Simple** – Select a **Predefined type**. This is the default.
    * **Advanced** – Define the file format with **Mime Type**, **Extensions list**, and **Type description**.
* **Predefined type** – The available options are **PDF Document (.pdf)** (default), **Microsoft Word (.doc and .docx)**, **Microsoft Excel (.xls and .xlsx)**, **Microsoft PowerPoint (.ppt and .pptx)**, **Plain Text (.txt)**, **CSV (.csv)**, **Zip archive**, **Text file**, **Image**, **Audio**, and **Video**.
* **Mime Type** – The MIME type of the file format, for example `image/jpeg` or `application/pdf`.
* **Extensions list** – A comma-separated list of extensions, for example `.jpg,.jpeg`. When you combine a wildcard MIME type with extensions, for example `image/*` with `.png`, only files with those extensions are accepted.
* **Type description** – The text shown to end-users to describe the supported file types.

##### Maximum Number of Files

This configuration sets a limit on how many files can be associated in total. It is an expression, and the default value is **10**. Leave it empty or set it to 0 to allow an unlimited number of files.

When the limit is reached, the drop zone shows the **File limit reached** message. If users add more files than allowed, only the excess files are rejected.

##### Maximum Concurrent Uploads

This configuration sets the maximum number of files that upload at the same time. Remaining files wait in a queue and upload automatically when a slot becomes available. It is an expression. Leave it empty or set it to 0 to allow an unlimited number of concurrent uploads.

##### Maximum File Size (MB)

This configuration sets a maximum limit on the file size of uploaded files. The default value is **25**.

#### Texts Tab {#texttab}

Configures the displayed text used in **File Uploader**. The following texts are available:

* **Dropzone message**
* **Dropzone hover for uploadable files**
* **Dropzone hover for non uploadable files**
* **Uploading in progress**
* **Upload queued** – Shown on files that are waiting in the upload queue.
* **Uploading success**
* **Uploading unknown error**
* **Invalid file format**
* **File is too big**
* **Too many files**
* **File limit reached** – Shown when the maximum number of files is reached.
* **Action to create new files is not available or failed**
* **Download button**
* **Remove button**
* **Retry button** – The tooltip of the retry button shown on rejected files.
* **File removal success** – Announced to screen reader users when a file is removed. This text is not shown in the file list.
* **File removal failure**

#### Advanced Tab {#advanced}

##### Object Creation Timeout

Configures the timeout to wait until object creation has failed. The value is in seconds. The default value is **10**.

##### On Upload Success

This action runs after a successful upload. When uploading multiple files at once, it will run for every successfully uploaded file, and this file will be passed as an argument to the action.

##### On Upload Failure

This action runs when an upload to the server started, but failed during the process. The created object will be passed to the action. This is useful to perform cleanups from empty, dangling objects that were created but did not have content uploaded to them.

By default, this calls the **ACT_DeleteUploadedFileDocument** nanoflow for the **Files** upload mode and the **ACT_DeleteUploadedImageDocument** nanoflow for the **Images** upload mode.

{{% alert color="info" %}}
This action will not run if a validation error occurred on the client side, for example, if a provided file was too big or had an incorrect extension. 
{{% /alert %}}

##### Enable Custom Buttons

Allows the use of custom action buttons that will be displayed on the right side of the file list instead of the standard buttons. If set to **Yes**, the default action buttons will be hidden. The default value is **No**.

##### Custom Buttons

This configuration is only shown when **Enable custom buttons** is set to **Yes**. Adds custom buttons that will be used in the file uploader:

* **Caption** – Caption text configuration for the custom button.
* **Icon** – Provides icon configuration for the custom button.
* **Action** – Provides **On click** action configuration for the custom button.
* **Default file action** – If set to **Yes**, the action in the button will be used as the default click action for the file.
* **Visible** – An expression that determines if the button is visible. If it returns **false**, the button will be hidden. The default value is **true**.

### Nanoflows

This module includes the following predefined nanoflows:

#### ACT_CreateUploadedFileDocument

This nanoflow will attach an uploaded file to the context object.

#### ACT_CreateUploadedImageDocument

This nanoflow will attach an uploaded image to the context object.

#### ACT_DeleteUploadedFileDocument

This nanoflow is the default **On upload failure** action for the **Files** upload mode.

#### ACT_DeleteUploadedImageDocument

This nanoflow is the default **On upload failure** action for the **Images** upload mode.
