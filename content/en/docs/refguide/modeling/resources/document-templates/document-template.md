---
title: "Document Template"
url: /refguide/document-template/
tags: ["studio pro"]
---

## 1 Introduction

This document describes the properties of a document template. If you want to see what document templates are for and what kind of widgets can be placed on them, you can check the [Document Templates](/refguide/document-templates/) overview documentation.

## 2 Appearance Properties {#appearance-properties}

### 2.1 Page Format

The page format determines the size of the page you are targeting with the document template. Examples are A4 (portrait) and A5 (landscape). You can also choose a Custom page format and use the properties [Page width](#width) and [Page height](#height) below.

### 2.2 Page Width (Inch) {#width}

The width of the page you are targeting with the document template. Automatically set by choosing a page format. If you change it, the page format will be set to 'Custom'.

### 2.3 Page Height (Inch) {#height}

The height of the page you are targeting with the document template. Automatically set by choosing a page format. If you change it, the page format will be set to 'Custom'.

### 2.4 Pixels per Inch (PPI)

The pixel density is used to calculate the size of images based on the pixel value.

### 2.5 Margin Left/Right/Top/Bottom (Inch)

The margins specify the distance between the border of the paper and the contents on all sides.

### 2.6 Show Header/Footer on First Page

Indicates whether the header and/or footer are also shown on the first page.

{{% alert color="warning" %}}
You must use a page break widget to indicate you're no longer on the first page. This cannot be calculated while generating content.
{{% /alert %}}

Default: *True.*

### 2.7 Enable Header

Indicates whether the page has a header that is displayed on each page (except optionally the first).

### 2.8 Enable Footer

Indicates whether the page has a footer that is displayed on each page (except optionally the first).

## 3 Style

For details, see [Style](/refguide/style/).

## 4 Common Properties

### 4.1 Name

The name of the document template. You can change the name via the App Explorer.

### 4.2 Documentation

Documentation for the document template.

## 5 Design Properties

### 5.1 Canvas Width

The canvas width determines the width of the canvas on which you are building the document template in Studio Pro. This property has no effect on the application whatsoever.
