---
title: "Static Image (Document Template)"
url: /refguide8/static-image-document-template/
tags: ["studio pro"]
aliases:
    - /refguide8/Static+Image+(document+template).html
    - /refguide8/static-image-(document-template).html
    - /refguide8/Static+Image+(document+template)
    - /refguide8/static-image-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/static-image-document-template.pdf).
{{% /alert %}}

## 1 Introduction

A static image shows a predefined image. It can be put either inside or outside a data view or template grid.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918133.png" >}}

A static image inside a table cell.

{{% /alert %}}

## 2 Appearance Properties

### 2.1 Image

This property defines the image that will appear in the document.

### 2.2 Width

The width defines the width of the image in the document. This is set in pixels and using the PPI in the document template this will be recalculated to actual printing size. Either width or height can be set; to prevent distortion of the image it is not possible to set both.

### 2.3 Height

The height defines the height of the image in the document. This is set in pixels and using the PPI in the document template this will be recalculated to actual printing size. Either width or height can be set; to prevent distortion of the image it is not possible to set both.

## 3 Common Properties

{{% snippet file="/static/_includes/refguide8/name-property.md" %}}
