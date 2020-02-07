---
title: "Document Viewer"
category: "Widgets"
description: "Describes the configuration and usage of the Document Viewer widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "document viewer", "platform support"]
draft: true
---

## 1 Introduction

The [Document Viewer](https://appstore.home.mendix.com/link/app/12/) widget enables embedding and viewing any `System.FileDocument` object inside a page. By using microflows or the file downloader in Studio Pro, documents can be opened as downloaded or inside a new window. And with this widget, files can be opened inside data views.

### 1.1 Typical Usage Scenarios

With this widget, you can display uploaded images, PDFs, or office documents on your app pages.

### 1.2 Limitations

The widget tries to display a document inside a page. However, it may fail to do this, since browser settings determine whether a document can be opened inside a page. In such cases, a download pop-up window is opened. For example, Internet Explorer may succeed in opening a *.doc* file inside a page and fail in opening a *.png* image, while exactly the opposite may be true for FireFox.

## 2 Configuration

This widget should be used inside a data view, with a domain object which is a specialization (descendant) of *System.FileDocument*.

## 3 Properties

### 3.1 Appearance Tab

#### 3.1.1 Title

This is the caption of the viewer.

#### 3.1.2 Width

This is the width of the viewer in pixels. Use *0* for auto. The height will depend on the contents.

#### 3.1.3 Height

This is the height of the viewer in pixels. Use *0* to determine the width automatically. This will use any remaining space.
