---
title: "File Manager"
url: /refguide8/file-manager/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The file manager widget is not supported on native mobile pages.{{% /alert %}}

## Introduction

A file manager is used to upload and/or download files.

{{< figure src="/attachments/refguide8/modeling/pages/file-widgets/file-manager/file-manager.png" alt="File Manager" class="no-border" >}}

It must be placed inside a data view connected to the entity System.FileDocument or a specialization thereof.

{{% alert color="info" %}}
When uploading a file through the file manager, the FileDocument object will be committed immediately.
{{% /alert %}}

## Properties

An example of file manager properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/file-widgets/file-manager/file-manager-properties.png" alt="File Manager Properties"   width="250"  class="no-border" >}}

File manager properties consist of the following sections:

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

#### Allowed Extensions

You can specify file extensions that users are allowed to upload. If no extension is specified, all file extensions are allowed. Separate multiple extensions by a semi-colon, for example, `txt;doc`

If a file with an extension that is not allowed is selected, a [system text](/refguide8/system-texts/) for **File manager/image viewer** > **Error: incorrect file extension** will be shown below the file manager.

{{% alert color="warning" %}}
The feature to allow extensions is not meant as a security feature, as the file manager widget does not check the contents of a file to see if they match the provided extension. For more information, see the [Scanning Uploaded Files for Malicious Content](/howto8/security/best-practices-security/#scanning-for-malicious-content) section of *How to Implement Best Practices for App Security*.
{{% /alert %}}

{{% alert color="warning" %}}
Although it is **not** in the list of approved file extensions, File Manager erroneously allows the *.xls* extension. This happens when the *.xlsx* extension is in the accepted list and an *.xls* file is selected from the **All files** option. This is due to your operating system's way of handling the **All files** option, and it cannot be changed.
{{% /alert %}}

#### Show File in Browser

**Show file in browser** indicates whether a file will be shown in the browser instead of being downloaded.

Default: *False*

### Label Section {#label}

{{% snippet file="/static/_includes/refguide8/label-section-link.md" %}}

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## Read More

* [Page](/refguide8/page/)
* [File Widgets](/refguide8/file-widgets/)
* [Properties Common in the Page Editor](/refguide8/common-widget-properties/)
* [System Texts](/refguide8/system-texts/)
