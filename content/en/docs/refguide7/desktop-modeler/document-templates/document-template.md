---
title: "Document Template"
url: /refguide7/document-template/
---


{{% alert color="warning" %}}

This document describes the properties of a document template. If you want to see what document templates are for and what kind of widgets can be placed on them, you can check the [Document Templates](/refguide7/document-templates/) overview documentation.

{{% /alert %}}

## Appearance Properties

### Page format

The page format determines the size of the page you are targeting with the document template. Examples are A4 (portrait) and A5 (landscape). You can also choose a Custom page format and use the properties 'Page width' and 'Page height' below.

### Page width (inch)

The width of the page you are targeting with the document template. Automatically set by choosing a page format. If you change it, the page format will be set to 'Custom'.

### Page height (inch)

The height of the page you are targeting with the document template. Automatically set by choosing a page format. If you change it, the page format will be set to 'Custom'.

### Pixels per inch (PPI)

The pixel density is used to calculate the size of images based on the pixel value.

### Margin left/right/top/bottom (inch)

The margins specify the distance between the border of the paper and the contents on all sides.

### Show header/footer on first page

Indicates whether the header and/or footer are also shown on the first page.

{{% alert color="warning" %}}
Note that you must use a page break widget to indicate you're no longer on the first page. This cannot be calculated while generating content.
{{% /alert %}}

_Default value_: True.

### Enable header

Indicates whether the page has a header that is displayed on each page (except optionally the first).

### Enable footer

Indicates whether the page has a footer that is displayed on each page (except optionally the first).

## Style

See [Style](/refguide7/style/).

## Common Properties

### Name

The name of the document template. You can change the name via the project explorer.

### Documentation

Documentation for the document template.

## Designer Properties

### Canvas width

The canvas width determines the width of the canvas on which you are building the document template in the Modeler. This property has no effect on the application whatsoever.
