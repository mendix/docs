---
title: "File Manager"
url: /refguide/file-manager/
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The file manager widget is not supported on native mobile pages.{{% /alert %}}

## Introduction

A file manager is used to upload and/or download files.

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/file-manager/file-manager.png" alt="File Manager" class="no-border" >}}

A file manager must be placed inside a data view connected to the entity that is either a **System.FileDocument** (or a specialization) or an [external entity](/refguide/external-entities/) with a `Contents` binary attribute.

{{% alert color="info" %}}
For an external entity to be used as a file source, it must be defined as a media element in the corresponding OData service. Such an element can be recognized by setting the `HasStream` attribute to `true` in its metadata.  
{{% /alert %}}

{{% alert color="info" %}}
When uploading a file through the file manager, the FileDocument object will be committed immediately. When used inside a form, this happens on submission.

A form is submitted just before a microflow or nanoflow is called or when the page is saved.
{{% /alert %}}

## Properties

An example of file manager properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/file-manager/file-manager-properties.png" alt="File Manager Properties"   width="250"  class="no-border" >}}

File manager properties consist of the following sections:

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

#### Type

The **Type** property indicates how the end-user will be able to use the file manager.

| Value | Description |
| --- | --- |
| Upload | The file manager can only be used to upload a file. |
| Download | The file manager can only be used to download a file. |
| Both *(default)*  | The file manager can be used to both upload and download a file. |

#### Max File Size (MB)

**Max file size (MB)** determines the maximum size of files (in megabytes) that can be uploaded.

Default: *5*

{{% alert color="info" %}}
This value cannot be set arbitrarily high as the platform to which the app is deployed may also impose a limitation on the size of the files that can be uploaded or downloaded.
{{% /alert %}}

#### Allowed Extensions{#allowed-extensions}

You can specify file extensions that users are allowed to upload. If no extension is specified, all file extensions are allowed. Separate multiple extensions by a semi-colon, for example, `txt;doc`

If a file with an extension that is not allowed is selected, a [system text](/refguide/system-texts/) for **File manager/dynamic image** > **Error: incorrect file extension** will be shown below the file manager.

{{% alert color="warning" %}}
The feature to allow extensions is not meant as a security feature, as the file manager widget does not check the contents of a file to see if they match the provided extension. For more information, see the [Scanning Uploaded Files for Malicious Content](/howto/security/best-practices-security/#scanning-for-malicious-content) section of *How to Implement Best Practices for App Security*.
{{% /alert %}}

#### Show File in Browser

**Show file in browser** indicates whether a file will be shown in the browser instead of being downloaded.

Default: *False*

### Label Section {#label}

{{% snippet file="/static/_includes/refguide/label-section-link.md" %}}

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

## Example of File Manager Usage

A file manager needs to be placed in a data view or a snippet that is connected to System.File or is a specialization of it. 

For that you can create an entity in your domain model and define that it is a file entity. This is done by the concept of *inheritance*, sometimes called *generalization*. By inheriting from System.File your entity gets all the properties of the system file entity. 

Do the following:

1. Open your domain model and create an entity that you would like to define as a file entity.

2. Double-click the entity to open its properties.

3. In the **Generalization** property, click **Select**.

4. In the **Select Entity** dialog box, choose **System.File** and click the **Select** button.

5. Click **OK**. Your entity now inherits all properties from the System.File entity you selected:

   {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/file-manager/entity-example.png" class="no-border" >}}

6. Open a page or a snippet where you would like to place the file manager and add a data view there.

7. Set the file entity you have created in your domain model as data view's data source. 

8. Place the file manager inside the data view. You can reference the page example below:

   {{< figure src="/attachments/refguide/modeling/pages/image-and-file-widgets/file-manager/page-example.png" class="no-border" >}}

## Read More

* [Page](/refguide/page/)
* [Images, Videos, and Files](/refguide/image-and-file-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
* [System Texts](/refguide/system-texts/)
