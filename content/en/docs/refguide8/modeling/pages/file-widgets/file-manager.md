---
title: "File Manager"
url: /refguide8/file-manager/
parent: "file-widgets"
tags: ["studio pro", "file manager", "file widget", "widget"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/file-manager.pdf).
{{% /alert %}}

{{% alert color="warning" %}}The file manager widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

A file manager is used to upload and/or download files.

![File Manager](/attachments/refguide8/modeling/pages/file-widgets/file-manager/file-manager.png)

It must be placed inside a data view connected to the entity System.FileDocument or a specialization thereof.

{{% alert color="info" %}}
When uploading a file through the file manager, the FileDocument object will be committed immediately.
{{% /alert %}}

## 2 Properties

An example of file manager properties is represented in the image below:

{{% image_container width="250" %}}![File Manager Properties](/attachments/refguide8/modeling/pages/file-widgets/file-manager/file-manager-properties.png)
{{% /image_container %}}

File manager properties consist of the following sections:

* [Common](#common) 

* [Design Properties](#design-properties)

* [Editability](#editability)

* [General](#general)

* [Label](#label)

* [Visibility](#visibility)

### 2.1 Common Section {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### 2.2 Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### 2.3 Editability Section {#editability}

{{% snippet file="/static/_includes/refguide8/editability-section-link.md" %}}

### 2.4 General Section {#general}

#### 2.4.1 Type

The **Type** property indicates how the end-user will be able to use the file manager.

| Value | Description |
| --- | --- |
| Upload | The file manager can only be used to upload a file. |
| Download | The file manager can only be used to download a file. |
| Both *(default)*  | The file manager can be used to both upload and download a file. |

#### 2.4.2 Max File Size (MB)

**Max file size (MB)** determines the maximum size of files (in megabytes) that can be uploaded.

Default: *5*

#### 2.4.3 Allowed Extensions

You can specify file extensions that users are allowed to upload. If no extension is specified, all file extensions are allowed. Separate multiple extensions by a semi-colon, for example, `txt;doc`

If a file with an extension that is not allowed is selected, a [system text](/refguide8/system-texts/) for **File manager/image viewer** > **Error: incorrect file extension** will be shown below the file manager.

#### 2.4.4 Show File in Browser

**Show file in browser** indicates whether a file will be shown in the browser instead of being downloaded.

Default: *False*

### 2.5 Label Section {#label}

{{% snippet file="/static/_includes/refguide8/label-section-link.md" %}}

### 2.6 Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## 3 Read More

* [Page](/refguide8/page/)
* [File Widgets](/refguide8/file-widgets/)
* [Properties Common in the Page Editor](/refguide8/common-widget-properties/)
* [System Texts](/refguide8/system-texts/)
