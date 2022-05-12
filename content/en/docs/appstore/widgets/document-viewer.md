---
title: "Document Viewer"
url: /appstore/widgets/document-viewer/
category: "Widgets"
description: "Documentation for Document Viewer widget. Describes the usecase, features, and configuration of the Document Viewer widget which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "document", "viewer", "platform support", "pdf", "preview"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---



## 1 Introduction {#introduction}

The Document Viewer widget allows you to preview document content. 

### 1.1 Features {#features}

* Preview documents from storage
* Preview external documents (by using static URL)

{{% alert color="alert" %}} 
This widget only supports previews of PDF documents. 
{{% /alert%}}

## 2 Configuration {#configuration}

### 2.1 Data Source {#data-source}

#### 2.1.1 Type {#data-source-type}

This property controls the data source type:

* **File**: when set to **File** you need to provide file entity to enable preview, which should be an object of entity `System.FileDocument` or its specialization (for more information, see the [Generalization](/refguide/entities/#generalization) section of the *Entities Reference Guide*)
* **URL**: when set to **URL**, the document URL string must be provided to enable preview

### 2.2 Dimensions	{#dimensions}

#### 2.2.1 Width Unit {#width-unit}

This property controls type of unit for measuring widget with. It can be **percentage** or **pixels**.

#### 2.2.2 Width {#width}

This property controls width of the widget.

#### 2.2.3 Height Unit {#height-unit}

Hight unit controls type of unit for measuring widget height. Possible values are:

* **Percentage of width** — height is measured relative to widget width (use this mode to keep width and height in aspect ratio).
* **Pixels** — use pixels as the height unit (a good default option for most cases).
* **Percentage of parent** — height is measured relative to the parent's `height` property (this only works when the parent has the `height` CSS property).


#### 2.2.4 Height {#height}

This property controls height of the widget.
