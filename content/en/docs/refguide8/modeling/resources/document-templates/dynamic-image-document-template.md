---
title: "Dynamic Image (Document Template)"
url: /refguide8/dynamic-image-document-template/
tags: ["studio pro"]
aliases:
    - /refguide8/Dynamic+Image+(document+template).html
    - /refguide8/dynamic-image-(document-template).html
    - /refguide8/Dynamic+Image+(document+template)
    - /refguide8/dynamic-image-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/dynamic-image-document-template.pdf).
{{% /alert %}}

## 1 Introduction

A dynamic image can be used to show a System.Image. If the image is not available (for example: the image was never saved) it will show the preset default image. It can be put inside a data view or templategrid.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918132.png" >}}
A dynamic image inside a table cell, showing the preset default image.

{{% /alert %}}

## 2 Appearance Properties

### 2.1 Default Image

The default image is the image that will appear in the document when the dynamic image could not be found (when the entity that specializes the System.Image entity does not contain an actual image.)

### 2.2 Use Thumbnail

Here you can select whether to use the thumbnail in the document or the full image.

### 2.3 Width

The width defines the width of the image in the document. This is set in pixels and using the PPI in the document template this will be recalculated to actual printing size. Either width or height can be set; to prevent distortion of the image it is not possible to set both.

### 2.4 Height

The height defines the height of the image in the document. This is set in pixels and using the PPI in the document template this will be recalculated to actual printing size. Either width or height can be set; to prevent distortion of the image it is not possible to set both.

## 3 Common Properties

{{% snippet file="/static/_includes/refguide8/name-property.md" %}}
