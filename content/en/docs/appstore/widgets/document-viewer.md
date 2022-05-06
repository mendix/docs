---
title: "Document Viewer"
url: /appstore/widgets/document-viewer/
category: "Widgets"
description: "Documentation for Document Viewer widget. Describes the usecase, features, and configuration of the Document Viewer widget which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "document", "viewer", "platform support", "pdf", "preview"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---



## 1 Introduction {#introduction}

The Document Viewer widget allows you to preivew document content. 

### 1.1 Features {#features}

- Preview documents form storage
- Preivew external documents (by using static URL)

{{% alert color="warning" %}} **Warning:** This widget currntly only support previewing of PDF documents. {{% /alert%}}

## 2 Configuration {#configuration}

### 2.1 Data source {#data-source}

#### 2.1.1 Type {#data-source-type}

This property controls type of the datasourec.  Coulde be one of: `File` or `URL`.

- When it set to `File` you need to provide file entity, which should be an object of entity `System.FileDocument` or its specialization. See [Generalization](/refguide/entities/#generalization) section of Entities guide for more details.

- When it set to `URL` you need to provide document url string.

### 2.2 Dimensions	{#dimensions}

#### 2.2.1 Width unit {#width-unit}

Width unit controls type of unit for measuring widget with. Could be `percentage` or `pixels`.

#### 2.2.2 Width {#width}

This property controls width of the widget.

#### 2.2.3 Height unit {#heigh-unit}

Hight unit controls type of unit for measuring widget height. Possible values are:

- `Percentage of width` — height is measuring relative to widget width (use this mode when you need to keep width and height in aspect ratio).
- `Pixels` — use pixels as height unit (good option for most cases).
- `Percentage of parent` — height is measuring relative to parent `height` property (only works when parent have `height` CSS property).


#### 2.2.4 Height {#heigh}

This property controls height of the widget.
