---
title: "Document Template"
url: /refguide8/document-template/
---

## Introduction

This document describes the properties of a document template. If you want to see what document templates are for and what kind of widgets can be placed on them, you can check the [Document Templates](/refguide8/document-templates/) overview documentation.

## Appearance Properties {#appearance-properties}

### Page Format

The page format determines the size of the page you are targeting with the document template. Examples are A4 (portrait) and A5 (landscape). You can also choose a Custom page format and use the properties [Page width](#width) and [Page height](#height) below.

### Page Width (Inch) {#width}

The width of the page you are targeting with the document template. Automatically set by choosing a page format. If you change it, the page format will be set to 'Custom'.

### Page Height (Inch) {#height}

The height of the page you are targeting with the document template. Automatically set by choosing a page format. If you change it, the page format will be set to 'Custom'.

### Pixels per Inch (PPI)

The pixel density is used to calculate the size of images based on the pixel value.

### Margin Left/Right/Top/Bottom (Inch)

The margins specify the distance between the border of the paper and the contents on all sides.

### Show Header/Footer on First Page

Indicates whether the header and/or footer are also shown on the first page.

{{% alert color="warning" %}}
You must use a page break widget to indicate you're no longer on the first page. This cannot be calculated while generating content.
{{% /alert %}}

Default: *True.*

### Enable Header

Indicates whether the page has a header that is displayed on each page (except optionally the first).

### Enable Footer

Indicates whether the page has a footer that is displayed on each page (except optionally the first).

## Style

For details, see [Style](/refguide8/style/).

## Common Properties

### Name

The name of the document template. You can change the name via the project explorer.

### Documentation

Documentation for the document template.

## Design Properties

### Canvas Width

The canvas width determines the width of the canvas on which you are building the document template in Studio Pro. This property has no effect on the application whatsoever.
