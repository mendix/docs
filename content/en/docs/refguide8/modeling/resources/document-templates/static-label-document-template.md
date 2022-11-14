---
title: "Static Label (Document Template)"
url: /refguide8/static-label-document-template/
tags: ["studio pro"]
aliases:
    - /refguide8/Static+label+(document+template).html
    - /refguide8/static-label-(document-template).html
    - /refguide8/Static+label+(document+template)
    - /refguide8/static-label-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/static-label-document-template.pdf).
{{% /alert %}}

## 1 Introduction

A static label shows a line of static text. You can use it to place custom text inside a data view, template grid or table.

For example, a label with text 'Customer name' will be look like this:

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918130.png" >}}

If you want to insert the current page number or the total page count in your document, you can use a token inside a static label (and only in a static label).

For example, static label content `Page [%pageNumber%] of [%totalPageCount%]` will print **Page 2 of 4**.

## 2 Common Properties

{{% snippet file="/static/_includes/refguide8/name-property.md" %}}

## 3 Appearance Properties

### 3.1 Caption

This is the value that will be displayed in the document.

### 3.2 Style

For details, see [Style](/refguide8/style/).
