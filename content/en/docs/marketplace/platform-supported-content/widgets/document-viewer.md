---
title: "Document Viewer"
url: /appstore/widgets/document-viewer/
description: "Describes the configuration and usage of the Document Viewer widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Document Viewer](https://marketplace.mendix.com/link/component/240853/) widget allows user to take System.File and display it in an HTML format:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/document-viewer/documentviewer-pdf.png" alt="Example" >}}

### Features

Supported file types: 

* **PDF**
* **Docx**
* **Xlsx**
* **Plain Text**
* **Images**
    * All image file types, such as but not limited to JPEG, PNG, GIF, BMP, TIFF, and WebP.

## Configuration

To configure this widget, follow these steps:

1. Place the document viewer in a data view, list view, or a template grid with a data source that has a **System.File** attribute that stores the supported files.
1. Double-click the document viewer widget to open the **Edit Document Viewer** dialog box.
1. Configure the widget using the properties described in the sections below.

### General Tab

* **Data source**
    * **Document** (required) – Sets a [File](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#file) attribute to load into document viewer.

## Dimension

These are the dimension configurations for document viewer:

* **Width** — Determines the width size for the document viewer. The developer can choose to use either pixels (px), percentage (%), or **Fit to content**.
* **Height** — Determine the height size for the document viewer. The developer can choose to use either pixels (px), percentage (%), or **Viewport** (vp). Choosing setting to **Auto** will allow the developer to set minimum and maximum heights instead.
* **Minimum Height** — Determines the minimum size for the custom charts container.
* **Maximum Height** — Determines the maximum size for the custom charts container.
* **Vertical Overflow** — If maximum height is set, vertical overflow will determine the widget's behavior to show overflowing content if that content exceeded the maximum height allowed.

### Common Tab

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.

## Limitation

This widget is not intended to replace the standalone file viewer application. Instead, it is designed more for quick preview purposes. Thus, some limitations of viewing the file in a browser apply:

* **PDF**
    * The widget uses [pdf.js](https://github.com/mozilla/pdf.js) to convert pdf files into HTML5 format. Any limitation to pdf.js will apply.
* **Docx**
    * The widget will display a simple preview content from a docx file. Failure to display embedded content such as Charts or external link images can occur.
    * The Word 1997-2003 document format (*.doc) is not supported.
* **Excel**
    * The widget is only able to display the first sheet from an xlsx document.
    * The Excel 1997-2003 document format (*.xls) is not supported.
