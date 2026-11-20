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

The viewer has a toolbar with the following controls:

* **Download** – downloads the file
* **Zoom in**, **Zoom out**, and **Fit to width** – change the zoom level of the document
* For PDF files only:
    * **Go to previous page** and **Go to next page** – move between pages; you can also type a page number to go to that page
    * **Search in document** – searches the text of the PDF, highlights the matches, and moves between matches across pages with **Previous match** and **Next match**; the search is not case-sensitive

## Configuration

To configure this widget, follow these steps:

1. Place the document viewer in a data view, list view, or a template grid with a data source that has a **System.File** attribute that stores the supported files.
   1. Make sure the attribute **DeleteAfterDownload** is set to false.
1. Double-click the document viewer widget to open the **Edit Document Viewer** dialog box.
1. Configure the widget using the properties described in the sections below.

### General Tab

* **Data source**
    * **Document** (required) – Sets a [File](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#file) attribute to load into document viewer.

## Dimension

These are the dimension configurations for document viewer:

* **Width unit** and **Width** – Determines the width size for the document viewer. The developer can choose to use either **Pixels** (px), **Percentage** (%), or **Fit to content** (default). **Width** (default: 100) is not used with **Fit to content**.
* **Height unit** and **Height** – Determine the height size for the document viewer. The developer can choose to use either **Pixels** (px), **Percentage** (%) of the parent, or **Viewport** (vp), and set the value in **Height** (default: 250). Choosing **Auto** (default) will allow the developer to set minimum and maximum heights instead.
* **Minimum height unit** and **Minimum height** – Determines the minimum size for the document viewer when **Height unit** is **Auto**. The options are **None** (default), **Pixels**, **Percentage**, and **Viewport**. **Minimum height** defaults to 250.
* **Maximum height unit** and **Maximum height** – Determines the maximum size for the document viewer when **Height unit** is **Auto**. The options are **None** (default), **Pixels**, **Percentage**, and **Viewport**. **Maximum height** defaults to 250.
* **Vertical overflow** – If maximum height is set, vertical overflow will determine the widget's behavior to show overflowing content if that content exceeded the maximum height allowed. The options are **Auto** (default), **Scroll**, and **Hidden**.

## Advanced {#advanced}

The **Advanced** tab allows you to configure settings for features beyond the normal configurations:

* **PDF.js worker URL** – Configures the path for PDF.js worker script. This worker script is needed to render PDF type document using a [PDF.js](https://github.com/mozilla/pdf.js?tab=readme-ov-file#including-via-a-cdn) library. 
    * If left empty, the document viewer widget will retrieve the PDF.js worker from the unpkg CDN, using the PDF.js version bundled with the widget: `//unpkg.com/pdfjs-dist@<version>/build/pdf.worker.min.mjs` (for example, version 5.4.296 for Document Viewer version 1.3.0).
    * Alternatively, users can grab `pdf.worker.mjs` from `{LOCAL DEV PROJECT FOLDER HERE}/deployment/web/widgets/com/mendix/shared/pdfjs/pdf.worker.mjs`, put it into their own `App Module -> Styling/web/js/pdf.worker.mjs` file, and then set `./js/pdf.worker.mjs` as the worker URL configuration. This is the recommended practice to support [CSP](/howto/security/csp/).

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
