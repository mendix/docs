---
title: "Static Label (Document Template)"
url: /refguide/static-label-document-template/
tags: ["studio pro"]
aliases:
    - /refguide/Static+label+(document+template).html
    - /refguide/static-label-(document-template).html
    - /refguide/Static+label+(document+template)
    - /refguide/static-label-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A static label shows a line of static text. You can use it to place custom text inside a data view, template grid or table.

For example, a label with text 'Customer name' will be look like this:

{{< figure src="/attachments/refguide/modeling/resources/document-templates/918130.png" >}}

If you want to insert the current page number or the total page count in your document, you can use a token inside a static label (and only in a static label).

For example, static label content `Page [%pageNumber%] of [%totalPageCount%]` will print **Page 2 of 4**.

## 2 Common Properties

{{% snippet file="/static/_includes/refguide/name-property.md" %}}

## 3 Appearance Properties

### 3.1 Caption

This is the value that will be displayed in the document.

### 3.2 Style

For details, see [Style](/refguide/style/).
